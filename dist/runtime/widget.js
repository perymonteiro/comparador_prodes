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
            let built = (0,_utils_prodes_table__WEBPACK_IMPORTED_MODULE_1__.buildYearSeriesFromAttributeRows)(rows, effectiveYearField, recorteField, fieldList);
            if (built.length === 0 && fieldList.length > 0) {
                const records = yield (0,_utils_prodes_table__WEBPACK_IMPORTED_MODULE_1__.fetchLayerRecords)(main, Object.assign(Object.assign({}, fetchOpts), { forceQuery: true }));
                built = (0,_utils_prodes_table__WEBPACK_IMPORTED_MODULE_1__.buildYearSeriesFromRecords)(records, effectiveYearField, recorteField, fieldList);
            }
            setSeries(built);
            if (built.length === 0) {
                if (rows.length === 0) {
                    setError(_constants__WEBPACK_IMPORTED_MODULE_3__.MSG_LOAD_FAILED);
                }
                else if ((0,_utils_prodes_table__WEBPACK_IMPORTED_MODULE_1__.attributeRowsScore)(rows) <= 1) {
                    setError(_constants__WEBPACK_IMPORTED_MODULE_3__.MSG_LOAD_FAILED);
                }
                else {
                    setError(_constants__WEBPACK_IMPORTED_MODULE_3__.MSG_EXTRACT_FAILED + (0,_utils_prodes_table__WEBPACK_IMPORTED_MODULE_1__.describeRowsForExtractError)(rows, recorteField));
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
/* harmony export */   buildYearSeriesFromRecords: () => (/* binding */ buildYearSeriesFromRecords),
/* harmony export */   buildYearSeriesFromRecorteRows: () => (/* binding */ buildYearSeriesFromRecorteRows),
/* harmony export */   buildYearSeriesInferred: () => (/* binding */ buildYearSeriesInferred),
/* harmony export */   calcPercentVariation: () => (/* binding */ calcPercentVariation),
/* harmony export */   computePeriodVariation: () => (/* binding */ computePeriodVariation),
/* harmony export */   computeVariation: () => (/* binding */ computeVariation),
/* harmony export */   describeRowsForExtractError: () => (/* binding */ describeRowsForExtractError),
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
    const altRecorte = findBestRecorteKeyByNumericFill(rows, yearKey);
    if (altRecorte && altRecorte !== recorteKey) {
        series = buildSeriesFromKeys(rows, yearKey, altRecorte);
        if (series.length > 0)
            return series;
    }
    return series;
}
function findBestRecorteKeyByNumericFill(rows, yearKey) {
    const keys = new Set();
    for (const row of rows.slice(0, 50)) {
        Object.keys(row).forEach((k) => keys.add(k));
    }
    let best = null;
    for (const key of keys) {
        if (key.toLowerCase() === yearKey.toLowerCase())
            continue;
        if (/^(objectid|globalid|shape|fid)$/i.test(key))
            continue;
        let count = 0;
        for (const row of rows) {
            if (parseNumericValue(row[key]) != null)
                count++;
        }
        if (!best || count > best.count)
            best = { key, count };
    }
    return best && best.count > 0 ? best.key : null;
}
/** Resumo das colunas detectadas (ajuda diagnóstico no Enterprise). */
function describeRowsForExtractError(rows, recorteHint) {
    if (!rows.length)
        return '';
    const keys = Object.keys(rows[0]).filter((k) => !/^(objectid|globalid|shape|fid)$/i.test(k));
    const yearKey = detectYearKeyFromRows(rows);
    const recorteKey = detectRecorteKeyFromRows(rows, recorteHint);
    const preview = keys.slice(0, 10).join(', ');
    const suffix = keys.length > 10 ? '…' : '';
    let msg = ` Colunas na resposta: ${preview}${suffix}.`;
    if (yearKey)
        msg += ` Coluna de ano: "${yearKey}".`;
    if (recorteKey)
        msg += ` Coluna do recorte: "${recorteKey}".`;
    return msg;
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
            const series = buildYearSeriesFromAttributeRows(rows, options.yearFieldJimu, options.recorteFieldJimu, options.fields);
            if (series.length > 0)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFDO0FBRTlCLE1BQU0sU0FBUyxHQUFHLEtBQUs7QUFFOUIseUVBQXlFO0FBQ2xFLE1BQU0sa0JBQWtCLEdBQUcsb0RBQVMsQ0FBQztJQUMxQyxLQUFLLEVBQUUsS0FBSztJQUNaLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNoQixjQUFjLEVBQUUsS0FBSztJQUNyQixRQUFRLEVBQUUsSUFBSTtDQUNmLENBQUM7QUFFSyxNQUFNLHFCQUFxQixHQUFHLGdDQUFnQztBQUM5RCxNQUFNLG1CQUFtQixHQUFHLDRCQUE0QjtBQUV4RCxNQUFNLGtCQUFrQixHQUM3QixzRUFBc0U7QUFFakUsTUFBTSxXQUFXLEdBQUcsNkNBQTZDO0FBRWpFLE1BQU0sZUFBZSxHQUFHLCtDQUErQztBQUV2RSxNQUFNLGlCQUFpQixHQUFHLG9DQUFvQztBQUU5RCxNQUFNLGtCQUFrQixHQUM3Qix1RkFBdUY7SUFDdkYseUdBQXlHO0lBQ3pHLHNEQUFzRDtBQUVqRCxNQUFNLGdCQUFnQixHQUFHLDhDQUE4QztBQUV2RSxNQUFNLGlCQUFpQixHQUM1QiwrRkFBK0Y7QUFFMUYsTUFBTSwyQkFBMkIsR0FBRywwQ0FBMEM7QUFDOUUsTUFBTSx5QkFBeUIsR0FBRyx3Q0FBd0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ2pGLGVBQWU7QUFDdUI7QUFLTDtBQUNnQztBQU0xRCxNQUFNLG9CQUFvQixHQUFHLENBQUMsRUFBRSxJQUFJLEVBQXdCLEVBQUUsRUFBRTtJQUNyRSxNQUFNLElBQUksR0FBRywrREFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBRXZDLE9BQU8sQ0FDTCx3REFBSyxTQUFTLEVBQUMsbUJBQW1CO1FBQ2hDLHdEQUFLLFNBQVMsRUFBQyx5QkFBeUI7O1lBRXJDLDJFQUFz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TUFBTTtBQUViLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2NvbXBhcmFkb3JfcHJvZGVzL3NyYy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2NvbXBhcmFkb3JfcHJvZGVzL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvdmFyaWF0aW9uLXJlc3VsdC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2NvbXBhcmFkb3JfcHJvZGVzL3NyYy9ydW50aW1lL2hvb2tzL3VzZS1wZXJpb2Qtc2VsZWN0aW9uLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9zcmMvcnVudGltZS9ob29rcy91c2UtcHJvZGVzLXNlcmllcy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY29tcGFyYWRvcl9wcm9kZXMvc3JjL3J1bnRpbWUvc3R5bGVzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9zcmMvcnVudGltZS95ZWFyLXBlcmlvZC1waWNrZXIudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9zcmMvdXRpbHMvZGF0YS1zb3VyY2UudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2NvbXBhcmFkb3JfcHJvZGVzL3NyYy91dGlscy9mb3JtYXQudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2NvbXBhcmFkb3JfcHJvZGVzL3NyYy91dGlscy9wcm9kZXMtdGFibGUudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2NvbXBhcmFkb3JfcHJvZGVzL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW1tdXRhYmxlIH0gZnJvbSAnamltdS1jb3JlJ1xuXG5leHBvcnQgY29uc3QgQVJFQV9VTklUID0gJ2ttwrInXG5cbi8qKiBDb25zdWx0YSBwYWRyw6NvOiB0b2RvcyBvcyByZWdpc3Ryb3MgZGEgdGFiZWxhIFBST0RFUyAocGFkcsOjbyBFWEIpLiAqL1xuZXhwb3J0IGNvbnN0IFBST0RFU19UQUJMRV9RVUVSWSA9IEltbXV0YWJsZSh7XG4gIHdoZXJlOiAnMT0xJyxcbiAgb3V0RmllbGRzOiBbJyonXSxcbiAgcmV0dXJuR2VvbWV0cnk6IGZhbHNlLFxuICBwYWdlU2l6ZTogMjAwMFxufSlcblxuZXhwb3J0IGNvbnN0IExBQkVMX1BFUklPRE9fSU5JQ0lBTCA9ICdBbm8gaW5pY2lhbCBvdSBwZXLDrW9kbyBpbmljaWFsJ1xuZXhwb3J0IGNvbnN0IExBQkVMX1BFUklPRE9fRklOQUwgPSAnQW5vIGZpbmFsIG91IHBlcsOtb2RvIGZpbmFsJ1xuXG5leHBvcnQgY29uc3QgTVNHX05PVF9DT05GSUdVUkVEID1cbiAgJ0VzdGEgZmVycmFtZW50YSBhaW5kYSBuw6NvIGZvaSBjb25maWd1cmFkYSBwZWxvIGF1dG9yIGRhIGV4cGVyacOqbmNpYS4nXG5cbmV4cG9ydCBjb25zdCBNU0dfTk9fREFUQSA9ICdOw6NvIGjDoSBkYWRvcyBkaXNwb27DrXZlaXMgcGFyYSBlc3RlIHJlY29ydGUuJ1xuXG5leHBvcnQgY29uc3QgTVNHX0xPQURfRkFJTEVEID0gJ07Do28gZm9pIHBvc3PDrXZlbCBjYXJyZWdhciBvcyBkYWRvcyBkYSBjYW1hZGEuJ1xuXG5leHBvcnQgY29uc3QgTVNHX0xPQURJTkdfVEFCTEUgPSAnQ2FycmVnYW5kbyBkYWRvcyBkYSB0YWJlbGEgUFJPREVT4oCmJ1xuXG5leHBvcnQgY29uc3QgTVNHX0VYVFJBQ1RfRkFJTEVEID1cbiAgJ1JlZ2lzdHJvcyBlbmNvbnRyYWRvcywgbWFzIG7Do28gZm9pIHBvc3PDrXZlbCBleHRyYWlyIGFubyBlIHZhbG9yZXMgcGFyYSBlc3RlIHJlY29ydGUuICcgK1xuICAnQ29uZmlybWUgc2UgYSB0YWJlbGEgdGVtIHVtYSBsaW5oYSBwb3IgYW5vIChjb2x1bmEgXCJhbm9cIikgb3UgdW1hIGxpbmhhIHBvciByZWNvcnRlIChjb2x1bmFzIGNvbSBhbm9zKSwgJyArXG4gICdlIHNlIGEgY29sdW5hIGRvIHJlY29ydGUgcG9zc3VpIHZhbG9yZXMgcHJlZW5jaGlkb3MuJ1xuXG5leHBvcnQgY29uc3QgSElOVF9DT05TRUNVVElWTyA9ICdPcyBhbm9zIHNlbGVjaW9uYWRvcyBkZXZlbSBzZXIgY29uc2VjdXRpdm9zLidcblxuZXhwb3J0IGNvbnN0IEhJTlRfUEVSSU9EX1JVTEVTID1cbiAgJ09zIGRvaXMgcGVyw61vZG9zIGRldmVtIHRlciBhIG1lc21hIHF1YW50aWRhZGUgZGUgYW5vcyBjb25zZWN1dGl2b3MsIHNlbSByZXBldGnDp8OjbyBlbnRyZSBlbGVzLidcblxuZXhwb3J0IGNvbnN0IFBMQUNFSE9MREVSX1BFUklPRE9fSU5JQ0lBTCA9ICdTZWxlY2lvbmUgbyhzKSBhbm8ocykgZG8gcGVyw61vZG8gaW5pY2lhbCdcbmV4cG9ydCBjb25zdCBQTEFDRUhPTERFUl9QRVJJT0RPX0ZJTkFMID0gJ1NlbGVjaW9uZSBvKHMpIGFubyhzKSBkbyBwZXLDrW9kbyBmaW5hbCdcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3QsIGpzeCB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7XG4gIGZvcm1hdFBlcmNlbnRWYXJpYXRpb24sXG4gIGZvcm1hdFBlcmlvZFJhbmdlTGFiZWwsXG4gIHR5cGUgVmFyaWF0aW9uUmVzdWx0XG59IGZyb20gJy4uLy4uL3V0aWxzL3Byb2Rlcy10YWJsZSdcbmltcG9ydCB7IGZvcm1hdEFyZWEsIGdldFZhcmlhdGlvblRvbmUgfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQnXG5cbmludGVyZmFjZSBWYXJpYXRpb25SZXN1bHRQcm9wcyB7XG4gIGRhdGE6IFZhcmlhdGlvblJlc3VsdFxufVxuXG5leHBvcnQgY29uc3QgVmFyaWF0aW9uUmVzdWx0UGFuZWwgPSAoeyBkYXRhIH06IFZhcmlhdGlvblJlc3VsdFByb3BzKSA9PiB7XG4gIGNvbnN0IHRvbmUgPSBnZXRWYXJpYXRpb25Ub25lKGRhdGEucGN0KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYXJhZG9yLXJlc3VsdFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYXJhZG9yLXJlc3VsdC10aXRsZVwiPlxuICAgICAgICBWYXJpYcOnw6NvIHBlcmNlbnR1YWwgKFxuICAgICAgICB7Zm9ybWF0UGVyaW9kUmFuZ2VMYWJlbChkYXRhLnllYXJzSW5pY2lhbCl9IOKGknsnICd9XG4gICAgICAgIHtmb3JtYXRQZXJpb2RSYW5nZUxhYmVsKGRhdGEueWVhcnNGaW5hbCl9KVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbXBhcmFkb3ItcmVzdWx0LXZhbHVlIGNvbXBhcmFkb3ItcmVzdWx0LXZhbHVlLS0ke3RvbmV9YH0+XG4gICAgICAgIHtmb3JtYXRQZXJjZW50VmFyaWF0aW9uKGRhdGEucGN0KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYXJhZG9yLXJlc3VsdC1kZXRhaWxcIj5cbiAgICAgICAge2Zvcm1hdEFyZWEoZGF0YS52YWx1ZUluaWNpYWwpfSBubyBwZXLDrW9kbyBpbmljaWFsIOKGknsnICd9XG4gICAgICAgIHtmb3JtYXRBcmVhKGRhdGEudmFsdWVGaW5hbCl9IG5vIHBlcsOtb2RvIGZpbmFsXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiaW1wb3J0IHsgUmVhY3QgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQge1xuICBjb21wdXRlUGVyaW9kVmFyaWF0aW9uLFxuICBnZXRZZWFyc0FsbG93ZWRGb3JGaW5hbCxcbiAgZ2V0WWVhcnNBbGxvd2VkRm9ySW5pY2lhbCxcbiAgdHlwZSBZZWFyVmFsdWVSb3dcbn0gZnJvbSAnLi4vLi4vdXRpbHMvcHJvZGVzLXRhYmxlJ1xuaW1wb3J0IHsgSElOVF9DT05TRUNVVElWTyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVBlcmlvZFNlbGVjdGlvbiAoXG4gIHNlcmllczogWWVhclZhbHVlUm93W10sXG4gIGF2YWlsYWJsZVllYXJzOiBudW1iZXJbXSxcbiAgcmVjb3J0ZUZpZWxkPzogc3RyaW5nXG4pIHtcbiAgY29uc3QgW3BlcmlvZG9JbmljaWFsLCBzZXRQZXJpb2RvSW5pY2lhbF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXJbXT4oW10pXG4gIGNvbnN0IFtwZXJpb2RvRmluYWwsIHNldFBlcmlvZG9GaW5hbF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXJbXT4oW10pXG4gIGNvbnN0IFtoaW50SW5pY2lhbCwgc2V0SGludEluaWNpYWxdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2hpbnRGaW5hbCwgc2V0SGludEZpbmFsXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXG5cbiAgY29uc3QgeWVhcnNGb3JJbmljaWFsID0gUmVhY3QudXNlTWVtbyhcbiAgICAoKSA9PiBnZXRZZWFyc0FsbG93ZWRGb3JJbmljaWFsKGF2YWlsYWJsZVllYXJzLCBwZXJpb2RvRmluYWwpLFxuICAgIFthdmFpbGFibGVZZWFycywgcGVyaW9kb0ZpbmFsXVxuICApXG5cbiAgY29uc3QgeWVhcnNGb3JGaW5hbCA9IFJlYWN0LnVzZU1lbW8oXG4gICAgKCkgPT4gZ2V0WWVhcnNBbGxvd2VkRm9yRmluYWwoYXZhaWxhYmxlWWVhcnMsIHBlcmlvZG9JbmljaWFsKSxcbiAgICBbYXZhaWxhYmxlWWVhcnMsIHBlcmlvZG9JbmljaWFsXVxuICApXG5cbiAgY29uc3QgdmFyaWF0aW9uID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKCFwZXJpb2RvSW5pY2lhbC5sZW5ndGggfHwgIXBlcmlvZG9GaW5hbC5sZW5ndGgpIHJldHVybiBudWxsXG4gICAgcmV0dXJuIGNvbXB1dGVQZXJpb2RWYXJpYXRpb24oc2VyaWVzLCBwZXJpb2RvSW5pY2lhbCwgcGVyaW9kb0ZpbmFsKVxuICB9LCBbcGVyaW9kb0luaWNpYWwsIHBlcmlvZG9GaW5hbCwgc2VyaWVzXSlcblxuICBjb25zdCBoYXNQZXJpb2RTZWxlY3Rpb24gPVxuICAgIHBlcmlvZG9JbmljaWFsLmxlbmd0aCA+IDAgfHwgcGVyaW9kb0ZpbmFsLmxlbmd0aCA+IDBcblxuICBjb25zdCBjbGVhclBlcmlvZFNlbGVjdGlvbiA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRQZXJpb2RvSW5pY2lhbChbXSlcbiAgICBzZXRQZXJpb2RvRmluYWwoW10pXG4gICAgc2V0SGludEluaWNpYWwobnVsbClcbiAgICBzZXRIaW50RmluYWwobnVsbClcbiAgfSwgW10pXG5cbiAgY29uc3QgaGFuZGxlUGVyaW9kb0luaWNpYWxDaGFuZ2UgPSBSZWFjdC51c2VDYWxsYmFjaygoeWVhcnM6IG51bWJlcltdKSA9PiB7XG4gICAgc2V0UGVyaW9kb0luaWNpYWwoeWVhcnMpXG4gICAgc2V0SGludEluaWNpYWwobnVsbClcbiAgfSwgW10pXG5cbiAgY29uc3QgaGFuZGxlUGVyaW9kb0ZpbmFsQ2hhbmdlID0gUmVhY3QudXNlQ2FsbGJhY2soKHllYXJzOiBudW1iZXJbXSkgPT4ge1xuICAgIHNldFBlcmlvZG9GaW5hbCh5ZWFycylcbiAgICBzZXRIaW50RmluYWwobnVsbClcbiAgfSwgW10pXG5cbiAgY29uc3QgcmVqZWN0UGVyaW9kb0luaWNpYWwgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0SGludEluaWNpYWwoSElOVF9DT05TRUNVVElWTylcbiAgfSwgW10pXG5cbiAgY29uc3QgcmVqZWN0UGVyaW9kb0ZpbmFsID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldEhpbnRGaW5hbChISU5UX0NPTlNFQ1VUSVZPKVxuICB9LCBbXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFBlcmlvZG9JbmljaWFsKFtdKVxuICAgIHNldFBlcmlvZG9GaW5hbChbXSlcbiAgICBzZXRIaW50SW5pY2lhbChudWxsKVxuICAgIHNldEhpbnRGaW5hbChudWxsKVxuICB9LCBbcmVjb3J0ZUZpZWxkXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghcGVyaW9kb0luaWNpYWwubGVuZ3RoIHx8ICFwZXJpb2RvRmluYWwubGVuZ3RoKSByZXR1cm5cbiAgICBjb25zdCBhbGxvd2VkID0gbmV3IFNldChnZXRZZWFyc0FsbG93ZWRGb3JGaW5hbChhdmFpbGFibGVZZWFycywgcGVyaW9kb0luaWNpYWwpKVxuICAgIGNvbnN0IGZpbHRlcmVkID0gcGVyaW9kb0ZpbmFsLmZpbHRlcigoeSkgPT4gYWxsb3dlZC5oYXMoeSkpXG4gICAgaWYgKGZpbHRlcmVkLmxlbmd0aCAhPT0gcGVyaW9kb0ZpbmFsLmxlbmd0aCkge1xuICAgICAgc2V0UGVyaW9kb0ZpbmFsKGZpbHRlcmVkKVxuICAgIH1cbiAgfSwgW3BlcmlvZG9JbmljaWFsLCBwZXJpb2RvRmluYWwsIGF2YWlsYWJsZVllYXJzXSlcblxuICByZXR1cm4ge1xuICAgIHBlcmlvZG9JbmljaWFsLFxuICAgIHBlcmlvZG9GaW5hbCxcbiAgICB5ZWFyc0ZvckluaWNpYWwsXG4gICAgeWVhcnNGb3JGaW5hbCxcbiAgICBoaW50SW5pY2lhbCxcbiAgICBoaW50RmluYWwsXG4gICAgdmFyaWF0aW9uLFxuICAgIGhhc1BlcmlvZFNlbGVjdGlvbixcbiAgICBjbGVhclBlcmlvZFNlbGVjdGlvbixcbiAgICBoYW5kbGVQZXJpb2RvSW5pY2lhbENoYW5nZSxcbiAgICBoYW5kbGVQZXJpb2RvRmluYWxDaGFuZ2UsXG4gICAgcmVqZWN0UGVyaW9kb0luaWNpYWwsXG4gICAgcmVqZWN0UGVyaW9kb0ZpbmFsXG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIFJlYWN0LFxuICB0eXBlIERhdGFTb3VyY2UsXG4gIHR5cGUgSU1EYXRhU291cmNlU2NoZW1hLFxuICBEYXRhU291cmNlU3RhdHVzXG59IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7XG4gIGF0dHJpYnV0ZVJvd3NTY29yZSxcbiAgYnVpbGRZZWFyU2VyaWVzRnJvbUF0dHJpYnV0ZVJvd3MsXG4gIGJ1aWxkWWVhclNlcmllc0Zyb21SZWNvcmRzLFxuICBkZXNjcmliZVJvd3NGb3JFeHRyYWN0RXJyb3IsXG4gIGRldGVjdFllYXJGaWVsZCxcbiAgZmV0Y2hMYXllclJlY29yZHMsXG4gIGZvcmNlTG9hZFByb2Rlc1Jvd3MsXG4gIHNjaGVtYVRvRmllbGRMaXN0LFxuICB0eXBlIFllYXJWYWx1ZVJvd1xufSBmcm9tICcuLi8uLi91dGlscy9wcm9kZXMtdGFibGUnXG5pbXBvcnQge1xuICBlbnN1cmVEYXRhU291cmNlU2NoZW1hLFxuICBnZXRRdWVyeWFibGVEYXRhU291cmNlLFxuICBpc1Byb2Rlc0RhdGFSZWFkeVxufSBmcm9tICcuLi8uLi91dGlscy9kYXRhLXNvdXJjZSdcbmltcG9ydCB7XG4gIE1TR19FWFRSQUNUX0ZBSUxFRCxcbiAgTVNHX0xPQURfRkFJTEVELFxuICBNU0dfTE9BRElOR19UQUJMRVxufSBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlUHJvZGVzU2VyaWVzUGFyYW1zIHtcbiAgcmVjb3J0ZUZpZWxkPzogc3RyaW5nXG4gIHllYXJGaWVsZD86IHN0cmluZ1xuICB3aWRnZXRJZD86IHN0cmluZ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlUHJvZGVzU2VyaWVzICh7XG4gIHJlY29ydGVGaWVsZCxcbiAgeWVhckZpZWxkLFxuICB3aWRnZXRJZFxufTogVXNlUHJvZGVzU2VyaWVzUGFyYW1zKSB7XG4gIGNvbnN0IFtkc1JlZiwgc2V0RHNSZWZdID0gUmVhY3QudXNlU3RhdGU8RGF0YVNvdXJjZSB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFtkc1N0YXR1cywgc2V0RHNTdGF0dXNdID0gUmVhY3QudXNlU3RhdGU8RGF0YVNvdXJjZVN0YXR1cyB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKVxuICBjb25zdCBbZmllbGRMaXN0LCBzZXRGaWVsZExpc3RdID0gUmVhY3QudXNlU3RhdGUoXG4gICAgW10gYXMgUmV0dXJuVHlwZTx0eXBlb2Ygc2NoZW1hVG9GaWVsZExpc3Q+XG4gIClcbiAgY29uc3QgW3Nlcmllcywgc2V0U2VyaWVzXSA9IFJlYWN0LnVzZVN0YXRlPFllYXJWYWx1ZVJvd1tdPihbXSlcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtsb2FkaW5nTWVzc2FnZSwgc2V0TG9hZGluZ01lc3NhZ2VdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuICBjb25zdCBbZHNJbmZvVmVyc2lvbiwgc2V0RHNJbmZvVmVyc2lvbl0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXIgfCB1bmRlZmluZWQ+KFxuICAgIHVuZGVmaW5lZFxuICApXG5cbiAgY29uc3QgZWZmZWN0aXZlWWVhckZpZWxkID0geWVhckZpZWxkID8/IGRldGVjdFllYXJGaWVsZChmaWVsZExpc3QpXG5cbiAgY29uc3QgYXBwbHlTY2hlbWEgPSBSZWFjdC51c2VDYWxsYmFjaygoc2NoZW1hOiBJTURhdGFTb3VyY2VTY2hlbWEpID0+IHtcbiAgICBzZXRGaWVsZExpc3Qoc2NoZW1hVG9GaWVsZExpc3Qoc2NoZW1hKSlcbiAgfSwgW10pXG5cbiAgY29uc3QgaGFuZGxlRGF0YVNvdXJjZVJlYWR5ID0gUmVhY3QudXNlQ2FsbGJhY2soKGRzOiBEYXRhU291cmNlKSA9PiB7XG4gICAgc2V0RHNSZWYoZHMpXG4gICAgdm9pZCBlbnN1cmVEYXRhU291cmNlU2NoZW1hKGRzKS50aGVuKChzY2hlbWEpID0+IHtcbiAgICAgIGlmIChzY2hlbWEpIGFwcGx5U2NoZW1hKHNjaGVtYSlcbiAgICB9KVxuICB9LCBbYXBwbHlTY2hlbWFdKVxuXG4gIGNvbnN0IGxvYWRTZXJpZXMgPSBSZWFjdC51c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGdldFF1ZXJ5YWJsZURhdGFTb3VyY2UoZHNSZWYpXG4gICAgaWYgKCFtYWluIHx8ICFlZmZlY3RpdmVZZWFyRmllbGQgfHwgIXJlY29ydGVGaWVsZCkge1xuICAgICAgc2V0U2VyaWVzKFtdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFpc1Byb2Rlc0RhdGFSZWFkeShkc1N0YXR1cykpIHJldHVyblxuXG4gICAgc2V0TG9hZGluZyh0cnVlKVxuICAgIHNldExvYWRpbmdNZXNzYWdlKE1TR19MT0FESU5HX1RBQkxFKVxuICAgIHNldEVycm9yKG51bGwpXG4gICAgY29uc3QgZmV0Y2hPcHRzID0ge1xuICAgICAgeWVhckZpZWxkSmltdTogZWZmZWN0aXZlWWVhckZpZWxkLFxuICAgICAgcmVjb3J0ZUZpZWxkSmltdTogcmVjb3J0ZUZpZWxkLFxuICAgICAgZmllbGRzOiBmaWVsZExpc3QsXG4gICAgICB3aWRnZXRJZFxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3dzID0gYXdhaXQgZm9yY2VMb2FkUHJvZGVzUm93cyhtYWluLCBmZXRjaE9wdHMpXG4gICAgICBsZXQgYnVpbHQgPSBidWlsZFllYXJTZXJpZXNGcm9tQXR0cmlidXRlUm93cyhcbiAgICAgICAgcm93cyxcbiAgICAgICAgZWZmZWN0aXZlWWVhckZpZWxkLFxuICAgICAgICByZWNvcnRlRmllbGQsXG4gICAgICAgIGZpZWxkTGlzdFxuICAgICAgKVxuXG4gICAgICBpZiAoYnVpbHQubGVuZ3RoID09PSAwICYmIGZpZWxkTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBmZXRjaExheWVyUmVjb3JkcyhtYWluLCB7XG4gICAgICAgICAgLi4uZmV0Y2hPcHRzLFxuICAgICAgICAgIGZvcmNlUXVlcnk6IHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgYnVpbHQgPSBidWlsZFllYXJTZXJpZXNGcm9tUmVjb3JkcyhcbiAgICAgICAgICByZWNvcmRzLFxuICAgICAgICAgIGVmZmVjdGl2ZVllYXJGaWVsZCxcbiAgICAgICAgICByZWNvcnRlRmllbGQsXG4gICAgICAgICAgZmllbGRMaXN0XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgc2V0U2VyaWVzKGJ1aWx0KVxuXG4gICAgICBpZiAoYnVpbHQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGlmIChyb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHNldEVycm9yKE1TR19MT0FEX0ZBSUxFRClcbiAgICAgICAgfSBlbHNlIGlmIChhdHRyaWJ1dGVSb3dzU2NvcmUocm93cykgPD0gMSkge1xuICAgICAgICAgIHNldEVycm9yKE1TR19MT0FEX0ZBSUxFRClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRFcnJvcihcbiAgICAgICAgICAgIE1TR19FWFRSQUNUX0ZBSUxFRCArIGRlc2NyaWJlUm93c0ZvckV4dHJhY3RFcnJvcihyb3dzLCByZWNvcnRlRmllbGQpXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCB7XG4gICAgICBzZXRFcnJvcihNU0dfTE9BRF9GQUlMRUQpXG4gICAgICBzZXRTZXJpZXMoW10pXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICBzZXRMb2FkaW5nTWVzc2FnZShudWxsKVxuICAgIH1cbiAgfSwgW2RzUmVmLCBkc1N0YXR1cywgZWZmZWN0aXZlWWVhckZpZWxkLCBmaWVsZExpc3QsIHJlY29ydGVGaWVsZCwgd2lkZ2V0SWRdKVxuXG4gIGNvbnN0IGhhbmRsZURhdGFTb3VyY2VJbmZvQ2hhbmdlID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGluZm86IHsgc3RhdHVzPzogRGF0YVNvdXJjZVN0YXR1czsgdmVyc2lvbj86IG51bWJlciB9KSA9PiB7XG4gICAgICBzZXREc1N0YXR1cyhpbmZvPy5zdGF0dXMpXG4gICAgICBpZiAoaW5mbz8udmVyc2lvbiAhPSBudWxsKSB7XG4gICAgICAgIHNldERzSW5mb1ZlcnNpb24oaW5mby52ZXJzaW9uKVxuICAgICAgfVxuICAgIH0sXG4gICAgW11cbiAgKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFyZWNvcnRlRmllbGQgfHwgIWVmZmVjdGl2ZVllYXJGaWVsZCB8fCAhZHNSZWYpIHJldHVyblxuICAgIGlmICghaXNQcm9kZXNEYXRhUmVhZHkoZHNTdGF0dXMpKSByZXR1cm5cbiAgICBsb2FkU2VyaWVzKClcbiAgfSwgW1xuICAgIHJlY29ydGVGaWVsZCxcbiAgICBlZmZlY3RpdmVZZWFyRmllbGQsXG4gICAgZHNSZWYsXG4gICAgZHNTdGF0dXMsXG4gICAgZHNJbmZvVmVyc2lvbixcbiAgICBmaWVsZExpc3QsXG4gICAgbG9hZFNlcmllc1xuICBdKVxuXG4gIGNvbnN0IHdhaXRpbmdGb3JMYXllciA9XG4gICAgIWRzUmVmIHx8XG4gICAgZHNTdGF0dXMgPT09IERhdGFTb3VyY2VTdGF0dXMuTG9hZGluZyB8fFxuICAgIGRzU3RhdHVzID09PSBEYXRhU291cmNlU3RhdHVzLk5vdFJlYWR5IHx8XG4gICAgZHNTdGF0dXMgPT09IERhdGFTb3VyY2VTdGF0dXMuVW5sb2FkZWRcblxuICByZXR1cm4ge1xuICAgIHNlcmllcyxcbiAgICBsb2FkaW5nLFxuICAgIGxvYWRpbmdNZXNzYWdlLFxuICAgIGVycm9yLFxuICAgIGhhbmRsZURhdGFTb3VyY2VSZWFkeSxcbiAgICBoYW5kbGVEYXRhU291cmNlSW5mb0NoYW5nZSxcbiAgICBhcHBseVNjaGVtYSxcbiAgICB3YWl0aW5nRm9yTGF5ZXJcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnamltdS1jb3JlJ1xuXG5leHBvcnQgY29uc3Qgd2lkZ2V0U3R5bGVzID0gY3NzYFxuICAmLndpZGdldC1jb21wYXJhZG9yLXByb2RlcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBwYWRkaW5nOiA4cHg7XG4gIH1cbiAgLmNvbXBhcmFkb3ItZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTJweDtcbiAgICBtaW4td2lkdGg6IDA7XG4gIH1cbiAgLmNvbXBhcmFkb3ItZmllbGQtcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA0cHg7XG4gICAgbWluLXdpZHRoOiAwO1xuICB9XG4gIC5jb21wYXJhZG9yLXBlcmlvZC1oaW50LFxuICAuY29tcGFyYWRvci1lcnJvciB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjYjAwMDIwO1xuICAgIG1hcmdpbi10b3A6IDJweDtcbiAgfVxuICAuY29tcGFyYWRvci1lcnJvci0tYmxvY2sge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAuY29tcGFyYWRvci1yZXN1bHQge1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1yZWYtcGFsZXR0ZS1uZXV0cmFsLTEwMCwgI2YzZjNmMyk7XG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgfVxuICAuY29tcGFyYWRvci1yZXN1bHQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIH1cbiAgLmNvbXBhcmFkb3ItcmVzdWx0LXZhbHVlIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMS4zO1xuICB9XG4gIC5jb21wYXJhZG9yLXJlc3VsdC12YWx1ZS0tcG9zaXRpdmUge1xuICAgIGNvbG9yOiAjYjAwMDIwO1xuICB9XG4gIC5jb21wYXJhZG9yLXJlc3VsdC12YWx1ZS0tbmVnYXRpdmUge1xuICAgIGNvbG9yOiAjMWI3YTNkO1xuICB9XG4gIC5jb21wYXJhZG9yLXJlc3VsdC12YWx1ZS0tbmV1dHJhbCB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cbiAgLmNvbXBhcmFkb3ItcmVzdWx0LWRldGFpbCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjNmI2YjZiO1xuICAgIG1hcmdpbi10b3A6IDZweDtcbiAgfVxuICAuY29tcGFyYWRvci1oaW50IHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgY29sb3I6ICM2YjZiNmI7XG4gICAgbGluZS1oZWlnaHQ6IDEuMzU7XG4gIH1cbiAgLmNvbXBhcmFkb3ItYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG4gIC5jb21wYXJhZG9yLWJ0bi1saW1wYXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBwaWNrZXJTdHlsZXMgPSBjc3NgXG4gIHdpZHRoOiAxMDAlO1xuICAuamltdS1kcm9wZG93biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgLmNvbXBhcmFkb3ItcGVyaW9kLW1lbnUge1xuICAgIG1heC1oZWlnaHQ6IDIyMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gIH1cbmBcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3QsIGpzeCB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7XG4gIERyb3Bkb3duLFxuICBEcm9wZG93bkJ1dHRvbixcbiAgRHJvcGRvd25NZW51LFxuICBEcm9wZG93bkl0ZW1cbn0gZnJvbSAnamltdS11aSdcbmltcG9ydCB7IGZvcm1hdFBlcmlvZExhYmVsLCB0b2dnbGVDb25zZWN1dGl2ZVllYXIgfSBmcm9tICcuLi91dGlscy9wcm9kZXMtdGFibGUnXG5pbXBvcnQgeyBwaWNrZXJTdHlsZXMgfSBmcm9tICcuL3N0eWxlcydcblxuZXhwb3J0IGludGVyZmFjZSBZZWFyUGVyaW9kUGlja2VyUHJvcHMge1xuICBhdmFpbGFibGVZZWFyczogbnVtYmVyW11cbiAgc2VsZWN0ZWRZZWFyczogbnVtYmVyW11cbiAgcGxhY2Vob2xkZXI6IHN0cmluZ1xuICBoaW50Pzogc3RyaW5nIHwgbnVsbFxuICBvbkNoYW5nZTogKHllYXJzOiBudW1iZXJbXSkgPT4gdm9pZFxuICBvblJlamVjdGVkU2VsZWN0aW9uPzogKCkgPT4gdm9pZFxufVxuXG5leHBvcnQgY29uc3QgWWVhclBlcmlvZFBpY2tlciA9IFJlYWN0Lm1lbW8oKHByb3BzOiBZZWFyUGVyaW9kUGlja2VyUHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGF2YWlsYWJsZVllYXJzLFxuICAgIHNlbGVjdGVkWWVhcnMsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgaGludCxcbiAgICBvbkNoYW5nZSxcbiAgICBvblJlamVjdGVkU2VsZWN0aW9uXG4gIH0gPSBwcm9wc1xuXG4gIGNvbnN0IHNlbGVjdGVkU2V0ID0gUmVhY3QudXNlTWVtbyhcbiAgICAoKSA9PiBuZXcgU2V0KHNlbGVjdGVkWWVhcnMpLFxuICAgIFtzZWxlY3RlZFllYXJzXVxuICApXG5cbiAgY29uc3Qgc3VtbWFyeSA9XG4gICAgc2VsZWN0ZWRZZWFycy5sZW5ndGggPiAwXG4gICAgICA/IGZvcm1hdFBlcmlvZExhYmVsKHNlbGVjdGVkWWVhcnMpXG4gICAgICA6IHBsYWNlaG9sZGVyXG5cbiAgY29uc3QgaGFuZGxlVG9nZ2xlID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKHllYXI6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3QgeyBuZXh0LCByZWplY3RlZCB9ID0gdG9nZ2xlQ29uc2VjdXRpdmVZZWFyKHNlbGVjdGVkWWVhcnMsIHllYXIpXG4gICAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgb25SZWplY3RlZFNlbGVjdGlvbj8uKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBvbkNoYW5nZShuZXh0KVxuICAgIH0sXG4gICAgW3NlbGVjdGVkWWVhcnMsIG9uQ2hhbmdlLCBvblJlamVjdGVkU2VsZWN0aW9uXVxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNzcz17cGlja2VyU3R5bGVzfT5cbiAgICAgIDxEcm9wZG93blxuICAgICAgICBmbHVpZFxuICAgICAgICBtZW51SXRlbUNoZWNrTW9kZT1cIm11bHRpQ2hlY2tcIlxuICAgICAgICBhY3RpdmVJY29uXG4gICAgICAgIGNsYXNzTmFtZT1cInctMTAwXCJcbiAgICAgID5cbiAgICAgICAgPERyb3Bkb3duQnV0dG9uIHNpemU9XCJzbVwiIGNsYXNzTmFtZT1cInctMTAwIGRyb3Bkb3duLXRvZ2dsZVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtdHJ1bmNhdGVcIj57c3VtbWFyeX08L3NwYW4+XG4gICAgICAgIDwvRHJvcGRvd25CdXR0b24+XG4gICAgICAgIDxEcm9wZG93bk1lbnUgY2xhc3NOYW1lPVwiY29tcGFyYWRvci1wZXJpb2QtbWVudVwiPlxuICAgICAgICAgIHthdmFpbGFibGVZZWFycy5tYXAoKHllYXIpID0+IChcbiAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAga2V5PXt5ZWFyfVxuICAgICAgICAgICAgICBhY3RpdmU9e3NlbGVjdGVkU2V0Lmhhcyh5ZWFyKX1cbiAgICAgICAgICAgICAgdG9nZ2xlPXtmYWxzZX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVG9nZ2xlKHllYXIpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7eWVhcn1cbiAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0Ryb3Bkb3duTWVudT5cbiAgICAgIDwvRHJvcGRvd24+XG4gICAgICB7aGludCAmJiA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhcmFkb3ItcGVyaW9kLWhpbnRcIj57aGludH08L2Rpdj59XG4gICAgPC9kaXY+XG4gIClcbn0pXG5cblllYXJQZXJpb2RQaWNrZXIuZGlzcGxheU5hbWUgPSAnWWVhclBlcmlvZFBpY2tlcidcbiIsImltcG9ydCB7XG4gIHR5cGUgRGF0YVNvdXJjZSxcbiAgdHlwZSBJTURhdGFTb3VyY2VTY2hlbWEsXG4gIERhdGFTb3VyY2VTdGF0dXNcbn0gZnJvbSAnamltdS1jb3JlJ1xuXG50eXBlIERhdGFTb3VyY2VXaXRoTWFpbiA9IERhdGFTb3VyY2UgJiB7XG4gIGdldE1haW5EYXRhU291cmNlPzogKCkgPT4gRGF0YVNvdXJjZVxuICBnZXRTY2hlbWE/OiAoKSA9PiBJTURhdGFTb3VyY2VTY2hlbWFcbn1cblxuLyoqIEFudGVzIGRvIHF1ZXJ5IGRvIERhdGFTb3VyY2VDb21wb25lbnQgdGVybWluYXIsIHJlZ2lzdHJvcyBjb3N0dW1hbSB2aXIgc2VtIGF0cmlidXRvcy4gKi9cbmV4cG9ydCBjb25zdCBpc1Byb2Rlc0RhdGFSZWFkeSA9IChzdGF0dXM/OiBEYXRhU291cmNlU3RhdHVzKTogYm9vbGVhbiA9PlxuICBzdGF0dXMgPT09IERhdGFTb3VyY2VTdGF0dXMuTG9hZGVkXG5cbmV4cG9ydCBjb25zdCBpc1F1ZXJ5YWJsZVN0YXR1cyA9IChzdGF0dXM/OiBEYXRhU291cmNlU3RhdHVzKTogYm9vbGVhbiA9PlxuICBzdGF0dXMgPT09IERhdGFTb3VyY2VTdGF0dXMuTG9hZGVkIHx8XG4gIHN0YXR1cyA9PT0gRGF0YVNvdXJjZVN0YXR1cy5Mb2FkaW5nXG5cbmV4cG9ydCBjb25zdCBnZXRNYWluRGF0YVNvdXJjZSA9IChkczogRGF0YVNvdXJjZSB8IG51bGwpOiBEYXRhU291cmNlIHwgbnVsbCA9PiB7XG4gIGlmICghZHMpIHJldHVybiBudWxsXG4gIGNvbnN0IG1haW4gPSAoZHMgYXMgRGF0YVNvdXJjZVdpdGhNYWluKS5nZXRNYWluRGF0YVNvdXJjZT8uKClcbiAgcmV0dXJuIG1haW4gPz8gZHNcbn1cblxuLyoqIFVzYSBhIGluc3TDom5jaWEgZGEgY2FtYWRhIHNlbGVjaW9uYWRhIChleC46IFBsYW5pbGhhMSkgcXVhbmRvIGVsYSBqw6Egw6kgY29uc3VsdMOhdmVsLiAqL1xuZXhwb3J0IGNvbnN0IGdldFF1ZXJ5YWJsZURhdGFTb3VyY2UgPSAoZHM6IERhdGFTb3VyY2UgfCBudWxsKTogRGF0YVNvdXJjZSB8IG51bGwgPT4ge1xuICBpZiAoIWRzKSByZXR1cm4gbnVsbFxuICBjb25zdCBxID0gZHMgYXMgRGF0YVNvdXJjZVdpdGhNYWluICYge1xuICAgIHF1ZXJ5PzogKHA6IG9iamVjdCkgPT4gUHJvbWlzZTx1bmtub3duPlxuICAgIGxvYWQ/OiAocDogb2JqZWN0KSA9PiBQcm9taXNlPHVua25vd24+XG4gICAgbG9hZEFsbD86IChwOiBvYmplY3QpID0+IFByb21pc2U8dW5rbm93bj5cbiAgfVxuICBpZiAoXG4gICAgdHlwZW9mIHEucXVlcnkgPT09ICdmdW5jdGlvbicgfHxcbiAgICB0eXBlb2YgcS5sb2FkID09PSAnZnVuY3Rpb24nIHx8XG4gICAgdHlwZW9mIHEubG9hZEFsbCA9PT0gJ2Z1bmN0aW9uJ1xuICApIHtcbiAgICByZXR1cm4gZHNcbiAgfVxuICByZXR1cm4gZ2V0TWFpbkRhdGFTb3VyY2UoZHMpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlbnN1cmVEYXRhU291cmNlU2NoZW1hIChcbiAgZHM6IERhdGFTb3VyY2Vcbik6IFByb21pc2U8SU1EYXRhU291cmNlU2NoZW1hIHwgdW5kZWZpbmVkPiB7XG4gIGNvbnN0IGV4aXN0aW5nID0gZ2V0RGF0YVNvdXJjZVNjaGVtYShkcylcbiAgaWYgKGV4aXN0aW5nPy5maWVsZHMgJiYgT2JqZWN0LmtleXMoZXhpc3RpbmcuZmllbGRzKS5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIGV4aXN0aW5nXG4gIH1cbiAgY29uc3QgZmV0Y2hTY2hlbWEgPSAoZHMgYXMgRGF0YVNvdXJjZVdpdGhNYWluICYge1xuICAgIGZldGNoU2NoZW1hPzogKCkgPT4gUHJvbWlzZTxJTURhdGFTb3VyY2VTY2hlbWE+XG4gIH0pLmZldGNoU2NoZW1hXG4gIGlmICh0eXBlb2YgZmV0Y2hTY2hlbWEgPT09ICdmdW5jdGlvbicpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGF3YWl0IGZldGNoU2NoZW1hLmNhbGwoZHMpXG4gICAgfSBjYXRjaCB7XG4gICAgICByZXR1cm4gZXhpc3RpbmdcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGV4aXN0aW5nXG59XG5cbmV4cG9ydCBjb25zdCBnZXREYXRhU291cmNlU2NoZW1hID0gKFxuICBkczogRGF0YVNvdXJjZVxuKTogSU1EYXRhU291cmNlU2NoZW1hIHwgdW5kZWZpbmVkID0+XG4gIChkcyBhcyBEYXRhU291cmNlV2l0aE1haW4pLmdldFNjaGVtYT8uKClcbiIsImltcG9ydCB7IEFSRUFfVU5JVCB9IGZyb20gJy4uL2NvbnN0YW50cydcblxuZXhwb3J0IGNvbnN0IGZvcm1hdEFyZWEgPSAodmFsdWU6IG51bWJlcik6IHN0cmluZyA9PlxuICBgJHt2YWx1ZS50b0xvY2FsZVN0cmluZygncHQtQlInLCB7XG4gICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMlxuICB9KX0gJHtBUkVBX1VOSVR9YFxuXG5leHBvcnQgdHlwZSBWYXJpYXRpb25Ub25lID0gJ3Bvc2l0aXZlJyB8ICduZWdhdGl2ZScgfCAnbmV1dHJhbCdcblxuZXhwb3J0IGNvbnN0IGdldFZhcmlhdGlvblRvbmUgPSAocGN0OiBudW1iZXIpOiBWYXJpYXRpb25Ub25lID0+IHtcbiAgaWYgKHBjdCA+IDApIHJldHVybiAncG9zaXRpdmUnXG4gIGlmIChwY3QgPCAwKSByZXR1cm4gJ25lZ2F0aXZlJ1xuICByZXR1cm4gJ25ldXRyYWwnXG59XG4iLCJpbXBvcnQge1xuICB0eXBlIElNRmllbGRTY2hlbWEsXG4gIHR5cGUgSU1EYXRhU291cmNlU2NoZW1hLFxuICBKaW11RmllbGRUeXBlLFxuICBFc3JpRmllbGRUeXBlLFxuICBRdWVyeVNjb3BlLFxuICB0eXBlIERhdGFSZWNvcmQsXG4gIGVzcmksXG4gIHJlcXVlc3RVdGlsc1xufSBmcm9tICdqaW11LWNvcmUnXG5cbmV4cG9ydCBpbnRlcmZhY2UgWWVhclZhbHVlUm93IHtcbiAgeWVhcjogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaWVsZEF0dHJpYnV0ZUtleXMge1xuICB5ZWFyS2V5OiBzdHJpbmdcbiAgcmVjb3J0ZUtleTogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1lFQVJfRklFTEQgPSAnYW5vJ1xuXG5jb25zdCBZRUFSX05BTUVfUEFUVEVSTlMgPSBbJ2FubycsICd5ZWFyJywgJ3lyJywgJ2V4ZXJjaWNpbycsICdleGVyY8OtY2lvJ11cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHlDZWxsICh2YWx1ZTogdW5rbm93bik6IGJvb2xlYW4ge1xuICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIHRydWVcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUudHJpbSgpID09PSAnJykgcmV0dXJuIHRydWVcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgTnVtYmVyLmlzTmFOKHZhbHVlKSkgcmV0dXJuIHRydWVcbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU51bWVyaWNWYWx1ZSAodmFsdWU6IHVua25vd24pOiBudW1iZXIgfCBudWxsIHtcbiAgaWYgKGlzRW1wdHlDZWxsKHZhbHVlKSkgcmV0dXJuIG51bGxcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgTnVtYmVyLmlzRmluaXRlKHZhbHVlKSkgcmV0dXJuIHZhbHVlXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgcyA9IHZhbHVlLnRyaW0oKVxuICAgIGlmICghcykgcmV0dXJuIG51bGxcbiAgICBpZiAocy5pbmNsdWRlcygnLCcpKSB7XG4gICAgICBjb25zdCBub3JtYWxpemVkID0gcy5yZXBsYWNlKC9cXC4vZywgJycpLnJlcGxhY2UoJywnLCAnLicpXG4gICAgICBjb25zdCBuID0gTnVtYmVyKG5vcm1hbGl6ZWQpXG4gICAgICByZXR1cm4gTnVtYmVyLmlzRmluaXRlKG4pID8gbiA6IG51bGxcbiAgICB9XG4gICAgY29uc3QgbiA9IE51bWJlcihzKVxuICAgIHJldHVybiBOdW1iZXIuaXNGaW5pdGUobikgPyBuIDogbnVsbFxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbi8qKiBDb252ZXJ0ZSBuw7ptZXJvIGV4aWJpZG8gbm8gQXJjR0lTIGVtIHB0LUJSIChleC46IDIuMDAxIOKGkiAyMDAxKS4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZVllYXJOdW1iZXIgKG46IG51bWJlcik6IG51bWJlciB8IG51bGwge1xuICBpZiAoIU51bWJlci5pc0Zpbml0ZShuKSkgcmV0dXJuIG51bGxcblxuICBpZiAobiA+PSAxOTg1ICYmIG4gPD0gMjAzNSAmJiBNYXRoLmFicyhuIC0gTWF0aC5yb3VuZChuKSkgPCAwLjAwMSkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG4pXG4gIH1cblxuICAvLyBUYWJlbGEgUFJPREVTIG5vIFBvcnRhbDogY29sdW5hIEFubyBjb21vIDIuMDAxLCAyLjAxMSAobWlsaGFyIGNvbSBwb250bylcbiAgaWYgKG4gPj0gMS45ODUgJiYgbiA8PSAyLjAzNSkge1xuICAgIGNvbnN0IHkgPSBNYXRoLnJvdW5kKG4gKiAxMDAwKVxuICAgIGlmICh5ID49IDE5ODUgJiYgeSA8PSAyMDM1KSByZXR1cm4geVxuICB9XG5cbiAgY29uc3QgdHJ1bmNhdGVkID0gTWF0aC50cnVuYyhuKVxuICBpZiAodHJ1bmNhdGVkID49IDE5ODUgJiYgdHJ1bmNhdGVkIDw9IDIwMzUpIHJldHVybiB0cnVuY2F0ZWRcbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlWWVhciAodmFsdWU6IHVua25vd24pOiBudW1iZXIgfCBudWxsIHtcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSAmJiAhTnVtYmVyLmlzTmFOKHZhbHVlLmdldFRpbWUoKSkpIHtcbiAgICByZXR1cm4gdmFsdWUuZ2V0RnVsbFllYXIoKVxuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gbm9ybWFsaXplWWVhck51bWJlcih2YWx1ZSlcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IHMgPSB2YWx1ZS50cmltKClcbiAgICBpZiAoIXMpIHJldHVybiBudWxsXG5cbiAgICBjb25zdCBiclRob3VzYW5kcyA9IHMubWF0Y2goL14oXFxkezEsMn0pXFwuKFxcZHszfSkkLylcbiAgICBpZiAoYnJUaG91c2FuZHMpIHtcbiAgICAgIGNvbnN0IHkgPSBOdW1iZXIoYnJUaG91c2FuZHNbMV0gKyBiclRob3VzYW5kc1syXSlcbiAgICAgIGlmICh5ID49IDE5ODUgJiYgeSA8PSAyMDM1KSByZXR1cm4geVxuICAgIH1cblxuICAgIGNvbnN0IG4gPSBOdW1iZXIocy5yZXBsYWNlKCcsJywgJy4nKSlcbiAgICBpZiAoTnVtYmVyLmlzRmluaXRlKG4pKSByZXR1cm4gbm9ybWFsaXplWWVhck51bWJlcihuKVxuXG4gICAgY29uc3QgbSA9IHMubWF0Y2goL1xcYigxOXwyMClcXGR7Mn1cXGIvKVxuICAgIGlmIChtKSByZXR1cm4gTnVtYmVyKG1bMF0pXG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNjaGVtYVRvRmllbGRMaXN0IChzY2hlbWE/OiBJTURhdGFTb3VyY2VTY2hlbWEgfCBudWxsKTogSU1GaWVsZFNjaGVtYVtdIHtcbiAgaWYgKCFzY2hlbWE/LmZpZWxkcykgcmV0dXJuIFtdXG4gIHJldHVybiBPYmplY3Qua2V5cyhzY2hlbWEuZmllbGRzKS5tYXAoKGtleSkgPT4gc2NoZW1hLmZpZWxkc1trZXldKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1lcmljUmVjb3J0ZUZpZWxkIChmaWVsZDogSU1GaWVsZFNjaGVtYSk6IGJvb2xlYW4ge1xuICBpZiAoZmllbGQudHlwZSA9PT0gSmltdUZpZWxkVHlwZS5OdW1iZXIpIHJldHVybiB0cnVlXG4gIGNvbnN0IGVzcmkgPSBmaWVsZC5lc3JpVHlwZVxuICByZXR1cm4gKFxuICAgIGVzcmkgPT09IEVzcmlGaWVsZFR5cGUuRG91YmxlIHx8XG4gICAgZXNyaSA9PT0gRXNyaUZpZWxkVHlwZS5TaW5nbGUgfHxcbiAgICBlc3JpID09PSBFc3JpRmllbGRUeXBlLkludGVnZXIgfHxcbiAgICBlc3JpID09PSBFc3JpRmllbGRUeXBlLlNtYWxsSW50ZWdlclxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVLZXkgKGZpZWxkOiBJTUZpZWxkU2NoZW1hKTogc3RyaW5nIHtcbiAgcmV0dXJuIGZpZWxkLm5hbWUgfHwgZmllbGQuamltdU5hbWVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRldGVjdFllYXJGaWVsZCAoZmllbGRzOiBJTUZpZWxkU2NoZW1hW10pOiBzdHJpbmcgfCBudWxsIHtcbiAgY29uc3QgZXhhY3RBbm8gPSBmaWVsZHMuZmluZChcbiAgICAoZikgPT5cbiAgICAgIGYuamltdU5hbWU/LnRvTG93ZXJDYXNlKCkgPT09ICdhbm8nIHx8XG4gICAgICBmLm5hbWU/LnRvTG93ZXJDYXNlKCkgPT09ICdhbm8nIHx8XG4gICAgICBmLmFsaWFzPy50b0xvd2VyQ2FzZSgpID09PSAnYW5vJ1xuICApXG4gIGlmIChleGFjdEFubykgcmV0dXJuIGV4YWN0QW5vLmppbXVOYW1lXG5cbiAgY29uc3QgY2FuZGlkYXRlcyA9IGZpZWxkcy5maWx0ZXIoXG4gICAgKGYpID0+IGYudHlwZSA9PT0gSmltdUZpZWxkVHlwZS5OdW1iZXIgfHwgZi50eXBlID09PSBKaW11RmllbGRUeXBlLlN0cmluZ1xuICApXG4gIGZvciAoY29uc3QgcGF0IG9mIFlFQVJfTkFNRV9QQVRURVJOUykge1xuICAgIGNvbnN0IGZvdW5kID0gY2FuZGlkYXRlcy5maW5kKFxuICAgICAgKGYpID0+XG4gICAgICAgIGYuamltdU5hbWU/LnRvTG93ZXJDYXNlKCkgPT09IHBhdCB8fFxuICAgICAgICBmLm5hbWU/LnRvTG93ZXJDYXNlKCkgPT09IHBhdCB8fFxuICAgICAgICBmLmFsaWFzPy50b0xvd2VyQ2FzZSgpID09PSBwYXRcbiAgICApXG4gICAgaWYgKGZvdW5kKSByZXR1cm4gZm91bmQuamltdU5hbWVcbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UmVjb3J0ZUxhYmVsIChmaWVsZDogSU1GaWVsZFNjaGVtYSk6IHN0cmluZyB7XG4gIHJldHVybiBmb3JtYXRSZWNvcnRlTGFiZWxGcm9tTmFtZShmaWVsZC5qaW11TmFtZSwgZmllbGQuYWxpYXMpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRSZWNvcnRlTGFiZWxGcm9tTmFtZSAoamltdU5hbWU6IHN0cmluZywgYWxpYXM/OiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoYWxpYXM/LnRyaW0oKSkgcmV0dXJuIGFsaWFzLnRyaW0oKVxuICByZXR1cm4gamltdU5hbWVcbiAgICAuc3BsaXQoJ18nKVxuICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAubWFwKCh3KSA9PiB3LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdy5zbGljZSgxKS50b0xvd2VyQ2FzZSgpKVxuICAgIC5qb2luKCcgJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN5c3RlbUhpZGRlbkZpZWxkTmFtZXMgKGZpZWxkczogSU1GaWVsZFNjaGVtYVtdKTogc3RyaW5nW10ge1xuICByZXR1cm4gZmllbGRzXG4gICAgLmZpbHRlcigoZikgPT4ge1xuICAgICAgY29uc3QgZXNyaSA9IGYuZXNyaVR5cGVcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGVzcmkgPT09IEVzcmlGaWVsZFR5cGUuT0lEIHx8XG4gICAgICAgIGVzcmkgPT09IEVzcmlGaWVsZFR5cGUuR2VvbWV0cnkgfHxcbiAgICAgICAgZXNyaSA9PT0gRXNyaUZpZWxkVHlwZS5HbG9iYWxJRCB8fFxuICAgICAgICBlc3JpID09PSBFc3JpRmllbGRUeXBlLkdVSURcbiAgICAgIClcbiAgICB9KVxuICAgIC5tYXAoKGYpID0+IGYuamltdU5hbWUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWNvcnRlSGlkZGVuRmllbGROYW1lcyAoXG4gIGZpZWxkczogSU1GaWVsZFNjaGVtYVtdLFxuICB5ZWFyRmllbGQ/OiBzdHJpbmdcbik6IHN0cmluZ1tdIHtcbiAgY29uc3QgaGlkZGVuID0gZ2V0U3lzdGVtSGlkZGVuRmllbGROYW1lcyhmaWVsZHMpXG4gIGlmICh5ZWFyRmllbGQgJiYgIWhpZGRlbi5pbmNsdWRlcyh5ZWFyRmllbGQpKSB7XG4gICAgaGlkZGVuLnB1c2goeWVhckZpZWxkKVxuICB9XG4gIHJldHVybiBoaWRkZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlY29ydGVDYW5kaWRhdGVGaWVsZHMgKFxuICBmaWVsZHM6IElNRmllbGRTY2hlbWFbXSxcbiAgeWVhckZpZWxkPzogc3RyaW5nXG4pOiBJTUZpZWxkU2NoZW1hW10ge1xuICBjb25zdCBoaWRkZW4gPSBuZXcgU2V0KGdldFJlY29ydGVIaWRkZW5GaWVsZE5hbWVzKGZpZWxkcywgeWVhckZpZWxkKSlcbiAgcmV0dXJuIGZpZWxkc1xuICAgIC5maWx0ZXIoKGYpID0+IGlzTnVtZXJpY1JlY29ydGVGaWVsZChmKSAmJiAhaGlkZGVuLmhhcyhmLmppbXVOYW1lKSlcbiAgICAuc29ydCgoYSwgYikgPT5cbiAgICAgIGZvcm1hdFJlY29ydGVMYWJlbChhKS5sb2NhbGVDb21wYXJlKGZvcm1hdFJlY29ydGVMYWJlbChiKSwgJ3B0LUJSJylcbiAgICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kRmllbGRCeUppbXVOYW1lIChcbiAgZmllbGRzOiBJTUZpZWxkU2NoZW1hW10sXG4gIGppbXVOYW1lPzogc3RyaW5nXG4pOiBJTUZpZWxkU2NoZW1hIHwgbnVsbCB7XG4gIGlmICghamltdU5hbWUpIHJldHVybiBudWxsXG4gIGNvbnN0IGV4YWN0ID0gZmllbGRzLmZpbmQoKGYpID0+IGYuamltdU5hbWUgPT09IGppbXVOYW1lKVxuICBpZiAoZXhhY3QpIHJldHVybiBleGFjdFxuICBjb25zdCBsb3dlciA9IGppbXVOYW1lLnRvTG93ZXJDYXNlKClcbiAgcmV0dXJuIChcbiAgICBmaWVsZHMuZmluZChcbiAgICAgIChmKSA9PlxuICAgICAgICBmLmppbXVOYW1lPy50b0xvd2VyQ2FzZSgpID09PSBsb3dlciB8fFxuICAgICAgICBmLm5hbWU/LnRvTG93ZXJDYXNlKCkgPT09IGxvd2VyIHx8XG4gICAgICAgIGYuYWxpYXM/LnRvTG93ZXJDYXNlKCkgPT09IGxvd2VyXG4gICAgKSA/PyBudWxsXG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVBdHRyaWJ1dGVLZXlzIChcbiAgZmllbGRzOiBJTUZpZWxkU2NoZW1hW10sXG4gIHllYXJGaWVsZEppbXU/OiBzdHJpbmcsXG4gIHJlY29ydGVGaWVsZEppbXU/OiBzdHJpbmdcbik6IEZpZWxkQXR0cmlidXRlS2V5cyB8IG51bGwge1xuICBpZiAoIXllYXJGaWVsZEppbXUgfHwgIXJlY29ydGVGaWVsZEppbXUpIHJldHVybiBudWxsXG5cbiAgY29uc3QgeWVhckZpZWxkID0gZmluZEZpZWxkQnlKaW11TmFtZShmaWVsZHMsIHllYXJGaWVsZEppbXUpXG4gIGNvbnN0IHJlY29ydGVGaWVsZCA9IGZpbmRGaWVsZEJ5SmltdU5hbWUoZmllbGRzLCByZWNvcnRlRmllbGRKaW11KVxuXG4gIHJldHVybiB7XG4gICAgeWVhcktleTogeWVhckZpZWxkID8gZ2V0QXR0cmlidXRlS2V5KHllYXJGaWVsZCkgOiB5ZWFyRmllbGRKaW11LFxuICAgIHJlY29ydGVLZXk6IHJlY29ydGVGaWVsZCA/IGdldEF0dHJpYnV0ZUtleShyZWNvcnRlRmllbGQpIDogcmVjb3J0ZUZpZWxkSmltdVxuICB9XG59XG5cbnR5cGUgUmVjb3JkTGlrZSA9XG4gIHwgRGF0YVJlY29yZFxuICB8IHtcbiAgICAgIGF0dHJpYnV0ZXM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICAgICAgZmVhdHVyZT86IHsgYXR0cmlidXRlcz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+IH1cbiAgICAgIGdldERhdGE/OiAoKSA9PiB7XG4gICAgICAgIGF0dHJpYnV0ZXM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICAgICAgICBmZWF0dXJlPzogeyBhdHRyaWJ1dGVzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfVxuICAgICAgfVxuICAgICAgZ2V0RmllbGRWYWx1ZT86IChqaW11RmllbGROYW1lOiBzdHJpbmcpID0+IHVua25vd25cbiAgICAgIGdldERhdGVGaWVsZFZhbHVlPzogKGppbXVGaWVsZE5hbWU6IHN0cmluZykgPT4gdW5rbm93blxuICAgICAgZ2V0RGF0YUJlZm9yZU1hcHBpbmc/OiAoKSA9PiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICAgIH1cblxuZnVuY3Rpb24gdG9QbGFpbk9iamVjdCAodmFsdWU6IHVua25vd24pOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB7XG4gIGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JykgcmV0dXJuIHt9XG4gIGNvbnN0IHYgPSB2YWx1ZSBhcyB7XG4gICAgdG9KUz86ICgpID0+IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gICAgYXNNdXRhYmxlPzogKG9wdHM/OiB7IGRlZXA6IGJvb2xlYW4gfSkgPT4gUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgfVxuICBpZiAodHlwZW9mIHYudG9KUyA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHYudG9KUygpXG4gIGlmICh0eXBlb2Ygdi5hc011dGFibGUgPT09ICdmdW5jdGlvbicpIHJldHVybiB2LmFzTXV0YWJsZSh7IGRlZXA6IHRydWUgfSlcbiAgcmV0dXJuIHZhbHVlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+XG59XG5cbmNvbnN0IEdFVF9EQVRBX01FVEFfS0VZUyA9IG5ldyBTZXQoW1xuICAnYXR0cmlidXRlcycsXG4gICdmZWF0dXJlJyxcbiAgJ2dlb21ldHJ5JyxcbiAgJ2NlbnRyb2lkJyxcbiAgJ2FnZ3JlZ2F0ZUdlb21ldHJpZXMnLFxuICAnc3ltYm9sJ1xuXSlcblxuLyoqIEV4dHJhaSBvIGRpY2lvbsOhcmlvIGRlIGF0cmlidXRvcyBkZSB1bSByZWdpc3RybyAodsOhcmlvcyBmb3JtYXRvcyBkbyBKaW11L0FyY0dJUykuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGxhaW5BdHRyaWJ1dGVzIChyZWM6IFJlY29yZExpa2UpOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB7XG4gIGNvbnN0IG1lcmdlZDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fVxuXG4gIGNvbnN0IG1lcmdlID0gKGF0dHJzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pID0+IHtcbiAgICBpZiAoIWF0dHJzKSByZXR1cm5cbiAgICBPYmplY3QuYXNzaWduKG1lcmdlZCwgdG9QbGFpbk9iamVjdChhdHRycykpXG4gIH1cblxuICBpZiAoJ2dldERhdGEnIGluIHJlYyAmJiB0eXBlb2YgcmVjLmdldERhdGEgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCBkYXRhID0gcmVjLmdldERhdGEoKVxuICAgIGNvbnN0IHBsYWluID0gdG9QbGFpbk9iamVjdChkYXRhKVxuICAgIG1lcmdlKHBsYWluLmF0dHJpYnV0ZXMgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCB1bmRlZmluZWQpXG4gICAgbWVyZ2UocGxhaW4uZmVhdHVyZT8uYXR0cmlidXRlcyBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IHVuZGVmaW5lZClcbiAgICAvLyBKaW11IERhdGFSZWNvcmQ6IGdldERhdGEoKSBjb3N0dW1hIHNlciBtYXBhIHBsYW5vIHsgamltdUZpZWxkTmFtZTogdmFsb3IgfVxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHBsYWluKSkge1xuICAgICAgaWYgKEdFVF9EQVRBX01FVEFfS0VZUy5oYXMoa2V5KSkgY29udGludWVcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSBtZXJnZWRba2V5XSA9IHZhbHVlXG4gICAgfVxuICB9XG5cbiAgaWYgKCdmZWF0dXJlJyBpbiByZWMgJiYgcmVjLmZlYXR1cmU/LmF0dHJpYnV0ZXMpIHtcbiAgICBtZXJnZShyZWMuZmVhdHVyZS5hdHRyaWJ1dGVzKVxuICB9XG5cbiAgaWYgKCdhdHRyaWJ1dGVzJyBpbiByZWMgJiYgcmVjLmF0dHJpYnV0ZXMpIHtcbiAgICBtZXJnZShyZWMuYXR0cmlidXRlcylcbiAgfVxuXG4gIGlmICgnZ2V0RGF0YUJlZm9yZU1hcHBpbmcnIGluIHJlYyAmJiB0eXBlb2YgcmVjLmdldERhdGFCZWZvcmVNYXBwaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgbWVyZ2UocmVjLmdldERhdGFCZWZvcmVNYXBwaW5nKCkpXG4gIH1cblxuICByZXR1cm4gbWVyZ2VkXG59XG5cbmZ1bmN0aW9uIGF0dHJpYnV0ZUhhc1VzYWJsZVZhbHVlICh2YWx1ZTogdW5rbm93bik6IGJvb2xlYW4ge1xuICBpZiAoaXNFbXB0eUNlbGwodmFsdWUpKSByZXR1cm4gZmFsc2VcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHJldHVybiBmYWxzZVxuICByZXR1cm4gdHJ1ZVxufVxuXG4vKiogVmVyaWZpY2Egc2UgbyByZWdpc3RybyBleHDDtWUgYXRyaWJ1dG9zIG91IGdldEZpZWxkVmFsdWUgY29tIGRhZG9zIHJlYWlzIChuw6NvIHPDsyBtw6l0b2RvIHZhemlvKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWNvcmRIYXNSZWFkYWJsZURhdGEgKHJlYzogUmVjb3JkTGlrZSk6IGJvb2xlYW4ge1xuICBjb25zdCBhdHRycyA9IGdldFBsYWluQXR0cmlidXRlcyhyZWMpXG4gIGNvbnN0IHVzYWJsZUtleXMgPSBPYmplY3Qua2V5cyhhdHRycykuZmlsdGVyKChrZXkpID0+IHtcbiAgICBpZiAoL14ob2JqZWN0aWR8Z2xvYmFsaWR8c2hhcGV8Z2VvbWV0cnkpJC9pLnRlc3Qoa2V5KSkgcmV0dXJuIGZhbHNlXG4gICAgcmV0dXJuIGF0dHJpYnV0ZUhhc1VzYWJsZVZhbHVlKGF0dHJzW2tleV0pXG4gIH0pXG4gIGlmICh1c2FibGVLZXlzLmxlbmd0aCA+IDApIHJldHVybiB0cnVlXG5cbiAgaWYgKCdnZXRGaWVsZFZhbHVlJyBpbiByZWMgJiYgdHlwZW9mIHJlYy5nZXRGaWVsZFZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3QgcHJvYmVzID0gW1xuICAgICAgJ2FubycsXG4gICAgICAneWVhcicsXG4gICAgICAnQU5PJyxcbiAgICAgICdZZWFyJyxcbiAgICAgICdleGVyY2ljaW8nLFxuICAgICAgJ0V4ZXJjaWNpbydcbiAgICBdXG4gICAgZm9yIChjb25zdCBuYW1lIG9mIHByb2Jlcykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdiA9IHJlYy5nZXRGaWVsZFZhbHVlIShuYW1lKVxuICAgICAgICBpZiAoYXR0cmlidXRlSGFzVXNhYmxlVmFsdWUodikpIHJldHVybiB0cnVlXG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgLy8gdGVudGEgcHLDs3hpbW9cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuLyoqIEzDqiB2YWxvciBwZWxvIEFQSSBkbyBKaW11IChgZ2V0RmllbGRWYWx1ZWApIGUsIGVtIHNlZ3VpZGEsIHBlbG9zIGF0cmlidXRvcyBicnV0b3MuICovXG5leHBvcnQgZnVuY3Rpb24gcmVhZFJlY29yZFZhbHVlIChcbiAgcmVjOiBSZWNvcmRMaWtlLFxuICBmaWVsZD86IElNRmllbGRTY2hlbWEgfCBudWxsLFxuICBmYWxsYmFja0ppbXVOYW1lPzogc3RyaW5nXG4pOiB1bmtub3duIHtcbiAgY29uc3QgbmFtZXM6IHN0cmluZ1tdID0gW11cbiAgaWYgKGZpZWxkPy5qaW11TmFtZSkgbmFtZXMucHVzaChmaWVsZC5qaW11TmFtZSlcbiAgaWYgKGZhbGxiYWNrSmltdU5hbWUpIG5hbWVzLnB1c2goZmFsbGJhY2tKaW11TmFtZSlcbiAgaWYgKGZpZWxkPy5uYW1lKSBuYW1lcy5wdXNoKGZpZWxkLm5hbWUpXG4gIGlmIChmaWVsZD8uYWxpYXMpIG5hbWVzLnB1c2goZmllbGQuYWxpYXMpXG4gIGlmIChmaWVsZCkgbmFtZXMucHVzaChnZXRBdHRyaWJ1dGVLZXkoZmllbGQpKVxuXG4gIGNvbnN0IHVuaXF1ZU5hbWVzID0gWy4uLm5ldyBTZXQobmFtZXMuZmlsdGVyKEJvb2xlYW4pKV1cblxuICBpZiAoJ2dldEZpZWxkVmFsdWUnIGluIHJlYyAmJiB0eXBlb2YgcmVjLmdldEZpZWxkVmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3IgKGNvbnN0IG5hbWUgb2YgdW5pcXVlTmFtZXMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHYgPSByZWMuZ2V0RmllbGRWYWx1ZSEobmFtZSlcbiAgICAgICAgaWYgKHYgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHZcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAvLyB0ZW50YSBwcsOzeGltbyBub21lXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKFxuICAgIGZpZWxkPy5qaW11TmFtZSAmJlxuICAgICdnZXREYXRlRmllbGRWYWx1ZScgaW4gcmVjICYmXG4gICAgdHlwZW9mIHJlYy5nZXREYXRlRmllbGRWYWx1ZSA9PT0gJ2Z1bmN0aW9uJ1xuICApIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdiA9IHJlYy5nZXREYXRlRmllbGRWYWx1ZSEoZmllbGQuamltdU5hbWUpXG4gICAgICBpZiAodiAhPT0gdW5kZWZpbmVkKSByZXR1cm4gdlxuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gaWdub3JhXG4gICAgfVxuICB9XG5cbiAgY29uc3QgYXR0cnMgPSBnZXRQbGFpbkF0dHJpYnV0ZXMocmVjKVxuICBjb25zdCBmcm9tTWFwcGVkID0gcmVhZEF0dHJpYnV0ZUZsZXhpYmxlKGF0dHJzLCBmaWVsZCwgZmFsbGJhY2tKaW11TmFtZSlcbiAgaWYgKGZyb21NYXBwZWQgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGZyb21NYXBwZWRcblxuICBpZiAoJ2dldERhdGFCZWZvcmVNYXBwaW5nJyBpbiByZWMgJiYgdHlwZW9mIHJlYy5nZXREYXRhQmVmb3JlTWFwcGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IHJhdyA9IHRvUGxhaW5PYmplY3QocmVjLmdldERhdGFCZWZvcmVNYXBwaW5nKCkpXG4gICAgcmV0dXJuIHJlYWRBdHRyaWJ1dGVGbGV4aWJsZShyYXcsIGZpZWxkLCBmYWxsYmFja0ppbXVOYW1lKVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiByZWFkQXR0cmlidXRlIChcbiAgYXR0cnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuICBwcmltYXJ5S2V5OiBzdHJpbmcsXG4gIGZhbGxiYWNrS2V5Pzogc3RyaW5nXG4pOiB1bmtub3duIHtcbiAgaWYgKHByaW1hcnlLZXkgaW4gYXR0cnMpIHJldHVybiBhdHRyc1twcmltYXJ5S2V5XVxuICBpZiAoZmFsbGJhY2tLZXkgJiYgZmFsbGJhY2tLZXkgIT09IHByaW1hcnlLZXkgJiYgZmFsbGJhY2tLZXkgaW4gYXR0cnMpIHtcbiAgICByZXR1cm4gYXR0cnNbZmFsbGJhY2tLZXldXG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG4vKiogVGVudGEgamltdU5hbWUsIG5hbWUsIGFsaWFzIGUgY29ycmVzcG9uZMOqbmNpYSBzZW0gZGlmZXJlbmNpYXIgbWFpw7pzY3VsYXMvbWluw7pzY3VsYXMuICovXG5leHBvcnQgZnVuY3Rpb24gcmVhZEF0dHJpYnV0ZUZsZXhpYmxlIChcbiAgYXR0cnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuICBmaWVsZD86IElNRmllbGRTY2hlbWEgfCBudWxsLFxuICBmYWxsYmFja0ppbXVOYW1lPzogc3RyaW5nXG4pOiB1bmtub3duIHtcbiAgY29uc3QgY2FuZGlkYXRlcyA9IG5ldyBTZXQ8c3RyaW5nPigpXG4gIGlmIChmaWVsZCkge1xuICAgIGlmIChmaWVsZC5qaW11TmFtZSkgY2FuZGlkYXRlcy5hZGQoZmllbGQuamltdU5hbWUpXG4gICAgaWYgKGZpZWxkLm5hbWUpIGNhbmRpZGF0ZXMuYWRkKGZpZWxkLm5hbWUpXG4gICAgaWYgKGZpZWxkLmFsaWFzKSBjYW5kaWRhdGVzLmFkZChmaWVsZC5hbGlhcylcbiAgICBjYW5kaWRhdGVzLmFkZChnZXRBdHRyaWJ1dGVLZXkoZmllbGQpKVxuICB9XG4gIGlmIChmYWxsYmFja0ppbXVOYW1lKSBjYW5kaWRhdGVzLmFkZChmYWxsYmFja0ppbXVOYW1lKVxuXG4gIGZvciAoY29uc3Qga2V5IG9mIGNhbmRpZGF0ZXMpIHtcbiAgICBjb25zdCB2ID0gcmVhZEF0dHJpYnV0ZShhdHRycywga2V5KVxuICAgIGlmICh2ICE9PSB1bmRlZmluZWQpIHJldHVybiB2XG4gIH1cblxuICBjb25zdCBhdHRyS2V5cyA9IE9iamVjdC5rZXlzKGF0dHJzKVxuICBmb3IgKGNvbnN0IGtleSBvZiBjYW5kaWRhdGVzKSB7XG4gICAgY29uc3QgZm91bmQgPSBhdHRyS2V5cy5maW5kKChrKSA9PiBrLnRvTG93ZXJDYXNlKCkgPT09IGtleS50b0xvd2VyQ2FzZSgpKVxuICAgIGlmIChmb3VuZCAhPSBudWxsKSByZXR1cm4gYXR0cnNbZm91bmRdXG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG50eXBlIFF1ZXJpYWJsZUxheWVyID0ge1xuICBxdWVyeT86IChxOiBvYmplY3QsIG9wdGlvbnM/OiB7IHNjb3BlPzogUXVlcnlTY29wZSB9KSA9PiBQcm9taXNlPHsgcmVjb3Jkcz86IERhdGFSZWNvcmRbXSB9PlxuICBsb2FkPzogKHE6IG9iamVjdCwgb3B0aW9ucz86IHsgc2NvcGU/OiBRdWVyeVNjb3BlIH0pID0+IFByb21pc2U8RGF0YVJlY29yZFtdPlxuICBsb2FkQWxsPzogKFxuICAgIHE6IG9iamVjdCxcbiAgICBzaWduYWw/OiBBYm9ydFNpZ25hbCxcbiAgICBwcm9ncmVzc0NhbGxiYWNrPzogdW5rbm93bixcbiAgICBvcHRpb25zPzogeyBzY29wZT86IFF1ZXJ5U2NvcGUgfVxuICApID0+IFByb21pc2U8RGF0YVJlY29yZFtdPlxuICBnZXRBbGxMb2FkZWRSZWNvcmRzPzogKCkgPT4gRGF0YVJlY29yZFtdXG4gIGdldFJlY29yZHM/OiAoKSA9PiBEYXRhUmVjb3JkW11cbiAgbGF5ZXI/OiB7IHF1ZXJ5RmVhdHVyZXM/OiAocTogb2JqZWN0KSA9PiBQcm9taXNlPHsgZmVhdHVyZXM/OiB1bmtub3duW10gfT4gfVxuICBidWlsZFJlY29yZD86IChmZWF0dXJlOiB1bmtub3duKSA9PiBEYXRhUmVjb3JkXG59XG5cbmNvbnN0IGJ1aWxkUXVlcnlPcHRpb25zID0gKHdpZGdldElkPzogc3RyaW5nKSA9PiAoe1xuICBzY29wZTogUXVlcnlTY29wZS5JbkFsbERhdGEsXG4gIC4uLih3aWRnZXRJZCA/IHsgd2lkZ2V0SWQgfSA6IHt9KVxufSlcblxuY29uc3QgYnVpbGRRdWVyeVBhcmFtcyA9IChcbiAgb3V0RmllbGRzOiBzdHJpbmdbXSA9IFsnKiddLFxuICBkaXNhYmxlQ2xpZW50UXVlcnkgPSBmYWxzZVxuKSA9PiAoe1xuICB3aGVyZTogJzE9MScsXG4gIG91dEZpZWxkcyxcbiAgcmV0dXJuR2VvbWV0cnk6IGZhbHNlLFxuICBwYWdlU2l6ZTogMjAwMCxcbiAgLi4uKGRpc2FibGVDbGllbnRRdWVyeSA/IHsgZGlzYWJsZUNsaWVudFF1ZXJ5OiB0cnVlIH0gOiB7fSlcbn0pXG5cbmZ1bmN0aW9uIHJlY29yZHNBcmVSZWFkYWJsZSAocmVjb3JkczogRGF0YVJlY29yZFtdKTogYm9vbGVhbiB7XG4gIHJldHVybiByZWNvcmRzLmxlbmd0aCA+IDAgJiYgcmVjb3Jkcy5zb21lKHJlY29yZEhhc1JlYWRhYmxlRGF0YSlcbn1cblxuYXN5bmMgZnVuY3Rpb24gcXVlcnlWaWFKc2FwaUxheWVyIChkczogUXVlcmlhYmxlTGF5ZXIpOiBQcm9taXNlPERhdGFSZWNvcmRbXT4ge1xuICBjb25zdCBsYXllciA9IGRzLmxheWVyIGFzIHtcbiAgICBxdWVyeUZlYXR1cmVzPzogKHE6IG9iamVjdCkgPT4gUHJvbWlzZTx7IGZlYXR1cmVzPzogdW5rbm93bltdIH0+XG4gICAgcXVlcnk/OiAocTogb2JqZWN0KSA9PiBQcm9taXNlPHsgZmVhdHVyZXM/OiB1bmtub3duW10gfT5cbiAgfVxuICBpZiAoIWxheWVyIHx8IHR5cGVvZiBkcy5idWlsZFJlY29yZCAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIFtdXG5cbiAgY29uc3QgcSA9IHtcbiAgICB3aGVyZTogJzE9MScsXG4gICAgb3V0RmllbGRzOiBbJyonXSxcbiAgICByZXR1cm5HZW9tZXRyeTogZmFsc2UsXG4gICAgbnVtOiAyMDAwXG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9XG4gICAgICB0eXBlb2YgbGF5ZXIucXVlcnlGZWF0dXJlcyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IGF3YWl0IGxheWVyLnF1ZXJ5RmVhdHVyZXMocSlcbiAgICAgICAgOiB0eXBlb2YgbGF5ZXIucXVlcnkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICA/IGF3YWl0IGxheWVyLnF1ZXJ5KHEpXG4gICAgICAgICAgOiBudWxsXG4gICAgY29uc3QgZmVhdHVyZXMgPSByZXN1bHQ/LmZlYXR1cmVzID8/IFtdXG4gICAgcmV0dXJuIGZlYXR1cmVzLm1hcCgoZikgPT4gZHMuYnVpbGRSZWNvcmQhKGYpKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gW11cbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaFZpYUFyY2dpc1Jlc3QgKFxuICBkczogeyB1cmw/OiBzdHJpbmcgfVxuKTogUHJvbWlzZTxSZWNvcmQ8c3RyaW5nLCB1bmtub3duPltdPiB7XG4gIGlmICghZHMudXJsKSByZXR1cm4gW11cbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBlc3JpLnJlc3RGZWF0dXJlU2VydmljZS5xdWVyeUZlYXR1cmVzKHtcbiAgICAgIHVybDogZHMudXJsLFxuICAgICAgd2hlcmU6ICcxPTEnLFxuICAgICAgb3V0RmllbGRzOiBbJyonXSxcbiAgICAgIHJldHVybkdlb21ldHJ5OiBmYWxzZVxuICAgIH0pXG4gICAgY29uc3QgZmVhdHVyZXMgPVxuICAgICAgcmVzICYmIHR5cGVvZiByZXMgPT09ICdvYmplY3QnICYmICdmZWF0dXJlcycgaW4gcmVzXG4gICAgICAgID8gKHJlcyBhcyB7IGZlYXR1cmVzPzogQXJyYXk8eyBhdHRyaWJ1dGVzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfT4gfSlcbiAgICAgICAgICAgIC5mZWF0dXJlcyA/PyBbXVxuICAgICAgICA6IFtdXG4gICAgcmV0dXJuIGZlYXR1cmVzXG4gICAgICAubWFwKChmKSA9PiAoeyAuLi4oZi5hdHRyaWJ1dGVzID8/IHt9KSB9KSlcbiAgICAgIC5maWx0ZXIoKGEpID0+IE9iamVjdC5rZXlzKGEpLmxlbmd0aCA+IDApXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBbXVxuICB9XG59XG5cbi8qKiBDb25zdWx0YSBSRVNUIGNvbSBjcmVkZW5jaWFsIGRvIFBvcnRhbCAoRW50ZXJwcmlzZSkuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hWaWFQb3J0YWxSZXN0IChcbiAgZHM6IHsgdXJsPzogc3RyaW5nIH1cbik6IFByb21pc2U8UmVjb3JkPHN0cmluZywgdW5rbm93bj5bXT4ge1xuICBpZiAoIWRzLnVybCkgcmV0dXJuIFtdXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgcmVxdWVzdFV0aWxzLnJlcXVlc3RXcmFwcGVyKGRzLnVybCwgKHNlc3Npb24pID0+XG4gICAgICBlc3JpLnJlc3RGZWF0dXJlU2VydmljZS5xdWVyeUZlYXR1cmVzKHtcbiAgICAgICAgdXJsOiBkcy51cmwsXG4gICAgICAgIHdoZXJlOiAnMT0xJyxcbiAgICAgICAgb3V0RmllbGRzOiBbJyonXSxcbiAgICAgICAgcmV0dXJuR2VvbWV0cnk6IGZhbHNlLFxuICAgICAgICBhdXRoZW50aWNhdGlvbjogc2Vzc2lvblxuICAgICAgfSlcbiAgICApXG4gICAgY29uc3QgZmVhdHVyZXMgPVxuICAgICAgcmVzICYmIHR5cGVvZiByZXMgPT09ICdvYmplY3QnICYmICdmZWF0dXJlcycgaW4gcmVzXG4gICAgICAgID8gKHJlcyBhcyB7IGZlYXR1cmVzPzogQXJyYXk8eyBhdHRyaWJ1dGVzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfT4gfSlcbiAgICAgICAgICAgIC5mZWF0dXJlcyA/PyBbXVxuICAgICAgICA6IFtdXG4gICAgcmV0dXJuIGZlYXR1cmVzXG4gICAgICAubWFwKChmKSA9PiAoeyAuLi4oZi5hdHRyaWJ1dGVzID8/IHt9KSB9KSlcbiAgICAgIC5maWx0ZXIoKGEpID0+IE9iamVjdC5rZXlzKGEpLmxlbmd0aCA+IDApXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmZXRjaFZpYUFyY2dpc1Jlc3QoZHMpXG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcnVuUXVlcnlhYmxlTWV0aG9kcyAoXG4gIGRzOiBRdWVyaWFibGVMYXllcixcbiAgb3V0RmllbGRzOiBzdHJpbmdbXSxcbiAgZGlzYWJsZUNsaWVudFF1ZXJ5OiBib29sZWFuLFxuICB3aWRnZXRJZD86IHN0cmluZ1xuKTogUHJvbWlzZTxEYXRhUmVjb3JkW10+IHtcbiAgY29uc3QgcGFyYW1zID0gYnVpbGRRdWVyeVBhcmFtcyhvdXRGaWVsZHMsIGRpc2FibGVDbGllbnRRdWVyeSlcbiAgY29uc3QgcXVlcnlPcHRpb25zID0gYnVpbGRRdWVyeU9wdGlvbnMod2lkZ2V0SWQpXG5cbiAgaWYgKHR5cGVvZiBkcz8ubG9hZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZWNvcmRzID0gYXdhaXQgZHMubG9hZChwYXJhbXMsIHF1ZXJ5T3B0aW9ucylcbiAgICAgIGlmIChyZWNvcmRzPy5sZW5ndGggJiYgcmVjb3Jkc0FyZVJlYWRhYmxlKHJlY29yZHMpKSByZXR1cm4gcmVjb3Jkc1xuICAgICAgaWYgKHJlY29yZHM/Lmxlbmd0aCAmJiAhZGlzYWJsZUNsaWVudFF1ZXJ5KSByZXR1cm4gcmVjb3Jkc1xuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gdGVudGEgcHLDs3hpbW8gbcOpdG9kb1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgZHM/LmxvYWRBbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IGRzLmxvYWRBbGwocGFyYW1zLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgcXVlcnlPcHRpb25zKVxuICAgICAgaWYgKHJlY29yZHM/Lmxlbmd0aCAmJiByZWNvcmRzQXJlUmVhZGFibGUocmVjb3JkcykpIHJldHVybiByZWNvcmRzXG4gICAgICBpZiAocmVjb3Jkcz8ubGVuZ3RoICYmICFkaXNhYmxlQ2xpZW50UXVlcnkpIHJldHVybiByZWNvcmRzXG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyB0ZW50YSBxdWVyeSBhYmFpeG9cbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIGRzPy5xdWVyeSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkcy5xdWVyeShwYXJhbXMsIHF1ZXJ5T3B0aW9ucylcbiAgICAgIGNvbnN0IHJlY29yZHMgPSByZXN1bHQ/LnJlY29yZHMgPz8gW11cbiAgICAgIGlmIChyZWNvcmRzLmxlbmd0aCAmJiByZWNvcmRzQXJlUmVhZGFibGUocmVjb3JkcykpIHJldHVybiByZWNvcmRzXG4gICAgICBpZiAocmVjb3Jkcy5sZW5ndGggJiYgIWRpc2FibGVDbGllbnRRdWVyeSkgcmV0dXJuIHJlY29yZHNcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIHRlbnRhIEpTIEFQSVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHZpYUxheWVyID0gYXdhaXQgcXVlcnlWaWFKc2FwaUxheWVyKGRzKVxuICBpZiAodmlhTGF5ZXIubGVuZ3RoICYmIHJlY29yZHNBcmVSZWFkYWJsZSh2aWFMYXllcikpIHJldHVybiB2aWFMYXllclxuICBpZiAodmlhTGF5ZXIubGVuZ3RoICYmICFkaXNhYmxlQ2xpZW50UXVlcnkpIHJldHVybiB2aWFMYXllclxuXG4gIHJldHVybiBbXVxufVxuXG5hc3luYyBmdW5jdGlvbiBxdWVyeUFsbFJlY29yZHMgKFxuICBkczogUXVlcmlhYmxlTGF5ZXIsXG4gIG91dEZpZWxkczogc3RyaW5nW10gPSBbJyonXSxcbiAgd2lkZ2V0SWQ/OiBzdHJpbmdcbik6IFByb21pc2U8RGF0YVJlY29yZFtdPiB7XG4gIGxldCByZWNvcmRzID0gYXdhaXQgcnVuUXVlcnlhYmxlTWV0aG9kcyhkcywgb3V0RmllbGRzLCBmYWxzZSwgd2lkZ2V0SWQpXG4gIGlmIChyZWNvcmRzQXJlUmVhZGFibGUocmVjb3JkcykpIHJldHVybiByZWNvcmRzXG5cbiAgcmVjb3JkcyA9IGF3YWl0IHJ1blF1ZXJ5YWJsZU1ldGhvZHMoZHMsIG91dEZpZWxkcywgdHJ1ZSwgd2lkZ2V0SWQpXG4gIGlmIChyZWNvcmRzQXJlUmVhZGFibGUocmVjb3JkcykpIHJldHVybiByZWNvcmRzXG5cbiAgcmV0dXJuIHJlY29yZHNcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGZXRjaExheWVyUmVjb3Jkc09wdGlvbnMge1xuICAvKiogSWdub3JhIGNhY2hlIGRvIG1hcGEgZSBmb3LDp2EgcXVlcnkvbG9hZEFsbCAow7p0aWwgbm8gRW50ZXJwcmlzZSkuICovXG4gIGZvcmNlUXVlcnk/OiBib29sZWFuXG4gIHllYXJGaWVsZEppbXU/OiBzdHJpbmdcbiAgcmVjb3J0ZUZpZWxkSmltdT86IHN0cmluZ1xuICBmaWVsZHM/OiBJTUZpZWxkU2NoZW1hW11cbiAgLyoqIElEIGRhIHdpZGdldCBwYXJhIGF1dGVudGljYcOnw6NvIG5hIGNvbnN1bHRhIEppbXUuICovXG4gIHdpZGdldElkPzogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIHJlc29sdmVPdXRGaWVsZHMgKFxuICB5ZWFyRmllbGRKaW11Pzogc3RyaW5nLFxuICByZWNvcnRlRmllbGRKaW11Pzogc3RyaW5nLFxuICBmaWVsZHM/OiBJTUZpZWxkU2NoZW1hW11cbik6IHN0cmluZ1tdIHtcbiAgaWYgKCFmaWVsZHM/Lmxlbmd0aCB8fCAheWVhckZpZWxkSmltdSB8fCAhcmVjb3J0ZUZpZWxkSmltdSkgcmV0dXJuIFsnKiddXG4gIGNvbnN0IGtleXMgPSByZXNvbHZlQXR0cmlidXRlS2V5cyhmaWVsZHMsIHllYXJGaWVsZEppbXUsIHJlY29ydGVGaWVsZEppbXUpXG4gIGlmICgha2V5cykgcmV0dXJuIFsnKiddXG4gIHJldHVybiBbJyonLCBrZXlzLnllYXJLZXksIGtleXMucmVjb3J0ZUtleV1cbn1cblxuLyoqIERldGVjdGEgY29sdW5hIGRlIGFubyBwZWxvcyB2YWxvcmVzIHJlYWlzIChleC46IEFubyA9IDIuMDAxLCAyMDAxKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXRlY3RZZWFyS2V5RnJvbVJvd3MgKFxuICByb3dzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPltdLFxuICBoaW50Pzogc3RyaW5nXG4pOiBzdHJpbmcgfCBudWxsIHtcbiAgaWYgKCFyb3dzLmxlbmd0aCkgcmV0dXJuIG51bGxcblxuICBjb25zdCBrZXlzID0gbmV3IFNldDxzdHJpbmc+KClcbiAgZm9yIChjb25zdCByb3cgb2Ygcm93cy5zbGljZSgwLCA1MCkpIHtcbiAgICBPYmplY3Qua2V5cyhyb3cpLmZvckVhY2goKGspID0+IGtleXMuYWRkKGspKVxuICB9XG5cbiAgaWYgKGhpbnQpIHtcbiAgICBjb25zdCBtYXRjaCA9IFsuLi5rZXlzXS5maW5kKChrKSA9PiBrLnRvTG93ZXJDYXNlKCkgPT09IGhpbnQudG9Mb3dlckNhc2UoKSlcbiAgICBpZiAobWF0Y2gpIHJldHVybiBtYXRjaFxuICB9XG5cbiAgbGV0IGJlc3RLZXk6IHN0cmluZyB8IG51bGwgPSBudWxsXG4gIGxldCBiZXN0U2NvcmUgPSAwXG4gIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICBpZiAoL14ob2JqZWN0aWR8Z2xvYmFsaWR8c2hhcGV8ZmlkKSQvaS50ZXN0KGtleSkpIGNvbnRpbnVlXG4gICAgbGV0IHNjb3JlID0gMFxuICAgIGZvciAoY29uc3Qgcm93IG9mIHJvd3MpIHtcbiAgICAgIGNvbnN0IHkgPSBwYXJzZVllYXIocm93W2tleV0pXG4gICAgICBpZiAoeSAhPSBudWxsICYmIHkgPj0gMTk4NSAmJiB5IDw9IDIwMzUpIHNjb3JlKytcbiAgICB9XG4gICAgaWYgKHNjb3JlID4gYmVzdFNjb3JlKSB7XG4gICAgICBiZXN0U2NvcmUgPSBzY29yZVxuICAgICAgYmVzdEtleSA9IGtleVxuICAgIH1cbiAgfVxuICByZXR1cm4gYmVzdFNjb3JlID4gMCA/IGJlc3RLZXkgOiBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXRlY3RSZWNvcnRlS2V5RnJvbVJvd3MgKFxuICByb3dzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPltdLFxuICByZWNvcnRlSGludDogc3RyaW5nXG4pOiBzdHJpbmcgfCBudWxsIHtcbiAgaWYgKCFyb3dzLmxlbmd0aCkgcmV0dXJuIG51bGxcbiAgY29uc3Qga2V5cyA9IG5ldyBTZXQ8c3RyaW5nPigpXG4gIGZvciAoY29uc3Qgcm93IG9mIHJvd3Muc2xpY2UoMCwgNSkpIHtcbiAgICBPYmplY3Qua2V5cyhyb3cpLmZvckVhY2goKGspID0+IGtleXMuYWRkKGspKVxuICB9XG4gIGNvbnN0IGV4YWN0ID0gWy4uLmtleXNdLmZpbmQoXG4gICAgKGspID0+IGsudG9Mb3dlckNhc2UoKSA9PT0gcmVjb3J0ZUhpbnQudG9Mb3dlckNhc2UoKVxuICApXG4gIGlmIChleGFjdCkgcmV0dXJuIGV4YWN0XG4gIHJldHVybiAoXG4gICAgWy4uLmtleXNdLmZpbmQoXG4gICAgICAoaykgPT5cbiAgICAgICAgbm9ybWFsaXplUmVjb3J0ZVRva2VuKGspID09PSBub3JtYWxpemVSZWNvcnRlVG9rZW4ocmVjb3J0ZUhpbnQpXG4gICAgKSA/PyBudWxsXG4gIClcbn1cblxuLyoqIE1vbnRhIHPDqXJpZSBhIHBhcnRpciBkZSBhdHJpYnV0b3MgYnJ1dG9zIChSRVNUIC8gcXVlcnlGZWF0dXJlcykuICovXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRZZWFyU2VyaWVzRnJvbUF0dHJpYnV0ZVJvd3MgKFxuICByb3dzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPltdLFxuICB5ZWFyRmllbGRKaW11OiBzdHJpbmcsXG4gIHJlY29ydGVGaWVsZEppbXU6IHN0cmluZyxcbiAgZmllbGRzPzogSU1GaWVsZFNjaGVtYVtdXG4pOiBZZWFyVmFsdWVSb3dbXSB7XG4gIGlmICghcm93cy5sZW5ndGgpIHJldHVybiBbXVxuXG4gIGNvbnN0IGFzUmVjb3JkcyA9IHJvd3MubWFwKChhdHRyaWJ1dGVzKSA9PiAoeyBhdHRyaWJ1dGVzIH0pKVxuICBjb25zdCBzdGFuZGFyZCA9IGJ1aWxkWWVhclNlcmllcyhcbiAgICBhc1JlY29yZHMsXG4gICAgeWVhckZpZWxkSmltdSxcbiAgICByZWNvcnRlRmllbGRKaW11LFxuICAgIGZpZWxkc1xuICApXG4gIGlmIChzdGFuZGFyZC5sZW5ndGggPiAwKSByZXR1cm4gc3RhbmRhcmRcblxuICBjb25zdCB5ZWFyS2V5ID0gZGV0ZWN0WWVhcktleUZyb21Sb3dzKHJvd3MsIHllYXJGaWVsZEppbXUpID8/IHllYXJGaWVsZEppbXVcbiAgbGV0IHJlY29ydGVLZXkgPVxuICAgIGRldGVjdFJlY29ydGVLZXlGcm9tUm93cyhyb3dzLCByZWNvcnRlRmllbGRKaW11KSA/PyByZWNvcnRlRmllbGRKaW11XG5cbiAgaWYgKCF5ZWFyS2V5KSByZXR1cm4gW11cblxuICBsZXQgc2VyaWVzID0gYnVpbGRTZXJpZXNGcm9tS2V5cyhyb3dzLCB5ZWFyS2V5LCByZWNvcnRlS2V5KVxuICBpZiAoc2VyaWVzLmxlbmd0aCA+IDApIHJldHVybiBzZXJpZXNcblxuICBpZiAoZmllbGRzPy5sZW5ndGgpIHtcbiAgICBmb3IgKGNvbnN0IGYgb2YgZ2V0UmVjb3J0ZUNhbmRpZGF0ZUZpZWxkcyhmaWVsZHMsIHllYXJGaWVsZEppbXUpKSB7XG4gICAgICBjb25zdCBhbHRLZXkgPVxuICAgICAgICBkZXRlY3RSZWNvcnRlS2V5RnJvbVJvd3Mocm93cywgZi5qaW11TmFtZSkgPz8gZi5qaW11TmFtZVxuICAgICAgc2VyaWVzID0gYnVpbGRTZXJpZXNGcm9tS2V5cyhyb3dzLCB5ZWFyS2V5LCBhbHRLZXkpXG4gICAgICBpZiAoc2VyaWVzLmxlbmd0aCA+IDApIHJldHVybiBzZXJpZXNcbiAgICB9XG4gIH1cblxuICBjb25zdCBhbHRSZWNvcnRlID0gZmluZEJlc3RSZWNvcnRlS2V5QnlOdW1lcmljRmlsbChyb3dzLCB5ZWFyS2V5KVxuICBpZiAoYWx0UmVjb3J0ZSAmJiBhbHRSZWNvcnRlICE9PSByZWNvcnRlS2V5KSB7XG4gICAgc2VyaWVzID0gYnVpbGRTZXJpZXNGcm9tS2V5cyhyb3dzLCB5ZWFyS2V5LCBhbHRSZWNvcnRlKVxuICAgIGlmIChzZXJpZXMubGVuZ3RoID4gMCkgcmV0dXJuIHNlcmllc1xuICB9XG5cbiAgcmV0dXJuIHNlcmllc1xufVxuXG5mdW5jdGlvbiBmaW5kQmVzdFJlY29ydGVLZXlCeU51bWVyaWNGaWxsIChcbiAgcm93czogUmVjb3JkPHN0cmluZywgdW5rbm93bj5bXSxcbiAgeWVhcktleTogc3RyaW5nXG4pOiBzdHJpbmcgfCBudWxsIHtcbiAgY29uc3Qga2V5cyA9IG5ldyBTZXQ8c3RyaW5nPigpXG4gIGZvciAoY29uc3Qgcm93IG9mIHJvd3Muc2xpY2UoMCwgNTApKSB7XG4gICAgT2JqZWN0LmtleXMocm93KS5mb3JFYWNoKChrKSA9PiBrZXlzLmFkZChrKSlcbiAgfVxuXG4gIGxldCBiZXN0OiB7IGtleTogc3RyaW5nOyBjb3VudDogbnVtYmVyIH0gfCBudWxsID0gbnVsbFxuICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgaWYgKGtleS50b0xvd2VyQ2FzZSgpID09PSB5ZWFyS2V5LnRvTG93ZXJDYXNlKCkpIGNvbnRpbnVlXG4gICAgaWYgKC9eKG9iamVjdGlkfGdsb2JhbGlkfHNoYXBlfGZpZCkkL2kudGVzdChrZXkpKSBjb250aW51ZVxuICAgIGxldCBjb3VudCA9IDBcbiAgICBmb3IgKGNvbnN0IHJvdyBvZiByb3dzKSB7XG4gICAgICBpZiAocGFyc2VOdW1lcmljVmFsdWUocm93W2tleV0pICE9IG51bGwpIGNvdW50KytcbiAgICB9XG4gICAgaWYgKCFiZXN0IHx8IGNvdW50ID4gYmVzdC5jb3VudCkgYmVzdCA9IHsga2V5LCBjb3VudCB9XG4gIH1cbiAgcmV0dXJuIGJlc3QgJiYgYmVzdC5jb3VudCA+IDAgPyBiZXN0LmtleSA6IG51bGxcbn1cblxuLyoqIFJlc3VtbyBkYXMgY29sdW5hcyBkZXRlY3RhZGFzIChhanVkYSBkaWFnbsOzc3RpY28gbm8gRW50ZXJwcmlzZSkuICovXG5leHBvcnQgZnVuY3Rpb24gZGVzY3JpYmVSb3dzRm9yRXh0cmFjdEVycm9yIChcbiAgcm93czogUmVjb3JkPHN0cmluZywgdW5rbm93bj5bXSxcbiAgcmVjb3J0ZUhpbnQ6IHN0cmluZ1xuKTogc3RyaW5nIHtcbiAgaWYgKCFyb3dzLmxlbmd0aCkgcmV0dXJuICcnXG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhyb3dzWzBdKS5maWx0ZXIoXG4gICAgKGspID0+ICEvXihvYmplY3RpZHxnbG9iYWxpZHxzaGFwZXxmaWQpJC9pLnRlc3QoaylcbiAgKVxuICBjb25zdCB5ZWFyS2V5ID0gZGV0ZWN0WWVhcktleUZyb21Sb3dzKHJvd3MpXG4gIGNvbnN0IHJlY29ydGVLZXkgPSBkZXRlY3RSZWNvcnRlS2V5RnJvbVJvd3Mocm93cywgcmVjb3J0ZUhpbnQpXG4gIGNvbnN0IHByZXZpZXcgPSBrZXlzLnNsaWNlKDAsIDEwKS5qb2luKCcsICcpXG4gIGNvbnN0IHN1ZmZpeCA9IGtleXMubGVuZ3RoID4gMTAgPyAn4oCmJyA6ICcnXG4gIGxldCBtc2cgPSBgIENvbHVuYXMgbmEgcmVzcG9zdGE6ICR7cHJldmlld30ke3N1ZmZpeH0uYFxuICBpZiAoeWVhcktleSkgbXNnICs9IGAgQ29sdW5hIGRlIGFubzogXCIke3llYXJLZXl9XCIuYFxuICBpZiAocmVjb3J0ZUtleSkgbXNnICs9IGAgQ29sdW5hIGRvIHJlY29ydGU6IFwiJHtyZWNvcnRlS2V5fVwiLmBcbiAgcmV0dXJuIG1zZ1xufVxuXG5mdW5jdGlvbiBidWlsZFNlcmllc0Zyb21LZXlzIChcbiAgcm93czogUmVjb3JkPHN0cmluZywgdW5rbm93bj5bXSxcbiAgeWVhcktleTogc3RyaW5nLFxuICByZWNvcnRlS2V5OiBzdHJpbmdcbik6IFllYXJWYWx1ZVJvd1tdIHtcbiAgY29uc3Qgc2VyaWVzOiBZZWFyVmFsdWVSb3dbXSA9IFtdXG4gIGZvciAoY29uc3Qgcm93IG9mIHJvd3MpIHtcbiAgICBjb25zdCB5ZWFyID0gcGFyc2VZZWFyKHJvd1t5ZWFyS2V5XSlcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlTnVtZXJpY1ZhbHVlKHJvd1tyZWNvcnRlS2V5XSlcbiAgICBpZiAoeWVhciA9PSBudWxsIHx8IHZhbHVlID09IG51bGwpIGNvbnRpbnVlXG4gICAgc2VyaWVzLnB1c2goeyB5ZWFyLCB2YWx1ZSB9KVxuICB9XG4gIHJldHVybiBzZXJpZXMuc29ydCgoYSwgYikgPT4gYS55ZWFyIC0gYi55ZWFyKVxufVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaFJhd0F0dHJpYnV0ZVJvd3NGcm9tTGF5ZXIgKFxuICBkczogUXVlcmlhYmxlTGF5ZXJcbik6IFByb21pc2U8UmVjb3JkPHN0cmluZywgdW5rbm93bj5bXT4ge1xuICBjb25zdCBsYXllciA9IGRzLmxheWVyIGFzIHtcbiAgICBsb2FkPzogKCkgPT4gUHJvbWlzZTx2b2lkPlxuICAgIGxvYWRlZD86IGJvb2xlYW5cbiAgICBsb2FkU3RhdHVzPzogc3RyaW5nXG4gICAgcXVlcnlGZWF0dXJlcz86IChwOiBvYmplY3QpID0+IFByb21pc2U8e1xuICAgICAgZmVhdHVyZXM/OiBBcnJheTx7IGF0dHJpYnV0ZXM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB9PlxuICAgIH0+XG4gIH1cbiAgaWYgKCFsYXllcj8ucXVlcnlGZWF0dXJlcykgcmV0dXJuIFtdXG5cbiAgdHJ5IHtcbiAgICBpZiAoXG4gICAgICB0eXBlb2YgbGF5ZXIubG9hZCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgbGF5ZXIubG9hZFN0YXR1cyAhPT0gJ2xvYWRlZCcgJiZcbiAgICAgICFsYXllci5sb2FkZWRcbiAgICApIHtcbiAgICAgIGF3YWl0IGxheWVyLmxvYWQoKVxuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBsYXllci5xdWVyeUZlYXR1cmVzKHtcbiAgICAgIHdoZXJlOiAnMT0xJyxcbiAgICAgIG91dEZpZWxkczogWycqJ10sXG4gICAgICByZXR1cm5HZW9tZXRyeTogZmFsc2VcbiAgICB9KVxuICAgIHJldHVybiAocmVzdWx0LmZlYXR1cmVzID8/IFtdKVxuICAgICAgLm1hcCgoZikgPT4gKHsgLi4uKGYuYXR0cmlidXRlcyA/PyB7fSkgfSkpXG4gICAgICAuZmlsdGVyKChhKSA9PiBPYmplY3Qua2V5cyhhKS5sZW5ndGggPiAwKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gW11cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXR0cmlidXRlUm93c1Njb3JlIChcbiAgcm93czogUmVjb3JkPHN0cmluZywgdW5rbm93bj5bXVxuKTogbnVtYmVyIHtcbiAgaWYgKCFyb3dzLmxlbmd0aCkgcmV0dXJuIDBcbiAgY29uc3Qgc2FtcGxlID0gcm93c1swXVxuICByZXR1cm4gT2JqZWN0LmtleXMoc2FtcGxlKS5maWx0ZXIoXG4gICAgKGspID0+ICEvXihvYmplY3RpZHxnbG9iYWxpZHxzaGFwZXxmaWQpJC9pLnRlc3QoaylcbiAgKS5sZW5ndGhcbn1cblxuLyoqXG4gKiBDYXJyZWdhIGxpbmhhcyBkYSB0YWJlbGEgUFJPREVTIHByaW9yaXphbmRvIGF0cmlidXRvcyBicnV0b3MgZGEgY2FtYWRhXG4gKiAobWVzbWEgZm9udGUgZGEgdGFiZWxhIGRvIFBvcnRhbCkuXG4gKi9cbmZ1bmN0aW9uIHJlY29yZHNUb0F0dHJpYnV0ZVJvd3MgKHJlY29yZHM6IERhdGFSZWNvcmRbXSk6IFJlY29yZDxzdHJpbmcsIHVua25vd24+W10ge1xuICByZXR1cm4gcmVjb3Jkc1xuICAgIC5tYXAoKHIpID0+IGdldFBsYWluQXR0cmlidXRlcyhyKSlcbiAgICAuZmlsdGVyKChhKSA9PiBPYmplY3Qua2V5cyhhKS5sZW5ndGggPiAwKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hQcm9kZXNBdHRyaWJ1dGVSb3dzIChcbiAgZGF0YVNvdXJjZTogdW5rbm93bixcbiAgb3B0aW9ucz86IEZldGNoTGF5ZXJSZWNvcmRzT3B0aW9uc1xuKTogUHJvbWlzZTxSZWNvcmQ8c3RyaW5nLCB1bmtub3duPltdPiB7XG4gIGNvbnN0IGRzID0gZGF0YVNvdXJjZSBhcyBRdWVyaWFibGVMYXllciAmIHsgdXJsPzogc3RyaW5nIH1cbiAgY29uc3QgY2FuZGlkYXRlczogUmVjb3JkPHN0cmluZywgdW5rbm93bj5bXVtdID0gW11cblxuICBjb25zdCBwb3J0YWxSb3dzID0gYXdhaXQgZmV0Y2hWaWFQb3J0YWxSZXN0KGRzKVxuICBpZiAocG9ydGFsUm93cy5sZW5ndGgpIGNhbmRpZGF0ZXMucHVzaChwb3J0YWxSb3dzKVxuXG4gIGNhbmRpZGF0ZXMucHVzaChhd2FpdCBmZXRjaFJhd0F0dHJpYnV0ZVJvd3NGcm9tTGF5ZXIoZHMpKVxuXG4gIGNvbnN0IHJlc3RSb3dzID0gYXdhaXQgZmV0Y2hWaWFBcmNnaXNSZXN0KGRzKVxuICBpZiAocmVzdFJvd3MubGVuZ3RoKSBjYW5kaWRhdGVzLnB1c2gocmVzdFJvd3MpXG5cbiAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IGZldGNoTGF5ZXJSZWNvcmRzKGRhdGFTb3VyY2UsIG9wdGlvbnMpXG4gIGlmIChyZWNvcmRzLmxlbmd0aCkge1xuICAgIGNhbmRpZGF0ZXMucHVzaChyZWNvcmRzVG9BdHRyaWJ1dGVSb3dzKHJlY29yZHMpKVxuICB9XG5cbiAgY29uc3QgbG9hZGVkID0gZHMuZ2V0UmVjb3Jkcz8uKCkgPz8gZHMuZ2V0QWxsTG9hZGVkUmVjb3Jkcz8uKCkgPz8gW11cbiAgaWYgKGxvYWRlZC5sZW5ndGgpIHtcbiAgICBjYW5kaWRhdGVzLnB1c2gocmVjb3Jkc1RvQXR0cmlidXRlUm93cyhsb2FkZWQpKVxuICB9XG5cbiAgaWYgKG9wdGlvbnM/LnllYXJGaWVsZEppbXUgJiYgb3B0aW9ucz8ucmVjb3J0ZUZpZWxkSmltdSkge1xuICAgIGNvbnN0IG9yZGVyZWQgPSBbXG4gICAgICAuLi5jYW5kaWRhdGVzLmZpbHRlcigoYykgPT4gYy5sZW5ndGggJiYgYXR0cmlidXRlUm93c1Njb3JlKGMpID4gMSlcbiAgICBdLnNvcnQoKGEsIGIpID0+IHNjb3JlUm93c0ZvclJlY29ydGUoYiwgb3B0aW9ucy5yZWNvcnRlRmllbGRKaW11KSAtIHNjb3JlUm93c0ZvclJlY29ydGUoYSwgb3B0aW9ucy5yZWNvcnRlRmllbGRKaW11KSlcblxuICAgIGZvciAoY29uc3Qgcm93cyBvZiBvcmRlcmVkKSB7XG4gICAgICBjb25zdCBzZXJpZXMgPSBidWlsZFllYXJTZXJpZXNGcm9tQXR0cmlidXRlUm93cyhcbiAgICAgICAgcm93cyxcbiAgICAgICAgb3B0aW9ucy55ZWFyRmllbGRKaW11LFxuICAgICAgICBvcHRpb25zLnJlY29ydGVGaWVsZEppbXUsXG4gICAgICAgIG9wdGlvbnMuZmllbGRzXG4gICAgICApXG4gICAgICBpZiAoc2VyaWVzLmxlbmd0aCA+IDApIHJldHVybiByb3dzXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgd2l0aERhdGEgPSBjYW5kaWRhdGVzLmZpbHRlcihcbiAgICAoYykgPT4gYy5sZW5ndGggJiYgYXR0cmlidXRlUm93c1Njb3JlKGMpID4gMVxuICApXG4gIGlmICghd2l0aERhdGEubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGNhbmRpZGF0ZXMuZmluZCgoYykgPT4gYy5sZW5ndGgpID8/IFtdXG4gIH1cblxuICBjb25zdCByZWNvcnRlSGludCA9IG9wdGlvbnM/LnJlY29ydGVGaWVsZEppbXUgPz8gJydcbiAgcmV0dXJuIHdpdGhEYXRhLnNvcnQoXG4gICAgKGEsIGIpID0+IHNjb3JlUm93c0ZvclJlY29ydGUoYiwgcmVjb3J0ZUhpbnQpIC0gc2NvcmVSb3dzRm9yUmVjb3J0ZShhLCByZWNvcnRlSGludClcbiAgKVswXVxufVxuXG4vKiogUXVhbnRvcyB2YWxvcmVzIG51bcOpcmljb3MgcHJlZW5jaGlkb3MgZXhpc3RlbSBuYSBjb2x1bmEgZG8gcmVjb3J0ZS4gKi9cbmZ1bmN0aW9uIHNjb3JlUm93c0ZvclJlY29ydGUgKFxuICByb3dzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPltdLFxuICByZWNvcnRlRmllbGRKaW11OiBzdHJpbmdcbik6IG51bWJlciB7XG4gIGNvbnN0IGtleSA9IGRldGVjdFJlY29ydGVLZXlGcm9tUm93cyhyb3dzLCByZWNvcnRlRmllbGRKaW11KSA/PyByZWNvcnRlRmllbGRKaW11XG4gIGxldCBzY29yZSA9IDBcbiAgZm9yIChjb25zdCByb3cgb2Ygcm93cykge1xuICAgIGlmIChwYXJzZU51bWVyaWNWYWx1ZShyb3dba2V5XSkgIT0gbnVsbCkgc2NvcmUrK1xuICB9XG4gIHJldHVybiBzY29yZVxufVxuXG5jb25zdCBSRVRSWV9ERUxBWVNfTVMgPSBbMCwgNDAwLCA4MDAsIDEyMDAsIDIwMDAsIDMwMDAsIDQ1MDBdXG5cbi8qKlxuICogVGVudGEgdsOhcmlhcyB2ZXplcyBhdMOpIG9idGVyIGxpbmhhcyBjb20gY29sdW5hcyBkZSBkYWRvcyAobsOjbyBzw7MgT0JKRUNUSUQpLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZm9yY2VMb2FkUHJvZGVzUm93cyAoXG4gIGRhdGFTb3VyY2U6IHVua25vd24sXG4gIG9wdGlvbnM6IEZldGNoTGF5ZXJSZWNvcmRzT3B0aW9ucyAmIHsgd2lkZ2V0SWQ/OiBzdHJpbmcgfVxuKTogUHJvbWlzZTxSZWNvcmQ8c3RyaW5nLCB1bmtub3duPltdPiB7XG4gIGZvciAoY29uc3QgZGVsYXkgb2YgUkVUUllfREVMQVlTX01TKSB7XG4gICAgaWYgKGRlbGF5ID4gMCkge1xuICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgZGVsYXkpKVxuICAgIH1cblxuICAgIGNvbnN0IHJvd3MgPSBhd2FpdCBmZXRjaFByb2Rlc0F0dHJpYnV0ZVJvd3MoZGF0YVNvdXJjZSwge1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIGZvcmNlUXVlcnk6IHRydWVcbiAgICB9KVxuXG4gICAgaWYgKCFvcHRpb25zLnllYXJGaWVsZEppbXUgfHwgIW9wdGlvbnMucmVjb3J0ZUZpZWxkSmltdSkge1xuICAgICAgaWYgKGF0dHJpYnV0ZVJvd3NTY29yZShyb3dzKSA+IDEpIHJldHVybiByb3dzXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGNvbnN0IHNlcmllcyA9IGJ1aWxkWWVhclNlcmllc0Zyb21BdHRyaWJ1dGVSb3dzKFxuICAgICAgcm93cyxcbiAgICAgIG9wdGlvbnMueWVhckZpZWxkSmltdSxcbiAgICAgIG9wdGlvbnMucmVjb3J0ZUZpZWxkSmltdSxcbiAgICAgIG9wdGlvbnMuZmllbGRzXG4gICAgKVxuICAgIGlmIChzZXJpZXMubGVuZ3RoID4gMCkgcmV0dXJuIHJvd3NcbiAgfVxuXG4gIHJldHVybiBmZXRjaFByb2Rlc0F0dHJpYnV0ZVJvd3MoZGF0YVNvdXJjZSwgeyAuLi5vcHRpb25zLCBmb3JjZVF1ZXJ5OiB0cnVlIH0pXG59XG5cbi8qKiBDYXJyZWdhIHRvZG9zIG9zIHJlZ2lzdHJvcyBkYSBjYW1hZGEgKHRhYmVsYSBhbm8gw5cgcmVjb3J0ZXMpLiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoTGF5ZXJSZWNvcmRzIChcbiAgZGF0YVNvdXJjZTogdW5rbm93bixcbiAgb3B0aW9ucz86IEZldGNoTGF5ZXJSZWNvcmRzT3B0aW9uc1xuKTogUHJvbWlzZTxEYXRhUmVjb3JkW10+IHtcbiAgY29uc3QgZHMgPSBkYXRhU291cmNlIGFzIFF1ZXJpYWJsZUxheWVyXG4gIGNvbnN0IGNhY2hlZCA9IGRzLmdldEFsbExvYWRlZFJlY29yZHM/LigpID8/IGRzLmdldFJlY29yZHM/LigpID8/IFtdXG4gIGNvbnN0IG91dEZpZWxkcyA9IHJlc29sdmVPdXRGaWVsZHMoXG4gICAgb3B0aW9ucz8ueWVhckZpZWxkSmltdSxcbiAgICBvcHRpb25zPy5yZWNvcnRlRmllbGRKaW11LFxuICAgIG9wdGlvbnM/LmZpZWxkc1xuICApXG5cbiAgaWYgKCFvcHRpb25zPy5mb3JjZVF1ZXJ5ICYmIHJlY29yZHNBcmVSZWFkYWJsZShjYWNoZWQpKSB7XG4gICAgcmV0dXJuIGNhY2hlZFxuICB9XG5cbiAgY29uc3QgcXVlcmllZCA9IGF3YWl0IHF1ZXJ5QWxsUmVjb3Jkcyhkcywgb3V0RmllbGRzLCBvcHRpb25zPy53aWRnZXRJZClcbiAgaWYgKHJlY29yZHNBcmVSZWFkYWJsZShxdWVyaWVkKSkgcmV0dXJuIHF1ZXJpZWRcbiAgaWYgKHF1ZXJpZWQubGVuZ3RoKSByZXR1cm4gcXVlcmllZFxuXG4gIGlmICghb3B0aW9ucz8uZm9yY2VRdWVyeSkgcmV0dXJuIGNhY2hlZFxuICByZXR1cm4gcXVlcmllZC5sZW5ndGggPyBxdWVyaWVkIDogY2FjaGVkXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVJlY29ydGVUb2tlbiAodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiB2YWx1ZVxuICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgLm5vcm1hbGl6ZSgnTkZEJylcbiAgICAucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZywgJycpXG4gICAgLnJlcGxhY2UoL1tcXHMtXSsvZywgJ18nKVxufVxuXG5mdW5jdGlvbiBpc1llYXJOYW1lZEZpZWxkIChmaWVsZDogSU1GaWVsZFNjaGVtYSk6IGJvb2xlYW4ge1xuICBjb25zdCB5ID1cbiAgICBwYXJzZVllYXIoZmllbGQuamltdU5hbWUpID8/XG4gICAgcGFyc2VZZWFyKGZpZWxkLm5hbWUpID8/XG4gICAgcGFyc2VZZWFyKGZpZWxkLmFsaWFzKVxuICByZXR1cm4geSAhPSBudWxsICYmIHkgPj0gMTk4NSAmJiB5IDw9IDIwMzVcbn1cblxuZnVuY3Rpb24gZmluZFJlY29ydGVOYW1lRmllbGQgKGZpZWxkczogSU1GaWVsZFNjaGVtYVtdKTogSU1GaWVsZFNjaGVtYSB8IG51bGwge1xuICBjb25zdCBwYXR0ZXJucyA9IFsncmVjb3J0ZScsICdyZWdpYW8nLCAncmVnacOjbycsICdiaW9tYScsICdub21lJywgJ25hbWUnLCAnbGFiZWwnXVxuICByZXR1cm4gKFxuICAgIGZpZWxkcy5maW5kKChmKSA9PiB7XG4gICAgICBjb25zdCBqID0gZi5qaW11TmFtZT8udG9Mb3dlckNhc2UoKSA/PyAnJ1xuICAgICAgY29uc3QgbiA9IGYubmFtZT8udG9Mb3dlckNhc2UoKSA/PyAnJ1xuICAgICAgcmV0dXJuIHBhdHRlcm5zLnNvbWUoKHApID0+IGouaW5jbHVkZXMocCkgfHwgbi5pbmNsdWRlcyhwKSlcbiAgICB9KSA/PyBudWxsXG4gIClcbn1cblxuLyoqIExheW91dCBhbHRlcm5hdGl2bzogY2FkYSByZWdpc3RybyA9IHJlY29ydGU7IGNvbHVuYXMgbnVtw6lyaWNhcyA9IGFub3MuICovXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRZZWFyU2VyaWVzRnJvbVJlY29ydGVSb3dzIChcbiAgcmVjb3JkczogUmVjb3JkTGlrZVtdLFxuICByZWNvcnRlRmllbGRKaW11OiBzdHJpbmcsXG4gIGZpZWxkczogSU1GaWVsZFNjaGVtYVtdXG4pOiBZZWFyVmFsdWVSb3dbXSB7XG4gIGNvbnN0IHllYXJGaWVsZHMgPSBmaWVsZHMuZmlsdGVyKGlzWWVhck5hbWVkRmllbGQpXG4gIGlmICgheWVhckZpZWxkcy5sZW5ndGgpIHJldHVybiBbXVxuXG4gIGNvbnN0IHRhcmdldCA9IG5vcm1hbGl6ZVJlY29ydGVUb2tlbihyZWNvcnRlRmllbGRKaW11KVxuICBjb25zdCBuYW1lRmllbGQgPSBmaW5kUmVjb3J0ZU5hbWVGaWVsZChmaWVsZHMpXG5cbiAgY29uc3Qgcm93ID1cbiAgICByZWNvcmRzLmZpbmQoKHJlYykgPT4ge1xuICAgICAgaWYgKG5hbWVGaWVsZCkge1xuICAgICAgICBjb25zdCBsYWJlbCA9IHJlYWRSZWNvcmRWYWx1ZShyZWMsIG5hbWVGaWVsZCwgbmFtZUZpZWxkLmppbXVOYW1lKVxuICAgICAgICBpZiAobGFiZWwgIT0gbnVsbCAmJiBub3JtYWxpemVSZWNvcnRlVG9rZW4oU3RyaW5nKGxhYmVsKSkgPT09IHRhcmdldCkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgZiBvZiBmaWVsZHMpIHtcbiAgICAgICAgaWYgKGlzWWVhck5hbWVkRmllbGQoZikgfHwgZi5qaW11TmFtZSA9PT0gcmVjb3J0ZUZpZWxkSmltdSkgY29udGludWVcbiAgICAgICAgY29uc3QgdiA9IHJlYWRSZWNvcmRWYWx1ZShyZWMsIGYsIGYuamltdU5hbWUpXG4gICAgICAgIGlmICh2ICE9IG51bGwgJiYgbm9ybWFsaXplUmVjb3J0ZVRva2VuKFN0cmluZyh2KSkgPT09IHRhcmdldCkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pID8/IG51bGxcblxuICBpZiAoIXJvdykgcmV0dXJuIFtdXG5cbiAgY29uc3Qgc2VyaWVzOiBZZWFyVmFsdWVSb3dbXSA9IFtdXG4gIGZvciAoY29uc3QgeWYgb2YgeWVhckZpZWxkcykge1xuICAgIGNvbnN0IHllYXIgPVxuICAgICAgcGFyc2VZZWFyKHlmLmppbXVOYW1lKSA/PyBwYXJzZVllYXIoeWYubmFtZSkgPz8gcGFyc2VZZWFyKHlmLmFsaWFzKVxuICAgIGNvbnN0IHZhbHVlID0gcGFyc2VOdW1lcmljVmFsdWUocmVhZFJlY29yZFZhbHVlKHJvdywgeWYsIHlmLmppbXVOYW1lKSlcbiAgICBpZiAoeWVhciA9PSBudWxsIHx8IHZhbHVlID09IG51bGwpIGNvbnRpbnVlXG4gICAgc2VyaWVzLnB1c2goeyB5ZWFyLCB2YWx1ZSB9KVxuICB9XG5cbiAgcmV0dXJuIHNlcmllcy5zb3J0KChhLCBiKSA9PiBhLnllYXIgLSBiLnllYXIpXG59XG5cbmZ1bmN0aW9uIGJ1aWxkWWVhclNlcmllc1llYXJSb3dzIChcbiAgcmVjb3JkczogUmVjb3JkTGlrZVtdLFxuICB5ZWFyRmllbGRKaW11OiBzdHJpbmcsXG4gIHJlY29ydGVGaWVsZEppbXU6IHN0cmluZyxcbiAgZmllbGRzPzogSU1GaWVsZFNjaGVtYVtdXG4pOiBZZWFyVmFsdWVSb3dbXSB7XG4gIGNvbnN0IHllYXJGaWVsZCA9IGZpZWxkcz8ubGVuZ3RoXG4gICAgPyBmaW5kRmllbGRCeUppbXVOYW1lKGZpZWxkcywgeWVhckZpZWxkSmltdSlcbiAgICA6IG51bGxcbiAgY29uc3QgcmVjb3J0ZUZpZWxkID0gZmllbGRzPy5sZW5ndGhcbiAgICA/IGZpbmRGaWVsZEJ5SmltdU5hbWUoZmllbGRzLCByZWNvcnRlRmllbGRKaW11KVxuICAgIDogbnVsbFxuICBjb25zdCBzZXJpZXM6IFllYXJWYWx1ZVJvd1tdID0gW11cblxuICBmb3IgKGNvbnN0IHJlYyBvZiByZWNvcmRzKSB7XG4gICAgY29uc3QgeWVhciA9IHBhcnNlWWVhcihcbiAgICAgIHJlYWRSZWNvcmRWYWx1ZShyZWMsIHllYXJGaWVsZCwgeWVhckZpZWxkSmltdSlcbiAgICApXG4gICAgY29uc3QgdmFsdWUgPSBwYXJzZU51bWVyaWNWYWx1ZShcbiAgICAgIHJlYWRSZWNvcmRWYWx1ZShyZWMsIHJlY29ydGVGaWVsZCwgcmVjb3J0ZUZpZWxkSmltdSlcbiAgICApXG4gICAgaWYgKHllYXIgPT0gbnVsbCB8fCB2YWx1ZSA9PSBudWxsKSBjb250aW51ZVxuXG4gICAgc2VyaWVzLnB1c2goeyB5ZWFyLCB2YWx1ZSB9KVxuICB9XG5cbiAgcmV0dXJuIHNlcmllcy5zb3J0KChhLCBiKSA9PiBhLnllYXIgLSBiLnllYXIpXG59XG5cbmZ1bmN0aW9uIGNvbGxlY3RSZWNvcmRBdHRyaWJ1dGVLZXlzIChyZWNvcmRzOiBSZWNvcmRMaWtlW10pOiBzdHJpbmdbXSB7XG4gIGNvbnN0IGtleXMgPSBuZXcgU2V0PHN0cmluZz4oKVxuICBmb3IgKGNvbnN0IHJlYyBvZiByZWNvcmRzLnNsaWNlKDAsIDEwMCkpIHtcbiAgICBPYmplY3Qua2V5cyhnZXRQbGFpbkF0dHJpYnV0ZXMocmVjKSkuZm9yRWFjaCgoaykgPT4ga2V5cy5hZGQoaykpXG4gIH1cbiAgcmV0dXJuIFsuLi5rZXlzXVxufVxuXG5mdW5jdGlvbiByZXNvbHZlS2V5c0Zyb21BdHRyaWJ1dGVOYW1lcyAoXG4gIGtleXM6IHN0cmluZ1tdLFxuICB5ZWFyRmllbGRKaW11OiBzdHJpbmcsXG4gIHJlY29ydGVGaWVsZEppbXU6IHN0cmluZ1xuKTogeyB5ZWFyS2V5OiBzdHJpbmc7IHJlY29ydGVLZXk6IHN0cmluZyB9IHwgbnVsbCB7XG4gIGNvbnN0IHJlY29ydGVLZXkgPSBrZXlzLmZpbmQoXG4gICAgKGspID0+XG4gICAgICBrLnRvTG93ZXJDYXNlKCkgPT09IHJlY29ydGVGaWVsZEppbXUudG9Mb3dlckNhc2UoKSB8fFxuICAgICAgbm9ybWFsaXplUmVjb3J0ZVRva2VuKGspID09PSBub3JtYWxpemVSZWNvcnRlVG9rZW4ocmVjb3J0ZUZpZWxkSmltdSlcbiAgKVxuICBsZXQgeWVhcktleSA9IGtleXMuZmluZCgoaykgPT4gay50b0xvd2VyQ2FzZSgpID09PSB5ZWFyRmllbGRKaW11LnRvTG93ZXJDYXNlKCkpXG4gIGlmICgheWVhcktleSkge1xuICAgIHllYXJLZXkgPSBrZXlzLmZpbmQoKGspID0+XG4gICAgICBZRUFSX05BTUVfUEFUVEVSTlMuc29tZShcbiAgICAgICAgKHApID0+IGsudG9Mb3dlckNhc2UoKSA9PT0gcCB8fCBrLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocClcbiAgICAgIClcbiAgICApXG4gIH1cbiAgaWYgKCF5ZWFyS2V5IHx8ICFyZWNvcnRlS2V5KSByZXR1cm4gbnVsbFxuICByZXR1cm4geyB5ZWFyS2V5LCByZWNvcnRlS2V5IH1cbn1cblxuLyoqIMOabHRpbW8gcmVjdXJzbzogaW5mZXJlIGNvbHVuYXMgcGVsb3Mgbm9tZXMgcmVhaXMgbm9zIGF0cmlidXRvcyByZXRvcm5hZG9zLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkWWVhclNlcmllc0luZmVycmVkIChcbiAgcmVjb3JkczogUmVjb3JkTGlrZVtdLFxuICB5ZWFyRmllbGRKaW11OiBzdHJpbmcsXG4gIHJlY29ydGVGaWVsZEppbXU6IHN0cmluZ1xuKTogWWVhclZhbHVlUm93W10ge1xuICBjb25zdCBrZXlzID0gY29sbGVjdFJlY29yZEF0dHJpYnV0ZUtleXMocmVjb3JkcylcbiAgY29uc3QgcmVzb2x2ZWQgPSByZXNvbHZlS2V5c0Zyb21BdHRyaWJ1dGVOYW1lcyhrZXlzLCB5ZWFyRmllbGRKaW11LCByZWNvcnRlRmllbGRKaW11KVxuICBpZiAoIXJlc29sdmVkKSByZXR1cm4gW11cblxuICBjb25zdCBzZXJpZXM6IFllYXJWYWx1ZVJvd1tdID0gW11cbiAgZm9yIChjb25zdCByZWMgb2YgcmVjb3Jkcykge1xuICAgIGNvbnN0IGF0dHJzID0gZ2V0UGxhaW5BdHRyaWJ1dGVzKHJlYylcbiAgICBjb25zdCB5ZWFyID0gcGFyc2VZZWFyKGF0dHJzW3Jlc29sdmVkLnllYXJLZXldKVxuICAgIGNvbnN0IHZhbHVlID0gcGFyc2VOdW1lcmljVmFsdWUoYXR0cnNbcmVzb2x2ZWQucmVjb3J0ZUtleV0pXG4gICAgaWYgKHllYXIgPT0gbnVsbCB8fCB2YWx1ZSA9PSBudWxsKSBjb250aW51ZVxuICAgIHNlcmllcy5wdXNoKHsgeWVhciwgdmFsdWUgfSlcbiAgfVxuICByZXR1cm4gc2VyaWVzLnNvcnQoKGEsIGIpID0+IGEueWVhciAtIGIueWVhcilcbn1cblxuLyoqIFPDqXJpZSBhIHBhcnRpciBkZSBEYXRhUmVjb3JkcyAoZ2V0RmllbGRWYWx1ZSAvIGdldERhdGFCZWZvcmVNYXBwaW5nKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFllYXJTZXJpZXNGcm9tUmVjb3JkcyAoXG4gIHJlY29yZHM6IERhdGFSZWNvcmRbXSxcbiAgeWVhckZpZWxkSmltdTogc3RyaW5nLFxuICByZWNvcnRlRmllbGRKaW11OiBzdHJpbmcsXG4gIGZpZWxkcz86IElNRmllbGRTY2hlbWFbXVxuKTogWWVhclZhbHVlUm93W10ge1xuICByZXR1cm4gYnVpbGRZZWFyU2VyaWVzKFxuICAgIHJlY29yZHMgYXMgUmVjb3JkTGlrZVtdLFxuICAgIHllYXJGaWVsZEppbXUsXG4gICAgcmVjb3J0ZUZpZWxkSmltdSxcbiAgICBmaWVsZHNcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRZZWFyU2VyaWVzIChcbiAgcmVjb3JkczogUmVjb3JkTGlrZVtdLFxuICB5ZWFyRmllbGRKaW11OiBzdHJpbmcsXG4gIHJlY29ydGVGaWVsZEppbXU6IHN0cmluZyxcbiAgZmllbGRzPzogSU1GaWVsZFNjaGVtYVtdXG4pOiBZZWFyVmFsdWVSb3dbXSB7XG4gIGNvbnN0IHllYXJSb3dzID0gYnVpbGRZZWFyU2VyaWVzWWVhclJvd3MoXG4gICAgcmVjb3JkcyxcbiAgICB5ZWFyRmllbGRKaW11LFxuICAgIHJlY29ydGVGaWVsZEppbXUsXG4gICAgZmllbGRzXG4gIClcbiAgaWYgKHllYXJSb3dzLmxlbmd0aCA+IDApIHJldHVybiB5ZWFyUm93c1xuXG4gIGlmIChmaWVsZHM/Lmxlbmd0aCkge1xuICAgIGNvbnN0IGFsdCA9IGJ1aWxkWWVhclNlcmllc0Zyb21SZWNvcnRlUm93cyhyZWNvcmRzLCByZWNvcnRlRmllbGRKaW11LCBmaWVsZHMpXG4gICAgaWYgKGFsdC5sZW5ndGggPiAwKSByZXR1cm4gYWx0XG4gIH1cblxuICByZXR1cm4gYnVpbGRZZWFyU2VyaWVzSW5mZXJyZWQocmVjb3JkcywgeWVhckZpZWxkSmltdSwgcmVjb3J0ZUZpZWxkSmltdSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFllYXJzUmFuZ2VTdW1tYXJ5IChzZXJpZXM6IFllYXJWYWx1ZVJvd1tdKTogc3RyaW5nIHwgbnVsbCB7XG4gIGlmICghc2VyaWVzLmxlbmd0aCkgcmV0dXJuIG51bGxcbiAgY29uc3QgbWluID0gc2VyaWVzWzBdLnllYXJcbiAgY29uc3QgbWF4ID0gc2VyaWVzW3Nlcmllcy5sZW5ndGggLSAxXS55ZWFyXG4gIGNvbnN0IGNvdW50ID0gc2VyaWVzLmxlbmd0aFxuICBpZiAobWluID09PSBtYXgpIHJldHVybiBgJHttaW59ICgke2NvdW50fSBhbm8pYFxuICByZXR1cm4gYCR7bWlufeKAkyR7bWF4fSAoJHtjb3VudH0gYW5vcylgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1llYXJPdXRPZlR5cGljYWxSYW5nZSAoeWVhcjogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiB5ZWFyIDwgMjAwMSB8fCB5ZWFyID4gMjAyNVxufVxuXG4vKiogVmFyaWHDp8OjbyBwZXJjZW50dWFsIGRvIHZhbG9yIGluaWNpYWwgKGFubyBtYWlzIGFudGlnbykgcGFyYSBvIGZpbmFsIChhbm8gbWFpcyByZWNlbnRlKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYWxjUGVyY2VudFZhcmlhdGlvbiAoXG4gIHZhbHVlSW5pY2lhbDogbnVtYmVyLFxuICB2YWx1ZUZpbmFsOiBudW1iZXJcbik6IG51bWJlciB8IG51bGwge1xuICBpZiAoIU51bWJlci5pc0Zpbml0ZSh2YWx1ZUluaWNpYWwpIHx8ICFOdW1iZXIuaXNGaW5pdGUodmFsdWVGaW5hbCkpIHJldHVybiBudWxsXG4gIGlmICh2YWx1ZUluaWNpYWwgPT09IDApIHJldHVybiBudWxsXG4gIHJldHVybiAoKHZhbHVlRmluYWwgLSB2YWx1ZUluaWNpYWwpIC8gdmFsdWVJbmljaWFsKSAqIDEwMFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UGVyY2VudFZhcmlhdGlvbiAocGN0OiBudW1iZXIpOiBzdHJpbmcge1xuICBjb25zdCBzaWduID0gcGN0ID4gMCA/ICcrJyA6ICcnXG4gIHJldHVybiBgJHtzaWdufSR7cGN0LnRvTG9jYWxlU3RyaW5nKCdwdC1CUicsIHtcbiAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyXG4gIH0pfSVgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZUZvclllYXIgKFxuICBzZXJpZXM6IFllYXJWYWx1ZVJvd1tdLFxuICB5ZWFyOiBudW1iZXJcbik6IG51bWJlciB8IG51bGwge1xuICBjb25zdCByb3cgPSBzZXJpZXMuZmluZCgocikgPT4gci55ZWFyID09PSB5ZWFyKVxuICByZXR1cm4gcm93ICE9IG51bGwgPyByb3cudmFsdWUgOiBudWxsXG59XG5cbi8qKiBTb21hIG9zIHZhbG9yZXMgZG9zIGFub3MgaW5mb3JtYWRvczsgcmV0b3JuYSBudWxsIHNlIGFsZ3VtIGFubyBuw6NvIHRpdmVyIGRhZG8uICovXG5leHBvcnQgZnVuY3Rpb24gc3VtVmFsdWVzRm9yWWVhcnMgKFxuICBzZXJpZXM6IFllYXJWYWx1ZVJvd1tdLFxuICB5ZWFyczogbnVtYmVyW11cbik6IG51bWJlciB8IG51bGwge1xuICBpZiAoIXllYXJzLmxlbmd0aCkgcmV0dXJuIG51bGxcbiAgbGV0IHN1bSA9IDBcbiAgZm9yIChjb25zdCB5ZWFyIG9mIHllYXJzKSB7XG4gICAgY29uc3QgdmFsdWUgPSBnZXRWYWx1ZUZvclllYXIoc2VyaWVzLCB5ZWFyKVxuICAgIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIHN1bSArPSB2YWx1ZVxuICB9XG4gIHJldHVybiBzdW1cbn1cblxuLyoqIEFub3MgZGlzcG9uw612ZWlzIHBhcmEgbyBwZXLDrW9kbyBpbmljaWFsIChhbnRlcyBkbyBwZXLDrW9kbyBmaW5hbCwgc2UgaG91dmVyKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRZZWFyc0FsbG93ZWRGb3JJbmljaWFsIChcbiAgYWxsWWVhcnM6IG51bWJlcltdLFxuICBwZXJpb2RvRmluYWw6IG51bWJlcltdXG4pOiBudW1iZXJbXSB7XG4gIGNvbnN0IGJsb2NrZWQgPSBuZXcgU2V0KHBlcmlvZG9GaW5hbClcbiAgY29uc3QgbWF4RmluYWwgPSBwZXJpb2RvRmluYWwubGVuZ3RoID8gTWF0aC5taW4oLi4ucGVyaW9kb0ZpbmFsKSA6IEluZmluaXR5XG4gIHJldHVybiBhbGxZZWFycy5maWx0ZXIoKHkpID0+ICFibG9ja2VkLmhhcyh5KSAmJiB5IDwgbWF4RmluYWwpXG59XG5cbi8qKiBBbm9zIGRpc3BvbsOtdmVpcyBwYXJhIG8gcGVyw61vZG8gZmluYWwgKGRlcG9pcyBkbyBwZXLDrW9kbyBpbmljaWFsLCBzZSBob3V2ZXIpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFllYXJzQWxsb3dlZEZvckZpbmFsIChcbiAgYWxsWWVhcnM6IG51bWJlcltdLFxuICBwZXJpb2RvSW5pY2lhbDogbnVtYmVyW11cbik6IG51bWJlcltdIHtcbiAgY29uc3QgYmxvY2tlZCA9IG5ldyBTZXQocGVyaW9kb0luaWNpYWwpXG4gIGNvbnN0IG1pbkluaWNpYWwgPSBwZXJpb2RvSW5pY2lhbC5sZW5ndGggPyBNYXRoLm1heCguLi5wZXJpb2RvSW5pY2lhbCkgOiAtSW5maW5pdHlcbiAgcmV0dXJuIGFsbFllYXJzLmZpbHRlcigoeSkgPT4gIWJsb2NrZWQuaGFzKHkpICYmIHkgPiBtaW5JbmljaWFsKVxufVxuXG4vKiogTWFyY2EvZGVzbWFyY2EgdW0gYW5vIG1hbnRlbmRvIGFwZW5hcyBzZXF1w6puY2lhcyBjb25zZWN1dGl2YXMuICovXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlQ29uc2VjdXRpdmVZZWFyIChcbiAgcGVyaW9kOiBudW1iZXJbXSxcbiAgeWVhcjogbnVtYmVyXG4pOiB7IG5leHQ6IG51bWJlcltdOyByZWplY3RlZDogYm9vbGVhbiB9IHtcbiAgaWYgKHBlcmlvZC5pbmNsdWRlcyh5ZWFyKSkge1xuICAgIHJldHVybiB7IG5leHQ6IHBlcmlvZC5maWx0ZXIoKHkpID0+IHkgIT09IHllYXIpLCByZWplY3RlZDogZmFsc2UgfVxuICB9XG4gIGNvbnN0IG5leHQgPSBbLi4ucGVyaW9kLCB5ZWFyXS5zb3J0KChhLCBiKSA9PiBhIC0gYilcbiAgaWYgKCFhcmVDb25zZWN1dGl2ZVllYXJzKG5leHQpKSB7XG4gICAgcmV0dXJuIHsgbmV4dDogcGVyaW9kLCByZWplY3RlZDogdHJ1ZSB9XG4gIH1cbiAgcmV0dXJuIHsgbmV4dCwgcmVqZWN0ZWQ6IGZhbHNlIH1cbn1cblxuLyoqIFZlcmlmaWNhIHNlIG9zIGFub3MgZm9ybWFtIHVtYSBzZXF1w6puY2lhIGNvbnNlY3V0aXZhIChleC46IDIwMTAsIDIwMTEsIDIwMTIpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFyZUNvbnNlY3V0aXZlWWVhcnMgKHllYXJzOiBudW1iZXJbXSk6IGJvb2xlYW4ge1xuICBpZiAoeWVhcnMubGVuZ3RoIDw9IDEpIHJldHVybiB0cnVlXG4gIGNvbnN0IHNvcnRlZCA9IFsuLi55ZWFyc10uc29ydCgoYSwgYikgPT4gYSAtIGIpXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgc29ydGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHNvcnRlZFtpXSAtIHNvcnRlZFtpIC0gMV0gIT09IDEpIHJldHVybiBmYWxzZVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cbi8qKiBSw7N0dWxvIGNvbXBhY3RvIHBhcmEgdW0gb3UgbWFpcyBhbm9zIChleC46IFwiMjAxMFwiIG91IFwiMjAxMOKAkzIwMTIgKDMgYW5vcylcIikuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UGVyaW9kTGFiZWwgKHllYXJzOiBudW1iZXJbXSk6IHN0cmluZyB7XG4gIGNvbnN0IHNvcnRlZCA9IFsuLi55ZWFyc10uc29ydCgoYSwgYikgPT4gYSAtIGIpXG4gIGlmICghc29ydGVkLmxlbmd0aCkgcmV0dXJuICcnXG4gIGlmIChzb3J0ZWQubGVuZ3RoID09PSAxKSByZXR1cm4gU3RyaW5nKHNvcnRlZFswXSlcbiAgcmV0dXJuIGAke3NvcnRlZFswXX3igJMke3NvcnRlZFtzb3J0ZWQubGVuZ3RoIC0gMV19ICgke3NvcnRlZC5sZW5ndGh9IGFub3MpYFxufVxuXG4vKiogSW50ZXJ2YWxvIGRlIGFub3Mgc2VtIGNvbnRhZ2VtIChleC46IFwiMjAxMFwiIG91IFwiMjAxMOKAkzIwMTJcIikg4oCUIHVzbyBlbSByZXN1bHRhZG9zLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFBlcmlvZFJhbmdlTGFiZWwgKHllYXJzOiBudW1iZXJbXSk6IHN0cmluZyB7XG4gIGNvbnN0IHNvcnRlZCA9IFsuLi55ZWFyc10uc29ydCgoYSwgYikgPT4gYSAtIGIpXG4gIGlmICghc29ydGVkLmxlbmd0aCkgcmV0dXJuICcnXG4gIGlmIChzb3J0ZWQubGVuZ3RoID09PSAxKSByZXR1cm4gU3RyaW5nKHNvcnRlZFswXSlcbiAgcmV0dXJuIGAke3NvcnRlZFswXX3igJMke3NvcnRlZFtzb3J0ZWQubGVuZ3RoIC0gMV19YFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFZhcmlhdGlvblJlc3VsdCB7XG4gIHBjdDogbnVtYmVyXG4gIHZhbHVlSW5pY2lhbDogbnVtYmVyXG4gIHZhbHVlRmluYWw6IG51bWJlclxuICB5ZWFyc0luaWNpYWw6IG51bWJlcltdXG4gIHllYXJzRmluYWw6IG51bWJlcltdXG59XG5cbmV4cG9ydCB0eXBlIFBlcmlvZFZhcmlhdGlvbk91dGNvbWUgPVxuICB8IHsgb2s6IHRydWU7IGRhdGE6IFZhcmlhdGlvblJlc3VsdCB9XG4gIHwgeyBvazogZmFsc2U7IG1lc3NhZ2U6IHN0cmluZyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlUGVyaW9kVmFyaWF0aW9uIChcbiAgc2VyaWVzOiBZZWFyVmFsdWVSb3dbXSxcbiAgcGVyaW9kb0luaWNpYWw6IG51bWJlcltdLFxuICBwZXJpb2RvRmluYWw6IG51bWJlcltdXG4pOiBQZXJpb2RWYXJpYXRpb25PdXRjb21lIHtcbiAgY29uc3QgaW5pID0gWy4uLnBlcmlvZG9JbmljaWFsXS5zb3J0KChhLCBiKSA9PiBhIC0gYilcbiAgY29uc3QgZmluID0gWy4uLnBlcmlvZG9GaW5hbF0uc29ydCgoYSwgYikgPT4gYSAtIGIpXG5cbiAgaWYgKCFpbmkubGVuZ3RoIHx8ICFmaW4ubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6ICdTZWxlY2lvbmUgcGVsbyBtZW5vcyB1bSBhbm8gZW0gY2FkYSBwZXLDrW9kby4nXG4gICAgfVxuICB9XG5cbiAgaWYgKGluaS5sZW5ndGggIT09IGZpbi5sZW5ndGgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTpcbiAgICAgICAgJ08gcGVyw61vZG8gaW5pY2lhbCBlIG8gcGVyw61vZG8gZmluYWwgZGV2ZW0gdGVyIGEgbWVzbWEgcXVhbnRpZGFkZSBkZSBhbm9zLidcbiAgICB9XG4gIH1cblxuICBpZiAoIWFyZUNvbnNlY3V0aXZlWWVhcnMoaW5pKSkge1xuICAgIHJldHVybiB7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBtZXNzYWdlOiAnT3MgYW5vcyBkbyBwZXLDrW9kbyBpbmljaWFsIGRldmVtIHNlciBjb25zZWN1dGl2b3MuJ1xuICAgIH1cbiAgfVxuXG4gIGlmICghYXJlQ29uc2VjdXRpdmVZZWFycyhmaW4pKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6ICdPcyBhbm9zIGRvIHBlcsOtb2RvIGZpbmFsIGRldmVtIHNlciBjb25zZWN1dGl2b3MuJ1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGluaVNldCA9IG5ldyBTZXQoaW5pKVxuICBpZiAoZmluLnNvbWUoKHkpID0+IGluaVNldC5oYXMoeSkpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6ICdVbSBhbm8gbsOjbyBwb2RlIHBlcnRlbmNlciBhb3MgZG9pcyBwZXLDrW9kb3MgYW8gbWVzbW8gdGVtcG8uJ1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG1heEluaWNpYWwgPSBpbmlbaW5pLmxlbmd0aCAtIDFdXG4gIGNvbnN0IG1pbkZpbmFsID0gZmluWzBdXG4gIGlmIChtYXhJbmljaWFsID49IG1pbkZpbmFsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6ICdPIHBlcsOtb2RvIGZpbmFsIGRldmUgc2VyIHBvc3RlcmlvciBhbyBwZXLDrW9kbyBpbmljaWFsLidcbiAgICB9XG4gIH1cblxuICBjb25zdCB2YWx1ZUluaWNpYWwgPSBzdW1WYWx1ZXNGb3JZZWFycyhzZXJpZXMsIGluaSlcbiAgY29uc3QgdmFsdWVGaW5hbCA9IHN1bVZhbHVlc0ZvclllYXJzKHNlcmllcywgZmluKVxuXG4gIGlmICh2YWx1ZUluaWNpYWwgPT0gbnVsbCB8fCB2YWx1ZUZpbmFsID09IG51bGwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTpcbiAgICAgICAgJ1VtIG91IG1haXMgYW5vcyBzZWxlY2lvbmFkb3MgbsOjbyBwb3NzdWVtIGRhZG8gcGFyYSBlc3RlIHJlY29ydGUuJ1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHBjdCA9IGNhbGNQZXJjZW50VmFyaWF0aW9uKHZhbHVlSW5pY2lhbCwgdmFsdWVGaW5hbClcbiAgaWYgKHBjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6XG4gICAgICAgICdBIHNvbWEgZG8gcGVyw61vZG8gaW5pY2lhbCDDqSB6ZXJvOyBuw6NvIMOpIHBvc3PDrXZlbCBjYWxjdWxhciBhIHZhcmlhw6fDo28gcGVyY2VudHVhbC4nXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBvazogdHJ1ZSxcbiAgICBkYXRhOiB7XG4gICAgICBwY3QsXG4gICAgICB2YWx1ZUluaWNpYWwsXG4gICAgICB2YWx1ZUZpbmFsLFxuICAgICAgeWVhcnNJbmljaWFsOiBpbmksXG4gICAgICB5ZWFyc0ZpbmFsOiBmaW5cbiAgICB9XG4gIH1cbn1cblxuLyoqIENvbXBhcmHDp8OjbyBlbnRyZSBkb2lzIGFub3Mgw7puaWNvcyAoYXRhbGhvIHBhcmEgcGVyw61vZG9zIGRlIHVtIGFubykuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZVZhcmlhdGlvbiAoXG4gIHNlcmllczogWWVhclZhbHVlUm93W10sXG4gIGFub0luaWNpYWw6IG51bWJlcixcbiAgYW5vRmluYWw6IG51bWJlclxuKTogUGVyaW9kVmFyaWF0aW9uT3V0Y29tZSB7XG4gIHJldHVybiBjb21wdXRlUGVyaW9kVmFyaWF0aW9uKHNlcmllcywgW2Fub0luaWNpYWxdLCBbYW5vRmluYWxdKVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7XHJcbiAgUmVhY3QsXHJcbiAganN4LFxyXG4gIHR5cGUgQWxsV2lkZ2V0UHJvcHMsXHJcbiAgRGF0YVNvdXJjZUNvbXBvbmVudCxcclxuICBRdWVyeVNjb3BlXHJcbn0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBMb2FkaW5nLCBMYWJlbCwgQnV0dG9uIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHR5cGUgeyBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcclxuaW1wb3J0IHtcclxuICBMQUJFTF9QRVJJT0RPX0ZJTkFMLFxyXG4gIExBQkVMX1BFUklPRE9fSU5JQ0lBTCxcclxuICBISU5UX1BFUklPRF9SVUxFUyxcclxuICBNU0dfTk9UX0NPTkZJR1VSRUQsXHJcbiAgTVNHX05PX0RBVEEsXHJcbiAgUExBQ0VIT0xERVJfUEVSSU9ET19GSU5BTCxcclxuICBQTEFDRUhPTERFUl9QRVJJT0RPX0lOSUNJQUwsXHJcbiAgUFJPREVTX1RBQkxFX1FVRVJZXHJcbn0gZnJvbSAnLi4vY29uc3RhbnRzJ1xyXG5pbXBvcnQgeyBWYXJpYXRpb25SZXN1bHRQYW5lbCB9IGZyb20gJy4vY29tcG9uZW50cy92YXJpYXRpb24tcmVzdWx0J1xyXG5pbXBvcnQgeyB1c2VQcm9kZXNTZXJpZXMgfSBmcm9tICcuL2hvb2tzL3VzZS1wcm9kZXMtc2VyaWVzJ1xyXG5pbXBvcnQgeyB1c2VQZXJpb2RTZWxlY3Rpb24gfSBmcm9tICcuL2hvb2tzL3VzZS1wZXJpb2Qtc2VsZWN0aW9uJ1xyXG5pbXBvcnQgeyB3aWRnZXRTdHlsZXMgfSBmcm9tICcuL3N0eWxlcydcclxuaW1wb3J0IHsgWWVhclBlcmlvZFBpY2tlciB9IGZyb20gJy4veWVhci1wZXJpb2QtcGlja2VyJ1xyXG5cclxuY29uc3QgV2lkZ2V0ID0gKHByb3BzOiBBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4pID0+IHtcclxuICBjb25zdCB1c2VEcyA9IHByb3BzLnVzZURhdGFTb3VyY2VzPy5bMF1cclxuICBjb25zdCB5ZWFyRmllbGQgPSBwcm9wcy5jb25maWc/LnllYXJGaWVsZFxyXG4gIGNvbnN0IHJlY29ydGVGaWVsZCA9IHByb3BzLmNvbmZpZz8ucmVjb3J0ZUZpZWxkXHJcblxyXG4gIGNvbnN0IHtcclxuICAgIHNlcmllcyxcclxuICAgIGxvYWRpbmcsXHJcbiAgICBsb2FkaW5nTWVzc2FnZSxcclxuICAgIGVycm9yLFxyXG4gICAgaGFuZGxlRGF0YVNvdXJjZVJlYWR5LFxyXG4gICAgaGFuZGxlRGF0YVNvdXJjZUluZm9DaGFuZ2UsXHJcbiAgICBhcHBseVNjaGVtYSxcclxuICAgIHdhaXRpbmdGb3JMYXllclxyXG4gIH0gPSB1c2VQcm9kZXNTZXJpZXMoeyByZWNvcnRlRmllbGQsIHllYXJGaWVsZCwgd2lkZ2V0SWQ6IHByb3BzLmlkIH0pXHJcblxyXG4gIGNvbnN0IGF2YWlsYWJsZVllYXJzID0gUmVhY3QudXNlTWVtbyhcclxuICAgICgpID0+IHNlcmllcy5tYXAoKHIpID0+IHIueWVhciksXHJcbiAgICBbc2VyaWVzXVxyXG4gIClcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgcGVyaW9kb0luaWNpYWwsXHJcbiAgICBwZXJpb2RvRmluYWwsXHJcbiAgICB5ZWFyc0ZvckluaWNpYWwsXHJcbiAgICB5ZWFyc0ZvckZpbmFsLFxyXG4gICAgaGludEluaWNpYWwsXHJcbiAgICBoaW50RmluYWwsXHJcbiAgICB2YXJpYXRpb24sXHJcbiAgICBoYXNQZXJpb2RTZWxlY3Rpb24sXHJcbiAgICBjbGVhclBlcmlvZFNlbGVjdGlvbixcclxuICAgIGhhbmRsZVBlcmlvZG9JbmljaWFsQ2hhbmdlLFxyXG4gICAgaGFuZGxlUGVyaW9kb0ZpbmFsQ2hhbmdlLFxyXG4gICAgcmVqZWN0UGVyaW9kb0luaWNpYWwsXHJcbiAgICByZWplY3RQZXJpb2RvRmluYWxcclxuICB9ID0gdXNlUGVyaW9kU2VsZWN0aW9uKHNlcmllcywgYXZhaWxhYmxlWWVhcnMsIHJlY29ydGVGaWVsZClcclxuXHJcbiAgY29uc3QgaXNDb25maWd1cmVkID0gQm9vbGVhbih1c2VEcyAmJiByZWNvcnRlRmllbGQpXHJcbiAgY29uc3Qgc2hvd0Zvcm0gPVxyXG4gICAgaXNDb25maWd1cmVkICYmICFsb2FkaW5nICYmICF3YWl0aW5nRm9yTGF5ZXIgJiYgIWVycm9yICYmIHNlcmllcy5sZW5ndGggPiAwXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb21wYXJhZG9yLXByb2RlcyBqaW11LXdpZGdldFwiIGNzcz17d2lkZ2V0U3R5bGVzfT5cclxuICAgICAge3VzZURzICYmIChcclxuICAgICAgICA8RGF0YVNvdXJjZUNvbXBvbmVudFxyXG4gICAgICAgICAgdXNlRGF0YVNvdXJjZT17dXNlRHN9XHJcbiAgICAgICAgICB3aWRnZXRJZD17cHJvcHMuaWR9XHJcbiAgICAgICAgICBxdWVyeT17UFJPREVTX1RBQkxFX1FVRVJZfVxyXG4gICAgICAgICAgcXVlcnlTY29wZT17UXVlcnlTY29wZS5JbkFsbERhdGF9XHJcbiAgICAgICAgICBxdWVyeUFsbFxyXG4gICAgICAgICAgb25EYXRhU291cmNlQ3JlYXRlZD17aGFuZGxlRGF0YVNvdXJjZVJlYWR5fVxyXG4gICAgICAgICAgb25EYXRhU291cmNlU2NoZW1hQ2hhbmdlPXsoc2NoZW1hKSA9PiB7XHJcbiAgICAgICAgICAgIGFwcGx5U2NoZW1hKHNjaGVtYSlcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkRhdGFTb3VyY2VJbmZvQ2hhbmdlPXtoYW5kbGVEYXRhU291cmNlSW5mb0NoYW5nZX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgeyFpc0NvbmZpZ3VyZWQgJiYgPHA+e01TR19OT1RfQ09ORklHVVJFRH08L3A+fVxyXG5cclxuICAgICAge2lzQ29uZmlndXJlZCAmJiAobG9hZGluZyB8fCB3YWl0aW5nRm9yTGF5ZXIpICYmIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPExvYWRpbmcgLz5cclxuICAgICAgICAgIHtsb2FkaW5nTWVzc2FnZSAmJiAoXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbXBhcmFkb3ItaGludFwiPntsb2FkaW5nTWVzc2FnZX08L3A+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAge2lzQ29uZmlndXJlZCAmJiBlcnJvciAmJiA8cCBjbGFzc05hbWU9XCJjb21wYXJhZG9yLWVycm9yXCI+e2Vycm9yfTwvcD59XHJcblxyXG4gICAgICB7aXNDb25maWd1cmVkICYmXHJcbiAgICAgICAgIWxvYWRpbmcgJiZcclxuICAgICAgICAhd2FpdGluZ0ZvckxheWVyICYmXHJcbiAgICAgICAgIWVycm9yICYmXHJcbiAgICAgICAgc2VyaWVzLmxlbmd0aCA9PT0gMCAmJiA8cD57TVNHX05PX0RBVEF9PC9wPn1cclxuXHJcbiAgICAgIHtzaG93Rm9ybSAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYXJhZG9yLWZvcm1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFyYWRvci1maWVsZC1yb3dcIj5cclxuICAgICAgICAgICAgPExhYmVsPntMQUJFTF9QRVJJT0RPX0lOSUNJQUx9PC9MYWJlbD5cclxuICAgICAgICAgICAgPFllYXJQZXJpb2RQaWNrZXJcclxuICAgICAgICAgICAgICBhdmFpbGFibGVZZWFycz17eWVhcnNGb3JJbmljaWFsfVxyXG4gICAgICAgICAgICAgIHNlbGVjdGVkWWVhcnM9e3BlcmlvZG9JbmljaWFsfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtQTEFDRUhPTERFUl9QRVJJT0RPX0lOSUNJQUx9XHJcbiAgICAgICAgICAgICAgaGludD17aGludEluaWNpYWx9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVBlcmlvZG9JbmljaWFsQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIG9uUmVqZWN0ZWRTZWxlY3Rpb249e3JlamVjdFBlcmlvZG9JbmljaWFsfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYXJhZG9yLWZpZWxkLXJvd1wiPlxyXG4gICAgICAgICAgICA8TGFiZWw+e0xBQkVMX1BFUklPRE9fRklOQUx9PC9MYWJlbD5cclxuICAgICAgICAgICAgPFllYXJQZXJpb2RQaWNrZXJcclxuICAgICAgICAgICAgICBhdmFpbGFibGVZZWFycz17eWVhcnNGb3JGaW5hbH1cclxuICAgICAgICAgICAgICBzZWxlY3RlZFllYXJzPXtwZXJpb2RvRmluYWx9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1BMQUNFSE9MREVSX1BFUklPRE9fRklOQUx9XHJcbiAgICAgICAgICAgICAgaGludD17aGludEZpbmFsfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVQZXJpb2RvRmluYWxDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgb25SZWplY3RlZFNlbGVjdGlvbj17cmVqZWN0UGVyaW9kb0ZpbmFsfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhcmFkb3ItaGludFwiPntISU5UX1BFUklPRF9SVUxFU308L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFyYWRvci1hY3Rpb25zXCI+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbXBhcmFkb3ItYnRuLWxpbXBhclwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFoYXNQZXJpb2RTZWxlY3Rpb259XHJcbiAgICAgICAgICAgICAgb25DbGljaz17Y2xlYXJQZXJpb2RTZWxlY3Rpb259XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBMaW1wYXJcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7dmFyaWF0aW9uICE9IG51bGwgJiYgdmFyaWF0aW9uLm9rID09PSBmYWxzZSAmJiAoXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbXBhcmFkb3ItZXJyb3IgY29tcGFyYWRvci1lcnJvci0tYmxvY2tcIj5cclxuICAgICAgICAgICAgICB7dmFyaWF0aW9uLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAge3ZhcmlhdGlvbiAhPSBudWxsICYmIHZhcmlhdGlvbi5vayA9PT0gdHJ1ZSAmJiAoXHJcbiAgICAgICAgICAgIDxWYXJpYXRpb25SZXN1bHRQYW5lbCBkYXRhPXt2YXJpYXRpb24uZGF0YX0gLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdpZGdldFxyXG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9