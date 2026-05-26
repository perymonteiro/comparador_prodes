/** @jsx jsx */
import { React, jsx } from 'jimu-core'
import {
  formatPercentVariation,
  formatPeriodRangeLabel,
  type VariationResult
} from '../../utils/prodes-table'
import { formatArea, getVariationTone } from '../../utils/format'

interface VariationResultProps {
  data: VariationResult
}

export const VariationResultPanel = ({ data }: VariationResultProps) => {
  const tone = getVariationTone(data.pct)

  return (
    <div className="comparador-result">
      <div className="comparador-result-title">
        Variação percentual (
        {formatPeriodRangeLabel(data.yearsInicial)} →{' '}
        {formatPeriodRangeLabel(data.yearsFinal)})
      </div>
      <div className={`comparador-result-value comparador-result-value--${tone}`}>
        {formatPercentVariation(data.pct)}
      </div>
      <div className="comparador-result-detail">
        {formatArea(data.valueInicial)} no período inicial →{' '}
        {formatArea(data.valueFinal)} no período final
      </div>
    </div>
  )
}
