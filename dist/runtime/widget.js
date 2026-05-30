System.register(["jimu-core","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/comparador_prodes/src/constants.ts":
/*!********************************************************************!*\
  !*** ./your-extensions/widgets/comparador_prodes/src/constants.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AREA_UNIT: () => (/* binding */ AREA_UNIT),
/* harmony export */   HINT_CONSECUTIVO: () => (/* binding */ HINT_CONSECUTIVO),
/* harmony export */   HINT_PERIOD_RULES: () => (/* binding */ HINT_PERIOD_RULES),
/* harmony export */   LABEL_PERIODO_FINAL: () => (/* binding */ LABEL_PERIODO_FINAL),
/* harmony export */   LABEL_PERIODO_INICIAL: () => (/* binding */ LABEL_PERIODO_INICIAL),
/* harmony export */   MSG_EXTRACT_FAILED: () => (/* binding */ MSG_EXTRACT_FAILED),
/* harmony export */   MSG_INVALID_RECORTE: () => (/* binding */ MSG_INVALID_RECORTE),
/* harmony export */   MSG_LOADING_TABLE: () => (/* binding */ MSG_LOADING_TABLE),
/* harmony export */   MSG_LOAD_FAILED: () => (/* binding */ MSG_LOAD_FAILED),
/* harmony export */   MSG_NOT_CONFIGURED: () => (/* binding */ MSG_NOT_CONFIGURED),
/* harmony export */   MSG_NO_DATA: () => (/* binding */ MSG_NO_DATA),
/* harmony export */   PLACEHOLDER_PERIODO_FINAL: () => (/* binding */ PLACEHOLDER_PERIODO_FINAL),
/* harmony export */   PLACEHOLDER_PERIODO_INICIAL: () => (/* binding */ PLACEHOLDER_PERIODO_INICIAL),
/* harmony export */   PRODES_TABLE_QUERY: () => (/* binding */ PRODES_TABLE_QUERY)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

const AREA_UNIT = 'km²';
/** Consulta padrão: todos os registros da tabela PRODES (padrão EXB). */
const PRODES_TABLE_QUERY = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
    where: '1=1',
    outFields: ['*'],
    returnGeometry: false,
    pageSize: 2000
});
const LABEL_PERIODO_INICIAL = 'Ano inicial ou período inicial';
const LABEL_PERIODO_FINAL = 'Ano final ou período final';
const MSG_NOT_CONFIGURED = 'Esta ferramenta ainda não foi configurada pelo autor da experiência.';
const MSG_NO_DATA = 'Não há dados disponíveis para este recorte.';
const MSG_LOAD_FAILED = 'Não foi possível carregar os dados da camada.';
const MSG_LOADING_TABLE = 'Carregando dados da tabela PRODES…';
const MSG_INVALID_RECORTE = 'Recorte geográfico inválido na configuração. Abra as configurações desta widget e selecione o recorte novamente.';
const MSG_EXTRACT_FAILED = 'Registros encontrados, mas não foi possível extrair ano e valores para este recorte. ' +
    'Confirme se a tabela tem uma linha por ano (coluna "ano") ou uma linha por recorte (colunas com anos), ' +
    'e se a coluna do recorte possui valores preenchidos.';
const HINT_CONSECUTIVO = 'Os anos selecionados devem ser consecutivos.';
const HINT_PERIOD_RULES = 'Os dois períodos devem ter a mesma quantidade de anos consecutivos, sem repetição entre eles.';
const PLACEHOLDER_PERIODO_INICIAL = 'Selecione o(s) ano(s) do período inicial';
const PLACEHOLDER_PERIODO_FINAL = 'Selecione o(s) ano(s) do período final';


/***/ }),

/***/ "./your-extensions/widgets/comparador_prodes/src/runtime/components/variation-result.tsx":
/*!***********************************************************************************************!*\
  !*** ./your-extensions/widgets/comparador_prodes/src/runtime/components/variation-result.tsx ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VariationResultPanel: () => (/* binding */ VariationResultPanel)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _utils_prodes_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/prodes-table */ "./your-extensions/widgets/comparador_prodes/src/utils/prodes-table.ts");
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/format */ "./your-extensions/widgets/comparador_prodes/src/utils/format.ts");
/** @jsx jsx */



const VariationResultPanel = ({ data }) => {
    const tone = (0,_utils_format__WEBPACK_IMPORTED_MODULE_2__.getVariationTone)(data.pct);
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "comparador-result" },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "comparador-result-title" },
            "Varia\u00E7\u00E3o percentual (",
            (0,_utils_prodes_table__WEBPACK_IMPORTED_MODULE_1__.formatPeriodRangeLabel)(data.yearsInicial),
            " \u2192",
            ' ',
            (0,_utils_prodes_table__WEBPACK_IMPORTED_MODULE_1__.formatPeriodRangeLabel)(data.yearsFinal),
            ")"),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: `comparador-result-value comparador-result-value--${tone}` }, (0,_utils_prodes_table__WEBPACK_IMPORTED_MODULE_1__.formatPercentVariation)(data.pct)),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "comparador-result-detail" },
            (0,_utils_format__WEBPACK_IMPORTED_MODULE_2__.formatArea)(data.valueInicial),
            " no per\u00EDodo inicial \u2192",
            ' ',
            (0,_utils_format__WEBPACK_IMPORTED_MODULE_2__.formatArea)(data.valueFinal),
            " no per\u00EDodo final")));
};


/***/ }),

/***/ "./your-extensions/widgets/comparador_prodes/src/runtime/hooks/use-period-selection.ts":
/*!*********************************************************************************************!*\
  !*** ./your-extensions/widgets/comparador_prodes/src/runtime/hooks/use-period-selection.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   usePeriodSelection: () => (/* binding */ usePeriodSelection)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _utils_prodes_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/prodes-table */ "./your-extensions/widgets/comparador_prodes/src/utils/prodes-table.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./your-extensions/widgets/comparador_prodes/src/constants.ts");



function usePeriodSelection(series, availableYears, recorteField) {
    const [periodoInicial, setPeriodoInicial] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState([]);
    const [periodoFinal, setPeriodoFinal] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState([]);
    const [hintInicial, setHintInicial] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(null);
    const [hintFinal, setHintFinal] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(null);
    const yearsForInicial = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => (0,_utils_prodes_table__WEBPACK_IMPORTED_MODULE_1__.getYearsAllowedForInicial)(availableYears, periodoFinal), [availableYears, periodoFinal]);
    const yearsForFinal = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => (0,_utils_prodes_table__WEBPACK_IMPORTED_MODULE_1__.getYearsAllowedForFinal)(availableYears, periodoInicial), [availableYears, periodoInicial]);
    const variation = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => {
        if (!periodoInicial.length || !periodoFinal.length)
            return null;
        return (0,_utils_prodes_table__WEBPACK_IMPORTED_MODULE_1__.computePeriodVariation)(series, periodoInicial, periodoFinal);
    }, [periodoInicial, periodoFinal, series]);
    const hasPeriodSelection = periodoInicial.length > 0 || periodoFinal.length > 0;
    const clearPeriodSelection = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback(() => {
        setPeriodoInicial([]);
        setPeriodoFinal([]);
        setHintInicial(null);
        setHintFinal(null);
    }, []);
    const handlePeriodoInicialChange = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback((years) => {
        setPeriodoInicial(years);
        setHintInicial(null);
    }, []);
    const handlePeriodoFinalChange = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback((years) => {
        setPeriodoFinal(years);
        setHintFinal(null);
    }, []);
    const rejectPeriodoInicial = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback(() => {
        setHintInicial(_constants__WEBPACK_IMPORTED_MODULE_2__.HINT_CONSECUTIVO);
    }, []);
    const rejectPeriodoFinal = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback(() => {
        setHintFinal(_constants__WEBPACK_IMPORTED_MODULE_2__.HINT_CONSECUTIVO);
    }, []);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        setPeriodoInicial([]);
        setPeriodoFinal([]);
        setHintInicial(null);
        setHintFinal(null);
    }, [recorteField]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        if (!periodoInicial.length || !periodoFinal.length)
            return;
        const allowed = new Set((0,_utils_prodes_table__WEBPACK_IMPORTED_MODULE_1__.getYearsAllowedForFinal)(availableYears, periodoInicial));
        const filtered = periodoFinal.filter((y) => allowed.has(y));
        if (filtered.length !== periodoFinal.length) {
            setPeriodoFinal(filtered);
        }
    }, [periodoInicial, periodoFinal, availableYears]);
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
    };
}


/***/ }),

/***/ "./your-extensions/widgets/comparador_prodes/src/runtime/hooks/use-prodes-series.ts":
/*!******************************************************************************************!*\
  !*** ./your-extensions/widgets/comparador_prodes/src/runtime/hooks/use-prodes-series.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useProdesSeries: () => (/* binding */ useProdesSeries)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _utils_prodes_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/prodes-table */ "./your-extensions/widgets/comparador_prodes/src/utils/prodes-table.ts");
/* harmony import */ var _utils_data_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/data-source */ "./your-extensions/widgets/comparador_prodes/src/utils/data-source.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./your-extensions/widgets/comparador_prodes/src/constants.ts");
/* harmony import */ var _utils_recorte_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/recorte-config */ "./your-extensions/widgets/comparador_prodes/src/utils/recorte-config.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





function useProdesSeries({ recorteField, yearField, widgetId }) {
    const [dsRef, setDsRef] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(null);
    const [dsStatus, setDsStatus] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(undefined);
    const [fieldList, setFieldList] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState([]);
    const [series, setSeries] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState([]);
    const [loading, setLoading] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const [loadingMessage, setLoadingMessage] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(null);
    const [error, setError] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(null);
    const [dsInfoVersion, setDsInfoVersion] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(undefined);
    const effectiveYearField = yearField !== null && yearField !== void 0 ? yearField : (0,_utils_prodes_table__WEBPACK_IMPORTED_MODULE_1__.detectYearField)(fieldList);
    const effectiveRecorteField = (0,_utils_recorte_config__WEBPACK_IMPORTED_MODULE_4__.normalizeRecorteFieldConfig)(recorteField);
    const applySchema = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback((schema) => {
        setFieldList((0,_utils_prodes_table__WEBPACK_IMPORTED_MODULE_1__.schemaToFieldList)(schema));
    }, []);
    const handleDataSourceReady = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback((ds) => {
        setDsRef(ds);
        void (0,_utils_data_source__WEBPACK_IMPORTED_MODULE_2__.ensureDataSourceSchema)(ds).then((schema) => {
            if (schema)
                applySchema(schema);
        });
    }, [applySchema]);
    const loadSeries = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback(() => __awaiter(this, void 0, void 0, function* () {
        const main = (0,_utils_data_source__WEBPACK_IMPORTED_MODULE_2__.getQueryableDataSource)(dsRef);
        if (!main || !effectiveYearField) {
            setSeries([]);
            return;
        }
        if (recorteField != null && !effectiveRecorteField) {
            setSeries([]);
            setError(_constants__WEBPACK_IMPORTED_MODULE_3__.MSG_INVALID_RECORTE);
            return;
        }
        if (!effectiveRecorteField) {
            setSeries([]);
            return;
        }
        if (!(0,_utils_data_source__WEBPACK_IMPORTED_MODULE_2__.isProdesDataReady)(dsStatus))
            return;
        setLoading(true);
        setLoadingMessage(_constants__WEBPACK_IMPORTED_MODULE_3__.MSG_LOADING_TABLE);
        setError(null);
        const fetchOpts = {
            yearFieldJimu: effectiveYearField,
            recorteFieldJimu: effectiveRecorteField,
            fields: fieldList.length > 0 ? fieldList : undefined,
            widgetId
        };
        try {
            const { series: built, records, rows } = yield (0,_utils_prodes_table__WEBPACK_IMPORTED_MODULE_1__.loadProdesYearSeries)(main, fetchOpts);
            setSeries(built);
            if (built.length === 0) {
                if (rows.length === 0 && records.length === 0) {
                    setError(_constants__WEBPACK_IMPORTED_MODULE_3__.MSG_LOAD_FAILED);
                }
                else if (rows.length > 0 && (0,_utils_prodes_table__WEBPACK_IMPORTED_MODULE_1__.attributeRowsScore)(rows) <= 1) {
                    setError(_constants__WEBPACK_IMPORTED_MODULE_3__.MSG_LOAD_FAILED);
                }
                else {
                    setError(_constants__WEBPACK_IMPORTED_MODULE_3__.MSG_EXTRACT_FAILED +
                        (0,_utils_prodes_table__WEBPACK_IMPORTED_MODULE_1__.describeRowsForExtractError)(rows, effectiveRecorteField, fieldList.length > 0 ? fieldList : undefined));
                }
            }
        }
        catch (_a) {
            setError(_constants__WEBPACK_IMPORTED_MODULE_3__.MSG_LOAD_FAILED);
            setSeries([]);
        }
        finally {
            setLoading(false);
            setLoadingMessage(null);
        }
    }), [
        dsRef,
        dsStatus,
        effectiveYearField,
        effectiveRecorteField,
        recorteField,
        fieldList,
        widgetId
    ]);
    const handleDataSourceInfoChange = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback((info) => {
        setDsStatus(info === null || info === void 0 ? void 0 : info.status);
        if ((info === null || info === void 0 ? void 0 : info.version) != null) {
            setDsInfoVersion(info.version);
        }
    }, []);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        if (!effectiveRecorteField || !effectiveYearField || !dsRef)
            return;
        if (!(0,_utils_data_source__WEBPACK_IMPORTED_MODULE_2__.isProdesDataReady)(dsStatus))
            return;
        loadSeries();
    }, [
        effectiveRecorteField,
        effectiveYearField,
        dsRef,
        dsStatus,
        dsInfoVersion,
        fieldList,
        loadSeries
    ]);
    const waitingForLayer = !dsRef ||
        dsStatus === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.Loading ||
        dsStatus === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.NotReady ||
        dsStatus === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.Unloaded;
    return {
        series,
        loading,
        loadingMessage,
        error,
        handleDataSourceReady,
        handleDataSourceInfoChange,
        applySchema,
        waitingForLayer
    };
}


/***/ }),

/***/ "./your-extensions/widgets/comparador_prodes/src/runtime/styles.ts":
/*!*************************************************************************!*\
  !*** ./your-extensions/widgets/comparador_prodes/src/runtime/styles.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PERIOD_MENU_MAX_HEIGHT: () => (/* binding */ PERIOD_MENU_MAX_HEIGHT),
/* harmony export */   periodMenuStyles: () => (/* binding */ periodMenuStyles),
/* harmony export */   pickerStyles: () => (/* binding */ pickerStyles),
/* harmony export */   widgetStyles: () => (/* binding */ widgetStyles)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

const widgetStyles = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  &.widget-comparador-prodes {
    width: 100%;
    height: 100%;
    min-height: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 8px;
  }
  .comparador-form {
    display: flex;
    flex-direction: column;
    gap: 12px;
    min-width: 0;
  }
  .comparador-field-row {
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 0;
  }
  .comparador-period-hint,
  .comparador-error {
    font-size: 12px;
    color: #b00020;
    margin-top: 2px;
  }
  .comparador-error--block {
    font-size: 14px;
  }
  .comparador-result {
    margin-top: 8px;
    padding: 12px;
    border-radius: 4px;
    background: var(--ref-palette-neutral-100, #f3f3f3);
    word-break: break-word;
  }
  .comparador-result-title {
    font-size: 14px;
    margin-bottom: 4px;
  }
  .comparador-result-value {
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.3;
  }
  .comparador-result-value--positive {
    color: #b00020;
  }
  .comparador-result-value--negative {
    color: #1b7a3d;
  }
  .comparador-result-value--neutral {
    color: inherit;
  }
  .comparador-result-detail {
    font-size: 12px;
    color: #6b6b6b;
    margin-top: 6px;
  }
  .comparador-hint {
    font-size: 11px;
    color: #6b6b6b;
    line-height: 1.35;
  }
  .comparador-actions {
    display: flex;
    justify-content: flex-end;
  }
  .comparador-btn-limpar {
    border-radius: 9999px !important;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
const PERIOD_MENU_MAX_HEIGHT = 280;
const pickerStyles = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  width: 100%;
  .jimu-dropdown {
    width: 100%;
  }
  .dropdown-toggle {
    width: 100%;
    justify-content: space-between;
    text-align: left;
  }
`;
/** Rolagem na lista de anos (container interno do DropdownMenu no jimu-ui). */
const periodMenuStyles = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  &.comparador-period-menu .dropdown-item-con {
    max-height: ${PERIOD_MENU_MAX_HEIGHT}px;
    overflow-y: auto;
    overscroll-behavior: contain;
    -webkit-overflow-scrolling: touch;
  }
`;


/***/ }),

/***/ "./your-extensions/widgets/comparador_prodes/src/runtime/year-period-picker.tsx":
/*!**************************************************************************************!*\
  !*** ./your-extensions/widgets/comparador_prodes/src/runtime/year-period-picker.tsx ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   YearPeriodPicker: () => (/* binding */ YearPeriodPicker)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _utils_prodes_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/prodes-table */ "./your-extensions/widgets/comparador_prodes/src/utils/prodes-table.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./your-extensions/widgets/comparador_prodes/src/runtime/styles.ts");
/** @jsx jsx */




const YearPeriodPicker = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.memo((props) => {
    const { availableYears, selectedYears, placeholder, hint, onChange, onRejectedSelection } = props;
    const selectedSet = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => new Set(selectedYears), [selectedYears]);
    const summary = selectedYears.length > 0
        ? (0,_utils_prodes_table__WEBPACK_IMPORTED_MODULE_2__.formatPeriodLabel)(selectedYears)
        : placeholder;
    const handleToggle = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback((year) => {
        const { next, rejected } = (0,_utils_prodes_table__WEBPACK_IMPORTED_MODULE_2__.toggleConsecutiveYear)(selectedYears, year);
        if (rejected) {
            onRejectedSelection === null || onRejectedSelection === void 0 ? void 0 : onRejectedSelection();
            return;
        }
        onChange(next);
    }, [selectedYears, onChange, onRejectedSelection]);
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: _styles__WEBPACK_IMPORTED_MODULE_3__.pickerStyles },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Dropdown, { fluid: true, menuItemCheckMode: "multiCheck", activeIcon: true, className: "w-100" },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownButton, { size: "sm", className: "w-100 dropdown-toggle" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "text-truncate" }, summary)),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownMenu, { className: "comparador-period-menu", css: _styles__WEBPACK_IMPORTED_MODULE_3__.periodMenuStyles, maxHeight: _styles__WEBPACK_IMPORTED_MODULE_3__.PERIOD_MENU_MAX_HEIGHT }, availableYears.map((year) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownItem, { key: year, active: selectedSet.has(year), toggle: false, onClick: () => handleToggle(year) }, year))))),
        hint && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "comparador-period-hint" }, hint)));
});
YearPeriodPicker.displayName = 'YearPeriodPicker';


/***/ }),

/***/ "./your-extensions/widgets/comparador_prodes/src/utils/data-source.ts":
/*!****************************************************************************!*\
  !*** ./your-extensions/widgets/comparador_prodes/src/utils/data-source.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ensureDataSourceSchema: () => (/* binding */ ensureDataSourceSchema),
/* harmony export */   getDataSourceSchema: () => (/* binding */ getDataSourceSchema),
/* harmony export */   getMainDataSource: () => (/* binding */ getMainDataSource),
/* harmony export */   getQueryableDataSource: () => (/* binding */ getQueryableDataSource),
/* harmony export */   isProdesDataReady: () => (/* binding */ isProdesDataReady),
/* harmony export */   isQueryableStatus: () => (/* binding */ isQueryableStatus)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/** Antes do query do DataSourceComponent terminar, registros costumam vir sem atributos. */
const isProdesDataReady = (status) => status === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.Loaded;
const isQueryableStatus = (status) => status === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.Loaded ||
    status === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.Loading;
const getMainDataSource = (ds) => {
    var _a, _b;
    if (!ds)
        return null;
    const main = (_b = (_a = ds).getMainDataSource) === null || _b === void 0 ? void 0 : _b.call(_a);
    return main !== null && main !== void 0 ? main : ds;
};
/** Usa a instância da camada selecionada (ex.: Planilha1) quando ela já é consultável. */
const getQueryableDataSource = (ds) => {
    if (!ds)
        return null;
    const q = ds;
    if (typeof q.query === 'function' ||
        typeof q.load === 'function' ||
        typeof q.loadAll === 'function') {
        return ds;
    }
    return getMainDataSource(ds);
};
function ensureDataSourceSchema(ds) {
    return __awaiter(this, void 0, void 0, function* () {
        const existing = getDataSourceSchema(ds);
        if ((existing === null || existing === void 0 ? void 0 : existing.fields) && Object.keys(existing.fields).length > 0) {
            return existing;
        }
        const fetchSchema = ds.fetchSchema;
        if (typeof fetchSchema === 'function') {
            try {
                return yield fetchSchema.call(ds);
            }
            catch (_a) {
                return existing;
            }
        }
        return existing;
    });
}
const getDataSourceSchema = (ds) => { var _a, _b; return (_b = (_a = ds).getSchema) === null || _b === void 0 ? void 0 : _b.call(_a); };


/***/ }),

/***/ "./your-extensions/widgets/comparador_prodes/src/utils/format.ts":
/*!***********************************************************************!*\
  !*** ./your-extensions/widgets/comparador_prodes/src/utils/format.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatArea: () => (/* binding */ formatArea),
/* harmony export */   getVariationTone: () => (/* binding */ getVariationTone)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./your-extensions/widgets/comparador_prodes/src/constants.ts");

const formatArea = (value) => `${value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
})} ${_constants__WEBPACK_IMPORTED_MODULE_0__.AREA_UNIT}`;
const getVariationTone = (pct) => {
    if (pct > 0)
        return 'positive';
    if (pct < 0)
        return 'negative';
    return 'neutral';
};


/***/ }),

/***/ "./your-extensions/widgets/comparador_prodes/src/utils/prodes-table.ts":
/*!*****************************************************************************!*\
  !*** ./your-extensions/widgets/comparador_prodes/src/utils/prodes-table.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_YEAR_FIELD: () => (/* binding */ DEFAULT_YEAR_FIELD),
/* harmony export */   areConsecutiveYears: () => (/* binding */ areConsecutiveYears),
/* harmony export */   attributeRowsScore: () => (/* binding */ attributeRowsScore),
/* harmony export */   buildYearSeries: () => (/* binding */ buildYearSeries),
/* harmony export */   buildYearSeriesFromAttributeRows: () => (/* binding */ buildYearSeriesFromAttributeRows),
/* harmony export */   buildYearSeriesFromRecords: () => (/* binding */ buildYearSeriesFromRecords),
/* harmony export */   buildYearSeriesFromRecorteRows: () => (/* binding */ buildYearSeriesFromRecorteRows),
/* harmony export */   buildYearSeriesInferred: () => (/* binding */ buildYearSeriesInferred),
/* harmony export */   calcPercentVariation: () => (/* binding */ calcPercentVariation),
/* harmony export */   collectProdesRecords: () => (/* binding */ collectProdesRecords),
/* harmony export */   computePeriodVariation: () => (/* binding */ computePeriodVariation),
/* harmony export */   computeVariation: () => (/* binding */ computeVariation),
/* harmony export */   describeRowsForExtractError: () => (/* binding */ describeRowsForExtractError),
/* harmony export */   detectRecorteKeyFromRows: () => (/* binding */ detectRecorteKeyFromRows),
/* harmony export */   detectYearField: () => (/* binding */ detectYearField),
/* harmony export */   detectYearKeyFromRows: () => (/* binding */ detectYearKeyFromRows),
/* harmony export */   enrichAttributeRowsWithRecords: () => (/* binding */ enrichAttributeRowsWithRecords),
/* harmony export */   fetchLayerRecords: () => (/* binding */ fetchLayerRecords),
/* harmony export */   fetchProdesAttributeRows: () => (/* binding */ fetchProdesAttributeRows),
/* harmony export */   fetchViaPortalRest: () => (/* binding */ fetchViaPortalRest),
/* harmony export */   findFieldByJimuName: () => (/* binding */ findFieldByJimuName),
/* harmony export */   forceLoadProdesRows: () => (/* binding */ forceLoadProdesRows),
/* harmony export */   formatPercentVariation: () => (/* binding */ formatPercentVariation),
/* harmony export */   formatPeriodLabel: () => (/* binding */ formatPeriodLabel),
/* harmony export */   formatPeriodRangeLabel: () => (/* binding */ formatPeriodRangeLabel),
/* harmony export */   formatRecorteLabel: () => (/* binding */ formatRecorteLabel),
/* harmony export */   formatRecorteLabelFromName: () => (/* binding */ formatRecorteLabelFromName),
/* harmony export */   formatYearsRangeSummary: () => (/* binding */ formatYearsRangeSummary),
/* harmony export */   getAttributeKey: () => (/* binding */ getAttributeKey),
/* harmony export */   getPlainAttributes: () => (/* binding */ getPlainAttributes),
/* harmony export */   getRecorteCandidateFields: () => (/* binding */ getRecorteCandidateFields),
/* harmony export */   getRecorteHiddenFieldNames: () => (/* binding */ getRecorteHiddenFieldNames),
/* harmony export */   getSystemHiddenFieldNames: () => (/* binding */ getSystemHiddenFieldNames),
/* harmony export */   getValueForYear: () => (/* binding */ getValueForYear),
/* harmony export */   getYearsAllowedForFinal: () => (/* binding */ getYearsAllowedForFinal),
/* harmony export */   getYearsAllowedForInicial: () => (/* binding */ getYearsAllowedForInicial),
/* harmony export */   isEmptyCell: () => (/* binding */ isEmptyCell),
/* harmony export */   isNumericRecorteField: () => (/* binding */ isNumericRecorteField),
/* harmony export */   isYearOutOfTypicalRange: () => (/* binding */ isYearOutOfTypicalRange),
/* harmony export */   loadProdesYearSeries: () => (/* binding */ loadProdesYearSeries),
/* harmony export */   parseNumericValue: () => (/* binding */ parseNumericValue),
/* harmony export */   parseYear: () => (/* binding */ parseYear),
/* harmony export */   readAttributeFlexible: () => (/* binding */ readAttributeFlexible),
/* harmony export */   readRecordValue: () => (/* binding */ readRecordValue),
/* harmony export */   recordHasReadableData: () => (/* binding */ recordHasReadableData),
/* harmony export */   resolveAttributeKeys: () => (/* binding */ resolveAttributeKeys),
/* harmony export */   resolveRecorteKeyFromRows: () => (/* binding */ resolveRecorteKeyFromRows),
/* harmony export */   schemaToFieldList: () => (/* binding */ schemaToFieldList),
/* harmony export */   sumValuesForYears: () => (/* binding */ sumValuesForYears),
/* harmony export */   toggleConsecutiveYear: () => (/* binding */ toggleConsecutiveYear)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _recorte_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recorte-config */ "./your-extensions/widgets/comparador_prodes/src/utils/recorte-config.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const DEFAULT_YEAR_FIELD = 'ano';
const YEAR_NAME_PATTERNS = ['ano', 'year', 'yr', 'exercicio', 'exercício'];
function isEmptyCell(value) {
    if (value == null)
        return true;
    if (typeof value === 'string' && value.trim() === '')
        return true;
    if (typeof value === 'number' && Number.isNaN(value))
        return true;
    return false;
}
function parseNumericValue(value) {
    if (isEmptyCell(value))
        return null;
    if (typeof value === 'number' && Number.isFinite(value))
        return value;
    if (typeof value === 'string') {
        const s = value.trim();
        if (!s)
            return null;
        if (s.includes(',')) {
            const normalized = s.replace(/\./g, '').replace(',', '.');
            const n = Number(normalized);
            return Number.isFinite(n) ? n : null;
        }
        const n = Number(s);
        return Number.isFinite(n) ? n : null;
    }
    return null;
}
/** Converte número exibido no ArcGIS em pt-BR (ex.: 2.001 → 2001). */
function normalizeYearNumber(n) {
    if (!Number.isFinite(n))
        return null;
    if (n >= 1985 && n <= 2035 && Math.abs(n - Math.round(n)) < 0.001) {
        return Math.round(n);
    }
    // Tabela PRODES no Portal: coluna Ano como 2.001, 2.011 (milhar com ponto)
    if (n >= 1.985 && n <= 2.035) {
        const y = Math.round(n * 1000);
        if (y >= 1985 && y <= 2035)
            return y;
    }
    const truncated = Math.trunc(n);
    if (truncated >= 1985 && truncated <= 2035)
        return truncated;
    return null;
}
function parseYear(value) {
    if (value instanceof Date && !Number.isNaN(value.getTime())) {
        return value.getFullYear();
    }
    if (typeof value === 'number' && Number.isFinite(value)) {
        return normalizeYearNumber(value);
    }
    if (typeof value === 'string') {
        const s = value.trim();
        if (!s)
            return null;
        const brThousands = s.match(/^(\d{1,2})\.(\d{3})$/);
        if (brThousands) {
            const y = Number(brThousands[1] + brThousands[2]);
            if (y >= 1985 && y <= 2035)
                return y;
        }
        const n = Number(s.replace(',', '.'));
        if (Number.isFinite(n))
            return normalizeYearNumber(n);
        const m = s.match(/\b(19|20)\d{2}\b/);
        if (m)
            return Number(m[0]);
    }
    return null;
}
function schemaToFieldList(schema) {
    if (!(schema === null || schema === void 0 ? void 0 : schema.fields))
        return [];
    return Object.keys(schema.fields).map((key) => schema.fields[key]);
}
function isNumericRecorteField(field) {
    if (field.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType.Number)
        return true;
    const esri = field.esriType;
    return (esri === jimu_core__WEBPACK_IMPORTED_MODULE_0__.EsriFieldType.Double ||
        esri === jimu_core__WEBPACK_IMPORTED_MODULE_0__.EsriFieldType.Single ||
        esri === jimu_core__WEBPACK_IMPORTED_MODULE_0__.EsriFieldType.Integer ||
        esri === jimu_core__WEBPACK_IMPORTED_MODULE_0__.EsriFieldType.SmallInteger);
}
function getAttributeKey(field) {
    return field.name || field.jimuName;
}
function detectYearField(fields) {
    const exactAno = fields.find((f) => {
        var _a, _b, _c;
        return ((_a = f.jimuName) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === 'ano' ||
            ((_b = f.name) === null || _b === void 0 ? void 0 : _b.toLowerCase()) === 'ano' ||
            ((_c = f.alias) === null || _c === void 0 ? void 0 : _c.toLowerCase()) === 'ano';
    });
    if (exactAno)
        return exactAno.jimuName;
    const candidates = fields.filter((f) => f.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType.Number || f.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType.String);
    for (const pat of YEAR_NAME_PATTERNS) {
        const found = candidates.find((f) => {
            var _a, _b, _c;
            return ((_a = f.jimuName) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === pat ||
                ((_b = f.name) === null || _b === void 0 ? void 0 : _b.toLowerCase()) === pat ||
                ((_c = f.alias) === null || _c === void 0 ? void 0 : _c.toLowerCase()) === pat;
        });
        if (found)
            return found.jimuName;
    }
    return null;
}
function formatRecorteLabel(field) {
    return formatRecorteLabelFromName(field.jimuName, field.alias);
}
function formatRecorteLabelFromName(jimuName, alias) {
    if (alias === null || alias === void 0 ? void 0 : alias.trim())
        return alias.trim();
    return jimuName
        .split('_')
        .filter(Boolean)
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
        .join(' ');
}
function getSystemHiddenFieldNames(fields) {
    return fields
        .filter((f) => {
        const esri = f.esriType;
        return (esri === jimu_core__WEBPACK_IMPORTED_MODULE_0__.EsriFieldType.OID ||
            esri === jimu_core__WEBPACK_IMPORTED_MODULE_0__.EsriFieldType.Geometry ||
            esri === jimu_core__WEBPACK_IMPORTED_MODULE_0__.EsriFieldType.GlobalID ||
            esri === jimu_core__WEBPACK_IMPORTED_MODULE_0__.EsriFieldType.GUID);
    })
        .map((f) => f.jimuName);
}
function getRecorteHiddenFieldNames(fields, yearField) {
    const hidden = getSystemHiddenFieldNames(fields);
    if (yearField && !hidden.includes(yearField)) {
        hidden.push(yearField);
    }
    return hidden;
}
function getRecorteCandidateFields(fields, yearField) {
    const hidden = new Set(getRecorteHiddenFieldNames(fields, yearField));
    return fields
        .filter((f) => isNumericRecorteField(f) && !hidden.has(f.jimuName))
        .sort((a, b) => formatRecorteLabel(a).localeCompare(formatRecorteLabel(b), 'pt-BR'));
}
function findFieldByJimuName(fields, jimuName) {
    var _a;
    if (!jimuName)
        return null;
    const exact = fields.find((f) => f.jimuName === jimuName);
    if (exact)
        return exact;
    const lower = jimuName.toLowerCase();
    return ((_a = fields.find((f) => {
        var _a, _b, _c;
        return ((_a = f.jimuName) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === lower ||
            ((_b = f.name) === null || _b === void 0 ? void 0 : _b.toLowerCase()) === lower ||
            ((_c = f.alias) === null || _c === void 0 ? void 0 : _c.toLowerCase()) === lower;
    })) !== null && _a !== void 0 ? _a : null);
}
function resolveAttributeKeys(fields, yearFieldJimu, recorteFieldJimu) {
    if (!yearFieldJimu || !recorteFieldJimu)
        return null;
    const yearField = findFieldByJimuName(fields, yearFieldJimu);
    const recorteField = findFieldByJimuName(fields, recorteFieldJimu);
    return {
        yearKey: yearField ? getAttributeKey(yearField) : yearFieldJimu,
        recorteKey: recorteField ? getAttributeKey(recorteField) : recorteFieldJimu
    };
}
function toPlainObject(value) {
    if (!value || typeof value !== 'object')
        return {};
    const v = value;
    if (typeof v.toJS === 'function')
        return v.toJS();
    if (typeof v.asMutable === 'function')
        return v.asMutable({ deep: true });
    return value;
}
const GET_DATA_META_KEYS = new Set([
    'attributes',
    'feature',
    'geometry',
    'centroid',
    'aggregateGeometries',
    'symbol'
]);
/** Extrai o dicionário de atributos de um registro (vários formatos do Jimu/ArcGIS). */
function getPlainAttributes(rec) {
    var _a, _b;
    const merged = {};
    const merge = (attrs) => {
        if (!attrs)
            return;
        Object.assign(merged, toPlainObject(attrs));
    };
    if ('getData' in rec && typeof rec.getData === 'function') {
        const data = rec.getData();
        const plain = toPlainObject(data);
        merge(plain.attributes);
        merge((_a = plain.feature) === null || _a === void 0 ? void 0 : _a.attributes);
        // Jimu DataRecord: getData() costuma ser mapa plano { jimuFieldName: valor }
        for (const [key, value] of Object.entries(plain)) {
            if (GET_DATA_META_KEYS.has(key))
                continue;
            if (value !== undefined)
                merged[key] = value;
        }
    }
    if ('feature' in rec && ((_b = rec.feature) === null || _b === void 0 ? void 0 : _b.attributes)) {
        merge(rec.feature.attributes);
    }
    if ('attributes' in rec && rec.attributes) {
        merge(rec.attributes);
    }
    if ('getDataBeforeMapping' in rec && typeof rec.getDataBeforeMapping === 'function') {
        merge(rec.getDataBeforeMapping());
    }
    return merged;
}
function attributeHasUsableValue(value) {
    if (isEmptyCell(value))
        return false;
    if (typeof value === 'object')
        return false;
    return true;
}
/** Verifica se o registro expõe atributos ou getFieldValue com dados reais (não só método vazio). */
function recordHasReadableData(rec) {
    const attrs = getPlainAttributes(rec);
    const usableKeys = Object.keys(attrs).filter((key) => {
        if (/^(objectid|globalid|shape|geometry)$/i.test(key))
            return false;
        return attributeHasUsableValue(attrs[key]);
    });
    if (usableKeys.length > 0)
        return true;
    if ('getFieldValue' in rec && typeof rec.getFieldValue === 'function') {
        const probes = [
            'ano',
            'year',
            'ANO',
            'Year',
            'exercicio',
            'Exercicio'
        ];
        for (const name of probes) {
            try {
                const v = rec.getFieldValue(name);
                if (attributeHasUsableValue(v))
                    return true;
            }
            catch (_a) {
                // tenta próximo
            }
        }
    }
    return false;
}
/** Lê valor pelo API do Jimu (`getFieldValue`) e, em seguida, pelos atributos brutos. */
function readRecordValue(rec, field, fallbackJimuName) {
    const names = [];
    if (field === null || field === void 0 ? void 0 : field.jimuName)
        names.push(field.jimuName);
    if (fallbackJimuName)
        names.push(fallbackJimuName);
    if (field === null || field === void 0 ? void 0 : field.name)
        names.push(field.name);
    if (field === null || field === void 0 ? void 0 : field.alias)
        names.push(field.alias);
    if (field)
        names.push(getAttributeKey(field));
    const uniqueNames = [...new Set(names.filter(Boolean))];
    if ('getFieldValue' in rec && typeof rec.getFieldValue === 'function') {
        for (const name of uniqueNames) {
            try {
                const v = rec.getFieldValue(name);
                if (v !== undefined)
                    return v;
            }
            catch (_a) {
                // tenta próximo nome
            }
        }
    }
    if ((field === null || field === void 0 ? void 0 : field.jimuName) &&
        'getDateFieldValue' in rec &&
        typeof rec.getDateFieldValue === 'function') {
        try {
            const v = rec.getDateFieldValue(field.jimuName);
            if (v !== undefined)
                return v;
        }
        catch (_b) {
            // ignora
        }
    }
    const attrs = getPlainAttributes(rec);
    const fromMapped = readAttributeFlexible(attrs, field, fallbackJimuName);
    if (fromMapped !== undefined)
        return fromMapped;
    if ('getDataBeforeMapping' in rec && typeof rec.getDataBeforeMapping === 'function') {
        const raw = toPlainObject(rec.getDataBeforeMapping());
        return readAttributeFlexible(raw, field, fallbackJimuName);
    }
    return undefined;
}
function readAttribute(attrs, primaryKey, fallbackKey) {
    if (primaryKey in attrs)
        return attrs[primaryKey];
    if (fallbackKey && fallbackKey !== primaryKey && fallbackKey in attrs) {
        return attrs[fallbackKey];
    }
    return undefined;
}
/** Tenta jimuName, name, alias e correspondência sem diferenciar maiúsculas/minúsculas. */
function readAttributeFlexible(attrs, field, fallbackJimuName) {
    const candidates = new Set();
    if (field) {
        if (field.jimuName)
            candidates.add(field.jimuName);
        if (field.name)
            candidates.add(field.name);
        if (field.alias)
            candidates.add(field.alias);
        candidates.add(getAttributeKey(field));
    }
    if (fallbackJimuName)
        candidates.add(fallbackJimuName);
    for (const key of candidates) {
        const v = readAttribute(attrs, key);
        if (v !== undefined)
            return v;
    }
    const attrKeys = Object.keys(attrs);
    for (const key of candidates) {
        const found = attrKeys.find((k) => k.toLowerCase() === key.toLowerCase());
        if (found != null)
            return attrs[found];
    }
    return undefined;
}
const buildQueryOptions = (widgetId) => (Object.assign({ scope: jimu_core__WEBPACK_IMPORTED_MODULE_0__.QueryScope.InAllData }, (widgetId ? { widgetId } : {})));
const buildQueryParams = (outFields = ['*'], disableClientQuery = false) => (Object.assign({ where: '1=1', outFields, returnGeometry: false, pageSize: 2000 }, (disableClientQuery ? { disableClientQuery: true } : {})));
function recordsAreReadable(records) {
    return records.length > 0 && records.some(recordHasReadableData);
}
function queryViaJsapiLayer(ds) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const layer = ds.layer;
        if (!layer || typeof ds.buildRecord !== 'function')
            return [];
        const q = {
            where: '1=1',
            outFields: ['*'],
            returnGeometry: false,
            num: 2000
        };
        try {
            const result = typeof layer.queryFeatures === 'function'
                ? yield layer.queryFeatures(q)
                : typeof layer.query === 'function'
                    ? yield layer.query(q)
                    : null;
            const features = (_a = result === null || result === void 0 ? void 0 : result.features) !== null && _a !== void 0 ? _a : [];
            return features.map((f) => ds.buildRecord(f));
        }
        catch (_b) {
            return [];
        }
    });
}
function fetchViaArcgisRest(ds) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        if (!ds.url)
            return [];
        try {
            const res = yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.esri.restFeatureService.queryFeatures({
                url: ds.url,
                where: '1=1',
                outFields: ['*'],
                returnGeometry: false
            });
            const features = res && typeof res === 'object' && 'features' in res
                ? (_a = res
                    .features) !== null && _a !== void 0 ? _a : []
                : [];
            return features
                .map((f) => { var _a; return (Object.assign({}, ((_a = f.attributes) !== null && _a !== void 0 ? _a : {}))); })
                .filter((a) => Object.keys(a).length > 0);
        }
        catch (_b) {
            return [];
        }
    });
}
/** Consulta REST com credencial do Portal (Enterprise). */
function fetchViaPortalRest(ds) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        if (!ds.url)
            return [];
        try {
            const res = yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.requestUtils.requestWrapper(ds.url, (session) => jimu_core__WEBPACK_IMPORTED_MODULE_0__.esri.restFeatureService.queryFeatures({
                url: ds.url,
                where: '1=1',
                outFields: ['*'],
                returnGeometry: false,
                authentication: session
            }));
            const features = res && typeof res === 'object' && 'features' in res
                ? (_a = res
                    .features) !== null && _a !== void 0 ? _a : []
                : [];
            return features
                .map((f) => { var _a; return (Object.assign({}, ((_a = f.attributes) !== null && _a !== void 0 ? _a : {}))); })
                .filter((a) => Object.keys(a).length > 0);
        }
        catch (_b) {
            return fetchViaArcgisRest(ds);
        }
    });
}
function runQueryableMethods(ds, outFields, disableClientQuery, widgetId) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const params = buildQueryParams(outFields, disableClientQuery);
        const queryOptions = buildQueryOptions(widgetId);
        if (typeof (ds === null || ds === void 0 ? void 0 : ds.load) === 'function') {
            try {
                const records = yield ds.load(params, queryOptions);
                if ((records === null || records === void 0 ? void 0 : records.length) && recordsAreReadable(records))
                    return records;
                if ((records === null || records === void 0 ? void 0 : records.length) && !disableClientQuery)
                    return records;
            }
            catch (_b) {
                // tenta próximo método
            }
        }
        if (typeof (ds === null || ds === void 0 ? void 0 : ds.loadAll) === 'function') {
            try {
                const records = yield ds.loadAll(params, undefined, undefined, queryOptions);
                if ((records === null || records === void 0 ? void 0 : records.length) && recordsAreReadable(records))
                    return records;
                if ((records === null || records === void 0 ? void 0 : records.length) && !disableClientQuery)
                    return records;
            }
            catch (_c) {
                // tenta query abaixo
            }
        }
        if (typeof (ds === null || ds === void 0 ? void 0 : ds.query) === 'function') {
            try {
                const result = yield ds.query(params, queryOptions);
                const records = (_a = result === null || result === void 0 ? void 0 : result.records) !== null && _a !== void 0 ? _a : [];
                if (records.length && recordsAreReadable(records))
                    return records;
                if (records.length && !disableClientQuery)
                    return records;
            }
            catch (_d) {
                // tenta JS API
            }
        }
        const viaLayer = yield queryViaJsapiLayer(ds);
        if (viaLayer.length && recordsAreReadable(viaLayer))
            return viaLayer;
        if (viaLayer.length && !disableClientQuery)
            return viaLayer;
        return [];
    });
}
function queryAllRecords(ds_1) {
    return __awaiter(this, arguments, void 0, function* (ds, outFields = ['*'], widgetId) {
        let records = yield runQueryableMethods(ds, outFields, false, widgetId);
        if (recordsAreReadable(records))
            return records;
        records = yield runQueryableMethods(ds, outFields, true, widgetId);
        if (recordsAreReadable(records))
            return records;
        return records;
    });
}
function resolveOutFields(yearFieldJimu, recorteFieldJimu, fields) {
    if (!(fields === null || fields === void 0 ? void 0 : fields.length) || !yearFieldJimu || !recorteFieldJimu)
        return ['*'];
    const keys = resolveAttributeKeys(fields, yearFieldJimu, recorteFieldJimu);
    if (!keys)
        return ['*'];
    return ['*', keys.yearKey, keys.recorteKey];
}
/** Detecta coluna de ano pelos valores reais (ex.: Ano = 2.001, 2001). */
function detectYearKeyFromRows(rows, hint) {
    if (!rows.length)
        return null;
    const keys = new Set();
    for (const row of rows.slice(0, 50)) {
        Object.keys(row).forEach((k) => keys.add(k));
    }
    if (hint) {
        const match = [...keys].find((k) => k.toLowerCase() === hint.toLowerCase());
        if (match)
            return match;
    }
    let bestKey = null;
    let bestScore = 0;
    for (const key of keys) {
        if (/^(objectid|globalid|shape|fid)$/i.test(key))
            continue;
        let score = 0;
        for (const row of rows) {
            const y = parseYear(row[key]);
            if (y != null && y >= 1985 && y <= 2035)
                score++;
        }
        if (score > bestScore) {
            bestScore = score;
            bestKey = key;
        }
    }
    return bestScore > 0 ? bestKey : null;
}
function detectRecorteKeyFromRows(rows, recorteHint) {
    var _a;
    if (!rows.length)
        return null;
    const hint = recorteHint === null || recorteHint === void 0 ? void 0 : recorteHint.trim();
    if (!hint)
        return null;
    const keys = new Set();
    for (const row of rows.slice(0, 50)) {
        Object.keys(row).forEach((k) => keys.add(k));
    }
    const exact = [...keys].find((k) => k.toLowerCase() === hint.toLowerCase());
    if (exact)
        return exact;
    return ((_a = [...keys].find((k) => normalizeRecorteToken(k) === normalizeRecorteToken(hint))) !== null && _a !== void 0 ? _a : null);
}
/** Monta série a partir de atributos brutos (REST / queryFeatures). */
function buildYearSeriesFromAttributeRows(rows, yearFieldJimu, recorteFieldJimu, fields) {
    var _a;
    if (!rows.length)
        return [];
    const asRecords = rows.map((attributes) => ({ attributes }));
    const standard = buildYearSeries(asRecords, yearFieldJimu, recorteFieldJimu, fields);
    if (standard.length > 0)
        return standard;
    const yearKey = (_a = detectYearKeyFromRows(rows, yearFieldJimu)) !== null && _a !== void 0 ? _a : yearFieldJimu;
    const yearField = (fields === null || fields === void 0 ? void 0 : fields.length)
        ? findFieldByJimuName(fields, yearFieldJimu)
        : null;
    const recorteField = (fields === null || fields === void 0 ? void 0 : fields.length)
        ? findFieldByJimuName(fields, recorteFieldJimu)
        : null;
    const recorteKey = resolveRecorteKeyFromRows(rows, recorteFieldJimu, fields, yearFieldJimu);
    if (!yearKey || !recorteKey)
        return [];
    return buildSeriesFromKeys(rows, yearKey, recorteKey, yearField, recorteField);
}
/** Resolve coluna do recorte pedido — nunca substitui por outra coluna da tabela. */
function resolveRecorteKeyFromRows(rows, recorteFieldJimu, fields, yearFieldJimu) {
    const hint = recorteFieldJimu === null || recorteFieldJimu === void 0 ? void 0 : recorteFieldJimu.trim();
    if (!hint)
        return null;
    const fromRows = detectRecorteKeyFromRows(rows, hint);
    if (fromRows)
        return fromRows;
    if (fields === null || fields === void 0 ? void 0 : fields.length) {
        const field = findFieldByJimuName(fields, hint);
        if (field) {
            for (const candidate of [
                getAttributeKey(field),
                field.name,
                field.jimuName,
                field.alias
            ]) {
                if (!candidate)
                    continue;
                const match = detectRecorteKeyFromRows(rows, candidate);
                if (match)
                    return match;
            }
        }
        const keys = resolveAttributeKeys(fields, yearFieldJimu, hint);
        if (keys === null || keys === void 0 ? void 0 : keys.recorteKey) {
            const match = detectRecorteKeyFromRows(rows, keys.recorteKey);
            if (match)
                return match;
            const sample = rows[0];
            if (sample && keys.recorteKey in sample)
                return keys.recorteKey;
        }
    }
    const sample = rows[0];
    if (sample && hint in sample)
        return hint;
    return hint;
}
/** Resumo das colunas detectadas (ajuda diagnóstico no Enterprise). */
function describeRowsForExtractError(rows, recorteHint, fields) {
    var _a;
    if (!rows.length)
        return '';
    const keys = Object.keys(rows[0]).filter((k) => !/^(objectid|globalid|shape|fid)$/i.test(k));
    const yearKey = detectYearKeyFromRows(rows);
    const recorteHintNorm = (_a = (0,_recorte_config__WEBPACK_IMPORTED_MODULE_1__.normalizeRecorteFieldConfig)(recorteHint)) !== null && _a !== void 0 ? _a : String(recorteHint !== null && recorteHint !== void 0 ? recorteHint : '');
    const recorteKey = resolveRecorteKeyFromRows(rows, recorteHintNorm, fields);
    const preview = keys.slice(0, 10).join(', ');
    const suffix = keys.length > 10 ? '…' : '';
    let msg = ` Colunas na resposta: ${preview}${suffix}.`;
    if (yearKey)
        msg += ` Coluna de ano: "${yearKey}".`;
    msg += ` Recorte configurado: "${recorteHintNorm}".`;
    if (recorteKey)
        msg += ` Coluna do recorte: "${recorteKey}".`;
    return msg;
}
function buildSeriesFromKeys(rows, yearKey, recorteKey, yearField, recorteField) {
    const series = [];
    for (const row of rows) {
        const year = parseYear(readAttributeFlexible(row, yearField !== null && yearField !== void 0 ? yearField : null, yearKey));
        const value = parseNumericValue(readAttributeFlexible(row, recorteField !== null && recorteField !== void 0 ? recorteField : null, recorteKey));
        if (year == null || value == null)
            continue;
        series.push({ year, value });
    }
    return series.sort((a, b) => a.year - b.year);
}
function fetchRawAttributeRowsFromLayer(ds) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const layer = ds.layer;
        if (!(layer === null || layer === void 0 ? void 0 : layer.queryFeatures))
            return [];
        try {
            if (typeof layer.load === 'function' &&
                layer.loadStatus !== 'loaded' &&
                !layer.loaded) {
                yield layer.load();
            }
            const result = yield layer.queryFeatures({
                where: '1=1',
                outFields: ['*'],
                returnGeometry: false
            });
            return ((_a = result.features) !== null && _a !== void 0 ? _a : [])
                .map((f) => { var _a; return (Object.assign({}, ((_a = f.attributes) !== null && _a !== void 0 ? _a : {}))); })
                .filter((a) => Object.keys(a).length > 0);
        }
        catch (_b) {
            return [];
        }
    });
}
function attributeRowsScore(rows) {
    if (!rows.length)
        return 0;
    const sample = rows[0];
    return Object.keys(sample).filter((k) => !/^(objectid|globalid|shape|fid)$/i.test(k)).length;
}
/**
 * Carrega linhas da tabela PRODES priorizando atributos brutos da camada
 * (mesma fonte da tabela do Portal).
 */
function recordsToAttributeRows(records) {
    return records
        .map((r) => getPlainAttributes(r))
        .filter((a) => Object.keys(a).length > 0);
}
/** Reúne registros Jimu (cache do mapa + query), deduplicados por id. */
function collectProdesRecords(dataSource, options) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d;
        const ds = dataSource;
        const seen = new Set();
        const out = [];
        const add = (recs) => {
            var _a;
            for (const rec of recs) {
                const id = (_a = rec.getId) === null || _a === void 0 ? void 0 : _a.call(rec);
                const key = id != null ? String(id) : `idx-${out.length}`;
                if (seen.has(key))
                    continue;
                seen.add(key);
                out.push(rec);
            }
        };
        add((_b = (_a = ds.getAllLoadedRecords) === null || _a === void 0 ? void 0 : _a.call(ds)) !== null && _b !== void 0 ? _b : []);
        add((_d = (_c = ds.getRecords) === null || _c === void 0 ? void 0 : _c.call(ds)) !== null && _d !== void 0 ? _d : []);
        add(yield fetchLayerRecords(dataSource, Object.assign(Object.assign({}, options), { forceQuery: true })));
        return out;
    });
}
/**
 * No Enterprise a REST traz nomes de colunas, mas valores vazios; getFieldValue nos
 * DataRecords Jimu traz os números formatados. Mescla os dois por OBJECTID ou ano.
 */
function enrichAttributeRowsWithRecords(rows, records, yearFieldJimu, recorteFieldJimu, fields) {
    var _a, _b, _c;
    if (!rows.length || !records.length)
        return rows;
    const yearField = (fields === null || fields === void 0 ? void 0 : fields.length)
        ? findFieldByJimuName(fields, yearFieldJimu)
        : null;
    const recorteField = (fields === null || fields === void 0 ? void 0 : fields.length)
        ? findFieldByJimuName(fields, recorteFieldJimu)
        : null;
    const yearKey = (_a = detectYearKeyFromRows(rows, yearFieldJimu)) !== null && _a !== void 0 ? _a : yearFieldJimu;
    const recorteKey = (_b = resolveRecorteKeyFromRows(rows, recorteFieldJimu, fields, yearFieldJimu)) !== null && _b !== void 0 ? _b : recorteFieldJimu;
    const byOid = new Map();
    const byYear = new Map();
    for (const rec of records) {
        const id = (_c = rec.getId) === null || _c === void 0 ? void 0 : _c.call(rec);
        if (id != null)
            byOid.set(String(id), rec);
        const y = parseYear(readRecordValue(rec, yearField, yearFieldJimu));
        if (y != null)
            byYear.set(y, rec);
    }
    return rows.map((row, index) => {
        var _a, _b, _c, _d;
        const oid = (_d = (_c = (_b = (_a = row.OBJECTID) !== null && _a !== void 0 ? _a : row.objectid) !== null && _b !== void 0 ? _b : row.ObjectId) !== null && _c !== void 0 ? _c : row.FID) !== null && _d !== void 0 ? _d : row.fid;
        let rec;
        if (oid != null)
            rec = byOid.get(String(oid));
        if (!rec) {
            const y = parseYear(readAttributeFlexible(row, yearField, yearKey));
            if (y != null)
                rec = byYear.get(y);
        }
        if (!rec && index < records.length)
            rec = records[index];
        if (!rec)
            return row;
        const enriched = Object.assign({}, row);
        const yearVal = readRecordValue(rec, yearField, yearFieldJimu);
        if (yearVal !== undefined && parseYear(enriched[yearKey]) == null) {
            enriched[yearKey] = yearVal;
        }
        const recorteVal = readRecordValue(rec, recorteField, recorteFieldJimu);
        if (recorteVal !== undefined) {
            enriched[recorteKey] = recorteVal;
        }
        return enriched;
    });
}
const LOAD_SERIES_RETRY_MS = [0, 600, 1500, 3500, 6000];
/** Carrega série ano×valor para o recorte pedido (Enterprise + local). */
function loadProdesYearSeries(dataSource, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const { yearFieldJimu, recorteFieldJimu, fields } = options;
        let lastRecords = [];
        let lastRows = [];
        if (!yearFieldJimu || !recorteFieldJimu) {
            return { series: [], records: [], rows: [] };
        }
        for (const delay of LOAD_SERIES_RETRY_MS) {
            if (delay > 0) {
                yield new Promise((resolve) => setTimeout(resolve, delay));
            }
            lastRecords = yield collectProdesRecords(dataSource, options);
            let series = buildYearSeriesFromRecords(lastRecords, yearFieldJimu, recorteFieldJimu, fields);
            if (series.length > 0) {
                return {
                    series,
                    records: lastRecords,
                    rows: recordsToAttributeRows(lastRecords)
                };
            }
            lastRows = yield fetchProdesAttributeRows(dataSource, Object.assign(Object.assign({}, options), { forceQuery: true }));
            const enriched = enrichAttributeRowsWithRecords(lastRows, lastRecords, yearFieldJimu, recorteFieldJimu, fields);
            series = buildYearSeriesFromAttributeRows(enriched, yearFieldJimu, recorteFieldJimu, fields);
            if (series.length > 0) {
                return { series, records: lastRecords, rows: enriched };
            }
        }
        return { series: [], records: lastRecords, rows: lastRows };
    });
}
function fetchProdesAttributeRows(dataSource, options) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f;
        const ds = dataSource;
        const candidates = [];
        const portalRows = yield fetchViaPortalRest(ds);
        if (portalRows.length)
            candidates.push(portalRows);
        candidates.push(yield fetchRawAttributeRowsFromLayer(ds));
        const restRows = yield fetchViaArcgisRest(ds);
        if (restRows.length)
            candidates.push(restRows);
        const records = yield fetchLayerRecords(dataSource, options);
        if (records.length) {
            candidates.push(recordsToAttributeRows(records));
        }
        const loaded = (_d = (_b = (_a = ds.getRecords) === null || _a === void 0 ? void 0 : _a.call(ds)) !== null && _b !== void 0 ? _b : (_c = ds.getAllLoadedRecords) === null || _c === void 0 ? void 0 : _c.call(ds)) !== null && _d !== void 0 ? _d : [];
        if (loaded.length) {
            candidates.push(recordsToAttributeRows(loaded));
        }
        if ((options === null || options === void 0 ? void 0 : options.yearFieldJimu) && (options === null || options === void 0 ? void 0 : options.recorteFieldJimu)) {
            const ordered = [
                ...candidates.filter((c) => c.length && attributeRowsScore(c) > 1)
            ].sort((a, b) => scoreRowsForRecorte(b, options.recorteFieldJimu) - scoreRowsForRecorte(a, options.recorteFieldJimu));
            for (const rows of ordered) {
                const series = buildYearSeriesFromAttributeRows(rows, options.yearFieldJimu, options.recorteFieldJimu, options.fields);
                if (series.length > 0)
                    return rows;
            }
        }
        const withData = candidates.filter((c) => c.length && attributeRowsScore(c) > 1);
        if (!withData.length) {
            return (_e = candidates.find((c) => c.length)) !== null && _e !== void 0 ? _e : [];
        }
        const recorteHint = (_f = options === null || options === void 0 ? void 0 : options.recorteFieldJimu) !== null && _f !== void 0 ? _f : '';
        return withData.sort((a, b) => scoreRowsForRecorte(b, recorteHint) - scoreRowsForRecorte(a, recorteHint))[0];
    });
}
/** Quantos valores numéricos preenchidos existem na coluna do recorte. */
function scoreRowsForRecorte(rows, recorteFieldJimu) {
    var _a;
    const key = (_a = detectRecorteKeyFromRows(rows, recorteFieldJimu)) !== null && _a !== void 0 ? _a : recorteFieldJimu;
    let score = 0;
    for (const row of rows) {
        if (parseNumericValue(row[key]) != null)
            score++;
    }
    return score;
}
const RETRY_DELAYS_MS = [0, 400, 800, 1200, 2000, 3000, 4500];
/**
 * Tenta várias vezes até obter linhas com colunas de dados (não só OBJECTID).
 */
function forceLoadProdesRows(dataSource, options) {
    return __awaiter(this, void 0, void 0, function* () {
        for (const delay of RETRY_DELAYS_MS) {
            if (delay > 0) {
                yield new Promise((resolve) => setTimeout(resolve, delay));
            }
            const rows = yield fetchProdesAttributeRows(dataSource, Object.assign(Object.assign({}, options), { forceQuery: true }));
            if (!options.yearFieldJimu || !options.recorteFieldJimu) {
                if (attributeRowsScore(rows) > 1)
                    return rows;
                continue;
            }
            const records = yield collectProdesRecords(dataSource, options);
            const enriched = enrichAttributeRowsWithRecords(rows, records, options.yearFieldJimu, options.recorteFieldJimu, options.fields);
            const series = buildYearSeriesFromAttributeRows(enriched, options.yearFieldJimu, options.recorteFieldJimu, options.fields);
            if (series.length > 0)
                return enriched;
        }
        return fetchProdesAttributeRows(dataSource, Object.assign(Object.assign({}, options), { forceQuery: true }));
    });
}
/** Carrega todos os registros da camada (tabela ano × recortes). */
function fetchLayerRecords(dataSource, options) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d;
        const ds = dataSource;
        const cached = (_d = (_b = (_a = ds.getAllLoadedRecords) === null || _a === void 0 ? void 0 : _a.call(ds)) !== null && _b !== void 0 ? _b : (_c = ds.getRecords) === null || _c === void 0 ? void 0 : _c.call(ds)) !== null && _d !== void 0 ? _d : [];
        const outFields = resolveOutFields(options === null || options === void 0 ? void 0 : options.yearFieldJimu, options === null || options === void 0 ? void 0 : options.recorteFieldJimu, options === null || options === void 0 ? void 0 : options.fields);
        if (!(options === null || options === void 0 ? void 0 : options.forceQuery) && recordsAreReadable(cached)) {
            return cached;
        }
        const queried = yield queryAllRecords(ds, outFields, options === null || options === void 0 ? void 0 : options.widgetId);
        if (recordsAreReadable(queried))
            return queried;
        if (queried.length)
            return queried;
        if (!(options === null || options === void 0 ? void 0 : options.forceQuery))
            return cached;
        return queried.length ? queried : cached;
    });
}
function normalizeRecorteToken(value) {
    return value
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[\s-]+/g, '_');
}
function isYearNamedField(field) {
    var _a, _b;
    const y = (_b = (_a = parseYear(field.jimuName)) !== null && _a !== void 0 ? _a : parseYear(field.name)) !== null && _b !== void 0 ? _b : parseYear(field.alias);
    return y != null && y >= 1985 && y <= 2035;
}
function findRecorteNameField(fields) {
    var _a;
    const patterns = ['recorte', 'regiao', 'região', 'bioma', 'nome', 'name', 'label'];
    return ((_a = fields.find((f) => {
        var _a, _b, _c, _d;
        const j = (_b = (_a = f.jimuName) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== null && _b !== void 0 ? _b : '';
        const n = (_d = (_c = f.name) === null || _c === void 0 ? void 0 : _c.toLowerCase()) !== null && _d !== void 0 ? _d : '';
        return patterns.some((p) => j.includes(p) || n.includes(p));
    })) !== null && _a !== void 0 ? _a : null);
}
/** Layout alternativo: cada registro = recorte; colunas numéricas = anos. */
function buildYearSeriesFromRecorteRows(records, recorteFieldJimu, fields) {
    var _a, _b, _c;
    const yearFields = fields.filter(isYearNamedField);
    if (!yearFields.length)
        return [];
    const target = normalizeRecorteToken(recorteFieldJimu);
    const nameField = findRecorteNameField(fields);
    const row = (_a = records.find((rec) => {
        if (nameField) {
            const label = readRecordValue(rec, nameField, nameField.jimuName);
            if (label != null && normalizeRecorteToken(String(label)) === target) {
                return true;
            }
        }
        for (const f of fields) {
            if (isYearNamedField(f) || f.jimuName === recorteFieldJimu)
                continue;
            const v = readRecordValue(rec, f, f.jimuName);
            if (v != null && normalizeRecorteToken(String(v)) === target) {
                return true;
            }
        }
        return false;
    })) !== null && _a !== void 0 ? _a : null;
    if (!row)
        return [];
    const series = [];
    for (const yf of yearFields) {
        const year = (_c = (_b = parseYear(yf.jimuName)) !== null && _b !== void 0 ? _b : parseYear(yf.name)) !== null && _c !== void 0 ? _c : parseYear(yf.alias);
        const value = parseNumericValue(readRecordValue(row, yf, yf.jimuName));
        if (year == null || value == null)
            continue;
        series.push({ year, value });
    }
    return series.sort((a, b) => a.year - b.year);
}
function buildYearSeriesYearRows(records, yearFieldJimu, recorteFieldJimu, fields) {
    const yearField = (fields === null || fields === void 0 ? void 0 : fields.length)
        ? findFieldByJimuName(fields, yearFieldJimu)
        : null;
    const recorteField = (fields === null || fields === void 0 ? void 0 : fields.length)
        ? findFieldByJimuName(fields, recorteFieldJimu)
        : null;
    const series = [];
    for (const rec of records) {
        const year = parseYear(readRecordValue(rec, yearField, yearFieldJimu));
        const value = parseNumericValue(readRecordValue(rec, recorteField, recorteFieldJimu));
        if (year == null || value == null)
            continue;
        series.push({ year, value });
    }
    return series.sort((a, b) => a.year - b.year);
}
function collectRecordAttributeKeys(records) {
    const keys = new Set();
    for (const rec of records.slice(0, 100)) {
        Object.keys(getPlainAttributes(rec)).forEach((k) => keys.add(k));
    }
    return [...keys];
}
function resolveKeysFromAttributeNames(keys, yearFieldJimu, recorteFieldJimu) {
    const recorteKey = keys.find((k) => k.toLowerCase() === recorteFieldJimu.toLowerCase() ||
        normalizeRecorteToken(k) === normalizeRecorteToken(recorteFieldJimu));
    let yearKey = keys.find((k) => k.toLowerCase() === yearFieldJimu.toLowerCase());
    if (!yearKey) {
        yearKey = keys.find((k) => YEAR_NAME_PATTERNS.some((p) => k.toLowerCase() === p || k.toLowerCase().includes(p)));
    }
    if (!yearKey || !recorteKey)
        return null;
    return { yearKey, recorteKey };
}
/** Último recurso: infere colunas pelos nomes reais nos atributos retornados. */
function buildYearSeriesInferred(records, yearFieldJimu, recorteFieldJimu) {
    const keys = collectRecordAttributeKeys(records);
    const resolved = resolveKeysFromAttributeNames(keys, yearFieldJimu, recorteFieldJimu);
    if (!resolved)
        return [];
    const series = [];
    for (const rec of records) {
        const attrs = getPlainAttributes(rec);
        const year = parseYear(attrs[resolved.yearKey]);
        const value = parseNumericValue(attrs[resolved.recorteKey]);
        if (year == null || value == null)
            continue;
        series.push({ year, value });
    }
    return series.sort((a, b) => a.year - b.year);
}
/** Série a partir de DataRecords (getFieldValue / getDataBeforeMapping). */
function buildYearSeriesFromRecords(records, yearFieldJimu, recorteFieldJimu, fields) {
    return buildYearSeries(records, yearFieldJimu, recorteFieldJimu, fields);
}
function buildYearSeries(records, yearFieldJimu, recorteFieldJimu, fields) {
    const yearRows = buildYearSeriesYearRows(records, yearFieldJimu, recorteFieldJimu, fields);
    if (yearRows.length > 0)
        return yearRows;
    if (fields === null || fields === void 0 ? void 0 : fields.length) {
        const alt = buildYearSeriesFromRecorteRows(records, recorteFieldJimu, fields);
        if (alt.length > 0)
            return alt;
    }
    return buildYearSeriesInferred(records, yearFieldJimu, recorteFieldJimu);
}
function formatYearsRangeSummary(series) {
    if (!series.length)
        return null;
    const min = series[0].year;
    const max = series[series.length - 1].year;
    const count = series.length;
    if (min === max)
        return `${min} (${count} ano)`;
    return `${min}–${max} (${count} anos)`;
}
function isYearOutOfTypicalRange(year) {
    return year < 2001 || year > 2025;
}
/** Variação percentual do valor inicial (ano mais antigo) para o final (ano mais recente). */
function calcPercentVariation(valueInicial, valueFinal) {
    if (!Number.isFinite(valueInicial) || !Number.isFinite(valueFinal))
        return null;
    if (valueInicial === 0)
        return null;
    return ((valueFinal - valueInicial) / valueInicial) * 100;
}
function formatPercentVariation(pct) {
    const sign = pct > 0 ? '+' : '';
    return `${sign}${pct.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}%`;
}
function getValueForYear(series, year) {
    const row = series.find((r) => r.year === year);
    return row != null ? row.value : null;
}
/** Soma os valores dos anos informados; retorna null se algum ano não tiver dado. */
function sumValuesForYears(series, years) {
    if (!years.length)
        return null;
    let sum = 0;
    for (const year of years) {
        const value = getValueForYear(series, year);
        if (value == null)
            return null;
        sum += value;
    }
    return sum;
}
/** Anos disponíveis para o período inicial (antes do período final, se houver). */
function getYearsAllowedForInicial(allYears, periodoFinal) {
    const blocked = new Set(periodoFinal);
    const maxFinal = periodoFinal.length ? Math.min(...periodoFinal) : Infinity;
    return allYears.filter((y) => !blocked.has(y) && y < maxFinal);
}
/** Anos disponíveis para o período final (depois do período inicial, se houver). */
function getYearsAllowedForFinal(allYears, periodoInicial) {
    const blocked = new Set(periodoInicial);
    const minInicial = periodoInicial.length ? Math.max(...periodoInicial) : -Infinity;
    return allYears.filter((y) => !blocked.has(y) && y > minInicial);
}
/** Marca/desmarca um ano mantendo apenas sequências consecutivas. */
function toggleConsecutiveYear(period, year) {
    if (period.includes(year)) {
        return { next: period.filter((y) => y !== year), rejected: false };
    }
    const next = [...period, year].sort((a, b) => a - b);
    if (!areConsecutiveYears(next)) {
        return { next: period, rejected: true };
    }
    return { next, rejected: false };
}
/** Verifica se os anos formam uma sequência consecutiva (ex.: 2010, 2011, 2012). */
function areConsecutiveYears(years) {
    if (years.length <= 1)
        return true;
    const sorted = [...years].sort((a, b) => a - b);
    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i] - sorted[i - 1] !== 1)
            return false;
    }
    return true;
}
/** Rótulo compacto para um ou mais anos (ex.: "2010" ou "2010–2012 (3 anos)"). */
function formatPeriodLabel(years) {
    const sorted = [...years].sort((a, b) => a - b);
    if (!sorted.length)
        return '';
    if (sorted.length === 1)
        return String(sorted[0]);
    return `${sorted[0]}–${sorted[sorted.length - 1]} (${sorted.length} anos)`;
}
/** Intervalo de anos sem contagem (ex.: "2010" ou "2010–2012") — uso em resultados. */
function formatPeriodRangeLabel(years) {
    const sorted = [...years].sort((a, b) => a - b);
    if (!sorted.length)
        return '';
    if (sorted.length === 1)
        return String(sorted[0]);
    return `${sorted[0]}–${sorted[sorted.length - 1]}`;
}
function computePeriodVariation(series, periodoInicial, periodoFinal) {
    const ini = [...periodoInicial].sort((a, b) => a - b);
    const fin = [...periodoFinal].sort((a, b) => a - b);
    if (!ini.length || !fin.length) {
        return {
            ok: false,
            message: 'Selecione pelo menos um ano em cada período.'
        };
    }
    if (ini.length !== fin.length) {
        return {
            ok: false,
            message: 'O período inicial e o período final devem ter a mesma quantidade de anos.'
        };
    }
    if (!areConsecutiveYears(ini)) {
        return {
            ok: false,
            message: 'Os anos do período inicial devem ser consecutivos.'
        };
    }
    if (!areConsecutiveYears(fin)) {
        return {
            ok: false,
            message: 'Os anos do período final devem ser consecutivos.'
        };
    }
    const iniSet = new Set(ini);
    if (fin.some((y) => iniSet.has(y))) {
        return {
            ok: false,
            message: 'Um ano não pode pertencer aos dois períodos ao mesmo tempo.'
        };
    }
    const maxInicial = ini[ini.length - 1];
    const minFinal = fin[0];
    if (maxInicial >= minFinal) {
        return {
            ok: false,
            message: 'O período final deve ser posterior ao período inicial.'
        };
    }
    const valueInicial = sumValuesForYears(series, ini);
    const valueFinal = sumValuesForYears(series, fin);
    if (valueInicial == null || valueFinal == null) {
        return {
            ok: false,
            message: 'Um ou mais anos selecionados não possuem dado para este recorte.'
        };
    }
    const pct = calcPercentVariation(valueInicial, valueFinal);
    if (pct == null) {
        return {
            ok: false,
            message: 'A soma do período inicial é zero; não é possível calcular a variação percentual.'
        };
    }
    return {
        ok: true,
        data: {
            pct,
            valueInicial,
            valueFinal,
            yearsInicial: ini,
            yearsFinal: fin
        }
    };
}
/** Comparação entre dois anos únicos (atalho para períodos de um ano). */
function computeVariation(series, anoInicial, anoFinal) {
    return computePeriodVariation(series, [anoInicial], [anoFinal]);
}


/***/ }),

/***/ "./your-extensions/widgets/comparador_prodes/src/utils/recorte-config.ts":
/*!*******************************************************************************!*\
  !*** ./your-extensions/widgets/comparador_prodes/src/utils/recorte-config.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extractRecorteSelectValue: () => (/* binding */ extractRecorteSelectValue),
/* harmony export */   normalizeRecorteFieldConfig: () => (/* binding */ normalizeRecorteFieldConfig)
/* harmony export */ });
/** Normaliza recorteField salvo na config (string ou objeto do Select do EXB). */
function normalizeRecorteFieldConfig(value) {
    var _a;
    if (value == null)
        return undefined;
    if (typeof value === 'string') {
        const trimmed = value.trim();
        if (!trimmed || trimmed === '[object Object]')
            return undefined;
        return trimmed;
    }
    if (typeof value === 'number' && Number.isFinite(value)) {
        return String(value);
    }
    if (typeof value === 'object') {
        const obj = value;
        const candidates = [
            obj.jimuName,
            obj.name,
            obj.value,
            obj.fieldName,
            obj.key,
            (_a = obj.target) === null || _a === void 0 ? void 0 : _a.value
        ];
        for (const candidate of candidates) {
            const normalized = normalizeRecorteFieldConfig(candidate);
            if (normalized)
                return normalized;
        }
    }
    return undefined;
}
/** Valor bruto recebido do onChange do Select (varia entre versões do EXB). */
function extractRecorteSelectValue(evt, value) {
    if (value != null && value !== '')
        return value;
    const target = evt === null || evt === void 0 ? void 0 : evt.target;
    if ((target === null || target === void 0 ? void 0 : target.value) != null && target.value !== '')
        return target.value;
    return value;
}


/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**************************************************************************!*\
  !*** ./your-extensions/widgets/comparador_prodes/src/runtime/widget.tsx ***!
  \**************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _utils_recorte_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/recorte-config */ "./your-extensions/widgets/comparador_prodes/src/utils/recorte-config.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./your-extensions/widgets/comparador_prodes/src/constants.ts");
/* harmony import */ var _components_variation_result__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/variation-result */ "./your-extensions/widgets/comparador_prodes/src/runtime/components/variation-result.tsx");
/* harmony import */ var _hooks_use_prodes_series__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/use-prodes-series */ "./your-extensions/widgets/comparador_prodes/src/runtime/hooks/use-prodes-series.ts");
/* harmony import */ var _hooks_use_period_selection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/use-period-selection */ "./your-extensions/widgets/comparador_prodes/src/runtime/hooks/use-period-selection.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles */ "./your-extensions/widgets/comparador_prodes/src/runtime/styles.ts");
/* harmony import */ var _year_period_picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./year-period-picker */ "./your-extensions/widgets/comparador_prodes/src/runtime/year-period-picker.tsx");
/** @jsx jsx */









const Widget = (props) => {
    var _a, _b, _c;
    const useDs = (_a = props.useDataSources) === null || _a === void 0 ? void 0 : _a[0];
    const yearField = (_b = props.config) === null || _b === void 0 ? void 0 : _b.yearField;
    const recorteField = (0,_utils_recorte_config__WEBPACK_IMPORTED_MODULE_2__.normalizeRecorteFieldConfig)((_c = props.config) === null || _c === void 0 ? void 0 : _c.recorteField);
    const { series, loading, loadingMessage, error, handleDataSourceReady, handleDataSourceInfoChange, applySchema, waitingForLayer } = (0,_hooks_use_prodes_series__WEBPACK_IMPORTED_MODULE_5__.useProdesSeries)({ recorteField, yearField, widgetId: props.id });
    const availableYears = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => series.map((r) => r.year), [series]);
    const { periodoInicial, periodoFinal, yearsForInicial, yearsForFinal, hintInicial, hintFinal, variation, hasPeriodSelection, clearPeriodSelection, handlePeriodoInicialChange, handlePeriodoFinalChange, rejectPeriodoInicial, rejectPeriodoFinal } = (0,_hooks_use_period_selection__WEBPACK_IMPORTED_MODULE_6__.usePeriodSelection)(series, availableYears, recorteField);
    const isConfigured = Boolean(useDs && recorteField);
    const showForm = isConfigured && !loading && !waitingForLayer && !error && series.length > 0;
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-comparador-prodes jimu-widget", css: _styles__WEBPACK_IMPORTED_MODULE_7__.widgetStyles },
        useDs && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceComponent, { useDataSource: useDs, widgetId: props.id, query: _constants__WEBPACK_IMPORTED_MODULE_3__.PRODES_TABLE_QUERY, queryScope: jimu_core__WEBPACK_IMPORTED_MODULE_0__.QueryScope.InAllData, queryAll: true, onDataSourceCreated: handleDataSourceReady, onDataSourceSchemaChange: (schema) => {
                applySchema(schema);
            }, onDataSourceInfoChange: handleDataSourceInfoChange })),
        !isConfigured && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", null, _constants__WEBPACK_IMPORTED_MODULE_3__.MSG_NOT_CONFIGURED),
        isConfigured && (loading || waitingForLayer) && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Loading, null),
            loadingMessage && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "comparador-hint" }, loadingMessage)))),
        isConfigured && error && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "comparador-error" }, error),
        isConfigured &&
            !loading &&
            !waitingForLayer &&
            !error &&
            series.length === 0 && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", null, _constants__WEBPACK_IMPORTED_MODULE_3__.MSG_NO_DATA),
        showForm && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "comparador-form" },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "comparador-field-row" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, null, _constants__WEBPACK_IMPORTED_MODULE_3__.LABEL_PERIODO_INICIAL),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_year_period_picker__WEBPACK_IMPORTED_MODULE_8__.YearPeriodPicker, { availableYears: yearsForInicial, selectedYears: periodoInicial, placeholder: _constants__WEBPACK_IMPORTED_MODULE_3__.PLACEHOLDER_PERIODO_INICIAL, hint: hintInicial, onChange: handlePeriodoInicialChange, onRejectedSelection: rejectPeriodoInicial })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "comparador-field-row" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, null, _constants__WEBPACK_IMPORTED_MODULE_3__.LABEL_PERIODO_FINAL),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_year_period_picker__WEBPACK_IMPORTED_MODULE_8__.YearPeriodPicker, { availableYears: yearsForFinal, selectedYears: periodoFinal, placeholder: _constants__WEBPACK_IMPORTED_MODULE_3__.PLACEHOLDER_PERIODO_FINAL, hint: hintFinal, onChange: handlePeriodoFinalChange, onRejectedSelection: rejectPeriodoFinal }),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "comparador-hint" }, _constants__WEBPACK_IMPORTED_MODULE_3__.HINT_PERIOD_RULES)),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "comparador-actions" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { size: "sm", type: "secondary", className: "comparador-btn-limpar", disabled: !hasPeriodSelection, onClick: clearPeriodSelection }, "Limpar")),
            variation != null && variation.ok === false && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "comparador-error comparador-error--block" }, variation.message)),
            variation != null && variation.ok === true && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_variation_result__WEBPACK_IMPORTED_MODULE_4__.VariationResultPanel, { data: variation.data }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Widget);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxQztBQUU5QixNQUFNLFNBQVMsR0FBRyxLQUFLO0FBRTlCLHlFQUF5RTtBQUNsRSxNQUFNLGtCQUFrQixHQUFHLG9EQUFTLENBQUM7SUFDMUMsS0FBSyxFQUFFLEtBQUs7SUFDWixTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDaEIsY0FBYyxFQUFFLEtBQUs7SUFDckIsUUFBUSxFQUFFLElBQUk7Q0FDZixDQUFDO0FBRUssTUFBTSxxQkFBcUIsR0FBRyxnQ0FBZ0M7QUFDOUQsTUFBTSxtQkFBbUIsR0FBRyw0QkFBNEI7QUFFeEQsTUFBTSxrQkFBa0IsR0FDN0Isc0VBQXNFO0FBRWpFLE1BQU0sV0FBVyxHQUFHLDZDQUE2QztBQUVqRSxNQUFNLGVBQWUsR0FBRywrQ0FBK0M7QUFFdkUsTUFBTSxpQkFBaUIsR0FBRyxvQ0FBb0M7QUFFOUQsTUFBTSxtQkFBbUIsR0FDOUIsa0hBQWtIO0FBRTdHLE1BQU0sa0JBQWtCLEdBQzdCLHVGQUF1RjtJQUN2Rix5R0FBeUc7SUFDekcsc0RBQXNEO0FBRWpELE1BQU0sZ0JBQWdCLEdBQUcsOENBQThDO0FBRXZFLE1BQU0saUJBQWlCLEdBQzVCLCtGQUErRjtBQUUxRixNQUFNLDJCQUEyQixHQUFHLDBDQUEwQztBQUM5RSxNQUFNLHlCQUF5QixHQUFHLHdDQUF3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDakYsZUFBZTtBQUN1QjtBQUtMO0FBQ2dDO0FBTTFELE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBd0IsRUFBRSxFQUFFO0lBQ3JFLE1BQU0sSUFBSSxHQUFHLCtEQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7SUFFdkMsT0FBTyxDQUNMLHdEQUFLLFNBQVMsRUFBQyxtQkFBbUI7UUFDaEMsd0RB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QUFjLEVBQUUsYUFBYSxFQUM3QixhQUFhLEVBQUUsWUFBWSxFQUMzQixXQUFXLEVBQUUsaUVBQXlCLEVBQ3RDLElBQUksRUFBRSxTQUFTLEVBQ2YsUUFBUSxFQUFFLHdCQUF3QixFQUNsQyxtQkFBbUIsRUFBRSxrQkFBa0IsR0FDdkM7Z0JBQ0Ysd0RBQUssU0FBUyxFQUFDLGlCQUFpQixJQUFFLHlEQUFpQixDQUFPLENBQ3REO1lBRU4sd0RBQUssU0FBUyxFQUFDLG9CQUFvQjtnQkFDakMsK0NBQUMsMkNBQU0sSUFDTCxJQUFJLEVBQUMsSUFBSSxFQUNULElBQUksRUFBQyxXQUFXLEVBQ2hCLFNBQVMsRUFBQyx1QkFBdUIsRUFDakMsUUFBUSxFQUFFLENBQUMsa0JBQWtCLEVBQzdCLE9BQU8sRUFBRSxvQkFBb0IsYUFHdEIsQ0FDTDtZQUVMLFNBQVMsSUFBSSxJQUFJLElBQUksU0FBUyxDQUFDLEVBQUUsS0FBSyxLQUFLLElBQUksQ0FDOUMsc0RBQUcsU0FBUyxFQUFDLDBDQUEwQyxJQUNwRCxTQUFTLENBQUMsT0FBTyxDQUNoQixDQUNMO1lBRUEsU0FBUyxJQUFJLElBQUksSUFBSSxTQUFTLENBQUMsRUFBRSxLQUFLLElBQUksSUFBSSxDQUM3QywrQ0FBQyw4RUFBb0IsSUFBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksR0FBSSxDQUMvQyxDQUNHLENBQ1AsQ0FDRyxDQUNQO0FBQ0gsQ0FBQztBQUVELGlFQUFlLE1BQU07QUFFYixTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9zcmMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9zcmMvcnVudGltZS9jb21wb25lbnRzL3ZhcmlhdGlvbi1yZXN1bHQudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9zcmMvcnVudGltZS9ob29rcy91c2UtcGVyaW9kLXNlbGVjdGlvbi50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY29tcGFyYWRvcl9wcm9kZXMvc3JjL3J1bnRpbWUvaG9va3MvdXNlLXByb2Rlcy1zZXJpZXMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2NvbXBhcmFkb3JfcHJvZGVzL3NyYy9ydW50aW1lL3N0eWxlcy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY29tcGFyYWRvcl9wcm9kZXMvc3JjL3J1bnRpbWUveWVhci1wZXJpb2QtcGlja2VyLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY29tcGFyYWRvcl9wcm9kZXMvc3JjL3V0aWxzL2RhdGEtc291cmNlLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9zcmMvdXRpbHMvZm9ybWF0LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9zcmMvdXRpbHMvcHJvZGVzLXRhYmxlLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9zcmMvdXRpbHMvcmVjb3J0ZS1jb25maWcudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2NvbXBhcmFkb3JfcHJvZGVzL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW1tdXRhYmxlIH0gZnJvbSAnamltdS1jb3JlJ1xuXG5leHBvcnQgY29uc3QgQVJFQV9VTklUID0gJ2ttwrInXG5cbi8qKiBDb25zdWx0YSBwYWRyw6NvOiB0b2RvcyBvcyByZWdpc3Ryb3MgZGEgdGFiZWxhIFBST0RFUyAocGFkcsOjbyBFWEIpLiAqL1xuZXhwb3J0IGNvbnN0IFBST0RFU19UQUJMRV9RVUVSWSA9IEltbXV0YWJsZSh7XG4gIHdoZXJlOiAnMT0xJyxcbiAgb3V0RmllbGRzOiBbJyonXSxcbiAgcmV0dXJuR2VvbWV0cnk6IGZhbHNlLFxuICBwYWdlU2l6ZTogMjAwMFxufSlcblxuZXhwb3J0IGNvbnN0IExBQkVMX1BFUklPRE9fSU5JQ0lBTCA9ICdBbm8gaW5pY2lhbCBvdSBwZXLDrW9kbyBpbmljaWFsJ1xuZXhwb3J0IGNvbnN0IExBQkVMX1BFUklPRE9fRklOQUwgPSAnQW5vIGZpbmFsIG91IHBlcsOtb2RvIGZpbmFsJ1xuXG5leHBvcnQgY29uc3QgTVNHX05PVF9DT05GSUdVUkVEID1cbiAgJ0VzdGEgZmVycmFtZW50YSBhaW5kYSBuw6NvIGZvaSBjb25maWd1cmFkYSBwZWxvIGF1dG9yIGRhIGV4cGVyacOqbmNpYS4nXG5cbmV4cG9ydCBjb25zdCBNU0dfTk9fREFUQSA9ICdOw6NvIGjDoSBkYWRvcyBkaXNwb27DrXZlaXMgcGFyYSBlc3RlIHJlY29ydGUuJ1xuXG5leHBvcnQgY29uc3QgTVNHX0xPQURfRkFJTEVEID0gJ07Do28gZm9pIHBvc3PDrXZlbCBjYXJyZWdhciBvcyBkYWRvcyBkYSBjYW1hZGEuJ1xuXG5leHBvcnQgY29uc3QgTVNHX0xPQURJTkdfVEFCTEUgPSAnQ2FycmVnYW5kbyBkYWRvcyBkYSB0YWJlbGEgUFJPREVT4oCmJ1xuXG5leHBvcnQgY29uc3QgTVNHX0lOVkFMSURfUkVDT1JURSA9XG4gICdSZWNvcnRlIGdlb2dyw6FmaWNvIGludsOhbGlkbyBuYSBjb25maWd1cmHDp8Ojby4gQWJyYSBhcyBjb25maWd1cmHDp8O1ZXMgZGVzdGEgd2lkZ2V0IGUgc2VsZWNpb25lIG8gcmVjb3J0ZSBub3ZhbWVudGUuJ1xuXG5leHBvcnQgY29uc3QgTVNHX0VYVFJBQ1RfRkFJTEVEID1cbiAgJ1JlZ2lzdHJvcyBlbmNvbnRyYWRvcywgbWFzIG7Do28gZm9pIHBvc3PDrXZlbCBleHRyYWlyIGFubyBlIHZhbG9yZXMgcGFyYSBlc3RlIHJlY29ydGUuICcgK1xuICAnQ29uZmlybWUgc2UgYSB0YWJlbGEgdGVtIHVtYSBsaW5oYSBwb3IgYW5vIChjb2x1bmEgXCJhbm9cIikgb3UgdW1hIGxpbmhhIHBvciByZWNvcnRlIChjb2x1bmFzIGNvbSBhbm9zKSwgJyArXG4gICdlIHNlIGEgY29sdW5hIGRvIHJlY29ydGUgcG9zc3VpIHZhbG9yZXMgcHJlZW5jaGlkb3MuJ1xuXG5leHBvcnQgY29uc3QgSElOVF9DT05TRUNVVElWTyA9ICdPcyBhbm9zIHNlbGVjaW9uYWRvcyBkZXZlbSBzZXIgY29uc2VjdXRpdm9zLidcblxuZXhwb3J0IGNvbnN0IEhJTlRfUEVSSU9EX1JVTEVTID1cbiAgJ09zIGRvaXMgcGVyw61vZG9zIGRldmVtIHRlciBhIG1lc21hIHF1YW50aWRhZGUgZGUgYW5vcyBjb25zZWN1dGl2b3MsIHNlbSByZXBldGnDp8OjbyBlbnRyZSBlbGVzLidcblxuZXhwb3J0IGNvbnN0IFBMQUNFSE9MREVSX1BFUklPRE9fSU5JQ0lBTCA9ICdTZWxlY2lvbmUgbyhzKSBhbm8ocykgZG8gcGVyw61vZG8gaW5pY2lhbCdcbmV4cG9ydCBjb25zdCBQTEFDRUhPTERFUl9QRVJJT0RPX0ZJTkFMID0gJ1NlbGVjaW9uZSBvKHMpIGFubyhzKSBkbyBwZXLDrW9kbyBmaW5hbCdcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3QsIGpzeCB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7XG4gIGZvcm1hdFBlcmNlbnRWYXJpYXRpb24sXG4gIGZvcm1hdFBlcmlvZFJhbmdlTGFiZWwsXG4gIHR5cGUgVmFyaWF0aW9uUmVzdWx0XG59IGZyb20gJy4uLy4uL3V0aWxzL3Byb2Rlcy10YWJsZSdcbmltcG9ydCB7IGZvcm1hdEFyZWEsIGdldFZhcmlhdGlvblRvbmUgfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQnXG5cbmludGVyZmFjZSBWYXJpYXRpb25SZXN1bHRQcm9wcyB7XG4gIGRhdGE6IFZhcmlhdGlvblJlc3VsdFxufVxuXG5leHBvcnQgY29uc3QgVmFyaWF0aW9uUmVzdWx0UGFuZWwgPSAoeyBkYXRhIH06IFZhcmlhdGlvblJlc3VsdFByb3BzKSA9PiB7XG4gIGNvbnN0IHRvbmUgPSBnZXRWYXJpYXRpb25Ub25lKGRhdGEucGN0KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYXJhZG9yLXJlc3VsdFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYXJhZG9yLXJlc3VsdC10aXRsZVwiPlxuICAgICAgICBWYXJpYcOnw6NvIHBlcmNlbnR1YWwgKFxuICAgICAgICB7Zm9ybWF0UGVyaW9kUmFuZ2VMYWJlbChkYXRhLnllYXJzSW5pY2lhbCl9IOKGknsnICd9XG4gICAgICAgIHtmb3JtYXRQZXJpb2RSYW5nZUxhYmVsKGRhdGEueWVhcnNGaW5hbCl9KVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbXBhcmFkb3ItcmVzdWx0LXZhbHVlIGNvbXBhcmFkb3ItcmVzdWx0LXZhbHVlLS0ke3RvbmV9YH0+XG4gICAgICAgIHtmb3JtYXRQZXJjZW50VmFyaWF0aW9uKGRhdGEucGN0KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYXJhZG9yLXJlc3VsdC1kZXRhaWxcIj5cbiAgICAgICAge2Zvcm1hdEFyZWEoZGF0YS52YWx1ZUluaWNpYWwpfSBubyBwZXLDrW9kbyBpbmljaWFsIOKGknsnICd9XG4gICAgICAgIHtmb3JtYXRBcmVhKGRhdGEudmFsdWVGaW5hbCl9IG5vIHBlcsOtb2RvIGZpbmFsXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiaW1wb3J0IHsgUmVhY3QgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQge1xuICBjb21wdXRlUGVyaW9kVmFyaWF0aW9uLFxuICBnZXRZZWFyc0FsbG93ZWRGb3JGaW5hbCxcbiAgZ2V0WWVhcnNBbGxvd2VkRm9ySW5pY2lhbCxcbiAgdHlwZSBZZWFyVmFsdWVSb3dcbn0gZnJvbSAnLi4vLi4vdXRpbHMvcHJvZGVzLXRhYmxlJ1xuaW1wb3J0IHsgSElOVF9DT05TRUNVVElWTyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVBlcmlvZFNlbGVjdGlvbiAoXG4gIHNlcmllczogWWVhclZhbHVlUm93W10sXG4gIGF2YWlsYWJsZVllYXJzOiBudW1iZXJbXSxcbiAgcmVjb3J0ZUZpZWxkPzogc3RyaW5nXG4pIHtcbiAgY29uc3QgW3BlcmlvZG9JbmljaWFsLCBzZXRQZXJpb2RvSW5pY2lhbF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXJbXT4oW10pXG4gIGNvbnN0IFtwZXJpb2RvRmluYWwsIHNldFBlcmlvZG9GaW5hbF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXJbXT4oW10pXG4gIGNvbnN0IFtoaW50SW5pY2lhbCwgc2V0SGludEluaWNpYWxdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2hpbnRGaW5hbCwgc2V0SGludEZpbmFsXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXG5cbiAgY29uc3QgeWVhcnNGb3JJbmljaWFsID0gUmVhY3QudXNlTWVtbyhcbiAgICAoKSA9PiBnZXRZZWFyc0FsbG93ZWRGb3JJbmljaWFsKGF2YWlsYWJsZVllYXJzLCBwZXJpb2RvRmluYWwpLFxuICAgIFthdmFpbGFibGVZZWFycywgcGVyaW9kb0ZpbmFsXVxuICApXG5cbiAgY29uc3QgeWVhcnNGb3JGaW5hbCA9IFJlYWN0LnVzZU1lbW8oXG4gICAgKCkgPT4gZ2V0WWVhcnNBbGxvd2VkRm9yRmluYWwoYXZhaWxhYmxlWWVhcnMsIHBlcmlvZG9JbmljaWFsKSxcbiAgICBbYXZhaWxhYmxlWWVhcnMsIHBlcmlvZG9JbmljaWFsXVxuICApXG5cbiAgY29uc3QgdmFyaWF0aW9uID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKCFwZXJpb2RvSW5pY2lhbC5sZW5ndGggfHwgIXBlcmlvZG9GaW5hbC5sZW5ndGgpIHJldHVybiBudWxsXG4gICAgcmV0dXJuIGNvbXB1dGVQZXJpb2RWYXJpYXRpb24oc2VyaWVzLCBwZXJpb2RvSW5pY2lhbCwgcGVyaW9kb0ZpbmFsKVxuICB9LCBbcGVyaW9kb0luaWNpYWwsIHBlcmlvZG9GaW5hbCwgc2VyaWVzXSlcblxuICBjb25zdCBoYXNQZXJpb2RTZWxlY3Rpb24gPVxuICAgIHBlcmlvZG9JbmljaWFsLmxlbmd0aCA+IDAgfHwgcGVyaW9kb0ZpbmFsLmxlbmd0aCA+IDBcblxuICBjb25zdCBjbGVhclBlcmlvZFNlbGVjdGlvbiA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRQZXJpb2RvSW5pY2lhbChbXSlcbiAgICBzZXRQZXJpb2RvRmluYWwoW10pXG4gICAgc2V0SGludEluaWNpYWwobnVsbClcbiAgICBzZXRIaW50RmluYWwobnVsbClcbiAgfSwgW10pXG5cbiAgY29uc3QgaGFuZGxlUGVyaW9kb0luaWNpYWxDaGFuZ2UgPSBSZWFjdC51c2VDYWxsYmFjaygoeWVhcnM6IG51bWJlcltdKSA9PiB7XG4gICAgc2V0UGVyaW9kb0luaWNpYWwoeWVhcnMpXG4gICAgc2V0SGludEluaWNpYWwobnVsbClcbiAgfSwgW10pXG5cbiAgY29uc3QgaGFuZGxlUGVyaW9kb0ZpbmFsQ2hhbmdlID0gUmVhY3QudXNlQ2FsbGJhY2soKHllYXJzOiBudW1iZXJbXSkgPT4ge1xuICAgIHNldFBlcmlvZG9GaW5hbCh5ZWFycylcbiAgICBzZXRIaW50RmluYWwobnVsbClcbiAgfSwgW10pXG5cbiAgY29uc3QgcmVqZWN0UGVyaW9kb0luaWNpYWwgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0SGludEluaWNpYWwoSElOVF9DT05TRUNVVElWTylcbiAgfSwgW10pXG5cbiAgY29uc3QgcmVqZWN0UGVyaW9kb0ZpbmFsID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldEhpbnRGaW5hbChISU5UX0NPTlNFQ1VUSVZPKVxuICB9LCBbXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFBlcmlvZG9JbmljaWFsKFtdKVxuICAgIHNldFBlcmlvZG9GaW5hbChbXSlcbiAgICBzZXRIaW50SW5pY2lhbChudWxsKVxuICAgIHNldEhpbnRGaW5hbChudWxsKVxuICB9LCBbcmVjb3J0ZUZpZWxkXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghcGVyaW9kb0luaWNpYWwubGVuZ3RoIHx8ICFwZXJpb2RvRmluYWwubGVuZ3RoKSByZXR1cm5cbiAgICBjb25zdCBhbGxvd2VkID0gbmV3IFNldChnZXRZZWFyc0FsbG93ZWRGb3JGaW5hbChhdmFpbGFibGVZZWFycywgcGVyaW9kb0luaWNpYWwpKVxuICAgIGNvbnN0IGZpbHRlcmVkID0gcGVyaW9kb0ZpbmFsLmZpbHRlcigoeSkgPT4gYWxsb3dlZC5oYXMoeSkpXG4gICAgaWYgKGZpbHRlcmVkLmxlbmd0aCAhPT0gcGVyaW9kb0ZpbmFsLmxlbmd0aCkge1xuICAgICAgc2V0UGVyaW9kb0ZpbmFsKGZpbHRlcmVkKVxuICAgIH1cbiAgfSwgW3BlcmlvZG9JbmljaWFsLCBwZXJpb2RvRmluYWwsIGF2YWlsYWJsZVllYXJzXSlcblxuICByZXR1cm4ge1xuICAgIHBlcmlvZG9JbmljaWFsLFxuICAgIHBlcmlvZG9GaW5hbCxcbiAgICB5ZWFyc0ZvckluaWNpYWwsXG4gICAgeWVhcnNGb3JGaW5hbCxcbiAgICBoaW50SW5pY2lhbCxcbiAgICBoaW50RmluYWwsXG4gICAgdmFyaWF0aW9uLFxuICAgIGhhc1BlcmlvZFNlbGVjdGlvbixcbiAgICBjbGVhclBlcmlvZFNlbGVjdGlvbixcbiAgICBoYW5kbGVQZXJpb2RvSW5pY2lhbENoYW5nZSxcbiAgICBoYW5kbGVQZXJpb2RvRmluYWxDaGFuZ2UsXG4gICAgcmVqZWN0UGVyaW9kb0luaWNpYWwsXG4gICAgcmVqZWN0UGVyaW9kb0ZpbmFsXG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIFJlYWN0LFxuICB0eXBlIERhdGFTb3VyY2UsXG4gIHR5cGUgSU1EYXRhU291cmNlU2NoZW1hLFxuICBEYXRhU291cmNlU3RhdHVzXG59IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7XG4gIGF0dHJpYnV0ZVJvd3NTY29yZSxcbiAgZGVzY3JpYmVSb3dzRm9yRXh0cmFjdEVycm9yLFxuICBkZXRlY3RZZWFyRmllbGQsXG4gIGVucmljaEF0dHJpYnV0ZVJvd3NXaXRoUmVjb3JkcyxcbiAgbG9hZFByb2Rlc1llYXJTZXJpZXMsXG4gIHNjaGVtYVRvRmllbGRMaXN0LFxuICB0eXBlIFllYXJWYWx1ZVJvd1xufSBmcm9tICcuLi8uLi91dGlscy9wcm9kZXMtdGFibGUnXG5pbXBvcnQge1xuICBlbnN1cmVEYXRhU291cmNlU2NoZW1hLFxuICBnZXRRdWVyeWFibGVEYXRhU291cmNlLFxuICBpc1Byb2Rlc0RhdGFSZWFkeVxufSBmcm9tICcuLi8uLi91dGlscy9kYXRhLXNvdXJjZSdcbmltcG9ydCB7XG4gIE1TR19FWFRSQUNUX0ZBSUxFRCxcbiAgTVNHX0lOVkFMSURfUkVDT1JURSxcbiAgTVNHX0xPQURfRkFJTEVELFxuICBNU0dfTE9BRElOR19UQUJMRVxufSBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5pbXBvcnQgeyBub3JtYWxpemVSZWNvcnRlRmllbGRDb25maWcgfSBmcm9tICcuLi8uLi91dGlscy9yZWNvcnRlLWNvbmZpZydcblxuZXhwb3J0IGludGVyZmFjZSBVc2VQcm9kZXNTZXJpZXNQYXJhbXMge1xuICByZWNvcnRlRmllbGQ/OiBzdHJpbmdcbiAgeWVhckZpZWxkPzogc3RyaW5nXG4gIHdpZGdldElkPzogc3RyaW5nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VQcm9kZXNTZXJpZXMgKHtcbiAgcmVjb3J0ZUZpZWxkLFxuICB5ZWFyRmllbGQsXG4gIHdpZGdldElkXG59OiBVc2VQcm9kZXNTZXJpZXNQYXJhbXMpIHtcbiAgY29uc3QgW2RzUmVmLCBzZXREc1JlZl0gPSBSZWFjdC51c2VTdGF0ZTxEYXRhU291cmNlIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2RzU3RhdHVzLCBzZXREc1N0YXR1c10gPSBSZWFjdC51c2VTdGF0ZTxEYXRhU291cmNlU3RhdHVzIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpXG4gIGNvbnN0IFtmaWVsZExpc3QsIHNldEZpZWxkTGlzdF0gPSBSZWFjdC51c2VTdGF0ZShcbiAgICBbXSBhcyBSZXR1cm5UeXBlPHR5cGVvZiBzY2hlbWFUb0ZpZWxkTGlzdD5cbiAgKVxuICBjb25zdCBbc2VyaWVzLCBzZXRTZXJpZXNdID0gUmVhY3QudXNlU3RhdGU8WWVhclZhbHVlUm93W10+KFtdKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2xvYWRpbmdNZXNzYWdlLCBzZXRMb2FkaW5nTWVzc2FnZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFtkc0luZm9WZXJzaW9uLCBzZXREc0luZm9WZXJzaW9uXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlciB8IHVuZGVmaW5lZD4oXG4gICAgdW5kZWZpbmVkXG4gIClcblxuICBjb25zdCBlZmZlY3RpdmVZZWFyRmllbGQgPSB5ZWFyRmllbGQgPz8gZGV0ZWN0WWVhckZpZWxkKGZpZWxkTGlzdClcbiAgY29uc3QgZWZmZWN0aXZlUmVjb3J0ZUZpZWxkID0gbm9ybWFsaXplUmVjb3J0ZUZpZWxkQ29uZmlnKHJlY29ydGVGaWVsZClcblxuICBjb25zdCBhcHBseVNjaGVtYSA9IFJlYWN0LnVzZUNhbGxiYWNrKChzY2hlbWE6IElNRGF0YVNvdXJjZVNjaGVtYSkgPT4ge1xuICAgIHNldEZpZWxkTGlzdChzY2hlbWFUb0ZpZWxkTGlzdChzY2hlbWEpKVxuICB9LCBbXSlcblxuICBjb25zdCBoYW5kbGVEYXRhU291cmNlUmVhZHkgPSBSZWFjdC51c2VDYWxsYmFjaygoZHM6IERhdGFTb3VyY2UpID0+IHtcbiAgICBzZXREc1JlZihkcylcbiAgICB2b2lkIGVuc3VyZURhdGFTb3VyY2VTY2hlbWEoZHMpLnRoZW4oKHNjaGVtYSkgPT4ge1xuICAgICAgaWYgKHNjaGVtYSkgYXBwbHlTY2hlbWEoc2NoZW1hKVxuICAgIH0pXG4gIH0sIFthcHBseVNjaGVtYV0pXG5cbiAgY29uc3QgbG9hZFNlcmllcyA9IFJlYWN0LnVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZ2V0UXVlcnlhYmxlRGF0YVNvdXJjZShkc1JlZilcbiAgICBpZiAoIW1haW4gfHwgIWVmZmVjdGl2ZVllYXJGaWVsZCkge1xuICAgICAgc2V0U2VyaWVzKFtdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJlY29ydGVGaWVsZCAhPSBudWxsICYmICFlZmZlY3RpdmVSZWNvcnRlRmllbGQpIHtcbiAgICAgIHNldFNlcmllcyhbXSlcbiAgICAgIHNldEVycm9yKE1TR19JTlZBTElEX1JFQ09SVEUpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIWVmZmVjdGl2ZVJlY29ydGVGaWVsZCkge1xuICAgICAgc2V0U2VyaWVzKFtdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFpc1Byb2Rlc0RhdGFSZWFkeShkc1N0YXR1cykpIHJldHVyblxuXG4gICAgc2V0TG9hZGluZyh0cnVlKVxuICAgIHNldExvYWRpbmdNZXNzYWdlKE1TR19MT0FESU5HX1RBQkxFKVxuICAgIHNldEVycm9yKG51bGwpXG5cbiAgICBjb25zdCBmZXRjaE9wdHMgPSB7XG4gICAgICB5ZWFyRmllbGRKaW11OiBlZmZlY3RpdmVZZWFyRmllbGQsXG4gICAgICByZWNvcnRlRmllbGRKaW11OiBlZmZlY3RpdmVSZWNvcnRlRmllbGQsXG4gICAgICBmaWVsZHM6IGZpZWxkTGlzdC5sZW5ndGggPiAwID8gZmllbGRMaXN0IDogdW5kZWZpbmVkLFxuICAgICAgd2lkZ2V0SWRcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBzZXJpZXM6IGJ1aWx0LCByZWNvcmRzLCByb3dzIH0gPSBhd2FpdCBsb2FkUHJvZGVzWWVhclNlcmllcyhcbiAgICAgICAgbWFpbixcbiAgICAgICAgZmV0Y2hPcHRzXG4gICAgICApXG4gICAgICBzZXRTZXJpZXMoYnVpbHQpXG5cbiAgICAgIGlmIChidWlsdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaWYgKHJvd3MubGVuZ3RoID09PSAwICYmIHJlY29yZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgc2V0RXJyb3IoTVNHX0xPQURfRkFJTEVEKVxuICAgICAgICB9IGVsc2UgaWYgKHJvd3MubGVuZ3RoID4gMCAmJiBhdHRyaWJ1dGVSb3dzU2NvcmUocm93cykgPD0gMSkge1xuICAgICAgICAgIHNldEVycm9yKE1TR19MT0FEX0ZBSUxFRClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRFcnJvcihcbiAgICAgICAgICAgIE1TR19FWFRSQUNUX0ZBSUxFRCArXG4gICAgICAgICAgICAgIGRlc2NyaWJlUm93c0ZvckV4dHJhY3RFcnJvcihcbiAgICAgICAgICAgICAgICByb3dzLFxuICAgICAgICAgICAgICAgIGVmZmVjdGl2ZVJlY29ydGVGaWVsZCxcbiAgICAgICAgICAgICAgICBmaWVsZExpc3QubGVuZ3RoID4gMCA/IGZpZWxkTGlzdCA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCB7XG4gICAgICBzZXRFcnJvcihNU0dfTE9BRF9GQUlMRUQpXG4gICAgICBzZXRTZXJpZXMoW10pXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICBzZXRMb2FkaW5nTWVzc2FnZShudWxsKVxuICAgIH1cbiAgfSwgW1xuICAgIGRzUmVmLFxuICAgIGRzU3RhdHVzLFxuICAgIGVmZmVjdGl2ZVllYXJGaWVsZCxcbiAgICBlZmZlY3RpdmVSZWNvcnRlRmllbGQsXG4gICAgcmVjb3J0ZUZpZWxkLFxuICAgIGZpZWxkTGlzdCxcbiAgICB3aWRnZXRJZFxuICBdKVxuXG4gIGNvbnN0IGhhbmRsZURhdGFTb3VyY2VJbmZvQ2hhbmdlID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGluZm86IHsgc3RhdHVzPzogRGF0YVNvdXJjZVN0YXR1czsgdmVyc2lvbj86IG51bWJlciB9KSA9PiB7XG4gICAgICBzZXREc1N0YXR1cyhpbmZvPy5zdGF0dXMpXG4gICAgICBpZiAoaW5mbz8udmVyc2lvbiAhPSBudWxsKSB7XG4gICAgICAgIHNldERzSW5mb1ZlcnNpb24oaW5mby52ZXJzaW9uKVxuICAgICAgfVxuICAgIH0sXG4gICAgW11cbiAgKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFlZmZlY3RpdmVSZWNvcnRlRmllbGQgfHwgIWVmZmVjdGl2ZVllYXJGaWVsZCB8fCAhZHNSZWYpIHJldHVyblxuICAgIGlmICghaXNQcm9kZXNEYXRhUmVhZHkoZHNTdGF0dXMpKSByZXR1cm5cbiAgICBsb2FkU2VyaWVzKClcbiAgfSwgW1xuICAgIGVmZmVjdGl2ZVJlY29ydGVGaWVsZCxcbiAgICBlZmZlY3RpdmVZZWFyRmllbGQsXG4gICAgZHNSZWYsXG4gICAgZHNTdGF0dXMsXG4gICAgZHNJbmZvVmVyc2lvbixcbiAgICBmaWVsZExpc3QsXG4gICAgbG9hZFNlcmllc1xuICBdKVxuXG4gIGNvbnN0IHdhaXRpbmdGb3JMYXllciA9XG4gICAgIWRzUmVmIHx8XG4gICAgZHNTdGF0dXMgPT09IERhdGFTb3VyY2VTdGF0dXMuTG9hZGluZyB8fFxuICAgIGRzU3RhdHVzID09PSBEYXRhU291cmNlU3RhdHVzLk5vdFJlYWR5IHx8XG4gICAgZHNTdGF0dXMgPT09IERhdGFTb3VyY2VTdGF0dXMuVW5sb2FkZWRcblxuICByZXR1cm4ge1xuICAgIHNlcmllcyxcbiAgICBsb2FkaW5nLFxuICAgIGxvYWRpbmdNZXNzYWdlLFxuICAgIGVycm9yLFxuICAgIGhhbmRsZURhdGFTb3VyY2VSZWFkeSxcbiAgICBoYW5kbGVEYXRhU291cmNlSW5mb0NoYW5nZSxcbiAgICBhcHBseVNjaGVtYSxcbiAgICB3YWl0aW5nRm9yTGF5ZXJcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnamltdS1jb3JlJ1xuXG5leHBvcnQgY29uc3Qgd2lkZ2V0U3R5bGVzID0gY3NzYFxuICAmLndpZGdldC1jb21wYXJhZG9yLXByb2RlcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBwYWRkaW5nOiA4cHg7XG4gIH1cbiAgLmNvbXBhcmFkb3ItZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTJweDtcbiAgICBtaW4td2lkdGg6IDA7XG4gIH1cbiAgLmNvbXBhcmFkb3ItZmllbGQtcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA0cHg7XG4gICAgbWluLXdpZHRoOiAwO1xuICB9XG4gIC5jb21wYXJhZG9yLXBlcmlvZC1oaW50LFxuICAuY29tcGFyYWRvci1lcnJvciB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjYjAwMDIwO1xuICAgIG1hcmdpbi10b3A6IDJweDtcbiAgfVxuICAuY29tcGFyYWRvci1lcnJvci0tYmxvY2sge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAuY29tcGFyYWRvci1yZXN1bHQge1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1yZWYtcGFsZXR0ZS1uZXV0cmFsLTEwMCwgI2YzZjNmMyk7XG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgfVxuICAuY29tcGFyYWRvci1yZXN1bHQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIH1cbiAgLmNvbXBhcmFkb3ItcmVzdWx0LXZhbHVlIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMS4zO1xuICB9XG4gIC5jb21wYXJhZG9yLXJlc3VsdC12YWx1ZS0tcG9zaXRpdmUge1xuICAgIGNvbG9yOiAjYjAwMDIwO1xuICB9XG4gIC5jb21wYXJhZG9yLXJlc3VsdC12YWx1ZS0tbmVnYXRpdmUge1xuICAgIGNvbG9yOiAjMWI3YTNkO1xuICB9XG4gIC5jb21wYXJhZG9yLXJlc3VsdC12YWx1ZS0tbmV1dHJhbCB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cbiAgLmNvbXBhcmFkb3ItcmVzdWx0LWRldGFpbCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjNmI2YjZiO1xuICAgIG1hcmdpbi10b3A6IDZweDtcbiAgfVxuICAuY29tcGFyYWRvci1oaW50IHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgY29sb3I6ICM2YjZiNmI7XG4gICAgbGluZS1oZWlnaHQ6IDEuMzU7XG4gIH1cbiAgLmNvbXBhcmFkb3ItYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG4gIC5jb21wYXJhZG9yLWJ0bi1saW1wYXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBQRVJJT0RfTUVOVV9NQVhfSEVJR0hUID0gMjgwXG5cbmV4cG9ydCBjb25zdCBwaWNrZXJTdHlsZXMgPSBjc3NgXG4gIHdpZHRoOiAxMDAlO1xuICAuamltdS1kcm9wZG93biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbmBcblxuLyoqIFJvbGFnZW0gbmEgbGlzdGEgZGUgYW5vcyAoY29udGFpbmVyIGludGVybm8gZG8gRHJvcGRvd25NZW51IG5vIGppbXUtdWkpLiAqL1xuZXhwb3J0IGNvbnN0IHBlcmlvZE1lbnVTdHlsZXMgPSBjc3NgXG4gICYuY29tcGFyYWRvci1wZXJpb2QtbWVudSAuZHJvcGRvd24taXRlbS1jb24ge1xuICAgIG1heC1oZWlnaHQ6ICR7UEVSSU9EX01FTlVfTUFYX0hFSUdIVH1weDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIG92ZXJzY3JvbGwtYmVoYXZpb3I6IGNvbnRhaW47XG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICB9XG5gXG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IFJlYWN0LCBqc3ggfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQge1xuICBEcm9wZG93bixcbiAgRHJvcGRvd25CdXR0b24sXG4gIERyb3Bkb3duTWVudSxcbiAgRHJvcGRvd25JdGVtXG59IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgeyBmb3JtYXRQZXJpb2RMYWJlbCwgdG9nZ2xlQ29uc2VjdXRpdmVZZWFyIH0gZnJvbSAnLi4vdXRpbHMvcHJvZGVzLXRhYmxlJ1xuaW1wb3J0IHsgUEVSSU9EX01FTlVfTUFYX0hFSUdIVCwgcGlja2VyU3R5bGVzLCBwZXJpb2RNZW51U3R5bGVzIH0gZnJvbSAnLi9zdHlsZXMnXG5cbmV4cG9ydCBpbnRlcmZhY2UgWWVhclBlcmlvZFBpY2tlclByb3BzIHtcbiAgYXZhaWxhYmxlWWVhcnM6IG51bWJlcltdXG4gIHNlbGVjdGVkWWVhcnM6IG51bWJlcltdXG4gIHBsYWNlaG9sZGVyOiBzdHJpbmdcbiAgaGludD86IHN0cmluZyB8IG51bGxcbiAgb25DaGFuZ2U6ICh5ZWFyczogbnVtYmVyW10pID0+IHZvaWRcbiAgb25SZWplY3RlZFNlbGVjdGlvbj86ICgpID0+IHZvaWRcbn1cblxuZXhwb3J0IGNvbnN0IFllYXJQZXJpb2RQaWNrZXIgPSBSZWFjdC5tZW1vKChwcm9wczogWWVhclBlcmlvZFBpY2tlclByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBhdmFpbGFibGVZZWFycyxcbiAgICBzZWxlY3RlZFllYXJzLFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIGhpbnQsXG4gICAgb25DaGFuZ2UsXG4gICAgb25SZWplY3RlZFNlbGVjdGlvblxuICB9ID0gcHJvcHNcblxuICBjb25zdCBzZWxlY3RlZFNldCA9IFJlYWN0LnVzZU1lbW8oXG4gICAgKCkgPT4gbmV3IFNldChzZWxlY3RlZFllYXJzKSxcbiAgICBbc2VsZWN0ZWRZZWFyc11cbiAgKVxuXG4gIGNvbnN0IHN1bW1hcnkgPVxuICAgIHNlbGVjdGVkWWVhcnMubGVuZ3RoID4gMFxuICAgICAgPyBmb3JtYXRQZXJpb2RMYWJlbChzZWxlY3RlZFllYXJzKVxuICAgICAgOiBwbGFjZWhvbGRlclxuXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZSA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgICh5ZWFyOiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IHsgbmV4dCwgcmVqZWN0ZWQgfSA9IHRvZ2dsZUNvbnNlY3V0aXZlWWVhcihzZWxlY3RlZFllYXJzLCB5ZWFyKVxuICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgIG9uUmVqZWN0ZWRTZWxlY3Rpb24/LigpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgb25DaGFuZ2UobmV4dClcbiAgICB9LFxuICAgIFtzZWxlY3RlZFllYXJzLCBvbkNoYW5nZSwgb25SZWplY3RlZFNlbGVjdGlvbl1cbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjc3M9e3BpY2tlclN0eWxlc30+XG4gICAgICA8RHJvcGRvd25cbiAgICAgICAgZmx1aWRcbiAgICAgICAgbWVudUl0ZW1DaGVja01vZGU9XCJtdWx0aUNoZWNrXCJcbiAgICAgICAgYWN0aXZlSWNvblxuICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMFwiXG4gICAgICA+XG4gICAgICAgIDxEcm9wZG93bkJ1dHRvbiBzaXplPVwic21cIiBjbGFzc05hbWU9XCJ3LTEwMCBkcm9wZG93bi10b2dnbGVcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXRydW5jYXRlXCI+e3N1bW1hcnl9PC9zcGFuPlxuICAgICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxuICAgICAgICA8RHJvcGRvd25NZW51XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY29tcGFyYWRvci1wZXJpb2QtbWVudVwiXG4gICAgICAgICAgY3NzPXtwZXJpb2RNZW51U3R5bGVzfVxuICAgICAgICAgIG1heEhlaWdodD17UEVSSU9EX01FTlVfTUFYX0hFSUdIVH1cbiAgICAgICAgPlxuICAgICAgICAgIHthdmFpbGFibGVZZWFycy5tYXAoKHllYXIpID0+IChcbiAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAga2V5PXt5ZWFyfVxuICAgICAgICAgICAgICBhY3RpdmU9e3NlbGVjdGVkU2V0Lmhhcyh5ZWFyKX1cbiAgICAgICAgICAgICAgdG9nZ2xlPXtmYWxzZX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVG9nZ2xlKHllYXIpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7eWVhcn1cbiAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0Ryb3Bkb3duTWVudT5cbiAgICAgIDwvRHJvcGRvd24+XG4gICAgICB7aGludCAmJiA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhcmFkb3ItcGVyaW9kLWhpbnRcIj57aGludH08L2Rpdj59XG4gICAgPC9kaXY+XG4gIClcbn0pXG5cblllYXJQZXJpb2RQaWNrZXIuZGlzcGxheU5hbWUgPSAnWWVhclBlcmlvZFBpY2tlcidcbiIsImltcG9ydCB7XG4gIHR5cGUgRGF0YVNvdXJjZSxcbiAgdHlwZSBJTURhdGFTb3VyY2VTY2hlbWEsXG4gIERhdGFTb3VyY2VTdGF0dXNcbn0gZnJvbSAnamltdS1jb3JlJ1xuXG50eXBlIERhdGFTb3VyY2VXaXRoTWFpbiA9IERhdGFTb3VyY2UgJiB7XG4gIGdldE1haW5EYXRhU291cmNlPzogKCkgPT4gRGF0YVNvdXJjZVxuICBnZXRTY2hlbWE/OiAoKSA9PiBJTURhdGFTb3VyY2VTY2hlbWFcbn1cblxuLyoqIEFudGVzIGRvIHF1ZXJ5IGRvIERhdGFTb3VyY2VDb21wb25lbnQgdGVybWluYXIsIHJlZ2lzdHJvcyBjb3N0dW1hbSB2aXIgc2VtIGF0cmlidXRvcy4gKi9cbmV4cG9ydCBjb25zdCBpc1Byb2Rlc0RhdGFSZWFkeSA9IChzdGF0dXM/OiBEYXRhU291cmNlU3RhdHVzKTogYm9vbGVhbiA9PlxuICBzdGF0dXMgPT09IERhdGFTb3VyY2VTdGF0dXMuTG9hZGVkXG5cbmV4cG9ydCBjb25zdCBpc1F1ZXJ5YWJsZVN0YXR1cyA9IChzdGF0dXM/OiBEYXRhU291cmNlU3RhdHVzKTogYm9vbGVhbiA9PlxuICBzdGF0dXMgPT09IERhdGFTb3VyY2VTdGF0dXMuTG9hZGVkIHx8XG4gIHN0YXR1cyA9PT0gRGF0YVNvdXJjZVN0YXR1cy5Mb2FkaW5nXG5cbmV4cG9ydCBjb25zdCBnZXRNYWluRGF0YVNvdXJjZSA9IChkczogRGF0YVNvdXJjZSB8IG51bGwpOiBEYXRhU291cmNlIHwgbnVsbCA9PiB7XG4gIGlmICghZHMpIHJldHVybiBudWxsXG4gIGNvbnN0IG1haW4gPSAoZHMgYXMgRGF0YVNvdXJjZVdpdGhNYWluKS5nZXRNYWluRGF0YVNvdXJjZT8uKClcbiAgcmV0dXJuIG1haW4gPz8gZHNcbn1cblxuLyoqIFVzYSBhIGluc3TDom5jaWEgZGEgY2FtYWRhIHNlbGVjaW9uYWRhIChleC46IFBsYW5pbGhhMSkgcXVhbmRvIGVsYSBqw6Egw6kgY29uc3VsdMOhdmVsLiAqL1xuZXhwb3J0IGNvbnN0IGdldFF1ZXJ5YWJsZURhdGFTb3VyY2UgPSAoZHM6IERhdGFTb3VyY2UgfCBudWxsKTogRGF0YVNvdXJjZSB8IG51bGwgPT4ge1xuICBpZiAoIWRzKSByZXR1cm4gbnVsbFxuICBjb25zdCBxID0gZHMgYXMgRGF0YVNvdXJjZVdpdGhNYWluICYge1xuICAgIHF1ZXJ5PzogKHA6IG9iamVjdCkgPT4gUHJvbWlzZTx1bmtub3duPlxuICAgIGxvYWQ/OiAocDogb2JqZWN0KSA9PiBQcm9taXNlPHVua25vd24+XG4gICAgbG9hZEFsbD86IChwOiBvYmplY3QpID0+IFByb21pc2U8dW5rbm93bj5cbiAgfVxuICBpZiAoXG4gICAgdHlwZW9mIHEucXVlcnkgPT09ICdmdW5jdGlvbicgfHxcbiAgICB0eXBlb2YgcS5sb2FkID09PSAnZnVuY3Rpb24nIHx8XG4gICAgdHlwZW9mIHEubG9hZEFsbCA9PT0gJ2Z1bmN0aW9uJ1xuICApIHtcbiAgICByZXR1cm4gZHNcbiAgfVxuICByZXR1cm4gZ2V0TWFpbkRhdGFTb3VyY2UoZHMpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlbnN1cmVEYXRhU291cmNlU2NoZW1hIChcbiAgZHM6IERhdGFTb3VyY2Vcbik6IFByb21pc2U8SU1EYXRhU291cmNlU2NoZW1hIHwgdW5kZWZpbmVkPiB7XG4gIGNvbnN0IGV4aXN0aW5nID0gZ2V0RGF0YVNvdXJjZVNjaGVtYShkcylcbiAgaWYgKGV4aXN0aW5nPy5maWVsZHMgJiYgT2JqZWN0LmtleXMoZXhpc3RpbmcuZmllbGRzKS5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIGV4aXN0aW5nXG4gIH1cbiAgY29uc3QgZmV0Y2hTY2hlbWEgPSAoZHMgYXMgRGF0YVNvdXJjZVdpdGhNYWluICYge1xuICAgIGZldGNoU2NoZW1hPzogKCkgPT4gUHJvbWlzZTxJTURhdGFTb3VyY2VTY2hlbWE+XG4gIH0pLmZldGNoU2NoZW1hXG4gIGlmICh0eXBlb2YgZmV0Y2hTY2hlbWEgPT09ICdmdW5jdGlvbicpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGF3YWl0IGZldGNoU2NoZW1hLmNhbGwoZHMpXG4gICAgfSBjYXRjaCB7XG4gICAgICByZXR1cm4gZXhpc3RpbmdcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGV4aXN0aW5nXG59XG5cbmV4cG9ydCBjb25zdCBnZXREYXRhU291cmNlU2NoZW1hID0gKFxuICBkczogRGF0YVNvdXJjZVxuKTogSU1EYXRhU291cmNlU2NoZW1hIHwgdW5kZWZpbmVkID0+XG4gIChkcyBhcyBEYXRhU291cmNlV2l0aE1haW4pLmdldFNjaGVtYT8uKClcbiIsImltcG9ydCB7IEFSRUFfVU5JVCB9IGZyb20gJy4uL2NvbnN0YW50cydcblxuZXhwb3J0IGNvbnN0IGZvcm1hdEFyZWEgPSAodmFsdWU6IG51bWJlcik6IHN0cmluZyA9PlxuICBgJHt2YWx1ZS50b0xvY2FsZVN0cmluZygncHQtQlInLCB7XG4gICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMlxuICB9KX0gJHtBUkVBX1VOSVR9YFxuXG5leHBvcnQgdHlwZSBWYXJpYXRpb25Ub25lID0gJ3Bvc2l0aXZlJyB8ICduZWdhdGl2ZScgfCAnbmV1dHJhbCdcblxuZXhwb3J0IGNvbnN0IGdldFZhcmlhdGlvblRvbmUgPSAocGN0OiBudW1iZXIpOiBWYXJpYXRpb25Ub25lID0+IHtcbiAgaWYgKHBjdCA+IDApIHJldHVybiAncG9zaXRpdmUnXG4gIGlmIChwY3QgPCAwKSByZXR1cm4gJ25lZ2F0aXZlJ1xuICByZXR1cm4gJ25ldXRyYWwnXG59XG4iLCJpbXBvcnQge1xuICB0eXBlIElNRmllbGRTY2hlbWEsXG4gIHR5cGUgSU1EYXRhU291cmNlU2NoZW1hLFxuICBKaW11RmllbGRUeXBlLFxuICBFc3JpRmllbGRUeXBlLFxuICBRdWVyeVNjb3BlLFxuICB0eXBlIERhdGFSZWNvcmQsXG4gIGVzcmksXG4gIHJlcXVlc3RVdGlsc1xufSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBub3JtYWxpemVSZWNvcnRlRmllbGRDb25maWcgfSBmcm9tICcuL3JlY29ydGUtY29uZmlnJ1xuXG5leHBvcnQgaW50ZXJmYWNlIFllYXJWYWx1ZVJvdyB7XG4gIHllYXI6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmllbGRBdHRyaWJ1dGVLZXlzIHtcbiAgeWVhcktleTogc3RyaW5nXG4gIHJlY29ydGVLZXk6IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9ZRUFSX0ZJRUxEID0gJ2FubydcblxuY29uc3QgWUVBUl9OQU1FX1BBVFRFUk5TID0gWydhbm8nLCAneWVhcicsICd5cicsICdleGVyY2ljaW8nLCAnZXhlcmPDrWNpbyddXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5Q2VsbCAodmFsdWU6IHVua25vd24pOiBib29sZWFuIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiB0cnVlXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLnRyaW0oKSA9PT0gJycpIHJldHVybiB0cnVlXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIE51bWJlci5pc05hTih2YWx1ZSkpIHJldHVybiB0cnVlXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VOdW1lcmljVmFsdWUgKHZhbHVlOiB1bmtub3duKTogbnVtYmVyIHwgbnVsbCB7XG4gIGlmIChpc0VtcHR5Q2VsbCh2YWx1ZSkpIHJldHVybiBudWxsXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSkpIHJldHVybiB2YWx1ZVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IHMgPSB2YWx1ZS50cmltKClcbiAgICBpZiAoIXMpIHJldHVybiBudWxsXG4gICAgaWYgKHMuaW5jbHVkZXMoJywnKSkge1xuICAgICAgY29uc3Qgbm9ybWFsaXplZCA9IHMucmVwbGFjZSgvXFwuL2csICcnKS5yZXBsYWNlKCcsJywgJy4nKVxuICAgICAgY29uc3QgbiA9IE51bWJlcihub3JtYWxpemVkKVxuICAgICAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShuKSA/IG4gOiBudWxsXG4gICAgfVxuICAgIGNvbnN0IG4gPSBOdW1iZXIocylcbiAgICByZXR1cm4gTnVtYmVyLmlzRmluaXRlKG4pID8gbiA6IG51bGxcbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG4vKiogQ29udmVydGUgbsO6bWVybyBleGliaWRvIG5vIEFyY0dJUyBlbSBwdC1CUiAoZXguOiAyLjAwMSDihpIgMjAwMSkuICovXG5mdW5jdGlvbiBub3JtYWxpemVZZWFyTnVtYmVyIChuOiBudW1iZXIpOiBudW1iZXIgfCBudWxsIHtcbiAgaWYgKCFOdW1iZXIuaXNGaW5pdGUobikpIHJldHVybiBudWxsXG5cbiAgaWYgKG4gPj0gMTk4NSAmJiBuIDw9IDIwMzUgJiYgTWF0aC5hYnMobiAtIE1hdGgucm91bmQobikpIDwgMC4wMDEpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChuKVxuICB9XG5cbiAgLy8gVGFiZWxhIFBST0RFUyBubyBQb3J0YWw6IGNvbHVuYSBBbm8gY29tbyAyLjAwMSwgMi4wMTEgKG1pbGhhciBjb20gcG9udG8pXG4gIGlmIChuID49IDEuOTg1ICYmIG4gPD0gMi4wMzUpIHtcbiAgICBjb25zdCB5ID0gTWF0aC5yb3VuZChuICogMTAwMClcbiAgICBpZiAoeSA+PSAxOTg1ICYmIHkgPD0gMjAzNSkgcmV0dXJuIHlcbiAgfVxuXG4gIGNvbnN0IHRydW5jYXRlZCA9IE1hdGgudHJ1bmMobilcbiAgaWYgKHRydW5jYXRlZCA+PSAxOTg1ICYmIHRydW5jYXRlZCA8PSAyMDM1KSByZXR1cm4gdHJ1bmNhdGVkXG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVllYXIgKHZhbHVlOiB1bmtub3duKTogbnVtYmVyIHwgbnVsbCB7XG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUgJiYgIU51bWJlci5pc05hTih2YWx1ZS5nZXRUaW1lKCkpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmdldEZ1bGxZZWFyKClcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiBOdW1iZXIuaXNGaW5pdGUodmFsdWUpKSB7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZVllYXJOdW1iZXIodmFsdWUpXG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCBzID0gdmFsdWUudHJpbSgpXG4gICAgaWYgKCFzKSByZXR1cm4gbnVsbFxuXG4gICAgY29uc3QgYnJUaG91c2FuZHMgPSBzLm1hdGNoKC9eKFxcZHsxLDJ9KVxcLihcXGR7M30pJC8pXG4gICAgaWYgKGJyVGhvdXNhbmRzKSB7XG4gICAgICBjb25zdCB5ID0gTnVtYmVyKGJyVGhvdXNhbmRzWzFdICsgYnJUaG91c2FuZHNbMl0pXG4gICAgICBpZiAoeSA+PSAxOTg1ICYmIHkgPD0gMjAzNSkgcmV0dXJuIHlcbiAgICB9XG5cbiAgICBjb25zdCBuID0gTnVtYmVyKHMucmVwbGFjZSgnLCcsICcuJykpXG4gICAgaWYgKE51bWJlci5pc0Zpbml0ZShuKSkgcmV0dXJuIG5vcm1hbGl6ZVllYXJOdW1iZXIobilcblxuICAgIGNvbnN0IG0gPSBzLm1hdGNoKC9cXGIoMTl8MjApXFxkezJ9XFxiLylcbiAgICBpZiAobSkgcmV0dXJuIE51bWJlcihtWzBdKVxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2hlbWFUb0ZpZWxkTGlzdCAoc2NoZW1hPzogSU1EYXRhU291cmNlU2NoZW1hIHwgbnVsbCk6IElNRmllbGRTY2hlbWFbXSB7XG4gIGlmICghc2NoZW1hPy5maWVsZHMpIHJldHVybiBbXVxuICByZXR1cm4gT2JqZWN0LmtleXMoc2NoZW1hLmZpZWxkcykubWFwKChrZXkpID0+IHNjaGVtYS5maWVsZHNba2V5XSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtZXJpY1JlY29ydGVGaWVsZCAoZmllbGQ6IElNRmllbGRTY2hlbWEpOiBib29sZWFuIHtcbiAgaWYgKGZpZWxkLnR5cGUgPT09IEppbXVGaWVsZFR5cGUuTnVtYmVyKSByZXR1cm4gdHJ1ZVxuICBjb25zdCBlc3JpID0gZmllbGQuZXNyaVR5cGVcbiAgcmV0dXJuIChcbiAgICBlc3JpID09PSBFc3JpRmllbGRUeXBlLkRvdWJsZSB8fFxuICAgIGVzcmkgPT09IEVzcmlGaWVsZFR5cGUuU2luZ2xlIHx8XG4gICAgZXNyaSA9PT0gRXNyaUZpZWxkVHlwZS5JbnRlZ2VyIHx8XG4gICAgZXNyaSA9PT0gRXNyaUZpZWxkVHlwZS5TbWFsbEludGVnZXJcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXR0cmlidXRlS2V5IChmaWVsZDogSU1GaWVsZFNjaGVtYSk6IHN0cmluZyB7XG4gIHJldHVybiBmaWVsZC5uYW1lIHx8IGZpZWxkLmppbXVOYW1lXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXRlY3RZZWFyRmllbGQgKGZpZWxkczogSU1GaWVsZFNjaGVtYVtdKTogc3RyaW5nIHwgbnVsbCB7XG4gIGNvbnN0IGV4YWN0QW5vID0gZmllbGRzLmZpbmQoXG4gICAgKGYpID0+XG4gICAgICBmLmppbXVOYW1lPy50b0xvd2VyQ2FzZSgpID09PSAnYW5vJyB8fFxuICAgICAgZi5uYW1lPy50b0xvd2VyQ2FzZSgpID09PSAnYW5vJyB8fFxuICAgICAgZi5hbGlhcz8udG9Mb3dlckNhc2UoKSA9PT0gJ2FubydcbiAgKVxuICBpZiAoZXhhY3RBbm8pIHJldHVybiBleGFjdEFuby5qaW11TmFtZVxuXG4gIGNvbnN0IGNhbmRpZGF0ZXMgPSBmaWVsZHMuZmlsdGVyKFxuICAgIChmKSA9PiBmLnR5cGUgPT09IEppbXVGaWVsZFR5cGUuTnVtYmVyIHx8IGYudHlwZSA9PT0gSmltdUZpZWxkVHlwZS5TdHJpbmdcbiAgKVxuICBmb3IgKGNvbnN0IHBhdCBvZiBZRUFSX05BTUVfUEFUVEVSTlMpIHtcbiAgICBjb25zdCBmb3VuZCA9IGNhbmRpZGF0ZXMuZmluZChcbiAgICAgIChmKSA9PlxuICAgICAgICBmLmppbXVOYW1lPy50b0xvd2VyQ2FzZSgpID09PSBwYXQgfHxcbiAgICAgICAgZi5uYW1lPy50b0xvd2VyQ2FzZSgpID09PSBwYXQgfHxcbiAgICAgICAgZi5hbGlhcz8udG9Mb3dlckNhc2UoKSA9PT0gcGF0XG4gICAgKVxuICAgIGlmIChmb3VuZCkgcmV0dXJuIGZvdW5kLmppbXVOYW1lXG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFJlY29ydGVMYWJlbCAoZmllbGQ6IElNRmllbGRTY2hlbWEpOiBzdHJpbmcge1xuICByZXR1cm4gZm9ybWF0UmVjb3J0ZUxhYmVsRnJvbU5hbWUoZmllbGQuamltdU5hbWUsIGZpZWxkLmFsaWFzKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UmVjb3J0ZUxhYmVsRnJvbU5hbWUgKGppbXVOYW1lOiBzdHJpbmcsIGFsaWFzPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKGFsaWFzPy50cmltKCkpIHJldHVybiBhbGlhcy50cmltKClcbiAgcmV0dXJuIGppbXVOYW1lXG4gICAgLnNwbGl0KCdfJylcbiAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgLm1hcCgodykgPT4gdy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHcuc2xpY2UoMSkudG9Mb3dlckNhc2UoKSlcbiAgICAuam9pbignICcpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTeXN0ZW1IaWRkZW5GaWVsZE5hbWVzIChmaWVsZHM6IElNRmllbGRTY2hlbWFbXSk6IHN0cmluZ1tdIHtcbiAgcmV0dXJuIGZpZWxkc1xuICAgIC5maWx0ZXIoKGYpID0+IHtcbiAgICAgIGNvbnN0IGVzcmkgPSBmLmVzcmlUeXBlXG4gICAgICByZXR1cm4gKFxuICAgICAgICBlc3JpID09PSBFc3JpRmllbGRUeXBlLk9JRCB8fFxuICAgICAgICBlc3JpID09PSBFc3JpRmllbGRUeXBlLkdlb21ldHJ5IHx8XG4gICAgICAgIGVzcmkgPT09IEVzcmlGaWVsZFR5cGUuR2xvYmFsSUQgfHxcbiAgICAgICAgZXNyaSA9PT0gRXNyaUZpZWxkVHlwZS5HVUlEXG4gICAgICApXG4gICAgfSlcbiAgICAubWFwKChmKSA9PiBmLmppbXVOYW1lKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVjb3J0ZUhpZGRlbkZpZWxkTmFtZXMgKFxuICBmaWVsZHM6IElNRmllbGRTY2hlbWFbXSxcbiAgeWVhckZpZWxkPzogc3RyaW5nXG4pOiBzdHJpbmdbXSB7XG4gIGNvbnN0IGhpZGRlbiA9IGdldFN5c3RlbUhpZGRlbkZpZWxkTmFtZXMoZmllbGRzKVxuICBpZiAoeWVhckZpZWxkICYmICFoaWRkZW4uaW5jbHVkZXMoeWVhckZpZWxkKSkge1xuICAgIGhpZGRlbi5wdXNoKHllYXJGaWVsZClcbiAgfVxuICByZXR1cm4gaGlkZGVuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWNvcnRlQ2FuZGlkYXRlRmllbGRzIChcbiAgZmllbGRzOiBJTUZpZWxkU2NoZW1hW10sXG4gIHllYXJGaWVsZD86IHN0cmluZ1xuKTogSU1GaWVsZFNjaGVtYVtdIHtcbiAgY29uc3QgaGlkZGVuID0gbmV3IFNldChnZXRSZWNvcnRlSGlkZGVuRmllbGROYW1lcyhmaWVsZHMsIHllYXJGaWVsZCkpXG4gIHJldHVybiBmaWVsZHNcbiAgICAuZmlsdGVyKChmKSA9PiBpc051bWVyaWNSZWNvcnRlRmllbGQoZikgJiYgIWhpZGRlbi5oYXMoZi5qaW11TmFtZSkpXG4gICAgLnNvcnQoKGEsIGIpID0+XG4gICAgICBmb3JtYXRSZWNvcnRlTGFiZWwoYSkubG9jYWxlQ29tcGFyZShmb3JtYXRSZWNvcnRlTGFiZWwoYiksICdwdC1CUicpXG4gICAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZEZpZWxkQnlKaW11TmFtZSAoXG4gIGZpZWxkczogSU1GaWVsZFNjaGVtYVtdLFxuICBqaW11TmFtZT86IHN0cmluZ1xuKTogSU1GaWVsZFNjaGVtYSB8IG51bGwge1xuICBpZiAoIWppbXVOYW1lKSByZXR1cm4gbnVsbFxuICBjb25zdCBleGFjdCA9IGZpZWxkcy5maW5kKChmKSA9PiBmLmppbXVOYW1lID09PSBqaW11TmFtZSlcbiAgaWYgKGV4YWN0KSByZXR1cm4gZXhhY3RcbiAgY29uc3QgbG93ZXIgPSBqaW11TmFtZS50b0xvd2VyQ2FzZSgpXG4gIHJldHVybiAoXG4gICAgZmllbGRzLmZpbmQoXG4gICAgICAoZikgPT5cbiAgICAgICAgZi5qaW11TmFtZT8udG9Mb3dlckNhc2UoKSA9PT0gbG93ZXIgfHxcbiAgICAgICAgZi5uYW1lPy50b0xvd2VyQ2FzZSgpID09PSBsb3dlciB8fFxuICAgICAgICBmLmFsaWFzPy50b0xvd2VyQ2FzZSgpID09PSBsb3dlclxuICAgICkgPz8gbnVsbFxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlQXR0cmlidXRlS2V5cyAoXG4gIGZpZWxkczogSU1GaWVsZFNjaGVtYVtdLFxuICB5ZWFyRmllbGRKaW11Pzogc3RyaW5nLFxuICByZWNvcnRlRmllbGRKaW11Pzogc3RyaW5nXG4pOiBGaWVsZEF0dHJpYnV0ZUtleXMgfCBudWxsIHtcbiAgaWYgKCF5ZWFyRmllbGRKaW11IHx8ICFyZWNvcnRlRmllbGRKaW11KSByZXR1cm4gbnVsbFxuXG4gIGNvbnN0IHllYXJGaWVsZCA9IGZpbmRGaWVsZEJ5SmltdU5hbWUoZmllbGRzLCB5ZWFyRmllbGRKaW11KVxuICBjb25zdCByZWNvcnRlRmllbGQgPSBmaW5kRmllbGRCeUppbXVOYW1lKGZpZWxkcywgcmVjb3J0ZUZpZWxkSmltdSlcblxuICByZXR1cm4ge1xuICAgIHllYXJLZXk6IHllYXJGaWVsZCA/IGdldEF0dHJpYnV0ZUtleSh5ZWFyRmllbGQpIDogeWVhckZpZWxkSmltdSxcbiAgICByZWNvcnRlS2V5OiByZWNvcnRlRmllbGQgPyBnZXRBdHRyaWJ1dGVLZXkocmVjb3J0ZUZpZWxkKSA6IHJlY29ydGVGaWVsZEppbXVcbiAgfVxufVxuXG50eXBlIFJlY29yZExpa2UgPVxuICB8IERhdGFSZWNvcmRcbiAgfCB7XG4gICAgICBhdHRyaWJ1dGVzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgICAgIGZlYXR1cmU/OiB7IGF0dHJpYnV0ZXM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB9XG4gICAgICBnZXREYXRhPzogKCkgPT4ge1xuICAgICAgICBhdHRyaWJ1dGVzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgICAgICAgZmVhdHVyZT86IHsgYXR0cmlidXRlcz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+IH1cbiAgICAgIH1cbiAgICAgIGdldEZpZWxkVmFsdWU/OiAoamltdUZpZWxkTmFtZTogc3RyaW5nKSA9PiB1bmtub3duXG4gICAgICBnZXREYXRlRmllbGRWYWx1ZT86IChqaW11RmllbGROYW1lOiBzdHJpbmcpID0+IHVua25vd25cbiAgICAgIGdldERhdGFCZWZvcmVNYXBwaW5nPzogKCkgPT4gUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgICB9XG5cbmZ1bmN0aW9uIHRvUGxhaW5PYmplY3QgKHZhbHVlOiB1bmtub3duKTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4ge1xuICBpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHJldHVybiB7fVxuICBjb25zdCB2ID0gdmFsdWUgYXMge1xuICAgIHRvSlM/OiAoKSA9PiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICAgIGFzTXV0YWJsZT86IChvcHRzPzogeyBkZWVwOiBib29sZWFuIH0pID0+IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gIH1cbiAgaWYgKHR5cGVvZiB2LnRvSlMgPT09ICdmdW5jdGlvbicpIHJldHVybiB2LnRvSlMoKVxuICBpZiAodHlwZW9mIHYuYXNNdXRhYmxlID09PSAnZnVuY3Rpb24nKSByZXR1cm4gdi5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pXG4gIHJldHVybiB2YWx1ZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxufVxuXG5jb25zdCBHRVRfREFUQV9NRVRBX0tFWVMgPSBuZXcgU2V0KFtcbiAgJ2F0dHJpYnV0ZXMnLFxuICAnZmVhdHVyZScsXG4gICdnZW9tZXRyeScsXG4gICdjZW50cm9pZCcsXG4gICdhZ2dyZWdhdGVHZW9tZXRyaWVzJyxcbiAgJ3N5bWJvbCdcbl0pXG5cbi8qKiBFeHRyYWkgbyBkaWNpb27DoXJpbyBkZSBhdHJpYnV0b3MgZGUgdW0gcmVnaXN0cm8gKHbDoXJpb3MgZm9ybWF0b3MgZG8gSmltdS9BcmNHSVMpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFBsYWluQXR0cmlidXRlcyAocmVjOiBSZWNvcmRMaWtlKTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4ge1xuICBjb25zdCBtZXJnZWQ6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge31cblxuICBjb25zdCBtZXJnZSA9IChhdHRycz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+KSA9PiB7XG4gICAgaWYgKCFhdHRycykgcmV0dXJuXG4gICAgT2JqZWN0LmFzc2lnbihtZXJnZWQsIHRvUGxhaW5PYmplY3QoYXR0cnMpKVxuICB9XG5cbiAgaWYgKCdnZXREYXRhJyBpbiByZWMgJiYgdHlwZW9mIHJlYy5nZXREYXRhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3QgZGF0YSA9IHJlYy5nZXREYXRhKClcbiAgICBjb25zdCBwbGFpbiA9IHRvUGxhaW5PYmplY3QoZGF0YSlcbiAgICBtZXJnZShwbGFpbi5hdHRyaWJ1dGVzIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgdW5kZWZpbmVkKVxuICAgIG1lcmdlKHBsYWluLmZlYXR1cmU/LmF0dHJpYnV0ZXMgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCB1bmRlZmluZWQpXG4gICAgLy8gSmltdSBEYXRhUmVjb3JkOiBnZXREYXRhKCkgY29zdHVtYSBzZXIgbWFwYSBwbGFubyB7IGppbXVGaWVsZE5hbWU6IHZhbG9yIH1cbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwbGFpbikpIHtcbiAgICAgIGlmIChHRVRfREFUQV9NRVRBX0tFWVMuaGFzKGtleSkpIGNvbnRpbnVlXG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkgbWVyZ2VkW2tleV0gPSB2YWx1ZVxuICAgIH1cbiAgfVxuXG4gIGlmICgnZmVhdHVyZScgaW4gcmVjICYmIHJlYy5mZWF0dXJlPy5hdHRyaWJ1dGVzKSB7XG4gICAgbWVyZ2UocmVjLmZlYXR1cmUuYXR0cmlidXRlcylcbiAgfVxuXG4gIGlmICgnYXR0cmlidXRlcycgaW4gcmVjICYmIHJlYy5hdHRyaWJ1dGVzKSB7XG4gICAgbWVyZ2UocmVjLmF0dHJpYnV0ZXMpXG4gIH1cblxuICBpZiAoJ2dldERhdGFCZWZvcmVNYXBwaW5nJyBpbiByZWMgJiYgdHlwZW9mIHJlYy5nZXREYXRhQmVmb3JlTWFwcGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG1lcmdlKHJlYy5nZXREYXRhQmVmb3JlTWFwcGluZygpKVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlZFxufVxuXG5mdW5jdGlvbiBhdHRyaWJ1dGVIYXNVc2FibGVWYWx1ZSAodmFsdWU6IHVua25vd24pOiBib29sZWFuIHtcbiAgaWYgKGlzRW1wdHlDZWxsKHZhbHVlKSkgcmV0dXJuIGZhbHNlXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSByZXR1cm4gZmFsc2VcbiAgcmV0dXJuIHRydWVcbn1cblxuLyoqIFZlcmlmaWNhIHNlIG8gcmVnaXN0cm8gZXhww7VlIGF0cmlidXRvcyBvdSBnZXRGaWVsZFZhbHVlIGNvbSBkYWRvcyByZWFpcyAobsOjbyBzw7MgbcOpdG9kbyB2YXppbykuICovXG5leHBvcnQgZnVuY3Rpb24gcmVjb3JkSGFzUmVhZGFibGVEYXRhIChyZWM6IFJlY29yZExpa2UpOiBib29sZWFuIHtcbiAgY29uc3QgYXR0cnMgPSBnZXRQbGFpbkF0dHJpYnV0ZXMocmVjKVxuICBjb25zdCB1c2FibGVLZXlzID0gT2JqZWN0LmtleXMoYXR0cnMpLmZpbHRlcigoa2V5KSA9PiB7XG4gICAgaWYgKC9eKG9iamVjdGlkfGdsb2JhbGlkfHNoYXBlfGdlb21ldHJ5KSQvaS50ZXN0KGtleSkpIHJldHVybiBmYWxzZVxuICAgIHJldHVybiBhdHRyaWJ1dGVIYXNVc2FibGVWYWx1ZShhdHRyc1trZXldKVxuICB9KVxuICBpZiAodXNhYmxlS2V5cy5sZW5ndGggPiAwKSByZXR1cm4gdHJ1ZVxuXG4gIGlmICgnZ2V0RmllbGRWYWx1ZScgaW4gcmVjICYmIHR5cGVvZiByZWMuZ2V0RmllbGRWYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IHByb2JlcyA9IFtcbiAgICAgICdhbm8nLFxuICAgICAgJ3llYXInLFxuICAgICAgJ0FOTycsXG4gICAgICAnWWVhcicsXG4gICAgICAnZXhlcmNpY2lvJyxcbiAgICAgICdFeGVyY2ljaW8nXG4gICAgXVxuICAgIGZvciAoY29uc3QgbmFtZSBvZiBwcm9iZXMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHYgPSByZWMuZ2V0RmllbGRWYWx1ZSEobmFtZSlcbiAgICAgICAgaWYgKGF0dHJpYnV0ZUhhc1VzYWJsZVZhbHVlKHYpKSByZXR1cm4gdHJ1ZVxuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIHRlbnRhIHByw7N4aW1vXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8qKiBMw6ogdmFsb3IgcGVsbyBBUEkgZG8gSmltdSAoYGdldEZpZWxkVmFsdWVgKSBlLCBlbSBzZWd1aWRhLCBwZWxvcyBhdHJpYnV0b3MgYnJ1dG9zLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlYWRSZWNvcmRWYWx1ZSAoXG4gIHJlYzogUmVjb3JkTGlrZSxcbiAgZmllbGQ/OiBJTUZpZWxkU2NoZW1hIHwgbnVsbCxcbiAgZmFsbGJhY2tKaW11TmFtZT86IHN0cmluZ1xuKTogdW5rbm93biB7XG4gIGNvbnN0IG5hbWVzOiBzdHJpbmdbXSA9IFtdXG4gIGlmIChmaWVsZD8uamltdU5hbWUpIG5hbWVzLnB1c2goZmllbGQuamltdU5hbWUpXG4gIGlmIChmYWxsYmFja0ppbXVOYW1lKSBuYW1lcy5wdXNoKGZhbGxiYWNrSmltdU5hbWUpXG4gIGlmIChmaWVsZD8ubmFtZSkgbmFtZXMucHVzaChmaWVsZC5uYW1lKVxuICBpZiAoZmllbGQ/LmFsaWFzKSBuYW1lcy5wdXNoKGZpZWxkLmFsaWFzKVxuICBpZiAoZmllbGQpIG5hbWVzLnB1c2goZ2V0QXR0cmlidXRlS2V5KGZpZWxkKSlcblxuICBjb25zdCB1bmlxdWVOYW1lcyA9IFsuLi5uZXcgU2V0KG5hbWVzLmZpbHRlcihCb29sZWFuKSldXG5cbiAgaWYgKCdnZXRGaWVsZFZhbHVlJyBpbiByZWMgJiYgdHlwZW9mIHJlYy5nZXRGaWVsZFZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm9yIChjb25zdCBuYW1lIG9mIHVuaXF1ZU5hbWVzKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB2ID0gcmVjLmdldEZpZWxkVmFsdWUhKG5hbWUpXG4gICAgICAgIGlmICh2ICE9PSB1bmRlZmluZWQpIHJldHVybiB2XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgLy8gdGVudGEgcHLDs3hpbW8gbm9tZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChcbiAgICBmaWVsZD8uamltdU5hbWUgJiZcbiAgICAnZ2V0RGF0ZUZpZWxkVmFsdWUnIGluIHJlYyAmJlxuICAgIHR5cGVvZiByZWMuZ2V0RGF0ZUZpZWxkVmFsdWUgPT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHYgPSByZWMuZ2V0RGF0ZUZpZWxkVmFsdWUhKGZpZWxkLmppbXVOYW1lKVxuICAgICAgaWYgKHYgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHZcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIGlnbm9yYVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGF0dHJzID0gZ2V0UGxhaW5BdHRyaWJ1dGVzKHJlYylcbiAgY29uc3QgZnJvbU1hcHBlZCA9IHJlYWRBdHRyaWJ1dGVGbGV4aWJsZShhdHRycywgZmllbGQsIGZhbGxiYWNrSmltdU5hbWUpXG4gIGlmIChmcm9tTWFwcGVkICE9PSB1bmRlZmluZWQpIHJldHVybiBmcm9tTWFwcGVkXG5cbiAgaWYgKCdnZXREYXRhQmVmb3JlTWFwcGluZycgaW4gcmVjICYmIHR5cGVvZiByZWMuZ2V0RGF0YUJlZm9yZU1hcHBpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCByYXcgPSB0b1BsYWluT2JqZWN0KHJlYy5nZXREYXRhQmVmb3JlTWFwcGluZygpKVxuICAgIHJldHVybiByZWFkQXR0cmlidXRlRmxleGlibGUocmF3LCBmaWVsZCwgZmFsbGJhY2tKaW11TmFtZSlcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gcmVhZEF0dHJpYnV0ZSAoXG4gIGF0dHJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbiAgcHJpbWFyeUtleTogc3RyaW5nLFxuICBmYWxsYmFja0tleT86IHN0cmluZ1xuKTogdW5rbm93biB7XG4gIGlmIChwcmltYXJ5S2V5IGluIGF0dHJzKSByZXR1cm4gYXR0cnNbcHJpbWFyeUtleV1cbiAgaWYgKGZhbGxiYWNrS2V5ICYmIGZhbGxiYWNrS2V5ICE9PSBwcmltYXJ5S2V5ICYmIGZhbGxiYWNrS2V5IGluIGF0dHJzKSB7XG4gICAgcmV0dXJuIGF0dHJzW2ZhbGxiYWNrS2V5XVxuICB9XG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuLyoqIFRlbnRhIGppbXVOYW1lLCBuYW1lLCBhbGlhcyBlIGNvcnJlc3BvbmTDqm5jaWEgc2VtIGRpZmVyZW5jaWFyIG1hacO6c2N1bGFzL21pbsO6c2N1bGFzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlYWRBdHRyaWJ1dGVGbGV4aWJsZSAoXG4gIGF0dHJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbiAgZmllbGQ/OiBJTUZpZWxkU2NoZW1hIHwgbnVsbCxcbiAgZmFsbGJhY2tKaW11TmFtZT86IHN0cmluZ1xuKTogdW5rbm93biB7XG4gIGNvbnN0IGNhbmRpZGF0ZXMgPSBuZXcgU2V0PHN0cmluZz4oKVxuICBpZiAoZmllbGQpIHtcbiAgICBpZiAoZmllbGQuamltdU5hbWUpIGNhbmRpZGF0ZXMuYWRkKGZpZWxkLmppbXVOYW1lKVxuICAgIGlmIChmaWVsZC5uYW1lKSBjYW5kaWRhdGVzLmFkZChmaWVsZC5uYW1lKVxuICAgIGlmIChmaWVsZC5hbGlhcykgY2FuZGlkYXRlcy5hZGQoZmllbGQuYWxpYXMpXG4gICAgY2FuZGlkYXRlcy5hZGQoZ2V0QXR0cmlidXRlS2V5KGZpZWxkKSlcbiAgfVxuICBpZiAoZmFsbGJhY2tKaW11TmFtZSkgY2FuZGlkYXRlcy5hZGQoZmFsbGJhY2tKaW11TmFtZSlcblxuICBmb3IgKGNvbnN0IGtleSBvZiBjYW5kaWRhdGVzKSB7XG4gICAgY29uc3QgdiA9IHJlYWRBdHRyaWJ1dGUoYXR0cnMsIGtleSlcbiAgICBpZiAodiAhPT0gdW5kZWZpbmVkKSByZXR1cm4gdlxuICB9XG5cbiAgY29uc3QgYXR0cktleXMgPSBPYmplY3Qua2V5cyhhdHRycylcbiAgZm9yIChjb25zdCBrZXkgb2YgY2FuZGlkYXRlcykge1xuICAgIGNvbnN0IGZvdW5kID0gYXR0cktleXMuZmluZCgoaykgPT4gay50b0xvd2VyQ2FzZSgpID09PSBrZXkudG9Mb3dlckNhc2UoKSlcbiAgICBpZiAoZm91bmQgIT0gbnVsbCkgcmV0dXJuIGF0dHJzW2ZvdW5kXVxuICB9XG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxudHlwZSBRdWVyaWFibGVMYXllciA9IHtcbiAgcXVlcnk/OiAocTogb2JqZWN0LCBvcHRpb25zPzogeyBzY29wZT86IFF1ZXJ5U2NvcGUgfSkgPT4gUHJvbWlzZTx7IHJlY29yZHM/OiBEYXRhUmVjb3JkW10gfT5cbiAgbG9hZD86IChxOiBvYmplY3QsIG9wdGlvbnM/OiB7IHNjb3BlPzogUXVlcnlTY29wZSB9KSA9PiBQcm9taXNlPERhdGFSZWNvcmRbXT5cbiAgbG9hZEFsbD86IChcbiAgICBxOiBvYmplY3QsXG4gICAgc2lnbmFsPzogQWJvcnRTaWduYWwsXG4gICAgcHJvZ3Jlc3NDYWxsYmFjaz86IHVua25vd24sXG4gICAgb3B0aW9ucz86IHsgc2NvcGU/OiBRdWVyeVNjb3BlIH1cbiAgKSA9PiBQcm9taXNlPERhdGFSZWNvcmRbXT5cbiAgZ2V0QWxsTG9hZGVkUmVjb3Jkcz86ICgpID0+IERhdGFSZWNvcmRbXVxuICBnZXRSZWNvcmRzPzogKCkgPT4gRGF0YVJlY29yZFtdXG4gIGxheWVyPzogeyBxdWVyeUZlYXR1cmVzPzogKHE6IG9iamVjdCkgPT4gUHJvbWlzZTx7IGZlYXR1cmVzPzogdW5rbm93bltdIH0+IH1cbiAgYnVpbGRSZWNvcmQ/OiAoZmVhdHVyZTogdW5rbm93bikgPT4gRGF0YVJlY29yZFxufVxuXG5jb25zdCBidWlsZFF1ZXJ5T3B0aW9ucyA9ICh3aWRnZXRJZD86IHN0cmluZykgPT4gKHtcbiAgc2NvcGU6IFF1ZXJ5U2NvcGUuSW5BbGxEYXRhLFxuICAuLi4od2lkZ2V0SWQgPyB7IHdpZGdldElkIH0gOiB7fSlcbn0pXG5cbmNvbnN0IGJ1aWxkUXVlcnlQYXJhbXMgPSAoXG4gIG91dEZpZWxkczogc3RyaW5nW10gPSBbJyonXSxcbiAgZGlzYWJsZUNsaWVudFF1ZXJ5ID0gZmFsc2VcbikgPT4gKHtcbiAgd2hlcmU6ICcxPTEnLFxuICBvdXRGaWVsZHMsXG4gIHJldHVybkdlb21ldHJ5OiBmYWxzZSxcbiAgcGFnZVNpemU6IDIwMDAsXG4gIC4uLihkaXNhYmxlQ2xpZW50UXVlcnkgPyB7IGRpc2FibGVDbGllbnRRdWVyeTogdHJ1ZSB9IDoge30pXG59KVxuXG5mdW5jdGlvbiByZWNvcmRzQXJlUmVhZGFibGUgKHJlY29yZHM6IERhdGFSZWNvcmRbXSk6IGJvb2xlYW4ge1xuICByZXR1cm4gcmVjb3Jkcy5sZW5ndGggPiAwICYmIHJlY29yZHMuc29tZShyZWNvcmRIYXNSZWFkYWJsZURhdGEpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHF1ZXJ5VmlhSnNhcGlMYXllciAoZHM6IFF1ZXJpYWJsZUxheWVyKTogUHJvbWlzZTxEYXRhUmVjb3JkW10+IHtcbiAgY29uc3QgbGF5ZXIgPSBkcy5sYXllciBhcyB7XG4gICAgcXVlcnlGZWF0dXJlcz86IChxOiBvYmplY3QpID0+IFByb21pc2U8eyBmZWF0dXJlcz86IHVua25vd25bXSB9PlxuICAgIHF1ZXJ5PzogKHE6IG9iamVjdCkgPT4gUHJvbWlzZTx7IGZlYXR1cmVzPzogdW5rbm93bltdIH0+XG4gIH1cbiAgaWYgKCFsYXllciB8fCB0eXBlb2YgZHMuYnVpbGRSZWNvcmQgIT09ICdmdW5jdGlvbicpIHJldHVybiBbXVxuXG4gIGNvbnN0IHEgPSB7XG4gICAgd2hlcmU6ICcxPTEnLFxuICAgIG91dEZpZWxkczogWycqJ10sXG4gICAgcmV0dXJuR2VvbWV0cnk6IGZhbHNlLFxuICAgIG51bTogMjAwMFxuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPVxuICAgICAgdHlwZW9mIGxheWVyLnF1ZXJ5RmVhdHVyZXMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBhd2FpdCBsYXllci5xdWVyeUZlYXR1cmVzKHEpXG4gICAgICAgIDogdHlwZW9mIGxheWVyLnF1ZXJ5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgPyBhd2FpdCBsYXllci5xdWVyeShxKVxuICAgICAgICAgIDogbnVsbFxuICAgIGNvbnN0IGZlYXR1cmVzID0gcmVzdWx0Py5mZWF0dXJlcyA/PyBbXVxuICAgIHJldHVybiBmZWF0dXJlcy5tYXAoKGYpID0+IGRzLmJ1aWxkUmVjb3JkIShmKSlcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hWaWFBcmNnaXNSZXN0IChcbiAgZHM6IHsgdXJsPzogc3RyaW5nIH1cbik6IFByb21pc2U8UmVjb3JkPHN0cmluZywgdW5rbm93bj5bXT4ge1xuICBpZiAoIWRzLnVybCkgcmV0dXJuIFtdXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZXNyaS5yZXN0RmVhdHVyZVNlcnZpY2UucXVlcnlGZWF0dXJlcyh7XG4gICAgICB1cmw6IGRzLnVybCxcbiAgICAgIHdoZXJlOiAnMT0xJyxcbiAgICAgIG91dEZpZWxkczogWycqJ10sXG4gICAgICByZXR1cm5HZW9tZXRyeTogZmFsc2VcbiAgICB9KVxuICAgIGNvbnN0IGZlYXR1cmVzID1cbiAgICAgIHJlcyAmJiB0eXBlb2YgcmVzID09PSAnb2JqZWN0JyAmJiAnZmVhdHVyZXMnIGluIHJlc1xuICAgICAgICA/IChyZXMgYXMgeyBmZWF0dXJlcz86IEFycmF5PHsgYXR0cmlidXRlcz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+IH0+IH0pXG4gICAgICAgICAgICAuZmVhdHVyZXMgPz8gW11cbiAgICAgICAgOiBbXVxuICAgIHJldHVybiBmZWF0dXJlc1xuICAgICAgLm1hcCgoZikgPT4gKHsgLi4uKGYuYXR0cmlidXRlcyA/PyB7fSkgfSkpXG4gICAgICAuZmlsdGVyKChhKSA9PiBPYmplY3Qua2V5cyhhKS5sZW5ndGggPiAwKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gW11cbiAgfVxufVxuXG4vKiogQ29uc3VsdGEgUkVTVCBjb20gY3JlZGVuY2lhbCBkbyBQb3J0YWwgKEVudGVycHJpc2UpLiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoVmlhUG9ydGFsUmVzdCAoXG4gIGRzOiB7IHVybD86IHN0cmluZyB9XG4pOiBQcm9taXNlPFJlY29yZDxzdHJpbmcsIHVua25vd24+W10+IHtcbiAgaWYgKCFkcy51cmwpIHJldHVybiBbXVxuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlcXVlc3RVdGlscy5yZXF1ZXN0V3JhcHBlcihkcy51cmwsIChzZXNzaW9uKSA9PlxuICAgICAgZXNyaS5yZXN0RmVhdHVyZVNlcnZpY2UucXVlcnlGZWF0dXJlcyh7XG4gICAgICAgIHVybDogZHMudXJsLFxuICAgICAgICB3aGVyZTogJzE9MScsXG4gICAgICAgIG91dEZpZWxkczogWycqJ10sXG4gICAgICAgIHJldHVybkdlb21ldHJ5OiBmYWxzZSxcbiAgICAgICAgYXV0aGVudGljYXRpb246IHNlc3Npb25cbiAgICAgIH0pXG4gICAgKVxuICAgIGNvbnN0IGZlYXR1cmVzID1cbiAgICAgIHJlcyAmJiB0eXBlb2YgcmVzID09PSAnb2JqZWN0JyAmJiAnZmVhdHVyZXMnIGluIHJlc1xuICAgICAgICA/IChyZXMgYXMgeyBmZWF0dXJlcz86IEFycmF5PHsgYXR0cmlidXRlcz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+IH0+IH0pXG4gICAgICAgICAgICAuZmVhdHVyZXMgPz8gW11cbiAgICAgICAgOiBbXVxuICAgIHJldHVybiBmZWF0dXJlc1xuICAgICAgLm1hcCgoZikgPT4gKHsgLi4uKGYuYXR0cmlidXRlcyA/PyB7fSkgfSkpXG4gICAgICAuZmlsdGVyKChhKSA9PiBPYmplY3Qua2V5cyhhKS5sZW5ndGggPiAwKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmV0Y2hWaWFBcmNnaXNSZXN0KGRzKVxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJ1blF1ZXJ5YWJsZU1ldGhvZHMgKFxuICBkczogUXVlcmlhYmxlTGF5ZXIsXG4gIG91dEZpZWxkczogc3RyaW5nW10sXG4gIGRpc2FibGVDbGllbnRRdWVyeTogYm9vbGVhbixcbiAgd2lkZ2V0SWQ/OiBzdHJpbmdcbik6IFByb21pc2U8RGF0YVJlY29yZFtdPiB7XG4gIGNvbnN0IHBhcmFtcyA9IGJ1aWxkUXVlcnlQYXJhbXMob3V0RmllbGRzLCBkaXNhYmxlQ2xpZW50UXVlcnkpXG4gIGNvbnN0IHF1ZXJ5T3B0aW9ucyA9IGJ1aWxkUXVlcnlPcHRpb25zKHdpZGdldElkKVxuXG4gIGlmICh0eXBlb2YgZHM/LmxvYWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IGRzLmxvYWQocGFyYW1zLCBxdWVyeU9wdGlvbnMpXG4gICAgICBpZiAocmVjb3Jkcz8ubGVuZ3RoICYmIHJlY29yZHNBcmVSZWFkYWJsZShyZWNvcmRzKSkgcmV0dXJuIHJlY29yZHNcbiAgICAgIGlmIChyZWNvcmRzPy5sZW5ndGggJiYgIWRpc2FibGVDbGllbnRRdWVyeSkgcmV0dXJuIHJlY29yZHNcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIHRlbnRhIHByw7N4aW1vIG3DqXRvZG9cbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIGRzPy5sb2FkQWxsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBkcy5sb2FkQWxsKHBhcmFtcywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHF1ZXJ5T3B0aW9ucylcbiAgICAgIGlmIChyZWNvcmRzPy5sZW5ndGggJiYgcmVjb3Jkc0FyZVJlYWRhYmxlKHJlY29yZHMpKSByZXR1cm4gcmVjb3Jkc1xuICAgICAgaWYgKHJlY29yZHM/Lmxlbmd0aCAmJiAhZGlzYWJsZUNsaWVudFF1ZXJ5KSByZXR1cm4gcmVjb3Jkc1xuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gdGVudGEgcXVlcnkgYWJhaXhvXG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiBkcz8ucXVlcnkgPT09ICdmdW5jdGlvbicpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZHMucXVlcnkocGFyYW1zLCBxdWVyeU9wdGlvbnMpXG4gICAgICBjb25zdCByZWNvcmRzID0gcmVzdWx0Py5yZWNvcmRzID8/IFtdXG4gICAgICBpZiAocmVjb3Jkcy5sZW5ndGggJiYgcmVjb3Jkc0FyZVJlYWRhYmxlKHJlY29yZHMpKSByZXR1cm4gcmVjb3Jkc1xuICAgICAgaWYgKHJlY29yZHMubGVuZ3RoICYmICFkaXNhYmxlQ2xpZW50UXVlcnkpIHJldHVybiByZWNvcmRzXG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyB0ZW50YSBKUyBBUElcbiAgICB9XG4gIH1cblxuICBjb25zdCB2aWFMYXllciA9IGF3YWl0IHF1ZXJ5VmlhSnNhcGlMYXllcihkcylcbiAgaWYgKHZpYUxheWVyLmxlbmd0aCAmJiByZWNvcmRzQXJlUmVhZGFibGUodmlhTGF5ZXIpKSByZXR1cm4gdmlhTGF5ZXJcbiAgaWYgKHZpYUxheWVyLmxlbmd0aCAmJiAhZGlzYWJsZUNsaWVudFF1ZXJ5KSByZXR1cm4gdmlhTGF5ZXJcblxuICByZXR1cm4gW11cbn1cblxuYXN5bmMgZnVuY3Rpb24gcXVlcnlBbGxSZWNvcmRzIChcbiAgZHM6IFF1ZXJpYWJsZUxheWVyLFxuICBvdXRGaWVsZHM6IHN0cmluZ1tdID0gWycqJ10sXG4gIHdpZGdldElkPzogc3RyaW5nXG4pOiBQcm9taXNlPERhdGFSZWNvcmRbXT4ge1xuICBsZXQgcmVjb3JkcyA9IGF3YWl0IHJ1blF1ZXJ5YWJsZU1ldGhvZHMoZHMsIG91dEZpZWxkcywgZmFsc2UsIHdpZGdldElkKVxuICBpZiAocmVjb3Jkc0FyZVJlYWRhYmxlKHJlY29yZHMpKSByZXR1cm4gcmVjb3Jkc1xuXG4gIHJlY29yZHMgPSBhd2FpdCBydW5RdWVyeWFibGVNZXRob2RzKGRzLCBvdXRGaWVsZHMsIHRydWUsIHdpZGdldElkKVxuICBpZiAocmVjb3Jkc0FyZVJlYWRhYmxlKHJlY29yZHMpKSByZXR1cm4gcmVjb3Jkc1xuXG4gIHJldHVybiByZWNvcmRzXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmV0Y2hMYXllclJlY29yZHNPcHRpb25zIHtcbiAgLyoqIElnbm9yYSBjYWNoZSBkbyBtYXBhIGUgZm9yw6dhIHF1ZXJ5L2xvYWRBbGwgKMO6dGlsIG5vIEVudGVycHJpc2UpLiAqL1xuICBmb3JjZVF1ZXJ5PzogYm9vbGVhblxuICB5ZWFyRmllbGRKaW11Pzogc3RyaW5nXG4gIHJlY29ydGVGaWVsZEppbXU/OiBzdHJpbmdcbiAgZmllbGRzPzogSU1GaWVsZFNjaGVtYVtdXG4gIC8qKiBJRCBkYSB3aWRnZXQgcGFyYSBhdXRlbnRpY2HDp8OjbyBuYSBjb25zdWx0YSBKaW11LiAqL1xuICB3aWRnZXRJZD86IHN0cmluZ1xufVxuXG5mdW5jdGlvbiByZXNvbHZlT3V0RmllbGRzIChcbiAgeWVhckZpZWxkSmltdT86IHN0cmluZyxcbiAgcmVjb3J0ZUZpZWxkSmltdT86IHN0cmluZyxcbiAgZmllbGRzPzogSU1GaWVsZFNjaGVtYVtdXG4pOiBzdHJpbmdbXSB7XG4gIGlmICghZmllbGRzPy5sZW5ndGggfHwgIXllYXJGaWVsZEppbXUgfHwgIXJlY29ydGVGaWVsZEppbXUpIHJldHVybiBbJyonXVxuICBjb25zdCBrZXlzID0gcmVzb2x2ZUF0dHJpYnV0ZUtleXMoZmllbGRzLCB5ZWFyRmllbGRKaW11LCByZWNvcnRlRmllbGRKaW11KVxuICBpZiAoIWtleXMpIHJldHVybiBbJyonXVxuICByZXR1cm4gWycqJywga2V5cy55ZWFyS2V5LCBrZXlzLnJlY29ydGVLZXldXG59XG5cbi8qKiBEZXRlY3RhIGNvbHVuYSBkZSBhbm8gcGVsb3MgdmFsb3JlcyByZWFpcyAoZXguOiBBbm8gPSAyLjAwMSwgMjAwMSkuICovXG5leHBvcnQgZnVuY3Rpb24gZGV0ZWN0WWVhcktleUZyb21Sb3dzIChcbiAgcm93czogUmVjb3JkPHN0cmluZywgdW5rbm93bj5bXSxcbiAgaGludD86IHN0cmluZ1xuKTogc3RyaW5nIHwgbnVsbCB7XG4gIGlmICghcm93cy5sZW5ndGgpIHJldHVybiBudWxsXG5cbiAgY29uc3Qga2V5cyA9IG5ldyBTZXQ8c3RyaW5nPigpXG4gIGZvciAoY29uc3Qgcm93IG9mIHJvd3Muc2xpY2UoMCwgNTApKSB7XG4gICAgT2JqZWN0LmtleXMocm93KS5mb3JFYWNoKChrKSA9PiBrZXlzLmFkZChrKSlcbiAgfVxuXG4gIGlmIChoaW50KSB7XG4gICAgY29uc3QgbWF0Y2ggPSBbLi4ua2V5c10uZmluZCgoaykgPT4gay50b0xvd2VyQ2FzZSgpID09PSBoaW50LnRvTG93ZXJDYXNlKCkpXG4gICAgaWYgKG1hdGNoKSByZXR1cm4gbWF0Y2hcbiAgfVxuXG4gIGxldCBiZXN0S2V5OiBzdHJpbmcgfCBudWxsID0gbnVsbFxuICBsZXQgYmVzdFNjb3JlID0gMFxuICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgaWYgKC9eKG9iamVjdGlkfGdsb2JhbGlkfHNoYXBlfGZpZCkkL2kudGVzdChrZXkpKSBjb250aW51ZVxuICAgIGxldCBzY29yZSA9IDBcbiAgICBmb3IgKGNvbnN0IHJvdyBvZiByb3dzKSB7XG4gICAgICBjb25zdCB5ID0gcGFyc2VZZWFyKHJvd1trZXldKVxuICAgICAgaWYgKHkgIT0gbnVsbCAmJiB5ID49IDE5ODUgJiYgeSA8PSAyMDM1KSBzY29yZSsrXG4gICAgfVxuICAgIGlmIChzY29yZSA+IGJlc3RTY29yZSkge1xuICAgICAgYmVzdFNjb3JlID0gc2NvcmVcbiAgICAgIGJlc3RLZXkgPSBrZXlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJlc3RTY29yZSA+IDAgPyBiZXN0S2V5IDogbnVsbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGV0ZWN0UmVjb3J0ZUtleUZyb21Sb3dzIChcbiAgcm93czogUmVjb3JkPHN0cmluZywgdW5rbm93bj5bXSxcbiAgcmVjb3J0ZUhpbnQ6IHN0cmluZ1xuKTogc3RyaW5nIHwgbnVsbCB7XG4gIGlmICghcm93cy5sZW5ndGgpIHJldHVybiBudWxsXG4gIGNvbnN0IGhpbnQgPSByZWNvcnRlSGludD8udHJpbSgpXG4gIGlmICghaGludCkgcmV0dXJuIG51bGxcblxuICBjb25zdCBrZXlzID0gbmV3IFNldDxzdHJpbmc+KClcbiAgZm9yIChjb25zdCByb3cgb2Ygcm93cy5zbGljZSgwLCA1MCkpIHtcbiAgICBPYmplY3Qua2V5cyhyb3cpLmZvckVhY2goKGspID0+IGtleXMuYWRkKGspKVxuICB9XG4gIGNvbnN0IGV4YWN0ID0gWy4uLmtleXNdLmZpbmQoXG4gICAgKGspID0+IGsudG9Mb3dlckNhc2UoKSA9PT0gaGludC50b0xvd2VyQ2FzZSgpXG4gIClcbiAgaWYgKGV4YWN0KSByZXR1cm4gZXhhY3RcbiAgcmV0dXJuIChcbiAgICBbLi4ua2V5c10uZmluZChcbiAgICAgIChrKSA9PlxuICAgICAgICBub3JtYWxpemVSZWNvcnRlVG9rZW4oaykgPT09IG5vcm1hbGl6ZVJlY29ydGVUb2tlbihoaW50KVxuICAgICkgPz8gbnVsbFxuICApXG59XG5cbi8qKiBNb250YSBzw6lyaWUgYSBwYXJ0aXIgZGUgYXRyaWJ1dG9zIGJydXRvcyAoUkVTVCAvIHF1ZXJ5RmVhdHVyZXMpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkWWVhclNlcmllc0Zyb21BdHRyaWJ1dGVSb3dzIChcbiAgcm93czogUmVjb3JkPHN0cmluZywgdW5rbm93bj5bXSxcbiAgeWVhckZpZWxkSmltdTogc3RyaW5nLFxuICByZWNvcnRlRmllbGRKaW11OiBzdHJpbmcsXG4gIGZpZWxkcz86IElNRmllbGRTY2hlbWFbXVxuKTogWWVhclZhbHVlUm93W10ge1xuICBpZiAoIXJvd3MubGVuZ3RoKSByZXR1cm4gW11cblxuICBjb25zdCBhc1JlY29yZHMgPSByb3dzLm1hcCgoYXR0cmlidXRlcykgPT4gKHsgYXR0cmlidXRlcyB9KSlcbiAgY29uc3Qgc3RhbmRhcmQgPSBidWlsZFllYXJTZXJpZXMoXG4gICAgYXNSZWNvcmRzLFxuICAgIHllYXJGaWVsZEppbXUsXG4gICAgcmVjb3J0ZUZpZWxkSmltdSxcbiAgICBmaWVsZHNcbiAgKVxuICBpZiAoc3RhbmRhcmQubGVuZ3RoID4gMCkgcmV0dXJuIHN0YW5kYXJkXG5cbiAgY29uc3QgeWVhcktleSA9IGRldGVjdFllYXJLZXlGcm9tUm93cyhyb3dzLCB5ZWFyRmllbGRKaW11KSA/PyB5ZWFyRmllbGRKaW11XG4gIGNvbnN0IHllYXJGaWVsZCA9IGZpZWxkcz8ubGVuZ3RoXG4gICAgPyBmaW5kRmllbGRCeUppbXVOYW1lKGZpZWxkcywgeWVhckZpZWxkSmltdSlcbiAgICA6IG51bGxcbiAgY29uc3QgcmVjb3J0ZUZpZWxkID0gZmllbGRzPy5sZW5ndGhcbiAgICA/IGZpbmRGaWVsZEJ5SmltdU5hbWUoZmllbGRzLCByZWNvcnRlRmllbGRKaW11KVxuICAgIDogbnVsbFxuICBjb25zdCByZWNvcnRlS2V5ID0gcmVzb2x2ZVJlY29ydGVLZXlGcm9tUm93cyhcbiAgICByb3dzLFxuICAgIHJlY29ydGVGaWVsZEppbXUsXG4gICAgZmllbGRzLFxuICAgIHllYXJGaWVsZEppbXVcbiAgKVxuXG4gIGlmICgheWVhcktleSB8fCAhcmVjb3J0ZUtleSkgcmV0dXJuIFtdXG5cbiAgcmV0dXJuIGJ1aWxkU2VyaWVzRnJvbUtleXMoXG4gICAgcm93cyxcbiAgICB5ZWFyS2V5LFxuICAgIHJlY29ydGVLZXksXG4gICAgeWVhckZpZWxkLFxuICAgIHJlY29ydGVGaWVsZFxuICApXG59XG5cbi8qKiBSZXNvbHZlIGNvbHVuYSBkbyByZWNvcnRlIHBlZGlkbyDigJQgbnVuY2Egc3Vic3RpdHVpIHBvciBvdXRyYSBjb2x1bmEgZGEgdGFiZWxhLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVSZWNvcnRlS2V5RnJvbVJvd3MgKFxuICByb3dzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPltdLFxuICByZWNvcnRlRmllbGRKaW11OiBzdHJpbmcsXG4gIGZpZWxkcz86IElNRmllbGRTY2hlbWFbXSxcbiAgeWVhckZpZWxkSmltdT86IHN0cmluZ1xuKTogc3RyaW5nIHwgbnVsbCB7XG4gIGNvbnN0IGhpbnQgPSByZWNvcnRlRmllbGRKaW11Py50cmltKClcbiAgaWYgKCFoaW50KSByZXR1cm4gbnVsbFxuXG4gIGNvbnN0IGZyb21Sb3dzID0gZGV0ZWN0UmVjb3J0ZUtleUZyb21Sb3dzKHJvd3MsIGhpbnQpXG4gIGlmIChmcm9tUm93cykgcmV0dXJuIGZyb21Sb3dzXG5cbiAgaWYgKGZpZWxkcz8ubGVuZ3RoKSB7XG4gICAgY29uc3QgZmllbGQgPSBmaW5kRmllbGRCeUppbXVOYW1lKGZpZWxkcywgaGludClcbiAgICBpZiAoZmllbGQpIHtcbiAgICAgIGZvciAoY29uc3QgY2FuZGlkYXRlIG9mIFtcbiAgICAgICAgZ2V0QXR0cmlidXRlS2V5KGZpZWxkKSxcbiAgICAgICAgZmllbGQubmFtZSxcbiAgICAgICAgZmllbGQuamltdU5hbWUsXG4gICAgICAgIGZpZWxkLmFsaWFzXG4gICAgICBdKSB7XG4gICAgICAgIGlmICghY2FuZGlkYXRlKSBjb250aW51ZVxuICAgICAgICBjb25zdCBtYXRjaCA9IGRldGVjdFJlY29ydGVLZXlGcm9tUm93cyhyb3dzLCBjYW5kaWRhdGUpXG4gICAgICAgIGlmIChtYXRjaCkgcmV0dXJuIG1hdGNoXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qga2V5cyA9IHJlc29sdmVBdHRyaWJ1dGVLZXlzKGZpZWxkcywgeWVhckZpZWxkSmltdSwgaGludClcbiAgICBpZiAoa2V5cz8ucmVjb3J0ZUtleSkge1xuICAgICAgY29uc3QgbWF0Y2ggPSBkZXRlY3RSZWNvcnRlS2V5RnJvbVJvd3Mocm93cywga2V5cy5yZWNvcnRlS2V5KVxuICAgICAgaWYgKG1hdGNoKSByZXR1cm4gbWF0Y2hcbiAgICAgIGNvbnN0IHNhbXBsZSA9IHJvd3NbMF1cbiAgICAgIGlmIChzYW1wbGUgJiYga2V5cy5yZWNvcnRlS2V5IGluIHNhbXBsZSkgcmV0dXJuIGtleXMucmVjb3J0ZUtleVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNhbXBsZSA9IHJvd3NbMF1cbiAgaWYgKHNhbXBsZSAmJiBoaW50IGluIHNhbXBsZSkgcmV0dXJuIGhpbnRcblxuICByZXR1cm4gaGludFxufVxuXG4vKiogUmVzdW1vIGRhcyBjb2x1bmFzIGRldGVjdGFkYXMgKGFqdWRhIGRpYWduw7NzdGljbyBubyBFbnRlcnByaXNlKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXNjcmliZVJvd3NGb3JFeHRyYWN0RXJyb3IgKFxuICByb3dzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPltdLFxuICByZWNvcnRlSGludDogc3RyaW5nLFxuICBmaWVsZHM/OiBJTUZpZWxkU2NoZW1hW11cbik6IHN0cmluZyB7XG4gIGlmICghcm93cy5sZW5ndGgpIHJldHVybiAnJ1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocm93c1swXSkuZmlsdGVyKFxuICAgIChrKSA9PiAhL14ob2JqZWN0aWR8Z2xvYmFsaWR8c2hhcGV8ZmlkKSQvaS50ZXN0KGspXG4gIClcbiAgY29uc3QgeWVhcktleSA9IGRldGVjdFllYXJLZXlGcm9tUm93cyhyb3dzKVxuICBjb25zdCByZWNvcnRlSGludE5vcm0gPVxuICAgIG5vcm1hbGl6ZVJlY29ydGVGaWVsZENvbmZpZyhyZWNvcnRlSGludCkgPz8gU3RyaW5nKHJlY29ydGVIaW50ID8/ICcnKVxuICBjb25zdCByZWNvcnRlS2V5ID0gcmVzb2x2ZVJlY29ydGVLZXlGcm9tUm93cyhyb3dzLCByZWNvcnRlSGludE5vcm0sIGZpZWxkcylcbiAgY29uc3QgcHJldmlldyA9IGtleXMuc2xpY2UoMCwgMTApLmpvaW4oJywgJylcbiAgY29uc3Qgc3VmZml4ID0ga2V5cy5sZW5ndGggPiAxMCA/ICfigKYnIDogJydcbiAgbGV0IG1zZyA9IGAgQ29sdW5hcyBuYSByZXNwb3N0YTogJHtwcmV2aWV3fSR7c3VmZml4fS5gXG4gIGlmICh5ZWFyS2V5KSBtc2cgKz0gYCBDb2x1bmEgZGUgYW5vOiBcIiR7eWVhcktleX1cIi5gXG4gIG1zZyArPSBgIFJlY29ydGUgY29uZmlndXJhZG86IFwiJHtyZWNvcnRlSGludE5vcm19XCIuYFxuICBpZiAocmVjb3J0ZUtleSkgbXNnICs9IGAgQ29sdW5hIGRvIHJlY29ydGU6IFwiJHtyZWNvcnRlS2V5fVwiLmBcbiAgcmV0dXJuIG1zZ1xufVxuXG5mdW5jdGlvbiBidWlsZFNlcmllc0Zyb21LZXlzIChcbiAgcm93czogUmVjb3JkPHN0cmluZywgdW5rbm93bj5bXSxcbiAgeWVhcktleTogc3RyaW5nLFxuICByZWNvcnRlS2V5OiBzdHJpbmcsXG4gIHllYXJGaWVsZD86IElNRmllbGRTY2hlbWEgfCBudWxsLFxuICByZWNvcnRlRmllbGQ/OiBJTUZpZWxkU2NoZW1hIHwgbnVsbFxuKTogWWVhclZhbHVlUm93W10ge1xuICBjb25zdCBzZXJpZXM6IFllYXJWYWx1ZVJvd1tdID0gW11cbiAgZm9yIChjb25zdCByb3cgb2Ygcm93cykge1xuICAgIGNvbnN0IHllYXIgPSBwYXJzZVllYXIoXG4gICAgICByZWFkQXR0cmlidXRlRmxleGlibGUocm93LCB5ZWFyRmllbGQgPz8gbnVsbCwgeWVhcktleSlcbiAgICApXG4gICAgY29uc3QgdmFsdWUgPSBwYXJzZU51bWVyaWNWYWx1ZShcbiAgICAgIHJlYWRBdHRyaWJ1dGVGbGV4aWJsZShyb3csIHJlY29ydGVGaWVsZCA/PyBudWxsLCByZWNvcnRlS2V5KVxuICAgIClcbiAgICBpZiAoeWVhciA9PSBudWxsIHx8IHZhbHVlID09IG51bGwpIGNvbnRpbnVlXG4gICAgc2VyaWVzLnB1c2goeyB5ZWFyLCB2YWx1ZSB9KVxuICB9XG4gIHJldHVybiBzZXJpZXMuc29ydCgoYSwgYikgPT4gYS55ZWFyIC0gYi55ZWFyKVxufVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaFJhd0F0dHJpYnV0ZVJvd3NGcm9tTGF5ZXIgKFxuICBkczogUXVlcmlhYmxlTGF5ZXJcbik6IFByb21pc2U8UmVjb3JkPHN0cmluZywgdW5rbm93bj5bXT4ge1xuICBjb25zdCBsYXllciA9IGRzLmxheWVyIGFzIHtcbiAgICBsb2FkPzogKCkgPT4gUHJvbWlzZTx2b2lkPlxuICAgIGxvYWRlZD86IGJvb2xlYW5cbiAgICBsb2FkU3RhdHVzPzogc3RyaW5nXG4gICAgcXVlcnlGZWF0dXJlcz86IChwOiBvYmplY3QpID0+IFByb21pc2U8e1xuICAgICAgZmVhdHVyZXM/OiBBcnJheTx7IGF0dHJpYnV0ZXM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB9PlxuICAgIH0+XG4gIH1cbiAgaWYgKCFsYXllcj8ucXVlcnlGZWF0dXJlcykgcmV0dXJuIFtdXG5cbiAgdHJ5IHtcbiAgICBpZiAoXG4gICAgICB0eXBlb2YgbGF5ZXIubG9hZCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgbGF5ZXIubG9hZFN0YXR1cyAhPT0gJ2xvYWRlZCcgJiZcbiAgICAgICFsYXllci5sb2FkZWRcbiAgICApIHtcbiAgICAgIGF3YWl0IGxheWVyLmxvYWQoKVxuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBsYXllci5xdWVyeUZlYXR1cmVzKHtcbiAgICAgIHdoZXJlOiAnMT0xJyxcbiAgICAgIG91dEZpZWxkczogWycqJ10sXG4gICAgICByZXR1cm5HZW9tZXRyeTogZmFsc2VcbiAgICB9KVxuICAgIHJldHVybiAocmVzdWx0LmZlYXR1cmVzID8/IFtdKVxuICAgICAgLm1hcCgoZikgPT4gKHsgLi4uKGYuYXR0cmlidXRlcyA/PyB7fSkgfSkpXG4gICAgICAuZmlsdGVyKChhKSA9PiBPYmplY3Qua2V5cyhhKS5sZW5ndGggPiAwKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gW11cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXR0cmlidXRlUm93c1Njb3JlIChcbiAgcm93czogUmVjb3JkPHN0cmluZywgdW5rbm93bj5bXVxuKTogbnVtYmVyIHtcbiAgaWYgKCFyb3dzLmxlbmd0aCkgcmV0dXJuIDBcbiAgY29uc3Qgc2FtcGxlID0gcm93c1swXVxuICByZXR1cm4gT2JqZWN0LmtleXMoc2FtcGxlKS5maWx0ZXIoXG4gICAgKGspID0+ICEvXihvYmplY3RpZHxnbG9iYWxpZHxzaGFwZXxmaWQpJC9pLnRlc3QoaylcbiAgKS5sZW5ndGhcbn1cblxuLyoqXG4gKiBDYXJyZWdhIGxpbmhhcyBkYSB0YWJlbGEgUFJPREVTIHByaW9yaXphbmRvIGF0cmlidXRvcyBicnV0b3MgZGEgY2FtYWRhXG4gKiAobWVzbWEgZm9udGUgZGEgdGFiZWxhIGRvIFBvcnRhbCkuXG4gKi9cbmZ1bmN0aW9uIHJlY29yZHNUb0F0dHJpYnV0ZVJvd3MgKHJlY29yZHM6IERhdGFSZWNvcmRbXSk6IFJlY29yZDxzdHJpbmcsIHVua25vd24+W10ge1xuICByZXR1cm4gcmVjb3Jkc1xuICAgIC5tYXAoKHIpID0+IGdldFBsYWluQXR0cmlidXRlcyhyKSlcbiAgICAuZmlsdGVyKChhKSA9PiBPYmplY3Qua2V5cyhhKS5sZW5ndGggPiAwKVxufVxuXG4vKiogUmXDum5lIHJlZ2lzdHJvcyBKaW11IChjYWNoZSBkbyBtYXBhICsgcXVlcnkpLCBkZWR1cGxpY2Fkb3MgcG9yIGlkLiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbGxlY3RQcm9kZXNSZWNvcmRzIChcbiAgZGF0YVNvdXJjZTogdW5rbm93bixcbiAgb3B0aW9ucz86IEZldGNoTGF5ZXJSZWNvcmRzT3B0aW9ucyAmIHsgd2lkZ2V0SWQ/OiBzdHJpbmcgfVxuKTogUHJvbWlzZTxEYXRhUmVjb3JkW10+IHtcbiAgY29uc3QgZHMgPSBkYXRhU291cmNlIGFzIFF1ZXJpYWJsZUxheWVyXG4gIGNvbnN0IHNlZW4gPSBuZXcgU2V0PHN0cmluZz4oKVxuICBjb25zdCBvdXQ6IERhdGFSZWNvcmRbXSA9IFtdXG5cbiAgY29uc3QgYWRkID0gKHJlY3M6IERhdGFSZWNvcmRbXSkgPT4ge1xuICAgIGZvciAoY29uc3QgcmVjIG9mIHJlY3MpIHtcbiAgICAgIGNvbnN0IGlkID0gcmVjLmdldElkPy4oKVxuICAgICAgY29uc3Qga2V5ID0gaWQgIT0gbnVsbCA/IFN0cmluZyhpZCkgOiBgaWR4LSR7b3V0Lmxlbmd0aH1gXG4gICAgICBpZiAoc2Vlbi5oYXMoa2V5KSkgY29udGludWVcbiAgICAgIHNlZW4uYWRkKGtleSlcbiAgICAgIG91dC5wdXNoKHJlYylcbiAgICB9XG4gIH1cblxuICBhZGQoZHMuZ2V0QWxsTG9hZGVkUmVjb3Jkcz8uKCkgPz8gW10pXG4gIGFkZChkcy5nZXRSZWNvcmRzPy4oKSA/PyBbXSlcbiAgYWRkKGF3YWl0IGZldGNoTGF5ZXJSZWNvcmRzKGRhdGFTb3VyY2UsIHsgLi4ub3B0aW9ucywgZm9yY2VRdWVyeTogdHJ1ZSB9KSlcblxuICByZXR1cm4gb3V0XG59XG5cbi8qKlxuICogTm8gRW50ZXJwcmlzZSBhIFJFU1QgdHJheiBub21lcyBkZSBjb2x1bmFzLCBtYXMgdmFsb3JlcyB2YXppb3M7IGdldEZpZWxkVmFsdWUgbm9zXG4gKiBEYXRhUmVjb3JkcyBKaW11IHRyYXogb3MgbsO6bWVyb3MgZm9ybWF0YWRvcy4gTWVzY2xhIG9zIGRvaXMgcG9yIE9CSkVDVElEIG91IGFuby5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVucmljaEF0dHJpYnV0ZVJvd3NXaXRoUmVjb3JkcyAoXG4gIHJvd3M6IFJlY29yZDxzdHJpbmcsIHVua25vd24+W10sXG4gIHJlY29yZHM6IERhdGFSZWNvcmRbXSxcbiAgeWVhckZpZWxkSmltdTogc3RyaW5nLFxuICByZWNvcnRlRmllbGRKaW11OiBzdHJpbmcsXG4gIGZpZWxkcz86IElNRmllbGRTY2hlbWFbXVxuKTogUmVjb3JkPHN0cmluZywgdW5rbm93bj5bXSB7XG4gIGlmICghcm93cy5sZW5ndGggfHwgIXJlY29yZHMubGVuZ3RoKSByZXR1cm4gcm93c1xuXG4gIGNvbnN0IHllYXJGaWVsZCA9IGZpZWxkcz8ubGVuZ3RoXG4gICAgPyBmaW5kRmllbGRCeUppbXVOYW1lKGZpZWxkcywgeWVhckZpZWxkSmltdSlcbiAgICA6IG51bGxcbiAgY29uc3QgcmVjb3J0ZUZpZWxkID0gZmllbGRzPy5sZW5ndGhcbiAgICA/IGZpbmRGaWVsZEJ5SmltdU5hbWUoZmllbGRzLCByZWNvcnRlRmllbGRKaW11KVxuICAgIDogbnVsbFxuICBjb25zdCB5ZWFyS2V5ID1cbiAgICBkZXRlY3RZZWFyS2V5RnJvbVJvd3Mocm93cywgeWVhckZpZWxkSmltdSkgPz8geWVhckZpZWxkSmltdVxuICBjb25zdCByZWNvcnRlS2V5ID1cbiAgICByZXNvbHZlUmVjb3J0ZUtleUZyb21Sb3dzKHJvd3MsIHJlY29ydGVGaWVsZEppbXUsIGZpZWxkcywgeWVhckZpZWxkSmltdSkgPz9cbiAgICByZWNvcnRlRmllbGRKaW11XG5cbiAgY29uc3QgYnlPaWQgPSBuZXcgTWFwPHN0cmluZywgRGF0YVJlY29yZD4oKVxuICBjb25zdCBieVllYXIgPSBuZXcgTWFwPG51bWJlciwgRGF0YVJlY29yZD4oKVxuICBmb3IgKGNvbnN0IHJlYyBvZiByZWNvcmRzKSB7XG4gICAgY29uc3QgaWQgPSByZWMuZ2V0SWQ/LigpXG4gICAgaWYgKGlkICE9IG51bGwpIGJ5T2lkLnNldChTdHJpbmcoaWQpLCByZWMpXG4gICAgY29uc3QgeSA9IHBhcnNlWWVhcihyZWFkUmVjb3JkVmFsdWUocmVjLCB5ZWFyRmllbGQsIHllYXJGaWVsZEppbXUpKVxuICAgIGlmICh5ICE9IG51bGwpIGJ5WWVhci5zZXQoeSwgcmVjKVxuICB9XG5cbiAgcmV0dXJuIHJvd3MubWFwKChyb3csIGluZGV4KSA9PiB7XG4gICAgY29uc3Qgb2lkID1cbiAgICAgIHJvdy5PQkpFQ1RJRCA/PyByb3cub2JqZWN0aWQgPz8gcm93Lk9iamVjdElkID8/IHJvdy5GSUQgPz8gcm93LmZpZFxuICAgIGxldCByZWM6IERhdGFSZWNvcmQgfCB1bmRlZmluZWRcbiAgICBpZiAob2lkICE9IG51bGwpIHJlYyA9IGJ5T2lkLmdldChTdHJpbmcob2lkKSlcbiAgICBpZiAoIXJlYykge1xuICAgICAgY29uc3QgeSA9IHBhcnNlWWVhcihyZWFkQXR0cmlidXRlRmxleGlibGUocm93LCB5ZWFyRmllbGQsIHllYXJLZXkpKVxuICAgICAgaWYgKHkgIT0gbnVsbCkgcmVjID0gYnlZZWFyLmdldCh5KVxuICAgIH1cbiAgICBpZiAoIXJlYyAmJiBpbmRleCA8IHJlY29yZHMubGVuZ3RoKSByZWMgPSByZWNvcmRzW2luZGV4XVxuICAgIGlmICghcmVjKSByZXR1cm4gcm93XG5cbiAgICBjb25zdCBlbnJpY2hlZCA9IHsgLi4ucm93IH1cbiAgICBjb25zdCB5ZWFyVmFsID0gcmVhZFJlY29yZFZhbHVlKHJlYywgeWVhckZpZWxkLCB5ZWFyRmllbGRKaW11KVxuICAgIGlmICh5ZWFyVmFsICE9PSB1bmRlZmluZWQgJiYgcGFyc2VZZWFyKGVucmljaGVkW3llYXJLZXldKSA9PSBudWxsKSB7XG4gICAgICBlbnJpY2hlZFt5ZWFyS2V5XSA9IHllYXJWYWxcbiAgICB9XG4gICAgY29uc3QgcmVjb3J0ZVZhbCA9IHJlYWRSZWNvcmRWYWx1ZShyZWMsIHJlY29ydGVGaWVsZCwgcmVjb3J0ZUZpZWxkSmltdSlcbiAgICBpZiAocmVjb3J0ZVZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBlbnJpY2hlZFtyZWNvcnRlS2V5XSA9IHJlY29ydGVWYWxcbiAgICB9XG4gICAgcmV0dXJuIGVucmljaGVkXG4gIH0pXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZFByb2Rlc1llYXJTZXJpZXNSZXN1bHQge1xuICBzZXJpZXM6IFllYXJWYWx1ZVJvd1tdXG4gIHJlY29yZHM6IERhdGFSZWNvcmRbXVxuICByb3dzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPltdXG59XG5cbmNvbnN0IExPQURfU0VSSUVTX1JFVFJZX01TID0gWzAsIDYwMCwgMTUwMCwgMzUwMCwgNjAwMF1cblxuLyoqIENhcnJlZ2Egc8OpcmllIGFub8OXdmFsb3IgcGFyYSBvIHJlY29ydGUgcGVkaWRvIChFbnRlcnByaXNlICsgbG9jYWwpLiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRQcm9kZXNZZWFyU2VyaWVzIChcbiAgZGF0YVNvdXJjZTogdW5rbm93bixcbiAgb3B0aW9uczogRmV0Y2hMYXllclJlY29yZHNPcHRpb25zICYgeyB3aWRnZXRJZD86IHN0cmluZyB9XG4pOiBQcm9taXNlPExvYWRQcm9kZXNZZWFyU2VyaWVzUmVzdWx0PiB7XG4gIGNvbnN0IHsgeWVhckZpZWxkSmltdSwgcmVjb3J0ZUZpZWxkSmltdSwgZmllbGRzIH0gPSBvcHRpb25zXG4gIGxldCBsYXN0UmVjb3JkczogRGF0YVJlY29yZFtdID0gW11cbiAgbGV0IGxhc3RSb3dzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPltdID0gW11cblxuICBpZiAoIXllYXJGaWVsZEppbXUgfHwgIXJlY29ydGVGaWVsZEppbXUpIHtcbiAgICByZXR1cm4geyBzZXJpZXM6IFtdLCByZWNvcmRzOiBbXSwgcm93czogW10gfVxuICB9XG5cbiAgZm9yIChjb25zdCBkZWxheSBvZiBMT0FEX1NFUklFU19SRVRSWV9NUykge1xuICAgIGlmIChkZWxheSA+IDApIHtcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIGRlbGF5KSlcbiAgICB9XG5cbiAgICBsYXN0UmVjb3JkcyA9IGF3YWl0IGNvbGxlY3RQcm9kZXNSZWNvcmRzKGRhdGFTb3VyY2UsIG9wdGlvbnMpXG4gICAgbGV0IHNlcmllcyA9IGJ1aWxkWWVhclNlcmllc0Zyb21SZWNvcmRzKFxuICAgICAgbGFzdFJlY29yZHMsXG4gICAgICB5ZWFyRmllbGRKaW11LFxuICAgICAgcmVjb3J0ZUZpZWxkSmltdSxcbiAgICAgIGZpZWxkc1xuICAgIClcbiAgICBpZiAoc2VyaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNlcmllcyxcbiAgICAgICAgcmVjb3JkczogbGFzdFJlY29yZHMsXG4gICAgICAgIHJvd3M6IHJlY29yZHNUb0F0dHJpYnV0ZVJvd3MobGFzdFJlY29yZHMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdFJvd3MgPSBhd2FpdCBmZXRjaFByb2Rlc0F0dHJpYnV0ZVJvd3MoZGF0YVNvdXJjZSwge1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIGZvcmNlUXVlcnk6IHRydWVcbiAgICB9KVxuICAgIGNvbnN0IGVucmljaGVkID0gZW5yaWNoQXR0cmlidXRlUm93c1dpdGhSZWNvcmRzKFxuICAgICAgbGFzdFJvd3MsXG4gICAgICBsYXN0UmVjb3JkcyxcbiAgICAgIHllYXJGaWVsZEppbXUsXG4gICAgICByZWNvcnRlRmllbGRKaW11LFxuICAgICAgZmllbGRzXG4gICAgKVxuICAgIHNlcmllcyA9IGJ1aWxkWWVhclNlcmllc0Zyb21BdHRyaWJ1dGVSb3dzKFxuICAgICAgZW5yaWNoZWQsXG4gICAgICB5ZWFyRmllbGRKaW11LFxuICAgICAgcmVjb3J0ZUZpZWxkSmltdSxcbiAgICAgIGZpZWxkc1xuICAgIClcbiAgICBpZiAoc2VyaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB7IHNlcmllcywgcmVjb3JkczogbGFzdFJlY29yZHMsIHJvd3M6IGVucmljaGVkIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBzZXJpZXM6IFtdLCByZWNvcmRzOiBsYXN0UmVjb3Jkcywgcm93czogbGFzdFJvd3MgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hQcm9kZXNBdHRyaWJ1dGVSb3dzIChcbiAgZGF0YVNvdXJjZTogdW5rbm93bixcbiAgb3B0aW9ucz86IEZldGNoTGF5ZXJSZWNvcmRzT3B0aW9uc1xuKTogUHJvbWlzZTxSZWNvcmQ8c3RyaW5nLCB1bmtub3duPltdPiB7XG4gIGNvbnN0IGRzID0gZGF0YVNvdXJjZSBhcyBRdWVyaWFibGVMYXllciAmIHsgdXJsPzogc3RyaW5nIH1cbiAgY29uc3QgY2FuZGlkYXRlczogUmVjb3JkPHN0cmluZywgdW5rbm93bj5bXVtdID0gW11cblxuICBjb25zdCBwb3J0YWxSb3dzID0gYXdhaXQgZmV0Y2hWaWFQb3J0YWxSZXN0KGRzKVxuICBpZiAocG9ydGFsUm93cy5sZW5ndGgpIGNhbmRpZGF0ZXMucHVzaChwb3J0YWxSb3dzKVxuXG4gIGNhbmRpZGF0ZXMucHVzaChhd2FpdCBmZXRjaFJhd0F0dHJpYnV0ZVJvd3NGcm9tTGF5ZXIoZHMpKVxuXG4gIGNvbnN0IHJlc3RSb3dzID0gYXdhaXQgZmV0Y2hWaWFBcmNnaXNSZXN0KGRzKVxuICBpZiAocmVzdFJvd3MubGVuZ3RoKSBjYW5kaWRhdGVzLnB1c2gocmVzdFJvd3MpXG5cbiAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IGZldGNoTGF5ZXJSZWNvcmRzKGRhdGFTb3VyY2UsIG9wdGlvbnMpXG4gIGlmIChyZWNvcmRzLmxlbmd0aCkge1xuICAgIGNhbmRpZGF0ZXMucHVzaChyZWNvcmRzVG9BdHRyaWJ1dGVSb3dzKHJlY29yZHMpKVxuICB9XG5cbiAgY29uc3QgbG9hZGVkID0gZHMuZ2V0UmVjb3Jkcz8uKCkgPz8gZHMuZ2V0QWxsTG9hZGVkUmVjb3Jkcz8uKCkgPz8gW11cbiAgaWYgKGxvYWRlZC5sZW5ndGgpIHtcbiAgICBjYW5kaWRhdGVzLnB1c2gocmVjb3Jkc1RvQXR0cmlidXRlUm93cyhsb2FkZWQpKVxuICB9XG5cbiAgaWYgKG9wdGlvbnM/LnllYXJGaWVsZEppbXUgJiYgb3B0aW9ucz8ucmVjb3J0ZUZpZWxkSmltdSkge1xuICAgIGNvbnN0IG9yZGVyZWQgPSBbXG4gICAgICAuLi5jYW5kaWRhdGVzLmZpbHRlcigoYykgPT4gYy5sZW5ndGggJiYgYXR0cmlidXRlUm93c1Njb3JlKGMpID4gMSlcbiAgICBdLnNvcnQoKGEsIGIpID0+IHNjb3JlUm93c0ZvclJlY29ydGUoYiwgb3B0aW9ucy5yZWNvcnRlRmllbGRKaW11KSAtIHNjb3JlUm93c0ZvclJlY29ydGUoYSwgb3B0aW9ucy5yZWNvcnRlRmllbGRKaW11KSlcblxuICAgIGZvciAoY29uc3Qgcm93cyBvZiBvcmRlcmVkKSB7XG4gICAgICBjb25zdCBzZXJpZXMgPSBidWlsZFllYXJTZXJpZXNGcm9tQXR0cmlidXRlUm93cyhcbiAgICAgICAgcm93cyxcbiAgICAgICAgb3B0aW9ucy55ZWFyRmllbGRKaW11LFxuICAgICAgICBvcHRpb25zLnJlY29ydGVGaWVsZEppbXUsXG4gICAgICAgIG9wdGlvbnMuZmllbGRzXG4gICAgICApXG4gICAgICBpZiAoc2VyaWVzLmxlbmd0aCA+IDApIHJldHVybiByb3dzXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgd2l0aERhdGEgPSBjYW5kaWRhdGVzLmZpbHRlcihcbiAgICAoYykgPT4gYy5sZW5ndGggJiYgYXR0cmlidXRlUm93c1Njb3JlKGMpID4gMVxuICApXG4gIGlmICghd2l0aERhdGEubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGNhbmRpZGF0ZXMuZmluZCgoYykgPT4gYy5sZW5ndGgpID8/IFtdXG4gIH1cblxuICBjb25zdCByZWNvcnRlSGludCA9IG9wdGlvbnM/LnJlY29ydGVGaWVsZEppbXUgPz8gJydcbiAgcmV0dXJuIHdpdGhEYXRhLnNvcnQoXG4gICAgKGEsIGIpID0+IHNjb3JlUm93c0ZvclJlY29ydGUoYiwgcmVjb3J0ZUhpbnQpIC0gc2NvcmVSb3dzRm9yUmVjb3J0ZShhLCByZWNvcnRlSGludClcbiAgKVswXVxufVxuXG4vKiogUXVhbnRvcyB2YWxvcmVzIG51bcOpcmljb3MgcHJlZW5jaGlkb3MgZXhpc3RlbSBuYSBjb2x1bmEgZG8gcmVjb3J0ZS4gKi9cbmZ1bmN0aW9uIHNjb3JlUm93c0ZvclJlY29ydGUgKFxuICByb3dzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPltdLFxuICByZWNvcnRlRmllbGRKaW11OiBzdHJpbmdcbik6IG51bWJlciB7XG4gIGNvbnN0IGtleSA9IGRldGVjdFJlY29ydGVLZXlGcm9tUm93cyhyb3dzLCByZWNvcnRlRmllbGRKaW11KSA/PyByZWNvcnRlRmllbGRKaW11XG4gIGxldCBzY29yZSA9IDBcbiAgZm9yIChjb25zdCByb3cgb2Ygcm93cykge1xuICAgIGlmIChwYXJzZU51bWVyaWNWYWx1ZShyb3dba2V5XSkgIT0gbnVsbCkgc2NvcmUrK1xuICB9XG4gIHJldHVybiBzY29yZVxufVxuXG5jb25zdCBSRVRSWV9ERUxBWVNfTVMgPSBbMCwgNDAwLCA4MDAsIDEyMDAsIDIwMDAsIDMwMDAsIDQ1MDBdXG5cbi8qKlxuICogVGVudGEgdsOhcmlhcyB2ZXplcyBhdMOpIG9idGVyIGxpbmhhcyBjb20gY29sdW5hcyBkZSBkYWRvcyAobsOjbyBzw7MgT0JKRUNUSUQpLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZm9yY2VMb2FkUHJvZGVzUm93cyAoXG4gIGRhdGFTb3VyY2U6IHVua25vd24sXG4gIG9wdGlvbnM6IEZldGNoTGF5ZXJSZWNvcmRzT3B0aW9ucyAmIHsgd2lkZ2V0SWQ/OiBzdHJpbmcgfVxuKTogUHJvbWlzZTxSZWNvcmQ8c3RyaW5nLCB1bmtub3duPltdPiB7XG4gIGZvciAoY29uc3QgZGVsYXkgb2YgUkVUUllfREVMQVlTX01TKSB7XG4gICAgaWYgKGRlbGF5ID4gMCkge1xuICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgZGVsYXkpKVxuICAgIH1cblxuICAgIGNvbnN0IHJvd3MgPSBhd2FpdCBmZXRjaFByb2Rlc0F0dHJpYnV0ZVJvd3MoZGF0YVNvdXJjZSwge1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIGZvcmNlUXVlcnk6IHRydWVcbiAgICB9KVxuXG4gICAgaWYgKCFvcHRpb25zLnllYXJGaWVsZEppbXUgfHwgIW9wdGlvbnMucmVjb3J0ZUZpZWxkSmltdSkge1xuICAgICAgaWYgKGF0dHJpYnV0ZVJvd3NTY29yZShyb3dzKSA+IDEpIHJldHVybiByb3dzXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBjb2xsZWN0UHJvZGVzUmVjb3JkcyhkYXRhU291cmNlLCBvcHRpb25zKVxuICAgIGNvbnN0IGVucmljaGVkID0gZW5yaWNoQXR0cmlidXRlUm93c1dpdGhSZWNvcmRzKFxuICAgICAgcm93cyxcbiAgICAgIHJlY29yZHMsXG4gICAgICBvcHRpb25zLnllYXJGaWVsZEppbXUsXG4gICAgICBvcHRpb25zLnJlY29ydGVGaWVsZEppbXUsXG4gICAgICBvcHRpb25zLmZpZWxkc1xuICAgIClcblxuICAgIGNvbnN0IHNlcmllcyA9IGJ1aWxkWWVhclNlcmllc0Zyb21BdHRyaWJ1dGVSb3dzKFxuICAgICAgZW5yaWNoZWQsXG4gICAgICBvcHRpb25zLnllYXJGaWVsZEppbXUsXG4gICAgICBvcHRpb25zLnJlY29ydGVGaWVsZEppbXUsXG4gICAgICBvcHRpb25zLmZpZWxkc1xuICAgIClcbiAgICBpZiAoc2VyaWVzLmxlbmd0aCA+IDApIHJldHVybiBlbnJpY2hlZFxuICB9XG5cbiAgcmV0dXJuIGZldGNoUHJvZGVzQXR0cmlidXRlUm93cyhkYXRhU291cmNlLCB7IC4uLm9wdGlvbnMsIGZvcmNlUXVlcnk6IHRydWUgfSlcbn1cblxuLyoqIENhcnJlZ2EgdG9kb3Mgb3MgcmVnaXN0cm9zIGRhIGNhbWFkYSAodGFiZWxhIGFubyDDlyByZWNvcnRlcykuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hMYXllclJlY29yZHMgKFxuICBkYXRhU291cmNlOiB1bmtub3duLFxuICBvcHRpb25zPzogRmV0Y2hMYXllclJlY29yZHNPcHRpb25zXG4pOiBQcm9taXNlPERhdGFSZWNvcmRbXT4ge1xuICBjb25zdCBkcyA9IGRhdGFTb3VyY2UgYXMgUXVlcmlhYmxlTGF5ZXJcbiAgY29uc3QgY2FjaGVkID0gZHMuZ2V0QWxsTG9hZGVkUmVjb3Jkcz8uKCkgPz8gZHMuZ2V0UmVjb3Jkcz8uKCkgPz8gW11cbiAgY29uc3Qgb3V0RmllbGRzID0gcmVzb2x2ZU91dEZpZWxkcyhcbiAgICBvcHRpb25zPy55ZWFyRmllbGRKaW11LFxuICAgIG9wdGlvbnM/LnJlY29ydGVGaWVsZEppbXUsXG4gICAgb3B0aW9ucz8uZmllbGRzXG4gIClcblxuICBpZiAoIW9wdGlvbnM/LmZvcmNlUXVlcnkgJiYgcmVjb3Jkc0FyZVJlYWRhYmxlKGNhY2hlZCkpIHtcbiAgICByZXR1cm4gY2FjaGVkXG4gIH1cblxuICBjb25zdCBxdWVyaWVkID0gYXdhaXQgcXVlcnlBbGxSZWNvcmRzKGRzLCBvdXRGaWVsZHMsIG9wdGlvbnM/LndpZGdldElkKVxuICBpZiAocmVjb3Jkc0FyZVJlYWRhYmxlKHF1ZXJpZWQpKSByZXR1cm4gcXVlcmllZFxuICBpZiAocXVlcmllZC5sZW5ndGgpIHJldHVybiBxdWVyaWVkXG5cbiAgaWYgKCFvcHRpb25zPy5mb3JjZVF1ZXJ5KSByZXR1cm4gY2FjaGVkXG4gIHJldHVybiBxdWVyaWVkLmxlbmd0aCA/IHF1ZXJpZWQgOiBjYWNoZWRcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUmVjb3J0ZVRva2VuICh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHZhbHVlXG4gICAgLnRvTG93ZXJDYXNlKClcbiAgICAubm9ybWFsaXplKCdORkQnKVxuICAgIC5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9nLCAnJylcbiAgICAucmVwbGFjZSgvW1xccy1dKy9nLCAnXycpXG59XG5cbmZ1bmN0aW9uIGlzWWVhck5hbWVkRmllbGQgKGZpZWxkOiBJTUZpZWxkU2NoZW1hKTogYm9vbGVhbiB7XG4gIGNvbnN0IHkgPVxuICAgIHBhcnNlWWVhcihmaWVsZC5qaW11TmFtZSkgPz9cbiAgICBwYXJzZVllYXIoZmllbGQubmFtZSkgPz9cbiAgICBwYXJzZVllYXIoZmllbGQuYWxpYXMpXG4gIHJldHVybiB5ICE9IG51bGwgJiYgeSA+PSAxOTg1ICYmIHkgPD0gMjAzNVxufVxuXG5mdW5jdGlvbiBmaW5kUmVjb3J0ZU5hbWVGaWVsZCAoZmllbGRzOiBJTUZpZWxkU2NoZW1hW10pOiBJTUZpZWxkU2NoZW1hIHwgbnVsbCB7XG4gIGNvbnN0IHBhdHRlcm5zID0gWydyZWNvcnRlJywgJ3JlZ2lhbycsICdyZWdpw6NvJywgJ2Jpb21hJywgJ25vbWUnLCAnbmFtZScsICdsYWJlbCddXG4gIHJldHVybiAoXG4gICAgZmllbGRzLmZpbmQoKGYpID0+IHtcbiAgICAgIGNvbnN0IGogPSBmLmppbXVOYW1lPy50b0xvd2VyQ2FzZSgpID8/ICcnXG4gICAgICBjb25zdCBuID0gZi5uYW1lPy50b0xvd2VyQ2FzZSgpID8/ICcnXG4gICAgICByZXR1cm4gcGF0dGVybnMuc29tZSgocCkgPT4gai5pbmNsdWRlcyhwKSB8fCBuLmluY2x1ZGVzKHApKVxuICAgIH0pID8/IG51bGxcbiAgKVxufVxuXG4vKiogTGF5b3V0IGFsdGVybmF0aXZvOiBjYWRhIHJlZ2lzdHJvID0gcmVjb3J0ZTsgY29sdW5hcyBudW3DqXJpY2FzID0gYW5vcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFllYXJTZXJpZXNGcm9tUmVjb3J0ZVJvd3MgKFxuICByZWNvcmRzOiBSZWNvcmRMaWtlW10sXG4gIHJlY29ydGVGaWVsZEppbXU6IHN0cmluZyxcbiAgZmllbGRzOiBJTUZpZWxkU2NoZW1hW11cbik6IFllYXJWYWx1ZVJvd1tdIHtcbiAgY29uc3QgeWVhckZpZWxkcyA9IGZpZWxkcy5maWx0ZXIoaXNZZWFyTmFtZWRGaWVsZClcbiAgaWYgKCF5ZWFyRmllbGRzLmxlbmd0aCkgcmV0dXJuIFtdXG5cbiAgY29uc3QgdGFyZ2V0ID0gbm9ybWFsaXplUmVjb3J0ZVRva2VuKHJlY29ydGVGaWVsZEppbXUpXG4gIGNvbnN0IG5hbWVGaWVsZCA9IGZpbmRSZWNvcnRlTmFtZUZpZWxkKGZpZWxkcylcblxuICBjb25zdCByb3cgPVxuICAgIHJlY29yZHMuZmluZCgocmVjKSA9PiB7XG4gICAgICBpZiAobmFtZUZpZWxkKSB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gcmVhZFJlY29yZFZhbHVlKHJlYywgbmFtZUZpZWxkLCBuYW1lRmllbGQuamltdU5hbWUpXG4gICAgICAgIGlmIChsYWJlbCAhPSBudWxsICYmIG5vcm1hbGl6ZVJlY29ydGVUb2tlbihTdHJpbmcobGFiZWwpKSA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBmIG9mIGZpZWxkcykge1xuICAgICAgICBpZiAoaXNZZWFyTmFtZWRGaWVsZChmKSB8fCBmLmppbXVOYW1lID09PSByZWNvcnRlRmllbGRKaW11KSBjb250aW51ZVxuICAgICAgICBjb25zdCB2ID0gcmVhZFJlY29yZFZhbHVlKHJlYywgZiwgZi5qaW11TmFtZSlcbiAgICAgICAgaWYgKHYgIT0gbnVsbCAmJiBub3JtYWxpemVSZWNvcnRlVG9rZW4oU3RyaW5nKHYpKSA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSkgPz8gbnVsbFxuXG4gIGlmICghcm93KSByZXR1cm4gW11cblxuICBjb25zdCBzZXJpZXM6IFllYXJWYWx1ZVJvd1tdID0gW11cbiAgZm9yIChjb25zdCB5ZiBvZiB5ZWFyRmllbGRzKSB7XG4gICAgY29uc3QgeWVhciA9XG4gICAgICBwYXJzZVllYXIoeWYuamltdU5hbWUpID8/IHBhcnNlWWVhcih5Zi5uYW1lKSA/PyBwYXJzZVllYXIoeWYuYWxpYXMpXG4gICAgY29uc3QgdmFsdWUgPSBwYXJzZU51bWVyaWNWYWx1ZShyZWFkUmVjb3JkVmFsdWUocm93LCB5ZiwgeWYuamltdU5hbWUpKVxuICAgIGlmICh5ZWFyID09IG51bGwgfHwgdmFsdWUgPT0gbnVsbCkgY29udGludWVcbiAgICBzZXJpZXMucHVzaCh7IHllYXIsIHZhbHVlIH0pXG4gIH1cblxuICByZXR1cm4gc2VyaWVzLnNvcnQoKGEsIGIpID0+IGEueWVhciAtIGIueWVhcilcbn1cblxuZnVuY3Rpb24gYnVpbGRZZWFyU2VyaWVzWWVhclJvd3MgKFxuICByZWNvcmRzOiBSZWNvcmRMaWtlW10sXG4gIHllYXJGaWVsZEppbXU6IHN0cmluZyxcbiAgcmVjb3J0ZUZpZWxkSmltdTogc3RyaW5nLFxuICBmaWVsZHM/OiBJTUZpZWxkU2NoZW1hW11cbik6IFllYXJWYWx1ZVJvd1tdIHtcbiAgY29uc3QgeWVhckZpZWxkID0gZmllbGRzPy5sZW5ndGhcbiAgICA/IGZpbmRGaWVsZEJ5SmltdU5hbWUoZmllbGRzLCB5ZWFyRmllbGRKaW11KVxuICAgIDogbnVsbFxuICBjb25zdCByZWNvcnRlRmllbGQgPSBmaWVsZHM/Lmxlbmd0aFxuICAgID8gZmluZEZpZWxkQnlKaW11TmFtZShmaWVsZHMsIHJlY29ydGVGaWVsZEppbXUpXG4gICAgOiBudWxsXG4gIGNvbnN0IHNlcmllczogWWVhclZhbHVlUm93W10gPSBbXVxuXG4gIGZvciAoY29uc3QgcmVjIG9mIHJlY29yZHMpIHtcbiAgICBjb25zdCB5ZWFyID0gcGFyc2VZZWFyKFxuICAgICAgcmVhZFJlY29yZFZhbHVlKHJlYywgeWVhckZpZWxkLCB5ZWFyRmllbGRKaW11KVxuICAgIClcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlTnVtZXJpY1ZhbHVlKFxuICAgICAgcmVhZFJlY29yZFZhbHVlKHJlYywgcmVjb3J0ZUZpZWxkLCByZWNvcnRlRmllbGRKaW11KVxuICAgIClcbiAgICBpZiAoeWVhciA9PSBudWxsIHx8IHZhbHVlID09IG51bGwpIGNvbnRpbnVlXG5cbiAgICBzZXJpZXMucHVzaCh7IHllYXIsIHZhbHVlIH0pXG4gIH1cblxuICByZXR1cm4gc2VyaWVzLnNvcnQoKGEsIGIpID0+IGEueWVhciAtIGIueWVhcilcbn1cblxuZnVuY3Rpb24gY29sbGVjdFJlY29yZEF0dHJpYnV0ZUtleXMgKHJlY29yZHM6IFJlY29yZExpa2VbXSk6IHN0cmluZ1tdIHtcbiAgY29uc3Qga2V5cyA9IG5ldyBTZXQ8c3RyaW5nPigpXG4gIGZvciAoY29uc3QgcmVjIG9mIHJlY29yZHMuc2xpY2UoMCwgMTAwKSkge1xuICAgIE9iamVjdC5rZXlzKGdldFBsYWluQXR0cmlidXRlcyhyZWMpKS5mb3JFYWNoKChrKSA9PiBrZXlzLmFkZChrKSlcbiAgfVxuICByZXR1cm4gWy4uLmtleXNdXG59XG5cbmZ1bmN0aW9uIHJlc29sdmVLZXlzRnJvbUF0dHJpYnV0ZU5hbWVzIChcbiAga2V5czogc3RyaW5nW10sXG4gIHllYXJGaWVsZEppbXU6IHN0cmluZyxcbiAgcmVjb3J0ZUZpZWxkSmltdTogc3RyaW5nXG4pOiB7IHllYXJLZXk6IHN0cmluZzsgcmVjb3J0ZUtleTogc3RyaW5nIH0gfCBudWxsIHtcbiAgY29uc3QgcmVjb3J0ZUtleSA9IGtleXMuZmluZChcbiAgICAoaykgPT5cbiAgICAgIGsudG9Mb3dlckNhc2UoKSA9PT0gcmVjb3J0ZUZpZWxkSmltdS50b0xvd2VyQ2FzZSgpIHx8XG4gICAgICBub3JtYWxpemVSZWNvcnRlVG9rZW4oaykgPT09IG5vcm1hbGl6ZVJlY29ydGVUb2tlbihyZWNvcnRlRmllbGRKaW11KVxuICApXG4gIGxldCB5ZWFyS2V5ID0ga2V5cy5maW5kKChrKSA9PiBrLnRvTG93ZXJDYXNlKCkgPT09IHllYXJGaWVsZEppbXUudG9Mb3dlckNhc2UoKSlcbiAgaWYgKCF5ZWFyS2V5KSB7XG4gICAgeWVhcktleSA9IGtleXMuZmluZCgoaykgPT5cbiAgICAgIFlFQVJfTkFNRV9QQVRURVJOUy5zb21lKFxuICAgICAgICAocCkgPT4gay50b0xvd2VyQ2FzZSgpID09PSBwIHx8IGsudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhwKVxuICAgICAgKVxuICAgIClcbiAgfVxuICBpZiAoIXllYXJLZXkgfHwgIXJlY29ydGVLZXkpIHJldHVybiBudWxsXG4gIHJldHVybiB7IHllYXJLZXksIHJlY29ydGVLZXkgfVxufVxuXG4vKiogw5psdGltbyByZWN1cnNvOiBpbmZlcmUgY29sdW5hcyBwZWxvcyBub21lcyByZWFpcyBub3MgYXRyaWJ1dG9zIHJldG9ybmFkb3MuICovXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRZZWFyU2VyaWVzSW5mZXJyZWQgKFxuICByZWNvcmRzOiBSZWNvcmRMaWtlW10sXG4gIHllYXJGaWVsZEppbXU6IHN0cmluZyxcbiAgcmVjb3J0ZUZpZWxkSmltdTogc3RyaW5nXG4pOiBZZWFyVmFsdWVSb3dbXSB7XG4gIGNvbnN0IGtleXMgPSBjb2xsZWN0UmVjb3JkQXR0cmlidXRlS2V5cyhyZWNvcmRzKVxuICBjb25zdCByZXNvbHZlZCA9IHJlc29sdmVLZXlzRnJvbUF0dHJpYnV0ZU5hbWVzKGtleXMsIHllYXJGaWVsZEppbXUsIHJlY29ydGVGaWVsZEppbXUpXG4gIGlmICghcmVzb2x2ZWQpIHJldHVybiBbXVxuXG4gIGNvbnN0IHNlcmllczogWWVhclZhbHVlUm93W10gPSBbXVxuICBmb3IgKGNvbnN0IHJlYyBvZiByZWNvcmRzKSB7XG4gICAgY29uc3QgYXR0cnMgPSBnZXRQbGFpbkF0dHJpYnV0ZXMocmVjKVxuICAgIGNvbnN0IHllYXIgPSBwYXJzZVllYXIoYXR0cnNbcmVzb2x2ZWQueWVhcktleV0pXG4gICAgY29uc3QgdmFsdWUgPSBwYXJzZU51bWVyaWNWYWx1ZShhdHRyc1tyZXNvbHZlZC5yZWNvcnRlS2V5XSlcbiAgICBpZiAoeWVhciA9PSBudWxsIHx8IHZhbHVlID09IG51bGwpIGNvbnRpbnVlXG4gICAgc2VyaWVzLnB1c2goeyB5ZWFyLCB2YWx1ZSB9KVxuICB9XG4gIHJldHVybiBzZXJpZXMuc29ydCgoYSwgYikgPT4gYS55ZWFyIC0gYi55ZWFyKVxufVxuXG4vKiogU8OpcmllIGEgcGFydGlyIGRlIERhdGFSZWNvcmRzIChnZXRGaWVsZFZhbHVlIC8gZ2V0RGF0YUJlZm9yZU1hcHBpbmcpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkWWVhclNlcmllc0Zyb21SZWNvcmRzIChcbiAgcmVjb3JkczogRGF0YVJlY29yZFtdLFxuICB5ZWFyRmllbGRKaW11OiBzdHJpbmcsXG4gIHJlY29ydGVGaWVsZEppbXU6IHN0cmluZyxcbiAgZmllbGRzPzogSU1GaWVsZFNjaGVtYVtdXG4pOiBZZWFyVmFsdWVSb3dbXSB7XG4gIHJldHVybiBidWlsZFllYXJTZXJpZXMoXG4gICAgcmVjb3JkcyBhcyBSZWNvcmRMaWtlW10sXG4gICAgeWVhckZpZWxkSmltdSxcbiAgICByZWNvcnRlRmllbGRKaW11LFxuICAgIGZpZWxkc1xuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFllYXJTZXJpZXMgKFxuICByZWNvcmRzOiBSZWNvcmRMaWtlW10sXG4gIHllYXJGaWVsZEppbXU6IHN0cmluZyxcbiAgcmVjb3J0ZUZpZWxkSmltdTogc3RyaW5nLFxuICBmaWVsZHM/OiBJTUZpZWxkU2NoZW1hW11cbik6IFllYXJWYWx1ZVJvd1tdIHtcbiAgY29uc3QgeWVhclJvd3MgPSBidWlsZFllYXJTZXJpZXNZZWFyUm93cyhcbiAgICByZWNvcmRzLFxuICAgIHllYXJGaWVsZEppbXUsXG4gICAgcmVjb3J0ZUZpZWxkSmltdSxcbiAgICBmaWVsZHNcbiAgKVxuICBpZiAoeWVhclJvd3MubGVuZ3RoID4gMCkgcmV0dXJuIHllYXJSb3dzXG5cbiAgaWYgKGZpZWxkcz8ubGVuZ3RoKSB7XG4gICAgY29uc3QgYWx0ID0gYnVpbGRZZWFyU2VyaWVzRnJvbVJlY29ydGVSb3dzKHJlY29yZHMsIHJlY29ydGVGaWVsZEppbXUsIGZpZWxkcylcbiAgICBpZiAoYWx0Lmxlbmd0aCA+IDApIHJldHVybiBhbHRcbiAgfVxuXG4gIHJldHVybiBidWlsZFllYXJTZXJpZXNJbmZlcnJlZChyZWNvcmRzLCB5ZWFyRmllbGRKaW11LCByZWNvcnRlRmllbGRKaW11KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0WWVhcnNSYW5nZVN1bW1hcnkgKHNlcmllczogWWVhclZhbHVlUm93W10pOiBzdHJpbmcgfCBudWxsIHtcbiAgaWYgKCFzZXJpZXMubGVuZ3RoKSByZXR1cm4gbnVsbFxuICBjb25zdCBtaW4gPSBzZXJpZXNbMF0ueWVhclxuICBjb25zdCBtYXggPSBzZXJpZXNbc2VyaWVzLmxlbmd0aCAtIDFdLnllYXJcbiAgY29uc3QgY291bnQgPSBzZXJpZXMubGVuZ3RoXG4gIGlmIChtaW4gPT09IG1heCkgcmV0dXJuIGAke21pbn0gKCR7Y291bnR9IGFubylgXG4gIHJldHVybiBgJHttaW594oCTJHttYXh9ICgke2NvdW50fSBhbm9zKWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzWWVhck91dE9mVHlwaWNhbFJhbmdlICh5ZWFyOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIHllYXIgPCAyMDAxIHx8IHllYXIgPiAyMDI1XG59XG5cbi8qKiBWYXJpYcOnw6NvIHBlcmNlbnR1YWwgZG8gdmFsb3IgaW5pY2lhbCAoYW5vIG1haXMgYW50aWdvKSBwYXJhIG8gZmluYWwgKGFubyBtYWlzIHJlY2VudGUpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbGNQZXJjZW50VmFyaWF0aW9uIChcbiAgdmFsdWVJbmljaWFsOiBudW1iZXIsXG4gIHZhbHVlRmluYWw6IG51bWJlclxuKTogbnVtYmVyIHwgbnVsbCB7XG4gIGlmICghTnVtYmVyLmlzRmluaXRlKHZhbHVlSW5pY2lhbCkgfHwgIU51bWJlci5pc0Zpbml0ZSh2YWx1ZUZpbmFsKSkgcmV0dXJuIG51bGxcbiAgaWYgKHZhbHVlSW5pY2lhbCA9PT0gMCkgcmV0dXJuIG51bGxcbiAgcmV0dXJuICgodmFsdWVGaW5hbCAtIHZhbHVlSW5pY2lhbCkgLyB2YWx1ZUluaWNpYWwpICogMTAwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQZXJjZW50VmFyaWF0aW9uIChwY3Q6IG51bWJlcik6IHN0cmluZyB7XG4gIGNvbnN0IHNpZ24gPSBwY3QgPiAwID8gJysnIDogJydcbiAgcmV0dXJuIGAke3NpZ259JHtwY3QudG9Mb2NhbGVTdHJpbmcoJ3B0LUJSJywge1xuICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDJcbiAgfSl9JWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlRm9yWWVhciAoXG4gIHNlcmllczogWWVhclZhbHVlUm93W10sXG4gIHllYXI6IG51bWJlclxuKTogbnVtYmVyIHwgbnVsbCB7XG4gIGNvbnN0IHJvdyA9IHNlcmllcy5maW5kKChyKSA9PiByLnllYXIgPT09IHllYXIpXG4gIHJldHVybiByb3cgIT0gbnVsbCA/IHJvdy52YWx1ZSA6IG51bGxcbn1cblxuLyoqIFNvbWEgb3MgdmFsb3JlcyBkb3MgYW5vcyBpbmZvcm1hZG9zOyByZXRvcm5hIG51bGwgc2UgYWxndW0gYW5vIG7Do28gdGl2ZXIgZGFkby4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdW1WYWx1ZXNGb3JZZWFycyAoXG4gIHNlcmllczogWWVhclZhbHVlUm93W10sXG4gIHllYXJzOiBudW1iZXJbXVxuKTogbnVtYmVyIHwgbnVsbCB7XG4gIGlmICgheWVhcnMubGVuZ3RoKSByZXR1cm4gbnVsbFxuICBsZXQgc3VtID0gMFxuICBmb3IgKGNvbnN0IHllYXIgb2YgeWVhcnMpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGdldFZhbHVlRm9yWWVhcihzZXJpZXMsIHllYXIpXG4gICAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiBudWxsXG4gICAgc3VtICs9IHZhbHVlXG4gIH1cbiAgcmV0dXJuIHN1bVxufVxuXG4vKiogQW5vcyBkaXNwb27DrXZlaXMgcGFyYSBvIHBlcsOtb2RvIGluaWNpYWwgKGFudGVzIGRvIHBlcsOtb2RvIGZpbmFsLCBzZSBob3V2ZXIpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFllYXJzQWxsb3dlZEZvckluaWNpYWwgKFxuICBhbGxZZWFyczogbnVtYmVyW10sXG4gIHBlcmlvZG9GaW5hbDogbnVtYmVyW11cbik6IG51bWJlcltdIHtcbiAgY29uc3QgYmxvY2tlZCA9IG5ldyBTZXQocGVyaW9kb0ZpbmFsKVxuICBjb25zdCBtYXhGaW5hbCA9IHBlcmlvZG9GaW5hbC5sZW5ndGggPyBNYXRoLm1pbiguLi5wZXJpb2RvRmluYWwpIDogSW5maW5pdHlcbiAgcmV0dXJuIGFsbFllYXJzLmZpbHRlcigoeSkgPT4gIWJsb2NrZWQuaGFzKHkpICYmIHkgPCBtYXhGaW5hbClcbn1cblxuLyoqIEFub3MgZGlzcG9uw612ZWlzIHBhcmEgbyBwZXLDrW9kbyBmaW5hbCAoZGVwb2lzIGRvIHBlcsOtb2RvIGluaWNpYWwsIHNlIGhvdXZlcikuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0WWVhcnNBbGxvd2VkRm9yRmluYWwgKFxuICBhbGxZZWFyczogbnVtYmVyW10sXG4gIHBlcmlvZG9JbmljaWFsOiBudW1iZXJbXVxuKTogbnVtYmVyW10ge1xuICBjb25zdCBibG9ja2VkID0gbmV3IFNldChwZXJpb2RvSW5pY2lhbClcbiAgY29uc3QgbWluSW5pY2lhbCA9IHBlcmlvZG9JbmljaWFsLmxlbmd0aCA/IE1hdGgubWF4KC4uLnBlcmlvZG9JbmljaWFsKSA6IC1JbmZpbml0eVxuICByZXR1cm4gYWxsWWVhcnMuZmlsdGVyKCh5KSA9PiAhYmxvY2tlZC5oYXMoeSkgJiYgeSA+IG1pbkluaWNpYWwpXG59XG5cbi8qKiBNYXJjYS9kZXNtYXJjYSB1bSBhbm8gbWFudGVuZG8gYXBlbmFzIHNlcXXDqm5jaWFzIGNvbnNlY3V0aXZhcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVDb25zZWN1dGl2ZVllYXIgKFxuICBwZXJpb2Q6IG51bWJlcltdLFxuICB5ZWFyOiBudW1iZXJcbik6IHsgbmV4dDogbnVtYmVyW107IHJlamVjdGVkOiBib29sZWFuIH0ge1xuICBpZiAocGVyaW9kLmluY2x1ZGVzKHllYXIpKSB7XG4gICAgcmV0dXJuIHsgbmV4dDogcGVyaW9kLmZpbHRlcigoeSkgPT4geSAhPT0geWVhciksIHJlamVjdGVkOiBmYWxzZSB9XG4gIH1cbiAgY29uc3QgbmV4dCA9IFsuLi5wZXJpb2QsIHllYXJdLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuICBpZiAoIWFyZUNvbnNlY3V0aXZlWWVhcnMobmV4dCkpIHtcbiAgICByZXR1cm4geyBuZXh0OiBwZXJpb2QsIHJlamVjdGVkOiB0cnVlIH1cbiAgfVxuICByZXR1cm4geyBuZXh0LCByZWplY3RlZDogZmFsc2UgfVxufVxuXG4vKiogVmVyaWZpY2Egc2Ugb3MgYW5vcyBmb3JtYW0gdW1hIHNlcXXDqm5jaWEgY29uc2VjdXRpdmEgKGV4LjogMjAxMCwgMjAxMSwgMjAxMikuICovXG5leHBvcnQgZnVuY3Rpb24gYXJlQ29uc2VjdXRpdmVZZWFycyAoeWVhcnM6IG51bWJlcltdKTogYm9vbGVhbiB7XG4gIGlmICh5ZWFycy5sZW5ndGggPD0gMSkgcmV0dXJuIHRydWVcbiAgY29uc3Qgc29ydGVkID0gWy4uLnllYXJzXS5zb3J0KChhLCBiKSA9PiBhIC0gYilcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBzb3J0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc29ydGVkW2ldIC0gc29ydGVkW2kgLSAxXSAhPT0gMSkgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuLyoqIFLDs3R1bG8gY29tcGFjdG8gcGFyYSB1bSBvdSBtYWlzIGFub3MgKGV4LjogXCIyMDEwXCIgb3UgXCIyMDEw4oCTMjAxMiAoMyBhbm9zKVwiKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQZXJpb2RMYWJlbCAoeWVhcnM6IG51bWJlcltdKTogc3RyaW5nIHtcbiAgY29uc3Qgc29ydGVkID0gWy4uLnllYXJzXS5zb3J0KChhLCBiKSA9PiBhIC0gYilcbiAgaWYgKCFzb3J0ZWQubGVuZ3RoKSByZXR1cm4gJydcbiAgaWYgKHNvcnRlZC5sZW5ndGggPT09IDEpIHJldHVybiBTdHJpbmcoc29ydGVkWzBdKVxuICByZXR1cm4gYCR7c29ydGVkWzBdfeKAkyR7c29ydGVkW3NvcnRlZC5sZW5ndGggLSAxXX0gKCR7c29ydGVkLmxlbmd0aH0gYW5vcylgXG59XG5cbi8qKiBJbnRlcnZhbG8gZGUgYW5vcyBzZW0gY29udGFnZW0gKGV4LjogXCIyMDEwXCIgb3UgXCIyMDEw4oCTMjAxMlwiKSDigJQgdXNvIGVtIHJlc3VsdGFkb3MuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UGVyaW9kUmFuZ2VMYWJlbCAoeWVhcnM6IG51bWJlcltdKTogc3RyaW5nIHtcbiAgY29uc3Qgc29ydGVkID0gWy4uLnllYXJzXS5zb3J0KChhLCBiKSA9PiBhIC0gYilcbiAgaWYgKCFzb3J0ZWQubGVuZ3RoKSByZXR1cm4gJydcbiAgaWYgKHNvcnRlZC5sZW5ndGggPT09IDEpIHJldHVybiBTdHJpbmcoc29ydGVkWzBdKVxuICByZXR1cm4gYCR7c29ydGVkWzBdfeKAkyR7c29ydGVkW3NvcnRlZC5sZW5ndGggLSAxXX1gXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmFyaWF0aW9uUmVzdWx0IHtcbiAgcGN0OiBudW1iZXJcbiAgdmFsdWVJbmljaWFsOiBudW1iZXJcbiAgdmFsdWVGaW5hbDogbnVtYmVyXG4gIHllYXJzSW5pY2lhbDogbnVtYmVyW11cbiAgeWVhcnNGaW5hbDogbnVtYmVyW11cbn1cblxuZXhwb3J0IHR5cGUgUGVyaW9kVmFyaWF0aW9uT3V0Y29tZSA9XG4gIHwgeyBvazogdHJ1ZTsgZGF0YTogVmFyaWF0aW9uUmVzdWx0IH1cbiAgfCB7IG9rOiBmYWxzZTsgbWVzc2FnZTogc3RyaW5nIH1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVQZXJpb2RWYXJpYXRpb24gKFxuICBzZXJpZXM6IFllYXJWYWx1ZVJvd1tdLFxuICBwZXJpb2RvSW5pY2lhbDogbnVtYmVyW10sXG4gIHBlcmlvZG9GaW5hbDogbnVtYmVyW11cbik6IFBlcmlvZFZhcmlhdGlvbk91dGNvbWUge1xuICBjb25zdCBpbmkgPSBbLi4ucGVyaW9kb0luaWNpYWxdLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuICBjb25zdCBmaW4gPSBbLi4ucGVyaW9kb0ZpbmFsXS5zb3J0KChhLCBiKSA9PiBhIC0gYilcblxuICBpZiAoIWluaS5sZW5ndGggfHwgIWZpbi5sZW5ndGgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogJ1NlbGVjaW9uZSBwZWxvIG1lbm9zIHVtIGFubyBlbSBjYWRhIHBlcsOtb2RvLidcbiAgICB9XG4gIH1cblxuICBpZiAoaW5pLmxlbmd0aCAhPT0gZmluLmxlbmd0aCkge1xuICAgIHJldHVybiB7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBtZXNzYWdlOlxuICAgICAgICAnTyBwZXLDrW9kbyBpbmljaWFsIGUgbyBwZXLDrW9kbyBmaW5hbCBkZXZlbSB0ZXIgYSBtZXNtYSBxdWFudGlkYWRlIGRlIGFub3MuJ1xuICAgIH1cbiAgfVxuXG4gIGlmICghYXJlQ29uc2VjdXRpdmVZZWFycyhpbmkpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6ICdPcyBhbm9zIGRvIHBlcsOtb2RvIGluaWNpYWwgZGV2ZW0gc2VyIGNvbnNlY3V0aXZvcy4nXG4gICAgfVxuICB9XG5cbiAgaWYgKCFhcmVDb25zZWN1dGl2ZVllYXJzKGZpbikpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogJ09zIGFub3MgZG8gcGVyw61vZG8gZmluYWwgZGV2ZW0gc2VyIGNvbnNlY3V0aXZvcy4nXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaW5pU2V0ID0gbmV3IFNldChpbmkpXG4gIGlmIChmaW4uc29tZSgoeSkgPT4gaW5pU2V0Lmhhcyh5KSkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogJ1VtIGFubyBuw6NvIHBvZGUgcGVydGVuY2VyIGFvcyBkb2lzIHBlcsOtb2RvcyBhbyBtZXNtbyB0ZW1wby4nXG4gICAgfVxuICB9XG5cbiAgY29uc3QgbWF4SW5pY2lhbCA9IGluaVtpbmkubGVuZ3RoIC0gMV1cbiAgY29uc3QgbWluRmluYWwgPSBmaW5bMF1cbiAgaWYgKG1heEluaWNpYWwgPj0gbWluRmluYWwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogJ08gcGVyw61vZG8gZmluYWwgZGV2ZSBzZXIgcG9zdGVyaW9yIGFvIHBlcsOtb2RvIGluaWNpYWwuJ1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHZhbHVlSW5pY2lhbCA9IHN1bVZhbHVlc0ZvclllYXJzKHNlcmllcywgaW5pKVxuICBjb25zdCB2YWx1ZUZpbmFsID0gc3VtVmFsdWVzRm9yWWVhcnMoc2VyaWVzLCBmaW4pXG5cbiAgaWYgKHZhbHVlSW5pY2lhbCA9PSBudWxsIHx8IHZhbHVlRmluYWwgPT0gbnVsbCkge1xuICAgIHJldHVybiB7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBtZXNzYWdlOlxuICAgICAgICAnVW0gb3UgbWFpcyBhbm9zIHNlbGVjaW9uYWRvcyBuw6NvIHBvc3N1ZW0gZGFkbyBwYXJhIGVzdGUgcmVjb3J0ZS4nXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcGN0ID0gY2FsY1BlcmNlbnRWYXJpYXRpb24odmFsdWVJbmljaWFsLCB2YWx1ZUZpbmFsKVxuICBpZiAocGN0ID09IG51bGwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTpcbiAgICAgICAgJ0Egc29tYSBkbyBwZXLDrW9kbyBpbmljaWFsIMOpIHplcm87IG7Do28gw6kgcG9zc8OtdmVsIGNhbGN1bGFyIGEgdmFyaWHDp8OjbyBwZXJjZW50dWFsLidcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG9rOiB0cnVlLFxuICAgIGRhdGE6IHtcbiAgICAgIHBjdCxcbiAgICAgIHZhbHVlSW5pY2lhbCxcbiAgICAgIHZhbHVlRmluYWwsXG4gICAgICB5ZWFyc0luaWNpYWw6IGluaSxcbiAgICAgIHllYXJzRmluYWw6IGZpblxuICAgIH1cbiAgfVxufVxuXG4vKiogQ29tcGFyYcOnw6NvIGVudHJlIGRvaXMgYW5vcyDDum5pY29zIChhdGFsaG8gcGFyYSBwZXLDrW9kb3MgZGUgdW0gYW5vKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlVmFyaWF0aW9uIChcbiAgc2VyaWVzOiBZZWFyVmFsdWVSb3dbXSxcbiAgYW5vSW5pY2lhbDogbnVtYmVyLFxuICBhbm9GaW5hbDogbnVtYmVyXG4pOiBQZXJpb2RWYXJpYXRpb25PdXRjb21lIHtcbiAgcmV0dXJuIGNvbXB1dGVQZXJpb2RWYXJpYXRpb24oc2VyaWVzLCBbYW5vSW5pY2lhbF0sIFthbm9GaW5hbF0pXG59XG4iLCIvKiogTm9ybWFsaXphIHJlY29ydGVGaWVsZCBzYWx2byBuYSBjb25maWcgKHN0cmluZyBvdSBvYmpldG8gZG8gU2VsZWN0IGRvIEVYQikuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplUmVjb3J0ZUZpZWxkQ29uZmlnICh2YWx1ZTogdW5rbm93bik6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gdW5kZWZpbmVkXG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCB0cmltbWVkID0gdmFsdWUudHJpbSgpXG4gICAgaWYgKCF0cmltbWVkIHx8IHRyaW1tZWQgPT09ICdbb2JqZWN0IE9iamVjdF0nKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgcmV0dXJuIHRyaW1tZWRcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gU3RyaW5nKHZhbHVlKVxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICBjb25zdCBvYmogPSB2YWx1ZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICAgIGNvbnN0IGNhbmRpZGF0ZXMgPSBbXG4gICAgICBvYmouamltdU5hbWUsXG4gICAgICBvYmoubmFtZSxcbiAgICAgIG9iai52YWx1ZSxcbiAgICAgIG9iai5maWVsZE5hbWUsXG4gICAgICBvYmoua2V5LFxuICAgICAgKG9iai50YXJnZXQgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCB1bmRlZmluZWQpPy52YWx1ZVxuICAgIF1cbiAgICBmb3IgKGNvbnN0IGNhbmRpZGF0ZSBvZiBjYW5kaWRhdGVzKSB7XG4gICAgICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplUmVjb3J0ZUZpZWxkQ29uZmlnKGNhbmRpZGF0ZSlcbiAgICAgIGlmIChub3JtYWxpemVkKSByZXR1cm4gbm9ybWFsaXplZFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuLyoqIFZhbG9yIGJydXRvIHJlY2ViaWRvIGRvIG9uQ2hhbmdlIGRvIFNlbGVjdCAodmFyaWEgZW50cmUgdmVyc8O1ZXMgZG8gRVhCKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0UmVjb3J0ZVNlbGVjdFZhbHVlIChcbiAgZXZ0OiB1bmtub3duLFxuICB2YWx1ZTogdW5rbm93blxuKTogdW5rbm93biB7XG4gIGlmICh2YWx1ZSAhPSBudWxsICYmIHZhbHVlICE9PSAnJykgcmV0dXJuIHZhbHVlXG4gIGNvbnN0IHRhcmdldCA9IChldnQgYXMgeyB0YXJnZXQ/OiB7IHZhbHVlPzogdW5rbm93biB9IH0gfCBudWxsKT8udGFyZ2V0XG4gIGlmICh0YXJnZXQ/LnZhbHVlICE9IG51bGwgJiYgdGFyZ2V0LnZhbHVlICE9PSAnJykgcmV0dXJuIHRhcmdldC52YWx1ZVxuICByZXR1cm4gdmFsdWVcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQge1xyXG4gIFJlYWN0LFxyXG4gIGpzeCxcclxuICB0eXBlIEFsbFdpZGdldFByb3BzLFxyXG4gIERhdGFTb3VyY2VDb21wb25lbnQsXHJcbiAgUXVlcnlTY29wZVxyXG59IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgTG9hZGluZywgTGFiZWwsIEJ1dHRvbiB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCB0eXBlIHsgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCB7IG5vcm1hbGl6ZVJlY29ydGVGaWVsZENvbmZpZyB9IGZyb20gJy4uL3V0aWxzL3JlY29ydGUtY29uZmlnJ1xyXG5pbXBvcnQge1xyXG4gIExBQkVMX1BFUklPRE9fRklOQUwsXHJcbiAgTEFCRUxfUEVSSU9ET19JTklDSUFMLFxyXG4gIEhJTlRfUEVSSU9EX1JVTEVTLFxyXG4gIE1TR19OT1RfQ09ORklHVVJFRCxcclxuICBNU0dfTk9fREFUQSxcclxuICBQTEFDRUhPTERFUl9QRVJJT0RPX0ZJTkFMLFxyXG4gIFBMQUNFSE9MREVSX1BFUklPRE9fSU5JQ0lBTCxcclxuICBQUk9ERVNfVEFCTEVfUVVFUllcclxufSBmcm9tICcuLi9jb25zdGFudHMnXHJcbmltcG9ydCB7IFZhcmlhdGlvblJlc3VsdFBhbmVsIH0gZnJvbSAnLi9jb21wb25lbnRzL3ZhcmlhdGlvbi1yZXN1bHQnXHJcbmltcG9ydCB7IHVzZVByb2Rlc1NlcmllcyB9IGZyb20gJy4vaG9va3MvdXNlLXByb2Rlcy1zZXJpZXMnXHJcbmltcG9ydCB7IHVzZVBlcmlvZFNlbGVjdGlvbiB9IGZyb20gJy4vaG9va3MvdXNlLXBlcmlvZC1zZWxlY3Rpb24nXHJcbmltcG9ydCB7IHdpZGdldFN0eWxlcyB9IGZyb20gJy4vc3R5bGVzJ1xyXG5pbXBvcnQgeyBZZWFyUGVyaW9kUGlja2VyIH0gZnJvbSAnLi95ZWFyLXBlcmlvZC1waWNrZXInXHJcblxyXG5jb25zdCBXaWRnZXQgPSAocHJvcHM6IEFsbFdpZGdldFByb3BzPElNQ29uZmlnPikgPT4ge1xyXG4gIGNvbnN0IHVzZURzID0gcHJvcHMudXNlRGF0YVNvdXJjZXM/LlswXVxyXG4gIGNvbnN0IHllYXJGaWVsZCA9IHByb3BzLmNvbmZpZz8ueWVhckZpZWxkXHJcbiAgY29uc3QgcmVjb3J0ZUZpZWxkID0gbm9ybWFsaXplUmVjb3J0ZUZpZWxkQ29uZmlnKHByb3BzLmNvbmZpZz8ucmVjb3J0ZUZpZWxkKVxyXG5cclxuICBjb25zdCB7XHJcbiAgICBzZXJpZXMsXHJcbiAgICBsb2FkaW5nLFxyXG4gICAgbG9hZGluZ01lc3NhZ2UsXHJcbiAgICBlcnJvcixcclxuICAgIGhhbmRsZURhdGFTb3VyY2VSZWFkeSxcclxuICAgIGhhbmRsZURhdGFTb3VyY2VJbmZvQ2hhbmdlLFxyXG4gICAgYXBwbHlTY2hlbWEsXHJcbiAgICB3YWl0aW5nRm9yTGF5ZXJcclxuICB9ID0gdXNlUHJvZGVzU2VyaWVzKHsgcmVjb3J0ZUZpZWxkLCB5ZWFyRmllbGQsIHdpZGdldElkOiBwcm9wcy5pZCB9KVxyXG5cclxuICBjb25zdCBhdmFpbGFibGVZZWFycyA9IFJlYWN0LnVzZU1lbW8oXHJcbiAgICAoKSA9PiBzZXJpZXMubWFwKChyKSA9PiByLnllYXIpLFxyXG4gICAgW3Nlcmllc11cclxuICApXHJcblxyXG4gIGNvbnN0IHtcclxuICAgIHBlcmlvZG9JbmljaWFsLFxyXG4gICAgcGVyaW9kb0ZpbmFsLFxyXG4gICAgeWVhcnNGb3JJbmljaWFsLFxyXG4gICAgeWVhcnNGb3JGaW5hbCxcclxuICAgIGhpbnRJbmljaWFsLFxyXG4gICAgaGludEZpbmFsLFxyXG4gICAgdmFyaWF0aW9uLFxyXG4gICAgaGFzUGVyaW9kU2VsZWN0aW9uLFxyXG4gICAgY2xlYXJQZXJpb2RTZWxlY3Rpb24sXHJcbiAgICBoYW5kbGVQZXJpb2RvSW5pY2lhbENoYW5nZSxcclxuICAgIGhhbmRsZVBlcmlvZG9GaW5hbENoYW5nZSxcclxuICAgIHJlamVjdFBlcmlvZG9JbmljaWFsLFxyXG4gICAgcmVqZWN0UGVyaW9kb0ZpbmFsXHJcbiAgfSA9IHVzZVBlcmlvZFNlbGVjdGlvbihzZXJpZXMsIGF2YWlsYWJsZVllYXJzLCByZWNvcnRlRmllbGQpXHJcblxyXG4gIGNvbnN0IGlzQ29uZmlndXJlZCA9IEJvb2xlYW4odXNlRHMgJiYgcmVjb3J0ZUZpZWxkKVxyXG4gIGNvbnN0IHNob3dGb3JtID1cclxuICAgIGlzQ29uZmlndXJlZCAmJiAhbG9hZGluZyAmJiAhd2FpdGluZ0ZvckxheWVyICYmICFlcnJvciAmJiBzZXJpZXMubGVuZ3RoID4gMFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29tcGFyYWRvci1wcm9kZXMgamltdS13aWRnZXRcIiBjc3M9e3dpZGdldFN0eWxlc30+XHJcbiAgICAgIHt1c2VEcyAmJiAoXHJcbiAgICAgICAgPERhdGFTb3VyY2VDb21wb25lbnRcclxuICAgICAgICAgIHVzZURhdGFTb3VyY2U9e3VzZURzfVxyXG4gICAgICAgICAgd2lkZ2V0SWQ9e3Byb3BzLmlkfVxyXG4gICAgICAgICAgcXVlcnk9e1BST0RFU19UQUJMRV9RVUVSWX1cclxuICAgICAgICAgIHF1ZXJ5U2NvcGU9e1F1ZXJ5U2NvcGUuSW5BbGxEYXRhfVxyXG4gICAgICAgICAgcXVlcnlBbGxcclxuICAgICAgICAgIG9uRGF0YVNvdXJjZUNyZWF0ZWQ9e2hhbmRsZURhdGFTb3VyY2VSZWFkeX1cclxuICAgICAgICAgIG9uRGF0YVNvdXJjZVNjaGVtYUNoYW5nZT17KHNjaGVtYSkgPT4ge1xyXG4gICAgICAgICAgICBhcHBseVNjaGVtYShzY2hlbWEpXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25EYXRhU291cmNlSW5mb0NoYW5nZT17aGFuZGxlRGF0YVNvdXJjZUluZm9DaGFuZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHshaXNDb25maWd1cmVkICYmIDxwPntNU0dfTk9UX0NPTkZJR1VSRUR9PC9wPn1cclxuXHJcbiAgICAgIHtpc0NvbmZpZ3VyZWQgJiYgKGxvYWRpbmcgfHwgd2FpdGluZ0ZvckxheWVyKSAmJiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxMb2FkaW5nIC8+XHJcbiAgICAgICAgICB7bG9hZGluZ01lc3NhZ2UgJiYgKFxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb21wYXJhZG9yLWhpbnRcIj57bG9hZGluZ01lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHtpc0NvbmZpZ3VyZWQgJiYgZXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwiY29tcGFyYWRvci1lcnJvclwiPntlcnJvcn08L3A+fVxyXG5cclxuICAgICAge2lzQ29uZmlndXJlZCAmJlxyXG4gICAgICAgICFsb2FkaW5nICYmXHJcbiAgICAgICAgIXdhaXRpbmdGb3JMYXllciAmJlxyXG4gICAgICAgICFlcnJvciAmJlxyXG4gICAgICAgIHNlcmllcy5sZW5ndGggPT09IDAgJiYgPHA+e01TR19OT19EQVRBfTwvcD59XHJcblxyXG4gICAgICB7c2hvd0Zvcm0gJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFyYWRvci1mb3JtXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhcmFkb3ItZmllbGQtcm93XCI+XHJcbiAgICAgICAgICAgIDxMYWJlbD57TEFCRUxfUEVSSU9ET19JTklDSUFMfTwvTGFiZWw+XHJcbiAgICAgICAgICAgIDxZZWFyUGVyaW9kUGlja2VyXHJcbiAgICAgICAgICAgICAgYXZhaWxhYmxlWWVhcnM9e3llYXJzRm9ySW5pY2lhbH1cclxuICAgICAgICAgICAgICBzZWxlY3RlZFllYXJzPXtwZXJpb2RvSW5pY2lhbH1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17UExBQ0VIT0xERVJfUEVSSU9ET19JTklDSUFMfVxyXG4gICAgICAgICAgICAgIGhpbnQ9e2hpbnRJbmljaWFsfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVQZXJpb2RvSW5pY2lhbENoYW5nZX1cclxuICAgICAgICAgICAgICBvblJlamVjdGVkU2VsZWN0aW9uPXtyZWplY3RQZXJpb2RvSW5pY2lhbH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFyYWRvci1maWVsZC1yb3dcIj5cclxuICAgICAgICAgICAgPExhYmVsPntMQUJFTF9QRVJJT0RPX0ZJTkFMfTwvTGFiZWw+XHJcbiAgICAgICAgICAgIDxZZWFyUGVyaW9kUGlja2VyXHJcbiAgICAgICAgICAgICAgYXZhaWxhYmxlWWVhcnM9e3llYXJzRm9yRmluYWx9XHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWRZZWFycz17cGVyaW9kb0ZpbmFsfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtQTEFDRUhPTERFUl9QRVJJT0RPX0ZJTkFMfVxyXG4gICAgICAgICAgICAgIGhpbnQ9e2hpbnRGaW5hbH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUGVyaW9kb0ZpbmFsQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIG9uUmVqZWN0ZWRTZWxlY3Rpb249e3JlamVjdFBlcmlvZG9GaW5hbH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYXJhZG9yLWhpbnRcIj57SElOVF9QRVJJT0RfUlVMRVN9PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhcmFkb3ItYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICB0eXBlPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb21wYXJhZG9yLWJ0bi1saW1wYXJcIlxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXshaGFzUGVyaW9kU2VsZWN0aW9ufVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2NsZWFyUGVyaW9kU2VsZWN0aW9ufVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgTGltcGFyXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAge3ZhcmlhdGlvbiAhPSBudWxsICYmIHZhcmlhdGlvbi5vayA9PT0gZmFsc2UgJiYgKFxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb21wYXJhZG9yLWVycm9yIGNvbXBhcmFkb3ItZXJyb3ItLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAge3ZhcmlhdGlvbi5tZXNzYWdlfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIHt2YXJpYXRpb24gIT0gbnVsbCAmJiB2YXJpYXRpb24ub2sgPT09IHRydWUgJiYgKFxyXG4gICAgICAgICAgICA8VmFyaWF0aW9uUmVzdWx0UGFuZWwgZGF0YT17dmFyaWF0aW9uLmRhdGF9IC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaWRnZXRcclxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==