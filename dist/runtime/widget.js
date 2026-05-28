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
        if (!main || !effectiveYearField || !recorteField) {
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
            recorteFieldJimu: recorteField,
            fields: fieldList,
            widgetId
        };
        try {
            const rows = yield (0,_utils_prodes_table__WEBPACK_IMPORTED_MODULE_1__.forceLoadProdesRows)(main, fetchOpts);
            const built = (0,_utils_prodes_table__WEBPACK_IMPORTED_MODULE_1__.buildYearSeriesFromAttributeRows)(rows, effectiveYearField, recorteField, fieldList);
            setSeries(built);
            if (built.length === 0) {
                if (rows.length === 0) {
                    setError(_constants__WEBPACK_IMPORTED_MODULE_3__.MSG_LOAD_FAILED);
                }
                else if ((0,_utils_prodes_table__WEBPACK_IMPORTED_MODULE_1__.attributeRowsScore)(rows) <= 1) {
                    setError(_constants__WEBPACK_IMPORTED_MODULE_3__.MSG_LOAD_FAILED);
                }
                else {
                    setError(_constants__WEBPACK_IMPORTED_MODULE_3__.MSG_EXTRACT_FAILED);
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
    }), [dsRef, dsStatus, effectiveYearField, fieldList, recorteField, widgetId]);
    const handleDataSourceInfoChange = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback((info) => {
        setDsStatus(info === null || info === void 0 ? void 0 : info.status);
        if ((info === null || info === void 0 ? void 0 : info.version) != null) {
            setDsInfoVersion(info.version);
        }
    }, []);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        if (!recorteField || !effectiveYearField || !dsRef)
            return;
        if (!(0,_utils_data_source__WEBPACK_IMPORTED_MODULE_2__.isProdesDataReady)(dsStatus))
            return;
        loadSeries();
    }, [
        recorteField,
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
  .comparador-period-menu {
    max-height: 220px;
    overflow-y: auto;
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
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownMenu, { className: "comparador-period-menu" }, availableYears.map((year) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownItem, { key: year, active: selectedSet.has(year), toggle: false, onClick: () => handleToggle(year) }, year))))),
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
/* harmony export */   buildYearSeriesFromRecorteRows: () => (/* binding */ buildYearSeriesFromRecorteRows),
/* harmony export */   buildYearSeriesInferred: () => (/* binding */ buildYearSeriesInferred),
/* harmony export */   calcPercentVariation: () => (/* binding */ calcPercentVariation),
/* harmony export */   computePeriodVariation: () => (/* binding */ computePeriodVariation),
/* harmony export */   computeVariation: () => (/* binding */ computeVariation),
/* harmony export */   detectRecorteKeyFromRows: () => (/* binding */ detectRecorteKeyFromRows),
/* harmony export */   detectYearField: () => (/* binding */ detectYearField),
/* harmony export */   detectYearKeyFromRows: () => (/* binding */ detectYearKeyFromRows),
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
/* harmony export */   parseNumericValue: () => (/* binding */ parseNumericValue),
/* harmony export */   parseYear: () => (/* binding */ parseYear),
/* harmony export */   readAttributeFlexible: () => (/* binding */ readAttributeFlexible),
/* harmony export */   readRecordValue: () => (/* binding */ readRecordValue),
/* harmony export */   recordHasReadableData: () => (/* binding */ recordHasReadableData),
/* harmony export */   resolveAttributeKeys: () => (/* binding */ resolveAttributeKeys),
/* harmony export */   schemaToFieldList: () => (/* binding */ schemaToFieldList),
/* harmony export */   sumValuesForYears: () => (/* binding */ sumValuesForYears),
/* harmony export */   toggleConsecutiveYear: () => (/* binding */ toggleConsecutiveYear)
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
    const keys = new Set();
    for (const row of rows.slice(0, 5)) {
        Object.keys(row).forEach((k) => keys.add(k));
    }
    const exact = [...keys].find((k) => k.toLowerCase() === recorteHint.toLowerCase());
    if (exact)
        return exact;
    return ((_a = [...keys].find((k) => normalizeRecorteToken(k) === normalizeRecorteToken(recorteHint))) !== null && _a !== void 0 ? _a : null);
}
/** Monta série a partir de atributos brutos (REST / queryFeatures). */
function buildYearSeriesFromAttributeRows(rows, yearFieldJimu, recorteFieldJimu, fields) {
    var _a, _b, _c;
    if (!rows.length)
        return [];
    const asRecords = rows.map((attributes) => ({ attributes }));
    const standard = buildYearSeries(asRecords, yearFieldJimu, recorteFieldJimu, fields);
    if (standard.length > 0)
        return standard;
    const yearKey = (_a = detectYearKeyFromRows(rows, yearFieldJimu)) !== null && _a !== void 0 ? _a : yearFieldJimu;
    let recorteKey = (_b = detectRecorteKeyFromRows(rows, recorteFieldJimu)) !== null && _b !== void 0 ? _b : recorteFieldJimu;
    if (!yearKey)
        return [];
    let series = buildSeriesFromKeys(rows, yearKey, recorteKey);
    if (series.length > 0)
        return series;
    if (fields === null || fields === void 0 ? void 0 : fields.length) {
        for (const f of getRecorteCandidateFields(fields, yearFieldJimu)) {
            const altKey = (_c = detectRecorteKeyFromRows(rows, f.jimuName)) !== null && _c !== void 0 ? _c : f.jimuName;
            series = buildSeriesFromKeys(rows, yearKey, altKey);
            if (series.length > 0)
                return series;
        }
    }
    return series;
}
function buildSeriesFromKeys(rows, yearKey, recorteKey) {
    const series = [];
    for (const row of rows) {
        const year = parseYear(row[yearKey]);
        const value = parseNumericValue(row[recorteKey]);
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
function fetchProdesAttributeRows(dataSource, options) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d;
        const ds = dataSource;
        const candidates = [];
        const loaded = (_d = (_b = (_a = ds.getRecords) === null || _a === void 0 ? void 0 : _a.call(ds)) !== null && _b !== void 0 ? _b : (_c = ds.getAllLoadedRecords) === null || _c === void 0 ? void 0 : _c.call(ds)) !== null && _d !== void 0 ? _d : [];
        if (loaded.length) {
            candidates.push(recordsToAttributeRows(loaded));
        }
        candidates.push(yield fetchRawAttributeRowsFromLayer(ds));
        const portalRows = yield fetchViaPortalRest(ds);
        if (portalRows.length)
            candidates.push(portalRows);
        const restRows = yield fetchViaArcgisRest(ds);
        if (restRows.length)
            candidates.push(restRows);
        const records = yield fetchLayerRecords(dataSource, options);
        if (records.length) {
            candidates.push(recordsToAttributeRows(records));
        }
        if ((options === null || options === void 0 ? void 0 : options.yearFieldJimu) && (options === null || options === void 0 ? void 0 : options.recorteFieldJimu)) {
            for (const rows of candidates) {
                if (!rows.length)
                    continue;
                const series = buildYearSeriesFromAttributeRows(rows, options.yearFieldJimu, options.recorteFieldJimu, options.fields);
                if (series.length > 0)
                    return rows;
            }
        }
        return candidates.reduce((best, cur) => {
            if (!cur.length)
                return best;
            if (!best.length)
                return cur;
            return attributeRowsScore(cur) > attributeRowsScore(best) ? cur : best;
        }, []);
    });
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
            const series = buildYearSeriesFromAttributeRows(rows, options.yearFieldJimu, options.recorteFieldJimu, options.fields);
            if (series.length > 0)
                return rows;
            if (attributeRowsScore(rows) > 1)
                return rows;
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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./your-extensions/widgets/comparador_prodes/src/constants.ts");
/* harmony import */ var _components_variation_result__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/variation-result */ "./your-extensions/widgets/comparador_prodes/src/runtime/components/variation-result.tsx");
/* harmony import */ var _hooks_use_prodes_series__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/use-prodes-series */ "./your-extensions/widgets/comparador_prodes/src/runtime/hooks/use-prodes-series.ts");
/* harmony import */ var _hooks_use_period_selection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/use-period-selection */ "./your-extensions/widgets/comparador_prodes/src/runtime/hooks/use-period-selection.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./your-extensions/widgets/comparador_prodes/src/runtime/styles.ts");
/* harmony import */ var _year_period_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./year-period-picker */ "./your-extensions/widgets/comparador_prodes/src/runtime/year-period-picker.tsx");
/** @jsx jsx */








const Widget = (props) => {
    var _a, _b, _c;
    const useDs = (_a = props.useDataSources) === null || _a === void 0 ? void 0 : _a[0];
    const yearField = (_b = props.config) === null || _b === void 0 ? void 0 : _b.yearField;
    const recorteField = (_c = props.config) === null || _c === void 0 ? void 0 : _c.recorteField;
    const { series, loading, loadingMessage, error, handleDataSourceReady, handleDataSourceInfoChange, applySchema, waitingForLayer } = (0,_hooks_use_prodes_series__WEBPACK_IMPORTED_MODULE_4__.useProdesSeries)({ recorteField, yearField, widgetId: props.id });
    const availableYears = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => series.map((r) => r.year), [series]);
    const { periodoInicial, periodoFinal, yearsForInicial, yearsForFinal, hintInicial, hintFinal, variation, hasPeriodSelection, clearPeriodSelection, handlePeriodoInicialChange, handlePeriodoFinalChange, rejectPeriodoInicial, rejectPeriodoFinal } = (0,_hooks_use_period_selection__WEBPACK_IMPORTED_MODULE_5__.usePeriodSelection)(series, availableYears, recorteField);
    const isConfigured = Boolean(useDs && recorteField);
    const showForm = isConfigured && !loading && !waitingForLayer && !error && series.length > 0;
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-comparador-prodes jimu-widget", css: _styles__WEBPACK_IMPORTED_MODULE_6__.widgetStyles },
        useDs && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceComponent, { useDataSource: useDs, widgetId: props.id, query: _constants__WEBPACK_IMPORTED_MODULE_2__.PRODES_TABLE_QUERY, queryScope: jimu_core__WEBPACK_IMPORTED_MODULE_0__.QueryScope.InAllData, queryAll: true, onDataSourceCreated: handleDataSourceReady, onDataSourceSchemaChange: (schema) => {
                applySchema(schema);
            }, onDataSourceInfoChange: handleDataSourceInfoChange })),
        !isConfigured && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", null, _constants__WEBPACK_IMPORTED_MODULE_2__.MSG_NOT_CONFIGURED),
        isConfigured && (loading || waitingForLayer) && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Loading, null),
            loadingMessage && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "comparador-hint" }, loadingMessage)))),
        isConfigured && error && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "comparador-error" }, error),
        isConfigured &&
            !loading &&
            !waitingForLayer &&
            !error &&
            series.length === 0 && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", null, _constants__WEBPACK_IMPORTED_MODULE_2__.MSG_NO_DATA),
        showForm && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "comparador-form" },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "comparador-field-row" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, null, _constants__WEBPACK_IMPORTED_MODULE_2__.LABEL_PERIODO_INICIAL),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_year_period_picker__WEBPACK_IMPORTED_MODULE_7__.YearPeriodPicker, { availableYears: yearsForInicial, selectedYears: periodoInicial, placeholder: _constants__WEBPACK_IMPORTED_MODULE_2__.PLACEHOLDER_PERIODO_INICIAL, hint: hintInicial, onChange: handlePeriodoInicialChange, onRejectedSelection: rejectPeriodoInicial })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "comparador-field-row" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, null, _constants__WEBPACK_IMPORTED_MODULE_2__.LABEL_PERIODO_FINAL),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_year_period_picker__WEBPACK_IMPORTED_MODULE_7__.YearPeriodPicker, { availableYears: yearsForFinal, selectedYears: periodoFinal, placeholder: _constants__WEBPACK_IMPORTED_MODULE_2__.PLACEHOLDER_PERIODO_FINAL, hint: hintFinal, onChange: handlePeriodoFinalChange, onRejectedSelection: rejectPeriodoFinal }),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "comparador-hint" }, _constants__WEBPACK_IMPORTED_MODULE_2__.HINT_PERIOD_RULES)),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "comparador-actions" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { size: "sm", type: "secondary", className: "comparador-btn-limpar", disabled: !hasPeriodSelection, onClick: clearPeriodSelection }, "Limpar")),
            variation != null && variation.ok === false && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "comparador-error comparador-error--block" }, variation.message)),
            variation != null && variation.ok === true && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_variation_result__WEBPACK_IMPORTED_MODULE_3__.VariationResultPanel, { data: variation.data }))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFDO0FBRTlCLE1BQU0sU0FBUyxHQUFHLEtBQUs7QUFFOUIseUVBQXlFO0FBQ2xFLE1BQU0sa0JBQWtCLEdBQUcsb0RBQVMsQ0FBQztJQUMxQyxLQUFLLEVBQUUsS0FBSztJQUNaLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNoQixjQUFjLEVBQUUsS0FBSztJQUNyQixRQUFRLEVBQUUsSUFBSTtDQUNmLENBQUM7QUFFSyxNQUFNLHFCQUFxQixHQUFHLGdDQUFnQztBQUM5RCxNQUFNLG1CQUFtQixHQUFHLDRCQUE0QjtBQUV4RCxNQUFNLGtCQUFrQixHQUM3QixzRUFBc0U7QUFFakUsTUFBTSxXQUFXLEdBQUcsNkNBQTZDO0FBRWpFLE1BQU0sZUFBZSxHQUFHLCtDQUErQztBQUV2RSxNQUFNLGlCQUFpQixHQUFHLG9DQUFvQztBQUU5RCxNQUFNLGtCQUFrQixHQUM3Qix1RkFBdUY7SUFDdkYseUdBQXlHO0lBQ3pHLHNEQUFzRDtBQUVqRCxNQUFNLGdCQUFnQixHQUFHLDhDQUE4QztBQUV2RSxNQUFNLGlCQUFpQixHQUM1QiwrRkFBK0Y7QUFFMUYsTUFBTSwyQkFBMkIsR0FBRywwQ0FBMEM7QUFDOUUsTUFBTSx5QkFBeUIsR0FBRyx3Q0FBd0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ2pGLGVBQWU7QUFDdUI7QUFLTDtBQUNnQztBQU0xRCxNQUFNLG9CQUFvQixHQUFHLENBQUMsRUFBRSxJQUFJLEVBQXdCLEVBQUUsRUFBRTtJQUNyRSxNQUFNLElBQUksR0FBRywrREFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBRXZDLE9BQU8sQ0FDTCx3REFBSyxTQUFTLEVBQUMsbUJBQW1CO1FBQ2hDLHdEQUFLLFNBQVMsRUFBQyx5QkFBeUI7O1lBRXJDLDJFQUFz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Q3BDLG1CQUFtQixFQUFFLG9CQUFvQixHQUN6QyxDQUNFO1lBRU4sd0RBQUssU0FBUyxFQUFDLHNCQUFzQjtnQkFDbkMsK0NBQUMsMENBQUssUUFBRSwyREFBbUIsQ0FBUztnQkFDcEMsK0NBQUMsaUVBQWdCLElBQ2YsY0FBYyxFQUFFLGFBQWEsRUFDN0IsYUFBYSxFQUFFLFlBQVksRUFDM0IsV0FBVyxFQUFFLGlFQUF5QixFQUN0QyxJQUFJLEVBQUUsU0FBUyxFQUNmLFFBQVEsRUFBRSx3QkFBd0IsRUFDbEMsbUJBQW1CLEVBQUUsa0JBQWtCLEdBQ3ZDO2dCQUNGLHdEQUFLLFNBQVMsRUFBQyxpQkFBaUIsSUFBRSx5REFBaUIsQ0FBTyxDQUN0RDtZQUVOLHdEQUFLLFNBQVMsRUFBQyxvQkFBb0I7Z0JBQ2pDLCtDQUFDLDJDQUFNLElBQ0wsSUFBSSxFQUFDLElBQUksRUFDVCxJQUFJLEVBQUMsV0FBVyxFQUNoQixTQUFTLEVBQUMsdUJBQXVCLEVBQ2pDLFFBQVEsRUFBRSxDQUFDLGtCQUFrQixFQUM3QixPQUFPLEVBQUUsb0JBQW9CLGFBR3RCLENBQ0w7WUFFTCxTQUFTLElBQUksSUFBSSxJQUFJLFNBQVMsQ0FBQyxFQUFFLEtBQUssS0FBSyxJQUFJLENBQzlDLHNEQUFHLFNBQVMsRUFBQywwQ0FBMEMsSUFDcEQsU0FBUyxDQUFDLE9BQU8sQ0FDaEIsQ0FDTDtZQUVBLFNBQVMsSUFBSSxJQUFJLElBQUksU0FBUyxDQUFDLEVBQUUsS0FBSyxJQUFJLElBQUksQ0FDN0MsK0NBQUMsOEVBQW9CLElBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLEdBQUksQ0FDL0MsQ0FDRyxDQUNQLENBQ0csQ0FDUDtBQUNILENBQUM7QUFFRCxpRUFBZSxNQUFNO0FBRWIsU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY29tcGFyYWRvcl9wcm9kZXMvc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY29tcGFyYWRvcl9wcm9kZXMvc3JjL3J1bnRpbWUvY29tcG9uZW50cy92YXJpYXRpb24tcmVzdWx0LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY29tcGFyYWRvcl9wcm9kZXMvc3JjL3J1bnRpbWUvaG9va3MvdXNlLXBlcmlvZC1zZWxlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2NvbXBhcmFkb3JfcHJvZGVzL3NyYy9ydW50aW1lL2hvb2tzL3VzZS1wcm9kZXMtc2VyaWVzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9zcmMvcnVudGltZS9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2NvbXBhcmFkb3JfcHJvZGVzL3NyYy9ydW50aW1lL3llYXItcGVyaW9kLXBpY2tlci50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2NvbXBhcmFkb3JfcHJvZGVzL3NyYy91dGlscy9kYXRhLXNvdXJjZS50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY29tcGFyYWRvcl9wcm9kZXMvc3JjL3V0aWxzL2Zvcm1hdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY29tcGFyYWRvcl9wcm9kZXMvc3JjL3V0aWxzL3Byb2Rlcy10YWJsZS50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY29tcGFyYWRvcl9wcm9kZXMvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbW11dGFibGUgfSBmcm9tICdqaW11LWNvcmUnXG5cbmV4cG9ydCBjb25zdCBBUkVBX1VOSVQgPSAna23CsidcblxuLyoqIENvbnN1bHRhIHBhZHLDo286IHRvZG9zIG9zIHJlZ2lzdHJvcyBkYSB0YWJlbGEgUFJPREVTIChwYWRyw6NvIEVYQikuICovXG5leHBvcnQgY29uc3QgUFJPREVTX1RBQkxFX1FVRVJZID0gSW1tdXRhYmxlKHtcbiAgd2hlcmU6ICcxPTEnLFxuICBvdXRGaWVsZHM6IFsnKiddLFxuICByZXR1cm5HZW9tZXRyeTogZmFsc2UsXG4gIHBhZ2VTaXplOiAyMDAwXG59KVxuXG5leHBvcnQgY29uc3QgTEFCRUxfUEVSSU9ET19JTklDSUFMID0gJ0FubyBpbmljaWFsIG91IHBlcsOtb2RvIGluaWNpYWwnXG5leHBvcnQgY29uc3QgTEFCRUxfUEVSSU9ET19GSU5BTCA9ICdBbm8gZmluYWwgb3UgcGVyw61vZG8gZmluYWwnXG5cbmV4cG9ydCBjb25zdCBNU0dfTk9UX0NPTkZJR1VSRUQgPVxuICAnRXN0YSBmZXJyYW1lbnRhIGFpbmRhIG7Do28gZm9pIGNvbmZpZ3VyYWRhIHBlbG8gYXV0b3IgZGEgZXhwZXJpw6puY2lhLidcblxuZXhwb3J0IGNvbnN0IE1TR19OT19EQVRBID0gJ07Do28gaMOhIGRhZG9zIGRpc3BvbsOtdmVpcyBwYXJhIGVzdGUgcmVjb3J0ZS4nXG5cbmV4cG9ydCBjb25zdCBNU0dfTE9BRF9GQUlMRUQgPSAnTsOjbyBmb2kgcG9zc8OtdmVsIGNhcnJlZ2FyIG9zIGRhZG9zIGRhIGNhbWFkYS4nXG5cbmV4cG9ydCBjb25zdCBNU0dfTE9BRElOR19UQUJMRSA9ICdDYXJyZWdhbmRvIGRhZG9zIGRhIHRhYmVsYSBQUk9ERVPigKYnXG5cbmV4cG9ydCBjb25zdCBNU0dfRVhUUkFDVF9GQUlMRUQgPVxuICAnUmVnaXN0cm9zIGVuY29udHJhZG9zLCBtYXMgbsOjbyBmb2kgcG9zc8OtdmVsIGV4dHJhaXIgYW5vIGUgdmFsb3JlcyBwYXJhIGVzdGUgcmVjb3J0ZS4gJyArXG4gICdDb25maXJtZSBzZSBhIHRhYmVsYSB0ZW0gdW1hIGxpbmhhIHBvciBhbm8gKGNvbHVuYSBcImFub1wiKSBvdSB1bWEgbGluaGEgcG9yIHJlY29ydGUgKGNvbHVuYXMgY29tIGFub3MpLCAnICtcbiAgJ2Ugc2UgYSBjb2x1bmEgZG8gcmVjb3J0ZSBwb3NzdWkgdmFsb3JlcyBwcmVlbmNoaWRvcy4nXG5cbmV4cG9ydCBjb25zdCBISU5UX0NPTlNFQ1VUSVZPID0gJ09zIGFub3Mgc2VsZWNpb25hZG9zIGRldmVtIHNlciBjb25zZWN1dGl2b3MuJ1xuXG5leHBvcnQgY29uc3QgSElOVF9QRVJJT0RfUlVMRVMgPVxuICAnT3MgZG9pcyBwZXLDrW9kb3MgZGV2ZW0gdGVyIGEgbWVzbWEgcXVhbnRpZGFkZSBkZSBhbm9zIGNvbnNlY3V0aXZvcywgc2VtIHJlcGV0acOnw6NvIGVudHJlIGVsZXMuJ1xuXG5leHBvcnQgY29uc3QgUExBQ0VIT0xERVJfUEVSSU9ET19JTklDSUFMID0gJ1NlbGVjaW9uZSBvKHMpIGFubyhzKSBkbyBwZXLDrW9kbyBpbmljaWFsJ1xuZXhwb3J0IGNvbnN0IFBMQUNFSE9MREVSX1BFUklPRE9fRklOQUwgPSAnU2VsZWNpb25lIG8ocykgYW5vKHMpIGRvIHBlcsOtb2RvIGZpbmFsJ1xuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBSZWFjdCwganN4IH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHtcbiAgZm9ybWF0UGVyY2VudFZhcmlhdGlvbixcbiAgZm9ybWF0UGVyaW9kUmFuZ2VMYWJlbCxcbiAgdHlwZSBWYXJpYXRpb25SZXN1bHRcbn0gZnJvbSAnLi4vLi4vdXRpbHMvcHJvZGVzLXRhYmxlJ1xuaW1wb3J0IHsgZm9ybWF0QXJlYSwgZ2V0VmFyaWF0aW9uVG9uZSB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdCdcblxuaW50ZXJmYWNlIFZhcmlhdGlvblJlc3VsdFByb3BzIHtcbiAgZGF0YTogVmFyaWF0aW9uUmVzdWx0XG59XG5cbmV4cG9ydCBjb25zdCBWYXJpYXRpb25SZXN1bHRQYW5lbCA9ICh7IGRhdGEgfTogVmFyaWF0aW9uUmVzdWx0UHJvcHMpID0+IHtcbiAgY29uc3QgdG9uZSA9IGdldFZhcmlhdGlvblRvbmUoZGF0YS5wY3QpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhcmFkb3ItcmVzdWx0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhcmFkb3ItcmVzdWx0LXRpdGxlXCI+XG4gICAgICAgIFZhcmlhw6fDo28gcGVyY2VudHVhbCAoXG4gICAgICAgIHtmb3JtYXRQZXJpb2RSYW5nZUxhYmVsKGRhdGEueWVhcnNJbmljaWFsKX0g4oaSeycgJ31cbiAgICAgICAge2Zvcm1hdFBlcmlvZFJhbmdlTGFiZWwoZGF0YS55ZWFyc0ZpbmFsKX0pXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29tcGFyYWRvci1yZXN1bHQtdmFsdWUgY29tcGFyYWRvci1yZXN1bHQtdmFsdWUtLSR7dG9uZX1gfT5cbiAgICAgICAge2Zvcm1hdFBlcmNlbnRWYXJpYXRpb24oZGF0YS5wY3QpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhcmFkb3ItcmVzdWx0LWRldGFpbFwiPlxuICAgICAgICB7Zm9ybWF0QXJlYShkYXRhLnZhbHVlSW5pY2lhbCl9IG5vIHBlcsOtb2RvIGluaWNpYWwg4oaSeycgJ31cbiAgICAgICAge2Zvcm1hdEFyZWEoZGF0YS52YWx1ZUZpbmFsKX0gbm8gcGVyw61vZG8gZmluYWxcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCJpbXBvcnQgeyBSZWFjdCB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7XG4gIGNvbXB1dGVQZXJpb2RWYXJpYXRpb24sXG4gIGdldFllYXJzQWxsb3dlZEZvckZpbmFsLFxuICBnZXRZZWFyc0FsbG93ZWRGb3JJbmljaWFsLFxuICB0eXBlIFllYXJWYWx1ZVJvd1xufSBmcm9tICcuLi8uLi91dGlscy9wcm9kZXMtdGFibGUnXG5pbXBvcnQgeyBISU5UX0NPTlNFQ1VUSVZPIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUGVyaW9kU2VsZWN0aW9uIChcbiAgc2VyaWVzOiBZZWFyVmFsdWVSb3dbXSxcbiAgYXZhaWxhYmxlWWVhcnM6IG51bWJlcltdLFxuICByZWNvcnRlRmllbGQ/OiBzdHJpbmdcbikge1xuICBjb25zdCBbcGVyaW9kb0luaWNpYWwsIHNldFBlcmlvZG9JbmljaWFsXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcltdPihbXSlcbiAgY29uc3QgW3BlcmlvZG9GaW5hbCwgc2V0UGVyaW9kb0ZpbmFsXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcltdPihbXSlcbiAgY29uc3QgW2hpbnRJbmljaWFsLCBzZXRIaW50SW5pY2lhbF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuICBjb25zdCBbaGludEZpbmFsLCBzZXRIaW50RmluYWxdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcblxuICBjb25zdCB5ZWFyc0ZvckluaWNpYWwgPSBSZWFjdC51c2VNZW1vKFxuICAgICgpID0+IGdldFllYXJzQWxsb3dlZEZvckluaWNpYWwoYXZhaWxhYmxlWWVhcnMsIHBlcmlvZG9GaW5hbCksXG4gICAgW2F2YWlsYWJsZVllYXJzLCBwZXJpb2RvRmluYWxdXG4gIClcblxuICBjb25zdCB5ZWFyc0ZvckZpbmFsID0gUmVhY3QudXNlTWVtbyhcbiAgICAoKSA9PiBnZXRZZWFyc0FsbG93ZWRGb3JGaW5hbChhdmFpbGFibGVZZWFycywgcGVyaW9kb0luaWNpYWwpLFxuICAgIFthdmFpbGFibGVZZWFycywgcGVyaW9kb0luaWNpYWxdXG4gIClcblxuICBjb25zdCB2YXJpYXRpb24gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoIXBlcmlvZG9JbmljaWFsLmxlbmd0aCB8fCAhcGVyaW9kb0ZpbmFsLmxlbmd0aCkgcmV0dXJuIG51bGxcbiAgICByZXR1cm4gY29tcHV0ZVBlcmlvZFZhcmlhdGlvbihzZXJpZXMsIHBlcmlvZG9JbmljaWFsLCBwZXJpb2RvRmluYWwpXG4gIH0sIFtwZXJpb2RvSW5pY2lhbCwgcGVyaW9kb0ZpbmFsLCBzZXJpZXNdKVxuXG4gIGNvbnN0IGhhc1BlcmlvZFNlbGVjdGlvbiA9XG4gICAgcGVyaW9kb0luaWNpYWwubGVuZ3RoID4gMCB8fCBwZXJpb2RvRmluYWwubGVuZ3RoID4gMFxuXG4gIGNvbnN0IGNsZWFyUGVyaW9kU2VsZWN0aW9uID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFBlcmlvZG9JbmljaWFsKFtdKVxuICAgIHNldFBlcmlvZG9GaW5hbChbXSlcbiAgICBzZXRIaW50SW5pY2lhbChudWxsKVxuICAgIHNldEhpbnRGaW5hbChudWxsKVxuICB9LCBbXSlcblxuICBjb25zdCBoYW5kbGVQZXJpb2RvSW5pY2lhbENoYW5nZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCh5ZWFyczogbnVtYmVyW10pID0+IHtcbiAgICBzZXRQZXJpb2RvSW5pY2lhbCh5ZWFycylcbiAgICBzZXRIaW50SW5pY2lhbChudWxsKVxuICB9LCBbXSlcblxuICBjb25zdCBoYW5kbGVQZXJpb2RvRmluYWxDaGFuZ2UgPSBSZWFjdC51c2VDYWxsYmFjaygoeWVhcnM6IG51bWJlcltdKSA9PiB7XG4gICAgc2V0UGVyaW9kb0ZpbmFsKHllYXJzKVxuICAgIHNldEhpbnRGaW5hbChudWxsKVxuICB9LCBbXSlcblxuICBjb25zdCByZWplY3RQZXJpb2RvSW5pY2lhbCA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRIaW50SW5pY2lhbChISU5UX0NPTlNFQ1VUSVZPKVxuICB9LCBbXSlcblxuICBjb25zdCByZWplY3RQZXJpb2RvRmluYWwgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0SGludEZpbmFsKEhJTlRfQ09OU0VDVVRJVk8pXG4gIH0sIFtdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UGVyaW9kb0luaWNpYWwoW10pXG4gICAgc2V0UGVyaW9kb0ZpbmFsKFtdKVxuICAgIHNldEhpbnRJbmljaWFsKG51bGwpXG4gICAgc2V0SGludEZpbmFsKG51bGwpXG4gIH0sIFtyZWNvcnRlRmllbGRdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFwZXJpb2RvSW5pY2lhbC5sZW5ndGggfHwgIXBlcmlvZG9GaW5hbC5sZW5ndGgpIHJldHVyblxuICAgIGNvbnN0IGFsbG93ZWQgPSBuZXcgU2V0KGdldFllYXJzQWxsb3dlZEZvckZpbmFsKGF2YWlsYWJsZVllYXJzLCBwZXJpb2RvSW5pY2lhbCkpXG4gICAgY29uc3QgZmlsdGVyZWQgPSBwZXJpb2RvRmluYWwuZmlsdGVyKCh5KSA9PiBhbGxvd2VkLmhhcyh5KSlcbiAgICBpZiAoZmlsdGVyZWQubGVuZ3RoICE9PSBwZXJpb2RvRmluYWwubGVuZ3RoKSB7XG4gICAgICBzZXRQZXJpb2RvRmluYWwoZmlsdGVyZWQpXG4gICAgfVxuICB9LCBbcGVyaW9kb0luaWNpYWwsIHBlcmlvZG9GaW5hbCwgYXZhaWxhYmxlWWVhcnNdKVxuXG4gIHJldHVybiB7XG4gICAgcGVyaW9kb0luaWNpYWwsXG4gICAgcGVyaW9kb0ZpbmFsLFxuICAgIHllYXJzRm9ySW5pY2lhbCxcbiAgICB5ZWFyc0ZvckZpbmFsLFxuICAgIGhpbnRJbmljaWFsLFxuICAgIGhpbnRGaW5hbCxcbiAgICB2YXJpYXRpb24sXG4gICAgaGFzUGVyaW9kU2VsZWN0aW9uLFxuICAgIGNsZWFyUGVyaW9kU2VsZWN0aW9uLFxuICAgIGhhbmRsZVBlcmlvZG9JbmljaWFsQ2hhbmdlLFxuICAgIGhhbmRsZVBlcmlvZG9GaW5hbENoYW5nZSxcbiAgICByZWplY3RQZXJpb2RvSW5pY2lhbCxcbiAgICByZWplY3RQZXJpb2RvRmluYWxcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgUmVhY3QsXG4gIHR5cGUgRGF0YVNvdXJjZSxcbiAgdHlwZSBJTURhdGFTb3VyY2VTY2hlbWEsXG4gIERhdGFTb3VyY2VTdGF0dXNcbn0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHtcbiAgYXR0cmlidXRlUm93c1Njb3JlLFxuICBidWlsZFllYXJTZXJpZXNGcm9tQXR0cmlidXRlUm93cyxcbiAgZGV0ZWN0WWVhckZpZWxkLFxuICBmb3JjZUxvYWRQcm9kZXNSb3dzLFxuICBzY2hlbWFUb0ZpZWxkTGlzdCxcbiAgdHlwZSBZZWFyVmFsdWVSb3dcbn0gZnJvbSAnLi4vLi4vdXRpbHMvcHJvZGVzLXRhYmxlJ1xuaW1wb3J0IHtcbiAgZW5zdXJlRGF0YVNvdXJjZVNjaGVtYSxcbiAgZ2V0UXVlcnlhYmxlRGF0YVNvdXJjZSxcbiAgaXNQcm9kZXNEYXRhUmVhZHlcbn0gZnJvbSAnLi4vLi4vdXRpbHMvZGF0YS1zb3VyY2UnXG5pbXBvcnQge1xuICBNU0dfRVhUUkFDVF9GQUlMRUQsXG4gIE1TR19MT0FEX0ZBSUxFRCxcbiAgTVNHX0xPQURJTkdfVEFCTEVcbn0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZVByb2Rlc1Nlcmllc1BhcmFtcyB7XG4gIHJlY29ydGVGaWVsZD86IHN0cmluZ1xuICB5ZWFyRmllbGQ/OiBzdHJpbmdcbiAgd2lkZ2V0SWQ/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVByb2Rlc1NlcmllcyAoe1xuICByZWNvcnRlRmllbGQsXG4gIHllYXJGaWVsZCxcbiAgd2lkZ2V0SWRcbn06IFVzZVByb2Rlc1Nlcmllc1BhcmFtcykge1xuICBjb25zdCBbZHNSZWYsIHNldERzUmVmXSA9IFJlYWN0LnVzZVN0YXRlPERhdGFTb3VyY2UgfCBudWxsPihudWxsKVxuICBjb25zdCBbZHNTdGF0dXMsIHNldERzU3RhdHVzXSA9IFJlYWN0LnVzZVN0YXRlPERhdGFTb3VyY2VTdGF0dXMgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZClcbiAgY29uc3QgW2ZpZWxkTGlzdCwgc2V0RmllbGRMaXN0XSA9IFJlYWN0LnVzZVN0YXRlKFxuICAgIFtdIGFzIFJldHVyblR5cGU8dHlwZW9mIHNjaGVtYVRvRmllbGRMaXN0PlxuICApXG4gIGNvbnN0IFtzZXJpZXMsIHNldFNlcmllc10gPSBSZWFjdC51c2VTdGF0ZTxZZWFyVmFsdWVSb3dbXT4oW10pXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbbG9hZGluZ01lc3NhZ2UsIHNldExvYWRpbmdNZXNzYWdlXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2RzSW5mb1ZlcnNpb24sIHNldERzSW5mb1ZlcnNpb25dID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyIHwgdW5kZWZpbmVkPihcbiAgICB1bmRlZmluZWRcbiAgKVxuXG4gIGNvbnN0IGVmZmVjdGl2ZVllYXJGaWVsZCA9IHllYXJGaWVsZCA/PyBkZXRlY3RZZWFyRmllbGQoZmllbGRMaXN0KVxuXG4gIGNvbnN0IGFwcGx5U2NoZW1hID0gUmVhY3QudXNlQ2FsbGJhY2soKHNjaGVtYTogSU1EYXRhU291cmNlU2NoZW1hKSA9PiB7XG4gICAgc2V0RmllbGRMaXN0KHNjaGVtYVRvRmllbGRMaXN0KHNjaGVtYSkpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGhhbmRsZURhdGFTb3VyY2VSZWFkeSA9IFJlYWN0LnVzZUNhbGxiYWNrKChkczogRGF0YVNvdXJjZSkgPT4ge1xuICAgIHNldERzUmVmKGRzKVxuICAgIHZvaWQgZW5zdXJlRGF0YVNvdXJjZVNjaGVtYShkcykudGhlbigoc2NoZW1hKSA9PiB7XG4gICAgICBpZiAoc2NoZW1hKSBhcHBseVNjaGVtYShzY2hlbWEpXG4gICAgfSlcbiAgfSwgW2FwcGx5U2NoZW1hXSlcblxuICBjb25zdCBsb2FkU2VyaWVzID0gUmVhY3QudXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBnZXRRdWVyeWFibGVEYXRhU291cmNlKGRzUmVmKVxuICAgIGlmICghbWFpbiB8fCAhZWZmZWN0aXZlWWVhckZpZWxkIHx8ICFyZWNvcnRlRmllbGQpIHtcbiAgICAgIHNldFNlcmllcyhbXSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghaXNQcm9kZXNEYXRhUmVhZHkoZHNTdGF0dXMpKSByZXR1cm5cblxuICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICBzZXRMb2FkaW5nTWVzc2FnZShNU0dfTE9BRElOR19UQUJMRSlcbiAgICBzZXRFcnJvcihudWxsKVxuICAgIGNvbnN0IGZldGNoT3B0cyA9IHtcbiAgICAgIHllYXJGaWVsZEppbXU6IGVmZmVjdGl2ZVllYXJGaWVsZCxcbiAgICAgIHJlY29ydGVGaWVsZEppbXU6IHJlY29ydGVGaWVsZCxcbiAgICAgIGZpZWxkczogZmllbGRMaXN0LFxuICAgICAgd2lkZ2V0SWRcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm93cyA9IGF3YWl0IGZvcmNlTG9hZFByb2Rlc1Jvd3MobWFpbiwgZmV0Y2hPcHRzKVxuICAgICAgY29uc3QgYnVpbHQgPSBidWlsZFllYXJTZXJpZXNGcm9tQXR0cmlidXRlUm93cyhcbiAgICAgICAgcm93cyxcbiAgICAgICAgZWZmZWN0aXZlWWVhckZpZWxkLFxuICAgICAgICByZWNvcnRlRmllbGQsXG4gICAgICAgIGZpZWxkTGlzdFxuICAgICAgKVxuXG4gICAgICBzZXRTZXJpZXMoYnVpbHQpXG5cbiAgICAgIGlmIChidWlsdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaWYgKHJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgc2V0RXJyb3IoTVNHX0xPQURfRkFJTEVEKVxuICAgICAgICB9IGVsc2UgaWYgKGF0dHJpYnV0ZVJvd3NTY29yZShyb3dzKSA8PSAxKSB7XG4gICAgICAgICAgc2V0RXJyb3IoTVNHX0xPQURfRkFJTEVEKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldEVycm9yKE1TR19FWFRSQUNUX0ZBSUxFRClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2gge1xuICAgICAgc2V0RXJyb3IoTVNHX0xPQURfRkFJTEVEKVxuICAgICAgc2V0U2VyaWVzKFtdKVxuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgc2V0TG9hZGluZ01lc3NhZ2UobnVsbClcbiAgICB9XG4gIH0sIFtkc1JlZiwgZHNTdGF0dXMsIGVmZmVjdGl2ZVllYXJGaWVsZCwgZmllbGRMaXN0LCByZWNvcnRlRmllbGQsIHdpZGdldElkXSlcblxuICBjb25zdCBoYW5kbGVEYXRhU291cmNlSW5mb0NoYW5nZSA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChpbmZvOiB7IHN0YXR1cz86IERhdGFTb3VyY2VTdGF0dXM7IHZlcnNpb24/OiBudW1iZXIgfSkgPT4ge1xuICAgICAgc2V0RHNTdGF0dXMoaW5mbz8uc3RhdHVzKVxuICAgICAgaWYgKGluZm8/LnZlcnNpb24gIT0gbnVsbCkge1xuICAgICAgICBzZXREc0luZm9WZXJzaW9uKGluZm8udmVyc2lvbilcbiAgICAgIH1cbiAgICB9LFxuICAgIFtdXG4gIClcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghcmVjb3J0ZUZpZWxkIHx8ICFlZmZlY3RpdmVZZWFyRmllbGQgfHwgIWRzUmVmKSByZXR1cm5cbiAgICBpZiAoIWlzUHJvZGVzRGF0YVJlYWR5KGRzU3RhdHVzKSkgcmV0dXJuXG4gICAgbG9hZFNlcmllcygpXG4gIH0sIFtcbiAgICByZWNvcnRlRmllbGQsXG4gICAgZWZmZWN0aXZlWWVhckZpZWxkLFxuICAgIGRzUmVmLFxuICAgIGRzU3RhdHVzLFxuICAgIGRzSW5mb1ZlcnNpb24sXG4gICAgZmllbGRMaXN0LFxuICAgIGxvYWRTZXJpZXNcbiAgXSlcblxuICBjb25zdCB3YWl0aW5nRm9yTGF5ZXIgPVxuICAgICFkc1JlZiB8fFxuICAgIGRzU3RhdHVzID09PSBEYXRhU291cmNlU3RhdHVzLkxvYWRpbmcgfHxcbiAgICBkc1N0YXR1cyA9PT0gRGF0YVNvdXJjZVN0YXR1cy5Ob3RSZWFkeSB8fFxuICAgIGRzU3RhdHVzID09PSBEYXRhU291cmNlU3RhdHVzLlVubG9hZGVkXG5cbiAgcmV0dXJuIHtcbiAgICBzZXJpZXMsXG4gICAgbG9hZGluZyxcbiAgICBsb2FkaW5nTWVzc2FnZSxcbiAgICBlcnJvcixcbiAgICBoYW5kbGVEYXRhU291cmNlUmVhZHksXG4gICAgaGFuZGxlRGF0YVNvdXJjZUluZm9DaGFuZ2UsXG4gICAgYXBwbHlTY2hlbWEsXG4gICAgd2FpdGluZ0ZvckxheWVyXG4gIH1cbn1cbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ2ppbXUtY29yZSdcblxuZXhwb3J0IGNvbnN0IHdpZGdldFN0eWxlcyA9IGNzc2BcbiAgJi53aWRnZXQtY29tcGFyYWRvci1wcm9kZXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgcGFkZGluZzogOHB4O1xuICB9XG4gIC5jb21wYXJhZG9yLWZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEycHg7XG4gICAgbWluLXdpZHRoOiAwO1xuICB9XG4gIC5jb21wYXJhZG9yLWZpZWxkLXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNHB4O1xuICAgIG1pbi13aWR0aDogMDtcbiAgfVxuICAuY29tcGFyYWRvci1wZXJpb2QtaGludCxcbiAgLmNvbXBhcmFkb3ItZXJyb3Ige1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogI2IwMDAyMDtcbiAgICBtYXJnaW4tdG9wOiAycHg7XG4gIH1cbiAgLmNvbXBhcmFkb3ItZXJyb3ItLWJsb2NrIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLmNvbXBhcmFkb3ItcmVzdWx0IHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcmVmLXBhbGV0dGUtbmV1dHJhbC0xMDAsICNmM2YzZjMpO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIH1cbiAgLmNvbXBhcmFkb3ItcmVzdWx0LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICB9XG4gIC5jb21wYXJhZG9yLXJlc3VsdC12YWx1ZSB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgfVxuICAuY29tcGFyYWRvci1yZXN1bHQtdmFsdWUtLXBvc2l0aXZlIHtcbiAgICBjb2xvcjogI2IwMDAyMDtcbiAgfVxuICAuY29tcGFyYWRvci1yZXN1bHQtdmFsdWUtLW5lZ2F0aXZlIHtcbiAgICBjb2xvcjogIzFiN2EzZDtcbiAgfVxuICAuY29tcGFyYWRvci1yZXN1bHQtdmFsdWUtLW5ldXRyYWwge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG4gIC5jb21wYXJhZG9yLXJlc3VsdC1kZXRhaWwge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzZiNmI2YjtcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG4gIH1cbiAgLmNvbXBhcmFkb3ItaGludCB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGNvbG9yOiAjNmI2YjZiO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM1O1xuICB9XG4gIC5jb21wYXJhZG9yLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuICAuY29tcGFyYWRvci1idG4tbGltcGFyIHtcbiAgICBib3JkZXItcmFkaXVzOiA5OTk5cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgcGlja2VyU3R5bGVzID0gY3NzYFxuICB3aWR0aDogMTAwJTtcbiAgLmppbXUtZHJvcGRvd24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5kcm9wZG93bi10b2dnbGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG4gIC5jb21wYXJhZG9yLXBlcmlvZC1tZW51IHtcbiAgICBtYXgtaGVpZ2h0OiAyMjBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICB9XG5gXG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IFJlYWN0LCBqc3ggfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQge1xuICBEcm9wZG93bixcbiAgRHJvcGRvd25CdXR0b24sXG4gIERyb3Bkb3duTWVudSxcbiAgRHJvcGRvd25JdGVtXG59IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgeyBmb3JtYXRQZXJpb2RMYWJlbCwgdG9nZ2xlQ29uc2VjdXRpdmVZZWFyIH0gZnJvbSAnLi4vdXRpbHMvcHJvZGVzLXRhYmxlJ1xuaW1wb3J0IHsgcGlja2VyU3R5bGVzIH0gZnJvbSAnLi9zdHlsZXMnXG5cbmV4cG9ydCBpbnRlcmZhY2UgWWVhclBlcmlvZFBpY2tlclByb3BzIHtcbiAgYXZhaWxhYmxlWWVhcnM6IG51bWJlcltdXG4gIHNlbGVjdGVkWWVhcnM6IG51bWJlcltdXG4gIHBsYWNlaG9sZGVyOiBzdHJpbmdcbiAgaGludD86IHN0cmluZyB8IG51bGxcbiAgb25DaGFuZ2U6ICh5ZWFyczogbnVtYmVyW10pID0+IHZvaWRcbiAgb25SZWplY3RlZFNlbGVjdGlvbj86ICgpID0+IHZvaWRcbn1cblxuZXhwb3J0IGNvbnN0IFllYXJQZXJpb2RQaWNrZXIgPSBSZWFjdC5tZW1vKChwcm9wczogWWVhclBlcmlvZFBpY2tlclByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBhdmFpbGFibGVZZWFycyxcbiAgICBzZWxlY3RlZFllYXJzLFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIGhpbnQsXG4gICAgb25DaGFuZ2UsXG4gICAgb25SZWplY3RlZFNlbGVjdGlvblxuICB9ID0gcHJvcHNcblxuICBjb25zdCBzZWxlY3RlZFNldCA9IFJlYWN0LnVzZU1lbW8oXG4gICAgKCkgPT4gbmV3IFNldChzZWxlY3RlZFllYXJzKSxcbiAgICBbc2VsZWN0ZWRZZWFyc11cbiAgKVxuXG4gIGNvbnN0IHN1bW1hcnkgPVxuICAgIHNlbGVjdGVkWWVhcnMubGVuZ3RoID4gMFxuICAgICAgPyBmb3JtYXRQZXJpb2RMYWJlbChzZWxlY3RlZFllYXJzKVxuICAgICAgOiBwbGFjZWhvbGRlclxuXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZSA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgICh5ZWFyOiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IHsgbmV4dCwgcmVqZWN0ZWQgfSA9IHRvZ2dsZUNvbnNlY3V0aXZlWWVhcihzZWxlY3RlZFllYXJzLCB5ZWFyKVxuICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgIG9uUmVqZWN0ZWRTZWxlY3Rpb24/LigpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgb25DaGFuZ2UobmV4dClcbiAgICB9LFxuICAgIFtzZWxlY3RlZFllYXJzLCBvbkNoYW5nZSwgb25SZWplY3RlZFNlbGVjdGlvbl1cbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjc3M9e3BpY2tlclN0eWxlc30+XG4gICAgICA8RHJvcGRvd25cbiAgICAgICAgZmx1aWRcbiAgICAgICAgbWVudUl0ZW1DaGVja01vZGU9XCJtdWx0aUNoZWNrXCJcbiAgICAgICAgYWN0aXZlSWNvblxuICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMFwiXG4gICAgICA+XG4gICAgICAgIDxEcm9wZG93bkJ1dHRvbiBzaXplPVwic21cIiBjbGFzc05hbWU9XCJ3LTEwMCBkcm9wZG93bi10b2dnbGVcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXRydW5jYXRlXCI+e3N1bW1hcnl9PC9zcGFuPlxuICAgICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxuICAgICAgICA8RHJvcGRvd25NZW51IGNsYXNzTmFtZT1cImNvbXBhcmFkb3ItcGVyaW9kLW1lbnVcIj5cbiAgICAgICAgICB7YXZhaWxhYmxlWWVhcnMubWFwKCh5ZWFyKSA9PiAoXG4gICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgIGtleT17eWVhcn1cbiAgICAgICAgICAgICAgYWN0aXZlPXtzZWxlY3RlZFNldC5oYXMoeWVhcil9XG4gICAgICAgICAgICAgIHRvZ2dsZT17ZmFsc2V9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRvZ2dsZSh5ZWFyKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3llYXJ9XG4gICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Ecm9wZG93bk1lbnU+XG4gICAgICA8L0Ryb3Bkb3duPlxuICAgICAge2hpbnQgJiYgPGRpdiBjbGFzc05hbWU9XCJjb21wYXJhZG9yLXBlcmlvZC1oaW50XCI+e2hpbnR9PC9kaXY+fVxuICAgIDwvZGl2PlxuICApXG59KVxuXG5ZZWFyUGVyaW9kUGlja2VyLmRpc3BsYXlOYW1lID0gJ1llYXJQZXJpb2RQaWNrZXInXG4iLCJpbXBvcnQge1xuICB0eXBlIERhdGFTb3VyY2UsXG4gIHR5cGUgSU1EYXRhU291cmNlU2NoZW1hLFxuICBEYXRhU291cmNlU3RhdHVzXG59IGZyb20gJ2ppbXUtY29yZSdcblxudHlwZSBEYXRhU291cmNlV2l0aE1haW4gPSBEYXRhU291cmNlICYge1xuICBnZXRNYWluRGF0YVNvdXJjZT86ICgpID0+IERhdGFTb3VyY2VcbiAgZ2V0U2NoZW1hPzogKCkgPT4gSU1EYXRhU291cmNlU2NoZW1hXG59XG5cbi8qKiBBbnRlcyBkbyBxdWVyeSBkbyBEYXRhU291cmNlQ29tcG9uZW50IHRlcm1pbmFyLCByZWdpc3Ryb3MgY29zdHVtYW0gdmlyIHNlbSBhdHJpYnV0b3MuICovXG5leHBvcnQgY29uc3QgaXNQcm9kZXNEYXRhUmVhZHkgPSAoc3RhdHVzPzogRGF0YVNvdXJjZVN0YXR1cyk6IGJvb2xlYW4gPT5cbiAgc3RhdHVzID09PSBEYXRhU291cmNlU3RhdHVzLkxvYWRlZFxuXG5leHBvcnQgY29uc3QgaXNRdWVyeWFibGVTdGF0dXMgPSAoc3RhdHVzPzogRGF0YVNvdXJjZVN0YXR1cyk6IGJvb2xlYW4gPT5cbiAgc3RhdHVzID09PSBEYXRhU291cmNlU3RhdHVzLkxvYWRlZCB8fFxuICBzdGF0dXMgPT09IERhdGFTb3VyY2VTdGF0dXMuTG9hZGluZ1xuXG5leHBvcnQgY29uc3QgZ2V0TWFpbkRhdGFTb3VyY2UgPSAoZHM6IERhdGFTb3VyY2UgfCBudWxsKTogRGF0YVNvdXJjZSB8IG51bGwgPT4ge1xuICBpZiAoIWRzKSByZXR1cm4gbnVsbFxuICBjb25zdCBtYWluID0gKGRzIGFzIERhdGFTb3VyY2VXaXRoTWFpbikuZ2V0TWFpbkRhdGFTb3VyY2U/LigpXG4gIHJldHVybiBtYWluID8/IGRzXG59XG5cbi8qKiBVc2EgYSBpbnN0w6JuY2lhIGRhIGNhbWFkYSBzZWxlY2lvbmFkYSAoZXguOiBQbGFuaWxoYTEpIHF1YW5kbyBlbGEgasOhIMOpIGNvbnN1bHTDoXZlbC4gKi9cbmV4cG9ydCBjb25zdCBnZXRRdWVyeWFibGVEYXRhU291cmNlID0gKGRzOiBEYXRhU291cmNlIHwgbnVsbCk6IERhdGFTb3VyY2UgfCBudWxsID0+IHtcbiAgaWYgKCFkcykgcmV0dXJuIG51bGxcbiAgY29uc3QgcSA9IGRzIGFzIERhdGFTb3VyY2VXaXRoTWFpbiAmIHtcbiAgICBxdWVyeT86IChwOiBvYmplY3QpID0+IFByb21pc2U8dW5rbm93bj5cbiAgICBsb2FkPzogKHA6IG9iamVjdCkgPT4gUHJvbWlzZTx1bmtub3duPlxuICAgIGxvYWRBbGw/OiAocDogb2JqZWN0KSA9PiBQcm9taXNlPHVua25vd24+XG4gIH1cbiAgaWYgKFxuICAgIHR5cGVvZiBxLnF1ZXJ5ID09PSAnZnVuY3Rpb24nIHx8XG4gICAgdHlwZW9mIHEubG9hZCA9PT0gJ2Z1bmN0aW9uJyB8fFxuICAgIHR5cGVvZiBxLmxvYWRBbGwgPT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgcmV0dXJuIGRzXG4gIH1cbiAgcmV0dXJuIGdldE1haW5EYXRhU291cmNlKGRzKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZW5zdXJlRGF0YVNvdXJjZVNjaGVtYSAoXG4gIGRzOiBEYXRhU291cmNlXG4pOiBQcm9taXNlPElNRGF0YVNvdXJjZVNjaGVtYSB8IHVuZGVmaW5lZD4ge1xuICBjb25zdCBleGlzdGluZyA9IGdldERhdGFTb3VyY2VTY2hlbWEoZHMpXG4gIGlmIChleGlzdGluZz8uZmllbGRzICYmIE9iamVjdC5rZXlzKGV4aXN0aW5nLmZpZWxkcykubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBleGlzdGluZ1xuICB9XG4gIGNvbnN0IGZldGNoU2NoZW1hID0gKGRzIGFzIERhdGFTb3VyY2VXaXRoTWFpbiAmIHtcbiAgICBmZXRjaFNjaGVtYT86ICgpID0+IFByb21pc2U8SU1EYXRhU291cmNlU2NoZW1hPlxuICB9KS5mZXRjaFNjaGVtYVxuICBpZiAodHlwZW9mIGZldGNoU2NoZW1hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBhd2FpdCBmZXRjaFNjaGVtYS5jYWxsKGRzKVxuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuIGV4aXN0aW5nXG4gICAgfVxuICB9XG4gIHJldHVybiBleGlzdGluZ1xufVxuXG5leHBvcnQgY29uc3QgZ2V0RGF0YVNvdXJjZVNjaGVtYSA9IChcbiAgZHM6IERhdGFTb3VyY2Vcbik6IElNRGF0YVNvdXJjZVNjaGVtYSB8IHVuZGVmaW5lZCA9PlxuICAoZHMgYXMgRGF0YVNvdXJjZVdpdGhNYWluKS5nZXRTY2hlbWE/LigpXG4iLCJpbXBvcnQgeyBBUkVBX1VOSVQgfSBmcm9tICcuLi9jb25zdGFudHMnXG5cbmV4cG9ydCBjb25zdCBmb3JtYXRBcmVhID0gKHZhbHVlOiBudW1iZXIpOiBzdHJpbmcgPT5cbiAgYCR7dmFsdWUudG9Mb2NhbGVTdHJpbmcoJ3B0LUJSJywge1xuICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDJcbiAgfSl9ICR7QVJFQV9VTklUfWBcblxuZXhwb3J0IHR5cGUgVmFyaWF0aW9uVG9uZSA9ICdwb3NpdGl2ZScgfCAnbmVnYXRpdmUnIHwgJ25ldXRyYWwnXG5cbmV4cG9ydCBjb25zdCBnZXRWYXJpYXRpb25Ub25lID0gKHBjdDogbnVtYmVyKTogVmFyaWF0aW9uVG9uZSA9PiB7XG4gIGlmIChwY3QgPiAwKSByZXR1cm4gJ3Bvc2l0aXZlJ1xuICBpZiAocGN0IDwgMCkgcmV0dXJuICduZWdhdGl2ZSdcbiAgcmV0dXJuICduZXV0cmFsJ1xufVxuIiwiaW1wb3J0IHtcbiAgdHlwZSBJTUZpZWxkU2NoZW1hLFxuICB0eXBlIElNRGF0YVNvdXJjZVNjaGVtYSxcbiAgSmltdUZpZWxkVHlwZSxcbiAgRXNyaUZpZWxkVHlwZSxcbiAgUXVlcnlTY29wZSxcbiAgdHlwZSBEYXRhUmVjb3JkLFxuICBlc3JpLFxuICByZXF1ZXN0VXRpbHNcbn0gZnJvbSAnamltdS1jb3JlJ1xuXG5leHBvcnQgaW50ZXJmYWNlIFllYXJWYWx1ZVJvdyB7XG4gIHllYXI6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmllbGRBdHRyaWJ1dGVLZXlzIHtcbiAgeWVhcktleTogc3RyaW5nXG4gIHJlY29ydGVLZXk6IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9ZRUFSX0ZJRUxEID0gJ2FubydcblxuY29uc3QgWUVBUl9OQU1FX1BBVFRFUk5TID0gWydhbm8nLCAneWVhcicsICd5cicsICdleGVyY2ljaW8nLCAnZXhlcmPDrWNpbyddXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5Q2VsbCAodmFsdWU6IHVua25vd24pOiBib29sZWFuIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiB0cnVlXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLnRyaW0oKSA9PT0gJycpIHJldHVybiB0cnVlXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIE51bWJlci5pc05hTih2YWx1ZSkpIHJldHVybiB0cnVlXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VOdW1lcmljVmFsdWUgKHZhbHVlOiB1bmtub3duKTogbnVtYmVyIHwgbnVsbCB7XG4gIGlmIChpc0VtcHR5Q2VsbCh2YWx1ZSkpIHJldHVybiBudWxsXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSkpIHJldHVybiB2YWx1ZVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IHMgPSB2YWx1ZS50cmltKClcbiAgICBpZiAoIXMpIHJldHVybiBudWxsXG4gICAgaWYgKHMuaW5jbHVkZXMoJywnKSkge1xuICAgICAgY29uc3Qgbm9ybWFsaXplZCA9IHMucmVwbGFjZSgvXFwuL2csICcnKS5yZXBsYWNlKCcsJywgJy4nKVxuICAgICAgY29uc3QgbiA9IE51bWJlcihub3JtYWxpemVkKVxuICAgICAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShuKSA/IG4gOiBudWxsXG4gICAgfVxuICAgIGNvbnN0IG4gPSBOdW1iZXIocylcbiAgICByZXR1cm4gTnVtYmVyLmlzRmluaXRlKG4pID8gbiA6IG51bGxcbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG4vKiogQ29udmVydGUgbsO6bWVybyBleGliaWRvIG5vIEFyY0dJUyBlbSBwdC1CUiAoZXguOiAyLjAwMSDihpIgMjAwMSkuICovXG5mdW5jdGlvbiBub3JtYWxpemVZZWFyTnVtYmVyIChuOiBudW1iZXIpOiBudW1iZXIgfCBudWxsIHtcbiAgaWYgKCFOdW1iZXIuaXNGaW5pdGUobikpIHJldHVybiBudWxsXG5cbiAgaWYgKG4gPj0gMTk4NSAmJiBuIDw9IDIwMzUgJiYgTWF0aC5hYnMobiAtIE1hdGgucm91bmQobikpIDwgMC4wMDEpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChuKVxuICB9XG5cbiAgLy8gVGFiZWxhIFBST0RFUyBubyBQb3J0YWw6IGNvbHVuYSBBbm8gY29tbyAyLjAwMSwgMi4wMTEgKG1pbGhhciBjb20gcG9udG8pXG4gIGlmIChuID49IDEuOTg1ICYmIG4gPD0gMi4wMzUpIHtcbiAgICBjb25zdCB5ID0gTWF0aC5yb3VuZChuICogMTAwMClcbiAgICBpZiAoeSA+PSAxOTg1ICYmIHkgPD0gMjAzNSkgcmV0dXJuIHlcbiAgfVxuXG4gIGNvbnN0IHRydW5jYXRlZCA9IE1hdGgudHJ1bmMobilcbiAgaWYgKHRydW5jYXRlZCA+PSAxOTg1ICYmIHRydW5jYXRlZCA8PSAyMDM1KSByZXR1cm4gdHJ1bmNhdGVkXG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVllYXIgKHZhbHVlOiB1bmtub3duKTogbnVtYmVyIHwgbnVsbCB7XG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUgJiYgIU51bWJlci5pc05hTih2YWx1ZS5nZXRUaW1lKCkpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmdldEZ1bGxZZWFyKClcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiBOdW1iZXIuaXNGaW5pdGUodmFsdWUpKSB7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZVllYXJOdW1iZXIodmFsdWUpXG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCBzID0gdmFsdWUudHJpbSgpXG4gICAgaWYgKCFzKSByZXR1cm4gbnVsbFxuXG4gICAgY29uc3QgYnJUaG91c2FuZHMgPSBzLm1hdGNoKC9eKFxcZHsxLDJ9KVxcLihcXGR7M30pJC8pXG4gICAgaWYgKGJyVGhvdXNhbmRzKSB7XG4gICAgICBjb25zdCB5ID0gTnVtYmVyKGJyVGhvdXNhbmRzWzFdICsgYnJUaG91c2FuZHNbMl0pXG4gICAgICBpZiAoeSA+PSAxOTg1ICYmIHkgPD0gMjAzNSkgcmV0dXJuIHlcbiAgICB9XG5cbiAgICBjb25zdCBuID0gTnVtYmVyKHMucmVwbGFjZSgnLCcsICcuJykpXG4gICAgaWYgKE51bWJlci5pc0Zpbml0ZShuKSkgcmV0dXJuIG5vcm1hbGl6ZVllYXJOdW1iZXIobilcblxuICAgIGNvbnN0IG0gPSBzLm1hdGNoKC9cXGIoMTl8MjApXFxkezJ9XFxiLylcbiAgICBpZiAobSkgcmV0dXJuIE51bWJlcihtWzBdKVxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2hlbWFUb0ZpZWxkTGlzdCAoc2NoZW1hPzogSU1EYXRhU291cmNlU2NoZW1hIHwgbnVsbCk6IElNRmllbGRTY2hlbWFbXSB7XG4gIGlmICghc2NoZW1hPy5maWVsZHMpIHJldHVybiBbXVxuICByZXR1cm4gT2JqZWN0LmtleXMoc2NoZW1hLmZpZWxkcykubWFwKChrZXkpID0+IHNjaGVtYS5maWVsZHNba2V5XSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtZXJpY1JlY29ydGVGaWVsZCAoZmllbGQ6IElNRmllbGRTY2hlbWEpOiBib29sZWFuIHtcbiAgaWYgKGZpZWxkLnR5cGUgPT09IEppbXVGaWVsZFR5cGUuTnVtYmVyKSByZXR1cm4gdHJ1ZVxuICBjb25zdCBlc3JpID0gZmllbGQuZXNyaVR5cGVcbiAgcmV0dXJuIChcbiAgICBlc3JpID09PSBFc3JpRmllbGRUeXBlLkRvdWJsZSB8fFxuICAgIGVzcmkgPT09IEVzcmlGaWVsZFR5cGUuU2luZ2xlIHx8XG4gICAgZXNyaSA9PT0gRXNyaUZpZWxkVHlwZS5JbnRlZ2VyIHx8XG4gICAgZXNyaSA9PT0gRXNyaUZpZWxkVHlwZS5TbWFsbEludGVnZXJcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXR0cmlidXRlS2V5IChmaWVsZDogSU1GaWVsZFNjaGVtYSk6IHN0cmluZyB7XG4gIHJldHVybiBmaWVsZC5uYW1lIHx8IGZpZWxkLmppbXVOYW1lXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXRlY3RZZWFyRmllbGQgKGZpZWxkczogSU1GaWVsZFNjaGVtYVtdKTogc3RyaW5nIHwgbnVsbCB7XG4gIGNvbnN0IGV4YWN0QW5vID0gZmllbGRzLmZpbmQoXG4gICAgKGYpID0+XG4gICAgICBmLmppbXVOYW1lPy50b0xvd2VyQ2FzZSgpID09PSAnYW5vJyB8fFxuICAgICAgZi5uYW1lPy50b0xvd2VyQ2FzZSgpID09PSAnYW5vJyB8fFxuICAgICAgZi5hbGlhcz8udG9Mb3dlckNhc2UoKSA9PT0gJ2FubydcbiAgKVxuICBpZiAoZXhhY3RBbm8pIHJldHVybiBleGFjdEFuby5qaW11TmFtZVxuXG4gIGNvbnN0IGNhbmRpZGF0ZXMgPSBmaWVsZHMuZmlsdGVyKFxuICAgIChmKSA9PiBmLnR5cGUgPT09IEppbXVGaWVsZFR5cGUuTnVtYmVyIHx8IGYudHlwZSA9PT0gSmltdUZpZWxkVHlwZS5TdHJpbmdcbiAgKVxuICBmb3IgKGNvbnN0IHBhdCBvZiBZRUFSX05BTUVfUEFUVEVSTlMpIHtcbiAgICBjb25zdCBmb3VuZCA9IGNhbmRpZGF0ZXMuZmluZChcbiAgICAgIChmKSA9PlxuICAgICAgICBmLmppbXVOYW1lPy50b0xvd2VyQ2FzZSgpID09PSBwYXQgfHxcbiAgICAgICAgZi5uYW1lPy50b0xvd2VyQ2FzZSgpID09PSBwYXQgfHxcbiAgICAgICAgZi5hbGlhcz8udG9Mb3dlckNhc2UoKSA9PT0gcGF0XG4gICAgKVxuICAgIGlmIChmb3VuZCkgcmV0dXJuIGZvdW5kLmppbXVOYW1lXG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFJlY29ydGVMYWJlbCAoZmllbGQ6IElNRmllbGRTY2hlbWEpOiBzdHJpbmcge1xuICByZXR1cm4gZm9ybWF0UmVjb3J0ZUxhYmVsRnJvbU5hbWUoZmllbGQuamltdU5hbWUsIGZpZWxkLmFsaWFzKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UmVjb3J0ZUxhYmVsRnJvbU5hbWUgKGppbXVOYW1lOiBzdHJpbmcsIGFsaWFzPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKGFsaWFzPy50cmltKCkpIHJldHVybiBhbGlhcy50cmltKClcbiAgcmV0dXJuIGppbXVOYW1lXG4gICAgLnNwbGl0KCdfJylcbiAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgLm1hcCgodykgPT4gdy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHcuc2xpY2UoMSkudG9Mb3dlckNhc2UoKSlcbiAgICAuam9pbignICcpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTeXN0ZW1IaWRkZW5GaWVsZE5hbWVzIChmaWVsZHM6IElNRmllbGRTY2hlbWFbXSk6IHN0cmluZ1tdIHtcbiAgcmV0dXJuIGZpZWxkc1xuICAgIC5maWx0ZXIoKGYpID0+IHtcbiAgICAgIGNvbnN0IGVzcmkgPSBmLmVzcmlUeXBlXG4gICAgICByZXR1cm4gKFxuICAgICAgICBlc3JpID09PSBFc3JpRmllbGRUeXBlLk9JRCB8fFxuICAgICAgICBlc3JpID09PSBFc3JpRmllbGRUeXBlLkdlb21ldHJ5IHx8XG4gICAgICAgIGVzcmkgPT09IEVzcmlGaWVsZFR5cGUuR2xvYmFsSUQgfHxcbiAgICAgICAgZXNyaSA9PT0gRXNyaUZpZWxkVHlwZS5HVUlEXG4gICAgICApXG4gICAgfSlcbiAgICAubWFwKChmKSA9PiBmLmppbXVOYW1lKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVjb3J0ZUhpZGRlbkZpZWxkTmFtZXMgKFxuICBmaWVsZHM6IElNRmllbGRTY2hlbWFbXSxcbiAgeWVhckZpZWxkPzogc3RyaW5nXG4pOiBzdHJpbmdbXSB7XG4gIGNvbnN0IGhpZGRlbiA9IGdldFN5c3RlbUhpZGRlbkZpZWxkTmFtZXMoZmllbGRzKVxuICBpZiAoeWVhckZpZWxkICYmICFoaWRkZW4uaW5jbHVkZXMoeWVhckZpZWxkKSkge1xuICAgIGhpZGRlbi5wdXNoKHllYXJGaWVsZClcbiAgfVxuICByZXR1cm4gaGlkZGVuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWNvcnRlQ2FuZGlkYXRlRmllbGRzIChcbiAgZmllbGRzOiBJTUZpZWxkU2NoZW1hW10sXG4gIHllYXJGaWVsZD86IHN0cmluZ1xuKTogSU1GaWVsZFNjaGVtYVtdIHtcbiAgY29uc3QgaGlkZGVuID0gbmV3IFNldChnZXRSZWNvcnRlSGlkZGVuRmllbGROYW1lcyhmaWVsZHMsIHllYXJGaWVsZCkpXG4gIHJldHVybiBmaWVsZHNcbiAgICAuZmlsdGVyKChmKSA9PiBpc051bWVyaWNSZWNvcnRlRmllbGQoZikgJiYgIWhpZGRlbi5oYXMoZi5qaW11TmFtZSkpXG4gICAgLnNvcnQoKGEsIGIpID0+XG4gICAgICBmb3JtYXRSZWNvcnRlTGFiZWwoYSkubG9jYWxlQ29tcGFyZShmb3JtYXRSZWNvcnRlTGFiZWwoYiksICdwdC1CUicpXG4gICAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZEZpZWxkQnlKaW11TmFtZSAoXG4gIGZpZWxkczogSU1GaWVsZFNjaGVtYVtdLFxuICBqaW11TmFtZT86IHN0cmluZ1xuKTogSU1GaWVsZFNjaGVtYSB8IG51bGwge1xuICBpZiAoIWppbXVOYW1lKSByZXR1cm4gbnVsbFxuICBjb25zdCBleGFjdCA9IGZpZWxkcy5maW5kKChmKSA9PiBmLmppbXVOYW1lID09PSBqaW11TmFtZSlcbiAgaWYgKGV4YWN0KSByZXR1cm4gZXhhY3RcbiAgY29uc3QgbG93ZXIgPSBqaW11TmFtZS50b0xvd2VyQ2FzZSgpXG4gIHJldHVybiAoXG4gICAgZmllbGRzLmZpbmQoXG4gICAgICAoZikgPT5cbiAgICAgICAgZi5qaW11TmFtZT8udG9Mb3dlckNhc2UoKSA9PT0gbG93ZXIgfHxcbiAgICAgICAgZi5uYW1lPy50b0xvd2VyQ2FzZSgpID09PSBsb3dlciB8fFxuICAgICAgICBmLmFsaWFzPy50b0xvd2VyQ2FzZSgpID09PSBsb3dlclxuICAgICkgPz8gbnVsbFxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlQXR0cmlidXRlS2V5cyAoXG4gIGZpZWxkczogSU1GaWVsZFNjaGVtYVtdLFxuICB5ZWFyRmllbGRKaW11Pzogc3RyaW5nLFxuICByZWNvcnRlRmllbGRKaW11Pzogc3RyaW5nXG4pOiBGaWVsZEF0dHJpYnV0ZUtleXMgfCBudWxsIHtcbiAgaWYgKCF5ZWFyRmllbGRKaW11IHx8ICFyZWNvcnRlRmllbGRKaW11KSByZXR1cm4gbnVsbFxuXG4gIGNvbnN0IHllYXJGaWVsZCA9IGZpbmRGaWVsZEJ5SmltdU5hbWUoZmllbGRzLCB5ZWFyRmllbGRKaW11KVxuICBjb25zdCByZWNvcnRlRmllbGQgPSBmaW5kRmllbGRCeUppbXVOYW1lKGZpZWxkcywgcmVjb3J0ZUZpZWxkSmltdSlcblxuICByZXR1cm4ge1xuICAgIHllYXJLZXk6IHllYXJGaWVsZCA/IGdldEF0dHJpYnV0ZUtleSh5ZWFyRmllbGQpIDogeWVhckZpZWxkSmltdSxcbiAgICByZWNvcnRlS2V5OiByZWNvcnRlRmllbGQgPyBnZXRBdHRyaWJ1dGVLZXkocmVjb3J0ZUZpZWxkKSA6IHJlY29ydGVGaWVsZEppbXVcbiAgfVxufVxuXG50eXBlIFJlY29yZExpa2UgPVxuICB8IERhdGFSZWNvcmRcbiAgfCB7XG4gICAgICBhdHRyaWJ1dGVzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgICAgIGZlYXR1cmU/OiB7IGF0dHJpYnV0ZXM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB9XG4gICAgICBnZXREYXRhPzogKCkgPT4ge1xuICAgICAgICBhdHRyaWJ1dGVzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgICAgICAgZmVhdHVyZT86IHsgYXR0cmlidXRlcz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+IH1cbiAgICAgIH1cbiAgICAgIGdldEZpZWxkVmFsdWU/OiAoamltdUZpZWxkTmFtZTogc3RyaW5nKSA9PiB1bmtub3duXG4gICAgICBnZXREYXRlRmllbGRWYWx1ZT86IChqaW11RmllbGROYW1lOiBzdHJpbmcpID0+IHVua25vd25cbiAgICAgIGdldERhdGFCZWZvcmVNYXBwaW5nPzogKCkgPT4gUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgICB9XG5cbmZ1bmN0aW9uIHRvUGxhaW5PYmplY3QgKHZhbHVlOiB1bmtub3duKTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4ge1xuICBpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHJldHVybiB7fVxuICBjb25zdCB2ID0gdmFsdWUgYXMge1xuICAgIHRvSlM/OiAoKSA9PiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICAgIGFzTXV0YWJsZT86IChvcHRzPzogeyBkZWVwOiBib29sZWFuIH0pID0+IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gIH1cbiAgaWYgKHR5cGVvZiB2LnRvSlMgPT09ICdmdW5jdGlvbicpIHJldHVybiB2LnRvSlMoKVxuICBpZiAodHlwZW9mIHYuYXNNdXRhYmxlID09PSAnZnVuY3Rpb24nKSByZXR1cm4gdi5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pXG4gIHJldHVybiB2YWx1ZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxufVxuXG5jb25zdCBHRVRfREFUQV9NRVRBX0tFWVMgPSBuZXcgU2V0KFtcbiAgJ2F0dHJpYnV0ZXMnLFxuICAnZmVhdHVyZScsXG4gICdnZW9tZXRyeScsXG4gICdjZW50cm9pZCcsXG4gICdhZ2dyZWdhdGVHZW9tZXRyaWVzJyxcbiAgJ3N5bWJvbCdcbl0pXG5cbi8qKiBFeHRyYWkgbyBkaWNpb27DoXJpbyBkZSBhdHJpYnV0b3MgZGUgdW0gcmVnaXN0cm8gKHbDoXJpb3MgZm9ybWF0b3MgZG8gSmltdS9BcmNHSVMpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFBsYWluQXR0cmlidXRlcyAocmVjOiBSZWNvcmRMaWtlKTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4ge1xuICBjb25zdCBtZXJnZWQ6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge31cblxuICBjb25zdCBtZXJnZSA9IChhdHRycz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+KSA9PiB7XG4gICAgaWYgKCFhdHRycykgcmV0dXJuXG4gICAgT2JqZWN0LmFzc2lnbihtZXJnZWQsIHRvUGxhaW5PYmplY3QoYXR0cnMpKVxuICB9XG5cbiAgaWYgKCdnZXREYXRhJyBpbiByZWMgJiYgdHlwZW9mIHJlYy5nZXREYXRhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3QgZGF0YSA9IHJlYy5nZXREYXRhKClcbiAgICBjb25zdCBwbGFpbiA9IHRvUGxhaW5PYmplY3QoZGF0YSlcbiAgICBtZXJnZShwbGFpbi5hdHRyaWJ1dGVzIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgdW5kZWZpbmVkKVxuICAgIG1lcmdlKHBsYWluLmZlYXR1cmU/LmF0dHJpYnV0ZXMgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCB1bmRlZmluZWQpXG4gICAgLy8gSmltdSBEYXRhUmVjb3JkOiBnZXREYXRhKCkgY29zdHVtYSBzZXIgbWFwYSBwbGFubyB7IGppbXVGaWVsZE5hbWU6IHZhbG9yIH1cbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwbGFpbikpIHtcbiAgICAgIGlmIChHRVRfREFUQV9NRVRBX0tFWVMuaGFzKGtleSkpIGNvbnRpbnVlXG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkgbWVyZ2VkW2tleV0gPSB2YWx1ZVxuICAgIH1cbiAgfVxuXG4gIGlmICgnZmVhdHVyZScgaW4gcmVjICYmIHJlYy5mZWF0dXJlPy5hdHRyaWJ1dGVzKSB7XG4gICAgbWVyZ2UocmVjLmZlYXR1cmUuYXR0cmlidXRlcylcbiAgfVxuXG4gIGlmICgnYXR0cmlidXRlcycgaW4gcmVjICYmIHJlYy5hdHRyaWJ1dGVzKSB7XG4gICAgbWVyZ2UocmVjLmF0dHJpYnV0ZXMpXG4gIH1cblxuICBpZiAoJ2dldERhdGFCZWZvcmVNYXBwaW5nJyBpbiByZWMgJiYgdHlwZW9mIHJlYy5nZXREYXRhQmVmb3JlTWFwcGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG1lcmdlKHJlYy5nZXREYXRhQmVmb3JlTWFwcGluZygpKVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlZFxufVxuXG5mdW5jdGlvbiBhdHRyaWJ1dGVIYXNVc2FibGVWYWx1ZSAodmFsdWU6IHVua25vd24pOiBib29sZWFuIHtcbiAgaWYgKGlzRW1wdHlDZWxsKHZhbHVlKSkgcmV0dXJuIGZhbHNlXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSByZXR1cm4gZmFsc2VcbiAgcmV0dXJuIHRydWVcbn1cblxuLyoqIFZlcmlmaWNhIHNlIG8gcmVnaXN0cm8gZXhww7VlIGF0cmlidXRvcyBvdSBnZXRGaWVsZFZhbHVlIGNvbSBkYWRvcyByZWFpcyAobsOjbyBzw7MgbcOpdG9kbyB2YXppbykuICovXG5leHBvcnQgZnVuY3Rpb24gcmVjb3JkSGFzUmVhZGFibGVEYXRhIChyZWM6IFJlY29yZExpa2UpOiBib29sZWFuIHtcbiAgY29uc3QgYXR0cnMgPSBnZXRQbGFpbkF0dHJpYnV0ZXMocmVjKVxuICBjb25zdCB1c2FibGVLZXlzID0gT2JqZWN0LmtleXMoYXR0cnMpLmZpbHRlcigoa2V5KSA9PiB7XG4gICAgaWYgKC9eKG9iamVjdGlkfGdsb2JhbGlkfHNoYXBlfGdlb21ldHJ5KSQvaS50ZXN0KGtleSkpIHJldHVybiBmYWxzZVxuICAgIHJldHVybiBhdHRyaWJ1dGVIYXNVc2FibGVWYWx1ZShhdHRyc1trZXldKVxuICB9KVxuICBpZiAodXNhYmxlS2V5cy5sZW5ndGggPiAwKSByZXR1cm4gdHJ1ZVxuXG4gIGlmICgnZ2V0RmllbGRWYWx1ZScgaW4gcmVjICYmIHR5cGVvZiByZWMuZ2V0RmllbGRWYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IHByb2JlcyA9IFtcbiAgICAgICdhbm8nLFxuICAgICAgJ3llYXInLFxuICAgICAgJ0FOTycsXG4gICAgICAnWWVhcicsXG4gICAgICAnZXhlcmNpY2lvJyxcbiAgICAgICdFeGVyY2ljaW8nXG4gICAgXVxuICAgIGZvciAoY29uc3QgbmFtZSBvZiBwcm9iZXMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHYgPSByZWMuZ2V0RmllbGRWYWx1ZSEobmFtZSlcbiAgICAgICAgaWYgKGF0dHJpYnV0ZUhhc1VzYWJsZVZhbHVlKHYpKSByZXR1cm4gdHJ1ZVxuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIHRlbnRhIHByw7N4aW1vXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8qKiBMw6ogdmFsb3IgcGVsbyBBUEkgZG8gSmltdSAoYGdldEZpZWxkVmFsdWVgKSBlLCBlbSBzZWd1aWRhLCBwZWxvcyBhdHJpYnV0b3MgYnJ1dG9zLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlYWRSZWNvcmRWYWx1ZSAoXG4gIHJlYzogUmVjb3JkTGlrZSxcbiAgZmllbGQ/OiBJTUZpZWxkU2NoZW1hIHwgbnVsbCxcbiAgZmFsbGJhY2tKaW11TmFtZT86IHN0cmluZ1xuKTogdW5rbm93biB7XG4gIGNvbnN0IG5hbWVzOiBzdHJpbmdbXSA9IFtdXG4gIGlmIChmaWVsZD8uamltdU5hbWUpIG5hbWVzLnB1c2goZmllbGQuamltdU5hbWUpXG4gIGlmIChmYWxsYmFja0ppbXVOYW1lKSBuYW1lcy5wdXNoKGZhbGxiYWNrSmltdU5hbWUpXG4gIGlmIChmaWVsZD8ubmFtZSkgbmFtZXMucHVzaChmaWVsZC5uYW1lKVxuICBpZiAoZmllbGQ/LmFsaWFzKSBuYW1lcy5wdXNoKGZpZWxkLmFsaWFzKVxuICBpZiAoZmllbGQpIG5hbWVzLnB1c2goZ2V0QXR0cmlidXRlS2V5KGZpZWxkKSlcblxuICBjb25zdCB1bmlxdWVOYW1lcyA9IFsuLi5uZXcgU2V0KG5hbWVzLmZpbHRlcihCb29sZWFuKSldXG5cbiAgaWYgKCdnZXRGaWVsZFZhbHVlJyBpbiByZWMgJiYgdHlwZW9mIHJlYy5nZXRGaWVsZFZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm9yIChjb25zdCBuYW1lIG9mIHVuaXF1ZU5hbWVzKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB2ID0gcmVjLmdldEZpZWxkVmFsdWUhKG5hbWUpXG4gICAgICAgIGlmICh2ICE9PSB1bmRlZmluZWQpIHJldHVybiB2XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgLy8gdGVudGEgcHLDs3hpbW8gbm9tZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChcbiAgICBmaWVsZD8uamltdU5hbWUgJiZcbiAgICAnZ2V0RGF0ZUZpZWxkVmFsdWUnIGluIHJlYyAmJlxuICAgIHR5cGVvZiByZWMuZ2V0RGF0ZUZpZWxkVmFsdWUgPT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHYgPSByZWMuZ2V0RGF0ZUZpZWxkVmFsdWUhKGZpZWxkLmppbXVOYW1lKVxuICAgICAgaWYgKHYgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHZcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIGlnbm9yYVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGF0dHJzID0gZ2V0UGxhaW5BdHRyaWJ1dGVzKHJlYylcbiAgY29uc3QgZnJvbU1hcHBlZCA9IHJlYWRBdHRyaWJ1dGVGbGV4aWJsZShhdHRycywgZmllbGQsIGZhbGxiYWNrSmltdU5hbWUpXG4gIGlmIChmcm9tTWFwcGVkICE9PSB1bmRlZmluZWQpIHJldHVybiBmcm9tTWFwcGVkXG5cbiAgaWYgKCdnZXREYXRhQmVmb3JlTWFwcGluZycgaW4gcmVjICYmIHR5cGVvZiByZWMuZ2V0RGF0YUJlZm9yZU1hcHBpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCByYXcgPSB0b1BsYWluT2JqZWN0KHJlYy5nZXREYXRhQmVmb3JlTWFwcGluZygpKVxuICAgIHJldHVybiByZWFkQXR0cmlidXRlRmxleGlibGUocmF3LCBmaWVsZCwgZmFsbGJhY2tKaW11TmFtZSlcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gcmVhZEF0dHJpYnV0ZSAoXG4gIGF0dHJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbiAgcHJpbWFyeUtleTogc3RyaW5nLFxuICBmYWxsYmFja0tleT86IHN0cmluZ1xuKTogdW5rbm93biB7XG4gIGlmIChwcmltYXJ5S2V5IGluIGF0dHJzKSByZXR1cm4gYXR0cnNbcHJpbWFyeUtleV1cbiAgaWYgKGZhbGxiYWNrS2V5ICYmIGZhbGxiYWNrS2V5ICE9PSBwcmltYXJ5S2V5ICYmIGZhbGxiYWNrS2V5IGluIGF0dHJzKSB7XG4gICAgcmV0dXJuIGF0dHJzW2ZhbGxiYWNrS2V5XVxuICB9XG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuLyoqIFRlbnRhIGppbXVOYW1lLCBuYW1lLCBhbGlhcyBlIGNvcnJlc3BvbmTDqm5jaWEgc2VtIGRpZmVyZW5jaWFyIG1hacO6c2N1bGFzL21pbsO6c2N1bGFzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlYWRBdHRyaWJ1dGVGbGV4aWJsZSAoXG4gIGF0dHJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbiAgZmllbGQ/OiBJTUZpZWxkU2NoZW1hIHwgbnVsbCxcbiAgZmFsbGJhY2tKaW11TmFtZT86IHN0cmluZ1xuKTogdW5rbm93biB7XG4gIGNvbnN0IGNhbmRpZGF0ZXMgPSBuZXcgU2V0PHN0cmluZz4oKVxuICBpZiAoZmllbGQpIHtcbiAgICBpZiAoZmllbGQuamltdU5hbWUpIGNhbmRpZGF0ZXMuYWRkKGZpZWxkLmppbXVOYW1lKVxuICAgIGlmIChmaWVsZC5uYW1lKSBjYW5kaWRhdGVzLmFkZChmaWVsZC5uYW1lKVxuICAgIGlmIChmaWVsZC5hbGlhcykgY2FuZGlkYXRlcy5hZGQoZmllbGQuYWxpYXMpXG4gICAgY2FuZGlkYXRlcy5hZGQoZ2V0QXR0cmlidXRlS2V5KGZpZWxkKSlcbiAgfVxuICBpZiAoZmFsbGJhY2tKaW11TmFtZSkgY2FuZGlkYXRlcy5hZGQoZmFsbGJhY2tKaW11TmFtZSlcblxuICBmb3IgKGNvbnN0IGtleSBvZiBjYW5kaWRhdGVzKSB7XG4gICAgY29uc3QgdiA9IHJlYWRBdHRyaWJ1dGUoYXR0cnMsIGtleSlcbiAgICBpZiAodiAhPT0gdW5kZWZpbmVkKSByZXR1cm4gdlxuICB9XG5cbiAgY29uc3QgYXR0cktleXMgPSBPYmplY3Qua2V5cyhhdHRycylcbiAgZm9yIChjb25zdCBrZXkgb2YgY2FuZGlkYXRlcykge1xuICAgIGNvbnN0IGZvdW5kID0gYXR0cktleXMuZmluZCgoaykgPT4gay50b0xvd2VyQ2FzZSgpID09PSBrZXkudG9Mb3dlckNhc2UoKSlcbiAgICBpZiAoZm91bmQgIT0gbnVsbCkgcmV0dXJuIGF0dHJzW2ZvdW5kXVxuICB9XG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxudHlwZSBRdWVyaWFibGVMYXllciA9IHtcbiAgcXVlcnk/OiAocTogb2JqZWN0LCBvcHRpb25zPzogeyBzY29wZT86IFF1ZXJ5U2NvcGUgfSkgPT4gUHJvbWlzZTx7IHJlY29yZHM/OiBEYXRhUmVjb3JkW10gfT5cbiAgbG9hZD86IChxOiBvYmplY3QsIG9wdGlvbnM/OiB7IHNjb3BlPzogUXVlcnlTY29wZSB9KSA9PiBQcm9taXNlPERhdGFSZWNvcmRbXT5cbiAgbG9hZEFsbD86IChcbiAgICBxOiBvYmplY3QsXG4gICAgc2lnbmFsPzogQWJvcnRTaWduYWwsXG4gICAgcHJvZ3Jlc3NDYWxsYmFjaz86IHVua25vd24sXG4gICAgb3B0aW9ucz86IHsgc2NvcGU/OiBRdWVyeVNjb3BlIH1cbiAgKSA9PiBQcm9taXNlPERhdGFSZWNvcmRbXT5cbiAgZ2V0QWxsTG9hZGVkUmVjb3Jkcz86ICgpID0+IERhdGFSZWNvcmRbXVxuICBnZXRSZWNvcmRzPzogKCkgPT4gRGF0YVJlY29yZFtdXG4gIGxheWVyPzogeyBxdWVyeUZlYXR1cmVzPzogKHE6IG9iamVjdCkgPT4gUHJvbWlzZTx7IGZlYXR1cmVzPzogdW5rbm93bltdIH0+IH1cbiAgYnVpbGRSZWNvcmQ/OiAoZmVhdHVyZTogdW5rbm93bikgPT4gRGF0YVJlY29yZFxufVxuXG5jb25zdCBidWlsZFF1ZXJ5T3B0aW9ucyA9ICh3aWRnZXRJZD86IHN0cmluZykgPT4gKHtcbiAgc2NvcGU6IFF1ZXJ5U2NvcGUuSW5BbGxEYXRhLFxuICAuLi4od2lkZ2V0SWQgPyB7IHdpZGdldElkIH0gOiB7fSlcbn0pXG5cbmNvbnN0IGJ1aWxkUXVlcnlQYXJhbXMgPSAoXG4gIG91dEZpZWxkczogc3RyaW5nW10gPSBbJyonXSxcbiAgZGlzYWJsZUNsaWVudFF1ZXJ5ID0gZmFsc2VcbikgPT4gKHtcbiAgd2hlcmU6ICcxPTEnLFxuICBvdXRGaWVsZHMsXG4gIHJldHVybkdlb21ldHJ5OiBmYWxzZSxcbiAgcGFnZVNpemU6IDIwMDAsXG4gIC4uLihkaXNhYmxlQ2xpZW50UXVlcnkgPyB7IGRpc2FibGVDbGllbnRRdWVyeTogdHJ1ZSB9IDoge30pXG59KVxuXG5mdW5jdGlvbiByZWNvcmRzQXJlUmVhZGFibGUgKHJlY29yZHM6IERhdGFSZWNvcmRbXSk6IGJvb2xlYW4ge1xuICByZXR1cm4gcmVjb3Jkcy5sZW5ndGggPiAwICYmIHJlY29yZHMuc29tZShyZWNvcmRIYXNSZWFkYWJsZURhdGEpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHF1ZXJ5VmlhSnNhcGlMYXllciAoZHM6IFF1ZXJpYWJsZUxheWVyKTogUHJvbWlzZTxEYXRhUmVjb3JkW10+IHtcbiAgY29uc3QgbGF5ZXIgPSBkcy5sYXllciBhcyB7XG4gICAgcXVlcnlGZWF0dXJlcz86IChxOiBvYmplY3QpID0+IFByb21pc2U8eyBmZWF0dXJlcz86IHVua25vd25bXSB9PlxuICAgIHF1ZXJ5PzogKHE6IG9iamVjdCkgPT4gUHJvbWlzZTx7IGZlYXR1cmVzPzogdW5rbm93bltdIH0+XG4gIH1cbiAgaWYgKCFsYXllciB8fCB0eXBlb2YgZHMuYnVpbGRSZWNvcmQgIT09ICdmdW5jdGlvbicpIHJldHVybiBbXVxuXG4gIGNvbnN0IHEgPSB7XG4gICAgd2hlcmU6ICcxPTEnLFxuICAgIG91dEZpZWxkczogWycqJ10sXG4gICAgcmV0dXJuR2VvbWV0cnk6IGZhbHNlLFxuICAgIG51bTogMjAwMFxuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPVxuICAgICAgdHlwZW9mIGxheWVyLnF1ZXJ5RmVhdHVyZXMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBhd2FpdCBsYXllci5xdWVyeUZlYXR1cmVzKHEpXG4gICAgICAgIDogdHlwZW9mIGxheWVyLnF1ZXJ5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgPyBhd2FpdCBsYXllci5xdWVyeShxKVxuICAgICAgICAgIDogbnVsbFxuICAgIGNvbnN0IGZlYXR1cmVzID0gcmVzdWx0Py5mZWF0dXJlcyA/PyBbXVxuICAgIHJldHVybiBmZWF0dXJlcy5tYXAoKGYpID0+IGRzLmJ1aWxkUmVjb3JkIShmKSlcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hWaWFBcmNnaXNSZXN0IChcbiAgZHM6IHsgdXJsPzogc3RyaW5nIH1cbik6IFByb21pc2U8UmVjb3JkPHN0cmluZywgdW5rbm93bj5bXT4ge1xuICBpZiAoIWRzLnVybCkgcmV0dXJuIFtdXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZXNyaS5yZXN0RmVhdHVyZVNlcnZpY2UucXVlcnlGZWF0dXJlcyh7XG4gICAgICB1cmw6IGRzLnVybCxcbiAgICAgIHdoZXJlOiAnMT0xJyxcbiAgICAgIG91dEZpZWxkczogWycqJ10sXG4gICAgICByZXR1cm5HZW9tZXRyeTogZmFsc2VcbiAgICB9KVxuICAgIGNvbnN0IGZlYXR1cmVzID1cbiAgICAgIHJlcyAmJiB0eXBlb2YgcmVzID09PSAnb2JqZWN0JyAmJiAnZmVhdHVyZXMnIGluIHJlc1xuICAgICAgICA/IChyZXMgYXMgeyBmZWF0dXJlcz86IEFycmF5PHsgYXR0cmlidXRlcz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+IH0+IH0pXG4gICAgICAgICAgICAuZmVhdHVyZXMgPz8gW11cbiAgICAgICAgOiBbXVxuICAgIHJldHVybiBmZWF0dXJlc1xuICAgICAgLm1hcCgoZikgPT4gKHsgLi4uKGYuYXR0cmlidXRlcyA/PyB7fSkgfSkpXG4gICAgICAuZmlsdGVyKChhKSA9PiBPYmplY3Qua2V5cyhhKS5sZW5ndGggPiAwKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gW11cbiAgfVxufVxuXG4vKiogQ29uc3VsdGEgUkVTVCBjb20gY3JlZGVuY2lhbCBkbyBQb3J0YWwgKEVudGVycHJpc2UpLiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoVmlhUG9ydGFsUmVzdCAoXG4gIGRzOiB7IHVybD86IHN0cmluZyB9XG4pOiBQcm9taXNlPFJlY29yZDxzdHJpbmcsIHVua25vd24+W10+IHtcbiAgaWYgKCFkcy51cmwpIHJldHVybiBbXVxuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlcXVlc3RVdGlscy5yZXF1ZXN0V3JhcHBlcihkcy51cmwsIChzZXNzaW9uKSA9PlxuICAgICAgZXNyaS5yZXN0RmVhdHVyZVNlcnZpY2UucXVlcnlGZWF0dXJlcyh7XG4gICAgICAgIHVybDogZHMudXJsLFxuICAgICAgICB3aGVyZTogJzE9MScsXG4gICAgICAgIG91dEZpZWxkczogWycqJ10sXG4gICAgICAgIHJldHVybkdlb21ldHJ5OiBmYWxzZSxcbiAgICAgICAgYXV0aGVudGljYXRpb246IHNlc3Npb25cbiAgICAgIH0pXG4gICAgKVxuICAgIGNvbnN0IGZlYXR1cmVzID1cbiAgICAgIHJlcyAmJiB0eXBlb2YgcmVzID09PSAnb2JqZWN0JyAmJiAnZmVhdHVyZXMnIGluIHJlc1xuICAgICAgICA/IChyZXMgYXMgeyBmZWF0dXJlcz86IEFycmF5PHsgYXR0cmlidXRlcz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+IH0+IH0pXG4gICAgICAgICAgICAuZmVhdHVyZXMgPz8gW11cbiAgICAgICAgOiBbXVxuICAgIHJldHVybiBmZWF0dXJlc1xuICAgICAgLm1hcCgoZikgPT4gKHsgLi4uKGYuYXR0cmlidXRlcyA/PyB7fSkgfSkpXG4gICAgICAuZmlsdGVyKChhKSA9PiBPYmplY3Qua2V5cyhhKS5sZW5ndGggPiAwKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmV0Y2hWaWFBcmNnaXNSZXN0KGRzKVxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJ1blF1ZXJ5YWJsZU1ldGhvZHMgKFxuICBkczogUXVlcmlhYmxlTGF5ZXIsXG4gIG91dEZpZWxkczogc3RyaW5nW10sXG4gIGRpc2FibGVDbGllbnRRdWVyeTogYm9vbGVhbixcbiAgd2lkZ2V0SWQ/OiBzdHJpbmdcbik6IFByb21pc2U8RGF0YVJlY29yZFtdPiB7XG4gIGNvbnN0IHBhcmFtcyA9IGJ1aWxkUXVlcnlQYXJhbXMob3V0RmllbGRzLCBkaXNhYmxlQ2xpZW50UXVlcnkpXG4gIGNvbnN0IHF1ZXJ5T3B0aW9ucyA9IGJ1aWxkUXVlcnlPcHRpb25zKHdpZGdldElkKVxuXG4gIGlmICh0eXBlb2YgZHM/LmxvYWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IGRzLmxvYWQocGFyYW1zLCBxdWVyeU9wdGlvbnMpXG4gICAgICBpZiAocmVjb3Jkcz8ubGVuZ3RoICYmIHJlY29yZHNBcmVSZWFkYWJsZShyZWNvcmRzKSkgcmV0dXJuIHJlY29yZHNcbiAgICAgIGlmIChyZWNvcmRzPy5sZW5ndGggJiYgIWRpc2FibGVDbGllbnRRdWVyeSkgcmV0dXJuIHJlY29yZHNcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIHRlbnRhIHByw7N4aW1vIG3DqXRvZG9cbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIGRzPy5sb2FkQWxsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBkcy5sb2FkQWxsKHBhcmFtcywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHF1ZXJ5T3B0aW9ucylcbiAgICAgIGlmIChyZWNvcmRzPy5sZW5ndGggJiYgcmVjb3Jkc0FyZVJlYWRhYmxlKHJlY29yZHMpKSByZXR1cm4gcmVjb3Jkc1xuICAgICAgaWYgKHJlY29yZHM/Lmxlbmd0aCAmJiAhZGlzYWJsZUNsaWVudFF1ZXJ5KSByZXR1cm4gcmVjb3Jkc1xuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gdGVudGEgcXVlcnkgYWJhaXhvXG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiBkcz8ucXVlcnkgPT09ICdmdW5jdGlvbicpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZHMucXVlcnkocGFyYW1zLCBxdWVyeU9wdGlvbnMpXG4gICAgICBjb25zdCByZWNvcmRzID0gcmVzdWx0Py5yZWNvcmRzID8/IFtdXG4gICAgICBpZiAocmVjb3Jkcy5sZW5ndGggJiYgcmVjb3Jkc0FyZVJlYWRhYmxlKHJlY29yZHMpKSByZXR1cm4gcmVjb3Jkc1xuICAgICAgaWYgKHJlY29yZHMubGVuZ3RoICYmICFkaXNhYmxlQ2xpZW50UXVlcnkpIHJldHVybiByZWNvcmRzXG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyB0ZW50YSBKUyBBUElcbiAgICB9XG4gIH1cblxuICBjb25zdCB2aWFMYXllciA9IGF3YWl0IHF1ZXJ5VmlhSnNhcGlMYXllcihkcylcbiAgaWYgKHZpYUxheWVyLmxlbmd0aCAmJiByZWNvcmRzQXJlUmVhZGFibGUodmlhTGF5ZXIpKSByZXR1cm4gdmlhTGF5ZXJcbiAgaWYgKHZpYUxheWVyLmxlbmd0aCAmJiAhZGlzYWJsZUNsaWVudFF1ZXJ5KSByZXR1cm4gdmlhTGF5ZXJcblxuICByZXR1cm4gW11cbn1cblxuYXN5bmMgZnVuY3Rpb24gcXVlcnlBbGxSZWNvcmRzIChcbiAgZHM6IFF1ZXJpYWJsZUxheWVyLFxuICBvdXRGaWVsZHM6IHN0cmluZ1tdID0gWycqJ10sXG4gIHdpZGdldElkPzogc3RyaW5nXG4pOiBQcm9taXNlPERhdGFSZWNvcmRbXT4ge1xuICBsZXQgcmVjb3JkcyA9IGF3YWl0IHJ1blF1ZXJ5YWJsZU1ldGhvZHMoZHMsIG91dEZpZWxkcywgZmFsc2UsIHdpZGdldElkKVxuICBpZiAocmVjb3Jkc0FyZVJlYWRhYmxlKHJlY29yZHMpKSByZXR1cm4gcmVjb3Jkc1xuXG4gIHJlY29yZHMgPSBhd2FpdCBydW5RdWVyeWFibGVNZXRob2RzKGRzLCBvdXRGaWVsZHMsIHRydWUsIHdpZGdldElkKVxuICBpZiAocmVjb3Jkc0FyZVJlYWRhYmxlKHJlY29yZHMpKSByZXR1cm4gcmVjb3Jkc1xuXG4gIHJldHVybiByZWNvcmRzXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmV0Y2hMYXllclJlY29yZHNPcHRpb25zIHtcbiAgLyoqIElnbm9yYSBjYWNoZSBkbyBtYXBhIGUgZm9yw6dhIHF1ZXJ5L2xvYWRBbGwgKMO6dGlsIG5vIEVudGVycHJpc2UpLiAqL1xuICBmb3JjZVF1ZXJ5PzogYm9vbGVhblxuICB5ZWFyRmllbGRKaW11Pzogc3RyaW5nXG4gIHJlY29ydGVGaWVsZEppbXU/OiBzdHJpbmdcbiAgZmllbGRzPzogSU1GaWVsZFNjaGVtYVtdXG4gIC8qKiBJRCBkYSB3aWRnZXQgcGFyYSBhdXRlbnRpY2HDp8OjbyBuYSBjb25zdWx0YSBKaW11LiAqL1xuICB3aWRnZXRJZD86IHN0cmluZ1xufVxuXG5mdW5jdGlvbiByZXNvbHZlT3V0RmllbGRzIChcbiAgeWVhckZpZWxkSmltdT86IHN0cmluZyxcbiAgcmVjb3J0ZUZpZWxkSmltdT86IHN0cmluZyxcbiAgZmllbGRzPzogSU1GaWVsZFNjaGVtYVtdXG4pOiBzdHJpbmdbXSB7XG4gIGlmICghZmllbGRzPy5sZW5ndGggfHwgIXllYXJGaWVsZEppbXUgfHwgIXJlY29ydGVGaWVsZEppbXUpIHJldHVybiBbJyonXVxuICBjb25zdCBrZXlzID0gcmVzb2x2ZUF0dHJpYnV0ZUtleXMoZmllbGRzLCB5ZWFyRmllbGRKaW11LCByZWNvcnRlRmllbGRKaW11KVxuICBpZiAoIWtleXMpIHJldHVybiBbJyonXVxuICByZXR1cm4gWycqJywga2V5cy55ZWFyS2V5LCBrZXlzLnJlY29ydGVLZXldXG59XG5cbi8qKiBEZXRlY3RhIGNvbHVuYSBkZSBhbm8gcGVsb3MgdmFsb3JlcyByZWFpcyAoZXguOiBBbm8gPSAyLjAwMSwgMjAwMSkuICovXG5leHBvcnQgZnVuY3Rpb24gZGV0ZWN0WWVhcktleUZyb21Sb3dzIChcbiAgcm93czogUmVjb3JkPHN0cmluZywgdW5rbm93bj5bXSxcbiAgaGludD86IHN0cmluZ1xuKTogc3RyaW5nIHwgbnVsbCB7XG4gIGlmICghcm93cy5sZW5ndGgpIHJldHVybiBudWxsXG5cbiAgY29uc3Qga2V5cyA9IG5ldyBTZXQ8c3RyaW5nPigpXG4gIGZvciAoY29uc3Qgcm93IG9mIHJvd3Muc2xpY2UoMCwgNTApKSB7XG4gICAgT2JqZWN0LmtleXMocm93KS5mb3JFYWNoKChrKSA9PiBrZXlzLmFkZChrKSlcbiAgfVxuXG4gIGlmIChoaW50KSB7XG4gICAgY29uc3QgbWF0Y2ggPSBbLi4ua2V5c10uZmluZCgoaykgPT4gay50b0xvd2VyQ2FzZSgpID09PSBoaW50LnRvTG93ZXJDYXNlKCkpXG4gICAgaWYgKG1hdGNoKSByZXR1cm4gbWF0Y2hcbiAgfVxuXG4gIGxldCBiZXN0S2V5OiBzdHJpbmcgfCBudWxsID0gbnVsbFxuICBsZXQgYmVzdFNjb3JlID0gMFxuICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgaWYgKC9eKG9iamVjdGlkfGdsb2JhbGlkfHNoYXBlfGZpZCkkL2kudGVzdChrZXkpKSBjb250aW51ZVxuICAgIGxldCBzY29yZSA9IDBcbiAgICBmb3IgKGNvbnN0IHJvdyBvZiByb3dzKSB7XG4gICAgICBjb25zdCB5ID0gcGFyc2VZZWFyKHJvd1trZXldKVxuICAgICAgaWYgKHkgIT0gbnVsbCAmJiB5ID49IDE5ODUgJiYgeSA8PSAyMDM1KSBzY29yZSsrXG4gICAgfVxuICAgIGlmIChzY29yZSA+IGJlc3RTY29yZSkge1xuICAgICAgYmVzdFNjb3JlID0gc2NvcmVcbiAgICAgIGJlc3RLZXkgPSBrZXlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJlc3RTY29yZSA+IDAgPyBiZXN0S2V5IDogbnVsbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGV0ZWN0UmVjb3J0ZUtleUZyb21Sb3dzIChcbiAgcm93czogUmVjb3JkPHN0cmluZywgdW5rbm93bj5bXSxcbiAgcmVjb3J0ZUhpbnQ6IHN0cmluZ1xuKTogc3RyaW5nIHwgbnVsbCB7XG4gIGlmICghcm93cy5sZW5ndGgpIHJldHVybiBudWxsXG4gIGNvbnN0IGtleXMgPSBuZXcgU2V0PHN0cmluZz4oKVxuICBmb3IgKGNvbnN0IHJvdyBvZiByb3dzLnNsaWNlKDAsIDUpKSB7XG4gICAgT2JqZWN0LmtleXMocm93KS5mb3JFYWNoKChrKSA9PiBrZXlzLmFkZChrKSlcbiAgfVxuICBjb25zdCBleGFjdCA9IFsuLi5rZXlzXS5maW5kKFxuICAgIChrKSA9PiBrLnRvTG93ZXJDYXNlKCkgPT09IHJlY29ydGVIaW50LnRvTG93ZXJDYXNlKClcbiAgKVxuICBpZiAoZXhhY3QpIHJldHVybiBleGFjdFxuICByZXR1cm4gKFxuICAgIFsuLi5rZXlzXS5maW5kKFxuICAgICAgKGspID0+XG4gICAgICAgIG5vcm1hbGl6ZVJlY29ydGVUb2tlbihrKSA9PT0gbm9ybWFsaXplUmVjb3J0ZVRva2VuKHJlY29ydGVIaW50KVxuICAgICkgPz8gbnVsbFxuICApXG59XG5cbi8qKiBNb250YSBzw6lyaWUgYSBwYXJ0aXIgZGUgYXRyaWJ1dG9zIGJydXRvcyAoUkVTVCAvIHF1ZXJ5RmVhdHVyZXMpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkWWVhclNlcmllc0Zyb21BdHRyaWJ1dGVSb3dzIChcbiAgcm93czogUmVjb3JkPHN0cmluZywgdW5rbm93bj5bXSxcbiAgeWVhckZpZWxkSmltdTogc3RyaW5nLFxuICByZWNvcnRlRmllbGRKaW11OiBzdHJpbmcsXG4gIGZpZWxkcz86IElNRmllbGRTY2hlbWFbXVxuKTogWWVhclZhbHVlUm93W10ge1xuICBpZiAoIXJvd3MubGVuZ3RoKSByZXR1cm4gW11cblxuICBjb25zdCBhc1JlY29yZHMgPSByb3dzLm1hcCgoYXR0cmlidXRlcykgPT4gKHsgYXR0cmlidXRlcyB9KSlcbiAgY29uc3Qgc3RhbmRhcmQgPSBidWlsZFllYXJTZXJpZXMoXG4gICAgYXNSZWNvcmRzLFxuICAgIHllYXJGaWVsZEppbXUsXG4gICAgcmVjb3J0ZUZpZWxkSmltdSxcbiAgICBmaWVsZHNcbiAgKVxuICBpZiAoc3RhbmRhcmQubGVuZ3RoID4gMCkgcmV0dXJuIHN0YW5kYXJkXG5cbiAgY29uc3QgeWVhcktleSA9IGRldGVjdFllYXJLZXlGcm9tUm93cyhyb3dzLCB5ZWFyRmllbGRKaW11KSA/PyB5ZWFyRmllbGRKaW11XG4gIGxldCByZWNvcnRlS2V5ID1cbiAgICBkZXRlY3RSZWNvcnRlS2V5RnJvbVJvd3Mocm93cywgcmVjb3J0ZUZpZWxkSmltdSkgPz8gcmVjb3J0ZUZpZWxkSmltdVxuXG4gIGlmICgheWVhcktleSkgcmV0dXJuIFtdXG5cbiAgbGV0IHNlcmllcyA9IGJ1aWxkU2VyaWVzRnJvbUtleXMocm93cywgeWVhcktleSwgcmVjb3J0ZUtleSlcbiAgaWYgKHNlcmllcy5sZW5ndGggPiAwKSByZXR1cm4gc2VyaWVzXG5cbiAgaWYgKGZpZWxkcz8ubGVuZ3RoKSB7XG4gICAgZm9yIChjb25zdCBmIG9mIGdldFJlY29ydGVDYW5kaWRhdGVGaWVsZHMoZmllbGRzLCB5ZWFyRmllbGRKaW11KSkge1xuICAgICAgY29uc3QgYWx0S2V5ID1cbiAgICAgICAgZGV0ZWN0UmVjb3J0ZUtleUZyb21Sb3dzKHJvd3MsIGYuamltdU5hbWUpID8/IGYuamltdU5hbWVcbiAgICAgIHNlcmllcyA9IGJ1aWxkU2VyaWVzRnJvbUtleXMocm93cywgeWVhcktleSwgYWx0S2V5KVxuICAgICAgaWYgKHNlcmllcy5sZW5ndGggPiAwKSByZXR1cm4gc2VyaWVzXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHNlcmllc1xufVxuXG5mdW5jdGlvbiBidWlsZFNlcmllc0Zyb21LZXlzIChcbiAgcm93czogUmVjb3JkPHN0cmluZywgdW5rbm93bj5bXSxcbiAgeWVhcktleTogc3RyaW5nLFxuICByZWNvcnRlS2V5OiBzdHJpbmdcbik6IFllYXJWYWx1ZVJvd1tdIHtcbiAgY29uc3Qgc2VyaWVzOiBZZWFyVmFsdWVSb3dbXSA9IFtdXG4gIGZvciAoY29uc3Qgcm93IG9mIHJvd3MpIHtcbiAgICBjb25zdCB5ZWFyID0gcGFyc2VZZWFyKHJvd1t5ZWFyS2V5XSlcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlTnVtZXJpY1ZhbHVlKHJvd1tyZWNvcnRlS2V5XSlcbiAgICBpZiAoeWVhciA9PSBudWxsIHx8IHZhbHVlID09IG51bGwpIGNvbnRpbnVlXG4gICAgc2VyaWVzLnB1c2goeyB5ZWFyLCB2YWx1ZSB9KVxuICB9XG4gIHJldHVybiBzZXJpZXMuc29ydCgoYSwgYikgPT4gYS55ZWFyIC0gYi55ZWFyKVxufVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaFJhd0F0dHJpYnV0ZVJvd3NGcm9tTGF5ZXIgKFxuICBkczogUXVlcmlhYmxlTGF5ZXJcbik6IFByb21pc2U8UmVjb3JkPHN0cmluZywgdW5rbm93bj5bXT4ge1xuICBjb25zdCBsYXllciA9IGRzLmxheWVyIGFzIHtcbiAgICBsb2FkPzogKCkgPT4gUHJvbWlzZTx2b2lkPlxuICAgIGxvYWRlZD86IGJvb2xlYW5cbiAgICBsb2FkU3RhdHVzPzogc3RyaW5nXG4gICAgcXVlcnlGZWF0dXJlcz86IChwOiBvYmplY3QpID0+IFByb21pc2U8e1xuICAgICAgZmVhdHVyZXM/OiBBcnJheTx7IGF0dHJpYnV0ZXM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB9PlxuICAgIH0+XG4gIH1cbiAgaWYgKCFsYXllcj8ucXVlcnlGZWF0dXJlcykgcmV0dXJuIFtdXG5cbiAgdHJ5IHtcbiAgICBpZiAoXG4gICAgICB0eXBlb2YgbGF5ZXIubG9hZCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgbGF5ZXIubG9hZFN0YXR1cyAhPT0gJ2xvYWRlZCcgJiZcbiAgICAgICFsYXllci5sb2FkZWRcbiAgICApIHtcbiAgICAgIGF3YWl0IGxheWVyLmxvYWQoKVxuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBsYXllci5xdWVyeUZlYXR1cmVzKHtcbiAgICAgIHdoZXJlOiAnMT0xJyxcbiAgICAgIG91dEZpZWxkczogWycqJ10sXG4gICAgICByZXR1cm5HZW9tZXRyeTogZmFsc2VcbiAgICB9KVxuICAgIHJldHVybiAocmVzdWx0LmZlYXR1cmVzID8/IFtdKVxuICAgICAgLm1hcCgoZikgPT4gKHsgLi4uKGYuYXR0cmlidXRlcyA/PyB7fSkgfSkpXG4gICAgICAuZmlsdGVyKChhKSA9PiBPYmplY3Qua2V5cyhhKS5sZW5ndGggPiAwKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gW11cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXR0cmlidXRlUm93c1Njb3JlIChcbiAgcm93czogUmVjb3JkPHN0cmluZywgdW5rbm93bj5bXVxuKTogbnVtYmVyIHtcbiAgaWYgKCFyb3dzLmxlbmd0aCkgcmV0dXJuIDBcbiAgY29uc3Qgc2FtcGxlID0gcm93c1swXVxuICByZXR1cm4gT2JqZWN0LmtleXMoc2FtcGxlKS5maWx0ZXIoXG4gICAgKGspID0+ICEvXihvYmplY3RpZHxnbG9iYWxpZHxzaGFwZXxmaWQpJC9pLnRlc3QoaylcbiAgKS5sZW5ndGhcbn1cblxuLyoqXG4gKiBDYXJyZWdhIGxpbmhhcyBkYSB0YWJlbGEgUFJPREVTIHByaW9yaXphbmRvIGF0cmlidXRvcyBicnV0b3MgZGEgY2FtYWRhXG4gKiAobWVzbWEgZm9udGUgZGEgdGFiZWxhIGRvIFBvcnRhbCkuXG4gKi9cbmZ1bmN0aW9uIHJlY29yZHNUb0F0dHJpYnV0ZVJvd3MgKHJlY29yZHM6IERhdGFSZWNvcmRbXSk6IFJlY29yZDxzdHJpbmcsIHVua25vd24+W10ge1xuICByZXR1cm4gcmVjb3Jkc1xuICAgIC5tYXAoKHIpID0+IGdldFBsYWluQXR0cmlidXRlcyhyKSlcbiAgICAuZmlsdGVyKChhKSA9PiBPYmplY3Qua2V5cyhhKS5sZW5ndGggPiAwKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hQcm9kZXNBdHRyaWJ1dGVSb3dzIChcbiAgZGF0YVNvdXJjZTogdW5rbm93bixcbiAgb3B0aW9ucz86IEZldGNoTGF5ZXJSZWNvcmRzT3B0aW9uc1xuKTogUHJvbWlzZTxSZWNvcmQ8c3RyaW5nLCB1bmtub3duPltdPiB7XG4gIGNvbnN0IGRzID0gZGF0YVNvdXJjZSBhcyBRdWVyaWFibGVMYXllciAmIHsgdXJsPzogc3RyaW5nIH1cbiAgY29uc3QgY2FuZGlkYXRlczogUmVjb3JkPHN0cmluZywgdW5rbm93bj5bXVtdID0gW11cblxuICBjb25zdCBsb2FkZWQgPSBkcy5nZXRSZWNvcmRzPy4oKSA/PyBkcy5nZXRBbGxMb2FkZWRSZWNvcmRzPy4oKSA/PyBbXVxuICBpZiAobG9hZGVkLmxlbmd0aCkge1xuICAgIGNhbmRpZGF0ZXMucHVzaChyZWNvcmRzVG9BdHRyaWJ1dGVSb3dzKGxvYWRlZCkpXG4gIH1cblxuICBjYW5kaWRhdGVzLnB1c2goYXdhaXQgZmV0Y2hSYXdBdHRyaWJ1dGVSb3dzRnJvbUxheWVyKGRzKSlcblxuICBjb25zdCBwb3J0YWxSb3dzID0gYXdhaXQgZmV0Y2hWaWFQb3J0YWxSZXN0KGRzKVxuICBpZiAocG9ydGFsUm93cy5sZW5ndGgpIGNhbmRpZGF0ZXMucHVzaChwb3J0YWxSb3dzKVxuXG4gIGNvbnN0IHJlc3RSb3dzID0gYXdhaXQgZmV0Y2hWaWFBcmNnaXNSZXN0KGRzKVxuICBpZiAocmVzdFJvd3MubGVuZ3RoKSBjYW5kaWRhdGVzLnB1c2gocmVzdFJvd3MpXG5cbiAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IGZldGNoTGF5ZXJSZWNvcmRzKGRhdGFTb3VyY2UsIG9wdGlvbnMpXG4gIGlmIChyZWNvcmRzLmxlbmd0aCkge1xuICAgIGNhbmRpZGF0ZXMucHVzaChyZWNvcmRzVG9BdHRyaWJ1dGVSb3dzKHJlY29yZHMpKVxuICB9XG5cbiAgaWYgKG9wdGlvbnM/LnllYXJGaWVsZEppbXUgJiYgb3B0aW9ucz8ucmVjb3J0ZUZpZWxkSmltdSkge1xuICAgIGZvciAoY29uc3Qgcm93cyBvZiBjYW5kaWRhdGVzKSB7XG4gICAgICBpZiAoIXJvd3MubGVuZ3RoKSBjb250aW51ZVxuICAgICAgY29uc3Qgc2VyaWVzID0gYnVpbGRZZWFyU2VyaWVzRnJvbUF0dHJpYnV0ZVJvd3MoXG4gICAgICAgIHJvd3MsXG4gICAgICAgIG9wdGlvbnMueWVhckZpZWxkSmltdSxcbiAgICAgICAgb3B0aW9ucy5yZWNvcnRlRmllbGRKaW11LFxuICAgICAgICBvcHRpb25zLmZpZWxkc1xuICAgICAgKVxuICAgICAgaWYgKHNlcmllcy5sZW5ndGggPiAwKSByZXR1cm4gcm93c1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjYW5kaWRhdGVzLnJlZHVjZSgoYmVzdCwgY3VyKSA9PiB7XG4gICAgaWYgKCFjdXIubGVuZ3RoKSByZXR1cm4gYmVzdFxuICAgIGlmICghYmVzdC5sZW5ndGgpIHJldHVybiBjdXJcbiAgICByZXR1cm4gYXR0cmlidXRlUm93c1Njb3JlKGN1cikgPiBhdHRyaWJ1dGVSb3dzU2NvcmUoYmVzdCkgPyBjdXIgOiBiZXN0XG4gIH0sIFtdIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+W10pXG59XG5cbmNvbnN0IFJFVFJZX0RFTEFZU19NUyA9IFswLCA0MDAsIDgwMCwgMTIwMCwgMjAwMCwgMzAwMCwgNDUwMF1cblxuLyoqXG4gKiBUZW50YSB2w6FyaWFzIHZlemVzIGF0w6kgb2J0ZXIgbGluaGFzIGNvbSBjb2x1bmFzIGRlIGRhZG9zIChuw6NvIHPDsyBPQkpFQ1RJRCkuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmb3JjZUxvYWRQcm9kZXNSb3dzIChcbiAgZGF0YVNvdXJjZTogdW5rbm93bixcbiAgb3B0aW9uczogRmV0Y2hMYXllclJlY29yZHNPcHRpb25zICYgeyB3aWRnZXRJZD86IHN0cmluZyB9XG4pOiBQcm9taXNlPFJlY29yZDxzdHJpbmcsIHVua25vd24+W10+IHtcbiAgZm9yIChjb25zdCBkZWxheSBvZiBSRVRSWV9ERUxBWVNfTVMpIHtcbiAgICBpZiAoZGVsYXkgPiAwKSB7XG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBkZWxheSkpXG4gICAgfVxuXG4gICAgY29uc3Qgcm93cyA9IGF3YWl0IGZldGNoUHJvZGVzQXR0cmlidXRlUm93cyhkYXRhU291cmNlLCB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgZm9yY2VRdWVyeTogdHJ1ZVxuICAgIH0pXG5cbiAgICBpZiAoIW9wdGlvbnMueWVhckZpZWxkSmltdSB8fCAhb3B0aW9ucy5yZWNvcnRlRmllbGRKaW11KSB7XG4gICAgICBpZiAoYXR0cmlidXRlUm93c1Njb3JlKHJvd3MpID4gMSkgcmV0dXJuIHJvd3NcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgY29uc3Qgc2VyaWVzID0gYnVpbGRZZWFyU2VyaWVzRnJvbUF0dHJpYnV0ZVJvd3MoXG4gICAgICByb3dzLFxuICAgICAgb3B0aW9ucy55ZWFyRmllbGRKaW11LFxuICAgICAgb3B0aW9ucy5yZWNvcnRlRmllbGRKaW11LFxuICAgICAgb3B0aW9ucy5maWVsZHNcbiAgICApXG4gICAgaWYgKHNlcmllcy5sZW5ndGggPiAwKSByZXR1cm4gcm93c1xuXG4gICAgaWYgKGF0dHJpYnV0ZVJvd3NTY29yZShyb3dzKSA+IDEpIHJldHVybiByb3dzXG4gIH1cblxuICByZXR1cm4gZmV0Y2hQcm9kZXNBdHRyaWJ1dGVSb3dzKGRhdGFTb3VyY2UsIHsgLi4ub3B0aW9ucywgZm9yY2VRdWVyeTogdHJ1ZSB9KVxufVxuXG4vKiogQ2FycmVnYSB0b2RvcyBvcyByZWdpc3Ryb3MgZGEgY2FtYWRhICh0YWJlbGEgYW5vIMOXIHJlY29ydGVzKS4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaExheWVyUmVjb3JkcyAoXG4gIGRhdGFTb3VyY2U6IHVua25vd24sXG4gIG9wdGlvbnM/OiBGZXRjaExheWVyUmVjb3Jkc09wdGlvbnNcbik6IFByb21pc2U8RGF0YVJlY29yZFtdPiB7XG4gIGNvbnN0IGRzID0gZGF0YVNvdXJjZSBhcyBRdWVyaWFibGVMYXllclxuICBjb25zdCBjYWNoZWQgPSBkcy5nZXRBbGxMb2FkZWRSZWNvcmRzPy4oKSA/PyBkcy5nZXRSZWNvcmRzPy4oKSA/PyBbXVxuICBjb25zdCBvdXRGaWVsZHMgPSByZXNvbHZlT3V0RmllbGRzKFxuICAgIG9wdGlvbnM/LnllYXJGaWVsZEppbXUsXG4gICAgb3B0aW9ucz8ucmVjb3J0ZUZpZWxkSmltdSxcbiAgICBvcHRpb25zPy5maWVsZHNcbiAgKVxuXG4gIGlmICghb3B0aW9ucz8uZm9yY2VRdWVyeSAmJiByZWNvcmRzQXJlUmVhZGFibGUoY2FjaGVkKSkge1xuICAgIHJldHVybiBjYWNoZWRcbiAgfVxuXG4gIGNvbnN0IHF1ZXJpZWQgPSBhd2FpdCBxdWVyeUFsbFJlY29yZHMoZHMsIG91dEZpZWxkcywgb3B0aW9ucz8ud2lkZ2V0SWQpXG4gIGlmIChyZWNvcmRzQXJlUmVhZGFibGUocXVlcmllZCkpIHJldHVybiBxdWVyaWVkXG4gIGlmIChxdWVyaWVkLmxlbmd0aCkgcmV0dXJuIHF1ZXJpZWRcblxuICBpZiAoIW9wdGlvbnM/LmZvcmNlUXVlcnkpIHJldHVybiBjYWNoZWRcbiAgcmV0dXJuIHF1ZXJpZWQubGVuZ3RoID8gcXVlcmllZCA6IGNhY2hlZFxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVSZWNvcnRlVG9rZW4gKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gdmFsdWVcbiAgICAudG9Mb3dlckNhc2UoKVxuICAgIC5ub3JtYWxpemUoJ05GRCcpXG4gICAgLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csICcnKVxuICAgIC5yZXBsYWNlKC9bXFxzLV0rL2csICdfJylcbn1cblxuZnVuY3Rpb24gaXNZZWFyTmFtZWRGaWVsZCAoZmllbGQ6IElNRmllbGRTY2hlbWEpOiBib29sZWFuIHtcbiAgY29uc3QgeSA9XG4gICAgcGFyc2VZZWFyKGZpZWxkLmppbXVOYW1lKSA/P1xuICAgIHBhcnNlWWVhcihmaWVsZC5uYW1lKSA/P1xuICAgIHBhcnNlWWVhcihmaWVsZC5hbGlhcylcbiAgcmV0dXJuIHkgIT0gbnVsbCAmJiB5ID49IDE5ODUgJiYgeSA8PSAyMDM1XG59XG5cbmZ1bmN0aW9uIGZpbmRSZWNvcnRlTmFtZUZpZWxkIChmaWVsZHM6IElNRmllbGRTY2hlbWFbXSk6IElNRmllbGRTY2hlbWEgfCBudWxsIHtcbiAgY29uc3QgcGF0dGVybnMgPSBbJ3JlY29ydGUnLCAncmVnaWFvJywgJ3JlZ2nDo28nLCAnYmlvbWEnLCAnbm9tZScsICduYW1lJywgJ2xhYmVsJ11cbiAgcmV0dXJuIChcbiAgICBmaWVsZHMuZmluZCgoZikgPT4ge1xuICAgICAgY29uc3QgaiA9IGYuamltdU5hbWU/LnRvTG93ZXJDYXNlKCkgPz8gJydcbiAgICAgIGNvbnN0IG4gPSBmLm5hbWU/LnRvTG93ZXJDYXNlKCkgPz8gJydcbiAgICAgIHJldHVybiBwYXR0ZXJucy5zb21lKChwKSA9PiBqLmluY2x1ZGVzKHApIHx8IG4uaW5jbHVkZXMocCkpXG4gICAgfSkgPz8gbnVsbFxuICApXG59XG5cbi8qKiBMYXlvdXQgYWx0ZXJuYXRpdm86IGNhZGEgcmVnaXN0cm8gPSByZWNvcnRlOyBjb2x1bmFzIG51bcOpcmljYXMgPSBhbm9zLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkWWVhclNlcmllc0Zyb21SZWNvcnRlUm93cyAoXG4gIHJlY29yZHM6IFJlY29yZExpa2VbXSxcbiAgcmVjb3J0ZUZpZWxkSmltdTogc3RyaW5nLFxuICBmaWVsZHM6IElNRmllbGRTY2hlbWFbXVxuKTogWWVhclZhbHVlUm93W10ge1xuICBjb25zdCB5ZWFyRmllbGRzID0gZmllbGRzLmZpbHRlcihpc1llYXJOYW1lZEZpZWxkKVxuICBpZiAoIXllYXJGaWVsZHMubGVuZ3RoKSByZXR1cm4gW11cblxuICBjb25zdCB0YXJnZXQgPSBub3JtYWxpemVSZWNvcnRlVG9rZW4ocmVjb3J0ZUZpZWxkSmltdSlcbiAgY29uc3QgbmFtZUZpZWxkID0gZmluZFJlY29ydGVOYW1lRmllbGQoZmllbGRzKVxuXG4gIGNvbnN0IHJvdyA9XG4gICAgcmVjb3Jkcy5maW5kKChyZWMpID0+IHtcbiAgICAgIGlmIChuYW1lRmllbGQpIHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSByZWFkUmVjb3JkVmFsdWUocmVjLCBuYW1lRmllbGQsIG5hbWVGaWVsZC5qaW11TmFtZSlcbiAgICAgICAgaWYgKGxhYmVsICE9IG51bGwgJiYgbm9ybWFsaXplUmVjb3J0ZVRva2VuKFN0cmluZyhsYWJlbCkpID09PSB0YXJnZXQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IGYgb2YgZmllbGRzKSB7XG4gICAgICAgIGlmIChpc1llYXJOYW1lZEZpZWxkKGYpIHx8IGYuamltdU5hbWUgPT09IHJlY29ydGVGaWVsZEppbXUpIGNvbnRpbnVlXG4gICAgICAgIGNvbnN0IHYgPSByZWFkUmVjb3JkVmFsdWUocmVjLCBmLCBmLmppbXVOYW1lKVxuICAgICAgICBpZiAodiAhPSBudWxsICYmIG5vcm1hbGl6ZVJlY29ydGVUb2tlbihTdHJpbmcodikpID09PSB0YXJnZXQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KSA/PyBudWxsXG5cbiAgaWYgKCFyb3cpIHJldHVybiBbXVxuXG4gIGNvbnN0IHNlcmllczogWWVhclZhbHVlUm93W10gPSBbXVxuICBmb3IgKGNvbnN0IHlmIG9mIHllYXJGaWVsZHMpIHtcbiAgICBjb25zdCB5ZWFyID1cbiAgICAgIHBhcnNlWWVhcih5Zi5qaW11TmFtZSkgPz8gcGFyc2VZZWFyKHlmLm5hbWUpID8/IHBhcnNlWWVhcih5Zi5hbGlhcylcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlTnVtZXJpY1ZhbHVlKHJlYWRSZWNvcmRWYWx1ZShyb3csIHlmLCB5Zi5qaW11TmFtZSkpXG4gICAgaWYgKHllYXIgPT0gbnVsbCB8fCB2YWx1ZSA9PSBudWxsKSBjb250aW51ZVxuICAgIHNlcmllcy5wdXNoKHsgeWVhciwgdmFsdWUgfSlcbiAgfVxuXG4gIHJldHVybiBzZXJpZXMuc29ydCgoYSwgYikgPT4gYS55ZWFyIC0gYi55ZWFyKVxufVxuXG5mdW5jdGlvbiBidWlsZFllYXJTZXJpZXNZZWFyUm93cyAoXG4gIHJlY29yZHM6IFJlY29yZExpa2VbXSxcbiAgeWVhckZpZWxkSmltdTogc3RyaW5nLFxuICByZWNvcnRlRmllbGRKaW11OiBzdHJpbmcsXG4gIGZpZWxkcz86IElNRmllbGRTY2hlbWFbXVxuKTogWWVhclZhbHVlUm93W10ge1xuICBjb25zdCB5ZWFyRmllbGQgPSBmaWVsZHM/Lmxlbmd0aFxuICAgID8gZmluZEZpZWxkQnlKaW11TmFtZShmaWVsZHMsIHllYXJGaWVsZEppbXUpXG4gICAgOiBudWxsXG4gIGNvbnN0IHJlY29ydGVGaWVsZCA9IGZpZWxkcz8ubGVuZ3RoXG4gICAgPyBmaW5kRmllbGRCeUppbXVOYW1lKGZpZWxkcywgcmVjb3J0ZUZpZWxkSmltdSlcbiAgICA6IG51bGxcbiAgY29uc3Qgc2VyaWVzOiBZZWFyVmFsdWVSb3dbXSA9IFtdXG5cbiAgZm9yIChjb25zdCByZWMgb2YgcmVjb3Jkcykge1xuICAgIGNvbnN0IHllYXIgPSBwYXJzZVllYXIoXG4gICAgICByZWFkUmVjb3JkVmFsdWUocmVjLCB5ZWFyRmllbGQsIHllYXJGaWVsZEppbXUpXG4gICAgKVxuICAgIGNvbnN0IHZhbHVlID0gcGFyc2VOdW1lcmljVmFsdWUoXG4gICAgICByZWFkUmVjb3JkVmFsdWUocmVjLCByZWNvcnRlRmllbGQsIHJlY29ydGVGaWVsZEppbXUpXG4gICAgKVxuICAgIGlmICh5ZWFyID09IG51bGwgfHwgdmFsdWUgPT0gbnVsbCkgY29udGludWVcblxuICAgIHNlcmllcy5wdXNoKHsgeWVhciwgdmFsdWUgfSlcbiAgfVxuXG4gIHJldHVybiBzZXJpZXMuc29ydCgoYSwgYikgPT4gYS55ZWFyIC0gYi55ZWFyKVxufVxuXG5mdW5jdGlvbiBjb2xsZWN0UmVjb3JkQXR0cmlidXRlS2V5cyAocmVjb3JkczogUmVjb3JkTGlrZVtdKTogc3RyaW5nW10ge1xuICBjb25zdCBrZXlzID0gbmV3IFNldDxzdHJpbmc+KClcbiAgZm9yIChjb25zdCByZWMgb2YgcmVjb3Jkcy5zbGljZSgwLCAxMDApKSB7XG4gICAgT2JqZWN0LmtleXMoZ2V0UGxhaW5BdHRyaWJ1dGVzKHJlYykpLmZvckVhY2goKGspID0+IGtleXMuYWRkKGspKVxuICB9XG4gIHJldHVybiBbLi4ua2V5c11cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUtleXNGcm9tQXR0cmlidXRlTmFtZXMgKFxuICBrZXlzOiBzdHJpbmdbXSxcbiAgeWVhckZpZWxkSmltdTogc3RyaW5nLFxuICByZWNvcnRlRmllbGRKaW11OiBzdHJpbmdcbik6IHsgeWVhcktleTogc3RyaW5nOyByZWNvcnRlS2V5OiBzdHJpbmcgfSB8IG51bGwge1xuICBjb25zdCByZWNvcnRlS2V5ID0ga2V5cy5maW5kKFxuICAgIChrKSA9PlxuICAgICAgay50b0xvd2VyQ2FzZSgpID09PSByZWNvcnRlRmllbGRKaW11LnRvTG93ZXJDYXNlKCkgfHxcbiAgICAgIG5vcm1hbGl6ZVJlY29ydGVUb2tlbihrKSA9PT0gbm9ybWFsaXplUmVjb3J0ZVRva2VuKHJlY29ydGVGaWVsZEppbXUpXG4gIClcbiAgbGV0IHllYXJLZXkgPSBrZXlzLmZpbmQoKGspID0+IGsudG9Mb3dlckNhc2UoKSA9PT0geWVhckZpZWxkSmltdS50b0xvd2VyQ2FzZSgpKVxuICBpZiAoIXllYXJLZXkpIHtcbiAgICB5ZWFyS2V5ID0ga2V5cy5maW5kKChrKSA9PlxuICAgICAgWUVBUl9OQU1FX1BBVFRFUk5TLnNvbWUoXG4gICAgICAgIChwKSA9PiBrLnRvTG93ZXJDYXNlKCkgPT09IHAgfHwgay50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHApXG4gICAgICApXG4gICAgKVxuICB9XG4gIGlmICgheWVhcktleSB8fCAhcmVjb3J0ZUtleSkgcmV0dXJuIG51bGxcbiAgcmV0dXJuIHsgeWVhcktleSwgcmVjb3J0ZUtleSB9XG59XG5cbi8qKiDDmmx0aW1vIHJlY3Vyc286IGluZmVyZSBjb2x1bmFzIHBlbG9zIG5vbWVzIHJlYWlzIG5vcyBhdHJpYnV0b3MgcmV0b3JuYWRvcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFllYXJTZXJpZXNJbmZlcnJlZCAoXG4gIHJlY29yZHM6IFJlY29yZExpa2VbXSxcbiAgeWVhckZpZWxkSmltdTogc3RyaW5nLFxuICByZWNvcnRlRmllbGRKaW11OiBzdHJpbmdcbik6IFllYXJWYWx1ZVJvd1tdIHtcbiAgY29uc3Qga2V5cyA9IGNvbGxlY3RSZWNvcmRBdHRyaWJ1dGVLZXlzKHJlY29yZHMpXG4gIGNvbnN0IHJlc29sdmVkID0gcmVzb2x2ZUtleXNGcm9tQXR0cmlidXRlTmFtZXMoa2V5cywgeWVhckZpZWxkSmltdSwgcmVjb3J0ZUZpZWxkSmltdSlcbiAgaWYgKCFyZXNvbHZlZCkgcmV0dXJuIFtdXG5cbiAgY29uc3Qgc2VyaWVzOiBZZWFyVmFsdWVSb3dbXSA9IFtdXG4gIGZvciAoY29uc3QgcmVjIG9mIHJlY29yZHMpIHtcbiAgICBjb25zdCBhdHRycyA9IGdldFBsYWluQXR0cmlidXRlcyhyZWMpXG4gICAgY29uc3QgeWVhciA9IHBhcnNlWWVhcihhdHRyc1tyZXNvbHZlZC55ZWFyS2V5XSlcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlTnVtZXJpY1ZhbHVlKGF0dHJzW3Jlc29sdmVkLnJlY29ydGVLZXldKVxuICAgIGlmICh5ZWFyID09IG51bGwgfHwgdmFsdWUgPT0gbnVsbCkgY29udGludWVcbiAgICBzZXJpZXMucHVzaCh7IHllYXIsIHZhbHVlIH0pXG4gIH1cbiAgcmV0dXJuIHNlcmllcy5zb3J0KChhLCBiKSA9PiBhLnllYXIgLSBiLnllYXIpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFllYXJTZXJpZXMgKFxuICByZWNvcmRzOiBSZWNvcmRMaWtlW10sXG4gIHllYXJGaWVsZEppbXU6IHN0cmluZyxcbiAgcmVjb3J0ZUZpZWxkSmltdTogc3RyaW5nLFxuICBmaWVsZHM/OiBJTUZpZWxkU2NoZW1hW11cbik6IFllYXJWYWx1ZVJvd1tdIHtcbiAgY29uc3QgeWVhclJvd3MgPSBidWlsZFllYXJTZXJpZXNZZWFyUm93cyhcbiAgICByZWNvcmRzLFxuICAgIHllYXJGaWVsZEppbXUsXG4gICAgcmVjb3J0ZUZpZWxkSmltdSxcbiAgICBmaWVsZHNcbiAgKVxuICBpZiAoeWVhclJvd3MubGVuZ3RoID4gMCkgcmV0dXJuIHllYXJSb3dzXG5cbiAgaWYgKGZpZWxkcz8ubGVuZ3RoKSB7XG4gICAgY29uc3QgYWx0ID0gYnVpbGRZZWFyU2VyaWVzRnJvbVJlY29ydGVSb3dzKHJlY29yZHMsIHJlY29ydGVGaWVsZEppbXUsIGZpZWxkcylcbiAgICBpZiAoYWx0Lmxlbmd0aCA+IDApIHJldHVybiBhbHRcbiAgfVxuXG4gIHJldHVybiBidWlsZFllYXJTZXJpZXNJbmZlcnJlZChyZWNvcmRzLCB5ZWFyRmllbGRKaW11LCByZWNvcnRlRmllbGRKaW11KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0WWVhcnNSYW5nZVN1bW1hcnkgKHNlcmllczogWWVhclZhbHVlUm93W10pOiBzdHJpbmcgfCBudWxsIHtcbiAgaWYgKCFzZXJpZXMubGVuZ3RoKSByZXR1cm4gbnVsbFxuICBjb25zdCBtaW4gPSBzZXJpZXNbMF0ueWVhclxuICBjb25zdCBtYXggPSBzZXJpZXNbc2VyaWVzLmxlbmd0aCAtIDFdLnllYXJcbiAgY29uc3QgY291bnQgPSBzZXJpZXMubGVuZ3RoXG4gIGlmIChtaW4gPT09IG1heCkgcmV0dXJuIGAke21pbn0gKCR7Y291bnR9IGFubylgXG4gIHJldHVybiBgJHttaW594oCTJHttYXh9ICgke2NvdW50fSBhbm9zKWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzWWVhck91dE9mVHlwaWNhbFJhbmdlICh5ZWFyOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIHllYXIgPCAyMDAxIHx8IHllYXIgPiAyMDI1XG59XG5cbi8qKiBWYXJpYcOnw6NvIHBlcmNlbnR1YWwgZG8gdmFsb3IgaW5pY2lhbCAoYW5vIG1haXMgYW50aWdvKSBwYXJhIG8gZmluYWwgKGFubyBtYWlzIHJlY2VudGUpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbGNQZXJjZW50VmFyaWF0aW9uIChcbiAgdmFsdWVJbmljaWFsOiBudW1iZXIsXG4gIHZhbHVlRmluYWw6IG51bWJlclxuKTogbnVtYmVyIHwgbnVsbCB7XG4gIGlmICghTnVtYmVyLmlzRmluaXRlKHZhbHVlSW5pY2lhbCkgfHwgIU51bWJlci5pc0Zpbml0ZSh2YWx1ZUZpbmFsKSkgcmV0dXJuIG51bGxcbiAgaWYgKHZhbHVlSW5pY2lhbCA9PT0gMCkgcmV0dXJuIG51bGxcbiAgcmV0dXJuICgodmFsdWVGaW5hbCAtIHZhbHVlSW5pY2lhbCkgLyB2YWx1ZUluaWNpYWwpICogMTAwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQZXJjZW50VmFyaWF0aW9uIChwY3Q6IG51bWJlcik6IHN0cmluZyB7XG4gIGNvbnN0IHNpZ24gPSBwY3QgPiAwID8gJysnIDogJydcbiAgcmV0dXJuIGAke3NpZ259JHtwY3QudG9Mb2NhbGVTdHJpbmcoJ3B0LUJSJywge1xuICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDJcbiAgfSl9JWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlRm9yWWVhciAoXG4gIHNlcmllczogWWVhclZhbHVlUm93W10sXG4gIHllYXI6IG51bWJlclxuKTogbnVtYmVyIHwgbnVsbCB7XG4gIGNvbnN0IHJvdyA9IHNlcmllcy5maW5kKChyKSA9PiByLnllYXIgPT09IHllYXIpXG4gIHJldHVybiByb3cgIT0gbnVsbCA/IHJvdy52YWx1ZSA6IG51bGxcbn1cblxuLyoqIFNvbWEgb3MgdmFsb3JlcyBkb3MgYW5vcyBpbmZvcm1hZG9zOyByZXRvcm5hIG51bGwgc2UgYWxndW0gYW5vIG7Do28gdGl2ZXIgZGFkby4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdW1WYWx1ZXNGb3JZZWFycyAoXG4gIHNlcmllczogWWVhclZhbHVlUm93W10sXG4gIHllYXJzOiBudW1iZXJbXVxuKTogbnVtYmVyIHwgbnVsbCB7XG4gIGlmICgheWVhcnMubGVuZ3RoKSByZXR1cm4gbnVsbFxuICBsZXQgc3VtID0gMFxuICBmb3IgKGNvbnN0IHllYXIgb2YgeWVhcnMpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGdldFZhbHVlRm9yWWVhcihzZXJpZXMsIHllYXIpXG4gICAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiBudWxsXG4gICAgc3VtICs9IHZhbHVlXG4gIH1cbiAgcmV0dXJuIHN1bVxufVxuXG4vKiogQW5vcyBkaXNwb27DrXZlaXMgcGFyYSBvIHBlcsOtb2RvIGluaWNpYWwgKGFudGVzIGRvIHBlcsOtb2RvIGZpbmFsLCBzZSBob3V2ZXIpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFllYXJzQWxsb3dlZEZvckluaWNpYWwgKFxuICBhbGxZZWFyczogbnVtYmVyW10sXG4gIHBlcmlvZG9GaW5hbDogbnVtYmVyW11cbik6IG51bWJlcltdIHtcbiAgY29uc3QgYmxvY2tlZCA9IG5ldyBTZXQocGVyaW9kb0ZpbmFsKVxuICBjb25zdCBtYXhGaW5hbCA9IHBlcmlvZG9GaW5hbC5sZW5ndGggPyBNYXRoLm1pbiguLi5wZXJpb2RvRmluYWwpIDogSW5maW5pdHlcbiAgcmV0dXJuIGFsbFllYXJzLmZpbHRlcigoeSkgPT4gIWJsb2NrZWQuaGFzKHkpICYmIHkgPCBtYXhGaW5hbClcbn1cblxuLyoqIEFub3MgZGlzcG9uw612ZWlzIHBhcmEgbyBwZXLDrW9kbyBmaW5hbCAoZGVwb2lzIGRvIHBlcsOtb2RvIGluaWNpYWwsIHNlIGhvdXZlcikuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0WWVhcnNBbGxvd2VkRm9yRmluYWwgKFxuICBhbGxZZWFyczogbnVtYmVyW10sXG4gIHBlcmlvZG9JbmljaWFsOiBudW1iZXJbXVxuKTogbnVtYmVyW10ge1xuICBjb25zdCBibG9ja2VkID0gbmV3IFNldChwZXJpb2RvSW5pY2lhbClcbiAgY29uc3QgbWluSW5pY2lhbCA9IHBlcmlvZG9JbmljaWFsLmxlbmd0aCA/IE1hdGgubWF4KC4uLnBlcmlvZG9JbmljaWFsKSA6IC1JbmZpbml0eVxuICByZXR1cm4gYWxsWWVhcnMuZmlsdGVyKCh5KSA9PiAhYmxvY2tlZC5oYXMoeSkgJiYgeSA+IG1pbkluaWNpYWwpXG59XG5cbi8qKiBNYXJjYS9kZXNtYXJjYSB1bSBhbm8gbWFudGVuZG8gYXBlbmFzIHNlcXXDqm5jaWFzIGNvbnNlY3V0aXZhcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVDb25zZWN1dGl2ZVllYXIgKFxuICBwZXJpb2Q6IG51bWJlcltdLFxuICB5ZWFyOiBudW1iZXJcbik6IHsgbmV4dDogbnVtYmVyW107IHJlamVjdGVkOiBib29sZWFuIH0ge1xuICBpZiAocGVyaW9kLmluY2x1ZGVzKHllYXIpKSB7XG4gICAgcmV0dXJuIHsgbmV4dDogcGVyaW9kLmZpbHRlcigoeSkgPT4geSAhPT0geWVhciksIHJlamVjdGVkOiBmYWxzZSB9XG4gIH1cbiAgY29uc3QgbmV4dCA9IFsuLi5wZXJpb2QsIHllYXJdLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuICBpZiAoIWFyZUNvbnNlY3V0aXZlWWVhcnMobmV4dCkpIHtcbiAgICByZXR1cm4geyBuZXh0OiBwZXJpb2QsIHJlamVjdGVkOiB0cnVlIH1cbiAgfVxuICByZXR1cm4geyBuZXh0LCByZWplY3RlZDogZmFsc2UgfVxufVxuXG4vKiogVmVyaWZpY2Egc2Ugb3MgYW5vcyBmb3JtYW0gdW1hIHNlcXXDqm5jaWEgY29uc2VjdXRpdmEgKGV4LjogMjAxMCwgMjAxMSwgMjAxMikuICovXG5leHBvcnQgZnVuY3Rpb24gYXJlQ29uc2VjdXRpdmVZZWFycyAoeWVhcnM6IG51bWJlcltdKTogYm9vbGVhbiB7XG4gIGlmICh5ZWFycy5sZW5ndGggPD0gMSkgcmV0dXJuIHRydWVcbiAgY29uc3Qgc29ydGVkID0gWy4uLnllYXJzXS5zb3J0KChhLCBiKSA9PiBhIC0gYilcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBzb3J0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc29ydGVkW2ldIC0gc29ydGVkW2kgLSAxXSAhPT0gMSkgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuLyoqIFLDs3R1bG8gY29tcGFjdG8gcGFyYSB1bSBvdSBtYWlzIGFub3MgKGV4LjogXCIyMDEwXCIgb3UgXCIyMDEw4oCTMjAxMiAoMyBhbm9zKVwiKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQZXJpb2RMYWJlbCAoeWVhcnM6IG51bWJlcltdKTogc3RyaW5nIHtcbiAgY29uc3Qgc29ydGVkID0gWy4uLnllYXJzXS5zb3J0KChhLCBiKSA9PiBhIC0gYilcbiAgaWYgKCFzb3J0ZWQubGVuZ3RoKSByZXR1cm4gJydcbiAgaWYgKHNvcnRlZC5sZW5ndGggPT09IDEpIHJldHVybiBTdHJpbmcoc29ydGVkWzBdKVxuICByZXR1cm4gYCR7c29ydGVkWzBdfeKAkyR7c29ydGVkW3NvcnRlZC5sZW5ndGggLSAxXX0gKCR7c29ydGVkLmxlbmd0aH0gYW5vcylgXG59XG5cbi8qKiBJbnRlcnZhbG8gZGUgYW5vcyBzZW0gY29udGFnZW0gKGV4LjogXCIyMDEwXCIgb3UgXCIyMDEw4oCTMjAxMlwiKSDigJQgdXNvIGVtIHJlc3VsdGFkb3MuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UGVyaW9kUmFuZ2VMYWJlbCAoeWVhcnM6IG51bWJlcltdKTogc3RyaW5nIHtcbiAgY29uc3Qgc29ydGVkID0gWy4uLnllYXJzXS5zb3J0KChhLCBiKSA9PiBhIC0gYilcbiAgaWYgKCFzb3J0ZWQubGVuZ3RoKSByZXR1cm4gJydcbiAgaWYgKHNvcnRlZC5sZW5ndGggPT09IDEpIHJldHVybiBTdHJpbmcoc29ydGVkWzBdKVxuICByZXR1cm4gYCR7c29ydGVkWzBdfeKAkyR7c29ydGVkW3NvcnRlZC5sZW5ndGggLSAxXX1gXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmFyaWF0aW9uUmVzdWx0IHtcbiAgcGN0OiBudW1iZXJcbiAgdmFsdWVJbmljaWFsOiBudW1iZXJcbiAgdmFsdWVGaW5hbDogbnVtYmVyXG4gIHllYXJzSW5pY2lhbDogbnVtYmVyW11cbiAgeWVhcnNGaW5hbDogbnVtYmVyW11cbn1cblxuZXhwb3J0IHR5cGUgUGVyaW9kVmFyaWF0aW9uT3V0Y29tZSA9XG4gIHwgeyBvazogdHJ1ZTsgZGF0YTogVmFyaWF0aW9uUmVzdWx0IH1cbiAgfCB7IG9rOiBmYWxzZTsgbWVzc2FnZTogc3RyaW5nIH1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVQZXJpb2RWYXJpYXRpb24gKFxuICBzZXJpZXM6IFllYXJWYWx1ZVJvd1tdLFxuICBwZXJpb2RvSW5pY2lhbDogbnVtYmVyW10sXG4gIHBlcmlvZG9GaW5hbDogbnVtYmVyW11cbik6IFBlcmlvZFZhcmlhdGlvbk91dGNvbWUge1xuICBjb25zdCBpbmkgPSBbLi4ucGVyaW9kb0luaWNpYWxdLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuICBjb25zdCBmaW4gPSBbLi4ucGVyaW9kb0ZpbmFsXS5zb3J0KChhLCBiKSA9PiBhIC0gYilcblxuICBpZiAoIWluaS5sZW5ndGggfHwgIWZpbi5sZW5ndGgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogJ1NlbGVjaW9uZSBwZWxvIG1lbm9zIHVtIGFubyBlbSBjYWRhIHBlcsOtb2RvLidcbiAgICB9XG4gIH1cblxuICBpZiAoaW5pLmxlbmd0aCAhPT0gZmluLmxlbmd0aCkge1xuICAgIHJldHVybiB7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBtZXNzYWdlOlxuICAgICAgICAnTyBwZXLDrW9kbyBpbmljaWFsIGUgbyBwZXLDrW9kbyBmaW5hbCBkZXZlbSB0ZXIgYSBtZXNtYSBxdWFudGlkYWRlIGRlIGFub3MuJ1xuICAgIH1cbiAgfVxuXG4gIGlmICghYXJlQ29uc2VjdXRpdmVZZWFycyhpbmkpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6ICdPcyBhbm9zIGRvIHBlcsOtb2RvIGluaWNpYWwgZGV2ZW0gc2VyIGNvbnNlY3V0aXZvcy4nXG4gICAgfVxuICB9XG5cbiAgaWYgKCFhcmVDb25zZWN1dGl2ZVllYXJzKGZpbikpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogJ09zIGFub3MgZG8gcGVyw61vZG8gZmluYWwgZGV2ZW0gc2VyIGNvbnNlY3V0aXZvcy4nXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaW5pU2V0ID0gbmV3IFNldChpbmkpXG4gIGlmIChmaW4uc29tZSgoeSkgPT4gaW5pU2V0Lmhhcyh5KSkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogJ1VtIGFubyBuw6NvIHBvZGUgcGVydGVuY2VyIGFvcyBkb2lzIHBlcsOtb2RvcyBhbyBtZXNtbyB0ZW1wby4nXG4gICAgfVxuICB9XG5cbiAgY29uc3QgbWF4SW5pY2lhbCA9IGluaVtpbmkubGVuZ3RoIC0gMV1cbiAgY29uc3QgbWluRmluYWwgPSBmaW5bMF1cbiAgaWYgKG1heEluaWNpYWwgPj0gbWluRmluYWwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogJ08gcGVyw61vZG8gZmluYWwgZGV2ZSBzZXIgcG9zdGVyaW9yIGFvIHBlcsOtb2RvIGluaWNpYWwuJ1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHZhbHVlSW5pY2lhbCA9IHN1bVZhbHVlc0ZvclllYXJzKHNlcmllcywgaW5pKVxuICBjb25zdCB2YWx1ZUZpbmFsID0gc3VtVmFsdWVzRm9yWWVhcnMoc2VyaWVzLCBmaW4pXG5cbiAgaWYgKHZhbHVlSW5pY2lhbCA9PSBudWxsIHx8IHZhbHVlRmluYWwgPT0gbnVsbCkge1xuICAgIHJldHVybiB7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBtZXNzYWdlOlxuICAgICAgICAnVW0gb3UgbWFpcyBhbm9zIHNlbGVjaW9uYWRvcyBuw6NvIHBvc3N1ZW0gZGFkbyBwYXJhIGVzdGUgcmVjb3J0ZS4nXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcGN0ID0gY2FsY1BlcmNlbnRWYXJpYXRpb24odmFsdWVJbmljaWFsLCB2YWx1ZUZpbmFsKVxuICBpZiAocGN0ID09IG51bGwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTpcbiAgICAgICAgJ0Egc29tYSBkbyBwZXLDrW9kbyBpbmljaWFsIMOpIHplcm87IG7Do28gw6kgcG9zc8OtdmVsIGNhbGN1bGFyIGEgdmFyaWHDp8OjbyBwZXJjZW50dWFsLidcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG9rOiB0cnVlLFxuICAgIGRhdGE6IHtcbiAgICAgIHBjdCxcbiAgICAgIHZhbHVlSW5pY2lhbCxcbiAgICAgIHZhbHVlRmluYWwsXG4gICAgICB5ZWFyc0luaWNpYWw6IGluaSxcbiAgICAgIHllYXJzRmluYWw6IGZpblxuICAgIH1cbiAgfVxufVxuXG4vKiogQ29tcGFyYcOnw6NvIGVudHJlIGRvaXMgYW5vcyDDum5pY29zIChhdGFsaG8gcGFyYSBwZXLDrW9kb3MgZGUgdW0gYW5vKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlVmFyaWF0aW9uIChcbiAgc2VyaWVzOiBZZWFyVmFsdWVSb3dbXSxcbiAgYW5vSW5pY2lhbDogbnVtYmVyLFxuICBhbm9GaW5hbDogbnVtYmVyXG4pOiBQZXJpb2RWYXJpYXRpb25PdXRjb21lIHtcbiAgcmV0dXJuIGNvbXB1dGVQZXJpb2RWYXJpYXRpb24oc2VyaWVzLCBbYW5vSW5pY2lhbF0sIFthbm9GaW5hbF0pXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHtcclxuICBSZWFjdCxcclxuICBqc3gsXHJcbiAgdHlwZSBBbGxXaWRnZXRQcm9wcyxcclxuICBEYXRhU291cmNlQ29tcG9uZW50LFxyXG4gIFF1ZXJ5U2NvcGVcclxufSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IExvYWRpbmcsIExhYmVsLCBCdXR0b24gfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgdHlwZSB7IElNQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xyXG5pbXBvcnQge1xyXG4gIExBQkVMX1BFUklPRE9fRklOQUwsXHJcbiAgTEFCRUxfUEVSSU9ET19JTklDSUFMLFxyXG4gIEhJTlRfUEVSSU9EX1JVTEVTLFxyXG4gIE1TR19OT1RfQ09ORklHVVJFRCxcclxuICBNU0dfTk9fREFUQSxcclxuICBQTEFDRUhPTERFUl9QRVJJT0RPX0ZJTkFMLFxyXG4gIFBMQUNFSE9MREVSX1BFUklPRE9fSU5JQ0lBTCxcclxuICBQUk9ERVNfVEFCTEVfUVVFUllcclxufSBmcm9tICcuLi9jb25zdGFudHMnXHJcbmltcG9ydCB7IFZhcmlhdGlvblJlc3VsdFBhbmVsIH0gZnJvbSAnLi9jb21wb25lbnRzL3ZhcmlhdGlvbi1yZXN1bHQnXHJcbmltcG9ydCB7IHVzZVByb2Rlc1NlcmllcyB9IGZyb20gJy4vaG9va3MvdXNlLXByb2Rlcy1zZXJpZXMnXHJcbmltcG9ydCB7IHVzZVBlcmlvZFNlbGVjdGlvbiB9IGZyb20gJy4vaG9va3MvdXNlLXBlcmlvZC1zZWxlY3Rpb24nXHJcbmltcG9ydCB7IHdpZGdldFN0eWxlcyB9IGZyb20gJy4vc3R5bGVzJ1xyXG5pbXBvcnQgeyBZZWFyUGVyaW9kUGlja2VyIH0gZnJvbSAnLi95ZWFyLXBlcmlvZC1waWNrZXInXHJcblxyXG5jb25zdCBXaWRnZXQgPSAocHJvcHM6IEFsbFdpZGdldFByb3BzPElNQ29uZmlnPikgPT4ge1xyXG4gIGNvbnN0IHVzZURzID0gcHJvcHMudXNlRGF0YVNvdXJjZXM/LlswXVxyXG4gIGNvbnN0IHllYXJGaWVsZCA9IHByb3BzLmNvbmZpZz8ueWVhckZpZWxkXHJcbiAgY29uc3QgcmVjb3J0ZUZpZWxkID0gcHJvcHMuY29uZmlnPy5yZWNvcnRlRmllbGRcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgc2VyaWVzLFxyXG4gICAgbG9hZGluZyxcclxuICAgIGxvYWRpbmdNZXNzYWdlLFxyXG4gICAgZXJyb3IsXHJcbiAgICBoYW5kbGVEYXRhU291cmNlUmVhZHksXHJcbiAgICBoYW5kbGVEYXRhU291cmNlSW5mb0NoYW5nZSxcclxuICAgIGFwcGx5U2NoZW1hLFxyXG4gICAgd2FpdGluZ0ZvckxheWVyXHJcbiAgfSA9IHVzZVByb2Rlc1Nlcmllcyh7IHJlY29ydGVGaWVsZCwgeWVhckZpZWxkLCB3aWRnZXRJZDogcHJvcHMuaWQgfSlcclxuXHJcbiAgY29uc3QgYXZhaWxhYmxlWWVhcnMgPSBSZWFjdC51c2VNZW1vKFxyXG4gICAgKCkgPT4gc2VyaWVzLm1hcCgocikgPT4gci55ZWFyKSxcclxuICAgIFtzZXJpZXNdXHJcbiAgKVxyXG5cclxuICBjb25zdCB7XHJcbiAgICBwZXJpb2RvSW5pY2lhbCxcclxuICAgIHBlcmlvZG9GaW5hbCxcclxuICAgIHllYXJzRm9ySW5pY2lhbCxcclxuICAgIHllYXJzRm9yRmluYWwsXHJcbiAgICBoaW50SW5pY2lhbCxcclxuICAgIGhpbnRGaW5hbCxcclxuICAgIHZhcmlhdGlvbixcclxuICAgIGhhc1BlcmlvZFNlbGVjdGlvbixcclxuICAgIGNsZWFyUGVyaW9kU2VsZWN0aW9uLFxyXG4gICAgaGFuZGxlUGVyaW9kb0luaWNpYWxDaGFuZ2UsXHJcbiAgICBoYW5kbGVQZXJpb2RvRmluYWxDaGFuZ2UsXHJcbiAgICByZWplY3RQZXJpb2RvSW5pY2lhbCxcclxuICAgIHJlamVjdFBlcmlvZG9GaW5hbFxyXG4gIH0gPSB1c2VQZXJpb2RTZWxlY3Rpb24oc2VyaWVzLCBhdmFpbGFibGVZZWFycywgcmVjb3J0ZUZpZWxkKVxyXG5cclxuICBjb25zdCBpc0NvbmZpZ3VyZWQgPSBCb29sZWFuKHVzZURzICYmIHJlY29ydGVGaWVsZClcclxuICBjb25zdCBzaG93Rm9ybSA9XHJcbiAgICBpc0NvbmZpZ3VyZWQgJiYgIWxvYWRpbmcgJiYgIXdhaXRpbmdGb3JMYXllciAmJiAhZXJyb3IgJiYgc2VyaWVzLmxlbmd0aCA+IDBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbXBhcmFkb3ItcHJvZGVzIGppbXUtd2lkZ2V0XCIgY3NzPXt3aWRnZXRTdHlsZXN9PlxyXG4gICAgICB7dXNlRHMgJiYgKFxyXG4gICAgICAgIDxEYXRhU291cmNlQ29tcG9uZW50XHJcbiAgICAgICAgICB1c2VEYXRhU291cmNlPXt1c2VEc31cclxuICAgICAgICAgIHdpZGdldElkPXtwcm9wcy5pZH1cclxuICAgICAgICAgIHF1ZXJ5PXtQUk9ERVNfVEFCTEVfUVVFUll9XHJcbiAgICAgICAgICBxdWVyeVNjb3BlPXtRdWVyeVNjb3BlLkluQWxsRGF0YX1cclxuICAgICAgICAgIHF1ZXJ5QWxsXHJcbiAgICAgICAgICBvbkRhdGFTb3VyY2VDcmVhdGVkPXtoYW5kbGVEYXRhU291cmNlUmVhZHl9XHJcbiAgICAgICAgICBvbkRhdGFTb3VyY2VTY2hlbWFDaGFuZ2U9eyhzY2hlbWEpID0+IHtcclxuICAgICAgICAgICAgYXBwbHlTY2hlbWEoc2NoZW1hKVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uRGF0YVNvdXJjZUluZm9DaGFuZ2U9e2hhbmRsZURhdGFTb3VyY2VJbmZvQ2hhbmdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7IWlzQ29uZmlndXJlZCAmJiA8cD57TVNHX05PVF9DT05GSUdVUkVEfTwvcD59XHJcblxyXG4gICAgICB7aXNDb25maWd1cmVkICYmIChsb2FkaW5nIHx8IHdhaXRpbmdGb3JMYXllcikgJiYgKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8TG9hZGluZyAvPlxyXG4gICAgICAgICAge2xvYWRpbmdNZXNzYWdlICYmIChcclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29tcGFyYWRvci1oaW50XCI+e2xvYWRpbmdNZXNzYWdlfTwvcD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7aXNDb25maWd1cmVkICYmIGVycm9yICYmIDxwIGNsYXNzTmFtZT1cImNvbXBhcmFkb3ItZXJyb3JcIj57ZXJyb3J9PC9wPn1cclxuXHJcbiAgICAgIHtpc0NvbmZpZ3VyZWQgJiZcclxuICAgICAgICAhbG9hZGluZyAmJlxyXG4gICAgICAgICF3YWl0aW5nRm9yTGF5ZXIgJiZcclxuICAgICAgICAhZXJyb3IgJiZcclxuICAgICAgICBzZXJpZXMubGVuZ3RoID09PSAwICYmIDxwPntNU0dfTk9fREFUQX08L3A+fVxyXG5cclxuICAgICAge3Nob3dGb3JtICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhcmFkb3ItZm9ybVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYXJhZG9yLWZpZWxkLXJvd1wiPlxyXG4gICAgICAgICAgICA8TGFiZWw+e0xBQkVMX1BFUklPRE9fSU5JQ0lBTH08L0xhYmVsPlxyXG4gICAgICAgICAgICA8WWVhclBlcmlvZFBpY2tlclxyXG4gICAgICAgICAgICAgIGF2YWlsYWJsZVllYXJzPXt5ZWFyc0ZvckluaWNpYWx9XHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWRZZWFycz17cGVyaW9kb0luaWNpYWx9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1BMQUNFSE9MREVSX1BFUklPRE9fSU5JQ0lBTH1cclxuICAgICAgICAgICAgICBoaW50PXtoaW50SW5pY2lhbH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUGVyaW9kb0luaWNpYWxDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgb25SZWplY3RlZFNlbGVjdGlvbj17cmVqZWN0UGVyaW9kb0luaWNpYWx9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhcmFkb3ItZmllbGQtcm93XCI+XHJcbiAgICAgICAgICAgIDxMYWJlbD57TEFCRUxfUEVSSU9ET19GSU5BTH08L0xhYmVsPlxyXG4gICAgICAgICAgICA8WWVhclBlcmlvZFBpY2tlclxyXG4gICAgICAgICAgICAgIGF2YWlsYWJsZVllYXJzPXt5ZWFyc0ZvckZpbmFsfVxyXG4gICAgICAgICAgICAgIHNlbGVjdGVkWWVhcnM9e3BlcmlvZG9GaW5hbH1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17UExBQ0VIT0xERVJfUEVSSU9ET19GSU5BTH1cclxuICAgICAgICAgICAgICBoaW50PXtoaW50RmluYWx9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVBlcmlvZG9GaW5hbENoYW5nZX1cclxuICAgICAgICAgICAgICBvblJlamVjdGVkU2VsZWN0aW9uPXtyZWplY3RQZXJpb2RvRmluYWx9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFyYWRvci1oaW50XCI+e0hJTlRfUEVSSU9EX1JVTEVTfTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYXJhZG9yLWFjdGlvbnNcIj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29tcGFyYWRvci1idG4tbGltcGFyXCJcclxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWhhc1BlcmlvZFNlbGVjdGlvbn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtjbGVhclBlcmlvZFNlbGVjdGlvbn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIExpbXBhclxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHt2YXJpYXRpb24gIT0gbnVsbCAmJiB2YXJpYXRpb24ub2sgPT09IGZhbHNlICYmIChcclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29tcGFyYWRvci1lcnJvciBjb21wYXJhZG9yLWVycm9yLS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgIHt2YXJpYXRpb24ubWVzc2FnZX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICB7dmFyaWF0aW9uICE9IG51bGwgJiYgdmFyaWF0aW9uLm9rID09PSB0cnVlICYmIChcclxuICAgICAgICAgICAgPFZhcmlhdGlvblJlc3VsdFBhbmVsIGRhdGE9e3ZhcmlhdGlvbi5kYXRhfSAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0XHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=