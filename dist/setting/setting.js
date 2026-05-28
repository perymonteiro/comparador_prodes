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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9kaXN0L3NldHRpbmcvc2V0dGluZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlrQjtBQU9YLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxNQUF5QixFQUFXLEVBQUUsQ0FDdEUsTUFBTSxLQUFLLHVEQUFnQixDQUFDLE1BQU07SUFDbEMsTUFBTSxLQUFLLHVEQUFnQixDQUFDLFFBQVE7SUFDcEMsTUFBTSxLQUFLLHVEQUFnQixDQUFDLFFBQVE7QUFFL0IsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLEVBQXFCLEVBQXFCLEVBQUU7O0lBQzVFLElBQUksQ0FBQyxFQUFFO1FBQUUsT0FBTyxJQUFJO0lBQ3BCLE1BQU0sSUFBSSxHQUFHLFlBQUMsRUFBeUIsRUFBQyxpQkFBaUIsa0RBQUk7SUFDN0QsT0FBTyxJQUFJLGFBQUosSUFBSSxjQUFKLElBQUksR0FBSSxFQUFFO0FBQ25CLENBQUM7QUFFRCwwRkFBMEY7QUFDbkYsTUFBTSxzQkFBc0IsR0FBRyxDQUFDLEVBQXFCLEVBQXFCLEVBQUU7SUFDakYsSUFBSSxDQUFDLEVBQUU7UUFBRSxPQUFPLElBQUk7SUFDcEIsTUFBTSxDQUFDLEdBQUcsRUFJVDtJQUNELElBQ0UsT0FBTyxDQUFDLENBQUMsS0FBSyxLQUFLLFVBQVU7UUFDN0IsT0FBTyxDQUFDLENBQUMsSUFBSSxLQUFLLFVBQVU7UUFDNUIsT0FBTyxDQUFDLENBQUMsT0FBTyxLQUFLLFVBQVUsRUFDL0IsQ0FBQztRQUNELE9BQU8sRUFBRTtJQUNYLENBQUM7SUFDRCxPQUFPLGlCQUFpQixDQUFDLEVBQUUsQ0FBQztBQUM5QixDQUFDO0FBRU0sU0FBZSxzQkFBc0IsQ0FDMUMsRUFBYzs7UUFFZCxNQUFNLFFBQVEsR0FBRyxtQkFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDeEMsSUFBSSxTQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFR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RUFBRSxFQUFFLENBQUMsQ0FDekIsK0NBQUMsMkNBQU0sSUFDTCxHQUFHLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFDZixLQUFLLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFDakIsTUFBTSxFQUFFLFlBQVksS0FBSyxDQUFDLENBQUMsUUFBUSxJQUVsQyx1RUFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FDZixDQUNWLENBQUMsQ0FDSztvQkFDVCx3REFBSyxTQUFTLEVBQUMsY0FBYyxpTkFJdkIsQ0FDRixDQUNLLENBQ2QsQ0FDYyxDQUNiLENBQ1A7QUFDSCxDQUFDO0FBRUQsaUVBQWUsT0FBTztBQUVkLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2NvbXBhcmFkb3JfcHJvZGVzL3NyYy91dGlscy9kYXRhLXNvdXJjZS50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY29tcGFyYWRvcl9wcm9kZXMvc3JjL3V0aWxzL3Byb2Rlcy10YWJsZS50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9hZHZhbmNlZC9kYXRhLXNvdXJjZS1zZWxlY3RvclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2NvbXBhcmFkb3JfcHJvZGVzL3NyYy9zZXR0aW5nL3NldHRpbmcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIHR5cGUgRGF0YVNvdXJjZSxcbiAgdHlwZSBJTURhdGFTb3VyY2VTY2hlbWEsXG4gIERhdGFTb3VyY2VTdGF0dXNcbn0gZnJvbSAnamltdS1jb3JlJ1xuXG50eXBlIERhdGFTb3VyY2VXaXRoTWFpbiA9IERhdGFTb3VyY2UgJiB7XG4gIGdldE1haW5EYXRhU291cmNlPzogKCkgPT4gRGF0YVNvdXJjZVxuICBnZXRTY2hlbWE/OiAoKSA9PiBJTURhdGFTb3VyY2VTY2hlbWFcbn1cblxuZXhwb3J0IGNvbnN0IGlzUXVlcnlhYmxlU3RhdHVzID0gKHN0YXR1cz86IERhdGFTb3VyY2VTdGF0dXMpOiBib29sZWFuID0+XG4gIHN0YXR1cyA9PT0gRGF0YVNvdXJjZVN0YXR1cy5Mb2FkZWQgfHxcbiAgc3RhdHVzID09PSBEYXRhU291cmNlU3RhdHVzLlVubG9hZGVkIHx8XG4gIHN0YXR1cyA9PT0gRGF0YVNvdXJjZVN0YXR1cy5Ob3RSZWFkeVxuXG5leHBvcnQgY29uc3QgZ2V0TWFpbkRhdGFTb3VyY2UgPSAoZHM6IERhdGFTb3VyY2UgfCBudWxsKTogRGF0YVNvdXJjZSB8IG51bGwgPT4ge1xuICBpZiAoIWRzKSByZXR1cm4gbnVsbFxuICBjb25zdCBtYWluID0gKGRzIGFzIERhdGFTb3VyY2VXaXRoTWFpbikuZ2V0TWFpbkRhdGFTb3VyY2U/LigpXG4gIHJldHVybiBtYWluID8/IGRzXG59XG5cbi8qKiBVc2EgYSBpbnN0w6JuY2lhIGRhIGNhbWFkYSBzZWxlY2lvbmFkYSAoZXguOiBQbGFuaWxoYTEpIHF1YW5kbyBlbGEgasOhIMOpIGNvbnN1bHTDoXZlbC4gKi9cbmV4cG9ydCBjb25zdCBnZXRRdWVyeWFibGVEYXRhU291cmNlID0gKGRzOiBEYXRhU291cmNlIHwgbnVsbCk6IERhdGFTb3VyY2UgfCBudWxsID0+IHtcbiAgaWYgKCFkcykgcmV0dXJuIG51bGxcbiAgY29uc3QgcSA9IGRzIGFzIERhdGFTb3VyY2VXaXRoTWFpbiAmIHtcbiAgICBxdWVyeT86IChwOiBvYmplY3QpID0+IFByb21pc2U8dW5rbm93bj5cbiAgICBsb2FkPzogKHA6IG9iamVjdCkgPT4gUHJvbWlzZTx1bmtub3duPlxuICAgIGxvYWRBbGw/OiAocDogb2JqZWN0KSA9PiBQcm9taXNlPHVua25vd24+XG4gIH1cbiAgaWYgKFxuICAgIHR5cGVvZiBxLnF1ZXJ5ID09PSAnZnVuY3Rpb24nIHx8XG4gICAgdHlwZW9mIHEubG9hZCA9PT0gJ2Z1bmN0aW9uJyB8fFxuICAgIHR5cGVvZiBxLmxvYWRBbGwgPT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgcmV0dXJuIGRzXG4gIH1cbiAgcmV0dXJuIGdldE1haW5EYXRhU291cmNlKGRzKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZW5zdXJlRGF0YVNvdXJjZVNjaGVtYSAoXG4gIGRzOiBEYXRhU291cmNlXG4pOiBQcm9taXNlPElNRGF0YVNvdXJjZVNjaGVtYSB8IHVuZGVmaW5lZD4ge1xuICBjb25zdCBleGlzdGluZyA9IGdldERhdGFTb3VyY2VTY2hlbWEoZHMpXG4gIGlmIChleGlzdGluZz8uZmllbGRzICYmIE9iamVjdC5rZXlzKGV4aXN0aW5nLmZpZWxkcykubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBleGlzdGluZ1xuICB9XG4gIGNvbnN0IGZldGNoU2NoZW1hID0gKGRzIGFzIERhdGFTb3VyY2VXaXRoTWFpbiAmIHtcbiAgICBmZXRjaFNjaGVtYT86ICgpID0+IFByb21pc2U8SU1EYXRhU291cmNlU2NoZW1hPlxuICB9KS5mZXRjaFNjaGVtYVxuICBpZiAodHlwZW9mIGZldGNoU2NoZW1hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBhd2FpdCBmZXRjaFNjaGVtYS5jYWxsKGRzKVxuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuIGV4aXN0aW5nXG4gICAgfVxuICB9XG4gIHJldHVybiBleGlzdGluZ1xufVxuXG5leHBvcnQgY29uc3QgZ2V0RGF0YVNvdXJjZVNjaGVtYSA9IChcbiAgZHM6IERhdGFTb3VyY2Vcbik6IElNRGF0YVNvdXJjZVNjaGVtYSB8IHVuZGVmaW5lZCA9PlxuICAoZHMgYXMgRGF0YVNvdXJjZVdpdGhNYWluKS5nZXRTY2hlbWE/LigpXG4iLCJpbXBvcnQge1xuICB0eXBlIElNRmllbGRTY2hlbWEsXG4gIHR5cGUgSU1EYXRhU291cmNlU2NoZW1hLFxuICBKaW11RmllbGRUeXBlLFxuICBFc3JpRmllbGRUeXBlLFxuICBRdWVyeVNjb3BlLFxuICB0eXBlIERhdGFSZWNvcmRcbn0gZnJvbSAnamltdS1jb3JlJ1xuXG5leHBvcnQgaW50ZXJmYWNlIFllYXJWYWx1ZVJvdyB7XG4gIHllYXI6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmllbGRBdHRyaWJ1dGVLZXlzIHtcbiAgeWVhcktleTogc3RyaW5nXG4gIHJlY29ydGVLZXk6IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9ZRUFSX0ZJRUxEID0gJ2FubydcblxuY29uc3QgWUVBUl9OQU1FX1BBVFRFUk5TID0gWydhbm8nLCAneWVhcicsICd5cicsICdleGVyY2ljaW8nLCAnZXhlcmPDrWNpbyddXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5Q2VsbCAodmFsdWU6IHVua25vd24pOiBib29sZWFuIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiB0cnVlXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLnRyaW0oKSA9PT0gJycpIHJldHVybiB0cnVlXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIE51bWJlci5pc05hTih2YWx1ZSkpIHJldHVybiB0cnVlXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VOdW1lcmljVmFsdWUgKHZhbHVlOiB1bmtub3duKTogbnVtYmVyIHwgbnVsbCB7XG4gIGlmIChpc0VtcHR5Q2VsbCh2YWx1ZSkpIHJldHVybiBudWxsXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSkpIHJldHVybiB2YWx1ZVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IHMgPSB2YWx1ZS50cmltKClcbiAgICBpZiAoIXMpIHJldHVybiBudWxsXG4gICAgaWYgKHMuaW5jbHVkZXMoJywnKSkge1xuICAgICAgY29uc3Qgbm9ybWFsaXplZCA9IHMucmVwbGFjZSgvXFwuL2csICcnKS5yZXBsYWNlKCcsJywgJy4nKVxuICAgICAgY29uc3QgbiA9IE51bWJlcihub3JtYWxpemVkKVxuICAgICAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShuKSA/IG4gOiBudWxsXG4gICAgfVxuICAgIGNvbnN0IG4gPSBOdW1iZXIocylcbiAgICByZXR1cm4gTnVtYmVyLmlzRmluaXRlKG4pID8gbiA6IG51bGxcbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VZZWFyICh2YWx1ZTogdW5rbm93bik6IG51bWJlciB8IG51bGwge1xuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlICYmICFOdW1iZXIuaXNOYU4odmFsdWUuZ2V0VGltZSgpKSkge1xuICAgIHJldHVybiB2YWx1ZS5nZXRGdWxsWWVhcigpXG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgTnVtYmVyLmlzRmluaXRlKHZhbHVlKSkgcmV0dXJuIE1hdGgudHJ1bmModmFsdWUpXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgcyA9IHZhbHVlLnRyaW0oKVxuICAgIGlmICghcykgcmV0dXJuIG51bGxcbiAgICBjb25zdCBuID0gTnVtYmVyKHMpXG4gICAgaWYgKE51bWJlci5pc0Zpbml0ZShuKSkgcmV0dXJuIE1hdGgudHJ1bmMobilcbiAgICBjb25zdCBtID0gcy5tYXRjaCgvXFxiKDE5fDIwKVxcZHsyfVxcYi8pXG4gICAgaWYgKG0pIHJldHVybiBOdW1iZXIobVswXSlcbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2NoZW1hVG9GaWVsZExpc3QgKHNjaGVtYT86IElNRGF0YVNvdXJjZVNjaGVtYSB8IG51bGwpOiBJTUZpZWxkU2NoZW1hW10ge1xuICBpZiAoIXNjaGVtYT8uZmllbGRzKSByZXR1cm4gW11cbiAgcmV0dXJuIE9iamVjdC5rZXlzKHNjaGVtYS5maWVsZHMpLm1hcCgoa2V5KSA9PiBzY2hlbWEuZmllbGRzW2tleV0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc051bWVyaWNSZWNvcnRlRmllbGQgKGZpZWxkOiBJTUZpZWxkU2NoZW1hKTogYm9vbGVhbiB7XG4gIGlmIChmaWVsZC50eXBlID09PSBKaW11RmllbGRUeXBlLk51bWJlcikgcmV0dXJuIHRydWVcbiAgY29uc3QgZXNyaSA9IGZpZWxkLmVzcmlUeXBlXG4gIHJldHVybiAoXG4gICAgZXNyaSA9PT0gRXNyaUZpZWxkVHlwZS5Eb3VibGUgfHxcbiAgICBlc3JpID09PSBFc3JpRmllbGRUeXBlLlNpbmdsZSB8fFxuICAgIGVzcmkgPT09IEVzcmlGaWVsZFR5cGUuSW50ZWdlciB8fFxuICAgIGVzcmkgPT09IEVzcmlGaWVsZFR5cGUuU21hbGxJbnRlZ2VyXG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEF0dHJpYnV0ZUtleSAoZmllbGQ6IElNRmllbGRTY2hlbWEpOiBzdHJpbmcge1xuICByZXR1cm4gZmllbGQubmFtZSB8fCBmaWVsZC5qaW11TmFtZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGV0ZWN0WWVhckZpZWxkIChmaWVsZHM6IElNRmllbGRTY2hlbWFbXSk6IHN0cmluZyB8IG51bGwge1xuICBjb25zdCBleGFjdEFubyA9IGZpZWxkcy5maW5kKFxuICAgIChmKSA9PlxuICAgICAgZi5qaW11TmFtZT8udG9Mb3dlckNhc2UoKSA9PT0gJ2FubycgfHxcbiAgICAgIGYubmFtZT8udG9Mb3dlckNhc2UoKSA9PT0gJ2FubycgfHxcbiAgICAgIGYuYWxpYXM/LnRvTG93ZXJDYXNlKCkgPT09ICdhbm8nXG4gIClcbiAgaWYgKGV4YWN0QW5vKSByZXR1cm4gZXhhY3RBbm8uamltdU5hbWVcblxuICBjb25zdCBjYW5kaWRhdGVzID0gZmllbGRzLmZpbHRlcihcbiAgICAoZikgPT4gZi50eXBlID09PSBKaW11RmllbGRUeXBlLk51bWJlciB8fCBmLnR5cGUgPT09IEppbXVGaWVsZFR5cGUuU3RyaW5nXG4gIClcbiAgZm9yIChjb25zdCBwYXQgb2YgWUVBUl9OQU1FX1BBVFRFUk5TKSB7XG4gICAgY29uc3QgZm91bmQgPSBjYW5kaWRhdGVzLmZpbmQoXG4gICAgICAoZikgPT5cbiAgICAgICAgZi5qaW11TmFtZT8udG9Mb3dlckNhc2UoKSA9PT0gcGF0IHx8XG4gICAgICAgIGYubmFtZT8udG9Mb3dlckNhc2UoKSA9PT0gcGF0IHx8XG4gICAgICAgIGYuYWxpYXM/LnRvTG93ZXJDYXNlKCkgPT09IHBhdFxuICAgIClcbiAgICBpZiAoZm91bmQpIHJldHVybiBmb3VuZC5qaW11TmFtZVxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRSZWNvcnRlTGFiZWwgKGZpZWxkOiBJTUZpZWxkU2NoZW1hKTogc3RyaW5nIHtcbiAgcmV0dXJuIGZvcm1hdFJlY29ydGVMYWJlbEZyb21OYW1lKGZpZWxkLmppbXVOYW1lLCBmaWVsZC5hbGlhcylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFJlY29ydGVMYWJlbEZyb21OYW1lIChqaW11TmFtZTogc3RyaW5nLCBhbGlhcz86IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChhbGlhcz8udHJpbSgpKSByZXR1cm4gYWxpYXMudHJpbSgpXG4gIHJldHVybiBqaW11TmFtZVxuICAgIC5zcGxpdCgnXycpXG4gICAgLmZpbHRlcihCb29sZWFuKVxuICAgIC5tYXAoKHcpID0+IHcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3LnNsaWNlKDEpLnRvTG93ZXJDYXNlKCkpXG4gICAgLmpvaW4oJyAnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3lzdGVtSGlkZGVuRmllbGROYW1lcyAoZmllbGRzOiBJTUZpZWxkU2NoZW1hW10pOiBzdHJpbmdbXSB7XG4gIHJldHVybiBmaWVsZHNcbiAgICAuZmlsdGVyKChmKSA9PiB7XG4gICAgICBjb25zdCBlc3JpID0gZi5lc3JpVHlwZVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgZXNyaSA9PT0gRXNyaUZpZWxkVHlwZS5PSUQgfHxcbiAgICAgICAgZXNyaSA9PT0gRXNyaUZpZWxkVHlwZS5HZW9tZXRyeSB8fFxuICAgICAgICBlc3JpID09PSBFc3JpRmllbGRUeXBlLkdsb2JhbElEIHx8XG4gICAgICAgIGVzcmkgPT09IEVzcmlGaWVsZFR5cGUuR1VJRFxuICAgICAgKVxuICAgIH0pXG4gICAgLm1hcCgoZikgPT4gZi5qaW11TmFtZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlY29ydGVIaWRkZW5GaWVsZE5hbWVzIChcbiAgZmllbGRzOiBJTUZpZWxkU2NoZW1hW10sXG4gIHllYXJGaWVsZD86IHN0cmluZ1xuKTogc3RyaW5nW10ge1xuICBjb25zdCBoaWRkZW4gPSBnZXRTeXN0ZW1IaWRkZW5GaWVsZE5hbWVzKGZpZWxkcylcbiAgaWYgKHllYXJGaWVsZCAmJiAhaGlkZGVuLmluY2x1ZGVzKHllYXJGaWVsZCkpIHtcbiAgICBoaWRkZW4ucHVzaCh5ZWFyRmllbGQpXG4gIH1cbiAgcmV0dXJuIGhpZGRlblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVjb3J0ZUNhbmRpZGF0ZUZpZWxkcyAoXG4gIGZpZWxkczogSU1GaWVsZFNjaGVtYVtdLFxuICB5ZWFyRmllbGQ/OiBzdHJpbmdcbik6IElNRmllbGRTY2hlbWFbXSB7XG4gIGNvbnN0IGhpZGRlbiA9IG5ldyBTZXQoZ2V0UmVjb3J0ZUhpZGRlbkZpZWxkTmFtZXMoZmllbGRzLCB5ZWFyRmllbGQpKVxuICByZXR1cm4gZmllbGRzXG4gICAgLmZpbHRlcigoZikgPT4gaXNOdW1lcmljUmVjb3J0ZUZpZWxkKGYpICYmICFoaWRkZW4uaGFzKGYuamltdU5hbWUpKVxuICAgIC5zb3J0KChhLCBiKSA9PlxuICAgICAgZm9ybWF0UmVjb3J0ZUxhYmVsKGEpLmxvY2FsZUNvbXBhcmUoZm9ybWF0UmVjb3J0ZUxhYmVsKGIpLCAncHQtQlInKVxuICAgIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRGaWVsZEJ5SmltdU5hbWUgKFxuICBmaWVsZHM6IElNRmllbGRTY2hlbWFbXSxcbiAgamltdU5hbWU/OiBzdHJpbmdcbik6IElNRmllbGRTY2hlbWEgfCBudWxsIHtcbiAgaWYgKCFqaW11TmFtZSkgcmV0dXJuIG51bGxcbiAgY29uc3QgZXhhY3QgPSBmaWVsZHMuZmluZCgoZikgPT4gZi5qaW11TmFtZSA9PT0gamltdU5hbWUpXG4gIGlmIChleGFjdCkgcmV0dXJuIGV4YWN0XG4gIGNvbnN0IGxvd2VyID0gamltdU5hbWUudG9Mb3dlckNhc2UoKVxuICByZXR1cm4gKFxuICAgIGZpZWxkcy5maW5kKFxuICAgICAgKGYpID0+XG4gICAgICAgIGYuamltdU5hbWU/LnRvTG93ZXJDYXNlKCkgPT09IGxvd2VyIHx8XG4gICAgICAgIGYubmFtZT8udG9Mb3dlckNhc2UoKSA9PT0gbG93ZXIgfHxcbiAgICAgICAgZi5hbGlhcz8udG9Mb3dlckNhc2UoKSA9PT0gbG93ZXJcbiAgICApID8/IG51bGxcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUF0dHJpYnV0ZUtleXMgKFxuICBmaWVsZHM6IElNRmllbGRTY2hlbWFbXSxcbiAgeWVhckZpZWxkSmltdT86IHN0cmluZyxcbiAgcmVjb3J0ZUZpZWxkSmltdT86IHN0cmluZ1xuKTogRmllbGRBdHRyaWJ1dGVLZXlzIHwgbnVsbCB7XG4gIGlmICgheWVhckZpZWxkSmltdSB8fCAhcmVjb3J0ZUZpZWxkSmltdSkgcmV0dXJuIG51bGxcblxuICBjb25zdCB5ZWFyRmllbGQgPSBmaW5kRmllbGRCeUppbXVOYW1lKGZpZWxkcywgeWVhckZpZWxkSmltdSlcbiAgY29uc3QgcmVjb3J0ZUZpZWxkID0gZmluZEZpZWxkQnlKaW11TmFtZShmaWVsZHMsIHJlY29ydGVGaWVsZEppbXUpXG5cbiAgcmV0dXJuIHtcbiAgICB5ZWFyS2V5OiB5ZWFyRmllbGQgPyBnZXRBdHRyaWJ1dGVLZXkoeWVhckZpZWxkKSA6IHllYXJGaWVsZEppbXUsXG4gICAgcmVjb3J0ZUtleTogcmVjb3J0ZUZpZWxkID8gZ2V0QXR0cmlidXRlS2V5KHJlY29ydGVGaWVsZCkgOiByZWNvcnRlRmllbGRKaW11XG4gIH1cbn1cblxudHlwZSBSZWNvcmRMaWtlID1cbiAgfCBEYXRhUmVjb3JkXG4gIHwge1xuICAgICAgYXR0cmlidXRlcz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gICAgICBmZWF0dXJlPzogeyBhdHRyaWJ1dGVzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfVxuICAgICAgZ2V0RGF0YT86ICgpID0+IHtcbiAgICAgICAgYXR0cmlidXRlcz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gICAgICAgIGZlYXR1cmU/OiB7IGF0dHJpYnV0ZXM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB9XG4gICAgICB9XG4gICAgICBnZXRGaWVsZFZhbHVlPzogKGppbXVGaWVsZE5hbWU6IHN0cmluZykgPT4gdW5rbm93blxuICAgICAgZ2V0RGF0ZUZpZWxkVmFsdWU/OiAoamltdUZpZWxkTmFtZTogc3RyaW5nKSA9PiB1bmtub3duXG4gICAgICBnZXREYXRhQmVmb3JlTWFwcGluZz86ICgpID0+IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gICAgfVxuXG5mdW5jdGlvbiB0b1BsYWluT2JqZWN0ICh2YWx1ZTogdW5rbm93bik6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHtcbiAgaWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSByZXR1cm4ge31cbiAgY29uc3QgdiA9IHZhbHVlIGFzIHtcbiAgICB0b0pTPzogKCkgPT4gUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgICBhc011dGFibGU/OiAob3B0cz86IHsgZGVlcDogYm9vbGVhbiB9KSA9PiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICB9XG4gIGlmICh0eXBlb2Ygdi50b0pTID09PSAnZnVuY3Rpb24nKSByZXR1cm4gdi50b0pTKClcbiAgaWYgKHR5cGVvZiB2LmFzTXV0YWJsZSA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHYuYXNNdXRhYmxlKHsgZGVlcDogdHJ1ZSB9KVxuICByZXR1cm4gdmFsdWUgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbn1cblxuY29uc3QgR0VUX0RBVEFfTUVUQV9LRVlTID0gbmV3IFNldChbXG4gICdhdHRyaWJ1dGVzJyxcbiAgJ2ZlYXR1cmUnLFxuICAnZ2VvbWV0cnknLFxuICAnY2VudHJvaWQnLFxuICAnYWdncmVnYXRlR2VvbWV0cmllcycsXG4gICdzeW1ib2wnXG5dKVxuXG4vKiogRXh0cmFpIG8gZGljaW9uw6FyaW8gZGUgYXRyaWJ1dG9zIGRlIHVtIHJlZ2lzdHJvICh2w6FyaW9zIGZvcm1hdG9zIGRvIEppbXUvQXJjR0lTKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQbGFpbkF0dHJpYnV0ZXMgKHJlYzogUmVjb3JkTGlrZSk6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHtcbiAgY29uc3QgbWVyZ2VkOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9XG5cbiAgY29uc3QgbWVyZ2UgPSAoYXR0cnM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikgPT4ge1xuICAgIGlmICghYXR0cnMpIHJldHVyblxuICAgIE9iamVjdC5hc3NpZ24obWVyZ2VkLCB0b1BsYWluT2JqZWN0KGF0dHJzKSlcbiAgfVxuXG4gIGlmICgnZ2V0RGF0YScgaW4gcmVjICYmIHR5cGVvZiByZWMuZ2V0RGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IGRhdGEgPSByZWMuZ2V0RGF0YSgpXG4gICAgY29uc3QgcGxhaW4gPSB0b1BsYWluT2JqZWN0KGRhdGEpXG4gICAgbWVyZ2UocGxhaW4uYXR0cmlidXRlcyBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IHVuZGVmaW5lZClcbiAgICBtZXJnZShwbGFpbi5mZWF0dXJlPy5hdHRyaWJ1dGVzIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgdW5kZWZpbmVkKVxuICAgIC8vIEppbXUgRGF0YVJlY29yZDogZ2V0RGF0YSgpIGNvc3R1bWEgc2VyIG1hcGEgcGxhbm8geyBqaW11RmllbGROYW1lOiB2YWxvciB9XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocGxhaW4pKSB7XG4gICAgICBpZiAoR0VUX0RBVEFfTUVUQV9LRVlTLmhhcyhrZXkpKSBjb250aW51ZVxuICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIG1lcmdlZFtrZXldID0gdmFsdWVcbiAgICB9XG4gIH1cblxuICBpZiAoJ2ZlYXR1cmUnIGluIHJlYyAmJiByZWMuZmVhdHVyZT8uYXR0cmlidXRlcykge1xuICAgIG1lcmdlKHJlYy5mZWF0dXJlLmF0dHJpYnV0ZXMpXG4gIH1cblxuICBpZiAoJ2F0dHJpYnV0ZXMnIGluIHJlYyAmJiByZWMuYXR0cmlidXRlcykge1xuICAgIG1lcmdlKHJlYy5hdHRyaWJ1dGVzKVxuICB9XG5cbiAgaWYgKCdnZXREYXRhQmVmb3JlTWFwcGluZycgaW4gcmVjICYmIHR5cGVvZiByZWMuZ2V0RGF0YUJlZm9yZU1hcHBpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICBtZXJnZShyZWMuZ2V0RGF0YUJlZm9yZU1hcHBpbmcoKSlcbiAgfVxuXG4gIHJldHVybiBtZXJnZWRcbn1cblxuZnVuY3Rpb24gYXR0cmlidXRlSGFzVXNhYmxlVmFsdWUgKHZhbHVlOiB1bmtub3duKTogYm9vbGVhbiB7XG4gIGlmIChpc0VtcHR5Q2VsbCh2YWx1ZSkpIHJldHVybiBmYWxzZVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JykgcmV0dXJuIGZhbHNlXG4gIHJldHVybiB0cnVlXG59XG5cbi8qKiBWZXJpZmljYSBzZSBvIHJlZ2lzdHJvIGV4cMO1ZSBhdHJpYnV0b3Mgb3UgZ2V0RmllbGRWYWx1ZSBjb20gZGFkb3MgcmVhaXMgKG7Do28gc8OzIG3DqXRvZG8gdmF6aW8pLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlY29yZEhhc1JlYWRhYmxlRGF0YSAocmVjOiBSZWNvcmRMaWtlKTogYm9vbGVhbiB7XG4gIGNvbnN0IGF0dHJzID0gZ2V0UGxhaW5BdHRyaWJ1dGVzKHJlYylcbiAgY29uc3QgdXNhYmxlS2V5cyA9IE9iamVjdC5rZXlzKGF0dHJzKS5maWx0ZXIoKGtleSkgPT4ge1xuICAgIGlmICgvXihvYmplY3RpZHxnbG9iYWxpZHxzaGFwZXxnZW9tZXRyeSkkL2kudGVzdChrZXkpKSByZXR1cm4gZmFsc2VcbiAgICByZXR1cm4gYXR0cmlidXRlSGFzVXNhYmxlVmFsdWUoYXR0cnNba2V5XSlcbiAgfSlcbiAgaWYgKHVzYWJsZUtleXMubGVuZ3RoID4gMCkgcmV0dXJuIHRydWVcblxuICBpZiAoJ2dldEZpZWxkVmFsdWUnIGluIHJlYyAmJiB0eXBlb2YgcmVjLmdldEZpZWxkVmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCBwcm9iZXMgPSBbXG4gICAgICAnYW5vJyxcbiAgICAgICd5ZWFyJyxcbiAgICAgICdBTk8nLFxuICAgICAgJ1llYXInLFxuICAgICAgJ2V4ZXJjaWNpbycsXG4gICAgICAnRXhlcmNpY2lvJ1xuICAgIF1cbiAgICBmb3IgKGNvbnN0IG5hbWUgb2YgcHJvYmVzKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB2ID0gcmVjLmdldEZpZWxkVmFsdWUhKG5hbWUpXG4gICAgICAgIGlmIChhdHRyaWJ1dGVIYXNVc2FibGVWYWx1ZSh2KSkgcmV0dXJuIHRydWVcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAvLyB0ZW50YSBwcsOzeGltb1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG4vKiogTMOqIHZhbG9yIHBlbG8gQVBJIGRvIEppbXUgKGBnZXRGaWVsZFZhbHVlYCkgZSwgZW0gc2VndWlkYSwgcGVsb3MgYXRyaWJ1dG9zIGJydXRvcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWFkUmVjb3JkVmFsdWUgKFxuICByZWM6IFJlY29yZExpa2UsXG4gIGZpZWxkPzogSU1GaWVsZFNjaGVtYSB8IG51bGwsXG4gIGZhbGxiYWNrSmltdU5hbWU/OiBzdHJpbmdcbik6IHVua25vd24ge1xuICBjb25zdCBuYW1lczogc3RyaW5nW10gPSBbXVxuICBpZiAoZmllbGQ/LmppbXVOYW1lKSBuYW1lcy5wdXNoKGZpZWxkLmppbXVOYW1lKVxuICBpZiAoZmFsbGJhY2tKaW11TmFtZSkgbmFtZXMucHVzaChmYWxsYmFja0ppbXVOYW1lKVxuICBpZiAoZmllbGQ/Lm5hbWUpIG5hbWVzLnB1c2goZmllbGQubmFtZSlcbiAgaWYgKGZpZWxkPy5hbGlhcykgbmFtZXMucHVzaChmaWVsZC5hbGlhcylcbiAgaWYgKGZpZWxkKSBuYW1lcy5wdXNoKGdldEF0dHJpYnV0ZUtleShmaWVsZCkpXG5cbiAgY29uc3QgdW5pcXVlTmFtZXMgPSBbLi4ubmV3IFNldChuYW1lcy5maWx0ZXIoQm9vbGVhbikpXVxuXG4gIGlmICgnZ2V0RmllbGRWYWx1ZScgaW4gcmVjICYmIHR5cGVvZiByZWMuZ2V0RmllbGRWYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvciAoY29uc3QgbmFtZSBvZiB1bmlxdWVOYW1lcykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdiA9IHJlYy5nZXRGaWVsZFZhbHVlIShuYW1lKVxuICAgICAgICBpZiAodiAhPT0gdW5kZWZpbmVkKSByZXR1cm4gdlxuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIHRlbnRhIHByw7N4aW1vIG5vbWVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoXG4gICAgZmllbGQ/LmppbXVOYW1lICYmXG4gICAgJ2dldERhdGVGaWVsZFZhbHVlJyBpbiByZWMgJiZcbiAgICB0eXBlb2YgcmVjLmdldERhdGVGaWVsZFZhbHVlID09PSAnZnVuY3Rpb24nXG4gICkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB2ID0gcmVjLmdldERhdGVGaWVsZFZhbHVlIShmaWVsZC5qaW11TmFtZSlcbiAgICAgIGlmICh2ICE9PSB1bmRlZmluZWQpIHJldHVybiB2XG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyBpZ25vcmFcbiAgICB9XG4gIH1cblxuICBjb25zdCBhdHRycyA9IGdldFBsYWluQXR0cmlidXRlcyhyZWMpXG4gIGNvbnN0IGZyb21NYXBwZWQgPSByZWFkQXR0cmlidXRlRmxleGlibGUoYXR0cnMsIGZpZWxkLCBmYWxsYmFja0ppbXVOYW1lKVxuICBpZiAoZnJvbU1hcHBlZCAhPT0gdW5kZWZpbmVkKSByZXR1cm4gZnJvbU1hcHBlZFxuXG4gIGlmICgnZ2V0RGF0YUJlZm9yZU1hcHBpbmcnIGluIHJlYyAmJiB0eXBlb2YgcmVjLmdldERhdGFCZWZvcmVNYXBwaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3QgcmF3ID0gdG9QbGFpbk9iamVjdChyZWMuZ2V0RGF0YUJlZm9yZU1hcHBpbmcoKSlcbiAgICByZXR1cm4gcmVhZEF0dHJpYnV0ZUZsZXhpYmxlKHJhdywgZmllbGQsIGZhbGxiYWNrSmltdU5hbWUpXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIHJlYWRBdHRyaWJ1dGUgKFxuICBhdHRyczogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXG4gIHByaW1hcnlLZXk6IHN0cmluZyxcbiAgZmFsbGJhY2tLZXk/OiBzdHJpbmdcbik6IHVua25vd24ge1xuICBpZiAocHJpbWFyeUtleSBpbiBhdHRycykgcmV0dXJuIGF0dHJzW3ByaW1hcnlLZXldXG4gIGlmIChmYWxsYmFja0tleSAmJiBmYWxsYmFja0tleSAhPT0gcHJpbWFyeUtleSAmJiBmYWxsYmFja0tleSBpbiBhdHRycykge1xuICAgIHJldHVybiBhdHRyc1tmYWxsYmFja0tleV1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbi8qKiBUZW50YSBqaW11TmFtZSwgbmFtZSwgYWxpYXMgZSBjb3JyZXNwb25kw6puY2lhIHNlbSBkaWZlcmVuY2lhciBtYWnDunNjdWxhcy9taW7DunNjdWxhcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWFkQXR0cmlidXRlRmxleGlibGUgKFxuICBhdHRyczogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXG4gIGZpZWxkPzogSU1GaWVsZFNjaGVtYSB8IG51bGwsXG4gIGZhbGxiYWNrSmltdU5hbWU/OiBzdHJpbmdcbik6IHVua25vd24ge1xuICBjb25zdCBjYW5kaWRhdGVzID0gbmV3IFNldDxzdHJpbmc+KClcbiAgaWYgKGZpZWxkKSB7XG4gICAgaWYgKGZpZWxkLmppbXVOYW1lKSBjYW5kaWRhdGVzLmFkZChmaWVsZC5qaW11TmFtZSlcbiAgICBpZiAoZmllbGQubmFtZSkgY2FuZGlkYXRlcy5hZGQoZmllbGQubmFtZSlcbiAgICBpZiAoZmllbGQuYWxpYXMpIGNhbmRpZGF0ZXMuYWRkKGZpZWxkLmFsaWFzKVxuICAgIGNhbmRpZGF0ZXMuYWRkKGdldEF0dHJpYnV0ZUtleShmaWVsZCkpXG4gIH1cbiAgaWYgKGZhbGxiYWNrSmltdU5hbWUpIGNhbmRpZGF0ZXMuYWRkKGZhbGxiYWNrSmltdU5hbWUpXG5cbiAgZm9yIChjb25zdCBrZXkgb2YgY2FuZGlkYXRlcykge1xuICAgIGNvbnN0IHYgPSByZWFkQXR0cmlidXRlKGF0dHJzLCBrZXkpXG4gICAgaWYgKHYgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHZcbiAgfVxuXG4gIGNvbnN0IGF0dHJLZXlzID0gT2JqZWN0LmtleXMoYXR0cnMpXG4gIGZvciAoY29uc3Qga2V5IG9mIGNhbmRpZGF0ZXMpIHtcbiAgICBjb25zdCBmb3VuZCA9IGF0dHJLZXlzLmZpbmQoKGspID0+IGsudG9Mb3dlckNhc2UoKSA9PT0ga2V5LnRvTG93ZXJDYXNlKCkpXG4gICAgaWYgKGZvdW5kICE9IG51bGwpIHJldHVybiBhdHRyc1tmb3VuZF1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbnR5cGUgUXVlcmlhYmxlTGF5ZXIgPSB7XG4gIHF1ZXJ5PzogKHE6IG9iamVjdCwgb3B0aW9ucz86IHsgc2NvcGU/OiBRdWVyeVNjb3BlIH0pID0+IFByb21pc2U8eyByZWNvcmRzPzogRGF0YVJlY29yZFtdIH0+XG4gIGxvYWQ/OiAocTogb2JqZWN0LCBvcHRpb25zPzogeyBzY29wZT86IFF1ZXJ5U2NvcGUgfSkgPT4gUHJvbWlzZTxEYXRhUmVjb3JkW10+XG4gIGxvYWRBbGw/OiAoXG4gICAgcTogb2JqZWN0LFxuICAgIHNpZ25hbD86IEFib3J0U2lnbmFsLFxuICAgIHByb2dyZXNzQ2FsbGJhY2s/OiB1bmtub3duLFxuICAgIG9wdGlvbnM/OiB7IHNjb3BlPzogUXVlcnlTY29wZSB9XG4gICkgPT4gUHJvbWlzZTxEYXRhUmVjb3JkW10+XG4gIGdldEFsbExvYWRlZFJlY29yZHM/OiAoKSA9PiBEYXRhUmVjb3JkW11cbiAgZ2V0UmVjb3Jkcz86ICgpID0+IERhdGFSZWNvcmRbXVxuICBsYXllcj86IHsgcXVlcnlGZWF0dXJlcz86IChxOiBvYmplY3QpID0+IFByb21pc2U8eyBmZWF0dXJlcz86IHVua25vd25bXSB9PiB9XG4gIGJ1aWxkUmVjb3JkPzogKGZlYXR1cmU6IHVua25vd24pID0+IERhdGFSZWNvcmRcbn1cblxuY29uc3QgcXVlcnlPcHRpb25zID0geyBzY29wZTogUXVlcnlTY29wZS5JbkFsbERhdGEgfVxuXG5jb25zdCBidWlsZFF1ZXJ5UGFyYW1zID0gKFxuICBvdXRGaWVsZHM6IHN0cmluZ1tdID0gWycqJ10sXG4gIGRpc2FibGVDbGllbnRRdWVyeSA9IGZhbHNlXG4pID0+ICh7XG4gIHdoZXJlOiAnMT0xJyxcbiAgb3V0RmllbGRzLFxuICByZXR1cm5HZW9tZXRyeTogZmFsc2UsXG4gIHBhZ2VTaXplOiAyMDAwLFxuICAuLi4oZGlzYWJsZUNsaWVudFF1ZXJ5ID8geyBkaXNhYmxlQ2xpZW50UXVlcnk6IHRydWUgfSA6IHt9KVxufSlcblxuZnVuY3Rpb24gcmVjb3Jkc0FyZVJlYWRhYmxlIChyZWNvcmRzOiBEYXRhUmVjb3JkW10pOiBib29sZWFuIHtcbiAgcmV0dXJuIHJlY29yZHMubGVuZ3RoID4gMCAmJiByZWNvcmRzLnNvbWUocmVjb3JkSGFzUmVhZGFibGVEYXRhKVxufVxuXG5hc3luYyBmdW5jdGlvbiBxdWVyeVZpYUpzYXBpTGF5ZXIgKGRzOiBRdWVyaWFibGVMYXllcik6IFByb21pc2U8RGF0YVJlY29yZFtdPiB7XG4gIGNvbnN0IGxheWVyID0gZHMubGF5ZXIgYXMge1xuICAgIHF1ZXJ5RmVhdHVyZXM/OiAocTogb2JqZWN0KSA9PiBQcm9taXNlPHsgZmVhdHVyZXM/OiB1bmtub3duW10gfT5cbiAgICBxdWVyeT86IChxOiBvYmplY3QpID0+IFByb21pc2U8eyBmZWF0dXJlcz86IHVua25vd25bXSB9PlxuICB9XG4gIGlmICghbGF5ZXIgfHwgdHlwZW9mIGRzLmJ1aWxkUmVjb3JkICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gW11cblxuICBjb25zdCBxID0ge1xuICAgIHdoZXJlOiAnMT0xJyxcbiAgICBvdXRGaWVsZHM6IFsnKiddLFxuICAgIHJldHVybkdlb21ldHJ5OiBmYWxzZSxcbiAgICBudW06IDIwMDBcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID1cbiAgICAgIHR5cGVvZiBsYXllci5xdWVyeUZlYXR1cmVzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gYXdhaXQgbGF5ZXIucXVlcnlGZWF0dXJlcyhxKVxuICAgICAgICA6IHR5cGVvZiBsYXllci5xdWVyeSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgID8gYXdhaXQgbGF5ZXIucXVlcnkocSlcbiAgICAgICAgICA6IG51bGxcbiAgICBjb25zdCBmZWF0dXJlcyA9IHJlc3VsdD8uZmVhdHVyZXMgPz8gW11cbiAgICByZXR1cm4gZmVhdHVyZXMubWFwKChmKSA9PiBkcy5idWlsZFJlY29yZCEoZikpXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBbXVxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJ1blF1ZXJ5YWJsZU1ldGhvZHMgKFxuICBkczogUXVlcmlhYmxlTGF5ZXIsXG4gIG91dEZpZWxkczogc3RyaW5nW10sXG4gIGRpc2FibGVDbGllbnRRdWVyeTogYm9vbGVhblxuKTogUHJvbWlzZTxEYXRhUmVjb3JkW10+IHtcbiAgY29uc3QgcGFyYW1zID0gYnVpbGRRdWVyeVBhcmFtcyhvdXRGaWVsZHMsIGRpc2FibGVDbGllbnRRdWVyeSlcblxuICBpZiAodHlwZW9mIGRzPy5sb2FkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBkcy5sb2FkKHBhcmFtcywgcXVlcnlPcHRpb25zKVxuICAgICAgaWYgKHJlY29yZHM/Lmxlbmd0aCAmJiByZWNvcmRzQXJlUmVhZGFibGUocmVjb3JkcykpIHJldHVybiByZWNvcmRzXG4gICAgICBpZiAocmVjb3Jkcz8ubGVuZ3RoICYmICFkaXNhYmxlQ2xpZW50UXVlcnkpIHJldHVybiByZWNvcmRzXG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyB0ZW50YSBwcsOzeGltbyBtw6l0b2RvXG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiBkcz8ubG9hZEFsbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZWNvcmRzID0gYXdhaXQgZHMubG9hZEFsbChwYXJhbXMsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBxdWVyeU9wdGlvbnMpXG4gICAgICBpZiAocmVjb3Jkcz8ubGVuZ3RoICYmIHJlY29yZHNBcmVSZWFkYWJsZShyZWNvcmRzKSkgcmV0dXJuIHJlY29yZHNcbiAgICAgIGlmIChyZWNvcmRzPy5sZW5ndGggJiYgIWRpc2FibGVDbGllbnRRdWVyeSkgcmV0dXJuIHJlY29yZHNcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIHRlbnRhIHF1ZXJ5IGFiYWl4b1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgZHM/LnF1ZXJ5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRzLnF1ZXJ5KHBhcmFtcywgcXVlcnlPcHRpb25zKVxuICAgICAgY29uc3QgcmVjb3JkcyA9IHJlc3VsdD8ucmVjb3JkcyA/PyBbXVxuICAgICAgaWYgKHJlY29yZHMubGVuZ3RoICYmIHJlY29yZHNBcmVSZWFkYWJsZShyZWNvcmRzKSkgcmV0dXJuIHJlY29yZHNcbiAgICAgIGlmIChyZWNvcmRzLmxlbmd0aCAmJiAhZGlzYWJsZUNsaWVudFF1ZXJ5KSByZXR1cm4gcmVjb3Jkc1xuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gdGVudGEgSlMgQVBJXG4gICAgfVxuICB9XG5cbiAgY29uc3QgdmlhTGF5ZXIgPSBhd2FpdCBxdWVyeVZpYUpzYXBpTGF5ZXIoZHMpXG4gIGlmICh2aWFMYXllci5sZW5ndGggJiYgcmVjb3Jkc0FyZVJlYWRhYmxlKHZpYUxheWVyKSkgcmV0dXJuIHZpYUxheWVyXG4gIGlmICh2aWFMYXllci5sZW5ndGggJiYgIWRpc2FibGVDbGllbnRRdWVyeSkgcmV0dXJuIHZpYUxheWVyXG5cbiAgcmV0dXJuIFtdXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHF1ZXJ5QWxsUmVjb3JkcyAoXG4gIGRzOiBRdWVyaWFibGVMYXllcixcbiAgb3V0RmllbGRzOiBzdHJpbmdbXSA9IFsnKiddXG4pOiBQcm9taXNlPERhdGFSZWNvcmRbXT4ge1xuICBsZXQgcmVjb3JkcyA9IGF3YWl0IHJ1blF1ZXJ5YWJsZU1ldGhvZHMoZHMsIG91dEZpZWxkcywgZmFsc2UpXG4gIGlmIChyZWNvcmRzQXJlUmVhZGFibGUocmVjb3JkcykpIHJldHVybiByZWNvcmRzXG5cbiAgcmVjb3JkcyA9IGF3YWl0IHJ1blF1ZXJ5YWJsZU1ldGhvZHMoZHMsIG91dEZpZWxkcywgdHJ1ZSlcbiAgaWYgKHJlY29yZHNBcmVSZWFkYWJsZShyZWNvcmRzKSkgcmV0dXJuIHJlY29yZHNcblxuICByZXR1cm4gcmVjb3Jkc1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZldGNoTGF5ZXJSZWNvcmRzT3B0aW9ucyB7XG4gIC8qKiBJZ25vcmEgY2FjaGUgZG8gbWFwYSBlIGZvcsOnYSBxdWVyeS9sb2FkQWxsICjDunRpbCBubyBFbnRlcnByaXNlKS4gKi9cbiAgZm9yY2VRdWVyeT86IGJvb2xlYW5cbiAgeWVhckZpZWxkSmltdT86IHN0cmluZ1xuICByZWNvcnRlRmllbGRKaW11Pzogc3RyaW5nXG4gIGZpZWxkcz86IElNRmllbGRTY2hlbWFbXVxufVxuXG5mdW5jdGlvbiByZXNvbHZlT3V0RmllbGRzIChcbiAgeWVhckZpZWxkSmltdT86IHN0cmluZyxcbiAgcmVjb3J0ZUZpZWxkSmltdT86IHN0cmluZyxcbiAgZmllbGRzPzogSU1GaWVsZFNjaGVtYVtdXG4pOiBzdHJpbmdbXSB7XG4gIGlmICghZmllbGRzPy5sZW5ndGggfHwgIXllYXJGaWVsZEppbXUgfHwgIXJlY29ydGVGaWVsZEppbXUpIHJldHVybiBbJyonXVxuICBjb25zdCBrZXlzID0gcmVzb2x2ZUF0dHJpYnV0ZUtleXMoZmllbGRzLCB5ZWFyRmllbGRKaW11LCByZWNvcnRlRmllbGRKaW11KVxuICBpZiAoIWtleXMpIHJldHVybiBbJyonXVxuICByZXR1cm4gWycqJywga2V5cy55ZWFyS2V5LCBrZXlzLnJlY29ydGVLZXldXG59XG5cbi8qKiBDYXJyZWdhIHRvZG9zIG9zIHJlZ2lzdHJvcyBkYSBjYW1hZGEgKHRhYmVsYSBhbm8gw5cgcmVjb3J0ZXMpLiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoTGF5ZXJSZWNvcmRzIChcbiAgZGF0YVNvdXJjZTogdW5rbm93bixcbiAgb3B0aW9ucz86IEZldGNoTGF5ZXJSZWNvcmRzT3B0aW9uc1xuKTogUHJvbWlzZTxEYXRhUmVjb3JkW10+IHtcbiAgY29uc3QgZHMgPSBkYXRhU291cmNlIGFzIFF1ZXJpYWJsZUxheWVyXG4gIGNvbnN0IGNhY2hlZCA9IGRzLmdldEFsbExvYWRlZFJlY29yZHM/LigpID8/IGRzLmdldFJlY29yZHM/LigpID8/IFtdXG4gIGNvbnN0IG91dEZpZWxkcyA9IHJlc29sdmVPdXRGaWVsZHMoXG4gICAgb3B0aW9ucz8ueWVhckZpZWxkSmltdSxcbiAgICBvcHRpb25zPy5yZWNvcnRlRmllbGRKaW11LFxuICAgIG9wdGlvbnM/LmZpZWxkc1xuICApXG5cbiAgaWYgKCFvcHRpb25zPy5mb3JjZVF1ZXJ5ICYmIHJlY29yZHNBcmVSZWFkYWJsZShjYWNoZWQpKSB7XG4gICAgcmV0dXJuIGNhY2hlZFxuICB9XG5cbiAgY29uc3QgcXVlcmllZCA9IGF3YWl0IHF1ZXJ5QWxsUmVjb3Jkcyhkcywgb3V0RmllbGRzKVxuICBpZiAocmVjb3Jkc0FyZVJlYWRhYmxlKHF1ZXJpZWQpKSByZXR1cm4gcXVlcmllZFxuICBpZiAocXVlcmllZC5sZW5ndGgpIHJldHVybiBxdWVyaWVkXG5cbiAgaWYgKCFvcHRpb25zPy5mb3JjZVF1ZXJ5KSByZXR1cm4gY2FjaGVkXG4gIHJldHVybiBxdWVyaWVkLmxlbmd0aCA/IHF1ZXJpZWQgOiBjYWNoZWRcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUmVjb3J0ZVRva2VuICh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHZhbHVlXG4gICAgLnRvTG93ZXJDYXNlKClcbiAgICAubm9ybWFsaXplKCdORkQnKVxuICAgIC5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9nLCAnJylcbiAgICAucmVwbGFjZSgvW1xccy1dKy9nLCAnXycpXG59XG5cbmZ1bmN0aW9uIGlzWWVhck5hbWVkRmllbGQgKGZpZWxkOiBJTUZpZWxkU2NoZW1hKTogYm9vbGVhbiB7XG4gIGNvbnN0IHkgPVxuICAgIHBhcnNlWWVhcihmaWVsZC5qaW11TmFtZSkgPz9cbiAgICBwYXJzZVllYXIoZmllbGQubmFtZSkgPz9cbiAgICBwYXJzZVllYXIoZmllbGQuYWxpYXMpXG4gIHJldHVybiB5ICE9IG51bGwgJiYgeSA+PSAxOTg1ICYmIHkgPD0gMjAzNVxufVxuXG5mdW5jdGlvbiBmaW5kUmVjb3J0ZU5hbWVGaWVsZCAoZmllbGRzOiBJTUZpZWxkU2NoZW1hW10pOiBJTUZpZWxkU2NoZW1hIHwgbnVsbCB7XG4gIGNvbnN0IHBhdHRlcm5zID0gWydyZWNvcnRlJywgJ3JlZ2lhbycsICdyZWdpw6NvJywgJ2Jpb21hJywgJ25vbWUnLCAnbmFtZScsICdsYWJlbCddXG4gIHJldHVybiAoXG4gICAgZmllbGRzLmZpbmQoKGYpID0+IHtcbiAgICAgIGNvbnN0IGogPSBmLmppbXVOYW1lPy50b0xvd2VyQ2FzZSgpID8/ICcnXG4gICAgICBjb25zdCBuID0gZi5uYW1lPy50b0xvd2VyQ2FzZSgpID8/ICcnXG4gICAgICByZXR1cm4gcGF0dGVybnMuc29tZSgocCkgPT4gai5pbmNsdWRlcyhwKSB8fCBuLmluY2x1ZGVzKHApKVxuICAgIH0pID8/IG51bGxcbiAgKVxufVxuXG4vKiogTGF5b3V0IGFsdGVybmF0aXZvOiBjYWRhIHJlZ2lzdHJvID0gcmVjb3J0ZTsgY29sdW5hcyBudW3DqXJpY2FzID0gYW5vcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFllYXJTZXJpZXNGcm9tUmVjb3J0ZVJvd3MgKFxuICByZWNvcmRzOiBSZWNvcmRMaWtlW10sXG4gIHJlY29ydGVGaWVsZEppbXU6IHN0cmluZyxcbiAgZmllbGRzOiBJTUZpZWxkU2NoZW1hW11cbik6IFllYXJWYWx1ZVJvd1tdIHtcbiAgY29uc3QgeWVhckZpZWxkcyA9IGZpZWxkcy5maWx0ZXIoaXNZZWFyTmFtZWRGaWVsZClcbiAgaWYgKCF5ZWFyRmllbGRzLmxlbmd0aCkgcmV0dXJuIFtdXG5cbiAgY29uc3QgdGFyZ2V0ID0gbm9ybWFsaXplUmVjb3J0ZVRva2VuKHJlY29ydGVGaWVsZEppbXUpXG4gIGNvbnN0IG5hbWVGaWVsZCA9IGZpbmRSZWNvcnRlTmFtZUZpZWxkKGZpZWxkcylcblxuICBjb25zdCByb3cgPVxuICAgIHJlY29yZHMuZmluZCgocmVjKSA9PiB7XG4gICAgICBpZiAobmFtZUZpZWxkKSB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gcmVhZFJlY29yZFZhbHVlKHJlYywgbmFtZUZpZWxkLCBuYW1lRmllbGQuamltdU5hbWUpXG4gICAgICAgIGlmIChsYWJlbCAhPSBudWxsICYmIG5vcm1hbGl6ZVJlY29ydGVUb2tlbihTdHJpbmcobGFiZWwpKSA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBmIG9mIGZpZWxkcykge1xuICAgICAgICBpZiAoaXNZZWFyTmFtZWRGaWVsZChmKSB8fCBmLmppbXVOYW1lID09PSByZWNvcnRlRmllbGRKaW11KSBjb250aW51ZVxuICAgICAgICBjb25zdCB2ID0gcmVhZFJlY29yZFZhbHVlKHJlYywgZiwgZi5qaW11TmFtZSlcbiAgICAgICAgaWYgKHYgIT0gbnVsbCAmJiBub3JtYWxpemVSZWNvcnRlVG9rZW4oU3RyaW5nKHYpKSA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSkgPz8gbnVsbFxuXG4gIGlmICghcm93KSByZXR1cm4gW11cblxuICBjb25zdCBzZXJpZXM6IFllYXJWYWx1ZVJvd1tdID0gW11cbiAgZm9yIChjb25zdCB5ZiBvZiB5ZWFyRmllbGRzKSB7XG4gICAgY29uc3QgeWVhciA9XG4gICAgICBwYXJzZVllYXIoeWYuamltdU5hbWUpID8/IHBhcnNlWWVhcih5Zi5uYW1lKSA/PyBwYXJzZVllYXIoeWYuYWxpYXMpXG4gICAgY29uc3QgdmFsdWUgPSBwYXJzZU51bWVyaWNWYWx1ZShyZWFkUmVjb3JkVmFsdWUocm93LCB5ZiwgeWYuamltdU5hbWUpKVxuICAgIGlmICh5ZWFyID09IG51bGwgfHwgdmFsdWUgPT0gbnVsbCkgY29udGludWVcbiAgICBzZXJpZXMucHVzaCh7IHllYXIsIHZhbHVlIH0pXG4gIH1cblxuICByZXR1cm4gc2VyaWVzLnNvcnQoKGEsIGIpID0+IGEueWVhciAtIGIueWVhcilcbn1cblxuZnVuY3Rpb24gYnVpbGRZZWFyU2VyaWVzWWVhclJvd3MgKFxuICByZWNvcmRzOiBSZWNvcmRMaWtlW10sXG4gIHllYXJGaWVsZEppbXU6IHN0cmluZyxcbiAgcmVjb3J0ZUZpZWxkSmltdTogc3RyaW5nLFxuICBmaWVsZHM/OiBJTUZpZWxkU2NoZW1hW11cbik6IFllYXJWYWx1ZVJvd1tdIHtcbiAgY29uc3QgeWVhckZpZWxkID0gZmllbGRzPy5sZW5ndGhcbiAgICA/IGZpbmRGaWVsZEJ5SmltdU5hbWUoZmllbGRzLCB5ZWFyRmllbGRKaW11KVxuICAgIDogbnVsbFxuICBjb25zdCByZWNvcnRlRmllbGQgPSBmaWVsZHM/Lmxlbmd0aFxuICAgID8gZmluZEZpZWxkQnlKaW11TmFtZShmaWVsZHMsIHJlY29ydGVGaWVsZEppbXUpXG4gICAgOiBudWxsXG4gIGNvbnN0IHNlcmllczogWWVhclZhbHVlUm93W10gPSBbXVxuXG4gIGZvciAoY29uc3QgcmVjIG9mIHJlY29yZHMpIHtcbiAgICBjb25zdCB5ZWFyID0gcGFyc2VZZWFyKFxuICAgICAgcmVhZFJlY29yZFZhbHVlKHJlYywgeWVhckZpZWxkLCB5ZWFyRmllbGRKaW11KVxuICAgIClcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlTnVtZXJpY1ZhbHVlKFxuICAgICAgcmVhZFJlY29yZFZhbHVlKHJlYywgcmVjb3J0ZUZpZWxkLCByZWNvcnRlRmllbGRKaW11KVxuICAgIClcbiAgICBpZiAoeWVhciA9PSBudWxsIHx8IHZhbHVlID09IG51bGwpIGNvbnRpbnVlXG5cbiAgICBzZXJpZXMucHVzaCh7IHllYXIsIHZhbHVlIH0pXG4gIH1cblxuICByZXR1cm4gc2VyaWVzLnNvcnQoKGEsIGIpID0+IGEueWVhciAtIGIueWVhcilcbn1cblxuZnVuY3Rpb24gY29sbGVjdFJlY29yZEF0dHJpYnV0ZUtleXMgKHJlY29yZHM6IFJlY29yZExpa2VbXSk6IHN0cmluZ1tdIHtcbiAgY29uc3Qga2V5cyA9IG5ldyBTZXQ8c3RyaW5nPigpXG4gIGZvciAoY29uc3QgcmVjIG9mIHJlY29yZHMuc2xpY2UoMCwgMTAwKSkge1xuICAgIE9iamVjdC5rZXlzKGdldFBsYWluQXR0cmlidXRlcyhyZWMpKS5mb3JFYWNoKChrKSA9PiBrZXlzLmFkZChrKSlcbiAgfVxuICByZXR1cm4gWy4uLmtleXNdXG59XG5cbmZ1bmN0aW9uIHJlc29sdmVLZXlzRnJvbUF0dHJpYnV0ZU5hbWVzIChcbiAga2V5czogc3RyaW5nW10sXG4gIHllYXJGaWVsZEppbXU6IHN0cmluZyxcbiAgcmVjb3J0ZUZpZWxkSmltdTogc3RyaW5nXG4pOiB7IHllYXJLZXk6IHN0cmluZzsgcmVjb3J0ZUtleTogc3RyaW5nIH0gfCBudWxsIHtcbiAgY29uc3QgcmVjb3J0ZUtleSA9IGtleXMuZmluZChcbiAgICAoaykgPT5cbiAgICAgIGsudG9Mb3dlckNhc2UoKSA9PT0gcmVjb3J0ZUZpZWxkSmltdS50b0xvd2VyQ2FzZSgpIHx8XG4gICAgICBub3JtYWxpemVSZWNvcnRlVG9rZW4oaykgPT09IG5vcm1hbGl6ZVJlY29ydGVUb2tlbihyZWNvcnRlRmllbGRKaW11KVxuICApXG4gIGxldCB5ZWFyS2V5ID0ga2V5cy5maW5kKChrKSA9PiBrLnRvTG93ZXJDYXNlKCkgPT09IHllYXJGaWVsZEppbXUudG9Mb3dlckNhc2UoKSlcbiAgaWYgKCF5ZWFyS2V5KSB7XG4gICAgeWVhcktleSA9IGtleXMuZmluZCgoaykgPT5cbiAgICAgIFlFQVJfTkFNRV9QQVRURVJOUy5zb21lKFxuICAgICAgICAocCkgPT4gay50b0xvd2VyQ2FzZSgpID09PSBwIHx8IGsudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhwKVxuICAgICAgKVxuICAgIClcbiAgfVxuICBpZiAoIXllYXJLZXkgfHwgIXJlY29ydGVLZXkpIHJldHVybiBudWxsXG4gIHJldHVybiB7IHllYXJLZXksIHJlY29ydGVLZXkgfVxufVxuXG4vKiogw5psdGltbyByZWN1cnNvOiBpbmZlcmUgY29sdW5hcyBwZWxvcyBub21lcyByZWFpcyBub3MgYXRyaWJ1dG9zIHJldG9ybmFkb3MuICovXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRZZWFyU2VyaWVzSW5mZXJyZWQgKFxuICByZWNvcmRzOiBSZWNvcmRMaWtlW10sXG4gIHllYXJGaWVsZEppbXU6IHN0cmluZyxcbiAgcmVjb3J0ZUZpZWxkSmltdTogc3RyaW5nXG4pOiBZZWFyVmFsdWVSb3dbXSB7XG4gIGNvbnN0IGtleXMgPSBjb2xsZWN0UmVjb3JkQXR0cmlidXRlS2V5cyhyZWNvcmRzKVxuICBjb25zdCByZXNvbHZlZCA9IHJlc29sdmVLZXlzRnJvbUF0dHJpYnV0ZU5hbWVzKGtleXMsIHllYXJGaWVsZEppbXUsIHJlY29ydGVGaWVsZEppbXUpXG4gIGlmICghcmVzb2x2ZWQpIHJldHVybiBbXVxuXG4gIGNvbnN0IHNlcmllczogWWVhclZhbHVlUm93W10gPSBbXVxuICBmb3IgKGNvbnN0IHJlYyBvZiByZWNvcmRzKSB7XG4gICAgY29uc3QgYXR0cnMgPSBnZXRQbGFpbkF0dHJpYnV0ZXMocmVjKVxuICAgIGNvbnN0IHllYXIgPSBwYXJzZVllYXIoYXR0cnNbcmVzb2x2ZWQueWVhcktleV0pXG4gICAgY29uc3QgdmFsdWUgPSBwYXJzZU51bWVyaWNWYWx1ZShhdHRyc1tyZXNvbHZlZC5yZWNvcnRlS2V5XSlcbiAgICBpZiAoeWVhciA9PSBudWxsIHx8IHZhbHVlID09IG51bGwpIGNvbnRpbnVlXG4gICAgc2VyaWVzLnB1c2goeyB5ZWFyLCB2YWx1ZSB9KVxuICB9XG4gIHJldHVybiBzZXJpZXMuc29ydCgoYSwgYikgPT4gYS55ZWFyIC0gYi55ZWFyKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRZZWFyU2VyaWVzIChcbiAgcmVjb3JkczogUmVjb3JkTGlrZVtdLFxuICB5ZWFyRmllbGRKaW11OiBzdHJpbmcsXG4gIHJlY29ydGVGaWVsZEppbXU6IHN0cmluZyxcbiAgZmllbGRzPzogSU1GaWVsZFNjaGVtYVtdXG4pOiBZZWFyVmFsdWVSb3dbXSB7XG4gIGNvbnN0IHllYXJSb3dzID0gYnVpbGRZZWFyU2VyaWVzWWVhclJvd3MoXG4gICAgcmVjb3JkcyxcbiAgICB5ZWFyRmllbGRKaW11LFxuICAgIHJlY29ydGVGaWVsZEppbXUsXG4gICAgZmllbGRzXG4gIClcbiAgaWYgKHllYXJSb3dzLmxlbmd0aCA+IDApIHJldHVybiB5ZWFyUm93c1xuXG4gIGlmIChmaWVsZHM/Lmxlbmd0aCkge1xuICAgIGNvbnN0IGFsdCA9IGJ1aWxkWWVhclNlcmllc0Zyb21SZWNvcnRlUm93cyhyZWNvcmRzLCByZWNvcnRlRmllbGRKaW11LCBmaWVsZHMpXG4gICAgaWYgKGFsdC5sZW5ndGggPiAwKSByZXR1cm4gYWx0XG4gIH1cblxuICByZXR1cm4gYnVpbGRZZWFyU2VyaWVzSW5mZXJyZWQocmVjb3JkcywgeWVhckZpZWxkSmltdSwgcmVjb3J0ZUZpZWxkSmltdSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFllYXJzUmFuZ2VTdW1tYXJ5IChzZXJpZXM6IFllYXJWYWx1ZVJvd1tdKTogc3RyaW5nIHwgbnVsbCB7XG4gIGlmICghc2VyaWVzLmxlbmd0aCkgcmV0dXJuIG51bGxcbiAgY29uc3QgbWluID0gc2VyaWVzWzBdLnllYXJcbiAgY29uc3QgbWF4ID0gc2VyaWVzW3Nlcmllcy5sZW5ndGggLSAxXS55ZWFyXG4gIGNvbnN0IGNvdW50ID0gc2VyaWVzLmxlbmd0aFxuICBpZiAobWluID09PSBtYXgpIHJldHVybiBgJHttaW59ICgke2NvdW50fSBhbm8pYFxuICByZXR1cm4gYCR7bWlufeKAkyR7bWF4fSAoJHtjb3VudH0gYW5vcylgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1llYXJPdXRPZlR5cGljYWxSYW5nZSAoeWVhcjogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiB5ZWFyIDwgMjAwMSB8fCB5ZWFyID4gMjAyNVxufVxuXG4vKiogVmFyaWHDp8OjbyBwZXJjZW50dWFsIGRvIHZhbG9yIGluaWNpYWwgKGFubyBtYWlzIGFudGlnbykgcGFyYSBvIGZpbmFsIChhbm8gbWFpcyByZWNlbnRlKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYWxjUGVyY2VudFZhcmlhdGlvbiAoXG4gIHZhbHVlSW5pY2lhbDogbnVtYmVyLFxuICB2YWx1ZUZpbmFsOiBudW1iZXJcbik6IG51bWJlciB8IG51bGwge1xuICBpZiAoIU51bWJlci5pc0Zpbml0ZSh2YWx1ZUluaWNpYWwpIHx8ICFOdW1iZXIuaXNGaW5pdGUodmFsdWVGaW5hbCkpIHJldHVybiBudWxsXG4gIGlmICh2YWx1ZUluaWNpYWwgPT09IDApIHJldHVybiBudWxsXG4gIHJldHVybiAoKHZhbHVlRmluYWwgLSB2YWx1ZUluaWNpYWwpIC8gdmFsdWVJbmljaWFsKSAqIDEwMFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UGVyY2VudFZhcmlhdGlvbiAocGN0OiBudW1iZXIpOiBzdHJpbmcge1xuICBjb25zdCBzaWduID0gcGN0ID4gMCA/ICcrJyA6ICcnXG4gIHJldHVybiBgJHtzaWdufSR7cGN0LnRvTG9jYWxlU3RyaW5nKCdwdC1CUicsIHtcbiAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyXG4gIH0pfSVgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZUZvclllYXIgKFxuICBzZXJpZXM6IFllYXJWYWx1ZVJvd1tdLFxuICB5ZWFyOiBudW1iZXJcbik6IG51bWJlciB8IG51bGwge1xuICBjb25zdCByb3cgPSBzZXJpZXMuZmluZCgocikgPT4gci55ZWFyID09PSB5ZWFyKVxuICByZXR1cm4gcm93ICE9IG51bGwgPyByb3cudmFsdWUgOiBudWxsXG59XG5cbi8qKiBTb21hIG9zIHZhbG9yZXMgZG9zIGFub3MgaW5mb3JtYWRvczsgcmV0b3JuYSBudWxsIHNlIGFsZ3VtIGFubyBuw6NvIHRpdmVyIGRhZG8uICovXG5leHBvcnQgZnVuY3Rpb24gc3VtVmFsdWVzRm9yWWVhcnMgKFxuICBzZXJpZXM6IFllYXJWYWx1ZVJvd1tdLFxuICB5ZWFyczogbnVtYmVyW11cbik6IG51bWJlciB8IG51bGwge1xuICBpZiAoIXllYXJzLmxlbmd0aCkgcmV0dXJuIG51bGxcbiAgbGV0IHN1bSA9IDBcbiAgZm9yIChjb25zdCB5ZWFyIG9mIHllYXJzKSB7XG4gICAgY29uc3QgdmFsdWUgPSBnZXRWYWx1ZUZvclllYXIoc2VyaWVzLCB5ZWFyKVxuICAgIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIHN1bSArPSB2YWx1ZVxuICB9XG4gIHJldHVybiBzdW1cbn1cblxuLyoqIEFub3MgZGlzcG9uw612ZWlzIHBhcmEgbyBwZXLDrW9kbyBpbmljaWFsIChhbnRlcyBkbyBwZXLDrW9kbyBmaW5hbCwgc2UgaG91dmVyKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRZZWFyc0FsbG93ZWRGb3JJbmljaWFsIChcbiAgYWxsWWVhcnM6IG51bWJlcltdLFxuICBwZXJpb2RvRmluYWw6IG51bWJlcltdXG4pOiBudW1iZXJbXSB7XG4gIGNvbnN0IGJsb2NrZWQgPSBuZXcgU2V0KHBlcmlvZG9GaW5hbClcbiAgY29uc3QgbWF4RmluYWwgPSBwZXJpb2RvRmluYWwubGVuZ3RoID8gTWF0aC5taW4oLi4ucGVyaW9kb0ZpbmFsKSA6IEluZmluaXR5XG4gIHJldHVybiBhbGxZZWFycy5maWx0ZXIoKHkpID0+ICFibG9ja2VkLmhhcyh5KSAmJiB5IDwgbWF4RmluYWwpXG59XG5cbi8qKiBBbm9zIGRpc3BvbsOtdmVpcyBwYXJhIG8gcGVyw61vZG8gZmluYWwgKGRlcG9pcyBkbyBwZXLDrW9kbyBpbmljaWFsLCBzZSBob3V2ZXIpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFllYXJzQWxsb3dlZEZvckZpbmFsIChcbiAgYWxsWWVhcnM6IG51bWJlcltdLFxuICBwZXJpb2RvSW5pY2lhbDogbnVtYmVyW11cbik6IG51bWJlcltdIHtcbiAgY29uc3QgYmxvY2tlZCA9IG5ldyBTZXQocGVyaW9kb0luaWNpYWwpXG4gIGNvbnN0IG1pbkluaWNpYWwgPSBwZXJpb2RvSW5pY2lhbC5sZW5ndGggPyBNYXRoLm1heCguLi5wZXJpb2RvSW5pY2lhbCkgOiAtSW5maW5pdHlcbiAgcmV0dXJuIGFsbFllYXJzLmZpbHRlcigoeSkgPT4gIWJsb2NrZWQuaGFzKHkpICYmIHkgPiBtaW5JbmljaWFsKVxufVxuXG4vKiogTWFyY2EvZGVzbWFyY2EgdW0gYW5vIG1hbnRlbmRvIGFwZW5hcyBzZXF1w6puY2lhcyBjb25zZWN1dGl2YXMuICovXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlQ29uc2VjdXRpdmVZZWFyIChcbiAgcGVyaW9kOiBudW1iZXJbXSxcbiAgeWVhcjogbnVtYmVyXG4pOiB7IG5leHQ6IG51bWJlcltdOyByZWplY3RlZDogYm9vbGVhbiB9IHtcbiAgaWYgKHBlcmlvZC5pbmNsdWRlcyh5ZWFyKSkge1xuICAgIHJldHVybiB7IG5leHQ6IHBlcmlvZC5maWx0ZXIoKHkpID0+IHkgIT09IHllYXIpLCByZWplY3RlZDogZmFsc2UgfVxuICB9XG4gIGNvbnN0IG5leHQgPSBbLi4ucGVyaW9kLCB5ZWFyXS5zb3J0KChhLCBiKSA9PiBhIC0gYilcbiAgaWYgKCFhcmVDb25zZWN1dGl2ZVllYXJzKG5leHQpKSB7XG4gICAgcmV0dXJuIHsgbmV4dDogcGVyaW9kLCByZWplY3RlZDogdHJ1ZSB9XG4gIH1cbiAgcmV0dXJuIHsgbmV4dCwgcmVqZWN0ZWQ6IGZhbHNlIH1cbn1cblxuLyoqIFZlcmlmaWNhIHNlIG9zIGFub3MgZm9ybWFtIHVtYSBzZXF1w6puY2lhIGNvbnNlY3V0aXZhIChleC46IDIwMTAsIDIwMTEsIDIwMTIpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFyZUNvbnNlY3V0aXZlWWVhcnMgKHllYXJzOiBudW1iZXJbXSk6IGJvb2xlYW4ge1xuICBpZiAoeWVhcnMubGVuZ3RoIDw9IDEpIHJldHVybiB0cnVlXG4gIGNvbnN0IHNvcnRlZCA9IFsuLi55ZWFyc10uc29ydCgoYSwgYikgPT4gYSAtIGIpXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgc29ydGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHNvcnRlZFtpXSAtIHNvcnRlZFtpIC0gMV0gIT09IDEpIHJldHVybiBmYWxzZVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cbi8qKiBSw7N0dWxvIGNvbXBhY3RvIHBhcmEgdW0gb3UgbWFpcyBhbm9zIChleC46IFwiMjAxMFwiIG91IFwiMjAxMOKAkzIwMTIgKDMgYW5vcylcIikuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UGVyaW9kTGFiZWwgKHllYXJzOiBudW1iZXJbXSk6IHN0cmluZyB7XG4gIGNvbnN0IHNvcnRlZCA9IFsuLi55ZWFyc10uc29ydCgoYSwgYikgPT4gYSAtIGIpXG4gIGlmICghc29ydGVkLmxlbmd0aCkgcmV0dXJuICcnXG4gIGlmIChzb3J0ZWQubGVuZ3RoID09PSAxKSByZXR1cm4gU3RyaW5nKHNvcnRlZFswXSlcbiAgcmV0dXJuIGAke3NvcnRlZFswXX3igJMke3NvcnRlZFtzb3J0ZWQubGVuZ3RoIC0gMV19ICgke3NvcnRlZC5sZW5ndGh9IGFub3MpYFxufVxuXG4vKiogSW50ZXJ2YWxvIGRlIGFub3Mgc2VtIGNvbnRhZ2VtIChleC46IFwiMjAxMFwiIG91IFwiMjAxMOKAkzIwMTJcIikg4oCUIHVzbyBlbSByZXN1bHRhZG9zLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFBlcmlvZFJhbmdlTGFiZWwgKHllYXJzOiBudW1iZXJbXSk6IHN0cmluZyB7XG4gIGNvbnN0IHNvcnRlZCA9IFsuLi55ZWFyc10uc29ydCgoYSwgYikgPT4gYSAtIGIpXG4gIGlmICghc29ydGVkLmxlbmd0aCkgcmV0dXJuICcnXG4gIGlmIChzb3J0ZWQubGVuZ3RoID09PSAxKSByZXR1cm4gU3RyaW5nKHNvcnRlZFswXSlcbiAgcmV0dXJuIGAke3NvcnRlZFswXX3igJMke3NvcnRlZFtzb3J0ZWQubGVuZ3RoIC0gMV19YFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFZhcmlhdGlvblJlc3VsdCB7XG4gIHBjdDogbnVtYmVyXG4gIHZhbHVlSW5pY2lhbDogbnVtYmVyXG4gIHZhbHVlRmluYWw6IG51bWJlclxuICB5ZWFyc0luaWNpYWw6IG51bWJlcltdXG4gIHllYXJzRmluYWw6IG51bWJlcltdXG59XG5cbmV4cG9ydCB0eXBlIFBlcmlvZFZhcmlhdGlvbk91dGNvbWUgPVxuICB8IHsgb2s6IHRydWU7IGRhdGE6IFZhcmlhdGlvblJlc3VsdCB9XG4gIHwgeyBvazogZmFsc2U7IG1lc3NhZ2U6IHN0cmluZyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlUGVyaW9kVmFyaWF0aW9uIChcbiAgc2VyaWVzOiBZZWFyVmFsdWVSb3dbXSxcbiAgcGVyaW9kb0luaWNpYWw6IG51bWJlcltdLFxuICBwZXJpb2RvRmluYWw6IG51bWJlcltdXG4pOiBQZXJpb2RWYXJpYXRpb25PdXRjb21lIHtcbiAgY29uc3QgaW5pID0gWy4uLnBlcmlvZG9JbmljaWFsXS5zb3J0KChhLCBiKSA9PiBhIC0gYilcbiAgY29uc3QgZmluID0gWy4uLnBlcmlvZG9GaW5hbF0uc29ydCgoYSwgYikgPT4gYSAtIGIpXG5cbiAgaWYgKCFpbmkubGVuZ3RoIHx8ICFmaW4ubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6ICdTZWxlY2lvbmUgcGVsbyBtZW5vcyB1bSBhbm8gZW0gY2FkYSBwZXLDrW9kby4nXG4gICAgfVxuICB9XG5cbiAgaWYgKGluaS5sZW5ndGggIT09IGZpbi5sZW5ndGgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTpcbiAgICAgICAgJ08gcGVyw61vZG8gaW5pY2lhbCBlIG8gcGVyw61vZG8gZmluYWwgZGV2ZW0gdGVyIGEgbWVzbWEgcXVhbnRpZGFkZSBkZSBhbm9zLidcbiAgICB9XG4gIH1cblxuICBpZiAoIWFyZUNvbnNlY3V0aXZlWWVhcnMoaW5pKSkge1xuICAgIHJldHVybiB7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBtZXNzYWdlOiAnT3MgYW5vcyBkbyBwZXLDrW9kbyBpbmljaWFsIGRldmVtIHNlciBjb25zZWN1dGl2b3MuJ1xuICAgIH1cbiAgfVxuXG4gIGlmICghYXJlQ29uc2VjdXRpdmVZZWFycyhmaW4pKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6ICdPcyBhbm9zIGRvIHBlcsOtb2RvIGZpbmFsIGRldmVtIHNlciBjb25zZWN1dGl2b3MuJ1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGluaVNldCA9IG5ldyBTZXQoaW5pKVxuICBpZiAoZmluLnNvbWUoKHkpID0+IGluaVNldC5oYXMoeSkpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6ICdVbSBhbm8gbsOjbyBwb2RlIHBlcnRlbmNlciBhb3MgZG9pcyBwZXLDrW9kb3MgYW8gbWVzbW8gdGVtcG8uJ1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG1heEluaWNpYWwgPSBpbmlbaW5pLmxlbmd0aCAtIDFdXG4gIGNvbnN0IG1pbkZpbmFsID0gZmluWzBdXG4gIGlmIChtYXhJbmljaWFsID49IG1pbkZpbmFsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6ICdPIHBlcsOtb2RvIGZpbmFsIGRldmUgc2VyIHBvc3RlcmlvciBhbyBwZXLDrW9kbyBpbmljaWFsLidcbiAgICB9XG4gIH1cblxuICBjb25zdCB2YWx1ZUluaWNpYWwgPSBzdW1WYWx1ZXNGb3JZZWFycyhzZXJpZXMsIGluaSlcbiAgY29uc3QgdmFsdWVGaW5hbCA9IHN1bVZhbHVlc0ZvclllYXJzKHNlcmllcywgZmluKVxuXG4gIGlmICh2YWx1ZUluaWNpYWwgPT0gbnVsbCB8fCB2YWx1ZUZpbmFsID09IG51bGwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTpcbiAgICAgICAgJ1VtIG91IG1haXMgYW5vcyBzZWxlY2lvbmFkb3MgbsOjbyBwb3NzdWVtIGRhZG8gcGFyYSBlc3RlIHJlY29ydGUuJ1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHBjdCA9IGNhbGNQZXJjZW50VmFyaWF0aW9uKHZhbHVlSW5pY2lhbCwgdmFsdWVGaW5hbClcbiAgaWYgKHBjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6XG4gICAgICAgICdBIHNvbWEgZG8gcGVyw61vZG8gaW5pY2lhbCDDqSB6ZXJvOyBuw6NvIMOpIHBvc3PDrXZlbCBjYWxjdWxhciBhIHZhcmlhw6fDo28gcGVyY2VudHVhbC4nXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBvazogdHJ1ZSxcbiAgICBkYXRhOiB7XG4gICAgICBwY3QsXG4gICAgICB2YWx1ZUluaWNpYWwsXG4gICAgICB2YWx1ZUZpbmFsLFxuICAgICAgeWVhcnNJbmljaWFsOiBpbmksXG4gICAgICB5ZWFyc0ZpbmFsOiBmaW5cbiAgICB9XG4gIH1cbn1cblxuLyoqIENvbXBhcmHDp8OjbyBlbnRyZSBkb2lzIGFub3Mgw7puaWNvcyAoYXRhbGhvIHBhcmEgcGVyw61vZG9zIGRlIHVtIGFubykuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZVZhcmlhdGlvbiAoXG4gIHNlcmllczogWWVhclZhbHVlUm93W10sXG4gIGFub0luaWNpYWw6IG51bWJlcixcbiAgYW5vRmluYWw6IG51bWJlclxuKTogUGVyaW9kVmFyaWF0aW9uT3V0Y29tZSB7XG4gIHJldHVybiBjb21wdXRlUGVyaW9kVmFyaWF0aW9uKHNlcmllcywgW2Fub0luaWNpYWxdLCBbYW5vRmluYWxdKVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfZGF0YV9zb3VyY2Vfc2VsZWN0b3JfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9zZXR0aW5nX2NvbXBvbmVudHNfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJcbi8qKiBAanN4IGpzeCAqL1xuLyoqIEBqc3hGcmFnIFJlYWN0LkZyYWdtZW50ICovXG5pbXBvcnQge1xuICBSZWFjdCwganN4LCBjc3MsIEltbXV0YWJsZSxcbiAgdHlwZSBJbW11dGFibGVBcnJheSwgdHlwZSBVc2VEYXRhU291cmNlLFxuICB0eXBlIElNRGF0YVNvdXJjZVNjaGVtYSxcbiAgdHlwZSBEYXRhU291cmNlLFxuICBBbGxEYXRhU291cmNlVHlwZXMsIERhdGFTb3VyY2VDb21wb25lbnRcbn0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgU2VsZWN0LCBPcHRpb24gfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHsgU2V0dGluZ1NlY3Rpb24sIFNldHRpbmdSb3cgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50cydcbmltcG9ydCB7IERhdGFTb3VyY2VTZWxlY3RvciB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvZGF0YS1zb3VyY2Utc2VsZWN0b3InXG5pbXBvcnQgeyB0eXBlIElNQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IHsgZ2V0RGF0YVNvdXJjZVNjaGVtYSB9IGZyb20gJy4uL3V0aWxzL2RhdGEtc291cmNlJ1xuaW1wb3J0IHtcbiAgZGV0ZWN0WWVhckZpZWxkLFxuICBmb3JtYXRSZWNvcnRlTGFiZWwsXG4gIGdldFJlY29ydGVDYW5kaWRhdGVGaWVsZHMsXG4gIHNjaGVtYVRvRmllbGRMaXN0XG59IGZyb20gJy4uL3V0aWxzL3Byb2Rlcy10YWJsZSdcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaWQ6IHN0cmluZ1xuICB1c2VEYXRhU291cmNlcz86IEltbXV0YWJsZUFycmF5PFVzZURhdGFTb3VyY2U+XG4gIG9uU2V0dGluZ0NoYW5nZT86IChzZXR0aW5nOiBhbnkpID0+IHZvaWRcbiAgY29uZmlnPzogSU1Db25maWdcbn1cblxuY29uc3Qgc3R5bGVzID0gY3NzYFxuICAmLndpZGdldC1zZXR0aW5nLWNvbXBhcmFkb3ItcHJvZGVzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDA7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cbiAgJiAqIHtcbiAgICB3cml0aW5nLW1vZGU6IGhvcml6b250YWwtdGIgIWltcG9ydGFudDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgd29yZC1icmVhazogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmppbXUtdWlfc2V0dGluZy1yb3cge1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICB9XG4gIC5qaW11LXVpX3NldHRpbmctcm93X19sYWJlbCB7XG4gICAgbWluLXdpZHRoOiAwO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuICAuamltdS11aV9zZXR0aW5nLXJvd19fY29udGVudCB7XG4gICAgZmxleDogMSAxIDEwMCU7XG4gICAgbWluLXdpZHRoOiAwO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgfVxuICAuc2V0dGluZy1oaW50IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM2YjZiNmI7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIH1cbmBcblxuY29uc3QgZW1wdHlDb25maWcgPSAoKSA9PiBJbW11dGFibGUoe30gYXMgSU1Db25maWcpXG5cbmNvbnN0IFNldHRpbmcgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgaWQsIHVzZURhdGFTb3VyY2VzLCBvblNldHRpbmdDaGFuZ2UsIGNvbmZpZyB9ID0gcHJvcHNcbiAgY29uc3QgdXNlRHMgPSB1c2VEYXRhU291cmNlcz8uWzBdXG4gIGNvbnN0IHllYXJGaWVsZCA9IGNvbmZpZz8ueWVhckZpZWxkXG4gIGNvbnN0IHJlY29ydGVGaWVsZCA9IGNvbmZpZz8ucmVjb3J0ZUZpZWxkXG5cbiAgY29uc3QgW2ZpZWxkTGlzdCwgc2V0RmllbGRMaXN0XSA9IFJlYWN0LnVzZVN0YXRlKFxuICAgIFtdIGFzIFJldHVyblR5cGU8dHlwZW9mIHNjaGVtYVRvRmllbGRMaXN0PlxuICApXG5cbiAgY29uc3QgcmVjb3J0ZU9wdGlvbnMgPSBSZWFjdC51c2VNZW1vKFxuICAgICgpID0+IGdldFJlY29ydGVDYW5kaWRhdGVGaWVsZHMoZmllbGRMaXN0LCB5ZWFyRmllbGQpLFxuICAgIFtmaWVsZExpc3QsIHllYXJGaWVsZF1cbiAgKVxuXG4gIGNvbnN0IGFwcGx5WWVhckZpZWxkID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGZpZWxkczogUmV0dXJuVHlwZTx0eXBlb2Ygc2NoZW1hVG9GaWVsZExpc3Q+LCBjdXJyZW50UmVjb3J0ZT86IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZGV0ZWN0ZWQgPSBkZXRlY3RZZWFyRmllbGQoZmllbGRzKVxuICAgICAgaWYgKCFkZXRlY3RlZCkgcmV0dXJuXG5cbiAgICAgIGxldCBuZXh0ID0gKGNvbmZpZyA/PyBlbXB0eUNvbmZpZygpKS5zZXQoJ3llYXJGaWVsZCcsIGRldGVjdGVkKVxuICAgICAgaWYgKGN1cnJlbnRSZWNvcnRlID09PSBkZXRlY3RlZCkge1xuICAgICAgICBuZXh0ID0gbmV4dC53aXRob3V0KCdyZWNvcnRlRmllbGQnKVxuICAgICAgfVxuICAgICAgaWYgKGRldGVjdGVkICE9PSB5ZWFyRmllbGQgfHwgY3VycmVudFJlY29ydGUgPT09IGRldGVjdGVkKSB7XG4gICAgICAgIG9uU2V0dGluZ0NoYW5nZT8uKHsgaWQsIGNvbmZpZzogbmV4dCB9KVxuICAgICAgfVxuICAgIH0sXG4gICAgW2NvbmZpZywgaWQsIG9uU2V0dGluZ0NoYW5nZSwgeWVhckZpZWxkXVxuICApXG5cbiAgY29uc3QgcHJvY2Vzc1NjaGVtYSA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChzY2hlbWE6IElNRGF0YVNvdXJjZVNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgZmllbGRzID0gc2NoZW1hVG9GaWVsZExpc3Qoc2NoZW1hKVxuICAgICAgc2V0RmllbGRMaXN0KGZpZWxkcylcbiAgICAgIGFwcGx5WWVhckZpZWxkKGZpZWxkcywgcmVjb3J0ZUZpZWxkKVxuICAgIH0sXG4gICAgW2FwcGx5WWVhckZpZWxkLCByZWNvcnRlRmllbGRdXG4gIClcblxuICBjb25zdCBoYW5kbGVEYXRhU291cmNlQ3JlYXRlZCA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChkczogRGF0YVNvdXJjZSkgPT4ge1xuICAgICAgY29uc3Qgc2NoZW1hID0gZ2V0RGF0YVNvdXJjZVNjaGVtYShkcylcbiAgICAgIGlmIChzY2hlbWEpIHByb2Nlc3NTY2hlbWEoc2NoZW1hKVxuICAgIH0sXG4gICAgW3Byb2Nlc3NTY2hlbWFdXG4gIClcblxuICBjb25zdCBoYW5kbGVEYXRhU291cmNlQ2hhbmdlID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKG5ld1VzZURhdGFTb3VyY2VzOiBVc2VEYXRhU291cmNlW10pID0+IHtcbiAgICAgIG9uU2V0dGluZ0NoYW5nZT8uKHtcbiAgICAgICAgaWQsXG4gICAgICAgIHVzZURhdGFTb3VyY2VzOiBJbW11dGFibGUobmV3VXNlRGF0YVNvdXJjZXMpLFxuICAgICAgICBjb25maWc6IChjb25maWcgPz8gZW1wdHlDb25maWcoKSlcbiAgICAgICAgICAud2l0aG91dCgneWVhckZpZWxkJylcbiAgICAgICAgICAud2l0aG91dCgncmVjb3J0ZUZpZWxkJylcbiAgICAgIH0pXG4gICAgICBzZXRGaWVsZExpc3QoW10pXG4gICAgfSxcbiAgICBbY29uZmlnLCBpZCwgb25TZXR0aW5nQ2hhbmdlXVxuICApXG5cbiAgY29uc3QgaGFuZGxlUmVjb3J0ZVNlbGVjdCA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBiYXNlID0gY29uZmlnID8/IGVtcHR5Q29uZmlnKClcbiAgICAgIG9uU2V0dGluZ0NoYW5nZT8uKHtcbiAgICAgICAgaWQsXG4gICAgICAgIGNvbmZpZzogdmFsdWUgPyBiYXNlLnNldCgncmVjb3J0ZUZpZWxkJywgdmFsdWUpIDogYmFzZS53aXRob3V0KCdyZWNvcnRlRmllbGQnKVxuICAgICAgfSlcbiAgICB9LFxuICAgIFtjb25maWcsIGlkLCBvblNldHRpbmdDaGFuZ2VdXG4gIClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LXNldHRpbmctY29tcGFyYWRvci1wcm9kZXMgamltdS13aWRnZXQtc2V0dGluZyB3LTEwMFwiIGNzcz17c3R5bGVzfT5cbiAgICAgIHt1c2VEcyAmJiAoXG4gICAgICAgIDxEYXRhU291cmNlQ29tcG9uZW50XG4gICAgICAgICAgd2lkZ2V0SWQ9e2lkfVxuICAgICAgICAgIHVzZURhdGFTb3VyY2U9e3VzZURzfVxuICAgICAgICAgIG9uRGF0YVNvdXJjZUNyZWF0ZWQ9e2hhbmRsZURhdGFTb3VyY2VDcmVhdGVkfVxuICAgICAgICAgIG9uRGF0YVNvdXJjZVNjaGVtYUNoYW5nZT17cHJvY2Vzc1NjaGVtYX1cbiAgICAgICAgLz5cbiAgICAgICl9XG5cbiAgICAgIDxTZXR0aW5nU2VjdGlvbiB0aXRsZT1cIkRhZG9zXCIgY2xhc3NOYW1lPVwidy0xMDBcIj5cbiAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9XCJDYW1hZGEgUFJPREVTIChGZWF0dXJlIExheWVyKVwiIGZsb3c9XCJ3cmFwXCIgbGV2ZWw9ezF9PlxuICAgICAgICAgIDxEYXRhU291cmNlU2VsZWN0b3JcbiAgICAgICAgICAgIHdpZGdldElkPXtpZH1cbiAgICAgICAgICAgIGlzTXVsdGlwbGU9e2ZhbHNlfVxuICAgICAgICAgICAgbXVzdFVzZURhdGFTb3VyY2VcbiAgICAgICAgICAgIHR5cGVzPXtJbW11dGFibGUoW0FsbERhdGFTb3VyY2VUeXBlcy5GZWF0dXJlTGF5ZXJdKX1cbiAgICAgICAgICAgIHVzZURhdGFTb3VyY2VzPXt1c2VEYXRhU291cmNlc31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVEYXRhU291cmNlQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvU2V0dGluZ1Jvdz5cblxuICAgICAgICB7dXNlRHMgJiYgKFxuICAgICAgICAgIDxTZXR0aW5nUm93IGxhYmVsPVwiUmVjb3J0ZSBnZW9ncsOhZmljbyAoY29sdW5hKVwiIGZsb3c9XCJ3cmFwXCIgbGV2ZWw9ezF9PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3JlY29ydGVGaWVsZCA/PyAnJ31cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjaW9uZSBvIHJlY29ydGXigKZcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoX2V2dCwgdmFsdWUpID0+IGhhbmRsZVJlY29ydGVTZWxlY3QoU3RyaW5nKHZhbHVlID8/ICcnKSl9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3JlY29ydGVPcHRpb25zLmxlbmd0aCA9PT0gMH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJcIj57Jyd9PC9PcHRpb24+XG4gICAgICAgICAgICAgICAge3JlY29ydGVPcHRpb25zLm1hcCgoZikgPT4gKFxuICAgICAgICAgICAgICAgICAgPE9wdGlvblxuICAgICAgICAgICAgICAgICAgICBrZXk9e2YuamltdU5hbWV9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmLmppbXVOYW1lfVxuICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3JlY29ydGVGaWVsZCA9PT0gZi5qaW11TmFtZX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2Zvcm1hdFJlY29ydGVMYWJlbChmKX1cbiAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLWhpbnRcIj5cbiAgICAgICAgICAgICAgICBFc2NvbGhhIHVtYSBjb2x1bmEgZGEgdGFiZWxhIChleC46IENlcnJhZG8sIEFtYXrDtG5pYSBsZWdhbCwgUGFudGFuYWwpLlxuICAgICAgICAgICAgICAgIE9zIGFub3MgZXhpYmlkb3MgbmEgd2lkZ2V0IHPDo28gZGV0ZWN0YWRvcyBhdXRvbWF0aWNhbWVudGUgYSBwYXJ0aXIgZG9zXG4gICAgICAgICAgICAgICAgZGFkb3MgZGlzcG9uw612ZWlzIHBhcmEgbyByZWNvcnRlIHNlbGVjaW9uYWRvLlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICAgICAgKX1cbiAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ1xuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==