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
        const fetchOpts = {
            yearFieldJimu: effectiveYearField,
            recorteFieldJimu: recorteField,
            fields: fieldList
        };
        try {
            let records = yield (0,_utils_prodes_table__WEBPACK_IMPORTED_MODULE_1__.fetchLayerRecords)(main, fetchOpts);
            let built = (0,_utils_prodes_table__WEBPACK_IMPORTED_MODULE_1__.buildYearSeries)(records, effectiveYearField, recorteField, fieldList);
            if (records.length > 0 && built.length === 0) {
                const forced = yield (0,_utils_prodes_table__WEBPACK_IMPORTED_MODULE_1__.fetchLayerRecords)(main, Object.assign(Object.assign({}, fetchOpts), { forceQuery: true }));
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
const queryOptions = { scope: jimu_core__WEBPACK_IMPORTED_MODULE_0__.QueryScope.InAllData };
const buildQueryParams = (outFields = ['*']) => ({
    where: '1=1',
    outFields,
    returnGeometry: false,
    pageSize: 2000,
    disableClientQuery: true
});
function recordsAreReadable(records) {
    return records.length > 0 && records.some(recordHasReadableData);
}
function queryViaJsapiLayer(ds) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const layer = ds.layer;
        if (!(layer === null || layer === void 0 ? void 0 : layer.queryFeatures) || typeof ds.buildRecord !== 'function')
            return [];
        try {
            const result = yield layer.queryFeatures({
                where: '1=1',
                outFields: ['*'],
                returnGeometry: false,
                num: 2000
            });
            const features = (_a = result === null || result === void 0 ? void 0 : result.features) !== null && _a !== void 0 ? _a : [];
            return features.map((f) => ds.buildRecord(f));
        }
        catch (_b) {
            return [];
        }
    });
}
function queryAllRecords(ds_1) {
    return __awaiter(this, arguments, void 0, function* (ds, outFields = ['*']) {
        var _a;
        const params = buildQueryParams(outFields);
        if (typeof (ds === null || ds === void 0 ? void 0 : ds.load) === 'function') {
            try {
                const records = yield ds.load(params, queryOptions);
                if (records === null || records === void 0 ? void 0 : records.length)
                    return records;
            }
            catch (_b) {
                // tenta próximo método
            }
        }
        if (typeof (ds === null || ds === void 0 ? void 0 : ds.loadAll) === 'function') {
            try {
                const records = yield ds.loadAll(params, undefined, undefined, queryOptions);
                if (records === null || records === void 0 ? void 0 : records.length)
                    return records;
            }
            catch (_c) {
                // tenta query abaixo
            }
        }
        if (typeof (ds === null || ds === void 0 ? void 0 : ds.query) === 'function') {
            try {
                const result = yield ds.query(params, queryOptions);
                return (_a = result === null || result === void 0 ? void 0 : result.records) !== null && _a !== void 0 ? _a : [];
            }
            catch (_d) {
                // tenta JS API
            }
        }
        return queryViaJsapiLayer(ds);
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
        const queried = yield queryAllRecords(ds, outFields);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sTUFBTSxTQUFTLEdBQUcsS0FBSztBQUV2QixNQUFNLHFCQUFxQixHQUFHLGdDQUFnQztBQUM5RCxNQUFNLG1CQUFtQixHQUFHLDRCQUE0QjtBQUV4RCxNQUFNLGtCQUFrQixHQUM3QixzRUFBc0U7QUFFakUsTUFBTSxXQUFXLEdBQUcsNkNBQTZDO0FBRWpFLE1BQU0sZUFBZSxHQUFHLCtDQUErQztBQUV2RSxNQUFNLGtCQUFrQixHQUM3Qix1RkFBdUY7SUFDdkYseUdBQXlHO0lBQ3pHLHNEQUFzRDtBQUVqRCxNQUFNLGdCQUFnQixHQUFHLDhDQUE4QztBQUV2RSxNQUFNLGlCQUFpQixHQUM1QiwrRkFBK0Y7QUFFMUYsTUFBTSwyQkFBMkIsR0FBRywwQ0FBMEM7QUFDOUUsTUFBTSx5QkFBeUIsR0FBRyx3Q0FBd0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QmpGLGVBQWU7QUFDdUI7QUFLTDtBQUNnQztBQU0xRCxNQUFNLG9CQUFvQixHQUFHLENBQUMsRUFBRSxJQUFJLEVBQXdCLEVBQUUsRUFBRTtJQUNyRSxNQUFNLElBQUksR0FBRywrREFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBRXZDLE9BQU8sQ0FDTCx3REFBSyxTQUFTLEVBQUMsbUJBQW1CO1FBQ2hDLHdEQUFLLFNBQVMsRUFBQyx5QkFBeUI7O1lBRXJDLDJFQUFzQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7O1lBQUksR0FBRztZQUNoRCwyRUFBc0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUNwQztRQUNOLHdEQUFLLFNBQVMsRUFBRSxvREFBb0QsSUFBSSxFQUFFLElBQ3ZFLDJFQUFzQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FDN0I7UUFDTix3REFBSyxTQUFTLEVBQUMsMEJB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QVMsRUFBQyxzQkFBc0I7Z0JBQ25DLCtDQUFDLDBDQUFLLFFBQUUsMkRBQW1CLENBQVM7Z0JBQ3BDLCtDQUFDLGlFQUFnQixJQUNmLGNBQWMsRUFBRSxhQUFhLEVBQzdCLGFBQWEsRUFBRSxZQUFZLEVBQzNCLFdBQVcsRUFBRSxpRUFBeUIsRUFDdEMsSUFBSSxFQUFFLFNBQVMsRUFDZixRQUFRLEVBQUUsd0JBQXdCLEVBQ2xDLG1CQUFtQixFQUFFLGtCQUFrQixHQUN2QztnQkFDRix3REFBSyxTQUFTLEVBQUMsaUJBQWlCLElBQUUseURBQWlCLENBQU8sQ0FDdEQ7WUFFTix3REFBSyxTQUFTLEVBQUMsb0JBQW9CO2dCQUNqQywrQ0FBQywyQ0FBTSxJQUNMLElBQUksRUFBQyxJQUFJLEVBQ1QsSUFBSSxFQUFDLFdBQVcsRUFDaEIsU0FBUyxFQUFDLHVCQUF1QixFQUNqQyxRQUFRLEVBQUUsQ0FBQyxrQkFBa0IsRUFDN0IsT0FBTyxFQUFFLG9CQUFvQixhQUd0QixDQUNMO1lBRUwsU0FBUyxJQUFJLElBQUksSUFBSSxTQUFTLENBQUMsRUFBRSxLQUFLLEtBQUssSUFBSSxDQUM5QyxzREFBRyxTQUFTLEVBQUMsMENBQTBDLElBQ3BELFNBQVMsQ0FBQyxPQUFPLENBQ2hCLENBQ0w7WUFFQSxTQUFTLElBQUksSUFBSSxJQUFJLFNBQVMsQ0FBQyxFQUFFLEtBQUssSUFBSSxJQUFJLENBQzdDLCtDQUFDLDhFQUFvQixJQUFDLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSSxHQUFJLENBQy9DLENBQ0csQ0FDUCxDQUNHLENBQ1A7QUFDSCxDQUFDO0FBRUQsaUVBQWUsTUFBTTtBQUViLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2NvbXBhcmFkb3JfcHJvZGVzL3NyYy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2NvbXBhcmFkb3JfcHJvZGVzL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvdmFyaWF0aW9uLXJlc3VsdC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2NvbXBhcmFkb3JfcHJvZGVzL3NyYy9ydW50aW1lL2hvb2tzL3VzZS1wZXJpb2Qtc2VsZWN0aW9uLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9zcmMvcnVudGltZS9ob29rcy91c2UtcHJvZGVzLXNlcmllcy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY29tcGFyYWRvcl9wcm9kZXMvc3JjL3J1bnRpbWUvc3R5bGVzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9zcmMvcnVudGltZS95ZWFyLXBlcmlvZC1waWNrZXIudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9zcmMvdXRpbHMvZGF0YS1zb3VyY2UudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2NvbXBhcmFkb3JfcHJvZGVzL3NyYy91dGlscy9mb3JtYXQudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2NvbXBhcmFkb3JfcHJvZGVzL3NyYy91dGlscy9wcm9kZXMtdGFibGUudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2NvbXBhcmFkb3JfcHJvZGVzL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFSRUFfVU5JVCA9ICdrbcKyJ1xuXG5leHBvcnQgY29uc3QgTEFCRUxfUEVSSU9ET19JTklDSUFMID0gJ0FubyBpbmljaWFsIG91IHBlcsOtb2RvIGluaWNpYWwnXG5leHBvcnQgY29uc3QgTEFCRUxfUEVSSU9ET19GSU5BTCA9ICdBbm8gZmluYWwgb3UgcGVyw61vZG8gZmluYWwnXG5cbmV4cG9ydCBjb25zdCBNU0dfTk9UX0NPTkZJR1VSRUQgPVxuICAnRXN0YSBmZXJyYW1lbnRhIGFpbmRhIG7Do28gZm9pIGNvbmZpZ3VyYWRhIHBlbG8gYXV0b3IgZGEgZXhwZXJpw6puY2lhLidcblxuZXhwb3J0IGNvbnN0IE1TR19OT19EQVRBID0gJ07Do28gaMOhIGRhZG9zIGRpc3BvbsOtdmVpcyBwYXJhIGVzdGUgcmVjb3J0ZS4nXG5cbmV4cG9ydCBjb25zdCBNU0dfTE9BRF9GQUlMRUQgPSAnTsOjbyBmb2kgcG9zc8OtdmVsIGNhcnJlZ2FyIG9zIGRhZG9zIGRhIGNhbWFkYS4nXG5cbmV4cG9ydCBjb25zdCBNU0dfRVhUUkFDVF9GQUlMRUQgPVxuICAnUmVnaXN0cm9zIGVuY29udHJhZG9zLCBtYXMgbsOjbyBmb2kgcG9zc8OtdmVsIGV4dHJhaXIgYW5vIGUgdmFsb3JlcyBwYXJhIGVzdGUgcmVjb3J0ZS4gJyArXG4gICdDb25maXJtZSBzZSBhIHRhYmVsYSB0ZW0gdW1hIGxpbmhhIHBvciBhbm8gKGNvbHVuYSBcImFub1wiKSBvdSB1bWEgbGluaGEgcG9yIHJlY29ydGUgKGNvbHVuYXMgY29tIGFub3MpLCAnICtcbiAgJ2Ugc2UgYSBjb2x1bmEgZG8gcmVjb3J0ZSBwb3NzdWkgdmFsb3JlcyBwcmVlbmNoaWRvcy4nXG5cbmV4cG9ydCBjb25zdCBISU5UX0NPTlNFQ1VUSVZPID0gJ09zIGFub3Mgc2VsZWNpb25hZG9zIGRldmVtIHNlciBjb25zZWN1dGl2b3MuJ1xuXG5leHBvcnQgY29uc3QgSElOVF9QRVJJT0RfUlVMRVMgPVxuICAnT3MgZG9pcyBwZXLDrW9kb3MgZGV2ZW0gdGVyIGEgbWVzbWEgcXVhbnRpZGFkZSBkZSBhbm9zIGNvbnNlY3V0aXZvcywgc2VtIHJlcGV0acOnw6NvIGVudHJlIGVsZXMuJ1xuXG5leHBvcnQgY29uc3QgUExBQ0VIT0xERVJfUEVSSU9ET19JTklDSUFMID0gJ1NlbGVjaW9uZSBvKHMpIGFubyhzKSBkbyBwZXLDrW9kbyBpbmljaWFsJ1xuZXhwb3J0IGNvbnN0IFBMQUNFSE9MREVSX1BFUklPRE9fRklOQUwgPSAnU2VsZWNpb25lIG8ocykgYW5vKHMpIGRvIHBlcsOtb2RvIGZpbmFsJ1xuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBSZWFjdCwganN4IH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHtcbiAgZm9ybWF0UGVyY2VudFZhcmlhdGlvbixcbiAgZm9ybWF0UGVyaW9kUmFuZ2VMYWJlbCxcbiAgdHlwZSBWYXJpYXRpb25SZXN1bHRcbn0gZnJvbSAnLi4vLi4vdXRpbHMvcHJvZGVzLXRhYmxlJ1xuaW1wb3J0IHsgZm9ybWF0QXJlYSwgZ2V0VmFyaWF0aW9uVG9uZSB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdCdcblxuaW50ZXJmYWNlIFZhcmlhdGlvblJlc3VsdFByb3BzIHtcbiAgZGF0YTogVmFyaWF0aW9uUmVzdWx0XG59XG5cbmV4cG9ydCBjb25zdCBWYXJpYXRpb25SZXN1bHRQYW5lbCA9ICh7IGRhdGEgfTogVmFyaWF0aW9uUmVzdWx0UHJvcHMpID0+IHtcbiAgY29uc3QgdG9uZSA9IGdldFZhcmlhdGlvblRvbmUoZGF0YS5wY3QpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhcmFkb3ItcmVzdWx0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhcmFkb3ItcmVzdWx0LXRpdGxlXCI+XG4gICAgICAgIFZhcmlhw6fDo28gcGVyY2VudHVhbCAoXG4gICAgICAgIHtmb3JtYXRQZXJpb2RSYW5nZUxhYmVsKGRhdGEueWVhcnNJbmljaWFsKX0g4oaSeycgJ31cbiAgICAgICAge2Zvcm1hdFBlcmlvZFJhbmdlTGFiZWwoZGF0YS55ZWFyc0ZpbmFsKX0pXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29tcGFyYWRvci1yZXN1bHQtdmFsdWUgY29tcGFyYWRvci1yZXN1bHQtdmFsdWUtLSR7dG9uZX1gfT5cbiAgICAgICAge2Zvcm1hdFBlcmNlbnRWYXJpYXRpb24oZGF0YS5wY3QpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhcmFkb3ItcmVzdWx0LWRldGFpbFwiPlxuICAgICAgICB7Zm9ybWF0QXJlYShkYXRhLnZhbHVlSW5pY2lhbCl9IG5vIHBlcsOtb2RvIGluaWNpYWwg4oaSeycgJ31cbiAgICAgICAge2Zvcm1hdEFyZWEoZGF0YS52YWx1ZUZpbmFsKX0gbm8gcGVyw61vZG8gZmluYWxcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCJpbXBvcnQgeyBSZWFjdCB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7XG4gIGNvbXB1dGVQZXJpb2RWYXJpYXRpb24sXG4gIGdldFllYXJzQWxsb3dlZEZvckZpbmFsLFxuICBnZXRZZWFyc0FsbG93ZWRGb3JJbmljaWFsLFxuICB0eXBlIFllYXJWYWx1ZVJvd1xufSBmcm9tICcuLi8uLi91dGlscy9wcm9kZXMtdGFibGUnXG5pbXBvcnQgeyBISU5UX0NPTlNFQ1VUSVZPIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUGVyaW9kU2VsZWN0aW9uIChcbiAgc2VyaWVzOiBZZWFyVmFsdWVSb3dbXSxcbiAgYXZhaWxhYmxlWWVhcnM6IG51bWJlcltdLFxuICByZWNvcnRlRmllbGQ/OiBzdHJpbmdcbikge1xuICBjb25zdCBbcGVyaW9kb0luaWNpYWwsIHNldFBlcmlvZG9JbmljaWFsXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcltdPihbXSlcbiAgY29uc3QgW3BlcmlvZG9GaW5hbCwgc2V0UGVyaW9kb0ZpbmFsXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcltdPihbXSlcbiAgY29uc3QgW2hpbnRJbmljaWFsLCBzZXRIaW50SW5pY2lhbF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuICBjb25zdCBbaGludEZpbmFsLCBzZXRIaW50RmluYWxdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcblxuICBjb25zdCB5ZWFyc0ZvckluaWNpYWwgPSBSZWFjdC51c2VNZW1vKFxuICAgICgpID0+IGdldFllYXJzQWxsb3dlZEZvckluaWNpYWwoYXZhaWxhYmxlWWVhcnMsIHBlcmlvZG9GaW5hbCksXG4gICAgW2F2YWlsYWJsZVllYXJzLCBwZXJpb2RvRmluYWxdXG4gIClcblxuICBjb25zdCB5ZWFyc0ZvckZpbmFsID0gUmVhY3QudXNlTWVtbyhcbiAgICAoKSA9PiBnZXRZZWFyc0FsbG93ZWRGb3JGaW5hbChhdmFpbGFibGVZZWFycywgcGVyaW9kb0luaWNpYWwpLFxuICAgIFthdmFpbGFibGVZZWFycywgcGVyaW9kb0luaWNpYWxdXG4gIClcblxuICBjb25zdCB2YXJpYXRpb24gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoIXBlcmlvZG9JbmljaWFsLmxlbmd0aCB8fCAhcGVyaW9kb0ZpbmFsLmxlbmd0aCkgcmV0dXJuIG51bGxcbiAgICByZXR1cm4gY29tcHV0ZVBlcmlvZFZhcmlhdGlvbihzZXJpZXMsIHBlcmlvZG9JbmljaWFsLCBwZXJpb2RvRmluYWwpXG4gIH0sIFtwZXJpb2RvSW5pY2lhbCwgcGVyaW9kb0ZpbmFsLCBzZXJpZXNdKVxuXG4gIGNvbnN0IGhhc1BlcmlvZFNlbGVjdGlvbiA9XG4gICAgcGVyaW9kb0luaWNpYWwubGVuZ3RoID4gMCB8fCBwZXJpb2RvRmluYWwubGVuZ3RoID4gMFxuXG4gIGNvbnN0IGNsZWFyUGVyaW9kU2VsZWN0aW9uID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFBlcmlvZG9JbmljaWFsKFtdKVxuICAgIHNldFBlcmlvZG9GaW5hbChbXSlcbiAgICBzZXRIaW50SW5pY2lhbChudWxsKVxuICAgIHNldEhpbnRGaW5hbChudWxsKVxuICB9LCBbXSlcblxuICBjb25zdCBoYW5kbGVQZXJpb2RvSW5pY2lhbENoYW5nZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCh5ZWFyczogbnVtYmVyW10pID0+IHtcbiAgICBzZXRQZXJpb2RvSW5pY2lhbCh5ZWFycylcbiAgICBzZXRIaW50SW5pY2lhbChudWxsKVxuICB9LCBbXSlcblxuICBjb25zdCBoYW5kbGVQZXJpb2RvRmluYWxDaGFuZ2UgPSBSZWFjdC51c2VDYWxsYmFjaygoeWVhcnM6IG51bWJlcltdKSA9PiB7XG4gICAgc2V0UGVyaW9kb0ZpbmFsKHllYXJzKVxuICAgIHNldEhpbnRGaW5hbChudWxsKVxuICB9LCBbXSlcblxuICBjb25zdCByZWplY3RQZXJpb2RvSW5pY2lhbCA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRIaW50SW5pY2lhbChISU5UX0NPTlNFQ1VUSVZPKVxuICB9LCBbXSlcblxuICBjb25zdCByZWplY3RQZXJpb2RvRmluYWwgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0SGludEZpbmFsKEhJTlRfQ09OU0VDVVRJVk8pXG4gIH0sIFtdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UGVyaW9kb0luaWNpYWwoW10pXG4gICAgc2V0UGVyaW9kb0ZpbmFsKFtdKVxuICAgIHNldEhpbnRJbmljaWFsKG51bGwpXG4gICAgc2V0SGludEZpbmFsKG51bGwpXG4gIH0sIFtyZWNvcnRlRmllbGRdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFwZXJpb2RvSW5pY2lhbC5sZW5ndGggfHwgIXBlcmlvZG9GaW5hbC5sZW5ndGgpIHJldHVyblxuICAgIGNvbnN0IGFsbG93ZWQgPSBuZXcgU2V0KGdldFllYXJzQWxsb3dlZEZvckZpbmFsKGF2YWlsYWJsZVllYXJzLCBwZXJpb2RvSW5pY2lhbCkpXG4gICAgY29uc3QgZmlsdGVyZWQgPSBwZXJpb2RvRmluYWwuZmlsdGVyKCh5KSA9PiBhbGxvd2VkLmhhcyh5KSlcbiAgICBpZiAoZmlsdGVyZWQubGVuZ3RoICE9PSBwZXJpb2RvRmluYWwubGVuZ3RoKSB7XG4gICAgICBzZXRQZXJpb2RvRmluYWwoZmlsdGVyZWQpXG4gICAgfVxuICB9LCBbcGVyaW9kb0luaWNpYWwsIHBlcmlvZG9GaW5hbCwgYXZhaWxhYmxlWWVhcnNdKVxuXG4gIHJldHVybiB7XG4gICAgcGVyaW9kb0luaWNpYWwsXG4gICAgcGVyaW9kb0ZpbmFsLFxuICAgIHllYXJzRm9ySW5pY2lhbCxcbiAgICB5ZWFyc0ZvckZpbmFsLFxuICAgIGhpbnRJbmljaWFsLFxuICAgIGhpbnRGaW5hbCxcbiAgICB2YXJpYXRpb24sXG4gICAgaGFzUGVyaW9kU2VsZWN0aW9uLFxuICAgIGNsZWFyUGVyaW9kU2VsZWN0aW9uLFxuICAgIGhhbmRsZVBlcmlvZG9JbmljaWFsQ2hhbmdlLFxuICAgIGhhbmRsZVBlcmlvZG9GaW5hbENoYW5nZSxcbiAgICByZWplY3RQZXJpb2RvSW5pY2lhbCxcbiAgICByZWplY3RQZXJpb2RvRmluYWxcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgUmVhY3QsXG4gIHR5cGUgRGF0YVNvdXJjZSxcbiAgdHlwZSBJTURhdGFTb3VyY2VTY2hlbWEsXG4gIERhdGFTb3VyY2VTdGF0dXNcbn0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHtcbiAgYnVpbGRZZWFyU2VyaWVzLFxuICBkZXRlY3RZZWFyRmllbGQsXG4gIGZldGNoTGF5ZXJSZWNvcmRzLFxuICBzY2hlbWFUb0ZpZWxkTGlzdCxcbiAgdHlwZSBZZWFyVmFsdWVSb3dcbn0gZnJvbSAnLi4vLi4vdXRpbHMvcHJvZGVzLXRhYmxlJ1xuaW1wb3J0IHtcbiAgZ2V0RGF0YVNvdXJjZVNjaGVtYSxcbiAgZ2V0TWFpbkRhdGFTb3VyY2UsXG4gIGlzUXVlcnlhYmxlU3RhdHVzXG59IGZyb20gJy4uLy4uL3V0aWxzL2RhdGEtc291cmNlJ1xuaW1wb3J0IHtcbiAgTVNHX0VYVFJBQ1RfRkFJTEVELFxuICBNU0dfTE9BRF9GQUlMRURcbn0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZVByb2Rlc1Nlcmllc1BhcmFtcyB7XG4gIHJlY29ydGVGaWVsZD86IHN0cmluZ1xuICB5ZWFyRmllbGQ/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVByb2Rlc1NlcmllcyAoeyByZWNvcnRlRmllbGQsIHllYXJGaWVsZCB9OiBVc2VQcm9kZXNTZXJpZXNQYXJhbXMpIHtcbiAgY29uc3QgW2RzUmVmLCBzZXREc1JlZl0gPSBSZWFjdC51c2VTdGF0ZTxEYXRhU291cmNlIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2RzU3RhdHVzLCBzZXREc1N0YXR1c10gPSBSZWFjdC51c2VTdGF0ZTxEYXRhU291cmNlU3RhdHVzIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpXG4gIGNvbnN0IFtmaWVsZExpc3QsIHNldEZpZWxkTGlzdF0gPSBSZWFjdC51c2VTdGF0ZShcbiAgICBbXSBhcyBSZXR1cm5UeXBlPHR5cGVvZiBzY2hlbWFUb0ZpZWxkTGlzdD5cbiAgKVxuICBjb25zdCBbc2VyaWVzLCBzZXRTZXJpZXNdID0gUmVhY3QudXNlU3RhdGU8WWVhclZhbHVlUm93W10+KFtdKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuXG4gIGNvbnN0IGVmZmVjdGl2ZVllYXJGaWVsZCA9IHllYXJGaWVsZCA/PyBkZXRlY3RZZWFyRmllbGQoZmllbGRMaXN0KVxuXG4gIGNvbnN0IGFwcGx5U2NoZW1hID0gUmVhY3QudXNlQ2FsbGJhY2soKHNjaGVtYTogSU1EYXRhU291cmNlU2NoZW1hKSA9PiB7XG4gICAgc2V0RmllbGRMaXN0KHNjaGVtYVRvRmllbGRMaXN0KHNjaGVtYSkpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGhhbmRsZURhdGFTb3VyY2VSZWFkeSA9IFJlYWN0LnVzZUNhbGxiYWNrKChkczogRGF0YVNvdXJjZSkgPT4ge1xuICAgIHNldERzUmVmKGRzKVxuICAgIGNvbnN0IHNjaGVtYSA9IGdldERhdGFTb3VyY2VTY2hlbWEoZHMpXG4gICAgaWYgKHNjaGVtYSkgYXBwbHlTY2hlbWEoc2NoZW1hKVxuICB9LCBbYXBwbHlTY2hlbWFdKVxuXG4gIGNvbnN0IGxvYWRTZXJpZXMgPSBSZWFjdC51c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGdldE1haW5EYXRhU291cmNlKGRzUmVmKVxuICAgIGlmICghbWFpbiB8fCAhZWZmZWN0aXZlWWVhckZpZWxkIHx8ICFyZWNvcnRlRmllbGQpIHtcbiAgICAgIHNldFNlcmllcyhbXSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghaXNRdWVyeWFibGVTdGF0dXMoZHNTdGF0dXMpKSByZXR1cm5cblxuICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICBzZXRFcnJvcihudWxsKVxuICAgIGNvbnN0IGZldGNoT3B0cyA9IHtcbiAgICAgIHllYXJGaWVsZEppbXU6IGVmZmVjdGl2ZVllYXJGaWVsZCxcbiAgICAgIHJlY29ydGVGaWVsZEppbXU6IHJlY29ydGVGaWVsZCxcbiAgICAgIGZpZWxkczogZmllbGRMaXN0XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCByZWNvcmRzID0gYXdhaXQgZmV0Y2hMYXllclJlY29yZHMobWFpbiwgZmV0Y2hPcHRzKVxuICAgICAgbGV0IGJ1aWx0ID0gYnVpbGRZZWFyU2VyaWVzKFxuICAgICAgICByZWNvcmRzLFxuICAgICAgICBlZmZlY3RpdmVZZWFyRmllbGQsXG4gICAgICAgIHJlY29ydGVGaWVsZCxcbiAgICAgICAgZmllbGRMaXN0XG4gICAgICApXG5cbiAgICAgIGlmIChyZWNvcmRzLmxlbmd0aCA+IDAgJiYgYnVpbHQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGZvcmNlZCA9IGF3YWl0IGZldGNoTGF5ZXJSZWNvcmRzKG1haW4sIHsgLi4uZmV0Y2hPcHRzLCBmb3JjZVF1ZXJ5OiB0cnVlIH0pXG4gICAgICAgIGlmIChmb3JjZWQubGVuZ3RoKSB7XG4gICAgICAgICAgcmVjb3JkcyA9IGZvcmNlZFxuICAgICAgICAgIGJ1aWx0ID0gYnVpbGRZZWFyU2VyaWVzKFxuICAgICAgICAgICAgZm9yY2VkLFxuICAgICAgICAgICAgZWZmZWN0aXZlWWVhckZpZWxkLFxuICAgICAgICAgICAgcmVjb3J0ZUZpZWxkLFxuICAgICAgICAgICAgZmllbGRMaXN0XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNldFNlcmllcyhidWlsdClcblxuICAgICAgaWYgKHJlY29yZHMubGVuZ3RoID4gMCAmJiBidWlsdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgc2V0RXJyb3IoTVNHX0VYVFJBQ1RfRkFJTEVEKVxuICAgICAgfVxuICAgIH0gY2F0Y2gge1xuICAgICAgc2V0RXJyb3IoTVNHX0xPQURfRkFJTEVEKVxuICAgICAgc2V0U2VyaWVzKFtdKVxuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIH1cbiAgfSwgW2RzUmVmLCBkc1N0YXR1cywgZWZmZWN0aXZlWWVhckZpZWxkLCBmaWVsZExpc3QsIHJlY29ydGVGaWVsZF0pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXJlY29ydGVGaWVsZCB8fCAhZWZmZWN0aXZlWWVhckZpZWxkIHx8ICFkc1JlZikgcmV0dXJuXG4gICAgaWYgKCFpc1F1ZXJ5YWJsZVN0YXR1cyhkc1N0YXR1cykpIHJldHVyblxuICAgIGxvYWRTZXJpZXMoKVxuICB9LCBbcmVjb3J0ZUZpZWxkLCBlZmZlY3RpdmVZZWFyRmllbGQsIGRzUmVmLCBkc1N0YXR1cywgZmllbGRMaXN0LCBsb2FkU2VyaWVzXSlcblxuICBjb25zdCB3YWl0aW5nRm9yTGF5ZXIgPSAhZHNSZWYgfHwgZHNTdGF0dXMgPT09IERhdGFTb3VyY2VTdGF0dXMuTG9hZGluZ1xuXG4gIHJldHVybiB7XG4gICAgc2VyaWVzLFxuICAgIGxvYWRpbmcsXG4gICAgZXJyb3IsXG4gICAgaGFuZGxlRGF0YVNvdXJjZVJlYWR5LFxuICAgIGFwcGx5U2NoZW1hLFxuICAgIHNldERzU3RhdHVzLFxuICAgIHdhaXRpbmdGb3JMYXllclxuICB9XG59XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdqaW11LWNvcmUnXG5cbmV4cG9ydCBjb25zdCB3aWRnZXRTdHlsZXMgPSBjc3NgXG4gICYud2lkZ2V0LWNvbXBhcmFkb3ItcHJvZGVzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgfVxuICAuY29tcGFyYWRvci1mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMnB4O1xuICAgIG1pbi13aWR0aDogMDtcbiAgfVxuICAuY29tcGFyYWRvci1maWVsZC1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDRweDtcbiAgICBtaW4td2lkdGg6IDA7XG4gIH1cbiAgLmNvbXBhcmFkb3ItcGVyaW9kLWhpbnQsXG4gIC5jb21wYXJhZG9yLWVycm9yIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICNiMDAwMjA7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICB9XG4gIC5jb21wYXJhZG9yLWVycm9yLS1ibG9jayB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5jb21wYXJhZG9yLXJlc3VsdCB7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXJlZi1wYWxldHRlLW5ldXRyYWwtMTAwLCAjZjNmM2YzKTtcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICB9XG4gIC5jb21wYXJhZG9yLXJlc3VsdC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgfVxuICAuY29tcGFyYWRvci1yZXN1bHQtdmFsdWUge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIH1cbiAgLmNvbXBhcmFkb3ItcmVzdWx0LXZhbHVlLS1wb3NpdGl2ZSB7XG4gICAgY29sb3I6ICNiMDAwMjA7XG4gIH1cbiAgLmNvbXBhcmFkb3ItcmVzdWx0LXZhbHVlLS1uZWdhdGl2ZSB7XG4gICAgY29sb3I6ICMxYjdhM2Q7XG4gIH1cbiAgLmNvbXBhcmFkb3ItcmVzdWx0LXZhbHVlLS1uZXV0cmFsIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxuICAuY29tcGFyYWRvci1yZXN1bHQtZGV0YWlsIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM2YjZiNmI7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xuICB9XG4gIC5jb21wYXJhZG9yLWhpbnQge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBjb2xvcjogIzZiNmI2YjtcbiAgICBsaW5lLWhlaWdodDogMS4zNTtcbiAgfVxuICAuY29tcGFyYWRvci1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cbiAgLmNvbXBhcmFkb3ItYnRuLWxpbXBhciB7XG4gICAgYm9yZGVyLXJhZGl1czogOTk5OXB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IHBpY2tlclN0eWxlcyA9IGNzc2BcbiAgd2lkdGg6IDEwMCU7XG4gIC5qaW11LWRyb3Bkb3duIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICAuY29tcGFyYWRvci1wZXJpb2QtbWVudSB7XG4gICAgbWF4LWhlaWdodDogMjIwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxuYFxuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBSZWFjdCwganN4IH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHtcbiAgRHJvcGRvd24sXG4gIERyb3Bkb3duQnV0dG9uLFxuICBEcm9wZG93bk1lbnUsXG4gIERyb3Bkb3duSXRlbVxufSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHsgZm9ybWF0UGVyaW9kTGFiZWwsIHRvZ2dsZUNvbnNlY3V0aXZlWWVhciB9IGZyb20gJy4uL3V0aWxzL3Byb2Rlcy10YWJsZSdcbmltcG9ydCB7IHBpY2tlclN0eWxlcyB9IGZyb20gJy4vc3R5bGVzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIFllYXJQZXJpb2RQaWNrZXJQcm9wcyB7XG4gIGF2YWlsYWJsZVllYXJzOiBudW1iZXJbXVxuICBzZWxlY3RlZFllYXJzOiBudW1iZXJbXVxuICBwbGFjZWhvbGRlcjogc3RyaW5nXG4gIGhpbnQ/OiBzdHJpbmcgfCBudWxsXG4gIG9uQ2hhbmdlOiAoeWVhcnM6IG51bWJlcltdKSA9PiB2b2lkXG4gIG9uUmVqZWN0ZWRTZWxlY3Rpb24/OiAoKSA9PiB2b2lkXG59XG5cbmV4cG9ydCBjb25zdCBZZWFyUGVyaW9kUGlja2VyID0gUmVhY3QubWVtbygocHJvcHM6IFllYXJQZXJpb2RQaWNrZXJQcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgYXZhaWxhYmxlWWVhcnMsXG4gICAgc2VsZWN0ZWRZZWFycyxcbiAgICBwbGFjZWhvbGRlcixcbiAgICBoaW50LFxuICAgIG9uQ2hhbmdlLFxuICAgIG9uUmVqZWN0ZWRTZWxlY3Rpb25cbiAgfSA9IHByb3BzXG5cbiAgY29uc3Qgc2VsZWN0ZWRTZXQgPSBSZWFjdC51c2VNZW1vKFxuICAgICgpID0+IG5ldyBTZXQoc2VsZWN0ZWRZZWFycyksXG4gICAgW3NlbGVjdGVkWWVhcnNdXG4gIClcblxuICBjb25zdCBzdW1tYXJ5ID1cbiAgICBzZWxlY3RlZFllYXJzLmxlbmd0aCA+IDBcbiAgICAgID8gZm9ybWF0UGVyaW9kTGFiZWwoc2VsZWN0ZWRZZWFycylcbiAgICAgIDogcGxhY2Vob2xkZXJcblxuICBjb25zdCBoYW5kbGVUb2dnbGUgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoeWVhcjogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCB7IG5leHQsIHJlamVjdGVkIH0gPSB0b2dnbGVDb25zZWN1dGl2ZVllYXIoc2VsZWN0ZWRZZWFycywgeWVhcilcbiAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICBvblJlamVjdGVkU2VsZWN0aW9uPy4oKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIG9uQ2hhbmdlKG5leHQpXG4gICAgfSxcbiAgICBbc2VsZWN0ZWRZZWFycywgb25DaGFuZ2UsIG9uUmVqZWN0ZWRTZWxlY3Rpb25dXG4gIClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY3NzPXtwaWNrZXJTdHlsZXN9PlxuICAgICAgPERyb3Bkb3duXG4gICAgICAgIGZsdWlkXG4gICAgICAgIG1lbnVJdGVtQ2hlY2tNb2RlPVwibXVsdGlDaGVja1wiXG4gICAgICAgIGFjdGl2ZUljb25cbiAgICAgICAgY2xhc3NOYW1lPVwidy0xMDBcIlxuICAgICAgPlxuICAgICAgICA8RHJvcGRvd25CdXR0b24gc2l6ZT1cInNtXCIgY2xhc3NOYW1lPVwidy0xMDAgZHJvcGRvd24tdG9nZ2xlXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZVwiPntzdW1tYXJ5fTwvc3Bhbj5cbiAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICAgICAgPERyb3Bkb3duTWVudSBjbGFzc05hbWU9XCJjb21wYXJhZG9yLXBlcmlvZC1tZW51XCI+XG4gICAgICAgICAge2F2YWlsYWJsZVllYXJzLm1hcCgoeWVhcikgPT4gKFxuICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICBrZXk9e3llYXJ9XG4gICAgICAgICAgICAgIGFjdGl2ZT17c2VsZWN0ZWRTZXQuaGFzKHllYXIpfVxuICAgICAgICAgICAgICB0b2dnbGU9e2ZhbHNlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUb2dnbGUoeWVhcil9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt5ZWFyfVxuICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgICAgPC9Ecm9wZG93bj5cbiAgICAgIHtoaW50ICYmIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFyYWRvci1wZXJpb2QtaGludFwiPntoaW50fTwvZGl2Pn1cbiAgICA8L2Rpdj5cbiAgKVxufSlcblxuWWVhclBlcmlvZFBpY2tlci5kaXNwbGF5TmFtZSA9ICdZZWFyUGVyaW9kUGlja2VyJ1xuIiwiaW1wb3J0IHtcbiAgdHlwZSBEYXRhU291cmNlLFxuICB0eXBlIElNRGF0YVNvdXJjZVNjaGVtYSxcbiAgRGF0YVNvdXJjZVN0YXR1c1xufSBmcm9tICdqaW11LWNvcmUnXG5cbnR5cGUgRGF0YVNvdXJjZVdpdGhNYWluID0gRGF0YVNvdXJjZSAmIHtcbiAgZ2V0TWFpbkRhdGFTb3VyY2U/OiAoKSA9PiBEYXRhU291cmNlXG4gIGdldFNjaGVtYT86ICgpID0+IElNRGF0YVNvdXJjZVNjaGVtYVxufVxuXG5leHBvcnQgY29uc3QgaXNRdWVyeWFibGVTdGF0dXMgPSAoc3RhdHVzPzogRGF0YVNvdXJjZVN0YXR1cyk6IGJvb2xlYW4gPT5cbiAgc3RhdHVzID09PSBEYXRhU291cmNlU3RhdHVzLkxvYWRlZCB8fFxuICBzdGF0dXMgPT09IERhdGFTb3VyY2VTdGF0dXMuVW5sb2FkZWQgfHxcbiAgc3RhdHVzID09PSBEYXRhU291cmNlU3RhdHVzLk5vdFJlYWR5XG5cbmV4cG9ydCBjb25zdCBnZXRNYWluRGF0YVNvdXJjZSA9IChkczogRGF0YVNvdXJjZSB8IG51bGwpOiBEYXRhU291cmNlIHwgbnVsbCA9PiB7XG4gIGlmICghZHMpIHJldHVybiBudWxsXG4gIGNvbnN0IG1haW4gPSAoZHMgYXMgRGF0YVNvdXJjZVdpdGhNYWluKS5nZXRNYWluRGF0YVNvdXJjZT8uKClcbiAgcmV0dXJuIG1haW4gPz8gZHNcbn1cblxuZXhwb3J0IGNvbnN0IGdldERhdGFTb3VyY2VTY2hlbWEgPSAoXG4gIGRzOiBEYXRhU291cmNlXG4pOiBJTURhdGFTb3VyY2VTY2hlbWEgfCB1bmRlZmluZWQgPT5cbiAgKGRzIGFzIERhdGFTb3VyY2VXaXRoTWFpbikuZ2V0U2NoZW1hPy4oKVxuIiwiaW1wb3J0IHsgQVJFQV9VTklUIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuXG5leHBvcnQgY29uc3QgZm9ybWF0QXJlYSA9ICh2YWx1ZTogbnVtYmVyKTogc3RyaW5nID0+XG4gIGAke3ZhbHVlLnRvTG9jYWxlU3RyaW5nKCdwdC1CUicsIHtcbiAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyXG4gIH0pfSAke0FSRUFfVU5JVH1gXG5cbmV4cG9ydCB0eXBlIFZhcmlhdGlvblRvbmUgPSAncG9zaXRpdmUnIHwgJ25lZ2F0aXZlJyB8ICduZXV0cmFsJ1xuXG5leHBvcnQgY29uc3QgZ2V0VmFyaWF0aW9uVG9uZSA9IChwY3Q6IG51bWJlcik6IFZhcmlhdGlvblRvbmUgPT4ge1xuICBpZiAocGN0ID4gMCkgcmV0dXJuICdwb3NpdGl2ZSdcbiAgaWYgKHBjdCA8IDApIHJldHVybiAnbmVnYXRpdmUnXG4gIHJldHVybiAnbmV1dHJhbCdcbn1cbiIsImltcG9ydCB7XG4gIHR5cGUgSU1GaWVsZFNjaGVtYSxcbiAgdHlwZSBJTURhdGFTb3VyY2VTY2hlbWEsXG4gIEppbXVGaWVsZFR5cGUsXG4gIEVzcmlGaWVsZFR5cGUsXG4gIFF1ZXJ5U2NvcGUsXG4gIHR5cGUgRGF0YVJlY29yZFxufSBmcm9tICdqaW11LWNvcmUnXG5cbmV4cG9ydCBpbnRlcmZhY2UgWWVhclZhbHVlUm93IHtcbiAgeWVhcjogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaWVsZEF0dHJpYnV0ZUtleXMge1xuICB5ZWFyS2V5OiBzdHJpbmdcbiAgcmVjb3J0ZUtleTogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1lFQVJfRklFTEQgPSAnYW5vJ1xuXG5jb25zdCBZRUFSX05BTUVfUEFUVEVSTlMgPSBbJ2FubycsICd5ZWFyJywgJ3lyJywgJ2V4ZXJjaWNpbycsICdleGVyY8OtY2lvJ11cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHlDZWxsICh2YWx1ZTogdW5rbm93bik6IGJvb2xlYW4ge1xuICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIHRydWVcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUudHJpbSgpID09PSAnJykgcmV0dXJuIHRydWVcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgTnVtYmVyLmlzTmFOKHZhbHVlKSkgcmV0dXJuIHRydWVcbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU51bWVyaWNWYWx1ZSAodmFsdWU6IHVua25vd24pOiBudW1iZXIgfCBudWxsIHtcbiAgaWYgKGlzRW1wdHlDZWxsKHZhbHVlKSkgcmV0dXJuIG51bGxcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgTnVtYmVyLmlzRmluaXRlKHZhbHVlKSkgcmV0dXJuIHZhbHVlXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgcyA9IHZhbHVlLnRyaW0oKVxuICAgIGlmICghcykgcmV0dXJuIG51bGxcbiAgICBpZiAocy5pbmNsdWRlcygnLCcpKSB7XG4gICAgICBjb25zdCBub3JtYWxpemVkID0gcy5yZXBsYWNlKC9cXC4vZywgJycpLnJlcGxhY2UoJywnLCAnLicpXG4gICAgICBjb25zdCBuID0gTnVtYmVyKG5vcm1hbGl6ZWQpXG4gICAgICByZXR1cm4gTnVtYmVyLmlzRmluaXRlKG4pID8gbiA6IG51bGxcbiAgICB9XG4gICAgY29uc3QgbiA9IE51bWJlcihzKVxuICAgIHJldHVybiBOdW1iZXIuaXNGaW5pdGUobikgPyBuIDogbnVsbFxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVllYXIgKHZhbHVlOiB1bmtub3duKTogbnVtYmVyIHwgbnVsbCB7XG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUgJiYgIU51bWJlci5pc05hTih2YWx1ZS5nZXRUaW1lKCkpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmdldEZ1bGxZZWFyKClcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiBOdW1iZXIuaXNGaW5pdGUodmFsdWUpKSByZXR1cm4gTWF0aC50cnVuYyh2YWx1ZSlcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCBzID0gdmFsdWUudHJpbSgpXG4gICAgaWYgKCFzKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IG4gPSBOdW1iZXIocylcbiAgICBpZiAoTnVtYmVyLmlzRmluaXRlKG4pKSByZXR1cm4gTWF0aC50cnVuYyhuKVxuICAgIGNvbnN0IG0gPSBzLm1hdGNoKC9cXGIoMTl8MjApXFxkezJ9XFxiLylcbiAgICBpZiAobSkgcmV0dXJuIE51bWJlcihtWzBdKVxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2hlbWFUb0ZpZWxkTGlzdCAoc2NoZW1hPzogSU1EYXRhU291cmNlU2NoZW1hIHwgbnVsbCk6IElNRmllbGRTY2hlbWFbXSB7XG4gIGlmICghc2NoZW1hPy5maWVsZHMpIHJldHVybiBbXVxuICByZXR1cm4gT2JqZWN0LmtleXMoc2NoZW1hLmZpZWxkcykubWFwKChrZXkpID0+IHNjaGVtYS5maWVsZHNba2V5XSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtZXJpY1JlY29ydGVGaWVsZCAoZmllbGQ6IElNRmllbGRTY2hlbWEpOiBib29sZWFuIHtcbiAgaWYgKGZpZWxkLnR5cGUgPT09IEppbXVGaWVsZFR5cGUuTnVtYmVyKSByZXR1cm4gdHJ1ZVxuICBjb25zdCBlc3JpID0gZmllbGQuZXNyaVR5cGVcbiAgcmV0dXJuIChcbiAgICBlc3JpID09PSBFc3JpRmllbGRUeXBlLkRvdWJsZSB8fFxuICAgIGVzcmkgPT09IEVzcmlGaWVsZFR5cGUuU2luZ2xlIHx8XG4gICAgZXNyaSA9PT0gRXNyaUZpZWxkVHlwZS5JbnRlZ2VyIHx8XG4gICAgZXNyaSA9PT0gRXNyaUZpZWxkVHlwZS5TbWFsbEludGVnZXJcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXR0cmlidXRlS2V5IChmaWVsZDogSU1GaWVsZFNjaGVtYSk6IHN0cmluZyB7XG4gIHJldHVybiBmaWVsZC5uYW1lIHx8IGZpZWxkLmppbXVOYW1lXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXRlY3RZZWFyRmllbGQgKGZpZWxkczogSU1GaWVsZFNjaGVtYVtdKTogc3RyaW5nIHwgbnVsbCB7XG4gIGNvbnN0IGV4YWN0QW5vID0gZmllbGRzLmZpbmQoXG4gICAgKGYpID0+XG4gICAgICBmLmppbXVOYW1lPy50b0xvd2VyQ2FzZSgpID09PSAnYW5vJyB8fFxuICAgICAgZi5uYW1lPy50b0xvd2VyQ2FzZSgpID09PSAnYW5vJyB8fFxuICAgICAgZi5hbGlhcz8udG9Mb3dlckNhc2UoKSA9PT0gJ2FubydcbiAgKVxuICBpZiAoZXhhY3RBbm8pIHJldHVybiBleGFjdEFuby5qaW11TmFtZVxuXG4gIGNvbnN0IGNhbmRpZGF0ZXMgPSBmaWVsZHMuZmlsdGVyKFxuICAgIChmKSA9PiBmLnR5cGUgPT09IEppbXVGaWVsZFR5cGUuTnVtYmVyIHx8IGYudHlwZSA9PT0gSmltdUZpZWxkVHlwZS5TdHJpbmdcbiAgKVxuICBmb3IgKGNvbnN0IHBhdCBvZiBZRUFSX05BTUVfUEFUVEVSTlMpIHtcbiAgICBjb25zdCBmb3VuZCA9IGNhbmRpZGF0ZXMuZmluZChcbiAgICAgIChmKSA9PlxuICAgICAgICBmLmppbXVOYW1lPy50b0xvd2VyQ2FzZSgpID09PSBwYXQgfHxcbiAgICAgICAgZi5uYW1lPy50b0xvd2VyQ2FzZSgpID09PSBwYXQgfHxcbiAgICAgICAgZi5hbGlhcz8udG9Mb3dlckNhc2UoKSA9PT0gcGF0XG4gICAgKVxuICAgIGlmIChmb3VuZCkgcmV0dXJuIGZvdW5kLmppbXVOYW1lXG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFJlY29ydGVMYWJlbCAoZmllbGQ6IElNRmllbGRTY2hlbWEpOiBzdHJpbmcge1xuICByZXR1cm4gZm9ybWF0UmVjb3J0ZUxhYmVsRnJvbU5hbWUoZmllbGQuamltdU5hbWUsIGZpZWxkLmFsaWFzKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UmVjb3J0ZUxhYmVsRnJvbU5hbWUgKGppbXVOYW1lOiBzdHJpbmcsIGFsaWFzPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKGFsaWFzPy50cmltKCkpIHJldHVybiBhbGlhcy50cmltKClcbiAgcmV0dXJuIGppbXVOYW1lXG4gICAgLnNwbGl0KCdfJylcbiAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgLm1hcCgodykgPT4gdy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHcuc2xpY2UoMSkudG9Mb3dlckNhc2UoKSlcbiAgICAuam9pbignICcpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTeXN0ZW1IaWRkZW5GaWVsZE5hbWVzIChmaWVsZHM6IElNRmllbGRTY2hlbWFbXSk6IHN0cmluZ1tdIHtcbiAgcmV0dXJuIGZpZWxkc1xuICAgIC5maWx0ZXIoKGYpID0+IHtcbiAgICAgIGNvbnN0IGVzcmkgPSBmLmVzcmlUeXBlXG4gICAgICByZXR1cm4gKFxuICAgICAgICBlc3JpID09PSBFc3JpRmllbGRUeXBlLk9JRCB8fFxuICAgICAgICBlc3JpID09PSBFc3JpRmllbGRUeXBlLkdlb21ldHJ5IHx8XG4gICAgICAgIGVzcmkgPT09IEVzcmlGaWVsZFR5cGUuR2xvYmFsSUQgfHxcbiAgICAgICAgZXNyaSA9PT0gRXNyaUZpZWxkVHlwZS5HVUlEXG4gICAgICApXG4gICAgfSlcbiAgICAubWFwKChmKSA9PiBmLmppbXVOYW1lKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVjb3J0ZUhpZGRlbkZpZWxkTmFtZXMgKFxuICBmaWVsZHM6IElNRmllbGRTY2hlbWFbXSxcbiAgeWVhckZpZWxkPzogc3RyaW5nXG4pOiBzdHJpbmdbXSB7XG4gIGNvbnN0IGhpZGRlbiA9IGdldFN5c3RlbUhpZGRlbkZpZWxkTmFtZXMoZmllbGRzKVxuICBpZiAoeWVhckZpZWxkICYmICFoaWRkZW4uaW5jbHVkZXMoeWVhckZpZWxkKSkge1xuICAgIGhpZGRlbi5wdXNoKHllYXJGaWVsZClcbiAgfVxuICByZXR1cm4gaGlkZGVuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWNvcnRlQ2FuZGlkYXRlRmllbGRzIChcbiAgZmllbGRzOiBJTUZpZWxkU2NoZW1hW10sXG4gIHllYXJGaWVsZD86IHN0cmluZ1xuKTogSU1GaWVsZFNjaGVtYVtdIHtcbiAgY29uc3QgaGlkZGVuID0gbmV3IFNldChnZXRSZWNvcnRlSGlkZGVuRmllbGROYW1lcyhmaWVsZHMsIHllYXJGaWVsZCkpXG4gIHJldHVybiBmaWVsZHNcbiAgICAuZmlsdGVyKChmKSA9PiBpc051bWVyaWNSZWNvcnRlRmllbGQoZikgJiYgIWhpZGRlbi5oYXMoZi5qaW11TmFtZSkpXG4gICAgLnNvcnQoKGEsIGIpID0+XG4gICAgICBmb3JtYXRSZWNvcnRlTGFiZWwoYSkubG9jYWxlQ29tcGFyZShmb3JtYXRSZWNvcnRlTGFiZWwoYiksICdwdC1CUicpXG4gICAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZEZpZWxkQnlKaW11TmFtZSAoXG4gIGZpZWxkczogSU1GaWVsZFNjaGVtYVtdLFxuICBqaW11TmFtZT86IHN0cmluZ1xuKTogSU1GaWVsZFNjaGVtYSB8IG51bGwge1xuICBpZiAoIWppbXVOYW1lKSByZXR1cm4gbnVsbFxuICBjb25zdCBleGFjdCA9IGZpZWxkcy5maW5kKChmKSA9PiBmLmppbXVOYW1lID09PSBqaW11TmFtZSlcbiAgaWYgKGV4YWN0KSByZXR1cm4gZXhhY3RcbiAgY29uc3QgbG93ZXIgPSBqaW11TmFtZS50b0xvd2VyQ2FzZSgpXG4gIHJldHVybiAoXG4gICAgZmllbGRzLmZpbmQoXG4gICAgICAoZikgPT5cbiAgICAgICAgZi5qaW11TmFtZT8udG9Mb3dlckNhc2UoKSA9PT0gbG93ZXIgfHxcbiAgICAgICAgZi5uYW1lPy50b0xvd2VyQ2FzZSgpID09PSBsb3dlciB8fFxuICAgICAgICBmLmFsaWFzPy50b0xvd2VyQ2FzZSgpID09PSBsb3dlclxuICAgICkgPz8gbnVsbFxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlQXR0cmlidXRlS2V5cyAoXG4gIGZpZWxkczogSU1GaWVsZFNjaGVtYVtdLFxuICB5ZWFyRmllbGRKaW11Pzogc3RyaW5nLFxuICByZWNvcnRlRmllbGRKaW11Pzogc3RyaW5nXG4pOiBGaWVsZEF0dHJpYnV0ZUtleXMgfCBudWxsIHtcbiAgaWYgKCF5ZWFyRmllbGRKaW11IHx8ICFyZWNvcnRlRmllbGRKaW11KSByZXR1cm4gbnVsbFxuXG4gIGNvbnN0IHllYXJGaWVsZCA9IGZpbmRGaWVsZEJ5SmltdU5hbWUoZmllbGRzLCB5ZWFyRmllbGRKaW11KVxuICBjb25zdCByZWNvcnRlRmllbGQgPSBmaW5kRmllbGRCeUppbXVOYW1lKGZpZWxkcywgcmVjb3J0ZUZpZWxkSmltdSlcblxuICByZXR1cm4ge1xuICAgIHllYXJLZXk6IHllYXJGaWVsZCA/IGdldEF0dHJpYnV0ZUtleSh5ZWFyRmllbGQpIDogeWVhckZpZWxkSmltdSxcbiAgICByZWNvcnRlS2V5OiByZWNvcnRlRmllbGQgPyBnZXRBdHRyaWJ1dGVLZXkocmVjb3J0ZUZpZWxkKSA6IHJlY29ydGVGaWVsZEppbXVcbiAgfVxufVxuXG50eXBlIFJlY29yZExpa2UgPVxuICB8IERhdGFSZWNvcmRcbiAgfCB7XG4gICAgICBhdHRyaWJ1dGVzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgICAgIGZlYXR1cmU/OiB7IGF0dHJpYnV0ZXM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB9XG4gICAgICBnZXREYXRhPzogKCkgPT4ge1xuICAgICAgICBhdHRyaWJ1dGVzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgICAgICAgZmVhdHVyZT86IHsgYXR0cmlidXRlcz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+IH1cbiAgICAgIH1cbiAgICAgIGdldEZpZWxkVmFsdWU/OiAoamltdUZpZWxkTmFtZTogc3RyaW5nKSA9PiB1bmtub3duXG4gICAgfVxuXG5mdW5jdGlvbiB0b1BsYWluT2JqZWN0ICh2YWx1ZTogdW5rbm93bik6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHtcbiAgaWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSByZXR1cm4ge31cbiAgY29uc3QgdiA9IHZhbHVlIGFzIHtcbiAgICB0b0pTPzogKCkgPT4gUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgICBhc011dGFibGU/OiAob3B0cz86IHsgZGVlcDogYm9vbGVhbiB9KSA9PiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICB9XG4gIGlmICh0eXBlb2Ygdi50b0pTID09PSAnZnVuY3Rpb24nKSByZXR1cm4gdi50b0pTKClcbiAgaWYgKHR5cGVvZiB2LmFzTXV0YWJsZSA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHYuYXNNdXRhYmxlKHsgZGVlcDogdHJ1ZSB9KVxuICByZXR1cm4gdmFsdWUgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbn1cblxuY29uc3QgR0VUX0RBVEFfTUVUQV9LRVlTID0gbmV3IFNldChbXG4gICdhdHRyaWJ1dGVzJyxcbiAgJ2ZlYXR1cmUnLFxuICAnZ2VvbWV0cnknLFxuICAnY2VudHJvaWQnLFxuICAnYWdncmVnYXRlR2VvbWV0cmllcycsXG4gICdzeW1ib2wnXG5dKVxuXG4vKiogRXh0cmFpIG8gZGljaW9uw6FyaW8gZGUgYXRyaWJ1dG9zIGRlIHVtIHJlZ2lzdHJvICh2w6FyaW9zIGZvcm1hdG9zIGRvIEppbXUvQXJjR0lTKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQbGFpbkF0dHJpYnV0ZXMgKHJlYzogUmVjb3JkTGlrZSk6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHtcbiAgY29uc3QgbWVyZ2VkOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9XG5cbiAgY29uc3QgbWVyZ2UgPSAoYXR0cnM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikgPT4ge1xuICAgIGlmICghYXR0cnMpIHJldHVyblxuICAgIE9iamVjdC5hc3NpZ24obWVyZ2VkLCB0b1BsYWluT2JqZWN0KGF0dHJzKSlcbiAgfVxuXG4gIGlmICgnZ2V0RGF0YScgaW4gcmVjICYmIHR5cGVvZiByZWMuZ2V0RGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IGRhdGEgPSByZWMuZ2V0RGF0YSgpXG4gICAgY29uc3QgcGxhaW4gPSB0b1BsYWluT2JqZWN0KGRhdGEpXG4gICAgbWVyZ2UocGxhaW4uYXR0cmlidXRlcyBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IHVuZGVmaW5lZClcbiAgICBtZXJnZShwbGFpbi5mZWF0dXJlPy5hdHRyaWJ1dGVzIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgdW5kZWZpbmVkKVxuICAgIC8vIEppbXUgRGF0YVJlY29yZDogZ2V0RGF0YSgpIGNvc3R1bWEgc2VyIG1hcGEgcGxhbm8geyBqaW11RmllbGROYW1lOiB2YWxvciB9XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocGxhaW4pKSB7XG4gICAgICBpZiAoR0VUX0RBVEFfTUVUQV9LRVlTLmhhcyhrZXkpKSBjb250aW51ZVxuICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIG1lcmdlZFtrZXldID0gdmFsdWVcbiAgICB9XG4gIH1cblxuICBpZiAoJ2ZlYXR1cmUnIGluIHJlYyAmJiByZWMuZmVhdHVyZT8uYXR0cmlidXRlcykge1xuICAgIG1lcmdlKHJlYy5mZWF0dXJlLmF0dHJpYnV0ZXMpXG4gIH1cblxuICBpZiAoJ2F0dHJpYnV0ZXMnIGluIHJlYyAmJiByZWMuYXR0cmlidXRlcykge1xuICAgIG1lcmdlKHJlYy5hdHRyaWJ1dGVzKVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlZFxufVxuXG5mdW5jdGlvbiBhdHRyaWJ1dGVIYXNVc2FibGVWYWx1ZSAodmFsdWU6IHVua25vd24pOiBib29sZWFuIHtcbiAgaWYgKGlzRW1wdHlDZWxsKHZhbHVlKSkgcmV0dXJuIGZhbHNlXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSByZXR1cm4gZmFsc2VcbiAgcmV0dXJuIHRydWVcbn1cblxuLyoqIFZlcmlmaWNhIHNlIG8gcmVnaXN0cm8gZXhww7VlIGF0cmlidXRvcyBvdSBnZXRGaWVsZFZhbHVlIGNvbSBkYWRvcyByZWFpcyAobsOjbyBzw7MgbcOpdG9kbyB2YXppbykuICovXG5leHBvcnQgZnVuY3Rpb24gcmVjb3JkSGFzUmVhZGFibGVEYXRhIChyZWM6IFJlY29yZExpa2UpOiBib29sZWFuIHtcbiAgY29uc3QgYXR0cnMgPSBnZXRQbGFpbkF0dHJpYnV0ZXMocmVjKVxuICBjb25zdCB1c2FibGVLZXlzID0gT2JqZWN0LmtleXMoYXR0cnMpLmZpbHRlcigoa2V5KSA9PiB7XG4gICAgaWYgKC9eKG9iamVjdGlkfGdsb2JhbGlkfHNoYXBlfGdlb21ldHJ5KSQvaS50ZXN0KGtleSkpIHJldHVybiBmYWxzZVxuICAgIHJldHVybiBhdHRyaWJ1dGVIYXNVc2FibGVWYWx1ZShhdHRyc1trZXldKVxuICB9KVxuICBpZiAodXNhYmxlS2V5cy5sZW5ndGggPiAwKSByZXR1cm4gdHJ1ZVxuXG4gIGlmICgnZ2V0RmllbGRWYWx1ZScgaW4gcmVjICYmIHR5cGVvZiByZWMuZ2V0RmllbGRWYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IHByb2JlcyA9IFtcbiAgICAgICdhbm8nLFxuICAgICAgJ3llYXInLFxuICAgICAgJ0FOTycsXG4gICAgICAnWWVhcicsXG4gICAgICAnZXhlcmNpY2lvJyxcbiAgICAgICdFeGVyY2ljaW8nXG4gICAgXVxuICAgIGZvciAoY29uc3QgbmFtZSBvZiBwcm9iZXMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHYgPSByZWMuZ2V0RmllbGRWYWx1ZSEobmFtZSlcbiAgICAgICAgaWYgKGF0dHJpYnV0ZUhhc1VzYWJsZVZhbHVlKHYpKSByZXR1cm4gdHJ1ZVxuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIHRlbnRhIHByw7N4aW1vXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8qKiBMw6ogdmFsb3IgcGVsbyBBUEkgZG8gSmltdSAoYGdldEZpZWxkVmFsdWVgKSBlLCBlbSBzZWd1aWRhLCBwZWxvcyBhdHJpYnV0b3MgYnJ1dG9zLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlYWRSZWNvcmRWYWx1ZSAoXG4gIHJlYzogUmVjb3JkTGlrZSxcbiAgZmllbGQ/OiBJTUZpZWxkU2NoZW1hIHwgbnVsbCxcbiAgZmFsbGJhY2tKaW11TmFtZT86IHN0cmluZ1xuKTogdW5rbm93biB7XG4gIGNvbnN0IG5hbWVzOiBzdHJpbmdbXSA9IFtdXG4gIGlmIChmaWVsZD8uamltdU5hbWUpIG5hbWVzLnB1c2goZmllbGQuamltdU5hbWUpXG4gIGlmIChmYWxsYmFja0ppbXVOYW1lKSBuYW1lcy5wdXNoKGZhbGxiYWNrSmltdU5hbWUpXG4gIGlmIChmaWVsZD8ubmFtZSkgbmFtZXMucHVzaChmaWVsZC5uYW1lKVxuICBpZiAoZmllbGQ/LmFsaWFzKSBuYW1lcy5wdXNoKGZpZWxkLmFsaWFzKVxuICBpZiAoZmllbGQpIG5hbWVzLnB1c2goZ2V0QXR0cmlidXRlS2V5KGZpZWxkKSlcblxuICBjb25zdCB1bmlxdWVOYW1lcyA9IFsuLi5uZXcgU2V0KG5hbWVzLmZpbHRlcihCb29sZWFuKSldXG5cbiAgaWYgKCdnZXRGaWVsZFZhbHVlJyBpbiByZWMgJiYgdHlwZW9mIHJlYy5nZXRGaWVsZFZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm9yIChjb25zdCBuYW1lIG9mIHVuaXF1ZU5hbWVzKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB2ID0gcmVjLmdldEZpZWxkVmFsdWUhKG5hbWUpXG4gICAgICAgIGlmICh2ICE9PSB1bmRlZmluZWQpIHJldHVybiB2XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgLy8gdGVudGEgcHLDs3hpbW8gbm9tZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGF0dHJzID0gZ2V0UGxhaW5BdHRyaWJ1dGVzKHJlYylcbiAgcmV0dXJuIHJlYWRBdHRyaWJ1dGVGbGV4aWJsZShhdHRycywgZmllbGQsIGZhbGxiYWNrSmltdU5hbWUpXG59XG5cbmZ1bmN0aW9uIHJlYWRBdHRyaWJ1dGUgKFxuICBhdHRyczogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXG4gIHByaW1hcnlLZXk6IHN0cmluZyxcbiAgZmFsbGJhY2tLZXk/OiBzdHJpbmdcbik6IHVua25vd24ge1xuICBpZiAocHJpbWFyeUtleSBpbiBhdHRycykgcmV0dXJuIGF0dHJzW3ByaW1hcnlLZXldXG4gIGlmIChmYWxsYmFja0tleSAmJiBmYWxsYmFja0tleSAhPT0gcHJpbWFyeUtleSAmJiBmYWxsYmFja0tleSBpbiBhdHRycykge1xuICAgIHJldHVybiBhdHRyc1tmYWxsYmFja0tleV1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbi8qKiBUZW50YSBqaW11TmFtZSwgbmFtZSwgYWxpYXMgZSBjb3JyZXNwb25kw6puY2lhIHNlbSBkaWZlcmVuY2lhciBtYWnDunNjdWxhcy9taW7DunNjdWxhcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWFkQXR0cmlidXRlRmxleGlibGUgKFxuICBhdHRyczogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXG4gIGZpZWxkPzogSU1GaWVsZFNjaGVtYSB8IG51bGwsXG4gIGZhbGxiYWNrSmltdU5hbWU/OiBzdHJpbmdcbik6IHVua25vd24ge1xuICBjb25zdCBjYW5kaWRhdGVzID0gbmV3IFNldDxzdHJpbmc+KClcbiAgaWYgKGZpZWxkKSB7XG4gICAgaWYgKGZpZWxkLmppbXVOYW1lKSBjYW5kaWRhdGVzLmFkZChmaWVsZC5qaW11TmFtZSlcbiAgICBpZiAoZmllbGQubmFtZSkgY2FuZGlkYXRlcy5hZGQoZmllbGQubmFtZSlcbiAgICBpZiAoZmllbGQuYWxpYXMpIGNhbmRpZGF0ZXMuYWRkKGZpZWxkLmFsaWFzKVxuICAgIGNhbmRpZGF0ZXMuYWRkKGdldEF0dHJpYnV0ZUtleShmaWVsZCkpXG4gIH1cbiAgaWYgKGZhbGxiYWNrSmltdU5hbWUpIGNhbmRpZGF0ZXMuYWRkKGZhbGxiYWNrSmltdU5hbWUpXG5cbiAgZm9yIChjb25zdCBrZXkgb2YgY2FuZGlkYXRlcykge1xuICAgIGNvbnN0IHYgPSByZWFkQXR0cmlidXRlKGF0dHJzLCBrZXkpXG4gICAgaWYgKHYgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHZcbiAgfVxuXG4gIGNvbnN0IGF0dHJLZXlzID0gT2JqZWN0LmtleXMoYXR0cnMpXG4gIGZvciAoY29uc3Qga2V5IG9mIGNhbmRpZGF0ZXMpIHtcbiAgICBjb25zdCBmb3VuZCA9IGF0dHJLZXlzLmZpbmQoKGspID0+IGsudG9Mb3dlckNhc2UoKSA9PT0ga2V5LnRvTG93ZXJDYXNlKCkpXG4gICAgaWYgKGZvdW5kICE9IG51bGwpIHJldHVybiBhdHRyc1tmb3VuZF1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbnR5cGUgUXVlcmlhYmxlTGF5ZXIgPSB7XG4gIHF1ZXJ5PzogKHE6IG9iamVjdCwgb3B0aW9ucz86IHsgc2NvcGU/OiBRdWVyeVNjb3BlIH0pID0+IFByb21pc2U8eyByZWNvcmRzPzogRGF0YVJlY29yZFtdIH0+XG4gIGxvYWQ/OiAocTogb2JqZWN0LCBvcHRpb25zPzogeyBzY29wZT86IFF1ZXJ5U2NvcGUgfSkgPT4gUHJvbWlzZTxEYXRhUmVjb3JkW10+XG4gIGxvYWRBbGw/OiAoXG4gICAgcTogb2JqZWN0LFxuICAgIHNpZ25hbD86IEFib3J0U2lnbmFsLFxuICAgIHByb2dyZXNzQ2FsbGJhY2s/OiB1bmtub3duLFxuICAgIG9wdGlvbnM/OiB7IHNjb3BlPzogUXVlcnlTY29wZSB9XG4gICkgPT4gUHJvbWlzZTxEYXRhUmVjb3JkW10+XG4gIGdldEFsbExvYWRlZFJlY29yZHM/OiAoKSA9PiBEYXRhUmVjb3JkW11cbiAgZ2V0UmVjb3Jkcz86ICgpID0+IERhdGFSZWNvcmRbXVxuICBsYXllcj86IHsgcXVlcnlGZWF0dXJlcz86IChxOiBvYmplY3QpID0+IFByb21pc2U8eyBmZWF0dXJlcz86IHVua25vd25bXSB9PiB9XG4gIGJ1aWxkUmVjb3JkPzogKGZlYXR1cmU6IHVua25vd24pID0+IERhdGFSZWNvcmRcbn1cblxuY29uc3QgcXVlcnlPcHRpb25zID0geyBzY29wZTogUXVlcnlTY29wZS5JbkFsbERhdGEgfVxuXG5jb25zdCBidWlsZFF1ZXJ5UGFyYW1zID0gKG91dEZpZWxkczogc3RyaW5nW10gPSBbJyonXSkgPT4gKHtcbiAgd2hlcmU6ICcxPTEnLFxuICBvdXRGaWVsZHMsXG4gIHJldHVybkdlb21ldHJ5OiBmYWxzZSxcbiAgcGFnZVNpemU6IDIwMDAsXG4gIGRpc2FibGVDbGllbnRRdWVyeTogdHJ1ZVxufSlcblxuZnVuY3Rpb24gcmVjb3Jkc0FyZVJlYWRhYmxlIChyZWNvcmRzOiBEYXRhUmVjb3JkW10pOiBib29sZWFuIHtcbiAgcmV0dXJuIHJlY29yZHMubGVuZ3RoID4gMCAmJiByZWNvcmRzLnNvbWUocmVjb3JkSGFzUmVhZGFibGVEYXRhKVxufVxuXG5hc3luYyBmdW5jdGlvbiBxdWVyeVZpYUpzYXBpTGF5ZXIgKGRzOiBRdWVyaWFibGVMYXllcik6IFByb21pc2U8RGF0YVJlY29yZFtdPiB7XG4gIGNvbnN0IGxheWVyID0gZHMubGF5ZXJcbiAgaWYgKCFsYXllcj8ucXVlcnlGZWF0dXJlcyB8fCB0eXBlb2YgZHMuYnVpbGRSZWNvcmQgIT09ICdmdW5jdGlvbicpIHJldHVybiBbXVxuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbGF5ZXIucXVlcnlGZWF0dXJlcyh7XG4gICAgICB3aGVyZTogJzE9MScsXG4gICAgICBvdXRGaWVsZHM6IFsnKiddLFxuICAgICAgcmV0dXJuR2VvbWV0cnk6IGZhbHNlLFxuICAgICAgbnVtOiAyMDAwXG4gICAgfSlcbiAgICBjb25zdCBmZWF0dXJlcyA9IHJlc3VsdD8uZmVhdHVyZXMgPz8gW11cbiAgICByZXR1cm4gZmVhdHVyZXMubWFwKChmKSA9PiBkcy5idWlsZFJlY29yZCEoZikpXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBbXVxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHF1ZXJ5QWxsUmVjb3JkcyAoXG4gIGRzOiBRdWVyaWFibGVMYXllcixcbiAgb3V0RmllbGRzOiBzdHJpbmdbXSA9IFsnKiddXG4pOiBQcm9taXNlPERhdGFSZWNvcmRbXT4ge1xuICBjb25zdCBwYXJhbXMgPSBidWlsZFF1ZXJ5UGFyYW1zKG91dEZpZWxkcylcblxuICBpZiAodHlwZW9mIGRzPy5sb2FkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBkcy5sb2FkKHBhcmFtcywgcXVlcnlPcHRpb25zKVxuICAgICAgaWYgKHJlY29yZHM/Lmxlbmd0aCkgcmV0dXJuIHJlY29yZHNcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIHRlbnRhIHByw7N4aW1vIG3DqXRvZG9cbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIGRzPy5sb2FkQWxsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBkcy5sb2FkQWxsKHBhcmFtcywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHF1ZXJ5T3B0aW9ucylcbiAgICAgIGlmIChyZWNvcmRzPy5sZW5ndGgpIHJldHVybiByZWNvcmRzXG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyB0ZW50YSBxdWVyeSBhYmFpeG9cbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIGRzPy5xdWVyeSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkcy5xdWVyeShwYXJhbXMsIHF1ZXJ5T3B0aW9ucylcbiAgICAgIHJldHVybiByZXN1bHQ/LnJlY29yZHMgPz8gW11cbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIHRlbnRhIEpTIEFQSVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBxdWVyeVZpYUpzYXBpTGF5ZXIoZHMpXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmV0Y2hMYXllclJlY29yZHNPcHRpb25zIHtcbiAgLyoqIElnbm9yYSBjYWNoZSBkbyBtYXBhIGUgZm9yw6dhIHF1ZXJ5L2xvYWRBbGwgKMO6dGlsIG5vIEVudGVycHJpc2UpLiAqL1xuICBmb3JjZVF1ZXJ5PzogYm9vbGVhblxuICB5ZWFyRmllbGRKaW11Pzogc3RyaW5nXG4gIHJlY29ydGVGaWVsZEppbXU/OiBzdHJpbmdcbiAgZmllbGRzPzogSU1GaWVsZFNjaGVtYVtdXG59XG5cbmZ1bmN0aW9uIHJlc29sdmVPdXRGaWVsZHMgKFxuICB5ZWFyRmllbGRKaW11Pzogc3RyaW5nLFxuICByZWNvcnRlRmllbGRKaW11Pzogc3RyaW5nLFxuICBmaWVsZHM/OiBJTUZpZWxkU2NoZW1hW11cbik6IHN0cmluZ1tdIHtcbiAgaWYgKCFmaWVsZHM/Lmxlbmd0aCB8fCAheWVhckZpZWxkSmltdSB8fCAhcmVjb3J0ZUZpZWxkSmltdSkgcmV0dXJuIFsnKiddXG4gIGNvbnN0IGtleXMgPSByZXNvbHZlQXR0cmlidXRlS2V5cyhmaWVsZHMsIHllYXJGaWVsZEppbXUsIHJlY29ydGVGaWVsZEppbXUpXG4gIGlmICgha2V5cykgcmV0dXJuIFsnKiddXG4gIHJldHVybiBbJyonLCBrZXlzLnllYXJLZXksIGtleXMucmVjb3J0ZUtleV1cbn1cblxuLyoqIENhcnJlZ2EgdG9kb3Mgb3MgcmVnaXN0cm9zIGRhIGNhbWFkYSAodGFiZWxhIGFubyDDlyByZWNvcnRlcykuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hMYXllclJlY29yZHMgKFxuICBkYXRhU291cmNlOiB1bmtub3duLFxuICBvcHRpb25zPzogRmV0Y2hMYXllclJlY29yZHNPcHRpb25zXG4pOiBQcm9taXNlPERhdGFSZWNvcmRbXT4ge1xuICBjb25zdCBkcyA9IGRhdGFTb3VyY2UgYXMgUXVlcmlhYmxlTGF5ZXJcbiAgY29uc3QgY2FjaGVkID0gZHMuZ2V0QWxsTG9hZGVkUmVjb3Jkcz8uKCkgPz8gZHMuZ2V0UmVjb3Jkcz8uKCkgPz8gW11cbiAgY29uc3Qgb3V0RmllbGRzID0gcmVzb2x2ZU91dEZpZWxkcyhcbiAgICBvcHRpb25zPy55ZWFyRmllbGRKaW11LFxuICAgIG9wdGlvbnM/LnJlY29ydGVGaWVsZEppbXUsXG4gICAgb3B0aW9ucz8uZmllbGRzXG4gIClcblxuICBpZiAoIW9wdGlvbnM/LmZvcmNlUXVlcnkgJiYgcmVjb3Jkc0FyZVJlYWRhYmxlKGNhY2hlZCkpIHtcbiAgICByZXR1cm4gY2FjaGVkXG4gIH1cblxuICBjb25zdCBxdWVyaWVkID0gYXdhaXQgcXVlcnlBbGxSZWNvcmRzKGRzLCBvdXRGaWVsZHMpXG4gIGlmIChyZWNvcmRzQXJlUmVhZGFibGUocXVlcmllZCkpIHJldHVybiBxdWVyaWVkXG4gIGlmIChxdWVyaWVkLmxlbmd0aCkgcmV0dXJuIHF1ZXJpZWRcblxuICBpZiAoIW9wdGlvbnM/LmZvcmNlUXVlcnkpIHJldHVybiBjYWNoZWRcbiAgcmV0dXJuIHF1ZXJpZWQubGVuZ3RoID8gcXVlcmllZCA6IGNhY2hlZFxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVSZWNvcnRlVG9rZW4gKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gdmFsdWVcbiAgICAudG9Mb3dlckNhc2UoKVxuICAgIC5ub3JtYWxpemUoJ05GRCcpXG4gICAgLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csICcnKVxuICAgIC5yZXBsYWNlKC9bXFxzLV0rL2csICdfJylcbn1cblxuZnVuY3Rpb24gaXNZZWFyTmFtZWRGaWVsZCAoZmllbGQ6IElNRmllbGRTY2hlbWEpOiBib29sZWFuIHtcbiAgY29uc3QgeSA9XG4gICAgcGFyc2VZZWFyKGZpZWxkLmppbXVOYW1lKSA/P1xuICAgIHBhcnNlWWVhcihmaWVsZC5uYW1lKSA/P1xuICAgIHBhcnNlWWVhcihmaWVsZC5hbGlhcylcbiAgcmV0dXJuIHkgIT0gbnVsbCAmJiB5ID49IDE5ODUgJiYgeSA8PSAyMDM1XG59XG5cbmZ1bmN0aW9uIGZpbmRSZWNvcnRlTmFtZUZpZWxkIChmaWVsZHM6IElNRmllbGRTY2hlbWFbXSk6IElNRmllbGRTY2hlbWEgfCBudWxsIHtcbiAgY29uc3QgcGF0dGVybnMgPSBbJ3JlY29ydGUnLCAncmVnaWFvJywgJ3JlZ2nDo28nLCAnYmlvbWEnLCAnbm9tZScsICduYW1lJywgJ2xhYmVsJ11cbiAgcmV0dXJuIChcbiAgICBmaWVsZHMuZmluZCgoZikgPT4ge1xuICAgICAgY29uc3QgaiA9IGYuamltdU5hbWU/LnRvTG93ZXJDYXNlKCkgPz8gJydcbiAgICAgIGNvbnN0IG4gPSBmLm5hbWU/LnRvTG93ZXJDYXNlKCkgPz8gJydcbiAgICAgIHJldHVybiBwYXR0ZXJucy5zb21lKChwKSA9PiBqLmluY2x1ZGVzKHApIHx8IG4uaW5jbHVkZXMocCkpXG4gICAgfSkgPz8gbnVsbFxuICApXG59XG5cbi8qKiBMYXlvdXQgYWx0ZXJuYXRpdm86IGNhZGEgcmVnaXN0cm8gPSByZWNvcnRlOyBjb2x1bmFzIG51bcOpcmljYXMgPSBhbm9zLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkWWVhclNlcmllc0Zyb21SZWNvcnRlUm93cyAoXG4gIHJlY29yZHM6IFJlY29yZExpa2VbXSxcbiAgcmVjb3J0ZUZpZWxkSmltdTogc3RyaW5nLFxuICBmaWVsZHM6IElNRmllbGRTY2hlbWFbXVxuKTogWWVhclZhbHVlUm93W10ge1xuICBjb25zdCB5ZWFyRmllbGRzID0gZmllbGRzLmZpbHRlcihpc1llYXJOYW1lZEZpZWxkKVxuICBpZiAoIXllYXJGaWVsZHMubGVuZ3RoKSByZXR1cm4gW11cblxuICBjb25zdCB0YXJnZXQgPSBub3JtYWxpemVSZWNvcnRlVG9rZW4ocmVjb3J0ZUZpZWxkSmltdSlcbiAgY29uc3QgbmFtZUZpZWxkID0gZmluZFJlY29ydGVOYW1lRmllbGQoZmllbGRzKVxuXG4gIGNvbnN0IHJvdyA9XG4gICAgcmVjb3Jkcy5maW5kKChyZWMpID0+IHtcbiAgICAgIGlmIChuYW1lRmllbGQpIHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSByZWFkUmVjb3JkVmFsdWUocmVjLCBuYW1lRmllbGQsIG5hbWVGaWVsZC5qaW11TmFtZSlcbiAgICAgICAgaWYgKGxhYmVsICE9IG51bGwgJiYgbm9ybWFsaXplUmVjb3J0ZVRva2VuKFN0cmluZyhsYWJlbCkpID09PSB0YXJnZXQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IGYgb2YgZmllbGRzKSB7XG4gICAgICAgIGlmIChpc1llYXJOYW1lZEZpZWxkKGYpIHx8IGYuamltdU5hbWUgPT09IHJlY29ydGVGaWVsZEppbXUpIGNvbnRpbnVlXG4gICAgICAgIGNvbnN0IHYgPSByZWFkUmVjb3JkVmFsdWUocmVjLCBmLCBmLmppbXVOYW1lKVxuICAgICAgICBpZiAodiAhPSBudWxsICYmIG5vcm1hbGl6ZVJlY29ydGVUb2tlbihTdHJpbmcodikpID09PSB0YXJnZXQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KSA/PyBudWxsXG5cbiAgaWYgKCFyb3cpIHJldHVybiBbXVxuXG4gIGNvbnN0IHNlcmllczogWWVhclZhbHVlUm93W10gPSBbXVxuICBmb3IgKGNvbnN0IHlmIG9mIHllYXJGaWVsZHMpIHtcbiAgICBjb25zdCB5ZWFyID1cbiAgICAgIHBhcnNlWWVhcih5Zi5qaW11TmFtZSkgPz8gcGFyc2VZZWFyKHlmLm5hbWUpID8/IHBhcnNlWWVhcih5Zi5hbGlhcylcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlTnVtZXJpY1ZhbHVlKHJlYWRSZWNvcmRWYWx1ZShyb3csIHlmLCB5Zi5qaW11TmFtZSkpXG4gICAgaWYgKHllYXIgPT0gbnVsbCB8fCB2YWx1ZSA9PSBudWxsKSBjb250aW51ZVxuICAgIHNlcmllcy5wdXNoKHsgeWVhciwgdmFsdWUgfSlcbiAgfVxuXG4gIHJldHVybiBzZXJpZXMuc29ydCgoYSwgYikgPT4gYS55ZWFyIC0gYi55ZWFyKVxufVxuXG5mdW5jdGlvbiBidWlsZFllYXJTZXJpZXNZZWFyUm93cyAoXG4gIHJlY29yZHM6IFJlY29yZExpa2VbXSxcbiAgeWVhckZpZWxkSmltdTogc3RyaW5nLFxuICByZWNvcnRlRmllbGRKaW11OiBzdHJpbmcsXG4gIGZpZWxkcz86IElNRmllbGRTY2hlbWFbXVxuKTogWWVhclZhbHVlUm93W10ge1xuICBjb25zdCB5ZWFyRmllbGQgPSBmaWVsZHM/Lmxlbmd0aFxuICAgID8gZmluZEZpZWxkQnlKaW11TmFtZShmaWVsZHMsIHllYXJGaWVsZEppbXUpXG4gICAgOiBudWxsXG4gIGNvbnN0IHJlY29ydGVGaWVsZCA9IGZpZWxkcz8ubGVuZ3RoXG4gICAgPyBmaW5kRmllbGRCeUppbXVOYW1lKGZpZWxkcywgcmVjb3J0ZUZpZWxkSmltdSlcbiAgICA6IG51bGxcbiAgY29uc3Qgc2VyaWVzOiBZZWFyVmFsdWVSb3dbXSA9IFtdXG5cbiAgZm9yIChjb25zdCByZWMgb2YgcmVjb3Jkcykge1xuICAgIGNvbnN0IHllYXIgPSBwYXJzZVllYXIoXG4gICAgICByZWFkUmVjb3JkVmFsdWUocmVjLCB5ZWFyRmllbGQsIHllYXJGaWVsZEppbXUpXG4gICAgKVxuICAgIGNvbnN0IHZhbHVlID0gcGFyc2VOdW1lcmljVmFsdWUoXG4gICAgICByZWFkUmVjb3JkVmFsdWUocmVjLCByZWNvcnRlRmllbGQsIHJlY29ydGVGaWVsZEppbXUpXG4gICAgKVxuICAgIGlmICh5ZWFyID09IG51bGwgfHwgdmFsdWUgPT0gbnVsbCkgY29udGludWVcblxuICAgIHNlcmllcy5wdXNoKHsgeWVhciwgdmFsdWUgfSlcbiAgfVxuXG4gIHJldHVybiBzZXJpZXMuc29ydCgoYSwgYikgPT4gYS55ZWFyIC0gYi55ZWFyKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRZZWFyU2VyaWVzIChcbiAgcmVjb3JkczogUmVjb3JkTGlrZVtdLFxuICB5ZWFyRmllbGRKaW11OiBzdHJpbmcsXG4gIHJlY29ydGVGaWVsZEppbXU6IHN0cmluZyxcbiAgZmllbGRzPzogSU1GaWVsZFNjaGVtYVtdXG4pOiBZZWFyVmFsdWVSb3dbXSB7XG4gIGNvbnN0IHllYXJSb3dzID0gYnVpbGRZZWFyU2VyaWVzWWVhclJvd3MoXG4gICAgcmVjb3JkcyxcbiAgICB5ZWFyRmllbGRKaW11LFxuICAgIHJlY29ydGVGaWVsZEppbXUsXG4gICAgZmllbGRzXG4gIClcbiAgaWYgKHllYXJSb3dzLmxlbmd0aCA+IDApIHJldHVybiB5ZWFyUm93c1xuXG4gIGlmIChmaWVsZHM/Lmxlbmd0aCkge1xuICAgIHJldHVybiBidWlsZFllYXJTZXJpZXNGcm9tUmVjb3J0ZVJvd3MocmVjb3JkcywgcmVjb3J0ZUZpZWxkSmltdSwgZmllbGRzKVxuICB9XG5cbiAgcmV0dXJuIHllYXJSb3dzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRZZWFyc1JhbmdlU3VtbWFyeSAoc2VyaWVzOiBZZWFyVmFsdWVSb3dbXSk6IHN0cmluZyB8IG51bGwge1xuICBpZiAoIXNlcmllcy5sZW5ndGgpIHJldHVybiBudWxsXG4gIGNvbnN0IG1pbiA9IHNlcmllc1swXS55ZWFyXG4gIGNvbnN0IG1heCA9IHNlcmllc1tzZXJpZXMubGVuZ3RoIC0gMV0ueWVhclxuICBjb25zdCBjb3VudCA9IHNlcmllcy5sZW5ndGhcbiAgaWYgKG1pbiA9PT0gbWF4KSByZXR1cm4gYCR7bWlufSAoJHtjb3VudH0gYW5vKWBcbiAgcmV0dXJuIGAke21pbn3igJMke21heH0gKCR7Y291bnR9IGFub3MpYFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNZZWFyT3V0T2ZUeXBpY2FsUmFuZ2UgKHllYXI6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4geWVhciA8IDIwMDEgfHwgeWVhciA+IDIwMjVcbn1cblxuLyoqIFZhcmlhw6fDo28gcGVyY2VudHVhbCBkbyB2YWxvciBpbmljaWFsIChhbm8gbWFpcyBhbnRpZ28pIHBhcmEgbyBmaW5hbCAoYW5vIG1haXMgcmVjZW50ZSkuICovXG5leHBvcnQgZnVuY3Rpb24gY2FsY1BlcmNlbnRWYXJpYXRpb24gKFxuICB2YWx1ZUluaWNpYWw6IG51bWJlcixcbiAgdmFsdWVGaW5hbDogbnVtYmVyXG4pOiBudW1iZXIgfCBudWxsIHtcbiAgaWYgKCFOdW1iZXIuaXNGaW5pdGUodmFsdWVJbmljaWFsKSB8fCAhTnVtYmVyLmlzRmluaXRlKHZhbHVlRmluYWwpKSByZXR1cm4gbnVsbFxuICBpZiAodmFsdWVJbmljaWFsID09PSAwKSByZXR1cm4gbnVsbFxuICByZXR1cm4gKCh2YWx1ZUZpbmFsIC0gdmFsdWVJbmljaWFsKSAvIHZhbHVlSW5pY2lhbCkgKiAxMDBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFBlcmNlbnRWYXJpYXRpb24gKHBjdDogbnVtYmVyKTogc3RyaW5nIHtcbiAgY29uc3Qgc2lnbiA9IHBjdCA+IDAgPyAnKycgOiAnJ1xuICByZXR1cm4gYCR7c2lnbn0ke3BjdC50b0xvY2FsZVN0cmluZygncHQtQlInLCB7XG4gICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMlxuICB9KX0lYFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWVGb3JZZWFyIChcbiAgc2VyaWVzOiBZZWFyVmFsdWVSb3dbXSxcbiAgeWVhcjogbnVtYmVyXG4pOiBudW1iZXIgfCBudWxsIHtcbiAgY29uc3Qgcm93ID0gc2VyaWVzLmZpbmQoKHIpID0+IHIueWVhciA9PT0geWVhcilcbiAgcmV0dXJuIHJvdyAhPSBudWxsID8gcm93LnZhbHVlIDogbnVsbFxufVxuXG4vKiogU29tYSBvcyB2YWxvcmVzIGRvcyBhbm9zIGluZm9ybWFkb3M7IHJldG9ybmEgbnVsbCBzZSBhbGd1bSBhbm8gbsOjbyB0aXZlciBkYWRvLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1bVZhbHVlc0ZvclllYXJzIChcbiAgc2VyaWVzOiBZZWFyVmFsdWVSb3dbXSxcbiAgeWVhcnM6IG51bWJlcltdXG4pOiBudW1iZXIgfCBudWxsIHtcbiAgaWYgKCF5ZWFycy5sZW5ndGgpIHJldHVybiBudWxsXG4gIGxldCBzdW0gPSAwXG4gIGZvciAoY29uc3QgeWVhciBvZiB5ZWFycykge1xuICAgIGNvbnN0IHZhbHVlID0gZ2V0VmFsdWVGb3JZZWFyKHNlcmllcywgeWVhcilcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBzdW0gKz0gdmFsdWVcbiAgfVxuICByZXR1cm4gc3VtXG59XG5cbi8qKiBBbm9zIGRpc3BvbsOtdmVpcyBwYXJhIG8gcGVyw61vZG8gaW5pY2lhbCAoYW50ZXMgZG8gcGVyw61vZG8gZmluYWwsIHNlIGhvdXZlcikuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0WWVhcnNBbGxvd2VkRm9ySW5pY2lhbCAoXG4gIGFsbFllYXJzOiBudW1iZXJbXSxcbiAgcGVyaW9kb0ZpbmFsOiBudW1iZXJbXVxuKTogbnVtYmVyW10ge1xuICBjb25zdCBibG9ja2VkID0gbmV3IFNldChwZXJpb2RvRmluYWwpXG4gIGNvbnN0IG1heEZpbmFsID0gcGVyaW9kb0ZpbmFsLmxlbmd0aCA/IE1hdGgubWluKC4uLnBlcmlvZG9GaW5hbCkgOiBJbmZpbml0eVxuICByZXR1cm4gYWxsWWVhcnMuZmlsdGVyKCh5KSA9PiAhYmxvY2tlZC5oYXMoeSkgJiYgeSA8IG1heEZpbmFsKVxufVxuXG4vKiogQW5vcyBkaXNwb27DrXZlaXMgcGFyYSBvIHBlcsOtb2RvIGZpbmFsIChkZXBvaXMgZG8gcGVyw61vZG8gaW5pY2lhbCwgc2UgaG91dmVyKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRZZWFyc0FsbG93ZWRGb3JGaW5hbCAoXG4gIGFsbFllYXJzOiBudW1iZXJbXSxcbiAgcGVyaW9kb0luaWNpYWw6IG51bWJlcltdXG4pOiBudW1iZXJbXSB7XG4gIGNvbnN0IGJsb2NrZWQgPSBuZXcgU2V0KHBlcmlvZG9JbmljaWFsKVxuICBjb25zdCBtaW5JbmljaWFsID0gcGVyaW9kb0luaWNpYWwubGVuZ3RoID8gTWF0aC5tYXgoLi4ucGVyaW9kb0luaWNpYWwpIDogLUluZmluaXR5XG4gIHJldHVybiBhbGxZZWFycy5maWx0ZXIoKHkpID0+ICFibG9ja2VkLmhhcyh5KSAmJiB5ID4gbWluSW5pY2lhbClcbn1cblxuLyoqIE1hcmNhL2Rlc21hcmNhIHVtIGFubyBtYW50ZW5kbyBhcGVuYXMgc2VxdcOqbmNpYXMgY29uc2VjdXRpdmFzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUNvbnNlY3V0aXZlWWVhciAoXG4gIHBlcmlvZDogbnVtYmVyW10sXG4gIHllYXI6IG51bWJlclxuKTogeyBuZXh0OiBudW1iZXJbXTsgcmVqZWN0ZWQ6IGJvb2xlYW4gfSB7XG4gIGlmIChwZXJpb2QuaW5jbHVkZXMoeWVhcikpIHtcbiAgICByZXR1cm4geyBuZXh0OiBwZXJpb2QuZmlsdGVyKCh5KSA9PiB5ICE9PSB5ZWFyKSwgcmVqZWN0ZWQ6IGZhbHNlIH1cbiAgfVxuICBjb25zdCBuZXh0ID0gWy4uLnBlcmlvZCwgeWVhcl0uc29ydCgoYSwgYikgPT4gYSAtIGIpXG4gIGlmICghYXJlQ29uc2VjdXRpdmVZZWFycyhuZXh0KSkge1xuICAgIHJldHVybiB7IG5leHQ6IHBlcmlvZCwgcmVqZWN0ZWQ6IHRydWUgfVxuICB9XG4gIHJldHVybiB7IG5leHQsIHJlamVjdGVkOiBmYWxzZSB9XG59XG5cbi8qKiBWZXJpZmljYSBzZSBvcyBhbm9zIGZvcm1hbSB1bWEgc2VxdcOqbmNpYSBjb25zZWN1dGl2YSAoZXguOiAyMDEwLCAyMDExLCAyMDEyKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcmVDb25zZWN1dGl2ZVllYXJzICh5ZWFyczogbnVtYmVyW10pOiBib29sZWFuIHtcbiAgaWYgKHllYXJzLmxlbmd0aCA8PSAxKSByZXR1cm4gdHJ1ZVxuICBjb25zdCBzb3J0ZWQgPSBbLi4ueWVhcnNdLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuICBmb3IgKGxldCBpID0gMTsgaSA8IHNvcnRlZC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzb3J0ZWRbaV0gLSBzb3J0ZWRbaSAtIDFdICE9PSAxKSByZXR1cm4gZmFsc2VcbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG4vKiogUsOzdHVsbyBjb21wYWN0byBwYXJhIHVtIG91IG1haXMgYW5vcyAoZXguOiBcIjIwMTBcIiBvdSBcIjIwMTDigJMyMDEyICgzIGFub3MpXCIpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFBlcmlvZExhYmVsICh5ZWFyczogbnVtYmVyW10pOiBzdHJpbmcge1xuICBjb25zdCBzb3J0ZWQgPSBbLi4ueWVhcnNdLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuICBpZiAoIXNvcnRlZC5sZW5ndGgpIHJldHVybiAnJ1xuICBpZiAoc29ydGVkLmxlbmd0aCA9PT0gMSkgcmV0dXJuIFN0cmluZyhzb3J0ZWRbMF0pXG4gIHJldHVybiBgJHtzb3J0ZWRbMF194oCTJHtzb3J0ZWRbc29ydGVkLmxlbmd0aCAtIDFdfSAoJHtzb3J0ZWQubGVuZ3RofSBhbm9zKWBcbn1cblxuLyoqIEludGVydmFsbyBkZSBhbm9zIHNlbSBjb250YWdlbSAoZXguOiBcIjIwMTBcIiBvdSBcIjIwMTDigJMyMDEyXCIpIOKAlCB1c28gZW0gcmVzdWx0YWRvcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQZXJpb2RSYW5nZUxhYmVsICh5ZWFyczogbnVtYmVyW10pOiBzdHJpbmcge1xuICBjb25zdCBzb3J0ZWQgPSBbLi4ueWVhcnNdLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuICBpZiAoIXNvcnRlZC5sZW5ndGgpIHJldHVybiAnJ1xuICBpZiAoc29ydGVkLmxlbmd0aCA9PT0gMSkgcmV0dXJuIFN0cmluZyhzb3J0ZWRbMF0pXG4gIHJldHVybiBgJHtzb3J0ZWRbMF194oCTJHtzb3J0ZWRbc29ydGVkLmxlbmd0aCAtIDFdfWBcbn1cblxuZXhwb3J0IGludGVyZmFjZSBWYXJpYXRpb25SZXN1bHQge1xuICBwY3Q6IG51bWJlclxuICB2YWx1ZUluaWNpYWw6IG51bWJlclxuICB2YWx1ZUZpbmFsOiBudW1iZXJcbiAgeWVhcnNJbmljaWFsOiBudW1iZXJbXVxuICB5ZWFyc0ZpbmFsOiBudW1iZXJbXVxufVxuXG5leHBvcnQgdHlwZSBQZXJpb2RWYXJpYXRpb25PdXRjb21lID1cbiAgfCB7IG9rOiB0cnVlOyBkYXRhOiBWYXJpYXRpb25SZXN1bHQgfVxuICB8IHsgb2s6IGZhbHNlOyBtZXNzYWdlOiBzdHJpbmcgfVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZVBlcmlvZFZhcmlhdGlvbiAoXG4gIHNlcmllczogWWVhclZhbHVlUm93W10sXG4gIHBlcmlvZG9JbmljaWFsOiBudW1iZXJbXSxcbiAgcGVyaW9kb0ZpbmFsOiBudW1iZXJbXVxuKTogUGVyaW9kVmFyaWF0aW9uT3V0Y29tZSB7XG4gIGNvbnN0IGluaSA9IFsuLi5wZXJpb2RvSW5pY2lhbF0uc29ydCgoYSwgYikgPT4gYSAtIGIpXG4gIGNvbnN0IGZpbiA9IFsuLi5wZXJpb2RvRmluYWxdLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuXG4gIGlmICghaW5pLmxlbmd0aCB8fCAhZmluLmxlbmd0aCkge1xuICAgIHJldHVybiB7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBtZXNzYWdlOiAnU2VsZWNpb25lIHBlbG8gbWVub3MgdW0gYW5vIGVtIGNhZGEgcGVyw61vZG8uJ1xuICAgIH1cbiAgfVxuXG4gIGlmIChpbmkubGVuZ3RoICE9PSBmaW4ubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6XG4gICAgICAgICdPIHBlcsOtb2RvIGluaWNpYWwgZSBvIHBlcsOtb2RvIGZpbmFsIGRldmVtIHRlciBhIG1lc21hIHF1YW50aWRhZGUgZGUgYW5vcy4nXG4gICAgfVxuICB9XG5cbiAgaWYgKCFhcmVDb25zZWN1dGl2ZVllYXJzKGluaSkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogJ09zIGFub3MgZG8gcGVyw61vZG8gaW5pY2lhbCBkZXZlbSBzZXIgY29uc2VjdXRpdm9zLidcbiAgICB9XG4gIH1cblxuICBpZiAoIWFyZUNvbnNlY3V0aXZlWWVhcnMoZmluKSkge1xuICAgIHJldHVybiB7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBtZXNzYWdlOiAnT3MgYW5vcyBkbyBwZXLDrW9kbyBmaW5hbCBkZXZlbSBzZXIgY29uc2VjdXRpdm9zLidcbiAgICB9XG4gIH1cblxuICBjb25zdCBpbmlTZXQgPSBuZXcgU2V0KGluaSlcbiAgaWYgKGZpbi5zb21lKCh5KSA9PiBpbmlTZXQuaGFzKHkpKSkge1xuICAgIHJldHVybiB7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBtZXNzYWdlOiAnVW0gYW5vIG7Do28gcG9kZSBwZXJ0ZW5jZXIgYW9zIGRvaXMgcGVyw61vZG9zIGFvIG1lc21vIHRlbXBvLidcbiAgICB9XG4gIH1cblxuICBjb25zdCBtYXhJbmljaWFsID0gaW5pW2luaS5sZW5ndGggLSAxXVxuICBjb25zdCBtaW5GaW5hbCA9IGZpblswXVxuICBpZiAobWF4SW5pY2lhbCA+PSBtaW5GaW5hbCkge1xuICAgIHJldHVybiB7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBtZXNzYWdlOiAnTyBwZXLDrW9kbyBmaW5hbCBkZXZlIHNlciBwb3N0ZXJpb3IgYW8gcGVyw61vZG8gaW5pY2lhbC4nXG4gICAgfVxuICB9XG5cbiAgY29uc3QgdmFsdWVJbmljaWFsID0gc3VtVmFsdWVzRm9yWWVhcnMoc2VyaWVzLCBpbmkpXG4gIGNvbnN0IHZhbHVlRmluYWwgPSBzdW1WYWx1ZXNGb3JZZWFycyhzZXJpZXMsIGZpbilcblxuICBpZiAodmFsdWVJbmljaWFsID09IG51bGwgfHwgdmFsdWVGaW5hbCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6XG4gICAgICAgICdVbSBvdSBtYWlzIGFub3Mgc2VsZWNpb25hZG9zIG7Do28gcG9zc3VlbSBkYWRvIHBhcmEgZXN0ZSByZWNvcnRlLidcbiAgICB9XG4gIH1cblxuICBjb25zdCBwY3QgPSBjYWxjUGVyY2VudFZhcmlhdGlvbih2YWx1ZUluaWNpYWwsIHZhbHVlRmluYWwpXG4gIGlmIChwY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiB7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBtZXNzYWdlOlxuICAgICAgICAnQSBzb21hIGRvIHBlcsOtb2RvIGluaWNpYWwgw6kgemVybzsgbsOjbyDDqSBwb3Nzw612ZWwgY2FsY3VsYXIgYSB2YXJpYcOnw6NvIHBlcmNlbnR1YWwuJ1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgb2s6IHRydWUsXG4gICAgZGF0YToge1xuICAgICAgcGN0LFxuICAgICAgdmFsdWVJbmljaWFsLFxuICAgICAgdmFsdWVGaW5hbCxcbiAgICAgIHllYXJzSW5pY2lhbDogaW5pLFxuICAgICAgeWVhcnNGaW5hbDogZmluXG4gICAgfVxuICB9XG59XG5cbi8qKiBDb21wYXJhw6fDo28gZW50cmUgZG9pcyBhbm9zIMO6bmljb3MgKGF0YWxobyBwYXJhIHBlcsOtb2RvcyBkZSB1bSBhbm8pLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVWYXJpYXRpb24gKFxuICBzZXJpZXM6IFllYXJWYWx1ZVJvd1tdLFxuICBhbm9JbmljaWFsOiBudW1iZXIsXG4gIGFub0ZpbmFsOiBudW1iZXJcbik6IFBlcmlvZFZhcmlhdGlvbk91dGNvbWUge1xuICByZXR1cm4gY29tcHV0ZVBlcmlvZFZhcmlhdGlvbihzZXJpZXMsIFthbm9JbmljaWFsXSwgW2Fub0ZpbmFsXSlcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQge1xyXG4gIFJlYWN0LFxyXG4gIGpzeCxcclxuICB0eXBlIEFsbFdpZGdldFByb3BzLFxyXG4gIERhdGFTb3VyY2VDb21wb25lbnRcclxufSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IExvYWRpbmcsIExhYmVsLCBCdXR0b24gfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgdHlwZSB7IElNQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xyXG5pbXBvcnQge1xyXG4gIExBQkVMX1BFUklPRE9fRklOQUwsXHJcbiAgTEFCRUxfUEVSSU9ET19JTklDSUFMLFxyXG4gIEhJTlRfUEVSSU9EX1JVTEVTLFxyXG4gIE1TR19OT1RfQ09ORklHVVJFRCxcclxuICBNU0dfTk9fREFUQSxcclxuICBQTEFDRUhPTERFUl9QRVJJT0RPX0ZJTkFMLFxyXG4gIFBMQUNFSE9MREVSX1BFUklPRE9fSU5JQ0lBTFxyXG59IGZyb20gJy4uL2NvbnN0YW50cydcclxuaW1wb3J0IHsgVmFyaWF0aW9uUmVzdWx0UGFuZWwgfSBmcm9tICcuL2NvbXBvbmVudHMvdmFyaWF0aW9uLXJlc3VsdCdcclxuaW1wb3J0IHsgdXNlUHJvZGVzU2VyaWVzIH0gZnJvbSAnLi9ob29rcy91c2UtcHJvZGVzLXNlcmllcydcclxuaW1wb3J0IHsgdXNlUGVyaW9kU2VsZWN0aW9uIH0gZnJvbSAnLi9ob29rcy91c2UtcGVyaW9kLXNlbGVjdGlvbidcclxuaW1wb3J0IHsgd2lkZ2V0U3R5bGVzIH0gZnJvbSAnLi9zdHlsZXMnXHJcbmltcG9ydCB7IFllYXJQZXJpb2RQaWNrZXIgfSBmcm9tICcuL3llYXItcGVyaW9kLXBpY2tlcidcclxuXHJcbmNvbnN0IFdpZGdldCA9IChwcm9wczogQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+KSA9PiB7XHJcbiAgY29uc3QgdXNlRHMgPSBwcm9wcy51c2VEYXRhU291cmNlcz8uWzBdXHJcbiAgY29uc3QgeWVhckZpZWxkID0gcHJvcHMuY29uZmlnPy55ZWFyRmllbGRcclxuICBjb25zdCByZWNvcnRlRmllbGQgPSBwcm9wcy5jb25maWc/LnJlY29ydGVGaWVsZFxyXG5cclxuICBjb25zdCB7XHJcbiAgICBzZXJpZXMsXHJcbiAgICBsb2FkaW5nLFxyXG4gICAgZXJyb3IsXHJcbiAgICBoYW5kbGVEYXRhU291cmNlUmVhZHksXHJcbiAgICBhcHBseVNjaGVtYSxcclxuICAgIHNldERzU3RhdHVzLFxyXG4gICAgd2FpdGluZ0ZvckxheWVyXHJcbiAgfSA9IHVzZVByb2Rlc1Nlcmllcyh7IHJlY29ydGVGaWVsZCwgeWVhckZpZWxkIH0pXHJcblxyXG4gIGNvbnN0IGF2YWlsYWJsZVllYXJzID0gUmVhY3QudXNlTWVtbyhcclxuICAgICgpID0+IHNlcmllcy5tYXAoKHIpID0+IHIueWVhciksXHJcbiAgICBbc2VyaWVzXVxyXG4gIClcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgcGVyaW9kb0luaWNpYWwsXHJcbiAgICBwZXJpb2RvRmluYWwsXHJcbiAgICB5ZWFyc0ZvckluaWNpYWwsXHJcbiAgICB5ZWFyc0ZvckZpbmFsLFxyXG4gICAgaGludEluaWNpYWwsXHJcbiAgICBoaW50RmluYWwsXHJcbiAgICB2YXJpYXRpb24sXHJcbiAgICBoYXNQZXJpb2RTZWxlY3Rpb24sXHJcbiAgICBjbGVhclBlcmlvZFNlbGVjdGlvbixcclxuICAgIGhhbmRsZVBlcmlvZG9JbmljaWFsQ2hhbmdlLFxyXG4gICAgaGFuZGxlUGVyaW9kb0ZpbmFsQ2hhbmdlLFxyXG4gICAgcmVqZWN0UGVyaW9kb0luaWNpYWwsXHJcbiAgICByZWplY3RQZXJpb2RvRmluYWxcclxuICB9ID0gdXNlUGVyaW9kU2VsZWN0aW9uKHNlcmllcywgYXZhaWxhYmxlWWVhcnMsIHJlY29ydGVGaWVsZClcclxuXHJcbiAgY29uc3QgaXNDb25maWd1cmVkID0gQm9vbGVhbih1c2VEcyAmJiByZWNvcnRlRmllbGQpXHJcbiAgY29uc3Qgc2hvd0Zvcm0gPVxyXG4gICAgaXNDb25maWd1cmVkICYmICFsb2FkaW5nICYmICF3YWl0aW5nRm9yTGF5ZXIgJiYgIWVycm9yICYmIHNlcmllcy5sZW5ndGggPiAwXHJcblxyXG4gIGlmICghaXNDb25maWd1cmVkKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb21wYXJhZG9yLXByb2RlcyBqaW11LXdpZGdldFwiIGNzcz17d2lkZ2V0U3R5bGVzfT5cclxuICAgICAgICA8cD57TVNHX05PVF9DT05GSUdVUkVEfTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29tcGFyYWRvci1wcm9kZXMgamltdS13aWRnZXRcIiBjc3M9e3dpZGdldFN0eWxlc30+XHJcbiAgICAgIDxEYXRhU291cmNlQ29tcG9uZW50XHJcbiAgICAgICAgdXNlRGF0YVNvdXJjZT17dXNlRHN9XHJcbiAgICAgICAgd2lkZ2V0SWQ9e3Byb3BzLmlkfVxyXG4gICAgICAgIG9uRGF0YVNvdXJjZUNyZWF0ZWQ9e2hhbmRsZURhdGFTb3VyY2VSZWFkeX1cclxuICAgICAgICBvbkRhdGFTb3VyY2VTY2hlbWFDaGFuZ2U9e2FwcGx5U2NoZW1hfVxyXG4gICAgICAgIG9uRGF0YVNvdXJjZUluZm9DaGFuZ2U9eyhpbmZvKSA9PiBzZXREc1N0YXR1cyhpbmZvPy5zdGF0dXMpfVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgeyhsb2FkaW5nIHx8IHdhaXRpbmdGb3JMYXllcikgJiYgPExvYWRpbmcgLz59XHJcblxyXG4gICAgICB7ZXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwiY29tcGFyYWRvci1lcnJvclwiPntlcnJvcn08L3A+fVxyXG5cclxuICAgICAgeyFsb2FkaW5nICYmICF3YWl0aW5nRm9yTGF5ZXIgJiYgIWVycm9yICYmIHNlcmllcy5sZW5ndGggPT09IDAgJiYgKFxyXG4gICAgICAgIDxwPntNU0dfTk9fREFUQX08L3A+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7c2hvd0Zvcm0gJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFyYWRvci1mb3JtXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhcmFkb3ItZmllbGQtcm93XCI+XHJcbiAgICAgICAgICAgIDxMYWJlbD57TEFCRUxfUEVSSU9ET19JTklDSUFMfTwvTGFiZWw+XHJcbiAgICAgICAgICAgIDxZZWFyUGVyaW9kUGlja2VyXHJcbiAgICAgICAgICAgICAgYXZhaWxhYmxlWWVhcnM9e3llYXJzRm9ySW5pY2lhbH1cclxuICAgICAgICAgICAgICBzZWxlY3RlZFllYXJzPXtwZXJpb2RvSW5pY2lhbH1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17UExBQ0VIT0xERVJfUEVSSU9ET19JTklDSUFMfVxyXG4gICAgICAgICAgICAgIGhpbnQ9e2hpbnRJbmljaWFsfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVQZXJpb2RvSW5pY2lhbENoYW5nZX1cclxuICAgICAgICAgICAgICBvblJlamVjdGVkU2VsZWN0aW9uPXtyZWplY3RQZXJpb2RvSW5pY2lhbH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFyYWRvci1maWVsZC1yb3dcIj5cclxuICAgICAgICAgICAgPExhYmVsPntMQUJFTF9QRVJJT0RPX0ZJTkFMfTwvTGFiZWw+XHJcbiAgICAgICAgICAgIDxZZWFyUGVyaW9kUGlja2VyXHJcbiAgICAgICAgICAgICAgYXZhaWxhYmxlWWVhcnM9e3llYXJzRm9yRmluYWx9XHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWRZZWFycz17cGVyaW9kb0ZpbmFsfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtQTEFDRUhPTERFUl9QRVJJT0RPX0ZJTkFMfVxyXG4gICAgICAgICAgICAgIGhpbnQ9e2hpbnRGaW5hbH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUGVyaW9kb0ZpbmFsQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIG9uUmVqZWN0ZWRTZWxlY3Rpb249e3JlamVjdFBlcmlvZG9GaW5hbH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYXJhZG9yLWhpbnRcIj57SElOVF9QRVJJT0RfUlVMRVN9PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhcmFkb3ItYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICB0eXBlPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb21wYXJhZG9yLWJ0bi1saW1wYXJcIlxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXshaGFzUGVyaW9kU2VsZWN0aW9ufVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2NsZWFyUGVyaW9kU2VsZWN0aW9ufVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgTGltcGFyXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAge3ZhcmlhdGlvbiAhPSBudWxsICYmIHZhcmlhdGlvbi5vayA9PT0gZmFsc2UgJiYgKFxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb21wYXJhZG9yLWVycm9yIGNvbXBhcmFkb3ItZXJyb3ItLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAge3ZhcmlhdGlvbi5tZXNzYWdlfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIHt2YXJpYXRpb24gIT0gbnVsbCAmJiB2YXJpYXRpb24ub2sgPT09IHRydWUgJiYgKFxyXG4gICAgICAgICAgICA8VmFyaWF0aW9uUmVzdWx0UGFuZWwgZGF0YT17dmFyaWF0aW9uLmRhdGF9IC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaWRnZXRcclxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==