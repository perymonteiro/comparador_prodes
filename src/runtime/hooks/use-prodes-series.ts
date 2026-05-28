import {
  React,
  type DataSource,
  type IMDataSourceSchema,
  DataSourceStatus
} from 'jimu-core'
import {
  buildYearSeriesFromAttributeRows,
  detectYearField,
  fetchProdesAttributeRows,
  schemaToFieldList,
  type YearValueRow
} from '../../utils/prodes-table'
import {
  ensureDataSourceSchema,
  getQueryableDataSource,
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
    void ensureDataSourceSchema(ds).then((schema) => {
      if (schema) applySchema(schema)
    })
  }, [applySchema])

  const loadSeries = React.useCallback(async () => {
    const main = getQueryableDataSource(dsRef)
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
      let rows = await fetchProdesAttributeRows(main, fetchOpts)
      let built = buildYearSeriesFromAttributeRows(
        rows,
        effectiveYearField,
        recorteField,
        fieldList
      )

      if (rows.length > 0 && built.length === 0) {
        rows = await fetchProdesAttributeRows(main, { ...fetchOpts, forceQuery: true })
        built = buildYearSeriesFromAttributeRows(
          rows,
          effectiveYearField,
          recorteField,
          fieldList
        )
      }

      setSeries(built)

      if (rows.length > 0 && built.length === 0) {
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
