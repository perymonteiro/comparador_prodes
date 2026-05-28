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
/* harmony export */   buildYearSeriesInferred: () => (/* binding */ buildYearSeriesInferred),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9kaXN0L3NldHRpbmcvc2V0dGluZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlrQjtBQU9YLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxNQUF5QixFQUFXLEVBQUUsQ0FDdEUsTUFBTSxLQUFLLHVEQUFnQixDQUFDLE1BQU07SUFDbEMsTUFBTSxLQUFLLHVEQUFnQixDQUFDLFFBQVE7SUFDcEMsTUFBTSxLQUFLLHVEQUFnQixDQUFDLFFBQVE7QUFFL0IsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLEVBQXFCLEVBQXFCLEVBQUU7O0lBQzVFLElBQUksQ0FBQyxFQUFFO1FBQUUsT0FBTyxJQUFJO0lBQ3BCLE1BQU0sSUFBSSxHQUFHLFlBQUMsRUFBeUIsRUFBQyxpQkFBaUIsa0RBQUk7SUFDN0QsT0FBTyxJQUFJLGFBQUosSUFBSSxjQUFKLElBQUksR0FBSSxFQUFFO0FBQ25CLENBQUM7QUFFRCwwRkFBMEY7QUFDbkYsTUFBTSxzQkFBc0IsR0FBRyxDQUFDLEVBQXFCLEVBQXFCLEVBQUU7SUFDakYsSUFBSSxDQUFDLEVBQUU7UUFBRSxPQUFPLElBQUk7SUFDcEIsTUFBTSxDQUFDLEdBQUcsRUFJVDtJQUNELElBQ0UsT0FBTyxDQUFDLENBQUMsS0FBSyxLQUFLLFVBQVU7UUFDN0IsT0FBTyxDQUFDLENBQUMsSUFBSSxLQUFLLFVBQVU7UUFDNUIsT0FBTyxDQUFDLENBQUMsT0FBTyxLQUFLLFVBQVUsRUFDL0IsQ0FBQztRQUNELE9BQU8sRUFBRTtJQUNYLENBQUM7SUFDRCxPQUFPLGlCQUFpQixDQUFDLEVBQUUsQ0FBQztBQUM5QixDQUFDO0FBRU0sU0FBZSxzQkFBc0IsQ0FDMUMsRUFBYzs7UUFFZCxNQUFNLFFBQVEsR0FBRyxtQkFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDeEMsSUFBSSxTQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFR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QUFFLEVBQUUsQ0FBQyxDQUN6QiwrQ0FBQywyQ0FBTSxJQUNMLEdBQUcsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUNmLEtBQUssRUFBRSxDQUFDLENBQUMsUUFBUSxFQUNqQixNQUFNLEVBQUUsWUFBWSxLQUFLLENBQUMsQ0FBQyxRQUFRLElBRWxDLHVFQUFrQixDQUFDLENBQUMsQ0FBQyxDQUNmLENBQ1YsQ0FBQyxDQUNLO29CQUNULHdEQUFLLFNBQVMsRUFBQyxjQUFjLGlOQUl2QixDQUNGLENBQ0ssQ0FDZCxDQUNjLENBQ2IsQ0FDUDtBQUNILENBQUM7QUFFRCxpRUFBZSxPQUFPO0FBRWQsU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY29tcGFyYWRvcl9wcm9kZXMvc3JjL3V0aWxzL2RhdGEtc291cmNlLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9zcmMvdXRpbHMvcHJvZGVzLXRhYmxlLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL2RhdGEtc291cmNlLXNlbGVjdG9yXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50c1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY29tcGFyYWRvcl9wcm9kZXMvc3JjL3NldHRpbmcvc2V0dGluZy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgdHlwZSBEYXRhU291cmNlLFxuICB0eXBlIElNRGF0YVNvdXJjZVNjaGVtYSxcbiAgRGF0YVNvdXJjZVN0YXR1c1xufSBmcm9tICdqaW11LWNvcmUnXG5cbnR5cGUgRGF0YVNvdXJjZVdpdGhNYWluID0gRGF0YVNvdXJjZSAmIHtcbiAgZ2V0TWFpbkRhdGFTb3VyY2U/OiAoKSA9PiBEYXRhU291cmNlXG4gIGdldFNjaGVtYT86ICgpID0+IElNRGF0YVNvdXJjZVNjaGVtYVxufVxuXG5leHBvcnQgY29uc3QgaXNRdWVyeWFibGVTdGF0dXMgPSAoc3RhdHVzPzogRGF0YVNvdXJjZVN0YXR1cyk6IGJvb2xlYW4gPT5cbiAgc3RhdHVzID09PSBEYXRhU291cmNlU3RhdHVzLkxvYWRlZCB8fFxuICBzdGF0dXMgPT09IERhdGFTb3VyY2VTdGF0dXMuVW5sb2FkZWQgfHxcbiAgc3RhdHVzID09PSBEYXRhU291cmNlU3RhdHVzLk5vdFJlYWR5XG5cbmV4cG9ydCBjb25zdCBnZXRNYWluRGF0YVNvdXJjZSA9IChkczogRGF0YVNvdXJjZSB8IG51bGwpOiBEYXRhU291cmNlIHwgbnVsbCA9PiB7XG4gIGlmICghZHMpIHJldHVybiBudWxsXG4gIGNvbnN0IG1haW4gPSAoZHMgYXMgRGF0YVNvdXJjZVdpdGhNYWluKS5nZXRNYWluRGF0YVNvdXJjZT8uKClcbiAgcmV0dXJuIG1haW4gPz8gZHNcbn1cblxuLyoqIFVzYSBhIGluc3TDom5jaWEgZGEgY2FtYWRhIHNlbGVjaW9uYWRhIChleC46IFBsYW5pbGhhMSkgcXVhbmRvIGVsYSBqw6Egw6kgY29uc3VsdMOhdmVsLiAqL1xuZXhwb3J0IGNvbnN0IGdldFF1ZXJ5YWJsZURhdGFTb3VyY2UgPSAoZHM6IERhdGFTb3VyY2UgfCBudWxsKTogRGF0YVNvdXJjZSB8IG51bGwgPT4ge1xuICBpZiAoIWRzKSByZXR1cm4gbnVsbFxuICBjb25zdCBxID0gZHMgYXMgRGF0YVNvdXJjZVdpdGhNYWluICYge1xuICAgIHF1ZXJ5PzogKHA6IG9iamVjdCkgPT4gUHJvbWlzZTx1bmtub3duPlxuICAgIGxvYWQ/OiAocDogb2JqZWN0KSA9PiBQcm9taXNlPHVua25vd24+XG4gICAgbG9hZEFsbD86IChwOiBvYmplY3QpID0+IFByb21pc2U8dW5rbm93bj5cbiAgfVxuICBpZiAoXG4gICAgdHlwZW9mIHEucXVlcnkgPT09ICdmdW5jdGlvbicgfHxcbiAgICB0eXBlb2YgcS5sb2FkID09PSAnZnVuY3Rpb24nIHx8XG4gICAgdHlwZW9mIHEubG9hZEFsbCA9PT0gJ2Z1bmN0aW9uJ1xuICApIHtcbiAgICByZXR1cm4gZHNcbiAgfVxuICByZXR1cm4gZ2V0TWFpbkRhdGFTb3VyY2UoZHMpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlbnN1cmVEYXRhU291cmNlU2NoZW1hIChcbiAgZHM6IERhdGFTb3VyY2Vcbik6IFByb21pc2U8SU1EYXRhU291cmNlU2NoZW1hIHwgdW5kZWZpbmVkPiB7XG4gIGNvbnN0IGV4aXN0aW5nID0gZ2V0RGF0YVNvdXJjZVNjaGVtYShkcylcbiAgaWYgKGV4aXN0aW5nPy5maWVsZHMgJiYgT2JqZWN0LmtleXMoZXhpc3RpbmcuZmllbGRzKS5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIGV4aXN0aW5nXG4gIH1cbiAgY29uc3QgZmV0Y2hTY2hlbWEgPSAoZHMgYXMgRGF0YVNvdXJjZVdpdGhNYWluICYge1xuICAgIGZldGNoU2NoZW1hPzogKCkgPT4gUHJvbWlzZTxJTURhdGFTb3VyY2VTY2hlbWE+XG4gIH0pLmZldGNoU2NoZW1hXG4gIGlmICh0eXBlb2YgZmV0Y2hTY2hlbWEgPT09ICdmdW5jdGlvbicpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGF3YWl0IGZldGNoU2NoZW1hLmNhbGwoZHMpXG4gICAgfSBjYXRjaCB7XG4gICAgICByZXR1cm4gZXhpc3RpbmdcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGV4aXN0aW5nXG59XG5cbmV4cG9ydCBjb25zdCBnZXREYXRhU291cmNlU2NoZW1hID0gKFxuICBkczogRGF0YVNvdXJjZVxuKTogSU1EYXRhU291cmNlU2NoZW1hIHwgdW5kZWZpbmVkID0+XG4gIChkcyBhcyBEYXRhU291cmNlV2l0aE1haW4pLmdldFNjaGVtYT8uKClcbiIsImltcG9ydCB7XG4gIHR5cGUgSU1GaWVsZFNjaGVtYSxcbiAgdHlwZSBJTURhdGFTb3VyY2VTY2hlbWEsXG4gIEppbXVGaWVsZFR5cGUsXG4gIEVzcmlGaWVsZFR5cGUsXG4gIFF1ZXJ5U2NvcGUsXG4gIHR5cGUgRGF0YVJlY29yZFxufSBmcm9tICdqaW11LWNvcmUnXG5cbmV4cG9ydCBpbnRlcmZhY2UgWWVhclZhbHVlUm93IHtcbiAgeWVhcjogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaWVsZEF0dHJpYnV0ZUtleXMge1xuICB5ZWFyS2V5OiBzdHJpbmdcbiAgcmVjb3J0ZUtleTogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1lFQVJfRklFTEQgPSAnYW5vJ1xuXG5jb25zdCBZRUFSX05BTUVfUEFUVEVSTlMgPSBbJ2FubycsICd5ZWFyJywgJ3lyJywgJ2V4ZXJjaWNpbycsICdleGVyY8OtY2lvJ11cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHlDZWxsICh2YWx1ZTogdW5rbm93bik6IGJvb2xlYW4ge1xuICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIHRydWVcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUudHJpbSgpID09PSAnJykgcmV0dXJuIHRydWVcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgTnVtYmVyLmlzTmFOKHZhbHVlKSkgcmV0dXJuIHRydWVcbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU51bWVyaWNWYWx1ZSAodmFsdWU6IHVua25vd24pOiBudW1iZXIgfCBudWxsIHtcbiAgaWYgKGlzRW1wdHlDZWxsKHZhbHVlKSkgcmV0dXJuIG51bGxcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgTnVtYmVyLmlzRmluaXRlKHZhbHVlKSkgcmV0dXJuIHZhbHVlXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgcyA9IHZhbHVlLnRyaW0oKVxuICAgIGlmICghcykgcmV0dXJuIG51bGxcbiAgICBpZiAocy5pbmNsdWRlcygnLCcpKSB7XG4gICAgICBjb25zdCBub3JtYWxpemVkID0gcy5yZXBsYWNlKC9cXC4vZywgJycpLnJlcGxhY2UoJywnLCAnLicpXG4gICAgICBjb25zdCBuID0gTnVtYmVyKG5vcm1hbGl6ZWQpXG4gICAgICByZXR1cm4gTnVtYmVyLmlzRmluaXRlKG4pID8gbiA6IG51bGxcbiAgICB9XG4gICAgY29uc3QgbiA9IE51bWJlcihzKVxuICAgIHJldHVybiBOdW1iZXIuaXNGaW5pdGUobikgPyBuIDogbnVsbFxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbi8qKiBDb252ZXJ0ZSBuw7ptZXJvIGV4aWJpZG8gbm8gQXJjR0lTIGVtIHB0LUJSIChleC46IDIuMDAxIOKGkiAyMDAxKS4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZVllYXJOdW1iZXIgKG46IG51bWJlcik6IG51bWJlciB8IG51bGwge1xuICBpZiAoIU51bWJlci5pc0Zpbml0ZShuKSkgcmV0dXJuIG51bGxcblxuICBpZiAobiA+PSAxOTg1ICYmIG4gPD0gMjAzNSAmJiBNYXRoLmFicyhuIC0gTWF0aC5yb3VuZChuKSkgPCAwLjAwMSkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG4pXG4gIH1cblxuICAvLyBUYWJlbGEgUFJPREVTIG5vIFBvcnRhbDogY29sdW5hIEFubyBjb21vIDIuMDAxLCAyLjAxMSAobWlsaGFyIGNvbSBwb250bylcbiAgaWYgKG4gPj0gMS45ODUgJiYgbiA8PSAyLjAzNSkge1xuICAgIGNvbnN0IHkgPSBNYXRoLnJvdW5kKG4gKiAxMDAwKVxuICAgIGlmICh5ID49IDE5ODUgJiYgeSA8PSAyMDM1KSByZXR1cm4geVxuICB9XG5cbiAgY29uc3QgdHJ1bmNhdGVkID0gTWF0aC50cnVuYyhuKVxuICBpZiAodHJ1bmNhdGVkID49IDE5ODUgJiYgdHJ1bmNhdGVkIDw9IDIwMzUpIHJldHVybiB0cnVuY2F0ZWRcbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlWWVhciAodmFsdWU6IHVua25vd24pOiBudW1iZXIgfCBudWxsIHtcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSAmJiAhTnVtYmVyLmlzTmFOKHZhbHVlLmdldFRpbWUoKSkpIHtcbiAgICByZXR1cm4gdmFsdWUuZ2V0RnVsbFllYXIoKVxuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gbm9ybWFsaXplWWVhck51bWJlcih2YWx1ZSlcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IHMgPSB2YWx1ZS50cmltKClcbiAgICBpZiAoIXMpIHJldHVybiBudWxsXG5cbiAgICBjb25zdCBiclRob3VzYW5kcyA9IHMubWF0Y2goL14oXFxkezEsMn0pXFwuKFxcZHszfSkkLylcbiAgICBpZiAoYnJUaG91c2FuZHMpIHtcbiAgICAgIGNvbnN0IHkgPSBOdW1iZXIoYnJUaG91c2FuZHNbMV0gKyBiclRob3VzYW5kc1syXSlcbiAgICAgIGlmICh5ID49IDE5ODUgJiYgeSA8PSAyMDM1KSByZXR1cm4geVxuICAgIH1cblxuICAgIGNvbnN0IG4gPSBOdW1iZXIocy5yZXBsYWNlKCcsJywgJy4nKSlcbiAgICBpZiAoTnVtYmVyLmlzRmluaXRlKG4pKSByZXR1cm4gbm9ybWFsaXplWWVhck51bWJlcihuKVxuXG4gICAgY29uc3QgbSA9IHMubWF0Y2goL1xcYigxOXwyMClcXGR7Mn1cXGIvKVxuICAgIGlmIChtKSByZXR1cm4gTnVtYmVyKG1bMF0pXG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNjaGVtYVRvRmllbGRMaXN0IChzY2hlbWE/OiBJTURhdGFTb3VyY2VTY2hlbWEgfCBudWxsKTogSU1GaWVsZFNjaGVtYVtdIHtcbiAgaWYgKCFzY2hlbWE/LmZpZWxkcykgcmV0dXJuIFtdXG4gIHJldHVybiBPYmplY3Qua2V5cyhzY2hlbWEuZmllbGRzKS5tYXAoKGtleSkgPT4gc2NoZW1hLmZpZWxkc1trZXldKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1lcmljUmVjb3J0ZUZpZWxkIChmaWVsZDogSU1GaWVsZFNjaGVtYSk6IGJvb2xlYW4ge1xuICBpZiAoZmllbGQudHlwZSA9PT0gSmltdUZpZWxkVHlwZS5OdW1iZXIpIHJldHVybiB0cnVlXG4gIGNvbnN0IGVzcmkgPSBmaWVsZC5lc3JpVHlwZVxuICByZXR1cm4gKFxuICAgIGVzcmkgPT09IEVzcmlGaWVsZFR5cGUuRG91YmxlIHx8XG4gICAgZXNyaSA9PT0gRXNyaUZpZWxkVHlwZS5TaW5nbGUgfHxcbiAgICBlc3JpID09PSBFc3JpRmllbGRUeXBlLkludGVnZXIgfHxcbiAgICBlc3JpID09PSBFc3JpRmllbGRUeXBlLlNtYWxsSW50ZWdlclxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVLZXkgKGZpZWxkOiBJTUZpZWxkU2NoZW1hKTogc3RyaW5nIHtcbiAgcmV0dXJuIGZpZWxkLm5hbWUgfHwgZmllbGQuamltdU5hbWVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRldGVjdFllYXJGaWVsZCAoZmllbGRzOiBJTUZpZWxkU2NoZW1hW10pOiBzdHJpbmcgfCBudWxsIHtcbiAgY29uc3QgZXhhY3RBbm8gPSBmaWVsZHMuZmluZChcbiAgICAoZikgPT5cbiAgICAgIGYuamltdU5hbWU/LnRvTG93ZXJDYXNlKCkgPT09ICdhbm8nIHx8XG4gICAgICBmLm5hbWU/LnRvTG93ZXJDYXNlKCkgPT09ICdhbm8nIHx8XG4gICAgICBmLmFsaWFzPy50b0xvd2VyQ2FzZSgpID09PSAnYW5vJ1xuICApXG4gIGlmIChleGFjdEFubykgcmV0dXJuIGV4YWN0QW5vLmppbXVOYW1lXG5cbiAgY29uc3QgY2FuZGlkYXRlcyA9IGZpZWxkcy5maWx0ZXIoXG4gICAgKGYpID0+IGYudHlwZSA9PT0gSmltdUZpZWxkVHlwZS5OdW1iZXIgfHwgZi50eXBlID09PSBKaW11RmllbGRUeXBlLlN0cmluZ1xuICApXG4gIGZvciAoY29uc3QgcGF0IG9mIFlFQVJfTkFNRV9QQVRURVJOUykge1xuICAgIGNvbnN0IGZvdW5kID0gY2FuZGlkYXRlcy5maW5kKFxuICAgICAgKGYpID0+XG4gICAgICAgIGYuamltdU5hbWU/LnRvTG93ZXJDYXNlKCkgPT09IHBhdCB8fFxuICAgICAgICBmLm5hbWU/LnRvTG93ZXJDYXNlKCkgPT09IHBhdCB8fFxuICAgICAgICBmLmFsaWFzPy50b0xvd2VyQ2FzZSgpID09PSBwYXRcbiAgICApXG4gICAgaWYgKGZvdW5kKSByZXR1cm4gZm91bmQuamltdU5hbWVcbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UmVjb3J0ZUxhYmVsIChmaWVsZDogSU1GaWVsZFNjaGVtYSk6IHN0cmluZyB7XG4gIHJldHVybiBmb3JtYXRSZWNvcnRlTGFiZWxGcm9tTmFtZShmaWVsZC5qaW11TmFtZSwgZmllbGQuYWxpYXMpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRSZWNvcnRlTGFiZWxGcm9tTmFtZSAoamltdU5hbWU6IHN0cmluZywgYWxpYXM/OiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoYWxpYXM/LnRyaW0oKSkgcmV0dXJuIGFsaWFzLnRyaW0oKVxuICByZXR1cm4gamltdU5hbWVcbiAgICAuc3BsaXQoJ18nKVxuICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAubWFwKCh3KSA9PiB3LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdy5zbGljZSgxKS50b0xvd2VyQ2FzZSgpKVxuICAgIC5qb2luKCcgJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN5c3RlbUhpZGRlbkZpZWxkTmFtZXMgKGZpZWxkczogSU1GaWVsZFNjaGVtYVtdKTogc3RyaW5nW10ge1xuICByZXR1cm4gZmllbGRzXG4gICAgLmZpbHRlcigoZikgPT4ge1xuICAgICAgY29uc3QgZXNyaSA9IGYuZXNyaVR5cGVcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGVzcmkgPT09IEVzcmlGaWVsZFR5cGUuT0lEIHx8XG4gICAgICAgIGVzcmkgPT09IEVzcmlGaWVsZFR5cGUuR2VvbWV0cnkgfHxcbiAgICAgICAgZXNyaSA9PT0gRXNyaUZpZWxkVHlwZS5HbG9iYWxJRCB8fFxuICAgICAgICBlc3JpID09PSBFc3JpRmllbGRUeXBlLkdVSURcbiAgICAgIClcbiAgICB9KVxuICAgIC5tYXAoKGYpID0+IGYuamltdU5hbWUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWNvcnRlSGlkZGVuRmllbGROYW1lcyAoXG4gIGZpZWxkczogSU1GaWVsZFNjaGVtYVtdLFxuICB5ZWFyRmllbGQ/OiBzdHJpbmdcbik6IHN0cmluZ1tdIHtcbiAgY29uc3QgaGlkZGVuID0gZ2V0U3lzdGVtSGlkZGVuRmllbGROYW1lcyhmaWVsZHMpXG4gIGlmICh5ZWFyRmllbGQgJiYgIWhpZGRlbi5pbmNsdWRlcyh5ZWFyRmllbGQpKSB7XG4gICAgaGlkZGVuLnB1c2goeWVhckZpZWxkKVxuICB9XG4gIHJldHVybiBoaWRkZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlY29ydGVDYW5kaWRhdGVGaWVsZHMgKFxuICBmaWVsZHM6IElNRmllbGRTY2hlbWFbXSxcbiAgeWVhckZpZWxkPzogc3RyaW5nXG4pOiBJTUZpZWxkU2NoZW1hW10ge1xuICBjb25zdCBoaWRkZW4gPSBuZXcgU2V0KGdldFJlY29ydGVIaWRkZW5GaWVsZE5hbWVzKGZpZWxkcywgeWVhckZpZWxkKSlcbiAgcmV0dXJuIGZpZWxkc1xuICAgIC5maWx0ZXIoKGYpID0+IGlzTnVtZXJpY1JlY29ydGVGaWVsZChmKSAmJiAhaGlkZGVuLmhhcyhmLmppbXVOYW1lKSlcbiAgICAuc29ydCgoYSwgYikgPT5cbiAgICAgIGZvcm1hdFJlY29ydGVMYWJlbChhKS5sb2NhbGVDb21wYXJlKGZvcm1hdFJlY29ydGVMYWJlbChiKSwgJ3B0LUJSJylcbiAgICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kRmllbGRCeUppbXVOYW1lIChcbiAgZmllbGRzOiBJTUZpZWxkU2NoZW1hW10sXG4gIGppbXVOYW1lPzogc3RyaW5nXG4pOiBJTUZpZWxkU2NoZW1hIHwgbnVsbCB7XG4gIGlmICghamltdU5hbWUpIHJldHVybiBudWxsXG4gIGNvbnN0IGV4YWN0ID0gZmllbGRzLmZpbmQoKGYpID0+IGYuamltdU5hbWUgPT09IGppbXVOYW1lKVxuICBpZiAoZXhhY3QpIHJldHVybiBleGFjdFxuICBjb25zdCBsb3dlciA9IGppbXVOYW1lLnRvTG93ZXJDYXNlKClcbiAgcmV0dXJuIChcbiAgICBmaWVsZHMuZmluZChcbiAgICAgIChmKSA9PlxuICAgICAgICBmLmppbXVOYW1lPy50b0xvd2VyQ2FzZSgpID09PSBsb3dlciB8fFxuICAgICAgICBmLm5hbWU/LnRvTG93ZXJDYXNlKCkgPT09IGxvd2VyIHx8XG4gICAgICAgIGYuYWxpYXM/LnRvTG93ZXJDYXNlKCkgPT09IGxvd2VyXG4gICAgKSA/PyBudWxsXG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVBdHRyaWJ1dGVLZXlzIChcbiAgZmllbGRzOiBJTUZpZWxkU2NoZW1hW10sXG4gIHllYXJGaWVsZEppbXU/OiBzdHJpbmcsXG4gIHJlY29ydGVGaWVsZEppbXU/OiBzdHJpbmdcbik6IEZpZWxkQXR0cmlidXRlS2V5cyB8IG51bGwge1xuICBpZiAoIXllYXJGaWVsZEppbXUgfHwgIXJlY29ydGVGaWVsZEppbXUpIHJldHVybiBudWxsXG5cbiAgY29uc3QgeWVhckZpZWxkID0gZmluZEZpZWxkQnlKaW11TmFtZShmaWVsZHMsIHllYXJGaWVsZEppbXUpXG4gIGNvbnN0IHJlY29ydGVGaWVsZCA9IGZpbmRGaWVsZEJ5SmltdU5hbWUoZmllbGRzLCByZWNvcnRlRmllbGRKaW11KVxuXG4gIHJldHVybiB7XG4gICAgeWVhcktleTogeWVhckZpZWxkID8gZ2V0QXR0cmlidXRlS2V5KHllYXJGaWVsZCkgOiB5ZWFyRmllbGRKaW11LFxuICAgIHJlY29ydGVLZXk6IHJlY29ydGVGaWVsZCA/IGdldEF0dHJpYnV0ZUtleShyZWNvcnRlRmllbGQpIDogcmVjb3J0ZUZpZWxkSmltdVxuICB9XG59XG5cbnR5cGUgUmVjb3JkTGlrZSA9XG4gIHwgRGF0YVJlY29yZFxuICB8IHtcbiAgICAgIGF0dHJpYnV0ZXM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICAgICAgZmVhdHVyZT86IHsgYXR0cmlidXRlcz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+IH1cbiAgICAgIGdldERhdGE/OiAoKSA9PiB7XG4gICAgICAgIGF0dHJpYnV0ZXM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICAgICAgICBmZWF0dXJlPzogeyBhdHRyaWJ1dGVzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfVxuICAgICAgfVxuICAgICAgZ2V0RmllbGRWYWx1ZT86IChqaW11RmllbGROYW1lOiBzdHJpbmcpID0+IHVua25vd25cbiAgICAgIGdldERhdGVGaWVsZFZhbHVlPzogKGppbXVGaWVsZE5hbWU6IHN0cmluZykgPT4gdW5rbm93blxuICAgICAgZ2V0RGF0YUJlZm9yZU1hcHBpbmc/OiAoKSA9PiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICAgIH1cblxuZnVuY3Rpb24gdG9QbGFpbk9iamVjdCAodmFsdWU6IHVua25vd24pOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB7XG4gIGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JykgcmV0dXJuIHt9XG4gIGNvbnN0IHYgPSB2YWx1ZSBhcyB7XG4gICAgdG9KUz86ICgpID0+IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gICAgYXNNdXRhYmxlPzogKG9wdHM/OiB7IGRlZXA6IGJvb2xlYW4gfSkgPT4gUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgfVxuICBpZiAodHlwZW9mIHYudG9KUyA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHYudG9KUygpXG4gIGlmICh0eXBlb2Ygdi5hc011dGFibGUgPT09ICdmdW5jdGlvbicpIHJldHVybiB2LmFzTXV0YWJsZSh7IGRlZXA6IHRydWUgfSlcbiAgcmV0dXJuIHZhbHVlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+XG59XG5cbmNvbnN0IEdFVF9EQVRBX01FVEFfS0VZUyA9IG5ldyBTZXQoW1xuICAnYXR0cmlidXRlcycsXG4gICdmZWF0dXJlJyxcbiAgJ2dlb21ldHJ5JyxcbiAgJ2NlbnRyb2lkJyxcbiAgJ2FnZ3JlZ2F0ZUdlb21ldHJpZXMnLFxuICAnc3ltYm9sJ1xuXSlcblxuLyoqIEV4dHJhaSBvIGRpY2lvbsOhcmlvIGRlIGF0cmlidXRvcyBkZSB1bSByZWdpc3RybyAodsOhcmlvcyBmb3JtYXRvcyBkbyBKaW11L0FyY0dJUykuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGxhaW5BdHRyaWJ1dGVzIChyZWM6IFJlY29yZExpa2UpOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB7XG4gIGNvbnN0IG1lcmdlZDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fVxuXG4gIGNvbnN0IG1lcmdlID0gKGF0dHJzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pID0+IHtcbiAgICBpZiAoIWF0dHJzKSByZXR1cm5cbiAgICBPYmplY3QuYXNzaWduKG1lcmdlZCwgdG9QbGFpbk9iamVjdChhdHRycykpXG4gIH1cblxuICBpZiAoJ2dldERhdGEnIGluIHJlYyAmJiB0eXBlb2YgcmVjLmdldERhdGEgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCBkYXRhID0gcmVjLmdldERhdGEoKVxuICAgIGNvbnN0IHBsYWluID0gdG9QbGFpbk9iamVjdChkYXRhKVxuICAgIG1lcmdlKHBsYWluLmF0dHJpYnV0ZXMgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCB1bmRlZmluZWQpXG4gICAgbWVyZ2UocGxhaW4uZmVhdHVyZT8uYXR0cmlidXRlcyBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IHVuZGVmaW5lZClcbiAgICAvLyBKaW11IERhdGFSZWNvcmQ6IGdldERhdGEoKSBjb3N0dW1hIHNlciBtYXBhIHBsYW5vIHsgamltdUZpZWxkTmFtZTogdmFsb3IgfVxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHBsYWluKSkge1xuICAgICAgaWYgKEdFVF9EQVRBX01FVEFfS0VZUy5oYXMoa2V5KSkgY29udGludWVcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSBtZXJnZWRba2V5XSA9IHZhbHVlXG4gICAgfVxuICB9XG5cbiAgaWYgKCdmZWF0dXJlJyBpbiByZWMgJiYgcmVjLmZlYXR1cmU/LmF0dHJpYnV0ZXMpIHtcbiAgICBtZXJnZShyZWMuZmVhdHVyZS5hdHRyaWJ1dGVzKVxuICB9XG5cbiAgaWYgKCdhdHRyaWJ1dGVzJyBpbiByZWMgJiYgcmVjLmF0dHJpYnV0ZXMpIHtcbiAgICBtZXJnZShyZWMuYXR0cmlidXRlcylcbiAgfVxuXG4gIGlmICgnZ2V0RGF0YUJlZm9yZU1hcHBpbmcnIGluIHJlYyAmJiB0eXBlb2YgcmVjLmdldERhdGFCZWZvcmVNYXBwaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgbWVyZ2UocmVjLmdldERhdGFCZWZvcmVNYXBwaW5nKCkpXG4gIH1cblxuICByZXR1cm4gbWVyZ2VkXG59XG5cbmZ1bmN0aW9uIGF0dHJpYnV0ZUhhc1VzYWJsZVZhbHVlICh2YWx1ZTogdW5rbm93bik6IGJvb2xlYW4ge1xuICBpZiAoaXNFbXB0eUNlbGwodmFsdWUpKSByZXR1cm4gZmFsc2VcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHJldHVybiBmYWxzZVxuICByZXR1cm4gdHJ1ZVxufVxuXG4vKiogVmVyaWZpY2Egc2UgbyByZWdpc3RybyBleHDDtWUgYXRyaWJ1dG9zIG91IGdldEZpZWxkVmFsdWUgY29tIGRhZG9zIHJlYWlzIChuw6NvIHPDsyBtw6l0b2RvIHZhemlvKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWNvcmRIYXNSZWFkYWJsZURhdGEgKHJlYzogUmVjb3JkTGlrZSk6IGJvb2xlYW4ge1xuICBjb25zdCBhdHRycyA9IGdldFBsYWluQXR0cmlidXRlcyhyZWMpXG4gIGNvbnN0IHVzYWJsZUtleXMgPSBPYmplY3Qua2V5cyhhdHRycykuZmlsdGVyKChrZXkpID0+IHtcbiAgICBpZiAoL14ob2JqZWN0aWR8Z2xvYmFsaWR8c2hhcGV8Z2VvbWV0cnkpJC9pLnRlc3Qoa2V5KSkgcmV0dXJuIGZhbHNlXG4gICAgcmV0dXJuIGF0dHJpYnV0ZUhhc1VzYWJsZVZhbHVlKGF0dHJzW2tleV0pXG4gIH0pXG4gIGlmICh1c2FibGVLZXlzLmxlbmd0aCA+IDApIHJldHVybiB0cnVlXG5cbiAgaWYgKCdnZXRGaWVsZFZhbHVlJyBpbiByZWMgJiYgdHlwZW9mIHJlYy5nZXRGaWVsZFZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3QgcHJvYmVzID0gW1xuICAgICAgJ2FubycsXG4gICAgICAneWVhcicsXG4gICAgICAnQU5PJyxcbiAgICAgICdZZWFyJyxcbiAgICAgICdleGVyY2ljaW8nLFxuICAgICAgJ0V4ZXJjaWNpbydcbiAgICBdXG4gICAgZm9yIChjb25zdCBuYW1lIG9mIHByb2Jlcykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdiA9IHJlYy5nZXRGaWVsZFZhbHVlIShuYW1lKVxuICAgICAgICBpZiAoYXR0cmlidXRlSGFzVXNhYmxlVmFsdWUodikpIHJldHVybiB0cnVlXG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgLy8gdGVudGEgcHLDs3hpbW9cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuLyoqIEzDqiB2YWxvciBwZWxvIEFQSSBkbyBKaW11IChgZ2V0RmllbGRWYWx1ZWApIGUsIGVtIHNlZ3VpZGEsIHBlbG9zIGF0cmlidXRvcyBicnV0b3MuICovXG5leHBvcnQgZnVuY3Rpb24gcmVhZFJlY29yZFZhbHVlIChcbiAgcmVjOiBSZWNvcmRMaWtlLFxuICBmaWVsZD86IElNRmllbGRTY2hlbWEgfCBudWxsLFxuICBmYWxsYmFja0ppbXVOYW1lPzogc3RyaW5nXG4pOiB1bmtub3duIHtcbiAgY29uc3QgbmFtZXM6IHN0cmluZ1tdID0gW11cbiAgaWYgKGZpZWxkPy5qaW11TmFtZSkgbmFtZXMucHVzaChmaWVsZC5qaW11TmFtZSlcbiAgaWYgKGZhbGxiYWNrSmltdU5hbWUpIG5hbWVzLnB1c2goZmFsbGJhY2tKaW11TmFtZSlcbiAgaWYgKGZpZWxkPy5uYW1lKSBuYW1lcy5wdXNoKGZpZWxkLm5hbWUpXG4gIGlmIChmaWVsZD8uYWxpYXMpIG5hbWVzLnB1c2goZmllbGQuYWxpYXMpXG4gIGlmIChmaWVsZCkgbmFtZXMucHVzaChnZXRBdHRyaWJ1dGVLZXkoZmllbGQpKVxuXG4gIGNvbnN0IHVuaXF1ZU5hbWVzID0gWy4uLm5ldyBTZXQobmFtZXMuZmlsdGVyKEJvb2xlYW4pKV1cblxuICBpZiAoJ2dldEZpZWxkVmFsdWUnIGluIHJlYyAmJiB0eXBlb2YgcmVjLmdldEZpZWxkVmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3IgKGNvbnN0IG5hbWUgb2YgdW5pcXVlTmFtZXMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHYgPSByZWMuZ2V0RmllbGRWYWx1ZSEobmFtZSlcbiAgICAgICAgaWYgKHYgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHZcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAvLyB0ZW50YSBwcsOzeGltbyBub21lXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKFxuICAgIGZpZWxkPy5qaW11TmFtZSAmJlxuICAgICdnZXREYXRlRmllbGRWYWx1ZScgaW4gcmVjICYmXG4gICAgdHlwZW9mIHJlYy5nZXREYXRlRmllbGRWYWx1ZSA9PT0gJ2Z1bmN0aW9uJ1xuICApIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdiA9IHJlYy5nZXREYXRlRmllbGRWYWx1ZSEoZmllbGQuamltdU5hbWUpXG4gICAgICBpZiAodiAhPT0gdW5kZWZpbmVkKSByZXR1cm4gdlxuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gaWdub3JhXG4gICAgfVxuICB9XG5cbiAgY29uc3QgYXR0cnMgPSBnZXRQbGFpbkF0dHJpYnV0ZXMocmVjKVxuICBjb25zdCBmcm9tTWFwcGVkID0gcmVhZEF0dHJpYnV0ZUZsZXhpYmxlKGF0dHJzLCBmaWVsZCwgZmFsbGJhY2tKaW11TmFtZSlcbiAgaWYgKGZyb21NYXBwZWQgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGZyb21NYXBwZWRcblxuICBpZiAoJ2dldERhdGFCZWZvcmVNYXBwaW5nJyBpbiByZWMgJiYgdHlwZW9mIHJlYy5nZXREYXRhQmVmb3JlTWFwcGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IHJhdyA9IHRvUGxhaW5PYmplY3QocmVjLmdldERhdGFCZWZvcmVNYXBwaW5nKCkpXG4gICAgcmV0dXJuIHJlYWRBdHRyaWJ1dGVGbGV4aWJsZShyYXcsIGZpZWxkLCBmYWxsYmFja0ppbXVOYW1lKVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiByZWFkQXR0cmlidXRlIChcbiAgYXR0cnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuICBwcmltYXJ5S2V5OiBzdHJpbmcsXG4gIGZhbGxiYWNrS2V5Pzogc3RyaW5nXG4pOiB1bmtub3duIHtcbiAgaWYgKHByaW1hcnlLZXkgaW4gYXR0cnMpIHJldHVybiBhdHRyc1twcmltYXJ5S2V5XVxuICBpZiAoZmFsbGJhY2tLZXkgJiYgZmFsbGJhY2tLZXkgIT09IHByaW1hcnlLZXkgJiYgZmFsbGJhY2tLZXkgaW4gYXR0cnMpIHtcbiAgICByZXR1cm4gYXR0cnNbZmFsbGJhY2tLZXldXG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG4vKiogVGVudGEgamltdU5hbWUsIG5hbWUsIGFsaWFzIGUgY29ycmVzcG9uZMOqbmNpYSBzZW0gZGlmZXJlbmNpYXIgbWFpw7pzY3VsYXMvbWluw7pzY3VsYXMuICovXG5leHBvcnQgZnVuY3Rpb24gcmVhZEF0dHJpYnV0ZUZsZXhpYmxlIChcbiAgYXR0cnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuICBmaWVsZD86IElNRmllbGRTY2hlbWEgfCBudWxsLFxuICBmYWxsYmFja0ppbXVOYW1lPzogc3RyaW5nXG4pOiB1bmtub3duIHtcbiAgY29uc3QgY2FuZGlkYXRlcyA9IG5ldyBTZXQ8c3RyaW5nPigpXG4gIGlmIChmaWVsZCkge1xuICAgIGlmIChmaWVsZC5qaW11TmFtZSkgY2FuZGlkYXRlcy5hZGQoZmllbGQuamltdU5hbWUpXG4gICAgaWYgKGZpZWxkLm5hbWUpIGNhbmRpZGF0ZXMuYWRkKGZpZWxkLm5hbWUpXG4gICAgaWYgKGZpZWxkLmFsaWFzKSBjYW5kaWRhdGVzLmFkZChmaWVsZC5hbGlhcylcbiAgICBjYW5kaWRhdGVzLmFkZChnZXRBdHRyaWJ1dGVLZXkoZmllbGQpKVxuICB9XG4gIGlmIChmYWxsYmFja0ppbXVOYW1lKSBjYW5kaWRhdGVzLmFkZChmYWxsYmFja0ppbXVOYW1lKVxuXG4gIGZvciAoY29uc3Qga2V5IG9mIGNhbmRpZGF0ZXMpIHtcbiAgICBjb25zdCB2ID0gcmVhZEF0dHJpYnV0ZShhdHRycywga2V5KVxuICAgIGlmICh2ICE9PSB1bmRlZmluZWQpIHJldHVybiB2XG4gIH1cblxuICBjb25zdCBhdHRyS2V5cyA9IE9iamVjdC5rZXlzKGF0dHJzKVxuICBmb3IgKGNvbnN0IGtleSBvZiBjYW5kaWRhdGVzKSB7XG4gICAgY29uc3QgZm91bmQgPSBhdHRyS2V5cy5maW5kKChrKSA9PiBrLnRvTG93ZXJDYXNlKCkgPT09IGtleS50b0xvd2VyQ2FzZSgpKVxuICAgIGlmIChmb3VuZCAhPSBudWxsKSByZXR1cm4gYXR0cnNbZm91bmRdXG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG50eXBlIFF1ZXJpYWJsZUxheWVyID0ge1xuICBxdWVyeT86IChxOiBvYmplY3QsIG9wdGlvbnM/OiB7IHNjb3BlPzogUXVlcnlTY29wZSB9KSA9PiBQcm9taXNlPHsgcmVjb3Jkcz86IERhdGFSZWNvcmRbXSB9PlxuICBsb2FkPzogKHE6IG9iamVjdCwgb3B0aW9ucz86IHsgc2NvcGU/OiBRdWVyeVNjb3BlIH0pID0+IFByb21pc2U8RGF0YVJlY29yZFtdPlxuICBsb2FkQWxsPzogKFxuICAgIHE6IG9iamVjdCxcbiAgICBzaWduYWw/OiBBYm9ydFNpZ25hbCxcbiAgICBwcm9ncmVzc0NhbGxiYWNrPzogdW5rbm93bixcbiAgICBvcHRpb25zPzogeyBzY29wZT86IFF1ZXJ5U2NvcGUgfVxuICApID0+IFByb21pc2U8RGF0YVJlY29yZFtdPlxuICBnZXRBbGxMb2FkZWRSZWNvcmRzPzogKCkgPT4gRGF0YVJlY29yZFtdXG4gIGdldFJlY29yZHM/OiAoKSA9PiBEYXRhUmVjb3JkW11cbiAgbGF5ZXI/OiB7IHF1ZXJ5RmVhdHVyZXM/OiAocTogb2JqZWN0KSA9PiBQcm9taXNlPHsgZmVhdHVyZXM/OiB1bmtub3duW10gfT4gfVxuICBidWlsZFJlY29yZD86IChmZWF0dXJlOiB1bmtub3duKSA9PiBEYXRhUmVjb3JkXG59XG5cbmNvbnN0IHF1ZXJ5T3B0aW9ucyA9IHsgc2NvcGU6IFF1ZXJ5U2NvcGUuSW5BbGxEYXRhIH1cblxuY29uc3QgYnVpbGRRdWVyeVBhcmFtcyA9IChcbiAgb3V0RmllbGRzOiBzdHJpbmdbXSA9IFsnKiddLFxuICBkaXNhYmxlQ2xpZW50UXVlcnkgPSBmYWxzZVxuKSA9PiAoe1xuICB3aGVyZTogJzE9MScsXG4gIG91dEZpZWxkcyxcbiAgcmV0dXJuR2VvbWV0cnk6IGZhbHNlLFxuICBwYWdlU2l6ZTogMjAwMCxcbiAgLi4uKGRpc2FibGVDbGllbnRRdWVyeSA/IHsgZGlzYWJsZUNsaWVudFF1ZXJ5OiB0cnVlIH0gOiB7fSlcbn0pXG5cbmZ1bmN0aW9uIHJlY29yZHNBcmVSZWFkYWJsZSAocmVjb3JkczogRGF0YVJlY29yZFtdKTogYm9vbGVhbiB7XG4gIHJldHVybiByZWNvcmRzLmxlbmd0aCA+IDAgJiYgcmVjb3Jkcy5zb21lKHJlY29yZEhhc1JlYWRhYmxlRGF0YSlcbn1cblxuYXN5bmMgZnVuY3Rpb24gcXVlcnlWaWFKc2FwaUxheWVyIChkczogUXVlcmlhYmxlTGF5ZXIpOiBQcm9taXNlPERhdGFSZWNvcmRbXT4ge1xuICBjb25zdCBsYXllciA9IGRzLmxheWVyIGFzIHtcbiAgICBxdWVyeUZlYXR1cmVzPzogKHE6IG9iamVjdCkgPT4gUHJvbWlzZTx7IGZlYXR1cmVzPzogdW5rbm93bltdIH0+XG4gICAgcXVlcnk/OiAocTogb2JqZWN0KSA9PiBQcm9taXNlPHsgZmVhdHVyZXM/OiB1bmtub3duW10gfT5cbiAgfVxuICBpZiAoIWxheWVyIHx8IHR5cGVvZiBkcy5idWlsZFJlY29yZCAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIFtdXG5cbiAgY29uc3QgcSA9IHtcbiAgICB3aGVyZTogJzE9MScsXG4gICAgb3V0RmllbGRzOiBbJyonXSxcbiAgICByZXR1cm5HZW9tZXRyeTogZmFsc2UsXG4gICAgbnVtOiAyMDAwXG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9XG4gICAgICB0eXBlb2YgbGF5ZXIucXVlcnlGZWF0dXJlcyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IGF3YWl0IGxheWVyLnF1ZXJ5RmVhdHVyZXMocSlcbiAgICAgICAgOiB0eXBlb2YgbGF5ZXIucXVlcnkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICA/IGF3YWl0IGxheWVyLnF1ZXJ5KHEpXG4gICAgICAgICAgOiBudWxsXG4gICAgY29uc3QgZmVhdHVyZXMgPSByZXN1bHQ/LmZlYXR1cmVzID8/IFtdXG4gICAgcmV0dXJuIGZlYXR1cmVzLm1hcCgoZikgPT4gZHMuYnVpbGRSZWNvcmQhKGYpKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gW11cbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBydW5RdWVyeWFibGVNZXRob2RzIChcbiAgZHM6IFF1ZXJpYWJsZUxheWVyLFxuICBvdXRGaWVsZHM6IHN0cmluZ1tdLFxuICBkaXNhYmxlQ2xpZW50UXVlcnk6IGJvb2xlYW5cbik6IFByb21pc2U8RGF0YVJlY29yZFtdPiB7XG4gIGNvbnN0IHBhcmFtcyA9IGJ1aWxkUXVlcnlQYXJhbXMob3V0RmllbGRzLCBkaXNhYmxlQ2xpZW50UXVlcnkpXG5cbiAgaWYgKHR5cGVvZiBkcz8ubG9hZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZWNvcmRzID0gYXdhaXQgZHMubG9hZChwYXJhbXMsIHF1ZXJ5T3B0aW9ucylcbiAgICAgIGlmIChyZWNvcmRzPy5sZW5ndGggJiYgcmVjb3Jkc0FyZVJlYWRhYmxlKHJlY29yZHMpKSByZXR1cm4gcmVjb3Jkc1xuICAgICAgaWYgKHJlY29yZHM/Lmxlbmd0aCAmJiAhZGlzYWJsZUNsaWVudFF1ZXJ5KSByZXR1cm4gcmVjb3Jkc1xuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gdGVudGEgcHLDs3hpbW8gbcOpdG9kb1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgZHM/LmxvYWRBbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IGRzLmxvYWRBbGwocGFyYW1zLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgcXVlcnlPcHRpb25zKVxuICAgICAgaWYgKHJlY29yZHM/Lmxlbmd0aCAmJiByZWNvcmRzQXJlUmVhZGFibGUocmVjb3JkcykpIHJldHVybiByZWNvcmRzXG4gICAgICBpZiAocmVjb3Jkcz8ubGVuZ3RoICYmICFkaXNhYmxlQ2xpZW50UXVlcnkpIHJldHVybiByZWNvcmRzXG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyB0ZW50YSBxdWVyeSBhYmFpeG9cbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIGRzPy5xdWVyeSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkcy5xdWVyeShwYXJhbXMsIHF1ZXJ5T3B0aW9ucylcbiAgICAgIGNvbnN0IHJlY29yZHMgPSByZXN1bHQ/LnJlY29yZHMgPz8gW11cbiAgICAgIGlmIChyZWNvcmRzLmxlbmd0aCAmJiByZWNvcmRzQXJlUmVhZGFibGUocmVjb3JkcykpIHJldHVybiByZWNvcmRzXG4gICAgICBpZiAocmVjb3Jkcy5sZW5ndGggJiYgIWRpc2FibGVDbGllbnRRdWVyeSkgcmV0dXJuIHJlY29yZHNcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIHRlbnRhIEpTIEFQSVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHZpYUxheWVyID0gYXdhaXQgcXVlcnlWaWFKc2FwaUxheWVyKGRzKVxuICBpZiAodmlhTGF5ZXIubGVuZ3RoICYmIHJlY29yZHNBcmVSZWFkYWJsZSh2aWFMYXllcikpIHJldHVybiB2aWFMYXllclxuICBpZiAodmlhTGF5ZXIubGVuZ3RoICYmICFkaXNhYmxlQ2xpZW50UXVlcnkpIHJldHVybiB2aWFMYXllclxuXG4gIHJldHVybiBbXVxufVxuXG5hc3luYyBmdW5jdGlvbiBxdWVyeUFsbFJlY29yZHMgKFxuICBkczogUXVlcmlhYmxlTGF5ZXIsXG4gIG91dEZpZWxkczogc3RyaW5nW10gPSBbJyonXVxuKTogUHJvbWlzZTxEYXRhUmVjb3JkW10+IHtcbiAgbGV0IHJlY29yZHMgPSBhd2FpdCBydW5RdWVyeWFibGVNZXRob2RzKGRzLCBvdXRGaWVsZHMsIGZhbHNlKVxuICBpZiAocmVjb3Jkc0FyZVJlYWRhYmxlKHJlY29yZHMpKSByZXR1cm4gcmVjb3Jkc1xuXG4gIHJlY29yZHMgPSBhd2FpdCBydW5RdWVyeWFibGVNZXRob2RzKGRzLCBvdXRGaWVsZHMsIHRydWUpXG4gIGlmIChyZWNvcmRzQXJlUmVhZGFibGUocmVjb3JkcykpIHJldHVybiByZWNvcmRzXG5cbiAgcmV0dXJuIHJlY29yZHNcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGZXRjaExheWVyUmVjb3Jkc09wdGlvbnMge1xuICAvKiogSWdub3JhIGNhY2hlIGRvIG1hcGEgZSBmb3LDp2EgcXVlcnkvbG9hZEFsbCAow7p0aWwgbm8gRW50ZXJwcmlzZSkuICovXG4gIGZvcmNlUXVlcnk/OiBib29sZWFuXG4gIHllYXJGaWVsZEppbXU/OiBzdHJpbmdcbiAgcmVjb3J0ZUZpZWxkSmltdT86IHN0cmluZ1xuICBmaWVsZHM/OiBJTUZpZWxkU2NoZW1hW11cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZU91dEZpZWxkcyAoXG4gIHllYXJGaWVsZEppbXU/OiBzdHJpbmcsXG4gIHJlY29ydGVGaWVsZEppbXU/OiBzdHJpbmcsXG4gIGZpZWxkcz86IElNRmllbGRTY2hlbWFbXVxuKTogc3RyaW5nW10ge1xuICBpZiAoIWZpZWxkcz8ubGVuZ3RoIHx8ICF5ZWFyRmllbGRKaW11IHx8ICFyZWNvcnRlRmllbGRKaW11KSByZXR1cm4gWycqJ11cbiAgY29uc3Qga2V5cyA9IHJlc29sdmVBdHRyaWJ1dGVLZXlzKGZpZWxkcywgeWVhckZpZWxkSmltdSwgcmVjb3J0ZUZpZWxkSmltdSlcbiAgaWYgKCFrZXlzKSByZXR1cm4gWycqJ11cbiAgcmV0dXJuIFsnKicsIGtleXMueWVhcktleSwga2V5cy5yZWNvcnRlS2V5XVxufVxuXG4vKiogQ2FycmVnYSB0b2RvcyBvcyByZWdpc3Ryb3MgZGEgY2FtYWRhICh0YWJlbGEgYW5vIMOXIHJlY29ydGVzKS4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaExheWVyUmVjb3JkcyAoXG4gIGRhdGFTb3VyY2U6IHVua25vd24sXG4gIG9wdGlvbnM/OiBGZXRjaExheWVyUmVjb3Jkc09wdGlvbnNcbik6IFByb21pc2U8RGF0YVJlY29yZFtdPiB7XG4gIGNvbnN0IGRzID0gZGF0YVNvdXJjZSBhcyBRdWVyaWFibGVMYXllclxuICBjb25zdCBjYWNoZWQgPSBkcy5nZXRBbGxMb2FkZWRSZWNvcmRzPy4oKSA/PyBkcy5nZXRSZWNvcmRzPy4oKSA/PyBbXVxuICBjb25zdCBvdXRGaWVsZHMgPSByZXNvbHZlT3V0RmllbGRzKFxuICAgIG9wdGlvbnM/LnllYXJGaWVsZEppbXUsXG4gICAgb3B0aW9ucz8ucmVjb3J0ZUZpZWxkSmltdSxcbiAgICBvcHRpb25zPy5maWVsZHNcbiAgKVxuXG4gIGlmICghb3B0aW9ucz8uZm9yY2VRdWVyeSAmJiByZWNvcmRzQXJlUmVhZGFibGUoY2FjaGVkKSkge1xuICAgIHJldHVybiBjYWNoZWRcbiAgfVxuXG4gIGNvbnN0IHF1ZXJpZWQgPSBhd2FpdCBxdWVyeUFsbFJlY29yZHMoZHMsIG91dEZpZWxkcylcbiAgaWYgKHJlY29yZHNBcmVSZWFkYWJsZShxdWVyaWVkKSkgcmV0dXJuIHF1ZXJpZWRcbiAgaWYgKHF1ZXJpZWQubGVuZ3RoKSByZXR1cm4gcXVlcmllZFxuXG4gIGlmICghb3B0aW9ucz8uZm9yY2VRdWVyeSkgcmV0dXJuIGNhY2hlZFxuICByZXR1cm4gcXVlcmllZC5sZW5ndGggPyBxdWVyaWVkIDogY2FjaGVkXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVJlY29ydGVUb2tlbiAodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiB2YWx1ZVxuICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgLm5vcm1hbGl6ZSgnTkZEJylcbiAgICAucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZywgJycpXG4gICAgLnJlcGxhY2UoL1tcXHMtXSsvZywgJ18nKVxufVxuXG5mdW5jdGlvbiBpc1llYXJOYW1lZEZpZWxkIChmaWVsZDogSU1GaWVsZFNjaGVtYSk6IGJvb2xlYW4ge1xuICBjb25zdCB5ID1cbiAgICBwYXJzZVllYXIoZmllbGQuamltdU5hbWUpID8/XG4gICAgcGFyc2VZZWFyKGZpZWxkLm5hbWUpID8/XG4gICAgcGFyc2VZZWFyKGZpZWxkLmFsaWFzKVxuICByZXR1cm4geSAhPSBudWxsICYmIHkgPj0gMTk4NSAmJiB5IDw9IDIwMzVcbn1cblxuZnVuY3Rpb24gZmluZFJlY29ydGVOYW1lRmllbGQgKGZpZWxkczogSU1GaWVsZFNjaGVtYVtdKTogSU1GaWVsZFNjaGVtYSB8IG51bGwge1xuICBjb25zdCBwYXR0ZXJucyA9IFsncmVjb3J0ZScsICdyZWdpYW8nLCAncmVnacOjbycsICdiaW9tYScsICdub21lJywgJ25hbWUnLCAnbGFiZWwnXVxuICByZXR1cm4gKFxuICAgIGZpZWxkcy5maW5kKChmKSA9PiB7XG4gICAgICBjb25zdCBqID0gZi5qaW11TmFtZT8udG9Mb3dlckNhc2UoKSA/PyAnJ1xuICAgICAgY29uc3QgbiA9IGYubmFtZT8udG9Mb3dlckNhc2UoKSA/PyAnJ1xuICAgICAgcmV0dXJuIHBhdHRlcm5zLnNvbWUoKHApID0+IGouaW5jbHVkZXMocCkgfHwgbi5pbmNsdWRlcyhwKSlcbiAgICB9KSA/PyBudWxsXG4gIClcbn1cblxuLyoqIExheW91dCBhbHRlcm5hdGl2bzogY2FkYSByZWdpc3RybyA9IHJlY29ydGU7IGNvbHVuYXMgbnVtw6lyaWNhcyA9IGFub3MuICovXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRZZWFyU2VyaWVzRnJvbVJlY29ydGVSb3dzIChcbiAgcmVjb3JkczogUmVjb3JkTGlrZVtdLFxuICByZWNvcnRlRmllbGRKaW11OiBzdHJpbmcsXG4gIGZpZWxkczogSU1GaWVsZFNjaGVtYVtdXG4pOiBZZWFyVmFsdWVSb3dbXSB7XG4gIGNvbnN0IHllYXJGaWVsZHMgPSBmaWVsZHMuZmlsdGVyKGlzWWVhck5hbWVkRmllbGQpXG4gIGlmICgheWVhckZpZWxkcy5sZW5ndGgpIHJldHVybiBbXVxuXG4gIGNvbnN0IHRhcmdldCA9IG5vcm1hbGl6ZVJlY29ydGVUb2tlbihyZWNvcnRlRmllbGRKaW11KVxuICBjb25zdCBuYW1lRmllbGQgPSBmaW5kUmVjb3J0ZU5hbWVGaWVsZChmaWVsZHMpXG5cbiAgY29uc3Qgcm93ID1cbiAgICByZWNvcmRzLmZpbmQoKHJlYykgPT4ge1xuICAgICAgaWYgKG5hbWVGaWVsZCkge1xuICAgICAgICBjb25zdCBsYWJlbCA9IHJlYWRSZWNvcmRWYWx1ZShyZWMsIG5hbWVGaWVsZCwgbmFtZUZpZWxkLmppbXVOYW1lKVxuICAgICAgICBpZiAobGFiZWwgIT0gbnVsbCAmJiBub3JtYWxpemVSZWNvcnRlVG9rZW4oU3RyaW5nKGxhYmVsKSkgPT09IHRhcmdldCkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgZiBvZiBmaWVsZHMpIHtcbiAgICAgICAgaWYgKGlzWWVhck5hbWVkRmllbGQoZikgfHwgZi5qaW11TmFtZSA9PT0gcmVjb3J0ZUZpZWxkSmltdSkgY29udGludWVcbiAgICAgICAgY29uc3QgdiA9IHJlYWRSZWNvcmRWYWx1ZShyZWMsIGYsIGYuamltdU5hbWUpXG4gICAgICAgIGlmICh2ICE9IG51bGwgJiYgbm9ybWFsaXplUmVjb3J0ZVRva2VuKFN0cmluZyh2KSkgPT09IHRhcmdldCkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pID8/IG51bGxcblxuICBpZiAoIXJvdykgcmV0dXJuIFtdXG5cbiAgY29uc3Qgc2VyaWVzOiBZZWFyVmFsdWVSb3dbXSA9IFtdXG4gIGZvciAoY29uc3QgeWYgb2YgeWVhckZpZWxkcykge1xuICAgIGNvbnN0IHllYXIgPVxuICAgICAgcGFyc2VZZWFyKHlmLmppbXVOYW1lKSA/PyBwYXJzZVllYXIoeWYubmFtZSkgPz8gcGFyc2VZZWFyKHlmLmFsaWFzKVxuICAgIGNvbnN0IHZhbHVlID0gcGFyc2VOdW1lcmljVmFsdWUocmVhZFJlY29yZFZhbHVlKHJvdywgeWYsIHlmLmppbXVOYW1lKSlcbiAgICBpZiAoeWVhciA9PSBudWxsIHx8IHZhbHVlID09IG51bGwpIGNvbnRpbnVlXG4gICAgc2VyaWVzLnB1c2goeyB5ZWFyLCB2YWx1ZSB9KVxuICB9XG5cbiAgcmV0dXJuIHNlcmllcy5zb3J0KChhLCBiKSA9PiBhLnllYXIgLSBiLnllYXIpXG59XG5cbmZ1bmN0aW9uIGJ1aWxkWWVhclNlcmllc1llYXJSb3dzIChcbiAgcmVjb3JkczogUmVjb3JkTGlrZVtdLFxuICB5ZWFyRmllbGRKaW11OiBzdHJpbmcsXG4gIHJlY29ydGVGaWVsZEppbXU6IHN0cmluZyxcbiAgZmllbGRzPzogSU1GaWVsZFNjaGVtYVtdXG4pOiBZZWFyVmFsdWVSb3dbXSB7XG4gIGNvbnN0IHllYXJGaWVsZCA9IGZpZWxkcz8ubGVuZ3RoXG4gICAgPyBmaW5kRmllbGRCeUppbXVOYW1lKGZpZWxkcywgeWVhckZpZWxkSmltdSlcbiAgICA6IG51bGxcbiAgY29uc3QgcmVjb3J0ZUZpZWxkID0gZmllbGRzPy5sZW5ndGhcbiAgICA/IGZpbmRGaWVsZEJ5SmltdU5hbWUoZmllbGRzLCByZWNvcnRlRmllbGRKaW11KVxuICAgIDogbnVsbFxuICBjb25zdCBzZXJpZXM6IFllYXJWYWx1ZVJvd1tdID0gW11cblxuICBmb3IgKGNvbnN0IHJlYyBvZiByZWNvcmRzKSB7XG4gICAgY29uc3QgeWVhciA9IHBhcnNlWWVhcihcbiAgICAgIHJlYWRSZWNvcmRWYWx1ZShyZWMsIHllYXJGaWVsZCwgeWVhckZpZWxkSmltdSlcbiAgICApXG4gICAgY29uc3QgdmFsdWUgPSBwYXJzZU51bWVyaWNWYWx1ZShcbiAgICAgIHJlYWRSZWNvcmRWYWx1ZShyZWMsIHJlY29ydGVGaWVsZCwgcmVjb3J0ZUZpZWxkSmltdSlcbiAgICApXG4gICAgaWYgKHllYXIgPT0gbnVsbCB8fCB2YWx1ZSA9PSBudWxsKSBjb250aW51ZVxuXG4gICAgc2VyaWVzLnB1c2goeyB5ZWFyLCB2YWx1ZSB9KVxuICB9XG5cbiAgcmV0dXJuIHNlcmllcy5zb3J0KChhLCBiKSA9PiBhLnllYXIgLSBiLnllYXIpXG59XG5cbmZ1bmN0aW9uIGNvbGxlY3RSZWNvcmRBdHRyaWJ1dGVLZXlzIChyZWNvcmRzOiBSZWNvcmRMaWtlW10pOiBzdHJpbmdbXSB7XG4gIGNvbnN0IGtleXMgPSBuZXcgU2V0PHN0cmluZz4oKVxuICBmb3IgKGNvbnN0IHJlYyBvZiByZWNvcmRzLnNsaWNlKDAsIDEwMCkpIHtcbiAgICBPYmplY3Qua2V5cyhnZXRQbGFpbkF0dHJpYnV0ZXMocmVjKSkuZm9yRWFjaCgoaykgPT4ga2V5cy5hZGQoaykpXG4gIH1cbiAgcmV0dXJuIFsuLi5rZXlzXVxufVxuXG5mdW5jdGlvbiByZXNvbHZlS2V5c0Zyb21BdHRyaWJ1dGVOYW1lcyAoXG4gIGtleXM6IHN0cmluZ1tdLFxuICB5ZWFyRmllbGRKaW11OiBzdHJpbmcsXG4gIHJlY29ydGVGaWVsZEppbXU6IHN0cmluZ1xuKTogeyB5ZWFyS2V5OiBzdHJpbmc7IHJlY29ydGVLZXk6IHN0cmluZyB9IHwgbnVsbCB7XG4gIGNvbnN0IHJlY29ydGVLZXkgPSBrZXlzLmZpbmQoXG4gICAgKGspID0+XG4gICAgICBrLnRvTG93ZXJDYXNlKCkgPT09IHJlY29ydGVGaWVsZEppbXUudG9Mb3dlckNhc2UoKSB8fFxuICAgICAgbm9ybWFsaXplUmVjb3J0ZVRva2VuKGspID09PSBub3JtYWxpemVSZWNvcnRlVG9rZW4ocmVjb3J0ZUZpZWxkSmltdSlcbiAgKVxuICBsZXQgeWVhcktleSA9IGtleXMuZmluZCgoaykgPT4gay50b0xvd2VyQ2FzZSgpID09PSB5ZWFyRmllbGRKaW11LnRvTG93ZXJDYXNlKCkpXG4gIGlmICgheWVhcktleSkge1xuICAgIHllYXJLZXkgPSBrZXlzLmZpbmQoKGspID0+XG4gICAgICBZRUFSX05BTUVfUEFUVEVSTlMuc29tZShcbiAgICAgICAgKHApID0+IGsudG9Mb3dlckNhc2UoKSA9PT0gcCB8fCBrLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocClcbiAgICAgIClcbiAgICApXG4gIH1cbiAgaWYgKCF5ZWFyS2V5IHx8ICFyZWNvcnRlS2V5KSByZXR1cm4gbnVsbFxuICByZXR1cm4geyB5ZWFyS2V5LCByZWNvcnRlS2V5IH1cbn1cblxuLyoqIMOabHRpbW8gcmVjdXJzbzogaW5mZXJlIGNvbHVuYXMgcGVsb3Mgbm9tZXMgcmVhaXMgbm9zIGF0cmlidXRvcyByZXRvcm5hZG9zLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkWWVhclNlcmllc0luZmVycmVkIChcbiAgcmVjb3JkczogUmVjb3JkTGlrZVtdLFxuICB5ZWFyRmllbGRKaW11OiBzdHJpbmcsXG4gIHJlY29ydGVGaWVsZEppbXU6IHN0cmluZ1xuKTogWWVhclZhbHVlUm93W10ge1xuICBjb25zdCBrZXlzID0gY29sbGVjdFJlY29yZEF0dHJpYnV0ZUtleXMocmVjb3JkcylcbiAgY29uc3QgcmVzb2x2ZWQgPSByZXNvbHZlS2V5c0Zyb21BdHRyaWJ1dGVOYW1lcyhrZXlzLCB5ZWFyRmllbGRKaW11LCByZWNvcnRlRmllbGRKaW11KVxuICBpZiAoIXJlc29sdmVkKSByZXR1cm4gW11cblxuICBjb25zdCBzZXJpZXM6IFllYXJWYWx1ZVJvd1tdID0gW11cbiAgZm9yIChjb25zdCByZWMgb2YgcmVjb3Jkcykge1xuICAgIGNvbnN0IGF0dHJzID0gZ2V0UGxhaW5BdHRyaWJ1dGVzKHJlYylcbiAgICBjb25zdCB5ZWFyID0gcGFyc2VZZWFyKGF0dHJzW3Jlc29sdmVkLnllYXJLZXldKVxuICAgIGNvbnN0IHZhbHVlID0gcGFyc2VOdW1lcmljVmFsdWUoYXR0cnNbcmVzb2x2ZWQucmVjb3J0ZUtleV0pXG4gICAgaWYgKHllYXIgPT0gbnVsbCB8fCB2YWx1ZSA9PSBudWxsKSBjb250aW51ZVxuICAgIHNlcmllcy5wdXNoKHsgeWVhciwgdmFsdWUgfSlcbiAgfVxuICByZXR1cm4gc2VyaWVzLnNvcnQoKGEsIGIpID0+IGEueWVhciAtIGIueWVhcilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkWWVhclNlcmllcyAoXG4gIHJlY29yZHM6IFJlY29yZExpa2VbXSxcbiAgeWVhckZpZWxkSmltdTogc3RyaW5nLFxuICByZWNvcnRlRmllbGRKaW11OiBzdHJpbmcsXG4gIGZpZWxkcz86IElNRmllbGRTY2hlbWFbXVxuKTogWWVhclZhbHVlUm93W10ge1xuICBjb25zdCB5ZWFyUm93cyA9IGJ1aWxkWWVhclNlcmllc1llYXJSb3dzKFxuICAgIHJlY29yZHMsXG4gICAgeWVhckZpZWxkSmltdSxcbiAgICByZWNvcnRlRmllbGRKaW11LFxuICAgIGZpZWxkc1xuICApXG4gIGlmICh5ZWFyUm93cy5sZW5ndGggPiAwKSByZXR1cm4geWVhclJvd3NcblxuICBpZiAoZmllbGRzPy5sZW5ndGgpIHtcbiAgICBjb25zdCBhbHQgPSBidWlsZFllYXJTZXJpZXNGcm9tUmVjb3J0ZVJvd3MocmVjb3JkcywgcmVjb3J0ZUZpZWxkSmltdSwgZmllbGRzKVxuICAgIGlmIChhbHQubGVuZ3RoID4gMCkgcmV0dXJuIGFsdFxuICB9XG5cbiAgcmV0dXJuIGJ1aWxkWWVhclNlcmllc0luZmVycmVkKHJlY29yZHMsIHllYXJGaWVsZEppbXUsIHJlY29ydGVGaWVsZEppbXUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRZZWFyc1JhbmdlU3VtbWFyeSAoc2VyaWVzOiBZZWFyVmFsdWVSb3dbXSk6IHN0cmluZyB8IG51bGwge1xuICBpZiAoIXNlcmllcy5sZW5ndGgpIHJldHVybiBudWxsXG4gIGNvbnN0IG1pbiA9IHNlcmllc1swXS55ZWFyXG4gIGNvbnN0IG1heCA9IHNlcmllc1tzZXJpZXMubGVuZ3RoIC0gMV0ueWVhclxuICBjb25zdCBjb3VudCA9IHNlcmllcy5sZW5ndGhcbiAgaWYgKG1pbiA9PT0gbWF4KSByZXR1cm4gYCR7bWlufSAoJHtjb3VudH0gYW5vKWBcbiAgcmV0dXJuIGAke21pbn3igJMke21heH0gKCR7Y291bnR9IGFub3MpYFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNZZWFyT3V0T2ZUeXBpY2FsUmFuZ2UgKHllYXI6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4geWVhciA8IDIwMDEgfHwgeWVhciA+IDIwMjVcbn1cblxuLyoqIFZhcmlhw6fDo28gcGVyY2VudHVhbCBkbyB2YWxvciBpbmljaWFsIChhbm8gbWFpcyBhbnRpZ28pIHBhcmEgbyBmaW5hbCAoYW5vIG1haXMgcmVjZW50ZSkuICovXG5leHBvcnQgZnVuY3Rpb24gY2FsY1BlcmNlbnRWYXJpYXRpb24gKFxuICB2YWx1ZUluaWNpYWw6IG51bWJlcixcbiAgdmFsdWVGaW5hbDogbnVtYmVyXG4pOiBudW1iZXIgfCBudWxsIHtcbiAgaWYgKCFOdW1iZXIuaXNGaW5pdGUodmFsdWVJbmljaWFsKSB8fCAhTnVtYmVyLmlzRmluaXRlKHZhbHVlRmluYWwpKSByZXR1cm4gbnVsbFxuICBpZiAodmFsdWVJbmljaWFsID09PSAwKSByZXR1cm4gbnVsbFxuICByZXR1cm4gKCh2YWx1ZUZpbmFsIC0gdmFsdWVJbmljaWFsKSAvIHZhbHVlSW5pY2lhbCkgKiAxMDBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFBlcmNlbnRWYXJpYXRpb24gKHBjdDogbnVtYmVyKTogc3RyaW5nIHtcbiAgY29uc3Qgc2lnbiA9IHBjdCA+IDAgPyAnKycgOiAnJ1xuICByZXR1cm4gYCR7c2lnbn0ke3BjdC50b0xvY2FsZVN0cmluZygncHQtQlInLCB7XG4gICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMlxuICB9KX0lYFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWVGb3JZZWFyIChcbiAgc2VyaWVzOiBZZWFyVmFsdWVSb3dbXSxcbiAgeWVhcjogbnVtYmVyXG4pOiBudW1iZXIgfCBudWxsIHtcbiAgY29uc3Qgcm93ID0gc2VyaWVzLmZpbmQoKHIpID0+IHIueWVhciA9PT0geWVhcilcbiAgcmV0dXJuIHJvdyAhPSBudWxsID8gcm93LnZhbHVlIDogbnVsbFxufVxuXG4vKiogU29tYSBvcyB2YWxvcmVzIGRvcyBhbm9zIGluZm9ybWFkb3M7IHJldG9ybmEgbnVsbCBzZSBhbGd1bSBhbm8gbsOjbyB0aXZlciBkYWRvLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1bVZhbHVlc0ZvclllYXJzIChcbiAgc2VyaWVzOiBZZWFyVmFsdWVSb3dbXSxcbiAgeWVhcnM6IG51bWJlcltdXG4pOiBudW1iZXIgfCBudWxsIHtcbiAgaWYgKCF5ZWFycy5sZW5ndGgpIHJldHVybiBudWxsXG4gIGxldCBzdW0gPSAwXG4gIGZvciAoY29uc3QgeWVhciBvZiB5ZWFycykge1xuICAgIGNvbnN0IHZhbHVlID0gZ2V0VmFsdWVGb3JZZWFyKHNlcmllcywgeWVhcilcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBzdW0gKz0gdmFsdWVcbiAgfVxuICByZXR1cm4gc3VtXG59XG5cbi8qKiBBbm9zIGRpc3BvbsOtdmVpcyBwYXJhIG8gcGVyw61vZG8gaW5pY2lhbCAoYW50ZXMgZG8gcGVyw61vZG8gZmluYWwsIHNlIGhvdXZlcikuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0WWVhcnNBbGxvd2VkRm9ySW5pY2lhbCAoXG4gIGFsbFllYXJzOiBudW1iZXJbXSxcbiAgcGVyaW9kb0ZpbmFsOiBudW1iZXJbXVxuKTogbnVtYmVyW10ge1xuICBjb25zdCBibG9ja2VkID0gbmV3IFNldChwZXJpb2RvRmluYWwpXG4gIGNvbnN0IG1heEZpbmFsID0gcGVyaW9kb0ZpbmFsLmxlbmd0aCA/IE1hdGgubWluKC4uLnBlcmlvZG9GaW5hbCkgOiBJbmZpbml0eVxuICByZXR1cm4gYWxsWWVhcnMuZmlsdGVyKCh5KSA9PiAhYmxvY2tlZC5oYXMoeSkgJiYgeSA8IG1heEZpbmFsKVxufVxuXG4vKiogQW5vcyBkaXNwb27DrXZlaXMgcGFyYSBvIHBlcsOtb2RvIGZpbmFsIChkZXBvaXMgZG8gcGVyw61vZG8gaW5pY2lhbCwgc2UgaG91dmVyKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRZZWFyc0FsbG93ZWRGb3JGaW5hbCAoXG4gIGFsbFllYXJzOiBudW1iZXJbXSxcbiAgcGVyaW9kb0luaWNpYWw6IG51bWJlcltdXG4pOiBudW1iZXJbXSB7XG4gIGNvbnN0IGJsb2NrZWQgPSBuZXcgU2V0KHBlcmlvZG9JbmljaWFsKVxuICBjb25zdCBtaW5JbmljaWFsID0gcGVyaW9kb0luaWNpYWwubGVuZ3RoID8gTWF0aC5tYXgoLi4ucGVyaW9kb0luaWNpYWwpIDogLUluZmluaXR5XG4gIHJldHVybiBhbGxZZWFycy5maWx0ZXIoKHkpID0+ICFibG9ja2VkLmhhcyh5KSAmJiB5ID4gbWluSW5pY2lhbClcbn1cblxuLyoqIE1hcmNhL2Rlc21hcmNhIHVtIGFubyBtYW50ZW5kbyBhcGVuYXMgc2VxdcOqbmNpYXMgY29uc2VjdXRpdmFzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUNvbnNlY3V0aXZlWWVhciAoXG4gIHBlcmlvZDogbnVtYmVyW10sXG4gIHllYXI6IG51bWJlclxuKTogeyBuZXh0OiBudW1iZXJbXTsgcmVqZWN0ZWQ6IGJvb2xlYW4gfSB7XG4gIGlmIChwZXJpb2QuaW5jbHVkZXMoeWVhcikpIHtcbiAgICByZXR1cm4geyBuZXh0OiBwZXJpb2QuZmlsdGVyKCh5KSA9PiB5ICE9PSB5ZWFyKSwgcmVqZWN0ZWQ6IGZhbHNlIH1cbiAgfVxuICBjb25zdCBuZXh0ID0gWy4uLnBlcmlvZCwgeWVhcl0uc29ydCgoYSwgYikgPT4gYSAtIGIpXG4gIGlmICghYXJlQ29uc2VjdXRpdmVZZWFycyhuZXh0KSkge1xuICAgIHJldHVybiB7IG5leHQ6IHBlcmlvZCwgcmVqZWN0ZWQ6IHRydWUgfVxuICB9XG4gIHJldHVybiB7IG5leHQsIHJlamVjdGVkOiBmYWxzZSB9XG59XG5cbi8qKiBWZXJpZmljYSBzZSBvcyBhbm9zIGZvcm1hbSB1bWEgc2VxdcOqbmNpYSBjb25zZWN1dGl2YSAoZXguOiAyMDEwLCAyMDExLCAyMDEyKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcmVDb25zZWN1dGl2ZVllYXJzICh5ZWFyczogbnVtYmVyW10pOiBib29sZWFuIHtcbiAgaWYgKHllYXJzLmxlbmd0aCA8PSAxKSByZXR1cm4gdHJ1ZVxuICBjb25zdCBzb3J0ZWQgPSBbLi4ueWVhcnNdLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuICBmb3IgKGxldCBpID0gMTsgaSA8IHNvcnRlZC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzb3J0ZWRbaV0gLSBzb3J0ZWRbaSAtIDFdICE9PSAxKSByZXR1cm4gZmFsc2VcbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG4vKiogUsOzdHVsbyBjb21wYWN0byBwYXJhIHVtIG91IG1haXMgYW5vcyAoZXguOiBcIjIwMTBcIiBvdSBcIjIwMTDigJMyMDEyICgzIGFub3MpXCIpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFBlcmlvZExhYmVsICh5ZWFyczogbnVtYmVyW10pOiBzdHJpbmcge1xuICBjb25zdCBzb3J0ZWQgPSBbLi4ueWVhcnNdLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuICBpZiAoIXNvcnRlZC5sZW5ndGgpIHJldHVybiAnJ1xuICBpZiAoc29ydGVkLmxlbmd0aCA9PT0gMSkgcmV0dXJuIFN0cmluZyhzb3J0ZWRbMF0pXG4gIHJldHVybiBgJHtzb3J0ZWRbMF194oCTJHtzb3J0ZWRbc29ydGVkLmxlbmd0aCAtIDFdfSAoJHtzb3J0ZWQubGVuZ3RofSBhbm9zKWBcbn1cblxuLyoqIEludGVydmFsbyBkZSBhbm9zIHNlbSBjb250YWdlbSAoZXguOiBcIjIwMTBcIiBvdSBcIjIwMTDigJMyMDEyXCIpIOKAlCB1c28gZW0gcmVzdWx0YWRvcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQZXJpb2RSYW5nZUxhYmVsICh5ZWFyczogbnVtYmVyW10pOiBzdHJpbmcge1xuICBjb25zdCBzb3J0ZWQgPSBbLi4ueWVhcnNdLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuICBpZiAoIXNvcnRlZC5sZW5ndGgpIHJldHVybiAnJ1xuICBpZiAoc29ydGVkLmxlbmd0aCA9PT0gMSkgcmV0dXJuIFN0cmluZyhzb3J0ZWRbMF0pXG4gIHJldHVybiBgJHtzb3J0ZWRbMF194oCTJHtzb3J0ZWRbc29ydGVkLmxlbmd0aCAtIDFdfWBcbn1cblxuZXhwb3J0IGludGVyZmFjZSBWYXJpYXRpb25SZXN1bHQge1xuICBwY3Q6IG51bWJlclxuICB2YWx1ZUluaWNpYWw6IG51bWJlclxuICB2YWx1ZUZpbmFsOiBudW1iZXJcbiAgeWVhcnNJbmljaWFsOiBudW1iZXJbXVxuICB5ZWFyc0ZpbmFsOiBudW1iZXJbXVxufVxuXG5leHBvcnQgdHlwZSBQZXJpb2RWYXJpYXRpb25PdXRjb21lID1cbiAgfCB7IG9rOiB0cnVlOyBkYXRhOiBWYXJpYXRpb25SZXN1bHQgfVxuICB8IHsgb2s6IGZhbHNlOyBtZXNzYWdlOiBzdHJpbmcgfVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZVBlcmlvZFZhcmlhdGlvbiAoXG4gIHNlcmllczogWWVhclZhbHVlUm93W10sXG4gIHBlcmlvZG9JbmljaWFsOiBudW1iZXJbXSxcbiAgcGVyaW9kb0ZpbmFsOiBudW1iZXJbXVxuKTogUGVyaW9kVmFyaWF0aW9uT3V0Y29tZSB7XG4gIGNvbnN0IGluaSA9IFsuLi5wZXJpb2RvSW5pY2lhbF0uc29ydCgoYSwgYikgPT4gYSAtIGIpXG4gIGNvbnN0IGZpbiA9IFsuLi5wZXJpb2RvRmluYWxdLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuXG4gIGlmICghaW5pLmxlbmd0aCB8fCAhZmluLmxlbmd0aCkge1xuICAgIHJldHVybiB7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBtZXNzYWdlOiAnU2VsZWNpb25lIHBlbG8gbWVub3MgdW0gYW5vIGVtIGNhZGEgcGVyw61vZG8uJ1xuICAgIH1cbiAgfVxuXG4gIGlmIChpbmkubGVuZ3RoICE9PSBmaW4ubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6XG4gICAgICAgICdPIHBlcsOtb2RvIGluaWNpYWwgZSBvIHBlcsOtb2RvIGZpbmFsIGRldmVtIHRlciBhIG1lc21hIHF1YW50aWRhZGUgZGUgYW5vcy4nXG4gICAgfVxuICB9XG5cbiAgaWYgKCFhcmVDb25zZWN1dGl2ZVllYXJzKGluaSkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogJ09zIGFub3MgZG8gcGVyw61vZG8gaW5pY2lhbCBkZXZlbSBzZXIgY29uc2VjdXRpdm9zLidcbiAgICB9XG4gIH1cblxuICBpZiAoIWFyZUNvbnNlY3V0aXZlWWVhcnMoZmluKSkge1xuICAgIHJldHVybiB7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBtZXNzYWdlOiAnT3MgYW5vcyBkbyBwZXLDrW9kbyBmaW5hbCBkZXZlbSBzZXIgY29uc2VjdXRpdm9zLidcbiAgICB9XG4gIH1cblxuICBjb25zdCBpbmlTZXQgPSBuZXcgU2V0KGluaSlcbiAgaWYgKGZpbi5zb21lKCh5KSA9PiBpbmlTZXQuaGFzKHkpKSkge1xuICAgIHJldHVybiB7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBtZXNzYWdlOiAnVW0gYW5vIG7Do28gcG9kZSBwZXJ0ZW5jZXIgYW9zIGRvaXMgcGVyw61vZG9zIGFvIG1lc21vIHRlbXBvLidcbiAgICB9XG4gIH1cblxuICBjb25zdCBtYXhJbmljaWFsID0gaW5pW2luaS5sZW5ndGggLSAxXVxuICBjb25zdCBtaW5GaW5hbCA9IGZpblswXVxuICBpZiAobWF4SW5pY2lhbCA+PSBtaW5GaW5hbCkge1xuICAgIHJldHVybiB7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBtZXNzYWdlOiAnTyBwZXLDrW9kbyBmaW5hbCBkZXZlIHNlciBwb3N0ZXJpb3IgYW8gcGVyw61vZG8gaW5pY2lhbC4nXG4gICAgfVxuICB9XG5cbiAgY29uc3QgdmFsdWVJbmljaWFsID0gc3VtVmFsdWVzRm9yWWVhcnMoc2VyaWVzLCBpbmkpXG4gIGNvbnN0IHZhbHVlRmluYWwgPSBzdW1WYWx1ZXNGb3JZZWFycyhzZXJpZXMsIGZpbilcblxuICBpZiAodmFsdWVJbmljaWFsID09IG51bGwgfHwgdmFsdWVGaW5hbCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6XG4gICAgICAgICdVbSBvdSBtYWlzIGFub3Mgc2VsZWNpb25hZG9zIG7Do28gcG9zc3VlbSBkYWRvIHBhcmEgZXN0ZSByZWNvcnRlLidcbiAgICB9XG4gIH1cblxuICBjb25zdCBwY3QgPSBjYWxjUGVyY2VudFZhcmlhdGlvbih2YWx1ZUluaWNpYWwsIHZhbHVlRmluYWwpXG4gIGlmIChwY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiB7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBtZXNzYWdlOlxuICAgICAgICAnQSBzb21hIGRvIHBlcsOtb2RvIGluaWNpYWwgw6kgemVybzsgbsOjbyDDqSBwb3Nzw612ZWwgY2FsY3VsYXIgYSB2YXJpYcOnw6NvIHBlcmNlbnR1YWwuJ1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgb2s6IHRydWUsXG4gICAgZGF0YToge1xuICAgICAgcGN0LFxuICAgICAgdmFsdWVJbmljaWFsLFxuICAgICAgdmFsdWVGaW5hbCxcbiAgICAgIHllYXJzSW5pY2lhbDogaW5pLFxuICAgICAgeWVhcnNGaW5hbDogZmluXG4gICAgfVxuICB9XG59XG5cbi8qKiBDb21wYXJhw6fDo28gZW50cmUgZG9pcyBhbm9zIMO6bmljb3MgKGF0YWxobyBwYXJhIHBlcsOtb2RvcyBkZSB1bSBhbm8pLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVWYXJpYXRpb24gKFxuICBzZXJpZXM6IFllYXJWYWx1ZVJvd1tdLFxuICBhbm9JbmljaWFsOiBudW1iZXIsXG4gIGFub0ZpbmFsOiBudW1iZXJcbik6IFBlcmlvZFZhcmlhdGlvbk91dGNvbWUge1xuICByZXR1cm4gY29tcHV0ZVBlcmlvZFZhcmlhdGlvbihzZXJpZXMsIFthbm9JbmljaWFsXSwgW2Fub0ZpbmFsXSlcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX2RhdGFfc291cmNlX3NlbGVjdG9yX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfc2V0dGluZ19jb21wb25lbnRzX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiXG4vKiogQGpzeCBqc3ggKi9cbi8qKiBAanN4RnJhZyBSZWFjdC5GcmFnbWVudCAqL1xuaW1wb3J0IHtcbiAgUmVhY3QsIGpzeCwgY3NzLCBJbW11dGFibGUsXG4gIHR5cGUgSW1tdXRhYmxlQXJyYXksIHR5cGUgVXNlRGF0YVNvdXJjZSxcbiAgdHlwZSBJTURhdGFTb3VyY2VTY2hlbWEsXG4gIHR5cGUgRGF0YVNvdXJjZSxcbiAgQWxsRGF0YVNvdXJjZVR5cGVzLCBEYXRhU291cmNlQ29tcG9uZW50XG59IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IFNlbGVjdCwgT3B0aW9uIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCB7IFNldHRpbmdTZWN0aW9uLCBTZXR0aW5nUm93IH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBEYXRhU291cmNlU2VsZWN0b3IgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL2RhdGEtc291cmNlLXNlbGVjdG9yJ1xuaW1wb3J0IHsgdHlwZSBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCB7IGdldERhdGFTb3VyY2VTY2hlbWEgfSBmcm9tICcuLi91dGlscy9kYXRhLXNvdXJjZSdcbmltcG9ydCB7XG4gIGRldGVjdFllYXJGaWVsZCxcbiAgZm9ybWF0UmVjb3J0ZUxhYmVsLFxuICBnZXRSZWNvcnRlQ2FuZGlkYXRlRmllbGRzLFxuICBzY2hlbWFUb0ZpZWxkTGlzdFxufSBmcm9tICcuLi91dGlscy9wcm9kZXMtdGFibGUnXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGlkOiBzdHJpbmdcbiAgdXNlRGF0YVNvdXJjZXM/OiBJbW11dGFibGVBcnJheTxVc2VEYXRhU291cmNlPlxuICBvblNldHRpbmdDaGFuZ2U/OiAoc2V0dGluZzogYW55KSA9PiB2b2lkXG4gIGNvbmZpZz86IElNQ29uZmlnXG59XG5cbmNvbnN0IHN0eWxlcyA9IGNzc2BcbiAgJi53aWRnZXQtc2V0dGluZy1jb21wYXJhZG9yLXByb2RlcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAwO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICB9XG4gICYgKiB7XG4gICAgd3JpdGluZy1tb2RlOiBob3Jpem9udGFsLXRiICFpbXBvcnRhbnQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAgIHdvcmQtYnJlYWs6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB9XG4gIC5qaW11LXVpX3NldHRpbmctcm93IHtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgfVxuICAuamltdS11aV9zZXR0aW5nLXJvd19fbGFiZWwge1xuICAgIG1pbi13aWR0aDogMDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmppbXUtdWlfc2V0dGluZy1yb3dfX2NvbnRlbnQge1xuICAgIGZsZXg6IDEgMSAxMDAlO1xuICAgIG1pbi13aWR0aDogMDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cbiAgLnNldHRpbmctaGludCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjNmI2YjZiO1xuICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICB9XG5gXG5cbmNvbnN0IGVtcHR5Q29uZmlnID0gKCkgPT4gSW1tdXRhYmxlKHt9IGFzIElNQ29uZmlnKVxuXG5jb25zdCBTZXR0aW5nID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCB7IGlkLCB1c2VEYXRhU291cmNlcywgb25TZXR0aW5nQ2hhbmdlLCBjb25maWcgfSA9IHByb3BzXG4gIGNvbnN0IHVzZURzID0gdXNlRGF0YVNvdXJjZXM/LlswXVxuICBjb25zdCB5ZWFyRmllbGQgPSBjb25maWc/LnllYXJGaWVsZFxuICBjb25zdCByZWNvcnRlRmllbGQgPSBjb25maWc/LnJlY29ydGVGaWVsZFxuXG4gIGNvbnN0IFtmaWVsZExpc3QsIHNldEZpZWxkTGlzdF0gPSBSZWFjdC51c2VTdGF0ZShcbiAgICBbXSBhcyBSZXR1cm5UeXBlPHR5cGVvZiBzY2hlbWFUb0ZpZWxkTGlzdD5cbiAgKVxuXG4gIGNvbnN0IHJlY29ydGVPcHRpb25zID0gUmVhY3QudXNlTWVtbyhcbiAgICAoKSA9PiBnZXRSZWNvcnRlQ2FuZGlkYXRlRmllbGRzKGZpZWxkTGlzdCwgeWVhckZpZWxkKSxcbiAgICBbZmllbGRMaXN0LCB5ZWFyRmllbGRdXG4gIClcblxuICBjb25zdCBhcHBseVllYXJGaWVsZCA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChmaWVsZHM6IFJldHVyblR5cGU8dHlwZW9mIHNjaGVtYVRvRmllbGRMaXN0PiwgY3VycmVudFJlY29ydGU/OiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGRldGVjdGVkID0gZGV0ZWN0WWVhckZpZWxkKGZpZWxkcylcbiAgICAgIGlmICghZGV0ZWN0ZWQpIHJldHVyblxuXG4gICAgICBsZXQgbmV4dCA9IChjb25maWcgPz8gZW1wdHlDb25maWcoKSkuc2V0KCd5ZWFyRmllbGQnLCBkZXRlY3RlZClcbiAgICAgIGlmIChjdXJyZW50UmVjb3J0ZSA9PT0gZGV0ZWN0ZWQpIHtcbiAgICAgICAgbmV4dCA9IG5leHQud2l0aG91dCgncmVjb3J0ZUZpZWxkJylcbiAgICAgIH1cbiAgICAgIGlmIChkZXRlY3RlZCAhPT0geWVhckZpZWxkIHx8IGN1cnJlbnRSZWNvcnRlID09PSBkZXRlY3RlZCkge1xuICAgICAgICBvblNldHRpbmdDaGFuZ2U/Lih7IGlkLCBjb25maWc6IG5leHQgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIFtjb25maWcsIGlkLCBvblNldHRpbmdDaGFuZ2UsIHllYXJGaWVsZF1cbiAgKVxuXG4gIGNvbnN0IHByb2Nlc3NTY2hlbWEgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoc2NoZW1hOiBJTURhdGFTb3VyY2VTY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IGZpZWxkcyA9IHNjaGVtYVRvRmllbGRMaXN0KHNjaGVtYSlcbiAgICAgIHNldEZpZWxkTGlzdChmaWVsZHMpXG4gICAgICBhcHBseVllYXJGaWVsZChmaWVsZHMsIHJlY29ydGVGaWVsZClcbiAgICB9LFxuICAgIFthcHBseVllYXJGaWVsZCwgcmVjb3J0ZUZpZWxkXVxuICApXG5cbiAgY29uc3QgaGFuZGxlRGF0YVNvdXJjZUNyZWF0ZWQgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZHM6IERhdGFTb3VyY2UpID0+IHtcbiAgICAgIGNvbnN0IHNjaGVtYSA9IGdldERhdGFTb3VyY2VTY2hlbWEoZHMpXG4gICAgICBpZiAoc2NoZW1hKSBwcm9jZXNzU2NoZW1hKHNjaGVtYSlcbiAgICB9LFxuICAgIFtwcm9jZXNzU2NoZW1hXVxuICApXG5cbiAgY29uc3QgaGFuZGxlRGF0YVNvdXJjZUNoYW5nZSA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChuZXdVc2VEYXRhU291cmNlczogVXNlRGF0YVNvdXJjZVtdKSA9PiB7XG4gICAgICBvblNldHRpbmdDaGFuZ2U/Lih7XG4gICAgICAgIGlkLFxuICAgICAgICB1c2VEYXRhU291cmNlczogSW1tdXRhYmxlKG5ld1VzZURhdGFTb3VyY2VzKSxcbiAgICAgICAgY29uZmlnOiAoY29uZmlnID8/IGVtcHR5Q29uZmlnKCkpXG4gICAgICAgICAgLndpdGhvdXQoJ3llYXJGaWVsZCcpXG4gICAgICAgICAgLndpdGhvdXQoJ3JlY29ydGVGaWVsZCcpXG4gICAgICB9KVxuICAgICAgc2V0RmllbGRMaXN0KFtdKVxuICAgIH0sXG4gICAgW2NvbmZpZywgaWQsIG9uU2V0dGluZ0NoYW5nZV1cbiAgKVxuXG4gIGNvbnN0IGhhbmRsZVJlY29ydGVTZWxlY3QgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgYmFzZSA9IGNvbmZpZyA/PyBlbXB0eUNvbmZpZygpXG4gICAgICBvblNldHRpbmdDaGFuZ2U/Lih7XG4gICAgICAgIGlkLFxuICAgICAgICBjb25maWc6IHZhbHVlID8gYmFzZS5zZXQoJ3JlY29ydGVGaWVsZCcsIHZhbHVlKSA6IGJhc2Uud2l0aG91dCgncmVjb3J0ZUZpZWxkJylcbiAgICAgIH0pXG4gICAgfSxcbiAgICBbY29uZmlnLCBpZCwgb25TZXR0aW5nQ2hhbmdlXVxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1zZXR0aW5nLWNvbXBhcmFkb3ItcHJvZGVzIGppbXUtd2lkZ2V0LXNldHRpbmcgdy0xMDBcIiBjc3M9e3N0eWxlc30+XG4gICAgICB7dXNlRHMgJiYgKFxuICAgICAgICA8RGF0YVNvdXJjZUNvbXBvbmVudFxuICAgICAgICAgIHdpZGdldElkPXtpZH1cbiAgICAgICAgICB1c2VEYXRhU291cmNlPXt1c2VEc31cbiAgICAgICAgICBvbkRhdGFTb3VyY2VDcmVhdGVkPXtoYW5kbGVEYXRhU291cmNlQ3JlYXRlZH1cbiAgICAgICAgICBvbkRhdGFTb3VyY2VTY2hlbWFDaGFuZ2U9e3Byb2Nlc3NTY2hlbWF9XG4gICAgICAgIC8+XG4gICAgICApfVxuXG4gICAgICA8U2V0dGluZ1NlY3Rpb24gdGl0bGU9XCJEYWRvc1wiIGNsYXNzTmFtZT1cInctMTAwXCI+XG4gICAgICAgIDxTZXR0aW5nUm93IGxhYmVsPVwiQ2FtYWRhIFBST0RFUyAoRmVhdHVyZSBMYXllcilcIiBmbG93PVwid3JhcFwiIGxldmVsPXsxfT5cbiAgICAgICAgICA8RGF0YVNvdXJjZVNlbGVjdG9yXG4gICAgICAgICAgICB3aWRnZXRJZD17aWR9XG4gICAgICAgICAgICBpc011bHRpcGxlPXtmYWxzZX1cbiAgICAgICAgICAgIG11c3RVc2VEYXRhU291cmNlXG4gICAgICAgICAgICB0eXBlcz17SW1tdXRhYmxlKFtBbGxEYXRhU291cmNlVHlwZXMuRmVhdHVyZUxheWVyXSl9XG4gICAgICAgICAgICB1c2VEYXRhU291cmNlcz17dXNlRGF0YVNvdXJjZXN9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRGF0YVNvdXJjZUNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1NldHRpbmdSb3c+XG5cbiAgICAgICAge3VzZURzICYmIChcbiAgICAgICAgICA8U2V0dGluZ1JvdyBsYWJlbD1cIlJlY29ydGUgZ2VvZ3LDoWZpY28gKGNvbHVuYSlcIiBmbG93PVwid3JhcFwiIGxldmVsPXsxfT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDBcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtyZWNvcnRlRmllbGQgPz8gJyd9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY2lvbmUgbyByZWNvcnRl4oCmXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KF9ldnQsIHZhbHVlKSA9PiBoYW5kbGVSZWNvcnRlU2VsZWN0KFN0cmluZyh2YWx1ZSA/PyAnJykpfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtyZWNvcnRlT3B0aW9ucy5sZW5ndGggPT09IDB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiXCI+eycnfTwvT3B0aW9uPlxuICAgICAgICAgICAgICAgIHtyZWNvcnRlT3B0aW9ucy5tYXAoKGYpID0+IChcbiAgICAgICAgICAgICAgICAgIDxPcHRpb25cbiAgICAgICAgICAgICAgICAgICAga2V5PXtmLmppbXVOYW1lfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zi5qaW11TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtyZWNvcnRlRmllbGQgPT09IGYuamltdU5hbWV9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtmb3JtYXRSZWNvcnRlTGFiZWwoZil9XG4gICAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy1oaW50XCI+XG4gICAgICAgICAgICAgICAgRXNjb2xoYSB1bWEgY29sdW5hIGRhIHRhYmVsYSAoZXguOiBDZXJyYWRvLCBBbWF6w7RuaWEgbGVnYWwsIFBhbnRhbmFsKS5cbiAgICAgICAgICAgICAgICBPcyBhbm9zIGV4aWJpZG9zIG5hIHdpZGdldCBzw6NvIGRldGVjdGFkb3MgYXV0b21hdGljYW1lbnRlIGEgcGFydGlyIGRvc1xuICAgICAgICAgICAgICAgIGRhZG9zIGRpc3BvbsOtdmVpcyBwYXJhIG8gcmVjb3J0ZSBzZWxlY2lvbmFkby5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L1NldHRpbmdSb3c+XG4gICAgICAgICl9XG4gICAgICA8L1NldHRpbmdTZWN0aW9uPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=