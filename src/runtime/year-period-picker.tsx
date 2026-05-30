/** @jsx jsx */
import { React, jsx } from 'jimu-core'
import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
  DropdownItem
} from 'jimu-ui'
import { formatPeriodLabel, toggleConsecutiveYear } from '../utils/prodes-table'
import { PERIOD_MENU_MAX_HEIGHT, pickerStyles, periodMenuStyles } from './styles'

export interface YearPeriodPickerProps {
  availableYears: number[]
  selectedYears: number[]
  placeholder: string
  hint?: string | null
  onChange: (years: number[]) => void
  onRejectedSelection?: () => void
}

export const YearPeriodPicker = React.memo((props: YearPeriodPickerProps) => {
  const {
    availableYears,
    selectedYears,
    placeholder,
    hint,
    onChange,
    onRejectedSelection
  } = props

  const selectedSet = React.useMemo(
    () => new Set(selectedYears),
    [selectedYears]
  )

  const summary =
    selectedYears.length > 0
      ? formatPeriodLabel(selectedYears)
      : placeholder

  const handleToggle = React.useCallback(
    (year: number) => {
      const { next, rejected } = toggleConsecutiveYear(selectedYears, year)
      if (rejected) {
        onRejectedSelection?.()
        return
      }
      onChange(next)
    },
    [selectedYears, onChange, onRejectedSelection]
  )

  return (
    <div css={pickerStyles}>
      <Dropdown
        fluid
        menuItemCheckMode="multiCheck"
        activeIcon
        className="w-100"
      >
        <DropdownButton size="sm" className="w-100 dropdown-toggle">
          <span className="text-truncate">{summary}</span>
        </DropdownButton>
        <DropdownMenu
          className="comparador-period-menu"
          css={periodMenuStyles}
          maxHeight={PERIOD_MENU_MAX_HEIGHT}
        >
          {availableYears.map((year) => (
            <DropdownItem
              key={year}
              active={selectedSet.has(year)}
              toggle={false}
              onClick={() => handleToggle(year)}
            >
              {year}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
      {hint && <div className="comparador-period-hint">{hint}</div>}
    </div>
  )
})

YearPeriodPicker.displayName = 'YearPeriodPicker'
