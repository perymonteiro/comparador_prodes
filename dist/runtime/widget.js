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
/* harmony export */   MSG_LOAD_FAILED: () => (/* binding */ MSG_LOAD_FAILED),
/* harmony export */   MSG_NOT_CONFIGURED: () => (/* binding */ MSG_NOT_CONFIGURED),
/* harmony export */   MSG_NO_DATA: () => (/* binding */ MSG_NO_DATA),
/* harmony export */   PLACEHOLDER_PERIODO_FINAL: () => (/* binding */ PLACEHOLDER_PERIODO_FINAL),
/* harmony export */   PLACEHOLDER_PERIODO_INICIAL: () => (/* binding */ PLACEHOLDER_PERIODO_INICIAL)
/* harmony export */ });
const AREA_UNIT = 'km²';
const LABEL_PERIODO_INICIAL = 'Ano inicial ou período inicial';
const LABEL_PERIODO_FINAL = 'Ano final ou período final';
const MSG_NOT_CONFIGURED = 'Esta ferramenta ainda não foi configurada pelo autor da experiência.';
const MSG_NO_DATA = 'Não há dados disponíveis para este recorte.';
const MSG_LOAD_FAILED = 'Não foi possível carregar os dados da camada.';
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




function useProdesSeries({ recorteField, yearField }) {
    const [dsRef, setDsRef] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(null);
    const [dsStatus, setDsStatus] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(undefined);
    const [fieldList, setFieldList] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState([]);
    const [series, setSeries] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState([]);
    const [loading, setLoading] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const [error, setError] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(null);
    const effectiveYearField = yearField !== null && yearField !== void 0 ? yearField : (0,_utils_prodes_table__WEBPACK_IMPORTED_MODULE_1__.detectYearField)(fieldList);
    const applySchema = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback((schema) => {
        setFieldList((0,_utils_prodes_table__WEBPACK_IMPORTED_MODULE_1__.schemaToFieldList)(schema));
    }, []);
    const handleDataSourceReady = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback((ds) => {
        setDsRef(ds);
        const schema = (0,_utils_data_source__WEBPACK_IMPORTED_MODULE_2__.getDataSourceSchema)(ds);
        if (schema)
            applySchema(schema);
    }, [applySchema]);
    const loadSeries = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback(() => __awaiter(this, void 0, void 0, function* () {
        const main = (0,_utils_data_source__WEBPACK_IMPORTED_MODULE_2__.getMainDataSource)(dsRef);
        if (!main || !effectiveYearField || !recorteField) {
            setSeries([]);
            return;
        }
        if (!(0,_utils_data_source__WEBPACK_IMPORTED_MODULE_2__.isQueryableStatus)(dsStatus))
            return;
        setLoading(true);
        setError(null);
        try {
            let records = yield (0,_utils_prodes_table__WEBPACK_IMPORTED_MODULE_1__.fetchLayerRecords)(main);
            let built = (0,_utils_prodes_table__WEBPACK_IMPORTED_MODULE_1__.buildYearSeries)(records, effectiveYearField, recorteField, fieldList);
            if (records.length > 0 && built.length === 0) {
                const forced = yield (0,_utils_prodes_table__WEBPACK_IMPORTED_MODULE_1__.fetchLayerRecords)(main, { forceQuery: true });
                if (forced.length) {
                    records = forced;
                    built = (0,_utils_prodes_table__WEBPACK_IMPORTED_MODULE_1__.buildYearSeries)(forced, effectiveYearField, recorteField, fieldList);
                }
            }
            setSeries(built);
            if (records.length > 0 && built.length === 0) {
                setError(_constants__WEBPACK_IMPORTED_MODULE_3__.MSG_EXTRACT_FAILED);
            }
        }
        catch (_a) {
            setError(_constants__WEBPACK_IMPORTED_MODULE_3__.MSG_LOAD_FAILED);
            setSeries([]);
        }
        finally {
            setLoading(false);
        }
    }), [dsRef, dsStatus, effectiveYearField, fieldList, recorteField]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        if (!recorteField || !effectiveYearField || !dsRef)
            return;
        if (!(0,_utils_data_source__WEBPACK_IMPORTED_MODULE_2__.isQueryableStatus)(dsStatus))
            return;
        loadSeries();
    }, [recorteField, effectiveYearField, dsRef, dsStatus, fieldList, loadSeries]);
    const waitingForLayer = !dsRef || dsStatus === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.Loading;
    return {
        series,
        loading,
        error,
        handleDataSourceReady,
        applySchema,
        setDsStatus,
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
/* harmony export */   getDataSourceSchema: () => (/* binding */ getDataSourceSchema),
/* harmony export */   getMainDataSource: () => (/* binding */ getMainDataSource),
/* harmony export */   isQueryableStatus: () => (/* binding */ isQueryableStatus)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

const isQueryableStatus = (status) => status === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.Loaded ||
    status === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.Unloaded ||
    status === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.NotReady;
const getMainDataSource = (ds) => {
    var _a, _b;
    if (!ds)
        return null;
    const main = (_b = (_a = ds).getMainDataSource) === null || _b === void 0 ? void 0 : _b.call(_a);
    return main !== null && main !== void 0 ? main : ds;
};
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
/* harmony export */   buildYearSeries: () => (/* binding */ buildYearSeries),
/* harmony export */   buildYearSeriesFromRecorteRows: () => (/* binding */ buildYearSeriesFromRecorteRows),
/* harmony export */   calcPercentVariation: () => (/* binding */ calcPercentVariation),
/* harmony export */   computePeriodVariation: () => (/* binding */ computePeriodVariation),
/* harmony export */   computeVariation: () => (/* binding */ computeVariation),
/* harmony export */   detectYearField: () => (/* binding */ detectYearField),
/* harmony export */   fetchLayerRecords: () => (/* binding */ fetchLayerRecords),
/* harmony export */   findFieldByJimuName: () => (/* binding */ findFieldByJimuName),
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
function parseYear(value) {
    if (value instanceof Date && !Number.isNaN(value.getTime())) {
        return value.getFullYear();
    }
    if (typeof value === 'number' && Number.isFinite(value))
        return Math.trunc(value);
    if (typeof value === 'string') {
        const s = value.trim();
        if (!s)
            return null;
        const n = Number(s);
        if (Number.isFinite(n))
            return Math.trunc(n);
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
        merge(data === null || data === void 0 ? void 0 : data.attributes);
        merge((_a = data === null || data === void 0 ? void 0 : data.feature) === null || _a === void 0 ? void 0 : _a.attributes);
    }
    if ('feature' in rec && ((_b = rec.feature) === null || _b === void 0 ? void 0 : _b.attributes)) {
        merge(rec.feature.attributes);
    }
    if ('attributes' in rec && rec.attributes) {
        merge(rec.attributes);
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
    const attrs = getPlainAttributes(rec);
    return readAttributeFlexible(attrs, field, fallbackJimuName);
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
const queryParams = {
    outFields: ['*'],
    returnGeometry: false,
    pageSize: 2000
};
function recordsAreReadable(records) {
    return records.length > 0 && records.some(recordHasReadableData);
}
function queryAllRecords(ds) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        if (typeof (ds === null || ds === void 0 ? void 0 : ds.loadAll) === 'function') {
            try {
                const records = yield ds.loadAll(queryParams);
                if (records === null || records === void 0 ? void 0 : records.length)
                    return records;
            }
            catch (_b) {
                // tenta query abaixo
            }
        }
        if (typeof (ds === null || ds === void 0 ? void 0 : ds.query) === 'function') {
            try {
                const result = yield ds.query(queryParams);
                return (_a = result === null || result === void 0 ? void 0 : result.records) !== null && _a !== void 0 ? _a : [];
            }
            catch (_c) {
                return [];
            }
        }
        return [];
    });
}
/** Carrega todos os registros da camada (tabela ano × recortes). */
function fetchLayerRecords(dataSource, options) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d;
        const ds = dataSource;
        const cached = (_d = (_b = (_a = ds.getAllLoadedRecords) === null || _a === void 0 ? void 0 : _a.call(ds)) !== null && _b !== void 0 ? _b : (_c = ds.getRecords) === null || _c === void 0 ? void 0 : _c.call(ds)) !== null && _d !== void 0 ? _d : [];
        if (!(options === null || options === void 0 ? void 0 : options.forceQuery) && recordsAreReadable(cached)) {
            return cached;
        }
        const queried = yield queryAllRecords(ds);
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
function buildYearSeries(records, yearFieldJimu, recorteFieldJimu, fields) {
    const yearRows = buildYearSeriesYearRows(records, yearFieldJimu, recorteFieldJimu, fields);
    if (yearRows.length > 0)
        return yearRows;
    if (fields === null || fields === void 0 ? void 0 : fields.length) {
        return buildYearSeriesFromRecorteRows(records, recorteFieldJimu, fields);
    }
    return yearRows;
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
    const { series, loading, error, handleDataSourceReady, applySchema, setDsStatus, waitingForLayer } = (0,_hooks_use_prodes_series__WEBPACK_IMPORTED_MODULE_4__.useProdesSeries)({ recorteField, yearField });
    const availableYears = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => series.map((r) => r.year), [series]);
    const { periodoInicial, periodoFinal, yearsForInicial, yearsForFinal, hintInicial, hintFinal, variation, hasPeriodSelection, clearPeriodSelection, handlePeriodoInicialChange, handlePeriodoFinalChange, rejectPeriodoInicial, rejectPeriodoFinal } = (0,_hooks_use_period_selection__WEBPACK_IMPORTED_MODULE_5__.usePeriodSelection)(series, availableYears, recorteField);
    const isConfigured = Boolean(useDs && recorteField);
    const showForm = isConfigured && !loading && !waitingForLayer && !error && series.length > 0;
    if (!isConfigured) {
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-comparador-prodes jimu-widget", css: _styles__WEBPACK_IMPORTED_MODULE_6__.widgetStyles },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", null, _constants__WEBPACK_IMPORTED_MODULE_2__.MSG_NOT_CONFIGURED)));
    }
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-comparador-prodes jimu-widget", css: _styles__WEBPACK_IMPORTED_MODULE_6__.widgetStyles },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceComponent, { useDataSource: useDs, widgetId: props.id, onDataSourceCreated: handleDataSourceReady, onDataSourceSchemaChange: applySchema, onDataSourceInfoChange: (info) => setDsStatus(info === null || info === void 0 ? void 0 : info.status) }),
        (loading || waitingForLayer) && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Loading, null),
        error && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "comparador-error" }, error),
        !loading && !waitingForLayer && !error && series.length === 0 && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", null, _constants__WEBPACK_IMPORTED_MODULE_2__.MSG_NO_DATA)),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sTUFBTSxTQUFTLEdBQUcsS0FBSztBQUV2QixNQUFNLHFCQUFxQixHQUFHLGdDQUFnQztBQUM5RCxNQUFNLG1CQUFtQixHQUFHLDRCQUE0QjtBQUV4RCxNQUFNLGtCQUFrQixHQUM3QixzRUFBc0U7QUFFakUsTUFBTSxXQUFXLEdBQUcsNkNBQTZDO0FBRWpFLE1BQU0sZUFBZSxHQUFHLCtDQUErQztBQUV2RSxNQUFNLGtCQUFrQixHQUM3Qix1RkFBdUY7SUFDdkYseUdBQXlHO0lBQ3pHLHNEQUFzRDtBQUVqRCxNQUFNLGdCQUFnQixHQUFHLDhDQUE4QztBQUV2RSxNQUFNLGlCQUFpQixHQUM1QiwrRkFBK0Y7QUFFMUYsTUFBTSwyQkFBMkIsR0FBRywwQ0FBMEM7QUFDOUUsTUFBTSx5QkFBeUIsR0FBRyx3Q0FBd0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QmpGLGVBQWU7QUFDdUI7QUFLTDtBQUNnQztBQU0xRCxNQUFNLG9CQUFvQixHQUFHLENBQUMsRUFBRSxJQUFJLEVBQXdCLEVBQUUsRUFBRTtJQUNyRSxNQUFNLElBQUksR0FBRywrREFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBRXZDLE9BQU8sQ0FDTCx3REFBSyxTQUFTLEVBQUMsbUJBQW1CO1FBQ2hDLHdEQUFLLFNBQVMsRUFBQyx5QkFBeUI7O1lBRXJDLDJFQUFzQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7O1lBQUksR0FBRztZQUNoRCwyRUFBc0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUNwQztRQUNOLHdEQUFLLFNBQVMsRUFBRSxvREFBb0QsSUFBSSxFQUFFLElBQ3ZFLDJFQUFzQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FDN0I7UUFDTix3REFBSyxTQUFTLEVBQUMsMEJB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dEQ7WUFFTix3REFBSyxTQUFTLEVBQUMsb0JBQW9CO2dCQUNqQywrQ0FBQywyQ0FBTSxJQUNMLElBQUksRUFBQyxJQUFJLEVBQ1QsSUFBSSxFQUFDLFdBQVcsRUFDaEIsU0FBUyxFQUFDLHVCQUF1QixFQUNqQyxRQUFRLEVBQUUsQ0FBQyxrQkFBa0IsRUFDN0IsT0FBTyxFQUFFLG9CQUFvQixhQUd0QixDQUNMO1lBRUwsU0FBUyxJQUFJLElBQUksSUFBSSxTQUFTLENBQUMsRUFBRSxLQUFLLEtBQUssSUFBSSxDQUM5QyxzREFBRyxTQUFTLEVBQUMsMENBQTBDLElBQ3BELFNBQVMsQ0FBQyxPQUFPLENBQ2hCLENBQ0w7WUFFQSxTQUFTLElBQUksSUFBSSxJQUFJLFNBQVMsQ0FBQyxFQUFFLEtBQUssSUFBSSxJQUFJLENBQzdDLCtDQUFDLDhFQUFvQixJQUFDLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSSxHQUFJLENBQy9DLENBQ0csQ0FDUCxDQUNHLENBQ1A7QUFDSCxDQUFDO0FBRUQsaUVBQWUsTUFBTTtBQUViLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2NvbXBhcmFkb3JfcHJvZGVzL3NyYy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2NvbXBhcmFkb3JfcHJvZGVzL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvdmFyaWF0aW9uLXJlc3VsdC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2NvbXBhcmFkb3JfcHJvZGVzL3NyYy9ydW50aW1lL2hvb2tzL3VzZS1wZXJpb2Qtc2VsZWN0aW9uLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9zcmMvcnVudGltZS9ob29rcy91c2UtcHJvZGVzLXNlcmllcy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY29tcGFyYWRvcl9wcm9kZXMvc3JjL3J1bnRpbWUvc3R5bGVzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9zcmMvcnVudGltZS95ZWFyLXBlcmlvZC1waWNrZXIudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9zcmMvdXRpbHMvZGF0YS1zb3VyY2UudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2NvbXBhcmFkb3JfcHJvZGVzL3NyYy91dGlscy9mb3JtYXQudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2NvbXBhcmFkb3JfcHJvZGVzL3NyYy91dGlscy9wcm9kZXMtdGFibGUudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2NvbXBhcmFkb3JfcHJvZGVzL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFSRUFfVU5JVCA9ICdrbcKyJ1xuXG5leHBvcnQgY29uc3QgTEFCRUxfUEVSSU9ET19JTklDSUFMID0gJ0FubyBpbmljaWFsIG91IHBlcsOtb2RvIGluaWNpYWwnXG5leHBvcnQgY29uc3QgTEFCRUxfUEVSSU9ET19GSU5BTCA9ICdBbm8gZmluYWwgb3UgcGVyw61vZG8gZmluYWwnXG5cbmV4cG9ydCBjb25zdCBNU0dfTk9UX0NPTkZJR1VSRUQgPVxuICAnRXN0YSBmZXJyYW1lbnRhIGFpbmRhIG7Do28gZm9pIGNvbmZpZ3VyYWRhIHBlbG8gYXV0b3IgZGEgZXhwZXJpw6puY2lhLidcblxuZXhwb3J0IGNvbnN0IE1TR19OT19EQVRBID0gJ07Do28gaMOhIGRhZG9zIGRpc3BvbsOtdmVpcyBwYXJhIGVzdGUgcmVjb3J0ZS4nXG5cbmV4cG9ydCBjb25zdCBNU0dfTE9BRF9GQUlMRUQgPSAnTsOjbyBmb2kgcG9zc8OtdmVsIGNhcnJlZ2FyIG9zIGRhZG9zIGRhIGNhbWFkYS4nXG5cbmV4cG9ydCBjb25zdCBNU0dfRVhUUkFDVF9GQUlMRUQgPVxuICAnUmVnaXN0cm9zIGVuY29udHJhZG9zLCBtYXMgbsOjbyBmb2kgcG9zc8OtdmVsIGV4dHJhaXIgYW5vIGUgdmFsb3JlcyBwYXJhIGVzdGUgcmVjb3J0ZS4gJyArXG4gICdDb25maXJtZSBzZSBhIHRhYmVsYSB0ZW0gdW1hIGxpbmhhIHBvciBhbm8gKGNvbHVuYSBcImFub1wiKSBvdSB1bWEgbGluaGEgcG9yIHJlY29ydGUgKGNvbHVuYXMgY29tIGFub3MpLCAnICtcbiAgJ2Ugc2UgYSBjb2x1bmEgZG8gcmVjb3J0ZSBwb3NzdWkgdmFsb3JlcyBwcmVlbmNoaWRvcy4nXG5cbmV4cG9ydCBjb25zdCBISU5UX0NPTlNFQ1VUSVZPID0gJ09zIGFub3Mgc2VsZWNpb25hZG9zIGRldmVtIHNlciBjb25zZWN1dGl2b3MuJ1xuXG5leHBvcnQgY29uc3QgSElOVF9QRVJJT0RfUlVMRVMgPVxuICAnT3MgZG9pcyBwZXLDrW9kb3MgZGV2ZW0gdGVyIGEgbWVzbWEgcXVhbnRpZGFkZSBkZSBhbm9zIGNvbnNlY3V0aXZvcywgc2VtIHJlcGV0acOnw6NvIGVudHJlIGVsZXMuJ1xuXG5leHBvcnQgY29uc3QgUExBQ0VIT0xERVJfUEVSSU9ET19JTklDSUFMID0gJ1NlbGVjaW9uZSBvKHMpIGFubyhzKSBkbyBwZXLDrW9kbyBpbmljaWFsJ1xuZXhwb3J0IGNvbnN0IFBMQUNFSE9MREVSX1BFUklPRE9fRklOQUwgPSAnU2VsZWNpb25lIG8ocykgYW5vKHMpIGRvIHBlcsOtb2RvIGZpbmFsJ1xuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBSZWFjdCwganN4IH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHtcbiAgZm9ybWF0UGVyY2VudFZhcmlhdGlvbixcbiAgZm9ybWF0UGVyaW9kUmFuZ2VMYWJlbCxcbiAgdHlwZSBWYXJpYXRpb25SZXN1bHRcbn0gZnJvbSAnLi4vLi4vdXRpbHMvcHJvZGVzLXRhYmxlJ1xuaW1wb3J0IHsgZm9ybWF0QXJlYSwgZ2V0VmFyaWF0aW9uVG9uZSB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdCdcblxuaW50ZXJmYWNlIFZhcmlhdGlvblJlc3VsdFByb3BzIHtcbiAgZGF0YTogVmFyaWF0aW9uUmVzdWx0XG59XG5cbmV4cG9ydCBjb25zdCBWYXJpYXRpb25SZXN1bHRQYW5lbCA9ICh7IGRhdGEgfTogVmFyaWF0aW9uUmVzdWx0UHJvcHMpID0+IHtcbiAgY29uc3QgdG9uZSA9IGdldFZhcmlhdGlvblRvbmUoZGF0YS5wY3QpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhcmFkb3ItcmVzdWx0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhcmFkb3ItcmVzdWx0LXRpdGxlXCI+XG4gICAgICAgIFZhcmlhw6fDo28gcGVyY2VudHVhbCAoXG4gICAgICAgIHtmb3JtYXRQZXJpb2RSYW5nZUxhYmVsKGRhdGEueWVhcnNJbmljaWFsKX0g4oaSeycgJ31cbiAgICAgICAge2Zvcm1hdFBlcmlvZFJhbmdlTGFiZWwoZGF0YS55ZWFyc0ZpbmFsKX0pXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29tcGFyYWRvci1yZXN1bHQtdmFsdWUgY29tcGFyYWRvci1yZXN1bHQtdmFsdWUtLSR7dG9uZX1gfT5cbiAgICAgICAge2Zvcm1hdFBlcmNlbnRWYXJpYXRpb24oZGF0YS5wY3QpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhcmFkb3ItcmVzdWx0LWRldGFpbFwiPlxuICAgICAgICB7Zm9ybWF0QXJlYShkYXRhLnZhbHVlSW5pY2lhbCl9IG5vIHBlcsOtb2RvIGluaWNpYWwg4oaSeycgJ31cbiAgICAgICAge2Zvcm1hdEFyZWEoZGF0YS52YWx1ZUZpbmFsKX0gbm8gcGVyw61vZG8gZmluYWxcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCJpbXBvcnQgeyBSZWFjdCB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7XG4gIGNvbXB1dGVQZXJpb2RWYXJpYXRpb24sXG4gIGdldFllYXJzQWxsb3dlZEZvckZpbmFsLFxuICBnZXRZZWFyc0FsbG93ZWRGb3JJbmljaWFsLFxuICB0eXBlIFllYXJWYWx1ZVJvd1xufSBmcm9tICcuLi8uLi91dGlscy9wcm9kZXMtdGFibGUnXG5pbXBvcnQgeyBISU5UX0NPTlNFQ1VUSVZPIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUGVyaW9kU2VsZWN0aW9uIChcbiAgc2VyaWVzOiBZZWFyVmFsdWVSb3dbXSxcbiAgYXZhaWxhYmxlWWVhcnM6IG51bWJlcltdLFxuICByZWNvcnRlRmllbGQ/OiBzdHJpbmdcbikge1xuICBjb25zdCBbcGVyaW9kb0luaWNpYWwsIHNldFBlcmlvZG9JbmljaWFsXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcltdPihbXSlcbiAgY29uc3QgW3BlcmlvZG9GaW5hbCwgc2V0UGVyaW9kb0ZpbmFsXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcltdPihbXSlcbiAgY29uc3QgW2hpbnRJbmljaWFsLCBzZXRIaW50SW5pY2lhbF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuICBjb25zdCBbaGludEZpbmFsLCBzZXRIaW50RmluYWxdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcblxuICBjb25zdCB5ZWFyc0ZvckluaWNpYWwgPSBSZWFjdC51c2VNZW1vKFxuICAgICgpID0+IGdldFllYXJzQWxsb3dlZEZvckluaWNpYWwoYXZhaWxhYmxlWWVhcnMsIHBlcmlvZG9GaW5hbCksXG4gICAgW2F2YWlsYWJsZVllYXJzLCBwZXJpb2RvRmluYWxdXG4gIClcblxuICBjb25zdCB5ZWFyc0ZvckZpbmFsID0gUmVhY3QudXNlTWVtbyhcbiAgICAoKSA9PiBnZXRZZWFyc0FsbG93ZWRGb3JGaW5hbChhdmFpbGFibGVZZWFycywgcGVyaW9kb0luaWNpYWwpLFxuICAgIFthdmFpbGFibGVZZWFycywgcGVyaW9kb0luaWNpYWxdXG4gIClcblxuICBjb25zdCB2YXJpYXRpb24gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoIXBlcmlvZG9JbmljaWFsLmxlbmd0aCB8fCAhcGVyaW9kb0ZpbmFsLmxlbmd0aCkgcmV0dXJuIG51bGxcbiAgICByZXR1cm4gY29tcHV0ZVBlcmlvZFZhcmlhdGlvbihzZXJpZXMsIHBlcmlvZG9JbmljaWFsLCBwZXJpb2RvRmluYWwpXG4gIH0sIFtwZXJpb2RvSW5pY2lhbCwgcGVyaW9kb0ZpbmFsLCBzZXJpZXNdKVxuXG4gIGNvbnN0IGhhc1BlcmlvZFNlbGVjdGlvbiA9XG4gICAgcGVyaW9kb0luaWNpYWwubGVuZ3RoID4gMCB8fCBwZXJpb2RvRmluYWwubGVuZ3RoID4gMFxuXG4gIGNvbnN0IGNsZWFyUGVyaW9kU2VsZWN0aW9uID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFBlcmlvZG9JbmljaWFsKFtdKVxuICAgIHNldFBlcmlvZG9GaW5hbChbXSlcbiAgICBzZXRIaW50SW5pY2lhbChudWxsKVxuICAgIHNldEhpbnRGaW5hbChudWxsKVxuICB9LCBbXSlcblxuICBjb25zdCBoYW5kbGVQZXJpb2RvSW5pY2lhbENoYW5nZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCh5ZWFyczogbnVtYmVyW10pID0+IHtcbiAgICBzZXRQZXJpb2RvSW5pY2lhbCh5ZWFycylcbiAgICBzZXRIaW50SW5pY2lhbChudWxsKVxuICB9LCBbXSlcblxuICBjb25zdCBoYW5kbGVQZXJpb2RvRmluYWxDaGFuZ2UgPSBSZWFjdC51c2VDYWxsYmFjaygoeWVhcnM6IG51bWJlcltdKSA9PiB7XG4gICAgc2V0UGVyaW9kb0ZpbmFsKHllYXJzKVxuICAgIHNldEhpbnRGaW5hbChudWxsKVxuICB9LCBbXSlcblxuICBjb25zdCByZWplY3RQZXJpb2RvSW5pY2lhbCA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRIaW50SW5pY2lhbChISU5UX0NPTlNFQ1VUSVZPKVxuICB9LCBbXSlcblxuICBjb25zdCByZWplY3RQZXJpb2RvRmluYWwgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0SGludEZpbmFsKEhJTlRfQ09OU0VDVVRJVk8pXG4gIH0sIFtdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UGVyaW9kb0luaWNpYWwoW10pXG4gICAgc2V0UGVyaW9kb0ZpbmFsKFtdKVxuICAgIHNldEhpbnRJbmljaWFsKG51bGwpXG4gICAgc2V0SGludEZpbmFsKG51bGwpXG4gIH0sIFtyZWNvcnRlRmllbGRdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFwZXJpb2RvSW5pY2lhbC5sZW5ndGggfHwgIXBlcmlvZG9GaW5hbC5sZW5ndGgpIHJldHVyblxuICAgIGNvbnN0IGFsbG93ZWQgPSBuZXcgU2V0KGdldFllYXJzQWxsb3dlZEZvckZpbmFsKGF2YWlsYWJsZVllYXJzLCBwZXJpb2RvSW5pY2lhbCkpXG4gICAgY29uc3QgZmlsdGVyZWQgPSBwZXJpb2RvRmluYWwuZmlsdGVyKCh5KSA9PiBhbGxvd2VkLmhhcyh5KSlcbiAgICBpZiAoZmlsdGVyZWQubGVuZ3RoICE9PSBwZXJpb2RvRmluYWwubGVuZ3RoKSB7XG4gICAgICBzZXRQZXJpb2RvRmluYWwoZmlsdGVyZWQpXG4gICAgfVxuICB9LCBbcGVyaW9kb0luaWNpYWwsIHBlcmlvZG9GaW5hbCwgYXZhaWxhYmxlWWVhcnNdKVxuXG4gIHJldHVybiB7XG4gICAgcGVyaW9kb0luaWNpYWwsXG4gICAgcGVyaW9kb0ZpbmFsLFxuICAgIHllYXJzRm9ySW5pY2lhbCxcbiAgICB5ZWFyc0ZvckZpbmFsLFxuICAgIGhpbnRJbmljaWFsLFxuICAgIGhpbnRGaW5hbCxcbiAgICB2YXJpYXRpb24sXG4gICAgaGFzUGVyaW9kU2VsZWN0aW9uLFxuICAgIGNsZWFyUGVyaW9kU2VsZWN0aW9uLFxuICAgIGhhbmRsZVBlcmlvZG9JbmljaWFsQ2hhbmdlLFxuICAgIGhhbmRsZVBlcmlvZG9GaW5hbENoYW5nZSxcbiAgICByZWplY3RQZXJpb2RvSW5pY2lhbCxcbiAgICByZWplY3RQZXJpb2RvRmluYWxcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgUmVhY3QsXG4gIHR5cGUgRGF0YVNvdXJjZSxcbiAgdHlwZSBJTURhdGFTb3VyY2VTY2hlbWEsXG4gIERhdGFTb3VyY2VTdGF0dXNcbn0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHtcbiAgYnVpbGRZZWFyU2VyaWVzLFxuICBkZXRlY3RZZWFyRmllbGQsXG4gIGZldGNoTGF5ZXJSZWNvcmRzLFxuICBzY2hlbWFUb0ZpZWxkTGlzdCxcbiAgdHlwZSBZZWFyVmFsdWVSb3dcbn0gZnJvbSAnLi4vLi4vdXRpbHMvcHJvZGVzLXRhYmxlJ1xuaW1wb3J0IHtcbiAgZ2V0RGF0YVNvdXJjZVNjaGVtYSxcbiAgZ2V0TWFpbkRhdGFTb3VyY2UsXG4gIGlzUXVlcnlhYmxlU3RhdHVzXG59IGZyb20gJy4uLy4uL3V0aWxzL2RhdGEtc291cmNlJ1xuaW1wb3J0IHtcbiAgTVNHX0VYVFJBQ1RfRkFJTEVELFxuICBNU0dfTE9BRF9GQUlMRURcbn0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZVByb2Rlc1Nlcmllc1BhcmFtcyB7XG4gIHJlY29ydGVGaWVsZD86IHN0cmluZ1xuICB5ZWFyRmllbGQ/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVByb2Rlc1NlcmllcyAoeyByZWNvcnRlRmllbGQsIHllYXJGaWVsZCB9OiBVc2VQcm9kZXNTZXJpZXNQYXJhbXMpIHtcbiAgY29uc3QgW2RzUmVmLCBzZXREc1JlZl0gPSBSZWFjdC51c2VTdGF0ZTxEYXRhU291cmNlIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2RzU3RhdHVzLCBzZXREc1N0YXR1c10gPSBSZWFjdC51c2VTdGF0ZTxEYXRhU291cmNlU3RhdHVzIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpXG4gIGNvbnN0IFtmaWVsZExpc3QsIHNldEZpZWxkTGlzdF0gPSBSZWFjdC51c2VTdGF0ZShcbiAgICBbXSBhcyBSZXR1cm5UeXBlPHR5cGVvZiBzY2hlbWFUb0ZpZWxkTGlzdD5cbiAgKVxuICBjb25zdCBbc2VyaWVzLCBzZXRTZXJpZXNdID0gUmVhY3QudXNlU3RhdGU8WWVhclZhbHVlUm93W10+KFtdKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuXG4gIGNvbnN0IGVmZmVjdGl2ZVllYXJGaWVsZCA9IHllYXJGaWVsZCA/PyBkZXRlY3RZZWFyRmllbGQoZmllbGRMaXN0KVxuXG4gIGNvbnN0IGFwcGx5U2NoZW1hID0gUmVhY3QudXNlQ2FsbGJhY2soKHNjaGVtYTogSU1EYXRhU291cmNlU2NoZW1hKSA9PiB7XG4gICAgc2V0RmllbGRMaXN0KHNjaGVtYVRvRmllbGRMaXN0KHNjaGVtYSkpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGhhbmRsZURhdGFTb3VyY2VSZWFkeSA9IFJlYWN0LnVzZUNhbGxiYWNrKChkczogRGF0YVNvdXJjZSkgPT4ge1xuICAgIHNldERzUmVmKGRzKVxuICAgIGNvbnN0IHNjaGVtYSA9IGdldERhdGFTb3VyY2VTY2hlbWEoZHMpXG4gICAgaWYgKHNjaGVtYSkgYXBwbHlTY2hlbWEoc2NoZW1hKVxuICB9LCBbYXBwbHlTY2hlbWFdKVxuXG4gIGNvbnN0IGxvYWRTZXJpZXMgPSBSZWFjdC51c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGdldE1haW5EYXRhU291cmNlKGRzUmVmKVxuICAgIGlmICghbWFpbiB8fCAhZWZmZWN0aXZlWWVhckZpZWxkIHx8ICFyZWNvcnRlRmllbGQpIHtcbiAgICAgIHNldFNlcmllcyhbXSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghaXNRdWVyeWFibGVTdGF0dXMoZHNTdGF0dXMpKSByZXR1cm5cblxuICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICBzZXRFcnJvcihudWxsKVxuICAgIHRyeSB7XG4gICAgICBsZXQgcmVjb3JkcyA9IGF3YWl0IGZldGNoTGF5ZXJSZWNvcmRzKG1haW4pXG4gICAgICBsZXQgYnVpbHQgPSBidWlsZFllYXJTZXJpZXMoXG4gICAgICAgIHJlY29yZHMsXG4gICAgICAgIGVmZmVjdGl2ZVllYXJGaWVsZCxcbiAgICAgICAgcmVjb3J0ZUZpZWxkLFxuICAgICAgICBmaWVsZExpc3RcbiAgICAgIClcblxuICAgICAgaWYgKHJlY29yZHMubGVuZ3RoID4gMCAmJiBidWlsdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc3QgZm9yY2VkID0gYXdhaXQgZmV0Y2hMYXllclJlY29yZHMobWFpbiwgeyBmb3JjZVF1ZXJ5OiB0cnVlIH0pXG4gICAgICAgIGlmIChmb3JjZWQubGVuZ3RoKSB7XG4gICAgICAgICAgcmVjb3JkcyA9IGZvcmNlZFxuICAgICAgICAgIGJ1aWx0ID0gYnVpbGRZZWFyU2VyaWVzKFxuICAgICAgICAgICAgZm9yY2VkLFxuICAgICAgICAgICAgZWZmZWN0aXZlWWVhckZpZWxkLFxuICAgICAgICAgICAgcmVjb3J0ZUZpZWxkLFxuICAgICAgICAgICAgZmllbGRMaXN0XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNldFNlcmllcyhidWlsdClcblxuICAgICAgaWYgKHJlY29yZHMubGVuZ3RoID4gMCAmJiBidWlsdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgc2V0RXJyb3IoTVNHX0VYVFJBQ1RfRkFJTEVEKVxuICAgICAgfVxuICAgIH0gY2F0Y2gge1xuICAgICAgc2V0RXJyb3IoTVNHX0xPQURfRkFJTEVEKVxuICAgICAgc2V0U2VyaWVzKFtdKVxuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIH1cbiAgfSwgW2RzUmVmLCBkc1N0YXR1cywgZWZmZWN0aXZlWWVhckZpZWxkLCBmaWVsZExpc3QsIHJlY29ydGVGaWVsZF0pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXJlY29ydGVGaWVsZCB8fCAhZWZmZWN0aXZlWWVhckZpZWxkIHx8ICFkc1JlZikgcmV0dXJuXG4gICAgaWYgKCFpc1F1ZXJ5YWJsZVN0YXR1cyhkc1N0YXR1cykpIHJldHVyblxuICAgIGxvYWRTZXJpZXMoKVxuICB9LCBbcmVjb3J0ZUZpZWxkLCBlZmZlY3RpdmVZZWFyRmllbGQsIGRzUmVmLCBkc1N0YXR1cywgZmllbGRMaXN0LCBsb2FkU2VyaWVzXSlcblxuICBjb25zdCB3YWl0aW5nRm9yTGF5ZXIgPSAhZHNSZWYgfHwgZHNTdGF0dXMgPT09IERhdGFTb3VyY2VTdGF0dXMuTG9hZGluZ1xuXG4gIHJldHVybiB7XG4gICAgc2VyaWVzLFxuICAgIGxvYWRpbmcsXG4gICAgZXJyb3IsXG4gICAgaGFuZGxlRGF0YVNvdXJjZVJlYWR5LFxuICAgIGFwcGx5U2NoZW1hLFxuICAgIHNldERzU3RhdHVzLFxuICAgIHdhaXRpbmdGb3JMYXllclxuICB9XG59XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdqaW11LWNvcmUnXG5cbmV4cG9ydCBjb25zdCB3aWRnZXRTdHlsZXMgPSBjc3NgXG4gICYud2lkZ2V0LWNvbXBhcmFkb3ItcHJvZGVzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgfVxuICAuY29tcGFyYWRvci1mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMnB4O1xuICAgIG1pbi13aWR0aDogMDtcbiAgfVxuICAuY29tcGFyYWRvci1maWVsZC1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDRweDtcbiAgICBtaW4td2lkdGg6IDA7XG4gIH1cbiAgLmNvbXBhcmFkb3ItcGVyaW9kLWhpbnQsXG4gIC5jb21wYXJhZG9yLWVycm9yIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICNiMDAwMjA7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICB9XG4gIC5jb21wYXJhZG9yLWVycm9yLS1ibG9jayB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5jb21wYXJhZG9yLXJlc3VsdCB7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXJlZi1wYWxldHRlLW5ldXRyYWwtMTAwLCAjZjNmM2YzKTtcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICB9XG4gIC5jb21wYXJhZG9yLXJlc3VsdC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgfVxuICAuY29tcGFyYWRvci1yZXN1bHQtdmFsdWUge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIH1cbiAgLmNvbXBhcmFkb3ItcmVzdWx0LXZhbHVlLS1wb3NpdGl2ZSB7XG4gICAgY29sb3I6ICNiMDAwMjA7XG4gIH1cbiAgLmNvbXBhcmFkb3ItcmVzdWx0LXZhbHVlLS1uZWdhdGl2ZSB7XG4gICAgY29sb3I6ICMxYjdhM2Q7XG4gIH1cbiAgLmNvbXBhcmFkb3ItcmVzdWx0LXZhbHVlLS1uZXV0cmFsIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxuICAuY29tcGFyYWRvci1yZXN1bHQtZGV0YWlsIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM2YjZiNmI7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xuICB9XG4gIC5jb21wYXJhZG9yLWhpbnQge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBjb2xvcjogIzZiNmI2YjtcbiAgICBsaW5lLWhlaWdodDogMS4zNTtcbiAgfVxuICAuY29tcGFyYWRvci1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cbiAgLmNvbXBhcmFkb3ItYnRuLWxpbXBhciB7XG4gICAgYm9yZGVyLXJhZGl1czogOTk5OXB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IHBpY2tlclN0eWxlcyA9IGNzc2BcbiAgd2lkdGg6IDEwMCU7XG4gIC5qaW11LWRyb3Bkb3duIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICAuY29tcGFyYWRvci1wZXJpb2QtbWVudSB7XG4gICAgbWF4LWhlaWdodDogMjIwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxuYFxuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBSZWFjdCwganN4IH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHtcbiAgRHJvcGRvd24sXG4gIERyb3Bkb3duQnV0dG9uLFxuICBEcm9wZG93bk1lbnUsXG4gIERyb3Bkb3duSXRlbVxufSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHsgZm9ybWF0UGVyaW9kTGFiZWwsIHRvZ2dsZUNvbnNlY3V0aXZlWWVhciB9IGZyb20gJy4uL3V0aWxzL3Byb2Rlcy10YWJsZSdcbmltcG9ydCB7IHBpY2tlclN0eWxlcyB9IGZyb20gJy4vc3R5bGVzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIFllYXJQZXJpb2RQaWNrZXJQcm9wcyB7XG4gIGF2YWlsYWJsZVllYXJzOiBudW1iZXJbXVxuICBzZWxlY3RlZFllYXJzOiBudW1iZXJbXVxuICBwbGFjZWhvbGRlcjogc3RyaW5nXG4gIGhpbnQ/OiBzdHJpbmcgfCBudWxsXG4gIG9uQ2hhbmdlOiAoeWVhcnM6IG51bWJlcltdKSA9PiB2b2lkXG4gIG9uUmVqZWN0ZWRTZWxlY3Rpb24/OiAoKSA9PiB2b2lkXG59XG5cbmV4cG9ydCBjb25zdCBZZWFyUGVyaW9kUGlja2VyID0gUmVhY3QubWVtbygocHJvcHM6IFllYXJQZXJpb2RQaWNrZXJQcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgYXZhaWxhYmxlWWVhcnMsXG4gICAgc2VsZWN0ZWRZZWFycyxcbiAgICBwbGFjZWhvbGRlcixcbiAgICBoaW50LFxuICAgIG9uQ2hhbmdlLFxuICAgIG9uUmVqZWN0ZWRTZWxlY3Rpb25cbiAgfSA9IHByb3BzXG5cbiAgY29uc3Qgc2VsZWN0ZWRTZXQgPSBSZWFjdC51c2VNZW1vKFxuICAgICgpID0+IG5ldyBTZXQoc2VsZWN0ZWRZZWFycyksXG4gICAgW3NlbGVjdGVkWWVhcnNdXG4gIClcblxuICBjb25zdCBzdW1tYXJ5ID1cbiAgICBzZWxlY3RlZFllYXJzLmxlbmd0aCA+IDBcbiAgICAgID8gZm9ybWF0UGVyaW9kTGFiZWwoc2VsZWN0ZWRZZWFycylcbiAgICAgIDogcGxhY2Vob2xkZXJcblxuICBjb25zdCBoYW5kbGVUb2dnbGUgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoeWVhcjogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCB7IG5leHQsIHJlamVjdGVkIH0gPSB0b2dnbGVDb25zZWN1dGl2ZVllYXIoc2VsZWN0ZWRZZWFycywgeWVhcilcbiAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICBvblJlamVjdGVkU2VsZWN0aW9uPy4oKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIG9uQ2hhbmdlKG5leHQpXG4gICAgfSxcbiAgICBbc2VsZWN0ZWRZZWFycywgb25DaGFuZ2UsIG9uUmVqZWN0ZWRTZWxlY3Rpb25dXG4gIClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY3NzPXtwaWNrZXJTdHlsZXN9PlxuICAgICAgPERyb3Bkb3duXG4gICAgICAgIGZsdWlkXG4gICAgICAgIG1lbnVJdGVtQ2hlY2tNb2RlPVwibXVsdGlDaGVja1wiXG4gICAgICAgIGFjdGl2ZUljb25cbiAgICAgICAgY2xhc3NOYW1lPVwidy0xMDBcIlxuICAgICAgPlxuICAgICAgICA8RHJvcGRvd25CdXR0b24gc2l6ZT1cInNtXCIgY2xhc3NOYW1lPVwidy0xMDAgZHJvcGRvd24tdG9nZ2xlXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZVwiPntzdW1tYXJ5fTwvc3Bhbj5cbiAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICAgICAgPERyb3Bkb3duTWVudSBjbGFzc05hbWU9XCJjb21wYXJhZG9yLXBlcmlvZC1tZW51XCI+XG4gICAgICAgICAge2F2YWlsYWJsZVllYXJzLm1hcCgoeWVhcikgPT4gKFxuICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICBrZXk9e3llYXJ9XG4gICAgICAgICAgICAgIGFjdGl2ZT17c2VsZWN0ZWRTZXQuaGFzKHllYXIpfVxuICAgICAgICAgICAgICB0b2dnbGU9e2ZhbHNlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUb2dnbGUoeWVhcil9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt5ZWFyfVxuICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgICAgPC9Ecm9wZG93bj5cbiAgICAgIHtoaW50ICYmIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFyYWRvci1wZXJpb2QtaGludFwiPntoaW50fTwvZGl2Pn1cbiAgICA8L2Rpdj5cbiAgKVxufSlcblxuWWVhclBlcmlvZFBpY2tlci5kaXNwbGF5TmFtZSA9ICdZZWFyUGVyaW9kUGlja2VyJ1xuIiwiaW1wb3J0IHtcbiAgdHlwZSBEYXRhU291cmNlLFxuICB0eXBlIElNRGF0YVNvdXJjZVNjaGVtYSxcbiAgRGF0YVNvdXJjZVN0YXR1c1xufSBmcm9tICdqaW11LWNvcmUnXG5cbnR5cGUgRGF0YVNvdXJjZVdpdGhNYWluID0gRGF0YVNvdXJjZSAmIHtcbiAgZ2V0TWFpbkRhdGFTb3VyY2U/OiAoKSA9PiBEYXRhU291cmNlXG4gIGdldFNjaGVtYT86ICgpID0+IElNRGF0YVNvdXJjZVNjaGVtYVxufVxuXG5leHBvcnQgY29uc3QgaXNRdWVyeWFibGVTdGF0dXMgPSAoc3RhdHVzPzogRGF0YVNvdXJjZVN0YXR1cyk6IGJvb2xlYW4gPT5cbiAgc3RhdHVzID09PSBEYXRhU291cmNlU3RhdHVzLkxvYWRlZCB8fFxuICBzdGF0dXMgPT09IERhdGFTb3VyY2VTdGF0dXMuVW5sb2FkZWQgfHxcbiAgc3RhdHVzID09PSBEYXRhU291cmNlU3RhdHVzLk5vdFJlYWR5XG5cbmV4cG9ydCBjb25zdCBnZXRNYWluRGF0YVNvdXJjZSA9IChkczogRGF0YVNvdXJjZSB8IG51bGwpOiBEYXRhU291cmNlIHwgbnVsbCA9PiB7XG4gIGlmICghZHMpIHJldHVybiBudWxsXG4gIGNvbnN0IG1haW4gPSAoZHMgYXMgRGF0YVNvdXJjZVdpdGhNYWluKS5nZXRNYWluRGF0YVNvdXJjZT8uKClcbiAgcmV0dXJuIG1haW4gPz8gZHNcbn1cblxuZXhwb3J0IGNvbnN0IGdldERhdGFTb3VyY2VTY2hlbWEgPSAoXG4gIGRzOiBEYXRhU291cmNlXG4pOiBJTURhdGFTb3VyY2VTY2hlbWEgfCB1bmRlZmluZWQgPT5cbiAgKGRzIGFzIERhdGFTb3VyY2VXaXRoTWFpbikuZ2V0U2NoZW1hPy4oKVxuIiwiaW1wb3J0IHsgQVJFQV9VTklUIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuXG5leHBvcnQgY29uc3QgZm9ybWF0QXJlYSA9ICh2YWx1ZTogbnVtYmVyKTogc3RyaW5nID0+XG4gIGAke3ZhbHVlLnRvTG9jYWxlU3RyaW5nKCdwdC1CUicsIHtcbiAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyXG4gIH0pfSAke0FSRUFfVU5JVH1gXG5cbmV4cG9ydCB0eXBlIFZhcmlhdGlvblRvbmUgPSAncG9zaXRpdmUnIHwgJ25lZ2F0aXZlJyB8ICduZXV0cmFsJ1xuXG5leHBvcnQgY29uc3QgZ2V0VmFyaWF0aW9uVG9uZSA9IChwY3Q6IG51bWJlcik6IFZhcmlhdGlvblRvbmUgPT4ge1xuICBpZiAocGN0ID4gMCkgcmV0dXJuICdwb3NpdGl2ZSdcbiAgaWYgKHBjdCA8IDApIHJldHVybiAnbmVnYXRpdmUnXG4gIHJldHVybiAnbmV1dHJhbCdcbn1cbiIsImltcG9ydCB7XG4gIHR5cGUgSU1GaWVsZFNjaGVtYSxcbiAgdHlwZSBJTURhdGFTb3VyY2VTY2hlbWEsXG4gIEppbXVGaWVsZFR5cGUsXG4gIEVzcmlGaWVsZFR5cGUsXG4gIHR5cGUgRGF0YVJlY29yZFxufSBmcm9tICdqaW11LWNvcmUnXG5cbmV4cG9ydCBpbnRlcmZhY2UgWWVhclZhbHVlUm93IHtcbiAgeWVhcjogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaWVsZEF0dHJpYnV0ZUtleXMge1xuICB5ZWFyS2V5OiBzdHJpbmdcbiAgcmVjb3J0ZUtleTogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1lFQVJfRklFTEQgPSAnYW5vJ1xuXG5jb25zdCBZRUFSX05BTUVfUEFUVEVSTlMgPSBbJ2FubycsICd5ZWFyJywgJ3lyJywgJ2V4ZXJjaWNpbycsICdleGVyY8OtY2lvJ11cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHlDZWxsICh2YWx1ZTogdW5rbm93bik6IGJvb2xlYW4ge1xuICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIHRydWVcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUudHJpbSgpID09PSAnJykgcmV0dXJuIHRydWVcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgTnVtYmVyLmlzTmFOKHZhbHVlKSkgcmV0dXJuIHRydWVcbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU51bWVyaWNWYWx1ZSAodmFsdWU6IHVua25vd24pOiBudW1iZXIgfCBudWxsIHtcbiAgaWYgKGlzRW1wdHlDZWxsKHZhbHVlKSkgcmV0dXJuIG51bGxcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgTnVtYmVyLmlzRmluaXRlKHZhbHVlKSkgcmV0dXJuIHZhbHVlXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgcyA9IHZhbHVlLnRyaW0oKVxuICAgIGlmICghcykgcmV0dXJuIG51bGxcbiAgICBpZiAocy5pbmNsdWRlcygnLCcpKSB7XG4gICAgICBjb25zdCBub3JtYWxpemVkID0gcy5yZXBsYWNlKC9cXC4vZywgJycpLnJlcGxhY2UoJywnLCAnLicpXG4gICAgICBjb25zdCBuID0gTnVtYmVyKG5vcm1hbGl6ZWQpXG4gICAgICByZXR1cm4gTnVtYmVyLmlzRmluaXRlKG4pID8gbiA6IG51bGxcbiAgICB9XG4gICAgY29uc3QgbiA9IE51bWJlcihzKVxuICAgIHJldHVybiBOdW1iZXIuaXNGaW5pdGUobikgPyBuIDogbnVsbFxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVllYXIgKHZhbHVlOiB1bmtub3duKTogbnVtYmVyIHwgbnVsbCB7XG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUgJiYgIU51bWJlci5pc05hTih2YWx1ZS5nZXRUaW1lKCkpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmdldEZ1bGxZZWFyKClcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiBOdW1iZXIuaXNGaW5pdGUodmFsdWUpKSByZXR1cm4gTWF0aC50cnVuYyh2YWx1ZSlcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCBzID0gdmFsdWUudHJpbSgpXG4gICAgaWYgKCFzKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IG4gPSBOdW1iZXIocylcbiAgICBpZiAoTnVtYmVyLmlzRmluaXRlKG4pKSByZXR1cm4gTWF0aC50cnVuYyhuKVxuICAgIGNvbnN0IG0gPSBzLm1hdGNoKC9cXGIoMTl8MjApXFxkezJ9XFxiLylcbiAgICBpZiAobSkgcmV0dXJuIE51bWJlcihtWzBdKVxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2hlbWFUb0ZpZWxkTGlzdCAoc2NoZW1hPzogSU1EYXRhU291cmNlU2NoZW1hIHwgbnVsbCk6IElNRmllbGRTY2hlbWFbXSB7XG4gIGlmICghc2NoZW1hPy5maWVsZHMpIHJldHVybiBbXVxuICByZXR1cm4gT2JqZWN0LmtleXMoc2NoZW1hLmZpZWxkcykubWFwKChrZXkpID0+IHNjaGVtYS5maWVsZHNba2V5XSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtZXJpY1JlY29ydGVGaWVsZCAoZmllbGQ6IElNRmllbGRTY2hlbWEpOiBib29sZWFuIHtcbiAgaWYgKGZpZWxkLnR5cGUgPT09IEppbXVGaWVsZFR5cGUuTnVtYmVyKSByZXR1cm4gdHJ1ZVxuICBjb25zdCBlc3JpID0gZmllbGQuZXNyaVR5cGVcbiAgcmV0dXJuIChcbiAgICBlc3JpID09PSBFc3JpRmllbGRUeXBlLkRvdWJsZSB8fFxuICAgIGVzcmkgPT09IEVzcmlGaWVsZFR5cGUuU2luZ2xlIHx8XG4gICAgZXNyaSA9PT0gRXNyaUZpZWxkVHlwZS5JbnRlZ2VyIHx8XG4gICAgZXNyaSA9PT0gRXNyaUZpZWxkVHlwZS5TbWFsbEludGVnZXJcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXR0cmlidXRlS2V5IChmaWVsZDogSU1GaWVsZFNjaGVtYSk6IHN0cmluZyB7XG4gIHJldHVybiBmaWVsZC5uYW1lIHx8IGZpZWxkLmppbXVOYW1lXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXRlY3RZZWFyRmllbGQgKGZpZWxkczogSU1GaWVsZFNjaGVtYVtdKTogc3RyaW5nIHwgbnVsbCB7XG4gIGNvbnN0IGV4YWN0QW5vID0gZmllbGRzLmZpbmQoXG4gICAgKGYpID0+XG4gICAgICBmLmppbXVOYW1lPy50b0xvd2VyQ2FzZSgpID09PSAnYW5vJyB8fFxuICAgICAgZi5uYW1lPy50b0xvd2VyQ2FzZSgpID09PSAnYW5vJyB8fFxuICAgICAgZi5hbGlhcz8udG9Mb3dlckNhc2UoKSA9PT0gJ2FubydcbiAgKVxuICBpZiAoZXhhY3RBbm8pIHJldHVybiBleGFjdEFuby5qaW11TmFtZVxuXG4gIGNvbnN0IGNhbmRpZGF0ZXMgPSBmaWVsZHMuZmlsdGVyKFxuICAgIChmKSA9PiBmLnR5cGUgPT09IEppbXVGaWVsZFR5cGUuTnVtYmVyIHx8IGYudHlwZSA9PT0gSmltdUZpZWxkVHlwZS5TdHJpbmdcbiAgKVxuICBmb3IgKGNvbnN0IHBhdCBvZiBZRUFSX05BTUVfUEFUVEVSTlMpIHtcbiAgICBjb25zdCBmb3VuZCA9IGNhbmRpZGF0ZXMuZmluZChcbiAgICAgIChmKSA9PlxuICAgICAgICBmLmppbXVOYW1lPy50b0xvd2VyQ2FzZSgpID09PSBwYXQgfHxcbiAgICAgICAgZi5uYW1lPy50b0xvd2VyQ2FzZSgpID09PSBwYXQgfHxcbiAgICAgICAgZi5hbGlhcz8udG9Mb3dlckNhc2UoKSA9PT0gcGF0XG4gICAgKVxuICAgIGlmIChmb3VuZCkgcmV0dXJuIGZvdW5kLmppbXVOYW1lXG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFJlY29ydGVMYWJlbCAoZmllbGQ6IElNRmllbGRTY2hlbWEpOiBzdHJpbmcge1xuICByZXR1cm4gZm9ybWF0UmVjb3J0ZUxhYmVsRnJvbU5hbWUoZmllbGQuamltdU5hbWUsIGZpZWxkLmFsaWFzKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UmVjb3J0ZUxhYmVsRnJvbU5hbWUgKGppbXVOYW1lOiBzdHJpbmcsIGFsaWFzPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKGFsaWFzPy50cmltKCkpIHJldHVybiBhbGlhcy50cmltKClcbiAgcmV0dXJuIGppbXVOYW1lXG4gICAgLnNwbGl0KCdfJylcbiAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgLm1hcCgodykgPT4gdy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHcuc2xpY2UoMSkudG9Mb3dlckNhc2UoKSlcbiAgICAuam9pbignICcpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTeXN0ZW1IaWRkZW5GaWVsZE5hbWVzIChmaWVsZHM6IElNRmllbGRTY2hlbWFbXSk6IHN0cmluZ1tdIHtcbiAgcmV0dXJuIGZpZWxkc1xuICAgIC5maWx0ZXIoKGYpID0+IHtcbiAgICAgIGNvbnN0IGVzcmkgPSBmLmVzcmlUeXBlXG4gICAgICByZXR1cm4gKFxuICAgICAgICBlc3JpID09PSBFc3JpRmllbGRUeXBlLk9JRCB8fFxuICAgICAgICBlc3JpID09PSBFc3JpRmllbGRUeXBlLkdlb21ldHJ5IHx8XG4gICAgICAgIGVzcmkgPT09IEVzcmlGaWVsZFR5cGUuR2xvYmFsSUQgfHxcbiAgICAgICAgZXNyaSA9PT0gRXNyaUZpZWxkVHlwZS5HVUlEXG4gICAgICApXG4gICAgfSlcbiAgICAubWFwKChmKSA9PiBmLmppbXVOYW1lKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVjb3J0ZUhpZGRlbkZpZWxkTmFtZXMgKFxuICBmaWVsZHM6IElNRmllbGRTY2hlbWFbXSxcbiAgeWVhckZpZWxkPzogc3RyaW5nXG4pOiBzdHJpbmdbXSB7XG4gIGNvbnN0IGhpZGRlbiA9IGdldFN5c3RlbUhpZGRlbkZpZWxkTmFtZXMoZmllbGRzKVxuICBpZiAoeWVhckZpZWxkICYmICFoaWRkZW4uaW5jbHVkZXMoeWVhckZpZWxkKSkge1xuICAgIGhpZGRlbi5wdXNoKHllYXJGaWVsZClcbiAgfVxuICByZXR1cm4gaGlkZGVuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWNvcnRlQ2FuZGlkYXRlRmllbGRzIChcbiAgZmllbGRzOiBJTUZpZWxkU2NoZW1hW10sXG4gIHllYXJGaWVsZD86IHN0cmluZ1xuKTogSU1GaWVsZFNjaGVtYVtdIHtcbiAgY29uc3QgaGlkZGVuID0gbmV3IFNldChnZXRSZWNvcnRlSGlkZGVuRmllbGROYW1lcyhmaWVsZHMsIHllYXJGaWVsZCkpXG4gIHJldHVybiBmaWVsZHNcbiAgICAuZmlsdGVyKChmKSA9PiBpc051bWVyaWNSZWNvcnRlRmllbGQoZikgJiYgIWhpZGRlbi5oYXMoZi5qaW11TmFtZSkpXG4gICAgLnNvcnQoKGEsIGIpID0+XG4gICAgICBmb3JtYXRSZWNvcnRlTGFiZWwoYSkubG9jYWxlQ29tcGFyZShmb3JtYXRSZWNvcnRlTGFiZWwoYiksICdwdC1CUicpXG4gICAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZEZpZWxkQnlKaW11TmFtZSAoXG4gIGZpZWxkczogSU1GaWVsZFNjaGVtYVtdLFxuICBqaW11TmFtZT86IHN0cmluZ1xuKTogSU1GaWVsZFNjaGVtYSB8IG51bGwge1xuICBpZiAoIWppbXVOYW1lKSByZXR1cm4gbnVsbFxuICBjb25zdCBleGFjdCA9IGZpZWxkcy5maW5kKChmKSA9PiBmLmppbXVOYW1lID09PSBqaW11TmFtZSlcbiAgaWYgKGV4YWN0KSByZXR1cm4gZXhhY3RcbiAgY29uc3QgbG93ZXIgPSBqaW11TmFtZS50b0xvd2VyQ2FzZSgpXG4gIHJldHVybiAoXG4gICAgZmllbGRzLmZpbmQoXG4gICAgICAoZikgPT5cbiAgICAgICAgZi5qaW11TmFtZT8udG9Mb3dlckNhc2UoKSA9PT0gbG93ZXIgfHxcbiAgICAgICAgZi5uYW1lPy50b0xvd2VyQ2FzZSgpID09PSBsb3dlciB8fFxuICAgICAgICBmLmFsaWFzPy50b0xvd2VyQ2FzZSgpID09PSBsb3dlclxuICAgICkgPz8gbnVsbFxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlQXR0cmlidXRlS2V5cyAoXG4gIGZpZWxkczogSU1GaWVsZFNjaGVtYVtdLFxuICB5ZWFyRmllbGRKaW11Pzogc3RyaW5nLFxuICByZWNvcnRlRmllbGRKaW11Pzogc3RyaW5nXG4pOiBGaWVsZEF0dHJpYnV0ZUtleXMgfCBudWxsIHtcbiAgaWYgKCF5ZWFyRmllbGRKaW11IHx8ICFyZWNvcnRlRmllbGRKaW11KSByZXR1cm4gbnVsbFxuXG4gIGNvbnN0IHllYXJGaWVsZCA9IGZpbmRGaWVsZEJ5SmltdU5hbWUoZmllbGRzLCB5ZWFyRmllbGRKaW11KVxuICBjb25zdCByZWNvcnRlRmllbGQgPSBmaW5kRmllbGRCeUppbXVOYW1lKGZpZWxkcywgcmVjb3J0ZUZpZWxkSmltdSlcblxuICByZXR1cm4ge1xuICAgIHllYXJLZXk6IHllYXJGaWVsZCA/IGdldEF0dHJpYnV0ZUtleSh5ZWFyRmllbGQpIDogeWVhckZpZWxkSmltdSxcbiAgICByZWNvcnRlS2V5OiByZWNvcnRlRmllbGQgPyBnZXRBdHRyaWJ1dGVLZXkocmVjb3J0ZUZpZWxkKSA6IHJlY29ydGVGaWVsZEppbXVcbiAgfVxufVxuXG50eXBlIFJlY29yZExpa2UgPVxuICB8IERhdGFSZWNvcmRcbiAgfCB7XG4gICAgICBhdHRyaWJ1dGVzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgICAgIGZlYXR1cmU/OiB7IGF0dHJpYnV0ZXM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB9XG4gICAgICBnZXREYXRhPzogKCkgPT4ge1xuICAgICAgICBhdHRyaWJ1dGVzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgICAgICAgZmVhdHVyZT86IHsgYXR0cmlidXRlcz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+IH1cbiAgICAgIH1cbiAgICAgIGdldEZpZWxkVmFsdWU/OiAoamltdUZpZWxkTmFtZTogc3RyaW5nKSA9PiB1bmtub3duXG4gICAgfVxuXG5mdW5jdGlvbiB0b1BsYWluT2JqZWN0ICh2YWx1ZTogdW5rbm93bik6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHtcbiAgaWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSByZXR1cm4ge31cbiAgY29uc3QgdiA9IHZhbHVlIGFzIHtcbiAgICB0b0pTPzogKCkgPT4gUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgICBhc011dGFibGU/OiAob3B0cz86IHsgZGVlcDogYm9vbGVhbiB9KSA9PiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICB9XG4gIGlmICh0eXBlb2Ygdi50b0pTID09PSAnZnVuY3Rpb24nKSByZXR1cm4gdi50b0pTKClcbiAgaWYgKHR5cGVvZiB2LmFzTXV0YWJsZSA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHYuYXNNdXRhYmxlKHsgZGVlcDogdHJ1ZSB9KVxuICByZXR1cm4gdmFsdWUgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbn1cblxuLyoqIEV4dHJhaSBvIGRpY2lvbsOhcmlvIGRlIGF0cmlidXRvcyBkZSB1bSByZWdpc3RybyAodsOhcmlvcyBmb3JtYXRvcyBkbyBKaW11L0FyY0dJUykuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGxhaW5BdHRyaWJ1dGVzIChyZWM6IFJlY29yZExpa2UpOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB7XG4gIGNvbnN0IG1lcmdlZDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fVxuXG4gIGNvbnN0IG1lcmdlID0gKGF0dHJzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pID0+IHtcbiAgICBpZiAoIWF0dHJzKSByZXR1cm5cbiAgICBPYmplY3QuYXNzaWduKG1lcmdlZCwgdG9QbGFpbk9iamVjdChhdHRycykpXG4gIH1cblxuICBpZiAoJ2dldERhdGEnIGluIHJlYyAmJiB0eXBlb2YgcmVjLmdldERhdGEgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCBkYXRhID0gcmVjLmdldERhdGEoKVxuICAgIG1lcmdlKGRhdGE/LmF0dHJpYnV0ZXMpXG4gICAgbWVyZ2UoZGF0YT8uZmVhdHVyZT8uYXR0cmlidXRlcylcbiAgfVxuXG4gIGlmICgnZmVhdHVyZScgaW4gcmVjICYmIHJlYy5mZWF0dXJlPy5hdHRyaWJ1dGVzKSB7XG4gICAgbWVyZ2UocmVjLmZlYXR1cmUuYXR0cmlidXRlcylcbiAgfVxuXG4gIGlmICgnYXR0cmlidXRlcycgaW4gcmVjICYmIHJlYy5hdHRyaWJ1dGVzKSB7XG4gICAgbWVyZ2UocmVjLmF0dHJpYnV0ZXMpXG4gIH1cblxuICByZXR1cm4gbWVyZ2VkXG59XG5cbmZ1bmN0aW9uIGF0dHJpYnV0ZUhhc1VzYWJsZVZhbHVlICh2YWx1ZTogdW5rbm93bik6IGJvb2xlYW4ge1xuICBpZiAoaXNFbXB0eUNlbGwodmFsdWUpKSByZXR1cm4gZmFsc2VcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHJldHVybiBmYWxzZVxuICByZXR1cm4gdHJ1ZVxufVxuXG4vKiogVmVyaWZpY2Egc2UgbyByZWdpc3RybyBleHDDtWUgYXRyaWJ1dG9zIG91IGdldEZpZWxkVmFsdWUgY29tIGRhZG9zIHJlYWlzIChuw6NvIHPDsyBtw6l0b2RvIHZhemlvKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWNvcmRIYXNSZWFkYWJsZURhdGEgKHJlYzogUmVjb3JkTGlrZSk6IGJvb2xlYW4ge1xuICBjb25zdCBhdHRycyA9IGdldFBsYWluQXR0cmlidXRlcyhyZWMpXG4gIGNvbnN0IHVzYWJsZUtleXMgPSBPYmplY3Qua2V5cyhhdHRycykuZmlsdGVyKChrZXkpID0+IHtcbiAgICBpZiAoL14ob2JqZWN0aWR8Z2xvYmFsaWR8c2hhcGV8Z2VvbWV0cnkpJC9pLnRlc3Qoa2V5KSkgcmV0dXJuIGZhbHNlXG4gICAgcmV0dXJuIGF0dHJpYnV0ZUhhc1VzYWJsZVZhbHVlKGF0dHJzW2tleV0pXG4gIH0pXG4gIGlmICh1c2FibGVLZXlzLmxlbmd0aCA+IDApIHJldHVybiB0cnVlXG5cbiAgaWYgKCdnZXRGaWVsZFZhbHVlJyBpbiByZWMgJiYgdHlwZW9mIHJlYy5nZXRGaWVsZFZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3QgcHJvYmVzID0gW1xuICAgICAgJ2FubycsXG4gICAgICAneWVhcicsXG4gICAgICAnQU5PJyxcbiAgICAgICdZZWFyJyxcbiAgICAgICdleGVyY2ljaW8nLFxuICAgICAgJ0V4ZXJjaWNpbydcbiAgICBdXG4gICAgZm9yIChjb25zdCBuYW1lIG9mIHByb2Jlcykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdiA9IHJlYy5nZXRGaWVsZFZhbHVlIShuYW1lKVxuICAgICAgICBpZiAoYXR0cmlidXRlSGFzVXNhYmxlVmFsdWUodikpIHJldHVybiB0cnVlXG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgLy8gdGVudGEgcHLDs3hpbW9cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuLyoqIEzDqiB2YWxvciBwZWxvIEFQSSBkbyBKaW11IChgZ2V0RmllbGRWYWx1ZWApIGUsIGVtIHNlZ3VpZGEsIHBlbG9zIGF0cmlidXRvcyBicnV0b3MuICovXG5leHBvcnQgZnVuY3Rpb24gcmVhZFJlY29yZFZhbHVlIChcbiAgcmVjOiBSZWNvcmRMaWtlLFxuICBmaWVsZD86IElNRmllbGRTY2hlbWEgfCBudWxsLFxuICBmYWxsYmFja0ppbXVOYW1lPzogc3RyaW5nXG4pOiB1bmtub3duIHtcbiAgY29uc3QgbmFtZXM6IHN0cmluZ1tdID0gW11cbiAgaWYgKGZpZWxkPy5qaW11TmFtZSkgbmFtZXMucHVzaChmaWVsZC5qaW11TmFtZSlcbiAgaWYgKGZhbGxiYWNrSmltdU5hbWUpIG5hbWVzLnB1c2goZmFsbGJhY2tKaW11TmFtZSlcbiAgaWYgKGZpZWxkPy5uYW1lKSBuYW1lcy5wdXNoKGZpZWxkLm5hbWUpXG4gIGlmIChmaWVsZD8uYWxpYXMpIG5hbWVzLnB1c2goZmllbGQuYWxpYXMpXG4gIGlmIChmaWVsZCkgbmFtZXMucHVzaChnZXRBdHRyaWJ1dGVLZXkoZmllbGQpKVxuXG4gIGNvbnN0IHVuaXF1ZU5hbWVzID0gWy4uLm5ldyBTZXQobmFtZXMuZmlsdGVyKEJvb2xlYW4pKV1cblxuICBpZiAoJ2dldEZpZWxkVmFsdWUnIGluIHJlYyAmJiB0eXBlb2YgcmVjLmdldEZpZWxkVmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3IgKGNvbnN0IG5hbWUgb2YgdW5pcXVlTmFtZXMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHYgPSByZWMuZ2V0RmllbGRWYWx1ZSEobmFtZSlcbiAgICAgICAgaWYgKHYgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHZcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAvLyB0ZW50YSBwcsOzeGltbyBub21lXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgYXR0cnMgPSBnZXRQbGFpbkF0dHJpYnV0ZXMocmVjKVxuICByZXR1cm4gcmVhZEF0dHJpYnV0ZUZsZXhpYmxlKGF0dHJzLCBmaWVsZCwgZmFsbGJhY2tKaW11TmFtZSlcbn1cblxuZnVuY3Rpb24gcmVhZEF0dHJpYnV0ZSAoXG4gIGF0dHJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbiAgcHJpbWFyeUtleTogc3RyaW5nLFxuICBmYWxsYmFja0tleT86IHN0cmluZ1xuKTogdW5rbm93biB7XG4gIGlmIChwcmltYXJ5S2V5IGluIGF0dHJzKSByZXR1cm4gYXR0cnNbcHJpbWFyeUtleV1cbiAgaWYgKGZhbGxiYWNrS2V5ICYmIGZhbGxiYWNrS2V5ICE9PSBwcmltYXJ5S2V5ICYmIGZhbGxiYWNrS2V5IGluIGF0dHJzKSB7XG4gICAgcmV0dXJuIGF0dHJzW2ZhbGxiYWNrS2V5XVxuICB9XG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuLyoqIFRlbnRhIGppbXVOYW1lLCBuYW1lLCBhbGlhcyBlIGNvcnJlc3BvbmTDqm5jaWEgc2VtIGRpZmVyZW5jaWFyIG1hacO6c2N1bGFzL21pbsO6c2N1bGFzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlYWRBdHRyaWJ1dGVGbGV4aWJsZSAoXG4gIGF0dHJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbiAgZmllbGQ/OiBJTUZpZWxkU2NoZW1hIHwgbnVsbCxcbiAgZmFsbGJhY2tKaW11TmFtZT86IHN0cmluZ1xuKTogdW5rbm93biB7XG4gIGNvbnN0IGNhbmRpZGF0ZXMgPSBuZXcgU2V0PHN0cmluZz4oKVxuICBpZiAoZmllbGQpIHtcbiAgICBpZiAoZmllbGQuamltdU5hbWUpIGNhbmRpZGF0ZXMuYWRkKGZpZWxkLmppbXVOYW1lKVxuICAgIGlmIChmaWVsZC5uYW1lKSBjYW5kaWRhdGVzLmFkZChmaWVsZC5uYW1lKVxuICAgIGlmIChmaWVsZC5hbGlhcykgY2FuZGlkYXRlcy5hZGQoZmllbGQuYWxpYXMpXG4gICAgY2FuZGlkYXRlcy5hZGQoZ2V0QXR0cmlidXRlS2V5KGZpZWxkKSlcbiAgfVxuICBpZiAoZmFsbGJhY2tKaW11TmFtZSkgY2FuZGlkYXRlcy5hZGQoZmFsbGJhY2tKaW11TmFtZSlcblxuICBmb3IgKGNvbnN0IGtleSBvZiBjYW5kaWRhdGVzKSB7XG4gICAgY29uc3QgdiA9IHJlYWRBdHRyaWJ1dGUoYXR0cnMsIGtleSlcbiAgICBpZiAodiAhPT0gdW5kZWZpbmVkKSByZXR1cm4gdlxuICB9XG5cbiAgY29uc3QgYXR0cktleXMgPSBPYmplY3Qua2V5cyhhdHRycylcbiAgZm9yIChjb25zdCBrZXkgb2YgY2FuZGlkYXRlcykge1xuICAgIGNvbnN0IGZvdW5kID0gYXR0cktleXMuZmluZCgoaykgPT4gay50b0xvd2VyQ2FzZSgpID09PSBrZXkudG9Mb3dlckNhc2UoKSlcbiAgICBpZiAoZm91bmQgIT0gbnVsbCkgcmV0dXJuIGF0dHJzW2ZvdW5kXVxuICB9XG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxudHlwZSBRdWVyaWFibGVMYXllciA9IHtcbiAgcXVlcnk/OiAocTogb2JqZWN0KSA9PiBQcm9taXNlPHsgcmVjb3Jkcz86IERhdGFSZWNvcmRbXSB9PlxuICBsb2FkQWxsPzogKHE6IG9iamVjdCkgPT4gUHJvbWlzZTxEYXRhUmVjb3JkW10+XG4gIGdldEFsbExvYWRlZFJlY29yZHM/OiAoKSA9PiBEYXRhUmVjb3JkW11cbiAgZ2V0UmVjb3Jkcz86ICgpID0+IERhdGFSZWNvcmRbXVxufVxuXG5jb25zdCBxdWVyeVBhcmFtcyA9IHtcbiAgb3V0RmllbGRzOiBbJyonXSxcbiAgcmV0dXJuR2VvbWV0cnk6IGZhbHNlLFxuICBwYWdlU2l6ZTogMjAwMFxufVxuXG5mdW5jdGlvbiByZWNvcmRzQXJlUmVhZGFibGUgKHJlY29yZHM6IERhdGFSZWNvcmRbXSk6IGJvb2xlYW4ge1xuICByZXR1cm4gcmVjb3Jkcy5sZW5ndGggPiAwICYmIHJlY29yZHMuc29tZShyZWNvcmRIYXNSZWFkYWJsZURhdGEpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHF1ZXJ5QWxsUmVjb3JkcyAoZHM6IFF1ZXJpYWJsZUxheWVyKTogUHJvbWlzZTxEYXRhUmVjb3JkW10+IHtcbiAgaWYgKHR5cGVvZiBkcz8ubG9hZEFsbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZWNvcmRzID0gYXdhaXQgZHMubG9hZEFsbChxdWVyeVBhcmFtcylcbiAgICAgIGlmIChyZWNvcmRzPy5sZW5ndGgpIHJldHVybiByZWNvcmRzXG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyB0ZW50YSBxdWVyeSBhYmFpeG9cbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIGRzPy5xdWVyeSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkcy5xdWVyeShxdWVyeVBhcmFtcylcbiAgICAgIHJldHVybiByZXN1bHQ/LnJlY29yZHMgPz8gW11cbiAgICB9IGNhdGNoIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBbXVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZldGNoTGF5ZXJSZWNvcmRzT3B0aW9ucyB7XG4gIC8qKiBJZ25vcmEgY2FjaGUgZG8gbWFwYSBlIGZvcsOnYSBxdWVyeS9sb2FkQWxsICjDunRpbCBubyBFbnRlcnByaXNlKS4gKi9cbiAgZm9yY2VRdWVyeT86IGJvb2xlYW5cbn1cblxuLyoqIENhcnJlZ2EgdG9kb3Mgb3MgcmVnaXN0cm9zIGRhIGNhbWFkYSAodGFiZWxhIGFubyDDlyByZWNvcnRlcykuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hMYXllclJlY29yZHMgKFxuICBkYXRhU291cmNlOiB1bmtub3duLFxuICBvcHRpb25zPzogRmV0Y2hMYXllclJlY29yZHNPcHRpb25zXG4pOiBQcm9taXNlPERhdGFSZWNvcmRbXT4ge1xuICBjb25zdCBkcyA9IGRhdGFTb3VyY2UgYXMgUXVlcmlhYmxlTGF5ZXJcbiAgY29uc3QgY2FjaGVkID0gZHMuZ2V0QWxsTG9hZGVkUmVjb3Jkcz8uKCkgPz8gZHMuZ2V0UmVjb3Jkcz8uKCkgPz8gW11cblxuICBpZiAoIW9wdGlvbnM/LmZvcmNlUXVlcnkgJiYgcmVjb3Jkc0FyZVJlYWRhYmxlKGNhY2hlZCkpIHtcbiAgICByZXR1cm4gY2FjaGVkXG4gIH1cblxuICBjb25zdCBxdWVyaWVkID0gYXdhaXQgcXVlcnlBbGxSZWNvcmRzKGRzKVxuICBpZiAocmVjb3Jkc0FyZVJlYWRhYmxlKHF1ZXJpZWQpKSByZXR1cm4gcXVlcmllZFxuICBpZiAocXVlcmllZC5sZW5ndGgpIHJldHVybiBxdWVyaWVkXG5cbiAgaWYgKCFvcHRpb25zPy5mb3JjZVF1ZXJ5KSByZXR1cm4gY2FjaGVkXG4gIHJldHVybiBxdWVyaWVkLmxlbmd0aCA/IHF1ZXJpZWQgOiBjYWNoZWRcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUmVjb3J0ZVRva2VuICh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHZhbHVlXG4gICAgLnRvTG93ZXJDYXNlKClcbiAgICAubm9ybWFsaXplKCdORkQnKVxuICAgIC5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9nLCAnJylcbiAgICAucmVwbGFjZSgvW1xccy1dKy9nLCAnXycpXG59XG5cbmZ1bmN0aW9uIGlzWWVhck5hbWVkRmllbGQgKGZpZWxkOiBJTUZpZWxkU2NoZW1hKTogYm9vbGVhbiB7XG4gIGNvbnN0IHkgPVxuICAgIHBhcnNlWWVhcihmaWVsZC5qaW11TmFtZSkgPz9cbiAgICBwYXJzZVllYXIoZmllbGQubmFtZSkgPz9cbiAgICBwYXJzZVllYXIoZmllbGQuYWxpYXMpXG4gIHJldHVybiB5ICE9IG51bGwgJiYgeSA+PSAxOTg1ICYmIHkgPD0gMjAzNVxufVxuXG5mdW5jdGlvbiBmaW5kUmVjb3J0ZU5hbWVGaWVsZCAoZmllbGRzOiBJTUZpZWxkU2NoZW1hW10pOiBJTUZpZWxkU2NoZW1hIHwgbnVsbCB7XG4gIGNvbnN0IHBhdHRlcm5zID0gWydyZWNvcnRlJywgJ3JlZ2lhbycsICdyZWdpw6NvJywgJ2Jpb21hJywgJ25vbWUnLCAnbmFtZScsICdsYWJlbCddXG4gIHJldHVybiAoXG4gICAgZmllbGRzLmZpbmQoKGYpID0+IHtcbiAgICAgIGNvbnN0IGogPSBmLmppbXVOYW1lPy50b0xvd2VyQ2FzZSgpID8/ICcnXG4gICAgICBjb25zdCBuID0gZi5uYW1lPy50b0xvd2VyQ2FzZSgpID8/ICcnXG4gICAgICByZXR1cm4gcGF0dGVybnMuc29tZSgocCkgPT4gai5pbmNsdWRlcyhwKSB8fCBuLmluY2x1ZGVzKHApKVxuICAgIH0pID8/IG51bGxcbiAgKVxufVxuXG4vKiogTGF5b3V0IGFsdGVybmF0aXZvOiBjYWRhIHJlZ2lzdHJvID0gcmVjb3J0ZTsgY29sdW5hcyBudW3DqXJpY2FzID0gYW5vcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFllYXJTZXJpZXNGcm9tUmVjb3J0ZVJvd3MgKFxuICByZWNvcmRzOiBSZWNvcmRMaWtlW10sXG4gIHJlY29ydGVGaWVsZEppbXU6IHN0cmluZyxcbiAgZmllbGRzOiBJTUZpZWxkU2NoZW1hW11cbik6IFllYXJWYWx1ZVJvd1tdIHtcbiAgY29uc3QgeWVhckZpZWxkcyA9IGZpZWxkcy5maWx0ZXIoaXNZZWFyTmFtZWRGaWVsZClcbiAgaWYgKCF5ZWFyRmllbGRzLmxlbmd0aCkgcmV0dXJuIFtdXG5cbiAgY29uc3QgdGFyZ2V0ID0gbm9ybWFsaXplUmVjb3J0ZVRva2VuKHJlY29ydGVGaWVsZEppbXUpXG4gIGNvbnN0IG5hbWVGaWVsZCA9IGZpbmRSZWNvcnRlTmFtZUZpZWxkKGZpZWxkcylcblxuICBjb25zdCByb3cgPVxuICAgIHJlY29yZHMuZmluZCgocmVjKSA9PiB7XG4gICAgICBpZiAobmFtZUZpZWxkKSB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gcmVhZFJlY29yZFZhbHVlKHJlYywgbmFtZUZpZWxkLCBuYW1lRmllbGQuamltdU5hbWUpXG4gICAgICAgIGlmIChsYWJlbCAhPSBudWxsICYmIG5vcm1hbGl6ZVJlY29ydGVUb2tlbihTdHJpbmcobGFiZWwpKSA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBmIG9mIGZpZWxkcykge1xuICAgICAgICBpZiAoaXNZZWFyTmFtZWRGaWVsZChmKSB8fCBmLmppbXVOYW1lID09PSByZWNvcnRlRmllbGRKaW11KSBjb250aW51ZVxuICAgICAgICBjb25zdCB2ID0gcmVhZFJlY29yZFZhbHVlKHJlYywgZiwgZi5qaW11TmFtZSlcbiAgICAgICAgaWYgKHYgIT0gbnVsbCAmJiBub3JtYWxpemVSZWNvcnRlVG9rZW4oU3RyaW5nKHYpKSA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSkgPz8gbnVsbFxuXG4gIGlmICghcm93KSByZXR1cm4gW11cblxuICBjb25zdCBzZXJpZXM6IFllYXJWYWx1ZVJvd1tdID0gW11cbiAgZm9yIChjb25zdCB5ZiBvZiB5ZWFyRmllbGRzKSB7XG4gICAgY29uc3QgeWVhciA9XG4gICAgICBwYXJzZVllYXIoeWYuamltdU5hbWUpID8/IHBhcnNlWWVhcih5Zi5uYW1lKSA/PyBwYXJzZVllYXIoeWYuYWxpYXMpXG4gICAgY29uc3QgdmFsdWUgPSBwYXJzZU51bWVyaWNWYWx1ZShyZWFkUmVjb3JkVmFsdWUocm93LCB5ZiwgeWYuamltdU5hbWUpKVxuICAgIGlmICh5ZWFyID09IG51bGwgfHwgdmFsdWUgPT0gbnVsbCkgY29udGludWVcbiAgICBzZXJpZXMucHVzaCh7IHllYXIsIHZhbHVlIH0pXG4gIH1cblxuICByZXR1cm4gc2VyaWVzLnNvcnQoKGEsIGIpID0+IGEueWVhciAtIGIueWVhcilcbn1cblxuZnVuY3Rpb24gYnVpbGRZZWFyU2VyaWVzWWVhclJvd3MgKFxuICByZWNvcmRzOiBSZWNvcmRMaWtlW10sXG4gIHllYXJGaWVsZEppbXU6IHN0cmluZyxcbiAgcmVjb3J0ZUZpZWxkSmltdTogc3RyaW5nLFxuICBmaWVsZHM/OiBJTUZpZWxkU2NoZW1hW11cbik6IFllYXJWYWx1ZVJvd1tdIHtcbiAgY29uc3QgeWVhckZpZWxkID0gZmllbGRzPy5sZW5ndGhcbiAgICA/IGZpbmRGaWVsZEJ5SmltdU5hbWUoZmllbGRzLCB5ZWFyRmllbGRKaW11KVxuICAgIDogbnVsbFxuICBjb25zdCByZWNvcnRlRmllbGQgPSBmaWVsZHM/Lmxlbmd0aFxuICAgID8gZmluZEZpZWxkQnlKaW11TmFtZShmaWVsZHMsIHJlY29ydGVGaWVsZEppbXUpXG4gICAgOiBudWxsXG4gIGNvbnN0IHNlcmllczogWWVhclZhbHVlUm93W10gPSBbXVxuXG4gIGZvciAoY29uc3QgcmVjIG9mIHJlY29yZHMpIHtcbiAgICBjb25zdCB5ZWFyID0gcGFyc2VZZWFyKFxuICAgICAgcmVhZFJlY29yZFZhbHVlKHJlYywgeWVhckZpZWxkLCB5ZWFyRmllbGRKaW11KVxuICAgIClcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlTnVtZXJpY1ZhbHVlKFxuICAgICAgcmVhZFJlY29yZFZhbHVlKHJlYywgcmVjb3J0ZUZpZWxkLCByZWNvcnRlRmllbGRKaW11KVxuICAgIClcbiAgICBpZiAoeWVhciA9PSBudWxsIHx8IHZhbHVlID09IG51bGwpIGNvbnRpbnVlXG5cbiAgICBzZXJpZXMucHVzaCh7IHllYXIsIHZhbHVlIH0pXG4gIH1cblxuICByZXR1cm4gc2VyaWVzLnNvcnQoKGEsIGIpID0+IGEueWVhciAtIGIueWVhcilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkWWVhclNlcmllcyAoXG4gIHJlY29yZHM6IFJlY29yZExpa2VbXSxcbiAgeWVhckZpZWxkSmltdTogc3RyaW5nLFxuICByZWNvcnRlRmllbGRKaW11OiBzdHJpbmcsXG4gIGZpZWxkcz86IElNRmllbGRTY2hlbWFbXVxuKTogWWVhclZhbHVlUm93W10ge1xuICBjb25zdCB5ZWFyUm93cyA9IGJ1aWxkWWVhclNlcmllc1llYXJSb3dzKFxuICAgIHJlY29yZHMsXG4gICAgeWVhckZpZWxkSmltdSxcbiAgICByZWNvcnRlRmllbGRKaW11LFxuICAgIGZpZWxkc1xuICApXG4gIGlmICh5ZWFyUm93cy5sZW5ndGggPiAwKSByZXR1cm4geWVhclJvd3NcblxuICBpZiAoZmllbGRzPy5sZW5ndGgpIHtcbiAgICByZXR1cm4gYnVpbGRZZWFyU2VyaWVzRnJvbVJlY29ydGVSb3dzKHJlY29yZHMsIHJlY29ydGVGaWVsZEppbXUsIGZpZWxkcylcbiAgfVxuXG4gIHJldHVybiB5ZWFyUm93c1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0WWVhcnNSYW5nZVN1bW1hcnkgKHNlcmllczogWWVhclZhbHVlUm93W10pOiBzdHJpbmcgfCBudWxsIHtcbiAgaWYgKCFzZXJpZXMubGVuZ3RoKSByZXR1cm4gbnVsbFxuICBjb25zdCBtaW4gPSBzZXJpZXNbMF0ueWVhclxuICBjb25zdCBtYXggPSBzZXJpZXNbc2VyaWVzLmxlbmd0aCAtIDFdLnllYXJcbiAgY29uc3QgY291bnQgPSBzZXJpZXMubGVuZ3RoXG4gIGlmIChtaW4gPT09IG1heCkgcmV0dXJuIGAke21pbn0gKCR7Y291bnR9IGFubylgXG4gIHJldHVybiBgJHttaW594oCTJHttYXh9ICgke2NvdW50fSBhbm9zKWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzWWVhck91dE9mVHlwaWNhbFJhbmdlICh5ZWFyOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIHllYXIgPCAyMDAxIHx8IHllYXIgPiAyMDI1XG59XG5cbi8qKiBWYXJpYcOnw6NvIHBlcmNlbnR1YWwgZG8gdmFsb3IgaW5pY2lhbCAoYW5vIG1haXMgYW50aWdvKSBwYXJhIG8gZmluYWwgKGFubyBtYWlzIHJlY2VudGUpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbGNQZXJjZW50VmFyaWF0aW9uIChcbiAgdmFsdWVJbmljaWFsOiBudW1iZXIsXG4gIHZhbHVlRmluYWw6IG51bWJlclxuKTogbnVtYmVyIHwgbnVsbCB7XG4gIGlmICghTnVtYmVyLmlzRmluaXRlKHZhbHVlSW5pY2lhbCkgfHwgIU51bWJlci5pc0Zpbml0ZSh2YWx1ZUZpbmFsKSkgcmV0dXJuIG51bGxcbiAgaWYgKHZhbHVlSW5pY2lhbCA9PT0gMCkgcmV0dXJuIG51bGxcbiAgcmV0dXJuICgodmFsdWVGaW5hbCAtIHZhbHVlSW5pY2lhbCkgLyB2YWx1ZUluaWNpYWwpICogMTAwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQZXJjZW50VmFyaWF0aW9uIChwY3Q6IG51bWJlcik6IHN0cmluZyB7XG4gIGNvbnN0IHNpZ24gPSBwY3QgPiAwID8gJysnIDogJydcbiAgcmV0dXJuIGAke3NpZ259JHtwY3QudG9Mb2NhbGVTdHJpbmcoJ3B0LUJSJywge1xuICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDJcbiAgfSl9JWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlRm9yWWVhciAoXG4gIHNlcmllczogWWVhclZhbHVlUm93W10sXG4gIHllYXI6IG51bWJlclxuKTogbnVtYmVyIHwgbnVsbCB7XG4gIGNvbnN0IHJvdyA9IHNlcmllcy5maW5kKChyKSA9PiByLnllYXIgPT09IHllYXIpXG4gIHJldHVybiByb3cgIT0gbnVsbCA/IHJvdy52YWx1ZSA6IG51bGxcbn1cblxuLyoqIFNvbWEgb3MgdmFsb3JlcyBkb3MgYW5vcyBpbmZvcm1hZG9zOyByZXRvcm5hIG51bGwgc2UgYWxndW0gYW5vIG7Do28gdGl2ZXIgZGFkby4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdW1WYWx1ZXNGb3JZZWFycyAoXG4gIHNlcmllczogWWVhclZhbHVlUm93W10sXG4gIHllYXJzOiBudW1iZXJbXVxuKTogbnVtYmVyIHwgbnVsbCB7XG4gIGlmICgheWVhcnMubGVuZ3RoKSByZXR1cm4gbnVsbFxuICBsZXQgc3VtID0gMFxuICBmb3IgKGNvbnN0IHllYXIgb2YgeWVhcnMpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGdldFZhbHVlRm9yWWVhcihzZXJpZXMsIHllYXIpXG4gICAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiBudWxsXG4gICAgc3VtICs9IHZhbHVlXG4gIH1cbiAgcmV0dXJuIHN1bVxufVxuXG4vKiogQW5vcyBkaXNwb27DrXZlaXMgcGFyYSBvIHBlcsOtb2RvIGluaWNpYWwgKGFudGVzIGRvIHBlcsOtb2RvIGZpbmFsLCBzZSBob3V2ZXIpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFllYXJzQWxsb3dlZEZvckluaWNpYWwgKFxuICBhbGxZZWFyczogbnVtYmVyW10sXG4gIHBlcmlvZG9GaW5hbDogbnVtYmVyW11cbik6IG51bWJlcltdIHtcbiAgY29uc3QgYmxvY2tlZCA9IG5ldyBTZXQocGVyaW9kb0ZpbmFsKVxuICBjb25zdCBtYXhGaW5hbCA9IHBlcmlvZG9GaW5hbC5sZW5ndGggPyBNYXRoLm1pbiguLi5wZXJpb2RvRmluYWwpIDogSW5maW5pdHlcbiAgcmV0dXJuIGFsbFllYXJzLmZpbHRlcigoeSkgPT4gIWJsb2NrZWQuaGFzKHkpICYmIHkgPCBtYXhGaW5hbClcbn1cblxuLyoqIEFub3MgZGlzcG9uw612ZWlzIHBhcmEgbyBwZXLDrW9kbyBmaW5hbCAoZGVwb2lzIGRvIHBlcsOtb2RvIGluaWNpYWwsIHNlIGhvdXZlcikuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0WWVhcnNBbGxvd2VkRm9yRmluYWwgKFxuICBhbGxZZWFyczogbnVtYmVyW10sXG4gIHBlcmlvZG9JbmljaWFsOiBudW1iZXJbXVxuKTogbnVtYmVyW10ge1xuICBjb25zdCBibG9ja2VkID0gbmV3IFNldChwZXJpb2RvSW5pY2lhbClcbiAgY29uc3QgbWluSW5pY2lhbCA9IHBlcmlvZG9JbmljaWFsLmxlbmd0aCA/IE1hdGgubWF4KC4uLnBlcmlvZG9JbmljaWFsKSA6IC1JbmZpbml0eVxuICByZXR1cm4gYWxsWWVhcnMuZmlsdGVyKCh5KSA9PiAhYmxvY2tlZC5oYXMoeSkgJiYgeSA+IG1pbkluaWNpYWwpXG59XG5cbi8qKiBNYXJjYS9kZXNtYXJjYSB1bSBhbm8gbWFudGVuZG8gYXBlbmFzIHNlcXXDqm5jaWFzIGNvbnNlY3V0aXZhcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVDb25zZWN1dGl2ZVllYXIgKFxuICBwZXJpb2Q6IG51bWJlcltdLFxuICB5ZWFyOiBudW1iZXJcbik6IHsgbmV4dDogbnVtYmVyW107IHJlamVjdGVkOiBib29sZWFuIH0ge1xuICBpZiAocGVyaW9kLmluY2x1ZGVzKHllYXIpKSB7XG4gICAgcmV0dXJuIHsgbmV4dDogcGVyaW9kLmZpbHRlcigoeSkgPT4geSAhPT0geWVhciksIHJlamVjdGVkOiBmYWxzZSB9XG4gIH1cbiAgY29uc3QgbmV4dCA9IFsuLi5wZXJpb2QsIHllYXJdLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuICBpZiAoIWFyZUNvbnNlY3V0aXZlWWVhcnMobmV4dCkpIHtcbiAgICByZXR1cm4geyBuZXh0OiBwZXJpb2QsIHJlamVjdGVkOiB0cnVlIH1cbiAgfVxuICByZXR1cm4geyBuZXh0LCByZWplY3RlZDogZmFsc2UgfVxufVxuXG4vKiogVmVyaWZpY2Egc2Ugb3MgYW5vcyBmb3JtYW0gdW1hIHNlcXXDqm5jaWEgY29uc2VjdXRpdmEgKGV4LjogMjAxMCwgMjAxMSwgMjAxMikuICovXG5leHBvcnQgZnVuY3Rpb24gYXJlQ29uc2VjdXRpdmVZZWFycyAoeWVhcnM6IG51bWJlcltdKTogYm9vbGVhbiB7XG4gIGlmICh5ZWFycy5sZW5ndGggPD0gMSkgcmV0dXJuIHRydWVcbiAgY29uc3Qgc29ydGVkID0gWy4uLnllYXJzXS5zb3J0KChhLCBiKSA9PiBhIC0gYilcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBzb3J0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc29ydGVkW2ldIC0gc29ydGVkW2kgLSAxXSAhPT0gMSkgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuLyoqIFLDs3R1bG8gY29tcGFjdG8gcGFyYSB1bSBvdSBtYWlzIGFub3MgKGV4LjogXCIyMDEwXCIgb3UgXCIyMDEw4oCTMjAxMiAoMyBhbm9zKVwiKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQZXJpb2RMYWJlbCAoeWVhcnM6IG51bWJlcltdKTogc3RyaW5nIHtcbiAgY29uc3Qgc29ydGVkID0gWy4uLnllYXJzXS5zb3J0KChhLCBiKSA9PiBhIC0gYilcbiAgaWYgKCFzb3J0ZWQubGVuZ3RoKSByZXR1cm4gJydcbiAgaWYgKHNvcnRlZC5sZW5ndGggPT09IDEpIHJldHVybiBTdHJpbmcoc29ydGVkWzBdKVxuICByZXR1cm4gYCR7c29ydGVkWzBdfeKAkyR7c29ydGVkW3NvcnRlZC5sZW5ndGggLSAxXX0gKCR7c29ydGVkLmxlbmd0aH0gYW5vcylgXG59XG5cbi8qKiBJbnRlcnZhbG8gZGUgYW5vcyBzZW0gY29udGFnZW0gKGV4LjogXCIyMDEwXCIgb3UgXCIyMDEw4oCTMjAxMlwiKSDigJQgdXNvIGVtIHJlc3VsdGFkb3MuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UGVyaW9kUmFuZ2VMYWJlbCAoeWVhcnM6IG51bWJlcltdKTogc3RyaW5nIHtcbiAgY29uc3Qgc29ydGVkID0gWy4uLnllYXJzXS5zb3J0KChhLCBiKSA9PiBhIC0gYilcbiAgaWYgKCFzb3J0ZWQubGVuZ3RoKSByZXR1cm4gJydcbiAgaWYgKHNvcnRlZC5sZW5ndGggPT09IDEpIHJldHVybiBTdHJpbmcoc29ydGVkWzBdKVxuICByZXR1cm4gYCR7c29ydGVkWzBdfeKAkyR7c29ydGVkW3NvcnRlZC5sZW5ndGggLSAxXX1gXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmFyaWF0aW9uUmVzdWx0IHtcbiAgcGN0OiBudW1iZXJcbiAgdmFsdWVJbmljaWFsOiBudW1iZXJcbiAgdmFsdWVGaW5hbDogbnVtYmVyXG4gIHllYXJzSW5pY2lhbDogbnVtYmVyW11cbiAgeWVhcnNGaW5hbDogbnVtYmVyW11cbn1cblxuZXhwb3J0IHR5cGUgUGVyaW9kVmFyaWF0aW9uT3V0Y29tZSA9XG4gIHwgeyBvazogdHJ1ZTsgZGF0YTogVmFyaWF0aW9uUmVzdWx0IH1cbiAgfCB7IG9rOiBmYWxzZTsgbWVzc2FnZTogc3RyaW5nIH1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVQZXJpb2RWYXJpYXRpb24gKFxuICBzZXJpZXM6IFllYXJWYWx1ZVJvd1tdLFxuICBwZXJpb2RvSW5pY2lhbDogbnVtYmVyW10sXG4gIHBlcmlvZG9GaW5hbDogbnVtYmVyW11cbik6IFBlcmlvZFZhcmlhdGlvbk91dGNvbWUge1xuICBjb25zdCBpbmkgPSBbLi4ucGVyaW9kb0luaWNpYWxdLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuICBjb25zdCBmaW4gPSBbLi4ucGVyaW9kb0ZpbmFsXS5zb3J0KChhLCBiKSA9PiBhIC0gYilcblxuICBpZiAoIWluaS5sZW5ndGggfHwgIWZpbi5sZW5ndGgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogJ1NlbGVjaW9uZSBwZWxvIG1lbm9zIHVtIGFubyBlbSBjYWRhIHBlcsOtb2RvLidcbiAgICB9XG4gIH1cblxuICBpZiAoaW5pLmxlbmd0aCAhPT0gZmluLmxlbmd0aCkge1xuICAgIHJldHVybiB7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBtZXNzYWdlOlxuICAgICAgICAnTyBwZXLDrW9kbyBpbmljaWFsIGUgbyBwZXLDrW9kbyBmaW5hbCBkZXZlbSB0ZXIgYSBtZXNtYSBxdWFudGlkYWRlIGRlIGFub3MuJ1xuICAgIH1cbiAgfVxuXG4gIGlmICghYXJlQ29uc2VjdXRpdmVZZWFycyhpbmkpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6ICdPcyBhbm9zIGRvIHBlcsOtb2RvIGluaWNpYWwgZGV2ZW0gc2VyIGNvbnNlY3V0aXZvcy4nXG4gICAgfVxuICB9XG5cbiAgaWYgKCFhcmVDb25zZWN1dGl2ZVllYXJzKGZpbikpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogJ09zIGFub3MgZG8gcGVyw61vZG8gZmluYWwgZGV2ZW0gc2VyIGNvbnNlY3V0aXZvcy4nXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaW5pU2V0ID0gbmV3IFNldChpbmkpXG4gIGlmIChmaW4uc29tZSgoeSkgPT4gaW5pU2V0Lmhhcyh5KSkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogJ1VtIGFubyBuw6NvIHBvZGUgcGVydGVuY2VyIGFvcyBkb2lzIHBlcsOtb2RvcyBhbyBtZXNtbyB0ZW1wby4nXG4gICAgfVxuICB9XG5cbiAgY29uc3QgbWF4SW5pY2lhbCA9IGluaVtpbmkubGVuZ3RoIC0gMV1cbiAgY29uc3QgbWluRmluYWwgPSBmaW5bMF1cbiAgaWYgKG1heEluaWNpYWwgPj0gbWluRmluYWwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogJ08gcGVyw61vZG8gZmluYWwgZGV2ZSBzZXIgcG9zdGVyaW9yIGFvIHBlcsOtb2RvIGluaWNpYWwuJ1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHZhbHVlSW5pY2lhbCA9IHN1bVZhbHVlc0ZvclllYXJzKHNlcmllcywgaW5pKVxuICBjb25zdCB2YWx1ZUZpbmFsID0gc3VtVmFsdWVzRm9yWWVhcnMoc2VyaWVzLCBmaW4pXG5cbiAgaWYgKHZhbHVlSW5pY2lhbCA9PSBudWxsIHx8IHZhbHVlRmluYWwgPT0gbnVsbCkge1xuICAgIHJldHVybiB7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBtZXNzYWdlOlxuICAgICAgICAnVW0gb3UgbWFpcyBhbm9zIHNlbGVjaW9uYWRvcyBuw6NvIHBvc3N1ZW0gZGFkbyBwYXJhIGVzdGUgcmVjb3J0ZS4nXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcGN0ID0gY2FsY1BlcmNlbnRWYXJpYXRpb24odmFsdWVJbmljaWFsLCB2YWx1ZUZpbmFsKVxuICBpZiAocGN0ID09IG51bGwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTpcbiAgICAgICAgJ0Egc29tYSBkbyBwZXLDrW9kbyBpbmljaWFsIMOpIHplcm87IG7Do28gw6kgcG9zc8OtdmVsIGNhbGN1bGFyIGEgdmFyaWHDp8OjbyBwZXJjZW50dWFsLidcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG9rOiB0cnVlLFxuICAgIGRhdGE6IHtcbiAgICAgIHBjdCxcbiAgICAgIHZhbHVlSW5pY2lhbCxcbiAgICAgIHZhbHVlRmluYWwsXG4gICAgICB5ZWFyc0luaWNpYWw6IGluaSxcbiAgICAgIHllYXJzRmluYWw6IGZpblxuICAgIH1cbiAgfVxufVxuXG4vKiogQ29tcGFyYcOnw6NvIGVudHJlIGRvaXMgYW5vcyDDum5pY29zIChhdGFsaG8gcGFyYSBwZXLDrW9kb3MgZGUgdW0gYW5vKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlVmFyaWF0aW9uIChcbiAgc2VyaWVzOiBZZWFyVmFsdWVSb3dbXSxcbiAgYW5vSW5pY2lhbDogbnVtYmVyLFxuICBhbm9GaW5hbDogbnVtYmVyXG4pOiBQZXJpb2RWYXJpYXRpb25PdXRjb21lIHtcbiAgcmV0dXJuIGNvbXB1dGVQZXJpb2RWYXJpYXRpb24oc2VyaWVzLCBbYW5vSW5pY2lhbF0sIFthbm9GaW5hbF0pXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHtcclxuICBSZWFjdCxcclxuICBqc3gsXHJcbiAgdHlwZSBBbGxXaWRnZXRQcm9wcyxcclxuICBEYXRhU291cmNlQ29tcG9uZW50XHJcbn0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBMb2FkaW5nLCBMYWJlbCwgQnV0dG9uIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHR5cGUgeyBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcclxuaW1wb3J0IHtcclxuICBMQUJFTF9QRVJJT0RPX0ZJTkFMLFxyXG4gIExBQkVMX1BFUklPRE9fSU5JQ0lBTCxcclxuICBISU5UX1BFUklPRF9SVUxFUyxcclxuICBNU0dfTk9UX0NPTkZJR1VSRUQsXHJcbiAgTVNHX05PX0RBVEEsXHJcbiAgUExBQ0VIT0xERVJfUEVSSU9ET19GSU5BTCxcclxuICBQTEFDRUhPTERFUl9QRVJJT0RPX0lOSUNJQUxcclxufSBmcm9tICcuLi9jb25zdGFudHMnXHJcbmltcG9ydCB7IFZhcmlhdGlvblJlc3VsdFBhbmVsIH0gZnJvbSAnLi9jb21wb25lbnRzL3ZhcmlhdGlvbi1yZXN1bHQnXHJcbmltcG9ydCB7IHVzZVByb2Rlc1NlcmllcyB9IGZyb20gJy4vaG9va3MvdXNlLXByb2Rlcy1zZXJpZXMnXHJcbmltcG9ydCB7IHVzZVBlcmlvZFNlbGVjdGlvbiB9IGZyb20gJy4vaG9va3MvdXNlLXBlcmlvZC1zZWxlY3Rpb24nXHJcbmltcG9ydCB7IHdpZGdldFN0eWxlcyB9IGZyb20gJy4vc3R5bGVzJ1xyXG5pbXBvcnQgeyBZZWFyUGVyaW9kUGlja2VyIH0gZnJvbSAnLi95ZWFyLXBlcmlvZC1waWNrZXInXHJcblxyXG5jb25zdCBXaWRnZXQgPSAocHJvcHM6IEFsbFdpZGdldFByb3BzPElNQ29uZmlnPikgPT4ge1xyXG4gIGNvbnN0IHVzZURzID0gcHJvcHMudXNlRGF0YVNvdXJjZXM/LlswXVxyXG4gIGNvbnN0IHllYXJGaWVsZCA9IHByb3BzLmNvbmZpZz8ueWVhckZpZWxkXHJcbiAgY29uc3QgcmVjb3J0ZUZpZWxkID0gcHJvcHMuY29uZmlnPy5yZWNvcnRlRmllbGRcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgc2VyaWVzLFxyXG4gICAgbG9hZGluZyxcclxuICAgIGVycm9yLFxyXG4gICAgaGFuZGxlRGF0YVNvdXJjZVJlYWR5LFxyXG4gICAgYXBwbHlTY2hlbWEsXHJcbiAgICBzZXREc1N0YXR1cyxcclxuICAgIHdhaXRpbmdGb3JMYXllclxyXG4gIH0gPSB1c2VQcm9kZXNTZXJpZXMoeyByZWNvcnRlRmllbGQsIHllYXJGaWVsZCB9KVxyXG5cclxuICBjb25zdCBhdmFpbGFibGVZZWFycyA9IFJlYWN0LnVzZU1lbW8oXHJcbiAgICAoKSA9PiBzZXJpZXMubWFwKChyKSA9PiByLnllYXIpLFxyXG4gICAgW3Nlcmllc11cclxuICApXHJcblxyXG4gIGNvbnN0IHtcclxuICAgIHBlcmlvZG9JbmljaWFsLFxyXG4gICAgcGVyaW9kb0ZpbmFsLFxyXG4gICAgeWVhcnNGb3JJbmljaWFsLFxyXG4gICAgeWVhcnNGb3JGaW5hbCxcclxuICAgIGhpbnRJbmljaWFsLFxyXG4gICAgaGludEZpbmFsLFxyXG4gICAgdmFyaWF0aW9uLFxyXG4gICAgaGFzUGVyaW9kU2VsZWN0aW9uLFxyXG4gICAgY2xlYXJQZXJpb2RTZWxlY3Rpb24sXHJcbiAgICBoYW5kbGVQZXJpb2RvSW5pY2lhbENoYW5nZSxcclxuICAgIGhhbmRsZVBlcmlvZG9GaW5hbENoYW5nZSxcclxuICAgIHJlamVjdFBlcmlvZG9JbmljaWFsLFxyXG4gICAgcmVqZWN0UGVyaW9kb0ZpbmFsXHJcbiAgfSA9IHVzZVBlcmlvZFNlbGVjdGlvbihzZXJpZXMsIGF2YWlsYWJsZVllYXJzLCByZWNvcnRlRmllbGQpXHJcblxyXG4gIGNvbnN0IGlzQ29uZmlndXJlZCA9IEJvb2xlYW4odXNlRHMgJiYgcmVjb3J0ZUZpZWxkKVxyXG4gIGNvbnN0IHNob3dGb3JtID1cclxuICAgIGlzQ29uZmlndXJlZCAmJiAhbG9hZGluZyAmJiAhd2FpdGluZ0ZvckxheWVyICYmICFlcnJvciAmJiBzZXJpZXMubGVuZ3RoID4gMFxyXG5cclxuICBpZiAoIWlzQ29uZmlndXJlZCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29tcGFyYWRvci1wcm9kZXMgamltdS13aWRnZXRcIiBjc3M9e3dpZGdldFN0eWxlc30+XHJcbiAgICAgICAgPHA+e01TR19OT1RfQ09ORklHVVJFRH08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbXBhcmFkb3ItcHJvZGVzIGppbXUtd2lkZ2V0XCIgY3NzPXt3aWRnZXRTdHlsZXN9PlxyXG4gICAgICA8RGF0YVNvdXJjZUNvbXBvbmVudFxyXG4gICAgICAgIHVzZURhdGFTb3VyY2U9e3VzZURzfVxyXG4gICAgICAgIHdpZGdldElkPXtwcm9wcy5pZH1cclxuICAgICAgICBvbkRhdGFTb3VyY2VDcmVhdGVkPXtoYW5kbGVEYXRhU291cmNlUmVhZHl9XHJcbiAgICAgICAgb25EYXRhU291cmNlU2NoZW1hQ2hhbmdlPXthcHBseVNjaGVtYX1cclxuICAgICAgICBvbkRhdGFTb3VyY2VJbmZvQ2hhbmdlPXsoaW5mbykgPT4gc2V0RHNTdGF0dXMoaW5mbz8uc3RhdHVzKX1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIHsobG9hZGluZyB8fCB3YWl0aW5nRm9yTGF5ZXIpICYmIDxMb2FkaW5nIC8+fVxyXG5cclxuICAgICAge2Vycm9yICYmIDxwIGNsYXNzTmFtZT1cImNvbXBhcmFkb3ItZXJyb3JcIj57ZXJyb3J9PC9wPn1cclxuXHJcbiAgICAgIHshbG9hZGluZyAmJiAhd2FpdGluZ0ZvckxheWVyICYmICFlcnJvciAmJiBzZXJpZXMubGVuZ3RoID09PSAwICYmIChcclxuICAgICAgICA8cD57TVNHX05PX0RBVEF9PC9wPlxyXG4gICAgICApfVxyXG5cclxuICAgICAge3Nob3dGb3JtICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhcmFkb3ItZm9ybVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYXJhZG9yLWZpZWxkLXJvd1wiPlxyXG4gICAgICAgICAgICA8TGFiZWw+e0xBQkVMX1BFUklPRE9fSU5JQ0lBTH08L0xhYmVsPlxyXG4gICAgICAgICAgICA8WWVhclBlcmlvZFBpY2tlclxyXG4gICAgICAgICAgICAgIGF2YWlsYWJsZVllYXJzPXt5ZWFyc0ZvckluaWNpYWx9XHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWRZZWFycz17cGVyaW9kb0luaWNpYWx9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1BMQUNFSE9MREVSX1BFUklPRE9fSU5JQ0lBTH1cclxuICAgICAgICAgICAgICBoaW50PXtoaW50SW5pY2lhbH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUGVyaW9kb0luaWNpYWxDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgb25SZWplY3RlZFNlbGVjdGlvbj17cmVqZWN0UGVyaW9kb0luaWNpYWx9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhcmFkb3ItZmllbGQtcm93XCI+XHJcbiAgICAgICAgICAgIDxMYWJlbD57TEFCRUxfUEVSSU9ET19GSU5BTH08L0xhYmVsPlxyXG4gICAgICAgICAgICA8WWVhclBlcmlvZFBpY2tlclxyXG4gICAgICAgICAgICAgIGF2YWlsYWJsZVllYXJzPXt5ZWFyc0ZvckZpbmFsfVxyXG4gICAgICAgICAgICAgIHNlbGVjdGVkWWVhcnM9e3BlcmlvZG9GaW5hbH1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17UExBQ0VIT0xERVJfUEVSSU9ET19GSU5BTH1cclxuICAgICAgICAgICAgICBoaW50PXtoaW50RmluYWx9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVBlcmlvZG9GaW5hbENoYW5nZX1cclxuICAgICAgICAgICAgICBvblJlamVjdGVkU2VsZWN0aW9uPXtyZWplY3RQZXJpb2RvRmluYWx9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFyYWRvci1oaW50XCI+e0hJTlRfUEVSSU9EX1JVTEVTfTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYXJhZG9yLWFjdGlvbnNcIj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29tcGFyYWRvci1idG4tbGltcGFyXCJcclxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWhhc1BlcmlvZFNlbGVjdGlvbn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtjbGVhclBlcmlvZFNlbGVjdGlvbn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIExpbXBhclxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHt2YXJpYXRpb24gIT0gbnVsbCAmJiB2YXJpYXRpb24ub2sgPT09IGZhbHNlICYmIChcclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29tcGFyYWRvci1lcnJvciBjb21wYXJhZG9yLWVycm9yLS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgIHt2YXJpYXRpb24ubWVzc2FnZX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICB7dmFyaWF0aW9uICE9IG51bGwgJiYgdmFyaWF0aW9uLm9rID09PSB0cnVlICYmIChcclxuICAgICAgICAgICAgPFZhcmlhdGlvblJlc3VsdFBhbmVsIGRhdGE9e3ZhcmlhdGlvbi5kYXRhfSAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0XHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=