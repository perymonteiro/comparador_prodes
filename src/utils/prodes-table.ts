import {
  type IMFieldSchema,
  type IMDataSourceSchema,
  JimuFieldType,
  EsriFieldType,
  QueryScope,
  type DataRecord
} from 'jimu-core'

export interface YearValueRow {
  year: number
  value: number
}

export interface FieldAttributeKeys {
  yearKey: string
  recorteKey: string
}

export const DEFAULT_YEAR_FIELD = 'ano'

const YEAR_NAME_PATTERNS = ['ano', 'year', 'yr', 'exercicio', 'exercício']

export function isEmptyCell (value: unknown): boolean {
  if (value == null) return true
  if (typeof value === 'string' && value.trim() === '') return true
  if (typeof value === 'number' && Number.isNaN(value)) return true
  return false
}

export function parseNumericValue (value: unknown): number | null {
  if (isEmptyCell(value)) return null
  if (typeof value === 'number' && Number.isFinite(value)) return value
  if (typeof value === 'string') {
    const s = value.trim()
    if (!s) return null
    if (s.includes(',')) {
      const normalized = s.replace(/\./g, '').replace(',', '.')
      const n = Number(normalized)
      return Number.isFinite(n) ? n : null
    }
    const n = Number(s)
    return Number.isFinite(n) ? n : null
  }
  return null
}

export function parseYear (value: unknown): number | null {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.getFullYear()
  }
  if (typeof value === 'number' && Number.isFinite(value)) return Math.trunc(value)
  if (typeof value === 'string') {
    const s = value.trim()
    if (!s) return null
    const n = Number(s)
    if (Number.isFinite(n)) return Math.trunc(n)
    const m = s.match(/\b(19|20)\d{2}\b/)
    if (m) return Number(m[0])
  }
  return null
}

export function schemaToFieldList (schema?: IMDataSourceSchema | null): IMFieldSchema[] {
  if (!schema?.fields) return []
  return Object.keys(schema.fields).map((key) => schema.fields[key])
}

export function isNumericRecorteField (field: IMFieldSchema): boolean {
  if (field.type === JimuFieldType.Number) return true
  const esri = field.esriType
  return (
    esri === EsriFieldType.Double ||
    esri === EsriFieldType.Single ||
    esri === EsriFieldType.Integer ||
    esri === EsriFieldType.SmallInteger
  )
}

export function getAttributeKey (field: IMFieldSchema): string {
  return field.name || field.jimuName
}

export function detectYearField (fields: IMFieldSchema[]): string | null {
  const exactAno = fields.find(
    (f) =>
      f.jimuName?.toLowerCase() === 'ano' ||
      f.name?.toLowerCase() === 'ano' ||
      f.alias?.toLowerCase() === 'ano'
  )
  if (exactAno) return exactAno.jimuName

  const candidates = fields.filter(
    (f) => f.type === JimuFieldType.Number || f.type === JimuFieldType.String
  )
  for (const pat of YEAR_NAME_PATTERNS) {
    const found = candidates.find(
      (f) =>
        f.jimuName?.toLowerCase() === pat ||
        f.name?.toLowerCase() === pat ||
        f.alias?.toLowerCase() === pat
    )
    if (found) return found.jimuName
  }
  return null
}

export function formatRecorteLabel (field: IMFieldSchema): string {
  return formatRecorteLabelFromName(field.jimuName, field.alias)
}

export function formatRecorteLabelFromName (jimuName: string, alias?: string): string {
  if (alias?.trim()) return alias.trim()
  return jimuName
    .split('_')
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ')
}

export function getSystemHiddenFieldNames (fields: IMFieldSchema[]): string[] {
  return fields
    .filter((f) => {
      const esri = f.esriType
      return (
        esri === EsriFieldType.OID ||
        esri === EsriFieldType.Geometry ||
        esri === EsriFieldType.GlobalID ||
        esri === EsriFieldType.GUID
      )
    })
    .map((f) => f.jimuName)
}

export function getRecorteHiddenFieldNames (
  fields: IMFieldSchema[],
  yearField?: string
): string[] {
  const hidden = getSystemHiddenFieldNames(fields)
  if (yearField && !hidden.includes(yearField)) {
    hidden.push(yearField)
  }
  return hidden
}

export function getRecorteCandidateFields (
  fields: IMFieldSchema[],
  yearField?: string
): IMFieldSchema[] {
  const hidden = new Set(getRecorteHiddenFieldNames(fields, yearField))
  return fields
    .filter((f) => isNumericRecorteField(f) && !hidden.has(f.jimuName))
    .sort((a, b) =>
      formatRecorteLabel(a).localeCompare(formatRecorteLabel(b), 'pt-BR')
    )
}

export function findFieldByJimuName (
  fields: IMFieldSchema[],
  jimuName?: string
): IMFieldSchema | null {
  if (!jimuName) return null
  const exact = fields.find((f) => f.jimuName === jimuName)
  if (exact) return exact
  const lower = jimuName.toLowerCase()
  return (
    fields.find(
      (f) =>
        f.jimuName?.toLowerCase() === lower ||
        f.name?.toLowerCase() === lower ||
        f.alias?.toLowerCase() === lower
    ) ?? null
  )
}

export function resolveAttributeKeys (
  fields: IMFieldSchema[],
  yearFieldJimu?: string,
  recorteFieldJimu?: string
): FieldAttributeKeys | null {
  if (!yearFieldJimu || !recorteFieldJimu) return null

  const yearField = findFieldByJimuName(fields, yearFieldJimu)
  const recorteField = findFieldByJimuName(fields, recorteFieldJimu)

  return {
    yearKey: yearField ? getAttributeKey(yearField) : yearFieldJimu,
    recorteKey: recorteField ? getAttributeKey(recorteField) : recorteFieldJimu
  }
}

type RecordLike =
  | DataRecord
  | {
      attributes?: Record<string, unknown>
      feature?: { attributes?: Record<string, unknown> }
      getData?: () => {
        attributes?: Record<string, unknown>
        feature?: { attributes?: Record<string, unknown> }
      }
      getFieldValue?: (jimuFieldName: string) => unknown
      getDateFieldValue?: (jimuFieldName: string) => unknown
      getDataBeforeMapping?: () => Record<string, unknown>
    }

function toPlainObject (value: unknown): Record<string, unknown> {
  if (!value || typeof value !== 'object') return {}
  const v = value as {
    toJS?: () => Record<string, unknown>
    asMutable?: (opts?: { deep: boolean }) => Record<string, unknown>
  }
  if (typeof v.toJS === 'function') return v.toJS()
  if (typeof v.asMutable === 'function') return v.asMutable({ deep: true })
  return value as Record<string, unknown>
}

const GET_DATA_META_KEYS = new Set([
  'attributes',
  'feature',
  'geometry',
  'centroid',
  'aggregateGeometries',
  'symbol'
])

/** Extrai o dicionário de atributos de um registro (vários formatos do Jimu/ArcGIS). */
export function getPlainAttributes (rec: RecordLike): Record<string, unknown> {
  const merged: Record<string, unknown> = {}

  const merge = (attrs?: Record<string, unknown>) => {
    if (!attrs) return
    Object.assign(merged, toPlainObject(attrs))
  }

  if ('getData' in rec && typeof rec.getData === 'function') {
    const data = rec.getData()
    const plain = toPlainObject(data)
    merge(plain.attributes as Record<string, unknown> | undefined)
    merge(plain.feature?.attributes as Record<string, unknown> | undefined)
    // Jimu DataRecord: getData() costuma ser mapa plano { jimuFieldName: valor }
    for (const [key, value] of Object.entries(plain)) {
      if (GET_DATA_META_KEYS.has(key)) continue
      if (value !== undefined) merged[key] = value
    }
  }

  if ('feature' in rec && rec.feature?.attributes) {
    merge(rec.feature.attributes)
  }

  if ('attributes' in rec && rec.attributes) {
    merge(rec.attributes)
  }

  if ('getDataBeforeMapping' in rec && typeof rec.getDataBeforeMapping === 'function') {
    merge(rec.getDataBeforeMapping())
  }

  return merged
}

function attributeHasUsableValue (value: unknown): boolean {
  if (isEmptyCell(value)) return false
  if (typeof value === 'object') return false
  return true
}

/** Verifica se o registro expõe atributos ou getFieldValue com dados reais (não só método vazio). */
export function recordHasReadableData (rec: RecordLike): boolean {
  const attrs = getPlainAttributes(rec)
  const usableKeys = Object.keys(attrs).filter((key) => {
    if (/^(objectid|globalid|shape|geometry)$/i.test(key)) return false
    return attributeHasUsableValue(attrs[key])
  })
  if (usableKeys.length > 0) return true

  if ('getFieldValue' in rec && typeof rec.getFieldValue === 'function') {
    const probes = [
      'ano',
      'year',
      'ANO',
      'Year',
      'exercicio',
      'Exercicio'
    ]
    for (const name of probes) {
      try {
        const v = rec.getFieldValue!(name)
        if (attributeHasUsableValue(v)) return true
      } catch {
        // tenta próximo
      }
    }
  }

  return false
}

/** Lê valor pelo API do Jimu (`getFieldValue`) e, em seguida, pelos atributos brutos. */
export function readRecordValue (
  rec: RecordLike,
  field?: IMFieldSchema | null,
  fallbackJimuName?: string
): unknown {
  const names: string[] = []
  if (field?.jimuName) names.push(field.jimuName)
  if (fallbackJimuName) names.push(fallbackJimuName)
  if (field?.name) names.push(field.name)
  if (field?.alias) names.push(field.alias)
  if (field) names.push(getAttributeKey(field))

  const uniqueNames = [...new Set(names.filter(Boolean))]

  if ('getFieldValue' in rec && typeof rec.getFieldValue === 'function') {
    for (const name of uniqueNames) {
      try {
        const v = rec.getFieldValue!(name)
        if (v !== undefined) return v
      } catch {
        // tenta próximo nome
      }
    }
  }

  if (
    field?.jimuName &&
    'getDateFieldValue' in rec &&
    typeof rec.getDateFieldValue === 'function'
  ) {
    try {
      const v = rec.getDateFieldValue!(field.jimuName)
      if (v !== undefined) return v
    } catch {
      // ignora
    }
  }

  const attrs = getPlainAttributes(rec)
  const fromMapped = readAttributeFlexible(attrs, field, fallbackJimuName)
  if (fromMapped !== undefined) return fromMapped

  if ('getDataBeforeMapping' in rec && typeof rec.getDataBeforeMapping === 'function') {
    const raw = toPlainObject(rec.getDataBeforeMapping())
    return readAttributeFlexible(raw, field, fallbackJimuName)
  }

  return undefined
}

function readAttribute (
  attrs: Record<string, unknown>,
  primaryKey: string,
  fallbackKey?: string
): unknown {
  if (primaryKey in attrs) return attrs[primaryKey]
  if (fallbackKey && fallbackKey !== primaryKey && fallbackKey in attrs) {
    return attrs[fallbackKey]
  }
  return undefined
}

/** Tenta jimuName, name, alias e correspondência sem diferenciar maiúsculas/minúsculas. */
export function readAttributeFlexible (
  attrs: Record<string, unknown>,
  field?: IMFieldSchema | null,
  fallbackJimuName?: string
): unknown {
  const candidates = new Set<string>()
  if (field) {
    if (field.jimuName) candidates.add(field.jimuName)
    if (field.name) candidates.add(field.name)
    if (field.alias) candidates.add(field.alias)
    candidates.add(getAttributeKey(field))
  }
  if (fallbackJimuName) candidates.add(fallbackJimuName)

  for (const key of candidates) {
    const v = readAttribute(attrs, key)
    if (v !== undefined) return v
  }

  const attrKeys = Object.keys(attrs)
  for (const key of candidates) {
    const found = attrKeys.find((k) => k.toLowerCase() === key.toLowerCase())
    if (found != null) return attrs[found]
  }
  return undefined
}

type QueriableLayer = {
  query?: (q: object, options?: { scope?: QueryScope }) => Promise<{ records?: DataRecord[] }>
  load?: (q: object, options?: { scope?: QueryScope }) => Promise<DataRecord[]>
  loadAll?: (
    q: object,
    signal?: AbortSignal,
    progressCallback?: unknown,
    options?: { scope?: QueryScope }
  ) => Promise<DataRecord[]>
  getAllLoadedRecords?: () => DataRecord[]
  getRecords?: () => DataRecord[]
  layer?: { queryFeatures?: (q: object) => Promise<{ features?: unknown[] }> }
  buildRecord?: (feature: unknown) => DataRecord
}

const queryOptions = { scope: QueryScope.InAllData }

const buildQueryParams = (
  outFields: string[] = ['*'],
  disableClientQuery = false
) => ({
  where: '1=1',
  outFields,
  returnGeometry: false,
  pageSize: 2000,
  ...(disableClientQuery ? { disableClientQuery: true } : {})
})

function recordsAreReadable (records: DataRecord[]): boolean {
  return records.length > 0 && records.some(recordHasReadableData)
}

async function queryViaJsapiLayer (ds: QueriableLayer): Promise<DataRecord[]> {
  const layer = ds.layer as {
    queryFeatures?: (q: object) => Promise<{ features?: unknown[] }>
    query?: (q: object) => Promise<{ features?: unknown[] }>
  }
  if (!layer || typeof ds.buildRecord !== 'function') return []

  const q = {
    where: '1=1',
    outFields: ['*'],
    returnGeometry: false,
    num: 2000
  }

  try {
    const result =
      typeof layer.queryFeatures === 'function'
        ? await layer.queryFeatures(q)
        : typeof layer.query === 'function'
          ? await layer.query(q)
          : null
    const features = result?.features ?? []
    return features.map((f) => ds.buildRecord!(f))
  } catch {
    return []
  }
}

async function runQueryableMethods (
  ds: QueriableLayer,
  outFields: string[],
  disableClientQuery: boolean
): Promise<DataRecord[]> {
  const params = buildQueryParams(outFields, disableClientQuery)

  if (typeof ds?.load === 'function') {
    try {
      const records = await ds.load(params, queryOptions)
      if (records?.length && recordsAreReadable(records)) return records
      if (records?.length && !disableClientQuery) return records
    } catch {
      // tenta próximo método
    }
  }

  if (typeof ds?.loadAll === 'function') {
    try {
      const records = await ds.loadAll(params, undefined, undefined, queryOptions)
      if (records?.length && recordsAreReadable(records)) return records
      if (records?.length && !disableClientQuery) return records
    } catch {
      // tenta query abaixo
    }
  }

  if (typeof ds?.query === 'function') {
    try {
      const result = await ds.query(params, queryOptions)
      const records = result?.records ?? []
      if (records.length && recordsAreReadable(records)) return records
      if (records.length && !disableClientQuery) return records
    } catch {
      // tenta JS API
    }
  }

  const viaLayer = await queryViaJsapiLayer(ds)
  if (viaLayer.length && recordsAreReadable(viaLayer)) return viaLayer
  if (viaLayer.length && !disableClientQuery) return viaLayer

  return []
}

async function queryAllRecords (
  ds: QueriableLayer,
  outFields: string[] = ['*']
): Promise<DataRecord[]> {
  let records = await runQueryableMethods(ds, outFields, false)
  if (recordsAreReadable(records)) return records

  records = await runQueryableMethods(ds, outFields, true)
  if (recordsAreReadable(records)) return records

  return records
}

export interface FetchLayerRecordsOptions {
  /** Ignora cache do mapa e força query/loadAll (útil no Enterprise). */
  forceQuery?: boolean
  yearFieldJimu?: string
  recorteFieldJimu?: string
  fields?: IMFieldSchema[]
}

function resolveOutFields (
  yearFieldJimu?: string,
  recorteFieldJimu?: string,
  fields?: IMFieldSchema[]
): string[] {
  if (!fields?.length || !yearFieldJimu || !recorteFieldJimu) return ['*']
  const keys = resolveAttributeKeys(fields, yearFieldJimu, recorteFieldJimu)
  if (!keys) return ['*']
  return ['*', keys.yearKey, keys.recorteKey]
}

/** Carrega todos os registros da camada (tabela ano × recortes). */
export async function fetchLayerRecords (
  dataSource: unknown,
  options?: FetchLayerRecordsOptions
): Promise<DataRecord[]> {
  const ds = dataSource as QueriableLayer
  const cached = ds.getAllLoadedRecords?.() ?? ds.getRecords?.() ?? []
  const outFields = resolveOutFields(
    options?.yearFieldJimu,
    options?.recorteFieldJimu,
    options?.fields
  )

  if (!options?.forceQuery && recordsAreReadable(cached)) {
    return cached
  }

  const queried = await queryAllRecords(ds, outFields)
  if (recordsAreReadable(queried)) return queried
  if (queried.length) return queried

  if (!options?.forceQuery) return cached
  return queried.length ? queried : cached
}

function normalizeRecorteToken (value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[\s-]+/g, '_')
}

function isYearNamedField (field: IMFieldSchema): boolean {
  const y =
    parseYear(field.jimuName) ??
    parseYear(field.name) ??
    parseYear(field.alias)
  return y != null && y >= 1985 && y <= 2035
}

function findRecorteNameField (fields: IMFieldSchema[]): IMFieldSchema | null {
  const patterns = ['recorte', 'regiao', 'região', 'bioma', 'nome', 'name', 'label']
  return (
    fields.find((f) => {
      const j = f.jimuName?.toLowerCase() ?? ''
      const n = f.name?.toLowerCase() ?? ''
      return patterns.some((p) => j.includes(p) || n.includes(p))
    }) ?? null
  )
}

/** Layout alternativo: cada registro = recorte; colunas numéricas = anos. */
export function buildYearSeriesFromRecorteRows (
  records: RecordLike[],
  recorteFieldJimu: string,
  fields: IMFieldSchema[]
): YearValueRow[] {
  const yearFields = fields.filter(isYearNamedField)
  if (!yearFields.length) return []

  const target = normalizeRecorteToken(recorteFieldJimu)
  const nameField = findRecorteNameField(fields)

  const row =
    records.find((rec) => {
      if (nameField) {
        const label = readRecordValue(rec, nameField, nameField.jimuName)
        if (label != null && normalizeRecorteToken(String(label)) === target) {
          return true
        }
      }
      for (const f of fields) {
        if (isYearNamedField(f) || f.jimuName === recorteFieldJimu) continue
        const v = readRecordValue(rec, f, f.jimuName)
        if (v != null && normalizeRecorteToken(String(v)) === target) {
          return true
        }
      }
      return false
    }) ?? null

  if (!row) return []

  const series: YearValueRow[] = []
  for (const yf of yearFields) {
    const year =
      parseYear(yf.jimuName) ?? parseYear(yf.name) ?? parseYear(yf.alias)
    const value = parseNumericValue(readRecordValue(row, yf, yf.jimuName))
    if (year == null || value == null) continue
    series.push({ year, value })
  }

  return series.sort((a, b) => a.year - b.year)
}

function buildYearSeriesYearRows (
  records: RecordLike[],
  yearFieldJimu: string,
  recorteFieldJimu: string,
  fields?: IMFieldSchema[]
): YearValueRow[] {
  const yearField = fields?.length
    ? findFieldByJimuName(fields, yearFieldJimu)
    : null
  const recorteField = fields?.length
    ? findFieldByJimuName(fields, recorteFieldJimu)
    : null
  const series: YearValueRow[] = []

  for (const rec of records) {
    const year = parseYear(
      readRecordValue(rec, yearField, yearFieldJimu)
    )
    const value = parseNumericValue(
      readRecordValue(rec, recorteField, recorteFieldJimu)
    )
    if (year == null || value == null) continue

    series.push({ year, value })
  }

  return series.sort((a, b) => a.year - b.year)
}

function collectRecordAttributeKeys (records: RecordLike[]): string[] {
  const keys = new Set<string>()
  for (const rec of records.slice(0, 100)) {
    Object.keys(getPlainAttributes(rec)).forEach((k) => keys.add(k))
  }
  return [...keys]
}

function resolveKeysFromAttributeNames (
  keys: string[],
  yearFieldJimu: string,
  recorteFieldJimu: string
): { yearKey: string; recorteKey: string } | null {
  const recorteKey = keys.find(
    (k) =>
      k.toLowerCase() === recorteFieldJimu.toLowerCase() ||
      normalizeRecorteToken(k) === normalizeRecorteToken(recorteFieldJimu)
  )
  let yearKey = keys.find((k) => k.toLowerCase() === yearFieldJimu.toLowerCase())
  if (!yearKey) {
    yearKey = keys.find((k) =>
      YEAR_NAME_PATTERNS.some(
        (p) => k.toLowerCase() === p || k.toLowerCase().includes(p)
      )
    )
  }
  if (!yearKey || !recorteKey) return null
  return { yearKey, recorteKey }
}

/** Último recurso: infere colunas pelos nomes reais nos atributos retornados. */
export function buildYearSeriesInferred (
  records: RecordLike[],
  yearFieldJimu: string,
  recorteFieldJimu: string
): YearValueRow[] {
  const keys = collectRecordAttributeKeys(records)
  const resolved = resolveKeysFromAttributeNames(keys, yearFieldJimu, recorteFieldJimu)
  if (!resolved) return []

  const series: YearValueRow[] = []
  for (const rec of records) {
    const attrs = getPlainAttributes(rec)
    const year = parseYear(attrs[resolved.yearKey])
    const value = parseNumericValue(attrs[resolved.recorteKey])
    if (year == null || value == null) continue
    series.push({ year, value })
  }
  return series.sort((a, b) => a.year - b.year)
}

export function buildYearSeries (
  records: RecordLike[],
  yearFieldJimu: string,
  recorteFieldJimu: string,
  fields?: IMFieldSchema[]
): YearValueRow[] {
  const yearRows = buildYearSeriesYearRows(
    records,
    yearFieldJimu,
    recorteFieldJimu,
    fields
  )
  if (yearRows.length > 0) return yearRows

  if (fields?.length) {
    const alt = buildYearSeriesFromRecorteRows(records, recorteFieldJimu, fields)
    if (alt.length > 0) return alt
  }

  return buildYearSeriesInferred(records, yearFieldJimu, recorteFieldJimu)
}

export function formatYearsRangeSummary (series: YearValueRow[]): string | null {
  if (!series.length) return null
  const min = series[0].year
  const max = series[series.length - 1].year
  const count = series.length
  if (min === max) return `${min} (${count} ano)`
  return `${min}–${max} (${count} anos)`
}

export function isYearOutOfTypicalRange (year: number): boolean {
  return year < 2001 || year > 2025
}

/** Variação percentual do valor inicial (ano mais antigo) para o final (ano mais recente). */
export function calcPercentVariation (
  valueInicial: number,
  valueFinal: number
): number | null {
  if (!Number.isFinite(valueInicial) || !Number.isFinite(valueFinal)) return null
  if (valueInicial === 0) return null
  return ((valueFinal - valueInicial) / valueInicial) * 100
}

export function formatPercentVariation (pct: number): string {
  const sign = pct > 0 ? '+' : ''
  return `${sign}${pct.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}%`
}

export function getValueForYear (
  series: YearValueRow[],
  year: number
): number | null {
  const row = series.find((r) => r.year === year)
  return row != null ? row.value : null
}

/** Soma os valores dos anos informados; retorna null se algum ano não tiver dado. */
export function sumValuesForYears (
  series: YearValueRow[],
  years: number[]
): number | null {
  if (!years.length) return null
  let sum = 0
  for (const year of years) {
    const value = getValueForYear(series, year)
    if (value == null) return null
    sum += value
  }
  return sum
}

/** Anos disponíveis para o período inicial (antes do período final, se houver). */
export function getYearsAllowedForInicial (
  allYears: number[],
  periodoFinal: number[]
): number[] {
  const blocked = new Set(periodoFinal)
  const maxFinal = periodoFinal.length ? Math.min(...periodoFinal) : Infinity
  return allYears.filter((y) => !blocked.has(y) && y < maxFinal)
}

/** Anos disponíveis para o período final (depois do período inicial, se houver). */
export function getYearsAllowedForFinal (
  allYears: number[],
  periodoInicial: number[]
): number[] {
  const blocked = new Set(periodoInicial)
  const minInicial = periodoInicial.length ? Math.max(...periodoInicial) : -Infinity
  return allYears.filter((y) => !blocked.has(y) && y > minInicial)
}

/** Marca/desmarca um ano mantendo apenas sequências consecutivas. */
export function toggleConsecutiveYear (
  period: number[],
  year: number
): { next: number[]; rejected: boolean } {
  if (period.includes(year)) {
    return { next: period.filter((y) => y !== year), rejected: false }
  }
  const next = [...period, year].sort((a, b) => a - b)
  if (!areConsecutiveYears(next)) {
    return { next: period, rejected: true }
  }
  return { next, rejected: false }
}

/** Verifica se os anos formam uma sequência consecutiva (ex.: 2010, 2011, 2012). */
export function areConsecutiveYears (years: number[]): boolean {
  if (years.length <= 1) return true
  const sorted = [...years].sort((a, b) => a - b)
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] - sorted[i - 1] !== 1) return false
  }
  return true
}

/** Rótulo compacto para um ou mais anos (ex.: "2010" ou "2010–2012 (3 anos)"). */
export function formatPeriodLabel (years: number[]): string {
  const sorted = [...years].sort((a, b) => a - b)
  if (!sorted.length) return ''
  if (sorted.length === 1) return String(sorted[0])
  return `${sorted[0]}–${sorted[sorted.length - 1]} (${sorted.length} anos)`
}

/** Intervalo de anos sem contagem (ex.: "2010" ou "2010–2012") — uso em resultados. */
export function formatPeriodRangeLabel (years: number[]): string {
  const sorted = [...years].sort((a, b) => a - b)
  if (!sorted.length) return ''
  if (sorted.length === 1) return String(sorted[0])
  return `${sorted[0]}–${sorted[sorted.length - 1]}`
}

export interface VariationResult {
  pct: number
  valueInicial: number
  valueFinal: number
  yearsInicial: number[]
  yearsFinal: number[]
}

export type PeriodVariationOutcome =
  | { ok: true; data: VariationResult }
  | { ok: false; message: string }

export function computePeriodVariation (
  series: YearValueRow[],
  periodoInicial: number[],
  periodoFinal: number[]
): PeriodVariationOutcome {
  const ini = [...periodoInicial].sort((a, b) => a - b)
  const fin = [...periodoFinal].sort((a, b) => a - b)

  if (!ini.length || !fin.length) {
    return {
      ok: false,
      message: 'Selecione pelo menos um ano em cada período.'
    }
  }

  if (ini.length !== fin.length) {
    return {
      ok: false,
      message:
        'O período inicial e o período final devem ter a mesma quantidade de anos.'
    }
  }

  if (!areConsecutiveYears(ini)) {
    return {
      ok: false,
      message: 'Os anos do período inicial devem ser consecutivos.'
    }
  }

  if (!areConsecutiveYears(fin)) {
    return {
      ok: false,
      message: 'Os anos do período final devem ser consecutivos.'
    }
  }

  const iniSet = new Set(ini)
  if (fin.some((y) => iniSet.has(y))) {
    return {
      ok: false,
      message: 'Um ano não pode pertencer aos dois períodos ao mesmo tempo.'
    }
  }

  const maxInicial = ini[ini.length - 1]
  const minFinal = fin[0]
  if (maxInicial >= minFinal) {
    return {
      ok: false,
      message: 'O período final deve ser posterior ao período inicial.'
    }
  }

  const valueInicial = sumValuesForYears(series, ini)
  const valueFinal = sumValuesForYears(series, fin)

  if (valueInicial == null || valueFinal == null) {
    return {
      ok: false,
      message:
        'Um ou mais anos selecionados não possuem dado para este recorte.'
    }
  }

  const pct = calcPercentVariation(valueInicial, valueFinal)
  if (pct == null) {
    return {
      ok: false,
      message:
        'A soma do período inicial é zero; não é possível calcular a variação percentual.'
    }
  }

  return {
    ok: true,
    data: {
      pct,
      valueInicial,
      valueFinal,
      yearsInicial: ini,
      yearsFinal: fin
    }
  }
}

/** Comparação entre dois anos únicos (atalho para períodos de um ano). */
export function computeVariation (
  series: YearValueRow[],
  anoInicial: number,
  anoFinal: number
): PeriodVariationOutcome {
  return computePeriodVariation(series, [anoInicial], [anoFinal])
}
