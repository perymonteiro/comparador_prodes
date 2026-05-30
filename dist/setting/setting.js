System.register(["jimu-core","jimu-ui","jimu-ui/advanced/setting-components","jimu-ui/advanced/data-source-selector"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__, "__esModule", { value: true });
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
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
    var _a;
    if (!rows.length)
        return [];
    const asRecords = rows.map((attributes) => ({ attributes }));
    const standard = buildYearSeries(asRecords, yearFieldJimu, recorteFieldJimu, fields);
    if (standard.length > 0)
        return standard;
    const yearKey = (_a = detectYearKeyFromRows(rows, yearFieldJimu)) !== null && _a !== void 0 ? _a : yearFieldJimu;
    const recorteKey = resolveRecorteKeyFromRows(rows, recorteFieldJimu, fields, yearFieldJimu);
    if (!yearKey || !recorteKey)
        return [];
    return buildSeriesFromKeys(rows, yearKey, recorteKey);
}
/** Resolve coluna do recorte pedido — nunca substitui por outra coluna da tabela. */
function resolveRecorteKeyFromRows(rows, recorteFieldJimu, fields, yearFieldJimu) {
    const fromRows = detectRecorteKeyFromRows(rows, recorteFieldJimu);
    if (fromRows)
        return fromRows;
    if (fields === null || fields === void 0 ? void 0 : fields.length) {
        const keys = resolveAttributeKeys(fields, yearFieldJimu, recorteFieldJimu);
        if (keys === null || keys === void 0 ? void 0 : keys.recorteKey) {
            const sample = rows[0];
            if (sample && keys.recorteKey in sample)
                return keys.recorteKey;
        }
        const field = findFieldByJimuName(fields, recorteFieldJimu);
        if (field) {
            const attrKey = getAttributeKey(field);
            const sample = rows[0];
            if (sample && attrKey in sample)
                return attrKey;
        }
    }
    const sample = rows[0];
    if (sample && recorteFieldJimu in sample)
        return recorteFieldJimu;
    return recorteFieldJimu;
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

/***/ }),

/***/ "jimu-ui/advanced/data-source-selector":
/*!********************************************************!*\
  !*** external "jimu-ui/advanced/data-source-selector" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__;

/***/ }),

/***/ "jimu-ui/advanced/setting-components":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

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
/*!***************************************************************************!*\
  !*** ./your-extensions/widgets/comparador_prodes/src/setting/setting.tsx ***!
  \***************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");
/* harmony import */ var _utils_data_source__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/data-source */ "./your-extensions/widgets/comparador_prodes/src/utils/data-source.ts");
/* harmony import */ var _utils_prodes_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/prodes-table */ "./your-extensions/widgets/comparador_prodes/src/utils/prodes-table.ts");
/** @jsx jsx */
/** @jsxFrag React.Fragment */






const styles = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  &.widget-setting-comparador-prodes {
    width: 100%;
    min-width: 0;
    overflow: visible;
  }
  & * {
    writing-mode: horizontal-tb !important;
    white-space: normal !important;
    word-break: normal !important;
  }
  .jimu-ui_setting-row {
    overflow: visible;
  }
  .jimu-ui_setting-row__label {
    min-width: 0;
    max-width: 100%;
  }
  .jimu-ui_setting-row__content {
    flex: 1 1 100%;
    min-width: 0;
    max-width: 100%;
    overflow: visible;
  }
  .setting-hint {
    font-size: 12px;
    color: #6b6b6b;
    margin-top: 6px;
    line-height: 1.4;
  }
`;
const emptyConfig = () => (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({});
const Setting = (props) => {
    const { id, useDataSources, onSettingChange, config } = props;
    const useDs = useDataSources === null || useDataSources === void 0 ? void 0 : useDataSources[0];
    const yearField = config === null || config === void 0 ? void 0 : config.yearField;
    const recorteField = config === null || config === void 0 ? void 0 : config.recorteField;
    const [fieldList, setFieldList] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState([]);
    const recorteOptions = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => (0,_utils_prodes_table__WEBPACK_IMPORTED_MODULE_5__.getRecorteCandidateFields)(fieldList, yearField), [fieldList, yearField]);
    const applyYearField = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback((fields, currentRecorte) => {
        const detected = (0,_utils_prodes_table__WEBPACK_IMPORTED_MODULE_5__.detectYearField)(fields);
        if (!detected)
            return;
        let next = (config !== null && config !== void 0 ? config : emptyConfig()).set('yearField', detected);
        if (currentRecorte === detected) {
            next = next.without('recorteField');
        }
        if (detected !== yearField || currentRecorte === detected) {
            onSettingChange === null || onSettingChange === void 0 ? void 0 : onSettingChange({ id, config: next });
        }
    }, [config, id, onSettingChange, yearField]);
    const processSchema = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback((schema) => {
        const fields = (0,_utils_prodes_table__WEBPACK_IMPORTED_MODULE_5__.schemaToFieldList)(schema);
        setFieldList(fields);
        applyYearField(fields, recorteField);
    }, [applyYearField, recorteField]);
    const handleDataSourceCreated = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback((ds) => {
        const schema = (0,_utils_data_source__WEBPACK_IMPORTED_MODULE_4__.getDataSourceSchema)(ds);
        if (schema)
            processSchema(schema);
    }, [processSchema]);
    const handleDataSourceChange = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback((newUseDataSources) => {
        onSettingChange === null || onSettingChange === void 0 ? void 0 : onSettingChange({
            id,
            useDataSources: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(newUseDataSources),
            config: (config !== null && config !== void 0 ? config : emptyConfig())
                .without('yearField')
                .without('recorteField')
        });
        setFieldList([]);
    }, [config, id, onSettingChange]);
    const handleRecorteSelect = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback((value) => {
        const base = config !== null && config !== void 0 ? config : emptyConfig();
        onSettingChange === null || onSettingChange === void 0 ? void 0 : onSettingChange({
            id,
            config: value ? base.set('recorteField', value) : base.without('recorteField')
        });
    }, [config, id, onSettingChange]);
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-setting-comparador-prodes jimu-widget-setting w-100", css: styles },
        useDs && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceComponent, { widgetId: id, useDataSource: useDs, onDataSourceCreated: handleDataSourceCreated, onDataSourceSchemaChange: processSchema })),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: "Dados", className: "w-100" },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { label: "Camada PRODES (Feature Layer)", flow: "wrap", level: 1 },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_3__.DataSourceSelector, { widgetId: id, isMultiple: false, mustUseDataSource: true, types: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([jimu_core__WEBPACK_IMPORTED_MODULE_0__.AllDataSourceTypes.FeatureLayer]), useDataSources: useDataSources, onChange: handleDataSourceChange })),
            useDs && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { label: "Recorte geogr\u00E1fico (coluna)", flow: "wrap", level: 1 },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { width: '100%' } },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Select, { size: "sm", className: "w-100", value: recorteField !== null && recorteField !== void 0 ? recorteField : '', placeholder: "Selecione o recorte\u2026", onChange: (_evt, value) => handleRecorteSelect(String(value !== null && value !== void 0 ? value : '')), disabled: recorteOptions.length === 0 },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "" }, ''),
                        recorteOptions.map((f) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { key: f.jimuName, value: f.jimuName, active: recorteField === f.jimuName }, (0,_utils_prodes_table__WEBPACK_IMPORTED_MODULE_5__.formatRecorteLabel)(f))))),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "setting-hint" }, "Escolha uma coluna da tabela (ex.: Cerrado, Amaz\u00F4nia legal, Pantanal). Os anos exibidos na widget s\u00E3o detectados automaticamente a partir dos dados dispon\u00EDveis para o recorte selecionado.")))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Setting);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9kaXN0L3NldHRpbmcvc2V0dGluZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJa0I7QUFPbEIsNEZBQTRGO0FBQ3JGLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxNQUF5QixFQUFXLEVBQUUsQ0FDdEUsTUFBTSxLQUFLLHVEQUFnQixDQUFDLE1BQU07QUFFN0IsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLE1BQXlCLEVBQVcsRUFBRSxDQUN0RSxNQUFNLEtBQUssdURBQWdCLENBQUMsTUFBTTtJQUNsQyxNQUFNLEtBQUssdURBQWdCLENBQUMsT0FBTztBQUU5QixNQUFNLGlCQUFpQixHQUFHLENBQUMsRUFBcUIsRUFBcUIsRUFBRTs7SUFDNUUsSUFBSSxDQUFDLEVBQUU7UUFBRSxPQUFPLElBQUk7SUFDcEIsTUFBTSxJQUFJLEdBQUcsWUFBQyxFQUF5QixFQUFDLGlCQUFpQixrREFBSTtJQUM3RCxPQUFPLElBQUksYUFBSixJQUFJLGNBQUosSUFBSSxHQUFJLEVBQUU7QUFDbkIsQ0FBQztBQUVELDBGQUEwRjtBQUNuRixNQUFNLHNCQUFzQixHQUFHLENBQUMsRUFBcUIsRUFBcUIsRUFBRTtJQUNqRixJQUFJLENBQUMsRUFBRTtRQUFFLE9BQU8sSUFBSTtJQUNwQixNQUFNLENBQUMsR0FBRyxFQUlUO0lBQ0QsSUFDRSxPQUFPLENBQUMsQ0FBQyxLQUFLLEtBQUssVUFBVTtRQUM3QixPQUFPLENBQUMsQ0FBQyxJQUFJLEtBQUssVUFBVTtRQUM1QixPQUFPLENBQUMsQ0FBQyxPQUFPLEtBQUssVUFBVSxFQUMvQixDQUFDO1FBQ0QsT0FBTyxFQUFFO0lBQ1gsQ0FBQztJQUNELE9BQU8saUJBQWlCLENBQUMsRUFBRSxDQUFDO0FBQzlCLENBQUM7QUFFTSxTQUFlLHNCQUFzQixDQUMxQyxFQUFjOztRQUVkLE1BQU0sUUFBUSxHQUFH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LEVBQUMsa0NBQTZCLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUUsQ0FBQztnQkFDbEUsd0RBQUssS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtvQkFDM0IsK0NBQUMsMkNBQU0sSUFDTCxJQUFJLEVBQUMsSUFBSSxFQUNULFNBQVMsRUFBQyxPQUFPLEVBQ2pCLEtBQUssRUFBRSxZQUFZLGFBQVosWUFBWSxjQUFaLFlBQVksR0FBSSxFQUFFLEVBQ3pCLFdBQVcsRUFBQywyQkFBc0IsRUFDbEMsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLEtBQUssYUFBTCxLQUFLLGNBQUwsS0FBSyxHQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQ25FLFFBQVEsRUFBRSxjQUFjLENBQUMsTUFBTSxLQUFLLENBQUM7d0JBRXJDLCtDQUFDLDJDQUFNLElBQUMsS0FBSyxFQUFDLEVBQUUsSUFBRSxFQUFFLENBQVU7d0JBQzdCLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQ3pCLCtDQUFDLDJDQUFNLElBQ0wsR0FBRyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQ2YsS0FBSyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQ2pCLE1BQU0sRUFBRSxZQUFZLEtBQUssQ0FBQyxDQUFDLFFBQVEsSUFFbEMsdUVBQWtCLENBQUMsQ0FBQyxDQUFDLENBQ2YsQ0FDVixDQUFDLENBQ0s7b0JBQ1Qsd0RBQUssU0FBUyxFQUFDLGNBQWMsaU5BSXZCLENBQ0YsQ0FDSyxDQUNkLENBQ2MsQ0FDYixDQUNQO0FBQ0gsQ0FBQztBQUVELGlFQUFlLE9BQU87QUFFZCxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9zcmMvdXRpbHMvZGF0YS1zb3VyY2UudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2NvbXBhcmFkb3JfcHJvZGVzL3NyYy91dGlscy9wcm9kZXMtdGFibGUudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvZGF0YS1zb3VyY2Utc2VsZWN0b3JcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9zcmMvc2V0dGluZy9zZXR0aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICB0eXBlIERhdGFTb3VyY2UsXG4gIHR5cGUgSU1EYXRhU291cmNlU2NoZW1hLFxuICBEYXRhU291cmNlU3RhdHVzXG59IGZyb20gJ2ppbXUtY29yZSdcblxudHlwZSBEYXRhU291cmNlV2l0aE1haW4gPSBEYXRhU291cmNlICYge1xuICBnZXRNYWluRGF0YVNvdXJjZT86ICgpID0+IERhdGFTb3VyY2VcbiAgZ2V0U2NoZW1hPzogKCkgPT4gSU1EYXRhU291cmNlU2NoZW1hXG59XG5cbi8qKiBBbnRlcyBkbyBxdWVyeSBkbyBEYXRhU291cmNlQ29tcG9uZW50IHRlcm1pbmFyLCByZWdpc3Ryb3MgY29zdHVtYW0gdmlyIHNlbSBhdHJpYnV0b3MuICovXG5leHBvcnQgY29uc3QgaXNQcm9kZXNEYXRhUmVhZHkgPSAoc3RhdHVzPzogRGF0YVNvdXJjZVN0YXR1cyk6IGJvb2xlYW4gPT5cbiAgc3RhdHVzID09PSBEYXRhU291cmNlU3RhdHVzLkxvYWRlZFxuXG5leHBvcnQgY29uc3QgaXNRdWVyeWFibGVTdGF0dXMgPSAoc3RhdHVzPzogRGF0YVNvdXJjZVN0YXR1cyk6IGJvb2xlYW4gPT5cbiAgc3RhdHVzID09PSBEYXRhU291cmNlU3RhdHVzLkxvYWRlZCB8fFxuICBzdGF0dXMgPT09IERhdGFTb3VyY2VTdGF0dXMuTG9hZGluZ1xuXG5leHBvcnQgY29uc3QgZ2V0TWFpbkRhdGFTb3VyY2UgPSAoZHM6IERhdGFTb3VyY2UgfCBudWxsKTogRGF0YVNvdXJjZSB8IG51bGwgPT4ge1xuICBpZiAoIWRzKSByZXR1cm4gbnVsbFxuICBjb25zdCBtYWluID0gKGRzIGFzIERhdGFTb3VyY2VXaXRoTWFpbikuZ2V0TWFpbkRhdGFTb3VyY2U/LigpXG4gIHJldHVybiBtYWluID8/IGRzXG59XG5cbi8qKiBVc2EgYSBpbnN0w6JuY2lhIGRhIGNhbWFkYSBzZWxlY2lvbmFkYSAoZXguOiBQbGFuaWxoYTEpIHF1YW5kbyBlbGEgasOhIMOpIGNvbnN1bHTDoXZlbC4gKi9cbmV4cG9ydCBjb25zdCBnZXRRdWVyeWFibGVEYXRhU291cmNlID0gKGRzOiBEYXRhU291cmNlIHwgbnVsbCk6IERhdGFTb3VyY2UgfCBudWxsID0+IHtcbiAgaWYgKCFkcykgcmV0dXJuIG51bGxcbiAgY29uc3QgcSA9IGRzIGFzIERhdGFTb3VyY2VXaXRoTWFpbiAmIHtcbiAgICBxdWVyeT86IChwOiBvYmplY3QpID0+IFByb21pc2U8dW5rbm93bj5cbiAgICBsb2FkPzogKHA6IG9iamVjdCkgPT4gUHJvbWlzZTx1bmtub3duPlxuICAgIGxvYWRBbGw/OiAocDogb2JqZWN0KSA9PiBQcm9taXNlPHVua25vd24+XG4gIH1cbiAgaWYgKFxuICAgIHR5cGVvZiBxLnF1ZXJ5ID09PSAnZnVuY3Rpb24nIHx8XG4gICAgdHlwZW9mIHEubG9hZCA9PT0gJ2Z1bmN0aW9uJyB8fFxuICAgIHR5cGVvZiBxLmxvYWRBbGwgPT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgcmV0dXJuIGRzXG4gIH1cbiAgcmV0dXJuIGdldE1haW5EYXRhU291cmNlKGRzKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZW5zdXJlRGF0YVNvdXJjZVNjaGVtYSAoXG4gIGRzOiBEYXRhU291cmNlXG4pOiBQcm9taXNlPElNRGF0YVNvdXJjZVNjaGVtYSB8IHVuZGVmaW5lZD4ge1xuICBjb25zdCBleGlzdGluZyA9IGdldERhdGFTb3VyY2VTY2hlbWEoZHMpXG4gIGlmIChleGlzdGluZz8uZmllbGRzICYmIE9iamVjdC5rZXlzKGV4aXN0aW5nLmZpZWxkcykubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBleGlzdGluZ1xuICB9XG4gIGNvbnN0IGZldGNoU2NoZW1hID0gKGRzIGFzIERhdGFTb3VyY2VXaXRoTWFpbiAmIHtcbiAgICBmZXRjaFNjaGVtYT86ICgpID0+IFByb21pc2U8SU1EYXRhU291cmNlU2NoZW1hPlxuICB9KS5mZXRjaFNjaGVtYVxuICBpZiAodHlwZW9mIGZldGNoU2NoZW1hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBhd2FpdCBmZXRjaFNjaGVtYS5jYWxsKGRzKVxuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuIGV4aXN0aW5nXG4gICAgfVxuICB9XG4gIHJldHVybiBleGlzdGluZ1xufVxuXG5leHBvcnQgY29uc3QgZ2V0RGF0YVNvdXJjZVNjaGVtYSA9IChcbiAgZHM6IERhdGFTb3VyY2Vcbik6IElNRGF0YVNvdXJjZVNjaGVtYSB8IHVuZGVmaW5lZCA9PlxuICAoZHMgYXMgRGF0YVNvdXJjZVdpdGhNYWluKS5nZXRTY2hlbWE/LigpXG4iLCJpbXBvcnQge1xuICB0eXBlIElNRmllbGRTY2hlbWEsXG4gIHR5cGUgSU1EYXRhU291cmNlU2NoZW1hLFxuICBKaW11RmllbGRUeXBlLFxuICBFc3JpRmllbGRUeXBlLFxuICBRdWVyeVNjb3BlLFxuICB0eXBlIERhdGFSZWNvcmQsXG4gIGVzcmksXG4gIHJlcXVlc3RVdGlsc1xufSBmcm9tICdqaW11LWNvcmUnXG5cbmV4cG9ydCBpbnRlcmZhY2UgWWVhclZhbHVlUm93IHtcbiAgeWVhcjogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaWVsZEF0dHJpYnV0ZUtleXMge1xuICB5ZWFyS2V5OiBzdHJpbmdcbiAgcmVjb3J0ZUtleTogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1lFQVJfRklFTEQgPSAnYW5vJ1xuXG5jb25zdCBZRUFSX05BTUVfUEFUVEVSTlMgPSBbJ2FubycsICd5ZWFyJywgJ3lyJywgJ2V4ZXJjaWNpbycsICdleGVyY8OtY2lvJ11cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHlDZWxsICh2YWx1ZTogdW5rbm93bik6IGJvb2xlYW4ge1xuICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIHRydWVcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUudHJpbSgpID09PSAnJykgcmV0dXJuIHRydWVcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgTnVtYmVyLmlzTmFOKHZhbHVlKSkgcmV0dXJuIHRydWVcbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU51bWVyaWNWYWx1ZSAodmFsdWU6IHVua25vd24pOiBudW1iZXIgfCBudWxsIHtcbiAgaWYgKGlzRW1wdHlDZWxsKHZhbHVlKSkgcmV0dXJuIG51bGxcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgTnVtYmVyLmlzRmluaXRlKHZhbHVlKSkgcmV0dXJuIHZhbHVlXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgcyA9IHZhbHVlLnRyaW0oKVxuICAgIGlmICghcykgcmV0dXJuIG51bGxcbiAgICBpZiAocy5pbmNsdWRlcygnLCcpKSB7XG4gICAgICBjb25zdCBub3JtYWxpemVkID0gcy5yZXBsYWNlKC9cXC4vZywgJycpLnJlcGxhY2UoJywnLCAnLicpXG4gICAgICBjb25zdCBuID0gTnVtYmVyKG5vcm1hbGl6ZWQpXG4gICAgICByZXR1cm4gTnVtYmVyLmlzRmluaXRlKG4pID8gbiA6IG51bGxcbiAgICB9XG4gICAgY29uc3QgbiA9IE51bWJlcihzKVxuICAgIHJldHVybiBOdW1iZXIuaXNGaW5pdGUobikgPyBuIDogbnVsbFxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbi8qKiBDb252ZXJ0ZSBuw7ptZXJvIGV4aWJpZG8gbm8gQXJjR0lTIGVtIHB0LUJSIChleC46IDIuMDAxIOKGkiAyMDAxKS4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZVllYXJOdW1iZXIgKG46IG51bWJlcik6IG51bWJlciB8IG51bGwge1xuICBpZiAoIU51bWJlci5pc0Zpbml0ZShuKSkgcmV0dXJuIG51bGxcblxuICBpZiAobiA+PSAxOTg1ICYmIG4gPD0gMjAzNSAmJiBNYXRoLmFicyhuIC0gTWF0aC5yb3VuZChuKSkgPCAwLjAwMSkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG4pXG4gIH1cblxuICAvLyBUYWJlbGEgUFJPREVTIG5vIFBvcnRhbDogY29sdW5hIEFubyBjb21vIDIuMDAxLCAyLjAxMSAobWlsaGFyIGNvbSBwb250bylcbiAgaWYgKG4gPj0gMS45ODUgJiYgbiA8PSAyLjAzNSkge1xuICAgIGNvbnN0IHkgPSBNYXRoLnJvdW5kKG4gKiAxMDAwKVxuICAgIGlmICh5ID49IDE5ODUgJiYgeSA8PSAyMDM1KSByZXR1cm4geVxuICB9XG5cbiAgY29uc3QgdHJ1bmNhdGVkID0gTWF0aC50cnVuYyhuKVxuICBpZiAodHJ1bmNhdGVkID49IDE5ODUgJiYgdHJ1bmNhdGVkIDw9IDIwMzUpIHJldHVybiB0cnVuY2F0ZWRcbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlWWVhciAodmFsdWU6IHVua25vd24pOiBudW1iZXIgfCBudWxsIHtcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSAmJiAhTnVtYmVyLmlzTmFOKHZhbHVlLmdldFRpbWUoKSkpIHtcbiAgICByZXR1cm4gdmFsdWUuZ2V0RnVsbFllYXIoKVxuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gbm9ybWFsaXplWWVhck51bWJlcih2YWx1ZSlcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IHMgPSB2YWx1ZS50cmltKClcbiAgICBpZiAoIXMpIHJldHVybiBudWxsXG5cbiAgICBjb25zdCBiclRob3VzYW5kcyA9IHMubWF0Y2goL14oXFxkezEsMn0pXFwuKFxcZHszfSkkLylcbiAgICBpZiAoYnJUaG91c2FuZHMpIHtcbiAgICAgIGNvbnN0IHkgPSBOdW1iZXIoYnJUaG91c2FuZHNbMV0gKyBiclRob3VzYW5kc1syXSlcbiAgICAgIGlmICh5ID49IDE5ODUgJiYgeSA8PSAyMDM1KSByZXR1cm4geVxuICAgIH1cblxuICAgIGNvbnN0IG4gPSBOdW1iZXIocy5yZXBsYWNlKCcsJywgJy4nKSlcbiAgICBpZiAoTnVtYmVyLmlzRmluaXRlKG4pKSByZXR1cm4gbm9ybWFsaXplWWVhck51bWJlcihuKVxuXG4gICAgY29uc3QgbSA9IHMubWF0Y2goL1xcYigxOXwyMClcXGR7Mn1cXGIvKVxuICAgIGlmIChtKSByZXR1cm4gTnVtYmVyKG1bMF0pXG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNjaGVtYVRvRmllbGRMaXN0IChzY2hlbWE/OiBJTURhdGFTb3VyY2VTY2hlbWEgfCBudWxsKTogSU1GaWVsZFNjaGVtYVtdIHtcbiAgaWYgKCFzY2hlbWE/LmZpZWxkcykgcmV0dXJuIFtdXG4gIHJldHVybiBPYmplY3Qua2V5cyhzY2hlbWEuZmllbGRzKS5tYXAoKGtleSkgPT4gc2NoZW1hLmZpZWxkc1trZXldKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1lcmljUmVjb3J0ZUZpZWxkIChmaWVsZDogSU1GaWVsZFNjaGVtYSk6IGJvb2xlYW4ge1xuICBpZiAoZmllbGQudHlwZSA9PT0gSmltdUZpZWxkVHlwZS5OdW1iZXIpIHJldHVybiB0cnVlXG4gIGNvbnN0IGVzcmkgPSBmaWVsZC5lc3JpVHlwZVxuICByZXR1cm4gKFxuICAgIGVzcmkgPT09IEVzcmlGaWVsZFR5cGUuRG91YmxlIHx8XG4gICAgZXNyaSA9PT0gRXNyaUZpZWxkVHlwZS5TaW5nbGUgfHxcbiAgICBlc3JpID09PSBFc3JpRmllbGRUeXBlLkludGVnZXIgfHxcbiAgICBlc3JpID09PSBFc3JpRmllbGRUeXBlLlNtYWxsSW50ZWdlclxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVLZXkgKGZpZWxkOiBJTUZpZWxkU2NoZW1hKTogc3RyaW5nIHtcbiAgcmV0dXJuIGZpZWxkLm5hbWUgfHwgZmllbGQuamltdU5hbWVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRldGVjdFllYXJGaWVsZCAoZmllbGRzOiBJTUZpZWxkU2NoZW1hW10pOiBzdHJpbmcgfCBudWxsIHtcbiAgY29uc3QgZXhhY3RBbm8gPSBmaWVsZHMuZmluZChcbiAgICAoZikgPT5cbiAgICAgIGYuamltdU5hbWU/LnRvTG93ZXJDYXNlKCkgPT09ICdhbm8nIHx8XG4gICAgICBmLm5hbWU/LnRvTG93ZXJDYXNlKCkgPT09ICdhbm8nIHx8XG4gICAgICBmLmFsaWFzPy50b0xvd2VyQ2FzZSgpID09PSAnYW5vJ1xuICApXG4gIGlmIChleGFjdEFubykgcmV0dXJuIGV4YWN0QW5vLmppbXVOYW1lXG5cbiAgY29uc3QgY2FuZGlkYXRlcyA9IGZpZWxkcy5maWx0ZXIoXG4gICAgKGYpID0+IGYudHlwZSA9PT0gSmltdUZpZWxkVHlwZS5OdW1iZXIgfHwgZi50eXBlID09PSBKaW11RmllbGRUeXBlLlN0cmluZ1xuICApXG4gIGZvciAoY29uc3QgcGF0IG9mIFlFQVJfTkFNRV9QQVRURVJOUykge1xuICAgIGNvbnN0IGZvdW5kID0gY2FuZGlkYXRlcy5maW5kKFxuICAgICAgKGYpID0+XG4gICAgICAgIGYuamltdU5hbWU/LnRvTG93ZXJDYXNlKCkgPT09IHBhdCB8fFxuICAgICAgICBmLm5hbWU/LnRvTG93ZXJDYXNlKCkgPT09IHBhdCB8fFxuICAgICAgICBmLmFsaWFzPy50b0xvd2VyQ2FzZSgpID09PSBwYXRcbiAgICApXG4gICAgaWYgKGZvdW5kKSByZXR1cm4gZm91bmQuamltdU5hbWVcbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UmVjb3J0ZUxhYmVsIChmaWVsZDogSU1GaWVsZFNjaGVtYSk6IHN0cmluZyB7XG4gIHJldHVybiBmb3JtYXRSZWNvcnRlTGFiZWxGcm9tTmFtZShmaWVsZC5qaW11TmFtZSwgZmllbGQuYWxpYXMpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRSZWNvcnRlTGFiZWxGcm9tTmFtZSAoamltdU5hbWU6IHN0cmluZywgYWxpYXM/OiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoYWxpYXM/LnRyaW0oKSkgcmV0dXJuIGFsaWFzLnRyaW0oKVxuICByZXR1cm4gamltdU5hbWVcbiAgICAuc3BsaXQoJ18nKVxuICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAubWFwKCh3KSA9PiB3LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdy5zbGljZSgxKS50b0xvd2VyQ2FzZSgpKVxuICAgIC5qb2luKCcgJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN5c3RlbUhpZGRlbkZpZWxkTmFtZXMgKGZpZWxkczogSU1GaWVsZFNjaGVtYVtdKTogc3RyaW5nW10ge1xuICByZXR1cm4gZmllbGRzXG4gICAgLmZpbHRlcigoZikgPT4ge1xuICAgICAgY29uc3QgZXNyaSA9IGYuZXNyaVR5cGVcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGVzcmkgPT09IEVzcmlGaWVsZFR5cGUuT0lEIHx8XG4gICAgICAgIGVzcmkgPT09IEVzcmlGaWVsZFR5cGUuR2VvbWV0cnkgfHxcbiAgICAgICAgZXNyaSA9PT0gRXNyaUZpZWxkVHlwZS5HbG9iYWxJRCB8fFxuICAgICAgICBlc3JpID09PSBFc3JpRmllbGRUeXBlLkdVSURcbiAgICAgIClcbiAgICB9KVxuICAgIC5tYXAoKGYpID0+IGYuamltdU5hbWUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWNvcnRlSGlkZGVuRmllbGROYW1lcyAoXG4gIGZpZWxkczogSU1GaWVsZFNjaGVtYVtdLFxuICB5ZWFyRmllbGQ/OiBzdHJpbmdcbik6IHN0cmluZ1tdIHtcbiAgY29uc3QgaGlkZGVuID0gZ2V0U3lzdGVtSGlkZGVuRmllbGROYW1lcyhmaWVsZHMpXG4gIGlmICh5ZWFyRmllbGQgJiYgIWhpZGRlbi5pbmNsdWRlcyh5ZWFyRmllbGQpKSB7XG4gICAgaGlkZGVuLnB1c2goeWVhckZpZWxkKVxuICB9XG4gIHJldHVybiBoaWRkZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlY29ydGVDYW5kaWRhdGVGaWVsZHMgKFxuICBmaWVsZHM6IElNRmllbGRTY2hlbWFbXSxcbiAgeWVhckZpZWxkPzogc3RyaW5nXG4pOiBJTUZpZWxkU2NoZW1hW10ge1xuICBjb25zdCBoaWRkZW4gPSBuZXcgU2V0KGdldFJlY29ydGVIaWRkZW5GaWVsZE5hbWVzKGZpZWxkcywgeWVhckZpZWxkKSlcbiAgcmV0dXJuIGZpZWxkc1xuICAgIC5maWx0ZXIoKGYpID0+IGlzTnVtZXJpY1JlY29ydGVGaWVsZChmKSAmJiAhaGlkZGVuLmhhcyhmLmppbXVOYW1lKSlcbiAgICAuc29ydCgoYSwgYikgPT5cbiAgICAgIGZvcm1hdFJlY29ydGVMYWJlbChhKS5sb2NhbGVDb21wYXJlKGZvcm1hdFJlY29ydGVMYWJlbChiKSwgJ3B0LUJSJylcbiAgICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kRmllbGRCeUppbXVOYW1lIChcbiAgZmllbGRzOiBJTUZpZWxkU2NoZW1hW10sXG4gIGppbXVOYW1lPzogc3RyaW5nXG4pOiBJTUZpZWxkU2NoZW1hIHwgbnVsbCB7XG4gIGlmICghamltdU5hbWUpIHJldHVybiBudWxsXG4gIGNvbnN0IGV4YWN0ID0gZmllbGRzLmZpbmQoKGYpID0+IGYuamltdU5hbWUgPT09IGppbXVOYW1lKVxuICBpZiAoZXhhY3QpIHJldHVybiBleGFjdFxuICBjb25zdCBsb3dlciA9IGppbXVOYW1lLnRvTG93ZXJDYXNlKClcbiAgcmV0dXJuIChcbiAgICBmaWVsZHMuZmluZChcbiAgICAgIChmKSA9PlxuICAgICAgICBmLmppbXVOYW1lPy50b0xvd2VyQ2FzZSgpID09PSBsb3dlciB8fFxuICAgICAgICBmLm5hbWU/LnRvTG93ZXJDYXNlKCkgPT09IGxvd2VyIHx8XG4gICAgICAgIGYuYWxpYXM/LnRvTG93ZXJDYXNlKCkgPT09IGxvd2VyXG4gICAgKSA/PyBudWxsXG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVBdHRyaWJ1dGVLZXlzIChcbiAgZmllbGRzOiBJTUZpZWxkU2NoZW1hW10sXG4gIHllYXJGaWVsZEppbXU/OiBzdHJpbmcsXG4gIHJlY29ydGVGaWVsZEppbXU/OiBzdHJpbmdcbik6IEZpZWxkQXR0cmlidXRlS2V5cyB8IG51bGwge1xuICBpZiAoIXllYXJGaWVsZEppbXUgfHwgIXJlY29ydGVGaWVsZEppbXUpIHJldHVybiBudWxsXG5cbiAgY29uc3QgeWVhckZpZWxkID0gZmluZEZpZWxkQnlKaW11TmFtZShmaWVsZHMsIHllYXJGaWVsZEppbXUpXG4gIGNvbnN0IHJlY29ydGVGaWVsZCA9IGZpbmRGaWVsZEJ5SmltdU5hbWUoZmllbGRzLCByZWNvcnRlRmllbGRKaW11KVxuXG4gIHJldHVybiB7XG4gICAgeWVhcktleTogeWVhckZpZWxkID8gZ2V0QXR0cmlidXRlS2V5KHllYXJGaWVsZCkgOiB5ZWFyRmllbGRKaW11LFxuICAgIHJlY29ydGVLZXk6IHJlY29ydGVGaWVsZCA/IGdldEF0dHJpYnV0ZUtleShyZWNvcnRlRmllbGQpIDogcmVjb3J0ZUZpZWxkSmltdVxuICB9XG59XG5cbnR5cGUgUmVjb3JkTGlrZSA9XG4gIHwgRGF0YVJlY29yZFxuICB8IHtcbiAgICAgIGF0dHJpYnV0ZXM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICAgICAgZmVhdHVyZT86IHsgYXR0cmlidXRlcz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+IH1cbiAgICAgIGdldERhdGE/OiAoKSA9PiB7XG4gICAgICAgIGF0dHJpYnV0ZXM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICAgICAgICBmZWF0dXJlPzogeyBhdHRyaWJ1dGVzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfVxuICAgICAgfVxuICAgICAgZ2V0RmllbGRWYWx1ZT86IChqaW11RmllbGROYW1lOiBzdHJpbmcpID0+IHVua25vd25cbiAgICAgIGdldERhdGVGaWVsZFZhbHVlPzogKGppbXVGaWVsZE5hbWU6IHN0cmluZykgPT4gdW5rbm93blxuICAgICAgZ2V0RGF0YUJlZm9yZU1hcHBpbmc/OiAoKSA9PiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICAgIH1cblxuZnVuY3Rpb24gdG9QbGFpbk9iamVjdCAodmFsdWU6IHVua25vd24pOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB7XG4gIGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JykgcmV0dXJuIHt9XG4gIGNvbnN0IHYgPSB2YWx1ZSBhcyB7XG4gICAgdG9KUz86ICgpID0+IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gICAgYXNNdXRhYmxlPzogKG9wdHM/OiB7IGRlZXA6IGJvb2xlYW4gfSkgPT4gUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgfVxuICBpZiAodHlwZW9mIHYudG9KUyA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHYudG9KUygpXG4gIGlmICh0eXBlb2Ygdi5hc011dGFibGUgPT09ICdmdW5jdGlvbicpIHJldHVybiB2LmFzTXV0YWJsZSh7IGRlZXA6IHRydWUgfSlcbiAgcmV0dXJuIHZhbHVlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+XG59XG5cbmNvbnN0IEdFVF9EQVRBX01FVEFfS0VZUyA9IG5ldyBTZXQoW1xuICAnYXR0cmlidXRlcycsXG4gICdmZWF0dXJlJyxcbiAgJ2dlb21ldHJ5JyxcbiAgJ2NlbnRyb2lkJyxcbiAgJ2FnZ3JlZ2F0ZUdlb21ldHJpZXMnLFxuICAnc3ltYm9sJ1xuXSlcblxuLyoqIEV4dHJhaSBvIGRpY2lvbsOhcmlvIGRlIGF0cmlidXRvcyBkZSB1bSByZWdpc3RybyAodsOhcmlvcyBmb3JtYXRvcyBkbyBKaW11L0FyY0dJUykuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGxhaW5BdHRyaWJ1dGVzIChyZWM6IFJlY29yZExpa2UpOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB7XG4gIGNvbnN0IG1lcmdlZDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fVxuXG4gIGNvbnN0IG1lcmdlID0gKGF0dHJzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pID0+IHtcbiAgICBpZiAoIWF0dHJzKSByZXR1cm5cbiAgICBPYmplY3QuYXNzaWduKG1lcmdlZCwgdG9QbGFpbk9iamVjdChhdHRycykpXG4gIH1cblxuICBpZiAoJ2dldERhdGEnIGluIHJlYyAmJiB0eXBlb2YgcmVjLmdldERhdGEgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCBkYXRhID0gcmVjLmdldERhdGEoKVxuICAgIGNvbnN0IHBsYWluID0gdG9QbGFpbk9iamVjdChkYXRhKVxuICAgIG1lcmdlKHBsYWluLmF0dHJpYnV0ZXMgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCB1bmRlZmluZWQpXG4gICAgbWVyZ2UocGxhaW4uZmVhdHVyZT8uYXR0cmlidXRlcyBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IHVuZGVmaW5lZClcbiAgICAvLyBKaW11IERhdGFSZWNvcmQ6IGdldERhdGEoKSBjb3N0dW1hIHNlciBtYXBhIHBsYW5vIHsgamltdUZpZWxkTmFtZTogdmFsb3IgfVxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHBsYWluKSkge1xuICAgICAgaWYgKEdFVF9EQVRBX01FVEFfS0VZUy5oYXMoa2V5KSkgY29udGludWVcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSBtZXJnZWRba2V5XSA9IHZhbHVlXG4gICAgfVxuICB9XG5cbiAgaWYgKCdmZWF0dXJlJyBpbiByZWMgJiYgcmVjLmZlYXR1cmU/LmF0dHJpYnV0ZXMpIHtcbiAgICBtZXJnZShyZWMuZmVhdHVyZS5hdHRyaWJ1dGVzKVxuICB9XG5cbiAgaWYgKCdhdHRyaWJ1dGVzJyBpbiByZWMgJiYgcmVjLmF0dHJpYnV0ZXMpIHtcbiAgICBtZXJnZShyZWMuYXR0cmlidXRlcylcbiAgfVxuXG4gIGlmICgnZ2V0RGF0YUJlZm9yZU1hcHBpbmcnIGluIHJlYyAmJiB0eXBlb2YgcmVjLmdldERhdGFCZWZvcmVNYXBwaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgbWVyZ2UocmVjLmdldERhdGFCZWZvcmVNYXBwaW5nKCkpXG4gIH1cblxuICByZXR1cm4gbWVyZ2VkXG59XG5cbmZ1bmN0aW9uIGF0dHJpYnV0ZUhhc1VzYWJsZVZhbHVlICh2YWx1ZTogdW5rbm93bik6IGJvb2xlYW4ge1xuICBpZiAoaXNFbXB0eUNlbGwodmFsdWUpKSByZXR1cm4gZmFsc2VcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHJldHVybiBmYWxzZVxuICByZXR1cm4gdHJ1ZVxufVxuXG4vKiogVmVyaWZpY2Egc2UgbyByZWdpc3RybyBleHDDtWUgYXRyaWJ1dG9zIG91IGdldEZpZWxkVmFsdWUgY29tIGRhZG9zIHJlYWlzIChuw6NvIHPDsyBtw6l0b2RvIHZhemlvKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWNvcmRIYXNSZWFkYWJsZURhdGEgKHJlYzogUmVjb3JkTGlrZSk6IGJvb2xlYW4ge1xuICBjb25zdCBhdHRycyA9IGdldFBsYWluQXR0cmlidXRlcyhyZWMpXG4gIGNvbnN0IHVzYWJsZUtleXMgPSBPYmplY3Qua2V5cyhhdHRycykuZmlsdGVyKChrZXkpID0+IHtcbiAgICBpZiAoL14ob2JqZWN0aWR8Z2xvYmFsaWR8c2hhcGV8Z2VvbWV0cnkpJC9pLnRlc3Qoa2V5KSkgcmV0dXJuIGZhbHNlXG4gICAgcmV0dXJuIGF0dHJpYnV0ZUhhc1VzYWJsZVZhbHVlKGF0dHJzW2tleV0pXG4gIH0pXG4gIGlmICh1c2FibGVLZXlzLmxlbmd0aCA+IDApIHJldHVybiB0cnVlXG5cbiAgaWYgKCdnZXRGaWVsZFZhbHVlJyBpbiByZWMgJiYgdHlwZW9mIHJlYy5nZXRGaWVsZFZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3QgcHJvYmVzID0gW1xuICAgICAgJ2FubycsXG4gICAgICAneWVhcicsXG4gICAgICAnQU5PJyxcbiAgICAgICdZZWFyJyxcbiAgICAgICdleGVyY2ljaW8nLFxuICAgICAgJ0V4ZXJjaWNpbydcbiAgICBdXG4gICAgZm9yIChjb25zdCBuYW1lIG9mIHByb2Jlcykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdiA9IHJlYy5nZXRGaWVsZFZhbHVlIShuYW1lKVxuICAgICAgICBpZiAoYXR0cmlidXRlSGFzVXNhYmxlVmFsdWUodikpIHJldHVybiB0cnVlXG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgLy8gdGVudGEgcHLDs3hpbW9cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuLyoqIEzDqiB2YWxvciBwZWxvIEFQSSBkbyBKaW11IChgZ2V0RmllbGRWYWx1ZWApIGUsIGVtIHNlZ3VpZGEsIHBlbG9zIGF0cmlidXRvcyBicnV0b3MuICovXG5leHBvcnQgZnVuY3Rpb24gcmVhZFJlY29yZFZhbHVlIChcbiAgcmVjOiBSZWNvcmRMaWtlLFxuICBmaWVsZD86IElNRmllbGRTY2hlbWEgfCBudWxsLFxuICBmYWxsYmFja0ppbXVOYW1lPzogc3RyaW5nXG4pOiB1bmtub3duIHtcbiAgY29uc3QgbmFtZXM6IHN0cmluZ1tdID0gW11cbiAgaWYgKGZpZWxkPy5qaW11TmFtZSkgbmFtZXMucHVzaChmaWVsZC5qaW11TmFtZSlcbiAgaWYgKGZhbGxiYWNrSmltdU5hbWUpIG5hbWVzLnB1c2goZmFsbGJhY2tKaW11TmFtZSlcbiAgaWYgKGZpZWxkPy5uYW1lKSBuYW1lcy5wdXNoKGZpZWxkLm5hbWUpXG4gIGlmIChmaWVsZD8uYWxpYXMpIG5hbWVzLnB1c2goZmllbGQuYWxpYXMpXG4gIGlmIChmaWVsZCkgbmFtZXMucHVzaChnZXRBdHRyaWJ1dGVLZXkoZmllbGQpKVxuXG4gIGNvbnN0IHVuaXF1ZU5hbWVzID0gWy4uLm5ldyBTZXQobmFtZXMuZmlsdGVyKEJvb2xlYW4pKV1cblxuICBpZiAoJ2dldEZpZWxkVmFsdWUnIGluIHJlYyAmJiB0eXBlb2YgcmVjLmdldEZpZWxkVmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3IgKGNvbnN0IG5hbWUgb2YgdW5pcXVlTmFtZXMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHYgPSByZWMuZ2V0RmllbGRWYWx1ZSEobmFtZSlcbiAgICAgICAgaWYgKHYgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHZcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAvLyB0ZW50YSBwcsOzeGltbyBub21lXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKFxuICAgIGZpZWxkPy5qaW11TmFtZSAmJlxuICAgICdnZXREYXRlRmllbGRWYWx1ZScgaW4gcmVjICYmXG4gICAgdHlwZW9mIHJlYy5nZXREYXRlRmllbGRWYWx1ZSA9PT0gJ2Z1bmN0aW9uJ1xuICApIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdiA9IHJlYy5nZXREYXRlRmllbGRWYWx1ZSEoZmllbGQuamltdU5hbWUpXG4gICAgICBpZiAodiAhPT0gdW5kZWZpbmVkKSByZXR1cm4gdlxuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gaWdub3JhXG4gICAgfVxuICB9XG5cbiAgY29uc3QgYXR0cnMgPSBnZXRQbGFpbkF0dHJpYnV0ZXMocmVjKVxuICBjb25zdCBmcm9tTWFwcGVkID0gcmVhZEF0dHJpYnV0ZUZsZXhpYmxlKGF0dHJzLCBmaWVsZCwgZmFsbGJhY2tKaW11TmFtZSlcbiAgaWYgKGZyb21NYXBwZWQgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGZyb21NYXBwZWRcblxuICBpZiAoJ2dldERhdGFCZWZvcmVNYXBwaW5nJyBpbiByZWMgJiYgdHlwZW9mIHJlYy5nZXREYXRhQmVmb3JlTWFwcGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IHJhdyA9IHRvUGxhaW5PYmplY3QocmVjLmdldERhdGFCZWZvcmVNYXBwaW5nKCkpXG4gICAgcmV0dXJuIHJlYWRBdHRyaWJ1dGVGbGV4aWJsZShyYXcsIGZpZWxkLCBmYWxsYmFja0ppbXVOYW1lKVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiByZWFkQXR0cmlidXRlIChcbiAgYXR0cnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuICBwcmltYXJ5S2V5OiBzdHJpbmcsXG4gIGZhbGxiYWNrS2V5Pzogc3RyaW5nXG4pOiB1bmtub3duIHtcbiAgaWYgKHByaW1hcnlLZXkgaW4gYXR0cnMpIHJldHVybiBhdHRyc1twcmltYXJ5S2V5XVxuICBpZiAoZmFsbGJhY2tLZXkgJiYgZmFsbGJhY2tLZXkgIT09IHByaW1hcnlLZXkgJiYgZmFsbGJhY2tLZXkgaW4gYXR0cnMpIHtcbiAgICByZXR1cm4gYXR0cnNbZmFsbGJhY2tLZXldXG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG4vKiogVGVudGEgamltdU5hbWUsIG5hbWUsIGFsaWFzIGUgY29ycmVzcG9uZMOqbmNpYSBzZW0gZGlmZXJlbmNpYXIgbWFpw7pzY3VsYXMvbWluw7pzY3VsYXMuICovXG5leHBvcnQgZnVuY3Rpb24gcmVhZEF0dHJpYnV0ZUZsZXhpYmxlIChcbiAgYXR0cnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuICBmaWVsZD86IElNRmllbGRTY2hlbWEgfCBudWxsLFxuICBmYWxsYmFja0ppbXVOYW1lPzogc3RyaW5nXG4pOiB1bmtub3duIHtcbiAgY29uc3QgY2FuZGlkYXRlcyA9IG5ldyBTZXQ8c3RyaW5nPigpXG4gIGlmIChmaWVsZCkge1xuICAgIGlmIChmaWVsZC5qaW11TmFtZSkgY2FuZGlkYXRlcy5hZGQoZmllbGQuamltdU5hbWUpXG4gICAgaWYgKGZpZWxkLm5hbWUpIGNhbmRpZGF0ZXMuYWRkKGZpZWxkLm5hbWUpXG4gICAgaWYgKGZpZWxkLmFsaWFzKSBjYW5kaWRhdGVzLmFkZChmaWVsZC5hbGlhcylcbiAgICBjYW5kaWRhdGVzLmFkZChnZXRBdHRyaWJ1dGVLZXkoZmllbGQpKVxuICB9XG4gIGlmIChmYWxsYmFja0ppbXVOYW1lKSBjYW5kaWRhdGVzLmFkZChmYWxsYmFja0ppbXVOYW1lKVxuXG4gIGZvciAoY29uc3Qga2V5IG9mIGNhbmRpZGF0ZXMpIHtcbiAgICBjb25zdCB2ID0gcmVhZEF0dHJpYnV0ZShhdHRycywga2V5KVxuICAgIGlmICh2ICE9PSB1bmRlZmluZWQpIHJldHVybiB2XG4gIH1cblxuICBjb25zdCBhdHRyS2V5cyA9IE9iamVjdC5rZXlzKGF0dHJzKVxuICBmb3IgKGNvbnN0IGtleSBvZiBjYW5kaWRhdGVzKSB7XG4gICAgY29uc3QgZm91bmQgPSBhdHRyS2V5cy5maW5kKChrKSA9PiBrLnRvTG93ZXJDYXNlKCkgPT09IGtleS50b0xvd2VyQ2FzZSgpKVxuICAgIGlmIChmb3VuZCAhPSBudWxsKSByZXR1cm4gYXR0cnNbZm91bmRdXG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG50eXBlIFF1ZXJpYWJsZUxheWVyID0ge1xuICBxdWVyeT86IChxOiBvYmplY3QsIG9wdGlvbnM/OiB7IHNjb3BlPzogUXVlcnlTY29wZSB9KSA9PiBQcm9taXNlPHsgcmVjb3Jkcz86IERhdGFSZWNvcmRbXSB9PlxuICBsb2FkPzogKHE6IG9iamVjdCwgb3B0aW9ucz86IHsgc2NvcGU/OiBRdWVyeVNjb3BlIH0pID0+IFByb21pc2U8RGF0YVJlY29yZFtdPlxuICBsb2FkQWxsPzogKFxuICAgIHE6IG9iamVjdCxcbiAgICBzaWduYWw/OiBBYm9ydFNpZ25hbCxcbiAgICBwcm9ncmVzc0NhbGxiYWNrPzogdW5rbm93bixcbiAgICBvcHRpb25zPzogeyBzY29wZT86IFF1ZXJ5U2NvcGUgfVxuICApID0+IFByb21pc2U8RGF0YVJlY29yZFtdPlxuICBnZXRBbGxMb2FkZWRSZWNvcmRzPzogKCkgPT4gRGF0YVJlY29yZFtdXG4gIGdldFJlY29yZHM/OiAoKSA9PiBEYXRhUmVjb3JkW11cbiAgbGF5ZXI/OiB7IHF1ZXJ5RmVhdHVyZXM/OiAocTogb2JqZWN0KSA9PiBQcm9taXNlPHsgZmVhdHVyZXM/OiB1bmtub3duW10gfT4gfVxuICBidWlsZFJlY29yZD86IChmZWF0dXJlOiB1bmtub3duKSA9PiBEYXRhUmVjb3JkXG59XG5cbmNvbnN0IGJ1aWxkUXVlcnlPcHRpb25zID0gKHdpZGdldElkPzogc3RyaW5nKSA9PiAoe1xuICBzY29wZTogUXVlcnlTY29wZS5JbkFsbERhdGEsXG4gIC4uLih3aWRnZXRJZCA/IHsgd2lkZ2V0SWQgfSA6IHt9KVxufSlcblxuY29uc3QgYnVpbGRRdWVyeVBhcmFtcyA9IChcbiAgb3V0RmllbGRzOiBzdHJpbmdbXSA9IFsnKiddLFxuICBkaXNhYmxlQ2xpZW50UXVlcnkgPSBmYWxzZVxuKSA9PiAoe1xuICB3aGVyZTogJzE9MScsXG4gIG91dEZpZWxkcyxcbiAgcmV0dXJuR2VvbWV0cnk6IGZhbHNlLFxuICBwYWdlU2l6ZTogMjAwMCxcbiAgLi4uKGRpc2FibGVDbGllbnRRdWVyeSA/IHsgZGlzYWJsZUNsaWVudFF1ZXJ5OiB0cnVlIH0gOiB7fSlcbn0pXG5cbmZ1bmN0aW9uIHJlY29yZHNBcmVSZWFkYWJsZSAocmVjb3JkczogRGF0YVJlY29yZFtdKTogYm9vbGVhbiB7XG4gIHJldHVybiByZWNvcmRzLmxlbmd0aCA+IDAgJiYgcmVjb3Jkcy5zb21lKHJlY29yZEhhc1JlYWRhYmxlRGF0YSlcbn1cblxuYXN5bmMgZnVuY3Rpb24gcXVlcnlWaWFKc2FwaUxheWVyIChkczogUXVlcmlhYmxlTGF5ZXIpOiBQcm9taXNlPERhdGFSZWNvcmRbXT4ge1xuICBjb25zdCBsYXllciA9IGRzLmxheWVyIGFzIHtcbiAgICBxdWVyeUZlYXR1cmVzPzogKHE6IG9iamVjdCkgPT4gUHJvbWlzZTx7IGZlYXR1cmVzPzogdW5rbm93bltdIH0+XG4gICAgcXVlcnk/OiAocTogb2JqZWN0KSA9PiBQcm9taXNlPHsgZmVhdHVyZXM/OiB1bmtub3duW10gfT5cbiAgfVxuICBpZiAoIWxheWVyIHx8IHR5cGVvZiBkcy5idWlsZFJlY29yZCAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIFtdXG5cbiAgY29uc3QgcSA9IHtcbiAgICB3aGVyZTogJzE9MScsXG4gICAgb3V0RmllbGRzOiBbJyonXSxcbiAgICByZXR1cm5HZW9tZXRyeTogZmFsc2UsXG4gICAgbnVtOiAyMDAwXG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9XG4gICAgICB0eXBlb2YgbGF5ZXIucXVlcnlGZWF0dXJlcyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IGF3YWl0IGxheWVyLnF1ZXJ5RmVhdHVyZXMocSlcbiAgICAgICAgOiB0eXBlb2YgbGF5ZXIucXVlcnkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICA/IGF3YWl0IGxheWVyLnF1ZXJ5KHEpXG4gICAgICAgICAgOiBudWxsXG4gICAgY29uc3QgZmVhdHVyZXMgPSByZXN1bHQ/LmZlYXR1cmVzID8/IFtdXG4gICAgcmV0dXJuIGZlYXR1cmVzLm1hcCgoZikgPT4gZHMuYnVpbGRSZWNvcmQhKGYpKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gW11cbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaFZpYUFyY2dpc1Jlc3QgKFxuICBkczogeyB1cmw/OiBzdHJpbmcgfVxuKTogUHJvbWlzZTxSZWNvcmQ8c3RyaW5nLCB1bmtub3duPltdPiB7XG4gIGlmICghZHMudXJsKSByZXR1cm4gW11cbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBlc3JpLnJlc3RGZWF0dXJlU2VydmljZS5xdWVyeUZlYXR1cmVzKHtcbiAgICAgIHVybDogZHMudXJsLFxuICAgICAgd2hlcmU6ICcxPTEnLFxuICAgICAgb3V0RmllbGRzOiBbJyonXSxcbiAgICAgIHJldHVybkdlb21ldHJ5OiBmYWxzZVxuICAgIH0pXG4gICAgY29uc3QgZmVhdHVyZXMgPVxuICAgICAgcmVzICYmIHR5cGVvZiByZXMgPT09ICdvYmplY3QnICYmICdmZWF0dXJlcycgaW4gcmVzXG4gICAgICAgID8gKHJlcyBhcyB7IGZlYXR1cmVzPzogQXJyYXk8eyBhdHRyaWJ1dGVzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfT4gfSlcbiAgICAgICAgICAgIC5mZWF0dXJlcyA/PyBbXVxuICAgICAgICA6IFtdXG4gICAgcmV0dXJuIGZlYXR1cmVzXG4gICAgICAubWFwKChmKSA9PiAoeyAuLi4oZi5hdHRyaWJ1dGVzID8/IHt9KSB9KSlcbiAgICAgIC5maWx0ZXIoKGEpID0+IE9iamVjdC5rZXlzKGEpLmxlbmd0aCA+IDApXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBbXVxuICB9XG59XG5cbi8qKiBDb25zdWx0YSBSRVNUIGNvbSBjcmVkZW5jaWFsIGRvIFBvcnRhbCAoRW50ZXJwcmlzZSkuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hWaWFQb3J0YWxSZXN0IChcbiAgZHM6IHsgdXJsPzogc3RyaW5nIH1cbik6IFByb21pc2U8UmVjb3JkPHN0cmluZywgdW5rbm93bj5bXT4ge1xuICBpZiAoIWRzLnVybCkgcmV0dXJuIFtdXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgcmVxdWVzdFV0aWxzLnJlcXVlc3RXcmFwcGVyKGRzLnVybCwgKHNlc3Npb24pID0+XG4gICAgICBlc3JpLnJlc3RGZWF0dXJlU2VydmljZS5xdWVyeUZlYXR1cmVzKHtcbiAgICAgICAgdXJsOiBkcy51cmwsXG4gICAgICAgIHdoZXJlOiAnMT0xJyxcbiAgICAgICAgb3V0RmllbGRzOiBbJyonXSxcbiAgICAgICAgcmV0dXJuR2VvbWV0cnk6IGZhbHNlLFxuICAgICAgICBhdXRoZW50aWNhdGlvbjogc2Vzc2lvblxuICAgICAgfSlcbiAgICApXG4gICAgY29uc3QgZmVhdHVyZXMgPVxuICAgICAgcmVzICYmIHR5cGVvZiByZXMgPT09ICdvYmplY3QnICYmICdmZWF0dXJlcycgaW4gcmVzXG4gICAgICAgID8gKHJlcyBhcyB7IGZlYXR1cmVzPzogQXJyYXk8eyBhdHRyaWJ1dGVzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfT4gfSlcbiAgICAgICAgICAgIC5mZWF0dXJlcyA/PyBbXVxuICAgICAgICA6IFtdXG4gICAgcmV0dXJuIGZlYXR1cmVzXG4gICAgICAubWFwKChmKSA9PiAoeyAuLi4oZi5hdHRyaWJ1dGVzID8/IHt9KSB9KSlcbiAgICAgIC5maWx0ZXIoKGEpID0+IE9iamVjdC5rZXlzKGEpLmxlbmd0aCA+IDApXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmZXRjaFZpYUFyY2dpc1Jlc3QoZHMpXG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcnVuUXVlcnlhYmxlTWV0aG9kcyAoXG4gIGRzOiBRdWVyaWFibGVMYXllcixcbiAgb3V0RmllbGRzOiBzdHJpbmdbXSxcbiAgZGlzYWJsZUNsaWVudFF1ZXJ5OiBib29sZWFuLFxuICB3aWRnZXRJZD86IHN0cmluZ1xuKTogUHJvbWlzZTxEYXRhUmVjb3JkW10+IHtcbiAgY29uc3QgcGFyYW1zID0gYnVpbGRRdWVyeVBhcmFtcyhvdXRGaWVsZHMsIGRpc2FibGVDbGllbnRRdWVyeSlcbiAgY29uc3QgcXVlcnlPcHRpb25zID0gYnVpbGRRdWVyeU9wdGlvbnMod2lkZ2V0SWQpXG5cbiAgaWYgKHR5cGVvZiBkcz8ubG9hZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZWNvcmRzID0gYXdhaXQgZHMubG9hZChwYXJhbXMsIHF1ZXJ5T3B0aW9ucylcbiAgICAgIGlmIChyZWNvcmRzPy5sZW5ndGggJiYgcmVjb3Jkc0FyZVJlYWRhYmxlKHJlY29yZHMpKSByZXR1cm4gcmVjb3Jkc1xuICAgICAgaWYgKHJlY29yZHM/Lmxlbmd0aCAmJiAhZGlzYWJsZUNsaWVudFF1ZXJ5KSByZXR1cm4gcmVjb3Jkc1xuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gdGVudGEgcHLDs3hpbW8gbcOpdG9kb1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgZHM/LmxvYWRBbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IGRzLmxvYWRBbGwocGFyYW1zLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgcXVlcnlPcHRpb25zKVxuICAgICAgaWYgKHJlY29yZHM/Lmxlbmd0aCAmJiByZWNvcmRzQXJlUmVhZGFibGUocmVjb3JkcykpIHJldHVybiByZWNvcmRzXG4gICAgICBpZiAocmVjb3Jkcz8ubGVuZ3RoICYmICFkaXNhYmxlQ2xpZW50UXVlcnkpIHJldHVybiByZWNvcmRzXG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyB0ZW50YSBxdWVyeSBhYmFpeG9cbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIGRzPy5xdWVyeSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkcy5xdWVyeShwYXJhbXMsIHF1ZXJ5T3B0aW9ucylcbiAgICAgIGNvbnN0IHJlY29yZHMgPSByZXN1bHQ/LnJlY29yZHMgPz8gW11cbiAgICAgIGlmIChyZWNvcmRzLmxlbmd0aCAmJiByZWNvcmRzQXJlUmVhZGFibGUocmVjb3JkcykpIHJldHVybiByZWNvcmRzXG4gICAgICBpZiAocmVjb3Jkcy5sZW5ndGggJiYgIWRpc2FibGVDbGllbnRRdWVyeSkgcmV0dXJuIHJlY29yZHNcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIHRlbnRhIEpTIEFQSVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHZpYUxheWVyID0gYXdhaXQgcXVlcnlWaWFKc2FwaUxheWVyKGRzKVxuICBpZiAodmlhTGF5ZXIubGVuZ3RoICYmIHJlY29yZHNBcmVSZWFkYWJsZSh2aWFMYXllcikpIHJldHVybiB2aWFMYXllclxuICBpZiAodmlhTGF5ZXIubGVuZ3RoICYmICFkaXNhYmxlQ2xpZW50UXVlcnkpIHJldHVybiB2aWFMYXllclxuXG4gIHJldHVybiBbXVxufVxuXG5hc3luYyBmdW5jdGlvbiBxdWVyeUFsbFJlY29yZHMgKFxuICBkczogUXVlcmlhYmxlTGF5ZXIsXG4gIG91dEZpZWxkczogc3RyaW5nW10gPSBbJyonXSxcbiAgd2lkZ2V0SWQ/OiBzdHJpbmdcbik6IFByb21pc2U8RGF0YVJlY29yZFtdPiB7XG4gIGxldCByZWNvcmRzID0gYXdhaXQgcnVuUXVlcnlhYmxlTWV0aG9kcyhkcywgb3V0RmllbGRzLCBmYWxzZSwgd2lkZ2V0SWQpXG4gIGlmIChyZWNvcmRzQXJlUmVhZGFibGUocmVjb3JkcykpIHJldHVybiByZWNvcmRzXG5cbiAgcmVjb3JkcyA9IGF3YWl0IHJ1blF1ZXJ5YWJsZU1ldGhvZHMoZHMsIG91dEZpZWxkcywgdHJ1ZSwgd2lkZ2V0SWQpXG4gIGlmIChyZWNvcmRzQXJlUmVhZGFibGUocmVjb3JkcykpIHJldHVybiByZWNvcmRzXG5cbiAgcmV0dXJuIHJlY29yZHNcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGZXRjaExheWVyUmVjb3Jkc09wdGlvbnMge1xuICAvKiogSWdub3JhIGNhY2hlIGRvIG1hcGEgZSBmb3LDp2EgcXVlcnkvbG9hZEFsbCAow7p0aWwgbm8gRW50ZXJwcmlzZSkuICovXG4gIGZvcmNlUXVlcnk/OiBib29sZWFuXG4gIHllYXJGaWVsZEppbXU/OiBzdHJpbmdcbiAgcmVjb3J0ZUZpZWxkSmltdT86IHN0cmluZ1xuICBmaWVsZHM/OiBJTUZpZWxkU2NoZW1hW11cbiAgLyoqIElEIGRhIHdpZGdldCBwYXJhIGF1dGVudGljYcOnw6NvIG5hIGNvbnN1bHRhIEppbXUuICovXG4gIHdpZGdldElkPzogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIHJlc29sdmVPdXRGaWVsZHMgKFxuICB5ZWFyRmllbGRKaW11Pzogc3RyaW5nLFxuICByZWNvcnRlRmllbGRKaW11Pzogc3RyaW5nLFxuICBmaWVsZHM/OiBJTUZpZWxkU2NoZW1hW11cbik6IHN0cmluZ1tdIHtcbiAgaWYgKCFmaWVsZHM/Lmxlbmd0aCB8fCAheWVhckZpZWxkSmltdSB8fCAhcmVjb3J0ZUZpZWxkSmltdSkgcmV0dXJuIFsnKiddXG4gIGNvbnN0IGtleXMgPSByZXNvbHZlQXR0cmlidXRlS2V5cyhmaWVsZHMsIHllYXJGaWVsZEppbXUsIHJlY29ydGVGaWVsZEppbXUpXG4gIGlmICgha2V5cykgcmV0dXJuIFsnKiddXG4gIHJldHVybiBbJyonLCBrZXlzLnllYXJLZXksIGtleXMucmVjb3J0ZUtleV1cbn1cblxuLyoqIERldGVjdGEgY29sdW5hIGRlIGFubyBwZWxvcyB2YWxvcmVzIHJlYWlzIChleC46IEFubyA9IDIuMDAxLCAyMDAxKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXRlY3RZZWFyS2V5RnJvbVJvd3MgKFxuICByb3dzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPltdLFxuICBoaW50Pzogc3RyaW5nXG4pOiBzdHJpbmcgfCBudWxsIHtcbiAgaWYgKCFyb3dzLmxlbmd0aCkgcmV0dXJuIG51bGxcblxuICBjb25zdCBrZXlzID0gbmV3IFNldDxzdHJpbmc+KClcbiAgZm9yIChjb25zdCByb3cgb2Ygcm93cy5zbGljZSgwLCA1MCkpIHtcbiAgICBPYmplY3Qua2V5cyhyb3cpLmZvckVhY2goKGspID0+IGtleXMuYWRkKGspKVxuICB9XG5cbiAgaWYgKGhpbnQpIHtcbiAgICBjb25zdCBtYXRjaCA9IFsuLi5rZXlzXS5maW5kKChrKSA9PiBrLnRvTG93ZXJDYXNlKCkgPT09IGhpbnQudG9Mb3dlckNhc2UoKSlcbiAgICBpZiAobWF0Y2gpIHJldHVybiBtYXRjaFxuICB9XG5cbiAgbGV0IGJlc3RLZXk6IHN0cmluZyB8IG51bGwgPSBudWxsXG4gIGxldCBiZXN0U2NvcmUgPSAwXG4gIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICBpZiAoL14ob2JqZWN0aWR8Z2xvYmFsaWR8c2hhcGV8ZmlkKSQvaS50ZXN0KGtleSkpIGNvbnRpbnVlXG4gICAgbGV0IHNjb3JlID0gMFxuICAgIGZvciAoY29uc3Qgcm93IG9mIHJvd3MpIHtcbiAgICAgIGNvbnN0IHkgPSBwYXJzZVllYXIocm93W2tleV0pXG4gICAgICBpZiAoeSAhPSBudWxsICYmIHkgPj0gMTk4NSAmJiB5IDw9IDIwMzUpIHNjb3JlKytcbiAgICB9XG4gICAgaWYgKHNjb3JlID4gYmVzdFNjb3JlKSB7XG4gICAgICBiZXN0U2NvcmUgPSBzY29yZVxuICAgICAgYmVzdEtleSA9IGtleVxuICAgIH1cbiAgfVxuICByZXR1cm4gYmVzdFNjb3JlID4gMCA/IGJlc3RLZXkgOiBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXRlY3RSZWNvcnRlS2V5RnJvbVJvd3MgKFxuICByb3dzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPltdLFxuICByZWNvcnRlSGludDogc3RyaW5nXG4pOiBzdHJpbmcgfCBudWxsIHtcbiAgaWYgKCFyb3dzLmxlbmd0aCkgcmV0dXJuIG51bGxcbiAgY29uc3Qga2V5cyA9IG5ldyBTZXQ8c3RyaW5nPigpXG4gIGZvciAoY29uc3Qgcm93IG9mIHJvd3Muc2xpY2UoMCwgNSkpIHtcbiAgICBPYmplY3Qua2V5cyhyb3cpLmZvckVhY2goKGspID0+IGtleXMuYWRkKGspKVxuICB9XG4gIGNvbnN0IGV4YWN0ID0gWy4uLmtleXNdLmZpbmQoXG4gICAgKGspID0+IGsudG9Mb3dlckNhc2UoKSA9PT0gcmVjb3J0ZUhpbnQudG9Mb3dlckNhc2UoKVxuICApXG4gIGlmIChleGFjdCkgcmV0dXJuIGV4YWN0XG4gIHJldHVybiAoXG4gICAgWy4uLmtleXNdLmZpbmQoXG4gICAgICAoaykgPT5cbiAgICAgICAgbm9ybWFsaXplUmVjb3J0ZVRva2VuKGspID09PSBub3JtYWxpemVSZWNvcnRlVG9rZW4ocmVjb3J0ZUhpbnQpXG4gICAgKSA/PyBudWxsXG4gIClcbn1cblxuLyoqIE1vbnRhIHPDqXJpZSBhIHBhcnRpciBkZSBhdHJpYnV0b3MgYnJ1dG9zIChSRVNUIC8gcXVlcnlGZWF0dXJlcykuICovXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRZZWFyU2VyaWVzRnJvbUF0dHJpYnV0ZVJvd3MgKFxuICByb3dzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPltdLFxuICB5ZWFyRmllbGRKaW11OiBzdHJpbmcsXG4gIHJlY29ydGVGaWVsZEppbXU6IHN0cmluZyxcbiAgZmllbGRzPzogSU1GaWVsZFNjaGVtYVtdXG4pOiBZZWFyVmFsdWVSb3dbXSB7XG4gIGlmICghcm93cy5sZW5ndGgpIHJldHVybiBbXVxuXG4gIGNvbnN0IGFzUmVjb3JkcyA9IHJvd3MubWFwKChhdHRyaWJ1dGVzKSA9PiAoeyBhdHRyaWJ1dGVzIH0pKVxuICBjb25zdCBzdGFuZGFyZCA9IGJ1aWxkWWVhclNlcmllcyhcbiAgICBhc1JlY29yZHMsXG4gICAgeWVhckZpZWxkSmltdSxcbiAgICByZWNvcnRlRmllbGRKaW11LFxuICAgIGZpZWxkc1xuICApXG4gIGlmIChzdGFuZGFyZC5sZW5ndGggPiAwKSByZXR1cm4gc3RhbmRhcmRcblxuICBjb25zdCB5ZWFyS2V5ID0gZGV0ZWN0WWVhcktleUZyb21Sb3dzKHJvd3MsIHllYXJGaWVsZEppbXUpID8/IHllYXJGaWVsZEppbXVcbiAgY29uc3QgcmVjb3J0ZUtleSA9IHJlc29sdmVSZWNvcnRlS2V5RnJvbVJvd3MoXG4gICAgcm93cyxcbiAgICByZWNvcnRlRmllbGRKaW11LFxuICAgIGZpZWxkcyxcbiAgICB5ZWFyRmllbGRKaW11XG4gIClcblxuICBpZiAoIXllYXJLZXkgfHwgIXJlY29ydGVLZXkpIHJldHVybiBbXVxuXG4gIHJldHVybiBidWlsZFNlcmllc0Zyb21LZXlzKHJvd3MsIHllYXJLZXksIHJlY29ydGVLZXkpXG59XG5cbi8qKiBSZXNvbHZlIGNvbHVuYSBkbyByZWNvcnRlIHBlZGlkbyDigJQgbnVuY2Egc3Vic3RpdHVpIHBvciBvdXRyYSBjb2x1bmEgZGEgdGFiZWxhLiAqL1xuZnVuY3Rpb24gcmVzb2x2ZVJlY29ydGVLZXlGcm9tUm93cyAoXG4gIHJvd3M6IFJlY29yZDxzdHJpbmcsIHVua25vd24+W10sXG4gIHJlY29ydGVGaWVsZEppbXU6IHN0cmluZyxcbiAgZmllbGRzPzogSU1GaWVsZFNjaGVtYVtdLFxuICB5ZWFyRmllbGRKaW11Pzogc3RyaW5nXG4pOiBzdHJpbmcgfCBudWxsIHtcbiAgY29uc3QgZnJvbVJvd3MgPSBkZXRlY3RSZWNvcnRlS2V5RnJvbVJvd3Mocm93cywgcmVjb3J0ZUZpZWxkSmltdSlcbiAgaWYgKGZyb21Sb3dzKSByZXR1cm4gZnJvbVJvd3NcblxuICBpZiAoZmllbGRzPy5sZW5ndGgpIHtcbiAgICBjb25zdCBrZXlzID0gcmVzb2x2ZUF0dHJpYnV0ZUtleXMoZmllbGRzLCB5ZWFyRmllbGRKaW11LCByZWNvcnRlRmllbGRKaW11KVxuICAgIGlmIChrZXlzPy5yZWNvcnRlS2V5KSB7XG4gICAgICBjb25zdCBzYW1wbGUgPSByb3dzWzBdXG4gICAgICBpZiAoc2FtcGxlICYmIGtleXMucmVjb3J0ZUtleSBpbiBzYW1wbGUpIHJldHVybiBrZXlzLnJlY29ydGVLZXlcbiAgICB9XG4gICAgY29uc3QgZmllbGQgPSBmaW5kRmllbGRCeUppbXVOYW1lKGZpZWxkcywgcmVjb3J0ZUZpZWxkSmltdSlcbiAgICBpZiAoZmllbGQpIHtcbiAgICAgIGNvbnN0IGF0dHJLZXkgPSBnZXRBdHRyaWJ1dGVLZXkoZmllbGQpXG4gICAgICBjb25zdCBzYW1wbGUgPSByb3dzWzBdXG4gICAgICBpZiAoc2FtcGxlICYmIGF0dHJLZXkgaW4gc2FtcGxlKSByZXR1cm4gYXR0cktleVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNhbXBsZSA9IHJvd3NbMF1cbiAgaWYgKHNhbXBsZSAmJiByZWNvcnRlRmllbGRKaW11IGluIHNhbXBsZSkgcmV0dXJuIHJlY29ydGVGaWVsZEppbXVcblxuICByZXR1cm4gcmVjb3J0ZUZpZWxkSmltdVxufVxuXG4vKiogUmVzdW1vIGRhcyBjb2x1bmFzIGRldGVjdGFkYXMgKGFqdWRhIGRpYWduw7NzdGljbyBubyBFbnRlcnByaXNlKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXNjcmliZVJvd3NGb3JFeHRyYWN0RXJyb3IgKFxuICByb3dzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPltdLFxuICByZWNvcnRlSGludDogc3RyaW5nXG4pOiBzdHJpbmcge1xuICBpZiAoIXJvd3MubGVuZ3RoKSByZXR1cm4gJydcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHJvd3NbMF0pLmZpbHRlcihcbiAgICAoaykgPT4gIS9eKG9iamVjdGlkfGdsb2JhbGlkfHNoYXBlfGZpZCkkL2kudGVzdChrKVxuICApXG4gIGNvbnN0IHllYXJLZXkgPSBkZXRlY3RZZWFyS2V5RnJvbVJvd3Mocm93cylcbiAgY29uc3QgcmVjb3J0ZUtleSA9IGRldGVjdFJlY29ydGVLZXlGcm9tUm93cyhyb3dzLCByZWNvcnRlSGludClcbiAgY29uc3QgcHJldmlldyA9IGtleXMuc2xpY2UoMCwgMTApLmpvaW4oJywgJylcbiAgY29uc3Qgc3VmZml4ID0ga2V5cy5sZW5ndGggPiAxMCA/ICfigKYnIDogJydcbiAgbGV0IG1zZyA9IGAgQ29sdW5hcyBuYSByZXNwb3N0YTogJHtwcmV2aWV3fSR7c3VmZml4fS5gXG4gIGlmICh5ZWFyS2V5KSBtc2cgKz0gYCBDb2x1bmEgZGUgYW5vOiBcIiR7eWVhcktleX1cIi5gXG4gIGlmIChyZWNvcnRlS2V5KSBtc2cgKz0gYCBDb2x1bmEgZG8gcmVjb3J0ZTogXCIke3JlY29ydGVLZXl9XCIuYFxuICByZXR1cm4gbXNnXG59XG5cbmZ1bmN0aW9uIGJ1aWxkU2VyaWVzRnJvbUtleXMgKFxuICByb3dzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPltdLFxuICB5ZWFyS2V5OiBzdHJpbmcsXG4gIHJlY29ydGVLZXk6IHN0cmluZ1xuKTogWWVhclZhbHVlUm93W10ge1xuICBjb25zdCBzZXJpZXM6IFllYXJWYWx1ZVJvd1tdID0gW11cbiAgZm9yIChjb25zdCByb3cgb2Ygcm93cykge1xuICAgIGNvbnN0IHllYXIgPSBwYXJzZVllYXIocm93W3llYXJLZXldKVxuICAgIGNvbnN0IHZhbHVlID0gcGFyc2VOdW1lcmljVmFsdWUocm93W3JlY29ydGVLZXldKVxuICAgIGlmICh5ZWFyID09IG51bGwgfHwgdmFsdWUgPT0gbnVsbCkgY29udGludWVcbiAgICBzZXJpZXMucHVzaCh7IHllYXIsIHZhbHVlIH0pXG4gIH1cbiAgcmV0dXJuIHNlcmllcy5zb3J0KChhLCBiKSA9PiBhLnllYXIgLSBiLnllYXIpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoUmF3QXR0cmlidXRlUm93c0Zyb21MYXllciAoXG4gIGRzOiBRdWVyaWFibGVMYXllclxuKTogUHJvbWlzZTxSZWNvcmQ8c3RyaW5nLCB1bmtub3duPltdPiB7XG4gIGNvbnN0IGxheWVyID0gZHMubGF5ZXIgYXMge1xuICAgIGxvYWQ/OiAoKSA9PiBQcm9taXNlPHZvaWQ+XG4gICAgbG9hZGVkPzogYm9vbGVhblxuICAgIGxvYWRTdGF0dXM/OiBzdHJpbmdcbiAgICBxdWVyeUZlYXR1cmVzPzogKHA6IG9iamVjdCkgPT4gUHJvbWlzZTx7XG4gICAgICBmZWF0dXJlcz86IEFycmF5PHsgYXR0cmlidXRlcz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+IH0+XG4gICAgfT5cbiAgfVxuICBpZiAoIWxheWVyPy5xdWVyeUZlYXR1cmVzKSByZXR1cm4gW11cblxuICB0cnkge1xuICAgIGlmIChcbiAgICAgIHR5cGVvZiBsYXllci5sb2FkID09PSAnZnVuY3Rpb24nICYmXG4gICAgICBsYXllci5sb2FkU3RhdHVzICE9PSAnbG9hZGVkJyAmJlxuICAgICAgIWxheWVyLmxvYWRlZFxuICAgICkge1xuICAgICAgYXdhaXQgbGF5ZXIubG9hZCgpXG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGxheWVyLnF1ZXJ5RmVhdHVyZXMoe1xuICAgICAgd2hlcmU6ICcxPTEnLFxuICAgICAgb3V0RmllbGRzOiBbJyonXSxcbiAgICAgIHJldHVybkdlb21ldHJ5OiBmYWxzZVxuICAgIH0pXG4gICAgcmV0dXJuIChyZXN1bHQuZmVhdHVyZXMgPz8gW10pXG4gICAgICAubWFwKChmKSA9PiAoeyAuLi4oZi5hdHRyaWJ1dGVzID8/IHt9KSB9KSlcbiAgICAgIC5maWx0ZXIoKGEpID0+IE9iamVjdC5rZXlzKGEpLmxlbmd0aCA+IDApXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBbXVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRyaWJ1dGVSb3dzU2NvcmUgKFxuICByb3dzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPltdXG4pOiBudW1iZXIge1xuICBpZiAoIXJvd3MubGVuZ3RoKSByZXR1cm4gMFxuICBjb25zdCBzYW1wbGUgPSByb3dzWzBdXG4gIHJldHVybiBPYmplY3Qua2V5cyhzYW1wbGUpLmZpbHRlcihcbiAgICAoaykgPT4gIS9eKG9iamVjdGlkfGdsb2JhbGlkfHNoYXBlfGZpZCkkL2kudGVzdChrKVxuICApLmxlbmd0aFxufVxuXG4vKipcbiAqIENhcnJlZ2EgbGluaGFzIGRhIHRhYmVsYSBQUk9ERVMgcHJpb3JpemFuZG8gYXRyaWJ1dG9zIGJydXRvcyBkYSBjYW1hZGFcbiAqIChtZXNtYSBmb250ZSBkYSB0YWJlbGEgZG8gUG9ydGFsKS5cbiAqL1xuZnVuY3Rpb24gcmVjb3Jkc1RvQXR0cmlidXRlUm93cyAocmVjb3JkczogRGF0YVJlY29yZFtdKTogUmVjb3JkPHN0cmluZywgdW5rbm93bj5bXSB7XG4gIHJldHVybiByZWNvcmRzXG4gICAgLm1hcCgocikgPT4gZ2V0UGxhaW5BdHRyaWJ1dGVzKHIpKVxuICAgIC5maWx0ZXIoKGEpID0+IE9iamVjdC5rZXlzKGEpLmxlbmd0aCA+IDApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFByb2Rlc0F0dHJpYnV0ZVJvd3MgKFxuICBkYXRhU291cmNlOiB1bmtub3duLFxuICBvcHRpb25zPzogRmV0Y2hMYXllclJlY29yZHNPcHRpb25zXG4pOiBQcm9taXNlPFJlY29yZDxzdHJpbmcsIHVua25vd24+W10+IHtcbiAgY29uc3QgZHMgPSBkYXRhU291cmNlIGFzIFF1ZXJpYWJsZUxheWVyICYgeyB1cmw/OiBzdHJpbmcgfVxuICBjb25zdCBjYW5kaWRhdGVzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPltdW10gPSBbXVxuXG4gIGNvbnN0IHBvcnRhbFJvd3MgPSBhd2FpdCBmZXRjaFZpYVBvcnRhbFJlc3QoZHMpXG4gIGlmIChwb3J0YWxSb3dzLmxlbmd0aCkgY2FuZGlkYXRlcy5wdXNoKHBvcnRhbFJvd3MpXG5cbiAgY2FuZGlkYXRlcy5wdXNoKGF3YWl0IGZldGNoUmF3QXR0cmlidXRlUm93c0Zyb21MYXllcihkcykpXG5cbiAgY29uc3QgcmVzdFJvd3MgPSBhd2FpdCBmZXRjaFZpYUFyY2dpc1Jlc3QoZHMpXG4gIGlmIChyZXN0Um93cy5sZW5ndGgpIGNhbmRpZGF0ZXMucHVzaChyZXN0Um93cylcblxuICBjb25zdCByZWNvcmRzID0gYXdhaXQgZmV0Y2hMYXllclJlY29yZHMoZGF0YVNvdXJjZSwgb3B0aW9ucylcbiAgaWYgKHJlY29yZHMubGVuZ3RoKSB7XG4gICAgY2FuZGlkYXRlcy5wdXNoKHJlY29yZHNUb0F0dHJpYnV0ZVJvd3MocmVjb3JkcykpXG4gIH1cblxuICBjb25zdCBsb2FkZWQgPSBkcy5nZXRSZWNvcmRzPy4oKSA/PyBkcy5nZXRBbGxMb2FkZWRSZWNvcmRzPy4oKSA/PyBbXVxuICBpZiAobG9hZGVkLmxlbmd0aCkge1xuICAgIGNhbmRpZGF0ZXMucHVzaChyZWNvcmRzVG9BdHRyaWJ1dGVSb3dzKGxvYWRlZCkpXG4gIH1cblxuICBpZiAob3B0aW9ucz8ueWVhckZpZWxkSmltdSAmJiBvcHRpb25zPy5yZWNvcnRlRmllbGRKaW11KSB7XG4gICAgY29uc3Qgb3JkZXJlZCA9IFtcbiAgICAgIC4uLmNhbmRpZGF0ZXMuZmlsdGVyKChjKSA9PiBjLmxlbmd0aCAmJiBhdHRyaWJ1dGVSb3dzU2NvcmUoYykgPiAxKVxuICAgIF0uc29ydCgoYSwgYikgPT4gc2NvcmVSb3dzRm9yUmVjb3J0ZShiLCBvcHRpb25zLnJlY29ydGVGaWVsZEppbXUpIC0gc2NvcmVSb3dzRm9yUmVjb3J0ZShhLCBvcHRpb25zLnJlY29ydGVGaWVsZEppbXUpKVxuXG4gICAgZm9yIChjb25zdCByb3dzIG9mIG9yZGVyZWQpIHtcbiAgICAgIGNvbnN0IHNlcmllcyA9IGJ1aWxkWWVhclNlcmllc0Zyb21BdHRyaWJ1dGVSb3dzKFxuICAgICAgICByb3dzLFxuICAgICAgICBvcHRpb25zLnllYXJGaWVsZEppbXUsXG4gICAgICAgIG9wdGlvbnMucmVjb3J0ZUZpZWxkSmltdSxcbiAgICAgICAgb3B0aW9ucy5maWVsZHNcbiAgICAgIClcbiAgICAgIGlmIChzZXJpZXMubGVuZ3RoID4gMCkgcmV0dXJuIHJvd3NcbiAgICB9XG4gIH1cblxuICBjb25zdCB3aXRoRGF0YSA9IGNhbmRpZGF0ZXMuZmlsdGVyKFxuICAgIChjKSA9PiBjLmxlbmd0aCAmJiBhdHRyaWJ1dGVSb3dzU2NvcmUoYykgPiAxXG4gIClcbiAgaWYgKCF3aXRoRGF0YS5sZW5ndGgpIHtcbiAgICByZXR1cm4gY2FuZGlkYXRlcy5maW5kKChjKSA9PiBjLmxlbmd0aCkgPz8gW11cbiAgfVxuXG4gIGNvbnN0IHJlY29ydGVIaW50ID0gb3B0aW9ucz8ucmVjb3J0ZUZpZWxkSmltdSA/PyAnJ1xuICByZXR1cm4gd2l0aERhdGEuc29ydChcbiAgICAoYSwgYikgPT4gc2NvcmVSb3dzRm9yUmVjb3J0ZShiLCByZWNvcnRlSGludCkgLSBzY29yZVJvd3NGb3JSZWNvcnRlKGEsIHJlY29ydGVIaW50KVxuICApWzBdXG59XG5cbi8qKiBRdWFudG9zIHZhbG9yZXMgbnVtw6lyaWNvcyBwcmVlbmNoaWRvcyBleGlzdGVtIG5hIGNvbHVuYSBkbyByZWNvcnRlLiAqL1xuZnVuY3Rpb24gc2NvcmVSb3dzRm9yUmVjb3J0ZSAoXG4gIHJvd3M6IFJlY29yZDxzdHJpbmcsIHVua25vd24+W10sXG4gIHJlY29ydGVGaWVsZEppbXU6IHN0cmluZ1xuKTogbnVtYmVyIHtcbiAgY29uc3Qga2V5ID0gZGV0ZWN0UmVjb3J0ZUtleUZyb21Sb3dzKHJvd3MsIHJlY29ydGVGaWVsZEppbXUpID8/IHJlY29ydGVGaWVsZEppbXVcbiAgbGV0IHNjb3JlID0gMFxuICBmb3IgKGNvbnN0IHJvdyBvZiByb3dzKSB7XG4gICAgaWYgKHBhcnNlTnVtZXJpY1ZhbHVlKHJvd1trZXldKSAhPSBudWxsKSBzY29yZSsrXG4gIH1cbiAgcmV0dXJuIHNjb3JlXG59XG5cbmNvbnN0IFJFVFJZX0RFTEFZU19NUyA9IFswLCA0MDAsIDgwMCwgMTIwMCwgMjAwMCwgMzAwMCwgNDUwMF1cblxuLyoqXG4gKiBUZW50YSB2w6FyaWFzIHZlemVzIGF0w6kgb2J0ZXIgbGluaGFzIGNvbSBjb2x1bmFzIGRlIGRhZG9zIChuw6NvIHPDsyBPQkpFQ1RJRCkuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmb3JjZUxvYWRQcm9kZXNSb3dzIChcbiAgZGF0YVNvdXJjZTogdW5rbm93bixcbiAgb3B0aW9uczogRmV0Y2hMYXllclJlY29yZHNPcHRpb25zICYgeyB3aWRnZXRJZD86IHN0cmluZyB9XG4pOiBQcm9taXNlPFJlY29yZDxzdHJpbmcsIHVua25vd24+W10+IHtcbiAgZm9yIChjb25zdCBkZWxheSBvZiBSRVRSWV9ERUxBWVNfTVMpIHtcbiAgICBpZiAoZGVsYXkgPiAwKSB7XG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBkZWxheSkpXG4gICAgfVxuXG4gICAgY29uc3Qgcm93cyA9IGF3YWl0IGZldGNoUHJvZGVzQXR0cmlidXRlUm93cyhkYXRhU291cmNlLCB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgZm9yY2VRdWVyeTogdHJ1ZVxuICAgIH0pXG5cbiAgICBpZiAoIW9wdGlvbnMueWVhckZpZWxkSmltdSB8fCAhb3B0aW9ucy5yZWNvcnRlRmllbGRKaW11KSB7XG4gICAgICBpZiAoYXR0cmlidXRlUm93c1Njb3JlKHJvd3MpID4gMSkgcmV0dXJuIHJvd3NcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgY29uc3Qgc2VyaWVzID0gYnVpbGRZZWFyU2VyaWVzRnJvbUF0dHJpYnV0ZVJvd3MoXG4gICAgICByb3dzLFxuICAgICAgb3B0aW9ucy55ZWFyRmllbGRKaW11LFxuICAgICAgb3B0aW9ucy5yZWNvcnRlRmllbGRKaW11LFxuICAgICAgb3B0aW9ucy5maWVsZHNcbiAgICApXG4gICAgaWYgKHNlcmllcy5sZW5ndGggPiAwKSByZXR1cm4gcm93c1xuICB9XG5cbiAgcmV0dXJuIGZldGNoUHJvZGVzQXR0cmlidXRlUm93cyhkYXRhU291cmNlLCB7IC4uLm9wdGlvbnMsIGZvcmNlUXVlcnk6IHRydWUgfSlcbn1cblxuLyoqIENhcnJlZ2EgdG9kb3Mgb3MgcmVnaXN0cm9zIGRhIGNhbWFkYSAodGFiZWxhIGFubyDDlyByZWNvcnRlcykuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hMYXllclJlY29yZHMgKFxuICBkYXRhU291cmNlOiB1bmtub3duLFxuICBvcHRpb25zPzogRmV0Y2hMYXllclJlY29yZHNPcHRpb25zXG4pOiBQcm9taXNlPERhdGFSZWNvcmRbXT4ge1xuICBjb25zdCBkcyA9IGRhdGFTb3VyY2UgYXMgUXVlcmlhYmxlTGF5ZXJcbiAgY29uc3QgY2FjaGVkID0gZHMuZ2V0QWxsTG9hZGVkUmVjb3Jkcz8uKCkgPz8gZHMuZ2V0UmVjb3Jkcz8uKCkgPz8gW11cbiAgY29uc3Qgb3V0RmllbGRzID0gcmVzb2x2ZU91dEZpZWxkcyhcbiAgICBvcHRpb25zPy55ZWFyRmllbGRKaW11LFxuICAgIG9wdGlvbnM/LnJlY29ydGVGaWVsZEppbXUsXG4gICAgb3B0aW9ucz8uZmllbGRzXG4gIClcblxuICBpZiAoIW9wdGlvbnM/LmZvcmNlUXVlcnkgJiYgcmVjb3Jkc0FyZVJlYWRhYmxlKGNhY2hlZCkpIHtcbiAgICByZXR1cm4gY2FjaGVkXG4gIH1cblxuICBjb25zdCBxdWVyaWVkID0gYXdhaXQgcXVlcnlBbGxSZWNvcmRzKGRzLCBvdXRGaWVsZHMsIG9wdGlvbnM/LndpZGdldElkKVxuICBpZiAocmVjb3Jkc0FyZVJlYWRhYmxlKHF1ZXJpZWQpKSByZXR1cm4gcXVlcmllZFxuICBpZiAocXVlcmllZC5sZW5ndGgpIHJldHVybiBxdWVyaWVkXG5cbiAgaWYgKCFvcHRpb25zPy5mb3JjZVF1ZXJ5KSByZXR1cm4gY2FjaGVkXG4gIHJldHVybiBxdWVyaWVkLmxlbmd0aCA/IHF1ZXJpZWQgOiBjYWNoZWRcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUmVjb3J0ZVRva2VuICh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHZhbHVlXG4gICAgLnRvTG93ZXJDYXNlKClcbiAgICAubm9ybWFsaXplKCdORkQnKVxuICAgIC5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9nLCAnJylcbiAgICAucmVwbGFjZSgvW1xccy1dKy9nLCAnXycpXG59XG5cbmZ1bmN0aW9uIGlzWWVhck5hbWVkRmllbGQgKGZpZWxkOiBJTUZpZWxkU2NoZW1hKTogYm9vbGVhbiB7XG4gIGNvbnN0IHkgPVxuICAgIHBhcnNlWWVhcihmaWVsZC5qaW11TmFtZSkgPz9cbiAgICBwYXJzZVllYXIoZmllbGQubmFtZSkgPz9cbiAgICBwYXJzZVllYXIoZmllbGQuYWxpYXMpXG4gIHJldHVybiB5ICE9IG51bGwgJiYgeSA+PSAxOTg1ICYmIHkgPD0gMjAzNVxufVxuXG5mdW5jdGlvbiBmaW5kUmVjb3J0ZU5hbWVGaWVsZCAoZmllbGRzOiBJTUZpZWxkU2NoZW1hW10pOiBJTUZpZWxkU2NoZW1hIHwgbnVsbCB7XG4gIGNvbnN0IHBhdHRlcm5zID0gWydyZWNvcnRlJywgJ3JlZ2lhbycsICdyZWdpw6NvJywgJ2Jpb21hJywgJ25vbWUnLCAnbmFtZScsICdsYWJlbCddXG4gIHJldHVybiAoXG4gICAgZmllbGRzLmZpbmQoKGYpID0+IHtcbiAgICAgIGNvbnN0IGogPSBmLmppbXVOYW1lPy50b0xvd2VyQ2FzZSgpID8/ICcnXG4gICAgICBjb25zdCBuID0gZi5uYW1lPy50b0xvd2VyQ2FzZSgpID8/ICcnXG4gICAgICByZXR1cm4gcGF0dGVybnMuc29tZSgocCkgPT4gai5pbmNsdWRlcyhwKSB8fCBuLmluY2x1ZGVzKHApKVxuICAgIH0pID8/IG51bGxcbiAgKVxufVxuXG4vKiogTGF5b3V0IGFsdGVybmF0aXZvOiBjYWRhIHJlZ2lzdHJvID0gcmVjb3J0ZTsgY29sdW5hcyBudW3DqXJpY2FzID0gYW5vcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFllYXJTZXJpZXNGcm9tUmVjb3J0ZVJvd3MgKFxuICByZWNvcmRzOiBSZWNvcmRMaWtlW10sXG4gIHJlY29ydGVGaWVsZEppbXU6IHN0cmluZyxcbiAgZmllbGRzOiBJTUZpZWxkU2NoZW1hW11cbik6IFllYXJWYWx1ZVJvd1tdIHtcbiAgY29uc3QgeWVhckZpZWxkcyA9IGZpZWxkcy5maWx0ZXIoaXNZZWFyTmFtZWRGaWVsZClcbiAgaWYgKCF5ZWFyRmllbGRzLmxlbmd0aCkgcmV0dXJuIFtdXG5cbiAgY29uc3QgdGFyZ2V0ID0gbm9ybWFsaXplUmVjb3J0ZVRva2VuKHJlY29ydGVGaWVsZEppbXUpXG4gIGNvbnN0IG5hbWVGaWVsZCA9IGZpbmRSZWNvcnRlTmFtZUZpZWxkKGZpZWxkcylcblxuICBjb25zdCByb3cgPVxuICAgIHJlY29yZHMuZmluZCgocmVjKSA9PiB7XG4gICAgICBpZiAobmFtZUZpZWxkKSB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gcmVhZFJlY29yZFZhbHVlKHJlYywgbmFtZUZpZWxkLCBuYW1lRmllbGQuamltdU5hbWUpXG4gICAgICAgIGlmIChsYWJlbCAhPSBudWxsICYmIG5vcm1hbGl6ZVJlY29ydGVUb2tlbihTdHJpbmcobGFiZWwpKSA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBmIG9mIGZpZWxkcykge1xuICAgICAgICBpZiAoaXNZZWFyTmFtZWRGaWVsZChmKSB8fCBmLmppbXVOYW1lID09PSByZWNvcnRlRmllbGRKaW11KSBjb250aW51ZVxuICAgICAgICBjb25zdCB2ID0gcmVhZFJlY29yZFZhbHVlKHJlYywgZiwgZi5qaW11TmFtZSlcbiAgICAgICAgaWYgKHYgIT0gbnVsbCAmJiBub3JtYWxpemVSZWNvcnRlVG9rZW4oU3RyaW5nKHYpKSA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSkgPz8gbnVsbFxuXG4gIGlmICghcm93KSByZXR1cm4gW11cblxuICBjb25zdCBzZXJpZXM6IFllYXJWYWx1ZVJvd1tdID0gW11cbiAgZm9yIChjb25zdCB5ZiBvZiB5ZWFyRmllbGRzKSB7XG4gICAgY29uc3QgeWVhciA9XG4gICAgICBwYXJzZVllYXIoeWYuamltdU5hbWUpID8/IHBhcnNlWWVhcih5Zi5uYW1lKSA/PyBwYXJzZVllYXIoeWYuYWxpYXMpXG4gICAgY29uc3QgdmFsdWUgPSBwYXJzZU51bWVyaWNWYWx1ZShyZWFkUmVjb3JkVmFsdWUocm93LCB5ZiwgeWYuamltdU5hbWUpKVxuICAgIGlmICh5ZWFyID09IG51bGwgfHwgdmFsdWUgPT0gbnVsbCkgY29udGludWVcbiAgICBzZXJpZXMucHVzaCh7IHllYXIsIHZhbHVlIH0pXG4gIH1cblxuICByZXR1cm4gc2VyaWVzLnNvcnQoKGEsIGIpID0+IGEueWVhciAtIGIueWVhcilcbn1cblxuZnVuY3Rpb24gYnVpbGRZZWFyU2VyaWVzWWVhclJvd3MgKFxuICByZWNvcmRzOiBSZWNvcmRMaWtlW10sXG4gIHllYXJGaWVsZEppbXU6IHN0cmluZyxcbiAgcmVjb3J0ZUZpZWxkSmltdTogc3RyaW5nLFxuICBmaWVsZHM/OiBJTUZpZWxkU2NoZW1hW11cbik6IFllYXJWYWx1ZVJvd1tdIHtcbiAgY29uc3QgeWVhckZpZWxkID0gZmllbGRzPy5sZW5ndGhcbiAgICA/IGZpbmRGaWVsZEJ5SmltdU5hbWUoZmllbGRzLCB5ZWFyRmllbGRKaW11KVxuICAgIDogbnVsbFxuICBjb25zdCByZWNvcnRlRmllbGQgPSBmaWVsZHM/Lmxlbmd0aFxuICAgID8gZmluZEZpZWxkQnlKaW11TmFtZShmaWVsZHMsIHJlY29ydGVGaWVsZEppbXUpXG4gICAgOiBudWxsXG4gIGNvbnN0IHNlcmllczogWWVhclZhbHVlUm93W10gPSBbXVxuXG4gIGZvciAoY29uc3QgcmVjIG9mIHJlY29yZHMpIHtcbiAgICBjb25zdCB5ZWFyID0gcGFyc2VZZWFyKFxuICAgICAgcmVhZFJlY29yZFZhbHVlKHJlYywgeWVhckZpZWxkLCB5ZWFyRmllbGRKaW11KVxuICAgIClcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlTnVtZXJpY1ZhbHVlKFxuICAgICAgcmVhZFJlY29yZFZhbHVlKHJlYywgcmVjb3J0ZUZpZWxkLCByZWNvcnRlRmllbGRKaW11KVxuICAgIClcbiAgICBpZiAoeWVhciA9PSBudWxsIHx8IHZhbHVlID09IG51bGwpIGNvbnRpbnVlXG5cbiAgICBzZXJpZXMucHVzaCh7IHllYXIsIHZhbHVlIH0pXG4gIH1cblxuICByZXR1cm4gc2VyaWVzLnNvcnQoKGEsIGIpID0+IGEueWVhciAtIGIueWVhcilcbn1cblxuZnVuY3Rpb24gY29sbGVjdFJlY29yZEF0dHJpYnV0ZUtleXMgKHJlY29yZHM6IFJlY29yZExpa2VbXSk6IHN0cmluZ1tdIHtcbiAgY29uc3Qga2V5cyA9IG5ldyBTZXQ8c3RyaW5nPigpXG4gIGZvciAoY29uc3QgcmVjIG9mIHJlY29yZHMuc2xpY2UoMCwgMTAwKSkge1xuICAgIE9iamVjdC5rZXlzKGdldFBsYWluQXR0cmlidXRlcyhyZWMpKS5mb3JFYWNoKChrKSA9PiBrZXlzLmFkZChrKSlcbiAgfVxuICByZXR1cm4gWy4uLmtleXNdXG59XG5cbmZ1bmN0aW9uIHJlc29sdmVLZXlzRnJvbUF0dHJpYnV0ZU5hbWVzIChcbiAga2V5czogc3RyaW5nW10sXG4gIHllYXJGaWVsZEppbXU6IHN0cmluZyxcbiAgcmVjb3J0ZUZpZWxkSmltdTogc3RyaW5nXG4pOiB7IHllYXJLZXk6IHN0cmluZzsgcmVjb3J0ZUtleTogc3RyaW5nIH0gfCBudWxsIHtcbiAgY29uc3QgcmVjb3J0ZUtleSA9IGtleXMuZmluZChcbiAgICAoaykgPT5cbiAgICAgIGsudG9Mb3dlckNhc2UoKSA9PT0gcmVjb3J0ZUZpZWxkSmltdS50b0xvd2VyQ2FzZSgpIHx8XG4gICAgICBub3JtYWxpemVSZWNvcnRlVG9rZW4oaykgPT09IG5vcm1hbGl6ZVJlY29ydGVUb2tlbihyZWNvcnRlRmllbGRKaW11KVxuICApXG4gIGxldCB5ZWFyS2V5ID0ga2V5cy5maW5kKChrKSA9PiBrLnRvTG93ZXJDYXNlKCkgPT09IHllYXJGaWVsZEppbXUudG9Mb3dlckNhc2UoKSlcbiAgaWYgKCF5ZWFyS2V5KSB7XG4gICAgeWVhcktleSA9IGtleXMuZmluZCgoaykgPT5cbiAgICAgIFlFQVJfTkFNRV9QQVRURVJOUy5zb21lKFxuICAgICAgICAocCkgPT4gay50b0xvd2VyQ2FzZSgpID09PSBwIHx8IGsudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhwKVxuICAgICAgKVxuICAgIClcbiAgfVxuICBpZiAoIXllYXJLZXkgfHwgIXJlY29ydGVLZXkpIHJldHVybiBudWxsXG4gIHJldHVybiB7IHllYXJLZXksIHJlY29ydGVLZXkgfVxufVxuXG4vKiogw5psdGltbyByZWN1cnNvOiBpbmZlcmUgY29sdW5hcyBwZWxvcyBub21lcyByZWFpcyBub3MgYXRyaWJ1dG9zIHJldG9ybmFkb3MuICovXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRZZWFyU2VyaWVzSW5mZXJyZWQgKFxuICByZWNvcmRzOiBSZWNvcmRMaWtlW10sXG4gIHllYXJGaWVsZEppbXU6IHN0cmluZyxcbiAgcmVjb3J0ZUZpZWxkSmltdTogc3RyaW5nXG4pOiBZZWFyVmFsdWVSb3dbXSB7XG4gIGNvbnN0IGtleXMgPSBjb2xsZWN0UmVjb3JkQXR0cmlidXRlS2V5cyhyZWNvcmRzKVxuICBjb25zdCByZXNvbHZlZCA9IHJlc29sdmVLZXlzRnJvbUF0dHJpYnV0ZU5hbWVzKGtleXMsIHllYXJGaWVsZEppbXUsIHJlY29ydGVGaWVsZEppbXUpXG4gIGlmICghcmVzb2x2ZWQpIHJldHVybiBbXVxuXG4gIGNvbnN0IHNlcmllczogWWVhclZhbHVlUm93W10gPSBbXVxuICBmb3IgKGNvbnN0IHJlYyBvZiByZWNvcmRzKSB7XG4gICAgY29uc3QgYXR0cnMgPSBnZXRQbGFpbkF0dHJpYnV0ZXMocmVjKVxuICAgIGNvbnN0IHllYXIgPSBwYXJzZVllYXIoYXR0cnNbcmVzb2x2ZWQueWVhcktleV0pXG4gICAgY29uc3QgdmFsdWUgPSBwYXJzZU51bWVyaWNWYWx1ZShhdHRyc1tyZXNvbHZlZC5yZWNvcnRlS2V5XSlcbiAgICBpZiAoeWVhciA9PSBudWxsIHx8IHZhbHVlID09IG51bGwpIGNvbnRpbnVlXG4gICAgc2VyaWVzLnB1c2goeyB5ZWFyLCB2YWx1ZSB9KVxuICB9XG4gIHJldHVybiBzZXJpZXMuc29ydCgoYSwgYikgPT4gYS55ZWFyIC0gYi55ZWFyKVxufVxuXG4vKiogU8OpcmllIGEgcGFydGlyIGRlIERhdGFSZWNvcmRzIChnZXRGaWVsZFZhbHVlIC8gZ2V0RGF0YUJlZm9yZU1hcHBpbmcpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkWWVhclNlcmllc0Zyb21SZWNvcmRzIChcbiAgcmVjb3JkczogRGF0YVJlY29yZFtdLFxuICB5ZWFyRmllbGRKaW11OiBzdHJpbmcsXG4gIHJlY29ydGVGaWVsZEppbXU6IHN0cmluZyxcbiAgZmllbGRzPzogSU1GaWVsZFNjaGVtYVtdXG4pOiBZZWFyVmFsdWVSb3dbXSB7XG4gIHJldHVybiBidWlsZFllYXJTZXJpZXMoXG4gICAgcmVjb3JkcyBhcyBSZWNvcmRMaWtlW10sXG4gICAgeWVhckZpZWxkSmltdSxcbiAgICByZWNvcnRlRmllbGRKaW11LFxuICAgIGZpZWxkc1xuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFllYXJTZXJpZXMgKFxuICByZWNvcmRzOiBSZWNvcmRMaWtlW10sXG4gIHllYXJGaWVsZEppbXU6IHN0cmluZyxcbiAgcmVjb3J0ZUZpZWxkSmltdTogc3RyaW5nLFxuICBmaWVsZHM/OiBJTUZpZWxkU2NoZW1hW11cbik6IFllYXJWYWx1ZVJvd1tdIHtcbiAgY29uc3QgeWVhclJvd3MgPSBidWlsZFllYXJTZXJpZXNZZWFyUm93cyhcbiAgICByZWNvcmRzLFxuICAgIHllYXJGaWVsZEppbXUsXG4gICAgcmVjb3J0ZUZpZWxkSmltdSxcbiAgICBmaWVsZHNcbiAgKVxuICBpZiAoeWVhclJvd3MubGVuZ3RoID4gMCkgcmV0dXJuIHllYXJSb3dzXG5cbiAgaWYgKGZpZWxkcz8ubGVuZ3RoKSB7XG4gICAgY29uc3QgYWx0ID0gYnVpbGRZZWFyU2VyaWVzRnJvbVJlY29ydGVSb3dzKHJlY29yZHMsIHJlY29ydGVGaWVsZEppbXUsIGZpZWxkcylcbiAgICBpZiAoYWx0Lmxlbmd0aCA+IDApIHJldHVybiBhbHRcbiAgfVxuXG4gIHJldHVybiBidWlsZFllYXJTZXJpZXNJbmZlcnJlZChyZWNvcmRzLCB5ZWFyRmllbGRKaW11LCByZWNvcnRlRmllbGRKaW11KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0WWVhcnNSYW5nZVN1bW1hcnkgKHNlcmllczogWWVhclZhbHVlUm93W10pOiBzdHJpbmcgfCBudWxsIHtcbiAgaWYgKCFzZXJpZXMubGVuZ3RoKSByZXR1cm4gbnVsbFxuICBjb25zdCBtaW4gPSBzZXJpZXNbMF0ueWVhclxuICBjb25zdCBtYXggPSBzZXJpZXNbc2VyaWVzLmxlbmd0aCAtIDFdLnllYXJcbiAgY29uc3QgY291bnQgPSBzZXJpZXMubGVuZ3RoXG4gIGlmIChtaW4gPT09IG1heCkgcmV0dXJuIGAke21pbn0gKCR7Y291bnR9IGFubylgXG4gIHJldHVybiBgJHttaW594oCTJHttYXh9ICgke2NvdW50fSBhbm9zKWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzWWVhck91dE9mVHlwaWNhbFJhbmdlICh5ZWFyOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIHllYXIgPCAyMDAxIHx8IHllYXIgPiAyMDI1XG59XG5cbi8qKiBWYXJpYcOnw6NvIHBlcmNlbnR1YWwgZG8gdmFsb3IgaW5pY2lhbCAoYW5vIG1haXMgYW50aWdvKSBwYXJhIG8gZmluYWwgKGFubyBtYWlzIHJlY2VudGUpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbGNQZXJjZW50VmFyaWF0aW9uIChcbiAgdmFsdWVJbmljaWFsOiBudW1iZXIsXG4gIHZhbHVlRmluYWw6IG51bWJlclxuKTogbnVtYmVyIHwgbnVsbCB7XG4gIGlmICghTnVtYmVyLmlzRmluaXRlKHZhbHVlSW5pY2lhbCkgfHwgIU51bWJlci5pc0Zpbml0ZSh2YWx1ZUZpbmFsKSkgcmV0dXJuIG51bGxcbiAgaWYgKHZhbHVlSW5pY2lhbCA9PT0gMCkgcmV0dXJuIG51bGxcbiAgcmV0dXJuICgodmFsdWVGaW5hbCAtIHZhbHVlSW5pY2lhbCkgLyB2YWx1ZUluaWNpYWwpICogMTAwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQZXJjZW50VmFyaWF0aW9uIChwY3Q6IG51bWJlcik6IHN0cmluZyB7XG4gIGNvbnN0IHNpZ24gPSBwY3QgPiAwID8gJysnIDogJydcbiAgcmV0dXJuIGAke3NpZ259JHtwY3QudG9Mb2NhbGVTdHJpbmcoJ3B0LUJSJywge1xuICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDJcbiAgfSl9JWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlRm9yWWVhciAoXG4gIHNlcmllczogWWVhclZhbHVlUm93W10sXG4gIHllYXI6IG51bWJlclxuKTogbnVtYmVyIHwgbnVsbCB7XG4gIGNvbnN0IHJvdyA9IHNlcmllcy5maW5kKChyKSA9PiByLnllYXIgPT09IHllYXIpXG4gIHJldHVybiByb3cgIT0gbnVsbCA/IHJvdy52YWx1ZSA6IG51bGxcbn1cblxuLyoqIFNvbWEgb3MgdmFsb3JlcyBkb3MgYW5vcyBpbmZvcm1hZG9zOyByZXRvcm5hIG51bGwgc2UgYWxndW0gYW5vIG7Do28gdGl2ZXIgZGFkby4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdW1WYWx1ZXNGb3JZZWFycyAoXG4gIHNlcmllczogWWVhclZhbHVlUm93W10sXG4gIHllYXJzOiBudW1iZXJbXVxuKTogbnVtYmVyIHwgbnVsbCB7XG4gIGlmICgheWVhcnMubGVuZ3RoKSByZXR1cm4gbnVsbFxuICBsZXQgc3VtID0gMFxuICBmb3IgKGNvbnN0IHllYXIgb2YgeWVhcnMpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGdldFZhbHVlRm9yWWVhcihzZXJpZXMsIHllYXIpXG4gICAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiBudWxsXG4gICAgc3VtICs9IHZhbHVlXG4gIH1cbiAgcmV0dXJuIHN1bVxufVxuXG4vKiogQW5vcyBkaXNwb27DrXZlaXMgcGFyYSBvIHBlcsOtb2RvIGluaWNpYWwgKGFudGVzIGRvIHBlcsOtb2RvIGZpbmFsLCBzZSBob3V2ZXIpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFllYXJzQWxsb3dlZEZvckluaWNpYWwgKFxuICBhbGxZZWFyczogbnVtYmVyW10sXG4gIHBlcmlvZG9GaW5hbDogbnVtYmVyW11cbik6IG51bWJlcltdIHtcbiAgY29uc3QgYmxvY2tlZCA9IG5ldyBTZXQocGVyaW9kb0ZpbmFsKVxuICBjb25zdCBtYXhGaW5hbCA9IHBlcmlvZG9GaW5hbC5sZW5ndGggPyBNYXRoLm1pbiguLi5wZXJpb2RvRmluYWwpIDogSW5maW5pdHlcbiAgcmV0dXJuIGFsbFllYXJzLmZpbHRlcigoeSkgPT4gIWJsb2NrZWQuaGFzKHkpICYmIHkgPCBtYXhGaW5hbClcbn1cblxuLyoqIEFub3MgZGlzcG9uw612ZWlzIHBhcmEgbyBwZXLDrW9kbyBmaW5hbCAoZGVwb2lzIGRvIHBlcsOtb2RvIGluaWNpYWwsIHNlIGhvdXZlcikuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0WWVhcnNBbGxvd2VkRm9yRmluYWwgKFxuICBhbGxZZWFyczogbnVtYmVyW10sXG4gIHBlcmlvZG9JbmljaWFsOiBudW1iZXJbXVxuKTogbnVtYmVyW10ge1xuICBjb25zdCBibG9ja2VkID0gbmV3IFNldChwZXJpb2RvSW5pY2lhbClcbiAgY29uc3QgbWluSW5pY2lhbCA9IHBlcmlvZG9JbmljaWFsLmxlbmd0aCA/IE1hdGgubWF4KC4uLnBlcmlvZG9JbmljaWFsKSA6IC1JbmZpbml0eVxuICByZXR1cm4gYWxsWWVhcnMuZmlsdGVyKCh5KSA9PiAhYmxvY2tlZC5oYXMoeSkgJiYgeSA+IG1pbkluaWNpYWwpXG59XG5cbi8qKiBNYXJjYS9kZXNtYXJjYSB1bSBhbm8gbWFudGVuZG8gYXBlbmFzIHNlcXXDqm5jaWFzIGNvbnNlY3V0aXZhcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVDb25zZWN1dGl2ZVllYXIgKFxuICBwZXJpb2Q6IG51bWJlcltdLFxuICB5ZWFyOiBudW1iZXJcbik6IHsgbmV4dDogbnVtYmVyW107IHJlamVjdGVkOiBib29sZWFuIH0ge1xuICBpZiAocGVyaW9kLmluY2x1ZGVzKHllYXIpKSB7XG4gICAgcmV0dXJuIHsgbmV4dDogcGVyaW9kLmZpbHRlcigoeSkgPT4geSAhPT0geWVhciksIHJlamVjdGVkOiBmYWxzZSB9XG4gIH1cbiAgY29uc3QgbmV4dCA9IFsuLi5wZXJpb2QsIHllYXJdLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuICBpZiAoIWFyZUNvbnNlY3V0aXZlWWVhcnMobmV4dCkpIHtcbiAgICByZXR1cm4geyBuZXh0OiBwZXJpb2QsIHJlamVjdGVkOiB0cnVlIH1cbiAgfVxuICByZXR1cm4geyBuZXh0LCByZWplY3RlZDogZmFsc2UgfVxufVxuXG4vKiogVmVyaWZpY2Egc2Ugb3MgYW5vcyBmb3JtYW0gdW1hIHNlcXXDqm5jaWEgY29uc2VjdXRpdmEgKGV4LjogMjAxMCwgMjAxMSwgMjAxMikuICovXG5leHBvcnQgZnVuY3Rpb24gYXJlQ29uc2VjdXRpdmVZZWFycyAoeWVhcnM6IG51bWJlcltdKTogYm9vbGVhbiB7XG4gIGlmICh5ZWFycy5sZW5ndGggPD0gMSkgcmV0dXJuIHRydWVcbiAgY29uc3Qgc29ydGVkID0gWy4uLnllYXJzXS5zb3J0KChhLCBiKSA9PiBhIC0gYilcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBzb3J0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc29ydGVkW2ldIC0gc29ydGVkW2kgLSAxXSAhPT0gMSkgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuLyoqIFLDs3R1bG8gY29tcGFjdG8gcGFyYSB1bSBvdSBtYWlzIGFub3MgKGV4LjogXCIyMDEwXCIgb3UgXCIyMDEw4oCTMjAxMiAoMyBhbm9zKVwiKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQZXJpb2RMYWJlbCAoeWVhcnM6IG51bWJlcltdKTogc3RyaW5nIHtcbiAgY29uc3Qgc29ydGVkID0gWy4uLnllYXJzXS5zb3J0KChhLCBiKSA9PiBhIC0gYilcbiAgaWYgKCFzb3J0ZWQubGVuZ3RoKSByZXR1cm4gJydcbiAgaWYgKHNvcnRlZC5sZW5ndGggPT09IDEpIHJldHVybiBTdHJpbmcoc29ydGVkWzBdKVxuICByZXR1cm4gYCR7c29ydGVkWzBdfeKAkyR7c29ydGVkW3NvcnRlZC5sZW5ndGggLSAxXX0gKCR7c29ydGVkLmxlbmd0aH0gYW5vcylgXG59XG5cbi8qKiBJbnRlcnZhbG8gZGUgYW5vcyBzZW0gY29udGFnZW0gKGV4LjogXCIyMDEwXCIgb3UgXCIyMDEw4oCTMjAxMlwiKSDigJQgdXNvIGVtIHJlc3VsdGFkb3MuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UGVyaW9kUmFuZ2VMYWJlbCAoeWVhcnM6IG51bWJlcltdKTogc3RyaW5nIHtcbiAgY29uc3Qgc29ydGVkID0gWy4uLnllYXJzXS5zb3J0KChhLCBiKSA9PiBhIC0gYilcbiAgaWYgKCFzb3J0ZWQubGVuZ3RoKSByZXR1cm4gJydcbiAgaWYgKHNvcnRlZC5sZW5ndGggPT09IDEpIHJldHVybiBTdHJpbmcoc29ydGVkWzBdKVxuICByZXR1cm4gYCR7c29ydGVkWzBdfeKAkyR7c29ydGVkW3NvcnRlZC5sZW5ndGggLSAxXX1gXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmFyaWF0aW9uUmVzdWx0IHtcbiAgcGN0OiBudW1iZXJcbiAgdmFsdWVJbmljaWFsOiBudW1iZXJcbiAgdmFsdWVGaW5hbDogbnVtYmVyXG4gIHllYXJzSW5pY2lhbDogbnVtYmVyW11cbiAgeWVhcnNGaW5hbDogbnVtYmVyW11cbn1cblxuZXhwb3J0IHR5cGUgUGVyaW9kVmFyaWF0aW9uT3V0Y29tZSA9XG4gIHwgeyBvazogdHJ1ZTsgZGF0YTogVmFyaWF0aW9uUmVzdWx0IH1cbiAgfCB7IG9rOiBmYWxzZTsgbWVzc2FnZTogc3RyaW5nIH1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVQZXJpb2RWYXJpYXRpb24gKFxuICBzZXJpZXM6IFllYXJWYWx1ZVJvd1tdLFxuICBwZXJpb2RvSW5pY2lhbDogbnVtYmVyW10sXG4gIHBlcmlvZG9GaW5hbDogbnVtYmVyW11cbik6IFBlcmlvZFZhcmlhdGlvbk91dGNvbWUge1xuICBjb25zdCBpbmkgPSBbLi4ucGVyaW9kb0luaWNpYWxdLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuICBjb25zdCBmaW4gPSBbLi4ucGVyaW9kb0ZpbmFsXS5zb3J0KChhLCBiKSA9PiBhIC0gYilcblxuICBpZiAoIWluaS5sZW5ndGggfHwgIWZpbi5sZW5ndGgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogJ1NlbGVjaW9uZSBwZWxvIG1lbm9zIHVtIGFubyBlbSBjYWRhIHBlcsOtb2RvLidcbiAgICB9XG4gIH1cblxuICBpZiAoaW5pLmxlbmd0aCAhPT0gZmluLmxlbmd0aCkge1xuICAgIHJldHVybiB7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBtZXNzYWdlOlxuICAgICAgICAnTyBwZXLDrW9kbyBpbmljaWFsIGUgbyBwZXLDrW9kbyBmaW5hbCBkZXZlbSB0ZXIgYSBtZXNtYSBxdWFudGlkYWRlIGRlIGFub3MuJ1xuICAgIH1cbiAgfVxuXG4gIGlmICghYXJlQ29uc2VjdXRpdmVZZWFycyhpbmkpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6ICdPcyBhbm9zIGRvIHBlcsOtb2RvIGluaWNpYWwgZGV2ZW0gc2VyIGNvbnNlY3V0aXZvcy4nXG4gICAgfVxuICB9XG5cbiAgaWYgKCFhcmVDb25zZWN1dGl2ZVllYXJzKGZpbikpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogJ09zIGFub3MgZG8gcGVyw61vZG8gZmluYWwgZGV2ZW0gc2VyIGNvbnNlY3V0aXZvcy4nXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaW5pU2V0ID0gbmV3IFNldChpbmkpXG4gIGlmIChmaW4uc29tZSgoeSkgPT4gaW5pU2V0Lmhhcyh5KSkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogJ1VtIGFubyBuw6NvIHBvZGUgcGVydGVuY2VyIGFvcyBkb2lzIHBlcsOtb2RvcyBhbyBtZXNtbyB0ZW1wby4nXG4gICAgfVxuICB9XG5cbiAgY29uc3QgbWF4SW5pY2lhbCA9IGluaVtpbmkubGVuZ3RoIC0gMV1cbiAgY29uc3QgbWluRmluYWwgPSBmaW5bMF1cbiAgaWYgKG1heEluaWNpYWwgPj0gbWluRmluYWwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogJ08gcGVyw61vZG8gZmluYWwgZGV2ZSBzZXIgcG9zdGVyaW9yIGFvIHBlcsOtb2RvIGluaWNpYWwuJ1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHZhbHVlSW5pY2lhbCA9IHN1bVZhbHVlc0ZvclllYXJzKHNlcmllcywgaW5pKVxuICBjb25zdCB2YWx1ZUZpbmFsID0gc3VtVmFsdWVzRm9yWWVhcnMoc2VyaWVzLCBmaW4pXG5cbiAgaWYgKHZhbHVlSW5pY2lhbCA9PSBudWxsIHx8IHZhbHVlRmluYWwgPT0gbnVsbCkge1xuICAgIHJldHVybiB7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBtZXNzYWdlOlxuICAgICAgICAnVW0gb3UgbWFpcyBhbm9zIHNlbGVjaW9uYWRvcyBuw6NvIHBvc3N1ZW0gZGFkbyBwYXJhIGVzdGUgcmVjb3J0ZS4nXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcGN0ID0gY2FsY1BlcmNlbnRWYXJpYXRpb24odmFsdWVJbmljaWFsLCB2YWx1ZUZpbmFsKVxuICBpZiAocGN0ID09IG51bGwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTpcbiAgICAgICAgJ0Egc29tYSBkbyBwZXLDrW9kbyBpbmljaWFsIMOpIHplcm87IG7Do28gw6kgcG9zc8OtdmVsIGNhbGN1bGFyIGEgdmFyaWHDp8OjbyBwZXJjZW50dWFsLidcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG9rOiB0cnVlLFxuICAgIGRhdGE6IHtcbiAgICAgIHBjdCxcbiAgICAgIHZhbHVlSW5pY2lhbCxcbiAgICAgIHZhbHVlRmluYWwsXG4gICAgICB5ZWFyc0luaWNpYWw6IGluaSxcbiAgICAgIHllYXJzRmluYWw6IGZpblxuICAgIH1cbiAgfVxufVxuXG4vKiogQ29tcGFyYcOnw6NvIGVudHJlIGRvaXMgYW5vcyDDum5pY29zIChhdGFsaG8gcGFyYSBwZXLDrW9kb3MgZGUgdW0gYW5vKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlVmFyaWF0aW9uIChcbiAgc2VyaWVzOiBZZWFyVmFsdWVSb3dbXSxcbiAgYW5vSW5pY2lhbDogbnVtYmVyLFxuICBhbm9GaW5hbDogbnVtYmVyXG4pOiBQZXJpb2RWYXJpYXRpb25PdXRjb21lIHtcbiAgcmV0dXJuIGNvbXB1dGVQZXJpb2RWYXJpYXRpb24oc2VyaWVzLCBbYW5vSW5pY2lhbF0sIFthbm9GaW5hbF0pXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9kYXRhX3NvdXJjZV9zZWxlY3Rvcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX3NldHRpbmdfY29tcG9uZW50c19fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIlxuLyoqIEBqc3gganN4ICovXG4vKiogQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQgKi9cbmltcG9ydCB7XG4gIFJlYWN0LCBqc3gsIGNzcywgSW1tdXRhYmxlLFxuICB0eXBlIEltbXV0YWJsZUFycmF5LCB0eXBlIFVzZURhdGFTb3VyY2UsXG4gIHR5cGUgSU1EYXRhU291cmNlU2NoZW1hLFxuICB0eXBlIERhdGFTb3VyY2UsXG4gIEFsbERhdGFTb3VyY2VUeXBlcywgRGF0YVNvdXJjZUNvbXBvbmVudFxufSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBTZWxlY3QsIE9wdGlvbiB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgeyBTZXR0aW5nU2VjdGlvbiwgU2V0dGluZ1JvdyB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzJ1xuaW1wb3J0IHsgRGF0YVNvdXJjZVNlbGVjdG9yIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9kYXRhLXNvdXJjZS1zZWxlY3RvcidcbmltcG9ydCB7IHR5cGUgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgeyBnZXREYXRhU291cmNlU2NoZW1hIH0gZnJvbSAnLi4vdXRpbHMvZGF0YS1zb3VyY2UnXG5pbXBvcnQge1xuICBkZXRlY3RZZWFyRmllbGQsXG4gIGZvcm1hdFJlY29ydGVMYWJlbCxcbiAgZ2V0UmVjb3J0ZUNhbmRpZGF0ZUZpZWxkcyxcbiAgc2NoZW1hVG9GaWVsZExpc3Rcbn0gZnJvbSAnLi4vdXRpbHMvcHJvZGVzLXRhYmxlJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBpZDogc3RyaW5nXG4gIHVzZURhdGFTb3VyY2VzPzogSW1tdXRhYmxlQXJyYXk8VXNlRGF0YVNvdXJjZT5cbiAgb25TZXR0aW5nQ2hhbmdlPzogKHNldHRpbmc6IGFueSkgPT4gdm9pZFxuICBjb25maWc/OiBJTUNvbmZpZ1xufVxuXG5jb25zdCBzdHlsZXMgPSBjc3NgXG4gICYud2lkZ2V0LXNldHRpbmctY29tcGFyYWRvci1wcm9kZXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgfVxuICAmICoge1xuICAgIHdyaXRpbmctbW9kZTogaG9yaXpvbnRhbC10YiAhaW1wb3J0YW50O1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgICB3b3JkLWJyZWFrOiBub3JtYWwgIWltcG9ydGFudDtcbiAgfVxuICAuamltdS11aV9zZXR0aW5nLXJvdyB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cbiAgLmppbXUtdWlfc2V0dGluZy1yb3dfX2xhYmVsIHtcbiAgICBtaW4td2lkdGg6IDA7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG4gIC5qaW11LXVpX3NldHRpbmctcm93X19jb250ZW50IHtcbiAgICBmbGV4OiAxIDEgMTAwJTtcbiAgICBtaW4td2lkdGg6IDA7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICB9XG4gIC5zZXR0aW5nLWhpbnQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzZiNmI2YjtcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgfVxuYFxuXG5jb25zdCBlbXB0eUNvbmZpZyA9ICgpID0+IEltbXV0YWJsZSh7fSBhcyBJTUNvbmZpZylcblxuY29uc3QgU2V0dGluZyA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgY29uc3QgeyBpZCwgdXNlRGF0YVNvdXJjZXMsIG9uU2V0dGluZ0NoYW5nZSwgY29uZmlnIH0gPSBwcm9wc1xuICBjb25zdCB1c2VEcyA9IHVzZURhdGFTb3VyY2VzPy5bMF1cbiAgY29uc3QgeWVhckZpZWxkID0gY29uZmlnPy55ZWFyRmllbGRcbiAgY29uc3QgcmVjb3J0ZUZpZWxkID0gY29uZmlnPy5yZWNvcnRlRmllbGRcblxuICBjb25zdCBbZmllbGRMaXN0LCBzZXRGaWVsZExpc3RdID0gUmVhY3QudXNlU3RhdGUoXG4gICAgW10gYXMgUmV0dXJuVHlwZTx0eXBlb2Ygc2NoZW1hVG9GaWVsZExpc3Q+XG4gIClcblxuICBjb25zdCByZWNvcnRlT3B0aW9ucyA9IFJlYWN0LnVzZU1lbW8oXG4gICAgKCkgPT4gZ2V0UmVjb3J0ZUNhbmRpZGF0ZUZpZWxkcyhmaWVsZExpc3QsIHllYXJGaWVsZCksXG4gICAgW2ZpZWxkTGlzdCwgeWVhckZpZWxkXVxuICApXG5cbiAgY29uc3QgYXBwbHlZZWFyRmllbGQgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZmllbGRzOiBSZXR1cm5UeXBlPHR5cGVvZiBzY2hlbWFUb0ZpZWxkTGlzdD4sIGN1cnJlbnRSZWNvcnRlPzogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBkZXRlY3RlZCA9IGRldGVjdFllYXJGaWVsZChmaWVsZHMpXG4gICAgICBpZiAoIWRldGVjdGVkKSByZXR1cm5cblxuICAgICAgbGV0IG5leHQgPSAoY29uZmlnID8/IGVtcHR5Q29uZmlnKCkpLnNldCgneWVhckZpZWxkJywgZGV0ZWN0ZWQpXG4gICAgICBpZiAoY3VycmVudFJlY29ydGUgPT09IGRldGVjdGVkKSB7XG4gICAgICAgIG5leHQgPSBuZXh0LndpdGhvdXQoJ3JlY29ydGVGaWVsZCcpXG4gICAgICB9XG4gICAgICBpZiAoZGV0ZWN0ZWQgIT09IHllYXJGaWVsZCB8fCBjdXJyZW50UmVjb3J0ZSA9PT0gZGV0ZWN0ZWQpIHtcbiAgICAgICAgb25TZXR0aW5nQ2hhbmdlPy4oeyBpZCwgY29uZmlnOiBuZXh0IH0pXG4gICAgICB9XG4gICAgfSxcbiAgICBbY29uZmlnLCBpZCwgb25TZXR0aW5nQ2hhbmdlLCB5ZWFyRmllbGRdXG4gIClcblxuICBjb25zdCBwcm9jZXNzU2NoZW1hID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKHNjaGVtYTogSU1EYXRhU291cmNlU2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBmaWVsZHMgPSBzY2hlbWFUb0ZpZWxkTGlzdChzY2hlbWEpXG4gICAgICBzZXRGaWVsZExpc3QoZmllbGRzKVxuICAgICAgYXBwbHlZZWFyRmllbGQoZmllbGRzLCByZWNvcnRlRmllbGQpXG4gICAgfSxcbiAgICBbYXBwbHlZZWFyRmllbGQsIHJlY29ydGVGaWVsZF1cbiAgKVxuXG4gIGNvbnN0IGhhbmRsZURhdGFTb3VyY2VDcmVhdGVkID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGRzOiBEYXRhU291cmNlKSA9PiB7XG4gICAgICBjb25zdCBzY2hlbWEgPSBnZXREYXRhU291cmNlU2NoZW1hKGRzKVxuICAgICAgaWYgKHNjaGVtYSkgcHJvY2Vzc1NjaGVtYShzY2hlbWEpXG4gICAgfSxcbiAgICBbcHJvY2Vzc1NjaGVtYV1cbiAgKVxuXG4gIGNvbnN0IGhhbmRsZURhdGFTb3VyY2VDaGFuZ2UgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAobmV3VXNlRGF0YVNvdXJjZXM6IFVzZURhdGFTb3VyY2VbXSkgPT4ge1xuICAgICAgb25TZXR0aW5nQ2hhbmdlPy4oe1xuICAgICAgICBpZCxcbiAgICAgICAgdXNlRGF0YVNvdXJjZXM6IEltbXV0YWJsZShuZXdVc2VEYXRhU291cmNlcyksXG4gICAgICAgIGNvbmZpZzogKGNvbmZpZyA/PyBlbXB0eUNvbmZpZygpKVxuICAgICAgICAgIC53aXRob3V0KCd5ZWFyRmllbGQnKVxuICAgICAgICAgIC53aXRob3V0KCdyZWNvcnRlRmllbGQnKVxuICAgICAgfSlcbiAgICAgIHNldEZpZWxkTGlzdChbXSlcbiAgICB9LFxuICAgIFtjb25maWcsIGlkLCBvblNldHRpbmdDaGFuZ2VdXG4gIClcblxuICBjb25zdCBoYW5kbGVSZWNvcnRlU2VsZWN0ID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGJhc2UgPSBjb25maWcgPz8gZW1wdHlDb25maWcoKVxuICAgICAgb25TZXR0aW5nQ2hhbmdlPy4oe1xuICAgICAgICBpZCxcbiAgICAgICAgY29uZmlnOiB2YWx1ZSA/IGJhc2Uuc2V0KCdyZWNvcnRlRmllbGQnLCB2YWx1ZSkgOiBiYXNlLndpdGhvdXQoJ3JlY29ydGVGaWVsZCcpXG4gICAgICB9KVxuICAgIH0sXG4gICAgW2NvbmZpZywgaWQsIG9uU2V0dGluZ0NoYW5nZV1cbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtc2V0dGluZy1jb21wYXJhZG9yLXByb2RlcyBqaW11LXdpZGdldC1zZXR0aW5nIHctMTAwXCIgY3NzPXtzdHlsZXN9PlxuICAgICAge3VzZURzICYmIChcbiAgICAgICAgPERhdGFTb3VyY2VDb21wb25lbnRcbiAgICAgICAgICB3aWRnZXRJZD17aWR9XG4gICAgICAgICAgdXNlRGF0YVNvdXJjZT17dXNlRHN9XG4gICAgICAgICAgb25EYXRhU291cmNlQ3JlYXRlZD17aGFuZGxlRGF0YVNvdXJjZUNyZWF0ZWR9XG4gICAgICAgICAgb25EYXRhU291cmNlU2NoZW1hQ2hhbmdlPXtwcm9jZXNzU2NoZW1hfVxuICAgICAgICAvPlxuICAgICAgKX1cblxuICAgICAgPFNldHRpbmdTZWN0aW9uIHRpdGxlPVwiRGFkb3NcIiBjbGFzc05hbWU9XCJ3LTEwMFwiPlxuICAgICAgICA8U2V0dGluZ1JvdyBsYWJlbD1cIkNhbWFkYSBQUk9ERVMgKEZlYXR1cmUgTGF5ZXIpXCIgZmxvdz1cIndyYXBcIiBsZXZlbD17MX0+XG4gICAgICAgICAgPERhdGFTb3VyY2VTZWxlY3RvclxuICAgICAgICAgICAgd2lkZ2V0SWQ9e2lkfVxuICAgICAgICAgICAgaXNNdWx0aXBsZT17ZmFsc2V9XG4gICAgICAgICAgICBtdXN0VXNlRGF0YVNvdXJjZVxuICAgICAgICAgICAgdHlwZXM9e0ltbXV0YWJsZShbQWxsRGF0YVNvdXJjZVR5cGVzLkZlYXR1cmVMYXllcl0pfVxuICAgICAgICAgICAgdXNlRGF0YVNvdXJjZXM9e3VzZURhdGFTb3VyY2VzfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZURhdGFTb3VyY2VDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TZXR0aW5nUm93PlxuXG4gICAgICAgIHt1c2VEcyAmJiAoXG4gICAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9XCJSZWNvcnRlIGdlb2dyw6FmaWNvIChjb2x1bmEpXCIgZmxvdz1cIndyYXBcIiBsZXZlbD17MX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cmVjb3J0ZUZpZWxkID8/ICcnfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWNpb25lIG8gcmVjb3J0ZeKAplwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhfZXZ0LCB2YWx1ZSkgPT4gaGFuZGxlUmVjb3J0ZVNlbGVjdChTdHJpbmcodmFsdWUgPz8gJycpKX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17cmVjb3J0ZU9wdGlvbnMubGVuZ3RoID09PSAwfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIlwiPnsnJ308L09wdGlvbj5cbiAgICAgICAgICAgICAgICB7cmVjb3J0ZU9wdGlvbnMubWFwKChmKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8T3B0aW9uXG4gICAgICAgICAgICAgICAgICAgIGtleT17Zi5qaW11TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2YuamltdU5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17cmVjb3J0ZUZpZWxkID09PSBmLmppbXVOYW1lfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0UmVjb3J0ZUxhYmVsKGYpfVxuICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctaGludFwiPlxuICAgICAgICAgICAgICAgIEVzY29saGEgdW1hIGNvbHVuYSBkYSB0YWJlbGEgKGV4LjogQ2VycmFkbywgQW1hesO0bmlhIGxlZ2FsLCBQYW50YW5hbCkuXG4gICAgICAgICAgICAgICAgT3MgYW5vcyBleGliaWRvcyBuYSB3aWRnZXQgc8OjbyBkZXRlY3RhZG9zIGF1dG9tYXRpY2FtZW50ZSBhIHBhcnRpciBkb3NcbiAgICAgICAgICAgICAgICBkYWRvcyBkaXNwb27DrXZlaXMgcGFyYSBvIHJlY29ydGUgc2VsZWNpb25hZG8uXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9TZXR0aW5nUm93PlxuICAgICAgICApfVxuICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5nXG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9