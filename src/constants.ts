import { Immutable } from 'jimu-core'

export const AREA_UNIT = 'km²'

/** Consulta padrão: todos os registros da tabela PRODES (padrão EXB). */
export const PRODES_TABLE_QUERY = Immutable({
  where: '1=1',
  outFields: ['*'],
  returnGeometry: false,
  pageSize: 2000
})

export const LABEL_PERIODO_INICIAL = 'Ano inicial ou período inicial'
export const LABEL_PERIODO_FINAL = 'Ano final ou período final'

export const MSG_NOT_CONFIGURED =
  'Esta ferramenta ainda não foi configurada pelo autor da experiência.'

export const MSG_NO_DATA = 'Não há dados disponíveis para este recorte.'

export const MSG_LOAD_FAILED = 'Não foi possível carregar os dados da camada.'

export const MSG_LOADING_TABLE = 'Carregando dados da tabela PRODES…'

export const MSG_INVALID_RECORTE =
  'Recorte geográfico inválido na configuração. Abra as configurações desta widget e selecione o recorte novamente.'

export const MSG_EXTRACT_FAILED =
  'Registros encontrados, mas não foi possível extrair ano e valores para este recorte. ' +
  'Confirme se a tabela tem uma linha por ano (coluna "ano") ou uma linha por recorte (colunas com anos), ' +
  'e se a coluna do recorte possui valores preenchidos.'

export const HINT_CONSECUTIVO = 'Os anos selecionados devem ser consecutivos.'

export const HINT_PERIOD_RULES =
  'Os dois períodos devem ter a mesma quantidade de anos consecutivos, sem repetição entre eles.'

export const PLACEHOLDER_PERIODO_INICIAL = 'Selecione o(s) ano(s) do período inicial'
export const PLACEHOLDER_PERIODO_FINAL = 'Selecione o(s) ano(s) do período final'
