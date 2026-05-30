/** @jsx jsx */
import {
  React,
  jsx,
  type AllWidgetProps,
  DataSourceComponent,
  QueryScope
} from 'jimu-core'
import { Loading, Label, Button } from 'jimu-ui'
import type { IMConfig } from '../config'
import { normalizeRecorteFieldConfig } from '../utils/recorte-config'
import {
  LABEL_PERIODO_FINAL,
  LABEL_PERIODO_INICIAL,
  HINT_PERIOD_RULES,
  MSG_NOT_CONFIGURED,
  MSG_NO_DATA,
  PLACEHOLDER_PERIODO_FINAL,
  PLACEHOLDER_PERIODO_INICIAL,
  PRODES_TABLE_QUERY
} from '../constants'
import { VariationResultPanel } from './components/variation-result'
import { useProdesSeries } from './hooks/use-prodes-series'
import { usePeriodSelection } from './hooks/use-period-selection'
import { widgetStyles } from './styles'
import { YearPeriodPicker } from './year-period-picker'

const Widget = (props: AllWidgetProps<IMConfig>) => {
  const useDs = props.useDataSources?.[0]
  const yearField = props.config?.yearField
  const recorteField = normalizeRecorteFieldConfig(props.config?.recorteField)

  const {
    series,
    loading,
    loadingMessage,
    error,
    handleDataSourceReady,
    handleDataSourceInfoChange,
    applySchema,
    waitingForLayer
  } = useProdesSeries({ recorteField, yearField, widgetId: props.id })

  const availableYears = React.useMemo(
    () => series.map((r) => r.year),
    [series]
  )

  const {
    periodoInicial,
    periodoFinal,
    yearsForInicial,
    yearsForFinal,
    hintInicial,
    hintFinal,
    variation,
    hasPeriodSelection,
    clearPeriodSelection,
    handlePeriodoInicialChange,
    handlePeriodoFinalChange,
    rejectPeriodoInicial,
    rejectPeriodoFinal
  } = usePeriodSelection(series, availableYears, recorteField)

  const isConfigured = Boolean(useDs && recorteField)
  const showForm =
    isConfigured && !loading && !waitingForLayer && !error && series.length > 0

  return (
    <div className="widget-comparador-prodes jimu-widget" css={widgetStyles}>
      {useDs && (
        <DataSourceComponent
          useDataSource={useDs}
          widgetId={props.id}
          query={PRODES_TABLE_QUERY}
          queryScope={QueryScope.InAllData}
          queryAll
          onDataSourceCreated={handleDataSourceReady}
          onDataSourceSchemaChange={(schema) => {
            applySchema(schema)
          }}
          onDataSourceInfoChange={handleDataSourceInfoChange}
        />
      )}

      {!isConfigured && <p>{MSG_NOT_CONFIGURED}</p>}

      {isConfigured && (loading || waitingForLayer) && (
        <div>
          <Loading />
          {loadingMessage && (
            <p className="comparador-hint">{loadingMessage}</p>
          )}
        </div>
      )}

      {isConfigured && error && <p className="comparador-error">{error}</p>}

      {isConfigured &&
        !loading &&
        !waitingForLayer &&
        !error &&
        series.length === 0 && <p>{MSG_NO_DATA}</p>}

      {showForm && (
        <div className="comparador-form">
          <div className="comparador-field-row">
            <Label>{LABEL_PERIODO_INICIAL}</Label>
            <YearPeriodPicker
              availableYears={yearsForInicial}
              selectedYears={periodoInicial}
              placeholder={PLACEHOLDER_PERIODO_INICIAL}
              hint={hintInicial}
              onChange={handlePeriodoInicialChange}
              onRejectedSelection={rejectPeriodoInicial}
            />
          </div>

          <div className="comparador-field-row">
            <Label>{LABEL_PERIODO_FINAL}</Label>
            <YearPeriodPicker
              availableYears={yearsForFinal}
              selectedYears={periodoFinal}
              placeholder={PLACEHOLDER_PERIODO_FINAL}
              hint={hintFinal}
              onChange={handlePeriodoFinalChange}
              onRejectedSelection={rejectPeriodoFinal}
            />
            <div className="comparador-hint">{HINT_PERIOD_RULES}</div>
          </div>

          <div className="comparador-actions">
            <Button
              size="sm"
              type="secondary"
              className="comparador-btn-limpar"
              disabled={!hasPeriodSelection}
              onClick={clearPeriodSelection}
            >
              Limpar
            </Button>
          </div>

          {variation != null && variation.ok === false && (
            <p className="comparador-error comparador-error--block">
              {variation.message}
            </p>
          )}

          {variation != null && variation.ok === true && (
            <VariationResultPanel data={variation.data} />
          )}
        </div>
      )}
    </div>
  )
}

export default Widget
