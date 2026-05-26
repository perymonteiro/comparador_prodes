# Comparador Prodes

Widget customizada para **ArcGIS Experience Builder** que compara a variação de desmatamento PRODES/Inpe entre dois períodos (anos ou intervalos de anos consecutivos), a partir de uma Feature Layer tabular.

Desenvolvida com contribuição da equipe **CGCD/DPCD** — **MMA**.

Repositório: [github.com/perymonteiro/comparador_prodes](https://github.com/perymonteiro/comparador_prodes)

| | |
|---|---|
| **Versão** | 1.0.0 |
| **Experience Builder** | 1.18.0 |
| **Autor** | Thyego Pery |

---

## Funcionalidades

- Comparação de desmatamento entre **período inicial** e **período final**
- Seleção de **um ou mais anos consecutivos** por período (valores somados)
- Cálculo automático da **variação percentual** entre os períodos
- Unidade de medida: **km²**
- Indicação visual da variação:
  - **Vermelho** — aumento de desmatamento (variação positiva)
  - **Verde** — redução de desmatamento (variação negativa)
- Botão **Limpar** para reiniciar a seleção de períodos
- Configuração pelo autor da experience: camada PRODES + recorte geográfico

---

## Modelo de dados esperado

A camada conectada deve ser uma **Feature Layer** no formato **largo** (matriz):

| Formato principal | Estrutura |
|-------------------|-----------|
| **Linha = ano** | Cada registro representa um ano; colunas numéricas representam recortes geográficos (ex.: `cerrado`, `amazonia_legal`, `pampa`) |

Exemplo:

| ano  | cerrado | amazonia_legal | pampa |
|------|---------|----------------|-------|
| 2008 | 100,5   | 500,2          | null  |
| 2009 | 120,0   | 510,0          | 10,5  |

- A coluna de ano costuma se chamar `ano` (detectada automaticamente)
- Células vazias são válidas — nem todo recorte possui dado em todos os anos
- A tabela pode crescer com novos anos ou recortes ao longo do tempo

> **Formato alternativo:** uma linha por recorte e colunas com anos (`2008`, `2009`, …) também é suportado quando aplicável.

---

## Configuração (autor da experience)

No painel de configuração da widget:

1. **Camada PRODES (Feature Layer)** — selecione a camada tabular com os dados PRODES
2. **Recorte geográfico (coluna)** — escolha a coluna numérica do recorte desejado (ex.: Cerrado, Amazônia legal, Pantanal)

O campo `ano` é detectado e salvo automaticamente; não é necessário configurá-lo manualmente.

---

## Uso (usuário final)

1. Abra a widget na experience publicada
2. Em **Ano inicial ou período inicial**, selecione um ou mais anos consecutivos
3. Em **Ano final ou período final**, selecione a mesma quantidade de anos consecutivos, **posteriores** ao período inicial
4. A variação percentual e os totais em km² são exibidos automaticamente
5. Use **Limpar** para remover todas as seleções

### Regras de seleção de períodos

| Regra | Descrição |
|-------|-----------|
| Anos consecutivos | Dentro de cada período, os anos devem formar uma sequência sem lacunas (ex.: 2010, 2011, 2012) |
| Mesma quantidade | O período inicial e o final devem ter o **mesmo número de anos** |
| Sem sobreposição | Um ano não pode pertencer aos dois períodos ao mesmo tempo |
| Ordem temporal | O período final deve ser **posterior** ao período inicial |
| Soma por período | Vários anos no mesmo período têm os valores **somados** antes do cálculo |

### Fórmula da variação percentual

```
Variação (%) = ((Soma_final − Soma_inicial) / Soma_inicial) × 100
```

Exemplo: período inicial 2008–2009 (100 + 150 = 250 km²) e final 2018–2019 (400 + 500 = 900 km²) → variação de **+260%**.

---

## Estrutura do projeto

```
comparador_prodes/
├── manifest.json
├── config.json
├── icon.svg
├── README.md
├── src/
│   ├── config.ts                 # yearField, recorteField
│   ├── constants.ts              # textos e mensagens da UI
│   ├── setting/
│   │   └── setting.tsx           # painel de configuração
│   ├── runtime/
│   │   ├── widget.tsx            # componente principal
│   │   ├── year-period-picker.tsx
│   │   ├── styles.ts
│   │   ├── components/
│   │   │   └── variation-result.tsx
│   │   └── hooks/
│   │       ├── use-prodes-series.ts
│   │       └── use-period-selection.ts
│   └── utils/
│       ├── prodes-table.ts       # leitura da camada e cálculos
│       ├── data-source.ts        # helpers Jimu/ArcGIS
│       └── format.ts             # formatação de área e cores
└── tests/
    ├── prodes-table.test.ts
    └── simple-widget.test.tsx
```

---

## Desenvolvimento

### Pré-requisitos

- Node.js e npm do projeto **exb-client** (`c:\_exbuilder\client`)
- ArcGIS Experience Builder 1.18.0

### Compilar

Na raiz do client:

```bash
npm run build:dev
```

Para desenvolvimento com recarga automática:

```bash
npm start
```

### Testes

```bash
npx jest your-extensions/widgets/comparador_prodes/tests --runInBand
```

---

## Mensagens comuns

| Mensagem | Causa provável |
|----------|----------------|
| *Esta ferramenta ainda não foi configurada…* | Camada ou recorte não definidos no builder |
| *Não há dados disponíveis para este recorte* | Coluna do recorte vazia para todos os anos |
| *Os anos selecionados devem ser consecutivos* | Tentativa de selecionar anos com lacuna na sequência |
| *O período inicial e o final devem ter a mesma quantidade de anos* | Quantidades diferentes de anos entre os períodos |
| *A soma do período inicial é zero…* | Impossível calcular percentual com valor inicial zero |

---

## Licença

MIT — ver [LICENSE](LICENSE). Código sob direitos do autor; dados e marcas institucionais permanecem sob responsabilidade da MMA.

## Segurança

Consulte [SECURITY.md](SECURITY.md) para política de reporte de vulnerabilidades e o que não deve ser commitado no repositório.
