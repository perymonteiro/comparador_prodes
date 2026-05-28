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
        if (!(0,_utils_data_source__WEBPACK_IMPORTED_MODULE_2__.isProdesDataReady)(dsStatus))
            return;
        setLoading(true);
        setError(null);
        const fetchOpts = {
            yearFieldJimu: effectiveYearField,
            recorteFieldJimu: recorteField,
            fields: fieldList,
            widgetId
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
    }), [dsRef, dsStatus, effectiveYearField, fieldList, recorteField, widgetId]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        if (!recorteField || !effectiveYearField || !dsRef)
            return;
        if (!(0,_utils_data_source__WEBPACK_IMPORTED_MODULE_2__.isProdesDataReady)(dsStatus))
            return;
        loadSeries();
    }, [recorteField, effectiveYearField, dsRef, dsStatus, fieldList, loadSeries]);
    const waitingForLayer = !dsRef ||
        dsStatus === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.Loading ||
        dsStatus === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.NotReady ||
        dsStatus === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.Unloaded;
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
            const { queryFeatures } = yield __webpack_require__.e(/*! import() */ "vendors-node_modules_esri_arcgis-rest-feature-service_dist_esm_index_js").then(__webpack_require__.bind(__webpack_require__, /*! @esri/arcgis-rest-feature-service */ "./node_modules/@esri/arcgis-rest-feature-service/dist/esm/index.js"));
            const res = yield queryFeatures({
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames not based on template
/******/ 			if (chunkId === "vendors-node_modules_esri_arcgis-rest-feature-service_dist_esm_index_js") return "widgets/chunks/vendors-node_modules_esri_arcgis-rest-feature-service_dist_esm_index_js.js";
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "exb-client:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"widgets/comparador_prodes/dist/runtime/widget": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
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
    const { series, loading, error, handleDataSourceReady, applySchema, setDsStatus, waitingForLayer } = (0,_hooks_use_prodes_series__WEBPACK_IMPORTED_MODULE_4__.useProdesSeries)({ recorteField, yearField, widgetId: props.id });
    const availableYears = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => series.map((r) => r.year), [series]);
    const { periodoInicial, periodoFinal, yearsForInicial, yearsForFinal, hintInicial, hintFinal, variation, hasPeriodSelection, clearPeriodSelection, handlePeriodoInicialChange, handlePeriodoFinalChange, rejectPeriodoInicial, rejectPeriodoFinal } = (0,_hooks_use_period_selection__WEBPACK_IMPORTED_MODULE_5__.usePeriodSelection)(series, availableYears, recorteField);
    const isConfigured = Boolean(useDs && recorteField);
    const showForm = isConfigured && !loading && !waitingForLayer && !error && series.length > 0;
    if (!isConfigured) {
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-comparador-prodes jimu-widget", css: _styles__WEBPACK_IMPORTED_MODULE_6__.widgetStyles },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", null, _constants__WEBPACK_IMPORTED_MODULE_2__.MSG_NOT_CONFIGURED)));
    }
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-comparador-prodes jimu-widget", css: _styles__WEBPACK_IMPORTED_MODULE_6__.widgetStyles },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceComponent, { useDataSource: useDs, widgetId: props.id, query: _constants__WEBPACK_IMPORTED_MODULE_2__.PRODES_TABLE_QUERY, queryScope: jimu_core__WEBPACK_IMPORTED_MODULE_0__.QueryScope.InAllData, queryAll: true, onDataSourceCreated: handleDataSourceReady, onDataSourceSchemaChange: (schema) => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7QUFFOUIsTUFBTSxTQUFTLEdBQUcsS0FBSztBQUU5Qix5RUFBeUU7QUFDbEUsTUFBTSxrQkFBa0IsR0FBRyxvREFBUyxDQUFDO0lBQzFDLEtBQUssRUFBRSxLQUFLO0lBQ1osU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ2hCLGNBQWMsRUFBRSxLQUFLO0lBQ3JCLFFBQVEsRUFBRSxJQUFJO0NBQ2YsQ0FBQztBQUVLLE1BQU0scUJBQXFCLEdBQUcsZ0NBQWdDO0FBQzlELE1BQU0sbUJBQW1CLEdBQUcsNEJBQTRCO0FBRXhELE1BQU0sa0JBQWtCLEdBQzdCLHNFQUFzRTtBQUVqRSxNQUFNLFdBQVcsR0FBRyw2Q0FBNkM7QUFFakUsTUFBTSxlQUFlLEdBQUcsK0NBQStDO0FBRXZFLE1BQU0sa0JBQWtCLEdBQzdCLHVGQUF1RjtJQUN2Rix5R0FBeUc7SUFDekcsc0RBQXNEO0FBRWpELE1BQU0sZ0JBQWdCLEdBQUcsOENBQThDO0FBRXZFLE1BQU0saUJBQWlCLEdBQzVCLCtGQUErRjtBQUUxRixNQUFNLDJCQUEyQixHQUFHLDBDQUEwQztBQUM5RSxNQUFNLHlCQUF5QixHQUFHLHdDQUF3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDakYsZUFBZTtBQUN1QjtBQUtMO0FBQ2dDO0FBTTFELE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBd0IsRUFBRSxFQUFFO0lBQ3JFLE1BQU0sSUFBSSxHQUFHLCtEQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7SUFFdkMsT0FBTyxDQUNMLHdEQUFLLFNBQVMsRUFBQyxtQkFBbUI7UUFDaEMsd0RBQUssU0FBUyxFQUFDLHlCQUF5Qjs7WUFFckMsMkVBQXNCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQzs7WUFB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ZixjQUFjLEVBQUUsYUFBYSxFQUM3QixhQUFhLEVBQUUsWUFBWSxFQUMzQixXQUFXLEVBQUUsaUVBQXlCLEVBQ3RDLElBQUksRUFBRSxTQUFTLEVBQ2YsUUFBUSxFQUFFLHdCQUF3QixFQUNsQyxtQkFBbUIsRUFBRSxrQkFBa0IsR0FDdkM7Z0JBQ0Ysd0RBQUssU0FBUyxFQUFDLGlCQUFpQixJQUFFLHlEQUFpQixDQUFPLENBQ3REO1lBRU4sd0RBQUssU0FBUyxFQUFDLG9CQUFvQjtnQkFDakMsK0NBQUMsMkNBQU0sSUFDTCxJQUFJLEVBQUMsSUFBSSxFQUNULElBQUksRUFBQyxXQUFXLEVBQ2hCLFNBQVMsRUFBQyx1QkFBdUIsRUFDakMsUUFBUSxFQUFFLENBQUMsa0JBQWtCLEVBQzdCLE9BQU8sRUFBRSxvQkFBb0IsYUFHdEIsQ0FDTDtZQUVMLFNBQVMsSUFBSSxJQUFJLElBQUksU0FBUyxDQUFDLEVBQUUsS0FBSyxLQUFLLElBQUksQ0FDOUMsc0RBQUcsU0FBUyxFQUFDLDBDQUEwQyxJQUNwRCxTQUFTLENBQUMsT0FBTyxDQUNoQixDQUNMO1lBRUEsU0FBUyxJQUFJLElBQUksSUFBSSxTQUFTLENBQUMsRUFBRSxLQUFLLElBQUksSUFBSSxDQUM3QywrQ0FBQyw4RUFBb0IsSUFBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksR0FBSSxDQUMvQyxDQUNHLENBQ1AsQ0FDRyxDQUNQO0FBQ0gsQ0FBQztBQUVELGlFQUFlLE1BQU07QUFFYixTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9zcmMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9zcmMvcnVudGltZS9jb21wb25lbnRzL3ZhcmlhdGlvbi1yZXN1bHQudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9zcmMvcnVudGltZS9ob29rcy91c2UtcGVyaW9kLXNlbGVjdGlvbi50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY29tcGFyYWRvcl9wcm9kZXMvc3JjL3J1bnRpbWUvaG9va3MvdXNlLXByb2Rlcy1zZXJpZXMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2NvbXBhcmFkb3JfcHJvZGVzL3NyYy9ydW50aW1lL3N0eWxlcy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY29tcGFyYWRvcl9wcm9kZXMvc3JjL3J1bnRpbWUveWVhci1wZXJpb2QtcGlja2VyLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY29tcGFyYWRvcl9wcm9kZXMvc3JjL3V0aWxzL2RhdGEtc291cmNlLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9zcmMvdXRpbHMvZm9ybWF0LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9zcmMvdXRpbHMvcHJvZGVzLXRhYmxlLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9lbnN1cmUgY2h1bmsiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2xvYWQgc2NyaXB0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEltbXV0YWJsZSB9IGZyb20gJ2ppbXUtY29yZSdcblxuZXhwb3J0IGNvbnN0IEFSRUFfVU5JVCA9ICdrbcKyJ1xuXG4vKiogQ29uc3VsdGEgcGFkcsOjbzogdG9kb3Mgb3MgcmVnaXN0cm9zIGRhIHRhYmVsYSBQUk9ERVMgKHBhZHLDo28gRVhCKS4gKi9cbmV4cG9ydCBjb25zdCBQUk9ERVNfVEFCTEVfUVVFUlkgPSBJbW11dGFibGUoe1xuICB3aGVyZTogJzE9MScsXG4gIG91dEZpZWxkczogWycqJ10sXG4gIHJldHVybkdlb21ldHJ5OiBmYWxzZSxcbiAgcGFnZVNpemU6IDIwMDBcbn0pXG5cbmV4cG9ydCBjb25zdCBMQUJFTF9QRVJJT0RPX0lOSUNJQUwgPSAnQW5vIGluaWNpYWwgb3UgcGVyw61vZG8gaW5pY2lhbCdcbmV4cG9ydCBjb25zdCBMQUJFTF9QRVJJT0RPX0ZJTkFMID0gJ0FubyBmaW5hbCBvdSBwZXLDrW9kbyBmaW5hbCdcblxuZXhwb3J0IGNvbnN0IE1TR19OT1RfQ09ORklHVVJFRCA9XG4gICdFc3RhIGZlcnJhbWVudGEgYWluZGEgbsOjbyBmb2kgY29uZmlndXJhZGEgcGVsbyBhdXRvciBkYSBleHBlcmnDqm5jaWEuJ1xuXG5leHBvcnQgY29uc3QgTVNHX05PX0RBVEEgPSAnTsOjbyBow6EgZGFkb3MgZGlzcG9uw612ZWlzIHBhcmEgZXN0ZSByZWNvcnRlLidcblxuZXhwb3J0IGNvbnN0IE1TR19MT0FEX0ZBSUxFRCA9ICdOw6NvIGZvaSBwb3Nzw612ZWwgY2FycmVnYXIgb3MgZGFkb3MgZGEgY2FtYWRhLidcblxuZXhwb3J0IGNvbnN0IE1TR19FWFRSQUNUX0ZBSUxFRCA9XG4gICdSZWdpc3Ryb3MgZW5jb250cmFkb3MsIG1hcyBuw6NvIGZvaSBwb3Nzw612ZWwgZXh0cmFpciBhbm8gZSB2YWxvcmVzIHBhcmEgZXN0ZSByZWNvcnRlLiAnICtcbiAgJ0NvbmZpcm1lIHNlIGEgdGFiZWxhIHRlbSB1bWEgbGluaGEgcG9yIGFubyAoY29sdW5hIFwiYW5vXCIpIG91IHVtYSBsaW5oYSBwb3IgcmVjb3J0ZSAoY29sdW5hcyBjb20gYW5vcyksICcgK1xuICAnZSBzZSBhIGNvbHVuYSBkbyByZWNvcnRlIHBvc3N1aSB2YWxvcmVzIHByZWVuY2hpZG9zLidcblxuZXhwb3J0IGNvbnN0IEhJTlRfQ09OU0VDVVRJVk8gPSAnT3MgYW5vcyBzZWxlY2lvbmFkb3MgZGV2ZW0gc2VyIGNvbnNlY3V0aXZvcy4nXG5cbmV4cG9ydCBjb25zdCBISU5UX1BFUklPRF9SVUxFUyA9XG4gICdPcyBkb2lzIHBlcsOtb2RvcyBkZXZlbSB0ZXIgYSBtZXNtYSBxdWFudGlkYWRlIGRlIGFub3MgY29uc2VjdXRpdm9zLCBzZW0gcmVwZXRpw6fDo28gZW50cmUgZWxlcy4nXG5cbmV4cG9ydCBjb25zdCBQTEFDRUhPTERFUl9QRVJJT0RPX0lOSUNJQUwgPSAnU2VsZWNpb25lIG8ocykgYW5vKHMpIGRvIHBlcsOtb2RvIGluaWNpYWwnXG5leHBvcnQgY29uc3QgUExBQ0VIT0xERVJfUEVSSU9ET19GSU5BTCA9ICdTZWxlY2lvbmUgbyhzKSBhbm8ocykgZG8gcGVyw61vZG8gZmluYWwnXG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IFJlYWN0LCBqc3ggfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQge1xuICBmb3JtYXRQZXJjZW50VmFyaWF0aW9uLFxuICBmb3JtYXRQZXJpb2RSYW5nZUxhYmVsLFxuICB0eXBlIFZhcmlhdGlvblJlc3VsdFxufSBmcm9tICcuLi8uLi91dGlscy9wcm9kZXMtdGFibGUnXG5pbXBvcnQgeyBmb3JtYXRBcmVhLCBnZXRWYXJpYXRpb25Ub25lIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0J1xuXG5pbnRlcmZhY2UgVmFyaWF0aW9uUmVzdWx0UHJvcHMge1xuICBkYXRhOiBWYXJpYXRpb25SZXN1bHRcbn1cblxuZXhwb3J0IGNvbnN0IFZhcmlhdGlvblJlc3VsdFBhbmVsID0gKHsgZGF0YSB9OiBWYXJpYXRpb25SZXN1bHRQcm9wcykgPT4ge1xuICBjb25zdCB0b25lID0gZ2V0VmFyaWF0aW9uVG9uZShkYXRhLnBjdClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFyYWRvci1yZXN1bHRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFyYWRvci1yZXN1bHQtdGl0bGVcIj5cbiAgICAgICAgVmFyaWHDp8OjbyBwZXJjZW50dWFsIChcbiAgICAgICAge2Zvcm1hdFBlcmlvZFJhbmdlTGFiZWwoZGF0YS55ZWFyc0luaWNpYWwpfSDihpJ7JyAnfVxuICAgICAgICB7Zm9ybWF0UGVyaW9kUmFuZ2VMYWJlbChkYXRhLnllYXJzRmluYWwpfSlcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb21wYXJhZG9yLXJlc3VsdC12YWx1ZSBjb21wYXJhZG9yLXJlc3VsdC12YWx1ZS0tJHt0b25lfWB9PlxuICAgICAgICB7Zm9ybWF0UGVyY2VudFZhcmlhdGlvbihkYXRhLnBjdCl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFyYWRvci1yZXN1bHQtZGV0YWlsXCI+XG4gICAgICAgIHtmb3JtYXRBcmVhKGRhdGEudmFsdWVJbmljaWFsKX0gbm8gcGVyw61vZG8gaW5pY2lhbCDihpJ7JyAnfVxuICAgICAgICB7Zm9ybWF0QXJlYShkYXRhLnZhbHVlRmluYWwpfSBubyBwZXLDrW9kbyBmaW5hbFxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsImltcG9ydCB7IFJlYWN0IH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHtcbiAgY29tcHV0ZVBlcmlvZFZhcmlhdGlvbixcbiAgZ2V0WWVhcnNBbGxvd2VkRm9yRmluYWwsXG4gIGdldFllYXJzQWxsb3dlZEZvckluaWNpYWwsXG4gIHR5cGUgWWVhclZhbHVlUm93XG59IGZyb20gJy4uLy4uL3V0aWxzL3Byb2Rlcy10YWJsZSdcbmltcG9ydCB7IEhJTlRfQ09OU0VDVVRJVk8gfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VQZXJpb2RTZWxlY3Rpb24gKFxuICBzZXJpZXM6IFllYXJWYWx1ZVJvd1tdLFxuICBhdmFpbGFibGVZZWFyczogbnVtYmVyW10sXG4gIHJlY29ydGVGaWVsZD86IHN0cmluZ1xuKSB7XG4gIGNvbnN0IFtwZXJpb2RvSW5pY2lhbCwgc2V0UGVyaW9kb0luaWNpYWxdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyW10+KFtdKVxuICBjb25zdCBbcGVyaW9kb0ZpbmFsLCBzZXRQZXJpb2RvRmluYWxdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyW10+KFtdKVxuICBjb25zdCBbaGludEluaWNpYWwsIHNldEhpbnRJbmljaWFsXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFtoaW50RmluYWwsIHNldEhpbnRGaW5hbF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuXG4gIGNvbnN0IHllYXJzRm9ySW5pY2lhbCA9IFJlYWN0LnVzZU1lbW8oXG4gICAgKCkgPT4gZ2V0WWVhcnNBbGxvd2VkRm9ySW5pY2lhbChhdmFpbGFibGVZZWFycywgcGVyaW9kb0ZpbmFsKSxcbiAgICBbYXZhaWxhYmxlWWVhcnMsIHBlcmlvZG9GaW5hbF1cbiAgKVxuXG4gIGNvbnN0IHllYXJzRm9yRmluYWwgPSBSZWFjdC51c2VNZW1vKFxuICAgICgpID0+IGdldFllYXJzQWxsb3dlZEZvckZpbmFsKGF2YWlsYWJsZVllYXJzLCBwZXJpb2RvSW5pY2lhbCksXG4gICAgW2F2YWlsYWJsZVllYXJzLCBwZXJpb2RvSW5pY2lhbF1cbiAgKVxuXG4gIGNvbnN0IHZhcmlhdGlvbiA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGlmICghcGVyaW9kb0luaWNpYWwubGVuZ3RoIHx8ICFwZXJpb2RvRmluYWwubGVuZ3RoKSByZXR1cm4gbnVsbFxuICAgIHJldHVybiBjb21wdXRlUGVyaW9kVmFyaWF0aW9uKHNlcmllcywgcGVyaW9kb0luaWNpYWwsIHBlcmlvZG9GaW5hbClcbiAgfSwgW3BlcmlvZG9JbmljaWFsLCBwZXJpb2RvRmluYWwsIHNlcmllc10pXG5cbiAgY29uc3QgaGFzUGVyaW9kU2VsZWN0aW9uID1cbiAgICBwZXJpb2RvSW5pY2lhbC5sZW5ndGggPiAwIHx8IHBlcmlvZG9GaW5hbC5sZW5ndGggPiAwXG5cbiAgY29uc3QgY2xlYXJQZXJpb2RTZWxlY3Rpb24gPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0UGVyaW9kb0luaWNpYWwoW10pXG4gICAgc2V0UGVyaW9kb0ZpbmFsKFtdKVxuICAgIHNldEhpbnRJbmljaWFsKG51bGwpXG4gICAgc2V0SGludEZpbmFsKG51bGwpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGhhbmRsZVBlcmlvZG9JbmljaWFsQ2hhbmdlID0gUmVhY3QudXNlQ2FsbGJhY2soKHllYXJzOiBudW1iZXJbXSkgPT4ge1xuICAgIHNldFBlcmlvZG9JbmljaWFsKHllYXJzKVxuICAgIHNldEhpbnRJbmljaWFsKG51bGwpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGhhbmRsZVBlcmlvZG9GaW5hbENoYW5nZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCh5ZWFyczogbnVtYmVyW10pID0+IHtcbiAgICBzZXRQZXJpb2RvRmluYWwoeWVhcnMpXG4gICAgc2V0SGludEZpbmFsKG51bGwpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IHJlamVjdFBlcmlvZG9JbmljaWFsID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldEhpbnRJbmljaWFsKEhJTlRfQ09OU0VDVVRJVk8pXG4gIH0sIFtdKVxuXG4gIGNvbnN0IHJlamVjdFBlcmlvZG9GaW5hbCA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRIaW50RmluYWwoSElOVF9DT05TRUNVVElWTylcbiAgfSwgW10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRQZXJpb2RvSW5pY2lhbChbXSlcbiAgICBzZXRQZXJpb2RvRmluYWwoW10pXG4gICAgc2V0SGludEluaWNpYWwobnVsbClcbiAgICBzZXRIaW50RmluYWwobnVsbClcbiAgfSwgW3JlY29ydGVGaWVsZF0pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXBlcmlvZG9JbmljaWFsLmxlbmd0aCB8fCAhcGVyaW9kb0ZpbmFsLmxlbmd0aCkgcmV0dXJuXG4gICAgY29uc3QgYWxsb3dlZCA9IG5ldyBTZXQoZ2V0WWVhcnNBbGxvd2VkRm9yRmluYWwoYXZhaWxhYmxlWWVhcnMsIHBlcmlvZG9JbmljaWFsKSlcbiAgICBjb25zdCBmaWx0ZXJlZCA9IHBlcmlvZG9GaW5hbC5maWx0ZXIoKHkpID0+IGFsbG93ZWQuaGFzKHkpKVxuICAgIGlmIChmaWx0ZXJlZC5sZW5ndGggIT09IHBlcmlvZG9GaW5hbC5sZW5ndGgpIHtcbiAgICAgIHNldFBlcmlvZG9GaW5hbChmaWx0ZXJlZClcbiAgICB9XG4gIH0sIFtwZXJpb2RvSW5pY2lhbCwgcGVyaW9kb0ZpbmFsLCBhdmFpbGFibGVZZWFyc10pXG5cbiAgcmV0dXJuIHtcbiAgICBwZXJpb2RvSW5pY2lhbCxcbiAgICBwZXJpb2RvRmluYWwsXG4gICAgeWVhcnNGb3JJbmljaWFsLFxuICAgIHllYXJzRm9yRmluYWwsXG4gICAgaGludEluaWNpYWwsXG4gICAgaGludEZpbmFsLFxuICAgIHZhcmlhdGlvbixcbiAgICBoYXNQZXJpb2RTZWxlY3Rpb24sXG4gICAgY2xlYXJQZXJpb2RTZWxlY3Rpb24sXG4gICAgaGFuZGxlUGVyaW9kb0luaWNpYWxDaGFuZ2UsXG4gICAgaGFuZGxlUGVyaW9kb0ZpbmFsQ2hhbmdlLFxuICAgIHJlamVjdFBlcmlvZG9JbmljaWFsLFxuICAgIHJlamVjdFBlcmlvZG9GaW5hbFxuICB9XG59XG4iLCJpbXBvcnQge1xuICBSZWFjdCxcbiAgdHlwZSBEYXRhU291cmNlLFxuICB0eXBlIElNRGF0YVNvdXJjZVNjaGVtYSxcbiAgRGF0YVNvdXJjZVN0YXR1c1xufSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQge1xuICBidWlsZFllYXJTZXJpZXNGcm9tQXR0cmlidXRlUm93cyxcbiAgZGV0ZWN0WWVhckZpZWxkLFxuICBmZXRjaFByb2Rlc0F0dHJpYnV0ZVJvd3MsXG4gIHNjaGVtYVRvRmllbGRMaXN0LFxuICB0eXBlIFllYXJWYWx1ZVJvd1xufSBmcm9tICcuLi8uLi91dGlscy9wcm9kZXMtdGFibGUnXG5pbXBvcnQge1xuICBlbnN1cmVEYXRhU291cmNlU2NoZW1hLFxuICBnZXRRdWVyeWFibGVEYXRhU291cmNlLFxuICBpc1Byb2Rlc0RhdGFSZWFkeVxufSBmcm9tICcuLi8uLi91dGlscy9kYXRhLXNvdXJjZSdcbmltcG9ydCB7XG4gIE1TR19FWFRSQUNUX0ZBSUxFRCxcbiAgTVNHX0xPQURfRkFJTEVEXG59IGZyb20gJy4uLy4uL2NvbnN0YW50cydcblxuZXhwb3J0IGludGVyZmFjZSBVc2VQcm9kZXNTZXJpZXNQYXJhbXMge1xuICByZWNvcnRlRmllbGQ/OiBzdHJpbmdcbiAgeWVhckZpZWxkPzogc3RyaW5nXG4gIHdpZGdldElkPzogc3RyaW5nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VQcm9kZXNTZXJpZXMgKHtcbiAgcmVjb3J0ZUZpZWxkLFxuICB5ZWFyRmllbGQsXG4gIHdpZGdldElkXG59OiBVc2VQcm9kZXNTZXJpZXNQYXJhbXMpIHtcbiAgY29uc3QgW2RzUmVmLCBzZXREc1JlZl0gPSBSZWFjdC51c2VTdGF0ZTxEYXRhU291cmNlIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2RzU3RhdHVzLCBzZXREc1N0YXR1c10gPSBSZWFjdC51c2VTdGF0ZTxEYXRhU291cmNlU3RhdHVzIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpXG4gIGNvbnN0IFtmaWVsZExpc3QsIHNldEZpZWxkTGlzdF0gPSBSZWFjdC51c2VTdGF0ZShcbiAgICBbXSBhcyBSZXR1cm5UeXBlPHR5cGVvZiBzY2hlbWFUb0ZpZWxkTGlzdD5cbiAgKVxuICBjb25zdCBbc2VyaWVzLCBzZXRTZXJpZXNdID0gUmVhY3QudXNlU3RhdGU8WWVhclZhbHVlUm93W10+KFtdKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuXG4gIGNvbnN0IGVmZmVjdGl2ZVllYXJGaWVsZCA9IHllYXJGaWVsZCA/PyBkZXRlY3RZZWFyRmllbGQoZmllbGRMaXN0KVxuXG4gIGNvbnN0IGFwcGx5U2NoZW1hID0gUmVhY3QudXNlQ2FsbGJhY2soKHNjaGVtYTogSU1EYXRhU291cmNlU2NoZW1hKSA9PiB7XG4gICAgc2V0RmllbGRMaXN0KHNjaGVtYVRvRmllbGRMaXN0KHNjaGVtYSkpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGhhbmRsZURhdGFTb3VyY2VSZWFkeSA9IFJlYWN0LnVzZUNhbGxiYWNrKChkczogRGF0YVNvdXJjZSkgPT4ge1xuICAgIHNldERzUmVmKGRzKVxuICAgIHZvaWQgZW5zdXJlRGF0YVNvdXJjZVNjaGVtYShkcykudGhlbigoc2NoZW1hKSA9PiB7XG4gICAgICBpZiAoc2NoZW1hKSBhcHBseVNjaGVtYShzY2hlbWEpXG4gICAgfSlcbiAgfSwgW2FwcGx5U2NoZW1hXSlcblxuICBjb25zdCBsb2FkU2VyaWVzID0gUmVhY3QudXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBnZXRRdWVyeWFibGVEYXRhU291cmNlKGRzUmVmKVxuICAgIGlmICghbWFpbiB8fCAhZWZmZWN0aXZlWWVhckZpZWxkIHx8ICFyZWNvcnRlRmllbGQpIHtcbiAgICAgIHNldFNlcmllcyhbXSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghaXNQcm9kZXNEYXRhUmVhZHkoZHNTdGF0dXMpKSByZXR1cm5cblxuICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICBzZXRFcnJvcihudWxsKVxuICAgIGNvbnN0IGZldGNoT3B0cyA9IHtcbiAgICAgIHllYXJGaWVsZEppbXU6IGVmZmVjdGl2ZVllYXJGaWVsZCxcbiAgICAgIHJlY29ydGVGaWVsZEppbXU6IHJlY29ydGVGaWVsZCxcbiAgICAgIGZpZWxkczogZmllbGRMaXN0LFxuICAgICAgd2lkZ2V0SWRcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgbGV0IHJvd3MgPSBhd2FpdCBmZXRjaFByb2Rlc0F0dHJpYnV0ZVJvd3MobWFpbiwgZmV0Y2hPcHRzKVxuICAgICAgbGV0IGJ1aWx0ID0gYnVpbGRZZWFyU2VyaWVzRnJvbUF0dHJpYnV0ZVJvd3MoXG4gICAgICAgIHJvd3MsXG4gICAgICAgIGVmZmVjdGl2ZVllYXJGaWVsZCxcbiAgICAgICAgcmVjb3J0ZUZpZWxkLFxuICAgICAgICBmaWVsZExpc3RcbiAgICAgIClcblxuICAgICAgaWYgKHJvd3MubGVuZ3RoID4gMCAmJiBidWlsdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcm93cyA9IGF3YWl0IGZldGNoUHJvZGVzQXR0cmlidXRlUm93cyhtYWluLCB7IC4uLmZldGNoT3B0cywgZm9yY2VRdWVyeTogdHJ1ZSB9KVxuICAgICAgICBidWlsdCA9IGJ1aWxkWWVhclNlcmllc0Zyb21BdHRyaWJ1dGVSb3dzKFxuICAgICAgICAgIHJvd3MsXG4gICAgICAgICAgZWZmZWN0aXZlWWVhckZpZWxkLFxuICAgICAgICAgIHJlY29ydGVGaWVsZCxcbiAgICAgICAgICBmaWVsZExpc3RcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBzZXRTZXJpZXMoYnVpbHQpXG5cbiAgICAgIGlmIChyb3dzLmxlbmd0aCA+IDAgJiYgYnVpbHQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHNldEVycm9yKE1TR19FWFRSQUNUX0ZBSUxFRClcbiAgICAgIH1cbiAgICB9IGNhdGNoIHtcbiAgICAgIHNldEVycm9yKE1TR19MT0FEX0ZBSUxFRClcbiAgICAgIHNldFNlcmllcyhbXSlcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICB9XG4gIH0sIFtkc1JlZiwgZHNTdGF0dXMsIGVmZmVjdGl2ZVllYXJGaWVsZCwgZmllbGRMaXN0LCByZWNvcnRlRmllbGQsIHdpZGdldElkXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghcmVjb3J0ZUZpZWxkIHx8ICFlZmZlY3RpdmVZZWFyRmllbGQgfHwgIWRzUmVmKSByZXR1cm5cbiAgICBpZiAoIWlzUHJvZGVzRGF0YVJlYWR5KGRzU3RhdHVzKSkgcmV0dXJuXG4gICAgbG9hZFNlcmllcygpXG4gIH0sIFtyZWNvcnRlRmllbGQsIGVmZmVjdGl2ZVllYXJGaWVsZCwgZHNSZWYsIGRzU3RhdHVzLCBmaWVsZExpc3QsIGxvYWRTZXJpZXNdKVxuXG4gIGNvbnN0IHdhaXRpbmdGb3JMYXllciA9XG4gICAgIWRzUmVmIHx8XG4gICAgZHNTdGF0dXMgPT09IERhdGFTb3VyY2VTdGF0dXMuTG9hZGluZyB8fFxuICAgIGRzU3RhdHVzID09PSBEYXRhU291cmNlU3RhdHVzLk5vdFJlYWR5IHx8XG4gICAgZHNTdGF0dXMgPT09IERhdGFTb3VyY2VTdGF0dXMuVW5sb2FkZWRcblxuICByZXR1cm4ge1xuICAgIHNlcmllcyxcbiAgICBsb2FkaW5nLFxuICAgIGVycm9yLFxuICAgIGhhbmRsZURhdGFTb3VyY2VSZWFkeSxcbiAgICBhcHBseVNjaGVtYSxcbiAgICBzZXREc1N0YXR1cyxcbiAgICB3YWl0aW5nRm9yTGF5ZXJcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnamltdS1jb3JlJ1xuXG5leHBvcnQgY29uc3Qgd2lkZ2V0U3R5bGVzID0gY3NzYFxuICAmLndpZGdldC1jb21wYXJhZG9yLXByb2RlcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBwYWRkaW5nOiA4cHg7XG4gIH1cbiAgLmNvbXBhcmFkb3ItZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTJweDtcbiAgICBtaW4td2lkdGg6IDA7XG4gIH1cbiAgLmNvbXBhcmFkb3ItZmllbGQtcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA0cHg7XG4gICAgbWluLXdpZHRoOiAwO1xuICB9XG4gIC5jb21wYXJhZG9yLXBlcmlvZC1oaW50LFxuICAuY29tcGFyYWRvci1lcnJvciB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjYjAwMDIwO1xuICAgIG1hcmdpbi10b3A6IDJweDtcbiAgfVxuICAuY29tcGFyYWRvci1lcnJvci0tYmxvY2sge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAuY29tcGFyYWRvci1yZXN1bHQge1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1yZWYtcGFsZXR0ZS1uZXV0cmFsLTEwMCwgI2YzZjNmMyk7XG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgfVxuICAuY29tcGFyYWRvci1yZXN1bHQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIH1cbiAgLmNvbXBhcmFkb3ItcmVzdWx0LXZhbHVlIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMS4zO1xuICB9XG4gIC5jb21wYXJhZG9yLXJlc3VsdC12YWx1ZS0tcG9zaXRpdmUge1xuICAgIGNvbG9yOiAjYjAwMDIwO1xuICB9XG4gIC5jb21wYXJhZG9yLXJlc3VsdC12YWx1ZS0tbmVnYXRpdmUge1xuICAgIGNvbG9yOiAjMWI3YTNkO1xuICB9XG4gIC5jb21wYXJhZG9yLXJlc3VsdC12YWx1ZS0tbmV1dHJhbCB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cbiAgLmNvbXBhcmFkb3ItcmVzdWx0LWRldGFpbCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjNmI2YjZiO1xuICAgIG1hcmdpbi10b3A6IDZweDtcbiAgfVxuICAuY29tcGFyYWRvci1oaW50IHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgY29sb3I6ICM2YjZiNmI7XG4gICAgbGluZS1oZWlnaHQ6IDEuMzU7XG4gIH1cbiAgLmNvbXBhcmFkb3ItYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG4gIC5jb21wYXJhZG9yLWJ0bi1saW1wYXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBwaWNrZXJTdHlsZXMgPSBjc3NgXG4gIHdpZHRoOiAxMDAlO1xuICAuamltdS1kcm9wZG93biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgLmNvbXBhcmFkb3ItcGVyaW9kLW1lbnUge1xuICAgIG1heC1oZWlnaHQ6IDIyMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gIH1cbmBcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3QsIGpzeCB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7XG4gIERyb3Bkb3duLFxuICBEcm9wZG93bkJ1dHRvbixcbiAgRHJvcGRvd25NZW51LFxuICBEcm9wZG93bkl0ZW1cbn0gZnJvbSAnamltdS11aSdcbmltcG9ydCB7IGZvcm1hdFBlcmlvZExhYmVsLCB0b2dnbGVDb25zZWN1dGl2ZVllYXIgfSBmcm9tICcuLi91dGlscy9wcm9kZXMtdGFibGUnXG5pbXBvcnQgeyBwaWNrZXJTdHlsZXMgfSBmcm9tICcuL3N0eWxlcydcblxuZXhwb3J0IGludGVyZmFjZSBZZWFyUGVyaW9kUGlja2VyUHJvcHMge1xuICBhdmFpbGFibGVZZWFyczogbnVtYmVyW11cbiAgc2VsZWN0ZWRZZWFyczogbnVtYmVyW11cbiAgcGxhY2Vob2xkZXI6IHN0cmluZ1xuICBoaW50Pzogc3RyaW5nIHwgbnVsbFxuICBvbkNoYW5nZTogKHllYXJzOiBudW1iZXJbXSkgPT4gdm9pZFxuICBvblJlamVjdGVkU2VsZWN0aW9uPzogKCkgPT4gdm9pZFxufVxuXG5leHBvcnQgY29uc3QgWWVhclBlcmlvZFBpY2tlciA9IFJlYWN0Lm1lbW8oKHByb3BzOiBZZWFyUGVyaW9kUGlja2VyUHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGF2YWlsYWJsZVllYXJzLFxuICAgIHNlbGVjdGVkWWVhcnMsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgaGludCxcbiAgICBvbkNoYW5nZSxcbiAgICBvblJlamVjdGVkU2VsZWN0aW9uXG4gIH0gPSBwcm9wc1xuXG4gIGNvbnN0IHNlbGVjdGVkU2V0ID0gUmVhY3QudXNlTWVtbyhcbiAgICAoKSA9PiBuZXcgU2V0KHNlbGVjdGVkWWVhcnMpLFxuICAgIFtzZWxlY3RlZFllYXJzXVxuICApXG5cbiAgY29uc3Qgc3VtbWFyeSA9XG4gICAgc2VsZWN0ZWRZZWFycy5sZW5ndGggPiAwXG4gICAgICA/IGZvcm1hdFBlcmlvZExhYmVsKHNlbGVjdGVkWWVhcnMpXG4gICAgICA6IHBsYWNlaG9sZGVyXG5cbiAgY29uc3QgaGFuZGxlVG9nZ2xlID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKHllYXI6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3QgeyBuZXh0LCByZWplY3RlZCB9ID0gdG9nZ2xlQ29uc2VjdXRpdmVZZWFyKHNlbGVjdGVkWWVhcnMsIHllYXIpXG4gICAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgb25SZWplY3RlZFNlbGVjdGlvbj8uKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBvbkNoYW5nZShuZXh0KVxuICAgIH0sXG4gICAgW3NlbGVjdGVkWWVhcnMsIG9uQ2hhbmdlLCBvblJlamVjdGVkU2VsZWN0aW9uXVxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNzcz17cGlja2VyU3R5bGVzfT5cbiAgICAgIDxEcm9wZG93blxuICAgICAgICBmbHVpZFxuICAgICAgICBtZW51SXRlbUNoZWNrTW9kZT1cIm11bHRpQ2hlY2tcIlxuICAgICAgICBhY3RpdmVJY29uXG4gICAgICAgIGNsYXNzTmFtZT1cInctMTAwXCJcbiAgICAgID5cbiAgICAgICAgPERyb3Bkb3duQnV0dG9uIHNpemU9XCJzbVwiIGNsYXNzTmFtZT1cInctMTAwIGRyb3Bkb3duLXRvZ2dsZVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtdHJ1bmNhdGVcIj57c3VtbWFyeX08L3NwYW4+XG4gICAgICAgIDwvRHJvcGRvd25CdXR0b24+XG4gICAgICAgIDxEcm9wZG93bk1lbnUgY2xhc3NOYW1lPVwiY29tcGFyYWRvci1wZXJpb2QtbWVudVwiPlxuICAgICAgICAgIHthdmFpbGFibGVZZWFycy5tYXAoKHllYXIpID0+IChcbiAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAga2V5PXt5ZWFyfVxuICAgICAgICAgICAgICBhY3RpdmU9e3NlbGVjdGVkU2V0Lmhhcyh5ZWFyKX1cbiAgICAgICAgICAgICAgdG9nZ2xlPXtmYWxzZX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVG9nZ2xlKHllYXIpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7eWVhcn1cbiAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0Ryb3Bkb3duTWVudT5cbiAgICAgIDwvRHJvcGRvd24+XG4gICAgICB7aGludCAmJiA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhcmFkb3ItcGVyaW9kLWhpbnRcIj57aGludH08L2Rpdj59XG4gICAgPC9kaXY+XG4gIClcbn0pXG5cblllYXJQZXJpb2RQaWNrZXIuZGlzcGxheU5hbWUgPSAnWWVhclBlcmlvZFBpY2tlcidcbiIsImltcG9ydCB7XG4gIHR5cGUgRGF0YVNvdXJjZSxcbiAgdHlwZSBJTURhdGFTb3VyY2VTY2hlbWEsXG4gIERhdGFTb3VyY2VTdGF0dXNcbn0gZnJvbSAnamltdS1jb3JlJ1xuXG50eXBlIERhdGFTb3VyY2VXaXRoTWFpbiA9IERhdGFTb3VyY2UgJiB7XG4gIGdldE1haW5EYXRhU291cmNlPzogKCkgPT4gRGF0YVNvdXJjZVxuICBnZXRTY2hlbWE/OiAoKSA9PiBJTURhdGFTb3VyY2VTY2hlbWFcbn1cblxuLyoqIEFudGVzIGRvIHF1ZXJ5IGRvIERhdGFTb3VyY2VDb21wb25lbnQgdGVybWluYXIsIHJlZ2lzdHJvcyBjb3N0dW1hbSB2aXIgc2VtIGF0cmlidXRvcy4gKi9cbmV4cG9ydCBjb25zdCBpc1Byb2Rlc0RhdGFSZWFkeSA9IChzdGF0dXM/OiBEYXRhU291cmNlU3RhdHVzKTogYm9vbGVhbiA9PlxuICBzdGF0dXMgPT09IERhdGFTb3VyY2VTdGF0dXMuTG9hZGVkXG5cbmV4cG9ydCBjb25zdCBpc1F1ZXJ5YWJsZVN0YXR1cyA9IChzdGF0dXM/OiBEYXRhU291cmNlU3RhdHVzKTogYm9vbGVhbiA9PlxuICBzdGF0dXMgPT09IERhdGFTb3VyY2VTdGF0dXMuTG9hZGVkIHx8XG4gIHN0YXR1cyA9PT0gRGF0YVNvdXJjZVN0YXR1cy5Mb2FkaW5nXG5cbmV4cG9ydCBjb25zdCBnZXRNYWluRGF0YVNvdXJjZSA9IChkczogRGF0YVNvdXJjZSB8IG51bGwpOiBEYXRhU291cmNlIHwgbnVsbCA9PiB7XG4gIGlmICghZHMpIHJldHVybiBudWxsXG4gIGNvbnN0IG1haW4gPSAoZHMgYXMgRGF0YVNvdXJjZVdpdGhNYWluKS5nZXRNYWluRGF0YVNvdXJjZT8uKClcbiAgcmV0dXJuIG1haW4gPz8gZHNcbn1cblxuLyoqIFVzYSBhIGluc3TDom5jaWEgZGEgY2FtYWRhIHNlbGVjaW9uYWRhIChleC46IFBsYW5pbGhhMSkgcXVhbmRvIGVsYSBqw6Egw6kgY29uc3VsdMOhdmVsLiAqL1xuZXhwb3J0IGNvbnN0IGdldFF1ZXJ5YWJsZURhdGFTb3VyY2UgPSAoZHM6IERhdGFTb3VyY2UgfCBudWxsKTogRGF0YVNvdXJjZSB8IG51bGwgPT4ge1xuICBpZiAoIWRzKSByZXR1cm4gbnVsbFxuICBjb25zdCBxID0gZHMgYXMgRGF0YVNvdXJjZVdpdGhNYWluICYge1xuICAgIHF1ZXJ5PzogKHA6IG9iamVjdCkgPT4gUHJvbWlzZTx1bmtub3duPlxuICAgIGxvYWQ/OiAocDogb2JqZWN0KSA9PiBQcm9taXNlPHVua25vd24+XG4gICAgbG9hZEFsbD86IChwOiBvYmplY3QpID0+IFByb21pc2U8dW5rbm93bj5cbiAgfVxuICBpZiAoXG4gICAgdHlwZW9mIHEucXVlcnkgPT09ICdmdW5jdGlvbicgfHxcbiAgICB0eXBlb2YgcS5sb2FkID09PSAnZnVuY3Rpb24nIHx8XG4gICAgdHlwZW9mIHEubG9hZEFsbCA9PT0gJ2Z1bmN0aW9uJ1xuICApIHtcbiAgICByZXR1cm4gZHNcbiAgfVxuICByZXR1cm4gZ2V0TWFpbkRhdGFTb3VyY2UoZHMpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlbnN1cmVEYXRhU291cmNlU2NoZW1hIChcbiAgZHM6IERhdGFTb3VyY2Vcbik6IFByb21pc2U8SU1EYXRhU291cmNlU2NoZW1hIHwgdW5kZWZpbmVkPiB7XG4gIGNvbnN0IGV4aXN0aW5nID0gZ2V0RGF0YVNvdXJjZVNjaGVtYShkcylcbiAgaWYgKGV4aXN0aW5nPy5maWVsZHMgJiYgT2JqZWN0LmtleXMoZXhpc3RpbmcuZmllbGRzKS5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIGV4aXN0aW5nXG4gIH1cbiAgY29uc3QgZmV0Y2hTY2hlbWEgPSAoZHMgYXMgRGF0YVNvdXJjZVdpdGhNYWluICYge1xuICAgIGZldGNoU2NoZW1hPzogKCkgPT4gUHJvbWlzZTxJTURhdGFTb3VyY2VTY2hlbWE+XG4gIH0pLmZldGNoU2NoZW1hXG4gIGlmICh0eXBlb2YgZmV0Y2hTY2hlbWEgPT09ICdmdW5jdGlvbicpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGF3YWl0IGZldGNoU2NoZW1hLmNhbGwoZHMpXG4gICAgfSBjYXRjaCB7XG4gICAgICByZXR1cm4gZXhpc3RpbmdcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGV4aXN0aW5nXG59XG5cbmV4cG9ydCBjb25zdCBnZXREYXRhU291cmNlU2NoZW1hID0gKFxuICBkczogRGF0YVNvdXJjZVxuKTogSU1EYXRhU291cmNlU2NoZW1hIHwgdW5kZWZpbmVkID0+XG4gIChkcyBhcyBEYXRhU291cmNlV2l0aE1haW4pLmdldFNjaGVtYT8uKClcbiIsImltcG9ydCB7IEFSRUFfVU5JVCB9IGZyb20gJy4uL2NvbnN0YW50cydcblxuZXhwb3J0IGNvbnN0IGZvcm1hdEFyZWEgPSAodmFsdWU6IG51bWJlcik6IHN0cmluZyA9PlxuICBgJHt2YWx1ZS50b0xvY2FsZVN0cmluZygncHQtQlInLCB7XG4gICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMlxuICB9KX0gJHtBUkVBX1VOSVR9YFxuXG5leHBvcnQgdHlwZSBWYXJpYXRpb25Ub25lID0gJ3Bvc2l0aXZlJyB8ICduZWdhdGl2ZScgfCAnbmV1dHJhbCdcblxuZXhwb3J0IGNvbnN0IGdldFZhcmlhdGlvblRvbmUgPSAocGN0OiBudW1iZXIpOiBWYXJpYXRpb25Ub25lID0+IHtcbiAgaWYgKHBjdCA+IDApIHJldHVybiAncG9zaXRpdmUnXG4gIGlmIChwY3QgPCAwKSByZXR1cm4gJ25lZ2F0aXZlJ1xuICByZXR1cm4gJ25ldXRyYWwnXG59XG4iLCJpbXBvcnQge1xuICB0eXBlIElNRmllbGRTY2hlbWEsXG4gIHR5cGUgSU1EYXRhU291cmNlU2NoZW1hLFxuICBKaW11RmllbGRUeXBlLFxuICBFc3JpRmllbGRUeXBlLFxuICBRdWVyeVNjb3BlLFxuICB0eXBlIERhdGFSZWNvcmRcbn0gZnJvbSAnamltdS1jb3JlJ1xuXG5leHBvcnQgaW50ZXJmYWNlIFllYXJWYWx1ZVJvdyB7XG4gIHllYXI6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmllbGRBdHRyaWJ1dGVLZXlzIHtcbiAgeWVhcktleTogc3RyaW5nXG4gIHJlY29ydGVLZXk6IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9ZRUFSX0ZJRUxEID0gJ2FubydcblxuY29uc3QgWUVBUl9OQU1FX1BBVFRFUk5TID0gWydhbm8nLCAneWVhcicsICd5cicsICdleGVyY2ljaW8nLCAnZXhlcmPDrWNpbyddXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5Q2VsbCAodmFsdWU6IHVua25vd24pOiBib29sZWFuIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiB0cnVlXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLnRyaW0oKSA9PT0gJycpIHJldHVybiB0cnVlXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIE51bWJlci5pc05hTih2YWx1ZSkpIHJldHVybiB0cnVlXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VOdW1lcmljVmFsdWUgKHZhbHVlOiB1bmtub3duKTogbnVtYmVyIHwgbnVsbCB7XG4gIGlmIChpc0VtcHR5Q2VsbCh2YWx1ZSkpIHJldHVybiBudWxsXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSkpIHJldHVybiB2YWx1ZVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IHMgPSB2YWx1ZS50cmltKClcbiAgICBpZiAoIXMpIHJldHVybiBudWxsXG4gICAgaWYgKHMuaW5jbHVkZXMoJywnKSkge1xuICAgICAgY29uc3Qgbm9ybWFsaXplZCA9IHMucmVwbGFjZSgvXFwuL2csICcnKS5yZXBsYWNlKCcsJywgJy4nKVxuICAgICAgY29uc3QgbiA9IE51bWJlcihub3JtYWxpemVkKVxuICAgICAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShuKSA/IG4gOiBudWxsXG4gICAgfVxuICAgIGNvbnN0IG4gPSBOdW1iZXIocylcbiAgICByZXR1cm4gTnVtYmVyLmlzRmluaXRlKG4pID8gbiA6IG51bGxcbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG4vKiogQ29udmVydGUgbsO6bWVybyBleGliaWRvIG5vIEFyY0dJUyBlbSBwdC1CUiAoZXguOiAyLjAwMSDihpIgMjAwMSkuICovXG5mdW5jdGlvbiBub3JtYWxpemVZZWFyTnVtYmVyIChuOiBudW1iZXIpOiBudW1iZXIgfCBudWxsIHtcbiAgaWYgKCFOdW1iZXIuaXNGaW5pdGUobikpIHJldHVybiBudWxsXG5cbiAgaWYgKG4gPj0gMTk4NSAmJiBuIDw9IDIwMzUgJiYgTWF0aC5hYnMobiAtIE1hdGgucm91bmQobikpIDwgMC4wMDEpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChuKVxuICB9XG5cbiAgLy8gVGFiZWxhIFBST0RFUyBubyBQb3J0YWw6IGNvbHVuYSBBbm8gY29tbyAyLjAwMSwgMi4wMTEgKG1pbGhhciBjb20gcG9udG8pXG4gIGlmIChuID49IDEuOTg1ICYmIG4gPD0gMi4wMzUpIHtcbiAgICBjb25zdCB5ID0gTWF0aC5yb3VuZChuICogMTAwMClcbiAgICBpZiAoeSA+PSAxOTg1ICYmIHkgPD0gMjAzNSkgcmV0dXJuIHlcbiAgfVxuXG4gIGNvbnN0IHRydW5jYXRlZCA9IE1hdGgudHJ1bmMobilcbiAgaWYgKHRydW5jYXRlZCA+PSAxOTg1ICYmIHRydW5jYXRlZCA8PSAyMDM1KSByZXR1cm4gdHJ1bmNhdGVkXG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVllYXIgKHZhbHVlOiB1bmtub3duKTogbnVtYmVyIHwgbnVsbCB7XG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUgJiYgIU51bWJlci5pc05hTih2YWx1ZS5nZXRUaW1lKCkpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmdldEZ1bGxZZWFyKClcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiBOdW1iZXIuaXNGaW5pdGUodmFsdWUpKSB7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZVllYXJOdW1iZXIodmFsdWUpXG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCBzID0gdmFsdWUudHJpbSgpXG4gICAgaWYgKCFzKSByZXR1cm4gbnVsbFxuXG4gICAgY29uc3QgYnJUaG91c2FuZHMgPSBzLm1hdGNoKC9eKFxcZHsxLDJ9KVxcLihcXGR7M30pJC8pXG4gICAgaWYgKGJyVGhvdXNhbmRzKSB7XG4gICAgICBjb25zdCB5ID0gTnVtYmVyKGJyVGhvdXNhbmRzWzFdICsgYnJUaG91c2FuZHNbMl0pXG4gICAgICBpZiAoeSA+PSAxOTg1ICYmIHkgPD0gMjAzNSkgcmV0dXJuIHlcbiAgICB9XG5cbiAgICBjb25zdCBuID0gTnVtYmVyKHMucmVwbGFjZSgnLCcsICcuJykpXG4gICAgaWYgKE51bWJlci5pc0Zpbml0ZShuKSkgcmV0dXJuIG5vcm1hbGl6ZVllYXJOdW1iZXIobilcblxuICAgIGNvbnN0IG0gPSBzLm1hdGNoKC9cXGIoMTl8MjApXFxkezJ9XFxiLylcbiAgICBpZiAobSkgcmV0dXJuIE51bWJlcihtWzBdKVxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2hlbWFUb0ZpZWxkTGlzdCAoc2NoZW1hPzogSU1EYXRhU291cmNlU2NoZW1hIHwgbnVsbCk6IElNRmllbGRTY2hlbWFbXSB7XG4gIGlmICghc2NoZW1hPy5maWVsZHMpIHJldHVybiBbXVxuICByZXR1cm4gT2JqZWN0LmtleXMoc2NoZW1hLmZpZWxkcykubWFwKChrZXkpID0+IHNjaGVtYS5maWVsZHNba2V5XSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtZXJpY1JlY29ydGVGaWVsZCAoZmllbGQ6IElNRmllbGRTY2hlbWEpOiBib29sZWFuIHtcbiAgaWYgKGZpZWxkLnR5cGUgPT09IEppbXVGaWVsZFR5cGUuTnVtYmVyKSByZXR1cm4gdHJ1ZVxuICBjb25zdCBlc3JpID0gZmllbGQuZXNyaVR5cGVcbiAgcmV0dXJuIChcbiAgICBlc3JpID09PSBFc3JpRmllbGRUeXBlLkRvdWJsZSB8fFxuICAgIGVzcmkgPT09IEVzcmlGaWVsZFR5cGUuU2luZ2xlIHx8XG4gICAgZXNyaSA9PT0gRXNyaUZpZWxkVHlwZS5JbnRlZ2VyIHx8XG4gICAgZXNyaSA9PT0gRXNyaUZpZWxkVHlwZS5TbWFsbEludGVnZXJcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXR0cmlidXRlS2V5IChmaWVsZDogSU1GaWVsZFNjaGVtYSk6IHN0cmluZyB7XG4gIHJldHVybiBmaWVsZC5uYW1lIHx8IGZpZWxkLmppbXVOYW1lXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXRlY3RZZWFyRmllbGQgKGZpZWxkczogSU1GaWVsZFNjaGVtYVtdKTogc3RyaW5nIHwgbnVsbCB7XG4gIGNvbnN0IGV4YWN0QW5vID0gZmllbGRzLmZpbmQoXG4gICAgKGYpID0+XG4gICAgICBmLmppbXVOYW1lPy50b0xvd2VyQ2FzZSgpID09PSAnYW5vJyB8fFxuICAgICAgZi5uYW1lPy50b0xvd2VyQ2FzZSgpID09PSAnYW5vJyB8fFxuICAgICAgZi5hbGlhcz8udG9Mb3dlckNhc2UoKSA9PT0gJ2FubydcbiAgKVxuICBpZiAoZXhhY3RBbm8pIHJldHVybiBleGFjdEFuby5qaW11TmFtZVxuXG4gIGNvbnN0IGNhbmRpZGF0ZXMgPSBmaWVsZHMuZmlsdGVyKFxuICAgIChmKSA9PiBmLnR5cGUgPT09IEppbXVGaWVsZFR5cGUuTnVtYmVyIHx8IGYudHlwZSA9PT0gSmltdUZpZWxkVHlwZS5TdHJpbmdcbiAgKVxuICBmb3IgKGNvbnN0IHBhdCBvZiBZRUFSX05BTUVfUEFUVEVSTlMpIHtcbiAgICBjb25zdCBmb3VuZCA9IGNhbmRpZGF0ZXMuZmluZChcbiAgICAgIChmKSA9PlxuICAgICAgICBmLmppbXVOYW1lPy50b0xvd2VyQ2FzZSgpID09PSBwYXQgfHxcbiAgICAgICAgZi5uYW1lPy50b0xvd2VyQ2FzZSgpID09PSBwYXQgfHxcbiAgICAgICAgZi5hbGlhcz8udG9Mb3dlckNhc2UoKSA9PT0gcGF0XG4gICAgKVxuICAgIGlmIChmb3VuZCkgcmV0dXJuIGZvdW5kLmppbXVOYW1lXG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFJlY29ydGVMYWJlbCAoZmllbGQ6IElNRmllbGRTY2hlbWEpOiBzdHJpbmcge1xuICByZXR1cm4gZm9ybWF0UmVjb3J0ZUxhYmVsRnJvbU5hbWUoZmllbGQuamltdU5hbWUsIGZpZWxkLmFsaWFzKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UmVjb3J0ZUxhYmVsRnJvbU5hbWUgKGppbXVOYW1lOiBzdHJpbmcsIGFsaWFzPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKGFsaWFzPy50cmltKCkpIHJldHVybiBhbGlhcy50cmltKClcbiAgcmV0dXJuIGppbXVOYW1lXG4gICAgLnNwbGl0KCdfJylcbiAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgLm1hcCgodykgPT4gdy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHcuc2xpY2UoMSkudG9Mb3dlckNhc2UoKSlcbiAgICAuam9pbignICcpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTeXN0ZW1IaWRkZW5GaWVsZE5hbWVzIChmaWVsZHM6IElNRmllbGRTY2hlbWFbXSk6IHN0cmluZ1tdIHtcbiAgcmV0dXJuIGZpZWxkc1xuICAgIC5maWx0ZXIoKGYpID0+IHtcbiAgICAgIGNvbnN0IGVzcmkgPSBmLmVzcmlUeXBlXG4gICAgICByZXR1cm4gKFxuICAgICAgICBlc3JpID09PSBFc3JpRmllbGRUeXBlLk9JRCB8fFxuICAgICAgICBlc3JpID09PSBFc3JpRmllbGRUeXBlLkdlb21ldHJ5IHx8XG4gICAgICAgIGVzcmkgPT09IEVzcmlGaWVsZFR5cGUuR2xvYmFsSUQgfHxcbiAgICAgICAgZXNyaSA9PT0gRXNyaUZpZWxkVHlwZS5HVUlEXG4gICAgICApXG4gICAgfSlcbiAgICAubWFwKChmKSA9PiBmLmppbXVOYW1lKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVjb3J0ZUhpZGRlbkZpZWxkTmFtZXMgKFxuICBmaWVsZHM6IElNRmllbGRTY2hlbWFbXSxcbiAgeWVhckZpZWxkPzogc3RyaW5nXG4pOiBzdHJpbmdbXSB7XG4gIGNvbnN0IGhpZGRlbiA9IGdldFN5c3RlbUhpZGRlbkZpZWxkTmFtZXMoZmllbGRzKVxuICBpZiAoeWVhckZpZWxkICYmICFoaWRkZW4uaW5jbHVkZXMoeWVhckZpZWxkKSkge1xuICAgIGhpZGRlbi5wdXNoKHllYXJGaWVsZClcbiAgfVxuICByZXR1cm4gaGlkZGVuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWNvcnRlQ2FuZGlkYXRlRmllbGRzIChcbiAgZmllbGRzOiBJTUZpZWxkU2NoZW1hW10sXG4gIHllYXJGaWVsZD86IHN0cmluZ1xuKTogSU1GaWVsZFNjaGVtYVtdIHtcbiAgY29uc3QgaGlkZGVuID0gbmV3IFNldChnZXRSZWNvcnRlSGlkZGVuRmllbGROYW1lcyhmaWVsZHMsIHllYXJGaWVsZCkpXG4gIHJldHVybiBmaWVsZHNcbiAgICAuZmlsdGVyKChmKSA9PiBpc051bWVyaWNSZWNvcnRlRmllbGQoZikgJiYgIWhpZGRlbi5oYXMoZi5qaW11TmFtZSkpXG4gICAgLnNvcnQoKGEsIGIpID0+XG4gICAgICBmb3JtYXRSZWNvcnRlTGFiZWwoYSkubG9jYWxlQ29tcGFyZShmb3JtYXRSZWNvcnRlTGFiZWwoYiksICdwdC1CUicpXG4gICAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZEZpZWxkQnlKaW11TmFtZSAoXG4gIGZpZWxkczogSU1GaWVsZFNjaGVtYVtdLFxuICBqaW11TmFtZT86IHN0cmluZ1xuKTogSU1GaWVsZFNjaGVtYSB8IG51bGwge1xuICBpZiAoIWppbXVOYW1lKSByZXR1cm4gbnVsbFxuICBjb25zdCBleGFjdCA9IGZpZWxkcy5maW5kKChmKSA9PiBmLmppbXVOYW1lID09PSBqaW11TmFtZSlcbiAgaWYgKGV4YWN0KSByZXR1cm4gZXhhY3RcbiAgY29uc3QgbG93ZXIgPSBqaW11TmFtZS50b0xvd2VyQ2FzZSgpXG4gIHJldHVybiAoXG4gICAgZmllbGRzLmZpbmQoXG4gICAgICAoZikgPT5cbiAgICAgICAgZi5qaW11TmFtZT8udG9Mb3dlckNhc2UoKSA9PT0gbG93ZXIgfHxcbiAgICAgICAgZi5uYW1lPy50b0xvd2VyQ2FzZSgpID09PSBsb3dlciB8fFxuICAgICAgICBmLmFsaWFzPy50b0xvd2VyQ2FzZSgpID09PSBsb3dlclxuICAgICkgPz8gbnVsbFxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlQXR0cmlidXRlS2V5cyAoXG4gIGZpZWxkczogSU1GaWVsZFNjaGVtYVtdLFxuICB5ZWFyRmllbGRKaW11Pzogc3RyaW5nLFxuICByZWNvcnRlRmllbGRKaW11Pzogc3RyaW5nXG4pOiBGaWVsZEF0dHJpYnV0ZUtleXMgfCBudWxsIHtcbiAgaWYgKCF5ZWFyRmllbGRKaW11IHx8ICFyZWNvcnRlRmllbGRKaW11KSByZXR1cm4gbnVsbFxuXG4gIGNvbnN0IHllYXJGaWVsZCA9IGZpbmRGaWVsZEJ5SmltdU5hbWUoZmllbGRzLCB5ZWFyRmllbGRKaW11KVxuICBjb25zdCByZWNvcnRlRmllbGQgPSBmaW5kRmllbGRCeUppbXVOYW1lKGZpZWxkcywgcmVjb3J0ZUZpZWxkSmltdSlcblxuICByZXR1cm4ge1xuICAgIHllYXJLZXk6IHllYXJGaWVsZCA/IGdldEF0dHJpYnV0ZUtleSh5ZWFyRmllbGQpIDogeWVhckZpZWxkSmltdSxcbiAgICByZWNvcnRlS2V5OiByZWNvcnRlRmllbGQgPyBnZXRBdHRyaWJ1dGVLZXkocmVjb3J0ZUZpZWxkKSA6IHJlY29ydGVGaWVsZEppbXVcbiAgfVxufVxuXG50eXBlIFJlY29yZExpa2UgPVxuICB8IERhdGFSZWNvcmRcbiAgfCB7XG4gICAgICBhdHRyaWJ1dGVzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgICAgIGZlYXR1cmU/OiB7IGF0dHJpYnV0ZXM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB9XG4gICAgICBnZXREYXRhPzogKCkgPT4ge1xuICAgICAgICBhdHRyaWJ1dGVzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgICAgICAgZmVhdHVyZT86IHsgYXR0cmlidXRlcz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+IH1cbiAgICAgIH1cbiAgICAgIGdldEZpZWxkVmFsdWU/OiAoamltdUZpZWxkTmFtZTogc3RyaW5nKSA9PiB1bmtub3duXG4gICAgICBnZXREYXRlRmllbGRWYWx1ZT86IChqaW11RmllbGROYW1lOiBzdHJpbmcpID0+IHVua25vd25cbiAgICAgIGdldERhdGFCZWZvcmVNYXBwaW5nPzogKCkgPT4gUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgICB9XG5cbmZ1bmN0aW9uIHRvUGxhaW5PYmplY3QgKHZhbHVlOiB1bmtub3duKTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4ge1xuICBpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHJldHVybiB7fVxuICBjb25zdCB2ID0gdmFsdWUgYXMge1xuICAgIHRvSlM/OiAoKSA9PiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICAgIGFzTXV0YWJsZT86IChvcHRzPzogeyBkZWVwOiBib29sZWFuIH0pID0+IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gIH1cbiAgaWYgKHR5cGVvZiB2LnRvSlMgPT09ICdmdW5jdGlvbicpIHJldHVybiB2LnRvSlMoKVxuICBpZiAodHlwZW9mIHYuYXNNdXRhYmxlID09PSAnZnVuY3Rpb24nKSByZXR1cm4gdi5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pXG4gIHJldHVybiB2YWx1ZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxufVxuXG5jb25zdCBHRVRfREFUQV9NRVRBX0tFWVMgPSBuZXcgU2V0KFtcbiAgJ2F0dHJpYnV0ZXMnLFxuICAnZmVhdHVyZScsXG4gICdnZW9tZXRyeScsXG4gICdjZW50cm9pZCcsXG4gICdhZ2dyZWdhdGVHZW9tZXRyaWVzJyxcbiAgJ3N5bWJvbCdcbl0pXG5cbi8qKiBFeHRyYWkgbyBkaWNpb27DoXJpbyBkZSBhdHJpYnV0b3MgZGUgdW0gcmVnaXN0cm8gKHbDoXJpb3MgZm9ybWF0b3MgZG8gSmltdS9BcmNHSVMpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFBsYWluQXR0cmlidXRlcyAocmVjOiBSZWNvcmRMaWtlKTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4ge1xuICBjb25zdCBtZXJnZWQ6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge31cblxuICBjb25zdCBtZXJnZSA9IChhdHRycz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+KSA9PiB7XG4gICAgaWYgKCFhdHRycykgcmV0dXJuXG4gICAgT2JqZWN0LmFzc2lnbihtZXJnZWQsIHRvUGxhaW5PYmplY3QoYXR0cnMpKVxuICB9XG5cbiAgaWYgKCdnZXREYXRhJyBpbiByZWMgJiYgdHlwZW9mIHJlYy5nZXREYXRhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3QgZGF0YSA9IHJlYy5nZXREYXRhKClcbiAgICBjb25zdCBwbGFpbiA9IHRvUGxhaW5PYmplY3QoZGF0YSlcbiAgICBtZXJnZShwbGFpbi5hdHRyaWJ1dGVzIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgdW5kZWZpbmVkKVxuICAgIG1lcmdlKHBsYWluLmZlYXR1cmU/LmF0dHJpYnV0ZXMgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCB1bmRlZmluZWQpXG4gICAgLy8gSmltdSBEYXRhUmVjb3JkOiBnZXREYXRhKCkgY29zdHVtYSBzZXIgbWFwYSBwbGFubyB7IGppbXVGaWVsZE5hbWU6IHZhbG9yIH1cbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwbGFpbikpIHtcbiAgICAgIGlmIChHRVRfREFUQV9NRVRBX0tFWVMuaGFzKGtleSkpIGNvbnRpbnVlXG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkgbWVyZ2VkW2tleV0gPSB2YWx1ZVxuICAgIH1cbiAgfVxuXG4gIGlmICgnZmVhdHVyZScgaW4gcmVjICYmIHJlYy5mZWF0dXJlPy5hdHRyaWJ1dGVzKSB7XG4gICAgbWVyZ2UocmVjLmZlYXR1cmUuYXR0cmlidXRlcylcbiAgfVxuXG4gIGlmICgnYXR0cmlidXRlcycgaW4gcmVjICYmIHJlYy5hdHRyaWJ1dGVzKSB7XG4gICAgbWVyZ2UocmVjLmF0dHJpYnV0ZXMpXG4gIH1cblxuICBpZiAoJ2dldERhdGFCZWZvcmVNYXBwaW5nJyBpbiByZWMgJiYgdHlwZW9mIHJlYy5nZXREYXRhQmVmb3JlTWFwcGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG1lcmdlKHJlYy5nZXREYXRhQmVmb3JlTWFwcGluZygpKVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlZFxufVxuXG5mdW5jdGlvbiBhdHRyaWJ1dGVIYXNVc2FibGVWYWx1ZSAodmFsdWU6IHVua25vd24pOiBib29sZWFuIHtcbiAgaWYgKGlzRW1wdHlDZWxsKHZhbHVlKSkgcmV0dXJuIGZhbHNlXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSByZXR1cm4gZmFsc2VcbiAgcmV0dXJuIHRydWVcbn1cblxuLyoqIFZlcmlmaWNhIHNlIG8gcmVnaXN0cm8gZXhww7VlIGF0cmlidXRvcyBvdSBnZXRGaWVsZFZhbHVlIGNvbSBkYWRvcyByZWFpcyAobsOjbyBzw7MgbcOpdG9kbyB2YXppbykuICovXG5leHBvcnQgZnVuY3Rpb24gcmVjb3JkSGFzUmVhZGFibGVEYXRhIChyZWM6IFJlY29yZExpa2UpOiBib29sZWFuIHtcbiAgY29uc3QgYXR0cnMgPSBnZXRQbGFpbkF0dHJpYnV0ZXMocmVjKVxuICBjb25zdCB1c2FibGVLZXlzID0gT2JqZWN0LmtleXMoYXR0cnMpLmZpbHRlcigoa2V5KSA9PiB7XG4gICAgaWYgKC9eKG9iamVjdGlkfGdsb2JhbGlkfHNoYXBlfGdlb21ldHJ5KSQvaS50ZXN0KGtleSkpIHJldHVybiBmYWxzZVxuICAgIHJldHVybiBhdHRyaWJ1dGVIYXNVc2FibGVWYWx1ZShhdHRyc1trZXldKVxuICB9KVxuICBpZiAodXNhYmxlS2V5cy5sZW5ndGggPiAwKSByZXR1cm4gdHJ1ZVxuXG4gIGlmICgnZ2V0RmllbGRWYWx1ZScgaW4gcmVjICYmIHR5cGVvZiByZWMuZ2V0RmllbGRWYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IHByb2JlcyA9IFtcbiAgICAgICdhbm8nLFxuICAgICAgJ3llYXInLFxuICAgICAgJ0FOTycsXG4gICAgICAnWWVhcicsXG4gICAgICAnZXhlcmNpY2lvJyxcbiAgICAgICdFeGVyY2ljaW8nXG4gICAgXVxuICAgIGZvciAoY29uc3QgbmFtZSBvZiBwcm9iZXMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHYgPSByZWMuZ2V0RmllbGRWYWx1ZSEobmFtZSlcbiAgICAgICAgaWYgKGF0dHJpYnV0ZUhhc1VzYWJsZVZhbHVlKHYpKSByZXR1cm4gdHJ1ZVxuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIHRlbnRhIHByw7N4aW1vXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8qKiBMw6ogdmFsb3IgcGVsbyBBUEkgZG8gSmltdSAoYGdldEZpZWxkVmFsdWVgKSBlLCBlbSBzZWd1aWRhLCBwZWxvcyBhdHJpYnV0b3MgYnJ1dG9zLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlYWRSZWNvcmRWYWx1ZSAoXG4gIHJlYzogUmVjb3JkTGlrZSxcbiAgZmllbGQ/OiBJTUZpZWxkU2NoZW1hIHwgbnVsbCxcbiAgZmFsbGJhY2tKaW11TmFtZT86IHN0cmluZ1xuKTogdW5rbm93biB7XG4gIGNvbnN0IG5hbWVzOiBzdHJpbmdbXSA9IFtdXG4gIGlmIChmaWVsZD8uamltdU5hbWUpIG5hbWVzLnB1c2goZmllbGQuamltdU5hbWUpXG4gIGlmIChmYWxsYmFja0ppbXVOYW1lKSBuYW1lcy5wdXNoKGZhbGxiYWNrSmltdU5hbWUpXG4gIGlmIChmaWVsZD8ubmFtZSkgbmFtZXMucHVzaChmaWVsZC5uYW1lKVxuICBpZiAoZmllbGQ/LmFsaWFzKSBuYW1lcy5wdXNoKGZpZWxkLmFsaWFzKVxuICBpZiAoZmllbGQpIG5hbWVzLnB1c2goZ2V0QXR0cmlidXRlS2V5KGZpZWxkKSlcblxuICBjb25zdCB1bmlxdWVOYW1lcyA9IFsuLi5uZXcgU2V0KG5hbWVzLmZpbHRlcihCb29sZWFuKSldXG5cbiAgaWYgKCdnZXRGaWVsZFZhbHVlJyBpbiByZWMgJiYgdHlwZW9mIHJlYy5nZXRGaWVsZFZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm9yIChjb25zdCBuYW1lIG9mIHVuaXF1ZU5hbWVzKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB2ID0gcmVjLmdldEZpZWxkVmFsdWUhKG5hbWUpXG4gICAgICAgIGlmICh2ICE9PSB1bmRlZmluZWQpIHJldHVybiB2XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgLy8gdGVudGEgcHLDs3hpbW8gbm9tZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChcbiAgICBmaWVsZD8uamltdU5hbWUgJiZcbiAgICAnZ2V0RGF0ZUZpZWxkVmFsdWUnIGluIHJlYyAmJlxuICAgIHR5cGVvZiByZWMuZ2V0RGF0ZUZpZWxkVmFsdWUgPT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHYgPSByZWMuZ2V0RGF0ZUZpZWxkVmFsdWUhKGZpZWxkLmppbXVOYW1lKVxuICAgICAgaWYgKHYgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHZcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIGlnbm9yYVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGF0dHJzID0gZ2V0UGxhaW5BdHRyaWJ1dGVzKHJlYylcbiAgY29uc3QgZnJvbU1hcHBlZCA9IHJlYWRBdHRyaWJ1dGVGbGV4aWJsZShhdHRycywgZmllbGQsIGZhbGxiYWNrSmltdU5hbWUpXG4gIGlmIChmcm9tTWFwcGVkICE9PSB1bmRlZmluZWQpIHJldHVybiBmcm9tTWFwcGVkXG5cbiAgaWYgKCdnZXREYXRhQmVmb3JlTWFwcGluZycgaW4gcmVjICYmIHR5cGVvZiByZWMuZ2V0RGF0YUJlZm9yZU1hcHBpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCByYXcgPSB0b1BsYWluT2JqZWN0KHJlYy5nZXREYXRhQmVmb3JlTWFwcGluZygpKVxuICAgIHJldHVybiByZWFkQXR0cmlidXRlRmxleGlibGUocmF3LCBmaWVsZCwgZmFsbGJhY2tKaW11TmFtZSlcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gcmVhZEF0dHJpYnV0ZSAoXG4gIGF0dHJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbiAgcHJpbWFyeUtleTogc3RyaW5nLFxuICBmYWxsYmFja0tleT86IHN0cmluZ1xuKTogdW5rbm93biB7XG4gIGlmIChwcmltYXJ5S2V5IGluIGF0dHJzKSByZXR1cm4gYXR0cnNbcHJpbWFyeUtleV1cbiAgaWYgKGZhbGxiYWNrS2V5ICYmIGZhbGxiYWNrS2V5ICE9PSBwcmltYXJ5S2V5ICYmIGZhbGxiYWNrS2V5IGluIGF0dHJzKSB7XG4gICAgcmV0dXJuIGF0dHJzW2ZhbGxiYWNrS2V5XVxuICB9XG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuLyoqIFRlbnRhIGppbXVOYW1lLCBuYW1lLCBhbGlhcyBlIGNvcnJlc3BvbmTDqm5jaWEgc2VtIGRpZmVyZW5jaWFyIG1hacO6c2N1bGFzL21pbsO6c2N1bGFzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlYWRBdHRyaWJ1dGVGbGV4aWJsZSAoXG4gIGF0dHJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbiAgZmllbGQ/OiBJTUZpZWxkU2NoZW1hIHwgbnVsbCxcbiAgZmFsbGJhY2tKaW11TmFtZT86IHN0cmluZ1xuKTogdW5rbm93biB7XG4gIGNvbnN0IGNhbmRpZGF0ZXMgPSBuZXcgU2V0PHN0cmluZz4oKVxuICBpZiAoZmllbGQpIHtcbiAgICBpZiAoZmllbGQuamltdU5hbWUpIGNhbmRpZGF0ZXMuYWRkKGZpZWxkLmppbXVOYW1lKVxuICAgIGlmIChmaWVsZC5uYW1lKSBjYW5kaWRhdGVzLmFkZChmaWVsZC5uYW1lKVxuICAgIGlmIChmaWVsZC5hbGlhcykgY2FuZGlkYXRlcy5hZGQoZmllbGQuYWxpYXMpXG4gICAgY2FuZGlkYXRlcy5hZGQoZ2V0QXR0cmlidXRlS2V5KGZpZWxkKSlcbiAgfVxuICBpZiAoZmFsbGJhY2tKaW11TmFtZSkgY2FuZGlkYXRlcy5hZGQoZmFsbGJhY2tKaW11TmFtZSlcblxuICBmb3IgKGNvbnN0IGtleSBvZiBjYW5kaWRhdGVzKSB7XG4gICAgY29uc3QgdiA9IHJlYWRBdHRyaWJ1dGUoYXR0cnMsIGtleSlcbiAgICBpZiAodiAhPT0gdW5kZWZpbmVkKSByZXR1cm4gdlxuICB9XG5cbiAgY29uc3QgYXR0cktleXMgPSBPYmplY3Qua2V5cyhhdHRycylcbiAgZm9yIChjb25zdCBrZXkgb2YgY2FuZGlkYXRlcykge1xuICAgIGNvbnN0IGZvdW5kID0gYXR0cktleXMuZmluZCgoaykgPT4gay50b0xvd2VyQ2FzZSgpID09PSBrZXkudG9Mb3dlckNhc2UoKSlcbiAgICBpZiAoZm91bmQgIT0gbnVsbCkgcmV0dXJuIGF0dHJzW2ZvdW5kXVxuICB9XG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxudHlwZSBRdWVyaWFibGVMYXllciA9IHtcbiAgcXVlcnk/OiAocTogb2JqZWN0LCBvcHRpb25zPzogeyBzY29wZT86IFF1ZXJ5U2NvcGUgfSkgPT4gUHJvbWlzZTx7IHJlY29yZHM/OiBEYXRhUmVjb3JkW10gfT5cbiAgbG9hZD86IChxOiBvYmplY3QsIG9wdGlvbnM/OiB7IHNjb3BlPzogUXVlcnlTY29wZSB9KSA9PiBQcm9taXNlPERhdGFSZWNvcmRbXT5cbiAgbG9hZEFsbD86IChcbiAgICBxOiBvYmplY3QsXG4gICAgc2lnbmFsPzogQWJvcnRTaWduYWwsXG4gICAgcHJvZ3Jlc3NDYWxsYmFjaz86IHVua25vd24sXG4gICAgb3B0aW9ucz86IHsgc2NvcGU/OiBRdWVyeVNjb3BlIH1cbiAgKSA9PiBQcm9taXNlPERhdGFSZWNvcmRbXT5cbiAgZ2V0QWxsTG9hZGVkUmVjb3Jkcz86ICgpID0+IERhdGFSZWNvcmRbXVxuICBnZXRSZWNvcmRzPzogKCkgPT4gRGF0YVJlY29yZFtdXG4gIGxheWVyPzogeyBxdWVyeUZlYXR1cmVzPzogKHE6IG9iamVjdCkgPT4gUHJvbWlzZTx7IGZlYXR1cmVzPzogdW5rbm93bltdIH0+IH1cbiAgYnVpbGRSZWNvcmQ/OiAoZmVhdHVyZTogdW5rbm93bikgPT4gRGF0YVJlY29yZFxufVxuXG5jb25zdCBidWlsZFF1ZXJ5T3B0aW9ucyA9ICh3aWRnZXRJZD86IHN0cmluZykgPT4gKHtcbiAgc2NvcGU6IFF1ZXJ5U2NvcGUuSW5BbGxEYXRhLFxuICAuLi4od2lkZ2V0SWQgPyB7IHdpZGdldElkIH0gOiB7fSlcbn0pXG5cbmNvbnN0IGJ1aWxkUXVlcnlQYXJhbXMgPSAoXG4gIG91dEZpZWxkczogc3RyaW5nW10gPSBbJyonXSxcbiAgZGlzYWJsZUNsaWVudFF1ZXJ5ID0gZmFsc2VcbikgPT4gKHtcbiAgd2hlcmU6ICcxPTEnLFxuICBvdXRGaWVsZHMsXG4gIHJldHVybkdlb21ldHJ5OiBmYWxzZSxcbiAgcGFnZVNpemU6IDIwMDAsXG4gIC4uLihkaXNhYmxlQ2xpZW50UXVlcnkgPyB7IGRpc2FibGVDbGllbnRRdWVyeTogdHJ1ZSB9IDoge30pXG59KVxuXG5mdW5jdGlvbiByZWNvcmRzQXJlUmVhZGFibGUgKHJlY29yZHM6IERhdGFSZWNvcmRbXSk6IGJvb2xlYW4ge1xuICByZXR1cm4gcmVjb3Jkcy5sZW5ndGggPiAwICYmIHJlY29yZHMuc29tZShyZWNvcmRIYXNSZWFkYWJsZURhdGEpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHF1ZXJ5VmlhSnNhcGlMYXllciAoZHM6IFF1ZXJpYWJsZUxheWVyKTogUHJvbWlzZTxEYXRhUmVjb3JkW10+IHtcbiAgY29uc3QgbGF5ZXIgPSBkcy5sYXllciBhcyB7XG4gICAgcXVlcnlGZWF0dXJlcz86IChxOiBvYmplY3QpID0+IFByb21pc2U8eyBmZWF0dXJlcz86IHVua25vd25bXSB9PlxuICAgIHF1ZXJ5PzogKHE6IG9iamVjdCkgPT4gUHJvbWlzZTx7IGZlYXR1cmVzPzogdW5rbm93bltdIH0+XG4gIH1cbiAgaWYgKCFsYXllciB8fCB0eXBlb2YgZHMuYnVpbGRSZWNvcmQgIT09ICdmdW5jdGlvbicpIHJldHVybiBbXVxuXG4gIGNvbnN0IHEgPSB7XG4gICAgd2hlcmU6ICcxPTEnLFxuICAgIG91dEZpZWxkczogWycqJ10sXG4gICAgcmV0dXJuR2VvbWV0cnk6IGZhbHNlLFxuICAgIG51bTogMjAwMFxuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPVxuICAgICAgdHlwZW9mIGxheWVyLnF1ZXJ5RmVhdHVyZXMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBhd2FpdCBsYXllci5xdWVyeUZlYXR1cmVzKHEpXG4gICAgICAgIDogdHlwZW9mIGxheWVyLnF1ZXJ5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgPyBhd2FpdCBsYXllci5xdWVyeShxKVxuICAgICAgICAgIDogbnVsbFxuICAgIGNvbnN0IGZlYXR1cmVzID0gcmVzdWx0Py5mZWF0dXJlcyA/PyBbXVxuICAgIHJldHVybiBmZWF0dXJlcy5tYXAoKGYpID0+IGRzLmJ1aWxkUmVjb3JkIShmKSlcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hWaWFBcmNnaXNSZXN0IChcbiAgZHM6IHsgdXJsPzogc3RyaW5nIH1cbik6IFByb21pc2U8UmVjb3JkPHN0cmluZywgdW5rbm93bj5bXT4ge1xuICBpZiAoIWRzLnVybCkgcmV0dXJuIFtdXG4gIHRyeSB7XG4gICAgY29uc3QgeyBxdWVyeUZlYXR1cmVzIH0gPSBhd2FpdCBpbXBvcnQoJ0Blc3JpL2FyY2dpcy1yZXN0LWZlYXR1cmUtc2VydmljZScpXG4gICAgY29uc3QgcmVzID0gYXdhaXQgcXVlcnlGZWF0dXJlcyh7XG4gICAgICB1cmw6IGRzLnVybCxcbiAgICAgIHdoZXJlOiAnMT0xJyxcbiAgICAgIG91dEZpZWxkczogWycqJ10sXG4gICAgICByZXR1cm5HZW9tZXRyeTogZmFsc2VcbiAgICB9KVxuICAgIGNvbnN0IGZlYXR1cmVzID1cbiAgICAgIHJlcyAmJiB0eXBlb2YgcmVzID09PSAnb2JqZWN0JyAmJiAnZmVhdHVyZXMnIGluIHJlc1xuICAgICAgICA/IChyZXMgYXMgeyBmZWF0dXJlcz86IEFycmF5PHsgYXR0cmlidXRlcz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+IH0+IH0pXG4gICAgICAgICAgICAuZmVhdHVyZXMgPz8gW11cbiAgICAgICAgOiBbXVxuICAgIHJldHVybiBmZWF0dXJlc1xuICAgICAgLm1hcCgoZikgPT4gKHsgLi4uKGYuYXR0cmlidXRlcyA/PyB7fSkgfSkpXG4gICAgICAuZmlsdGVyKChhKSA9PiBPYmplY3Qua2V5cyhhKS5sZW5ndGggPiAwKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gW11cbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBydW5RdWVyeWFibGVNZXRob2RzIChcbiAgZHM6IFF1ZXJpYWJsZUxheWVyLFxuICBvdXRGaWVsZHM6IHN0cmluZ1tdLFxuICBkaXNhYmxlQ2xpZW50UXVlcnk6IGJvb2xlYW4sXG4gIHdpZGdldElkPzogc3RyaW5nXG4pOiBQcm9taXNlPERhdGFSZWNvcmRbXT4ge1xuICBjb25zdCBwYXJhbXMgPSBidWlsZFF1ZXJ5UGFyYW1zKG91dEZpZWxkcywgZGlzYWJsZUNsaWVudFF1ZXJ5KVxuICBjb25zdCBxdWVyeU9wdGlvbnMgPSBidWlsZFF1ZXJ5T3B0aW9ucyh3aWRnZXRJZClcblxuICBpZiAodHlwZW9mIGRzPy5sb2FkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBkcy5sb2FkKHBhcmFtcywgcXVlcnlPcHRpb25zKVxuICAgICAgaWYgKHJlY29yZHM/Lmxlbmd0aCAmJiByZWNvcmRzQXJlUmVhZGFibGUocmVjb3JkcykpIHJldHVybiByZWNvcmRzXG4gICAgICBpZiAocmVjb3Jkcz8ubGVuZ3RoICYmICFkaXNhYmxlQ2xpZW50UXVlcnkpIHJldHVybiByZWNvcmRzXG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyB0ZW50YSBwcsOzeGltbyBtw6l0b2RvXG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiBkcz8ubG9hZEFsbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZWNvcmRzID0gYXdhaXQgZHMubG9hZEFsbChwYXJhbXMsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBxdWVyeU9wdGlvbnMpXG4gICAgICBpZiAocmVjb3Jkcz8ubGVuZ3RoICYmIHJlY29yZHNBcmVSZWFkYWJsZShyZWNvcmRzKSkgcmV0dXJuIHJlY29yZHNcbiAgICAgIGlmIChyZWNvcmRzPy5sZW5ndGggJiYgIWRpc2FibGVDbGllbnRRdWVyeSkgcmV0dXJuIHJlY29yZHNcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIHRlbnRhIHF1ZXJ5IGFiYWl4b1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgZHM/LnF1ZXJ5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRzLnF1ZXJ5KHBhcmFtcywgcXVlcnlPcHRpb25zKVxuICAgICAgY29uc3QgcmVjb3JkcyA9IHJlc3VsdD8ucmVjb3JkcyA/PyBbXVxuICAgICAgaWYgKHJlY29yZHMubGVuZ3RoICYmIHJlY29yZHNBcmVSZWFkYWJsZShyZWNvcmRzKSkgcmV0dXJuIHJlY29yZHNcbiAgICAgIGlmIChyZWNvcmRzLmxlbmd0aCAmJiAhZGlzYWJsZUNsaWVudFF1ZXJ5KSByZXR1cm4gcmVjb3Jkc1xuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gdGVudGEgSlMgQVBJXG4gICAgfVxuICB9XG5cbiAgY29uc3QgdmlhTGF5ZXIgPSBhd2FpdCBxdWVyeVZpYUpzYXBpTGF5ZXIoZHMpXG4gIGlmICh2aWFMYXllci5sZW5ndGggJiYgcmVjb3Jkc0FyZVJlYWRhYmxlKHZpYUxheWVyKSkgcmV0dXJuIHZpYUxheWVyXG4gIGlmICh2aWFMYXllci5sZW5ndGggJiYgIWRpc2FibGVDbGllbnRRdWVyeSkgcmV0dXJuIHZpYUxheWVyXG5cbiAgcmV0dXJuIFtdXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHF1ZXJ5QWxsUmVjb3JkcyAoXG4gIGRzOiBRdWVyaWFibGVMYXllcixcbiAgb3V0RmllbGRzOiBzdHJpbmdbXSA9IFsnKiddLFxuICB3aWRnZXRJZD86IHN0cmluZ1xuKTogUHJvbWlzZTxEYXRhUmVjb3JkW10+IHtcbiAgbGV0IHJlY29yZHMgPSBhd2FpdCBydW5RdWVyeWFibGVNZXRob2RzKGRzLCBvdXRGaWVsZHMsIGZhbHNlLCB3aWRnZXRJZClcbiAgaWYgKHJlY29yZHNBcmVSZWFkYWJsZShyZWNvcmRzKSkgcmV0dXJuIHJlY29yZHNcblxuICByZWNvcmRzID0gYXdhaXQgcnVuUXVlcnlhYmxlTWV0aG9kcyhkcywgb3V0RmllbGRzLCB0cnVlLCB3aWRnZXRJZClcbiAgaWYgKHJlY29yZHNBcmVSZWFkYWJsZShyZWNvcmRzKSkgcmV0dXJuIHJlY29yZHNcblxuICByZXR1cm4gcmVjb3Jkc1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZldGNoTGF5ZXJSZWNvcmRzT3B0aW9ucyB7XG4gIC8qKiBJZ25vcmEgY2FjaGUgZG8gbWFwYSBlIGZvcsOnYSBxdWVyeS9sb2FkQWxsICjDunRpbCBubyBFbnRlcnByaXNlKS4gKi9cbiAgZm9yY2VRdWVyeT86IGJvb2xlYW5cbiAgeWVhckZpZWxkSmltdT86IHN0cmluZ1xuICByZWNvcnRlRmllbGRKaW11Pzogc3RyaW5nXG4gIGZpZWxkcz86IElNRmllbGRTY2hlbWFbXVxuICAvKiogSUQgZGEgd2lkZ2V0IHBhcmEgYXV0ZW50aWNhw6fDo28gbmEgY29uc3VsdGEgSmltdS4gKi9cbiAgd2lkZ2V0SWQ/OiBzdHJpbmdcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZU91dEZpZWxkcyAoXG4gIHllYXJGaWVsZEppbXU/OiBzdHJpbmcsXG4gIHJlY29ydGVGaWVsZEppbXU/OiBzdHJpbmcsXG4gIGZpZWxkcz86IElNRmllbGRTY2hlbWFbXVxuKTogc3RyaW5nW10ge1xuICBpZiAoIWZpZWxkcz8ubGVuZ3RoIHx8ICF5ZWFyRmllbGRKaW11IHx8ICFyZWNvcnRlRmllbGRKaW11KSByZXR1cm4gWycqJ11cbiAgY29uc3Qga2V5cyA9IHJlc29sdmVBdHRyaWJ1dGVLZXlzKGZpZWxkcywgeWVhckZpZWxkSmltdSwgcmVjb3J0ZUZpZWxkSmltdSlcbiAgaWYgKCFrZXlzKSByZXR1cm4gWycqJ11cbiAgcmV0dXJuIFsnKicsIGtleXMueWVhcktleSwga2V5cy5yZWNvcnRlS2V5XVxufVxuXG4vKiogRGV0ZWN0YSBjb2x1bmEgZGUgYW5vIHBlbG9zIHZhbG9yZXMgcmVhaXMgKGV4LjogQW5vID0gMi4wMDEsIDIwMDEpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRldGVjdFllYXJLZXlGcm9tUm93cyAoXG4gIHJvd3M6IFJlY29yZDxzdHJpbmcsIHVua25vd24+W10sXG4gIGhpbnQ/OiBzdHJpbmdcbik6IHN0cmluZyB8IG51bGwge1xuICBpZiAoIXJvd3MubGVuZ3RoKSByZXR1cm4gbnVsbFxuXG4gIGNvbnN0IGtleXMgPSBuZXcgU2V0PHN0cmluZz4oKVxuICBmb3IgKGNvbnN0IHJvdyBvZiByb3dzLnNsaWNlKDAsIDUwKSkge1xuICAgIE9iamVjdC5rZXlzKHJvdykuZm9yRWFjaCgoaykgPT4ga2V5cy5hZGQoaykpXG4gIH1cblxuICBpZiAoaGludCkge1xuICAgIGNvbnN0IG1hdGNoID0gWy4uLmtleXNdLmZpbmQoKGspID0+IGsudG9Mb3dlckNhc2UoKSA9PT0gaGludC50b0xvd2VyQ2FzZSgpKVxuICAgIGlmIChtYXRjaCkgcmV0dXJuIG1hdGNoXG4gIH1cblxuICBsZXQgYmVzdEtleTogc3RyaW5nIHwgbnVsbCA9IG51bGxcbiAgbGV0IGJlc3RTY29yZSA9IDBcbiAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgIGlmICgvXihvYmplY3RpZHxnbG9iYWxpZHxzaGFwZXxmaWQpJC9pLnRlc3Qoa2V5KSkgY29udGludWVcbiAgICBsZXQgc2NvcmUgPSAwXG4gICAgZm9yIChjb25zdCByb3cgb2Ygcm93cykge1xuICAgICAgY29uc3QgeSA9IHBhcnNlWWVhcihyb3dba2V5XSlcbiAgICAgIGlmICh5ICE9IG51bGwgJiYgeSA+PSAxOTg1ICYmIHkgPD0gMjAzNSkgc2NvcmUrK1xuICAgIH1cbiAgICBpZiAoc2NvcmUgPiBiZXN0U2NvcmUpIHtcbiAgICAgIGJlc3RTY29yZSA9IHNjb3JlXG4gICAgICBiZXN0S2V5ID0ga2V5XG4gICAgfVxuICB9XG4gIHJldHVybiBiZXN0U2NvcmUgPiAwID8gYmVzdEtleSA6IG51bGxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRldGVjdFJlY29ydGVLZXlGcm9tUm93cyAoXG4gIHJvd3M6IFJlY29yZDxzdHJpbmcsIHVua25vd24+W10sXG4gIHJlY29ydGVIaW50OiBzdHJpbmdcbik6IHN0cmluZyB8IG51bGwge1xuICBpZiAoIXJvd3MubGVuZ3RoKSByZXR1cm4gbnVsbFxuICBjb25zdCBrZXlzID0gbmV3IFNldDxzdHJpbmc+KClcbiAgZm9yIChjb25zdCByb3cgb2Ygcm93cy5zbGljZSgwLCA1KSkge1xuICAgIE9iamVjdC5rZXlzKHJvdykuZm9yRWFjaCgoaykgPT4ga2V5cy5hZGQoaykpXG4gIH1cbiAgY29uc3QgZXhhY3QgPSBbLi4ua2V5c10uZmluZChcbiAgICAoaykgPT4gay50b0xvd2VyQ2FzZSgpID09PSByZWNvcnRlSGludC50b0xvd2VyQ2FzZSgpXG4gIClcbiAgaWYgKGV4YWN0KSByZXR1cm4gZXhhY3RcbiAgcmV0dXJuIChcbiAgICBbLi4ua2V5c10uZmluZChcbiAgICAgIChrKSA9PlxuICAgICAgICBub3JtYWxpemVSZWNvcnRlVG9rZW4oaykgPT09IG5vcm1hbGl6ZVJlY29ydGVUb2tlbihyZWNvcnRlSGludClcbiAgICApID8/IG51bGxcbiAgKVxufVxuXG4vKiogTW9udGEgc8OpcmllIGEgcGFydGlyIGRlIGF0cmlidXRvcyBicnV0b3MgKFJFU1QgLyBxdWVyeUZlYXR1cmVzKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFllYXJTZXJpZXNGcm9tQXR0cmlidXRlUm93cyAoXG4gIHJvd3M6IFJlY29yZDxzdHJpbmcsIHVua25vd24+W10sXG4gIHllYXJGaWVsZEppbXU6IHN0cmluZyxcbiAgcmVjb3J0ZUZpZWxkSmltdTogc3RyaW5nLFxuICBmaWVsZHM/OiBJTUZpZWxkU2NoZW1hW11cbik6IFllYXJWYWx1ZVJvd1tdIHtcbiAgaWYgKCFyb3dzLmxlbmd0aCkgcmV0dXJuIFtdXG5cbiAgY29uc3QgYXNSZWNvcmRzID0gcm93cy5tYXAoKGF0dHJpYnV0ZXMpID0+ICh7IGF0dHJpYnV0ZXMgfSkpXG4gIGNvbnN0IHN0YW5kYXJkID0gYnVpbGRZZWFyU2VyaWVzKFxuICAgIGFzUmVjb3JkcyxcbiAgICB5ZWFyRmllbGRKaW11LFxuICAgIHJlY29ydGVGaWVsZEppbXUsXG4gICAgZmllbGRzXG4gIClcbiAgaWYgKHN0YW5kYXJkLmxlbmd0aCA+IDApIHJldHVybiBzdGFuZGFyZFxuXG4gIGNvbnN0IHllYXJLZXkgPSBkZXRlY3RZZWFyS2V5RnJvbVJvd3Mocm93cywgeWVhckZpZWxkSmltdSkgPz8geWVhckZpZWxkSmltdVxuICBjb25zdCByZWNvcnRlS2V5ID1cbiAgICBkZXRlY3RSZWNvcnRlS2V5RnJvbVJvd3Mocm93cywgcmVjb3J0ZUZpZWxkSmltdSkgPz8gcmVjb3J0ZUZpZWxkSmltdVxuXG4gIGlmICgheWVhcktleSB8fCAhcmVjb3J0ZUtleSkgcmV0dXJuIFtdXG5cbiAgY29uc3Qgc2VyaWVzOiBZZWFyVmFsdWVSb3dbXSA9IFtdXG4gIGZvciAoY29uc3Qgcm93IG9mIHJvd3MpIHtcbiAgICBjb25zdCB5ZWFyID0gcGFyc2VZZWFyKHJvd1t5ZWFyS2V5XSlcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlTnVtZXJpY1ZhbHVlKHJvd1tyZWNvcnRlS2V5XSlcbiAgICBpZiAoeWVhciA9PSBudWxsIHx8IHZhbHVlID09IG51bGwpIGNvbnRpbnVlXG4gICAgc2VyaWVzLnB1c2goeyB5ZWFyLCB2YWx1ZSB9KVxuICB9XG4gIHJldHVybiBzZXJpZXMuc29ydCgoYSwgYikgPT4gYS55ZWFyIC0gYi55ZWFyKVxufVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaFJhd0F0dHJpYnV0ZVJvd3NGcm9tTGF5ZXIgKFxuICBkczogUXVlcmlhYmxlTGF5ZXJcbik6IFByb21pc2U8UmVjb3JkPHN0cmluZywgdW5rbm93bj5bXT4ge1xuICBjb25zdCBsYXllciA9IGRzLmxheWVyIGFzIHtcbiAgICBsb2FkPzogKCkgPT4gUHJvbWlzZTx2b2lkPlxuICAgIGxvYWRlZD86IGJvb2xlYW5cbiAgICBsb2FkU3RhdHVzPzogc3RyaW5nXG4gICAgcXVlcnlGZWF0dXJlcz86IChwOiBvYmplY3QpID0+IFByb21pc2U8e1xuICAgICAgZmVhdHVyZXM/OiBBcnJheTx7IGF0dHJpYnV0ZXM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB9PlxuICAgIH0+XG4gIH1cbiAgaWYgKCFsYXllcj8ucXVlcnlGZWF0dXJlcykgcmV0dXJuIFtdXG5cbiAgdHJ5IHtcbiAgICBpZiAoXG4gICAgICB0eXBlb2YgbGF5ZXIubG9hZCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgbGF5ZXIubG9hZFN0YXR1cyAhPT0gJ2xvYWRlZCcgJiZcbiAgICAgICFsYXllci5sb2FkZWRcbiAgICApIHtcbiAgICAgIGF3YWl0IGxheWVyLmxvYWQoKVxuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBsYXllci5xdWVyeUZlYXR1cmVzKHtcbiAgICAgIHdoZXJlOiAnMT0xJyxcbiAgICAgIG91dEZpZWxkczogWycqJ10sXG4gICAgICByZXR1cm5HZW9tZXRyeTogZmFsc2VcbiAgICB9KVxuICAgIHJldHVybiAocmVzdWx0LmZlYXR1cmVzID8/IFtdKVxuICAgICAgLm1hcCgoZikgPT4gKHsgLi4uKGYuYXR0cmlidXRlcyA/PyB7fSkgfSkpXG4gICAgICAuZmlsdGVyKChhKSA9PiBPYmplY3Qua2V5cyhhKS5sZW5ndGggPiAwKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gW11cbiAgfVxufVxuXG5mdW5jdGlvbiBhdHRyaWJ1dGVSb3dzU2NvcmUgKFxuICByb3dzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPltdXG4pOiBudW1iZXIge1xuICBpZiAoIXJvd3MubGVuZ3RoKSByZXR1cm4gMFxuICBjb25zdCBzYW1wbGUgPSByb3dzWzBdXG4gIHJldHVybiBPYmplY3Qua2V5cyhzYW1wbGUpLmZpbHRlcihcbiAgICAoaykgPT4gIS9eKG9iamVjdGlkfGdsb2JhbGlkfHNoYXBlfGZpZCkkL2kudGVzdChrKVxuICApLmxlbmd0aFxufVxuXG4vKipcbiAqIENhcnJlZ2EgbGluaGFzIGRhIHRhYmVsYSBQUk9ERVMgcHJpb3JpemFuZG8gYXRyaWJ1dG9zIGJydXRvcyBkYSBjYW1hZGFcbiAqIChtZXNtYSBmb250ZSBkYSB0YWJlbGEgZG8gUG9ydGFsKS5cbiAqL1xuZnVuY3Rpb24gcmVjb3Jkc1RvQXR0cmlidXRlUm93cyAocmVjb3JkczogRGF0YVJlY29yZFtdKTogUmVjb3JkPHN0cmluZywgdW5rbm93bj5bXSB7XG4gIHJldHVybiByZWNvcmRzXG4gICAgLm1hcCgocikgPT4gZ2V0UGxhaW5BdHRyaWJ1dGVzKHIpKVxuICAgIC5maWx0ZXIoKGEpID0+IE9iamVjdC5rZXlzKGEpLmxlbmd0aCA+IDApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFByb2Rlc0F0dHJpYnV0ZVJvd3MgKFxuICBkYXRhU291cmNlOiB1bmtub3duLFxuICBvcHRpb25zPzogRmV0Y2hMYXllclJlY29yZHNPcHRpb25zXG4pOiBQcm9taXNlPFJlY29yZDxzdHJpbmcsIHVua25vd24+W10+IHtcbiAgY29uc3QgZHMgPSBkYXRhU291cmNlIGFzIFF1ZXJpYWJsZUxheWVyICYgeyB1cmw/OiBzdHJpbmcgfVxuICBjb25zdCBjYW5kaWRhdGVzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPltdW10gPSBbXVxuXG4gIGNvbnN0IGxvYWRlZCA9IGRzLmdldFJlY29yZHM/LigpID8/IGRzLmdldEFsbExvYWRlZFJlY29yZHM/LigpID8/IFtdXG4gIGlmIChsb2FkZWQubGVuZ3RoKSB7XG4gICAgY2FuZGlkYXRlcy5wdXNoKHJlY29yZHNUb0F0dHJpYnV0ZVJvd3MobG9hZGVkKSlcbiAgfVxuXG4gIGNhbmRpZGF0ZXMucHVzaChhd2FpdCBmZXRjaFJhd0F0dHJpYnV0ZVJvd3NGcm9tTGF5ZXIoZHMpKVxuXG4gIGNvbnN0IHJlc3RSb3dzID0gYXdhaXQgZmV0Y2hWaWFBcmNnaXNSZXN0KGRzKVxuICBpZiAocmVzdFJvd3MubGVuZ3RoKSBjYW5kaWRhdGVzLnB1c2gocmVzdFJvd3MpXG5cbiAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IGZldGNoTGF5ZXJSZWNvcmRzKGRhdGFTb3VyY2UsIG9wdGlvbnMpXG4gIGlmIChyZWNvcmRzLmxlbmd0aCkge1xuICAgIGNhbmRpZGF0ZXMucHVzaChyZWNvcmRzVG9BdHRyaWJ1dGVSb3dzKHJlY29yZHMpKVxuICB9XG5cbiAgaWYgKG9wdGlvbnM/LnllYXJGaWVsZEppbXUgJiYgb3B0aW9ucz8ucmVjb3J0ZUZpZWxkSmltdSkge1xuICAgIGZvciAoY29uc3Qgcm93cyBvZiBjYW5kaWRhdGVzKSB7XG4gICAgICBpZiAoIXJvd3MubGVuZ3RoKSBjb250aW51ZVxuICAgICAgY29uc3Qgc2VyaWVzID0gYnVpbGRZZWFyU2VyaWVzRnJvbUF0dHJpYnV0ZVJvd3MoXG4gICAgICAgIHJvd3MsXG4gICAgICAgIG9wdGlvbnMueWVhckZpZWxkSmltdSxcbiAgICAgICAgb3B0aW9ucy5yZWNvcnRlRmllbGRKaW11LFxuICAgICAgICBvcHRpb25zLmZpZWxkc1xuICAgICAgKVxuICAgICAgaWYgKHNlcmllcy5sZW5ndGggPiAwKSByZXR1cm4gcm93c1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjYW5kaWRhdGVzLnJlZHVjZSgoYmVzdCwgY3VyKSA9PiB7XG4gICAgaWYgKCFjdXIubGVuZ3RoKSByZXR1cm4gYmVzdFxuICAgIGlmICghYmVzdC5sZW5ndGgpIHJldHVybiBjdXJcbiAgICByZXR1cm4gYXR0cmlidXRlUm93c1Njb3JlKGN1cikgPiBhdHRyaWJ1dGVSb3dzU2NvcmUoYmVzdCkgPyBjdXIgOiBiZXN0XG4gIH0sIFtdIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+W10pXG59XG5cbi8qKiBDYXJyZWdhIHRvZG9zIG9zIHJlZ2lzdHJvcyBkYSBjYW1hZGEgKHRhYmVsYSBhbm8gw5cgcmVjb3J0ZXMpLiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoTGF5ZXJSZWNvcmRzIChcbiAgZGF0YVNvdXJjZTogdW5rbm93bixcbiAgb3B0aW9ucz86IEZldGNoTGF5ZXJSZWNvcmRzT3B0aW9uc1xuKTogUHJvbWlzZTxEYXRhUmVjb3JkW10+IHtcbiAgY29uc3QgZHMgPSBkYXRhU291cmNlIGFzIFF1ZXJpYWJsZUxheWVyXG4gIGNvbnN0IGNhY2hlZCA9IGRzLmdldEFsbExvYWRlZFJlY29yZHM/LigpID8/IGRzLmdldFJlY29yZHM/LigpID8/IFtdXG4gIGNvbnN0IG91dEZpZWxkcyA9IHJlc29sdmVPdXRGaWVsZHMoXG4gICAgb3B0aW9ucz8ueWVhckZpZWxkSmltdSxcbiAgICBvcHRpb25zPy5yZWNvcnRlRmllbGRKaW11LFxuICAgIG9wdGlvbnM/LmZpZWxkc1xuICApXG5cbiAgaWYgKCFvcHRpb25zPy5mb3JjZVF1ZXJ5ICYmIHJlY29yZHNBcmVSZWFkYWJsZShjYWNoZWQpKSB7XG4gICAgcmV0dXJuIGNhY2hlZFxuICB9XG5cbiAgY29uc3QgcXVlcmllZCA9IGF3YWl0IHF1ZXJ5QWxsUmVjb3Jkcyhkcywgb3V0RmllbGRzLCBvcHRpb25zPy53aWRnZXRJZClcbiAgaWYgKHJlY29yZHNBcmVSZWFkYWJsZShxdWVyaWVkKSkgcmV0dXJuIHF1ZXJpZWRcbiAgaWYgKHF1ZXJpZWQubGVuZ3RoKSByZXR1cm4gcXVlcmllZFxuXG4gIGlmICghb3B0aW9ucz8uZm9yY2VRdWVyeSkgcmV0dXJuIGNhY2hlZFxuICByZXR1cm4gcXVlcmllZC5sZW5ndGggPyBxdWVyaWVkIDogY2FjaGVkXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVJlY29ydGVUb2tlbiAodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiB2YWx1ZVxuICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgLm5vcm1hbGl6ZSgnTkZEJylcbiAgICAucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZywgJycpXG4gICAgLnJlcGxhY2UoL1tcXHMtXSsvZywgJ18nKVxufVxuXG5mdW5jdGlvbiBpc1llYXJOYW1lZEZpZWxkIChmaWVsZDogSU1GaWVsZFNjaGVtYSk6IGJvb2xlYW4ge1xuICBjb25zdCB5ID1cbiAgICBwYXJzZVllYXIoZmllbGQuamltdU5hbWUpID8/XG4gICAgcGFyc2VZZWFyKGZpZWxkLm5hbWUpID8/XG4gICAgcGFyc2VZZWFyKGZpZWxkLmFsaWFzKVxuICByZXR1cm4geSAhPSBudWxsICYmIHkgPj0gMTk4NSAmJiB5IDw9IDIwMzVcbn1cblxuZnVuY3Rpb24gZmluZFJlY29ydGVOYW1lRmllbGQgKGZpZWxkczogSU1GaWVsZFNjaGVtYVtdKTogSU1GaWVsZFNjaGVtYSB8IG51bGwge1xuICBjb25zdCBwYXR0ZXJucyA9IFsncmVjb3J0ZScsICdyZWdpYW8nLCAncmVnacOjbycsICdiaW9tYScsICdub21lJywgJ25hbWUnLCAnbGFiZWwnXVxuICByZXR1cm4gKFxuICAgIGZpZWxkcy5maW5kKChmKSA9PiB7XG4gICAgICBjb25zdCBqID0gZi5qaW11TmFtZT8udG9Mb3dlckNhc2UoKSA/PyAnJ1xuICAgICAgY29uc3QgbiA9IGYubmFtZT8udG9Mb3dlckNhc2UoKSA/PyAnJ1xuICAgICAgcmV0dXJuIHBhdHRlcm5zLnNvbWUoKHApID0+IGouaW5jbHVkZXMocCkgfHwgbi5pbmNsdWRlcyhwKSlcbiAgICB9KSA/PyBudWxsXG4gIClcbn1cblxuLyoqIExheW91dCBhbHRlcm5hdGl2bzogY2FkYSByZWdpc3RybyA9IHJlY29ydGU7IGNvbHVuYXMgbnVtw6lyaWNhcyA9IGFub3MuICovXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRZZWFyU2VyaWVzRnJvbVJlY29ydGVSb3dzIChcbiAgcmVjb3JkczogUmVjb3JkTGlrZVtdLFxuICByZWNvcnRlRmllbGRKaW11OiBzdHJpbmcsXG4gIGZpZWxkczogSU1GaWVsZFNjaGVtYVtdXG4pOiBZZWFyVmFsdWVSb3dbXSB7XG4gIGNvbnN0IHllYXJGaWVsZHMgPSBmaWVsZHMuZmlsdGVyKGlzWWVhck5hbWVkRmllbGQpXG4gIGlmICgheWVhckZpZWxkcy5sZW5ndGgpIHJldHVybiBbXVxuXG4gIGNvbnN0IHRhcmdldCA9IG5vcm1hbGl6ZVJlY29ydGVUb2tlbihyZWNvcnRlRmllbGRKaW11KVxuICBjb25zdCBuYW1lRmllbGQgPSBmaW5kUmVjb3J0ZU5hbWVGaWVsZChmaWVsZHMpXG5cbiAgY29uc3Qgcm93ID1cbiAgICByZWNvcmRzLmZpbmQoKHJlYykgPT4ge1xuICAgICAgaWYgKG5hbWVGaWVsZCkge1xuICAgICAgICBjb25zdCBsYWJlbCA9IHJlYWRSZWNvcmRWYWx1ZShyZWMsIG5hbWVGaWVsZCwgbmFtZUZpZWxkLmppbXVOYW1lKVxuICAgICAgICBpZiAobGFiZWwgIT0gbnVsbCAmJiBub3JtYWxpemVSZWNvcnRlVG9rZW4oU3RyaW5nKGxhYmVsKSkgPT09IHRhcmdldCkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgZiBvZiBmaWVsZHMpIHtcbiAgICAgICAgaWYgKGlzWWVhck5hbWVkRmllbGQoZikgfHwgZi5qaW11TmFtZSA9PT0gcmVjb3J0ZUZpZWxkSmltdSkgY29udGludWVcbiAgICAgICAgY29uc3QgdiA9IHJlYWRSZWNvcmRWYWx1ZShyZWMsIGYsIGYuamltdU5hbWUpXG4gICAgICAgIGlmICh2ICE9IG51bGwgJiYgbm9ybWFsaXplUmVjb3J0ZVRva2VuKFN0cmluZyh2KSkgPT09IHRhcmdldCkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pID8/IG51bGxcblxuICBpZiAoIXJvdykgcmV0dXJuIFtdXG5cbiAgY29uc3Qgc2VyaWVzOiBZZWFyVmFsdWVSb3dbXSA9IFtdXG4gIGZvciAoY29uc3QgeWYgb2YgeWVhckZpZWxkcykge1xuICAgIGNvbnN0IHllYXIgPVxuICAgICAgcGFyc2VZZWFyKHlmLmppbXVOYW1lKSA/PyBwYXJzZVllYXIoeWYubmFtZSkgPz8gcGFyc2VZZWFyKHlmLmFsaWFzKVxuICAgIGNvbnN0IHZhbHVlID0gcGFyc2VOdW1lcmljVmFsdWUocmVhZFJlY29yZFZhbHVlKHJvdywgeWYsIHlmLmppbXVOYW1lKSlcbiAgICBpZiAoeWVhciA9PSBudWxsIHx8IHZhbHVlID09IG51bGwpIGNvbnRpbnVlXG4gICAgc2VyaWVzLnB1c2goeyB5ZWFyLCB2YWx1ZSB9KVxuICB9XG5cbiAgcmV0dXJuIHNlcmllcy5zb3J0KChhLCBiKSA9PiBhLnllYXIgLSBiLnllYXIpXG59XG5cbmZ1bmN0aW9uIGJ1aWxkWWVhclNlcmllc1llYXJSb3dzIChcbiAgcmVjb3JkczogUmVjb3JkTGlrZVtdLFxuICB5ZWFyRmllbGRKaW11OiBzdHJpbmcsXG4gIHJlY29ydGVGaWVsZEppbXU6IHN0cmluZyxcbiAgZmllbGRzPzogSU1GaWVsZFNjaGVtYVtdXG4pOiBZZWFyVmFsdWVSb3dbXSB7XG4gIGNvbnN0IHllYXJGaWVsZCA9IGZpZWxkcz8ubGVuZ3RoXG4gICAgPyBmaW5kRmllbGRCeUppbXVOYW1lKGZpZWxkcywgeWVhckZpZWxkSmltdSlcbiAgICA6IG51bGxcbiAgY29uc3QgcmVjb3J0ZUZpZWxkID0gZmllbGRzPy5sZW5ndGhcbiAgICA/IGZpbmRGaWVsZEJ5SmltdU5hbWUoZmllbGRzLCByZWNvcnRlRmllbGRKaW11KVxuICAgIDogbnVsbFxuICBjb25zdCBzZXJpZXM6IFllYXJWYWx1ZVJvd1tdID0gW11cblxuICBmb3IgKGNvbnN0IHJlYyBvZiByZWNvcmRzKSB7XG4gICAgY29uc3QgeWVhciA9IHBhcnNlWWVhcihcbiAgICAgIHJlYWRSZWNvcmRWYWx1ZShyZWMsIHllYXJGaWVsZCwgeWVhckZpZWxkSmltdSlcbiAgICApXG4gICAgY29uc3QgdmFsdWUgPSBwYXJzZU51bWVyaWNWYWx1ZShcbiAgICAgIHJlYWRSZWNvcmRWYWx1ZShyZWMsIHJlY29ydGVGaWVsZCwgcmVjb3J0ZUZpZWxkSmltdSlcbiAgICApXG4gICAgaWYgKHllYXIgPT0gbnVsbCB8fCB2YWx1ZSA9PSBudWxsKSBjb250aW51ZVxuXG4gICAgc2VyaWVzLnB1c2goeyB5ZWFyLCB2YWx1ZSB9KVxuICB9XG5cbiAgcmV0dXJuIHNlcmllcy5zb3J0KChhLCBiKSA9PiBhLnllYXIgLSBiLnllYXIpXG59XG5cbmZ1bmN0aW9uIGNvbGxlY3RSZWNvcmRBdHRyaWJ1dGVLZXlzIChyZWNvcmRzOiBSZWNvcmRMaWtlW10pOiBzdHJpbmdbXSB7XG4gIGNvbnN0IGtleXMgPSBuZXcgU2V0PHN0cmluZz4oKVxuICBmb3IgKGNvbnN0IHJlYyBvZiByZWNvcmRzLnNsaWNlKDAsIDEwMCkpIHtcbiAgICBPYmplY3Qua2V5cyhnZXRQbGFpbkF0dHJpYnV0ZXMocmVjKSkuZm9yRWFjaCgoaykgPT4ga2V5cy5hZGQoaykpXG4gIH1cbiAgcmV0dXJuIFsuLi5rZXlzXVxufVxuXG5mdW5jdGlvbiByZXNvbHZlS2V5c0Zyb21BdHRyaWJ1dGVOYW1lcyAoXG4gIGtleXM6IHN0cmluZ1tdLFxuICB5ZWFyRmllbGRKaW11OiBzdHJpbmcsXG4gIHJlY29ydGVGaWVsZEppbXU6IHN0cmluZ1xuKTogeyB5ZWFyS2V5OiBzdHJpbmc7IHJlY29ydGVLZXk6IHN0cmluZyB9IHwgbnVsbCB7XG4gIGNvbnN0IHJlY29ydGVLZXkgPSBrZXlzLmZpbmQoXG4gICAgKGspID0+XG4gICAgICBrLnRvTG93ZXJDYXNlKCkgPT09IHJlY29ydGVGaWVsZEppbXUudG9Mb3dlckNhc2UoKSB8fFxuICAgICAgbm9ybWFsaXplUmVjb3J0ZVRva2VuKGspID09PSBub3JtYWxpemVSZWNvcnRlVG9rZW4ocmVjb3J0ZUZpZWxkSmltdSlcbiAgKVxuICBsZXQgeWVhcktleSA9IGtleXMuZmluZCgoaykgPT4gay50b0xvd2VyQ2FzZSgpID09PSB5ZWFyRmllbGRKaW11LnRvTG93ZXJDYXNlKCkpXG4gIGlmICgheWVhcktleSkge1xuICAgIHllYXJLZXkgPSBrZXlzLmZpbmQoKGspID0+XG4gICAgICBZRUFSX05BTUVfUEFUVEVSTlMuc29tZShcbiAgICAgICAgKHApID0+IGsudG9Mb3dlckNhc2UoKSA9PT0gcCB8fCBrLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocClcbiAgICAgIClcbiAgICApXG4gIH1cbiAgaWYgKCF5ZWFyS2V5IHx8ICFyZWNvcnRlS2V5KSByZXR1cm4gbnVsbFxuICByZXR1cm4geyB5ZWFyS2V5LCByZWNvcnRlS2V5IH1cbn1cblxuLyoqIMOabHRpbW8gcmVjdXJzbzogaW5mZXJlIGNvbHVuYXMgcGVsb3Mgbm9tZXMgcmVhaXMgbm9zIGF0cmlidXRvcyByZXRvcm5hZG9zLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkWWVhclNlcmllc0luZmVycmVkIChcbiAgcmVjb3JkczogUmVjb3JkTGlrZVtdLFxuICB5ZWFyRmllbGRKaW11OiBzdHJpbmcsXG4gIHJlY29ydGVGaWVsZEppbXU6IHN0cmluZ1xuKTogWWVhclZhbHVlUm93W10ge1xuICBjb25zdCBrZXlzID0gY29sbGVjdFJlY29yZEF0dHJpYnV0ZUtleXMocmVjb3JkcylcbiAgY29uc3QgcmVzb2x2ZWQgPSByZXNvbHZlS2V5c0Zyb21BdHRyaWJ1dGVOYW1lcyhrZXlzLCB5ZWFyRmllbGRKaW11LCByZWNvcnRlRmllbGRKaW11KVxuICBpZiAoIXJlc29sdmVkKSByZXR1cm4gW11cblxuICBjb25zdCBzZXJpZXM6IFllYXJWYWx1ZVJvd1tdID0gW11cbiAgZm9yIChjb25zdCByZWMgb2YgcmVjb3Jkcykge1xuICAgIGNvbnN0IGF0dHJzID0gZ2V0UGxhaW5BdHRyaWJ1dGVzKHJlYylcbiAgICBjb25zdCB5ZWFyID0gcGFyc2VZZWFyKGF0dHJzW3Jlc29sdmVkLnllYXJLZXldKVxuICAgIGNvbnN0IHZhbHVlID0gcGFyc2VOdW1lcmljVmFsdWUoYXR0cnNbcmVzb2x2ZWQucmVjb3J0ZUtleV0pXG4gICAgaWYgKHllYXIgPT0gbnVsbCB8fCB2YWx1ZSA9PSBudWxsKSBjb250aW51ZVxuICAgIHNlcmllcy5wdXNoKHsgeWVhciwgdmFsdWUgfSlcbiAgfVxuICByZXR1cm4gc2VyaWVzLnNvcnQoKGEsIGIpID0+IGEueWVhciAtIGIueWVhcilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkWWVhclNlcmllcyAoXG4gIHJlY29yZHM6IFJlY29yZExpa2VbXSxcbiAgeWVhckZpZWxkSmltdTogc3RyaW5nLFxuICByZWNvcnRlRmllbGRKaW11OiBzdHJpbmcsXG4gIGZpZWxkcz86IElNRmllbGRTY2hlbWFbXVxuKTogWWVhclZhbHVlUm93W10ge1xuICBjb25zdCB5ZWFyUm93cyA9IGJ1aWxkWWVhclNlcmllc1llYXJSb3dzKFxuICAgIHJlY29yZHMsXG4gICAgeWVhckZpZWxkSmltdSxcbiAgICByZWNvcnRlRmllbGRKaW11LFxuICAgIGZpZWxkc1xuICApXG4gIGlmICh5ZWFyUm93cy5sZW5ndGggPiAwKSByZXR1cm4geWVhclJvd3NcblxuICBpZiAoZmllbGRzPy5sZW5ndGgpIHtcbiAgICBjb25zdCBhbHQgPSBidWlsZFllYXJTZXJpZXNGcm9tUmVjb3J0ZVJvd3MocmVjb3JkcywgcmVjb3J0ZUZpZWxkSmltdSwgZmllbGRzKVxuICAgIGlmIChhbHQubGVuZ3RoID4gMCkgcmV0dXJuIGFsdFxuICB9XG5cbiAgcmV0dXJuIGJ1aWxkWWVhclNlcmllc0luZmVycmVkKHJlY29yZHMsIHllYXJGaWVsZEppbXUsIHJlY29ydGVGaWVsZEppbXUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRZZWFyc1JhbmdlU3VtbWFyeSAoc2VyaWVzOiBZZWFyVmFsdWVSb3dbXSk6IHN0cmluZyB8IG51bGwge1xuICBpZiAoIXNlcmllcy5sZW5ndGgpIHJldHVybiBudWxsXG4gIGNvbnN0IG1pbiA9IHNlcmllc1swXS55ZWFyXG4gIGNvbnN0IG1heCA9IHNlcmllc1tzZXJpZXMubGVuZ3RoIC0gMV0ueWVhclxuICBjb25zdCBjb3VudCA9IHNlcmllcy5sZW5ndGhcbiAgaWYgKG1pbiA9PT0gbWF4KSByZXR1cm4gYCR7bWlufSAoJHtjb3VudH0gYW5vKWBcbiAgcmV0dXJuIGAke21pbn3igJMke21heH0gKCR7Y291bnR9IGFub3MpYFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNZZWFyT3V0T2ZUeXBpY2FsUmFuZ2UgKHllYXI6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4geWVhciA8IDIwMDEgfHwgeWVhciA+IDIwMjVcbn1cblxuLyoqIFZhcmlhw6fDo28gcGVyY2VudHVhbCBkbyB2YWxvciBpbmljaWFsIChhbm8gbWFpcyBhbnRpZ28pIHBhcmEgbyBmaW5hbCAoYW5vIG1haXMgcmVjZW50ZSkuICovXG5leHBvcnQgZnVuY3Rpb24gY2FsY1BlcmNlbnRWYXJpYXRpb24gKFxuICB2YWx1ZUluaWNpYWw6IG51bWJlcixcbiAgdmFsdWVGaW5hbDogbnVtYmVyXG4pOiBudW1iZXIgfCBudWxsIHtcbiAgaWYgKCFOdW1iZXIuaXNGaW5pdGUodmFsdWVJbmljaWFsKSB8fCAhTnVtYmVyLmlzRmluaXRlKHZhbHVlRmluYWwpKSByZXR1cm4gbnVsbFxuICBpZiAodmFsdWVJbmljaWFsID09PSAwKSByZXR1cm4gbnVsbFxuICByZXR1cm4gKCh2YWx1ZUZpbmFsIC0gdmFsdWVJbmljaWFsKSAvIHZhbHVlSW5pY2lhbCkgKiAxMDBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFBlcmNlbnRWYXJpYXRpb24gKHBjdDogbnVtYmVyKTogc3RyaW5nIHtcbiAgY29uc3Qgc2lnbiA9IHBjdCA+IDAgPyAnKycgOiAnJ1xuICByZXR1cm4gYCR7c2lnbn0ke3BjdC50b0xvY2FsZVN0cmluZygncHQtQlInLCB7XG4gICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMlxuICB9KX0lYFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWVGb3JZZWFyIChcbiAgc2VyaWVzOiBZZWFyVmFsdWVSb3dbXSxcbiAgeWVhcjogbnVtYmVyXG4pOiBudW1iZXIgfCBudWxsIHtcbiAgY29uc3Qgcm93ID0gc2VyaWVzLmZpbmQoKHIpID0+IHIueWVhciA9PT0geWVhcilcbiAgcmV0dXJuIHJvdyAhPSBudWxsID8gcm93LnZhbHVlIDogbnVsbFxufVxuXG4vKiogU29tYSBvcyB2YWxvcmVzIGRvcyBhbm9zIGluZm9ybWFkb3M7IHJldG9ybmEgbnVsbCBzZSBhbGd1bSBhbm8gbsOjbyB0aXZlciBkYWRvLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1bVZhbHVlc0ZvclllYXJzIChcbiAgc2VyaWVzOiBZZWFyVmFsdWVSb3dbXSxcbiAgeWVhcnM6IG51bWJlcltdXG4pOiBudW1iZXIgfCBudWxsIHtcbiAgaWYgKCF5ZWFycy5sZW5ndGgpIHJldHVybiBudWxsXG4gIGxldCBzdW0gPSAwXG4gIGZvciAoY29uc3QgeWVhciBvZiB5ZWFycykge1xuICAgIGNvbnN0IHZhbHVlID0gZ2V0VmFsdWVGb3JZZWFyKHNlcmllcywgeWVhcilcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBzdW0gKz0gdmFsdWVcbiAgfVxuICByZXR1cm4gc3VtXG59XG5cbi8qKiBBbm9zIGRpc3BvbsOtdmVpcyBwYXJhIG8gcGVyw61vZG8gaW5pY2lhbCAoYW50ZXMgZG8gcGVyw61vZG8gZmluYWwsIHNlIGhvdXZlcikuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0WWVhcnNBbGxvd2VkRm9ySW5pY2lhbCAoXG4gIGFsbFllYXJzOiBudW1iZXJbXSxcbiAgcGVyaW9kb0ZpbmFsOiBudW1iZXJbXVxuKTogbnVtYmVyW10ge1xuICBjb25zdCBibG9ja2VkID0gbmV3IFNldChwZXJpb2RvRmluYWwpXG4gIGNvbnN0IG1heEZpbmFsID0gcGVyaW9kb0ZpbmFsLmxlbmd0aCA/IE1hdGgubWluKC4uLnBlcmlvZG9GaW5hbCkgOiBJbmZpbml0eVxuICByZXR1cm4gYWxsWWVhcnMuZmlsdGVyKCh5KSA9PiAhYmxvY2tlZC5oYXMoeSkgJiYgeSA8IG1heEZpbmFsKVxufVxuXG4vKiogQW5vcyBkaXNwb27DrXZlaXMgcGFyYSBvIHBlcsOtb2RvIGZpbmFsIChkZXBvaXMgZG8gcGVyw61vZG8gaW5pY2lhbCwgc2UgaG91dmVyKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRZZWFyc0FsbG93ZWRGb3JGaW5hbCAoXG4gIGFsbFllYXJzOiBudW1iZXJbXSxcbiAgcGVyaW9kb0luaWNpYWw6IG51bWJlcltdXG4pOiBudW1iZXJbXSB7XG4gIGNvbnN0IGJsb2NrZWQgPSBuZXcgU2V0KHBlcmlvZG9JbmljaWFsKVxuICBjb25zdCBtaW5JbmljaWFsID0gcGVyaW9kb0luaWNpYWwubGVuZ3RoID8gTWF0aC5tYXgoLi4ucGVyaW9kb0luaWNpYWwpIDogLUluZmluaXR5XG4gIHJldHVybiBhbGxZZWFycy5maWx0ZXIoKHkpID0+ICFibG9ja2VkLmhhcyh5KSAmJiB5ID4gbWluSW5pY2lhbClcbn1cblxuLyoqIE1hcmNhL2Rlc21hcmNhIHVtIGFubyBtYW50ZW5kbyBhcGVuYXMgc2VxdcOqbmNpYXMgY29uc2VjdXRpdmFzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUNvbnNlY3V0aXZlWWVhciAoXG4gIHBlcmlvZDogbnVtYmVyW10sXG4gIHllYXI6IG51bWJlclxuKTogeyBuZXh0OiBudW1iZXJbXTsgcmVqZWN0ZWQ6IGJvb2xlYW4gfSB7XG4gIGlmIChwZXJpb2QuaW5jbHVkZXMoeWVhcikpIHtcbiAgICByZXR1cm4geyBuZXh0OiBwZXJpb2QuZmlsdGVyKCh5KSA9PiB5ICE9PSB5ZWFyKSwgcmVqZWN0ZWQ6IGZhbHNlIH1cbiAgfVxuICBjb25zdCBuZXh0ID0gWy4uLnBlcmlvZCwgeWVhcl0uc29ydCgoYSwgYikgPT4gYSAtIGIpXG4gIGlmICghYXJlQ29uc2VjdXRpdmVZZWFycyhuZXh0KSkge1xuICAgIHJldHVybiB7IG5leHQ6IHBlcmlvZCwgcmVqZWN0ZWQ6IHRydWUgfVxuICB9XG4gIHJldHVybiB7IG5leHQsIHJlamVjdGVkOiBmYWxzZSB9XG59XG5cbi8qKiBWZXJpZmljYSBzZSBvcyBhbm9zIGZvcm1hbSB1bWEgc2VxdcOqbmNpYSBjb25zZWN1dGl2YSAoZXguOiAyMDEwLCAyMDExLCAyMDEyKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcmVDb25zZWN1dGl2ZVllYXJzICh5ZWFyczogbnVtYmVyW10pOiBib29sZWFuIHtcbiAgaWYgKHllYXJzLmxlbmd0aCA8PSAxKSByZXR1cm4gdHJ1ZVxuICBjb25zdCBzb3J0ZWQgPSBbLi4ueWVhcnNdLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuICBmb3IgKGxldCBpID0gMTsgaSA8IHNvcnRlZC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzb3J0ZWRbaV0gLSBzb3J0ZWRbaSAtIDFdICE9PSAxKSByZXR1cm4gZmFsc2VcbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG4vKiogUsOzdHVsbyBjb21wYWN0byBwYXJhIHVtIG91IG1haXMgYW5vcyAoZXguOiBcIjIwMTBcIiBvdSBcIjIwMTDigJMyMDEyICgzIGFub3MpXCIpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFBlcmlvZExhYmVsICh5ZWFyczogbnVtYmVyW10pOiBzdHJpbmcge1xuICBjb25zdCBzb3J0ZWQgPSBbLi4ueWVhcnNdLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuICBpZiAoIXNvcnRlZC5sZW5ndGgpIHJldHVybiAnJ1xuICBpZiAoc29ydGVkLmxlbmd0aCA9PT0gMSkgcmV0dXJuIFN0cmluZyhzb3J0ZWRbMF0pXG4gIHJldHVybiBgJHtzb3J0ZWRbMF194oCTJHtzb3J0ZWRbc29ydGVkLmxlbmd0aCAtIDFdfSAoJHtzb3J0ZWQubGVuZ3RofSBhbm9zKWBcbn1cblxuLyoqIEludGVydmFsbyBkZSBhbm9zIHNlbSBjb250YWdlbSAoZXguOiBcIjIwMTBcIiBvdSBcIjIwMTDigJMyMDEyXCIpIOKAlCB1c28gZW0gcmVzdWx0YWRvcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQZXJpb2RSYW5nZUxhYmVsICh5ZWFyczogbnVtYmVyW10pOiBzdHJpbmcge1xuICBjb25zdCBzb3J0ZWQgPSBbLi4ueWVhcnNdLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuICBpZiAoIXNvcnRlZC5sZW5ndGgpIHJldHVybiAnJ1xuICBpZiAoc29ydGVkLmxlbmd0aCA9PT0gMSkgcmV0dXJuIFN0cmluZyhzb3J0ZWRbMF0pXG4gIHJldHVybiBgJHtzb3J0ZWRbMF194oCTJHtzb3J0ZWRbc29ydGVkLmxlbmd0aCAtIDFdfWBcbn1cblxuZXhwb3J0IGludGVyZmFjZSBWYXJpYXRpb25SZXN1bHQge1xuICBwY3Q6IG51bWJlclxuICB2YWx1ZUluaWNpYWw6IG51bWJlclxuICB2YWx1ZUZpbmFsOiBudW1iZXJcbiAgeWVhcnNJbmljaWFsOiBudW1iZXJbXVxuICB5ZWFyc0ZpbmFsOiBudW1iZXJbXVxufVxuXG5leHBvcnQgdHlwZSBQZXJpb2RWYXJpYXRpb25PdXRjb21lID1cbiAgfCB7IG9rOiB0cnVlOyBkYXRhOiBWYXJpYXRpb25SZXN1bHQgfVxuICB8IHsgb2s6IGZhbHNlOyBtZXNzYWdlOiBzdHJpbmcgfVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZVBlcmlvZFZhcmlhdGlvbiAoXG4gIHNlcmllczogWWVhclZhbHVlUm93W10sXG4gIHBlcmlvZG9JbmljaWFsOiBudW1iZXJbXSxcbiAgcGVyaW9kb0ZpbmFsOiBudW1iZXJbXVxuKTogUGVyaW9kVmFyaWF0aW9uT3V0Y29tZSB7XG4gIGNvbnN0IGluaSA9IFsuLi5wZXJpb2RvSW5pY2lhbF0uc29ydCgoYSwgYikgPT4gYSAtIGIpXG4gIGNvbnN0IGZpbiA9IFsuLi5wZXJpb2RvRmluYWxdLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuXG4gIGlmICghaW5pLmxlbmd0aCB8fCAhZmluLmxlbmd0aCkge1xuICAgIHJldHVybiB7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBtZXNzYWdlOiAnU2VsZWNpb25lIHBlbG8gbWVub3MgdW0gYW5vIGVtIGNhZGEgcGVyw61vZG8uJ1xuICAgIH1cbiAgfVxuXG4gIGlmIChpbmkubGVuZ3RoICE9PSBmaW4ubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6XG4gICAgICAgICdPIHBlcsOtb2RvIGluaWNpYWwgZSBvIHBlcsOtb2RvIGZpbmFsIGRldmVtIHRlciBhIG1lc21hIHF1YW50aWRhZGUgZGUgYW5vcy4nXG4gICAgfVxuICB9XG5cbiAgaWYgKCFhcmVDb25zZWN1dGl2ZVllYXJzKGluaSkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogJ09zIGFub3MgZG8gcGVyw61vZG8gaW5pY2lhbCBkZXZlbSBzZXIgY29uc2VjdXRpdm9zLidcbiAgICB9XG4gIH1cblxuICBpZiAoIWFyZUNvbnNlY3V0aXZlWWVhcnMoZmluKSkge1xuICAgIHJldHVybiB7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBtZXNzYWdlOiAnT3MgYW5vcyBkbyBwZXLDrW9kbyBmaW5hbCBkZXZlbSBzZXIgY29uc2VjdXRpdm9zLidcbiAgICB9XG4gIH1cblxuICBjb25zdCBpbmlTZXQgPSBuZXcgU2V0KGluaSlcbiAgaWYgKGZpbi5zb21lKCh5KSA9PiBpbmlTZXQuaGFzKHkpKSkge1xuICAgIHJldHVybiB7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBtZXNzYWdlOiAnVW0gYW5vIG7Do28gcG9kZSBwZXJ0ZW5jZXIgYW9zIGRvaXMgcGVyw61vZG9zIGFvIG1lc21vIHRlbXBvLidcbiAgICB9XG4gIH1cblxuICBjb25zdCBtYXhJbmljaWFsID0gaW5pW2luaS5sZW5ndGggLSAxXVxuICBjb25zdCBtaW5GaW5hbCA9IGZpblswXVxuICBpZiAobWF4SW5pY2lhbCA+PSBtaW5GaW5hbCkge1xuICAgIHJldHVybiB7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBtZXNzYWdlOiAnTyBwZXLDrW9kbyBmaW5hbCBkZXZlIHNlciBwb3N0ZXJpb3IgYW8gcGVyw61vZG8gaW5pY2lhbC4nXG4gICAgfVxuICB9XG5cbiAgY29uc3QgdmFsdWVJbmljaWFsID0gc3VtVmFsdWVzRm9yWWVhcnMoc2VyaWVzLCBpbmkpXG4gIGNvbnN0IHZhbHVlRmluYWwgPSBzdW1WYWx1ZXNGb3JZZWFycyhzZXJpZXMsIGZpbilcblxuICBpZiAodmFsdWVJbmljaWFsID09IG51bGwgfHwgdmFsdWVGaW5hbCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6XG4gICAgICAgICdVbSBvdSBtYWlzIGFub3Mgc2VsZWNpb25hZG9zIG7Do28gcG9zc3VlbSBkYWRvIHBhcmEgZXN0ZSByZWNvcnRlLidcbiAgICB9XG4gIH1cblxuICBjb25zdCBwY3QgPSBjYWxjUGVyY2VudFZhcmlhdGlvbih2YWx1ZUluaWNpYWwsIHZhbHVlRmluYWwpXG4gIGlmIChwY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiB7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBtZXNzYWdlOlxuICAgICAgICAnQSBzb21hIGRvIHBlcsOtb2RvIGluaWNpYWwgw6kgemVybzsgbsOjbyDDqSBwb3Nzw612ZWwgY2FsY3VsYXIgYSB2YXJpYcOnw6NvIHBlcmNlbnR1YWwuJ1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgb2s6IHRydWUsXG4gICAgZGF0YToge1xuICAgICAgcGN0LFxuICAgICAgdmFsdWVJbmljaWFsLFxuICAgICAgdmFsdWVGaW5hbCxcbiAgICAgIHllYXJzSW5pY2lhbDogaW5pLFxuICAgICAgeWVhcnNGaW5hbDogZmluXG4gICAgfVxuICB9XG59XG5cbi8qKiBDb21wYXJhw6fDo28gZW50cmUgZG9pcyBhbm9zIMO6bmljb3MgKGF0YWxobyBwYXJhIHBlcsOtb2RvcyBkZSB1bSBhbm8pLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVWYXJpYXRpb24gKFxuICBzZXJpZXM6IFllYXJWYWx1ZVJvd1tdLFxuICBhbm9JbmljaWFsOiBudW1iZXIsXG4gIGFub0ZpbmFsOiBudW1iZXJcbik6IFBlcmlvZFZhcmlhdGlvbk91dGNvbWUge1xuICByZXR1cm4gY29tcHV0ZVBlcmlvZFZhcmlhdGlvbihzZXJpZXMsIFthbm9JbmljaWFsXSwgW2Fub0ZpbmFsXSlcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mID0ge307XG4vLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4vLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uZSA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmYpLnJlZHVjZSgocHJvbWlzZXMsIGtleSkgPT4ge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZltrZXldKGNodW5rSWQsIHByb21pc2VzKTtcblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sIFtdKSk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIG5vdCBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRpZiAoY2h1bmtJZCA9PT0gXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19lc3JpX2FyY2dpcy1yZXN0LWZlYXR1cmUtc2VydmljZV9kaXN0X2VzbV9pbmRleF9qc1wiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy92ZW5kb3JzLW5vZGVfbW9kdWxlc19lc3JpX2FyY2dpcy1yZXN0LWZlYXR1cmUtc2VydmljZV9kaXN0X2VzbV9pbmRleF9qcy5qc1wiO1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIHVuZGVmaW5lZDtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcImV4Yi1jbGllbnQ6XCI7XG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9ICh1cmwsIGRvbmUsIGtleSwgY2h1bmtJZCkgPT4ge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSAocHJldiwgZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG5cdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dmFyIGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG5cdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRzY3JpcHQucGFyZW50Tm9kZSAmJiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuXHRcdGRvbmVGbnMgJiYgZG9uZUZucy5mb3JFYWNoKChmbikgPT4gKGZuKGV2ZW50KSkpO1xuXHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcblx0fVxuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIndpZGdldHMvY29tcGFyYWRvcl9wcm9kZXMvZGlzdC9ydW50aW1lL3dpZGdldFwiOiAwXG59O1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYuaiA9IChjaHVua0lkLCBwcm9taXNlcykgPT4ge1xuXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgPyBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gOiB1bmRlZmluZWQ7XG5cdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG5cdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmKHRydWUpIHsgLy8gYWxsIGNodW5rcyBoYXZlIEpTXG5cdFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuXHRcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gKGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdKSk7XG5cdFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuXHRcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcblx0XHRcdFx0XHR2YXIgdXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy51KGNodW5rSWQpO1xuXHRcdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcblx0XHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblx0XHRcdFx0XHR2YXIgbG9hZGluZ0VuZGVkID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSkge1xuXHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuXHRcdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YVsxXShlcnJvcik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubCh1cmwsIGxvYWRpbmdFbmRlZCwgXCJjaHVuay1cIiArIGNodW5rSWQsIGNodW5rSWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxufTtcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblxufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2V4Yl9jbGllbnRcIl0gPSBzZWxmW1wid2VicGFja0NodW5rZXhiX2NsaWVudFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHtcclxuICBSZWFjdCxcclxuICBqc3gsXHJcbiAgdHlwZSBBbGxXaWRnZXRQcm9wcyxcclxuICBEYXRhU291cmNlQ29tcG9uZW50LFxyXG4gIFF1ZXJ5U2NvcGVcclxufSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IExvYWRpbmcsIExhYmVsLCBCdXR0b24gfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgdHlwZSB7IElNQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xyXG5pbXBvcnQge1xyXG4gIExBQkVMX1BFUklPRE9fRklOQUwsXHJcbiAgTEFCRUxfUEVSSU9ET19JTklDSUFMLFxyXG4gIEhJTlRfUEVSSU9EX1JVTEVTLFxyXG4gIE1TR19OT1RfQ09ORklHVVJFRCxcclxuICBNU0dfTk9fREFUQSxcclxuICBQTEFDRUhPTERFUl9QRVJJT0RPX0ZJTkFMLFxyXG4gIFBMQUNFSE9MREVSX1BFUklPRE9fSU5JQ0lBTCxcclxuICBQUk9ERVNfVEFCTEVfUVVFUllcclxufSBmcm9tICcuLi9jb25zdGFudHMnXHJcbmltcG9ydCB7IFZhcmlhdGlvblJlc3VsdFBhbmVsIH0gZnJvbSAnLi9jb21wb25lbnRzL3ZhcmlhdGlvbi1yZXN1bHQnXHJcbmltcG9ydCB7IHVzZVByb2Rlc1NlcmllcyB9IGZyb20gJy4vaG9va3MvdXNlLXByb2Rlcy1zZXJpZXMnXHJcbmltcG9ydCB7IHVzZVBlcmlvZFNlbGVjdGlvbiB9IGZyb20gJy4vaG9va3MvdXNlLXBlcmlvZC1zZWxlY3Rpb24nXHJcbmltcG9ydCB7IHdpZGdldFN0eWxlcyB9IGZyb20gJy4vc3R5bGVzJ1xyXG5pbXBvcnQgeyBZZWFyUGVyaW9kUGlja2VyIH0gZnJvbSAnLi95ZWFyLXBlcmlvZC1waWNrZXInXHJcblxyXG5jb25zdCBXaWRnZXQgPSAocHJvcHM6IEFsbFdpZGdldFByb3BzPElNQ29uZmlnPikgPT4ge1xyXG4gIGNvbnN0IHVzZURzID0gcHJvcHMudXNlRGF0YVNvdXJjZXM/LlswXVxyXG4gIGNvbnN0IHllYXJGaWVsZCA9IHByb3BzLmNvbmZpZz8ueWVhckZpZWxkXHJcbiAgY29uc3QgcmVjb3J0ZUZpZWxkID0gcHJvcHMuY29uZmlnPy5yZWNvcnRlRmllbGRcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgc2VyaWVzLFxyXG4gICAgbG9hZGluZyxcclxuICAgIGVycm9yLFxyXG4gICAgaGFuZGxlRGF0YVNvdXJjZVJlYWR5LFxyXG4gICAgYXBwbHlTY2hlbWEsXHJcbiAgICBzZXREc1N0YXR1cyxcclxuICAgIHdhaXRpbmdGb3JMYXllclxyXG4gIH0gPSB1c2VQcm9kZXNTZXJpZXMoeyByZWNvcnRlRmllbGQsIHllYXJGaWVsZCwgd2lkZ2V0SWQ6IHByb3BzLmlkIH0pXHJcblxyXG4gIGNvbnN0IGF2YWlsYWJsZVllYXJzID0gUmVhY3QudXNlTWVtbyhcclxuICAgICgpID0+IHNlcmllcy5tYXAoKHIpID0+IHIueWVhciksXHJcbiAgICBbc2VyaWVzXVxyXG4gIClcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgcGVyaW9kb0luaWNpYWwsXHJcbiAgICBwZXJpb2RvRmluYWwsXHJcbiAgICB5ZWFyc0ZvckluaWNpYWwsXHJcbiAgICB5ZWFyc0ZvckZpbmFsLFxyXG4gICAgaGludEluaWNpYWwsXHJcbiAgICBoaW50RmluYWwsXHJcbiAgICB2YXJpYXRpb24sXHJcbiAgICBoYXNQZXJpb2RTZWxlY3Rpb24sXHJcbiAgICBjbGVhclBlcmlvZFNlbGVjdGlvbixcclxuICAgIGhhbmRsZVBlcmlvZG9JbmljaWFsQ2hhbmdlLFxyXG4gICAgaGFuZGxlUGVyaW9kb0ZpbmFsQ2hhbmdlLFxyXG4gICAgcmVqZWN0UGVyaW9kb0luaWNpYWwsXHJcbiAgICByZWplY3RQZXJpb2RvRmluYWxcclxuICB9ID0gdXNlUGVyaW9kU2VsZWN0aW9uKHNlcmllcywgYXZhaWxhYmxlWWVhcnMsIHJlY29ydGVGaWVsZClcclxuXHJcbiAgY29uc3QgaXNDb25maWd1cmVkID0gQm9vbGVhbih1c2VEcyAmJiByZWNvcnRlRmllbGQpXHJcbiAgY29uc3Qgc2hvd0Zvcm0gPVxyXG4gICAgaXNDb25maWd1cmVkICYmICFsb2FkaW5nICYmICF3YWl0aW5nRm9yTGF5ZXIgJiYgIWVycm9yICYmIHNlcmllcy5sZW5ndGggPiAwXHJcblxyXG4gIGlmICghaXNDb25maWd1cmVkKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb21wYXJhZG9yLXByb2RlcyBqaW11LXdpZGdldFwiIGNzcz17d2lkZ2V0U3R5bGVzfT5cclxuICAgICAgICA8cD57TVNHX05PVF9DT05GSUdVUkVEfTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29tcGFyYWRvci1wcm9kZXMgamltdS13aWRnZXRcIiBjc3M9e3dpZGdldFN0eWxlc30+XHJcbiAgICAgIDxEYXRhU291cmNlQ29tcG9uZW50XHJcbiAgICAgICAgdXNlRGF0YVNvdXJjZT17dXNlRHN9XHJcbiAgICAgICAgd2lkZ2V0SWQ9e3Byb3BzLmlkfVxyXG4gICAgICAgIHF1ZXJ5PXtQUk9ERVNfVEFCTEVfUVVFUll9XHJcbiAgICAgICAgcXVlcnlTY29wZT17UXVlcnlTY29wZS5JbkFsbERhdGF9XHJcbiAgICAgICAgcXVlcnlBbGxcclxuICAgICAgICBvbkRhdGFTb3VyY2VDcmVhdGVkPXtoYW5kbGVEYXRhU291cmNlUmVhZHl9XHJcbiAgICAgICAgb25EYXRhU291cmNlU2NoZW1hQ2hhbmdlPXsoc2NoZW1hKSA9PiB7XHJcbiAgICAgICAgICBhcHBseVNjaGVtYShzY2hlbWEpXHJcbiAgICAgICAgfX1cclxuICAgICAgICBvbkRhdGFTb3VyY2VJbmZvQ2hhbmdlPXsoaW5mbykgPT4gc2V0RHNTdGF0dXMoaW5mbz8uc3RhdHVzKX1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIHsobG9hZGluZyB8fCB3YWl0aW5nRm9yTGF5ZXIpICYmIDxMb2FkaW5nIC8+fVxyXG5cclxuICAgICAge2Vycm9yICYmIDxwIGNsYXNzTmFtZT1cImNvbXBhcmFkb3ItZXJyb3JcIj57ZXJyb3J9PC9wPn1cclxuXHJcbiAgICAgIHshbG9hZGluZyAmJiAhd2FpdGluZ0ZvckxheWVyICYmICFlcnJvciAmJiBzZXJpZXMubGVuZ3RoID09PSAwICYmIChcclxuICAgICAgICA8cD57TVNHX05PX0RBVEF9PC9wPlxyXG4gICAgICApfVxyXG5cclxuICAgICAge3Nob3dGb3JtICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhcmFkb3ItZm9ybVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYXJhZG9yLWZpZWxkLXJvd1wiPlxyXG4gICAgICAgICAgICA8TGFiZWw+e0xBQkVMX1BFUklPRE9fSU5JQ0lBTH08L0xhYmVsPlxyXG4gICAgICAgICAgICA8WWVhclBlcmlvZFBpY2tlclxyXG4gICAgICAgICAgICAgIGF2YWlsYWJsZVllYXJzPXt5ZWFyc0ZvckluaWNpYWx9XHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWRZZWFycz17cGVyaW9kb0luaWNpYWx9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1BMQUNFSE9MREVSX1BFUklPRE9fSU5JQ0lBTH1cclxuICAgICAgICAgICAgICBoaW50PXtoaW50SW5pY2lhbH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUGVyaW9kb0luaWNpYWxDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgb25SZWplY3RlZFNlbGVjdGlvbj17cmVqZWN0UGVyaW9kb0luaWNpYWx9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhcmFkb3ItZmllbGQtcm93XCI+XHJcbiAgICAgICAgICAgIDxMYWJlbD57TEFCRUxfUEVSSU9ET19GSU5BTH08L0xhYmVsPlxyXG4gICAgICAgICAgICA8WWVhclBlcmlvZFBpY2tlclxyXG4gICAgICAgICAgICAgIGF2YWlsYWJsZVllYXJzPXt5ZWFyc0ZvckZpbmFsfVxyXG4gICAgICAgICAgICAgIHNlbGVjdGVkWWVhcnM9e3BlcmlvZG9GaW5hbH1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17UExBQ0VIT0xERVJfUEVSSU9ET19GSU5BTH1cclxuICAgICAgICAgICAgICBoaW50PXtoaW50RmluYWx9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVBlcmlvZG9GaW5hbENoYW5nZX1cclxuICAgICAgICAgICAgICBvblJlamVjdGVkU2VsZWN0aW9uPXtyZWplY3RQZXJpb2RvRmluYWx9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFyYWRvci1oaW50XCI+e0hJTlRfUEVSSU9EX1JVTEVTfTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYXJhZG9yLWFjdGlvbnNcIj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29tcGFyYWRvci1idG4tbGltcGFyXCJcclxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWhhc1BlcmlvZFNlbGVjdGlvbn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtjbGVhclBlcmlvZFNlbGVjdGlvbn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIExpbXBhclxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHt2YXJpYXRpb24gIT0gbnVsbCAmJiB2YXJpYXRpb24ub2sgPT09IGZhbHNlICYmIChcclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29tcGFyYWRvci1lcnJvciBjb21wYXJhZG9yLWVycm9yLS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgIHt2YXJpYXRpb24ubWVzc2FnZX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICB7dmFyaWF0aW9uICE9IG51bGwgJiYgdmFyaWF0aW9uLm9rID09PSB0cnVlICYmIChcclxuICAgICAgICAgICAgPFZhcmlhdGlvblJlc3VsdFBhbmVsIGRhdGE9e3ZhcmlhdGlvbi5kYXRhfSAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0XHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=