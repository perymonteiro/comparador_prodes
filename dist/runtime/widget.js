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
            let rows = yield (0,_utils_prodes_table__WEBPACK_IMPORTED_MODULE_1__.fetchProdesAttributeRows)(main, fetchOpts);
            let built = (0,_utils_prodes_table__WEBPACK_IMPORTED_MODULE_1__.buildYearSeriesFromAttributeRows)(rows, effectiveYearField, recorteField, fieldList);
            if (rows.length > 0 && built.length === 0) {
                rows = yield (0,_utils_prodes_table__WEBPACK_IMPORTED_MODULE_1__.fetchProdesAttributeRows)(main, Object.assign(Object.assign({}, fetchOpts), { forceQuery: true }));
                built = (0,_utils_prodes_table__WEBPACK_IMPORTED_MODULE_1__.buildYearSeriesFromAttributeRows)(rows, effectiveYearField, recorteField, fieldList);
            }
            setSeries(built);
            if (rows.length > 0 && built.length === 0) {
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
/* harmony export */   ensureDataSourceSchema: () => (/* binding */ ensureDataSourceSchema),
/* harmony export */   getDataSourceSchema: () => (/* binding */ getDataSourceSchema),
/* harmony export */   getMainDataSource: () => (/* binding */ getMainDataSource),
/* harmony export */   getQueryableDataSource: () => (/* binding */ getQueryableDataSource),
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
const queryOptions = { scope: jimu_core__WEBPACK_IMPORTED_MODULE_0__.QueryScope.InAllData };
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
function runQueryableMethods(ds, outFields, disableClientQuery) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const params = buildQueryParams(outFields, disableClientQuery);
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
    return __awaiter(this, arguments, void 0, function* (ds, outFields = ['*']) {
        let records = yield runQueryableMethods(ds, outFields, false);
        if (recordsAreReadable(records))
            return records;
        records = yield runQueryableMethods(ds, outFields, true);
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
    var _a, _b;
    if (!rows.length)
        return [];
    const asRecords = rows.map((attributes) => ({ attributes }));
    const standard = buildYearSeries(asRecords, yearFieldJimu, recorteFieldJimu, fields);
    if (standard.length > 0)
        return standard;
    const yearKey = (_a = detectYearKeyFromRows(rows, yearFieldJimu)) !== null && _a !== void 0 ? _a : yearFieldJimu;
    const recorteKey = (_b = detectRecorteKeyFromRows(rows, recorteFieldJimu)) !== null && _b !== void 0 ? _b : recorteFieldJimu;
    if (!yearKey || !recorteKey)
        return [];
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
function fetchProdesAttributeRows(dataSource, options) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d;
        const ds = dataSource;
        const candidates = [];
        candidates.push(yield fetchRawAttributeRowsFromLayer(ds));
        if (!(options === null || options === void 0 ? void 0 : options.forceQuery)) {
            const cached = (_d = (_b = (_a = ds.getAllLoadedRecords) === null || _a === void 0 ? void 0 : _a.call(ds)) !== null && _b !== void 0 ? _b : (_c = ds.getRecords) === null || _c === void 0 ? void 0 : _c.call(ds)) !== null && _d !== void 0 ? _d : [];
            if (cached.length) {
                candidates.push(cached
                    .map((r) => getPlainAttributes(r))
                    .filter((a) => Object.keys(a).length > 0));
            }
        }
        const records = yield fetchLayerRecords(dataSource, options);
        if (records.length) {
            candidates.push(records
                .map((r) => getPlainAttributes(r))
                .filter((a) => Object.keys(a).length > 0));
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
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceComponent, { useDataSource: useDs, widgetId: props.id, onDataSourceCreated: handleDataSourceReady, onDataSourceSchemaChange: (schema) => {
                applySchema(schema);
            }, onDataSourceInfoChange: (info) => setDsStatus(info === null || info === void 0 ? void 0 : info.status) }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sTUFBTSxTQUFTLEdBQUcsS0FBSztBQUV2QixNQUFNLHFCQUFxQixHQUFHLGdDQUFnQztBQUM5RCxNQUFNLG1CQUFtQixHQUFHLDRCQUE0QjtBQUV4RCxNQUFNLGtCQUFrQixHQUM3QixzRUFBc0U7QUFFakUsTUFBTSxXQUFXLEdBQUcsNkNBQTZDO0FBRWpFLE1BQU0sZUFBZSxHQUFHLCtDQUErQztBQUV2RSxNQUFNLGtCQUFrQixHQUM3Qix1RkFBdUY7SUFDdkYseUdBQXlHO0lBQ3pHLHNEQUFzRDtBQUVqRCxNQUFNLGdCQUFnQixHQUFHLDhDQUE4QztBQUV2RSxNQUFNLGlCQUFpQixHQUM1QiwrRkFBK0Y7QUFFMUYsTUFBTSwyQkFBMkIsR0FBRywwQ0FBMEM7QUFDOUUsTUFBTSx5QkFBeUIsR0FBRyx3Q0FBd0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QmpGLGVBQWU7QUFDdUI7QUFLTDtBQUNnQztBQU0xRCxNQUFNLG9CQUFvQixHQUFHLENBQUMsRUFBRSxJQUFJLEVBQXdCLEVBQUUsRUFBRTtJQUNyRSxNQUFNLElBQUksR0FBRywrREFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBRXZDLE9BQU8sQ0FDTCx3REFBSyxTQUFTLEVBQUMsbUJBQW1CO1FBQ2hDLHdEQUFLLFNBQVMsRUFBQyx5QkFBeUI7O1lBRXJDLDJFQUFzQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7O1lBQUksR0FBRztZQUNoRCwyRUFBc0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUNwQztRQUNOLHdEQUFLLFNBQVMsRUFBRSxvREFBb0QsSUFBSSxFQUFFLElBQ3ZFLDJFQUFzQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FDN0I7UUFDTix3REFBSyxTQUFTLEVBQUMsMEJBQTBCO1lBQ3RDLHlEQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQzs7WUFBdUIsR0FBRztZQUN2RCx5REFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7cUNBQ3hCLENBQ0YsQ0FDUDtBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ2dDO0FBTUE7QUFDaUI7QUFFM0MsU0FBUyxrQkFBa0IsQ0FDaEMsTUFBc0IsRUFDdEIsY0FBd0IsRUFDeEIsWUFBcUI7SUFFckIsTUFBTSxDQUFDLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQyxHQUFHLDRDQUFLLENBQUMsUUFBUSxDQUFXLEVBQUUsQ0FBQztJQUN4RSxNQUFNLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQyxHQUFHLDRDQUFLLENBQUMsUUFBUSxDQUFXLEVBQUUsQ0FBQztJQUNwRSxNQUFNLENBQUMsV0FBVyxFQUFFLGNBQWMsQ0FBQyxHQUFHLDRDQUFLLENBQUMsUUFBUSxDQUFnQixJQUFJLENBQUM7SUFDekUsTUFBTSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsR0FBRyw0Q0FBSyxDQUFDLFFBQVEsQ0FBZ0IsSUFBSSxDQUFDO0lBRXJFLE1BQU0sZUFBZSxHQUFHLDRDQUFLLENBQUMsT0FBTyxDQUNuQyxHQUFHLEVBQUUsQ0FBQyw4RUFBeUIsQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDLEVBQzdELENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQyxDQUMvQjtJQUVELE1BQU0sYUFBYSxHQUFHLDRDQUFLLENBQUMsT0FBTyxDQUNqQyxHQUFHLEVBQUUsQ0FBQyw0RUFBdUIsQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDLEVBQzdELENBQUMsY0FBYyxFQUFFLGNBQWMsQ0FBQyxDQUNqQztJQUVELE1BQU0sU0FBUyxHQUFHLDRDQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRTtRQUNuQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNO1lBQUUsT0FBTyxJQUFJO1FBQy9ELE9BQU8sMkVBQXNCLENBQUMsTUFBTSxFQUFFLGNBQWMsRUFBRSxZQUFZLENBQUM7SUFDckUsQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUUxQyxNQUFNLGtCQUFrQixHQUN0QixjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUM7SUFFdEQsTUFBTSxvQkFBb0IsR0FBRyw0Q0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUU7UUFDbEQsaUJBQWlCLENBQUMsRUFBRSxDQUFDO1FBQ3JCLGVBQWUsQ0FBQyxFQUFFLENBQUM7UUFDbkIsY0FBYyxDQUFDLElBQUksQ0FBQztRQUNwQixZQUFZLENBQUMsSUFBSSxDQUFDO0lBQ3BCLENBQUMsRUFBRSxFQUFFLENBQUM7SUFFTixNQUFNLDBCQUEwQixHQUFHLDRDQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBZSxFQUFFLEVBQUU7UUFDdkUsaUJBQWlCLENBQUMsS0FBSyxDQUFDO1FBQ3hCLGNBQWMsQ0FBQyxJQUFJLENBQUM7SUFDdEIsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUVOLE1BQU0sd0JBQXdCLEdBQUcsNENBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFlLEVBQUUsRUFBRTtRQUNyRSxlQUFlLENBQUMsS0FBSyxDQUFDO1FBQ3RCLFlBQVksQ0FBQyxJQUFJLENBQUM7SUFDcEIsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUVOLE1BQU0sb0JBQW9CLEdBQUcsNENBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFO1FBQ2xELGNBQWMsQ0FBQyx3REFBZ0IsQ0FBQztJQUNsQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBRU4sTUFBTSxrQkFBa0IsR0FBRyw0Q0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUU7UUFDaEQsWUFBWSxDQUFDLHdEQUFnQixDQUFDO0lBQ2hDLENBQUMsRUFBRSxFQUFFLENBQUM7SUFFTiw0Q0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDbkIsaUJBQWlCLENBQUMsRUFBRSxDQUFDO1FBQ3JCLGVBQWUsQ0FBQyxFQUFFLENBQUM7UUFDbkIsY0FBYyxDQUFDLElBQUksQ0FBQztRQUNwQixZQUFZLENBQUMsSUFBSSxDQUFDO0lBQ3BCLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRWxCLDRDQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNuQixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNO1lBQUUsT0FBTTtRQUMxRCxNQUFNLE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyw0RUFBdUIsQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDaEYsTUFBTSxRQUFRLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRCxJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzVDLGVBQWUsQ0FBQyxRQUFRLENBQUM7UUFDM0IsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxZQUFZLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFFbEQsT0FBTztRQUNMLGNBQWM7UUFDZCxZQUFZO1FBQ1osZUFBZTtRQUNmLGFBQWE7UUFDYixXQUFXO1FBQ1gsU0FBUztRQUNULFNBQVM7UUFDVCxrQkFBa0I7UUFDbEIsb0JBQW9CO1FBQ3BCLDBCQUEwQjtRQUMxQix3QkFBd0I7UUFDeEIsb0JBQW9CO1FBQ3BCLGtCQUFrQjtLQUNuQjtBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZpQjtBQU9lO0FBS0Q7QUFJUjtBQU9qQixTQUFTLGVBQWUsQ0FBRSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQXlCO0lBQ2pGLE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsNENBQUssQ0FBQyxRQUFRLENBQW9CLElBQUksQ0FBQztJQUNqRSxNQUFNLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxHQUFHLDRDQUFLLENBQUMsUUFBUSxDQUErQixTQUFTLENBQUM7SUFDdkYsTUFBTSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsR0FBRyw0Q0FBSyxDQUFDLFFBQVEsQ0FDOUMsRUFBMEMsQ0FDM0M7SUFDRCxNQUFNLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxHQUFHLDRDQUFLLENBQUMsUUFBUSxDQUFpQixFQUFFLENBQUM7SUFDOUQsTUFBTSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsR0FBRyw0Q0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7SUFDbkQsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRyw0Q0FBSyxDQUFDLFFBQVEsQ0FBZ0IsSUFBSSxDQUFDO0lBRTdELE1BQU0sa0JBQWtCLEdBQUcsU0FBUyxhQUFULFNBQVMsY0FBVCxTQUFTLEdBQUksb0VBQWUsQ0FBQyxTQUFTLENBQUM7SUFFbEUsTUFBTSxXQUFXLEdBQUcsNENBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUEwQixFQUFFLEVBQUU7UUFDbkUsWUFBWSxDQUFDLHNFQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUMsRUFBRSxFQUFFLENBQUM7SUFFTixNQUFNLHFCQUFxQixHQUFHLDRDQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBYyxFQUFFLEVBQUU7UUFDakUsUUFBUSxDQUFDLEVBQUUsQ0FBQztRQUNaLEtBQUssMEVBQXNCLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDOUMsSUFBSSxNQUFNO2dCQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFDakMsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFakIsTUFBTSxVQUFVLEdBQUcsNENBQUssQ0FBQyxXQUFXLENBQUMsR0FBUyxFQUFFO1FBQzlDLE1BQU0sSUFBSSxHQUFHLDBFQUFzQixDQUFDLEtBQUssQ0FBQztRQUMxQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsa0JBQWtCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNsRCxTQUFTLENBQUMsRUFBRSxDQUFDO1lBQ2IsT0FBTTtRQUNSLENBQUM7UUFFRCxJQUFJLENBQUMscUVBQWlCLENBQUMsUUFBUSxDQUFDO1lBQUUsT0FBTTtRQUV4QyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQ2hCLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDZCxNQUFNLFNBQVMsR0FBRztZQUNoQixhQUFhLEVBQUUsa0JBQWtCO1lBQ2pDLGdCQUFnQixFQUFFLFlBQVk7WUFDOUIsTUFBTSxFQUFFLFNBQVM7U0FDbEI7UUFFRCxJQUFJLENBQUM7WUFDSCxJQUFJLElBQUksR0FBRyxNQUFNLDZFQUF3QixDQUFDLElBQUksRUFBRSxTQUFTLENBQUM7WUFDMUQsSUFBSSxLQUFLLEdBQUcscUZBQWdDLENBQzFDLElBQUksRUFDSixrQkFBa0IsRUFDbEIsWUFBWSxFQUNaLFNBQVMsQ0FDVjtZQUVELElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQztnQkFDMUMsSUFBSSxHQUFHLE1BQU0sNkVBQXdCLENBQUMsSUFBSSxrQ0FBTyxTQUFTLEtBQUUsVUFBVSxFQUFFLElBQUksSUFBRztnQkFDL0UsS0FBSyxHQUFHLHFGQUFnQyxDQUN0QyxJQUFJLEVBQ0osa0JBQWtCLEVBQ2xCLFlBQVksRUFDWixTQUFTLENBQ1Y7WUFDSCxDQUFDO1lBRUQsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUVoQixJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQzFDLFFBQVEsQ0FBQywwREFBa0IsQ0FBQztZQUM5QixDQUFDO1FBQ0gsQ0FBQztRQUFDLFdBQU0sQ0FBQztZQUNQLFFBQVEsQ0FBQyx1REFBZSxDQUFDO1lBQ3pCLFNBQVMsQ0FBQyxFQUFFLENBQUM7UUFDZixDQUFDO2dCQUFTLENBQUM7WUFDVCxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQ25CLENBQUM7SUFDSCxDQUFDLEdBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUVsRSw0Q0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDbkIsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLGtCQUFrQixJQUFJLENBQUMsS0FBSztZQUFFLE9BQU07UUFDMUQsSUFBSSxDQUFDLHFFQUFpQixDQUFDLFFBQVEsQ0FBQztZQUFFLE9BQU07UUFDeEMsVUFBVSxFQUFFO0lBQ2QsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBRTlFLE1BQU0sZUFBZSxHQUFHLENBQUMsS0FBSyxJQUFJLFFBQVEsS0FBSyx1REFBZ0IsQ0FBQyxPQUFPO0lBRXZFLE9BQU87UUFDTCxNQUFNO1FBQ04sT0FBTztRQUNQLEtBQUs7UUFDTCxxQkFBcUI7UUFDckIsV0FBVztRQUNYLFdBQVc7UUFDWCxlQUFlO0tBQ2hCO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckg4QjtBQUV4QixNQUFNLFlBQVksR0FBRyw4Q0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBMkU5QjtBQUVNLE1BQU0sWUFBWSxHQUFHLDhDQUFHOzs7Ozs7Ozs7Ozs7OztDQWM5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RkQsZUFBZTtBQUN1QjtBQU10QjtBQUNnRTtBQUN6QztBQVdoQyxNQUFNLGdCQUFnQixHQUFHLDRDQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBNEIsRUFBRSxFQUFFO0lBQzFFLE1BQU0sRUFDSixjQUFjLEVBQ2QsYUFBYSxFQUNiLFdBQVcsRUFDWCxJQUFJLEVBQ0osUUFBUSxFQUNSLG1CQUFtQixFQUNwQixHQUFHLEtBQUs7SUFFVCxNQUFNLFdBQVcsR0FBRyw0Q0FBSyxDQUFDLE9BQU8sQ0FDL0IsR0FBRyxFQUFFLENBQUMsSUFBSSxHQUFHLENBQUMsYUFBYSxDQUFDLEVBQzVCLENBQUMsYUFBYSxDQUFDLENBQ2hCO0lBRUQsTUFBTSxPQUFPLEdBQ1gsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxzRUFBaUIsQ0FBQyxhQUFhLENBQUM7UUFDbEMsQ0FBQyxDQUFDLFdBQVc7SUFFakIsTUFBTSxZQUFZLEdBQUcsNENBQUssQ0FBQyxXQUFXLENBQ3BDLENBQUMsSUFBWSxFQUFFLEVBQUU7UUFDZixNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHLDBFQUFxQixDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUM7UUFDckUsSUFBSSxRQUFRLEVBQUUsQ0FBQztZQUNiLG1CQUFtQixhQUFuQixtQkFBbUIsdUJBQW5CLG1CQUFtQixFQUFJO1lBQ3ZCLE9BQU07UUFDUixDQUFDO1FBQ0QsUUFBUSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDLEVBQ0QsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixDQUFDLENBQy9DO0lBRUQsT0FBTyxDQUNMLHdEQUFLLEdBQUcsRUFBRSxpREFBWTtRQUNwQiwrQ0FBQyw2Q0FBUSxJQUNQLEtBQUssUUFDTCxpQkFBaUIsRUFBQyxZQUFZLEVBQzlCLFVBQVUsUUFDVixTQUFTLEVBQUMsT0FBTztZQUVqQiwrQ0FBQyxtREFBYyxJQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLHVCQUF1QjtnQkFDekQseURBQU0sU0FBUyxFQUFDLGVBQWUsSUFBRSxPQUFPLENBQVEsQ0FDakM7WUFDakIsK0NBQUMsaURBQVksSUFBQyxTQUFTLEVBQUMsd0JBQXdCLElBQzdDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQzVCLCtDQUFDLGlEQUFZLElBQ1gsR0FBRyxFQUFFLElBQUksRUFDVCxNQUFNLEVBQUUsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFDN0IsTUFBTSxFQUFFLEtBQUssRUFDYixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUVoQyxJQUFJLENBQ1EsQ0FDaEIsQ0FBQyxDQUNXLENBQ047UUFDVixJQUFJLElBQUksd0RBQUssU0FBUyxFQUFDLHdCQUF3QixJQUFFLElBQUksQ0FBTyxDQUN6RCxDQUNQO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsZ0JBQWdCLENBQUMsV0FBVyxHQUFHLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0UvQjtBQU9YLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxNQUF5QixFQUFXLEVBQUUsQ0FDdEUsTUFBTSxLQUFLLHVEQUFnQixDQUFDLE1BQU07SUFDbEMsTUFBTSxLQUFLLHVEQUFnQixDQUFDLFFBQVE7SUFDcEMsTUFBTSxLQUFLLHVEQUFnQixDQUFDLFFBQVE7QUFFL0IsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLEVBQXFCLEVBQXFCLEVBQUU7O0lBQzVFLElBQUksQ0FBQyxFQUFFO1FBQUUsT0FBTyxJQUFJO0lBQ3BCLE1BQU0sSUFBSSxHQUFHLFlBQUMsRUFBeUIsRUFBQyxpQkFBaUIsa0RBQUk7SUFDN0QsT0FBTyxJQUFJLGFBQUosSUFBSSxjQUFKLElBQUksR0FBSSxFQUFFO0FBQ25CLENBQUM7QUFFRCwwRkFBMEY7QUFDbkYsTUFBTSxzQkFBc0IsR0FBRyxDQUFDLEVBQXFCLEVBQXFCLEVBQUU7SUFDakYsSUFBSSxDQUFDLEVBQUU7UUFBRSxPQUFPLElBQUk7SUFDcEIsTUFBTSxDQUFDLEdBQUcsRUFJVDtJQUNELElBQ0UsT0FBTyxDQUFDLENBQUMsS0FBSyxLQUFLLFVBQVU7UUFDN0IsT0FBTyxDQUFDLENBQUMsSUFBSSxLQUFLLFVBQVU7UUFDNUIsT0FBTyxDQUFDLENBQUMsT0FBTyxLQUFLLFVBQVUsRUFDL0IsQ0FBQztRQUNELE9BQU8sRUFBRTtJQUNYLENBQUM7SUFDRCxPQUFPLGlCQUFpQixDQUFDLEVBQUUsQ0FBQztBQUM5QixDQUFDO0FBRU0sU0FBZSxzQkFBc0IsQ0FDMUMsRUFBYzs7UUFFZCxNQUFNLFFBQVEsR0FBRyxtQkFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDeEMsSUFBSSxTQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsTUFBTSxLQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUNoRSxPQUFPLFFBQVE7UUFDakIsQ0FBQztRQUNELE1BQU0sV0FBVyxHQUFJLEVBRW5CLENBQUMsV0FBVztRQUNkLElBQUksT0FBTyxXQUFXLEtBQUssVUFBVSxFQUFFLENBQUM7WUFDdEMsSUFBSSxDQUFDO2dCQUNILE9BQU8sTUFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNuQyxDQUFDO1lBQUMsV0FBTSxDQUFDO2dCQUNQLE9BQU8sUUFBUTtZQUNqQixDQUFDO1FBQ0gsQ0FBQztRQUNELE9BQU8sUUFBUTtJQUNqQixDQUFDO0NBQUE7QUFFTSxNQUFNLG1CQUFtQixHQUFHLENBQ2pDLEVBQWMsRUFDa0IsRUFBRSxlQUNsQyxtQkFBQyxFQUF5QixFQUFDLFNBQVMsa0RBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9ERjtBQUVqQyxNQUFNLFVBQVUsR0FBRyxDQUFDLEtBQWEsRUFBVSxFQUFFLENBQ2xELEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUU7SUFDL0IscUJBQXFCLEVBQUUsQ0FBQztJQUN4QixxQkFBcUIsRUFBRSxDQUFDO0NBQ3pCLENBQUMsSUFBSSxpREFBUyxFQUFFO0FBSVosTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLEdBQVcsRUFBaUIsRUFBRTtJQUM3RCxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQUUsT0FBTyxVQUFVO0lBQzlCLElBQUksR0FBRyxHQUFHLENBQUM7UUFBRSxPQUFPLFVBQVU7SUFDOUIsT0FBTyxTQUFTO0FBQ2xCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BpQjtBQVlYLE1BQU0sa0JBQWtCLEdBQUcsS0FBSztBQUV2QyxNQUFNLGtCQUFrQixHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQztBQUVuRSxTQUFTLFdBQVcsQ0FBRSxLQUFjO0lBQ3pDLElBQUksS0FBSyxJQUFJLElBQUk7UUFBRSxPQUFPLElBQUk7SUFDOUIsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7UUFBRSxPQUFPLElBQUk7SUFDakUsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFBRSxPQUFPLElBQUk7SUFDakUsT0FBTyxLQUFLO0FBQ2QsQ0FBQztBQUVNLFNBQVMsaUJBQWlCLENBQUUsS0FBYztJQUMvQyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUM7UUFBRSxPQUFPLElBQUk7SUFDbkMsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFBRSxPQUFPLEtBQUs7SUFDckUsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUUsQ0FBQztRQUM5QixNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFO1FBQ3RCLElBQUksQ0FBQyxDQUFDO1lBQUUsT0FBTyxJQUFJO1FBQ25CLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ3BCLE1BQU0sVUFBVSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQ3pELE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDNUIsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7UUFDdEMsQ0FBQztRQUNELE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDbkIsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7SUFDdEMsQ0FBQztJQUNELE9BQU8sSUFBSTtBQUNiLENBQUM7QUFFRCxzRUFBc0U7QUFDdEUsU0FBUyxtQkFBbUIsQ0FBRSxDQUFTO0lBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUFFLE9BQU8sSUFBSTtJQUVwQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUM7UUFDbEUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsMkVBQTJFO0lBQzNFLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUM7UUFDN0IsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQzlCLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSTtZQUFFLE9BQU8sQ0FBQztJQUN0QyxDQUFDO0lBRUQsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDL0IsSUFBSSxTQUFTLElBQUksSUFBSSxJQUFJLFNBQVMsSUFBSSxJQUFJO1FBQUUsT0FBTyxTQUFTO0lBQzVELE9BQU8sSUFBSTtBQUNiLENBQUM7QUFFTSxTQUFT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RUFBQyx1QkFBdUIsRUFDakMsUUFBUSxFQUFFLENBQUMsa0JBQWtCLEVBQzdCLE9BQU8sRUFBRSxvQkFBb0IsYUFHdEIsQ0FDTDtZQUVMLFNBQVMsSUFBSSxJQUFJLElBQUksU0FBUyxDQUFDLEVBQUUsS0FBSyxLQUFLLElBQUksQ0FDOUMsc0RBQUcsU0FBUyxFQUFDLDBDQUEwQyxJQUNwRCxTQUFTLENBQUMsT0FBTyxDQUNoQixDQUNMO1lBRUEsU0FBUyxJQUFJLElBQUksSUFBSSxTQUFTLENBQUMsRUFBRSxLQUFLLElBQUksSUFBSSxDQUM3QywrQ0FBQyw4RUFBb0IsSUFBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksR0FBSSxDQUMvQyxDQUNHLENBQ1AsQ0FDRyxDQUNQO0FBQ0gsQ0FBQztBQUVELGlFQUFlLE1BQU07QUFFYixTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9zcmMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9zcmMvcnVudGltZS9jb21wb25lbnRzL3ZhcmlhdGlvbi1yZXN1bHQudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9zcmMvcnVudGltZS9ob29rcy91c2UtcGVyaW9kLXNlbGVjdGlvbi50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY29tcGFyYWRvcl9wcm9kZXMvc3JjL3J1bnRpbWUvaG9va3MvdXNlLXByb2Rlcy1zZXJpZXMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2NvbXBhcmFkb3JfcHJvZGVzL3NyYy9ydW50aW1lL3N0eWxlcy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY29tcGFyYWRvcl9wcm9kZXMvc3JjL3J1bnRpbWUveWVhci1wZXJpb2QtcGlja2VyLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY29tcGFyYWRvcl9wcm9kZXMvc3JjL3V0aWxzL2RhdGEtc291cmNlLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9zcmMvdXRpbHMvZm9ybWF0LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9zcmMvdXRpbHMvcHJvZGVzLXRhYmxlLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBUkVBX1VOSVQgPSAna23CsidcblxuZXhwb3J0IGNvbnN0IExBQkVMX1BFUklPRE9fSU5JQ0lBTCA9ICdBbm8gaW5pY2lhbCBvdSBwZXLDrW9kbyBpbmljaWFsJ1xuZXhwb3J0IGNvbnN0IExBQkVMX1BFUklPRE9fRklOQUwgPSAnQW5vIGZpbmFsIG91IHBlcsOtb2RvIGZpbmFsJ1xuXG5leHBvcnQgY29uc3QgTVNHX05PVF9DT05GSUdVUkVEID1cbiAgJ0VzdGEgZmVycmFtZW50YSBhaW5kYSBuw6NvIGZvaSBjb25maWd1cmFkYSBwZWxvIGF1dG9yIGRhIGV4cGVyacOqbmNpYS4nXG5cbmV4cG9ydCBjb25zdCBNU0dfTk9fREFUQSA9ICdOw6NvIGjDoSBkYWRvcyBkaXNwb27DrXZlaXMgcGFyYSBlc3RlIHJlY29ydGUuJ1xuXG5leHBvcnQgY29uc3QgTVNHX0xPQURfRkFJTEVEID0gJ07Do28gZm9pIHBvc3PDrXZlbCBjYXJyZWdhciBvcyBkYWRvcyBkYSBjYW1hZGEuJ1xuXG5leHBvcnQgY29uc3QgTVNHX0VYVFJBQ1RfRkFJTEVEID1cbiAgJ1JlZ2lzdHJvcyBlbmNvbnRyYWRvcywgbWFzIG7Do28gZm9pIHBvc3PDrXZlbCBleHRyYWlyIGFubyBlIHZhbG9yZXMgcGFyYSBlc3RlIHJlY29ydGUuICcgK1xuICAnQ29uZmlybWUgc2UgYSB0YWJlbGEgdGVtIHVtYSBsaW5oYSBwb3IgYW5vIChjb2x1bmEgXCJhbm9cIikgb3UgdW1hIGxpbmhhIHBvciByZWNvcnRlIChjb2x1bmFzIGNvbSBhbm9zKSwgJyArXG4gICdlIHNlIGEgY29sdW5hIGRvIHJlY29ydGUgcG9zc3VpIHZhbG9yZXMgcHJlZW5jaGlkb3MuJ1xuXG5leHBvcnQgY29uc3QgSElOVF9DT05TRUNVVElWTyA9ICdPcyBhbm9zIHNlbGVjaW9uYWRvcyBkZXZlbSBzZXIgY29uc2VjdXRpdm9zLidcblxuZXhwb3J0IGNvbnN0IEhJTlRfUEVSSU9EX1JVTEVTID1cbiAgJ09zIGRvaXMgcGVyw61vZG9zIGRldmVtIHRlciBhIG1lc21hIHF1YW50aWRhZGUgZGUgYW5vcyBjb25zZWN1dGl2b3MsIHNlbSByZXBldGnDp8OjbyBlbnRyZSBlbGVzLidcblxuZXhwb3J0IGNvbnN0IFBMQUNFSE9MREVSX1BFUklPRE9fSU5JQ0lBTCA9ICdTZWxlY2lvbmUgbyhzKSBhbm8ocykgZG8gcGVyw61vZG8gaW5pY2lhbCdcbmV4cG9ydCBjb25zdCBQTEFDRUhPTERFUl9QRVJJT0RPX0ZJTkFMID0gJ1NlbGVjaW9uZSBvKHMpIGFubyhzKSBkbyBwZXLDrW9kbyBmaW5hbCdcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3QsIGpzeCB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7XG4gIGZvcm1hdFBlcmNlbnRWYXJpYXRpb24sXG4gIGZvcm1hdFBlcmlvZFJhbmdlTGFiZWwsXG4gIHR5cGUgVmFyaWF0aW9uUmVzdWx0XG59IGZyb20gJy4uLy4uL3V0aWxzL3Byb2Rlcy10YWJsZSdcbmltcG9ydCB7IGZvcm1hdEFyZWEsIGdldFZhcmlhdGlvblRvbmUgfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQnXG5cbmludGVyZmFjZSBWYXJpYXRpb25SZXN1bHRQcm9wcyB7XG4gIGRhdGE6IFZhcmlhdGlvblJlc3VsdFxufVxuXG5leHBvcnQgY29uc3QgVmFyaWF0aW9uUmVzdWx0UGFuZWwgPSAoeyBkYXRhIH06IFZhcmlhdGlvblJlc3VsdFByb3BzKSA9PiB7XG4gIGNvbnN0IHRvbmUgPSBnZXRWYXJpYXRpb25Ub25lKGRhdGEucGN0KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYXJhZG9yLXJlc3VsdFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYXJhZG9yLXJlc3VsdC10aXRsZVwiPlxuICAgICAgICBWYXJpYcOnw6NvIHBlcmNlbnR1YWwgKFxuICAgICAgICB7Zm9ybWF0UGVyaW9kUmFuZ2VMYWJlbChkYXRhLnllYXJzSW5pY2lhbCl9IOKGknsnICd9XG4gICAgICAgIHtmb3JtYXRQZXJpb2RSYW5nZUxhYmVsKGRhdGEueWVhcnNGaW5hbCl9KVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbXBhcmFkb3ItcmVzdWx0LXZhbHVlIGNvbXBhcmFkb3ItcmVzdWx0LXZhbHVlLS0ke3RvbmV9YH0+XG4gICAgICAgIHtmb3JtYXRQZXJjZW50VmFyaWF0aW9uKGRhdGEucGN0KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYXJhZG9yLXJlc3VsdC1kZXRhaWxcIj5cbiAgICAgICAge2Zvcm1hdEFyZWEoZGF0YS52YWx1ZUluaWNpYWwpfSBubyBwZXLDrW9kbyBpbmljaWFsIOKGknsnICd9XG4gICAgICAgIHtmb3JtYXRBcmVhKGRhdGEudmFsdWVGaW5hbCl9IG5vIHBlcsOtb2RvIGZpbmFsXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiaW1wb3J0IHsgUmVhY3QgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQge1xuICBjb21wdXRlUGVyaW9kVmFyaWF0aW9uLFxuICBnZXRZZWFyc0FsbG93ZWRGb3JGaW5hbCxcbiAgZ2V0WWVhcnNBbGxvd2VkRm9ySW5pY2lhbCxcbiAgdHlwZSBZZWFyVmFsdWVSb3dcbn0gZnJvbSAnLi4vLi4vdXRpbHMvcHJvZGVzLXRhYmxlJ1xuaW1wb3J0IHsgSElOVF9DT05TRUNVVElWTyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVBlcmlvZFNlbGVjdGlvbiAoXG4gIHNlcmllczogWWVhclZhbHVlUm93W10sXG4gIGF2YWlsYWJsZVllYXJzOiBudW1iZXJbXSxcbiAgcmVjb3J0ZUZpZWxkPzogc3RyaW5nXG4pIHtcbiAgY29uc3QgW3BlcmlvZG9JbmljaWFsLCBzZXRQZXJpb2RvSW5pY2lhbF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXJbXT4oW10pXG4gIGNvbnN0IFtwZXJpb2RvRmluYWwsIHNldFBlcmlvZG9GaW5hbF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXJbXT4oW10pXG4gIGNvbnN0IFtoaW50SW5pY2lhbCwgc2V0SGludEluaWNpYWxdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2hpbnRGaW5hbCwgc2V0SGludEZpbmFsXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXG5cbiAgY29uc3QgeWVhcnNGb3JJbmljaWFsID0gUmVhY3QudXNlTWVtbyhcbiAgICAoKSA9PiBnZXRZZWFyc0FsbG93ZWRGb3JJbmljaWFsKGF2YWlsYWJsZVllYXJzLCBwZXJpb2RvRmluYWwpLFxuICAgIFthdmFpbGFibGVZZWFycywgcGVyaW9kb0ZpbmFsXVxuICApXG5cbiAgY29uc3QgeWVhcnNGb3JGaW5hbCA9IFJlYWN0LnVzZU1lbW8oXG4gICAgKCkgPT4gZ2V0WWVhcnNBbGxvd2VkRm9yRmluYWwoYXZhaWxhYmxlWWVhcnMsIHBlcmlvZG9JbmljaWFsKSxcbiAgICBbYXZhaWxhYmxlWWVhcnMsIHBlcmlvZG9JbmljaWFsXVxuICApXG5cbiAgY29uc3QgdmFyaWF0aW9uID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKCFwZXJpb2RvSW5pY2lhbC5sZW5ndGggfHwgIXBlcmlvZG9GaW5hbC5sZW5ndGgpIHJldHVybiBudWxsXG4gICAgcmV0dXJuIGNvbXB1dGVQZXJpb2RWYXJpYXRpb24oc2VyaWVzLCBwZXJpb2RvSW5pY2lhbCwgcGVyaW9kb0ZpbmFsKVxuICB9LCBbcGVyaW9kb0luaWNpYWwsIHBlcmlvZG9GaW5hbCwgc2VyaWVzXSlcblxuICBjb25zdCBoYXNQZXJpb2RTZWxlY3Rpb24gPVxuICAgIHBlcmlvZG9JbmljaWFsLmxlbmd0aCA+IDAgfHwgcGVyaW9kb0ZpbmFsLmxlbmd0aCA+IDBcblxuICBjb25zdCBjbGVhclBlcmlvZFNlbGVjdGlvbiA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRQZXJpb2RvSW5pY2lhbChbXSlcbiAgICBzZXRQZXJpb2RvRmluYWwoW10pXG4gICAgc2V0SGludEluaWNpYWwobnVsbClcbiAgICBzZXRIaW50RmluYWwobnVsbClcbiAgfSwgW10pXG5cbiAgY29uc3QgaGFuZGxlUGVyaW9kb0luaWNpYWxDaGFuZ2UgPSBSZWFjdC51c2VDYWxsYmFjaygoeWVhcnM6IG51bWJlcltdKSA9PiB7XG4gICAgc2V0UGVyaW9kb0luaWNpYWwoeWVhcnMpXG4gICAgc2V0SGludEluaWNpYWwobnVsbClcbiAgfSwgW10pXG5cbiAgY29uc3QgaGFuZGxlUGVyaW9kb0ZpbmFsQ2hhbmdlID0gUmVhY3QudXNlQ2FsbGJhY2soKHllYXJzOiBudW1iZXJbXSkgPT4ge1xuICAgIHNldFBlcmlvZG9GaW5hbCh5ZWFycylcbiAgICBzZXRIaW50RmluYWwobnVsbClcbiAgfSwgW10pXG5cbiAgY29uc3QgcmVqZWN0UGVyaW9kb0luaWNpYWwgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0SGludEluaWNpYWwoSElOVF9DT05TRUNVVElWTylcbiAgfSwgW10pXG5cbiAgY29uc3QgcmVqZWN0UGVyaW9kb0ZpbmFsID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldEhpbnRGaW5hbChISU5UX0NPTlNFQ1VUSVZPKVxuICB9LCBbXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFBlcmlvZG9JbmljaWFsKFtdKVxuICAgIHNldFBlcmlvZG9GaW5hbChbXSlcbiAgICBzZXRIaW50SW5pY2lhbChudWxsKVxuICAgIHNldEhpbnRGaW5hbChudWxsKVxuICB9LCBbcmVjb3J0ZUZpZWxkXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghcGVyaW9kb0luaWNpYWwubGVuZ3RoIHx8ICFwZXJpb2RvRmluYWwubGVuZ3RoKSByZXR1cm5cbiAgICBjb25zdCBhbGxvd2VkID0gbmV3IFNldChnZXRZZWFyc0FsbG93ZWRGb3JGaW5hbChhdmFpbGFibGVZZWFycywgcGVyaW9kb0luaWNpYWwpKVxuICAgIGNvbnN0IGZpbHRlcmVkID0gcGVyaW9kb0ZpbmFsLmZpbHRlcigoeSkgPT4gYWxsb3dlZC5oYXMoeSkpXG4gICAgaWYgKGZpbHRlcmVkLmxlbmd0aCAhPT0gcGVyaW9kb0ZpbmFsLmxlbmd0aCkge1xuICAgICAgc2V0UGVyaW9kb0ZpbmFsKGZpbHRlcmVkKVxuICAgIH1cbiAgfSwgW3BlcmlvZG9JbmljaWFsLCBwZXJpb2RvRmluYWwsIGF2YWlsYWJsZVllYXJzXSlcblxuICByZXR1cm4ge1xuICAgIHBlcmlvZG9JbmljaWFsLFxuICAgIHBlcmlvZG9GaW5hbCxcbiAgICB5ZWFyc0ZvckluaWNpYWwsXG4gICAgeWVhcnNGb3JGaW5hbCxcbiAgICBoaW50SW5pY2lhbCxcbiAgICBoaW50RmluYWwsXG4gICAgdmFyaWF0aW9uLFxuICAgIGhhc1BlcmlvZFNlbGVjdGlvbixcbiAgICBjbGVhclBlcmlvZFNlbGVjdGlvbixcbiAgICBoYW5kbGVQZXJpb2RvSW5pY2lhbENoYW5nZSxcbiAgICBoYW5kbGVQZXJpb2RvRmluYWxDaGFuZ2UsXG4gICAgcmVqZWN0UGVyaW9kb0luaWNpYWwsXG4gICAgcmVqZWN0UGVyaW9kb0ZpbmFsXG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIFJlYWN0LFxuICB0eXBlIERhdGFTb3VyY2UsXG4gIHR5cGUgSU1EYXRhU291cmNlU2NoZW1hLFxuICBEYXRhU291cmNlU3RhdHVzXG59IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7XG4gIGJ1aWxkWWVhclNlcmllc0Zyb21BdHRyaWJ1dGVSb3dzLFxuICBkZXRlY3RZZWFyRmllbGQsXG4gIGZldGNoUHJvZGVzQXR0cmlidXRlUm93cyxcbiAgc2NoZW1hVG9GaWVsZExpc3QsXG4gIHR5cGUgWWVhclZhbHVlUm93XG59IGZyb20gJy4uLy4uL3V0aWxzL3Byb2Rlcy10YWJsZSdcbmltcG9ydCB7XG4gIGVuc3VyZURhdGFTb3VyY2VTY2hlbWEsXG4gIGdldFF1ZXJ5YWJsZURhdGFTb3VyY2UsXG4gIGlzUXVlcnlhYmxlU3RhdHVzXG59IGZyb20gJy4uLy4uL3V0aWxzL2RhdGEtc291cmNlJ1xuaW1wb3J0IHtcbiAgTVNHX0VYVFJBQ1RfRkFJTEVELFxuICBNU0dfTE9BRF9GQUlMRURcbn0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZVByb2Rlc1Nlcmllc1BhcmFtcyB7XG4gIHJlY29ydGVGaWVsZD86IHN0cmluZ1xuICB5ZWFyRmllbGQ/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVByb2Rlc1NlcmllcyAoeyByZWNvcnRlRmllbGQsIHllYXJGaWVsZCB9OiBVc2VQcm9kZXNTZXJpZXNQYXJhbXMpIHtcbiAgY29uc3QgW2RzUmVmLCBzZXREc1JlZl0gPSBSZWFjdC51c2VTdGF0ZTxEYXRhU291cmNlIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2RzU3RhdHVzLCBzZXREc1N0YXR1c10gPSBSZWFjdC51c2VTdGF0ZTxEYXRhU291cmNlU3RhdHVzIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpXG4gIGNvbnN0IFtmaWVsZExpc3QsIHNldEZpZWxkTGlzdF0gPSBSZWFjdC51c2VTdGF0ZShcbiAgICBbXSBhcyBSZXR1cm5UeXBlPHR5cGVvZiBzY2hlbWFUb0ZpZWxkTGlzdD5cbiAgKVxuICBjb25zdCBbc2VyaWVzLCBzZXRTZXJpZXNdID0gUmVhY3QudXNlU3RhdGU8WWVhclZhbHVlUm93W10+KFtdKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuXG4gIGNvbnN0IGVmZmVjdGl2ZVllYXJGaWVsZCA9IHllYXJGaWVsZCA/PyBkZXRlY3RZZWFyRmllbGQoZmllbGRMaXN0KVxuXG4gIGNvbnN0IGFwcGx5U2NoZW1hID0gUmVhY3QudXNlQ2FsbGJhY2soKHNjaGVtYTogSU1EYXRhU291cmNlU2NoZW1hKSA9PiB7XG4gICAgc2V0RmllbGRMaXN0KHNjaGVtYVRvRmllbGRMaXN0KHNjaGVtYSkpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGhhbmRsZURhdGFTb3VyY2VSZWFkeSA9IFJlYWN0LnVzZUNhbGxiYWNrKChkczogRGF0YVNvdXJjZSkgPT4ge1xuICAgIHNldERzUmVmKGRzKVxuICAgIHZvaWQgZW5zdXJlRGF0YVNvdXJjZVNjaGVtYShkcykudGhlbigoc2NoZW1hKSA9PiB7XG4gICAgICBpZiAoc2NoZW1hKSBhcHBseVNjaGVtYShzY2hlbWEpXG4gICAgfSlcbiAgfSwgW2FwcGx5U2NoZW1hXSlcblxuICBjb25zdCBsb2FkU2VyaWVzID0gUmVhY3QudXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBnZXRRdWVyeWFibGVEYXRhU291cmNlKGRzUmVmKVxuICAgIGlmICghbWFpbiB8fCAhZWZmZWN0aXZlWWVhckZpZWxkIHx8ICFyZWNvcnRlRmllbGQpIHtcbiAgICAgIHNldFNlcmllcyhbXSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghaXNRdWVyeWFibGVTdGF0dXMoZHNTdGF0dXMpKSByZXR1cm5cblxuICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICBzZXRFcnJvcihudWxsKVxuICAgIGNvbnN0IGZldGNoT3B0cyA9IHtcbiAgICAgIHllYXJGaWVsZEppbXU6IGVmZmVjdGl2ZVllYXJGaWVsZCxcbiAgICAgIHJlY29ydGVGaWVsZEppbXU6IHJlY29ydGVGaWVsZCxcbiAgICAgIGZpZWxkczogZmllbGRMaXN0XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCByb3dzID0gYXdhaXQgZmV0Y2hQcm9kZXNBdHRyaWJ1dGVSb3dzKG1haW4sIGZldGNoT3B0cylcbiAgICAgIGxldCBidWlsdCA9IGJ1aWxkWWVhclNlcmllc0Zyb21BdHRyaWJ1dGVSb3dzKFxuICAgICAgICByb3dzLFxuICAgICAgICBlZmZlY3RpdmVZZWFyRmllbGQsXG4gICAgICAgIHJlY29ydGVGaWVsZCxcbiAgICAgICAgZmllbGRMaXN0XG4gICAgICApXG5cbiAgICAgIGlmIChyb3dzLmxlbmd0aCA+IDAgJiYgYnVpbHQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJvd3MgPSBhd2FpdCBmZXRjaFByb2Rlc0F0dHJpYnV0ZVJvd3MobWFpbiwgeyAuLi5mZXRjaE9wdHMsIGZvcmNlUXVlcnk6IHRydWUgfSlcbiAgICAgICAgYnVpbHQgPSBidWlsZFllYXJTZXJpZXNGcm9tQXR0cmlidXRlUm93cyhcbiAgICAgICAgICByb3dzLFxuICAgICAgICAgIGVmZmVjdGl2ZVllYXJGaWVsZCxcbiAgICAgICAgICByZWNvcnRlRmllbGQsXG4gICAgICAgICAgZmllbGRMaXN0XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgc2V0U2VyaWVzKGJ1aWx0KVxuXG4gICAgICBpZiAocm93cy5sZW5ndGggPiAwICYmIGJ1aWx0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBzZXRFcnJvcihNU0dfRVhUUkFDVF9GQUlMRUQpXG4gICAgICB9XG4gICAgfSBjYXRjaCB7XG4gICAgICBzZXRFcnJvcihNU0dfTE9BRF9GQUlMRUQpXG4gICAgICBzZXRTZXJpZXMoW10pXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgfVxuICB9LCBbZHNSZWYsIGRzU3RhdHVzLCBlZmZlY3RpdmVZZWFyRmllbGQsIGZpZWxkTGlzdCwgcmVjb3J0ZUZpZWxkXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghcmVjb3J0ZUZpZWxkIHx8ICFlZmZlY3RpdmVZZWFyRmllbGQgfHwgIWRzUmVmKSByZXR1cm5cbiAgICBpZiAoIWlzUXVlcnlhYmxlU3RhdHVzKGRzU3RhdHVzKSkgcmV0dXJuXG4gICAgbG9hZFNlcmllcygpXG4gIH0sIFtyZWNvcnRlRmllbGQsIGVmZmVjdGl2ZVllYXJGaWVsZCwgZHNSZWYsIGRzU3RhdHVzLCBmaWVsZExpc3QsIGxvYWRTZXJpZXNdKVxuXG4gIGNvbnN0IHdhaXRpbmdGb3JMYXllciA9ICFkc1JlZiB8fCBkc1N0YXR1cyA9PT0gRGF0YVNvdXJjZVN0YXR1cy5Mb2FkaW5nXG5cbiAgcmV0dXJuIHtcbiAgICBzZXJpZXMsXG4gICAgbG9hZGluZyxcbiAgICBlcnJvcixcbiAgICBoYW5kbGVEYXRhU291cmNlUmVhZHksXG4gICAgYXBwbHlTY2hlbWEsXG4gICAgc2V0RHNTdGF0dXMsXG4gICAgd2FpdGluZ0ZvckxheWVyXG4gIH1cbn1cbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ2ppbXUtY29yZSdcblxuZXhwb3J0IGNvbnN0IHdpZGdldFN0eWxlcyA9IGNzc2BcbiAgJi53aWRnZXQtY29tcGFyYWRvci1wcm9kZXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgcGFkZGluZzogOHB4O1xuICB9XG4gIC5jb21wYXJhZG9yLWZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEycHg7XG4gICAgbWluLXdpZHRoOiAwO1xuICB9XG4gIC5jb21wYXJhZG9yLWZpZWxkLXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNHB4O1xuICAgIG1pbi13aWR0aDogMDtcbiAgfVxuICAuY29tcGFyYWRvci1wZXJpb2QtaGludCxcbiAgLmNvbXBhcmFkb3ItZXJyb3Ige1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogI2IwMDAyMDtcbiAgICBtYXJnaW4tdG9wOiAycHg7XG4gIH1cbiAgLmNvbXBhcmFkb3ItZXJyb3ItLWJsb2NrIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLmNvbXBhcmFkb3ItcmVzdWx0IHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcmVmLXBhbGV0dGUtbmV1dHJhbC0xMDAsICNmM2YzZjMpO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIH1cbiAgLmNvbXBhcmFkb3ItcmVzdWx0LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICB9XG4gIC5jb21wYXJhZG9yLXJlc3VsdC12YWx1ZSB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgfVxuICAuY29tcGFyYWRvci1yZXN1bHQtdmFsdWUtLXBvc2l0aXZlIHtcbiAgICBjb2xvcjogI2IwMDAyMDtcbiAgfVxuICAuY29tcGFyYWRvci1yZXN1bHQtdmFsdWUtLW5lZ2F0aXZlIHtcbiAgICBjb2xvcjogIzFiN2EzZDtcbiAgfVxuICAuY29tcGFyYWRvci1yZXN1bHQtdmFsdWUtLW5ldXRyYWwge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG4gIC5jb21wYXJhZG9yLXJlc3VsdC1kZXRhaWwge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzZiNmI2YjtcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG4gIH1cbiAgLmNvbXBhcmFkb3ItaGludCB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGNvbG9yOiAjNmI2YjZiO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM1O1xuICB9XG4gIC5jb21wYXJhZG9yLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuICAuY29tcGFyYWRvci1idG4tbGltcGFyIHtcbiAgICBib3JkZXItcmFkaXVzOiA5OTk5cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgcGlja2VyU3R5bGVzID0gY3NzYFxuICB3aWR0aDogMTAwJTtcbiAgLmppbXUtZHJvcGRvd24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5kcm9wZG93bi10b2dnbGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG4gIC5jb21wYXJhZG9yLXBlcmlvZC1tZW51IHtcbiAgICBtYXgtaGVpZ2h0OiAyMjBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICB9XG5gXG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IFJlYWN0LCBqc3ggfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQge1xuICBEcm9wZG93bixcbiAgRHJvcGRvd25CdXR0b24sXG4gIERyb3Bkb3duTWVudSxcbiAgRHJvcGRvd25JdGVtXG59IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgeyBmb3JtYXRQZXJpb2RMYWJlbCwgdG9nZ2xlQ29uc2VjdXRpdmVZZWFyIH0gZnJvbSAnLi4vdXRpbHMvcHJvZGVzLXRhYmxlJ1xuaW1wb3J0IHsgcGlja2VyU3R5bGVzIH0gZnJvbSAnLi9zdHlsZXMnXG5cbmV4cG9ydCBpbnRlcmZhY2UgWWVhclBlcmlvZFBpY2tlclByb3BzIHtcbiAgYXZhaWxhYmxlWWVhcnM6IG51bWJlcltdXG4gIHNlbGVjdGVkWWVhcnM6IG51bWJlcltdXG4gIHBsYWNlaG9sZGVyOiBzdHJpbmdcbiAgaGludD86IHN0cmluZyB8IG51bGxcbiAgb25DaGFuZ2U6ICh5ZWFyczogbnVtYmVyW10pID0+IHZvaWRcbiAgb25SZWplY3RlZFNlbGVjdGlvbj86ICgpID0+IHZvaWRcbn1cblxuZXhwb3J0IGNvbnN0IFllYXJQZXJpb2RQaWNrZXIgPSBSZWFjdC5tZW1vKChwcm9wczogWWVhclBlcmlvZFBpY2tlclByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBhdmFpbGFibGVZZWFycyxcbiAgICBzZWxlY3RlZFllYXJzLFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIGhpbnQsXG4gICAgb25DaGFuZ2UsXG4gICAgb25SZWplY3RlZFNlbGVjdGlvblxuICB9ID0gcHJvcHNcblxuICBjb25zdCBzZWxlY3RlZFNldCA9IFJlYWN0LnVzZU1lbW8oXG4gICAgKCkgPT4gbmV3IFNldChzZWxlY3RlZFllYXJzKSxcbiAgICBbc2VsZWN0ZWRZZWFyc11cbiAgKVxuXG4gIGNvbnN0IHN1bW1hcnkgPVxuICAgIHNlbGVjdGVkWWVhcnMubGVuZ3RoID4gMFxuICAgICAgPyBmb3JtYXRQZXJpb2RMYWJlbChzZWxlY3RlZFllYXJzKVxuICAgICAgOiBwbGFjZWhvbGRlclxuXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZSA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgICh5ZWFyOiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IHsgbmV4dCwgcmVqZWN0ZWQgfSA9IHRvZ2dsZUNvbnNlY3V0aXZlWWVhcihzZWxlY3RlZFllYXJzLCB5ZWFyKVxuICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgIG9uUmVqZWN0ZWRTZWxlY3Rpb24/LigpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgb25DaGFuZ2UobmV4dClcbiAgICB9LFxuICAgIFtzZWxlY3RlZFllYXJzLCBvbkNoYW5nZSwgb25SZWplY3RlZFNlbGVjdGlvbl1cbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjc3M9e3BpY2tlclN0eWxlc30+XG4gICAgICA8RHJvcGRvd25cbiAgICAgICAgZmx1aWRcbiAgICAgICAgbWVudUl0ZW1DaGVja01vZGU9XCJtdWx0aUNoZWNrXCJcbiAgICAgICAgYWN0aXZlSWNvblxuICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMFwiXG4gICAgICA+XG4gICAgICAgIDxEcm9wZG93bkJ1dHRvbiBzaXplPVwic21cIiBjbGFzc05hbWU9XCJ3LTEwMCBkcm9wZG93bi10b2dnbGVcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXRydW5jYXRlXCI+e3N1bW1hcnl9PC9zcGFuPlxuICAgICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxuICAgICAgICA8RHJvcGRvd25NZW51IGNsYXNzTmFtZT1cImNvbXBhcmFkb3ItcGVyaW9kLW1lbnVcIj5cbiAgICAgICAgICB7YXZhaWxhYmxlWWVhcnMubWFwKCh5ZWFyKSA9PiAoXG4gICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgIGtleT17eWVhcn1cbiAgICAgICAgICAgICAgYWN0aXZlPXtzZWxlY3RlZFNldC5oYXMoeWVhcil9XG4gICAgICAgICAgICAgIHRvZ2dsZT17ZmFsc2V9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRvZ2dsZSh5ZWFyKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3llYXJ9XG4gICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Ecm9wZG93bk1lbnU+XG4gICAgICA8L0Ryb3Bkb3duPlxuICAgICAge2hpbnQgJiYgPGRpdiBjbGFzc05hbWU9XCJjb21wYXJhZG9yLXBlcmlvZC1oaW50XCI+e2hpbnR9PC9kaXY+fVxuICAgIDwvZGl2PlxuICApXG59KVxuXG5ZZWFyUGVyaW9kUGlja2VyLmRpc3BsYXlOYW1lID0gJ1llYXJQZXJpb2RQaWNrZXInXG4iLCJpbXBvcnQge1xuICB0eXBlIERhdGFTb3VyY2UsXG4gIHR5cGUgSU1EYXRhU291cmNlU2NoZW1hLFxuICBEYXRhU291cmNlU3RhdHVzXG59IGZyb20gJ2ppbXUtY29yZSdcblxudHlwZSBEYXRhU291cmNlV2l0aE1haW4gPSBEYXRhU291cmNlICYge1xuICBnZXRNYWluRGF0YVNvdXJjZT86ICgpID0+IERhdGFTb3VyY2VcbiAgZ2V0U2NoZW1hPzogKCkgPT4gSU1EYXRhU291cmNlU2NoZW1hXG59XG5cbmV4cG9ydCBjb25zdCBpc1F1ZXJ5YWJsZVN0YXR1cyA9IChzdGF0dXM/OiBEYXRhU291cmNlU3RhdHVzKTogYm9vbGVhbiA9PlxuICBzdGF0dXMgPT09IERhdGFTb3VyY2VTdGF0dXMuTG9hZGVkIHx8XG4gIHN0YXR1cyA9PT0gRGF0YVNvdXJjZVN0YXR1cy5VbmxvYWRlZCB8fFxuICBzdGF0dXMgPT09IERhdGFTb3VyY2VTdGF0dXMuTm90UmVhZHlcblxuZXhwb3J0IGNvbnN0IGdldE1haW5EYXRhU291cmNlID0gKGRzOiBEYXRhU291cmNlIHwgbnVsbCk6IERhdGFTb3VyY2UgfCBudWxsID0+IHtcbiAgaWYgKCFkcykgcmV0dXJuIG51bGxcbiAgY29uc3QgbWFpbiA9IChkcyBhcyBEYXRhU291cmNlV2l0aE1haW4pLmdldE1haW5EYXRhU291cmNlPy4oKVxuICByZXR1cm4gbWFpbiA/PyBkc1xufVxuXG4vKiogVXNhIGEgaW5zdMOibmNpYSBkYSBjYW1hZGEgc2VsZWNpb25hZGEgKGV4LjogUGxhbmlsaGExKSBxdWFuZG8gZWxhIGrDoSDDqSBjb25zdWx0w6F2ZWwuICovXG5leHBvcnQgY29uc3QgZ2V0UXVlcnlhYmxlRGF0YVNvdXJjZSA9IChkczogRGF0YVNvdXJjZSB8IG51bGwpOiBEYXRhU291cmNlIHwgbnVsbCA9PiB7XG4gIGlmICghZHMpIHJldHVybiBudWxsXG4gIGNvbnN0IHEgPSBkcyBhcyBEYXRhU291cmNlV2l0aE1haW4gJiB7XG4gICAgcXVlcnk/OiAocDogb2JqZWN0KSA9PiBQcm9taXNlPHVua25vd24+XG4gICAgbG9hZD86IChwOiBvYmplY3QpID0+IFByb21pc2U8dW5rbm93bj5cbiAgICBsb2FkQWxsPzogKHA6IG9iamVjdCkgPT4gUHJvbWlzZTx1bmtub3duPlxuICB9XG4gIGlmIChcbiAgICB0eXBlb2YgcS5xdWVyeSA9PT0gJ2Z1bmN0aW9uJyB8fFxuICAgIHR5cGVvZiBxLmxvYWQgPT09ICdmdW5jdGlvbicgfHxcbiAgICB0eXBlb2YgcS5sb2FkQWxsID09PSAnZnVuY3Rpb24nXG4gICkge1xuICAgIHJldHVybiBkc1xuICB9XG4gIHJldHVybiBnZXRNYWluRGF0YVNvdXJjZShkcylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVuc3VyZURhdGFTb3VyY2VTY2hlbWEgKFxuICBkczogRGF0YVNvdXJjZVxuKTogUHJvbWlzZTxJTURhdGFTb3VyY2VTY2hlbWEgfCB1bmRlZmluZWQ+IHtcbiAgY29uc3QgZXhpc3RpbmcgPSBnZXREYXRhU291cmNlU2NoZW1hKGRzKVxuICBpZiAoZXhpc3Rpbmc/LmZpZWxkcyAmJiBPYmplY3Qua2V5cyhleGlzdGluZy5maWVsZHMpLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gZXhpc3RpbmdcbiAgfVxuICBjb25zdCBmZXRjaFNjaGVtYSA9IChkcyBhcyBEYXRhU291cmNlV2l0aE1haW4gJiB7XG4gICAgZmV0Y2hTY2hlbWE/OiAoKSA9PiBQcm9taXNlPElNRGF0YVNvdXJjZVNjaGVtYT5cbiAgfSkuZmV0Y2hTY2hlbWFcbiAgaWYgKHR5cGVvZiBmZXRjaFNjaGVtYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gYXdhaXQgZmV0Y2hTY2hlbWEuY2FsbChkcylcbiAgICB9IGNhdGNoIHtcbiAgICAgIHJldHVybiBleGlzdGluZ1xuICAgIH1cbiAgfVxuICByZXR1cm4gZXhpc3Rpbmdcbn1cblxuZXhwb3J0IGNvbnN0IGdldERhdGFTb3VyY2VTY2hlbWEgPSAoXG4gIGRzOiBEYXRhU291cmNlXG4pOiBJTURhdGFTb3VyY2VTY2hlbWEgfCB1bmRlZmluZWQgPT5cbiAgKGRzIGFzIERhdGFTb3VyY2VXaXRoTWFpbikuZ2V0U2NoZW1hPy4oKVxuIiwiaW1wb3J0IHsgQVJFQV9VTklUIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuXG5leHBvcnQgY29uc3QgZm9ybWF0QXJlYSA9ICh2YWx1ZTogbnVtYmVyKTogc3RyaW5nID0+XG4gIGAke3ZhbHVlLnRvTG9jYWxlU3RyaW5nKCdwdC1CUicsIHtcbiAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyXG4gIH0pfSAke0FSRUFfVU5JVH1gXG5cbmV4cG9ydCB0eXBlIFZhcmlhdGlvblRvbmUgPSAncG9zaXRpdmUnIHwgJ25lZ2F0aXZlJyB8ICduZXV0cmFsJ1xuXG5leHBvcnQgY29uc3QgZ2V0VmFyaWF0aW9uVG9uZSA9IChwY3Q6IG51bWJlcik6IFZhcmlhdGlvblRvbmUgPT4ge1xuICBpZiAocGN0ID4gMCkgcmV0dXJuICdwb3NpdGl2ZSdcbiAgaWYgKHBjdCA8IDApIHJldHVybiAnbmVnYXRpdmUnXG4gIHJldHVybiAnbmV1dHJhbCdcbn1cbiIsImltcG9ydCB7XG4gIHR5cGUgSU1GaWVsZFNjaGVtYSxcbiAgdHlwZSBJTURhdGFTb3VyY2VTY2hlbWEsXG4gIEppbXVGaWVsZFR5cGUsXG4gIEVzcmlGaWVsZFR5cGUsXG4gIFF1ZXJ5U2NvcGUsXG4gIHR5cGUgRGF0YVJlY29yZFxufSBmcm9tICdqaW11LWNvcmUnXG5cbmV4cG9ydCBpbnRlcmZhY2UgWWVhclZhbHVlUm93IHtcbiAgeWVhcjogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaWVsZEF0dHJpYnV0ZUtleXMge1xuICB5ZWFyS2V5OiBzdHJpbmdcbiAgcmVjb3J0ZUtleTogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1lFQVJfRklFTEQgPSAnYW5vJ1xuXG5jb25zdCBZRUFSX05BTUVfUEFUVEVSTlMgPSBbJ2FubycsICd5ZWFyJywgJ3lyJywgJ2V4ZXJjaWNpbycsICdleGVyY8OtY2lvJ11cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHlDZWxsICh2YWx1ZTogdW5rbm93bik6IGJvb2xlYW4ge1xuICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIHRydWVcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUudHJpbSgpID09PSAnJykgcmV0dXJuIHRydWVcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgTnVtYmVyLmlzTmFOKHZhbHVlKSkgcmV0dXJuIHRydWVcbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU51bWVyaWNWYWx1ZSAodmFsdWU6IHVua25vd24pOiBudW1iZXIgfCBudWxsIHtcbiAgaWYgKGlzRW1wdHlDZWxsKHZhbHVlKSkgcmV0dXJuIG51bGxcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgTnVtYmVyLmlzRmluaXRlKHZhbHVlKSkgcmV0dXJuIHZhbHVlXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgcyA9IHZhbHVlLnRyaW0oKVxuICAgIGlmICghcykgcmV0dXJuIG51bGxcbiAgICBpZiAocy5pbmNsdWRlcygnLCcpKSB7XG4gICAgICBjb25zdCBub3JtYWxpemVkID0gcy5yZXBsYWNlKC9cXC4vZywgJycpLnJlcGxhY2UoJywnLCAnLicpXG4gICAgICBjb25zdCBuID0gTnVtYmVyKG5vcm1hbGl6ZWQpXG4gICAgICByZXR1cm4gTnVtYmVyLmlzRmluaXRlKG4pID8gbiA6IG51bGxcbiAgICB9XG4gICAgY29uc3QgbiA9IE51bWJlcihzKVxuICAgIHJldHVybiBOdW1iZXIuaXNGaW5pdGUobikgPyBuIDogbnVsbFxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbi8qKiBDb252ZXJ0ZSBuw7ptZXJvIGV4aWJpZG8gbm8gQXJjR0lTIGVtIHB0LUJSIChleC46IDIuMDAxIOKGkiAyMDAxKS4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZVllYXJOdW1iZXIgKG46IG51bWJlcik6IG51bWJlciB8IG51bGwge1xuICBpZiAoIU51bWJlci5pc0Zpbml0ZShuKSkgcmV0dXJuIG51bGxcblxuICBpZiAobiA+PSAxOTg1ICYmIG4gPD0gMjAzNSAmJiBNYXRoLmFicyhuIC0gTWF0aC5yb3VuZChuKSkgPCAwLjAwMSkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG4pXG4gIH1cblxuICAvLyBUYWJlbGEgUFJPREVTIG5vIFBvcnRhbDogY29sdW5hIEFubyBjb21vIDIuMDAxLCAyLjAxMSAobWlsaGFyIGNvbSBwb250bylcbiAgaWYgKG4gPj0gMS45ODUgJiYgbiA8PSAyLjAzNSkge1xuICAgIGNvbnN0IHkgPSBNYXRoLnJvdW5kKG4gKiAxMDAwKVxuICAgIGlmICh5ID49IDE5ODUgJiYgeSA8PSAyMDM1KSByZXR1cm4geVxuICB9XG5cbiAgY29uc3QgdHJ1bmNhdGVkID0gTWF0aC50cnVuYyhuKVxuICBpZiAodHJ1bmNhdGVkID49IDE5ODUgJiYgdHJ1bmNhdGVkIDw9IDIwMzUpIHJldHVybiB0cnVuY2F0ZWRcbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlWWVhciAodmFsdWU6IHVua25vd24pOiBudW1iZXIgfCBudWxsIHtcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSAmJiAhTnVtYmVyLmlzTmFOKHZhbHVlLmdldFRpbWUoKSkpIHtcbiAgICByZXR1cm4gdmFsdWUuZ2V0RnVsbFllYXIoKVxuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gbm9ybWFsaXplWWVhck51bWJlcih2YWx1ZSlcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IHMgPSB2YWx1ZS50cmltKClcbiAgICBpZiAoIXMpIHJldHVybiBudWxsXG5cbiAgICBjb25zdCBiclRob3VzYW5kcyA9IHMubWF0Y2goL14oXFxkezEsMn0pXFwuKFxcZHszfSkkLylcbiAgICBpZiAoYnJUaG91c2FuZHMpIHtcbiAgICAgIGNvbnN0IHkgPSBOdW1iZXIoYnJUaG91c2FuZHNbMV0gKyBiclRob3VzYW5kc1syXSlcbiAgICAgIGlmICh5ID49IDE5ODUgJiYgeSA8PSAyMDM1KSByZXR1cm4geVxuICAgIH1cblxuICAgIGNvbnN0IG4gPSBOdW1iZXIocy5yZXBsYWNlKCcsJywgJy4nKSlcbiAgICBpZiAoTnVtYmVyLmlzRmluaXRlKG4pKSByZXR1cm4gbm9ybWFsaXplWWVhck51bWJlcihuKVxuXG4gICAgY29uc3QgbSA9IHMubWF0Y2goL1xcYigxOXwyMClcXGR7Mn1cXGIvKVxuICAgIGlmIChtKSByZXR1cm4gTnVtYmVyKG1bMF0pXG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNjaGVtYVRvRmllbGRMaXN0IChzY2hlbWE/OiBJTURhdGFTb3VyY2VTY2hlbWEgfCBudWxsKTogSU1GaWVsZFNjaGVtYVtdIHtcbiAgaWYgKCFzY2hlbWE/LmZpZWxkcykgcmV0dXJuIFtdXG4gIHJldHVybiBPYmplY3Qua2V5cyhzY2hlbWEuZmllbGRzKS5tYXAoKGtleSkgPT4gc2NoZW1hLmZpZWxkc1trZXldKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1lcmljUmVjb3J0ZUZpZWxkIChmaWVsZDogSU1GaWVsZFNjaGVtYSk6IGJvb2xlYW4ge1xuICBpZiAoZmllbGQudHlwZSA9PT0gSmltdUZpZWxkVHlwZS5OdW1iZXIpIHJldHVybiB0cnVlXG4gIGNvbnN0IGVzcmkgPSBmaWVsZC5lc3JpVHlwZVxuICByZXR1cm4gKFxuICAgIGVzcmkgPT09IEVzcmlGaWVsZFR5cGUuRG91YmxlIHx8XG4gICAgZXNyaSA9PT0gRXNyaUZpZWxkVHlwZS5TaW5nbGUgfHxcbiAgICBlc3JpID09PSBFc3JpRmllbGRUeXBlLkludGVnZXIgfHxcbiAgICBlc3JpID09PSBFc3JpRmllbGRUeXBlLlNtYWxsSW50ZWdlclxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVLZXkgKGZpZWxkOiBJTUZpZWxkU2NoZW1hKTogc3RyaW5nIHtcbiAgcmV0dXJuIGZpZWxkLm5hbWUgfHwgZmllbGQuamltdU5hbWVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRldGVjdFllYXJGaWVsZCAoZmllbGRzOiBJTUZpZWxkU2NoZW1hW10pOiBzdHJpbmcgfCBudWxsIHtcbiAgY29uc3QgZXhhY3RBbm8gPSBmaWVsZHMuZmluZChcbiAgICAoZikgPT5cbiAgICAgIGYuamltdU5hbWU/LnRvTG93ZXJDYXNlKCkgPT09ICdhbm8nIHx8XG4gICAgICBmLm5hbWU/LnRvTG93ZXJDYXNlKCkgPT09ICdhbm8nIHx8XG4gICAgICBmLmFsaWFzPy50b0xvd2VyQ2FzZSgpID09PSAnYW5vJ1xuICApXG4gIGlmIChleGFjdEFubykgcmV0dXJuIGV4YWN0QW5vLmppbXVOYW1lXG5cbiAgY29uc3QgY2FuZGlkYXRlcyA9IGZpZWxkcy5maWx0ZXIoXG4gICAgKGYpID0+IGYudHlwZSA9PT0gSmltdUZpZWxkVHlwZS5OdW1iZXIgfHwgZi50eXBlID09PSBKaW11RmllbGRUeXBlLlN0cmluZ1xuICApXG4gIGZvciAoY29uc3QgcGF0IG9mIFlFQVJfTkFNRV9QQVRURVJOUykge1xuICAgIGNvbnN0IGZvdW5kID0gY2FuZGlkYXRlcy5maW5kKFxuICAgICAgKGYpID0+XG4gICAgICAgIGYuamltdU5hbWU/LnRvTG93ZXJDYXNlKCkgPT09IHBhdCB8fFxuICAgICAgICBmLm5hbWU/LnRvTG93ZXJDYXNlKCkgPT09IHBhdCB8fFxuICAgICAgICBmLmFsaWFzPy50b0xvd2VyQ2FzZSgpID09PSBwYXRcbiAgICApXG4gICAgaWYgKGZvdW5kKSByZXR1cm4gZm91bmQuamltdU5hbWVcbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UmVjb3J0ZUxhYmVsIChmaWVsZDogSU1GaWVsZFNjaGVtYSk6IHN0cmluZyB7XG4gIHJldHVybiBmb3JtYXRSZWNvcnRlTGFiZWxGcm9tTmFtZShmaWVsZC5qaW11TmFtZSwgZmllbGQuYWxpYXMpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRSZWNvcnRlTGFiZWxGcm9tTmFtZSAoamltdU5hbWU6IHN0cmluZywgYWxpYXM/OiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoYWxpYXM/LnRyaW0oKSkgcmV0dXJuIGFsaWFzLnRyaW0oKVxuICByZXR1cm4gamltdU5hbWVcbiAgICAuc3BsaXQoJ18nKVxuICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAubWFwKCh3KSA9PiB3LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdy5zbGljZSgxKS50b0xvd2VyQ2FzZSgpKVxuICAgIC5qb2luKCcgJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN5c3RlbUhpZGRlbkZpZWxkTmFtZXMgKGZpZWxkczogSU1GaWVsZFNjaGVtYVtdKTogc3RyaW5nW10ge1xuICByZXR1cm4gZmllbGRzXG4gICAgLmZpbHRlcigoZikgPT4ge1xuICAgICAgY29uc3QgZXNyaSA9IGYuZXNyaVR5cGVcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGVzcmkgPT09IEVzcmlGaWVsZFR5cGUuT0lEIHx8XG4gICAgICAgIGVzcmkgPT09IEVzcmlGaWVsZFR5cGUuR2VvbWV0cnkgfHxcbiAgICAgICAgZXNyaSA9PT0gRXNyaUZpZWxkVHlwZS5HbG9iYWxJRCB8fFxuICAgICAgICBlc3JpID09PSBFc3JpRmllbGRUeXBlLkdVSURcbiAgICAgIClcbiAgICB9KVxuICAgIC5tYXAoKGYpID0+IGYuamltdU5hbWUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWNvcnRlSGlkZGVuRmllbGROYW1lcyAoXG4gIGZpZWxkczogSU1GaWVsZFNjaGVtYVtdLFxuICB5ZWFyRmllbGQ/OiBzdHJpbmdcbik6IHN0cmluZ1tdIHtcbiAgY29uc3QgaGlkZGVuID0gZ2V0U3lzdGVtSGlkZGVuRmllbGROYW1lcyhmaWVsZHMpXG4gIGlmICh5ZWFyRmllbGQgJiYgIWhpZGRlbi5pbmNsdWRlcyh5ZWFyRmllbGQpKSB7XG4gICAgaGlkZGVuLnB1c2goeWVhckZpZWxkKVxuICB9XG4gIHJldHVybiBoaWRkZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlY29ydGVDYW5kaWRhdGVGaWVsZHMgKFxuICBmaWVsZHM6IElNRmllbGRTY2hlbWFbXSxcbiAgeWVhckZpZWxkPzogc3RyaW5nXG4pOiBJTUZpZWxkU2NoZW1hW10ge1xuICBjb25zdCBoaWRkZW4gPSBuZXcgU2V0KGdldFJlY29ydGVIaWRkZW5GaWVsZE5hbWVzKGZpZWxkcywgeWVhckZpZWxkKSlcbiAgcmV0dXJuIGZpZWxkc1xuICAgIC5maWx0ZXIoKGYpID0+IGlzTnVtZXJpY1JlY29ydGVGaWVsZChmKSAmJiAhaGlkZGVuLmhhcyhmLmppbXVOYW1lKSlcbiAgICAuc29ydCgoYSwgYikgPT5cbiAgICAgIGZvcm1hdFJlY29ydGVMYWJlbChhKS5sb2NhbGVDb21wYXJlKGZvcm1hdFJlY29ydGVMYWJlbChiKSwgJ3B0LUJSJylcbiAgICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kRmllbGRCeUppbXVOYW1lIChcbiAgZmllbGRzOiBJTUZpZWxkU2NoZW1hW10sXG4gIGppbXVOYW1lPzogc3RyaW5nXG4pOiBJTUZpZWxkU2NoZW1hIHwgbnVsbCB7XG4gIGlmICghamltdU5hbWUpIHJldHVybiBudWxsXG4gIGNvbnN0IGV4YWN0ID0gZmllbGRzLmZpbmQoKGYpID0+IGYuamltdU5hbWUgPT09IGppbXVOYW1lKVxuICBpZiAoZXhhY3QpIHJldHVybiBleGFjdFxuICBjb25zdCBsb3dlciA9IGppbXVOYW1lLnRvTG93ZXJDYXNlKClcbiAgcmV0dXJuIChcbiAgICBmaWVsZHMuZmluZChcbiAgICAgIChmKSA9PlxuICAgICAgICBmLmppbXVOYW1lPy50b0xvd2VyQ2FzZSgpID09PSBsb3dlciB8fFxuICAgICAgICBmLm5hbWU/LnRvTG93ZXJDYXNlKCkgPT09IGxvd2VyIHx8XG4gICAgICAgIGYuYWxpYXM/LnRvTG93ZXJDYXNlKCkgPT09IGxvd2VyXG4gICAgKSA/PyBudWxsXG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVBdHRyaWJ1dGVLZXlzIChcbiAgZmllbGRzOiBJTUZpZWxkU2NoZW1hW10sXG4gIHllYXJGaWVsZEppbXU/OiBzdHJpbmcsXG4gIHJlY29ydGVGaWVsZEppbXU/OiBzdHJpbmdcbik6IEZpZWxkQXR0cmlidXRlS2V5cyB8IG51bGwge1xuICBpZiAoIXllYXJGaWVsZEppbXUgfHwgIXJlY29ydGVGaWVsZEppbXUpIHJldHVybiBudWxsXG5cbiAgY29uc3QgeWVhckZpZWxkID0gZmluZEZpZWxkQnlKaW11TmFtZShmaWVsZHMsIHllYXJGaWVsZEppbXUpXG4gIGNvbnN0IHJlY29ydGVGaWVsZCA9IGZpbmRGaWVsZEJ5SmltdU5hbWUoZmllbGRzLCByZWNvcnRlRmllbGRKaW11KVxuXG4gIHJldHVybiB7XG4gICAgeWVhcktleTogeWVhckZpZWxkID8gZ2V0QXR0cmlidXRlS2V5KHllYXJGaWVsZCkgOiB5ZWFyRmllbGRKaW11LFxuICAgIHJlY29ydGVLZXk6IHJlY29ydGVGaWVsZCA/IGdldEF0dHJpYnV0ZUtleShyZWNvcnRlRmllbGQpIDogcmVjb3J0ZUZpZWxkSmltdVxuICB9XG59XG5cbnR5cGUgUmVjb3JkTGlrZSA9XG4gIHwgRGF0YVJlY29yZFxuICB8IHtcbiAgICAgIGF0dHJpYnV0ZXM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICAgICAgZmVhdHVyZT86IHsgYXR0cmlidXRlcz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+IH1cbiAgICAgIGdldERhdGE/OiAoKSA9PiB7XG4gICAgICAgIGF0dHJpYnV0ZXM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICAgICAgICBmZWF0dXJlPzogeyBhdHRyaWJ1dGVzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfVxuICAgICAgfVxuICAgICAgZ2V0RmllbGRWYWx1ZT86IChqaW11RmllbGROYW1lOiBzdHJpbmcpID0+IHVua25vd25cbiAgICAgIGdldERhdGVGaWVsZFZhbHVlPzogKGppbXVGaWVsZE5hbWU6IHN0cmluZykgPT4gdW5rbm93blxuICAgICAgZ2V0RGF0YUJlZm9yZU1hcHBpbmc/OiAoKSA9PiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICAgIH1cblxuZnVuY3Rpb24gdG9QbGFpbk9iamVjdCAodmFsdWU6IHVua25vd24pOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB7XG4gIGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JykgcmV0dXJuIHt9XG4gIGNvbnN0IHYgPSB2YWx1ZSBhcyB7XG4gICAgdG9KUz86ICgpID0+IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gICAgYXNNdXRhYmxlPzogKG9wdHM/OiB7IGRlZXA6IGJvb2xlYW4gfSkgPT4gUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgfVxuICBpZiAodHlwZW9mIHYudG9KUyA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHYudG9KUygpXG4gIGlmICh0eXBlb2Ygdi5hc011dGFibGUgPT09ICdmdW5jdGlvbicpIHJldHVybiB2LmFzTXV0YWJsZSh7IGRlZXA6IHRydWUgfSlcbiAgcmV0dXJuIHZhbHVlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+XG59XG5cbmNvbnN0IEdFVF9EQVRBX01FVEFfS0VZUyA9IG5ldyBTZXQoW1xuICAnYXR0cmlidXRlcycsXG4gICdmZWF0dXJlJyxcbiAgJ2dlb21ldHJ5JyxcbiAgJ2NlbnRyb2lkJyxcbiAgJ2FnZ3JlZ2F0ZUdlb21ldHJpZXMnLFxuICAnc3ltYm9sJ1xuXSlcblxuLyoqIEV4dHJhaSBvIGRpY2lvbsOhcmlvIGRlIGF0cmlidXRvcyBkZSB1bSByZWdpc3RybyAodsOhcmlvcyBmb3JtYXRvcyBkbyBKaW11L0FyY0dJUykuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGxhaW5BdHRyaWJ1dGVzIChyZWM6IFJlY29yZExpa2UpOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB7XG4gIGNvbnN0IG1lcmdlZDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fVxuXG4gIGNvbnN0IG1lcmdlID0gKGF0dHJzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pID0+IHtcbiAgICBpZiAoIWF0dHJzKSByZXR1cm5cbiAgICBPYmplY3QuYXNzaWduKG1lcmdlZCwgdG9QbGFpbk9iamVjdChhdHRycykpXG4gIH1cblxuICBpZiAoJ2dldERhdGEnIGluIHJlYyAmJiB0eXBlb2YgcmVjLmdldERhdGEgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCBkYXRhID0gcmVjLmdldERhdGEoKVxuICAgIGNvbnN0IHBsYWluID0gdG9QbGFpbk9iamVjdChkYXRhKVxuICAgIG1lcmdlKHBsYWluLmF0dHJpYnV0ZXMgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCB1bmRlZmluZWQpXG4gICAgbWVyZ2UocGxhaW4uZmVhdHVyZT8uYXR0cmlidXRlcyBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IHVuZGVmaW5lZClcbiAgICAvLyBKaW11IERhdGFSZWNvcmQ6IGdldERhdGEoKSBjb3N0dW1hIHNlciBtYXBhIHBsYW5vIHsgamltdUZpZWxkTmFtZTogdmFsb3IgfVxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHBsYWluKSkge1xuICAgICAgaWYgKEdFVF9EQVRBX01FVEFfS0VZUy5oYXMoa2V5KSkgY29udGludWVcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSBtZXJnZWRba2V5XSA9IHZhbHVlXG4gICAgfVxuICB9XG5cbiAgaWYgKCdmZWF0dXJlJyBpbiByZWMgJiYgcmVjLmZlYXR1cmU/LmF0dHJpYnV0ZXMpIHtcbiAgICBtZXJnZShyZWMuZmVhdHVyZS5hdHRyaWJ1dGVzKVxuICB9XG5cbiAgaWYgKCdhdHRyaWJ1dGVzJyBpbiByZWMgJiYgcmVjLmF0dHJpYnV0ZXMpIHtcbiAgICBtZXJnZShyZWMuYXR0cmlidXRlcylcbiAgfVxuXG4gIGlmICgnZ2V0RGF0YUJlZm9yZU1hcHBpbmcnIGluIHJlYyAmJiB0eXBlb2YgcmVjLmdldERhdGFCZWZvcmVNYXBwaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgbWVyZ2UocmVjLmdldERhdGFCZWZvcmVNYXBwaW5nKCkpXG4gIH1cblxuICByZXR1cm4gbWVyZ2VkXG59XG5cbmZ1bmN0aW9uIGF0dHJpYnV0ZUhhc1VzYWJsZVZhbHVlICh2YWx1ZTogdW5rbm93bik6IGJvb2xlYW4ge1xuICBpZiAoaXNFbXB0eUNlbGwodmFsdWUpKSByZXR1cm4gZmFsc2VcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHJldHVybiBmYWxzZVxuICByZXR1cm4gdHJ1ZVxufVxuXG4vKiogVmVyaWZpY2Egc2UgbyByZWdpc3RybyBleHDDtWUgYXRyaWJ1dG9zIG91IGdldEZpZWxkVmFsdWUgY29tIGRhZG9zIHJlYWlzIChuw6NvIHPDsyBtw6l0b2RvIHZhemlvKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWNvcmRIYXNSZWFkYWJsZURhdGEgKHJlYzogUmVjb3JkTGlrZSk6IGJvb2xlYW4ge1xuICBjb25zdCBhdHRycyA9IGdldFBsYWluQXR0cmlidXRlcyhyZWMpXG4gIGNvbnN0IHVzYWJsZUtleXMgPSBPYmplY3Qua2V5cyhhdHRycykuZmlsdGVyKChrZXkpID0+IHtcbiAgICBpZiAoL14ob2JqZWN0aWR8Z2xvYmFsaWR8c2hhcGV8Z2VvbWV0cnkpJC9pLnRlc3Qoa2V5KSkgcmV0dXJuIGZhbHNlXG4gICAgcmV0dXJuIGF0dHJpYnV0ZUhhc1VzYWJsZVZhbHVlKGF0dHJzW2tleV0pXG4gIH0pXG4gIGlmICh1c2FibGVLZXlzLmxlbmd0aCA+IDApIHJldHVybiB0cnVlXG5cbiAgaWYgKCdnZXRGaWVsZFZhbHVlJyBpbiByZWMgJiYgdHlwZW9mIHJlYy5nZXRGaWVsZFZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3QgcHJvYmVzID0gW1xuICAgICAgJ2FubycsXG4gICAgICAneWVhcicsXG4gICAgICAnQU5PJyxcbiAgICAgICdZZWFyJyxcbiAgICAgICdleGVyY2ljaW8nLFxuICAgICAgJ0V4ZXJjaWNpbydcbiAgICBdXG4gICAgZm9yIChjb25zdCBuYW1lIG9mIHByb2Jlcykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdiA9IHJlYy5nZXRGaWVsZFZhbHVlIShuYW1lKVxuICAgICAgICBpZiAoYXR0cmlidXRlSGFzVXNhYmxlVmFsdWUodikpIHJldHVybiB0cnVlXG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgLy8gdGVudGEgcHLDs3hpbW9cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuLyoqIEzDqiB2YWxvciBwZWxvIEFQSSBkbyBKaW11IChgZ2V0RmllbGRWYWx1ZWApIGUsIGVtIHNlZ3VpZGEsIHBlbG9zIGF0cmlidXRvcyBicnV0b3MuICovXG5leHBvcnQgZnVuY3Rpb24gcmVhZFJlY29yZFZhbHVlIChcbiAgcmVjOiBSZWNvcmRMaWtlLFxuICBmaWVsZD86IElNRmllbGRTY2hlbWEgfCBudWxsLFxuICBmYWxsYmFja0ppbXVOYW1lPzogc3RyaW5nXG4pOiB1bmtub3duIHtcbiAgY29uc3QgbmFtZXM6IHN0cmluZ1tdID0gW11cbiAgaWYgKGZpZWxkPy5qaW11TmFtZSkgbmFtZXMucHVzaChmaWVsZC5qaW11TmFtZSlcbiAgaWYgKGZhbGxiYWNrSmltdU5hbWUpIG5hbWVzLnB1c2goZmFsbGJhY2tKaW11TmFtZSlcbiAgaWYgKGZpZWxkPy5uYW1lKSBuYW1lcy5wdXNoKGZpZWxkLm5hbWUpXG4gIGlmIChmaWVsZD8uYWxpYXMpIG5hbWVzLnB1c2goZmllbGQuYWxpYXMpXG4gIGlmIChmaWVsZCkgbmFtZXMucHVzaChnZXRBdHRyaWJ1dGVLZXkoZmllbGQpKVxuXG4gIGNvbnN0IHVuaXF1ZU5hbWVzID0gWy4uLm5ldyBTZXQobmFtZXMuZmlsdGVyKEJvb2xlYW4pKV1cblxuICBpZiAoJ2dldEZpZWxkVmFsdWUnIGluIHJlYyAmJiB0eXBlb2YgcmVjLmdldEZpZWxkVmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3IgKGNvbnN0IG5hbWUgb2YgdW5pcXVlTmFtZXMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHYgPSByZWMuZ2V0RmllbGRWYWx1ZSEobmFtZSlcbiAgICAgICAgaWYgKHYgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHZcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAvLyB0ZW50YSBwcsOzeGltbyBub21lXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKFxuICAgIGZpZWxkPy5qaW11TmFtZSAmJlxuICAgICdnZXREYXRlRmllbGRWYWx1ZScgaW4gcmVjICYmXG4gICAgdHlwZW9mIHJlYy5nZXREYXRlRmllbGRWYWx1ZSA9PT0gJ2Z1bmN0aW9uJ1xuICApIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdiA9IHJlYy5nZXREYXRlRmllbGRWYWx1ZSEoZmllbGQuamltdU5hbWUpXG4gICAgICBpZiAodiAhPT0gdW5kZWZpbmVkKSByZXR1cm4gdlxuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gaWdub3JhXG4gICAgfVxuICB9XG5cbiAgY29uc3QgYXR0cnMgPSBnZXRQbGFpbkF0dHJpYnV0ZXMocmVjKVxuICBjb25zdCBmcm9tTWFwcGVkID0gcmVhZEF0dHJpYnV0ZUZsZXhpYmxlKGF0dHJzLCBmaWVsZCwgZmFsbGJhY2tKaW11TmFtZSlcbiAgaWYgKGZyb21NYXBwZWQgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGZyb21NYXBwZWRcblxuICBpZiAoJ2dldERhdGFCZWZvcmVNYXBwaW5nJyBpbiByZWMgJiYgdHlwZW9mIHJlYy5nZXREYXRhQmVmb3JlTWFwcGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IHJhdyA9IHRvUGxhaW5PYmplY3QocmVjLmdldERhdGFCZWZvcmVNYXBwaW5nKCkpXG4gICAgcmV0dXJuIHJlYWRBdHRyaWJ1dGVGbGV4aWJsZShyYXcsIGZpZWxkLCBmYWxsYmFja0ppbXVOYW1lKVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiByZWFkQXR0cmlidXRlIChcbiAgYXR0cnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuICBwcmltYXJ5S2V5OiBzdHJpbmcsXG4gIGZhbGxiYWNrS2V5Pzogc3RyaW5nXG4pOiB1bmtub3duIHtcbiAgaWYgKHByaW1hcnlLZXkgaW4gYXR0cnMpIHJldHVybiBhdHRyc1twcmltYXJ5S2V5XVxuICBpZiAoZmFsbGJhY2tLZXkgJiYgZmFsbGJhY2tLZXkgIT09IHByaW1hcnlLZXkgJiYgZmFsbGJhY2tLZXkgaW4gYXR0cnMpIHtcbiAgICByZXR1cm4gYXR0cnNbZmFsbGJhY2tLZXldXG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG4vKiogVGVudGEgamltdU5hbWUsIG5hbWUsIGFsaWFzIGUgY29ycmVzcG9uZMOqbmNpYSBzZW0gZGlmZXJlbmNpYXIgbWFpw7pzY3VsYXMvbWluw7pzY3VsYXMuICovXG5leHBvcnQgZnVuY3Rpb24gcmVhZEF0dHJpYnV0ZUZsZXhpYmxlIChcbiAgYXR0cnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuICBmaWVsZD86IElNRmllbGRTY2hlbWEgfCBudWxsLFxuICBmYWxsYmFja0ppbXVOYW1lPzogc3RyaW5nXG4pOiB1bmtub3duIHtcbiAgY29uc3QgY2FuZGlkYXRlcyA9IG5ldyBTZXQ8c3RyaW5nPigpXG4gIGlmIChmaWVsZCkge1xuICAgIGlmIChmaWVsZC5qaW11TmFtZSkgY2FuZGlkYXRlcy5hZGQoZmllbGQuamltdU5hbWUpXG4gICAgaWYgKGZpZWxkLm5hbWUpIGNhbmRpZGF0ZXMuYWRkKGZpZWxkLm5hbWUpXG4gICAgaWYgKGZpZWxkLmFsaWFzKSBjYW5kaWRhdGVzLmFkZChmaWVsZC5hbGlhcylcbiAgICBjYW5kaWRhdGVzLmFkZChnZXRBdHRyaWJ1dGVLZXkoZmllbGQpKVxuICB9XG4gIGlmIChmYWxsYmFja0ppbXVOYW1lKSBjYW5kaWRhdGVzLmFkZChmYWxsYmFja0ppbXVOYW1lKVxuXG4gIGZvciAoY29uc3Qga2V5IG9mIGNhbmRpZGF0ZXMpIHtcbiAgICBjb25zdCB2ID0gcmVhZEF0dHJpYnV0ZShhdHRycywga2V5KVxuICAgIGlmICh2ICE9PSB1bmRlZmluZWQpIHJldHVybiB2XG4gIH1cblxuICBjb25zdCBhdHRyS2V5cyA9IE9iamVjdC5rZXlzKGF0dHJzKVxuICBmb3IgKGNvbnN0IGtleSBvZiBjYW5kaWRhdGVzKSB7XG4gICAgY29uc3QgZm91bmQgPSBhdHRyS2V5cy5maW5kKChrKSA9PiBrLnRvTG93ZXJDYXNlKCkgPT09IGtleS50b0xvd2VyQ2FzZSgpKVxuICAgIGlmIChmb3VuZCAhPSBudWxsKSByZXR1cm4gYXR0cnNbZm91bmRdXG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG50eXBlIFF1ZXJpYWJsZUxheWVyID0ge1xuICBxdWVyeT86IChxOiBvYmplY3QsIG9wdGlvbnM/OiB7IHNjb3BlPzogUXVlcnlTY29wZSB9KSA9PiBQcm9taXNlPHsgcmVjb3Jkcz86IERhdGFSZWNvcmRbXSB9PlxuICBsb2FkPzogKHE6IG9iamVjdCwgb3B0aW9ucz86IHsgc2NvcGU/OiBRdWVyeVNjb3BlIH0pID0+IFByb21pc2U8RGF0YVJlY29yZFtdPlxuICBsb2FkQWxsPzogKFxuICAgIHE6IG9iamVjdCxcbiAgICBzaWduYWw/OiBBYm9ydFNpZ25hbCxcbiAgICBwcm9ncmVzc0NhbGxiYWNrPzogdW5rbm93bixcbiAgICBvcHRpb25zPzogeyBzY29wZT86IFF1ZXJ5U2NvcGUgfVxuICApID0+IFByb21pc2U8RGF0YVJlY29yZFtdPlxuICBnZXRBbGxMb2FkZWRSZWNvcmRzPzogKCkgPT4gRGF0YVJlY29yZFtdXG4gIGdldFJlY29yZHM/OiAoKSA9PiBEYXRhUmVjb3JkW11cbiAgbGF5ZXI/OiB7IHF1ZXJ5RmVhdHVyZXM/OiAocTogb2JqZWN0KSA9PiBQcm9taXNlPHsgZmVhdHVyZXM/OiB1bmtub3duW10gfT4gfVxuICBidWlsZFJlY29yZD86IChmZWF0dXJlOiB1bmtub3duKSA9PiBEYXRhUmVjb3JkXG59XG5cbmNvbnN0IHF1ZXJ5T3B0aW9ucyA9IHsgc2NvcGU6IFF1ZXJ5U2NvcGUuSW5BbGxEYXRhIH1cblxuY29uc3QgYnVpbGRRdWVyeVBhcmFtcyA9IChcbiAgb3V0RmllbGRzOiBzdHJpbmdbXSA9IFsnKiddLFxuICBkaXNhYmxlQ2xpZW50UXVlcnkgPSBmYWxzZVxuKSA9PiAoe1xuICB3aGVyZTogJzE9MScsXG4gIG91dEZpZWxkcyxcbiAgcmV0dXJuR2VvbWV0cnk6IGZhbHNlLFxuICBwYWdlU2l6ZTogMjAwMCxcbiAgLi4uKGRpc2FibGVDbGllbnRRdWVyeSA/IHsgZGlzYWJsZUNsaWVudFF1ZXJ5OiB0cnVlIH0gOiB7fSlcbn0pXG5cbmZ1bmN0aW9uIHJlY29yZHNBcmVSZWFkYWJsZSAocmVjb3JkczogRGF0YVJlY29yZFtdKTogYm9vbGVhbiB7XG4gIHJldHVybiByZWNvcmRzLmxlbmd0aCA+IDAgJiYgcmVjb3Jkcy5zb21lKHJlY29yZEhhc1JlYWRhYmxlRGF0YSlcbn1cblxuYXN5bmMgZnVuY3Rpb24gcXVlcnlWaWFKc2FwaUxheWVyIChkczogUXVlcmlhYmxlTGF5ZXIpOiBQcm9taXNlPERhdGFSZWNvcmRbXT4ge1xuICBjb25zdCBsYXllciA9IGRzLmxheWVyIGFzIHtcbiAgICBxdWVyeUZlYXR1cmVzPzogKHE6IG9iamVjdCkgPT4gUHJvbWlzZTx7IGZlYXR1cmVzPzogdW5rbm93bltdIH0+XG4gICAgcXVlcnk/OiAocTogb2JqZWN0KSA9PiBQcm9taXNlPHsgZmVhdHVyZXM/OiB1bmtub3duW10gfT5cbiAgfVxuICBpZiAoIWxheWVyIHx8IHR5cGVvZiBkcy5idWlsZFJlY29yZCAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIFtdXG5cbiAgY29uc3QgcSA9IHtcbiAgICB3aGVyZTogJzE9MScsXG4gICAgb3V0RmllbGRzOiBbJyonXSxcbiAgICByZXR1cm5HZW9tZXRyeTogZmFsc2UsXG4gICAgbnVtOiAyMDAwXG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9XG4gICAgICB0eXBlb2YgbGF5ZXIucXVlcnlGZWF0dXJlcyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IGF3YWl0IGxheWVyLnF1ZXJ5RmVhdHVyZXMocSlcbiAgICAgICAgOiB0eXBlb2YgbGF5ZXIucXVlcnkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICA/IGF3YWl0IGxheWVyLnF1ZXJ5KHEpXG4gICAgICAgICAgOiBudWxsXG4gICAgY29uc3QgZmVhdHVyZXMgPSByZXN1bHQ/LmZlYXR1cmVzID8/IFtdXG4gICAgcmV0dXJuIGZlYXR1cmVzLm1hcCgoZikgPT4gZHMuYnVpbGRSZWNvcmQhKGYpKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gW11cbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBydW5RdWVyeWFibGVNZXRob2RzIChcbiAgZHM6IFF1ZXJpYWJsZUxheWVyLFxuICBvdXRGaWVsZHM6IHN0cmluZ1tdLFxuICBkaXNhYmxlQ2xpZW50UXVlcnk6IGJvb2xlYW5cbik6IFByb21pc2U8RGF0YVJlY29yZFtdPiB7XG4gIGNvbnN0IHBhcmFtcyA9IGJ1aWxkUXVlcnlQYXJhbXMob3V0RmllbGRzLCBkaXNhYmxlQ2xpZW50UXVlcnkpXG5cbiAgaWYgKHR5cGVvZiBkcz8ubG9hZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZWNvcmRzID0gYXdhaXQgZHMubG9hZChwYXJhbXMsIHF1ZXJ5T3B0aW9ucylcbiAgICAgIGlmIChyZWNvcmRzPy5sZW5ndGggJiYgcmVjb3Jkc0FyZVJlYWRhYmxlKHJlY29yZHMpKSByZXR1cm4gcmVjb3Jkc1xuICAgICAgaWYgKHJlY29yZHM/Lmxlbmd0aCAmJiAhZGlzYWJsZUNsaWVudFF1ZXJ5KSByZXR1cm4gcmVjb3Jkc1xuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gdGVudGEgcHLDs3hpbW8gbcOpdG9kb1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgZHM/LmxvYWRBbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IGRzLmxvYWRBbGwocGFyYW1zLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgcXVlcnlPcHRpb25zKVxuICAgICAgaWYgKHJlY29yZHM/Lmxlbmd0aCAmJiByZWNvcmRzQXJlUmVhZGFibGUocmVjb3JkcykpIHJldHVybiByZWNvcmRzXG4gICAgICBpZiAocmVjb3Jkcz8ubGVuZ3RoICYmICFkaXNhYmxlQ2xpZW50UXVlcnkpIHJldHVybiByZWNvcmRzXG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyB0ZW50YSBxdWVyeSBhYmFpeG9cbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIGRzPy5xdWVyeSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkcy5xdWVyeShwYXJhbXMsIHF1ZXJ5T3B0aW9ucylcbiAgICAgIGNvbnN0IHJlY29yZHMgPSByZXN1bHQ/LnJlY29yZHMgPz8gW11cbiAgICAgIGlmIChyZWNvcmRzLmxlbmd0aCAmJiByZWNvcmRzQXJlUmVhZGFibGUocmVjb3JkcykpIHJldHVybiByZWNvcmRzXG4gICAgICBpZiAocmVjb3Jkcy5sZW5ndGggJiYgIWRpc2FibGVDbGllbnRRdWVyeSkgcmV0dXJuIHJlY29yZHNcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIHRlbnRhIEpTIEFQSVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHZpYUxheWVyID0gYXdhaXQgcXVlcnlWaWFKc2FwaUxheWVyKGRzKVxuICBpZiAodmlhTGF5ZXIubGVuZ3RoICYmIHJlY29yZHNBcmVSZWFkYWJsZSh2aWFMYXllcikpIHJldHVybiB2aWFMYXllclxuICBpZiAodmlhTGF5ZXIubGVuZ3RoICYmICFkaXNhYmxlQ2xpZW50UXVlcnkpIHJldHVybiB2aWFMYXllclxuXG4gIHJldHVybiBbXVxufVxuXG5hc3luYyBmdW5jdGlvbiBxdWVyeUFsbFJlY29yZHMgKFxuICBkczogUXVlcmlhYmxlTGF5ZXIsXG4gIG91dEZpZWxkczogc3RyaW5nW10gPSBbJyonXVxuKTogUHJvbWlzZTxEYXRhUmVjb3JkW10+IHtcbiAgbGV0IHJlY29yZHMgPSBhd2FpdCBydW5RdWVyeWFibGVNZXRob2RzKGRzLCBvdXRGaWVsZHMsIGZhbHNlKVxuICBpZiAocmVjb3Jkc0FyZVJlYWRhYmxlKHJlY29yZHMpKSByZXR1cm4gcmVjb3Jkc1xuXG4gIHJlY29yZHMgPSBhd2FpdCBydW5RdWVyeWFibGVNZXRob2RzKGRzLCBvdXRGaWVsZHMsIHRydWUpXG4gIGlmIChyZWNvcmRzQXJlUmVhZGFibGUocmVjb3JkcykpIHJldHVybiByZWNvcmRzXG5cbiAgcmV0dXJuIHJlY29yZHNcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGZXRjaExheWVyUmVjb3Jkc09wdGlvbnMge1xuICAvKiogSWdub3JhIGNhY2hlIGRvIG1hcGEgZSBmb3LDp2EgcXVlcnkvbG9hZEFsbCAow7p0aWwgbm8gRW50ZXJwcmlzZSkuICovXG4gIGZvcmNlUXVlcnk/OiBib29sZWFuXG4gIHllYXJGaWVsZEppbXU/OiBzdHJpbmdcbiAgcmVjb3J0ZUZpZWxkSmltdT86IHN0cmluZ1xuICBmaWVsZHM/OiBJTUZpZWxkU2NoZW1hW11cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZU91dEZpZWxkcyAoXG4gIHllYXJGaWVsZEppbXU/OiBzdHJpbmcsXG4gIHJlY29ydGVGaWVsZEppbXU/OiBzdHJpbmcsXG4gIGZpZWxkcz86IElNRmllbGRTY2hlbWFbXVxuKTogc3RyaW5nW10ge1xuICBpZiAoIWZpZWxkcz8ubGVuZ3RoIHx8ICF5ZWFyRmllbGRKaW11IHx8ICFyZWNvcnRlRmllbGRKaW11KSByZXR1cm4gWycqJ11cbiAgY29uc3Qga2V5cyA9IHJlc29sdmVBdHRyaWJ1dGVLZXlzKGZpZWxkcywgeWVhckZpZWxkSmltdSwgcmVjb3J0ZUZpZWxkSmltdSlcbiAgaWYgKCFrZXlzKSByZXR1cm4gWycqJ11cbiAgcmV0dXJuIFsnKicsIGtleXMueWVhcktleSwga2V5cy5yZWNvcnRlS2V5XVxufVxuXG4vKiogRGV0ZWN0YSBjb2x1bmEgZGUgYW5vIHBlbG9zIHZhbG9yZXMgcmVhaXMgKGV4LjogQW5vID0gMi4wMDEsIDIwMDEpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRldGVjdFllYXJLZXlGcm9tUm93cyAoXG4gIHJvd3M6IFJlY29yZDxzdHJpbmcsIHVua25vd24+W10sXG4gIGhpbnQ/OiBzdHJpbmdcbik6IHN0cmluZyB8IG51bGwge1xuICBpZiAoIXJvd3MubGVuZ3RoKSByZXR1cm4gbnVsbFxuXG4gIGNvbnN0IGtleXMgPSBuZXcgU2V0PHN0cmluZz4oKVxuICBmb3IgKGNvbnN0IHJvdyBvZiByb3dzLnNsaWNlKDAsIDUwKSkge1xuICAgIE9iamVjdC5rZXlzKHJvdykuZm9yRWFjaCgoaykgPT4ga2V5cy5hZGQoaykpXG4gIH1cblxuICBpZiAoaGludCkge1xuICAgIGNvbnN0IG1hdGNoID0gWy4uLmtleXNdLmZpbmQoKGspID0+IGsudG9Mb3dlckNhc2UoKSA9PT0gaGludC50b0xvd2VyQ2FzZSgpKVxuICAgIGlmIChtYXRjaCkgcmV0dXJuIG1hdGNoXG4gIH1cblxuICBsZXQgYmVzdEtleTogc3RyaW5nIHwgbnVsbCA9IG51bGxcbiAgbGV0IGJlc3RTY29yZSA9IDBcbiAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgIGlmICgvXihvYmplY3RpZHxnbG9iYWxpZHxzaGFwZXxmaWQpJC9pLnRlc3Qoa2V5KSkgY29udGludWVcbiAgICBsZXQgc2NvcmUgPSAwXG4gICAgZm9yIChjb25zdCByb3cgb2Ygcm93cykge1xuICAgICAgY29uc3QgeSA9IHBhcnNlWWVhcihyb3dba2V5XSlcbiAgICAgIGlmICh5ICE9IG51bGwgJiYgeSA+PSAxOTg1ICYmIHkgPD0gMjAzNSkgc2NvcmUrK1xuICAgIH1cbiAgICBpZiAoc2NvcmUgPiBiZXN0U2NvcmUpIHtcbiAgICAgIGJlc3RTY29yZSA9IHNjb3JlXG4gICAgICBiZXN0S2V5ID0ga2V5XG4gICAgfVxuICB9XG4gIHJldHVybiBiZXN0U2NvcmUgPiAwID8gYmVzdEtleSA6IG51bGxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRldGVjdFJlY29ydGVLZXlGcm9tUm93cyAoXG4gIHJvd3M6IFJlY29yZDxzdHJpbmcsIHVua25vd24+W10sXG4gIHJlY29ydGVIaW50OiBzdHJpbmdcbik6IHN0cmluZyB8IG51bGwge1xuICBpZiAoIXJvd3MubGVuZ3RoKSByZXR1cm4gbnVsbFxuICBjb25zdCBrZXlzID0gbmV3IFNldDxzdHJpbmc+KClcbiAgZm9yIChjb25zdCByb3cgb2Ygcm93cy5zbGljZSgwLCA1KSkge1xuICAgIE9iamVjdC5rZXlzKHJvdykuZm9yRWFjaCgoaykgPT4ga2V5cy5hZGQoaykpXG4gIH1cbiAgY29uc3QgZXhhY3QgPSBbLi4ua2V5c10uZmluZChcbiAgICAoaykgPT4gay50b0xvd2VyQ2FzZSgpID09PSByZWNvcnRlSGludC50b0xvd2VyQ2FzZSgpXG4gIClcbiAgaWYgKGV4YWN0KSByZXR1cm4gZXhhY3RcbiAgcmV0dXJuIChcbiAgICBbLi4ua2V5c10uZmluZChcbiAgICAgIChrKSA9PlxuICAgICAgICBub3JtYWxpemVSZWNvcnRlVG9rZW4oaykgPT09IG5vcm1hbGl6ZVJlY29ydGVUb2tlbihyZWNvcnRlSGludClcbiAgICApID8/IG51bGxcbiAgKVxufVxuXG4vKiogTW9udGEgc8OpcmllIGEgcGFydGlyIGRlIGF0cmlidXRvcyBicnV0b3MgKFJFU1QgLyBxdWVyeUZlYXR1cmVzKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFllYXJTZXJpZXNGcm9tQXR0cmlidXRlUm93cyAoXG4gIHJvd3M6IFJlY29yZDxzdHJpbmcsIHVua25vd24+W10sXG4gIHllYXJGaWVsZEppbXU6IHN0cmluZyxcbiAgcmVjb3J0ZUZpZWxkSmltdTogc3RyaW5nLFxuICBmaWVsZHM/OiBJTUZpZWxkU2NoZW1hW11cbik6IFllYXJWYWx1ZVJvd1tdIHtcbiAgaWYgKCFyb3dzLmxlbmd0aCkgcmV0dXJuIFtdXG5cbiAgY29uc3QgYXNSZWNvcmRzID0gcm93cy5tYXAoKGF0dHJpYnV0ZXMpID0+ICh7IGF0dHJpYnV0ZXMgfSkpXG4gIGNvbnN0IHN0YW5kYXJkID0gYnVpbGRZZWFyU2VyaWVzKFxuICAgIGFzUmVjb3JkcyxcbiAgICB5ZWFyRmllbGRKaW11LFxuICAgIHJlY29ydGVGaWVsZEppbXUsXG4gICAgZmllbGRzXG4gIClcbiAgaWYgKHN0YW5kYXJkLmxlbmd0aCA+IDApIHJldHVybiBzdGFuZGFyZFxuXG4gIGNvbnN0IHllYXJLZXkgPSBkZXRlY3RZZWFyS2V5RnJvbVJvd3Mocm93cywgeWVhckZpZWxkSmltdSkgPz8geWVhckZpZWxkSmltdVxuICBjb25zdCByZWNvcnRlS2V5ID1cbiAgICBkZXRlY3RSZWNvcnRlS2V5RnJvbVJvd3Mocm93cywgcmVjb3J0ZUZpZWxkSmltdSkgPz8gcmVjb3J0ZUZpZWxkSmltdVxuXG4gIGlmICgheWVhcktleSB8fCAhcmVjb3J0ZUtleSkgcmV0dXJuIFtdXG5cbiAgY29uc3Qgc2VyaWVzOiBZZWFyVmFsdWVSb3dbXSA9IFtdXG4gIGZvciAoY29uc3Qgcm93IG9mIHJvd3MpIHtcbiAgICBjb25zdCB5ZWFyID0gcGFyc2VZZWFyKHJvd1t5ZWFyS2V5XSlcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlTnVtZXJpY1ZhbHVlKHJvd1tyZWNvcnRlS2V5XSlcbiAgICBpZiAoeWVhciA9PSBudWxsIHx8IHZhbHVlID09IG51bGwpIGNvbnRpbnVlXG4gICAgc2VyaWVzLnB1c2goeyB5ZWFyLCB2YWx1ZSB9KVxuICB9XG4gIHJldHVybiBzZXJpZXMuc29ydCgoYSwgYikgPT4gYS55ZWFyIC0gYi55ZWFyKVxufVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaFJhd0F0dHJpYnV0ZVJvd3NGcm9tTGF5ZXIgKFxuICBkczogUXVlcmlhYmxlTGF5ZXJcbik6IFByb21pc2U8UmVjb3JkPHN0cmluZywgdW5rbm93bj5bXT4ge1xuICBjb25zdCBsYXllciA9IGRzLmxheWVyIGFzIHtcbiAgICBsb2FkPzogKCkgPT4gUHJvbWlzZTx2b2lkPlxuICAgIGxvYWRlZD86IGJvb2xlYW5cbiAgICBsb2FkU3RhdHVzPzogc3RyaW5nXG4gICAgcXVlcnlGZWF0dXJlcz86IChwOiBvYmplY3QpID0+IFByb21pc2U8e1xuICAgICAgZmVhdHVyZXM/OiBBcnJheTx7IGF0dHJpYnV0ZXM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB9PlxuICAgIH0+XG4gIH1cbiAgaWYgKCFsYXllcj8ucXVlcnlGZWF0dXJlcykgcmV0dXJuIFtdXG5cbiAgdHJ5IHtcbiAgICBpZiAoXG4gICAgICB0eXBlb2YgbGF5ZXIubG9hZCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgbGF5ZXIubG9hZFN0YXR1cyAhPT0gJ2xvYWRlZCcgJiZcbiAgICAgICFsYXllci5sb2FkZWRcbiAgICApIHtcbiAgICAgIGF3YWl0IGxheWVyLmxvYWQoKVxuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBsYXllci5xdWVyeUZlYXR1cmVzKHtcbiAgICAgIHdoZXJlOiAnMT0xJyxcbiAgICAgIG91dEZpZWxkczogWycqJ10sXG4gICAgICByZXR1cm5HZW9tZXRyeTogZmFsc2VcbiAgICB9KVxuICAgIHJldHVybiAocmVzdWx0LmZlYXR1cmVzID8/IFtdKVxuICAgICAgLm1hcCgoZikgPT4gKHsgLi4uKGYuYXR0cmlidXRlcyA/PyB7fSkgfSkpXG4gICAgICAuZmlsdGVyKChhKSA9PiBPYmplY3Qua2V5cyhhKS5sZW5ndGggPiAwKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gW11cbiAgfVxufVxuXG5mdW5jdGlvbiBhdHRyaWJ1dGVSb3dzU2NvcmUgKFxuICByb3dzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPltdXG4pOiBudW1iZXIge1xuICBpZiAoIXJvd3MubGVuZ3RoKSByZXR1cm4gMFxuICBjb25zdCBzYW1wbGUgPSByb3dzWzBdXG4gIHJldHVybiBPYmplY3Qua2V5cyhzYW1wbGUpLmZpbHRlcihcbiAgICAoaykgPT4gIS9eKG9iamVjdGlkfGdsb2JhbGlkfHNoYXBlfGZpZCkkL2kudGVzdChrKVxuICApLmxlbmd0aFxufVxuXG4vKipcbiAqIENhcnJlZ2EgbGluaGFzIGRhIHRhYmVsYSBQUk9ERVMgcHJpb3JpemFuZG8gYXRyaWJ1dG9zIGJydXRvcyBkYSBjYW1hZGFcbiAqIChtZXNtYSBmb250ZSBkYSB0YWJlbGEgZG8gUG9ydGFsKS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoUHJvZGVzQXR0cmlidXRlUm93cyAoXG4gIGRhdGFTb3VyY2U6IHVua25vd24sXG4gIG9wdGlvbnM/OiBGZXRjaExheWVyUmVjb3Jkc09wdGlvbnNcbik6IFByb21pc2U8UmVjb3JkPHN0cmluZywgdW5rbm93bj5bXT4ge1xuICBjb25zdCBkcyA9IGRhdGFTb3VyY2UgYXMgUXVlcmlhYmxlTGF5ZXJcbiAgY29uc3QgY2FuZGlkYXRlczogUmVjb3JkPHN0cmluZywgdW5rbm93bj5bXVtdID0gW11cblxuICBjYW5kaWRhdGVzLnB1c2goYXdhaXQgZmV0Y2hSYXdBdHRyaWJ1dGVSb3dzRnJvbUxheWVyKGRzKSlcblxuICBpZiAoIW9wdGlvbnM/LmZvcmNlUXVlcnkpIHtcbiAgICBjb25zdCBjYWNoZWQgPSBkcy5nZXRBbGxMb2FkZWRSZWNvcmRzPy4oKSA/PyBkcy5nZXRSZWNvcmRzPy4oKSA/PyBbXVxuICAgIGlmIChjYWNoZWQubGVuZ3RoKSB7XG4gICAgICBjYW5kaWRhdGVzLnB1c2goXG4gICAgICAgIGNhY2hlZFxuICAgICAgICAgIC5tYXAoKHIpID0+IGdldFBsYWluQXR0cmlidXRlcyhyKSlcbiAgICAgICAgICAuZmlsdGVyKChhKSA9PiBPYmplY3Qua2V5cyhhKS5sZW5ndGggPiAwKVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBmZXRjaExheWVyUmVjb3JkcyhkYXRhU291cmNlLCBvcHRpb25zKVxuICBpZiAocmVjb3Jkcy5sZW5ndGgpIHtcbiAgICBjYW5kaWRhdGVzLnB1c2goXG4gICAgICByZWNvcmRzXG4gICAgICAgIC5tYXAoKHIpID0+IGdldFBsYWluQXR0cmlidXRlcyhyKSlcbiAgICAgICAgLmZpbHRlcigoYSkgPT4gT2JqZWN0LmtleXMoYSkubGVuZ3RoID4gMClcbiAgICApXG4gIH1cblxuICBpZiAob3B0aW9ucz8ueWVhckZpZWxkSmltdSAmJiBvcHRpb25zPy5yZWNvcnRlRmllbGRKaW11KSB7XG4gICAgZm9yIChjb25zdCByb3dzIG9mIGNhbmRpZGF0ZXMpIHtcbiAgICAgIGlmICghcm93cy5sZW5ndGgpIGNvbnRpbnVlXG4gICAgICBjb25zdCBzZXJpZXMgPSBidWlsZFllYXJTZXJpZXNGcm9tQXR0cmlidXRlUm93cyhcbiAgICAgICAgcm93cyxcbiAgICAgICAgb3B0aW9ucy55ZWFyRmllbGRKaW11LFxuICAgICAgICBvcHRpb25zLnJlY29ydGVGaWVsZEppbXUsXG4gICAgICAgIG9wdGlvbnMuZmllbGRzXG4gICAgICApXG4gICAgICBpZiAoc2VyaWVzLmxlbmd0aCA+IDApIHJldHVybiByb3dzXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNhbmRpZGF0ZXMucmVkdWNlKChiZXN0LCBjdXIpID0+IHtcbiAgICBpZiAoIWN1ci5sZW5ndGgpIHJldHVybiBiZXN0XG4gICAgaWYgKCFiZXN0Lmxlbmd0aCkgcmV0dXJuIGN1clxuICAgIHJldHVybiBhdHRyaWJ1dGVSb3dzU2NvcmUoY3VyKSA+IGF0dHJpYnV0ZVJvd3NTY29yZShiZXN0KSA/IGN1ciA6IGJlc3RcbiAgfSwgW10gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj5bXSlcbn1cblxuLyoqIENhcnJlZ2EgdG9kb3Mgb3MgcmVnaXN0cm9zIGRhIGNhbWFkYSAodGFiZWxhIGFubyDDlyByZWNvcnRlcykuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hMYXllclJlY29yZHMgKFxuICBkYXRhU291cmNlOiB1bmtub3duLFxuICBvcHRpb25zPzogRmV0Y2hMYXllclJlY29yZHNPcHRpb25zXG4pOiBQcm9taXNlPERhdGFSZWNvcmRbXT4ge1xuICBjb25zdCBkcyA9IGRhdGFTb3VyY2UgYXMgUXVlcmlhYmxlTGF5ZXJcbiAgY29uc3QgY2FjaGVkID0gZHMuZ2V0QWxsTG9hZGVkUmVjb3Jkcz8uKCkgPz8gZHMuZ2V0UmVjb3Jkcz8uKCkgPz8gW11cbiAgY29uc3Qgb3V0RmllbGRzID0gcmVzb2x2ZU91dEZpZWxkcyhcbiAgICBvcHRpb25zPy55ZWFyRmllbGRKaW11LFxuICAgIG9wdGlvbnM/LnJlY29ydGVGaWVsZEppbXUsXG4gICAgb3B0aW9ucz8uZmllbGRzXG4gIClcblxuICBpZiAoIW9wdGlvbnM/LmZvcmNlUXVlcnkgJiYgcmVjb3Jkc0FyZVJlYWRhYmxlKGNhY2hlZCkpIHtcbiAgICByZXR1cm4gY2FjaGVkXG4gIH1cblxuICBjb25zdCBxdWVyaWVkID0gYXdhaXQgcXVlcnlBbGxSZWNvcmRzKGRzLCBvdXRGaWVsZHMpXG4gIGlmIChyZWNvcmRzQXJlUmVhZGFibGUocXVlcmllZCkpIHJldHVybiBxdWVyaWVkXG4gIGlmIChxdWVyaWVkLmxlbmd0aCkgcmV0dXJuIHF1ZXJpZWRcblxuICBpZiAoIW9wdGlvbnM/LmZvcmNlUXVlcnkpIHJldHVybiBjYWNoZWRcbiAgcmV0dXJuIHF1ZXJpZWQubGVuZ3RoID8gcXVlcmllZCA6IGNhY2hlZFxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVSZWNvcnRlVG9rZW4gKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gdmFsdWVcbiAgICAudG9Mb3dlckNhc2UoKVxuICAgIC5ub3JtYWxpemUoJ05GRCcpXG4gICAgLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csICcnKVxuICAgIC5yZXBsYWNlKC9bXFxzLV0rL2csICdfJylcbn1cblxuZnVuY3Rpb24gaXNZZWFyTmFtZWRGaWVsZCAoZmllbGQ6IElNRmllbGRTY2hlbWEpOiBib29sZWFuIHtcbiAgY29uc3QgeSA9XG4gICAgcGFyc2VZZWFyKGZpZWxkLmppbXVOYW1lKSA/P1xuICAgIHBhcnNlWWVhcihmaWVsZC5uYW1lKSA/P1xuICAgIHBhcnNlWWVhcihmaWVsZC5hbGlhcylcbiAgcmV0dXJuIHkgIT0gbnVsbCAmJiB5ID49IDE5ODUgJiYgeSA8PSAyMDM1XG59XG5cbmZ1bmN0aW9uIGZpbmRSZWNvcnRlTmFtZUZpZWxkIChmaWVsZHM6IElNRmllbGRTY2hlbWFbXSk6IElNRmllbGRTY2hlbWEgfCBudWxsIHtcbiAgY29uc3QgcGF0dGVybnMgPSBbJ3JlY29ydGUnLCAncmVnaWFvJywgJ3JlZ2nDo28nLCAnYmlvbWEnLCAnbm9tZScsICduYW1lJywgJ2xhYmVsJ11cbiAgcmV0dXJuIChcbiAgICBmaWVsZHMuZmluZCgoZikgPT4ge1xuICAgICAgY29uc3QgaiA9IGYuamltdU5hbWU/LnRvTG93ZXJDYXNlKCkgPz8gJydcbiAgICAgIGNvbnN0IG4gPSBmLm5hbWU/LnRvTG93ZXJDYXNlKCkgPz8gJydcbiAgICAgIHJldHVybiBwYXR0ZXJucy5zb21lKChwKSA9PiBqLmluY2x1ZGVzKHApIHx8IG4uaW5jbHVkZXMocCkpXG4gICAgfSkgPz8gbnVsbFxuICApXG59XG5cbi8qKiBMYXlvdXQgYWx0ZXJuYXRpdm86IGNhZGEgcmVnaXN0cm8gPSByZWNvcnRlOyBjb2x1bmFzIG51bcOpcmljYXMgPSBhbm9zLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkWWVhclNlcmllc0Zyb21SZWNvcnRlUm93cyAoXG4gIHJlY29yZHM6IFJlY29yZExpa2VbXSxcbiAgcmVjb3J0ZUZpZWxkSmltdTogc3RyaW5nLFxuICBmaWVsZHM6IElNRmllbGRTY2hlbWFbXVxuKTogWWVhclZhbHVlUm93W10ge1xuICBjb25zdCB5ZWFyRmllbGRzID0gZmllbGRzLmZpbHRlcihpc1llYXJOYW1lZEZpZWxkKVxuICBpZiAoIXllYXJGaWVsZHMubGVuZ3RoKSByZXR1cm4gW11cblxuICBjb25zdCB0YXJnZXQgPSBub3JtYWxpemVSZWNvcnRlVG9rZW4ocmVjb3J0ZUZpZWxkSmltdSlcbiAgY29uc3QgbmFtZUZpZWxkID0gZmluZFJlY29ydGVOYW1lRmllbGQoZmllbGRzKVxuXG4gIGNvbnN0IHJvdyA9XG4gICAgcmVjb3Jkcy5maW5kKChyZWMpID0+IHtcbiAgICAgIGlmIChuYW1lRmllbGQpIHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSByZWFkUmVjb3JkVmFsdWUocmVjLCBuYW1lRmllbGQsIG5hbWVGaWVsZC5qaW11TmFtZSlcbiAgICAgICAgaWYgKGxhYmVsICE9IG51bGwgJiYgbm9ybWFsaXplUmVjb3J0ZVRva2VuKFN0cmluZyhsYWJlbCkpID09PSB0YXJnZXQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IGYgb2YgZmllbGRzKSB7XG4gICAgICAgIGlmIChpc1llYXJOYW1lZEZpZWxkKGYpIHx8IGYuamltdU5hbWUgPT09IHJlY29ydGVGaWVsZEppbXUpIGNvbnRpbnVlXG4gICAgICAgIGNvbnN0IHYgPSByZWFkUmVjb3JkVmFsdWUocmVjLCBmLCBmLmppbXVOYW1lKVxuICAgICAgICBpZiAodiAhPSBudWxsICYmIG5vcm1hbGl6ZVJlY29ydGVUb2tlbihTdHJpbmcodikpID09PSB0YXJnZXQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KSA/PyBudWxsXG5cbiAgaWYgKCFyb3cpIHJldHVybiBbXVxuXG4gIGNvbnN0IHNlcmllczogWWVhclZhbHVlUm93W10gPSBbXVxuICBmb3IgKGNvbnN0IHlmIG9mIHllYXJGaWVsZHMpIHtcbiAgICBjb25zdCB5ZWFyID1cbiAgICAgIHBhcnNlWWVhcih5Zi5qaW11TmFtZSkgPz8gcGFyc2VZZWFyKHlmLm5hbWUpID8/IHBhcnNlWWVhcih5Zi5hbGlhcylcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlTnVtZXJpY1ZhbHVlKHJlYWRSZWNvcmRWYWx1ZShyb3csIHlmLCB5Zi5qaW11TmFtZSkpXG4gICAgaWYgKHllYXIgPT0gbnVsbCB8fCB2YWx1ZSA9PSBudWxsKSBjb250aW51ZVxuICAgIHNlcmllcy5wdXNoKHsgeWVhciwgdmFsdWUgfSlcbiAgfVxuXG4gIHJldHVybiBzZXJpZXMuc29ydCgoYSwgYikgPT4gYS55ZWFyIC0gYi55ZWFyKVxufVxuXG5mdW5jdGlvbiBidWlsZFllYXJTZXJpZXNZZWFyUm93cyAoXG4gIHJlY29yZHM6IFJlY29yZExpa2VbXSxcbiAgeWVhckZpZWxkSmltdTogc3RyaW5nLFxuICByZWNvcnRlRmllbGRKaW11OiBzdHJpbmcsXG4gIGZpZWxkcz86IElNRmllbGRTY2hlbWFbXVxuKTogWWVhclZhbHVlUm93W10ge1xuICBjb25zdCB5ZWFyRmllbGQgPSBmaWVsZHM/Lmxlbmd0aFxuICAgID8gZmluZEZpZWxkQnlKaW11TmFtZShmaWVsZHMsIHllYXJGaWVsZEppbXUpXG4gICAgOiBudWxsXG4gIGNvbnN0IHJlY29ydGVGaWVsZCA9IGZpZWxkcz8ubGVuZ3RoXG4gICAgPyBmaW5kRmllbGRCeUppbXVOYW1lKGZpZWxkcywgcmVjb3J0ZUZpZWxkSmltdSlcbiAgICA6IG51bGxcbiAgY29uc3Qgc2VyaWVzOiBZZWFyVmFsdWVSb3dbXSA9IFtdXG5cbiAgZm9yIChjb25zdCByZWMgb2YgcmVjb3Jkcykge1xuICAgIGNvbnN0IHllYXIgPSBwYXJzZVllYXIoXG4gICAgICByZWFkUmVjb3JkVmFsdWUocmVjLCB5ZWFyRmllbGQsIHllYXJGaWVsZEppbXUpXG4gICAgKVxuICAgIGNvbnN0IHZhbHVlID0gcGFyc2VOdW1lcmljVmFsdWUoXG4gICAgICByZWFkUmVjb3JkVmFsdWUocmVjLCByZWNvcnRlRmllbGQsIHJlY29ydGVGaWVsZEppbXUpXG4gICAgKVxuICAgIGlmICh5ZWFyID09IG51bGwgfHwgdmFsdWUgPT0gbnVsbCkgY29udGludWVcblxuICAgIHNlcmllcy5wdXNoKHsgeWVhciwgdmFsdWUgfSlcbiAgfVxuXG4gIHJldHVybiBzZXJpZXMuc29ydCgoYSwgYikgPT4gYS55ZWFyIC0gYi55ZWFyKVxufVxuXG5mdW5jdGlvbiBjb2xsZWN0UmVjb3JkQXR0cmlidXRlS2V5cyAocmVjb3JkczogUmVjb3JkTGlrZVtdKTogc3RyaW5nW10ge1xuICBjb25zdCBrZXlzID0gbmV3IFNldDxzdHJpbmc+KClcbiAgZm9yIChjb25zdCByZWMgb2YgcmVjb3Jkcy5zbGljZSgwLCAxMDApKSB7XG4gICAgT2JqZWN0LmtleXMoZ2V0UGxhaW5BdHRyaWJ1dGVzKHJlYykpLmZvckVhY2goKGspID0+IGtleXMuYWRkKGspKVxuICB9XG4gIHJldHVybiBbLi4ua2V5c11cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUtleXNGcm9tQXR0cmlidXRlTmFtZXMgKFxuICBrZXlzOiBzdHJpbmdbXSxcbiAgeWVhckZpZWxkSmltdTogc3RyaW5nLFxuICByZWNvcnRlRmllbGRKaW11OiBzdHJpbmdcbik6IHsgeWVhcktleTogc3RyaW5nOyByZWNvcnRlS2V5OiBzdHJpbmcgfSB8IG51bGwge1xuICBjb25zdCByZWNvcnRlS2V5ID0ga2V5cy5maW5kKFxuICAgIChrKSA9PlxuICAgICAgay50b0xvd2VyQ2FzZSgpID09PSByZWNvcnRlRmllbGRKaW11LnRvTG93ZXJDYXNlKCkgfHxcbiAgICAgIG5vcm1hbGl6ZVJlY29ydGVUb2tlbihrKSA9PT0gbm9ybWFsaXplUmVjb3J0ZVRva2VuKHJlY29ydGVGaWVsZEppbXUpXG4gIClcbiAgbGV0IHllYXJLZXkgPSBrZXlzLmZpbmQoKGspID0+IGsudG9Mb3dlckNhc2UoKSA9PT0geWVhckZpZWxkSmltdS50b0xvd2VyQ2FzZSgpKVxuICBpZiAoIXllYXJLZXkpIHtcbiAgICB5ZWFyS2V5ID0ga2V5cy5maW5kKChrKSA9PlxuICAgICAgWUVBUl9OQU1FX1BBVFRFUk5TLnNvbWUoXG4gICAgICAgIChwKSA9PiBrLnRvTG93ZXJDYXNlKCkgPT09IHAgfHwgay50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHApXG4gICAgICApXG4gICAgKVxuICB9XG4gIGlmICgheWVhcktleSB8fCAhcmVjb3J0ZUtleSkgcmV0dXJuIG51bGxcbiAgcmV0dXJuIHsgeWVhcktleSwgcmVjb3J0ZUtleSB9XG59XG5cbi8qKiDDmmx0aW1vIHJlY3Vyc286IGluZmVyZSBjb2x1bmFzIHBlbG9zIG5vbWVzIHJlYWlzIG5vcyBhdHJpYnV0b3MgcmV0b3JuYWRvcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFllYXJTZXJpZXNJbmZlcnJlZCAoXG4gIHJlY29yZHM6IFJlY29yZExpa2VbXSxcbiAgeWVhckZpZWxkSmltdTogc3RyaW5nLFxuICByZWNvcnRlRmllbGRKaW11OiBzdHJpbmdcbik6IFllYXJWYWx1ZVJvd1tdIHtcbiAgY29uc3Qga2V5cyA9IGNvbGxlY3RSZWNvcmRBdHRyaWJ1dGVLZXlzKHJlY29yZHMpXG4gIGNvbnN0IHJlc29sdmVkID0gcmVzb2x2ZUtleXNGcm9tQXR0cmlidXRlTmFtZXMoa2V5cywgeWVhckZpZWxkSmltdSwgcmVjb3J0ZUZpZWxkSmltdSlcbiAgaWYgKCFyZXNvbHZlZCkgcmV0dXJuIFtdXG5cbiAgY29uc3Qgc2VyaWVzOiBZZWFyVmFsdWVSb3dbXSA9IFtdXG4gIGZvciAoY29uc3QgcmVjIG9mIHJlY29yZHMpIHtcbiAgICBjb25zdCBhdHRycyA9IGdldFBsYWluQXR0cmlidXRlcyhyZWMpXG4gICAgY29uc3QgeWVhciA9IHBhcnNlWWVhcihhdHRyc1tyZXNvbHZlZC55ZWFyS2V5XSlcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlTnVtZXJpY1ZhbHVlKGF0dHJzW3Jlc29sdmVkLnJlY29ydGVLZXldKVxuICAgIGlmICh5ZWFyID09IG51bGwgfHwgdmFsdWUgPT0gbnVsbCkgY29udGludWVcbiAgICBzZXJpZXMucHVzaCh7IHllYXIsIHZhbHVlIH0pXG4gIH1cbiAgcmV0dXJuIHNlcmllcy5zb3J0KChhLCBiKSA9PiBhLnllYXIgLSBiLnllYXIpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFllYXJTZXJpZXMgKFxuICByZWNvcmRzOiBSZWNvcmRMaWtlW10sXG4gIHllYXJGaWVsZEppbXU6IHN0cmluZyxcbiAgcmVjb3J0ZUZpZWxkSmltdTogc3RyaW5nLFxuICBmaWVsZHM/OiBJTUZpZWxkU2NoZW1hW11cbik6IFllYXJWYWx1ZVJvd1tdIHtcbiAgY29uc3QgeWVhclJvd3MgPSBidWlsZFllYXJTZXJpZXNZZWFyUm93cyhcbiAgICByZWNvcmRzLFxuICAgIHllYXJGaWVsZEppbXUsXG4gICAgcmVjb3J0ZUZpZWxkSmltdSxcbiAgICBmaWVsZHNcbiAgKVxuICBpZiAoeWVhclJvd3MubGVuZ3RoID4gMCkgcmV0dXJuIHllYXJSb3dzXG5cbiAgaWYgKGZpZWxkcz8ubGVuZ3RoKSB7XG4gICAgY29uc3QgYWx0ID0gYnVpbGRZZWFyU2VyaWVzRnJvbVJlY29ydGVSb3dzKHJlY29yZHMsIHJlY29ydGVGaWVsZEppbXUsIGZpZWxkcylcbiAgICBpZiAoYWx0Lmxlbmd0aCA+IDApIHJldHVybiBhbHRcbiAgfVxuXG4gIHJldHVybiBidWlsZFllYXJTZXJpZXNJbmZlcnJlZChyZWNvcmRzLCB5ZWFyRmllbGRKaW11LCByZWNvcnRlRmllbGRKaW11KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0WWVhcnNSYW5nZVN1bW1hcnkgKHNlcmllczogWWVhclZhbHVlUm93W10pOiBzdHJpbmcgfCBudWxsIHtcbiAgaWYgKCFzZXJpZXMubGVuZ3RoKSByZXR1cm4gbnVsbFxuICBjb25zdCBtaW4gPSBzZXJpZXNbMF0ueWVhclxuICBjb25zdCBtYXggPSBzZXJpZXNbc2VyaWVzLmxlbmd0aCAtIDFdLnllYXJcbiAgY29uc3QgY291bnQgPSBzZXJpZXMubGVuZ3RoXG4gIGlmIChtaW4gPT09IG1heCkgcmV0dXJuIGAke21pbn0gKCR7Y291bnR9IGFubylgXG4gIHJldHVybiBgJHttaW594oCTJHttYXh9ICgke2NvdW50fSBhbm9zKWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzWWVhck91dE9mVHlwaWNhbFJhbmdlICh5ZWFyOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIHllYXIgPCAyMDAxIHx8IHllYXIgPiAyMDI1XG59XG5cbi8qKiBWYXJpYcOnw6NvIHBlcmNlbnR1YWwgZG8gdmFsb3IgaW5pY2lhbCAoYW5vIG1haXMgYW50aWdvKSBwYXJhIG8gZmluYWwgKGFubyBtYWlzIHJlY2VudGUpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbGNQZXJjZW50VmFyaWF0aW9uIChcbiAgdmFsdWVJbmljaWFsOiBudW1iZXIsXG4gIHZhbHVlRmluYWw6IG51bWJlclxuKTogbnVtYmVyIHwgbnVsbCB7XG4gIGlmICghTnVtYmVyLmlzRmluaXRlKHZhbHVlSW5pY2lhbCkgfHwgIU51bWJlci5pc0Zpbml0ZSh2YWx1ZUZpbmFsKSkgcmV0dXJuIG51bGxcbiAgaWYgKHZhbHVlSW5pY2lhbCA9PT0gMCkgcmV0dXJuIG51bGxcbiAgcmV0dXJuICgodmFsdWVGaW5hbCAtIHZhbHVlSW5pY2lhbCkgLyB2YWx1ZUluaWNpYWwpICogMTAwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQZXJjZW50VmFyaWF0aW9uIChwY3Q6IG51bWJlcik6IHN0cmluZyB7XG4gIGNvbnN0IHNpZ24gPSBwY3QgPiAwID8gJysnIDogJydcbiAgcmV0dXJuIGAke3NpZ259JHtwY3QudG9Mb2NhbGVTdHJpbmcoJ3B0LUJSJywge1xuICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDJcbiAgfSl9JWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlRm9yWWVhciAoXG4gIHNlcmllczogWWVhclZhbHVlUm93W10sXG4gIHllYXI6IG51bWJlclxuKTogbnVtYmVyIHwgbnVsbCB7XG4gIGNvbnN0IHJvdyA9IHNlcmllcy5maW5kKChyKSA9PiByLnllYXIgPT09IHllYXIpXG4gIHJldHVybiByb3cgIT0gbnVsbCA/IHJvdy52YWx1ZSA6IG51bGxcbn1cblxuLyoqIFNvbWEgb3MgdmFsb3JlcyBkb3MgYW5vcyBpbmZvcm1hZG9zOyByZXRvcm5hIG51bGwgc2UgYWxndW0gYW5vIG7Do28gdGl2ZXIgZGFkby4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdW1WYWx1ZXNGb3JZZWFycyAoXG4gIHNlcmllczogWWVhclZhbHVlUm93W10sXG4gIHllYXJzOiBudW1iZXJbXVxuKTogbnVtYmVyIHwgbnVsbCB7XG4gIGlmICgheWVhcnMubGVuZ3RoKSByZXR1cm4gbnVsbFxuICBsZXQgc3VtID0gMFxuICBmb3IgKGNvbnN0IHllYXIgb2YgeWVhcnMpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGdldFZhbHVlRm9yWWVhcihzZXJpZXMsIHllYXIpXG4gICAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiBudWxsXG4gICAgc3VtICs9IHZhbHVlXG4gIH1cbiAgcmV0dXJuIHN1bVxufVxuXG4vKiogQW5vcyBkaXNwb27DrXZlaXMgcGFyYSBvIHBlcsOtb2RvIGluaWNpYWwgKGFudGVzIGRvIHBlcsOtb2RvIGZpbmFsLCBzZSBob3V2ZXIpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFllYXJzQWxsb3dlZEZvckluaWNpYWwgKFxuICBhbGxZZWFyczogbnVtYmVyW10sXG4gIHBlcmlvZG9GaW5hbDogbnVtYmVyW11cbik6IG51bWJlcltdIHtcbiAgY29uc3QgYmxvY2tlZCA9IG5ldyBTZXQocGVyaW9kb0ZpbmFsKVxuICBjb25zdCBtYXhGaW5hbCA9IHBlcmlvZG9GaW5hbC5sZW5ndGggPyBNYXRoLm1pbiguLi5wZXJpb2RvRmluYWwpIDogSW5maW5pdHlcbiAgcmV0dXJuIGFsbFllYXJzLmZpbHRlcigoeSkgPT4gIWJsb2NrZWQuaGFzKHkpICYmIHkgPCBtYXhGaW5hbClcbn1cblxuLyoqIEFub3MgZGlzcG9uw612ZWlzIHBhcmEgbyBwZXLDrW9kbyBmaW5hbCAoZGVwb2lzIGRvIHBlcsOtb2RvIGluaWNpYWwsIHNlIGhvdXZlcikuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0WWVhcnNBbGxvd2VkRm9yRmluYWwgKFxuICBhbGxZZWFyczogbnVtYmVyW10sXG4gIHBlcmlvZG9JbmljaWFsOiBudW1iZXJbXVxuKTogbnVtYmVyW10ge1xuICBjb25zdCBibG9ja2VkID0gbmV3IFNldChwZXJpb2RvSW5pY2lhbClcbiAgY29uc3QgbWluSW5pY2lhbCA9IHBlcmlvZG9JbmljaWFsLmxlbmd0aCA/IE1hdGgubWF4KC4uLnBlcmlvZG9JbmljaWFsKSA6IC1JbmZpbml0eVxuICByZXR1cm4gYWxsWWVhcnMuZmlsdGVyKCh5KSA9PiAhYmxvY2tlZC5oYXMoeSkgJiYgeSA+IG1pbkluaWNpYWwpXG59XG5cbi8qKiBNYXJjYS9kZXNtYXJjYSB1bSBhbm8gbWFudGVuZG8gYXBlbmFzIHNlcXXDqm5jaWFzIGNvbnNlY3V0aXZhcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVDb25zZWN1dGl2ZVllYXIgKFxuICBwZXJpb2Q6IG51bWJlcltdLFxuICB5ZWFyOiBudW1iZXJcbik6IHsgbmV4dDogbnVtYmVyW107IHJlamVjdGVkOiBib29sZWFuIH0ge1xuICBpZiAocGVyaW9kLmluY2x1ZGVzKHllYXIpKSB7XG4gICAgcmV0dXJuIHsgbmV4dDogcGVyaW9kLmZpbHRlcigoeSkgPT4geSAhPT0geWVhciksIHJlamVjdGVkOiBmYWxzZSB9XG4gIH1cbiAgY29uc3QgbmV4dCA9IFsuLi5wZXJpb2QsIHllYXJdLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuICBpZiAoIWFyZUNvbnNlY3V0aXZlWWVhcnMobmV4dCkpIHtcbiAgICByZXR1cm4geyBuZXh0OiBwZXJpb2QsIHJlamVjdGVkOiB0cnVlIH1cbiAgfVxuICByZXR1cm4geyBuZXh0LCByZWplY3RlZDogZmFsc2UgfVxufVxuXG4vKiogVmVyaWZpY2Egc2Ugb3MgYW5vcyBmb3JtYW0gdW1hIHNlcXXDqm5jaWEgY29uc2VjdXRpdmEgKGV4LjogMjAxMCwgMjAxMSwgMjAxMikuICovXG5leHBvcnQgZnVuY3Rpb24gYXJlQ29uc2VjdXRpdmVZZWFycyAoeWVhcnM6IG51bWJlcltdKTogYm9vbGVhbiB7XG4gIGlmICh5ZWFycy5sZW5ndGggPD0gMSkgcmV0dXJuIHRydWVcbiAgY29uc3Qgc29ydGVkID0gWy4uLnllYXJzXS5zb3J0KChhLCBiKSA9PiBhIC0gYilcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBzb3J0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc29ydGVkW2ldIC0gc29ydGVkW2kgLSAxXSAhPT0gMSkgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuLyoqIFLDs3R1bG8gY29tcGFjdG8gcGFyYSB1bSBvdSBtYWlzIGFub3MgKGV4LjogXCIyMDEwXCIgb3UgXCIyMDEw4oCTMjAxMiAoMyBhbm9zKVwiKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQZXJpb2RMYWJlbCAoeWVhcnM6IG51bWJlcltdKTogc3RyaW5nIHtcbiAgY29uc3Qgc29ydGVkID0gWy4uLnllYXJzXS5zb3J0KChhLCBiKSA9PiBhIC0gYilcbiAgaWYgKCFzb3J0ZWQubGVuZ3RoKSByZXR1cm4gJydcbiAgaWYgKHNvcnRlZC5sZW5ndGggPT09IDEpIHJldHVybiBTdHJpbmcoc29ydGVkWzBdKVxuICByZXR1cm4gYCR7c29ydGVkWzBdfeKAkyR7c29ydGVkW3NvcnRlZC5sZW5ndGggLSAxXX0gKCR7c29ydGVkLmxlbmd0aH0gYW5vcylgXG59XG5cbi8qKiBJbnRlcnZhbG8gZGUgYW5vcyBzZW0gY29udGFnZW0gKGV4LjogXCIyMDEwXCIgb3UgXCIyMDEw4oCTMjAxMlwiKSDigJQgdXNvIGVtIHJlc3VsdGFkb3MuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UGVyaW9kUmFuZ2VMYWJlbCAoeWVhcnM6IG51bWJlcltdKTogc3RyaW5nIHtcbiAgY29uc3Qgc29ydGVkID0gWy4uLnllYXJzXS5zb3J0KChhLCBiKSA9PiBhIC0gYilcbiAgaWYgKCFzb3J0ZWQubGVuZ3RoKSByZXR1cm4gJydcbiAgaWYgKHNvcnRlZC5sZW5ndGggPT09IDEpIHJldHVybiBTdHJpbmcoc29ydGVkWzBdKVxuICByZXR1cm4gYCR7c29ydGVkWzBdfeKAkyR7c29ydGVkW3NvcnRlZC5sZW5ndGggLSAxXX1gXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmFyaWF0aW9uUmVzdWx0IHtcbiAgcGN0OiBudW1iZXJcbiAgdmFsdWVJbmljaWFsOiBudW1iZXJcbiAgdmFsdWVGaW5hbDogbnVtYmVyXG4gIHllYXJzSW5pY2lhbDogbnVtYmVyW11cbiAgeWVhcnNGaW5hbDogbnVtYmVyW11cbn1cblxuZXhwb3J0IHR5cGUgUGVyaW9kVmFyaWF0aW9uT3V0Y29tZSA9XG4gIHwgeyBvazogdHJ1ZTsgZGF0YTogVmFyaWF0aW9uUmVzdWx0IH1cbiAgfCB7IG9rOiBmYWxzZTsgbWVzc2FnZTogc3RyaW5nIH1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVQZXJpb2RWYXJpYXRpb24gKFxuICBzZXJpZXM6IFllYXJWYWx1ZVJvd1tdLFxuICBwZXJpb2RvSW5pY2lhbDogbnVtYmVyW10sXG4gIHBlcmlvZG9GaW5hbDogbnVtYmVyW11cbik6IFBlcmlvZFZhcmlhdGlvbk91dGNvbWUge1xuICBjb25zdCBpbmkgPSBbLi4ucGVyaW9kb0luaWNpYWxdLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuICBjb25zdCBmaW4gPSBbLi4ucGVyaW9kb0ZpbmFsXS5zb3J0KChhLCBiKSA9PiBhIC0gYilcblxuICBpZiAoIWluaS5sZW5ndGggfHwgIWZpbi5sZW5ndGgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogJ1NlbGVjaW9uZSBwZWxvIG1lbm9zIHVtIGFubyBlbSBjYWRhIHBlcsOtb2RvLidcbiAgICB9XG4gIH1cblxuICBpZiAoaW5pLmxlbmd0aCAhPT0gZmluLmxlbmd0aCkge1xuICAgIHJldHVybiB7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBtZXNzYWdlOlxuICAgICAgICAnTyBwZXLDrW9kbyBpbmljaWFsIGUgbyBwZXLDrW9kbyBmaW5hbCBkZXZlbSB0ZXIgYSBtZXNtYSBxdWFudGlkYWRlIGRlIGFub3MuJ1xuICAgIH1cbiAgfVxuXG4gIGlmICghYXJlQ29uc2VjdXRpdmVZZWFycyhpbmkpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6ICdPcyBhbm9zIGRvIHBlcsOtb2RvIGluaWNpYWwgZGV2ZW0gc2VyIGNvbnNlY3V0aXZvcy4nXG4gICAgfVxuICB9XG5cbiAgaWYgKCFhcmVDb25zZWN1dGl2ZVllYXJzKGZpbikpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogJ09zIGFub3MgZG8gcGVyw61vZG8gZmluYWwgZGV2ZW0gc2VyIGNvbnNlY3V0aXZvcy4nXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaW5pU2V0ID0gbmV3IFNldChpbmkpXG4gIGlmIChmaW4uc29tZSgoeSkgPT4gaW5pU2V0Lmhhcyh5KSkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogJ1VtIGFubyBuw6NvIHBvZGUgcGVydGVuY2VyIGFvcyBkb2lzIHBlcsOtb2RvcyBhbyBtZXNtbyB0ZW1wby4nXG4gICAgfVxuICB9XG5cbiAgY29uc3QgbWF4SW5pY2lhbCA9IGluaVtpbmkubGVuZ3RoIC0gMV1cbiAgY29uc3QgbWluRmluYWwgPSBmaW5bMF1cbiAgaWYgKG1heEluaWNpYWwgPj0gbWluRmluYWwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogJ08gcGVyw61vZG8gZmluYWwgZGV2ZSBzZXIgcG9zdGVyaW9yIGFvIHBlcsOtb2RvIGluaWNpYWwuJ1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHZhbHVlSW5pY2lhbCA9IHN1bVZhbHVlc0ZvclllYXJzKHNlcmllcywgaW5pKVxuICBjb25zdCB2YWx1ZUZpbmFsID0gc3VtVmFsdWVzRm9yWWVhcnMoc2VyaWVzLCBmaW4pXG5cbiAgaWYgKHZhbHVlSW5pY2lhbCA9PSBudWxsIHx8IHZhbHVlRmluYWwgPT0gbnVsbCkge1xuICAgIHJldHVybiB7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBtZXNzYWdlOlxuICAgICAgICAnVW0gb3UgbWFpcyBhbm9zIHNlbGVjaW9uYWRvcyBuw6NvIHBvc3N1ZW0gZGFkbyBwYXJhIGVzdGUgcmVjb3J0ZS4nXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcGN0ID0gY2FsY1BlcmNlbnRWYXJpYXRpb24odmFsdWVJbmljaWFsLCB2YWx1ZUZpbmFsKVxuICBpZiAocGN0ID09IG51bGwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTpcbiAgICAgICAgJ0Egc29tYSBkbyBwZXLDrW9kbyBpbmljaWFsIMOpIHplcm87IG7Do28gw6kgcG9zc8OtdmVsIGNhbGN1bGFyIGEgdmFyaWHDp8OjbyBwZXJjZW50dWFsLidcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG9rOiB0cnVlLFxuICAgIGRhdGE6IHtcbiAgICAgIHBjdCxcbiAgICAgIHZhbHVlSW5pY2lhbCxcbiAgICAgIHZhbHVlRmluYWwsXG4gICAgICB5ZWFyc0luaWNpYWw6IGluaSxcbiAgICAgIHllYXJzRmluYWw6IGZpblxuICAgIH1cbiAgfVxufVxuXG4vKiogQ29tcGFyYcOnw6NvIGVudHJlIGRvaXMgYW5vcyDDum5pY29zIChhdGFsaG8gcGFyYSBwZXLDrW9kb3MgZGUgdW0gYW5vKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlVmFyaWF0aW9uIChcbiAgc2VyaWVzOiBZZWFyVmFsdWVSb3dbXSxcbiAgYW5vSW5pY2lhbDogbnVtYmVyLFxuICBhbm9GaW5hbDogbnVtYmVyXG4pOiBQZXJpb2RWYXJpYXRpb25PdXRjb21lIHtcbiAgcmV0dXJuIGNvbXB1dGVQZXJpb2RWYXJpYXRpb24oc2VyaWVzLCBbYW5vSW5pY2lhbF0sIFthbm9GaW5hbF0pXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHtcclxuICBSZWFjdCxcclxuICBqc3gsXHJcbiAgdHlwZSBBbGxXaWRnZXRQcm9wcyxcclxuICBEYXRhU291cmNlQ29tcG9uZW50XHJcbn0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBMb2FkaW5nLCBMYWJlbCwgQnV0dG9uIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHR5cGUgeyBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcclxuaW1wb3J0IHtcclxuICBMQUJFTF9QRVJJT0RPX0ZJTkFMLFxyXG4gIExBQkVMX1BFUklPRE9fSU5JQ0lBTCxcclxuICBISU5UX1BFUklPRF9SVUxFUyxcclxuICBNU0dfTk9UX0NPTkZJR1VSRUQsXHJcbiAgTVNHX05PX0RBVEEsXHJcbiAgUExBQ0VIT0xERVJfUEVSSU9ET19GSU5BTCxcclxuICBQTEFDRUhPTERFUl9QRVJJT0RPX0lOSUNJQUxcclxufSBmcm9tICcuLi9jb25zdGFudHMnXHJcbmltcG9ydCB7IFZhcmlhdGlvblJlc3VsdFBhbmVsIH0gZnJvbSAnLi9jb21wb25lbnRzL3ZhcmlhdGlvbi1yZXN1bHQnXHJcbmltcG9ydCB7IHVzZVByb2Rlc1NlcmllcyB9IGZyb20gJy4vaG9va3MvdXNlLXByb2Rlcy1zZXJpZXMnXHJcbmltcG9ydCB7IHVzZVBlcmlvZFNlbGVjdGlvbiB9IGZyb20gJy4vaG9va3MvdXNlLXBlcmlvZC1zZWxlY3Rpb24nXHJcbmltcG9ydCB7IHdpZGdldFN0eWxlcyB9IGZyb20gJy4vc3R5bGVzJ1xyXG5pbXBvcnQgeyBZZWFyUGVyaW9kUGlja2VyIH0gZnJvbSAnLi95ZWFyLXBlcmlvZC1waWNrZXInXHJcblxyXG5jb25zdCBXaWRnZXQgPSAocHJvcHM6IEFsbFdpZGdldFByb3BzPElNQ29uZmlnPikgPT4ge1xyXG4gIGNvbnN0IHVzZURzID0gcHJvcHMudXNlRGF0YVNvdXJjZXM/LlswXVxyXG4gIGNvbnN0IHllYXJGaWVsZCA9IHByb3BzLmNvbmZpZz8ueWVhckZpZWxkXHJcbiAgY29uc3QgcmVjb3J0ZUZpZWxkID0gcHJvcHMuY29uZmlnPy5yZWNvcnRlRmllbGRcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgc2VyaWVzLFxyXG4gICAgbG9hZGluZyxcclxuICAgIGVycm9yLFxyXG4gICAgaGFuZGxlRGF0YVNvdXJjZVJlYWR5LFxyXG4gICAgYXBwbHlTY2hlbWEsXHJcbiAgICBzZXREc1N0YXR1cyxcclxuICAgIHdhaXRpbmdGb3JMYXllclxyXG4gIH0gPSB1c2VQcm9kZXNTZXJpZXMoeyByZWNvcnRlRmllbGQsIHllYXJGaWVsZCB9KVxyXG5cclxuICBjb25zdCBhdmFpbGFibGVZZWFycyA9IFJlYWN0LnVzZU1lbW8oXHJcbiAgICAoKSA9PiBzZXJpZXMubWFwKChyKSA9PiByLnllYXIpLFxyXG4gICAgW3Nlcmllc11cclxuICApXHJcblxyXG4gIGNvbnN0IHtcclxuICAgIHBlcmlvZG9JbmljaWFsLFxyXG4gICAgcGVyaW9kb0ZpbmFsLFxyXG4gICAgeWVhcnNGb3JJbmljaWFsLFxyXG4gICAgeWVhcnNGb3JGaW5hbCxcclxuICAgIGhpbnRJbmljaWFsLFxyXG4gICAgaGludEZpbmFsLFxyXG4gICAgdmFyaWF0aW9uLFxyXG4gICAgaGFzUGVyaW9kU2VsZWN0aW9uLFxyXG4gICAgY2xlYXJQZXJpb2RTZWxlY3Rpb24sXHJcbiAgICBoYW5kbGVQZXJpb2RvSW5pY2lhbENoYW5nZSxcclxuICAgIGhhbmRsZVBlcmlvZG9GaW5hbENoYW5nZSxcclxuICAgIHJlamVjdFBlcmlvZG9JbmljaWFsLFxyXG4gICAgcmVqZWN0UGVyaW9kb0ZpbmFsXHJcbiAgfSA9IHVzZVBlcmlvZFNlbGVjdGlvbihzZXJpZXMsIGF2YWlsYWJsZVllYXJzLCByZWNvcnRlRmllbGQpXHJcblxyXG4gIGNvbnN0IGlzQ29uZmlndXJlZCA9IEJvb2xlYW4odXNlRHMgJiYgcmVjb3J0ZUZpZWxkKVxyXG4gIGNvbnN0IHNob3dGb3JtID1cclxuICAgIGlzQ29uZmlndXJlZCAmJiAhbG9hZGluZyAmJiAhd2FpdGluZ0ZvckxheWVyICYmICFlcnJvciAmJiBzZXJpZXMubGVuZ3RoID4gMFxyXG5cclxuICBpZiAoIWlzQ29uZmlndXJlZCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29tcGFyYWRvci1wcm9kZXMgamltdS13aWRnZXRcIiBjc3M9e3dpZGdldFN0eWxlc30+XHJcbiAgICAgICAgPHA+e01TR19OT1RfQ09ORklHVVJFRH08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbXBhcmFkb3ItcHJvZGVzIGppbXUtd2lkZ2V0XCIgY3NzPXt3aWRnZXRTdHlsZXN9PlxyXG4gICAgICA8RGF0YVNvdXJjZUNvbXBvbmVudFxyXG4gICAgICAgIHVzZURhdGFTb3VyY2U9e3VzZURzfVxyXG4gICAgICAgIHdpZGdldElkPXtwcm9wcy5pZH1cclxuICAgICAgICBvbkRhdGFTb3VyY2VDcmVhdGVkPXtoYW5kbGVEYXRhU291cmNlUmVhZHl9XHJcbiAgICAgICAgb25EYXRhU291cmNlU2NoZW1hQ2hhbmdlPXsoc2NoZW1hKSA9PiB7XHJcbiAgICAgICAgICBhcHBseVNjaGVtYShzY2hlbWEpXHJcbiAgICAgICAgfX1cclxuICAgICAgICBvbkRhdGFTb3VyY2VJbmZvQ2hhbmdlPXsoaW5mbykgPT4gc2V0RHNTdGF0dXMoaW5mbz8uc3RhdHVzKX1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIHsobG9hZGluZyB8fCB3YWl0aW5nRm9yTGF5ZXIpICYmIDxMb2FkaW5nIC8+fVxyXG5cclxuICAgICAge2Vycm9yICYmIDxwIGNsYXNzTmFtZT1cImNvbXBhcmFkb3ItZXJyb3JcIj57ZXJyb3J9PC9wPn1cclxuXHJcbiAgICAgIHshbG9hZGluZyAmJiAhd2FpdGluZ0ZvckxheWVyICYmICFlcnJvciAmJiBzZXJpZXMubGVuZ3RoID09PSAwICYmIChcclxuICAgICAgICA8cD57TVNHX05PX0RBVEF9PC9wPlxyXG4gICAgICApfVxyXG5cclxuICAgICAge3Nob3dGb3JtICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhcmFkb3ItZm9ybVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYXJhZG9yLWZpZWxkLXJvd1wiPlxyXG4gICAgICAgICAgICA8TGFiZWw+e0xBQkVMX1BFUklPRE9fSU5JQ0lBTH08L0xhYmVsPlxyXG4gICAgICAgICAgICA8WWVhclBlcmlvZFBpY2tlclxyXG4gICAgICAgICAgICAgIGF2YWlsYWJsZVllYXJzPXt5ZWFyc0ZvckluaWNpYWx9XHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWRZZWFycz17cGVyaW9kb0luaWNpYWx9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1BMQUNFSE9MREVSX1BFUklPRE9fSU5JQ0lBTH1cclxuICAgICAgICAgICAgICBoaW50PXtoaW50SW5pY2lhbH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUGVyaW9kb0luaWNpYWxDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgb25SZWplY3RlZFNlbGVjdGlvbj17cmVqZWN0UGVyaW9kb0luaWNpYWx9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhcmFkb3ItZmllbGQtcm93XCI+XHJcbiAgICAgICAgICAgIDxMYWJlbD57TEFCRUxfUEVSSU9ET19GSU5BTH08L0xhYmVsPlxyXG4gICAgICAgICAgICA8WWVhclBlcmlvZFBpY2tlclxyXG4gICAgICAgICAgICAgIGF2YWlsYWJsZVllYXJzPXt5ZWFyc0ZvckZpbmFsfVxyXG4gICAgICAgICAgICAgIHNlbGVjdGVkWWVhcnM9e3BlcmlvZG9GaW5hbH1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17UExBQ0VIT0xERVJfUEVSSU9ET19GSU5BTH1cclxuICAgICAgICAgICAgICBoaW50PXtoaW50RmluYWx9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVBlcmlvZG9GaW5hbENoYW5nZX1cclxuICAgICAgICAgICAgICBvblJlamVjdGVkU2VsZWN0aW9uPXtyZWplY3RQZXJpb2RvRmluYWx9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFyYWRvci1oaW50XCI+e0hJTlRfUEVSSU9EX1JVTEVTfTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYXJhZG9yLWFjdGlvbnNcIj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29tcGFyYWRvci1idG4tbGltcGFyXCJcclxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWhhc1BlcmlvZFNlbGVjdGlvbn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtjbGVhclBlcmlvZFNlbGVjdGlvbn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIExpbXBhclxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHt2YXJpYXRpb24gIT0gbnVsbCAmJiB2YXJpYXRpb24ub2sgPT09IGZhbHNlICYmIChcclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29tcGFyYWRvci1lcnJvciBjb21wYXJhZG9yLWVycm9yLS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgIHt2YXJpYXRpb24ubWVzc2FnZX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICB7dmFyaWF0aW9uICE9IG51bGwgJiYgdmFyaWF0aW9uLm9rID09PSB0cnVlICYmIChcclxuICAgICAgICAgICAgPFZhcmlhdGlvblJlc3VsdFBhbmVsIGRhdGE9e3ZhcmlhdGlvbi5kYXRhfSAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0XHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=