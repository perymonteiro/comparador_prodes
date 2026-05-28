import {
  React,
  type DataSource,
  type IMDataSourceSchema,
  DataSourceStatus
} from 'jimu-core'
import {
  buildYearSeries,
  detectYearField,
  fetchLayerRecords,
  schemaToFieldList,
  type YearValueRow
} from '../../utils/prodes-table'
import {
  getDataSourceSchema,
  getMainDataSource,
  isQueryableStatus
} from '../../utils/data-source'
import {
  MSG_EXTRACT_FAILED,
  MSG_LOAD_FAILED
} from '../../constants'

export interface UseProdesSeriesParams {
  recorteField?: string
  yearField?: string
}

export function useProdesSeries ({ recorteField, yearField }: UseProdesSeriesParams) {
  const [dsRef, setDsRef] = React.useState<DataSource | null>(null)
  const [dsStatus, setDsStatus] = React.useState<DataSourceStatus | undefined>(undefined)
  const [fieldList, setFieldList] = React.useState(
    [] as ReturnType<typeof schemaToFieldList>
  )
  const [series, setSeries] = React.useState<YearValueRow[]>([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  const effectiveYearField = yearField ?? detectYearField(fieldList)

  const applySchema = React.useCallback((schema: IMDataSourceSchema) => {
    setFieldList(schemaToFieldList(schema))
  }, [])

  const handleDataSourceReady = React.useCallback((ds: DataSource) => {
    setDsRef(ds)
    const schema = getDataSourceSchema(ds)
    if (schema) applySchema(schema)
  }, [applySchema])

  const loadSeries = React.useCallback(async () => {
    const main = getMainDataSource(dsRef)
    if (!main || !effectiveYearField || !recorteField) {
      setSeries([])
      return
    }

    if (!isQueryableStatus(dsStatus)) return

    setLoading(true)
    setError(null)
    const fetchOpts = {
      yearFieldJimu: effectiveYearField,
      recorteFieldJimu: recorteField,
      fields: fieldList
    }

    try {
      let records = await fetchLayerRecords(main, fetchOpts)
      let built = buildYearSeries(
        records,
        effectiveYearField,
        recorteField,
        fieldList
      )

      if (records.length > 0 && built.length === 0) {
        const forced = await fetchLayerRecords(main, { ...fetchOpts, forceQuery: true })
        if (forced.length) {
          records = forced
          built = buildYearSeries(
            forced,
            effectiveYearField,
            recorteField,
            fieldList
          )
        }
      }

      setSeries(built)

      if (records.length > 0 && built.length === 0) {
        setError(MSG_EXTRACT_FAILED)
      }
    } catch {
      setError(MSG_LOAD_FAILED)
      setSeries([])
    } finally {
      setLoading(false)
    }
  }, [dsRef, dsStatus, effectiveYearField, fieldList, recorteField])

  React.useEffect(() => {
    if (!recorteField || !effectiveYearField || !dsRef) return
    if (!isQueryableStatus(dsStatus)) return
    loadSeries()
  }, [recorteField, effectiveYearField, dsRef, dsStatus, fieldList, loadSeries])

  const waitingForLayer = !dsRef || dsStatus === DataSourceStatus.Loading

  return {
    series,
    loading,
    error,
    handleDataSourceReady,
    applySchema,
    setDsStatus,
    waitingForLayer
  }
}
