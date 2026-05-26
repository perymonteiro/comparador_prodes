import type { ImmutableObject } from 'seamless-immutable'

export interface Config {
  /** Campo que identifica o ano em cada registro (ex.: "ano") */
  yearField?: string
  /** Nome do atributo = recorte geográfico selecionado (coluna da matriz) */
  recorteField?: string
}

export type IMConfig = ImmutableObject<Config>
