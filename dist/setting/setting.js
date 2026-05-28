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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9kaXN0L3NldHRpbmcvc2V0dGluZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJa0I7QUFPbEIsNEZBQTRGO0FBQ3JGLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxNQUF5QixFQUFXLEVBQUUsQ0FDdEUsTUFBTSxLQUFLLHVEQUFnQixDQUFDLE1BQU07QUFFN0IsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLE1BQXlCLEVBQVcsRUFBRSxDQUN0RSxNQUFNLEtBQUssdURBQWdCLENBQUMsTUFBTTtJQUNsQyxNQUFNLEtBQUssdURBQWdCLENBQUMsT0FBTztBQUU5QixNQUFNLGlCQUFpQixHQUFHLENBQUMsRUFBcUIsRUFBcUIsRUFBRTs7SUFDNUUsSUFBSSxDQUFDLEVBQUU7UUFBRSxPQUFPLElBQUk7SUFDcEIsTUFBTSxJQUFJLEdBQUcsWUFBQyxFQUF5QixFQUFDLGlCQUFpQixrREFBSTtJQUM3RCxPQUFPLElBQUksYUFBSixJQUFJLGNBQUosSUFBSSxHQUFJLEVBQUU7QUFDbkIsQ0FBQztBQUVELDBGQUEwRjtBQUNuRixNQUFNLHNCQUFzQixHQUFHLENBQUMsRUFBcUIsRUFBcUIsRUFBRTtJQUNqRixJQUFJLENBQUMsRUFBRTtRQUFFLE9BQU8sSUFBSTtJQUNwQixNQUFNLENBQUMsR0FBRyxFQUlUO0lBQ0QsSUFDRSxPQUFPLENBQUMsQ0FBQyxLQUFLLEtBQUssVUFBVTtRQUM3QixPQUFPLENBQUMsQ0FBQyxJQUFJLEtBQUssVUFBVTtRQUM1QixPQUFPLENBQUMsQ0FBQyxPQUFPLEtBQUssVUFBVSxFQUMvQixDQUFDO1FBQ0QsT0FBTyxFQUFFO0lBQ1gsQ0FBQztJQUNELE9BQU8saUJBQWlCLENBQUMsRUFBRSxDQUFDO0FBQzlCLENBQUM7QUFFTSxTQUFlLHNCQUFzQixDQUMxQyxFQUFjOztRQUVkLE1BQU0sUUFBUSxHQUFH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QU0sQ0FBQyxLQUFLLGFBQUwsS0FBSyxjQUFMLEtBQUssR0FBSSxFQUFFLENBQUMsQ0FBQyxFQUNuRSxRQUFRLEVBQUUsY0FBYyxDQUFDLE1BQU0sS0FBSyxDQUFDO3dCQUVyQywrQ0FBQywyQ0FBTSxJQUFDLEtBQUssRUFBQyxFQUFFLElBQUUsRUFBRSxDQUFVO3dCQUM3QixjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUN6QiwrQ0FBQywyQ0FBTSxJQUNMLEdBQUcsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUNmLEtBQUssRUFBRSxDQUFDLENBQUMsUUFBUSxFQUNqQixNQUFNLEVBQUUsWUFBWSxLQUFLLENBQUMsQ0FBQyxRQUFRLElBRWxDLHVFQUFrQixDQUFDLENBQUMsQ0FBQyxDQUNmLENBQ1YsQ0FBQyxDQUNLO29CQUNULHdEQUFLLFNBQVMsRUFBQyxjQUFjLGlOQUl2QixDQUNGLENBQ0ssQ0FDZCxDQUNjLENBQ2IsQ0FDUDtBQUNILENBQUM7QUFFRCxpRUFBZSxPQUFPO0FBRWQsU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY29tcGFyYWRvcl9wcm9kZXMvc3JjL3V0aWxzL2RhdGEtc291cmNlLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9zcmMvdXRpbHMvcHJvZGVzLXRhYmxlLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL2RhdGEtc291cmNlLXNlbGVjdG9yXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50c1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY29tcGFyYWRvcl9wcm9kZXMvc3JjL3NldHRpbmcvc2V0dGluZy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgdHlwZSBEYXRhU291cmNlLFxuICB0eXBlIElNRGF0YVNvdXJjZVNjaGVtYSxcbiAgRGF0YVNvdXJjZVN0YXR1c1xufSBmcm9tICdqaW11LWNvcmUnXG5cbnR5cGUgRGF0YVNvdXJjZVdpdGhNYWluID0gRGF0YVNvdXJjZSAmIHtcbiAgZ2V0TWFpbkRhdGFTb3VyY2U/OiAoKSA9PiBEYXRhU291cmNlXG4gIGdldFNjaGVtYT86ICgpID0+IElNRGF0YVNvdXJjZVNjaGVtYVxufVxuXG4vKiogQW50ZXMgZG8gcXVlcnkgZG8gRGF0YVNvdXJjZUNvbXBvbmVudCB0ZXJtaW5hciwgcmVnaXN0cm9zIGNvc3R1bWFtIHZpciBzZW0gYXRyaWJ1dG9zLiAqL1xuZXhwb3J0IGNvbnN0IGlzUHJvZGVzRGF0YVJlYWR5ID0gKHN0YXR1cz86IERhdGFTb3VyY2VTdGF0dXMpOiBib29sZWFuID0+XG4gIHN0YXR1cyA9PT0gRGF0YVNvdXJjZVN0YXR1cy5Mb2FkZWRcblxuZXhwb3J0IGNvbnN0IGlzUXVlcnlhYmxlU3RhdHVzID0gKHN0YXR1cz86IERhdGFTb3VyY2VTdGF0dXMpOiBib29sZWFuID0+XG4gIHN0YXR1cyA9PT0gRGF0YVNvdXJjZVN0YXR1cy5Mb2FkZWQgfHxcbiAgc3RhdHVzID09PSBEYXRhU291cmNlU3RhdHVzLkxvYWRpbmdcblxuZXhwb3J0IGNvbnN0IGdldE1haW5EYXRhU291cmNlID0gKGRzOiBEYXRhU291cmNlIHwgbnVsbCk6IERhdGFTb3VyY2UgfCBudWxsID0+IHtcbiAgaWYgKCFkcykgcmV0dXJuIG51bGxcbiAgY29uc3QgbWFpbiA9IChkcyBhcyBEYXRhU291cmNlV2l0aE1haW4pLmdldE1haW5EYXRhU291cmNlPy4oKVxuICByZXR1cm4gbWFpbiA/PyBkc1xufVxuXG4vKiogVXNhIGEgaW5zdMOibmNpYSBkYSBjYW1hZGEgc2VsZWNpb25hZGEgKGV4LjogUGxhbmlsaGExKSBxdWFuZG8gZWxhIGrDoSDDqSBjb25zdWx0w6F2ZWwuICovXG5leHBvcnQgY29uc3QgZ2V0UXVlcnlhYmxlRGF0YVNvdXJjZSA9IChkczogRGF0YVNvdXJjZSB8IG51bGwpOiBEYXRhU291cmNlIHwgbnVsbCA9PiB7XG4gIGlmICghZHMpIHJldHVybiBudWxsXG4gIGNvbnN0IHEgPSBkcyBhcyBEYXRhU291cmNlV2l0aE1haW4gJiB7XG4gICAgcXVlcnk/OiAocDogb2JqZWN0KSA9PiBQcm9taXNlPHVua25vd24+XG4gICAgbG9hZD86IChwOiBvYmplY3QpID0+IFByb21pc2U8dW5rbm93bj5cbiAgICBsb2FkQWxsPzogKHA6IG9iamVjdCkgPT4gUHJvbWlzZTx1bmtub3duPlxuICB9XG4gIGlmIChcbiAgICB0eXBlb2YgcS5xdWVyeSA9PT0gJ2Z1bmN0aW9uJyB8fFxuICAgIHR5cGVvZiBxLmxvYWQgPT09ICdmdW5jdGlvbicgfHxcbiAgICB0eXBlb2YgcS5sb2FkQWxsID09PSAnZnVuY3Rpb24nXG4gICkge1xuICAgIHJldHVybiBkc1xuICB9XG4gIHJldHVybiBnZXRNYWluRGF0YVNvdXJjZShkcylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVuc3VyZURhdGFTb3VyY2VTY2hlbWEgKFxuICBkczogRGF0YVNvdXJjZVxuKTogUHJvbWlzZTxJTURhdGFTb3VyY2VTY2hlbWEgfCB1bmRlZmluZWQ+IHtcbiAgY29uc3QgZXhpc3RpbmcgPSBnZXREYXRhU291cmNlU2NoZW1hKGRzKVxuICBpZiAoZXhpc3Rpbmc/LmZpZWxkcyAmJiBPYmplY3Qua2V5cyhleGlzdGluZy5maWVsZHMpLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gZXhpc3RpbmdcbiAgfVxuICBjb25zdCBmZXRjaFNjaGVtYSA9IChkcyBhcyBEYXRhU291cmNlV2l0aE1haW4gJiB7XG4gICAgZmV0Y2hTY2hlbWE/OiAoKSA9PiBQcm9taXNlPElNRGF0YVNvdXJjZVNjaGVtYT5cbiAgfSkuZmV0Y2hTY2hlbWFcbiAgaWYgKHR5cGVvZiBmZXRjaFNjaGVtYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gYXdhaXQgZmV0Y2hTY2hlbWEuY2FsbChkcylcbiAgICB9IGNhdGNoIHtcbiAgICAgIHJldHVybiBleGlzdGluZ1xuICAgIH1cbiAgfVxuICByZXR1cm4gZXhpc3Rpbmdcbn1cblxuZXhwb3J0IGNvbnN0IGdldERhdGFTb3VyY2VTY2hlbWEgPSAoXG4gIGRzOiBEYXRhU291cmNlXG4pOiBJTURhdGFTb3VyY2VTY2hlbWEgfCB1bmRlZmluZWQgPT5cbiAgKGRzIGFzIERhdGFTb3VyY2VXaXRoTWFpbikuZ2V0U2NoZW1hPy4oKVxuIiwiaW1wb3J0IHtcbiAgdHlwZSBJTUZpZWxkU2NoZW1hLFxuICB0eXBlIElNRGF0YVNvdXJjZVNjaGVtYSxcbiAgSmltdUZpZWxkVHlwZSxcbiAgRXNyaUZpZWxkVHlwZSxcbiAgUXVlcnlTY29wZSxcbiAgdHlwZSBEYXRhUmVjb3JkLFxuICBlc3JpLFxuICByZXF1ZXN0VXRpbHNcbn0gZnJvbSAnamltdS1jb3JlJ1xuXG5leHBvcnQgaW50ZXJmYWNlIFllYXJWYWx1ZVJvdyB7XG4gIHllYXI6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmllbGRBdHRyaWJ1dGVLZXlzIHtcbiAgeWVhcktleTogc3RyaW5nXG4gIHJlY29ydGVLZXk6IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9ZRUFSX0ZJRUxEID0gJ2FubydcblxuY29uc3QgWUVBUl9OQU1FX1BBVFRFUk5TID0gWydhbm8nLCAneWVhcicsICd5cicsICdleGVyY2ljaW8nLCAnZXhlcmPDrWNpbyddXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5Q2VsbCAodmFsdWU6IHVua25vd24pOiBib29sZWFuIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiB0cnVlXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLnRyaW0oKSA9PT0gJycpIHJldHVybiB0cnVlXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIE51bWJlci5pc05hTih2YWx1ZSkpIHJldHVybiB0cnVlXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VOdW1lcmljVmFsdWUgKHZhbHVlOiB1bmtub3duKTogbnVtYmVyIHwgbnVsbCB7XG4gIGlmIChpc0VtcHR5Q2VsbCh2YWx1ZSkpIHJldHVybiBudWxsXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSkpIHJldHVybiB2YWx1ZVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IHMgPSB2YWx1ZS50cmltKClcbiAgICBpZiAoIXMpIHJldHVybiBudWxsXG4gICAgaWYgKHMuaW5jbHVkZXMoJywnKSkge1xuICAgICAgY29uc3Qgbm9ybWFsaXplZCA9IHMucmVwbGFjZSgvXFwuL2csICcnKS5yZXBsYWNlKCcsJywgJy4nKVxuICAgICAgY29uc3QgbiA9IE51bWJlcihub3JtYWxpemVkKVxuICAgICAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShuKSA/IG4gOiBudWxsXG4gICAgfVxuICAgIGNvbnN0IG4gPSBOdW1iZXIocylcbiAgICByZXR1cm4gTnVtYmVyLmlzRmluaXRlKG4pID8gbiA6IG51bGxcbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG4vKiogQ29udmVydGUgbsO6bWVybyBleGliaWRvIG5vIEFyY0dJUyBlbSBwdC1CUiAoZXguOiAyLjAwMSDihpIgMjAwMSkuICovXG5mdW5jdGlvbiBub3JtYWxpemVZZWFyTnVtYmVyIChuOiBudW1iZXIpOiBudW1iZXIgfCBudWxsIHtcbiAgaWYgKCFOdW1iZXIuaXNGaW5pdGUobikpIHJldHVybiBudWxsXG5cbiAgaWYgKG4gPj0gMTk4NSAmJiBuIDw9IDIwMzUgJiYgTWF0aC5hYnMobiAtIE1hdGgucm91bmQobikpIDwgMC4wMDEpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChuKVxuICB9XG5cbiAgLy8gVGFiZWxhIFBST0RFUyBubyBQb3J0YWw6IGNvbHVuYSBBbm8gY29tbyAyLjAwMSwgMi4wMTEgKG1pbGhhciBjb20gcG9udG8pXG4gIGlmIChuID49IDEuOTg1ICYmIG4gPD0gMi4wMzUpIHtcbiAgICBjb25zdCB5ID0gTWF0aC5yb3VuZChuICogMTAwMClcbiAgICBpZiAoeSA+PSAxOTg1ICYmIHkgPD0gMjAzNSkgcmV0dXJuIHlcbiAgfVxuXG4gIGNvbnN0IHRydW5jYXRlZCA9IE1hdGgudHJ1bmMobilcbiAgaWYgKHRydW5jYXRlZCA+PSAxOTg1ICYmIHRydW5jYXRlZCA8PSAyMDM1KSByZXR1cm4gdHJ1bmNhdGVkXG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVllYXIgKHZhbHVlOiB1bmtub3duKTogbnVtYmVyIHwgbnVsbCB7XG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUgJiYgIU51bWJlci5pc05hTih2YWx1ZS5nZXRUaW1lKCkpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmdldEZ1bGxZZWFyKClcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiBOdW1iZXIuaXNGaW5pdGUodmFsdWUpKSB7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZVllYXJOdW1iZXIodmFsdWUpXG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCBzID0gdmFsdWUudHJpbSgpXG4gICAgaWYgKCFzKSByZXR1cm4gbnVsbFxuXG4gICAgY29uc3QgYnJUaG91c2FuZHMgPSBzLm1hdGNoKC9eKFxcZHsxLDJ9KVxcLihcXGR7M30pJC8pXG4gICAgaWYgKGJyVGhvdXNhbmRzKSB7XG4gICAgICBjb25zdCB5ID0gTnVtYmVyKGJyVGhvdXNhbmRzWzFdICsgYnJUaG91c2FuZHNbMl0pXG4gICAgICBpZiAoeSA+PSAxOTg1ICYmIHkgPD0gMjAzNSkgcmV0dXJuIHlcbiAgICB9XG5cbiAgICBjb25zdCBuID0gTnVtYmVyKHMucmVwbGFjZSgnLCcsICcuJykpXG4gICAgaWYgKE51bWJlci5pc0Zpbml0ZShuKSkgcmV0dXJuIG5vcm1hbGl6ZVllYXJOdW1iZXIobilcblxuICAgIGNvbnN0IG0gPSBzLm1hdGNoKC9cXGIoMTl8MjApXFxkezJ9XFxiLylcbiAgICBpZiAobSkgcmV0dXJuIE51bWJlcihtWzBdKVxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2hlbWFUb0ZpZWxkTGlzdCAoc2NoZW1hPzogSU1EYXRhU291cmNlU2NoZW1hIHwgbnVsbCk6IElNRmllbGRTY2hlbWFbXSB7XG4gIGlmICghc2NoZW1hPy5maWVsZHMpIHJldHVybiBbXVxuICByZXR1cm4gT2JqZWN0LmtleXMoc2NoZW1hLmZpZWxkcykubWFwKChrZXkpID0+IHNjaGVtYS5maWVsZHNba2V5XSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtZXJpY1JlY29ydGVGaWVsZCAoZmllbGQ6IElNRmllbGRTY2hlbWEpOiBib29sZWFuIHtcbiAgaWYgKGZpZWxkLnR5cGUgPT09IEppbXVGaWVsZFR5cGUuTnVtYmVyKSByZXR1cm4gdHJ1ZVxuICBjb25zdCBlc3JpID0gZmllbGQuZXNyaVR5cGVcbiAgcmV0dXJuIChcbiAgICBlc3JpID09PSBFc3JpRmllbGRUeXBlLkRvdWJsZSB8fFxuICAgIGVzcmkgPT09IEVzcmlGaWVsZFR5cGUuU2luZ2xlIHx8XG4gICAgZXNyaSA9PT0gRXNyaUZpZWxkVHlwZS5JbnRlZ2VyIHx8XG4gICAgZXNyaSA9PT0gRXNyaUZpZWxkVHlwZS5TbWFsbEludGVnZXJcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXR0cmlidXRlS2V5IChmaWVsZDogSU1GaWVsZFNjaGVtYSk6IHN0cmluZyB7XG4gIHJldHVybiBmaWVsZC5uYW1lIHx8IGZpZWxkLmppbXVOYW1lXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXRlY3RZZWFyRmllbGQgKGZpZWxkczogSU1GaWVsZFNjaGVtYVtdKTogc3RyaW5nIHwgbnVsbCB7XG4gIGNvbnN0IGV4YWN0QW5vID0gZmllbGRzLmZpbmQoXG4gICAgKGYpID0+XG4gICAgICBmLmppbXVOYW1lPy50b0xvd2VyQ2FzZSgpID09PSAnYW5vJyB8fFxuICAgICAgZi5uYW1lPy50b0xvd2VyQ2FzZSgpID09PSAnYW5vJyB8fFxuICAgICAgZi5hbGlhcz8udG9Mb3dlckNhc2UoKSA9PT0gJ2FubydcbiAgKVxuICBpZiAoZXhhY3RBbm8pIHJldHVybiBleGFjdEFuby5qaW11TmFtZVxuXG4gIGNvbnN0IGNhbmRpZGF0ZXMgPSBmaWVsZHMuZmlsdGVyKFxuICAgIChmKSA9PiBmLnR5cGUgPT09IEppbXVGaWVsZFR5cGUuTnVtYmVyIHx8IGYudHlwZSA9PT0gSmltdUZpZWxkVHlwZS5TdHJpbmdcbiAgKVxuICBmb3IgKGNvbnN0IHBhdCBvZiBZRUFSX05BTUVfUEFUVEVSTlMpIHtcbiAgICBjb25zdCBmb3VuZCA9IGNhbmRpZGF0ZXMuZmluZChcbiAgICAgIChmKSA9PlxuICAgICAgICBmLmppbXVOYW1lPy50b0xvd2VyQ2FzZSgpID09PSBwYXQgfHxcbiAgICAgICAgZi5uYW1lPy50b0xvd2VyQ2FzZSgpID09PSBwYXQgfHxcbiAgICAgICAgZi5hbGlhcz8udG9Mb3dlckNhc2UoKSA9PT0gcGF0XG4gICAgKVxuICAgIGlmIChmb3VuZCkgcmV0dXJuIGZvdW5kLmppbXVOYW1lXG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFJlY29ydGVMYWJlbCAoZmllbGQ6IElNRmllbGRTY2hlbWEpOiBzdHJpbmcge1xuICByZXR1cm4gZm9ybWF0UmVjb3J0ZUxhYmVsRnJvbU5hbWUoZmllbGQuamltdU5hbWUsIGZpZWxkLmFsaWFzKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UmVjb3J0ZUxhYmVsRnJvbU5hbWUgKGppbXVOYW1lOiBzdHJpbmcsIGFsaWFzPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKGFsaWFzPy50cmltKCkpIHJldHVybiBhbGlhcy50cmltKClcbiAgcmV0dXJuIGppbXVOYW1lXG4gICAgLnNwbGl0KCdfJylcbiAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgLm1hcCgodykgPT4gdy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHcuc2xpY2UoMSkudG9Mb3dlckNhc2UoKSlcbiAgICAuam9pbignICcpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTeXN0ZW1IaWRkZW5GaWVsZE5hbWVzIChmaWVsZHM6IElNRmllbGRTY2hlbWFbXSk6IHN0cmluZ1tdIHtcbiAgcmV0dXJuIGZpZWxkc1xuICAgIC5maWx0ZXIoKGYpID0+IHtcbiAgICAgIGNvbnN0IGVzcmkgPSBmLmVzcmlUeXBlXG4gICAgICByZXR1cm4gKFxuICAgICAgICBlc3JpID09PSBFc3JpRmllbGRUeXBlLk9JRCB8fFxuICAgICAgICBlc3JpID09PSBFc3JpRmllbGRUeXBlLkdlb21ldHJ5IHx8XG4gICAgICAgIGVzcmkgPT09IEVzcmlGaWVsZFR5cGUuR2xvYmFsSUQgfHxcbiAgICAgICAgZXNyaSA9PT0gRXNyaUZpZWxkVHlwZS5HVUlEXG4gICAgICApXG4gICAgfSlcbiAgICAubWFwKChmKSA9PiBmLmppbXVOYW1lKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVjb3J0ZUhpZGRlbkZpZWxkTmFtZXMgKFxuICBmaWVsZHM6IElNRmllbGRTY2hlbWFbXSxcbiAgeWVhckZpZWxkPzogc3RyaW5nXG4pOiBzdHJpbmdbXSB7XG4gIGNvbnN0IGhpZGRlbiA9IGdldFN5c3RlbUhpZGRlbkZpZWxkTmFtZXMoZmllbGRzKVxuICBpZiAoeWVhckZpZWxkICYmICFoaWRkZW4uaW5jbHVkZXMoeWVhckZpZWxkKSkge1xuICAgIGhpZGRlbi5wdXNoKHllYXJGaWVsZClcbiAgfVxuICByZXR1cm4gaGlkZGVuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWNvcnRlQ2FuZGlkYXRlRmllbGRzIChcbiAgZmllbGRzOiBJTUZpZWxkU2NoZW1hW10sXG4gIHllYXJGaWVsZD86IHN0cmluZ1xuKTogSU1GaWVsZFNjaGVtYVtdIHtcbiAgY29uc3QgaGlkZGVuID0gbmV3IFNldChnZXRSZWNvcnRlSGlkZGVuRmllbGROYW1lcyhmaWVsZHMsIHllYXJGaWVsZCkpXG4gIHJldHVybiBmaWVsZHNcbiAgICAuZmlsdGVyKChmKSA9PiBpc051bWVyaWNSZWNvcnRlRmllbGQoZikgJiYgIWhpZGRlbi5oYXMoZi5qaW11TmFtZSkpXG4gICAgLnNvcnQoKGEsIGIpID0+XG4gICAgICBmb3JtYXRSZWNvcnRlTGFiZWwoYSkubG9jYWxlQ29tcGFyZShmb3JtYXRSZWNvcnRlTGFiZWwoYiksICdwdC1CUicpXG4gICAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZEZpZWxkQnlKaW11TmFtZSAoXG4gIGZpZWxkczogSU1GaWVsZFNjaGVtYVtdLFxuICBqaW11TmFtZT86IHN0cmluZ1xuKTogSU1GaWVsZFNjaGVtYSB8IG51bGwge1xuICBpZiAoIWppbXVOYW1lKSByZXR1cm4gbnVsbFxuICBjb25zdCBleGFjdCA9IGZpZWxkcy5maW5kKChmKSA9PiBmLmppbXVOYW1lID09PSBqaW11TmFtZSlcbiAgaWYgKGV4YWN0KSByZXR1cm4gZXhhY3RcbiAgY29uc3QgbG93ZXIgPSBqaW11TmFtZS50b0xvd2VyQ2FzZSgpXG4gIHJldHVybiAoXG4gICAgZmllbGRzLmZpbmQoXG4gICAgICAoZikgPT5cbiAgICAgICAgZi5qaW11TmFtZT8udG9Mb3dlckNhc2UoKSA9PT0gbG93ZXIgfHxcbiAgICAgICAgZi5uYW1lPy50b0xvd2VyQ2FzZSgpID09PSBsb3dlciB8fFxuICAgICAgICBmLmFsaWFzPy50b0xvd2VyQ2FzZSgpID09PSBsb3dlclxuICAgICkgPz8gbnVsbFxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlQXR0cmlidXRlS2V5cyAoXG4gIGZpZWxkczogSU1GaWVsZFNjaGVtYVtdLFxuICB5ZWFyRmllbGRKaW11Pzogc3RyaW5nLFxuICByZWNvcnRlRmllbGRKaW11Pzogc3RyaW5nXG4pOiBGaWVsZEF0dHJpYnV0ZUtleXMgfCBudWxsIHtcbiAgaWYgKCF5ZWFyRmllbGRKaW11IHx8ICFyZWNvcnRlRmllbGRKaW11KSByZXR1cm4gbnVsbFxuXG4gIGNvbnN0IHllYXJGaWVsZCA9IGZpbmRGaWVsZEJ5SmltdU5hbWUoZmllbGRzLCB5ZWFyRmllbGRKaW11KVxuICBjb25zdCByZWNvcnRlRmllbGQgPSBmaW5kRmllbGRCeUppbXVOYW1lKGZpZWxkcywgcmVjb3J0ZUZpZWxkSmltdSlcblxuICByZXR1cm4ge1xuICAgIHllYXJLZXk6IHllYXJGaWVsZCA/IGdldEF0dHJpYnV0ZUtleSh5ZWFyRmllbGQpIDogeWVhckZpZWxkSmltdSxcbiAgICByZWNvcnRlS2V5OiByZWNvcnRlRmllbGQgPyBnZXRBdHRyaWJ1dGVLZXkocmVjb3J0ZUZpZWxkKSA6IHJlY29ydGVGaWVsZEppbXVcbiAgfVxufVxuXG50eXBlIFJlY29yZExpa2UgPVxuICB8IERhdGFSZWNvcmRcbiAgfCB7XG4gICAgICBhdHRyaWJ1dGVzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgICAgIGZlYXR1cmU/OiB7IGF0dHJpYnV0ZXM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB9XG4gICAgICBnZXREYXRhPzogKCkgPT4ge1xuICAgICAgICBhdHRyaWJ1dGVzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgICAgICAgZmVhdHVyZT86IHsgYXR0cmlidXRlcz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+IH1cbiAgICAgIH1cbiAgICAgIGdldEZpZWxkVmFsdWU/OiAoamltdUZpZWxkTmFtZTogc3RyaW5nKSA9PiB1bmtub3duXG4gICAgICBnZXREYXRlRmllbGRWYWx1ZT86IChqaW11RmllbGROYW1lOiBzdHJpbmcpID0+IHVua25vd25cbiAgICAgIGdldERhdGFCZWZvcmVNYXBwaW5nPzogKCkgPT4gUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgICB9XG5cbmZ1bmN0aW9uIHRvUGxhaW5PYmplY3QgKHZhbHVlOiB1bmtub3duKTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4ge1xuICBpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHJldHVybiB7fVxuICBjb25zdCB2ID0gdmFsdWUgYXMge1xuICAgIHRvSlM/OiAoKSA9PiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICAgIGFzTXV0YWJsZT86IChvcHRzPzogeyBkZWVwOiBib29sZWFuIH0pID0+IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gIH1cbiAgaWYgKHR5cGVvZiB2LnRvSlMgPT09ICdmdW5jdGlvbicpIHJldHVybiB2LnRvSlMoKVxuICBpZiAodHlwZW9mIHYuYXNNdXRhYmxlID09PSAnZnVuY3Rpb24nKSByZXR1cm4gdi5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pXG4gIHJldHVybiB2YWx1ZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxufVxuXG5jb25zdCBHRVRfREFUQV9NRVRBX0tFWVMgPSBuZXcgU2V0KFtcbiAgJ2F0dHJpYnV0ZXMnLFxuICAnZmVhdHVyZScsXG4gICdnZW9tZXRyeScsXG4gICdjZW50cm9pZCcsXG4gICdhZ2dyZWdhdGVHZW9tZXRyaWVzJyxcbiAgJ3N5bWJvbCdcbl0pXG5cbi8qKiBFeHRyYWkgbyBkaWNpb27DoXJpbyBkZSBhdHJpYnV0b3MgZGUgdW0gcmVnaXN0cm8gKHbDoXJpb3MgZm9ybWF0b3MgZG8gSmltdS9BcmNHSVMpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFBsYWluQXR0cmlidXRlcyAocmVjOiBSZWNvcmRMaWtlKTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4ge1xuICBjb25zdCBtZXJnZWQ6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge31cblxuICBjb25zdCBtZXJnZSA9IChhdHRycz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+KSA9PiB7XG4gICAgaWYgKCFhdHRycykgcmV0dXJuXG4gICAgT2JqZWN0LmFzc2lnbihtZXJnZWQsIHRvUGxhaW5PYmplY3QoYXR0cnMpKVxuICB9XG5cbiAgaWYgKCdnZXREYXRhJyBpbiByZWMgJiYgdHlwZW9mIHJlYy5nZXREYXRhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3QgZGF0YSA9IHJlYy5nZXREYXRhKClcbiAgICBjb25zdCBwbGFpbiA9IHRvUGxhaW5PYmplY3QoZGF0YSlcbiAgICBtZXJnZShwbGFpbi5hdHRyaWJ1dGVzIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgdW5kZWZpbmVkKVxuICAgIG1lcmdlKHBsYWluLmZlYXR1cmU/LmF0dHJpYnV0ZXMgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCB1bmRlZmluZWQpXG4gICAgLy8gSmltdSBEYXRhUmVjb3JkOiBnZXREYXRhKCkgY29zdHVtYSBzZXIgbWFwYSBwbGFubyB7IGppbXVGaWVsZE5hbWU6IHZhbG9yIH1cbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwbGFpbikpIHtcbiAgICAgIGlmIChHRVRfREFUQV9NRVRBX0tFWVMuaGFzKGtleSkpIGNvbnRpbnVlXG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkgbWVyZ2VkW2tleV0gPSB2YWx1ZVxuICAgIH1cbiAgfVxuXG4gIGlmICgnZmVhdHVyZScgaW4gcmVjICYmIHJlYy5mZWF0dXJlPy5hdHRyaWJ1dGVzKSB7XG4gICAgbWVyZ2UocmVjLmZlYXR1cmUuYXR0cmlidXRlcylcbiAgfVxuXG4gIGlmICgnYXR0cmlidXRlcycgaW4gcmVjICYmIHJlYy5hdHRyaWJ1dGVzKSB7XG4gICAgbWVyZ2UocmVjLmF0dHJpYnV0ZXMpXG4gIH1cblxuICBpZiAoJ2dldERhdGFCZWZvcmVNYXBwaW5nJyBpbiByZWMgJiYgdHlwZW9mIHJlYy5nZXREYXRhQmVmb3JlTWFwcGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG1lcmdlKHJlYy5nZXREYXRhQmVmb3JlTWFwcGluZygpKVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlZFxufVxuXG5mdW5jdGlvbiBhdHRyaWJ1dGVIYXNVc2FibGVWYWx1ZSAodmFsdWU6IHVua25vd24pOiBib29sZWFuIHtcbiAgaWYgKGlzRW1wdHlDZWxsKHZhbHVlKSkgcmV0dXJuIGZhbHNlXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSByZXR1cm4gZmFsc2VcbiAgcmV0dXJuIHRydWVcbn1cblxuLyoqIFZlcmlmaWNhIHNlIG8gcmVnaXN0cm8gZXhww7VlIGF0cmlidXRvcyBvdSBnZXRGaWVsZFZhbHVlIGNvbSBkYWRvcyByZWFpcyAobsOjbyBzw7MgbcOpdG9kbyB2YXppbykuICovXG5leHBvcnQgZnVuY3Rpb24gcmVjb3JkSGFzUmVhZGFibGVEYXRhIChyZWM6IFJlY29yZExpa2UpOiBib29sZWFuIHtcbiAgY29uc3QgYXR0cnMgPSBnZXRQbGFpbkF0dHJpYnV0ZXMocmVjKVxuICBjb25zdCB1c2FibGVLZXlzID0gT2JqZWN0LmtleXMoYXR0cnMpLmZpbHRlcigoa2V5KSA9PiB7XG4gICAgaWYgKC9eKG9iamVjdGlkfGdsb2JhbGlkfHNoYXBlfGdlb21ldHJ5KSQvaS50ZXN0KGtleSkpIHJldHVybiBmYWxzZVxuICAgIHJldHVybiBhdHRyaWJ1dGVIYXNVc2FibGVWYWx1ZShhdHRyc1trZXldKVxuICB9KVxuICBpZiAodXNhYmxlS2V5cy5sZW5ndGggPiAwKSByZXR1cm4gdHJ1ZVxuXG4gIGlmICgnZ2V0RmllbGRWYWx1ZScgaW4gcmVjICYmIHR5cGVvZiByZWMuZ2V0RmllbGRWYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IHByb2JlcyA9IFtcbiAgICAgICdhbm8nLFxuICAgICAgJ3llYXInLFxuICAgICAgJ0FOTycsXG4gICAgICAnWWVhcicsXG4gICAgICAnZXhlcmNpY2lvJyxcbiAgICAgICdFeGVyY2ljaW8nXG4gICAgXVxuICAgIGZvciAoY29uc3QgbmFtZSBvZiBwcm9iZXMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHYgPSByZWMuZ2V0RmllbGRWYWx1ZSEobmFtZSlcbiAgICAgICAgaWYgKGF0dHJpYnV0ZUhhc1VzYWJsZVZhbHVlKHYpKSByZXR1cm4gdHJ1ZVxuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIHRlbnRhIHByw7N4aW1vXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8qKiBMw6ogdmFsb3IgcGVsbyBBUEkgZG8gSmltdSAoYGdldEZpZWxkVmFsdWVgKSBlLCBlbSBzZWd1aWRhLCBwZWxvcyBhdHJpYnV0b3MgYnJ1dG9zLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlYWRSZWNvcmRWYWx1ZSAoXG4gIHJlYzogUmVjb3JkTGlrZSxcbiAgZmllbGQ/OiBJTUZpZWxkU2NoZW1hIHwgbnVsbCxcbiAgZmFsbGJhY2tKaW11TmFtZT86IHN0cmluZ1xuKTogdW5rbm93biB7XG4gIGNvbnN0IG5hbWVzOiBzdHJpbmdbXSA9IFtdXG4gIGlmIChmaWVsZD8uamltdU5hbWUpIG5hbWVzLnB1c2goZmllbGQuamltdU5hbWUpXG4gIGlmIChmYWxsYmFja0ppbXVOYW1lKSBuYW1lcy5wdXNoKGZhbGxiYWNrSmltdU5hbWUpXG4gIGlmIChmaWVsZD8ubmFtZSkgbmFtZXMucHVzaChmaWVsZC5uYW1lKVxuICBpZiAoZmllbGQ/LmFsaWFzKSBuYW1lcy5wdXNoKGZpZWxkLmFsaWFzKVxuICBpZiAoZmllbGQpIG5hbWVzLnB1c2goZ2V0QXR0cmlidXRlS2V5KGZpZWxkKSlcblxuICBjb25zdCB1bmlxdWVOYW1lcyA9IFsuLi5uZXcgU2V0KG5hbWVzLmZpbHRlcihCb29sZWFuKSldXG5cbiAgaWYgKCdnZXRGaWVsZFZhbHVlJyBpbiByZWMgJiYgdHlwZW9mIHJlYy5nZXRGaWVsZFZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm9yIChjb25zdCBuYW1lIG9mIHVuaXF1ZU5hbWVzKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB2ID0gcmVjLmdldEZpZWxkVmFsdWUhKG5hbWUpXG4gICAgICAgIGlmICh2ICE9PSB1bmRlZmluZWQpIHJldHVybiB2XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgLy8gdGVudGEgcHLDs3hpbW8gbm9tZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChcbiAgICBmaWVsZD8uamltdU5hbWUgJiZcbiAgICAnZ2V0RGF0ZUZpZWxkVmFsdWUnIGluIHJlYyAmJlxuICAgIHR5cGVvZiByZWMuZ2V0RGF0ZUZpZWxkVmFsdWUgPT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHYgPSByZWMuZ2V0RGF0ZUZpZWxkVmFsdWUhKGZpZWxkLmppbXVOYW1lKVxuICAgICAgaWYgKHYgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHZcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIGlnbm9yYVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGF0dHJzID0gZ2V0UGxhaW5BdHRyaWJ1dGVzKHJlYylcbiAgY29uc3QgZnJvbU1hcHBlZCA9IHJlYWRBdHRyaWJ1dGVGbGV4aWJsZShhdHRycywgZmllbGQsIGZhbGxiYWNrSmltdU5hbWUpXG4gIGlmIChmcm9tTWFwcGVkICE9PSB1bmRlZmluZWQpIHJldHVybiBmcm9tTWFwcGVkXG5cbiAgaWYgKCdnZXREYXRhQmVmb3JlTWFwcGluZycgaW4gcmVjICYmIHR5cGVvZiByZWMuZ2V0RGF0YUJlZm9yZU1hcHBpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCByYXcgPSB0b1BsYWluT2JqZWN0KHJlYy5nZXREYXRhQmVmb3JlTWFwcGluZygpKVxuICAgIHJldHVybiByZWFkQXR0cmlidXRlRmxleGlibGUocmF3LCBmaWVsZCwgZmFsbGJhY2tKaW11TmFtZSlcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gcmVhZEF0dHJpYnV0ZSAoXG4gIGF0dHJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbiAgcHJpbWFyeUtleTogc3RyaW5nLFxuICBmYWxsYmFja0tleT86IHN0cmluZ1xuKTogdW5rbm93biB7XG4gIGlmIChwcmltYXJ5S2V5IGluIGF0dHJzKSByZXR1cm4gYXR0cnNbcHJpbWFyeUtleV1cbiAgaWYgKGZhbGxiYWNrS2V5ICYmIGZhbGxiYWNrS2V5ICE9PSBwcmltYXJ5S2V5ICYmIGZhbGxiYWNrS2V5IGluIGF0dHJzKSB7XG4gICAgcmV0dXJuIGF0dHJzW2ZhbGxiYWNrS2V5XVxuICB9XG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuLyoqIFRlbnRhIGppbXVOYW1lLCBuYW1lLCBhbGlhcyBlIGNvcnJlc3BvbmTDqm5jaWEgc2VtIGRpZmVyZW5jaWFyIG1hacO6c2N1bGFzL21pbsO6c2N1bGFzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlYWRBdHRyaWJ1dGVGbGV4aWJsZSAoXG4gIGF0dHJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbiAgZmllbGQ/OiBJTUZpZWxkU2NoZW1hIHwgbnVsbCxcbiAgZmFsbGJhY2tKaW11TmFtZT86IHN0cmluZ1xuKTogdW5rbm93biB7XG4gIGNvbnN0IGNhbmRpZGF0ZXMgPSBuZXcgU2V0PHN0cmluZz4oKVxuICBpZiAoZmllbGQpIHtcbiAgICBpZiAoZmllbGQuamltdU5hbWUpIGNhbmRpZGF0ZXMuYWRkKGZpZWxkLmppbXVOYW1lKVxuICAgIGlmIChmaWVsZC5uYW1lKSBjYW5kaWRhdGVzLmFkZChmaWVsZC5uYW1lKVxuICAgIGlmIChmaWVsZC5hbGlhcykgY2FuZGlkYXRlcy5hZGQoZmllbGQuYWxpYXMpXG4gICAgY2FuZGlkYXRlcy5hZGQoZ2V0QXR0cmlidXRlS2V5KGZpZWxkKSlcbiAgfVxuICBpZiAoZmFsbGJhY2tKaW11TmFtZSkgY2FuZGlkYXRlcy5hZGQoZmFsbGJhY2tKaW11TmFtZSlcblxuICBmb3IgKGNvbnN0IGtleSBvZiBjYW5kaWRhdGVzKSB7XG4gICAgY29uc3QgdiA9IHJlYWRBdHRyaWJ1dGUoYXR0cnMsIGtleSlcbiAgICBpZiAodiAhPT0gdW5kZWZpbmVkKSByZXR1cm4gdlxuICB9XG5cbiAgY29uc3QgYXR0cktleXMgPSBPYmplY3Qua2V5cyhhdHRycylcbiAgZm9yIChjb25zdCBrZXkgb2YgY2FuZGlkYXRlcykge1xuICAgIGNvbnN0IGZvdW5kID0gYXR0cktleXMuZmluZCgoaykgPT4gay50b0xvd2VyQ2FzZSgpID09PSBrZXkudG9Mb3dlckNhc2UoKSlcbiAgICBpZiAoZm91bmQgIT0gbnVsbCkgcmV0dXJuIGF0dHJzW2ZvdW5kXVxuICB9XG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxudHlwZSBRdWVyaWFibGVMYXllciA9IHtcbiAgcXVlcnk/OiAocTogb2JqZWN0LCBvcHRpb25zPzogeyBzY29wZT86IFF1ZXJ5U2NvcGUgfSkgPT4gUHJvbWlzZTx7IHJlY29yZHM/OiBEYXRhUmVjb3JkW10gfT5cbiAgbG9hZD86IChxOiBvYmplY3QsIG9wdGlvbnM/OiB7IHNjb3BlPzogUXVlcnlTY29wZSB9KSA9PiBQcm9taXNlPERhdGFSZWNvcmRbXT5cbiAgbG9hZEFsbD86IChcbiAgICBxOiBvYmplY3QsXG4gICAgc2lnbmFsPzogQWJvcnRTaWduYWwsXG4gICAgcHJvZ3Jlc3NDYWxsYmFjaz86IHVua25vd24sXG4gICAgb3B0aW9ucz86IHsgc2NvcGU/OiBRdWVyeVNjb3BlIH1cbiAgKSA9PiBQcm9taXNlPERhdGFSZWNvcmRbXT5cbiAgZ2V0QWxsTG9hZGVkUmVjb3Jkcz86ICgpID0+IERhdGFSZWNvcmRbXVxuICBnZXRSZWNvcmRzPzogKCkgPT4gRGF0YVJlY29yZFtdXG4gIGxheWVyPzogeyBxdWVyeUZlYXR1cmVzPzogKHE6IG9iamVjdCkgPT4gUHJvbWlzZTx7IGZlYXR1cmVzPzogdW5rbm93bltdIH0+IH1cbiAgYnVpbGRSZWNvcmQ/OiAoZmVhdHVyZTogdW5rbm93bikgPT4gRGF0YVJlY29yZFxufVxuXG5jb25zdCBidWlsZFF1ZXJ5T3B0aW9ucyA9ICh3aWRnZXRJZD86IHN0cmluZykgPT4gKHtcbiAgc2NvcGU6IFF1ZXJ5U2NvcGUuSW5BbGxEYXRhLFxuICAuLi4od2lkZ2V0SWQgPyB7IHdpZGdldElkIH0gOiB7fSlcbn0pXG5cbmNvbnN0IGJ1aWxkUXVlcnlQYXJhbXMgPSAoXG4gIG91dEZpZWxkczogc3RyaW5nW10gPSBbJyonXSxcbiAgZGlzYWJsZUNsaWVudFF1ZXJ5ID0gZmFsc2VcbikgPT4gKHtcbiAgd2hlcmU6ICcxPTEnLFxuICBvdXRGaWVsZHMsXG4gIHJldHVybkdlb21ldHJ5OiBmYWxzZSxcbiAgcGFnZVNpemU6IDIwMDAsXG4gIC4uLihkaXNhYmxlQ2xpZW50UXVlcnkgPyB7IGRpc2FibGVDbGllbnRRdWVyeTogdHJ1ZSB9IDoge30pXG59KVxuXG5mdW5jdGlvbiByZWNvcmRzQXJlUmVhZGFibGUgKHJlY29yZHM6IERhdGFSZWNvcmRbXSk6IGJvb2xlYW4ge1xuICByZXR1cm4gcmVjb3Jkcy5sZW5ndGggPiAwICYmIHJlY29yZHMuc29tZShyZWNvcmRIYXNSZWFkYWJsZURhdGEpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHF1ZXJ5VmlhSnNhcGlMYXllciAoZHM6IFF1ZXJpYWJsZUxheWVyKTogUHJvbWlzZTxEYXRhUmVjb3JkW10+IHtcbiAgY29uc3QgbGF5ZXIgPSBkcy5sYXllciBhcyB7XG4gICAgcXVlcnlGZWF0dXJlcz86IChxOiBvYmplY3QpID0+IFByb21pc2U8eyBmZWF0dXJlcz86IHVua25vd25bXSB9PlxuICAgIHF1ZXJ5PzogKHE6IG9iamVjdCkgPT4gUHJvbWlzZTx7IGZlYXR1cmVzPzogdW5rbm93bltdIH0+XG4gIH1cbiAgaWYgKCFsYXllciB8fCB0eXBlb2YgZHMuYnVpbGRSZWNvcmQgIT09ICdmdW5jdGlvbicpIHJldHVybiBbXVxuXG4gIGNvbnN0IHEgPSB7XG4gICAgd2hlcmU6ICcxPTEnLFxuICAgIG91dEZpZWxkczogWycqJ10sXG4gICAgcmV0dXJuR2VvbWV0cnk6IGZhbHNlLFxuICAgIG51bTogMjAwMFxuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPVxuICAgICAgdHlwZW9mIGxheWVyLnF1ZXJ5RmVhdHVyZXMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBhd2FpdCBsYXllci5xdWVyeUZlYXR1cmVzKHEpXG4gICAgICAgIDogdHlwZW9mIGxheWVyLnF1ZXJ5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgPyBhd2FpdCBsYXllci5xdWVyeShxKVxuICAgICAgICAgIDogbnVsbFxuICAgIGNvbnN0IGZlYXR1cmVzID0gcmVzdWx0Py5mZWF0dXJlcyA/PyBbXVxuICAgIHJldHVybiBmZWF0dXJlcy5tYXAoKGYpID0+IGRzLmJ1aWxkUmVjb3JkIShmKSlcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hWaWFBcmNnaXNSZXN0IChcbiAgZHM6IHsgdXJsPzogc3RyaW5nIH1cbik6IFByb21pc2U8UmVjb3JkPHN0cmluZywgdW5rbm93bj5bXT4ge1xuICBpZiAoIWRzLnVybCkgcmV0dXJuIFtdXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZXNyaS5yZXN0RmVhdHVyZVNlcnZpY2UucXVlcnlGZWF0dXJlcyh7XG4gICAgICB1cmw6IGRzLnVybCxcbiAgICAgIHdoZXJlOiAnMT0xJyxcbiAgICAgIG91dEZpZWxkczogWycqJ10sXG4gICAgICByZXR1cm5HZW9tZXRyeTogZmFsc2VcbiAgICB9KVxuICAgIGNvbnN0IGZlYXR1cmVzID1cbiAgICAgIHJlcyAmJiB0eXBlb2YgcmVzID09PSAnb2JqZWN0JyAmJiAnZmVhdHVyZXMnIGluIHJlc1xuICAgICAgICA/IChyZXMgYXMgeyBmZWF0dXJlcz86IEFycmF5PHsgYXR0cmlidXRlcz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+IH0+IH0pXG4gICAgICAgICAgICAuZmVhdHVyZXMgPz8gW11cbiAgICAgICAgOiBbXVxuICAgIHJldHVybiBmZWF0dXJlc1xuICAgICAgLm1hcCgoZikgPT4gKHsgLi4uKGYuYXR0cmlidXRlcyA/PyB7fSkgfSkpXG4gICAgICAuZmlsdGVyKChhKSA9PiBPYmplY3Qua2V5cyhhKS5sZW5ndGggPiAwKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gW11cbiAgfVxufVxuXG4vKiogQ29uc3VsdGEgUkVTVCBjb20gY3JlZGVuY2lhbCBkbyBQb3J0YWwgKEVudGVycHJpc2UpLiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoVmlhUG9ydGFsUmVzdCAoXG4gIGRzOiB7IHVybD86IHN0cmluZyB9XG4pOiBQcm9taXNlPFJlY29yZDxzdHJpbmcsIHVua25vd24+W10+IHtcbiAgaWYgKCFkcy51cmwpIHJldHVybiBbXVxuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlcXVlc3RVdGlscy5yZXF1ZXN0V3JhcHBlcihkcy51cmwsIChzZXNzaW9uKSA9PlxuICAgICAgZXNyaS5yZXN0RmVhdHVyZVNlcnZpY2UucXVlcnlGZWF0dXJlcyh7XG4gICAgICAgIHVybDogZHMudXJsLFxuICAgICAgICB3aGVyZTogJzE9MScsXG4gICAgICAgIG91dEZpZWxkczogWycqJ10sXG4gICAgICAgIHJldHVybkdlb21ldHJ5OiBmYWxzZSxcbiAgICAgICAgYXV0aGVudGljYXRpb246IHNlc3Npb25cbiAgICAgIH0pXG4gICAgKVxuICAgIGNvbnN0IGZlYXR1cmVzID1cbiAgICAgIHJlcyAmJiB0eXBlb2YgcmVzID09PSAnb2JqZWN0JyAmJiAnZmVhdHVyZXMnIGluIHJlc1xuICAgICAgICA/IChyZXMgYXMgeyBmZWF0dXJlcz86IEFycmF5PHsgYXR0cmlidXRlcz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+IH0+IH0pXG4gICAgICAgICAgICAuZmVhdHVyZXMgPz8gW11cbiAgICAgICAgOiBbXVxuICAgIHJldHVybiBmZWF0dXJlc1xuICAgICAgLm1hcCgoZikgPT4gKHsgLi4uKGYuYXR0cmlidXRlcyA/PyB7fSkgfSkpXG4gICAgICAuZmlsdGVyKChhKSA9PiBPYmplY3Qua2V5cyhhKS5sZW5ndGggPiAwKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmV0Y2hWaWFBcmNnaXNSZXN0KGRzKVxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJ1blF1ZXJ5YWJsZU1ldGhvZHMgKFxuICBkczogUXVlcmlhYmxlTGF5ZXIsXG4gIG91dEZpZWxkczogc3RyaW5nW10sXG4gIGRpc2FibGVDbGllbnRRdWVyeTogYm9vbGVhbixcbiAgd2lkZ2V0SWQ/OiBzdHJpbmdcbik6IFByb21pc2U8RGF0YVJlY29yZFtdPiB7XG4gIGNvbnN0IHBhcmFtcyA9IGJ1aWxkUXVlcnlQYXJhbXMob3V0RmllbGRzLCBkaXNhYmxlQ2xpZW50UXVlcnkpXG4gIGNvbnN0IHF1ZXJ5T3B0aW9ucyA9IGJ1aWxkUXVlcnlPcHRpb25zKHdpZGdldElkKVxuXG4gIGlmICh0eXBlb2YgZHM/LmxvYWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IGRzLmxvYWQocGFyYW1zLCBxdWVyeU9wdGlvbnMpXG4gICAgICBpZiAocmVjb3Jkcz8ubGVuZ3RoICYmIHJlY29yZHNBcmVSZWFkYWJsZShyZWNvcmRzKSkgcmV0dXJuIHJlY29yZHNcbiAgICAgIGlmIChyZWNvcmRzPy5sZW5ndGggJiYgIWRpc2FibGVDbGllbnRRdWVyeSkgcmV0dXJuIHJlY29yZHNcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIHRlbnRhIHByw7N4aW1vIG3DqXRvZG9cbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIGRzPy5sb2FkQWxsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBkcy5sb2FkQWxsKHBhcmFtcywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHF1ZXJ5T3B0aW9ucylcbiAgICAgIGlmIChyZWNvcmRzPy5sZW5ndGggJiYgcmVjb3Jkc0FyZVJlYWRhYmxlKHJlY29yZHMpKSByZXR1cm4gcmVjb3Jkc1xuICAgICAgaWYgKHJlY29yZHM/Lmxlbmd0aCAmJiAhZGlzYWJsZUNsaWVudFF1ZXJ5KSByZXR1cm4gcmVjb3Jkc1xuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gdGVudGEgcXVlcnkgYWJhaXhvXG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiBkcz8ucXVlcnkgPT09ICdmdW5jdGlvbicpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZHMucXVlcnkocGFyYW1zLCBxdWVyeU9wdGlvbnMpXG4gICAgICBjb25zdCByZWNvcmRzID0gcmVzdWx0Py5yZWNvcmRzID8/IFtdXG4gICAgICBpZiAocmVjb3Jkcy5sZW5ndGggJiYgcmVjb3Jkc0FyZVJlYWRhYmxlKHJlY29yZHMpKSByZXR1cm4gcmVjb3Jkc1xuICAgICAgaWYgKHJlY29yZHMubGVuZ3RoICYmICFkaXNhYmxlQ2xpZW50UXVlcnkpIHJldHVybiByZWNvcmRzXG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyB0ZW50YSBKUyBBUElcbiAgICB9XG4gIH1cblxuICBjb25zdCB2aWFMYXllciA9IGF3YWl0IHF1ZXJ5VmlhSnNhcGlMYXllcihkcylcbiAgaWYgKHZpYUxheWVyLmxlbmd0aCAmJiByZWNvcmRzQXJlUmVhZGFibGUodmlhTGF5ZXIpKSByZXR1cm4gdmlhTGF5ZXJcbiAgaWYgKHZpYUxheWVyLmxlbmd0aCAmJiAhZGlzYWJsZUNsaWVudFF1ZXJ5KSByZXR1cm4gdmlhTGF5ZXJcblxuICByZXR1cm4gW11cbn1cblxuYXN5bmMgZnVuY3Rpb24gcXVlcnlBbGxSZWNvcmRzIChcbiAgZHM6IFF1ZXJpYWJsZUxheWVyLFxuICBvdXRGaWVsZHM6IHN0cmluZ1tdID0gWycqJ10sXG4gIHdpZGdldElkPzogc3RyaW5nXG4pOiBQcm9taXNlPERhdGFSZWNvcmRbXT4ge1xuICBsZXQgcmVjb3JkcyA9IGF3YWl0IHJ1blF1ZXJ5YWJsZU1ldGhvZHMoZHMsIG91dEZpZWxkcywgZmFsc2UsIHdpZGdldElkKVxuICBpZiAocmVjb3Jkc0FyZVJlYWRhYmxlKHJlY29yZHMpKSByZXR1cm4gcmVjb3Jkc1xuXG4gIHJlY29yZHMgPSBhd2FpdCBydW5RdWVyeWFibGVNZXRob2RzKGRzLCBvdXRGaWVsZHMsIHRydWUsIHdpZGdldElkKVxuICBpZiAocmVjb3Jkc0FyZVJlYWRhYmxlKHJlY29yZHMpKSByZXR1cm4gcmVjb3Jkc1xuXG4gIHJldHVybiByZWNvcmRzXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmV0Y2hMYXllclJlY29yZHNPcHRpb25zIHtcbiAgLyoqIElnbm9yYSBjYWNoZSBkbyBtYXBhIGUgZm9yw6dhIHF1ZXJ5L2xvYWRBbGwgKMO6dGlsIG5vIEVudGVycHJpc2UpLiAqL1xuICBmb3JjZVF1ZXJ5PzogYm9vbGVhblxuICB5ZWFyRmllbGRKaW11Pzogc3RyaW5nXG4gIHJlY29ydGVGaWVsZEppbXU/OiBzdHJpbmdcbiAgZmllbGRzPzogSU1GaWVsZFNjaGVtYVtdXG4gIC8qKiBJRCBkYSB3aWRnZXQgcGFyYSBhdXRlbnRpY2HDp8OjbyBuYSBjb25zdWx0YSBKaW11LiAqL1xuICB3aWRnZXRJZD86IHN0cmluZ1xufVxuXG5mdW5jdGlvbiByZXNvbHZlT3V0RmllbGRzIChcbiAgeWVhckZpZWxkSmltdT86IHN0cmluZyxcbiAgcmVjb3J0ZUZpZWxkSmltdT86IHN0cmluZyxcbiAgZmllbGRzPzogSU1GaWVsZFNjaGVtYVtdXG4pOiBzdHJpbmdbXSB7XG4gIGlmICghZmllbGRzPy5sZW5ndGggfHwgIXllYXJGaWVsZEppbXUgfHwgIXJlY29ydGVGaWVsZEppbXUpIHJldHVybiBbJyonXVxuICBjb25zdCBrZXlzID0gcmVzb2x2ZUF0dHJpYnV0ZUtleXMoZmllbGRzLCB5ZWFyRmllbGRKaW11LCByZWNvcnRlRmllbGRKaW11KVxuICBpZiAoIWtleXMpIHJldHVybiBbJyonXVxuICByZXR1cm4gWycqJywga2V5cy55ZWFyS2V5LCBrZXlzLnJlY29ydGVLZXldXG59XG5cbi8qKiBEZXRlY3RhIGNvbHVuYSBkZSBhbm8gcGVsb3MgdmFsb3JlcyByZWFpcyAoZXguOiBBbm8gPSAyLjAwMSwgMjAwMSkuICovXG5leHBvcnQgZnVuY3Rpb24gZGV0ZWN0WWVhcktleUZyb21Sb3dzIChcbiAgcm93czogUmVjb3JkPHN0cmluZywgdW5rbm93bj5bXSxcbiAgaGludD86IHN0cmluZ1xuKTogc3RyaW5nIHwgbnVsbCB7XG4gIGlmICghcm93cy5sZW5ndGgpIHJldHVybiBudWxsXG5cbiAgY29uc3Qga2V5cyA9IG5ldyBTZXQ8c3RyaW5nPigpXG4gIGZvciAoY29uc3Qgcm93IG9mIHJvd3Muc2xpY2UoMCwgNTApKSB7XG4gICAgT2JqZWN0LmtleXMocm93KS5mb3JFYWNoKChrKSA9PiBrZXlzLmFkZChrKSlcbiAgfVxuXG4gIGlmIChoaW50KSB7XG4gICAgY29uc3QgbWF0Y2ggPSBbLi4ua2V5c10uZmluZCgoaykgPT4gay50b0xvd2VyQ2FzZSgpID09PSBoaW50LnRvTG93ZXJDYXNlKCkpXG4gICAgaWYgKG1hdGNoKSByZXR1cm4gbWF0Y2hcbiAgfVxuXG4gIGxldCBiZXN0S2V5OiBzdHJpbmcgfCBudWxsID0gbnVsbFxuICBsZXQgYmVzdFNjb3JlID0gMFxuICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgaWYgKC9eKG9iamVjdGlkfGdsb2JhbGlkfHNoYXBlfGZpZCkkL2kudGVzdChrZXkpKSBjb250aW51ZVxuICAgIGxldCBzY29yZSA9IDBcbiAgICBmb3IgKGNvbnN0IHJvdyBvZiByb3dzKSB7XG4gICAgICBjb25zdCB5ID0gcGFyc2VZZWFyKHJvd1trZXldKVxuICAgICAgaWYgKHkgIT0gbnVsbCAmJiB5ID49IDE5ODUgJiYgeSA8PSAyMDM1KSBzY29yZSsrXG4gICAgfVxuICAgIGlmIChzY29yZSA+IGJlc3RTY29yZSkge1xuICAgICAgYmVzdFNjb3JlID0gc2NvcmVcbiAgICAgIGJlc3RLZXkgPSBrZXlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJlc3RTY29yZSA+IDAgPyBiZXN0S2V5IDogbnVsbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGV0ZWN0UmVjb3J0ZUtleUZyb21Sb3dzIChcbiAgcm93czogUmVjb3JkPHN0cmluZywgdW5rbm93bj5bXSxcbiAgcmVjb3J0ZUhpbnQ6IHN0cmluZ1xuKTogc3RyaW5nIHwgbnVsbCB7XG4gIGlmICghcm93cy5sZW5ndGgpIHJldHVybiBudWxsXG4gIGNvbnN0IGtleXMgPSBuZXcgU2V0PHN0cmluZz4oKVxuICBmb3IgKGNvbnN0IHJvdyBvZiByb3dzLnNsaWNlKDAsIDUpKSB7XG4gICAgT2JqZWN0LmtleXMocm93KS5mb3JFYWNoKChrKSA9PiBrZXlzLmFkZChrKSlcbiAgfVxuICBjb25zdCBleGFjdCA9IFsuLi5rZXlzXS5maW5kKFxuICAgIChrKSA9PiBrLnRvTG93ZXJDYXNlKCkgPT09IHJlY29ydGVIaW50LnRvTG93ZXJDYXNlKClcbiAgKVxuICBpZiAoZXhhY3QpIHJldHVybiBleGFjdFxuICByZXR1cm4gKFxuICAgIFsuLi5rZXlzXS5maW5kKFxuICAgICAgKGspID0+XG4gICAgICAgIG5vcm1hbGl6ZVJlY29ydGVUb2tlbihrKSA9PT0gbm9ybWFsaXplUmVjb3J0ZVRva2VuKHJlY29ydGVIaW50KVxuICAgICkgPz8gbnVsbFxuICApXG59XG5cbi8qKiBNb250YSBzw6lyaWUgYSBwYXJ0aXIgZGUgYXRyaWJ1dG9zIGJydXRvcyAoUkVTVCAvIHF1ZXJ5RmVhdHVyZXMpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkWWVhclNlcmllc0Zyb21BdHRyaWJ1dGVSb3dzIChcbiAgcm93czogUmVjb3JkPHN0cmluZywgdW5rbm93bj5bXSxcbiAgeWVhckZpZWxkSmltdTogc3RyaW5nLFxuICByZWNvcnRlRmllbGRKaW11OiBzdHJpbmcsXG4gIGZpZWxkcz86IElNRmllbGRTY2hlbWFbXVxuKTogWWVhclZhbHVlUm93W10ge1xuICBpZiAoIXJvd3MubGVuZ3RoKSByZXR1cm4gW11cblxuICBjb25zdCBhc1JlY29yZHMgPSByb3dzLm1hcCgoYXR0cmlidXRlcykgPT4gKHsgYXR0cmlidXRlcyB9KSlcbiAgY29uc3Qgc3RhbmRhcmQgPSBidWlsZFllYXJTZXJpZXMoXG4gICAgYXNSZWNvcmRzLFxuICAgIHllYXJGaWVsZEppbXUsXG4gICAgcmVjb3J0ZUZpZWxkSmltdSxcbiAgICBmaWVsZHNcbiAgKVxuICBpZiAoc3RhbmRhcmQubGVuZ3RoID4gMCkgcmV0dXJuIHN0YW5kYXJkXG5cbiAgY29uc3QgeWVhcktleSA9IGRldGVjdFllYXJLZXlGcm9tUm93cyhyb3dzLCB5ZWFyRmllbGRKaW11KSA/PyB5ZWFyRmllbGRKaW11XG4gIGxldCByZWNvcnRlS2V5ID1cbiAgICBkZXRlY3RSZWNvcnRlS2V5RnJvbVJvd3Mocm93cywgcmVjb3J0ZUZpZWxkSmltdSkgPz8gcmVjb3J0ZUZpZWxkSmltdVxuXG4gIGlmICgheWVhcktleSkgcmV0dXJuIFtdXG5cbiAgbGV0IHNlcmllcyA9IGJ1aWxkU2VyaWVzRnJvbUtleXMocm93cywgeWVhcktleSwgcmVjb3J0ZUtleSlcbiAgaWYgKHNlcmllcy5sZW5ndGggPiAwKSByZXR1cm4gc2VyaWVzXG5cbiAgaWYgKGZpZWxkcz8ubGVuZ3RoKSB7XG4gICAgZm9yIChjb25zdCBmIG9mIGdldFJlY29ydGVDYW5kaWRhdGVGaWVsZHMoZmllbGRzLCB5ZWFyRmllbGRKaW11KSkge1xuICAgICAgY29uc3QgYWx0S2V5ID1cbiAgICAgICAgZGV0ZWN0UmVjb3J0ZUtleUZyb21Sb3dzKHJvd3MsIGYuamltdU5hbWUpID8/IGYuamltdU5hbWVcbiAgICAgIHNlcmllcyA9IGJ1aWxkU2VyaWVzRnJvbUtleXMocm93cywgeWVhcktleSwgYWx0S2V5KVxuICAgICAgaWYgKHNlcmllcy5sZW5ndGggPiAwKSByZXR1cm4gc2VyaWVzXG4gICAgfVxuICB9XG5cbiAgY29uc3QgYWx0UmVjb3J0ZSA9IGZpbmRCZXN0UmVjb3J0ZUtleUJ5TnVtZXJpY0ZpbGwocm93cywgeWVhcktleSlcbiAgaWYgKGFsdFJlY29ydGUgJiYgYWx0UmVjb3J0ZSAhPT0gcmVjb3J0ZUtleSkge1xuICAgIHNlcmllcyA9IGJ1aWxkU2VyaWVzRnJvbUtleXMocm93cywgeWVhcktleSwgYWx0UmVjb3J0ZSlcbiAgICBpZiAoc2VyaWVzLmxlbmd0aCA+IDApIHJldHVybiBzZXJpZXNcbiAgfVxuXG4gIHJldHVybiBzZXJpZXNcbn1cblxuZnVuY3Rpb24gZmluZEJlc3RSZWNvcnRlS2V5QnlOdW1lcmljRmlsbCAoXG4gIHJvd3M6IFJlY29yZDxzdHJpbmcsIHVua25vd24+W10sXG4gIHllYXJLZXk6IHN0cmluZ1xuKTogc3RyaW5nIHwgbnVsbCB7XG4gIGNvbnN0IGtleXMgPSBuZXcgU2V0PHN0cmluZz4oKVxuICBmb3IgKGNvbnN0IHJvdyBvZiByb3dzLnNsaWNlKDAsIDUwKSkge1xuICAgIE9iamVjdC5rZXlzKHJvdykuZm9yRWFjaCgoaykgPT4ga2V5cy5hZGQoaykpXG4gIH1cblxuICBsZXQgYmVzdDogeyBrZXk6IHN0cmluZzsgY291bnQ6IG51bWJlciB9IHwgbnVsbCA9IG51bGxcbiAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgIGlmIChrZXkudG9Mb3dlckNhc2UoKSA9PT0geWVhcktleS50b0xvd2VyQ2FzZSgpKSBjb250aW51ZVxuICAgIGlmICgvXihvYmplY3RpZHxnbG9iYWxpZHxzaGFwZXxmaWQpJC9pLnRlc3Qoa2V5KSkgY29udGludWVcbiAgICBsZXQgY291bnQgPSAwXG4gICAgZm9yIChjb25zdCByb3cgb2Ygcm93cykge1xuICAgICAgaWYgKHBhcnNlTnVtZXJpY1ZhbHVlKHJvd1trZXldKSAhPSBudWxsKSBjb3VudCsrXG4gICAgfVxuICAgIGlmICghYmVzdCB8fCBjb3VudCA+IGJlc3QuY291bnQpIGJlc3QgPSB7IGtleSwgY291bnQgfVxuICB9XG4gIHJldHVybiBiZXN0ICYmIGJlc3QuY291bnQgPiAwID8gYmVzdC5rZXkgOiBudWxsXG59XG5cbi8qKiBSZXN1bW8gZGFzIGNvbHVuYXMgZGV0ZWN0YWRhcyAoYWp1ZGEgZGlhZ27Ds3N0aWNvIG5vIEVudGVycHJpc2UpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlc2NyaWJlUm93c0ZvckV4dHJhY3RFcnJvciAoXG4gIHJvd3M6IFJlY29yZDxzdHJpbmcsIHVua25vd24+W10sXG4gIHJlY29ydGVIaW50OiBzdHJpbmdcbik6IHN0cmluZyB7XG4gIGlmICghcm93cy5sZW5ndGgpIHJldHVybiAnJ1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocm93c1swXSkuZmlsdGVyKFxuICAgIChrKSA9PiAhL14ob2JqZWN0aWR8Z2xvYmFsaWR8c2hhcGV8ZmlkKSQvaS50ZXN0KGspXG4gIClcbiAgY29uc3QgeWVhcktleSA9IGRldGVjdFllYXJLZXlGcm9tUm93cyhyb3dzKVxuICBjb25zdCByZWNvcnRlS2V5ID0gZGV0ZWN0UmVjb3J0ZUtleUZyb21Sb3dzKHJvd3MsIHJlY29ydGVIaW50KVxuICBjb25zdCBwcmV2aWV3ID0ga2V5cy5zbGljZSgwLCAxMCkuam9pbignLCAnKVxuICBjb25zdCBzdWZmaXggPSBrZXlzLmxlbmd0aCA+IDEwID8gJ+KApicgOiAnJ1xuICBsZXQgbXNnID0gYCBDb2x1bmFzIG5hIHJlc3Bvc3RhOiAke3ByZXZpZXd9JHtzdWZmaXh9LmBcbiAgaWYgKHllYXJLZXkpIG1zZyArPSBgIENvbHVuYSBkZSBhbm86IFwiJHt5ZWFyS2V5fVwiLmBcbiAgaWYgKHJlY29ydGVLZXkpIG1zZyArPSBgIENvbHVuYSBkbyByZWNvcnRlOiBcIiR7cmVjb3J0ZUtleX1cIi5gXG4gIHJldHVybiBtc2dcbn1cblxuZnVuY3Rpb24gYnVpbGRTZXJpZXNGcm9tS2V5cyAoXG4gIHJvd3M6IFJlY29yZDxzdHJpbmcsIHVua25vd24+W10sXG4gIHllYXJLZXk6IHN0cmluZyxcbiAgcmVjb3J0ZUtleTogc3RyaW5nXG4pOiBZZWFyVmFsdWVSb3dbXSB7XG4gIGNvbnN0IHNlcmllczogWWVhclZhbHVlUm93W10gPSBbXVxuICBmb3IgKGNvbnN0IHJvdyBvZiByb3dzKSB7XG4gICAgY29uc3QgeWVhciA9IHBhcnNlWWVhcihyb3dbeWVhcktleV0pXG4gICAgY29uc3QgdmFsdWUgPSBwYXJzZU51bWVyaWNWYWx1ZShyb3dbcmVjb3J0ZUtleV0pXG4gICAgaWYgKHllYXIgPT0gbnVsbCB8fCB2YWx1ZSA9PSBudWxsKSBjb250aW51ZVxuICAgIHNlcmllcy5wdXNoKHsgeWVhciwgdmFsdWUgfSlcbiAgfVxuICByZXR1cm4gc2VyaWVzLnNvcnQoKGEsIGIpID0+IGEueWVhciAtIGIueWVhcilcbn1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hSYXdBdHRyaWJ1dGVSb3dzRnJvbUxheWVyIChcbiAgZHM6IFF1ZXJpYWJsZUxheWVyXG4pOiBQcm9taXNlPFJlY29yZDxzdHJpbmcsIHVua25vd24+W10+IHtcbiAgY29uc3QgbGF5ZXIgPSBkcy5sYXllciBhcyB7XG4gICAgbG9hZD86ICgpID0+IFByb21pc2U8dm9pZD5cbiAgICBsb2FkZWQ/OiBib29sZWFuXG4gICAgbG9hZFN0YXR1cz86IHN0cmluZ1xuICAgIHF1ZXJ5RmVhdHVyZXM/OiAocDogb2JqZWN0KSA9PiBQcm9taXNlPHtcbiAgICAgIGZlYXR1cmVzPzogQXJyYXk8eyBhdHRyaWJ1dGVzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfT5cbiAgICB9PlxuICB9XG4gIGlmICghbGF5ZXI/LnF1ZXJ5RmVhdHVyZXMpIHJldHVybiBbXVxuXG4gIHRyeSB7XG4gICAgaWYgKFxuICAgICAgdHlwZW9mIGxheWVyLmxvYWQgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgIGxheWVyLmxvYWRTdGF0dXMgIT09ICdsb2FkZWQnICYmXG4gICAgICAhbGF5ZXIubG9hZGVkXG4gICAgKSB7XG4gICAgICBhd2FpdCBsYXllci5sb2FkKClcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbGF5ZXIucXVlcnlGZWF0dXJlcyh7XG4gICAgICB3aGVyZTogJzE9MScsXG4gICAgICBvdXRGaWVsZHM6IFsnKiddLFxuICAgICAgcmV0dXJuR2VvbWV0cnk6IGZhbHNlXG4gICAgfSlcbiAgICByZXR1cm4gKHJlc3VsdC5mZWF0dXJlcyA/PyBbXSlcbiAgICAgIC5tYXAoKGYpID0+ICh7IC4uLihmLmF0dHJpYnV0ZXMgPz8ge30pIH0pKVxuICAgICAgLmZpbHRlcigoYSkgPT4gT2JqZWN0LmtleXMoYSkubGVuZ3RoID4gMClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF0dHJpYnV0ZVJvd3NTY29yZSAoXG4gIHJvd3M6IFJlY29yZDxzdHJpbmcsIHVua25vd24+W11cbik6IG51bWJlciB7XG4gIGlmICghcm93cy5sZW5ndGgpIHJldHVybiAwXG4gIGNvbnN0IHNhbXBsZSA9IHJvd3NbMF1cbiAgcmV0dXJuIE9iamVjdC5rZXlzKHNhbXBsZSkuZmlsdGVyKFxuICAgIChrKSA9PiAhL14ob2JqZWN0aWR8Z2xvYmFsaWR8c2hhcGV8ZmlkKSQvaS50ZXN0KGspXG4gICkubGVuZ3RoXG59XG5cbi8qKlxuICogQ2FycmVnYSBsaW5oYXMgZGEgdGFiZWxhIFBST0RFUyBwcmlvcml6YW5kbyBhdHJpYnV0b3MgYnJ1dG9zIGRhIGNhbWFkYVxuICogKG1lc21hIGZvbnRlIGRhIHRhYmVsYSBkbyBQb3J0YWwpLlxuICovXG5mdW5jdGlvbiByZWNvcmRzVG9BdHRyaWJ1dGVSb3dzIChyZWNvcmRzOiBEYXRhUmVjb3JkW10pOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPltdIHtcbiAgcmV0dXJuIHJlY29yZHNcbiAgICAubWFwKChyKSA9PiBnZXRQbGFpbkF0dHJpYnV0ZXMocikpXG4gICAgLmZpbHRlcigoYSkgPT4gT2JqZWN0LmtleXMoYSkubGVuZ3RoID4gMClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoUHJvZGVzQXR0cmlidXRlUm93cyAoXG4gIGRhdGFTb3VyY2U6IHVua25vd24sXG4gIG9wdGlvbnM/OiBGZXRjaExheWVyUmVjb3Jkc09wdGlvbnNcbik6IFByb21pc2U8UmVjb3JkPHN0cmluZywgdW5rbm93bj5bXT4ge1xuICBjb25zdCBkcyA9IGRhdGFTb3VyY2UgYXMgUXVlcmlhYmxlTGF5ZXIgJiB7IHVybD86IHN0cmluZyB9XG4gIGNvbnN0IGNhbmRpZGF0ZXM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+W11bXSA9IFtdXG5cbiAgY29uc3QgcG9ydGFsUm93cyA9IGF3YWl0IGZldGNoVmlhUG9ydGFsUmVzdChkcylcbiAgaWYgKHBvcnRhbFJvd3MubGVuZ3RoKSBjYW5kaWRhdGVzLnB1c2gocG9ydGFsUm93cylcblxuICBjYW5kaWRhdGVzLnB1c2goYXdhaXQgZmV0Y2hSYXdBdHRyaWJ1dGVSb3dzRnJvbUxheWVyKGRzKSlcblxuICBjb25zdCByZXN0Um93cyA9IGF3YWl0IGZldGNoVmlhQXJjZ2lzUmVzdChkcylcbiAgaWYgKHJlc3RSb3dzLmxlbmd0aCkgY2FuZGlkYXRlcy5wdXNoKHJlc3RSb3dzKVxuXG4gIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBmZXRjaExheWVyUmVjb3JkcyhkYXRhU291cmNlLCBvcHRpb25zKVxuICBpZiAocmVjb3Jkcy5sZW5ndGgpIHtcbiAgICBjYW5kaWRhdGVzLnB1c2gocmVjb3Jkc1RvQXR0cmlidXRlUm93cyhyZWNvcmRzKSlcbiAgfVxuXG4gIGNvbnN0IGxvYWRlZCA9IGRzLmdldFJlY29yZHM/LigpID8/IGRzLmdldEFsbExvYWRlZFJlY29yZHM/LigpID8/IFtdXG4gIGlmIChsb2FkZWQubGVuZ3RoKSB7XG4gICAgY2FuZGlkYXRlcy5wdXNoKHJlY29yZHNUb0F0dHJpYnV0ZVJvd3MobG9hZGVkKSlcbiAgfVxuXG4gIGlmIChvcHRpb25zPy55ZWFyRmllbGRKaW11ICYmIG9wdGlvbnM/LnJlY29ydGVGaWVsZEppbXUpIHtcbiAgICBjb25zdCBvcmRlcmVkID0gW1xuICAgICAgLi4uY2FuZGlkYXRlcy5maWx0ZXIoKGMpID0+IGMubGVuZ3RoICYmIGF0dHJpYnV0ZVJvd3NTY29yZShjKSA+IDEpXG4gICAgXS5zb3J0KChhLCBiKSA9PiBzY29yZVJvd3NGb3JSZWNvcnRlKGIsIG9wdGlvbnMucmVjb3J0ZUZpZWxkSmltdSkgLSBzY29yZVJvd3NGb3JSZWNvcnRlKGEsIG9wdGlvbnMucmVjb3J0ZUZpZWxkSmltdSkpXG5cbiAgICBmb3IgKGNvbnN0IHJvd3Mgb2Ygb3JkZXJlZCkge1xuICAgICAgY29uc3Qgc2VyaWVzID0gYnVpbGRZZWFyU2VyaWVzRnJvbUF0dHJpYnV0ZVJvd3MoXG4gICAgICAgIHJvd3MsXG4gICAgICAgIG9wdGlvbnMueWVhckZpZWxkSmltdSxcbiAgICAgICAgb3B0aW9ucy5yZWNvcnRlRmllbGRKaW11LFxuICAgICAgICBvcHRpb25zLmZpZWxkc1xuICAgICAgKVxuICAgICAgaWYgKHNlcmllcy5sZW5ndGggPiAwKSByZXR1cm4gcm93c1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHdpdGhEYXRhID0gY2FuZGlkYXRlcy5maWx0ZXIoXG4gICAgKGMpID0+IGMubGVuZ3RoICYmIGF0dHJpYnV0ZVJvd3NTY29yZShjKSA+IDFcbiAgKVxuICBpZiAoIXdpdGhEYXRhLmxlbmd0aCkge1xuICAgIHJldHVybiBjYW5kaWRhdGVzLmZpbmQoKGMpID0+IGMubGVuZ3RoKSA/PyBbXVxuICB9XG5cbiAgY29uc3QgcmVjb3J0ZUhpbnQgPSBvcHRpb25zPy5yZWNvcnRlRmllbGRKaW11ID8/ICcnXG4gIHJldHVybiB3aXRoRGF0YS5zb3J0KFxuICAgIChhLCBiKSA9PiBzY29yZVJvd3NGb3JSZWNvcnRlKGIsIHJlY29ydGVIaW50KSAtIHNjb3JlUm93c0ZvclJlY29ydGUoYSwgcmVjb3J0ZUhpbnQpXG4gIClbMF1cbn1cblxuLyoqIFF1YW50b3MgdmFsb3JlcyBudW3DqXJpY29zIHByZWVuY2hpZG9zIGV4aXN0ZW0gbmEgY29sdW5hIGRvIHJlY29ydGUuICovXG5mdW5jdGlvbiBzY29yZVJvd3NGb3JSZWNvcnRlIChcbiAgcm93czogUmVjb3JkPHN0cmluZywgdW5rbm93bj5bXSxcbiAgcmVjb3J0ZUZpZWxkSmltdTogc3RyaW5nXG4pOiBudW1iZXIge1xuICBjb25zdCBrZXkgPSBkZXRlY3RSZWNvcnRlS2V5RnJvbVJvd3Mocm93cywgcmVjb3J0ZUZpZWxkSmltdSkgPz8gcmVjb3J0ZUZpZWxkSmltdVxuICBsZXQgc2NvcmUgPSAwXG4gIGZvciAoY29uc3Qgcm93IG9mIHJvd3MpIHtcbiAgICBpZiAocGFyc2VOdW1lcmljVmFsdWUocm93W2tleV0pICE9IG51bGwpIHNjb3JlKytcbiAgfVxuICByZXR1cm4gc2NvcmVcbn1cblxuY29uc3QgUkVUUllfREVMQVlTX01TID0gWzAsIDQwMCwgODAwLCAxMjAwLCAyMDAwLCAzMDAwLCA0NTAwXVxuXG4vKipcbiAqIFRlbnRhIHbDoXJpYXMgdmV6ZXMgYXTDqSBvYnRlciBsaW5oYXMgY29tIGNvbHVuYXMgZGUgZGFkb3MgKG7Do28gc8OzIE9CSkVDVElEKS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZvcmNlTG9hZFByb2Rlc1Jvd3MgKFxuICBkYXRhU291cmNlOiB1bmtub3duLFxuICBvcHRpb25zOiBGZXRjaExheWVyUmVjb3Jkc09wdGlvbnMgJiB7IHdpZGdldElkPzogc3RyaW5nIH1cbik6IFByb21pc2U8UmVjb3JkPHN0cmluZywgdW5rbm93bj5bXT4ge1xuICBmb3IgKGNvbnN0IGRlbGF5IG9mIFJFVFJZX0RFTEFZU19NUykge1xuICAgIGlmIChkZWxheSA+IDApIHtcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIGRlbGF5KSlcbiAgICB9XG5cbiAgICBjb25zdCByb3dzID0gYXdhaXQgZmV0Y2hQcm9kZXNBdHRyaWJ1dGVSb3dzKGRhdGFTb3VyY2UsIHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBmb3JjZVF1ZXJ5OiB0cnVlXG4gICAgfSlcblxuICAgIGlmICghb3B0aW9ucy55ZWFyRmllbGRKaW11IHx8ICFvcHRpb25zLnJlY29ydGVGaWVsZEppbXUpIHtcbiAgICAgIGlmIChhdHRyaWJ1dGVSb3dzU2NvcmUocm93cykgPiAxKSByZXR1cm4gcm93c1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBjb25zdCBzZXJpZXMgPSBidWlsZFllYXJTZXJpZXNGcm9tQXR0cmlidXRlUm93cyhcbiAgICAgIHJvd3MsXG4gICAgICBvcHRpb25zLnllYXJGaWVsZEppbXUsXG4gICAgICBvcHRpb25zLnJlY29ydGVGaWVsZEppbXUsXG4gICAgICBvcHRpb25zLmZpZWxkc1xuICAgIClcbiAgICBpZiAoc2VyaWVzLmxlbmd0aCA+IDApIHJldHVybiByb3dzXG4gIH1cblxuICByZXR1cm4gZmV0Y2hQcm9kZXNBdHRyaWJ1dGVSb3dzKGRhdGFTb3VyY2UsIHsgLi4ub3B0aW9ucywgZm9yY2VRdWVyeTogdHJ1ZSB9KVxufVxuXG4vKiogQ2FycmVnYSB0b2RvcyBvcyByZWdpc3Ryb3MgZGEgY2FtYWRhICh0YWJlbGEgYW5vIMOXIHJlY29ydGVzKS4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaExheWVyUmVjb3JkcyAoXG4gIGRhdGFTb3VyY2U6IHVua25vd24sXG4gIG9wdGlvbnM/OiBGZXRjaExheWVyUmVjb3Jkc09wdGlvbnNcbik6IFByb21pc2U8RGF0YVJlY29yZFtdPiB7XG4gIGNvbnN0IGRzID0gZGF0YVNvdXJjZSBhcyBRdWVyaWFibGVMYXllclxuICBjb25zdCBjYWNoZWQgPSBkcy5nZXRBbGxMb2FkZWRSZWNvcmRzPy4oKSA/PyBkcy5nZXRSZWNvcmRzPy4oKSA/PyBbXVxuICBjb25zdCBvdXRGaWVsZHMgPSByZXNvbHZlT3V0RmllbGRzKFxuICAgIG9wdGlvbnM/LnllYXJGaWVsZEppbXUsXG4gICAgb3B0aW9ucz8ucmVjb3J0ZUZpZWxkSmltdSxcbiAgICBvcHRpb25zPy5maWVsZHNcbiAgKVxuXG4gIGlmICghb3B0aW9ucz8uZm9yY2VRdWVyeSAmJiByZWNvcmRzQXJlUmVhZGFibGUoY2FjaGVkKSkge1xuICAgIHJldHVybiBjYWNoZWRcbiAgfVxuXG4gIGNvbnN0IHF1ZXJpZWQgPSBhd2FpdCBxdWVyeUFsbFJlY29yZHMoZHMsIG91dEZpZWxkcywgb3B0aW9ucz8ud2lkZ2V0SWQpXG4gIGlmIChyZWNvcmRzQXJlUmVhZGFibGUocXVlcmllZCkpIHJldHVybiBxdWVyaWVkXG4gIGlmIChxdWVyaWVkLmxlbmd0aCkgcmV0dXJuIHF1ZXJpZWRcblxuICBpZiAoIW9wdGlvbnM/LmZvcmNlUXVlcnkpIHJldHVybiBjYWNoZWRcbiAgcmV0dXJuIHF1ZXJpZWQubGVuZ3RoID8gcXVlcmllZCA6IGNhY2hlZFxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVSZWNvcnRlVG9rZW4gKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gdmFsdWVcbiAgICAudG9Mb3dlckNhc2UoKVxuICAgIC5ub3JtYWxpemUoJ05GRCcpXG4gICAgLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csICcnKVxuICAgIC5yZXBsYWNlKC9bXFxzLV0rL2csICdfJylcbn1cblxuZnVuY3Rpb24gaXNZZWFyTmFtZWRGaWVsZCAoZmllbGQ6IElNRmllbGRTY2hlbWEpOiBib29sZWFuIHtcbiAgY29uc3QgeSA9XG4gICAgcGFyc2VZZWFyKGZpZWxkLmppbXVOYW1lKSA/P1xuICAgIHBhcnNlWWVhcihmaWVsZC5uYW1lKSA/P1xuICAgIHBhcnNlWWVhcihmaWVsZC5hbGlhcylcbiAgcmV0dXJuIHkgIT0gbnVsbCAmJiB5ID49IDE5ODUgJiYgeSA8PSAyMDM1XG59XG5cbmZ1bmN0aW9uIGZpbmRSZWNvcnRlTmFtZUZpZWxkIChmaWVsZHM6IElNRmllbGRTY2hlbWFbXSk6IElNRmllbGRTY2hlbWEgfCBudWxsIHtcbiAgY29uc3QgcGF0dGVybnMgPSBbJ3JlY29ydGUnLCAncmVnaWFvJywgJ3JlZ2nDo28nLCAnYmlvbWEnLCAnbm9tZScsICduYW1lJywgJ2xhYmVsJ11cbiAgcmV0dXJuIChcbiAgICBmaWVsZHMuZmluZCgoZikgPT4ge1xuICAgICAgY29uc3QgaiA9IGYuamltdU5hbWU/LnRvTG93ZXJDYXNlKCkgPz8gJydcbiAgICAgIGNvbnN0IG4gPSBmLm5hbWU/LnRvTG93ZXJDYXNlKCkgPz8gJydcbiAgICAgIHJldHVybiBwYXR0ZXJucy5zb21lKChwKSA9PiBqLmluY2x1ZGVzKHApIHx8IG4uaW5jbHVkZXMocCkpXG4gICAgfSkgPz8gbnVsbFxuICApXG59XG5cbi8qKiBMYXlvdXQgYWx0ZXJuYXRpdm86IGNhZGEgcmVnaXN0cm8gPSByZWNvcnRlOyBjb2x1bmFzIG51bcOpcmljYXMgPSBhbm9zLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkWWVhclNlcmllc0Zyb21SZWNvcnRlUm93cyAoXG4gIHJlY29yZHM6IFJlY29yZExpa2VbXSxcbiAgcmVjb3J0ZUZpZWxkSmltdTogc3RyaW5nLFxuICBmaWVsZHM6IElNRmllbGRTY2hlbWFbXVxuKTogWWVhclZhbHVlUm93W10ge1xuICBjb25zdCB5ZWFyRmllbGRzID0gZmllbGRzLmZpbHRlcihpc1llYXJOYW1lZEZpZWxkKVxuICBpZiAoIXllYXJGaWVsZHMubGVuZ3RoKSByZXR1cm4gW11cblxuICBjb25zdCB0YXJnZXQgPSBub3JtYWxpemVSZWNvcnRlVG9rZW4ocmVjb3J0ZUZpZWxkSmltdSlcbiAgY29uc3QgbmFtZUZpZWxkID0gZmluZFJlY29ydGVOYW1lRmllbGQoZmllbGRzKVxuXG4gIGNvbnN0IHJvdyA9XG4gICAgcmVjb3Jkcy5maW5kKChyZWMpID0+IHtcbiAgICAgIGlmIChuYW1lRmllbGQpIHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSByZWFkUmVjb3JkVmFsdWUocmVjLCBuYW1lRmllbGQsIG5hbWVGaWVsZC5qaW11TmFtZSlcbiAgICAgICAgaWYgKGxhYmVsICE9IG51bGwgJiYgbm9ybWFsaXplUmVjb3J0ZVRva2VuKFN0cmluZyhsYWJlbCkpID09PSB0YXJnZXQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IGYgb2YgZmllbGRzKSB7XG4gICAgICAgIGlmIChpc1llYXJOYW1lZEZpZWxkKGYpIHx8IGYuamltdU5hbWUgPT09IHJlY29ydGVGaWVsZEppbXUpIGNvbnRpbnVlXG4gICAgICAgIGNvbnN0IHYgPSByZWFkUmVjb3JkVmFsdWUocmVjLCBmLCBmLmppbXVOYW1lKVxuICAgICAgICBpZiAodiAhPSBudWxsICYmIG5vcm1hbGl6ZVJlY29ydGVUb2tlbihTdHJpbmcodikpID09PSB0YXJnZXQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KSA/PyBudWxsXG5cbiAgaWYgKCFyb3cpIHJldHVybiBbXVxuXG4gIGNvbnN0IHNlcmllczogWWVhclZhbHVlUm93W10gPSBbXVxuICBmb3IgKGNvbnN0IHlmIG9mIHllYXJGaWVsZHMpIHtcbiAgICBjb25zdCB5ZWFyID1cbiAgICAgIHBhcnNlWWVhcih5Zi5qaW11TmFtZSkgPz8gcGFyc2VZZWFyKHlmLm5hbWUpID8/IHBhcnNlWWVhcih5Zi5hbGlhcylcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlTnVtZXJpY1ZhbHVlKHJlYWRSZWNvcmRWYWx1ZShyb3csIHlmLCB5Zi5qaW11TmFtZSkpXG4gICAgaWYgKHllYXIgPT0gbnVsbCB8fCB2YWx1ZSA9PSBudWxsKSBjb250aW51ZVxuICAgIHNlcmllcy5wdXNoKHsgeWVhciwgdmFsdWUgfSlcbiAgfVxuXG4gIHJldHVybiBzZXJpZXMuc29ydCgoYSwgYikgPT4gYS55ZWFyIC0gYi55ZWFyKVxufVxuXG5mdW5jdGlvbiBidWlsZFllYXJTZXJpZXNZZWFyUm93cyAoXG4gIHJlY29yZHM6IFJlY29yZExpa2VbXSxcbiAgeWVhckZpZWxkSmltdTogc3RyaW5nLFxuICByZWNvcnRlRmllbGRKaW11OiBzdHJpbmcsXG4gIGZpZWxkcz86IElNRmllbGRTY2hlbWFbXVxuKTogWWVhclZhbHVlUm93W10ge1xuICBjb25zdCB5ZWFyRmllbGQgPSBmaWVsZHM/Lmxlbmd0aFxuICAgID8gZmluZEZpZWxkQnlKaW11TmFtZShmaWVsZHMsIHllYXJGaWVsZEppbXUpXG4gICAgOiBudWxsXG4gIGNvbnN0IHJlY29ydGVGaWVsZCA9IGZpZWxkcz8ubGVuZ3RoXG4gICAgPyBmaW5kRmllbGRCeUppbXVOYW1lKGZpZWxkcywgcmVjb3J0ZUZpZWxkSmltdSlcbiAgICA6IG51bGxcbiAgY29uc3Qgc2VyaWVzOiBZZWFyVmFsdWVSb3dbXSA9IFtdXG5cbiAgZm9yIChjb25zdCByZWMgb2YgcmVjb3Jkcykge1xuICAgIGNvbnN0IHllYXIgPSBwYXJzZVllYXIoXG4gICAgICByZWFkUmVjb3JkVmFsdWUocmVjLCB5ZWFyRmllbGQsIHllYXJGaWVsZEppbXUpXG4gICAgKVxuICAgIGNvbnN0IHZhbHVlID0gcGFyc2VOdW1lcmljVmFsdWUoXG4gICAgICByZWFkUmVjb3JkVmFsdWUocmVjLCByZWNvcnRlRmllbGQsIHJlY29ydGVGaWVsZEppbXUpXG4gICAgKVxuICAgIGlmICh5ZWFyID09IG51bGwgfHwgdmFsdWUgPT0gbnVsbCkgY29udGludWVcblxuICAgIHNlcmllcy5wdXNoKHsgeWVhciwgdmFsdWUgfSlcbiAgfVxuXG4gIHJldHVybiBzZXJpZXMuc29ydCgoYSwgYikgPT4gYS55ZWFyIC0gYi55ZWFyKVxufVxuXG5mdW5jdGlvbiBjb2xsZWN0UmVjb3JkQXR0cmlidXRlS2V5cyAocmVjb3JkczogUmVjb3JkTGlrZVtdKTogc3RyaW5nW10ge1xuICBjb25zdCBrZXlzID0gbmV3IFNldDxzdHJpbmc+KClcbiAgZm9yIChjb25zdCByZWMgb2YgcmVjb3Jkcy5zbGljZSgwLCAxMDApKSB7XG4gICAgT2JqZWN0LmtleXMoZ2V0UGxhaW5BdHRyaWJ1dGVzKHJlYykpLmZvckVhY2goKGspID0+IGtleXMuYWRkKGspKVxuICB9XG4gIHJldHVybiBbLi4ua2V5c11cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUtleXNGcm9tQXR0cmlidXRlTmFtZXMgKFxuICBrZXlzOiBzdHJpbmdbXSxcbiAgeWVhckZpZWxkSmltdTogc3RyaW5nLFxuICByZWNvcnRlRmllbGRKaW11OiBzdHJpbmdcbik6IHsgeWVhcktleTogc3RyaW5nOyByZWNvcnRlS2V5OiBzdHJpbmcgfSB8IG51bGwge1xuICBjb25zdCByZWNvcnRlS2V5ID0ga2V5cy5maW5kKFxuICAgIChrKSA9PlxuICAgICAgay50b0xvd2VyQ2FzZSgpID09PSByZWNvcnRlRmllbGRKaW11LnRvTG93ZXJDYXNlKCkgfHxcbiAgICAgIG5vcm1hbGl6ZVJlY29ydGVUb2tlbihrKSA9PT0gbm9ybWFsaXplUmVjb3J0ZVRva2VuKHJlY29ydGVGaWVsZEppbXUpXG4gIClcbiAgbGV0IHllYXJLZXkgPSBrZXlzLmZpbmQoKGspID0+IGsudG9Mb3dlckNhc2UoKSA9PT0geWVhckZpZWxkSmltdS50b0xvd2VyQ2FzZSgpKVxuICBpZiAoIXllYXJLZXkpIHtcbiAgICB5ZWFyS2V5ID0ga2V5cy5maW5kKChrKSA9PlxuICAgICAgWUVBUl9OQU1FX1BBVFRFUk5TLnNvbWUoXG4gICAgICAgIChwKSA9PiBrLnRvTG93ZXJDYXNlKCkgPT09IHAgfHwgay50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHApXG4gICAgICApXG4gICAgKVxuICB9XG4gIGlmICgheWVhcktleSB8fCAhcmVjb3J0ZUtleSkgcmV0dXJuIG51bGxcbiAgcmV0dXJuIHsgeWVhcktleSwgcmVjb3J0ZUtleSB9XG59XG5cbi8qKiDDmmx0aW1vIHJlY3Vyc286IGluZmVyZSBjb2x1bmFzIHBlbG9zIG5vbWVzIHJlYWlzIG5vcyBhdHJpYnV0b3MgcmV0b3JuYWRvcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFllYXJTZXJpZXNJbmZlcnJlZCAoXG4gIHJlY29yZHM6IFJlY29yZExpa2VbXSxcbiAgeWVhckZpZWxkSmltdTogc3RyaW5nLFxuICByZWNvcnRlRmllbGRKaW11OiBzdHJpbmdcbik6IFllYXJWYWx1ZVJvd1tdIHtcbiAgY29uc3Qga2V5cyA9IGNvbGxlY3RSZWNvcmRBdHRyaWJ1dGVLZXlzKHJlY29yZHMpXG4gIGNvbnN0IHJlc29sdmVkID0gcmVzb2x2ZUtleXNGcm9tQXR0cmlidXRlTmFtZXMoa2V5cywgeWVhckZpZWxkSmltdSwgcmVjb3J0ZUZpZWxkSmltdSlcbiAgaWYgKCFyZXNvbHZlZCkgcmV0dXJuIFtdXG5cbiAgY29uc3Qgc2VyaWVzOiBZZWFyVmFsdWVSb3dbXSA9IFtdXG4gIGZvciAoY29uc3QgcmVjIG9mIHJlY29yZHMpIHtcbiAgICBjb25zdCBhdHRycyA9IGdldFBsYWluQXR0cmlidXRlcyhyZWMpXG4gICAgY29uc3QgeWVhciA9IHBhcnNlWWVhcihhdHRyc1tyZXNvbHZlZC55ZWFyS2V5XSlcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlTnVtZXJpY1ZhbHVlKGF0dHJzW3Jlc29sdmVkLnJlY29ydGVLZXldKVxuICAgIGlmICh5ZWFyID09IG51bGwgfHwgdmFsdWUgPT0gbnVsbCkgY29udGludWVcbiAgICBzZXJpZXMucHVzaCh7IHllYXIsIHZhbHVlIH0pXG4gIH1cbiAgcmV0dXJuIHNlcmllcy5zb3J0KChhLCBiKSA9PiBhLnllYXIgLSBiLnllYXIpXG59XG5cbi8qKiBTw6lyaWUgYSBwYXJ0aXIgZGUgRGF0YVJlY29yZHMgKGdldEZpZWxkVmFsdWUgLyBnZXREYXRhQmVmb3JlTWFwcGluZykuICovXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRZZWFyU2VyaWVzRnJvbVJlY29yZHMgKFxuICByZWNvcmRzOiBEYXRhUmVjb3JkW10sXG4gIHllYXJGaWVsZEppbXU6IHN0cmluZyxcbiAgcmVjb3J0ZUZpZWxkSmltdTogc3RyaW5nLFxuICBmaWVsZHM/OiBJTUZpZWxkU2NoZW1hW11cbik6IFllYXJWYWx1ZVJvd1tdIHtcbiAgcmV0dXJuIGJ1aWxkWWVhclNlcmllcyhcbiAgICByZWNvcmRzIGFzIFJlY29yZExpa2VbXSxcbiAgICB5ZWFyRmllbGRKaW11LFxuICAgIHJlY29ydGVGaWVsZEppbXUsXG4gICAgZmllbGRzXG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkWWVhclNlcmllcyAoXG4gIHJlY29yZHM6IFJlY29yZExpa2VbXSxcbiAgeWVhckZpZWxkSmltdTogc3RyaW5nLFxuICByZWNvcnRlRmllbGRKaW11OiBzdHJpbmcsXG4gIGZpZWxkcz86IElNRmllbGRTY2hlbWFbXVxuKTogWWVhclZhbHVlUm93W10ge1xuICBjb25zdCB5ZWFyUm93cyA9IGJ1aWxkWWVhclNlcmllc1llYXJSb3dzKFxuICAgIHJlY29yZHMsXG4gICAgeWVhckZpZWxkSmltdSxcbiAgICByZWNvcnRlRmllbGRKaW11LFxuICAgIGZpZWxkc1xuICApXG4gIGlmICh5ZWFyUm93cy5sZW5ndGggPiAwKSByZXR1cm4geWVhclJvd3NcblxuICBpZiAoZmllbGRzPy5sZW5ndGgpIHtcbiAgICBjb25zdCBhbHQgPSBidWlsZFllYXJTZXJpZXNGcm9tUmVjb3J0ZVJvd3MocmVjb3JkcywgcmVjb3J0ZUZpZWxkSmltdSwgZmllbGRzKVxuICAgIGlmIChhbHQubGVuZ3RoID4gMCkgcmV0dXJuIGFsdFxuICB9XG5cbiAgcmV0dXJuIGJ1aWxkWWVhclNlcmllc0luZmVycmVkKHJlY29yZHMsIHllYXJGaWVsZEppbXUsIHJlY29ydGVGaWVsZEppbXUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRZZWFyc1JhbmdlU3VtbWFyeSAoc2VyaWVzOiBZZWFyVmFsdWVSb3dbXSk6IHN0cmluZyB8IG51bGwge1xuICBpZiAoIXNlcmllcy5sZW5ndGgpIHJldHVybiBudWxsXG4gIGNvbnN0IG1pbiA9IHNlcmllc1swXS55ZWFyXG4gIGNvbnN0IG1heCA9IHNlcmllc1tzZXJpZXMubGVuZ3RoIC0gMV0ueWVhclxuICBjb25zdCBjb3VudCA9IHNlcmllcy5sZW5ndGhcbiAgaWYgKG1pbiA9PT0gbWF4KSByZXR1cm4gYCR7bWlufSAoJHtjb3VudH0gYW5vKWBcbiAgcmV0dXJuIGAke21pbn3igJMke21heH0gKCR7Y291bnR9IGFub3MpYFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNZZWFyT3V0T2ZUeXBpY2FsUmFuZ2UgKHllYXI6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4geWVhciA8IDIwMDEgfHwgeWVhciA+IDIwMjVcbn1cblxuLyoqIFZhcmlhw6fDo28gcGVyY2VudHVhbCBkbyB2YWxvciBpbmljaWFsIChhbm8gbWFpcyBhbnRpZ28pIHBhcmEgbyBmaW5hbCAoYW5vIG1haXMgcmVjZW50ZSkuICovXG5leHBvcnQgZnVuY3Rpb24gY2FsY1BlcmNlbnRWYXJpYXRpb24gKFxuICB2YWx1ZUluaWNpYWw6IG51bWJlcixcbiAgdmFsdWVGaW5hbDogbnVtYmVyXG4pOiBudW1iZXIgfCBudWxsIHtcbiAgaWYgKCFOdW1iZXIuaXNGaW5pdGUodmFsdWVJbmljaWFsKSB8fCAhTnVtYmVyLmlzRmluaXRlKHZhbHVlRmluYWwpKSByZXR1cm4gbnVsbFxuICBpZiAodmFsdWVJbmljaWFsID09PSAwKSByZXR1cm4gbnVsbFxuICByZXR1cm4gKCh2YWx1ZUZpbmFsIC0gdmFsdWVJbmljaWFsKSAvIHZhbHVlSW5pY2lhbCkgKiAxMDBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFBlcmNlbnRWYXJpYXRpb24gKHBjdDogbnVtYmVyKTogc3RyaW5nIHtcbiAgY29uc3Qgc2lnbiA9IHBjdCA+IDAgPyAnKycgOiAnJ1xuICByZXR1cm4gYCR7c2lnbn0ke3BjdC50b0xvY2FsZVN0cmluZygncHQtQlInLCB7XG4gICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMlxuICB9KX0lYFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWVGb3JZZWFyIChcbiAgc2VyaWVzOiBZZWFyVmFsdWVSb3dbXSxcbiAgeWVhcjogbnVtYmVyXG4pOiBudW1iZXIgfCBudWxsIHtcbiAgY29uc3Qgcm93ID0gc2VyaWVzLmZpbmQoKHIpID0+IHIueWVhciA9PT0geWVhcilcbiAgcmV0dXJuIHJvdyAhPSBudWxsID8gcm93LnZhbHVlIDogbnVsbFxufVxuXG4vKiogU29tYSBvcyB2YWxvcmVzIGRvcyBhbm9zIGluZm9ybWFkb3M7IHJldG9ybmEgbnVsbCBzZSBhbGd1bSBhbm8gbsOjbyB0aXZlciBkYWRvLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1bVZhbHVlc0ZvclllYXJzIChcbiAgc2VyaWVzOiBZZWFyVmFsdWVSb3dbXSxcbiAgeWVhcnM6IG51bWJlcltdXG4pOiBudW1iZXIgfCBudWxsIHtcbiAgaWYgKCF5ZWFycy5sZW5ndGgpIHJldHVybiBudWxsXG4gIGxldCBzdW0gPSAwXG4gIGZvciAoY29uc3QgeWVhciBvZiB5ZWFycykge1xuICAgIGNvbnN0IHZhbHVlID0gZ2V0VmFsdWVGb3JZZWFyKHNlcmllcywgeWVhcilcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBzdW0gKz0gdmFsdWVcbiAgfVxuICByZXR1cm4gc3VtXG59XG5cbi8qKiBBbm9zIGRpc3BvbsOtdmVpcyBwYXJhIG8gcGVyw61vZG8gaW5pY2lhbCAoYW50ZXMgZG8gcGVyw61vZG8gZmluYWwsIHNlIGhvdXZlcikuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0WWVhcnNBbGxvd2VkRm9ySW5pY2lhbCAoXG4gIGFsbFllYXJzOiBudW1iZXJbXSxcbiAgcGVyaW9kb0ZpbmFsOiBudW1iZXJbXVxuKTogbnVtYmVyW10ge1xuICBjb25zdCBibG9ja2VkID0gbmV3IFNldChwZXJpb2RvRmluYWwpXG4gIGNvbnN0IG1heEZpbmFsID0gcGVyaW9kb0ZpbmFsLmxlbmd0aCA/IE1hdGgubWluKC4uLnBlcmlvZG9GaW5hbCkgOiBJbmZpbml0eVxuICByZXR1cm4gYWxsWWVhcnMuZmlsdGVyKCh5KSA9PiAhYmxvY2tlZC5oYXMoeSkgJiYgeSA8IG1heEZpbmFsKVxufVxuXG4vKiogQW5vcyBkaXNwb27DrXZlaXMgcGFyYSBvIHBlcsOtb2RvIGZpbmFsIChkZXBvaXMgZG8gcGVyw61vZG8gaW5pY2lhbCwgc2UgaG91dmVyKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRZZWFyc0FsbG93ZWRGb3JGaW5hbCAoXG4gIGFsbFllYXJzOiBudW1iZXJbXSxcbiAgcGVyaW9kb0luaWNpYWw6IG51bWJlcltdXG4pOiBudW1iZXJbXSB7XG4gIGNvbnN0IGJsb2NrZWQgPSBuZXcgU2V0KHBlcmlvZG9JbmljaWFsKVxuICBjb25zdCBtaW5JbmljaWFsID0gcGVyaW9kb0luaWNpYWwubGVuZ3RoID8gTWF0aC5tYXgoLi4ucGVyaW9kb0luaWNpYWwpIDogLUluZmluaXR5XG4gIHJldHVybiBhbGxZZWFycy5maWx0ZXIoKHkpID0+ICFibG9ja2VkLmhhcyh5KSAmJiB5ID4gbWluSW5pY2lhbClcbn1cblxuLyoqIE1hcmNhL2Rlc21hcmNhIHVtIGFubyBtYW50ZW5kbyBhcGVuYXMgc2VxdcOqbmNpYXMgY29uc2VjdXRpdmFzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUNvbnNlY3V0aXZlWWVhciAoXG4gIHBlcmlvZDogbnVtYmVyW10sXG4gIHllYXI6IG51bWJlclxuKTogeyBuZXh0OiBudW1iZXJbXTsgcmVqZWN0ZWQ6IGJvb2xlYW4gfSB7XG4gIGlmIChwZXJpb2QuaW5jbHVkZXMoeWVhcikpIHtcbiAgICByZXR1cm4geyBuZXh0OiBwZXJpb2QuZmlsdGVyKCh5KSA9PiB5ICE9PSB5ZWFyKSwgcmVqZWN0ZWQ6IGZhbHNlIH1cbiAgfVxuICBjb25zdCBuZXh0ID0gWy4uLnBlcmlvZCwgeWVhcl0uc29ydCgoYSwgYikgPT4gYSAtIGIpXG4gIGlmICghYXJlQ29uc2VjdXRpdmVZZWFycyhuZXh0KSkge1xuICAgIHJldHVybiB7IG5leHQ6IHBlcmlvZCwgcmVqZWN0ZWQ6IHRydWUgfVxuICB9XG4gIHJldHVybiB7IG5leHQsIHJlamVjdGVkOiBmYWxzZSB9XG59XG5cbi8qKiBWZXJpZmljYSBzZSBvcyBhbm9zIGZvcm1hbSB1bWEgc2VxdcOqbmNpYSBjb25zZWN1dGl2YSAoZXguOiAyMDEwLCAyMDExLCAyMDEyKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcmVDb25zZWN1dGl2ZVllYXJzICh5ZWFyczogbnVtYmVyW10pOiBib29sZWFuIHtcbiAgaWYgKHllYXJzLmxlbmd0aCA8PSAxKSByZXR1cm4gdHJ1ZVxuICBjb25zdCBzb3J0ZWQgPSBbLi4ueWVhcnNdLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuICBmb3IgKGxldCBpID0gMTsgaSA8IHNvcnRlZC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzb3J0ZWRbaV0gLSBzb3J0ZWRbaSAtIDFdICE9PSAxKSByZXR1cm4gZmFsc2VcbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG4vKiogUsOzdHVsbyBjb21wYWN0byBwYXJhIHVtIG91IG1haXMgYW5vcyAoZXguOiBcIjIwMTBcIiBvdSBcIjIwMTDigJMyMDEyICgzIGFub3MpXCIpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFBlcmlvZExhYmVsICh5ZWFyczogbnVtYmVyW10pOiBzdHJpbmcge1xuICBjb25zdCBzb3J0ZWQgPSBbLi4ueWVhcnNdLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuICBpZiAoIXNvcnRlZC5sZW5ndGgpIHJldHVybiAnJ1xuICBpZiAoc29ydGVkLmxlbmd0aCA9PT0gMSkgcmV0dXJuIFN0cmluZyhzb3J0ZWRbMF0pXG4gIHJldHVybiBgJHtzb3J0ZWRbMF194oCTJHtzb3J0ZWRbc29ydGVkLmxlbmd0aCAtIDFdfSAoJHtzb3J0ZWQubGVuZ3RofSBhbm9zKWBcbn1cblxuLyoqIEludGVydmFsbyBkZSBhbm9zIHNlbSBjb250YWdlbSAoZXguOiBcIjIwMTBcIiBvdSBcIjIwMTDigJMyMDEyXCIpIOKAlCB1c28gZW0gcmVzdWx0YWRvcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQZXJpb2RSYW5nZUxhYmVsICh5ZWFyczogbnVtYmVyW10pOiBzdHJpbmcge1xuICBjb25zdCBzb3J0ZWQgPSBbLi4ueWVhcnNdLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuICBpZiAoIXNvcnRlZC5sZW5ndGgpIHJldHVybiAnJ1xuICBpZiAoc29ydGVkLmxlbmd0aCA9PT0gMSkgcmV0dXJuIFN0cmluZyhzb3J0ZWRbMF0pXG4gIHJldHVybiBgJHtzb3J0ZWRbMF194oCTJHtzb3J0ZWRbc29ydGVkLmxlbmd0aCAtIDFdfWBcbn1cblxuZXhwb3J0IGludGVyZmFjZSBWYXJpYXRpb25SZXN1bHQge1xuICBwY3Q6IG51bWJlclxuICB2YWx1ZUluaWNpYWw6IG51bWJlclxuICB2YWx1ZUZpbmFsOiBudW1iZXJcbiAgeWVhcnNJbmljaWFsOiBudW1iZXJbXVxuICB5ZWFyc0ZpbmFsOiBudW1iZXJbXVxufVxuXG5leHBvcnQgdHlwZSBQZXJpb2RWYXJpYXRpb25PdXRjb21lID1cbiAgfCB7IG9rOiB0cnVlOyBkYXRhOiBWYXJpYXRpb25SZXN1bHQgfVxuICB8IHsgb2s6IGZhbHNlOyBtZXNzYWdlOiBzdHJpbmcgfVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZVBlcmlvZFZhcmlhdGlvbiAoXG4gIHNlcmllczogWWVhclZhbHVlUm93W10sXG4gIHBlcmlvZG9JbmljaWFsOiBudW1iZXJbXSxcbiAgcGVyaW9kb0ZpbmFsOiBudW1iZXJbXVxuKTogUGVyaW9kVmFyaWF0aW9uT3V0Y29tZSB7XG4gIGNvbnN0IGluaSA9IFsuLi5wZXJpb2RvSW5pY2lhbF0uc29ydCgoYSwgYikgPT4gYSAtIGIpXG4gIGNvbnN0IGZpbiA9IFsuLi5wZXJpb2RvRmluYWxdLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuXG4gIGlmICghaW5pLmxlbmd0aCB8fCAhZmluLmxlbmd0aCkge1xuICAgIHJldHVybiB7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBtZXNzYWdlOiAnU2VsZWNpb25lIHBlbG8gbWVub3MgdW0gYW5vIGVtIGNhZGEgcGVyw61vZG8uJ1xuICAgIH1cbiAgfVxuXG4gIGlmIChpbmkubGVuZ3RoICE9PSBmaW4ubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6XG4gICAgICAgICdPIHBlcsOtb2RvIGluaWNpYWwgZSBvIHBlcsOtb2RvIGZpbmFsIGRldmVtIHRlciBhIG1lc21hIHF1YW50aWRhZGUgZGUgYW5vcy4nXG4gICAgfVxuICB9XG5cbiAgaWYgKCFhcmVDb25zZWN1dGl2ZVllYXJzKGluaSkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogJ09zIGFub3MgZG8gcGVyw61vZG8gaW5pY2lhbCBkZXZlbSBzZXIgY29uc2VjdXRpdm9zLidcbiAgICB9XG4gIH1cblxuICBpZiAoIWFyZUNvbnNlY3V0aXZlWWVhcnMoZmluKSkge1xuICAgIHJldHVybiB7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBtZXNzYWdlOiAnT3MgYW5vcyBkbyBwZXLDrW9kbyBmaW5hbCBkZXZlbSBzZXIgY29uc2VjdXRpdm9zLidcbiAgICB9XG4gIH1cblxuICBjb25zdCBpbmlTZXQgPSBuZXcgU2V0KGluaSlcbiAgaWYgKGZpbi5zb21lKCh5KSA9PiBpbmlTZXQuaGFzKHkpKSkge1xuICAgIHJldHVybiB7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBtZXNzYWdlOiAnVW0gYW5vIG7Do28gcG9kZSBwZXJ0ZW5jZXIgYW9zIGRvaXMgcGVyw61vZG9zIGFvIG1lc21vIHRlbXBvLidcbiAgICB9XG4gIH1cblxuICBjb25zdCBtYXhJbmljaWFsID0gaW5pW2luaS5sZW5ndGggLSAxXVxuICBjb25zdCBtaW5GaW5hbCA9IGZpblswXVxuICBpZiAobWF4SW5pY2lhbCA+PSBtaW5GaW5hbCkge1xuICAgIHJldHVybiB7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBtZXNzYWdlOiAnTyBwZXLDrW9kbyBmaW5hbCBkZXZlIHNlciBwb3N0ZXJpb3IgYW8gcGVyw61vZG8gaW5pY2lhbC4nXG4gICAgfVxuICB9XG5cbiAgY29uc3QgdmFsdWVJbmljaWFsID0gc3VtVmFsdWVzRm9yWWVhcnMoc2VyaWVzLCBpbmkpXG4gIGNvbnN0IHZhbHVlRmluYWwgPSBzdW1WYWx1ZXNGb3JZZWFycyhzZXJpZXMsIGZpbilcblxuICBpZiAodmFsdWVJbmljaWFsID09IG51bGwgfHwgdmFsdWVGaW5hbCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6XG4gICAgICAgICdVbSBvdSBtYWlzIGFub3Mgc2VsZWNpb25hZG9zIG7Do28gcG9zc3VlbSBkYWRvIHBhcmEgZXN0ZSByZWNvcnRlLidcbiAgICB9XG4gIH1cblxuICBjb25zdCBwY3QgPSBjYWxjUGVyY2VudFZhcmlhdGlvbih2YWx1ZUluaWNpYWwsIHZhbHVlRmluYWwpXG4gIGlmIChwY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiB7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBtZXNzYWdlOlxuICAgICAgICAnQSBzb21hIGRvIHBlcsOtb2RvIGluaWNpYWwgw6kgemVybzsgbsOjbyDDqSBwb3Nzw612ZWwgY2FsY3VsYXIgYSB2YXJpYcOnw6NvIHBlcmNlbnR1YWwuJ1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgb2s6IHRydWUsXG4gICAgZGF0YToge1xuICAgICAgcGN0LFxuICAgICAgdmFsdWVJbmljaWFsLFxuICAgICAgdmFsdWVGaW5hbCxcbiAgICAgIHllYXJzSW5pY2lhbDogaW5pLFxuICAgICAgeWVhcnNGaW5hbDogZmluXG4gICAgfVxuICB9XG59XG5cbi8qKiBDb21wYXJhw6fDo28gZW50cmUgZG9pcyBhbm9zIMO6bmljb3MgKGF0YWxobyBwYXJhIHBlcsOtb2RvcyBkZSB1bSBhbm8pLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVWYXJpYXRpb24gKFxuICBzZXJpZXM6IFllYXJWYWx1ZVJvd1tdLFxuICBhbm9JbmljaWFsOiBudW1iZXIsXG4gIGFub0ZpbmFsOiBudW1iZXJcbik6IFBlcmlvZFZhcmlhdGlvbk91dGNvbWUge1xuICByZXR1cm4gY29tcHV0ZVBlcmlvZFZhcmlhdGlvbihzZXJpZXMsIFthbm9JbmljaWFsXSwgW2Fub0ZpbmFsXSlcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX2RhdGFfc291cmNlX3NlbGVjdG9yX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfc2V0dGluZ19jb21wb25lbnRzX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiXG4vKiogQGpzeCBqc3ggKi9cbi8qKiBAanN4RnJhZyBSZWFjdC5GcmFnbWVudCAqL1xuaW1wb3J0IHtcbiAgUmVhY3QsIGpzeCwgY3NzLCBJbW11dGFibGUsXG4gIHR5cGUgSW1tdXRhYmxlQXJyYXksIHR5cGUgVXNlRGF0YVNvdXJjZSxcbiAgdHlwZSBJTURhdGFTb3VyY2VTY2hlbWEsXG4gIHR5cGUgRGF0YVNvdXJjZSxcbiAgQWxsRGF0YVNvdXJjZVR5cGVzLCBEYXRhU291cmNlQ29tcG9uZW50XG59IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IFNlbGVjdCwgT3B0aW9uIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCB7IFNldHRpbmdTZWN0aW9uLCBTZXR0aW5nUm93IH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBEYXRhU291cmNlU2VsZWN0b3IgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL2RhdGEtc291cmNlLXNlbGVjdG9yJ1xuaW1wb3J0IHsgdHlwZSBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCB7IGdldERhdGFTb3VyY2VTY2hlbWEgfSBmcm9tICcuLi91dGlscy9kYXRhLXNvdXJjZSdcbmltcG9ydCB7XG4gIGRldGVjdFllYXJGaWVsZCxcbiAgZm9ybWF0UmVjb3J0ZUxhYmVsLFxuICBnZXRSZWNvcnRlQ2FuZGlkYXRlRmllbGRzLFxuICBzY2hlbWFUb0ZpZWxkTGlzdFxufSBmcm9tICcuLi91dGlscy9wcm9kZXMtdGFibGUnXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGlkOiBzdHJpbmdcbiAgdXNlRGF0YVNvdXJjZXM/OiBJbW11dGFibGVBcnJheTxVc2VEYXRhU291cmNlPlxuICBvblNldHRpbmdDaGFuZ2U/OiAoc2V0dGluZzogYW55KSA9PiB2b2lkXG4gIGNvbmZpZz86IElNQ29uZmlnXG59XG5cbmNvbnN0IHN0eWxlcyA9IGNzc2BcbiAgJi53aWRnZXQtc2V0dGluZy1jb21wYXJhZG9yLXByb2RlcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAwO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICB9XG4gICYgKiB7XG4gICAgd3JpdGluZy1tb2RlOiBob3Jpem9udGFsLXRiICFpbXBvcnRhbnQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAgIHdvcmQtYnJlYWs6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB9XG4gIC5qaW11LXVpX3NldHRpbmctcm93IHtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgfVxuICAuamltdS11aV9zZXR0aW5nLXJvd19fbGFiZWwge1xuICAgIG1pbi13aWR0aDogMDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmppbXUtdWlfc2V0dGluZy1yb3dfX2NvbnRlbnQge1xuICAgIGZsZXg6IDEgMSAxMDAlO1xuICAgIG1pbi13aWR0aDogMDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cbiAgLnNldHRpbmctaGludCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjNmI2YjZiO1xuICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICB9XG5gXG5cbmNvbnN0IGVtcHR5Q29uZmlnID0gKCkgPT4gSW1tdXRhYmxlKHt9IGFzIElNQ29uZmlnKVxuXG5jb25zdCBTZXR0aW5nID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCB7IGlkLCB1c2VEYXRhU291cmNlcywgb25TZXR0aW5nQ2hhbmdlLCBjb25maWcgfSA9IHByb3BzXG4gIGNvbnN0IHVzZURzID0gdXNlRGF0YVNvdXJjZXM/LlswXVxuICBjb25zdCB5ZWFyRmllbGQgPSBjb25maWc/LnllYXJGaWVsZFxuICBjb25zdCByZWNvcnRlRmllbGQgPSBjb25maWc/LnJlY29ydGVGaWVsZFxuXG4gIGNvbnN0IFtmaWVsZExpc3QsIHNldEZpZWxkTGlzdF0gPSBSZWFjdC51c2VTdGF0ZShcbiAgICBbXSBhcyBSZXR1cm5UeXBlPHR5cGVvZiBzY2hlbWFUb0ZpZWxkTGlzdD5cbiAgKVxuXG4gIGNvbnN0IHJlY29ydGVPcHRpb25zID0gUmVhY3QudXNlTWVtbyhcbiAgICAoKSA9PiBnZXRSZWNvcnRlQ2FuZGlkYXRlRmllbGRzKGZpZWxkTGlzdCwgeWVhckZpZWxkKSxcbiAgICBbZmllbGRMaXN0LCB5ZWFyRmllbGRdXG4gIClcblxuICBjb25zdCBhcHBseVllYXJGaWVsZCA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChmaWVsZHM6IFJldHVyblR5cGU8dHlwZW9mIHNjaGVtYVRvRmllbGRMaXN0PiwgY3VycmVudFJlY29ydGU/OiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGRldGVjdGVkID0gZGV0ZWN0WWVhckZpZWxkKGZpZWxkcylcbiAgICAgIGlmICghZGV0ZWN0ZWQpIHJldHVyblxuXG4gICAgICBsZXQgbmV4dCA9IChjb25maWcgPz8gZW1wdHlDb25maWcoKSkuc2V0KCd5ZWFyRmllbGQnLCBkZXRlY3RlZClcbiAgICAgIGlmIChjdXJyZW50UmVjb3J0ZSA9PT0gZGV0ZWN0ZWQpIHtcbiAgICAgICAgbmV4dCA9IG5leHQud2l0aG91dCgncmVjb3J0ZUZpZWxkJylcbiAgICAgIH1cbiAgICAgIGlmIChkZXRlY3RlZCAhPT0geWVhckZpZWxkIHx8IGN1cnJlbnRSZWNvcnRlID09PSBkZXRlY3RlZCkge1xuICAgICAgICBvblNldHRpbmdDaGFuZ2U/Lih7IGlkLCBjb25maWc6IG5leHQgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIFtjb25maWcsIGlkLCBvblNldHRpbmdDaGFuZ2UsIHllYXJGaWVsZF1cbiAgKVxuXG4gIGNvbnN0IHByb2Nlc3NTY2hlbWEgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoc2NoZW1hOiBJTURhdGFTb3VyY2VTY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IGZpZWxkcyA9IHNjaGVtYVRvRmllbGRMaXN0KHNjaGVtYSlcbiAgICAgIHNldEZpZWxkTGlzdChmaWVsZHMpXG4gICAgICBhcHBseVllYXJGaWVsZChmaWVsZHMsIHJlY29ydGVGaWVsZClcbiAgICB9LFxuICAgIFthcHBseVllYXJGaWVsZCwgcmVjb3J0ZUZpZWxkXVxuICApXG5cbiAgY29uc3QgaGFuZGxlRGF0YVNvdXJjZUNyZWF0ZWQgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZHM6IERhdGFTb3VyY2UpID0+IHtcbiAgICAgIGNvbnN0IHNjaGVtYSA9IGdldERhdGFTb3VyY2VTY2hlbWEoZHMpXG4gICAgICBpZiAoc2NoZW1hKSBwcm9jZXNzU2NoZW1hKHNjaGVtYSlcbiAgICB9LFxuICAgIFtwcm9jZXNzU2NoZW1hXVxuICApXG5cbiAgY29uc3QgaGFuZGxlRGF0YVNvdXJjZUNoYW5nZSA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChuZXdVc2VEYXRhU291cmNlczogVXNlRGF0YVNvdXJjZVtdKSA9PiB7XG4gICAgICBvblNldHRpbmdDaGFuZ2U/Lih7XG4gICAgICAgIGlkLFxuICAgICAgICB1c2VEYXRhU291cmNlczogSW1tdXRhYmxlKG5ld1VzZURhdGFTb3VyY2VzKSxcbiAgICAgICAgY29uZmlnOiAoY29uZmlnID8/IGVtcHR5Q29uZmlnKCkpXG4gICAgICAgICAgLndpdGhvdXQoJ3llYXJGaWVsZCcpXG4gICAgICAgICAgLndpdGhvdXQoJ3JlY29ydGVGaWVsZCcpXG4gICAgICB9KVxuICAgICAgc2V0RmllbGRMaXN0KFtdKVxuICAgIH0sXG4gICAgW2NvbmZpZywgaWQsIG9uU2V0dGluZ0NoYW5nZV1cbiAgKVxuXG4gIGNvbnN0IGhhbmRsZVJlY29ydGVTZWxlY3QgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgYmFzZSA9IGNvbmZpZyA/PyBlbXB0eUNvbmZpZygpXG4gICAgICBvblNldHRpbmdDaGFuZ2U/Lih7XG4gICAgICAgIGlkLFxuICAgICAgICBjb25maWc6IHZhbHVlID8gYmFzZS5zZXQoJ3JlY29ydGVGaWVsZCcsIHZhbHVlKSA6IGJhc2Uud2l0aG91dCgncmVjb3J0ZUZpZWxkJylcbiAgICAgIH0pXG4gICAgfSxcbiAgICBbY29uZmlnLCBpZCwgb25TZXR0aW5nQ2hhbmdlXVxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1zZXR0aW5nLWNvbXBhcmFkb3ItcHJvZGVzIGppbXUtd2lkZ2V0LXNldHRpbmcgdy0xMDBcIiBjc3M9e3N0eWxlc30+XG4gICAgICB7dXNlRHMgJiYgKFxuICAgICAgICA8RGF0YVNvdXJjZUNvbXBvbmVudFxuICAgICAgICAgIHdpZGdldElkPXtpZH1cbiAgICAgICAgICB1c2VEYXRhU291cmNlPXt1c2VEc31cbiAgICAgICAgICBvbkRhdGFTb3VyY2VDcmVhdGVkPXtoYW5kbGVEYXRhU291cmNlQ3JlYXRlZH1cbiAgICAgICAgICBvbkRhdGFTb3VyY2VTY2hlbWFDaGFuZ2U9e3Byb2Nlc3NTY2hlbWF9XG4gICAgICAgIC8+XG4gICAgICApfVxuXG4gICAgICA8U2V0dGluZ1NlY3Rpb24gdGl0bGU9XCJEYWRvc1wiIGNsYXNzTmFtZT1cInctMTAwXCI+XG4gICAgICAgIDxTZXR0aW5nUm93IGxhYmVsPVwiQ2FtYWRhIFBST0RFUyAoRmVhdHVyZSBMYXllcilcIiBmbG93PVwid3JhcFwiIGxldmVsPXsxfT5cbiAgICAgICAgICA8RGF0YVNvdXJjZVNlbGVjdG9yXG4gICAgICAgICAgICB3aWRnZXRJZD17aWR9XG4gICAgICAgICAgICBpc011bHRpcGxlPXtmYWxzZX1cbiAgICAgICAgICAgIG11c3RVc2VEYXRhU291cmNlXG4gICAgICAgICAgICB0eXBlcz17SW1tdXRhYmxlKFtBbGxEYXRhU291cmNlVHlwZXMuRmVhdHVyZUxheWVyXSl9XG4gICAgICAgICAgICB1c2VEYXRhU291cmNlcz17dXNlRGF0YVNvdXJjZXN9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRGF0YVNvdXJjZUNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1NldHRpbmdSb3c+XG5cbiAgICAgICAge3VzZURzICYmIChcbiAgICAgICAgICA8U2V0dGluZ1JvdyBsYWJlbD1cIlJlY29ydGUgZ2VvZ3LDoWZpY28gKGNvbHVuYSlcIiBmbG93PVwid3JhcFwiIGxldmVsPXsxfT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDBcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtyZWNvcnRlRmllbGQgPz8gJyd9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY2lvbmUgbyByZWNvcnRl4oCmXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KF9ldnQsIHZhbHVlKSA9PiBoYW5kbGVSZWNvcnRlU2VsZWN0KFN0cmluZyh2YWx1ZSA/PyAnJykpfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtyZWNvcnRlT3B0aW9ucy5sZW5ndGggPT09IDB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiXCI+eycnfTwvT3B0aW9uPlxuICAgICAgICAgICAgICAgIHtyZWNvcnRlT3B0aW9ucy5tYXAoKGYpID0+IChcbiAgICAgICAgICAgICAgICAgIDxPcHRpb25cbiAgICAgICAgICAgICAgICAgICAga2V5PXtmLmppbXVOYW1lfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zi5qaW11TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtyZWNvcnRlRmllbGQgPT09IGYuamltdU5hbWV9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtmb3JtYXRSZWNvcnRlTGFiZWwoZil9XG4gICAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy1oaW50XCI+XG4gICAgICAgICAgICAgICAgRXNjb2xoYSB1bWEgY29sdW5hIGRhIHRhYmVsYSAoZXguOiBDZXJyYWRvLCBBbWF6w7RuaWEgbGVnYWwsIFBhbnRhbmFsKS5cbiAgICAgICAgICAgICAgICBPcyBhbm9zIGV4aWJpZG9zIG5hIHdpZGdldCBzw6NvIGRldGVjdGFkb3MgYXV0b21hdGljYW1lbnRlIGEgcGFydGlyIGRvc1xuICAgICAgICAgICAgICAgIGRhZG9zIGRpc3BvbsOtdmVpcyBwYXJhIG8gcmVjb3J0ZSBzZWxlY2lvbmFkby5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L1NldHRpbmdSb3c+XG4gICAgICAgICl9XG4gICAgICA8L1NldHRpbmdTZWN0aW9uPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=