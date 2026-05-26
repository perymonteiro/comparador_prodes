import { React } from 'jimu-core'
import _Widget from '../src/runtime/widget'
import { widgetRender, wrapWidget } from 'jimu-for-test'

const render = widgetRender()
describe('test comparador_prodes widget', () => {
  it('shows message when widget is not configured', () => {
    const Widget = wrapWidget(_Widget, { config: {} })
    const { queryByText } = render(<Widget widgetId="Widget_1" />)
    expect(
      queryByText(/ainda não foi configurada/i)?.tagName
    ).toBe('P')
  })

})
