import { React } from 'jimu-core'
import {
  computePeriodVariation,
  getYearsAllowedForFinal,
  getYearsAllowedForInicial,
  type YearValueRow
} from '../../utils/prodes-table'
import { HINT_CONSECUTIVO } from '../../constants'

export function usePeriodSelection (
  series: YearValueRow[],
  availableYears: number[],
  recorteField?: string
) {
  const [periodoInicial, setPeriodoInicial] = React.useState<number[]>([])
  const [periodoFinal, setPeriodoFinal] = React.useState<number[]>([])
  const [hintInicial, setHintInicial] = React.useState<string | null>(null)
  const [hintFinal, setHintFinal] = React.useState<string | null>(null)

  const yearsForInicial = React.useMemo(
    () => getYearsAllowedForInicial(availableYears, periodoFinal),
    [availableYears, periodoFinal]
  )

  const yearsForFinal = React.useMemo(
    () => getYearsAllowedForFinal(availableYears, periodoInicial),
    [availableYears, periodoInicial]
  )

  const variation = React.useMemo(() => {
    if (!periodoInicial.length || !periodoFinal.length) return null
    return computePeriodVariation(series, periodoInicial, periodoFinal)
  }, [periodoInicial, periodoFinal, series])

  const hasPeriodSelection =
    periodoInicial.length > 0 || periodoFinal.length > 0

  const clearPeriodSelection = React.useCallback(() => {
    setPeriodoInicial([])
    setPeriodoFinal([])
    setHintInicial(null)
    setHintFinal(null)
  }, [])

  const handlePeriodoInicialChange = React.useCallback((years: number[]) => {
    setPeriodoInicial(years)
    setHintInicial(null)
  }, [])

  const handlePeriodoFinalChange = React.useCallback((years: number[]) => {
    setPeriodoFinal(years)
    setHintFinal(null)
  }, [])

  const rejectPeriodoInicial = React.useCallback(() => {
    setHintInicial(HINT_CONSECUTIVO)
  }, [])

  const rejectPeriodoFinal = React.useCallback(() => {
    setHintFinal(HINT_CONSECUTIVO)
  }, [])

  React.useEffect(() => {
    setPeriodoInicial([])
    setPeriodoFinal([])
    setHintInicial(null)
    setHintFinal(null)
  }, [recorteField])

  React.useEffect(() => {
    if (!periodoInicial.length || !periodoFinal.length) return
    const allowed = new Set(getYearsAllowedForFinal(availableYears, periodoInicial))
    const filtered = periodoFinal.filter((y) => allowed.has(y))
    if (filtered.length !== periodoFinal.length) {
      setPeriodoFinal(filtered)
    }
  }, [periodoInicial, periodoFinal, availableYears])

  return {
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
  }
}
