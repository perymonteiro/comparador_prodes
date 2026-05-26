import { AREA_UNIT } from '../constants'

export const formatArea = (value: number): string =>
  `${value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })} ${AREA_UNIT}`

export type VariationTone = 'positive' | 'negative' | 'neutral'

export const getVariationTone = (pct: number): VariationTone => {
  if (pct > 0) return 'positive'
  if (pct < 0) return 'negative'
  return 'neutral'
}
