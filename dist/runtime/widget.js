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
    const effectiveRecorteField = (recorteField === null || recorteField === void 0 ? void 0 : recorteField.trim()) || undefined;
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
        if (!main || !effectiveYearField || !effectiveRecorteField) {
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
    const recorteKey = resolveRecorteKeyFromRows(rows, recorteHint, fields);
    const preview = keys.slice(0, 10).join(', ');
    const suffix = keys.length > 10 ? '…' : '';
    let msg = ` Colunas na resposta: ${preview}${suffix}.`;
    if (yearKey)
        msg += ` Coluna de ano: "${yearKey}".`;
    msg += ` Recorte configurado: "${(_a = recorteHint === null || recorteHint === void 0 ? void 0 : recorteHint.trim()) !== null && _a !== void 0 ? _a : ''}".`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFDO0FBRTlCLE1BQU0sU0FBUyxHQUFHLEtBQUs7QUFFOUIseUVBQXlFO0FBQ2xFLE1BQU0sa0JBQWtCLEdBQUcsb0RBQVMsQ0FBQztJQUMxQyxLQUFLLEVBQUUsS0FBSztJQUNaLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNoQixjQUFjLEVBQUUsS0FBSztJQUNyQixRQUFRLEVBQUUsSUFBSTtDQUNmLENBQUM7QUFFSyxNQUFNLHFCQUFxQixHQUFHLGdDQUFnQztBQUM5RCxNQUFNLG1CQUFtQixHQUFHLDRCQUE0QjtBQUV4RCxNQUFNLGtCQUFrQixHQUM3QixzRUFBc0U7QUFFakUsTUFBTSxXQUFXLEdBQUcsNkNBQTZDO0FBRWpFLE1BQU0sZUFBZSxHQUFHLCtDQUErQztBQUV2RSxNQUFNLGlCQUFpQixHQUFHLG9DQUFvQztBQUU5RCxNQUFNLGtCQUFrQixHQUM3Qix1RkFBdUY7SUFDdkYseUdBQXlHO0lBQ3pHLHNEQUFzRDtBQUVqRCxNQUFNLGdCQUFnQixHQUFHLDhDQUE4QztBQUV2RSxNQUFNLGlCQUFpQixHQUM1QiwrRkFBK0Y7QUFFMUYsTUFBTSwyQkFBMkIsR0FBRywwQ0FBMEM7QUFDOUUsTUFBTSx5QkFBeUIsR0FBRyx3Q0FBd0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ2pGLGVBQWU7QUFDdUI7QUFLTDtBQUNnQztBQU0xRCxNQUFNLG9CQUFvQixHQUFHLENBQUMsRUFBRSxJQUFJLEVBQXdCLEVBQUUsRUFBRTtJQUNyRSxNQUFNLElBQUksR0FBRywrREFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBRXZDLE9BQU8sQ0FDTCx3REFBSyxTQUFTLEVBQUMsbUJBQW1CO1FBQ2hDLHdEQUFLLFNBQVMsRUFBQyx5QkFBeUI7O1lBRXJDLDJFQUFz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QUM7QUFFRCxpRUFBZSxNQUFNO0FBRWIsU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY29tcGFyYWRvcl9wcm9kZXMvc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY29tcGFyYWRvcl9wcm9kZXMvc3JjL3J1bnRpbWUvY29tcG9uZW50cy92YXJpYXRpb24tcmVzdWx0LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY29tcGFyYWRvcl9wcm9kZXMvc3JjL3J1bnRpbWUvaG9va3MvdXNlLXBlcmlvZC1zZWxlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2NvbXBhcmFkb3JfcHJvZGVzL3NyYy9ydW50aW1lL2hvb2tzL3VzZS1wcm9kZXMtc2VyaWVzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9zcmMvcnVudGltZS9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2NvbXBhcmFkb3JfcHJvZGVzL3NyYy9ydW50aW1lL3llYXItcGVyaW9kLXBpY2tlci50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2NvbXBhcmFkb3JfcHJvZGVzL3NyYy91dGlscy9kYXRhLXNvdXJjZS50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY29tcGFyYWRvcl9wcm9kZXMvc3JjL3V0aWxzL2Zvcm1hdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY29tcGFyYWRvcl9wcm9kZXMvc3JjL3V0aWxzL3Byb2Rlcy10YWJsZS50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY29tcGFyYWRvcl9wcm9kZXMvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbW11dGFibGUgfSBmcm9tICdqaW11LWNvcmUnXG5cbmV4cG9ydCBjb25zdCBBUkVBX1VOSVQgPSAna23CsidcblxuLyoqIENvbnN1bHRhIHBhZHLDo286IHRvZG9zIG9zIHJlZ2lzdHJvcyBkYSB0YWJlbGEgUFJPREVTIChwYWRyw6NvIEVYQikuICovXG5leHBvcnQgY29uc3QgUFJPREVTX1RBQkxFX1FVRVJZID0gSW1tdXRhYmxlKHtcbiAgd2hlcmU6ICcxPTEnLFxuICBvdXRGaWVsZHM6IFsnKiddLFxuICByZXR1cm5HZW9tZXRyeTogZmFsc2UsXG4gIHBhZ2VTaXplOiAyMDAwXG59KVxuXG5leHBvcnQgY29uc3QgTEFCRUxfUEVSSU9ET19JTklDSUFMID0gJ0FubyBpbmljaWFsIG91IHBlcsOtb2RvIGluaWNpYWwnXG5leHBvcnQgY29uc3QgTEFCRUxfUEVSSU9ET19GSU5BTCA9ICdBbm8gZmluYWwgb3UgcGVyw61vZG8gZmluYWwnXG5cbmV4cG9ydCBjb25zdCBNU0dfTk9UX0NPTkZJR1VSRUQgPVxuICAnRXN0YSBmZXJyYW1lbnRhIGFpbmRhIG7Do28gZm9pIGNvbmZpZ3VyYWRhIHBlbG8gYXV0b3IgZGEgZXhwZXJpw6puY2lhLidcblxuZXhwb3J0IGNvbnN0IE1TR19OT19EQVRBID0gJ07Do28gaMOhIGRhZG9zIGRpc3BvbsOtdmVpcyBwYXJhIGVzdGUgcmVjb3J0ZS4nXG5cbmV4cG9ydCBjb25zdCBNU0dfTE9BRF9GQUlMRUQgPSAnTsOjbyBmb2kgcG9zc8OtdmVsIGNhcnJlZ2FyIG9zIGRhZG9zIGRhIGNhbWFkYS4nXG5cbmV4cG9ydCBjb25zdCBNU0dfTE9BRElOR19UQUJMRSA9ICdDYXJyZWdhbmRvIGRhZG9zIGRhIHRhYmVsYSBQUk9ERVPigKYnXG5cbmV4cG9ydCBjb25zdCBNU0dfRVhUUkFDVF9GQUlMRUQgPVxuICAnUmVnaXN0cm9zIGVuY29udHJhZG9zLCBtYXMgbsOjbyBmb2kgcG9zc8OtdmVsIGV4dHJhaXIgYW5vIGUgdmFsb3JlcyBwYXJhIGVzdGUgcmVjb3J0ZS4gJyArXG4gICdDb25maXJtZSBzZSBhIHRhYmVsYSB0ZW0gdW1hIGxpbmhhIHBvciBhbm8gKGNvbHVuYSBcImFub1wiKSBvdSB1bWEgbGluaGEgcG9yIHJlY29ydGUgKGNvbHVuYXMgY29tIGFub3MpLCAnICtcbiAgJ2Ugc2UgYSBjb2x1bmEgZG8gcmVjb3J0ZSBwb3NzdWkgdmFsb3JlcyBwcmVlbmNoaWRvcy4nXG5cbmV4cG9ydCBjb25zdCBISU5UX0NPTlNFQ1VUSVZPID0gJ09zIGFub3Mgc2VsZWNpb25hZG9zIGRldmVtIHNlciBjb25zZWN1dGl2b3MuJ1xuXG5leHBvcnQgY29uc3QgSElOVF9QRVJJT0RfUlVMRVMgPVxuICAnT3MgZG9pcyBwZXLDrW9kb3MgZGV2ZW0gdGVyIGEgbWVzbWEgcXVhbnRpZGFkZSBkZSBhbm9zIGNvbnNlY3V0aXZvcywgc2VtIHJlcGV0acOnw6NvIGVudHJlIGVsZXMuJ1xuXG5leHBvcnQgY29uc3QgUExBQ0VIT0xERVJfUEVSSU9ET19JTklDSUFMID0gJ1NlbGVjaW9uZSBvKHMpIGFubyhzKSBkbyBwZXLDrW9kbyBpbmljaWFsJ1xuZXhwb3J0IGNvbnN0IFBMQUNFSE9MREVSX1BFUklPRE9fRklOQUwgPSAnU2VsZWNpb25lIG8ocykgYW5vKHMpIGRvIHBlcsOtb2RvIGZpbmFsJ1xuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBSZWFjdCwganN4IH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHtcbiAgZm9ybWF0UGVyY2VudFZhcmlhdGlvbixcbiAgZm9ybWF0UGVyaW9kUmFuZ2VMYWJlbCxcbiAgdHlwZSBWYXJpYXRpb25SZXN1bHRcbn0gZnJvbSAnLi4vLi4vdXRpbHMvcHJvZGVzLXRhYmxlJ1xuaW1wb3J0IHsgZm9ybWF0QXJlYSwgZ2V0VmFyaWF0aW9uVG9uZSB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdCdcblxuaW50ZXJmYWNlIFZhcmlhdGlvblJlc3VsdFByb3BzIHtcbiAgZGF0YTogVmFyaWF0aW9uUmVzdWx0XG59XG5cbmV4cG9ydCBjb25zdCBWYXJpYXRpb25SZXN1bHRQYW5lbCA9ICh7IGRhdGEgfTogVmFyaWF0aW9uUmVzdWx0UHJvcHMpID0+IHtcbiAgY29uc3QgdG9uZSA9IGdldFZhcmlhdGlvblRvbmUoZGF0YS5wY3QpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhcmFkb3ItcmVzdWx0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhcmFkb3ItcmVzdWx0LXRpdGxlXCI+XG4gICAgICAgIFZhcmlhw6fDo28gcGVyY2VudHVhbCAoXG4gICAgICAgIHtmb3JtYXRQZXJpb2RSYW5nZUxhYmVsKGRhdGEueWVhcnNJbmljaWFsKX0g4oaSeycgJ31cbiAgICAgICAge2Zvcm1hdFBlcmlvZFJhbmdlTGFiZWwoZGF0YS55ZWFyc0ZpbmFsKX0pXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29tcGFyYWRvci1yZXN1bHQtdmFsdWUgY29tcGFyYWRvci1yZXN1bHQtdmFsdWUtLSR7dG9uZX1gfT5cbiAgICAgICAge2Zvcm1hdFBlcmNlbnRWYXJpYXRpb24oZGF0YS5wY3QpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhcmFkb3ItcmVzdWx0LWRldGFpbFwiPlxuICAgICAgICB7Zm9ybWF0QXJlYShkYXRhLnZhbHVlSW5pY2lhbCl9IG5vIHBlcsOtb2RvIGluaWNpYWwg4oaSeycgJ31cbiAgICAgICAge2Zvcm1hdEFyZWEoZGF0YS52YWx1ZUZpbmFsKX0gbm8gcGVyw61vZG8gZmluYWxcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCJpbXBvcnQgeyBSZWFjdCB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7XG4gIGNvbXB1dGVQZXJpb2RWYXJpYXRpb24sXG4gIGdldFllYXJzQWxsb3dlZEZvckZpbmFsLFxuICBnZXRZZWFyc0FsbG93ZWRGb3JJbmljaWFsLFxuICB0eXBlIFllYXJWYWx1ZVJvd1xufSBmcm9tICcuLi8uLi91dGlscy9wcm9kZXMtdGFibGUnXG5pbXBvcnQgeyBISU5UX0NPTlNFQ1VUSVZPIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUGVyaW9kU2VsZWN0aW9uIChcbiAgc2VyaWVzOiBZZWFyVmFsdWVSb3dbXSxcbiAgYXZhaWxhYmxlWWVhcnM6IG51bWJlcltdLFxuICByZWNvcnRlRmllbGQ/OiBzdHJpbmdcbikge1xuICBjb25zdCBbcGVyaW9kb0luaWNpYWwsIHNldFBlcmlvZG9JbmljaWFsXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcltdPihbXSlcbiAgY29uc3QgW3BlcmlvZG9GaW5hbCwgc2V0UGVyaW9kb0ZpbmFsXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcltdPihbXSlcbiAgY29uc3QgW2hpbnRJbmljaWFsLCBzZXRIaW50SW5pY2lhbF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuICBjb25zdCBbaGludEZpbmFsLCBzZXRIaW50RmluYWxdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcblxuICBjb25zdCB5ZWFyc0ZvckluaWNpYWwgPSBSZWFjdC51c2VNZW1vKFxuICAgICgpID0+IGdldFllYXJzQWxsb3dlZEZvckluaWNpYWwoYXZhaWxhYmxlWWVhcnMsIHBlcmlvZG9GaW5hbCksXG4gICAgW2F2YWlsYWJsZVllYXJzLCBwZXJpb2RvRmluYWxdXG4gIClcblxuICBjb25zdCB5ZWFyc0ZvckZpbmFsID0gUmVhY3QudXNlTWVtbyhcbiAgICAoKSA9PiBnZXRZZWFyc0FsbG93ZWRGb3JGaW5hbChhdmFpbGFibGVZZWFycywgcGVyaW9kb0luaWNpYWwpLFxuICAgIFthdmFpbGFibGVZZWFycywgcGVyaW9kb0luaWNpYWxdXG4gIClcblxuICBjb25zdCB2YXJpYXRpb24gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoIXBlcmlvZG9JbmljaWFsLmxlbmd0aCB8fCAhcGVyaW9kb0ZpbmFsLmxlbmd0aCkgcmV0dXJuIG51bGxcbiAgICByZXR1cm4gY29tcHV0ZVBlcmlvZFZhcmlhdGlvbihzZXJpZXMsIHBlcmlvZG9JbmljaWFsLCBwZXJpb2RvRmluYWwpXG4gIH0sIFtwZXJpb2RvSW5pY2lhbCwgcGVyaW9kb0ZpbmFsLCBzZXJpZXNdKVxuXG4gIGNvbnN0IGhhc1BlcmlvZFNlbGVjdGlvbiA9XG4gICAgcGVyaW9kb0luaWNpYWwubGVuZ3RoID4gMCB8fCBwZXJpb2RvRmluYWwubGVuZ3RoID4gMFxuXG4gIGNvbnN0IGNsZWFyUGVyaW9kU2VsZWN0aW9uID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFBlcmlvZG9JbmljaWFsKFtdKVxuICAgIHNldFBlcmlvZG9GaW5hbChbXSlcbiAgICBzZXRIaW50SW5pY2lhbChudWxsKVxuICAgIHNldEhpbnRGaW5hbChudWxsKVxuICB9LCBbXSlcblxuICBjb25zdCBoYW5kbGVQZXJpb2RvSW5pY2lhbENoYW5nZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCh5ZWFyczogbnVtYmVyW10pID0+IHtcbiAgICBzZXRQZXJpb2RvSW5pY2lhbCh5ZWFycylcbiAgICBzZXRIaW50SW5pY2lhbChudWxsKVxuICB9LCBbXSlcblxuICBjb25zdCBoYW5kbGVQZXJpb2RvRmluYWxDaGFuZ2UgPSBSZWFjdC51c2VDYWxsYmFjaygoeWVhcnM6IG51bWJlcltdKSA9PiB7XG4gICAgc2V0UGVyaW9kb0ZpbmFsKHllYXJzKVxuICAgIHNldEhpbnRGaW5hbChudWxsKVxuICB9LCBbXSlcblxuICBjb25zdCByZWplY3RQZXJpb2RvSW5pY2lhbCA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRIaW50SW5pY2lhbChISU5UX0NPTlNFQ1VUSVZPKVxuICB9LCBbXSlcblxuICBjb25zdCByZWplY3RQZXJpb2RvRmluYWwgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0SGludEZpbmFsKEhJTlRfQ09OU0VDVVRJVk8pXG4gIH0sIFtdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UGVyaW9kb0luaWNpYWwoW10pXG4gICAgc2V0UGVyaW9kb0ZpbmFsKFtdKVxuICAgIHNldEhpbnRJbmljaWFsKG51bGwpXG4gICAgc2V0SGludEZpbmFsKG51bGwpXG4gIH0sIFtyZWNvcnRlRmllbGRdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFwZXJpb2RvSW5pY2lhbC5sZW5ndGggfHwgIXBlcmlvZG9GaW5hbC5sZW5ndGgpIHJldHVyblxuICAgIGNvbnN0IGFsbG93ZWQgPSBuZXcgU2V0KGdldFllYXJzQWxsb3dlZEZvckZpbmFsKGF2YWlsYWJsZVllYXJzLCBwZXJpb2RvSW5pY2lhbCkpXG4gICAgY29uc3QgZmlsdGVyZWQgPSBwZXJpb2RvRmluYWwuZmlsdGVyKCh5KSA9PiBhbGxvd2VkLmhhcyh5KSlcbiAgICBpZiAoZmlsdGVyZWQubGVuZ3RoICE9PSBwZXJpb2RvRmluYWwubGVuZ3RoKSB7XG4gICAgICBzZXRQZXJpb2RvRmluYWwoZmlsdGVyZWQpXG4gICAgfVxuICB9LCBbcGVyaW9kb0luaWNpYWwsIHBlcmlvZG9GaW5hbCwgYXZhaWxhYmxlWWVhcnNdKVxuXG4gIHJldHVybiB7XG4gICAgcGVyaW9kb0luaWNpYWwsXG4gICAgcGVyaW9kb0ZpbmFsLFxuICAgIHllYXJzRm9ySW5pY2lhbCxcbiAgICB5ZWFyc0ZvckZpbmFsLFxuICAgIGhpbnRJbmljaWFsLFxuICAgIGhpbnRGaW5hbCxcbiAgICB2YXJpYXRpb24sXG4gICAgaGFzUGVyaW9kU2VsZWN0aW9uLFxuICAgIGNsZWFyUGVyaW9kU2VsZWN0aW9uLFxuICAgIGhhbmRsZVBlcmlvZG9JbmljaWFsQ2hhbmdlLFxuICAgIGhhbmRsZVBlcmlvZG9GaW5hbENoYW5nZSxcbiAgICByZWplY3RQZXJpb2RvSW5pY2lhbCxcbiAgICByZWplY3RQZXJpb2RvRmluYWxcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgUmVhY3QsXG4gIHR5cGUgRGF0YVNvdXJjZSxcbiAgdHlwZSBJTURhdGFTb3VyY2VTY2hlbWEsXG4gIERhdGFTb3VyY2VTdGF0dXNcbn0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHtcbiAgYXR0cmlidXRlUm93c1Njb3JlLFxuICBkZXNjcmliZVJvd3NGb3JFeHRyYWN0RXJyb3IsXG4gIGRldGVjdFllYXJGaWVsZCxcbiAgZW5yaWNoQXR0cmlidXRlUm93c1dpdGhSZWNvcmRzLFxuICBsb2FkUHJvZGVzWWVhclNlcmllcyxcbiAgc2NoZW1hVG9GaWVsZExpc3QsXG4gIHR5cGUgWWVhclZhbHVlUm93XG59IGZyb20gJy4uLy4uL3V0aWxzL3Byb2Rlcy10YWJsZSdcbmltcG9ydCB7XG4gIGVuc3VyZURhdGFTb3VyY2VTY2hlbWEsXG4gIGdldFF1ZXJ5YWJsZURhdGFTb3VyY2UsXG4gIGlzUHJvZGVzRGF0YVJlYWR5XG59IGZyb20gJy4uLy4uL3V0aWxzL2RhdGEtc291cmNlJ1xuaW1wb3J0IHtcbiAgTVNHX0VYVFJBQ1RfRkFJTEVELFxuICBNU0dfTE9BRF9GQUlMRUQsXG4gIE1TR19MT0FESU5HX1RBQkxFXG59IGZyb20gJy4uLy4uL2NvbnN0YW50cydcblxuZXhwb3J0IGludGVyZmFjZSBVc2VQcm9kZXNTZXJpZXNQYXJhbXMge1xuICByZWNvcnRlRmllbGQ/OiBzdHJpbmdcbiAgeWVhckZpZWxkPzogc3RyaW5nXG4gIHdpZGdldElkPzogc3RyaW5nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VQcm9kZXNTZXJpZXMgKHtcbiAgcmVjb3J0ZUZpZWxkLFxuICB5ZWFyRmllbGQsXG4gIHdpZGdldElkXG59OiBVc2VQcm9kZXNTZXJpZXNQYXJhbXMpIHtcbiAgY29uc3QgW2RzUmVmLCBzZXREc1JlZl0gPSBSZWFjdC51c2VTdGF0ZTxEYXRhU291cmNlIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2RzU3RhdHVzLCBzZXREc1N0YXR1c10gPSBSZWFjdC51c2VTdGF0ZTxEYXRhU291cmNlU3RhdHVzIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpXG4gIGNvbnN0IFtmaWVsZExpc3QsIHNldEZpZWxkTGlzdF0gPSBSZWFjdC51c2VTdGF0ZShcbiAgICBbXSBhcyBSZXR1cm5UeXBlPHR5cGVvZiBzY2hlbWFUb0ZpZWxkTGlzdD5cbiAgKVxuICBjb25zdCBbc2VyaWVzLCBzZXRTZXJpZXNdID0gUmVhY3QudXNlU3RhdGU8WWVhclZhbHVlUm93W10+KFtdKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2xvYWRpbmdNZXNzYWdlLCBzZXRMb2FkaW5nTWVzc2FnZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFtkc0luZm9WZXJzaW9uLCBzZXREc0luZm9WZXJzaW9uXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlciB8IHVuZGVmaW5lZD4oXG4gICAgdW5kZWZpbmVkXG4gIClcblxuICBjb25zdCBlZmZlY3RpdmVZZWFyRmllbGQgPSB5ZWFyRmllbGQgPz8gZGV0ZWN0WWVhckZpZWxkKGZpZWxkTGlzdClcbiAgY29uc3QgZWZmZWN0aXZlUmVjb3J0ZUZpZWxkID0gcmVjb3J0ZUZpZWxkPy50cmltKCkgfHwgdW5kZWZpbmVkXG5cbiAgY29uc3QgYXBwbHlTY2hlbWEgPSBSZWFjdC51c2VDYWxsYmFjaygoc2NoZW1hOiBJTURhdGFTb3VyY2VTY2hlbWEpID0+IHtcbiAgICBzZXRGaWVsZExpc3Qoc2NoZW1hVG9GaWVsZExpc3Qoc2NoZW1hKSlcbiAgfSwgW10pXG5cbiAgY29uc3QgaGFuZGxlRGF0YVNvdXJjZVJlYWR5ID0gUmVhY3QudXNlQ2FsbGJhY2soKGRzOiBEYXRhU291cmNlKSA9PiB7XG4gICAgc2V0RHNSZWYoZHMpXG4gICAgdm9pZCBlbnN1cmVEYXRhU291cmNlU2NoZW1hKGRzKS50aGVuKChzY2hlbWEpID0+IHtcbiAgICAgIGlmIChzY2hlbWEpIGFwcGx5U2NoZW1hKHNjaGVtYSlcbiAgICB9KVxuICB9LCBbYXBwbHlTY2hlbWFdKVxuXG4gIGNvbnN0IGxvYWRTZXJpZXMgPSBSZWFjdC51c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGdldFF1ZXJ5YWJsZURhdGFTb3VyY2UoZHNSZWYpXG4gICAgaWYgKCFtYWluIHx8ICFlZmZlY3RpdmVZZWFyRmllbGQgfHwgIWVmZmVjdGl2ZVJlY29ydGVGaWVsZCkge1xuICAgICAgc2V0U2VyaWVzKFtdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFpc1Byb2Rlc0RhdGFSZWFkeShkc1N0YXR1cykpIHJldHVyblxuXG4gICAgc2V0TG9hZGluZyh0cnVlKVxuICAgIHNldExvYWRpbmdNZXNzYWdlKE1TR19MT0FESU5HX1RBQkxFKVxuICAgIHNldEVycm9yKG51bGwpXG5cbiAgICBjb25zdCBmZXRjaE9wdHMgPSB7XG4gICAgICB5ZWFyRmllbGRKaW11OiBlZmZlY3RpdmVZZWFyRmllbGQsXG4gICAgICByZWNvcnRlRmllbGRKaW11OiBlZmZlY3RpdmVSZWNvcnRlRmllbGQsXG4gICAgICBmaWVsZHM6IGZpZWxkTGlzdC5sZW5ndGggPiAwID8gZmllbGRMaXN0IDogdW5kZWZpbmVkLFxuICAgICAgd2lkZ2V0SWRcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBzZXJpZXM6IGJ1aWx0LCByZWNvcmRzLCByb3dzIH0gPSBhd2FpdCBsb2FkUHJvZGVzWWVhclNlcmllcyhcbiAgICAgICAgbWFpbixcbiAgICAgICAgZmV0Y2hPcHRzXG4gICAgICApXG4gICAgICBzZXRTZXJpZXMoYnVpbHQpXG5cbiAgICAgIGlmIChidWlsdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaWYgKHJvd3MubGVuZ3RoID09PSAwICYmIHJlY29yZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgc2V0RXJyb3IoTVNHX0xPQURfRkFJTEVEKVxuICAgICAgICB9IGVsc2UgaWYgKHJvd3MubGVuZ3RoID4gMCAmJiBhdHRyaWJ1dGVSb3dzU2NvcmUocm93cykgPD0gMSkge1xuICAgICAgICAgIHNldEVycm9yKE1TR19MT0FEX0ZBSUxFRClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRFcnJvcihcbiAgICAgICAgICAgIE1TR19FWFRSQUNUX0ZBSUxFRCArXG4gICAgICAgICAgICAgIGRlc2NyaWJlUm93c0ZvckV4dHJhY3RFcnJvcihcbiAgICAgICAgICAgICAgICByb3dzLFxuICAgICAgICAgICAgICAgIGVmZmVjdGl2ZVJlY29ydGVGaWVsZCxcbiAgICAgICAgICAgICAgICBmaWVsZExpc3QubGVuZ3RoID4gMCA/IGZpZWxkTGlzdCA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCB7XG4gICAgICBzZXRFcnJvcihNU0dfTE9BRF9GQUlMRUQpXG4gICAgICBzZXRTZXJpZXMoW10pXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICBzZXRMb2FkaW5nTWVzc2FnZShudWxsKVxuICAgIH1cbiAgfSwgW1xuICAgIGRzUmVmLFxuICAgIGRzU3RhdHVzLFxuICAgIGVmZmVjdGl2ZVllYXJGaWVsZCxcbiAgICBlZmZlY3RpdmVSZWNvcnRlRmllbGQsXG4gICAgZmllbGRMaXN0LFxuICAgIHdpZGdldElkXG4gIF0pXG5cbiAgY29uc3QgaGFuZGxlRGF0YVNvdXJjZUluZm9DaGFuZ2UgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoaW5mbzogeyBzdGF0dXM/OiBEYXRhU291cmNlU3RhdHVzOyB2ZXJzaW9uPzogbnVtYmVyIH0pID0+IHtcbiAgICAgIHNldERzU3RhdHVzKGluZm8/LnN0YXR1cylcbiAgICAgIGlmIChpbmZvPy52ZXJzaW9uICE9IG51bGwpIHtcbiAgICAgICAgc2V0RHNJbmZvVmVyc2lvbihpbmZvLnZlcnNpb24pXG4gICAgICB9XG4gICAgfSxcbiAgICBbXVxuICApXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWVmZmVjdGl2ZVJlY29ydGVGaWVsZCB8fCAhZWZmZWN0aXZlWWVhckZpZWxkIHx8ICFkc1JlZikgcmV0dXJuXG4gICAgaWYgKCFpc1Byb2Rlc0RhdGFSZWFkeShkc1N0YXR1cykpIHJldHVyblxuICAgIGxvYWRTZXJpZXMoKVxuICB9LCBbXG4gICAgZWZmZWN0aXZlUmVjb3J0ZUZpZWxkLFxuICAgIGVmZmVjdGl2ZVllYXJGaWVsZCxcbiAgICBkc1JlZixcbiAgICBkc1N0YXR1cyxcbiAgICBkc0luZm9WZXJzaW9uLFxuICAgIGZpZWxkTGlzdCxcbiAgICBsb2FkU2VyaWVzXG4gIF0pXG5cbiAgY29uc3Qgd2FpdGluZ0ZvckxheWVyID1cbiAgICAhZHNSZWYgfHxcbiAgICBkc1N0YXR1cyA9PT0gRGF0YVNvdXJjZVN0YXR1cy5Mb2FkaW5nIHx8XG4gICAgZHNTdGF0dXMgPT09IERhdGFTb3VyY2VTdGF0dXMuTm90UmVhZHkgfHxcbiAgICBkc1N0YXR1cyA9PT0gRGF0YVNvdXJjZVN0YXR1cy5VbmxvYWRlZFxuXG4gIHJldHVybiB7XG4gICAgc2VyaWVzLFxuICAgIGxvYWRpbmcsXG4gICAgbG9hZGluZ01lc3NhZ2UsXG4gICAgZXJyb3IsXG4gICAgaGFuZGxlRGF0YVNvdXJjZVJlYWR5LFxuICAgIGhhbmRsZURhdGFTb3VyY2VJbmZvQ2hhbmdlLFxuICAgIGFwcGx5U2NoZW1hLFxuICAgIHdhaXRpbmdGb3JMYXllclxuICB9XG59XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdqaW11LWNvcmUnXG5cbmV4cG9ydCBjb25zdCB3aWRnZXRTdHlsZXMgPSBjc3NgXG4gICYud2lkZ2V0LWNvbXBhcmFkb3ItcHJvZGVzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgfVxuICAuY29tcGFyYWRvci1mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMnB4O1xuICAgIG1pbi13aWR0aDogMDtcbiAgfVxuICAuY29tcGFyYWRvci1maWVsZC1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDRweDtcbiAgICBtaW4td2lkdGg6IDA7XG4gIH1cbiAgLmNvbXBhcmFkb3ItcGVyaW9kLWhpbnQsXG4gIC5jb21wYXJhZG9yLWVycm9yIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICNiMDAwMjA7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICB9XG4gIC5jb21wYXJhZG9yLWVycm9yLS1ibG9jayB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5jb21wYXJhZG9yLXJlc3VsdCB7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXJlZi1wYWxldHRlLW5ldXRyYWwtMTAwLCAjZjNmM2YzKTtcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICB9XG4gIC5jb21wYXJhZG9yLXJlc3VsdC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgfVxuICAuY29tcGFyYWRvci1yZXN1bHQtdmFsdWUge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIH1cbiAgLmNvbXBhcmFkb3ItcmVzdWx0LXZhbHVlLS1wb3NpdGl2ZSB7XG4gICAgY29sb3I6ICNiMDAwMjA7XG4gIH1cbiAgLmNvbXBhcmFkb3ItcmVzdWx0LXZhbHVlLS1uZWdhdGl2ZSB7XG4gICAgY29sb3I6ICMxYjdhM2Q7XG4gIH1cbiAgLmNvbXBhcmFkb3ItcmVzdWx0LXZhbHVlLS1uZXV0cmFsIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxuICAuY29tcGFyYWRvci1yZXN1bHQtZGV0YWlsIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM2YjZiNmI7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xuICB9XG4gIC5jb21wYXJhZG9yLWhpbnQge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBjb2xvcjogIzZiNmI2YjtcbiAgICBsaW5lLWhlaWdodDogMS4zNTtcbiAgfVxuICAuY29tcGFyYWRvci1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cbiAgLmNvbXBhcmFkb3ItYnRuLWxpbXBhciB7XG4gICAgYm9yZGVyLXJhZGl1czogOTk5OXB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IHBpY2tlclN0eWxlcyA9IGNzc2BcbiAgd2lkdGg6IDEwMCU7XG4gIC5qaW11LWRyb3Bkb3duIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICAuY29tcGFyYWRvci1wZXJpb2QtbWVudSB7XG4gICAgbWF4LWhlaWdodDogMjIwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxuYFxuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBSZWFjdCwganN4IH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHtcbiAgRHJvcGRvd24sXG4gIERyb3Bkb3duQnV0dG9uLFxuICBEcm9wZG93bk1lbnUsXG4gIERyb3Bkb3duSXRlbVxufSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHsgZm9ybWF0UGVyaW9kTGFiZWwsIHRvZ2dsZUNvbnNlY3V0aXZlWWVhciB9IGZyb20gJy4uL3V0aWxzL3Byb2Rlcy10YWJsZSdcbmltcG9ydCB7IHBpY2tlclN0eWxlcyB9IGZyb20gJy4vc3R5bGVzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIFllYXJQZXJpb2RQaWNrZXJQcm9wcyB7XG4gIGF2YWlsYWJsZVllYXJzOiBudW1iZXJbXVxuICBzZWxlY3RlZFllYXJzOiBudW1iZXJbXVxuICBwbGFjZWhvbGRlcjogc3RyaW5nXG4gIGhpbnQ/OiBzdHJpbmcgfCBudWxsXG4gIG9uQ2hhbmdlOiAoeWVhcnM6IG51bWJlcltdKSA9PiB2b2lkXG4gIG9uUmVqZWN0ZWRTZWxlY3Rpb24/OiAoKSA9PiB2b2lkXG59XG5cbmV4cG9ydCBjb25zdCBZZWFyUGVyaW9kUGlja2VyID0gUmVhY3QubWVtbygocHJvcHM6IFllYXJQZXJpb2RQaWNrZXJQcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgYXZhaWxhYmxlWWVhcnMsXG4gICAgc2VsZWN0ZWRZZWFycyxcbiAgICBwbGFjZWhvbGRlcixcbiAgICBoaW50LFxuICAgIG9uQ2hhbmdlLFxuICAgIG9uUmVqZWN0ZWRTZWxlY3Rpb25cbiAgfSA9IHByb3BzXG5cbiAgY29uc3Qgc2VsZWN0ZWRTZXQgPSBSZWFjdC51c2VNZW1vKFxuICAgICgpID0+IG5ldyBTZXQoc2VsZWN0ZWRZZWFycyksXG4gICAgW3NlbGVjdGVkWWVhcnNdXG4gIClcblxuICBjb25zdCBzdW1tYXJ5ID1cbiAgICBzZWxlY3RlZFllYXJzLmxlbmd0aCA+IDBcbiAgICAgID8gZm9ybWF0UGVyaW9kTGFiZWwoc2VsZWN0ZWRZZWFycylcbiAgICAgIDogcGxhY2Vob2xkZXJcblxuICBjb25zdCBoYW5kbGVUb2dnbGUgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoeWVhcjogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCB7IG5leHQsIHJlamVjdGVkIH0gPSB0b2dnbGVDb25zZWN1dGl2ZVllYXIoc2VsZWN0ZWRZZWFycywgeWVhcilcbiAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICBvblJlamVjdGVkU2VsZWN0aW9uPy4oKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIG9uQ2hhbmdlKG5leHQpXG4gICAgfSxcbiAgICBbc2VsZWN0ZWRZZWFycywgb25DaGFuZ2UsIG9uUmVqZWN0ZWRTZWxlY3Rpb25dXG4gIClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY3NzPXtwaWNrZXJTdHlsZXN9PlxuICAgICAgPERyb3Bkb3duXG4gICAgICAgIGZsdWlkXG4gICAgICAgIG1lbnVJdGVtQ2hlY2tNb2RlPVwibXVsdGlDaGVja1wiXG4gICAgICAgIGFjdGl2ZUljb25cbiAgICAgICAgY2xhc3NOYW1lPVwidy0xMDBcIlxuICAgICAgPlxuICAgICAgICA8RHJvcGRvd25CdXR0b24gc2l6ZT1cInNtXCIgY2xhc3NOYW1lPVwidy0xMDAgZHJvcGRvd24tdG9nZ2xlXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZVwiPntzdW1tYXJ5fTwvc3Bhbj5cbiAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICAgICAgPERyb3Bkb3duTWVudSBjbGFzc05hbWU9XCJjb21wYXJhZG9yLXBlcmlvZC1tZW51XCI+XG4gICAgICAgICAge2F2YWlsYWJsZVllYXJzLm1hcCgoeWVhcikgPT4gKFxuICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICBrZXk9e3llYXJ9XG4gICAgICAgICAgICAgIGFjdGl2ZT17c2VsZWN0ZWRTZXQuaGFzKHllYXIpfVxuICAgICAgICAgICAgICB0b2dnbGU9e2ZhbHNlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUb2dnbGUoeWVhcil9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt5ZWFyfVxuICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgICAgPC9Ecm9wZG93bj5cbiAgICAgIHtoaW50ICYmIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFyYWRvci1wZXJpb2QtaGludFwiPntoaW50fTwvZGl2Pn1cbiAgICA8L2Rpdj5cbiAgKVxufSlcblxuWWVhclBlcmlvZFBpY2tlci5kaXNwbGF5TmFtZSA9ICdZZWFyUGVyaW9kUGlja2VyJ1xuIiwiaW1wb3J0IHtcbiAgdHlwZSBEYXRhU291cmNlLFxuICB0eXBlIElNRGF0YVNvdXJjZVNjaGVtYSxcbiAgRGF0YVNvdXJjZVN0YXR1c1xufSBmcm9tICdqaW11LWNvcmUnXG5cbnR5cGUgRGF0YVNvdXJjZVdpdGhNYWluID0gRGF0YVNvdXJjZSAmIHtcbiAgZ2V0TWFpbkRhdGFTb3VyY2U/OiAoKSA9PiBEYXRhU291cmNlXG4gIGdldFNjaGVtYT86ICgpID0+IElNRGF0YVNvdXJjZVNjaGVtYVxufVxuXG4vKiogQW50ZXMgZG8gcXVlcnkgZG8gRGF0YVNvdXJjZUNvbXBvbmVudCB0ZXJtaW5hciwgcmVnaXN0cm9zIGNvc3R1bWFtIHZpciBzZW0gYXRyaWJ1dG9zLiAqL1xuZXhwb3J0IGNvbnN0IGlzUHJvZGVzRGF0YVJlYWR5ID0gKHN0YXR1cz86IERhdGFTb3VyY2VTdGF0dXMpOiBib29sZWFuID0+XG4gIHN0YXR1cyA9PT0gRGF0YVNvdXJjZVN0YXR1cy5Mb2FkZWRcblxuZXhwb3J0IGNvbnN0IGlzUXVlcnlhYmxlU3RhdHVzID0gKHN0YXR1cz86IERhdGFTb3VyY2VTdGF0dXMpOiBib29sZWFuID0+XG4gIHN0YXR1cyA9PT0gRGF0YVNvdXJjZVN0YXR1cy5Mb2FkZWQgfHxcbiAgc3RhdHVzID09PSBEYXRhU291cmNlU3RhdHVzLkxvYWRpbmdcblxuZXhwb3J0IGNvbnN0IGdldE1haW5EYXRhU291cmNlID0gKGRzOiBEYXRhU291cmNlIHwgbnVsbCk6IERhdGFTb3VyY2UgfCBudWxsID0+IHtcbiAgaWYgKCFkcykgcmV0dXJuIG51bGxcbiAgY29uc3QgbWFpbiA9IChkcyBhcyBEYXRhU291cmNlV2l0aE1haW4pLmdldE1haW5EYXRhU291cmNlPy4oKVxuICByZXR1cm4gbWFpbiA/PyBkc1xufVxuXG4vKiogVXNhIGEgaW5zdMOibmNpYSBkYSBjYW1hZGEgc2VsZWNpb25hZGEgKGV4LjogUGxhbmlsaGExKSBxdWFuZG8gZWxhIGrDoSDDqSBjb25zdWx0w6F2ZWwuICovXG5leHBvcnQgY29uc3QgZ2V0UXVlcnlhYmxlRGF0YVNvdXJjZSA9IChkczogRGF0YVNvdXJjZSB8IG51bGwpOiBEYXRhU291cmNlIHwgbnVsbCA9PiB7XG4gIGlmICghZHMpIHJldHVybiBudWxsXG4gIGNvbnN0IHEgPSBkcyBhcyBEYXRhU291cmNlV2l0aE1haW4gJiB7XG4gICAgcXVlcnk/OiAocDogb2JqZWN0KSA9PiBQcm9taXNlPHVua25vd24+XG4gICAgbG9hZD86IChwOiBvYmplY3QpID0+IFByb21pc2U8dW5rbm93bj5cbiAgICBsb2FkQWxsPzogKHA6IG9iamVjdCkgPT4gUHJvbWlzZTx1bmtub3duPlxuICB9XG4gIGlmIChcbiAgICB0eXBlb2YgcS5xdWVyeSA9PT0gJ2Z1bmN0aW9uJyB8fFxuICAgIHR5cGVvZiBxLmxvYWQgPT09ICdmdW5jdGlvbicgfHxcbiAgICB0eXBlb2YgcS5sb2FkQWxsID09PSAnZnVuY3Rpb24nXG4gICkge1xuICAgIHJldHVybiBkc1xuICB9XG4gIHJldHVybiBnZXRNYWluRGF0YVNvdXJjZShkcylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVuc3VyZURhdGFTb3VyY2VTY2hlbWEgKFxuICBkczogRGF0YVNvdXJjZVxuKTogUHJvbWlzZTxJTURhdGFTb3VyY2VTY2hlbWEgfCB1bmRlZmluZWQ+IHtcbiAgY29uc3QgZXhpc3RpbmcgPSBnZXREYXRhU291cmNlU2NoZW1hKGRzKVxuICBpZiAoZXhpc3Rpbmc/LmZpZWxkcyAmJiBPYmplY3Qua2V5cyhleGlzdGluZy5maWVsZHMpLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gZXhpc3RpbmdcbiAgfVxuICBjb25zdCBmZXRjaFNjaGVtYSA9IChkcyBhcyBEYXRhU291cmNlV2l0aE1haW4gJiB7XG4gICAgZmV0Y2hTY2hlbWE/OiAoKSA9PiBQcm9taXNlPElNRGF0YVNvdXJjZVNjaGVtYT5cbiAgfSkuZmV0Y2hTY2hlbWFcbiAgaWYgKHR5cGVvZiBmZXRjaFNjaGVtYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gYXdhaXQgZmV0Y2hTY2hlbWEuY2FsbChkcylcbiAgICB9IGNhdGNoIHtcbiAgICAgIHJldHVybiBleGlzdGluZ1xuICAgIH1cbiAgfVxuICByZXR1cm4gZXhpc3Rpbmdcbn1cblxuZXhwb3J0IGNvbnN0IGdldERhdGFTb3VyY2VTY2hlbWEgPSAoXG4gIGRzOiBEYXRhU291cmNlXG4pOiBJTURhdGFTb3VyY2VTY2hlbWEgfCB1bmRlZmluZWQgPT5cbiAgKGRzIGFzIERhdGFTb3VyY2VXaXRoTWFpbikuZ2V0U2NoZW1hPy4oKVxuIiwiaW1wb3J0IHsgQVJFQV9VTklUIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuXG5leHBvcnQgY29uc3QgZm9ybWF0QXJlYSA9ICh2YWx1ZTogbnVtYmVyKTogc3RyaW5nID0+XG4gIGAke3ZhbHVlLnRvTG9jYWxlU3RyaW5nKCdwdC1CUicsIHtcbiAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyXG4gIH0pfSAke0FSRUFfVU5JVH1gXG5cbmV4cG9ydCB0eXBlIFZhcmlhdGlvblRvbmUgPSAncG9zaXRpdmUnIHwgJ25lZ2F0aXZlJyB8ICduZXV0cmFsJ1xuXG5leHBvcnQgY29uc3QgZ2V0VmFyaWF0aW9uVG9uZSA9IChwY3Q6IG51bWJlcik6IFZhcmlhdGlvblRvbmUgPT4ge1xuICBpZiAocGN0ID4gMCkgcmV0dXJuICdwb3NpdGl2ZSdcbiAgaWYgKHBjdCA8IDApIHJldHVybiAnbmVnYXRpdmUnXG4gIHJldHVybiAnbmV1dHJhbCdcbn1cbiIsImltcG9ydCB7XG4gIHR5cGUgSU1GaWVsZFNjaGVtYSxcbiAgdHlwZSBJTURhdGFTb3VyY2VTY2hlbWEsXG4gIEppbXVGaWVsZFR5cGUsXG4gIEVzcmlGaWVsZFR5cGUsXG4gIFF1ZXJ5U2NvcGUsXG4gIHR5cGUgRGF0YVJlY29yZCxcbiAgZXNyaSxcbiAgcmVxdWVzdFV0aWxzXG59IGZyb20gJ2ppbXUtY29yZSdcblxuZXhwb3J0IGludGVyZmFjZSBZZWFyVmFsdWVSb3cge1xuICB5ZWFyOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpZWxkQXR0cmlidXRlS2V5cyB7XG4gIHllYXJLZXk6IHN0cmluZ1xuICByZWNvcnRlS2V5OiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfWUVBUl9GSUVMRCA9ICdhbm8nXG5cbmNvbnN0IFlFQVJfTkFNRV9QQVRURVJOUyA9IFsnYW5vJywgJ3llYXInLCAneXInLCAnZXhlcmNpY2lvJywgJ2V4ZXJjw61jaW8nXVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eUNlbGwgKHZhbHVlOiB1bmtub3duKTogYm9vbGVhbiB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gdHJ1ZVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS50cmltKCkgPT09ICcnKSByZXR1cm4gdHJ1ZVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiBOdW1iZXIuaXNOYU4odmFsdWUpKSByZXR1cm4gdHJ1ZVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTnVtZXJpY1ZhbHVlICh2YWx1ZTogdW5rbm93bik6IG51bWJlciB8IG51bGwge1xuICBpZiAoaXNFbXB0eUNlbGwodmFsdWUpKSByZXR1cm4gbnVsbFxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiBOdW1iZXIuaXNGaW5pdGUodmFsdWUpKSByZXR1cm4gdmFsdWVcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCBzID0gdmFsdWUudHJpbSgpXG4gICAgaWYgKCFzKSByZXR1cm4gbnVsbFxuICAgIGlmIChzLmluY2x1ZGVzKCcsJykpIHtcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBzLnJlcGxhY2UoL1xcLi9nLCAnJykucmVwbGFjZSgnLCcsICcuJylcbiAgICAgIGNvbnN0IG4gPSBOdW1iZXIobm9ybWFsaXplZClcbiAgICAgIHJldHVybiBOdW1iZXIuaXNGaW5pdGUobikgPyBuIDogbnVsbFxuICAgIH1cbiAgICBjb25zdCBuID0gTnVtYmVyKHMpXG4gICAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShuKSA/IG4gOiBudWxsXG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxuLyoqIENvbnZlcnRlIG7Dum1lcm8gZXhpYmlkbyBubyBBcmNHSVMgZW0gcHQtQlIgKGV4LjogMi4wMDEg4oaSIDIwMDEpLiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplWWVhck51bWJlciAobjogbnVtYmVyKTogbnVtYmVyIHwgbnVsbCB7XG4gIGlmICghTnVtYmVyLmlzRmluaXRlKG4pKSByZXR1cm4gbnVsbFxuXG4gIGlmIChuID49IDE5ODUgJiYgbiA8PSAyMDM1ICYmIE1hdGguYWJzKG4gLSBNYXRoLnJvdW5kKG4pKSA8IDAuMDAxKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobilcbiAgfVxuXG4gIC8vIFRhYmVsYSBQUk9ERVMgbm8gUG9ydGFsOiBjb2x1bmEgQW5vIGNvbW8gMi4wMDEsIDIuMDExIChtaWxoYXIgY29tIHBvbnRvKVxuICBpZiAobiA+PSAxLjk4NSAmJiBuIDw9IDIuMDM1KSB7XG4gICAgY29uc3QgeSA9IE1hdGgucm91bmQobiAqIDEwMDApXG4gICAgaWYgKHkgPj0gMTk4NSAmJiB5IDw9IDIwMzUpIHJldHVybiB5XG4gIH1cblxuICBjb25zdCB0cnVuY2F0ZWQgPSBNYXRoLnRydW5jKG4pXG4gIGlmICh0cnVuY2F0ZWQgPj0gMTk4NSAmJiB0cnVuY2F0ZWQgPD0gMjAzNSkgcmV0dXJuIHRydW5jYXRlZFxuICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VZZWFyICh2YWx1ZTogdW5rbm93bik6IG51bWJlciB8IG51bGwge1xuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlICYmICFOdW1iZXIuaXNOYU4odmFsdWUuZ2V0VGltZSgpKSkge1xuICAgIHJldHVybiB2YWx1ZS5nZXRGdWxsWWVhcigpXG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgTnVtYmVyLmlzRmluaXRlKHZhbHVlKSkge1xuICAgIHJldHVybiBub3JtYWxpemVZZWFyTnVtYmVyKHZhbHVlKVxuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgcyA9IHZhbHVlLnRyaW0oKVxuICAgIGlmICghcykgcmV0dXJuIG51bGxcblxuICAgIGNvbnN0IGJyVGhvdXNhbmRzID0gcy5tYXRjaCgvXihcXGR7MSwyfSlcXC4oXFxkezN9KSQvKVxuICAgIGlmIChiclRob3VzYW5kcykge1xuICAgICAgY29uc3QgeSA9IE51bWJlcihiclRob3VzYW5kc1sxXSArIGJyVGhvdXNhbmRzWzJdKVxuICAgICAgaWYgKHkgPj0gMTk4NSAmJiB5IDw9IDIwMzUpIHJldHVybiB5XG4gICAgfVxuXG4gICAgY29uc3QgbiA9IE51bWJlcihzLnJlcGxhY2UoJywnLCAnLicpKVxuICAgIGlmIChOdW1iZXIuaXNGaW5pdGUobikpIHJldHVybiBub3JtYWxpemVZZWFyTnVtYmVyKG4pXG5cbiAgICBjb25zdCBtID0gcy5tYXRjaCgvXFxiKDE5fDIwKVxcZHsyfVxcYi8pXG4gICAgaWYgKG0pIHJldHVybiBOdW1iZXIobVswXSlcbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2NoZW1hVG9GaWVsZExpc3QgKHNjaGVtYT86IElNRGF0YVNvdXJjZVNjaGVtYSB8IG51bGwpOiBJTUZpZWxkU2NoZW1hW10ge1xuICBpZiAoIXNjaGVtYT8uZmllbGRzKSByZXR1cm4gW11cbiAgcmV0dXJuIE9iamVjdC5rZXlzKHNjaGVtYS5maWVsZHMpLm1hcCgoa2V5KSA9PiBzY2hlbWEuZmllbGRzW2tleV0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc051bWVyaWNSZWNvcnRlRmllbGQgKGZpZWxkOiBJTUZpZWxkU2NoZW1hKTogYm9vbGVhbiB7XG4gIGlmIChmaWVsZC50eXBlID09PSBKaW11RmllbGRUeXBlLk51bWJlcikgcmV0dXJuIHRydWVcbiAgY29uc3QgZXNyaSA9IGZpZWxkLmVzcmlUeXBlXG4gIHJldHVybiAoXG4gICAgZXNyaSA9PT0gRXNyaUZpZWxkVHlwZS5Eb3VibGUgfHxcbiAgICBlc3JpID09PSBFc3JpRmllbGRUeXBlLlNpbmdsZSB8fFxuICAgIGVzcmkgPT09IEVzcmlGaWVsZFR5cGUuSW50ZWdlciB8fFxuICAgIGVzcmkgPT09IEVzcmlGaWVsZFR5cGUuU21hbGxJbnRlZ2VyXG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEF0dHJpYnV0ZUtleSAoZmllbGQ6IElNRmllbGRTY2hlbWEpOiBzdHJpbmcge1xuICByZXR1cm4gZmllbGQubmFtZSB8fCBmaWVsZC5qaW11TmFtZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGV0ZWN0WWVhckZpZWxkIChmaWVsZHM6IElNRmllbGRTY2hlbWFbXSk6IHN0cmluZyB8IG51bGwge1xuICBjb25zdCBleGFjdEFubyA9IGZpZWxkcy5maW5kKFxuICAgIChmKSA9PlxuICAgICAgZi5qaW11TmFtZT8udG9Mb3dlckNhc2UoKSA9PT0gJ2FubycgfHxcbiAgICAgIGYubmFtZT8udG9Mb3dlckNhc2UoKSA9PT0gJ2FubycgfHxcbiAgICAgIGYuYWxpYXM/LnRvTG93ZXJDYXNlKCkgPT09ICdhbm8nXG4gIClcbiAgaWYgKGV4YWN0QW5vKSByZXR1cm4gZXhhY3RBbm8uamltdU5hbWVcblxuICBjb25zdCBjYW5kaWRhdGVzID0gZmllbGRzLmZpbHRlcihcbiAgICAoZikgPT4gZi50eXBlID09PSBKaW11RmllbGRUeXBlLk51bWJlciB8fCBmLnR5cGUgPT09IEppbXVGaWVsZFR5cGUuU3RyaW5nXG4gIClcbiAgZm9yIChjb25zdCBwYXQgb2YgWUVBUl9OQU1FX1BBVFRFUk5TKSB7XG4gICAgY29uc3QgZm91bmQgPSBjYW5kaWRhdGVzLmZpbmQoXG4gICAgICAoZikgPT5cbiAgICAgICAgZi5qaW11TmFtZT8udG9Mb3dlckNhc2UoKSA9PT0gcGF0IHx8XG4gICAgICAgIGYubmFtZT8udG9Mb3dlckNhc2UoKSA9PT0gcGF0IHx8XG4gICAgICAgIGYuYWxpYXM/LnRvTG93ZXJDYXNlKCkgPT09IHBhdFxuICAgIClcbiAgICBpZiAoZm91bmQpIHJldHVybiBmb3VuZC5qaW11TmFtZVxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRSZWNvcnRlTGFiZWwgKGZpZWxkOiBJTUZpZWxkU2NoZW1hKTogc3RyaW5nIHtcbiAgcmV0dXJuIGZvcm1hdFJlY29ydGVMYWJlbEZyb21OYW1lKGZpZWxkLmppbXVOYW1lLCBmaWVsZC5hbGlhcylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFJlY29ydGVMYWJlbEZyb21OYW1lIChqaW11TmFtZTogc3RyaW5nLCBhbGlhcz86IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChhbGlhcz8udHJpbSgpKSByZXR1cm4gYWxpYXMudHJpbSgpXG4gIHJldHVybiBqaW11TmFtZVxuICAgIC5zcGxpdCgnXycpXG4gICAgLmZpbHRlcihCb29sZWFuKVxuICAgIC5tYXAoKHcpID0+IHcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3LnNsaWNlKDEpLnRvTG93ZXJDYXNlKCkpXG4gICAgLmpvaW4oJyAnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3lzdGVtSGlkZGVuRmllbGROYW1lcyAoZmllbGRzOiBJTUZpZWxkU2NoZW1hW10pOiBzdHJpbmdbXSB7XG4gIHJldHVybiBmaWVsZHNcbiAgICAuZmlsdGVyKChmKSA9PiB7XG4gICAgICBjb25zdCBlc3JpID0gZi5lc3JpVHlwZVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgZXNyaSA9PT0gRXNyaUZpZWxkVHlwZS5PSUQgfHxcbiAgICAgICAgZXNyaSA9PT0gRXNyaUZpZWxkVHlwZS5HZW9tZXRyeSB8fFxuICAgICAgICBlc3JpID09PSBFc3JpRmllbGRUeXBlLkdsb2JhbElEIHx8XG4gICAgICAgIGVzcmkgPT09IEVzcmlGaWVsZFR5cGUuR1VJRFxuICAgICAgKVxuICAgIH0pXG4gICAgLm1hcCgoZikgPT4gZi5qaW11TmFtZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlY29ydGVIaWRkZW5GaWVsZE5hbWVzIChcbiAgZmllbGRzOiBJTUZpZWxkU2NoZW1hW10sXG4gIHllYXJGaWVsZD86IHN0cmluZ1xuKTogc3RyaW5nW10ge1xuICBjb25zdCBoaWRkZW4gPSBnZXRTeXN0ZW1IaWRkZW5GaWVsZE5hbWVzKGZpZWxkcylcbiAgaWYgKHllYXJGaWVsZCAmJiAhaGlkZGVuLmluY2x1ZGVzKHllYXJGaWVsZCkpIHtcbiAgICBoaWRkZW4ucHVzaCh5ZWFyRmllbGQpXG4gIH1cbiAgcmV0dXJuIGhpZGRlblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVjb3J0ZUNhbmRpZGF0ZUZpZWxkcyAoXG4gIGZpZWxkczogSU1GaWVsZFNjaGVtYVtdLFxuICB5ZWFyRmllbGQ/OiBzdHJpbmdcbik6IElNRmllbGRTY2hlbWFbXSB7XG4gIGNvbnN0IGhpZGRlbiA9IG5ldyBTZXQoZ2V0UmVjb3J0ZUhpZGRlbkZpZWxkTmFtZXMoZmllbGRzLCB5ZWFyRmllbGQpKVxuICByZXR1cm4gZmllbGRzXG4gICAgLmZpbHRlcigoZikgPT4gaXNOdW1lcmljUmVjb3J0ZUZpZWxkKGYpICYmICFoaWRkZW4uaGFzKGYuamltdU5hbWUpKVxuICAgIC5zb3J0KChhLCBiKSA9PlxuICAgICAgZm9ybWF0UmVjb3J0ZUxhYmVsKGEpLmxvY2FsZUNvbXBhcmUoZm9ybWF0UmVjb3J0ZUxhYmVsKGIpLCAncHQtQlInKVxuICAgIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRGaWVsZEJ5SmltdU5hbWUgKFxuICBmaWVsZHM6IElNRmllbGRTY2hlbWFbXSxcbiAgamltdU5hbWU/OiBzdHJpbmdcbik6IElNRmllbGRTY2hlbWEgfCBudWxsIHtcbiAgaWYgKCFqaW11TmFtZSkgcmV0dXJuIG51bGxcbiAgY29uc3QgZXhhY3QgPSBmaWVsZHMuZmluZCgoZikgPT4gZi5qaW11TmFtZSA9PT0gamltdU5hbWUpXG4gIGlmIChleGFjdCkgcmV0dXJuIGV4YWN0XG4gIGNvbnN0IGxvd2VyID0gamltdU5hbWUudG9Mb3dlckNhc2UoKVxuICByZXR1cm4gKFxuICAgIGZpZWxkcy5maW5kKFxuICAgICAgKGYpID0+XG4gICAgICAgIGYuamltdU5hbWU/LnRvTG93ZXJDYXNlKCkgPT09IGxvd2VyIHx8XG4gICAgICAgIGYubmFtZT8udG9Mb3dlckNhc2UoKSA9PT0gbG93ZXIgfHxcbiAgICAgICAgZi5hbGlhcz8udG9Mb3dlckNhc2UoKSA9PT0gbG93ZXJcbiAgICApID8/IG51bGxcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUF0dHJpYnV0ZUtleXMgKFxuICBmaWVsZHM6IElNRmllbGRTY2hlbWFbXSxcbiAgeWVhckZpZWxkSmltdT86IHN0cmluZyxcbiAgcmVjb3J0ZUZpZWxkSmltdT86IHN0cmluZ1xuKTogRmllbGRBdHRyaWJ1dGVLZXlzIHwgbnVsbCB7XG4gIGlmICgheWVhckZpZWxkSmltdSB8fCAhcmVjb3J0ZUZpZWxkSmltdSkgcmV0dXJuIG51bGxcblxuICBjb25zdCB5ZWFyRmllbGQgPSBmaW5kRmllbGRCeUppbXVOYW1lKGZpZWxkcywgeWVhckZpZWxkSmltdSlcbiAgY29uc3QgcmVjb3J0ZUZpZWxkID0gZmluZEZpZWxkQnlKaW11TmFtZShmaWVsZHMsIHJlY29ydGVGaWVsZEppbXUpXG5cbiAgcmV0dXJuIHtcbiAgICB5ZWFyS2V5OiB5ZWFyRmllbGQgPyBnZXRBdHRyaWJ1dGVLZXkoeWVhckZpZWxkKSA6IHllYXJGaWVsZEppbXUsXG4gICAgcmVjb3J0ZUtleTogcmVjb3J0ZUZpZWxkID8gZ2V0QXR0cmlidXRlS2V5KHJlY29ydGVGaWVsZCkgOiByZWNvcnRlRmllbGRKaW11XG4gIH1cbn1cblxudHlwZSBSZWNvcmRMaWtlID1cbiAgfCBEYXRhUmVjb3JkXG4gIHwge1xuICAgICAgYXR0cmlidXRlcz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gICAgICBmZWF0dXJlPzogeyBhdHRyaWJ1dGVzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfVxuICAgICAgZ2V0RGF0YT86ICgpID0+IHtcbiAgICAgICAgYXR0cmlidXRlcz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gICAgICAgIGZlYXR1cmU/OiB7IGF0dHJpYnV0ZXM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB9XG4gICAgICB9XG4gICAgICBnZXRGaWVsZFZhbHVlPzogKGppbXVGaWVsZE5hbWU6IHN0cmluZykgPT4gdW5rbm93blxuICAgICAgZ2V0RGF0ZUZpZWxkVmFsdWU/OiAoamltdUZpZWxkTmFtZTogc3RyaW5nKSA9PiB1bmtub3duXG4gICAgICBnZXREYXRhQmVmb3JlTWFwcGluZz86ICgpID0+IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gICAgfVxuXG5mdW5jdGlvbiB0b1BsYWluT2JqZWN0ICh2YWx1ZTogdW5rbm93bik6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHtcbiAgaWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSByZXR1cm4ge31cbiAgY29uc3QgdiA9IHZhbHVlIGFzIHtcbiAgICB0b0pTPzogKCkgPT4gUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgICBhc011dGFibGU/OiAob3B0cz86IHsgZGVlcDogYm9vbGVhbiB9KSA9PiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICB9XG4gIGlmICh0eXBlb2Ygdi50b0pTID09PSAnZnVuY3Rpb24nKSByZXR1cm4gdi50b0pTKClcbiAgaWYgKHR5cGVvZiB2LmFzTXV0YWJsZSA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHYuYXNNdXRhYmxlKHsgZGVlcDogdHJ1ZSB9KVxuICByZXR1cm4gdmFsdWUgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbn1cblxuY29uc3QgR0VUX0RBVEFfTUVUQV9LRVlTID0gbmV3IFNldChbXG4gICdhdHRyaWJ1dGVzJyxcbiAgJ2ZlYXR1cmUnLFxuICAnZ2VvbWV0cnknLFxuICAnY2VudHJvaWQnLFxuICAnYWdncmVnYXRlR2VvbWV0cmllcycsXG4gICdzeW1ib2wnXG5dKVxuXG4vKiogRXh0cmFpIG8gZGljaW9uw6FyaW8gZGUgYXRyaWJ1dG9zIGRlIHVtIHJlZ2lzdHJvICh2w6FyaW9zIGZvcm1hdG9zIGRvIEppbXUvQXJjR0lTKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQbGFpbkF0dHJpYnV0ZXMgKHJlYzogUmVjb3JkTGlrZSk6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHtcbiAgY29uc3QgbWVyZ2VkOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9XG5cbiAgY29uc3QgbWVyZ2UgPSAoYXR0cnM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikgPT4ge1xuICAgIGlmICghYXR0cnMpIHJldHVyblxuICAgIE9iamVjdC5hc3NpZ24obWVyZ2VkLCB0b1BsYWluT2JqZWN0KGF0dHJzKSlcbiAgfVxuXG4gIGlmICgnZ2V0RGF0YScgaW4gcmVjICYmIHR5cGVvZiByZWMuZ2V0RGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IGRhdGEgPSByZWMuZ2V0RGF0YSgpXG4gICAgY29uc3QgcGxhaW4gPSB0b1BsYWluT2JqZWN0KGRhdGEpXG4gICAgbWVyZ2UocGxhaW4uYXR0cmlidXRlcyBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IHVuZGVmaW5lZClcbiAgICBtZXJnZShwbGFpbi5mZWF0dXJlPy5hdHRyaWJ1dGVzIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgdW5kZWZpbmVkKVxuICAgIC8vIEppbXUgRGF0YVJlY29yZDogZ2V0RGF0YSgpIGNvc3R1bWEgc2VyIG1hcGEgcGxhbm8geyBqaW11RmllbGROYW1lOiB2YWxvciB9XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocGxhaW4pKSB7XG4gICAgICBpZiAoR0VUX0RBVEFfTUVUQV9LRVlTLmhhcyhrZXkpKSBjb250aW51ZVxuICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIG1lcmdlZFtrZXldID0gdmFsdWVcbiAgICB9XG4gIH1cblxuICBpZiAoJ2ZlYXR1cmUnIGluIHJlYyAmJiByZWMuZmVhdHVyZT8uYXR0cmlidXRlcykge1xuICAgIG1lcmdlKHJlYy5mZWF0dXJlLmF0dHJpYnV0ZXMpXG4gIH1cblxuICBpZiAoJ2F0dHJpYnV0ZXMnIGluIHJlYyAmJiByZWMuYXR0cmlidXRlcykge1xuICAgIG1lcmdlKHJlYy5hdHRyaWJ1dGVzKVxuICB9XG5cbiAgaWYgKCdnZXREYXRhQmVmb3JlTWFwcGluZycgaW4gcmVjICYmIHR5cGVvZiByZWMuZ2V0RGF0YUJlZm9yZU1hcHBpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICBtZXJnZShyZWMuZ2V0RGF0YUJlZm9yZU1hcHBpbmcoKSlcbiAgfVxuXG4gIHJldHVybiBtZXJnZWRcbn1cblxuZnVuY3Rpb24gYXR0cmlidXRlSGFzVXNhYmxlVmFsdWUgKHZhbHVlOiB1bmtub3duKTogYm9vbGVhbiB7XG4gIGlmIChpc0VtcHR5Q2VsbCh2YWx1ZSkpIHJldHVybiBmYWxzZVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JykgcmV0dXJuIGZhbHNlXG4gIHJldHVybiB0cnVlXG59XG5cbi8qKiBWZXJpZmljYSBzZSBvIHJlZ2lzdHJvIGV4cMO1ZSBhdHJpYnV0b3Mgb3UgZ2V0RmllbGRWYWx1ZSBjb20gZGFkb3MgcmVhaXMgKG7Do28gc8OzIG3DqXRvZG8gdmF6aW8pLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlY29yZEhhc1JlYWRhYmxlRGF0YSAocmVjOiBSZWNvcmRMaWtlKTogYm9vbGVhbiB7XG4gIGNvbnN0IGF0dHJzID0gZ2V0UGxhaW5BdHRyaWJ1dGVzKHJlYylcbiAgY29uc3QgdXNhYmxlS2V5cyA9IE9iamVjdC5rZXlzKGF0dHJzKS5maWx0ZXIoKGtleSkgPT4ge1xuICAgIGlmICgvXihvYmplY3RpZHxnbG9iYWxpZHxzaGFwZXxnZW9tZXRyeSkkL2kudGVzdChrZXkpKSByZXR1cm4gZmFsc2VcbiAgICByZXR1cm4gYXR0cmlidXRlSGFzVXNhYmxlVmFsdWUoYXR0cnNba2V5XSlcbiAgfSlcbiAgaWYgKHVzYWJsZUtleXMubGVuZ3RoID4gMCkgcmV0dXJuIHRydWVcblxuICBpZiAoJ2dldEZpZWxkVmFsdWUnIGluIHJlYyAmJiB0eXBlb2YgcmVjLmdldEZpZWxkVmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCBwcm9iZXMgPSBbXG4gICAgICAnYW5vJyxcbiAgICAgICd5ZWFyJyxcbiAgICAgICdBTk8nLFxuICAgICAgJ1llYXInLFxuICAgICAgJ2V4ZXJjaWNpbycsXG4gICAgICAnRXhlcmNpY2lvJ1xuICAgIF1cbiAgICBmb3IgKGNvbnN0IG5hbWUgb2YgcHJvYmVzKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB2ID0gcmVjLmdldEZpZWxkVmFsdWUhKG5hbWUpXG4gICAgICAgIGlmIChhdHRyaWJ1dGVIYXNVc2FibGVWYWx1ZSh2KSkgcmV0dXJuIHRydWVcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAvLyB0ZW50YSBwcsOzeGltb1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG4vKiogTMOqIHZhbG9yIHBlbG8gQVBJIGRvIEppbXUgKGBnZXRGaWVsZFZhbHVlYCkgZSwgZW0gc2VndWlkYSwgcGVsb3MgYXRyaWJ1dG9zIGJydXRvcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWFkUmVjb3JkVmFsdWUgKFxuICByZWM6IFJlY29yZExpa2UsXG4gIGZpZWxkPzogSU1GaWVsZFNjaGVtYSB8IG51bGwsXG4gIGZhbGxiYWNrSmltdU5hbWU/OiBzdHJpbmdcbik6IHVua25vd24ge1xuICBjb25zdCBuYW1lczogc3RyaW5nW10gPSBbXVxuICBpZiAoZmllbGQ/LmppbXVOYW1lKSBuYW1lcy5wdXNoKGZpZWxkLmppbXVOYW1lKVxuICBpZiAoZmFsbGJhY2tKaW11TmFtZSkgbmFtZXMucHVzaChmYWxsYmFja0ppbXVOYW1lKVxuICBpZiAoZmllbGQ/Lm5hbWUpIG5hbWVzLnB1c2goZmllbGQubmFtZSlcbiAgaWYgKGZpZWxkPy5hbGlhcykgbmFtZXMucHVzaChmaWVsZC5hbGlhcylcbiAgaWYgKGZpZWxkKSBuYW1lcy5wdXNoKGdldEF0dHJpYnV0ZUtleShmaWVsZCkpXG5cbiAgY29uc3QgdW5pcXVlTmFtZXMgPSBbLi4ubmV3IFNldChuYW1lcy5maWx0ZXIoQm9vbGVhbikpXVxuXG4gIGlmICgnZ2V0RmllbGRWYWx1ZScgaW4gcmVjICYmIHR5cGVvZiByZWMuZ2V0RmllbGRWYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvciAoY29uc3QgbmFtZSBvZiB1bmlxdWVOYW1lcykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdiA9IHJlYy5nZXRGaWVsZFZhbHVlIShuYW1lKVxuICAgICAgICBpZiAodiAhPT0gdW5kZWZpbmVkKSByZXR1cm4gdlxuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIHRlbnRhIHByw7N4aW1vIG5vbWVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoXG4gICAgZmllbGQ/LmppbXVOYW1lICYmXG4gICAgJ2dldERhdGVGaWVsZFZhbHVlJyBpbiByZWMgJiZcbiAgICB0eXBlb2YgcmVjLmdldERhdGVGaWVsZFZhbHVlID09PSAnZnVuY3Rpb24nXG4gICkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB2ID0gcmVjLmdldERhdGVGaWVsZFZhbHVlIShmaWVsZC5qaW11TmFtZSlcbiAgICAgIGlmICh2ICE9PSB1bmRlZmluZWQpIHJldHVybiB2XG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyBpZ25vcmFcbiAgICB9XG4gIH1cblxuICBjb25zdCBhdHRycyA9IGdldFBsYWluQXR0cmlidXRlcyhyZWMpXG4gIGNvbnN0IGZyb21NYXBwZWQgPSByZWFkQXR0cmlidXRlRmxleGlibGUoYXR0cnMsIGZpZWxkLCBmYWxsYmFja0ppbXVOYW1lKVxuICBpZiAoZnJvbU1hcHBlZCAhPT0gdW5kZWZpbmVkKSByZXR1cm4gZnJvbU1hcHBlZFxuXG4gIGlmICgnZ2V0RGF0YUJlZm9yZU1hcHBpbmcnIGluIHJlYyAmJiB0eXBlb2YgcmVjLmdldERhdGFCZWZvcmVNYXBwaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3QgcmF3ID0gdG9QbGFpbk9iamVjdChyZWMuZ2V0RGF0YUJlZm9yZU1hcHBpbmcoKSlcbiAgICByZXR1cm4gcmVhZEF0dHJpYnV0ZUZsZXhpYmxlKHJhdywgZmllbGQsIGZhbGxiYWNrSmltdU5hbWUpXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIHJlYWRBdHRyaWJ1dGUgKFxuICBhdHRyczogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXG4gIHByaW1hcnlLZXk6IHN0cmluZyxcbiAgZmFsbGJhY2tLZXk/OiBzdHJpbmdcbik6IHVua25vd24ge1xuICBpZiAocHJpbWFyeUtleSBpbiBhdHRycykgcmV0dXJuIGF0dHJzW3ByaW1hcnlLZXldXG4gIGlmIChmYWxsYmFja0tleSAmJiBmYWxsYmFja0tleSAhPT0gcHJpbWFyeUtleSAmJiBmYWxsYmFja0tleSBpbiBhdHRycykge1xuICAgIHJldHVybiBhdHRyc1tmYWxsYmFja0tleV1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbi8qKiBUZW50YSBqaW11TmFtZSwgbmFtZSwgYWxpYXMgZSBjb3JyZXNwb25kw6puY2lhIHNlbSBkaWZlcmVuY2lhciBtYWnDunNjdWxhcy9taW7DunNjdWxhcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWFkQXR0cmlidXRlRmxleGlibGUgKFxuICBhdHRyczogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXG4gIGZpZWxkPzogSU1GaWVsZFNjaGVtYSB8IG51bGwsXG4gIGZhbGxiYWNrSmltdU5hbWU/OiBzdHJpbmdcbik6IHVua25vd24ge1xuICBjb25zdCBjYW5kaWRhdGVzID0gbmV3IFNldDxzdHJpbmc+KClcbiAgaWYgKGZpZWxkKSB7XG4gICAgaWYgKGZpZWxkLmppbXVOYW1lKSBjYW5kaWRhdGVzLmFkZChmaWVsZC5qaW11TmFtZSlcbiAgICBpZiAoZmllbGQubmFtZSkgY2FuZGlkYXRlcy5hZGQoZmllbGQubmFtZSlcbiAgICBpZiAoZmllbGQuYWxpYXMpIGNhbmRpZGF0ZXMuYWRkKGZpZWxkLmFsaWFzKVxuICAgIGNhbmRpZGF0ZXMuYWRkKGdldEF0dHJpYnV0ZUtleShmaWVsZCkpXG4gIH1cbiAgaWYgKGZhbGxiYWNrSmltdU5hbWUpIGNhbmRpZGF0ZXMuYWRkKGZhbGxiYWNrSmltdU5hbWUpXG5cbiAgZm9yIChjb25zdCBrZXkgb2YgY2FuZGlkYXRlcykge1xuICAgIGNvbnN0IHYgPSByZWFkQXR0cmlidXRlKGF0dHJzLCBrZXkpXG4gICAgaWYgKHYgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHZcbiAgfVxuXG4gIGNvbnN0IGF0dHJLZXlzID0gT2JqZWN0LmtleXMoYXR0cnMpXG4gIGZvciAoY29uc3Qga2V5IG9mIGNhbmRpZGF0ZXMpIHtcbiAgICBjb25zdCBmb3VuZCA9IGF0dHJLZXlzLmZpbmQoKGspID0+IGsudG9Mb3dlckNhc2UoKSA9PT0ga2V5LnRvTG93ZXJDYXNlKCkpXG4gICAgaWYgKGZvdW5kICE9IG51bGwpIHJldHVybiBhdHRyc1tmb3VuZF1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbnR5cGUgUXVlcmlhYmxlTGF5ZXIgPSB7XG4gIHF1ZXJ5PzogKHE6IG9iamVjdCwgb3B0aW9ucz86IHsgc2NvcGU/OiBRdWVyeVNjb3BlIH0pID0+IFByb21pc2U8eyByZWNvcmRzPzogRGF0YVJlY29yZFtdIH0+XG4gIGxvYWQ/OiAocTogb2JqZWN0LCBvcHRpb25zPzogeyBzY29wZT86IFF1ZXJ5U2NvcGUgfSkgPT4gUHJvbWlzZTxEYXRhUmVjb3JkW10+XG4gIGxvYWRBbGw/OiAoXG4gICAgcTogb2JqZWN0LFxuICAgIHNpZ25hbD86IEFib3J0U2lnbmFsLFxuICAgIHByb2dyZXNzQ2FsbGJhY2s/OiB1bmtub3duLFxuICAgIG9wdGlvbnM/OiB7IHNjb3BlPzogUXVlcnlTY29wZSB9XG4gICkgPT4gUHJvbWlzZTxEYXRhUmVjb3JkW10+XG4gIGdldEFsbExvYWRlZFJlY29yZHM/OiAoKSA9PiBEYXRhUmVjb3JkW11cbiAgZ2V0UmVjb3Jkcz86ICgpID0+IERhdGFSZWNvcmRbXVxuICBsYXllcj86IHsgcXVlcnlGZWF0dXJlcz86IChxOiBvYmplY3QpID0+IFByb21pc2U8eyBmZWF0dXJlcz86IHVua25vd25bXSB9PiB9XG4gIGJ1aWxkUmVjb3JkPzogKGZlYXR1cmU6IHVua25vd24pID0+IERhdGFSZWNvcmRcbn1cblxuY29uc3QgYnVpbGRRdWVyeU9wdGlvbnMgPSAod2lkZ2V0SWQ/OiBzdHJpbmcpID0+ICh7XG4gIHNjb3BlOiBRdWVyeVNjb3BlLkluQWxsRGF0YSxcbiAgLi4uKHdpZGdldElkID8geyB3aWRnZXRJZCB9IDoge30pXG59KVxuXG5jb25zdCBidWlsZFF1ZXJ5UGFyYW1zID0gKFxuICBvdXRGaWVsZHM6IHN0cmluZ1tdID0gWycqJ10sXG4gIGRpc2FibGVDbGllbnRRdWVyeSA9IGZhbHNlXG4pID0+ICh7XG4gIHdoZXJlOiAnMT0xJyxcbiAgb3V0RmllbGRzLFxuICByZXR1cm5HZW9tZXRyeTogZmFsc2UsXG4gIHBhZ2VTaXplOiAyMDAwLFxuICAuLi4oZGlzYWJsZUNsaWVudFF1ZXJ5ID8geyBkaXNhYmxlQ2xpZW50UXVlcnk6IHRydWUgfSA6IHt9KVxufSlcblxuZnVuY3Rpb24gcmVjb3Jkc0FyZVJlYWRhYmxlIChyZWNvcmRzOiBEYXRhUmVjb3JkW10pOiBib29sZWFuIHtcbiAgcmV0dXJuIHJlY29yZHMubGVuZ3RoID4gMCAmJiByZWNvcmRzLnNvbWUocmVjb3JkSGFzUmVhZGFibGVEYXRhKVxufVxuXG5hc3luYyBmdW5jdGlvbiBxdWVyeVZpYUpzYXBpTGF5ZXIgKGRzOiBRdWVyaWFibGVMYXllcik6IFByb21pc2U8RGF0YVJlY29yZFtdPiB7XG4gIGNvbnN0IGxheWVyID0gZHMubGF5ZXIgYXMge1xuICAgIHF1ZXJ5RmVhdHVyZXM/OiAocTogb2JqZWN0KSA9PiBQcm9taXNlPHsgZmVhdHVyZXM/OiB1bmtub3duW10gfT5cbiAgICBxdWVyeT86IChxOiBvYmplY3QpID0+IFByb21pc2U8eyBmZWF0dXJlcz86IHVua25vd25bXSB9PlxuICB9XG4gIGlmICghbGF5ZXIgfHwgdHlwZW9mIGRzLmJ1aWxkUmVjb3JkICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gW11cblxuICBjb25zdCBxID0ge1xuICAgIHdoZXJlOiAnMT0xJyxcbiAgICBvdXRGaWVsZHM6IFsnKiddLFxuICAgIHJldHVybkdlb21ldHJ5OiBmYWxzZSxcbiAgICBudW06IDIwMDBcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID1cbiAgICAgIHR5cGVvZiBsYXllci5xdWVyeUZlYXR1cmVzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gYXdhaXQgbGF5ZXIucXVlcnlGZWF0dXJlcyhxKVxuICAgICAgICA6IHR5cGVvZiBsYXllci5xdWVyeSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgID8gYXdhaXQgbGF5ZXIucXVlcnkocSlcbiAgICAgICAgICA6IG51bGxcbiAgICBjb25zdCBmZWF0dXJlcyA9IHJlc3VsdD8uZmVhdHVyZXMgPz8gW11cbiAgICByZXR1cm4gZmVhdHVyZXMubWFwKChmKSA9PiBkcy5idWlsZFJlY29yZCEoZikpXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBbXVxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoVmlhQXJjZ2lzUmVzdCAoXG4gIGRzOiB7IHVybD86IHN0cmluZyB9XG4pOiBQcm9taXNlPFJlY29yZDxzdHJpbmcsIHVua25vd24+W10+IHtcbiAgaWYgKCFkcy51cmwpIHJldHVybiBbXVxuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGVzcmkucmVzdEZlYXR1cmVTZXJ2aWNlLnF1ZXJ5RmVhdHVyZXMoe1xuICAgICAgdXJsOiBkcy51cmwsXG4gICAgICB3aGVyZTogJzE9MScsXG4gICAgICBvdXRGaWVsZHM6IFsnKiddLFxuICAgICAgcmV0dXJuR2VvbWV0cnk6IGZhbHNlXG4gICAgfSlcbiAgICBjb25zdCBmZWF0dXJlcyA9XG4gICAgICByZXMgJiYgdHlwZW9mIHJlcyA9PT0gJ29iamVjdCcgJiYgJ2ZlYXR1cmVzJyBpbiByZXNcbiAgICAgICAgPyAocmVzIGFzIHsgZmVhdHVyZXM/OiBBcnJheTx7IGF0dHJpYnV0ZXM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB9PiB9KVxuICAgICAgICAgICAgLmZlYXR1cmVzID8/IFtdXG4gICAgICAgIDogW11cbiAgICByZXR1cm4gZmVhdHVyZXNcbiAgICAgIC5tYXAoKGYpID0+ICh7IC4uLihmLmF0dHJpYnV0ZXMgPz8ge30pIH0pKVxuICAgICAgLmZpbHRlcigoYSkgPT4gT2JqZWN0LmtleXMoYSkubGVuZ3RoID4gMClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbn1cblxuLyoqIENvbnN1bHRhIFJFU1QgY29tIGNyZWRlbmNpYWwgZG8gUG9ydGFsIChFbnRlcnByaXNlKS4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFZpYVBvcnRhbFJlc3QgKFxuICBkczogeyB1cmw/OiBzdHJpbmcgfVxuKTogUHJvbWlzZTxSZWNvcmQ8c3RyaW5nLCB1bmtub3duPltdPiB7XG4gIGlmICghZHMudXJsKSByZXR1cm4gW11cbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCByZXF1ZXN0VXRpbHMucmVxdWVzdFdyYXBwZXIoZHMudXJsLCAoc2Vzc2lvbikgPT5cbiAgICAgIGVzcmkucmVzdEZlYXR1cmVTZXJ2aWNlLnF1ZXJ5RmVhdHVyZXMoe1xuICAgICAgICB1cmw6IGRzLnVybCxcbiAgICAgICAgd2hlcmU6ICcxPTEnLFxuICAgICAgICBvdXRGaWVsZHM6IFsnKiddLFxuICAgICAgICByZXR1cm5HZW9tZXRyeTogZmFsc2UsXG4gICAgICAgIGF1dGhlbnRpY2F0aW9uOiBzZXNzaW9uXG4gICAgICB9KVxuICAgIClcbiAgICBjb25zdCBmZWF0dXJlcyA9XG4gICAgICByZXMgJiYgdHlwZW9mIHJlcyA9PT0gJ29iamVjdCcgJiYgJ2ZlYXR1cmVzJyBpbiByZXNcbiAgICAgICAgPyAocmVzIGFzIHsgZmVhdHVyZXM/OiBBcnJheTx7IGF0dHJpYnV0ZXM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB9PiB9KVxuICAgICAgICAgICAgLmZlYXR1cmVzID8/IFtdXG4gICAgICAgIDogW11cbiAgICByZXR1cm4gZmVhdHVyZXNcbiAgICAgIC5tYXAoKGYpID0+ICh7IC4uLihmLmF0dHJpYnV0ZXMgPz8ge30pIH0pKVxuICAgICAgLmZpbHRlcigoYSkgPT4gT2JqZWN0LmtleXMoYSkubGVuZ3RoID4gMClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZldGNoVmlhQXJjZ2lzUmVzdChkcylcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBydW5RdWVyeWFibGVNZXRob2RzIChcbiAgZHM6IFF1ZXJpYWJsZUxheWVyLFxuICBvdXRGaWVsZHM6IHN0cmluZ1tdLFxuICBkaXNhYmxlQ2xpZW50UXVlcnk6IGJvb2xlYW4sXG4gIHdpZGdldElkPzogc3RyaW5nXG4pOiBQcm9taXNlPERhdGFSZWNvcmRbXT4ge1xuICBjb25zdCBwYXJhbXMgPSBidWlsZFF1ZXJ5UGFyYW1zKG91dEZpZWxkcywgZGlzYWJsZUNsaWVudFF1ZXJ5KVxuICBjb25zdCBxdWVyeU9wdGlvbnMgPSBidWlsZFF1ZXJ5T3B0aW9ucyh3aWRnZXRJZClcblxuICBpZiAodHlwZW9mIGRzPy5sb2FkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBkcy5sb2FkKHBhcmFtcywgcXVlcnlPcHRpb25zKVxuICAgICAgaWYgKHJlY29yZHM/Lmxlbmd0aCAmJiByZWNvcmRzQXJlUmVhZGFibGUocmVjb3JkcykpIHJldHVybiByZWNvcmRzXG4gICAgICBpZiAocmVjb3Jkcz8ubGVuZ3RoICYmICFkaXNhYmxlQ2xpZW50UXVlcnkpIHJldHVybiByZWNvcmRzXG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyB0ZW50YSBwcsOzeGltbyBtw6l0b2RvXG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiBkcz8ubG9hZEFsbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZWNvcmRzID0gYXdhaXQgZHMubG9hZEFsbChwYXJhbXMsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBxdWVyeU9wdGlvbnMpXG4gICAgICBpZiAocmVjb3Jkcz8ubGVuZ3RoICYmIHJlY29yZHNBcmVSZWFkYWJsZShyZWNvcmRzKSkgcmV0dXJuIHJlY29yZHNcbiAgICAgIGlmIChyZWNvcmRzPy5sZW5ndGggJiYgIWRpc2FibGVDbGllbnRRdWVyeSkgcmV0dXJuIHJlY29yZHNcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIHRlbnRhIHF1ZXJ5IGFiYWl4b1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgZHM/LnF1ZXJ5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRzLnF1ZXJ5KHBhcmFtcywgcXVlcnlPcHRpb25zKVxuICAgICAgY29uc3QgcmVjb3JkcyA9IHJlc3VsdD8ucmVjb3JkcyA/PyBbXVxuICAgICAgaWYgKHJlY29yZHMubGVuZ3RoICYmIHJlY29yZHNBcmVSZWFkYWJsZShyZWNvcmRzKSkgcmV0dXJuIHJlY29yZHNcbiAgICAgIGlmIChyZWNvcmRzLmxlbmd0aCAmJiAhZGlzYWJsZUNsaWVudFF1ZXJ5KSByZXR1cm4gcmVjb3Jkc1xuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gdGVudGEgSlMgQVBJXG4gICAgfVxuICB9XG5cbiAgY29uc3QgdmlhTGF5ZXIgPSBhd2FpdCBxdWVyeVZpYUpzYXBpTGF5ZXIoZHMpXG4gIGlmICh2aWFMYXllci5sZW5ndGggJiYgcmVjb3Jkc0FyZVJlYWRhYmxlKHZpYUxheWVyKSkgcmV0dXJuIHZpYUxheWVyXG4gIGlmICh2aWFMYXllci5sZW5ndGggJiYgIWRpc2FibGVDbGllbnRRdWVyeSkgcmV0dXJuIHZpYUxheWVyXG5cbiAgcmV0dXJuIFtdXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHF1ZXJ5QWxsUmVjb3JkcyAoXG4gIGRzOiBRdWVyaWFibGVMYXllcixcbiAgb3V0RmllbGRzOiBzdHJpbmdbXSA9IFsnKiddLFxuICB3aWRnZXRJZD86IHN0cmluZ1xuKTogUHJvbWlzZTxEYXRhUmVjb3JkW10+IHtcbiAgbGV0IHJlY29yZHMgPSBhd2FpdCBydW5RdWVyeWFibGVNZXRob2RzKGRzLCBvdXRGaWVsZHMsIGZhbHNlLCB3aWRnZXRJZClcbiAgaWYgKHJlY29yZHNBcmVSZWFkYWJsZShyZWNvcmRzKSkgcmV0dXJuIHJlY29yZHNcblxuICByZWNvcmRzID0gYXdhaXQgcnVuUXVlcnlhYmxlTWV0aG9kcyhkcywgb3V0RmllbGRzLCB0cnVlLCB3aWRnZXRJZClcbiAgaWYgKHJlY29yZHNBcmVSZWFkYWJsZShyZWNvcmRzKSkgcmV0dXJuIHJlY29yZHNcblxuICByZXR1cm4gcmVjb3Jkc1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZldGNoTGF5ZXJSZWNvcmRzT3B0aW9ucyB7XG4gIC8qKiBJZ25vcmEgY2FjaGUgZG8gbWFwYSBlIGZvcsOnYSBxdWVyeS9sb2FkQWxsICjDunRpbCBubyBFbnRlcnByaXNlKS4gKi9cbiAgZm9yY2VRdWVyeT86IGJvb2xlYW5cbiAgeWVhckZpZWxkSmltdT86IHN0cmluZ1xuICByZWNvcnRlRmllbGRKaW11Pzogc3RyaW5nXG4gIGZpZWxkcz86IElNRmllbGRTY2hlbWFbXVxuICAvKiogSUQgZGEgd2lkZ2V0IHBhcmEgYXV0ZW50aWNhw6fDo28gbmEgY29uc3VsdGEgSmltdS4gKi9cbiAgd2lkZ2V0SWQ/OiBzdHJpbmdcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZU91dEZpZWxkcyAoXG4gIHllYXJGaWVsZEppbXU/OiBzdHJpbmcsXG4gIHJlY29ydGVGaWVsZEppbXU/OiBzdHJpbmcsXG4gIGZpZWxkcz86IElNRmllbGRTY2hlbWFbXVxuKTogc3RyaW5nW10ge1xuICBpZiAoIWZpZWxkcz8ubGVuZ3RoIHx8ICF5ZWFyRmllbGRKaW11IHx8ICFyZWNvcnRlRmllbGRKaW11KSByZXR1cm4gWycqJ11cbiAgY29uc3Qga2V5cyA9IHJlc29sdmVBdHRyaWJ1dGVLZXlzKGZpZWxkcywgeWVhckZpZWxkSmltdSwgcmVjb3J0ZUZpZWxkSmltdSlcbiAgaWYgKCFrZXlzKSByZXR1cm4gWycqJ11cbiAgcmV0dXJuIFsnKicsIGtleXMueWVhcktleSwga2V5cy5yZWNvcnRlS2V5XVxufVxuXG4vKiogRGV0ZWN0YSBjb2x1bmEgZGUgYW5vIHBlbG9zIHZhbG9yZXMgcmVhaXMgKGV4LjogQW5vID0gMi4wMDEsIDIwMDEpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRldGVjdFllYXJLZXlGcm9tUm93cyAoXG4gIHJvd3M6IFJlY29yZDxzdHJpbmcsIHVua25vd24+W10sXG4gIGhpbnQ/OiBzdHJpbmdcbik6IHN0cmluZyB8IG51bGwge1xuICBpZiAoIXJvd3MubGVuZ3RoKSByZXR1cm4gbnVsbFxuXG4gIGNvbnN0IGtleXMgPSBuZXcgU2V0PHN0cmluZz4oKVxuICBmb3IgKGNvbnN0IHJvdyBvZiByb3dzLnNsaWNlKDAsIDUwKSkge1xuICAgIE9iamVjdC5rZXlzKHJvdykuZm9yRWFjaCgoaykgPT4ga2V5cy5hZGQoaykpXG4gIH1cblxuICBpZiAoaGludCkge1xuICAgIGNvbnN0IG1hdGNoID0gWy4uLmtleXNdLmZpbmQoKGspID0+IGsudG9Mb3dlckNhc2UoKSA9PT0gaGludC50b0xvd2VyQ2FzZSgpKVxuICAgIGlmIChtYXRjaCkgcmV0dXJuIG1hdGNoXG4gIH1cblxuICBsZXQgYmVzdEtleTogc3RyaW5nIHwgbnVsbCA9IG51bGxcbiAgbGV0IGJlc3RTY29yZSA9IDBcbiAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgIGlmICgvXihvYmplY3RpZHxnbG9iYWxpZHxzaGFwZXxmaWQpJC9pLnRlc3Qoa2V5KSkgY29udGludWVcbiAgICBsZXQgc2NvcmUgPSAwXG4gICAgZm9yIChjb25zdCByb3cgb2Ygcm93cykge1xuICAgICAgY29uc3QgeSA9IHBhcnNlWWVhcihyb3dba2V5XSlcbiAgICAgIGlmICh5ICE9IG51bGwgJiYgeSA+PSAxOTg1ICYmIHkgPD0gMjAzNSkgc2NvcmUrK1xuICAgIH1cbiAgICBpZiAoc2NvcmUgPiBiZXN0U2NvcmUpIHtcbiAgICAgIGJlc3RTY29yZSA9IHNjb3JlXG4gICAgICBiZXN0S2V5ID0ga2V5XG4gICAgfVxuICB9XG4gIHJldHVybiBiZXN0U2NvcmUgPiAwID8gYmVzdEtleSA6IG51bGxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRldGVjdFJlY29ydGVLZXlGcm9tUm93cyAoXG4gIHJvd3M6IFJlY29yZDxzdHJpbmcsIHVua25vd24+W10sXG4gIHJlY29ydGVIaW50OiBzdHJpbmdcbik6IHN0cmluZyB8IG51bGwge1xuICBpZiAoIXJvd3MubGVuZ3RoKSByZXR1cm4gbnVsbFxuICBjb25zdCBoaW50ID0gcmVjb3J0ZUhpbnQ/LnRyaW0oKVxuICBpZiAoIWhpbnQpIHJldHVybiBudWxsXG5cbiAgY29uc3Qga2V5cyA9IG5ldyBTZXQ8c3RyaW5nPigpXG4gIGZvciAoY29uc3Qgcm93IG9mIHJvd3Muc2xpY2UoMCwgNTApKSB7XG4gICAgT2JqZWN0LmtleXMocm93KS5mb3JFYWNoKChrKSA9PiBrZXlzLmFkZChrKSlcbiAgfVxuICBjb25zdCBleGFjdCA9IFsuLi5rZXlzXS5maW5kKFxuICAgIChrKSA9PiBrLnRvTG93ZXJDYXNlKCkgPT09IGhpbnQudG9Mb3dlckNhc2UoKVxuICApXG4gIGlmIChleGFjdCkgcmV0dXJuIGV4YWN0XG4gIHJldHVybiAoXG4gICAgWy4uLmtleXNdLmZpbmQoXG4gICAgICAoaykgPT5cbiAgICAgICAgbm9ybWFsaXplUmVjb3J0ZVRva2VuKGspID09PSBub3JtYWxpemVSZWNvcnRlVG9rZW4oaGludClcbiAgICApID8/IG51bGxcbiAgKVxufVxuXG4vKiogTW9udGEgc8OpcmllIGEgcGFydGlyIGRlIGF0cmlidXRvcyBicnV0b3MgKFJFU1QgLyBxdWVyeUZlYXR1cmVzKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFllYXJTZXJpZXNGcm9tQXR0cmlidXRlUm93cyAoXG4gIHJvd3M6IFJlY29yZDxzdHJpbmcsIHVua25vd24+W10sXG4gIHllYXJGaWVsZEppbXU6IHN0cmluZyxcbiAgcmVjb3J0ZUZpZWxkSmltdTogc3RyaW5nLFxuICBmaWVsZHM/OiBJTUZpZWxkU2NoZW1hW11cbik6IFllYXJWYWx1ZVJvd1tdIHtcbiAgaWYgKCFyb3dzLmxlbmd0aCkgcmV0dXJuIFtdXG5cbiAgY29uc3QgYXNSZWNvcmRzID0gcm93cy5tYXAoKGF0dHJpYnV0ZXMpID0+ICh7IGF0dHJpYnV0ZXMgfSkpXG4gIGNvbnN0IHN0YW5kYXJkID0gYnVpbGRZZWFyU2VyaWVzKFxuICAgIGFzUmVjb3JkcyxcbiAgICB5ZWFyRmllbGRKaW11LFxuICAgIHJlY29ydGVGaWVsZEppbXUsXG4gICAgZmllbGRzXG4gIClcbiAgaWYgKHN0YW5kYXJkLmxlbmd0aCA+IDApIHJldHVybiBzdGFuZGFyZFxuXG4gIGNvbnN0IHllYXJLZXkgPSBkZXRlY3RZZWFyS2V5RnJvbVJvd3Mocm93cywgeWVhckZpZWxkSmltdSkgPz8geWVhckZpZWxkSmltdVxuICBjb25zdCB5ZWFyRmllbGQgPSBmaWVsZHM/Lmxlbmd0aFxuICAgID8gZmluZEZpZWxkQnlKaW11TmFtZShmaWVsZHMsIHllYXJGaWVsZEppbXUpXG4gICAgOiBudWxsXG4gIGNvbnN0IHJlY29ydGVGaWVsZCA9IGZpZWxkcz8ubGVuZ3RoXG4gICAgPyBmaW5kRmllbGRCeUppbXVOYW1lKGZpZWxkcywgcmVjb3J0ZUZpZWxkSmltdSlcbiAgICA6IG51bGxcbiAgY29uc3QgcmVjb3J0ZUtleSA9IHJlc29sdmVSZWNvcnRlS2V5RnJvbVJvd3MoXG4gICAgcm93cyxcbiAgICByZWNvcnRlRmllbGRKaW11LFxuICAgIGZpZWxkcyxcbiAgICB5ZWFyRmllbGRKaW11XG4gIClcblxuICBpZiAoIXllYXJLZXkgfHwgIXJlY29ydGVLZXkpIHJldHVybiBbXVxuXG4gIHJldHVybiBidWlsZFNlcmllc0Zyb21LZXlzKFxuICAgIHJvd3MsXG4gICAgeWVhcktleSxcbiAgICByZWNvcnRlS2V5LFxuICAgIHllYXJGaWVsZCxcbiAgICByZWNvcnRlRmllbGRcbiAgKVxufVxuXG4vKiogUmVzb2x2ZSBjb2x1bmEgZG8gcmVjb3J0ZSBwZWRpZG8g4oCUIG51bmNhIHN1YnN0aXR1aSBwb3Igb3V0cmEgY29sdW5hIGRhIHRhYmVsYS4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlUmVjb3J0ZUtleUZyb21Sb3dzIChcbiAgcm93czogUmVjb3JkPHN0cmluZywgdW5rbm93bj5bXSxcbiAgcmVjb3J0ZUZpZWxkSmltdTogc3RyaW5nLFxuICBmaWVsZHM/OiBJTUZpZWxkU2NoZW1hW10sXG4gIHllYXJGaWVsZEppbXU/OiBzdHJpbmdcbik6IHN0cmluZyB8IG51bGwge1xuICBjb25zdCBoaW50ID0gcmVjb3J0ZUZpZWxkSmltdT8udHJpbSgpXG4gIGlmICghaGludCkgcmV0dXJuIG51bGxcblxuICBjb25zdCBmcm9tUm93cyA9IGRldGVjdFJlY29ydGVLZXlGcm9tUm93cyhyb3dzLCBoaW50KVxuICBpZiAoZnJvbVJvd3MpIHJldHVybiBmcm9tUm93c1xuXG4gIGlmIChmaWVsZHM/Lmxlbmd0aCkge1xuICAgIGNvbnN0IGZpZWxkID0gZmluZEZpZWxkQnlKaW11TmFtZShmaWVsZHMsIGhpbnQpXG4gICAgaWYgKGZpZWxkKSB7XG4gICAgICBmb3IgKGNvbnN0IGNhbmRpZGF0ZSBvZiBbXG4gICAgICAgIGdldEF0dHJpYnV0ZUtleShmaWVsZCksXG4gICAgICAgIGZpZWxkLm5hbWUsXG4gICAgICAgIGZpZWxkLmppbXVOYW1lLFxuICAgICAgICBmaWVsZC5hbGlhc1xuICAgICAgXSkge1xuICAgICAgICBpZiAoIWNhbmRpZGF0ZSkgY29udGludWVcbiAgICAgICAgY29uc3QgbWF0Y2ggPSBkZXRlY3RSZWNvcnRlS2V5RnJvbVJvd3Mocm93cywgY2FuZGlkYXRlKVxuICAgICAgICBpZiAobWF0Y2gpIHJldHVybiBtYXRjaFxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGtleXMgPSByZXNvbHZlQXR0cmlidXRlS2V5cyhmaWVsZHMsIHllYXJGaWVsZEppbXUsIGhpbnQpXG4gICAgaWYgKGtleXM/LnJlY29ydGVLZXkpIHtcbiAgICAgIGNvbnN0IG1hdGNoID0gZGV0ZWN0UmVjb3J0ZUtleUZyb21Sb3dzKHJvd3MsIGtleXMucmVjb3J0ZUtleSlcbiAgICAgIGlmIChtYXRjaCkgcmV0dXJuIG1hdGNoXG4gICAgICBjb25zdCBzYW1wbGUgPSByb3dzWzBdXG4gICAgICBpZiAoc2FtcGxlICYmIGtleXMucmVjb3J0ZUtleSBpbiBzYW1wbGUpIHJldHVybiBrZXlzLnJlY29ydGVLZXlcbiAgICB9XG4gIH1cblxuICBjb25zdCBzYW1wbGUgPSByb3dzWzBdXG4gIGlmIChzYW1wbGUgJiYgaGludCBpbiBzYW1wbGUpIHJldHVybiBoaW50XG5cbiAgcmV0dXJuIGhpbnRcbn1cblxuLyoqIFJlc3VtbyBkYXMgY29sdW5hcyBkZXRlY3RhZGFzIChhanVkYSBkaWFnbsOzc3RpY28gbm8gRW50ZXJwcmlzZSkuICovXG5leHBvcnQgZnVuY3Rpb24gZGVzY3JpYmVSb3dzRm9yRXh0cmFjdEVycm9yIChcbiAgcm93czogUmVjb3JkPHN0cmluZywgdW5rbm93bj5bXSxcbiAgcmVjb3J0ZUhpbnQ6IHN0cmluZyxcbiAgZmllbGRzPzogSU1GaWVsZFNjaGVtYVtdXG4pOiBzdHJpbmcge1xuICBpZiAoIXJvd3MubGVuZ3RoKSByZXR1cm4gJydcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHJvd3NbMF0pLmZpbHRlcihcbiAgICAoaykgPT4gIS9eKG9iamVjdGlkfGdsb2JhbGlkfHNoYXBlfGZpZCkkL2kudGVzdChrKVxuICApXG4gIGNvbnN0IHllYXJLZXkgPSBkZXRlY3RZZWFyS2V5RnJvbVJvd3Mocm93cylcbiAgY29uc3QgcmVjb3J0ZUtleSA9IHJlc29sdmVSZWNvcnRlS2V5RnJvbVJvd3Mocm93cywgcmVjb3J0ZUhpbnQsIGZpZWxkcylcbiAgY29uc3QgcHJldmlldyA9IGtleXMuc2xpY2UoMCwgMTApLmpvaW4oJywgJylcbiAgY29uc3Qgc3VmZml4ID0ga2V5cy5sZW5ndGggPiAxMCA/ICfigKYnIDogJydcbiAgbGV0IG1zZyA9IGAgQ29sdW5hcyBuYSByZXNwb3N0YTogJHtwcmV2aWV3fSR7c3VmZml4fS5gXG4gIGlmICh5ZWFyS2V5KSBtc2cgKz0gYCBDb2x1bmEgZGUgYW5vOiBcIiR7eWVhcktleX1cIi5gXG4gIG1zZyArPSBgIFJlY29ydGUgY29uZmlndXJhZG86IFwiJHtyZWNvcnRlSGludD8udHJpbSgpID8/ICcnfVwiLmBcbiAgaWYgKHJlY29ydGVLZXkpIG1zZyArPSBgIENvbHVuYSBkbyByZWNvcnRlOiBcIiR7cmVjb3J0ZUtleX1cIi5gXG4gIHJldHVybiBtc2dcbn1cblxuZnVuY3Rpb24gYnVpbGRTZXJpZXNGcm9tS2V5cyAoXG4gIHJvd3M6IFJlY29yZDxzdHJpbmcsIHVua25vd24+W10sXG4gIHllYXJLZXk6IHN0cmluZyxcbiAgcmVjb3J0ZUtleTogc3RyaW5nLFxuICB5ZWFyRmllbGQ/OiBJTUZpZWxkU2NoZW1hIHwgbnVsbCxcbiAgcmVjb3J0ZUZpZWxkPzogSU1GaWVsZFNjaGVtYSB8IG51bGxcbik6IFllYXJWYWx1ZVJvd1tdIHtcbiAgY29uc3Qgc2VyaWVzOiBZZWFyVmFsdWVSb3dbXSA9IFtdXG4gIGZvciAoY29uc3Qgcm93IG9mIHJvd3MpIHtcbiAgICBjb25zdCB5ZWFyID0gcGFyc2VZZWFyKFxuICAgICAgcmVhZEF0dHJpYnV0ZUZsZXhpYmxlKHJvdywgeWVhckZpZWxkID8/IG51bGwsIHllYXJLZXkpXG4gICAgKVxuICAgIGNvbnN0IHZhbHVlID0gcGFyc2VOdW1lcmljVmFsdWUoXG4gICAgICByZWFkQXR0cmlidXRlRmxleGlibGUocm93LCByZWNvcnRlRmllbGQgPz8gbnVsbCwgcmVjb3J0ZUtleSlcbiAgICApXG4gICAgaWYgKHllYXIgPT0gbnVsbCB8fCB2YWx1ZSA9PSBudWxsKSBjb250aW51ZVxuICAgIHNlcmllcy5wdXNoKHsgeWVhciwgdmFsdWUgfSlcbiAgfVxuICByZXR1cm4gc2VyaWVzLnNvcnQoKGEsIGIpID0+IGEueWVhciAtIGIueWVhcilcbn1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hSYXdBdHRyaWJ1dGVSb3dzRnJvbUxheWVyIChcbiAgZHM6IFF1ZXJpYWJsZUxheWVyXG4pOiBQcm9taXNlPFJlY29yZDxzdHJpbmcsIHVua25vd24+W10+IHtcbiAgY29uc3QgbGF5ZXIgPSBkcy5sYXllciBhcyB7XG4gICAgbG9hZD86ICgpID0+IFByb21pc2U8dm9pZD5cbiAgICBsb2FkZWQ/OiBib29sZWFuXG4gICAgbG9hZFN0YXR1cz86IHN0cmluZ1xuICAgIHF1ZXJ5RmVhdHVyZXM/OiAocDogb2JqZWN0KSA9PiBQcm9taXNlPHtcbiAgICAgIGZlYXR1cmVzPzogQXJyYXk8eyBhdHRyaWJ1dGVzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfT5cbiAgICB9PlxuICB9XG4gIGlmICghbGF5ZXI/LnF1ZXJ5RmVhdHVyZXMpIHJldHVybiBbXVxuXG4gIHRyeSB7XG4gICAgaWYgKFxuICAgICAgdHlwZW9mIGxheWVyLmxvYWQgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgIGxheWVyLmxvYWRTdGF0dXMgIT09ICdsb2FkZWQnICYmXG4gICAgICAhbGF5ZXIubG9hZGVkXG4gICAgKSB7XG4gICAgICBhd2FpdCBsYXllci5sb2FkKClcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbGF5ZXIucXVlcnlGZWF0dXJlcyh7XG4gICAgICB3aGVyZTogJzE9MScsXG4gICAgICBvdXRGaWVsZHM6IFsnKiddLFxuICAgICAgcmV0dXJuR2VvbWV0cnk6IGZhbHNlXG4gICAgfSlcbiAgICByZXR1cm4gKHJlc3VsdC5mZWF0dXJlcyA/PyBbXSlcbiAgICAgIC5tYXAoKGYpID0+ICh7IC4uLihmLmF0dHJpYnV0ZXMgPz8ge30pIH0pKVxuICAgICAgLmZpbHRlcigoYSkgPT4gT2JqZWN0LmtleXMoYSkubGVuZ3RoID4gMClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF0dHJpYnV0ZVJvd3NTY29yZSAoXG4gIHJvd3M6IFJlY29yZDxzdHJpbmcsIHVua25vd24+W11cbik6IG51bWJlciB7XG4gIGlmICghcm93cy5sZW5ndGgpIHJldHVybiAwXG4gIGNvbnN0IHNhbXBsZSA9IHJvd3NbMF1cbiAgcmV0dXJuIE9iamVjdC5rZXlzKHNhbXBsZSkuZmlsdGVyKFxuICAgIChrKSA9PiAhL14ob2JqZWN0aWR8Z2xvYmFsaWR8c2hhcGV8ZmlkKSQvaS50ZXN0KGspXG4gICkubGVuZ3RoXG59XG5cbi8qKlxuICogQ2FycmVnYSBsaW5oYXMgZGEgdGFiZWxhIFBST0RFUyBwcmlvcml6YW5kbyBhdHJpYnV0b3MgYnJ1dG9zIGRhIGNhbWFkYVxuICogKG1lc21hIGZvbnRlIGRhIHRhYmVsYSBkbyBQb3J0YWwpLlxuICovXG5mdW5jdGlvbiByZWNvcmRzVG9BdHRyaWJ1dGVSb3dzIChyZWNvcmRzOiBEYXRhUmVjb3JkW10pOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPltdIHtcbiAgcmV0dXJuIHJlY29yZHNcbiAgICAubWFwKChyKSA9PiBnZXRQbGFpbkF0dHJpYnV0ZXMocikpXG4gICAgLmZpbHRlcigoYSkgPT4gT2JqZWN0LmtleXMoYSkubGVuZ3RoID4gMClcbn1cblxuLyoqIFJlw7puZSByZWdpc3Ryb3MgSmltdSAoY2FjaGUgZG8gbWFwYSArIHF1ZXJ5KSwgZGVkdXBsaWNhZG9zIHBvciBpZC4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb2xsZWN0UHJvZGVzUmVjb3JkcyAoXG4gIGRhdGFTb3VyY2U6IHVua25vd24sXG4gIG9wdGlvbnM/OiBGZXRjaExheWVyUmVjb3Jkc09wdGlvbnMgJiB7IHdpZGdldElkPzogc3RyaW5nIH1cbik6IFByb21pc2U8RGF0YVJlY29yZFtdPiB7XG4gIGNvbnN0IGRzID0gZGF0YVNvdXJjZSBhcyBRdWVyaWFibGVMYXllclxuICBjb25zdCBzZWVuID0gbmV3IFNldDxzdHJpbmc+KClcbiAgY29uc3Qgb3V0OiBEYXRhUmVjb3JkW10gPSBbXVxuXG4gIGNvbnN0IGFkZCA9IChyZWNzOiBEYXRhUmVjb3JkW10pID0+IHtcbiAgICBmb3IgKGNvbnN0IHJlYyBvZiByZWNzKSB7XG4gICAgICBjb25zdCBpZCA9IHJlYy5nZXRJZD8uKClcbiAgICAgIGNvbnN0IGtleSA9IGlkICE9IG51bGwgPyBTdHJpbmcoaWQpIDogYGlkeC0ke291dC5sZW5ndGh9YFxuICAgICAgaWYgKHNlZW4uaGFzKGtleSkpIGNvbnRpbnVlXG4gICAgICBzZWVuLmFkZChrZXkpXG4gICAgICBvdXQucHVzaChyZWMpXG4gICAgfVxuICB9XG5cbiAgYWRkKGRzLmdldEFsbExvYWRlZFJlY29yZHM/LigpID8/IFtdKVxuICBhZGQoZHMuZ2V0UmVjb3Jkcz8uKCkgPz8gW10pXG4gIGFkZChhd2FpdCBmZXRjaExheWVyUmVjb3JkcyhkYXRhU291cmNlLCB7IC4uLm9wdGlvbnMsIGZvcmNlUXVlcnk6IHRydWUgfSkpXG5cbiAgcmV0dXJuIG91dFxufVxuXG4vKipcbiAqIE5vIEVudGVycHJpc2UgYSBSRVNUIHRyYXogbm9tZXMgZGUgY29sdW5hcywgbWFzIHZhbG9yZXMgdmF6aW9zOyBnZXRGaWVsZFZhbHVlIG5vc1xuICogRGF0YVJlY29yZHMgSmltdSB0cmF6IG9zIG7Dum1lcm9zIGZvcm1hdGFkb3MuIE1lc2NsYSBvcyBkb2lzIHBvciBPQkpFQ1RJRCBvdSBhbm8uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbnJpY2hBdHRyaWJ1dGVSb3dzV2l0aFJlY29yZHMgKFxuICByb3dzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPltdLFxuICByZWNvcmRzOiBEYXRhUmVjb3JkW10sXG4gIHllYXJGaWVsZEppbXU6IHN0cmluZyxcbiAgcmVjb3J0ZUZpZWxkSmltdTogc3RyaW5nLFxuICBmaWVsZHM/OiBJTUZpZWxkU2NoZW1hW11cbik6IFJlY29yZDxzdHJpbmcsIHVua25vd24+W10ge1xuICBpZiAoIXJvd3MubGVuZ3RoIHx8ICFyZWNvcmRzLmxlbmd0aCkgcmV0dXJuIHJvd3NcblxuICBjb25zdCB5ZWFyRmllbGQgPSBmaWVsZHM/Lmxlbmd0aFxuICAgID8gZmluZEZpZWxkQnlKaW11TmFtZShmaWVsZHMsIHllYXJGaWVsZEppbXUpXG4gICAgOiBudWxsXG4gIGNvbnN0IHJlY29ydGVGaWVsZCA9IGZpZWxkcz8ubGVuZ3RoXG4gICAgPyBmaW5kRmllbGRCeUppbXVOYW1lKGZpZWxkcywgcmVjb3J0ZUZpZWxkSmltdSlcbiAgICA6IG51bGxcbiAgY29uc3QgeWVhcktleSA9XG4gICAgZGV0ZWN0WWVhcktleUZyb21Sb3dzKHJvd3MsIHllYXJGaWVsZEppbXUpID8/IHllYXJGaWVsZEppbXVcbiAgY29uc3QgcmVjb3J0ZUtleSA9XG4gICAgcmVzb2x2ZVJlY29ydGVLZXlGcm9tUm93cyhyb3dzLCByZWNvcnRlRmllbGRKaW11LCBmaWVsZHMsIHllYXJGaWVsZEppbXUpID8/XG4gICAgcmVjb3J0ZUZpZWxkSmltdVxuXG4gIGNvbnN0IGJ5T2lkID0gbmV3IE1hcDxzdHJpbmcsIERhdGFSZWNvcmQ+KClcbiAgY29uc3QgYnlZZWFyID0gbmV3IE1hcDxudW1iZXIsIERhdGFSZWNvcmQ+KClcbiAgZm9yIChjb25zdCByZWMgb2YgcmVjb3Jkcykge1xuICAgIGNvbnN0IGlkID0gcmVjLmdldElkPy4oKVxuICAgIGlmIChpZCAhPSBudWxsKSBieU9pZC5zZXQoU3RyaW5nKGlkKSwgcmVjKVxuICAgIGNvbnN0IHkgPSBwYXJzZVllYXIocmVhZFJlY29yZFZhbHVlKHJlYywgeWVhckZpZWxkLCB5ZWFyRmllbGRKaW11KSlcbiAgICBpZiAoeSAhPSBudWxsKSBieVllYXIuc2V0KHksIHJlYylcbiAgfVxuXG4gIHJldHVybiByb3dzLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IG9pZCA9XG4gICAgICByb3cuT0JKRUNUSUQgPz8gcm93Lm9iamVjdGlkID8/IHJvdy5PYmplY3RJZCA/PyByb3cuRklEID8/IHJvdy5maWRcbiAgICBsZXQgcmVjOiBEYXRhUmVjb3JkIHwgdW5kZWZpbmVkXG4gICAgaWYgKG9pZCAhPSBudWxsKSByZWMgPSBieU9pZC5nZXQoU3RyaW5nKG9pZCkpXG4gICAgaWYgKCFyZWMpIHtcbiAgICAgIGNvbnN0IHkgPSBwYXJzZVllYXIocmVhZEF0dHJpYnV0ZUZsZXhpYmxlKHJvdywgeWVhckZpZWxkLCB5ZWFyS2V5KSlcbiAgICAgIGlmICh5ICE9IG51bGwpIHJlYyA9IGJ5WWVhci5nZXQoeSlcbiAgICB9XG4gICAgaWYgKCFyZWMgJiYgaW5kZXggPCByZWNvcmRzLmxlbmd0aCkgcmVjID0gcmVjb3Jkc1tpbmRleF1cbiAgICBpZiAoIXJlYykgcmV0dXJuIHJvd1xuXG4gICAgY29uc3QgZW5yaWNoZWQgPSB7IC4uLnJvdyB9XG4gICAgY29uc3QgeWVhclZhbCA9IHJlYWRSZWNvcmRWYWx1ZShyZWMsIHllYXJGaWVsZCwgeWVhckZpZWxkSmltdSlcbiAgICBpZiAoeWVhclZhbCAhPT0gdW5kZWZpbmVkICYmIHBhcnNlWWVhcihlbnJpY2hlZFt5ZWFyS2V5XSkgPT0gbnVsbCkge1xuICAgICAgZW5yaWNoZWRbeWVhcktleV0gPSB5ZWFyVmFsXG4gICAgfVxuICAgIGNvbnN0IHJlY29ydGVWYWwgPSByZWFkUmVjb3JkVmFsdWUocmVjLCByZWNvcnRlRmllbGQsIHJlY29ydGVGaWVsZEppbXUpXG4gICAgaWYgKHJlY29ydGVWYWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZW5yaWNoZWRbcmVjb3J0ZUtleV0gPSByZWNvcnRlVmFsXG4gICAgfVxuICAgIHJldHVybiBlbnJpY2hlZFxuICB9KVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRQcm9kZXNZZWFyU2VyaWVzUmVzdWx0IHtcbiAgc2VyaWVzOiBZZWFyVmFsdWVSb3dbXVxuICByZWNvcmRzOiBEYXRhUmVjb3JkW11cbiAgcm93czogUmVjb3JkPHN0cmluZywgdW5rbm93bj5bXVxufVxuXG5jb25zdCBMT0FEX1NFUklFU19SRVRSWV9NUyA9IFswLCA2MDAsIDE1MDAsIDM1MDAsIDYwMDBdXG5cbi8qKiBDYXJyZWdhIHPDqXJpZSBhbm/Dl3ZhbG9yIHBhcmEgbyByZWNvcnRlIHBlZGlkbyAoRW50ZXJwcmlzZSArIGxvY2FsKS4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkUHJvZGVzWWVhclNlcmllcyAoXG4gIGRhdGFTb3VyY2U6IHVua25vd24sXG4gIG9wdGlvbnM6IEZldGNoTGF5ZXJSZWNvcmRzT3B0aW9ucyAmIHsgd2lkZ2V0SWQ/OiBzdHJpbmcgfVxuKTogUHJvbWlzZTxMb2FkUHJvZGVzWWVhclNlcmllc1Jlc3VsdD4ge1xuICBjb25zdCB7IHllYXJGaWVsZEppbXUsIHJlY29ydGVGaWVsZEppbXUsIGZpZWxkcyB9ID0gb3B0aW9uc1xuICBsZXQgbGFzdFJlY29yZHM6IERhdGFSZWNvcmRbXSA9IFtdXG4gIGxldCBsYXN0Um93czogUmVjb3JkPHN0cmluZywgdW5rbm93bj5bXSA9IFtdXG5cbiAgaWYgKCF5ZWFyRmllbGRKaW11IHx8ICFyZWNvcnRlRmllbGRKaW11KSB7XG4gICAgcmV0dXJuIHsgc2VyaWVzOiBbXSwgcmVjb3JkczogW10sIHJvd3M6IFtdIH1cbiAgfVxuXG4gIGZvciAoY29uc3QgZGVsYXkgb2YgTE9BRF9TRVJJRVNfUkVUUllfTVMpIHtcbiAgICBpZiAoZGVsYXkgPiAwKSB7XG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBkZWxheSkpXG4gICAgfVxuXG4gICAgbGFzdFJlY29yZHMgPSBhd2FpdCBjb2xsZWN0UHJvZGVzUmVjb3JkcyhkYXRhU291cmNlLCBvcHRpb25zKVxuICAgIGxldCBzZXJpZXMgPSBidWlsZFllYXJTZXJpZXNGcm9tUmVjb3JkcyhcbiAgICAgIGxhc3RSZWNvcmRzLFxuICAgICAgeWVhckZpZWxkSmltdSxcbiAgICAgIHJlY29ydGVGaWVsZEppbXUsXG4gICAgICBmaWVsZHNcbiAgICApXG4gICAgaWYgKHNlcmllcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzZXJpZXMsXG4gICAgICAgIHJlY29yZHM6IGxhc3RSZWNvcmRzLFxuICAgICAgICByb3dzOiByZWNvcmRzVG9BdHRyaWJ1dGVSb3dzKGxhc3RSZWNvcmRzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RSb3dzID0gYXdhaXQgZmV0Y2hQcm9kZXNBdHRyaWJ1dGVSb3dzKGRhdGFTb3VyY2UsIHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBmb3JjZVF1ZXJ5OiB0cnVlXG4gICAgfSlcbiAgICBjb25zdCBlbnJpY2hlZCA9IGVucmljaEF0dHJpYnV0ZVJvd3NXaXRoUmVjb3JkcyhcbiAgICAgIGxhc3RSb3dzLFxuICAgICAgbGFzdFJlY29yZHMsXG4gICAgICB5ZWFyRmllbGRKaW11LFxuICAgICAgcmVjb3J0ZUZpZWxkSmltdSxcbiAgICAgIGZpZWxkc1xuICAgIClcbiAgICBzZXJpZXMgPSBidWlsZFllYXJTZXJpZXNGcm9tQXR0cmlidXRlUm93cyhcbiAgICAgIGVucmljaGVkLFxuICAgICAgeWVhckZpZWxkSmltdSxcbiAgICAgIHJlY29ydGVGaWVsZEppbXUsXG4gICAgICBmaWVsZHNcbiAgICApXG4gICAgaWYgKHNlcmllcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4geyBzZXJpZXMsIHJlY29yZHM6IGxhc3RSZWNvcmRzLCByb3dzOiBlbnJpY2hlZCB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgc2VyaWVzOiBbXSwgcmVjb3JkczogbGFzdFJlY29yZHMsIHJvd3M6IGxhc3RSb3dzIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoUHJvZGVzQXR0cmlidXRlUm93cyAoXG4gIGRhdGFTb3VyY2U6IHVua25vd24sXG4gIG9wdGlvbnM/OiBGZXRjaExheWVyUmVjb3Jkc09wdGlvbnNcbik6IFByb21pc2U8UmVjb3JkPHN0cmluZywgdW5rbm93bj5bXT4ge1xuICBjb25zdCBkcyA9IGRhdGFTb3VyY2UgYXMgUXVlcmlhYmxlTGF5ZXIgJiB7IHVybD86IHN0cmluZyB9XG4gIGNvbnN0IGNhbmRpZGF0ZXM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+W11bXSA9IFtdXG5cbiAgY29uc3QgcG9ydGFsUm93cyA9IGF3YWl0IGZldGNoVmlhUG9ydGFsUmVzdChkcylcbiAgaWYgKHBvcnRhbFJvd3MubGVuZ3RoKSBjYW5kaWRhdGVzLnB1c2gocG9ydGFsUm93cylcblxuICBjYW5kaWRhdGVzLnB1c2goYXdhaXQgZmV0Y2hSYXdBdHRyaWJ1dGVSb3dzRnJvbUxheWVyKGRzKSlcblxuICBjb25zdCByZXN0Um93cyA9IGF3YWl0IGZldGNoVmlhQXJjZ2lzUmVzdChkcylcbiAgaWYgKHJlc3RSb3dzLmxlbmd0aCkgY2FuZGlkYXRlcy5wdXNoKHJlc3RSb3dzKVxuXG4gIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBmZXRjaExheWVyUmVjb3JkcyhkYXRhU291cmNlLCBvcHRpb25zKVxuICBpZiAocmVjb3Jkcy5sZW5ndGgpIHtcbiAgICBjYW5kaWRhdGVzLnB1c2gocmVjb3Jkc1RvQXR0cmlidXRlUm93cyhyZWNvcmRzKSlcbiAgfVxuXG4gIGNvbnN0IGxvYWRlZCA9IGRzLmdldFJlY29yZHM/LigpID8/IGRzLmdldEFsbExvYWRlZFJlY29yZHM/LigpID8/IFtdXG4gIGlmIChsb2FkZWQubGVuZ3RoKSB7XG4gICAgY2FuZGlkYXRlcy5wdXNoKHJlY29yZHNUb0F0dHJpYnV0ZVJvd3MobG9hZGVkKSlcbiAgfVxuXG4gIGlmIChvcHRpb25zPy55ZWFyRmllbGRKaW11ICYmIG9wdGlvbnM/LnJlY29ydGVGaWVsZEppbXUpIHtcbiAgICBjb25zdCBvcmRlcmVkID0gW1xuICAgICAgLi4uY2FuZGlkYXRlcy5maWx0ZXIoKGMpID0+IGMubGVuZ3RoICYmIGF0dHJpYnV0ZVJvd3NTY29yZShjKSA+IDEpXG4gICAgXS5zb3J0KChhLCBiKSA9PiBzY29yZVJvd3NGb3JSZWNvcnRlKGIsIG9wdGlvbnMucmVjb3J0ZUZpZWxkSmltdSkgLSBzY29yZVJvd3NGb3JSZWNvcnRlKGEsIG9wdGlvbnMucmVjb3J0ZUZpZWxkSmltdSkpXG5cbiAgICBmb3IgKGNvbnN0IHJvd3Mgb2Ygb3JkZXJlZCkge1xuICAgICAgY29uc3Qgc2VyaWVzID0gYnVpbGRZZWFyU2VyaWVzRnJvbUF0dHJpYnV0ZVJvd3MoXG4gICAgICAgIHJvd3MsXG4gICAgICAgIG9wdGlvbnMueWVhckZpZWxkSmltdSxcbiAgICAgICAgb3B0aW9ucy5yZWNvcnRlRmllbGRKaW11LFxuICAgICAgICBvcHRpb25zLmZpZWxkc1xuICAgICAgKVxuICAgICAgaWYgKHNlcmllcy5sZW5ndGggPiAwKSByZXR1cm4gcm93c1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHdpdGhEYXRhID0gY2FuZGlkYXRlcy5maWx0ZXIoXG4gICAgKGMpID0+IGMubGVuZ3RoICYmIGF0dHJpYnV0ZVJvd3NTY29yZShjKSA+IDFcbiAgKVxuICBpZiAoIXdpdGhEYXRhLmxlbmd0aCkge1xuICAgIHJldHVybiBjYW5kaWRhdGVzLmZpbmQoKGMpID0+IGMubGVuZ3RoKSA/PyBbXVxuICB9XG5cbiAgY29uc3QgcmVjb3J0ZUhpbnQgPSBvcHRpb25zPy5yZWNvcnRlRmllbGRKaW11ID8/ICcnXG4gIHJldHVybiB3aXRoRGF0YS5zb3J0KFxuICAgIChhLCBiKSA9PiBzY29yZVJvd3NGb3JSZWNvcnRlKGIsIHJlY29ydGVIaW50KSAtIHNjb3JlUm93c0ZvclJlY29ydGUoYSwgcmVjb3J0ZUhpbnQpXG4gIClbMF1cbn1cblxuLyoqIFF1YW50b3MgdmFsb3JlcyBudW3DqXJpY29zIHByZWVuY2hpZG9zIGV4aXN0ZW0gbmEgY29sdW5hIGRvIHJlY29ydGUuICovXG5mdW5jdGlvbiBzY29yZVJvd3NGb3JSZWNvcnRlIChcbiAgcm93czogUmVjb3JkPHN0cmluZywgdW5rbm93bj5bXSxcbiAgcmVjb3J0ZUZpZWxkSmltdTogc3RyaW5nXG4pOiBudW1iZXIge1xuICBjb25zdCBrZXkgPSBkZXRlY3RSZWNvcnRlS2V5RnJvbVJvd3Mocm93cywgcmVjb3J0ZUZpZWxkSmltdSkgPz8gcmVjb3J0ZUZpZWxkSmltdVxuICBsZXQgc2NvcmUgPSAwXG4gIGZvciAoY29uc3Qgcm93IG9mIHJvd3MpIHtcbiAgICBpZiAocGFyc2VOdW1lcmljVmFsdWUocm93W2tleV0pICE9IG51bGwpIHNjb3JlKytcbiAgfVxuICByZXR1cm4gc2NvcmVcbn1cblxuY29uc3QgUkVUUllfREVMQVlTX01TID0gWzAsIDQwMCwgODAwLCAxMjAwLCAyMDAwLCAzMDAwLCA0NTAwXVxuXG4vKipcbiAqIFRlbnRhIHbDoXJpYXMgdmV6ZXMgYXTDqSBvYnRlciBsaW5oYXMgY29tIGNvbHVuYXMgZGUgZGFkb3MgKG7Do28gc8OzIE9CSkVDVElEKS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZvcmNlTG9hZFByb2Rlc1Jvd3MgKFxuICBkYXRhU291cmNlOiB1bmtub3duLFxuICBvcHRpb25zOiBGZXRjaExheWVyUmVjb3Jkc09wdGlvbnMgJiB7IHdpZGdldElkPzogc3RyaW5nIH1cbik6IFByb21pc2U8UmVjb3JkPHN0cmluZywgdW5rbm93bj5bXT4ge1xuICBmb3IgKGNvbnN0IGRlbGF5IG9mIFJFVFJZX0RFTEFZU19NUykge1xuICAgIGlmIChkZWxheSA+IDApIHtcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIGRlbGF5KSlcbiAgICB9XG5cbiAgICBjb25zdCByb3dzID0gYXdhaXQgZmV0Y2hQcm9kZXNBdHRyaWJ1dGVSb3dzKGRhdGFTb3VyY2UsIHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBmb3JjZVF1ZXJ5OiB0cnVlXG4gICAgfSlcblxuICAgIGlmICghb3B0aW9ucy55ZWFyRmllbGRKaW11IHx8ICFvcHRpb25zLnJlY29ydGVGaWVsZEppbXUpIHtcbiAgICAgIGlmIChhdHRyaWJ1dGVSb3dzU2NvcmUocm93cykgPiAxKSByZXR1cm4gcm93c1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBjb25zdCByZWNvcmRzID0gYXdhaXQgY29sbGVjdFByb2Rlc1JlY29yZHMoZGF0YVNvdXJjZSwgb3B0aW9ucylcbiAgICBjb25zdCBlbnJpY2hlZCA9IGVucmljaEF0dHJpYnV0ZVJvd3NXaXRoUmVjb3JkcyhcbiAgICAgIHJvd3MsXG4gICAgICByZWNvcmRzLFxuICAgICAgb3B0aW9ucy55ZWFyRmllbGRKaW11LFxuICAgICAgb3B0aW9ucy5yZWNvcnRlRmllbGRKaW11LFxuICAgICAgb3B0aW9ucy5maWVsZHNcbiAgICApXG5cbiAgICBjb25zdCBzZXJpZXMgPSBidWlsZFllYXJTZXJpZXNGcm9tQXR0cmlidXRlUm93cyhcbiAgICAgIGVucmljaGVkLFxuICAgICAgb3B0aW9ucy55ZWFyRmllbGRKaW11LFxuICAgICAgb3B0aW9ucy5yZWNvcnRlRmllbGRKaW11LFxuICAgICAgb3B0aW9ucy5maWVsZHNcbiAgICApXG4gICAgaWYgKHNlcmllcy5sZW5ndGggPiAwKSByZXR1cm4gZW5yaWNoZWRcbiAgfVxuXG4gIHJldHVybiBmZXRjaFByb2Rlc0F0dHJpYnV0ZVJvd3MoZGF0YVNvdXJjZSwgeyAuLi5vcHRpb25zLCBmb3JjZVF1ZXJ5OiB0cnVlIH0pXG59XG5cbi8qKiBDYXJyZWdhIHRvZG9zIG9zIHJlZ2lzdHJvcyBkYSBjYW1hZGEgKHRhYmVsYSBhbm8gw5cgcmVjb3J0ZXMpLiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoTGF5ZXJSZWNvcmRzIChcbiAgZGF0YVNvdXJjZTogdW5rbm93bixcbiAgb3B0aW9ucz86IEZldGNoTGF5ZXJSZWNvcmRzT3B0aW9uc1xuKTogUHJvbWlzZTxEYXRhUmVjb3JkW10+IHtcbiAgY29uc3QgZHMgPSBkYXRhU291cmNlIGFzIFF1ZXJpYWJsZUxheWVyXG4gIGNvbnN0IGNhY2hlZCA9IGRzLmdldEFsbExvYWRlZFJlY29yZHM/LigpID8/IGRzLmdldFJlY29yZHM/LigpID8/IFtdXG4gIGNvbnN0IG91dEZpZWxkcyA9IHJlc29sdmVPdXRGaWVsZHMoXG4gICAgb3B0aW9ucz8ueWVhckZpZWxkSmltdSxcbiAgICBvcHRpb25zPy5yZWNvcnRlRmllbGRKaW11LFxuICAgIG9wdGlvbnM/LmZpZWxkc1xuICApXG5cbiAgaWYgKCFvcHRpb25zPy5mb3JjZVF1ZXJ5ICYmIHJlY29yZHNBcmVSZWFkYWJsZShjYWNoZWQpKSB7XG4gICAgcmV0dXJuIGNhY2hlZFxuICB9XG5cbiAgY29uc3QgcXVlcmllZCA9IGF3YWl0IHF1ZXJ5QWxsUmVjb3Jkcyhkcywgb3V0RmllbGRzLCBvcHRpb25zPy53aWRnZXRJZClcbiAgaWYgKHJlY29yZHNBcmVSZWFkYWJsZShxdWVyaWVkKSkgcmV0dXJuIHF1ZXJpZWRcbiAgaWYgKHF1ZXJpZWQubGVuZ3RoKSByZXR1cm4gcXVlcmllZFxuXG4gIGlmICghb3B0aW9ucz8uZm9yY2VRdWVyeSkgcmV0dXJuIGNhY2hlZFxuICByZXR1cm4gcXVlcmllZC5sZW5ndGggPyBxdWVyaWVkIDogY2FjaGVkXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVJlY29ydGVUb2tlbiAodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiB2YWx1ZVxuICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgLm5vcm1hbGl6ZSgnTkZEJylcbiAgICAucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZywgJycpXG4gICAgLnJlcGxhY2UoL1tcXHMtXSsvZywgJ18nKVxufVxuXG5mdW5jdGlvbiBpc1llYXJOYW1lZEZpZWxkIChmaWVsZDogSU1GaWVsZFNjaGVtYSk6IGJvb2xlYW4ge1xuICBjb25zdCB5ID1cbiAgICBwYXJzZVllYXIoZmllbGQuamltdU5hbWUpID8/XG4gICAgcGFyc2VZZWFyKGZpZWxkLm5hbWUpID8/XG4gICAgcGFyc2VZZWFyKGZpZWxkLmFsaWFzKVxuICByZXR1cm4geSAhPSBudWxsICYmIHkgPj0gMTk4NSAmJiB5IDw9IDIwMzVcbn1cblxuZnVuY3Rpb24gZmluZFJlY29ydGVOYW1lRmllbGQgKGZpZWxkczogSU1GaWVsZFNjaGVtYVtdKTogSU1GaWVsZFNjaGVtYSB8IG51bGwge1xuICBjb25zdCBwYXR0ZXJucyA9IFsncmVjb3J0ZScsICdyZWdpYW8nLCAncmVnacOjbycsICdiaW9tYScsICdub21lJywgJ25hbWUnLCAnbGFiZWwnXVxuICByZXR1cm4gKFxuICAgIGZpZWxkcy5maW5kKChmKSA9PiB7XG4gICAgICBjb25zdCBqID0gZi5qaW11TmFtZT8udG9Mb3dlckNhc2UoKSA/PyAnJ1xuICAgICAgY29uc3QgbiA9IGYubmFtZT8udG9Mb3dlckNhc2UoKSA/PyAnJ1xuICAgICAgcmV0dXJuIHBhdHRlcm5zLnNvbWUoKHApID0+IGouaW5jbHVkZXMocCkgfHwgbi5pbmNsdWRlcyhwKSlcbiAgICB9KSA/PyBudWxsXG4gIClcbn1cblxuLyoqIExheW91dCBhbHRlcm5hdGl2bzogY2FkYSByZWdpc3RybyA9IHJlY29ydGU7IGNvbHVuYXMgbnVtw6lyaWNhcyA9IGFub3MuICovXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRZZWFyU2VyaWVzRnJvbVJlY29ydGVSb3dzIChcbiAgcmVjb3JkczogUmVjb3JkTGlrZVtdLFxuICByZWNvcnRlRmllbGRKaW11OiBzdHJpbmcsXG4gIGZpZWxkczogSU1GaWVsZFNjaGVtYVtdXG4pOiBZZWFyVmFsdWVSb3dbXSB7XG4gIGNvbnN0IHllYXJGaWVsZHMgPSBmaWVsZHMuZmlsdGVyKGlzWWVhck5hbWVkRmllbGQpXG4gIGlmICgheWVhckZpZWxkcy5sZW5ndGgpIHJldHVybiBbXVxuXG4gIGNvbnN0IHRhcmdldCA9IG5vcm1hbGl6ZVJlY29ydGVUb2tlbihyZWNvcnRlRmllbGRKaW11KVxuICBjb25zdCBuYW1lRmllbGQgPSBmaW5kUmVjb3J0ZU5hbWVGaWVsZChmaWVsZHMpXG5cbiAgY29uc3Qgcm93ID1cbiAgICByZWNvcmRzLmZpbmQoKHJlYykgPT4ge1xuICAgICAgaWYgKG5hbWVGaWVsZCkge1xuICAgICAgICBjb25zdCBsYWJlbCA9IHJlYWRSZWNvcmRWYWx1ZShyZWMsIG5hbWVGaWVsZCwgbmFtZUZpZWxkLmppbXVOYW1lKVxuICAgICAgICBpZiAobGFiZWwgIT0gbnVsbCAmJiBub3JtYWxpemVSZWNvcnRlVG9rZW4oU3RyaW5nKGxhYmVsKSkgPT09IHRhcmdldCkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgZiBvZiBmaWVsZHMpIHtcbiAgICAgICAgaWYgKGlzWWVhck5hbWVkRmllbGQoZikgfHwgZi5qaW11TmFtZSA9PT0gcmVjb3J0ZUZpZWxkSmltdSkgY29udGludWVcbiAgICAgICAgY29uc3QgdiA9IHJlYWRSZWNvcmRWYWx1ZShyZWMsIGYsIGYuamltdU5hbWUpXG4gICAgICAgIGlmICh2ICE9IG51bGwgJiYgbm9ybWFsaXplUmVjb3J0ZVRva2VuKFN0cmluZyh2KSkgPT09IHRhcmdldCkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pID8/IG51bGxcblxuICBpZiAoIXJvdykgcmV0dXJuIFtdXG5cbiAgY29uc3Qgc2VyaWVzOiBZZWFyVmFsdWVSb3dbXSA9IFtdXG4gIGZvciAoY29uc3QgeWYgb2YgeWVhckZpZWxkcykge1xuICAgIGNvbnN0IHllYXIgPVxuICAgICAgcGFyc2VZZWFyKHlmLmppbXVOYW1lKSA/PyBwYXJzZVllYXIoeWYubmFtZSkgPz8gcGFyc2VZZWFyKHlmLmFsaWFzKVxuICAgIGNvbnN0IHZhbHVlID0gcGFyc2VOdW1lcmljVmFsdWUocmVhZFJlY29yZFZhbHVlKHJvdywgeWYsIHlmLmppbXVOYW1lKSlcbiAgICBpZiAoeWVhciA9PSBudWxsIHx8IHZhbHVlID09IG51bGwpIGNvbnRpbnVlXG4gICAgc2VyaWVzLnB1c2goeyB5ZWFyLCB2YWx1ZSB9KVxuICB9XG5cbiAgcmV0dXJuIHNlcmllcy5zb3J0KChhLCBiKSA9PiBhLnllYXIgLSBiLnllYXIpXG59XG5cbmZ1bmN0aW9uIGJ1aWxkWWVhclNlcmllc1llYXJSb3dzIChcbiAgcmVjb3JkczogUmVjb3JkTGlrZVtdLFxuICB5ZWFyRmllbGRKaW11OiBzdHJpbmcsXG4gIHJlY29ydGVGaWVsZEppbXU6IHN0cmluZyxcbiAgZmllbGRzPzogSU1GaWVsZFNjaGVtYVtdXG4pOiBZZWFyVmFsdWVSb3dbXSB7XG4gIGNvbnN0IHllYXJGaWVsZCA9IGZpZWxkcz8ubGVuZ3RoXG4gICAgPyBmaW5kRmllbGRCeUppbXVOYW1lKGZpZWxkcywgeWVhckZpZWxkSmltdSlcbiAgICA6IG51bGxcbiAgY29uc3QgcmVjb3J0ZUZpZWxkID0gZmllbGRzPy5sZW5ndGhcbiAgICA/IGZpbmRGaWVsZEJ5SmltdU5hbWUoZmllbGRzLCByZWNvcnRlRmllbGRKaW11KVxuICAgIDogbnVsbFxuICBjb25zdCBzZXJpZXM6IFllYXJWYWx1ZVJvd1tdID0gW11cblxuICBmb3IgKGNvbnN0IHJlYyBvZiByZWNvcmRzKSB7XG4gICAgY29uc3QgeWVhciA9IHBhcnNlWWVhcihcbiAgICAgIHJlYWRSZWNvcmRWYWx1ZShyZWMsIHllYXJGaWVsZCwgeWVhckZpZWxkSmltdSlcbiAgICApXG4gICAgY29uc3QgdmFsdWUgPSBwYXJzZU51bWVyaWNWYWx1ZShcbiAgICAgIHJlYWRSZWNvcmRWYWx1ZShyZWMsIHJlY29ydGVGaWVsZCwgcmVjb3J0ZUZpZWxkSmltdSlcbiAgICApXG4gICAgaWYgKHllYXIgPT0gbnVsbCB8fCB2YWx1ZSA9PSBudWxsKSBjb250aW51ZVxuXG4gICAgc2VyaWVzLnB1c2goeyB5ZWFyLCB2YWx1ZSB9KVxuICB9XG5cbiAgcmV0dXJuIHNlcmllcy5zb3J0KChhLCBiKSA9PiBhLnllYXIgLSBiLnllYXIpXG59XG5cbmZ1bmN0aW9uIGNvbGxlY3RSZWNvcmRBdHRyaWJ1dGVLZXlzIChyZWNvcmRzOiBSZWNvcmRMaWtlW10pOiBzdHJpbmdbXSB7XG4gIGNvbnN0IGtleXMgPSBuZXcgU2V0PHN0cmluZz4oKVxuICBmb3IgKGNvbnN0IHJlYyBvZiByZWNvcmRzLnNsaWNlKDAsIDEwMCkpIHtcbiAgICBPYmplY3Qua2V5cyhnZXRQbGFpbkF0dHJpYnV0ZXMocmVjKSkuZm9yRWFjaCgoaykgPT4ga2V5cy5hZGQoaykpXG4gIH1cbiAgcmV0dXJuIFsuLi5rZXlzXVxufVxuXG5mdW5jdGlvbiByZXNvbHZlS2V5c0Zyb21BdHRyaWJ1dGVOYW1lcyAoXG4gIGtleXM6IHN0cmluZ1tdLFxuICB5ZWFyRmllbGRKaW11OiBzdHJpbmcsXG4gIHJlY29ydGVGaWVsZEppbXU6IHN0cmluZ1xuKTogeyB5ZWFyS2V5OiBzdHJpbmc7IHJlY29ydGVLZXk6IHN0cmluZyB9IHwgbnVsbCB7XG4gIGNvbnN0IHJlY29ydGVLZXkgPSBrZXlzLmZpbmQoXG4gICAgKGspID0+XG4gICAgICBrLnRvTG93ZXJDYXNlKCkgPT09IHJlY29ydGVGaWVsZEppbXUudG9Mb3dlckNhc2UoKSB8fFxuICAgICAgbm9ybWFsaXplUmVjb3J0ZVRva2VuKGspID09PSBub3JtYWxpemVSZWNvcnRlVG9rZW4ocmVjb3J0ZUZpZWxkSmltdSlcbiAgKVxuICBsZXQgeWVhcktleSA9IGtleXMuZmluZCgoaykgPT4gay50b0xvd2VyQ2FzZSgpID09PSB5ZWFyRmllbGRKaW11LnRvTG93ZXJDYXNlKCkpXG4gIGlmICgheWVhcktleSkge1xuICAgIHllYXJLZXkgPSBrZXlzLmZpbmQoKGspID0+XG4gICAgICBZRUFSX05BTUVfUEFUVEVSTlMuc29tZShcbiAgICAgICAgKHApID0+IGsudG9Mb3dlckNhc2UoKSA9PT0gcCB8fCBrLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocClcbiAgICAgIClcbiAgICApXG4gIH1cbiAgaWYgKCF5ZWFyS2V5IHx8ICFyZWNvcnRlS2V5KSByZXR1cm4gbnVsbFxuICByZXR1cm4geyB5ZWFyS2V5LCByZWNvcnRlS2V5IH1cbn1cblxuLyoqIMOabHRpbW8gcmVjdXJzbzogaW5mZXJlIGNvbHVuYXMgcGVsb3Mgbm9tZXMgcmVhaXMgbm9zIGF0cmlidXRvcyByZXRvcm5hZG9zLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkWWVhclNlcmllc0luZmVycmVkIChcbiAgcmVjb3JkczogUmVjb3JkTGlrZVtdLFxuICB5ZWFyRmllbGRKaW11OiBzdHJpbmcsXG4gIHJlY29ydGVGaWVsZEppbXU6IHN0cmluZ1xuKTogWWVhclZhbHVlUm93W10ge1xuICBjb25zdCBrZXlzID0gY29sbGVjdFJlY29yZEF0dHJpYnV0ZUtleXMocmVjb3JkcylcbiAgY29uc3QgcmVzb2x2ZWQgPSByZXNvbHZlS2V5c0Zyb21BdHRyaWJ1dGVOYW1lcyhrZXlzLCB5ZWFyRmllbGRKaW11LCByZWNvcnRlRmllbGRKaW11KVxuICBpZiAoIXJlc29sdmVkKSByZXR1cm4gW11cblxuICBjb25zdCBzZXJpZXM6IFllYXJWYWx1ZVJvd1tdID0gW11cbiAgZm9yIChjb25zdCByZWMgb2YgcmVjb3Jkcykge1xuICAgIGNvbnN0IGF0dHJzID0gZ2V0UGxhaW5BdHRyaWJ1dGVzKHJlYylcbiAgICBjb25zdCB5ZWFyID0gcGFyc2VZZWFyKGF0dHJzW3Jlc29sdmVkLnllYXJLZXldKVxuICAgIGNvbnN0IHZhbHVlID0gcGFyc2VOdW1lcmljVmFsdWUoYXR0cnNbcmVzb2x2ZWQucmVjb3J0ZUtleV0pXG4gICAgaWYgKHllYXIgPT0gbnVsbCB8fCB2YWx1ZSA9PSBudWxsKSBjb250aW51ZVxuICAgIHNlcmllcy5wdXNoKHsgeWVhciwgdmFsdWUgfSlcbiAgfVxuICByZXR1cm4gc2VyaWVzLnNvcnQoKGEsIGIpID0+IGEueWVhciAtIGIueWVhcilcbn1cblxuLyoqIFPDqXJpZSBhIHBhcnRpciBkZSBEYXRhUmVjb3JkcyAoZ2V0RmllbGRWYWx1ZSAvIGdldERhdGFCZWZvcmVNYXBwaW5nKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFllYXJTZXJpZXNGcm9tUmVjb3JkcyAoXG4gIHJlY29yZHM6IERhdGFSZWNvcmRbXSxcbiAgeWVhckZpZWxkSmltdTogc3RyaW5nLFxuICByZWNvcnRlRmllbGRKaW11OiBzdHJpbmcsXG4gIGZpZWxkcz86IElNRmllbGRTY2hlbWFbXVxuKTogWWVhclZhbHVlUm93W10ge1xuICByZXR1cm4gYnVpbGRZZWFyU2VyaWVzKFxuICAgIHJlY29yZHMgYXMgUmVjb3JkTGlrZVtdLFxuICAgIHllYXJGaWVsZEppbXUsXG4gICAgcmVjb3J0ZUZpZWxkSmltdSxcbiAgICBmaWVsZHNcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRZZWFyU2VyaWVzIChcbiAgcmVjb3JkczogUmVjb3JkTGlrZVtdLFxuICB5ZWFyRmllbGRKaW11OiBzdHJpbmcsXG4gIHJlY29ydGVGaWVsZEppbXU6IHN0cmluZyxcbiAgZmllbGRzPzogSU1GaWVsZFNjaGVtYVtdXG4pOiBZZWFyVmFsdWVSb3dbXSB7XG4gIGNvbnN0IHllYXJSb3dzID0gYnVpbGRZZWFyU2VyaWVzWWVhclJvd3MoXG4gICAgcmVjb3JkcyxcbiAgICB5ZWFyRmllbGRKaW11LFxuICAgIHJlY29ydGVGaWVsZEppbXUsXG4gICAgZmllbGRzXG4gIClcbiAgaWYgKHllYXJSb3dzLmxlbmd0aCA+IDApIHJldHVybiB5ZWFyUm93c1xuXG4gIGlmIChmaWVsZHM/Lmxlbmd0aCkge1xuICAgIGNvbnN0IGFsdCA9IGJ1aWxkWWVhclNlcmllc0Zyb21SZWNvcnRlUm93cyhyZWNvcmRzLCByZWNvcnRlRmllbGRKaW11LCBmaWVsZHMpXG4gICAgaWYgKGFsdC5sZW5ndGggPiAwKSByZXR1cm4gYWx0XG4gIH1cblxuICByZXR1cm4gYnVpbGRZZWFyU2VyaWVzSW5mZXJyZWQocmVjb3JkcywgeWVhckZpZWxkSmltdSwgcmVjb3J0ZUZpZWxkSmltdSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFllYXJzUmFuZ2VTdW1tYXJ5IChzZXJpZXM6IFllYXJWYWx1ZVJvd1tdKTogc3RyaW5nIHwgbnVsbCB7XG4gIGlmICghc2VyaWVzLmxlbmd0aCkgcmV0dXJuIG51bGxcbiAgY29uc3QgbWluID0gc2VyaWVzWzBdLnllYXJcbiAgY29uc3QgbWF4ID0gc2VyaWVzW3Nlcmllcy5sZW5ndGggLSAxXS55ZWFyXG4gIGNvbnN0IGNvdW50ID0gc2VyaWVzLmxlbmd0aFxuICBpZiAobWluID09PSBtYXgpIHJldHVybiBgJHttaW59ICgke2NvdW50fSBhbm8pYFxuICByZXR1cm4gYCR7bWlufeKAkyR7bWF4fSAoJHtjb3VudH0gYW5vcylgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1llYXJPdXRPZlR5cGljYWxSYW5nZSAoeWVhcjogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiB5ZWFyIDwgMjAwMSB8fCB5ZWFyID4gMjAyNVxufVxuXG4vKiogVmFyaWHDp8OjbyBwZXJjZW50dWFsIGRvIHZhbG9yIGluaWNpYWwgKGFubyBtYWlzIGFudGlnbykgcGFyYSBvIGZpbmFsIChhbm8gbWFpcyByZWNlbnRlKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYWxjUGVyY2VudFZhcmlhdGlvbiAoXG4gIHZhbHVlSW5pY2lhbDogbnVtYmVyLFxuICB2YWx1ZUZpbmFsOiBudW1iZXJcbik6IG51bWJlciB8IG51bGwge1xuICBpZiAoIU51bWJlci5pc0Zpbml0ZSh2YWx1ZUluaWNpYWwpIHx8ICFOdW1iZXIuaXNGaW5pdGUodmFsdWVGaW5hbCkpIHJldHVybiBudWxsXG4gIGlmICh2YWx1ZUluaWNpYWwgPT09IDApIHJldHVybiBudWxsXG4gIHJldHVybiAoKHZhbHVlRmluYWwgLSB2YWx1ZUluaWNpYWwpIC8gdmFsdWVJbmljaWFsKSAqIDEwMFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UGVyY2VudFZhcmlhdGlvbiAocGN0OiBudW1iZXIpOiBzdHJpbmcge1xuICBjb25zdCBzaWduID0gcGN0ID4gMCA/ICcrJyA6ICcnXG4gIHJldHVybiBgJHtzaWdufSR7cGN0LnRvTG9jYWxlU3RyaW5nKCdwdC1CUicsIHtcbiAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyXG4gIH0pfSVgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZUZvclllYXIgKFxuICBzZXJpZXM6IFllYXJWYWx1ZVJvd1tdLFxuICB5ZWFyOiBudW1iZXJcbik6IG51bWJlciB8IG51bGwge1xuICBjb25zdCByb3cgPSBzZXJpZXMuZmluZCgocikgPT4gci55ZWFyID09PSB5ZWFyKVxuICByZXR1cm4gcm93ICE9IG51bGwgPyByb3cudmFsdWUgOiBudWxsXG59XG5cbi8qKiBTb21hIG9zIHZhbG9yZXMgZG9zIGFub3MgaW5mb3JtYWRvczsgcmV0b3JuYSBudWxsIHNlIGFsZ3VtIGFubyBuw6NvIHRpdmVyIGRhZG8uICovXG5leHBvcnQgZnVuY3Rpb24gc3VtVmFsdWVzRm9yWWVhcnMgKFxuICBzZXJpZXM6IFllYXJWYWx1ZVJvd1tdLFxuICB5ZWFyczogbnVtYmVyW11cbik6IG51bWJlciB8IG51bGwge1xuICBpZiAoIXllYXJzLmxlbmd0aCkgcmV0dXJuIG51bGxcbiAgbGV0IHN1bSA9IDBcbiAgZm9yIChjb25zdCB5ZWFyIG9mIHllYXJzKSB7XG4gICAgY29uc3QgdmFsdWUgPSBnZXRWYWx1ZUZvclllYXIoc2VyaWVzLCB5ZWFyKVxuICAgIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIHN1bSArPSB2YWx1ZVxuICB9XG4gIHJldHVybiBzdW1cbn1cblxuLyoqIEFub3MgZGlzcG9uw612ZWlzIHBhcmEgbyBwZXLDrW9kbyBpbmljaWFsIChhbnRlcyBkbyBwZXLDrW9kbyBmaW5hbCwgc2UgaG91dmVyKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRZZWFyc0FsbG93ZWRGb3JJbmljaWFsIChcbiAgYWxsWWVhcnM6IG51bWJlcltdLFxuICBwZXJpb2RvRmluYWw6IG51bWJlcltdXG4pOiBudW1iZXJbXSB7XG4gIGNvbnN0IGJsb2NrZWQgPSBuZXcgU2V0KHBlcmlvZG9GaW5hbClcbiAgY29uc3QgbWF4RmluYWwgPSBwZXJpb2RvRmluYWwubGVuZ3RoID8gTWF0aC5taW4oLi4ucGVyaW9kb0ZpbmFsKSA6IEluZmluaXR5XG4gIHJldHVybiBhbGxZZWFycy5maWx0ZXIoKHkpID0+ICFibG9ja2VkLmhhcyh5KSAmJiB5IDwgbWF4RmluYWwpXG59XG5cbi8qKiBBbm9zIGRpc3BvbsOtdmVpcyBwYXJhIG8gcGVyw61vZG8gZmluYWwgKGRlcG9pcyBkbyBwZXLDrW9kbyBpbmljaWFsLCBzZSBob3V2ZXIpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFllYXJzQWxsb3dlZEZvckZpbmFsIChcbiAgYWxsWWVhcnM6IG51bWJlcltdLFxuICBwZXJpb2RvSW5pY2lhbDogbnVtYmVyW11cbik6IG51bWJlcltdIHtcbiAgY29uc3QgYmxvY2tlZCA9IG5ldyBTZXQocGVyaW9kb0luaWNpYWwpXG4gIGNvbnN0IG1pbkluaWNpYWwgPSBwZXJpb2RvSW5pY2lhbC5sZW5ndGggPyBNYXRoLm1heCguLi5wZXJpb2RvSW5pY2lhbCkgOiAtSW5maW5pdHlcbiAgcmV0dXJuIGFsbFllYXJzLmZpbHRlcigoeSkgPT4gIWJsb2NrZWQuaGFzKHkpICYmIHkgPiBtaW5JbmljaWFsKVxufVxuXG4vKiogTWFyY2EvZGVzbWFyY2EgdW0gYW5vIG1hbnRlbmRvIGFwZW5hcyBzZXF1w6puY2lhcyBjb25zZWN1dGl2YXMuICovXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlQ29uc2VjdXRpdmVZZWFyIChcbiAgcGVyaW9kOiBudW1iZXJbXSxcbiAgeWVhcjogbnVtYmVyXG4pOiB7IG5leHQ6IG51bWJlcltdOyByZWplY3RlZDogYm9vbGVhbiB9IHtcbiAgaWYgKHBlcmlvZC5pbmNsdWRlcyh5ZWFyKSkge1xuICAgIHJldHVybiB7IG5leHQ6IHBlcmlvZC5maWx0ZXIoKHkpID0+IHkgIT09IHllYXIpLCByZWplY3RlZDogZmFsc2UgfVxuICB9XG4gIGNvbnN0IG5leHQgPSBbLi4ucGVyaW9kLCB5ZWFyXS5zb3J0KChhLCBiKSA9PiBhIC0gYilcbiAgaWYgKCFhcmVDb25zZWN1dGl2ZVllYXJzKG5leHQpKSB7XG4gICAgcmV0dXJuIHsgbmV4dDogcGVyaW9kLCByZWplY3RlZDogdHJ1ZSB9XG4gIH1cbiAgcmV0dXJuIHsgbmV4dCwgcmVqZWN0ZWQ6IGZhbHNlIH1cbn1cblxuLyoqIFZlcmlmaWNhIHNlIG9zIGFub3MgZm9ybWFtIHVtYSBzZXF1w6puY2lhIGNvbnNlY3V0aXZhIChleC46IDIwMTAsIDIwMTEsIDIwMTIpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFyZUNvbnNlY3V0aXZlWWVhcnMgKHllYXJzOiBudW1iZXJbXSk6IGJvb2xlYW4ge1xuICBpZiAoeWVhcnMubGVuZ3RoIDw9IDEpIHJldHVybiB0cnVlXG4gIGNvbnN0IHNvcnRlZCA9IFsuLi55ZWFyc10uc29ydCgoYSwgYikgPT4gYSAtIGIpXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgc29ydGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHNvcnRlZFtpXSAtIHNvcnRlZFtpIC0gMV0gIT09IDEpIHJldHVybiBmYWxzZVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cbi8qKiBSw7N0dWxvIGNvbXBhY3RvIHBhcmEgdW0gb3UgbWFpcyBhbm9zIChleC46IFwiMjAxMFwiIG91IFwiMjAxMOKAkzIwMTIgKDMgYW5vcylcIikuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UGVyaW9kTGFiZWwgKHllYXJzOiBudW1iZXJbXSk6IHN0cmluZyB7XG4gIGNvbnN0IHNvcnRlZCA9IFsuLi55ZWFyc10uc29ydCgoYSwgYikgPT4gYSAtIGIpXG4gIGlmICghc29ydGVkLmxlbmd0aCkgcmV0dXJuICcnXG4gIGlmIChzb3J0ZWQubGVuZ3RoID09PSAxKSByZXR1cm4gU3RyaW5nKHNvcnRlZFswXSlcbiAgcmV0dXJuIGAke3NvcnRlZFswXX3igJMke3NvcnRlZFtzb3J0ZWQubGVuZ3RoIC0gMV19ICgke3NvcnRlZC5sZW5ndGh9IGFub3MpYFxufVxuXG4vKiogSW50ZXJ2YWxvIGRlIGFub3Mgc2VtIGNvbnRhZ2VtIChleC46IFwiMjAxMFwiIG91IFwiMjAxMOKAkzIwMTJcIikg4oCUIHVzbyBlbSByZXN1bHRhZG9zLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFBlcmlvZFJhbmdlTGFiZWwgKHllYXJzOiBudW1iZXJbXSk6IHN0cmluZyB7XG4gIGNvbnN0IHNvcnRlZCA9IFsuLi55ZWFyc10uc29ydCgoYSwgYikgPT4gYSAtIGIpXG4gIGlmICghc29ydGVkLmxlbmd0aCkgcmV0dXJuICcnXG4gIGlmIChzb3J0ZWQubGVuZ3RoID09PSAxKSByZXR1cm4gU3RyaW5nKHNvcnRlZFswXSlcbiAgcmV0dXJuIGAke3NvcnRlZFswXX3igJMke3NvcnRlZFtzb3J0ZWQubGVuZ3RoIC0gMV19YFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFZhcmlhdGlvblJlc3VsdCB7XG4gIHBjdDogbnVtYmVyXG4gIHZhbHVlSW5pY2lhbDogbnVtYmVyXG4gIHZhbHVlRmluYWw6IG51bWJlclxuICB5ZWFyc0luaWNpYWw6IG51bWJlcltdXG4gIHllYXJzRmluYWw6IG51bWJlcltdXG59XG5cbmV4cG9ydCB0eXBlIFBlcmlvZFZhcmlhdGlvbk91dGNvbWUgPVxuICB8IHsgb2s6IHRydWU7IGRhdGE6IFZhcmlhdGlvblJlc3VsdCB9XG4gIHwgeyBvazogZmFsc2U7IG1lc3NhZ2U6IHN0cmluZyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlUGVyaW9kVmFyaWF0aW9uIChcbiAgc2VyaWVzOiBZZWFyVmFsdWVSb3dbXSxcbiAgcGVyaW9kb0luaWNpYWw6IG51bWJlcltdLFxuICBwZXJpb2RvRmluYWw6IG51bWJlcltdXG4pOiBQZXJpb2RWYXJpYXRpb25PdXRjb21lIHtcbiAgY29uc3QgaW5pID0gWy4uLnBlcmlvZG9JbmljaWFsXS5zb3J0KChhLCBiKSA9PiBhIC0gYilcbiAgY29uc3QgZmluID0gWy4uLnBlcmlvZG9GaW5hbF0uc29ydCgoYSwgYikgPT4gYSAtIGIpXG5cbiAgaWYgKCFpbmkubGVuZ3RoIHx8ICFmaW4ubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6ICdTZWxlY2lvbmUgcGVsbyBtZW5vcyB1bSBhbm8gZW0gY2FkYSBwZXLDrW9kby4nXG4gICAgfVxuICB9XG5cbiAgaWYgKGluaS5sZW5ndGggIT09IGZpbi5sZW5ndGgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTpcbiAgICAgICAgJ08gcGVyw61vZG8gaW5pY2lhbCBlIG8gcGVyw61vZG8gZmluYWwgZGV2ZW0gdGVyIGEgbWVzbWEgcXVhbnRpZGFkZSBkZSBhbm9zLidcbiAgICB9XG4gIH1cblxuICBpZiAoIWFyZUNvbnNlY3V0aXZlWWVhcnMoaW5pKSkge1xuICAgIHJldHVybiB7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBtZXNzYWdlOiAnT3MgYW5vcyBkbyBwZXLDrW9kbyBpbmljaWFsIGRldmVtIHNlciBjb25zZWN1dGl2b3MuJ1xuICAgIH1cbiAgfVxuXG4gIGlmICghYXJlQ29uc2VjdXRpdmVZZWFycyhmaW4pKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6ICdPcyBhbm9zIGRvIHBlcsOtb2RvIGZpbmFsIGRldmVtIHNlciBjb25zZWN1dGl2b3MuJ1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGluaVNldCA9IG5ldyBTZXQoaW5pKVxuICBpZiAoZmluLnNvbWUoKHkpID0+IGluaVNldC5oYXMoeSkpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6ICdVbSBhbm8gbsOjbyBwb2RlIHBlcnRlbmNlciBhb3MgZG9pcyBwZXLDrW9kb3MgYW8gbWVzbW8gdGVtcG8uJ1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG1heEluaWNpYWwgPSBpbmlbaW5pLmxlbmd0aCAtIDFdXG4gIGNvbnN0IG1pbkZpbmFsID0gZmluWzBdXG4gIGlmIChtYXhJbmljaWFsID49IG1pbkZpbmFsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6ICdPIHBlcsOtb2RvIGZpbmFsIGRldmUgc2VyIHBvc3RlcmlvciBhbyBwZXLDrW9kbyBpbmljaWFsLidcbiAgICB9XG4gIH1cblxuICBjb25zdCB2YWx1ZUluaWNpYWwgPSBzdW1WYWx1ZXNGb3JZZWFycyhzZXJpZXMsIGluaSlcbiAgY29uc3QgdmFsdWVGaW5hbCA9IHN1bVZhbHVlc0ZvclllYXJzKHNlcmllcywgZmluKVxuXG4gIGlmICh2YWx1ZUluaWNpYWwgPT0gbnVsbCB8fCB2YWx1ZUZpbmFsID09IG51bGwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTpcbiAgICAgICAgJ1VtIG91IG1haXMgYW5vcyBzZWxlY2lvbmFkb3MgbsOjbyBwb3NzdWVtIGRhZG8gcGFyYSBlc3RlIHJlY29ydGUuJ1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHBjdCA9IGNhbGNQZXJjZW50VmFyaWF0aW9uKHZhbHVlSW5pY2lhbCwgdmFsdWVGaW5hbClcbiAgaWYgKHBjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6XG4gICAgICAgICdBIHNvbWEgZG8gcGVyw61vZG8gaW5pY2lhbCDDqSB6ZXJvOyBuw6NvIMOpIHBvc3PDrXZlbCBjYWxjdWxhciBhIHZhcmlhw6fDo28gcGVyY2VudHVhbC4nXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBvazogdHJ1ZSxcbiAgICBkYXRhOiB7XG4gICAgICBwY3QsXG4gICAgICB2YWx1ZUluaWNpYWwsXG4gICAgICB2YWx1ZUZpbmFsLFxuICAgICAgeWVhcnNJbmljaWFsOiBpbmksXG4gICAgICB5ZWFyc0ZpbmFsOiBmaW5cbiAgICB9XG4gIH1cbn1cblxuLyoqIENvbXBhcmHDp8OjbyBlbnRyZSBkb2lzIGFub3Mgw7puaWNvcyAoYXRhbGhvIHBhcmEgcGVyw61vZG9zIGRlIHVtIGFubykuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZVZhcmlhdGlvbiAoXG4gIHNlcmllczogWWVhclZhbHVlUm93W10sXG4gIGFub0luaWNpYWw6IG51bWJlcixcbiAgYW5vRmluYWw6IG51bWJlclxuKTogUGVyaW9kVmFyaWF0aW9uT3V0Y29tZSB7XG4gIHJldHVybiBjb21wdXRlUGVyaW9kVmFyaWF0aW9uKHNlcmllcywgW2Fub0luaWNpYWxdLCBbYW5vRmluYWxdKVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7XHJcbiAgUmVhY3QsXHJcbiAganN4LFxyXG4gIHR5cGUgQWxsV2lkZ2V0UHJvcHMsXHJcbiAgRGF0YVNvdXJjZUNvbXBvbmVudCxcclxuICBRdWVyeVNjb3BlXHJcbn0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBMb2FkaW5nLCBMYWJlbCwgQnV0dG9uIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHR5cGUgeyBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcclxuaW1wb3J0IHtcclxuICBMQUJFTF9QRVJJT0RPX0ZJTkFMLFxyXG4gIExBQkVMX1BFUklPRE9fSU5JQ0lBTCxcclxuICBISU5UX1BFUklPRF9SVUxFUyxcclxuICBNU0dfTk9UX0NPTkZJR1VSRUQsXHJcbiAgTVNHX05PX0RBVEEsXHJcbiAgUExBQ0VIT0xERVJfUEVSSU9ET19GSU5BTCxcclxuICBQTEFDRUhPTERFUl9QRVJJT0RPX0lOSUNJQUwsXHJcbiAgUFJPREVTX1RBQkxFX1FVRVJZXHJcbn0gZnJvbSAnLi4vY29uc3RhbnRzJ1xyXG5pbXBvcnQgeyBWYXJpYXRpb25SZXN1bHRQYW5lbCB9IGZyb20gJy4vY29tcG9uZW50cy92YXJpYXRpb24tcmVzdWx0J1xyXG5pbXBvcnQgeyB1c2VQcm9kZXNTZXJpZXMgfSBmcm9tICcuL2hvb2tzL3VzZS1wcm9kZXMtc2VyaWVzJ1xyXG5pbXBvcnQgeyB1c2VQZXJpb2RTZWxlY3Rpb24gfSBmcm9tICcuL2hvb2tzL3VzZS1wZXJpb2Qtc2VsZWN0aW9uJ1xyXG5pbXBvcnQgeyB3aWRnZXRTdHlsZXMgfSBmcm9tICcuL3N0eWxlcydcclxuaW1wb3J0IHsgWWVhclBlcmlvZFBpY2tlciB9IGZyb20gJy4veWVhci1wZXJpb2QtcGlja2VyJ1xyXG5cclxuY29uc3QgV2lkZ2V0ID0gKHByb3BzOiBBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4pID0+IHtcclxuICBjb25zdCB1c2VEcyA9IHByb3BzLnVzZURhdGFTb3VyY2VzPy5bMF1cclxuICBjb25zdCB5ZWFyRmllbGQgPSBwcm9wcy5jb25maWc/LnllYXJGaWVsZFxyXG4gIGNvbnN0IHJlY29ydGVGaWVsZCA9IHByb3BzLmNvbmZpZz8ucmVjb3J0ZUZpZWxkXHJcblxyXG4gIGNvbnN0IHtcclxuICAgIHNlcmllcyxcclxuICAgIGxvYWRpbmcsXHJcbiAgICBsb2FkaW5nTWVzc2FnZSxcclxuICAgIGVycm9yLFxyXG4gICAgaGFuZGxlRGF0YVNvdXJjZVJlYWR5LFxyXG4gICAgaGFuZGxlRGF0YVNvdXJjZUluZm9DaGFuZ2UsXHJcbiAgICBhcHBseVNjaGVtYSxcclxuICAgIHdhaXRpbmdGb3JMYXllclxyXG4gIH0gPSB1c2VQcm9kZXNTZXJpZXMoeyByZWNvcnRlRmllbGQsIHllYXJGaWVsZCwgd2lkZ2V0SWQ6IHByb3BzLmlkIH0pXHJcblxyXG4gIGNvbnN0IGF2YWlsYWJsZVllYXJzID0gUmVhY3QudXNlTWVtbyhcclxuICAgICgpID0+IHNlcmllcy5tYXAoKHIpID0+IHIueWVhciksXHJcbiAgICBbc2VyaWVzXVxyXG4gIClcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgcGVyaW9kb0luaWNpYWwsXHJcbiAgICBwZXJpb2RvRmluYWwsXHJcbiAgICB5ZWFyc0ZvckluaWNpYWwsXHJcbiAgICB5ZWFyc0ZvckZpbmFsLFxyXG4gICAgaGludEluaWNpYWwsXHJcbiAgICBoaW50RmluYWwsXHJcbiAgICB2YXJpYXRpb24sXHJcbiAgICBoYXNQZXJpb2RTZWxlY3Rpb24sXHJcbiAgICBjbGVhclBlcmlvZFNlbGVjdGlvbixcclxuICAgIGhhbmRsZVBlcmlvZG9JbmljaWFsQ2hhbmdlLFxyXG4gICAgaGFuZGxlUGVyaW9kb0ZpbmFsQ2hhbmdlLFxyXG4gICAgcmVqZWN0UGVyaW9kb0luaWNpYWwsXHJcbiAgICByZWplY3RQZXJpb2RvRmluYWxcclxuICB9ID0gdXNlUGVyaW9kU2VsZWN0aW9uKHNlcmllcywgYXZhaWxhYmxlWWVhcnMsIHJlY29ydGVGaWVsZClcclxuXHJcbiAgY29uc3QgaXNDb25maWd1cmVkID0gQm9vbGVhbih1c2VEcyAmJiByZWNvcnRlRmllbGQpXHJcbiAgY29uc3Qgc2hvd0Zvcm0gPVxyXG4gICAgaXNDb25maWd1cmVkICYmICFsb2FkaW5nICYmICF3YWl0aW5nRm9yTGF5ZXIgJiYgIWVycm9yICYmIHNlcmllcy5sZW5ndGggPiAwXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb21wYXJhZG9yLXByb2RlcyBqaW11LXdpZGdldFwiIGNzcz17d2lkZ2V0U3R5bGVzfT5cclxuICAgICAge3VzZURzICYmIChcclxuICAgICAgICA8RGF0YVNvdXJjZUNvbXBvbmVudFxyXG4gICAgICAgICAgdXNlRGF0YVNvdXJjZT17dXNlRHN9XHJcbiAgICAgICAgICB3aWRnZXRJZD17cHJvcHMuaWR9XHJcbiAgICAgICAgICBxdWVyeT17UFJPREVTX1RBQkxFX1FVRVJZfVxyXG4gICAgICAgICAgcXVlcnlTY29wZT17UXVlcnlTY29wZS5JbkFsbERhdGF9XHJcbiAgICAgICAgICBxdWVyeUFsbFxyXG4gICAgICAgICAgb25EYXRhU291cmNlQ3JlYXRlZD17aGFuZGxlRGF0YVNvdXJjZVJlYWR5fVxyXG4gICAgICAgICAgb25EYXRhU291cmNlU2NoZW1hQ2hhbmdlPXsoc2NoZW1hKSA9PiB7XHJcbiAgICAgICAgICAgIGFwcGx5U2NoZW1hKHNjaGVtYSlcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkRhdGFTb3VyY2VJbmZvQ2hhbmdlPXtoYW5kbGVEYXRhU291cmNlSW5mb0NoYW5nZX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgeyFpc0NvbmZpZ3VyZWQgJiYgPHA+e01TR19OT1RfQ09ORklHVVJFRH08L3A+fVxyXG5cclxuICAgICAge2lzQ29uZmlndXJlZCAmJiAobG9hZGluZyB8fCB3YWl0aW5nRm9yTGF5ZXIpICYmIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPExvYWRpbmcgLz5cclxuICAgICAgICAgIHtsb2FkaW5nTWVzc2FnZSAmJiAoXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbXBhcmFkb3ItaGludFwiPntsb2FkaW5nTWVzc2FnZX08L3A+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAge2lzQ29uZmlndXJlZCAmJiBlcnJvciAmJiA8cCBjbGFzc05hbWU9XCJjb21wYXJhZG9yLWVycm9yXCI+e2Vycm9yfTwvcD59XHJcblxyXG4gICAgICB7aXNDb25maWd1cmVkICYmXHJcbiAgICAgICAgIWxvYWRpbmcgJiZcclxuICAgICAgICAhd2FpdGluZ0ZvckxheWVyICYmXHJcbiAgICAgICAgIWVycm9yICYmXHJcbiAgICAgICAgc2VyaWVzLmxlbmd0aCA9PT0gMCAmJiA8cD57TVNHX05PX0RBVEF9PC9wPn1cclxuXHJcbiAgICAgIHtzaG93Rm9ybSAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYXJhZG9yLWZvcm1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFyYWRvci1maWVsZC1yb3dcIj5cclxuICAgICAgICAgICAgPExhYmVsPntMQUJFTF9QRVJJT0RPX0lOSUNJQUx9PC9MYWJlbD5cclxuICAgICAgICAgICAgPFllYXJQZXJpb2RQaWNrZXJcclxuICAgICAgICAgICAgICBhdmFpbGFibGVZZWFycz17eWVhcnNGb3JJbmljaWFsfVxyXG4gICAgICAgICAgICAgIHNlbGVjdGVkWWVhcnM9e3BlcmlvZG9JbmljaWFsfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtQTEFDRUhPTERFUl9QRVJJT0RPX0lOSUNJQUx9XHJcbiAgICAgICAgICAgICAgaGludD17aGludEluaWNpYWx9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVBlcmlvZG9JbmljaWFsQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIG9uUmVqZWN0ZWRTZWxlY3Rpb249e3JlamVjdFBlcmlvZG9JbmljaWFsfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYXJhZG9yLWZpZWxkLXJvd1wiPlxyXG4gICAgICAgICAgICA8TGFiZWw+e0xBQkVMX1BFUklPRE9fRklOQUx9PC9MYWJlbD5cclxuICAgICAgICAgICAgPFllYXJQZXJpb2RQaWNrZXJcclxuICAgICAgICAgICAgICBhdmFpbGFibGVZZWFycz17eWVhcnNGb3JGaW5hbH1cclxuICAgICAgICAgICAgICBzZWxlY3RlZFllYXJzPXtwZXJpb2RvRmluYWx9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1BMQUNFSE9MREVSX1BFUklPRE9fRklOQUx9XHJcbiAgICAgICAgICAgICAgaGludD17aGludEZpbmFsfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVQZXJpb2RvRmluYWxDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgb25SZWplY3RlZFNlbGVjdGlvbj17cmVqZWN0UGVyaW9kb0ZpbmFsfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhcmFkb3ItaGludFwiPntISU5UX1BFUklPRF9SVUxFU308L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFyYWRvci1hY3Rpb25zXCI+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbXBhcmFkb3ItYnRuLWxpbXBhclwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFoYXNQZXJpb2RTZWxlY3Rpb259XHJcbiAgICAgICAgICAgICAgb25DbGljaz17Y2xlYXJQZXJpb2RTZWxlY3Rpb259XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBMaW1wYXJcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7dmFyaWF0aW9uICE9IG51bGwgJiYgdmFyaWF0aW9uLm9rID09PSBmYWxzZSAmJiAoXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbXBhcmFkb3ItZXJyb3IgY29tcGFyYWRvci1lcnJvci0tYmxvY2tcIj5cclxuICAgICAgICAgICAgICB7dmFyaWF0aW9uLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAge3ZhcmlhdGlvbiAhPSBudWxsICYmIHZhcmlhdGlvbi5vayA9PT0gdHJ1ZSAmJiAoXHJcbiAgICAgICAgICAgIDxWYXJpYXRpb25SZXN1bHRQYW5lbCBkYXRhPXt2YXJpYXRpb24uZGF0YX0gLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdpZGdldFxyXG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9