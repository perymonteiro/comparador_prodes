import {
  React,
  type DataSource,
  type IMDataSourceSchema,
  DataSourceStatus
} from 'jimu-core'
import {
  attributeRowsScore,
  buildYearSeriesFromAttributeRows,
  buildYearSeriesFromRecords,
  describeRowsForExtractError,
  detectYearField,
  fetchLayerRecords,
  forceLoadProdesRows,
  schemaToFieldList,
  type YearValueRow
} from '../../utils/prodes-table'
import {
  ensureDataSourceSchema,
  getQueryableDataSource,
  isProdesDataReady
} from '../../utils/data-source'
import {
  MSG_EXTRACT_FAILED,
  MSG_LOAD_FAILED,
  MSG_LOADING_TABLE
} from '../../constants'

export interface UseProdesSeriesParams {
  recorteField?: string
  yearField?: string
  widgetId?: string
}

export function useProdesSeries ({
  recorteField,
  yearField,
  widgetId
}: UseProdesSeriesParams) {
  const [dsRef, setDsRef] = React.useState<DataSource | null>(null)
  const [dsStatus, setDsStatus] = React.useState<DataSourceStatus | undefined>(undefined)
  const [fieldList, setFieldList] = React.useState(
    [] as ReturnType<typeof schemaToFieldList>
  )
  const [series, setSeries] = React.useState<YearValueRow[]>([])
  const [loading, setLoading] = React.useState(false)
  const [loadingMessage, setLoadingMessage] = React.useState<string | null>(null)
  const [error, setError] = React.useState<string | null>(null)
  const [dsInfoVersion, setDsInfoVersion] = React.useState<number | undefined>(
    undefined
  )

  const effectiveYearField = yearField ?? detectYearField(fieldList)
  const effectiveRecorteField = recorteField?.trim() || undefined

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
    if (!main || !effectiveYearField || !effectiveRecorteField) {
      setSeries([])
      return
    }

    if (!isProdesDataReady(dsStatus)) return

    setLoading(true)
    setLoadingMessage(MSG_LOADING_TABLE)
    setError(null)
    const fetchOpts = {
      yearFieldJimu: effectiveYearField,
      recorteFieldJimu: effectiveRecorteField,
      fields: fieldList.length > 0 ? fieldList : undefined,
      widgetId
    }

    try {
      const records = await fetchLayerRecords(main, {
        ...fetchOpts,
        forceQuery: true
      })
      let built = buildYearSeriesFromRecords(
        records,
        effectiveYearField,
        effectiveRecorteField,
        fieldList.length > 0 ? fieldList : undefined
      )

      let attributeRows: Record<string, unknown>[] = []
      if (built.length === 0) {
        attributeRows = await forceLoadProdesRows(main, fetchOpts)
        built = buildYearSeriesFromAttributeRows(
          attributeRows,
          effectiveYearField,
          effectiveRecorteField,
          fieldList.length > 0 ? fieldList : undefined
        )
      }

      setSeries(built)

      if (built.length === 0) {
        const rows =
          attributeRows.length > 0
            ? attributeRows
            : await forceLoadProdesRows(main, fetchOpts)
        if (rows.length === 0 && records.length === 0) {
          setError(MSG_LOAD_FAILED)
        } else if (rows.length > 0 && attributeRowsScore(rows) <= 1) {
          setError(MSG_LOAD_FAILED)
        } else {
          setError(
            MSG_EXTRACT_FAILED +
              describeRowsForExtractError(
                rows.length > 0 ? rows : records.map((r) => r.getData()?.attributes ?? {}),
                effectiveRecorteField,
                fieldList.length > 0 ? fieldList : undefined
              )
          )
        }
      }
    } catch {
      setError(MSG_LOAD_FAILED)
      setSeries([])
    } finally {
      setLoading(false)
      setLoadingMessage(null)
    }
  }, [
    dsRef,
    dsStatus,
    effectiveYearField,
    effectiveRecorteField,
    fieldList,
    widgetId
  ])

  const handleDataSourceInfoChange = React.useCallback(
    (info: { status?: DataSourceStatus; version?: number }) => {
      setDsStatus(info?.status)
      if (info?.version != null) {
        setDsInfoVersion(info.version)
      }
    },
    []
  )

  React.useEffect(() => {
    if (!effectiveRecorteField || !effectiveYearField || !dsRef) return
    if (!isProdesDataReady(dsStatus)) return
    loadSeries()
  }, [
    effectiveRecorteField,
    effectiveYearField,
    dsRef,
    dsStatus,
    dsInfoVersion,
    fieldList,
    loadSeries
  ])

  const waitingForLayer =
    !dsRef ||
    dsStatus === DataSourceStatus.Loading ||
    dsStatus === DataSourceStatus.NotReady ||
    dsStatus === DataSourceStatus.Unloaded

  return {
    series,
    loading,
    loadingMessage,
    error,
    handleDataSourceReady,
    handleDataSourceInfoChange,
    applySchema,
    waitingForLayer
  }
}
