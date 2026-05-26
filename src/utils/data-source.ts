import {
  type DataSource,
  type IMDataSourceSchema,
  DataSourceStatus
} from 'jimu-core'

type DataSourceWithMain = DataSource & {
  getMainDataSource?: () => DataSource
  getSchema?: () => IMDataSourceSchema
}

export const isQueryableStatus = (status?: DataSourceStatus): boolean =>
  status === DataSourceStatus.Loaded ||
  status === DataSourceStatus.Unloaded ||
  status === DataSourceStatus.NotReady

export const getMainDataSource = (ds: DataSource | null): DataSource | null => {
  if (!ds) return null
  const main = (ds as DataSourceWithMain).getMainDataSource?.()
  return main ?? ds
}

export const getDataSourceSchema = (
  ds: DataSource
): IMDataSourceSchema | undefined =>
  (ds as DataSourceWithMain).getSchema?.()
