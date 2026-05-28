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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9kaXN0L3NldHRpbmcvc2V0dGluZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlrQjtBQU9YLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxNQUF5QixFQUFXLEVBQUUsQ0FDdEUsTUFBTSxLQUFLLHVEQUFnQixDQUFDLE1BQU07SUFDbEMsTUFBTSxLQUFLLHVEQUFnQixDQUFDLFFBQVE7SUFDcEMsTUFBTSxLQUFLLHVEQUFnQixDQUFDLFFBQVE7QUFFL0IsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLEVBQXFCLEVBQXFCLEVBQUU7O0lBQzVFLElBQUksQ0FBQyxFQUFFO1FBQUUsT0FBTyxJQUFJO0lBQ3BCLE1BQU0sSUFBSSxHQUFHLFlBQUMsRUFBeUIsRUFBQyxpQkFBaUIsa0RBQUk7SUFDN0QsT0FBTyxJQUFJLGFBQUosSUFBSSxjQUFKLElBQUksR0FBSSxFQUFFO0FBQ25CLENBQUM7QUFFRCwwRkFBMEY7QUFDbkYsTUFBTSxzQkFBc0IsR0FBRyxDQUFDLEVBQXFCLEVBQXFCLEVBQUU7SUFDakYsSUFBSSxDQUFDLEVBQUU7UUFBRSxPQUFPLElBQUk7SUFDcEIsTUFBTSxDQUFDLEdBQUcsRUFJVDtJQUNELElBQ0UsT0FBTyxDQUFDLENBQUMsS0FBSyxLQUFLLFVBQVU7UUFDN0IsT0FBTyxDQUFDLENBQUMsSUFBSSxLQUFLLFVBQVU7UUFDNUIsT0FBTyxDQUFDLENBQUMsT0FBTyxLQUFLLFVBQVUsRUFDL0IsQ0FBQztRQUNELE9BQU8sRUFBRTtJQUNYLENBQUM7SUFDRCxPQUFPLGlCQUFpQixDQUFDLEVBQUUsQ0FBQztBQUM5QixDQUFDO0FBRU0sU0FBZSxzQkFBc0IsQ0FDMUMsRUFBYzs7UUFFZCxNQUFNLFFBQVEsR0FBRyxtQkFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDeEMsSUFBSSxTQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFR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LGlOQUl2QixDQUNGLENBQ0ssQ0FDZCxDQUNjLENBQ2IsQ0FDUDtBQUNILENBQUM7QUFFRCxpRUFBZSxPQUFPO0FBRWQsU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY29tcGFyYWRvcl9wcm9kZXMvc3JjL3V0aWxzL2RhdGEtc291cmNlLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb21wYXJhZG9yX3Byb2Rlcy9zcmMvdXRpbHMvcHJvZGVzLXRhYmxlLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL2RhdGEtc291cmNlLXNlbGVjdG9yXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50c1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY29tcGFyYWRvcl9wcm9kZXMvc3JjL3NldHRpbmcvc2V0dGluZy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgdHlwZSBEYXRhU291cmNlLFxuICB0eXBlIElNRGF0YVNvdXJjZVNjaGVtYSxcbiAgRGF0YVNvdXJjZVN0YXR1c1xufSBmcm9tICdqaW11LWNvcmUnXG5cbnR5cGUgRGF0YVNvdXJjZVdpdGhNYWluID0gRGF0YVNvdXJjZSAmIHtcbiAgZ2V0TWFpbkRhdGFTb3VyY2U/OiAoKSA9PiBEYXRhU291cmNlXG4gIGdldFNjaGVtYT86ICgpID0+IElNRGF0YVNvdXJjZVNjaGVtYVxufVxuXG5leHBvcnQgY29uc3QgaXNRdWVyeWFibGVTdGF0dXMgPSAoc3RhdHVzPzogRGF0YVNvdXJjZVN0YXR1cyk6IGJvb2xlYW4gPT5cbiAgc3RhdHVzID09PSBEYXRhU291cmNlU3RhdHVzLkxvYWRlZCB8fFxuICBzdGF0dXMgPT09IERhdGFTb3VyY2VTdGF0dXMuVW5sb2FkZWQgfHxcbiAgc3RhdHVzID09PSBEYXRhU291cmNlU3RhdHVzLk5vdFJlYWR5XG5cbmV4cG9ydCBjb25zdCBnZXRNYWluRGF0YVNvdXJjZSA9IChkczogRGF0YVNvdXJjZSB8IG51bGwpOiBEYXRhU291cmNlIHwgbnVsbCA9PiB7XG4gIGlmICghZHMpIHJldHVybiBudWxsXG4gIGNvbnN0IG1haW4gPSAoZHMgYXMgRGF0YVNvdXJjZVdpdGhNYWluKS5nZXRNYWluRGF0YVNvdXJjZT8uKClcbiAgcmV0dXJuIG1haW4gPz8gZHNcbn1cblxuLyoqIFVzYSBhIGluc3TDom5jaWEgZGEgY2FtYWRhIHNlbGVjaW9uYWRhIChleC46IFBsYW5pbGhhMSkgcXVhbmRvIGVsYSBqw6Egw6kgY29uc3VsdMOhdmVsLiAqL1xuZXhwb3J0IGNvbnN0IGdldFF1ZXJ5YWJsZURhdGFTb3VyY2UgPSAoZHM6IERhdGFTb3VyY2UgfCBudWxsKTogRGF0YVNvdXJjZSB8IG51bGwgPT4ge1xuICBpZiAoIWRzKSByZXR1cm4gbnVsbFxuICBjb25zdCBxID0gZHMgYXMgRGF0YVNvdXJjZVdpdGhNYWluICYge1xuICAgIHF1ZXJ5PzogKHA6IG9iamVjdCkgPT4gUHJvbWlzZTx1bmtub3duPlxuICAgIGxvYWQ/OiAocDogb2JqZWN0KSA9PiBQcm9taXNlPHVua25vd24+XG4gICAgbG9hZEFsbD86IChwOiBvYmplY3QpID0+IFByb21pc2U8dW5rbm93bj5cbiAgfVxuICBpZiAoXG4gICAgdHlwZW9mIHEucXVlcnkgPT09ICdmdW5jdGlvbicgfHxcbiAgICB0eXBlb2YgcS5sb2FkID09PSAnZnVuY3Rpb24nIHx8XG4gICAgdHlwZW9mIHEubG9hZEFsbCA9PT0gJ2Z1bmN0aW9uJ1xuICApIHtcbiAgICByZXR1cm4gZHNcbiAgfVxuICByZXR1cm4gZ2V0TWFpbkRhdGFTb3VyY2UoZHMpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlbnN1cmVEYXRhU291cmNlU2NoZW1hIChcbiAgZHM6IERhdGFTb3VyY2Vcbik6IFByb21pc2U8SU1EYXRhU291cmNlU2NoZW1hIHwgdW5kZWZpbmVkPiB7XG4gIGNvbnN0IGV4aXN0aW5nID0gZ2V0RGF0YVNvdXJjZVNjaGVtYShkcylcbiAgaWYgKGV4aXN0aW5nPy5maWVsZHMgJiYgT2JqZWN0LmtleXMoZXhpc3RpbmcuZmllbGRzKS5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIGV4aXN0aW5nXG4gIH1cbiAgY29uc3QgZmV0Y2hTY2hlbWEgPSAoZHMgYXMgRGF0YVNvdXJjZVdpdGhNYWluICYge1xuICAgIGZldGNoU2NoZW1hPzogKCkgPT4gUHJvbWlzZTxJTURhdGFTb3VyY2VTY2hlbWE+XG4gIH0pLmZldGNoU2NoZW1hXG4gIGlmICh0eXBlb2YgZmV0Y2hTY2hlbWEgPT09ICdmdW5jdGlvbicpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGF3YWl0IGZldGNoU2NoZW1hLmNhbGwoZHMpXG4gICAgfSBjYXRjaCB7XG4gICAgICByZXR1cm4gZXhpc3RpbmdcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGV4aXN0aW5nXG59XG5cbmV4cG9ydCBjb25zdCBnZXREYXRhU291cmNlU2NoZW1hID0gKFxuICBkczogRGF0YVNvdXJjZVxuKTogSU1EYXRhU291cmNlU2NoZW1hIHwgdW5kZWZpbmVkID0+XG4gIChkcyBhcyBEYXRhU291cmNlV2l0aE1haW4pLmdldFNjaGVtYT8uKClcbiIsImltcG9ydCB7XG4gIHR5cGUgSU1GaWVsZFNjaGVtYSxcbiAgdHlwZSBJTURhdGFTb3VyY2VTY2hlbWEsXG4gIEppbXVGaWVsZFR5cGUsXG4gIEVzcmlGaWVsZFR5cGUsXG4gIFF1ZXJ5U2NvcGUsXG4gIHR5cGUgRGF0YVJlY29yZFxufSBmcm9tICdqaW11LWNvcmUnXG5cbmV4cG9ydCBpbnRlcmZhY2UgWWVhclZhbHVlUm93IHtcbiAgeWVhcjogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaWVsZEF0dHJpYnV0ZUtleXMge1xuICB5ZWFyS2V5OiBzdHJpbmdcbiAgcmVjb3J0ZUtleTogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1lFQVJfRklFTEQgPSAnYW5vJ1xuXG5jb25zdCBZRUFSX05BTUVfUEFUVEVSTlMgPSBbJ2FubycsICd5ZWFyJywgJ3lyJywgJ2V4ZXJjaWNpbycsICdleGVyY8OtY2lvJ11cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHlDZWxsICh2YWx1ZTogdW5rbm93bik6IGJvb2xlYW4ge1xuICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIHRydWVcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUudHJpbSgpID09PSAnJykgcmV0dXJuIHRydWVcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgTnVtYmVyLmlzTmFOKHZhbHVlKSkgcmV0dXJuIHRydWVcbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU51bWVyaWNWYWx1ZSAodmFsdWU6IHVua25vd24pOiBudW1iZXIgfCBudWxsIHtcbiAgaWYgKGlzRW1wdHlDZWxsKHZhbHVlKSkgcmV0dXJuIG51bGxcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgTnVtYmVyLmlzRmluaXRlKHZhbHVlKSkgcmV0dXJuIHZhbHVlXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgcyA9IHZhbHVlLnRyaW0oKVxuICAgIGlmICghcykgcmV0dXJuIG51bGxcbiAgICBpZiAocy5pbmNsdWRlcygnLCcpKSB7XG4gICAgICBjb25zdCBub3JtYWxpemVkID0gcy5yZXBsYWNlKC9cXC4vZywgJycpLnJlcGxhY2UoJywnLCAnLicpXG4gICAgICBjb25zdCBuID0gTnVtYmVyKG5vcm1hbGl6ZWQpXG4gICAgICByZXR1cm4gTnVtYmVyLmlzRmluaXRlKG4pID8gbiA6IG51bGxcbiAgICB9XG4gICAgY29uc3QgbiA9IE51bWJlcihzKVxuICAgIHJldHVybiBOdW1iZXIuaXNGaW5pdGUobikgPyBuIDogbnVsbFxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbi8qKiBDb252ZXJ0ZSBuw7ptZXJvIGV4aWJpZG8gbm8gQXJjR0lTIGVtIHB0LUJSIChleC46IDIuMDAxIOKGkiAyMDAxKS4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZVllYXJOdW1iZXIgKG46IG51bWJlcik6IG51bWJlciB8IG51bGwge1xuICBpZiAoIU51bWJlci5pc0Zpbml0ZShuKSkgcmV0dXJuIG51bGxcblxuICBpZiAobiA+PSAxOTg1ICYmIG4gPD0gMjAzNSAmJiBNYXRoLmFicyhuIC0gTWF0aC5yb3VuZChuKSkgPCAwLjAwMSkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG4pXG4gIH1cblxuICAvLyBUYWJlbGEgUFJPREVTIG5vIFBvcnRhbDogY29sdW5hIEFubyBjb21vIDIuMDAxLCAyLjAxMSAobWlsaGFyIGNvbSBwb250bylcbiAgaWYgKG4gPj0gMS45ODUgJiYgbiA8PSAyLjAzNSkge1xuICAgIGNvbnN0IHkgPSBNYXRoLnJvdW5kKG4gKiAxMDAwKVxuICAgIGlmICh5ID49IDE5ODUgJiYgeSA8PSAyMDM1KSByZXR1cm4geVxuICB9XG5cbiAgY29uc3QgdHJ1bmNhdGVkID0gTWF0aC50cnVuYyhuKVxuICBpZiAodHJ1bmNhdGVkID49IDE5ODUgJiYgdHJ1bmNhdGVkIDw9IDIwMzUpIHJldHVybiB0cnVuY2F0ZWRcbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlWWVhciAodmFsdWU6IHVua25vd24pOiBudW1iZXIgfCBudWxsIHtcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSAmJiAhTnVtYmVyLmlzTmFOKHZhbHVlLmdldFRpbWUoKSkpIHtcbiAgICByZXR1cm4gdmFsdWUuZ2V0RnVsbFllYXIoKVxuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gbm9ybWFsaXplWWVhck51bWJlcih2YWx1ZSlcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IHMgPSB2YWx1ZS50cmltKClcbiAgICBpZiAoIXMpIHJldHVybiBudWxsXG5cbiAgICBjb25zdCBiclRob3VzYW5kcyA9IHMubWF0Y2goL14oXFxkezEsMn0pXFwuKFxcZHszfSkkLylcbiAgICBpZiAoYnJUaG91c2FuZHMpIHtcbiAgICAgIGNvbnN0IHkgPSBOdW1iZXIoYnJUaG91c2FuZHNbMV0gKyBiclRob3VzYW5kc1syXSlcbiAgICAgIGlmICh5ID49IDE5ODUgJiYgeSA8PSAyMDM1KSByZXR1cm4geVxuICAgIH1cblxuICAgIGNvbnN0IG4gPSBOdW1iZXIocy5yZXBsYWNlKCcsJywgJy4nKSlcbiAgICBpZiAoTnVtYmVyLmlzRmluaXRlKG4pKSByZXR1cm4gbm9ybWFsaXplWWVhck51bWJlcihuKVxuXG4gICAgY29uc3QgbSA9IHMubWF0Y2goL1xcYigxOXwyMClcXGR7Mn1cXGIvKVxuICAgIGlmIChtKSByZXR1cm4gTnVtYmVyKG1bMF0pXG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNjaGVtYVRvRmllbGRMaXN0IChzY2hlbWE/OiBJTURhdGFTb3VyY2VTY2hlbWEgfCBudWxsKTogSU1GaWVsZFNjaGVtYVtdIHtcbiAgaWYgKCFzY2hlbWE/LmZpZWxkcykgcmV0dXJuIFtdXG4gIHJldHVybiBPYmplY3Qua2V5cyhzY2hlbWEuZmllbGRzKS5tYXAoKGtleSkgPT4gc2NoZW1hLmZpZWxkc1trZXldKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1lcmljUmVjb3J0ZUZpZWxkIChmaWVsZDogSU1GaWVsZFNjaGVtYSk6IGJvb2xlYW4ge1xuICBpZiAoZmllbGQudHlwZSA9PT0gSmltdUZpZWxkVHlwZS5OdW1iZXIpIHJldHVybiB0cnVlXG4gIGNvbnN0IGVzcmkgPSBmaWVsZC5lc3JpVHlwZVxuICByZXR1cm4gKFxuICAgIGVzcmkgPT09IEVzcmlGaWVsZFR5cGUuRG91YmxlIHx8XG4gICAgZXNyaSA9PT0gRXNyaUZpZWxkVHlwZS5TaW5nbGUgfHxcbiAgICBlc3JpID09PSBFc3JpRmllbGRUeXBlLkludGVnZXIgfHxcbiAgICBlc3JpID09PSBFc3JpRmllbGRUeXBlLlNtYWxsSW50ZWdlclxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVLZXkgKGZpZWxkOiBJTUZpZWxkU2NoZW1hKTogc3RyaW5nIHtcbiAgcmV0dXJuIGZpZWxkLm5hbWUgfHwgZmllbGQuamltdU5hbWVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRldGVjdFllYXJGaWVsZCAoZmllbGRzOiBJTUZpZWxkU2NoZW1hW10pOiBzdHJpbmcgfCBudWxsIHtcbiAgY29uc3QgZXhhY3RBbm8gPSBmaWVsZHMuZmluZChcbiAgICAoZikgPT5cbiAgICAgIGYuamltdU5hbWU/LnRvTG93ZXJDYXNlKCkgPT09ICdhbm8nIHx8XG4gICAgICBmLm5hbWU/LnRvTG93ZXJDYXNlKCkgPT09ICdhbm8nIHx8XG4gICAgICBmLmFsaWFzPy50b0xvd2VyQ2FzZSgpID09PSAnYW5vJ1xuICApXG4gIGlmIChleGFjdEFubykgcmV0dXJuIGV4YWN0QW5vLmppbXVOYW1lXG5cbiAgY29uc3QgY2FuZGlkYXRlcyA9IGZpZWxkcy5maWx0ZXIoXG4gICAgKGYpID0+IGYudHlwZSA9PT0gSmltdUZpZWxkVHlwZS5OdW1iZXIgfHwgZi50eXBlID09PSBKaW11RmllbGRUeXBlLlN0cmluZ1xuICApXG4gIGZvciAoY29uc3QgcGF0IG9mIFlFQVJfTkFNRV9QQVRURVJOUykge1xuICAgIGNvbnN0IGZvdW5kID0gY2FuZGlkYXRlcy5maW5kKFxuICAgICAgKGYpID0+XG4gICAgICAgIGYuamltdU5hbWU/LnRvTG93ZXJDYXNlKCkgPT09IHBhdCB8fFxuICAgICAgICBmLm5hbWU/LnRvTG93ZXJDYXNlKCkgPT09IHBhdCB8fFxuICAgICAgICBmLmFsaWFzPy50b0xvd2VyQ2FzZSgpID09PSBwYXRcbiAgICApXG4gICAgaWYgKGZvdW5kKSByZXR1cm4gZm91bmQuamltdU5hbWVcbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UmVjb3J0ZUxhYmVsIChmaWVsZDogSU1GaWVsZFNjaGVtYSk6IHN0cmluZyB7XG4gIHJldHVybiBmb3JtYXRSZWNvcnRlTGFiZWxGcm9tTmFtZShmaWVsZC5qaW11TmFtZSwgZmllbGQuYWxpYXMpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRSZWNvcnRlTGFiZWxGcm9tTmFtZSAoamltdU5hbWU6IHN0cmluZywgYWxpYXM/OiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoYWxpYXM/LnRyaW0oKSkgcmV0dXJuIGFsaWFzLnRyaW0oKVxuICByZXR1cm4gamltdU5hbWVcbiAgICAuc3BsaXQoJ18nKVxuICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAubWFwKCh3KSA9PiB3LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdy5zbGljZSgxKS50b0xvd2VyQ2FzZSgpKVxuICAgIC5qb2luKCcgJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN5c3RlbUhpZGRlbkZpZWxkTmFtZXMgKGZpZWxkczogSU1GaWVsZFNjaGVtYVtdKTogc3RyaW5nW10ge1xuICByZXR1cm4gZmllbGRzXG4gICAgLmZpbHRlcigoZikgPT4ge1xuICAgICAgY29uc3QgZXNyaSA9IGYuZXNyaVR5cGVcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGVzcmkgPT09IEVzcmlGaWVsZFR5cGUuT0lEIHx8XG4gICAgICAgIGVzcmkgPT09IEVzcmlGaWVsZFR5cGUuR2VvbWV0cnkgfHxcbiAgICAgICAgZXNyaSA9PT0gRXNyaUZpZWxkVHlwZS5HbG9iYWxJRCB8fFxuICAgICAgICBlc3JpID09PSBFc3JpRmllbGRUeXBlLkdVSURcbiAgICAgIClcbiAgICB9KVxuICAgIC5tYXAoKGYpID0+IGYuamltdU5hbWUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWNvcnRlSGlkZGVuRmllbGROYW1lcyAoXG4gIGZpZWxkczogSU1GaWVsZFNjaGVtYVtdLFxuICB5ZWFyRmllbGQ/OiBzdHJpbmdcbik6IHN0cmluZ1tdIHtcbiAgY29uc3QgaGlkZGVuID0gZ2V0U3lzdGVtSGlkZGVuRmllbGROYW1lcyhmaWVsZHMpXG4gIGlmICh5ZWFyRmllbGQgJiYgIWhpZGRlbi5pbmNsdWRlcyh5ZWFyRmllbGQpKSB7XG4gICAgaGlkZGVuLnB1c2goeWVhckZpZWxkKVxuICB9XG4gIHJldHVybiBoaWRkZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlY29ydGVDYW5kaWRhdGVGaWVsZHMgKFxuICBmaWVsZHM6IElNRmllbGRTY2hlbWFbXSxcbiAgeWVhckZpZWxkPzogc3RyaW5nXG4pOiBJTUZpZWxkU2NoZW1hW10ge1xuICBjb25zdCBoaWRkZW4gPSBuZXcgU2V0KGdldFJlY29ydGVIaWRkZW5GaWVsZE5hbWVzKGZpZWxkcywgeWVhckZpZWxkKSlcbiAgcmV0dXJuIGZpZWxkc1xuICAgIC5maWx0ZXIoKGYpID0+IGlzTnVtZXJpY1JlY29ydGVGaWVsZChmKSAmJiAhaGlkZGVuLmhhcyhmLmppbXVOYW1lKSlcbiAgICAuc29ydCgoYSwgYikgPT5cbiAgICAgIGZvcm1hdFJlY29ydGVMYWJlbChhKS5sb2NhbGVDb21wYXJlKGZvcm1hdFJlY29ydGVMYWJlbChiKSwgJ3B0LUJSJylcbiAgICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kRmllbGRCeUppbXVOYW1lIChcbiAgZmllbGRzOiBJTUZpZWxkU2NoZW1hW10sXG4gIGppbXVOYW1lPzogc3RyaW5nXG4pOiBJTUZpZWxkU2NoZW1hIHwgbnVsbCB7XG4gIGlmICghamltdU5hbWUpIHJldHVybiBudWxsXG4gIGNvbnN0IGV4YWN0ID0gZmllbGRzLmZpbmQoKGYpID0+IGYuamltdU5hbWUgPT09IGppbXVOYW1lKVxuICBpZiAoZXhhY3QpIHJldHVybiBleGFjdFxuICBjb25zdCBsb3dlciA9IGppbXVOYW1lLnRvTG93ZXJDYXNlKClcbiAgcmV0dXJuIChcbiAgICBmaWVsZHMuZmluZChcbiAgICAgIChmKSA9PlxuICAgICAgICBmLmppbXVOYW1lPy50b0xvd2VyQ2FzZSgpID09PSBsb3dlciB8fFxuICAgICAgICBmLm5hbWU/LnRvTG93ZXJDYXNlKCkgPT09IGxvd2VyIHx8XG4gICAgICAgIGYuYWxpYXM/LnRvTG93ZXJDYXNlKCkgPT09IGxvd2VyXG4gICAgKSA/PyBudWxsXG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVBdHRyaWJ1dGVLZXlzIChcbiAgZmllbGRzOiBJTUZpZWxkU2NoZW1hW10sXG4gIHllYXJGaWVsZEppbXU/OiBzdHJpbmcsXG4gIHJlY29ydGVGaWVsZEppbXU/OiBzdHJpbmdcbik6IEZpZWxkQXR0cmlidXRlS2V5cyB8IG51bGwge1xuICBpZiAoIXllYXJGaWVsZEppbXUgfHwgIXJlY29ydGVGaWVsZEppbXUpIHJldHVybiBudWxsXG5cbiAgY29uc3QgeWVhckZpZWxkID0gZmluZEZpZWxkQnlKaW11TmFtZShmaWVsZHMsIHllYXJGaWVsZEppbXUpXG4gIGNvbnN0IHJlY29ydGVGaWVsZCA9IGZpbmRGaWVsZEJ5SmltdU5hbWUoZmllbGRzLCByZWNvcnRlRmllbGRKaW11KVxuXG4gIHJldHVybiB7XG4gICAgeWVhcktleTogeWVhckZpZWxkID8gZ2V0QXR0cmlidXRlS2V5KHllYXJGaWVsZCkgOiB5ZWFyRmllbGRKaW11LFxuICAgIHJlY29ydGVLZXk6IHJlY29ydGVGaWVsZCA/IGdldEF0dHJpYnV0ZUtleShyZWNvcnRlRmllbGQpIDogcmVjb3J0ZUZpZWxkSmltdVxuICB9XG59XG5cbnR5cGUgUmVjb3JkTGlrZSA9XG4gIHwgRGF0YVJlY29yZFxuICB8IHtcbiAgICAgIGF0dHJpYnV0ZXM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICAgICAgZmVhdHVyZT86IHsgYXR0cmlidXRlcz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+IH1cbiAgICAgIGdldERhdGE/OiAoKSA9PiB7XG4gICAgICAgIGF0dHJpYnV0ZXM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICAgICAgICBmZWF0dXJlPzogeyBhdHRyaWJ1dGVzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfVxuICAgICAgfVxuICAgICAgZ2V0RmllbGRWYWx1ZT86IChqaW11RmllbGROYW1lOiBzdHJpbmcpID0+IHVua25vd25cbiAgICAgIGdldERhdGVGaWVsZFZhbHVlPzogKGppbXVGaWVsZE5hbWU6IHN0cmluZykgPT4gdW5rbm93blxuICAgICAgZ2V0RGF0YUJlZm9yZU1hcHBpbmc/OiAoKSA9PiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICAgIH1cblxuZnVuY3Rpb24gdG9QbGFpbk9iamVjdCAodmFsdWU6IHVua25vd24pOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB7XG4gIGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JykgcmV0dXJuIHt9XG4gIGNvbnN0IHYgPSB2YWx1ZSBhcyB7XG4gICAgdG9KUz86ICgpID0+IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gICAgYXNNdXRhYmxlPzogKG9wdHM/OiB7IGRlZXA6IGJvb2xlYW4gfSkgPT4gUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgfVxuICBpZiAodHlwZW9mIHYudG9KUyA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHYudG9KUygpXG4gIGlmICh0eXBlb2Ygdi5hc011dGFibGUgPT09ICdmdW5jdGlvbicpIHJldHVybiB2LmFzTXV0YWJsZSh7IGRlZXA6IHRydWUgfSlcbiAgcmV0dXJuIHZhbHVlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+XG59XG5cbmNvbnN0IEdFVF9EQVRBX01FVEFfS0VZUyA9IG5ldyBTZXQoW1xuICAnYXR0cmlidXRlcycsXG4gICdmZWF0dXJlJyxcbiAgJ2dlb21ldHJ5JyxcbiAgJ2NlbnRyb2lkJyxcbiAgJ2FnZ3JlZ2F0ZUdlb21ldHJpZXMnLFxuICAnc3ltYm9sJ1xuXSlcblxuLyoqIEV4dHJhaSBvIGRpY2lvbsOhcmlvIGRlIGF0cmlidXRvcyBkZSB1bSByZWdpc3RybyAodsOhcmlvcyBmb3JtYXRvcyBkbyBKaW11L0FyY0dJUykuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGxhaW5BdHRyaWJ1dGVzIChyZWM6IFJlY29yZExpa2UpOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB7XG4gIGNvbnN0IG1lcmdlZDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fVxuXG4gIGNvbnN0IG1lcmdlID0gKGF0dHJzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pID0+IHtcbiAgICBpZiAoIWF0dHJzKSByZXR1cm5cbiAgICBPYmplY3QuYXNzaWduKG1lcmdlZCwgdG9QbGFpbk9iamVjdChhdHRycykpXG4gIH1cblxuICBpZiAoJ2dldERhdGEnIGluIHJlYyAmJiB0eXBlb2YgcmVjLmdldERhdGEgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCBkYXRhID0gcmVjLmdldERhdGEoKVxuICAgIGNvbnN0IHBsYWluID0gdG9QbGFpbk9iamVjdChkYXRhKVxuICAgIG1lcmdlKHBsYWluLmF0dHJpYnV0ZXMgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCB1bmRlZmluZWQpXG4gICAgbWVyZ2UocGxhaW4uZmVhdHVyZT8uYXR0cmlidXRlcyBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IHVuZGVmaW5lZClcbiAgICAvLyBKaW11IERhdGFSZWNvcmQ6IGdldERhdGEoKSBjb3N0dW1hIHNlciBtYXBhIHBsYW5vIHsgamltdUZpZWxkTmFtZTogdmFsb3IgfVxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHBsYWluKSkge1xuICAgICAgaWYgKEdFVF9EQVRBX01FVEFfS0VZUy5oYXMoa2V5KSkgY29udGludWVcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSBtZXJnZWRba2V5XSA9IHZhbHVlXG4gICAgfVxuICB9XG5cbiAgaWYgKCdmZWF0dXJlJyBpbiByZWMgJiYgcmVjLmZlYXR1cmU/LmF0dHJpYnV0ZXMpIHtcbiAgICBtZXJnZShyZWMuZmVhdHVyZS5hdHRyaWJ1dGVzKVxuICB9XG5cbiAgaWYgKCdhdHRyaWJ1dGVzJyBpbiByZWMgJiYgcmVjLmF0dHJpYnV0ZXMpIHtcbiAgICBtZXJnZShyZWMuYXR0cmlidXRlcylcbiAgfVxuXG4gIGlmICgnZ2V0RGF0YUJlZm9yZU1hcHBpbmcnIGluIHJlYyAmJiB0eXBlb2YgcmVjLmdldERhdGFCZWZvcmVNYXBwaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgbWVyZ2UocmVjLmdldERhdGFCZWZvcmVNYXBwaW5nKCkpXG4gIH1cblxuICByZXR1cm4gbWVyZ2VkXG59XG5cbmZ1bmN0aW9uIGF0dHJpYnV0ZUhhc1VzYWJsZVZhbHVlICh2YWx1ZTogdW5rbm93bik6IGJvb2xlYW4ge1xuICBpZiAoaXNFbXB0eUNlbGwodmFsdWUpKSByZXR1cm4gZmFsc2VcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHJldHVybiBmYWxzZVxuICByZXR1cm4gdHJ1ZVxufVxuXG4vKiogVmVyaWZpY2Egc2UgbyByZWdpc3RybyBleHDDtWUgYXRyaWJ1dG9zIG91IGdldEZpZWxkVmFsdWUgY29tIGRhZG9zIHJlYWlzIChuw6NvIHPDsyBtw6l0b2RvIHZhemlvKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWNvcmRIYXNSZWFkYWJsZURhdGEgKHJlYzogUmVjb3JkTGlrZSk6IGJvb2xlYW4ge1xuICBjb25zdCBhdHRycyA9IGdldFBsYWluQXR0cmlidXRlcyhyZWMpXG4gIGNvbnN0IHVzYWJsZUtleXMgPSBPYmplY3Qua2V5cyhhdHRycykuZmlsdGVyKChrZXkpID0+IHtcbiAgICBpZiAoL14ob2JqZWN0aWR8Z2xvYmFsaWR8c2hhcGV8Z2VvbWV0cnkpJC9pLnRlc3Qoa2V5KSkgcmV0dXJuIGZhbHNlXG4gICAgcmV0dXJuIGF0dHJpYnV0ZUhhc1VzYWJsZVZhbHVlKGF0dHJzW2tleV0pXG4gIH0pXG4gIGlmICh1c2FibGVLZXlzLmxlbmd0aCA+IDApIHJldHVybiB0cnVlXG5cbiAgaWYgKCdnZXRGaWVsZFZhbHVlJyBpbiByZWMgJiYgdHlwZW9mIHJlYy5nZXRGaWVsZFZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3QgcHJvYmVzID0gW1xuICAgICAgJ2FubycsXG4gICAgICAneWVhcicsXG4gICAgICAnQU5PJyxcbiAgICAgICdZZWFyJyxcbiAgICAgICdleGVyY2ljaW8nLFxuICAgICAgJ0V4ZXJjaWNpbydcbiAgICBdXG4gICAgZm9yIChjb25zdCBuYW1lIG9mIHByb2Jlcykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdiA9IHJlYy5nZXRGaWVsZFZhbHVlIShuYW1lKVxuICAgICAgICBpZiAoYXR0cmlidXRlSGFzVXNhYmxlVmFsdWUodikpIHJldHVybiB0cnVlXG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgLy8gdGVudGEgcHLDs3hpbW9cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuLyoqIEzDqiB2YWxvciBwZWxvIEFQSSBkbyBKaW11IChgZ2V0RmllbGRWYWx1ZWApIGUsIGVtIHNlZ3VpZGEsIHBlbG9zIGF0cmlidXRvcyBicnV0b3MuICovXG5leHBvcnQgZnVuY3Rpb24gcmVhZFJlY29yZFZhbHVlIChcbiAgcmVjOiBSZWNvcmRMaWtlLFxuICBmaWVsZD86IElNRmllbGRTY2hlbWEgfCBudWxsLFxuICBmYWxsYmFja0ppbXVOYW1lPzogc3RyaW5nXG4pOiB1bmtub3duIHtcbiAgY29uc3QgbmFtZXM6IHN0cmluZ1tdID0gW11cbiAgaWYgKGZpZWxkPy5qaW11TmFtZSkgbmFtZXMucHVzaChmaWVsZC5qaW11TmFtZSlcbiAgaWYgKGZhbGxiYWNrSmltdU5hbWUpIG5hbWVzLnB1c2goZmFsbGJhY2tKaW11TmFtZSlcbiAgaWYgKGZpZWxkPy5uYW1lKSBuYW1lcy5wdXNoKGZpZWxkLm5hbWUpXG4gIGlmIChmaWVsZD8uYWxpYXMpIG5hbWVzLnB1c2goZmllbGQuYWxpYXMpXG4gIGlmIChmaWVsZCkgbmFtZXMucHVzaChnZXRBdHRyaWJ1dGVLZXkoZmllbGQpKVxuXG4gIGNvbnN0IHVuaXF1ZU5hbWVzID0gWy4uLm5ldyBTZXQobmFtZXMuZmlsdGVyKEJvb2xlYW4pKV1cblxuICBpZiAoJ2dldEZpZWxkVmFsdWUnIGluIHJlYyAmJiB0eXBlb2YgcmVjLmdldEZpZWxkVmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3IgKGNvbnN0IG5hbWUgb2YgdW5pcXVlTmFtZXMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHYgPSByZWMuZ2V0RmllbGRWYWx1ZSEobmFtZSlcbiAgICAgICAgaWYgKHYgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHZcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAvLyB0ZW50YSBwcsOzeGltbyBub21lXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKFxuICAgIGZpZWxkPy5qaW11TmFtZSAmJlxuICAgICdnZXREYXRlRmllbGRWYWx1ZScgaW4gcmVjICYmXG4gICAgdHlwZW9mIHJlYy5nZXREYXRlRmllbGRWYWx1ZSA9PT0gJ2Z1bmN0aW9uJ1xuICApIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdiA9IHJlYy5nZXREYXRlRmllbGRWYWx1ZSEoZmllbGQuamltdU5hbWUpXG4gICAgICBpZiAodiAhPT0gdW5kZWZpbmVkKSByZXR1cm4gdlxuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gaWdub3JhXG4gICAgfVxuICB9XG5cbiAgY29uc3QgYXR0cnMgPSBnZXRQbGFpbkF0dHJpYnV0ZXMocmVjKVxuICBjb25zdCBmcm9tTWFwcGVkID0gcmVhZEF0dHJpYnV0ZUZsZXhpYmxlKGF0dHJzLCBmaWVsZCwgZmFsbGJhY2tKaW11TmFtZSlcbiAgaWYgKGZyb21NYXBwZWQgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGZyb21NYXBwZWRcblxuICBpZiAoJ2dldERhdGFCZWZvcmVNYXBwaW5nJyBpbiByZWMgJiYgdHlwZW9mIHJlYy5nZXREYXRhQmVmb3JlTWFwcGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IHJhdyA9IHRvUGxhaW5PYmplY3QocmVjLmdldERhdGFCZWZvcmVNYXBwaW5nKCkpXG4gICAgcmV0dXJuIHJlYWRBdHRyaWJ1dGVGbGV4aWJsZShyYXcsIGZpZWxkLCBmYWxsYmFja0ppbXVOYW1lKVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiByZWFkQXR0cmlidXRlIChcbiAgYXR0cnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuICBwcmltYXJ5S2V5OiBzdHJpbmcsXG4gIGZhbGxiYWNrS2V5Pzogc3RyaW5nXG4pOiB1bmtub3duIHtcbiAgaWYgKHByaW1hcnlLZXkgaW4gYXR0cnMpIHJldHVybiBhdHRyc1twcmltYXJ5S2V5XVxuICBpZiAoZmFsbGJhY2tLZXkgJiYgZmFsbGJhY2tLZXkgIT09IHByaW1hcnlLZXkgJiYgZmFsbGJhY2tLZXkgaW4gYXR0cnMpIHtcbiAgICByZXR1cm4gYXR0cnNbZmFsbGJhY2tLZXldXG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG4vKiogVGVudGEgamltdU5hbWUsIG5hbWUsIGFsaWFzIGUgY29ycmVzcG9uZMOqbmNpYSBzZW0gZGlmZXJlbmNpYXIgbWFpw7pzY3VsYXMvbWluw7pzY3VsYXMuICovXG5leHBvcnQgZnVuY3Rpb24gcmVhZEF0dHJpYnV0ZUZsZXhpYmxlIChcbiAgYXR0cnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuICBmaWVsZD86IElNRmllbGRTY2hlbWEgfCBudWxsLFxuICBmYWxsYmFja0ppbXVOYW1lPzogc3RyaW5nXG4pOiB1bmtub3duIHtcbiAgY29uc3QgY2FuZGlkYXRlcyA9IG5ldyBTZXQ8c3RyaW5nPigpXG4gIGlmIChmaWVsZCkge1xuICAgIGlmIChmaWVsZC5qaW11TmFtZSkgY2FuZGlkYXRlcy5hZGQoZmllbGQuamltdU5hbWUpXG4gICAgaWYgKGZpZWxkLm5hbWUpIGNhbmRpZGF0ZXMuYWRkKGZpZWxkLm5hbWUpXG4gICAgaWYgKGZpZWxkLmFsaWFzKSBjYW5kaWRhdGVzLmFkZChmaWVsZC5hbGlhcylcbiAgICBjYW5kaWRhdGVzLmFkZChnZXRBdHRyaWJ1dGVLZXkoZmllbGQpKVxuICB9XG4gIGlmIChmYWxsYmFja0ppbXVOYW1lKSBjYW5kaWRhdGVzLmFkZChmYWxsYmFja0ppbXVOYW1lKVxuXG4gIGZvciAoY29uc3Qga2V5IG9mIGNhbmRpZGF0ZXMpIHtcbiAgICBjb25zdCB2ID0gcmVhZEF0dHJpYnV0ZShhdHRycywga2V5KVxuICAgIGlmICh2ICE9PSB1bmRlZmluZWQpIHJldHVybiB2XG4gIH1cblxuICBjb25zdCBhdHRyS2V5cyA9IE9iamVjdC5rZXlzKGF0dHJzKVxuICBmb3IgKGNvbnN0IGtleSBvZiBjYW5kaWRhdGVzKSB7XG4gICAgY29uc3QgZm91bmQgPSBhdHRyS2V5cy5maW5kKChrKSA9PiBrLnRvTG93ZXJDYXNlKCkgPT09IGtleS50b0xvd2VyQ2FzZSgpKVxuICAgIGlmIChmb3VuZCAhPSBudWxsKSByZXR1cm4gYXR0cnNbZm91bmRdXG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG50eXBlIFF1ZXJpYWJsZUxheWVyID0ge1xuICBxdWVyeT86IChxOiBvYmplY3QsIG9wdGlvbnM/OiB7IHNjb3BlPzogUXVlcnlTY29wZSB9KSA9PiBQcm9taXNlPHsgcmVjb3Jkcz86IERhdGFSZWNvcmRbXSB9PlxuICBsb2FkPzogKHE6IG9iamVjdCwgb3B0aW9ucz86IHsgc2NvcGU/OiBRdWVyeVNjb3BlIH0pID0+IFByb21pc2U8RGF0YVJlY29yZFtdPlxuICBsb2FkQWxsPzogKFxuICAgIHE6IG9iamVjdCxcbiAgICBzaWduYWw/OiBBYm9ydFNpZ25hbCxcbiAgICBwcm9ncmVzc0NhbGxiYWNrPzogdW5rbm93bixcbiAgICBvcHRpb25zPzogeyBzY29wZT86IFF1ZXJ5U2NvcGUgfVxuICApID0+IFByb21pc2U8RGF0YVJlY29yZFtdPlxuICBnZXRBbGxMb2FkZWRSZWNvcmRzPzogKCkgPT4gRGF0YVJlY29yZFtdXG4gIGdldFJlY29yZHM/OiAoKSA9PiBEYXRhUmVjb3JkW11cbiAgbGF5ZXI/OiB7IHF1ZXJ5RmVhdHVyZXM/OiAocTogb2JqZWN0KSA9PiBQcm9taXNlPHsgZmVhdHVyZXM/OiB1bmtub3duW10gfT4gfVxuICBidWlsZFJlY29yZD86IChmZWF0dXJlOiB1bmtub3duKSA9PiBEYXRhUmVjb3JkXG59XG5cbmNvbnN0IHF1ZXJ5T3B0aW9ucyA9IHsgc2NvcGU6IFF1ZXJ5U2NvcGUuSW5BbGxEYXRhIH1cblxuY29uc3QgYnVpbGRRdWVyeVBhcmFtcyA9IChcbiAgb3V0RmllbGRzOiBzdHJpbmdbXSA9IFsnKiddLFxuICBkaXNhYmxlQ2xpZW50UXVlcnkgPSBmYWxzZVxuKSA9PiAoe1xuICB3aGVyZTogJzE9MScsXG4gIG91dEZpZWxkcyxcbiAgcmV0dXJuR2VvbWV0cnk6IGZhbHNlLFxuICBwYWdlU2l6ZTogMjAwMCxcbiAgLi4uKGRpc2FibGVDbGllbnRRdWVyeSA/IHsgZGlzYWJsZUNsaWVudFF1ZXJ5OiB0cnVlIH0gOiB7fSlcbn0pXG5cbmZ1bmN0aW9uIHJlY29yZHNBcmVSZWFkYWJsZSAocmVjb3JkczogRGF0YVJlY29yZFtdKTogYm9vbGVhbiB7XG4gIHJldHVybiByZWNvcmRzLmxlbmd0aCA+IDAgJiYgcmVjb3Jkcy5zb21lKHJlY29yZEhhc1JlYWRhYmxlRGF0YSlcbn1cblxuYXN5bmMgZnVuY3Rpb24gcXVlcnlWaWFKc2FwaUxheWVyIChkczogUXVlcmlhYmxlTGF5ZXIpOiBQcm9taXNlPERhdGFSZWNvcmRbXT4ge1xuICBjb25zdCBsYXllciA9IGRzLmxheWVyIGFzIHtcbiAgICBxdWVyeUZlYXR1cmVzPzogKHE6IG9iamVjdCkgPT4gUHJvbWlzZTx7IGZlYXR1cmVzPzogdW5rbm93bltdIH0+XG4gICAgcXVlcnk/OiAocTogb2JqZWN0KSA9PiBQcm9taXNlPHsgZmVhdHVyZXM/OiB1bmtub3duW10gfT5cbiAgfVxuICBpZiAoIWxheWVyIHx8IHR5cGVvZiBkcy5idWlsZFJlY29yZCAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIFtdXG5cbiAgY29uc3QgcSA9IHtcbiAgICB3aGVyZTogJzE9MScsXG4gICAgb3V0RmllbGRzOiBbJyonXSxcbiAgICByZXR1cm5HZW9tZXRyeTogZmFsc2UsXG4gICAgbnVtOiAyMDAwXG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9XG4gICAgICB0eXBlb2YgbGF5ZXIucXVlcnlGZWF0dXJlcyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IGF3YWl0IGxheWVyLnF1ZXJ5RmVhdHVyZXMocSlcbiAgICAgICAgOiB0eXBlb2YgbGF5ZXIucXVlcnkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICA/IGF3YWl0IGxheWVyLnF1ZXJ5KHEpXG4gICAgICAgICAgOiBudWxsXG4gICAgY29uc3QgZmVhdHVyZXMgPSByZXN1bHQ/LmZlYXR1cmVzID8/IFtdXG4gICAgcmV0dXJuIGZlYXR1cmVzLm1hcCgoZikgPT4gZHMuYnVpbGRSZWNvcmQhKGYpKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gW11cbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBydW5RdWVyeWFibGVNZXRob2RzIChcbiAgZHM6IFF1ZXJpYWJsZUxheWVyLFxuICBvdXRGaWVsZHM6IHN0cmluZ1tdLFxuICBkaXNhYmxlQ2xpZW50UXVlcnk6IGJvb2xlYW5cbik6IFByb21pc2U8RGF0YVJlY29yZFtdPiB7XG4gIGNvbnN0IHBhcmFtcyA9IGJ1aWxkUXVlcnlQYXJhbXMob3V0RmllbGRzLCBkaXNhYmxlQ2xpZW50UXVlcnkpXG5cbiAgaWYgKHR5cGVvZiBkcz8ubG9hZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZWNvcmRzID0gYXdhaXQgZHMubG9hZChwYXJhbXMsIHF1ZXJ5T3B0aW9ucylcbiAgICAgIGlmIChyZWNvcmRzPy5sZW5ndGggJiYgcmVjb3Jkc0FyZVJlYWRhYmxlKHJlY29yZHMpKSByZXR1cm4gcmVjb3Jkc1xuICAgICAgaWYgKHJlY29yZHM/Lmxlbmd0aCAmJiAhZGlzYWJsZUNsaWVudFF1ZXJ5KSByZXR1cm4gcmVjb3Jkc1xuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gdGVudGEgcHLDs3hpbW8gbcOpdG9kb1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgZHM/LmxvYWRBbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IGRzLmxvYWRBbGwocGFyYW1zLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgcXVlcnlPcHRpb25zKVxuICAgICAgaWYgKHJlY29yZHM/Lmxlbmd0aCAmJiByZWNvcmRzQXJlUmVhZGFibGUocmVjb3JkcykpIHJldHVybiByZWNvcmRzXG4gICAgICBpZiAocmVjb3Jkcz8ubGVuZ3RoICYmICFkaXNhYmxlQ2xpZW50UXVlcnkpIHJldHVybiByZWNvcmRzXG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyB0ZW50YSBxdWVyeSBhYmFpeG9cbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIGRzPy5xdWVyeSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkcy5xdWVyeShwYXJhbXMsIHF1ZXJ5T3B0aW9ucylcbiAgICAgIGNvbnN0IHJlY29yZHMgPSByZXN1bHQ/LnJlY29yZHMgPz8gW11cbiAgICAgIGlmIChyZWNvcmRzLmxlbmd0aCAmJiByZWNvcmRzQXJlUmVhZGFibGUocmVjb3JkcykpIHJldHVybiByZWNvcmRzXG4gICAgICBpZiAocmVjb3Jkcy5sZW5ndGggJiYgIWRpc2FibGVDbGllbnRRdWVyeSkgcmV0dXJuIHJlY29yZHNcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIHRlbnRhIEpTIEFQSVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHZpYUxheWVyID0gYXdhaXQgcXVlcnlWaWFKc2FwaUxheWVyKGRzKVxuICBpZiAodmlhTGF5ZXIubGVuZ3RoICYmIHJlY29yZHNBcmVSZWFkYWJsZSh2aWFMYXllcikpIHJldHVybiB2aWFMYXllclxuICBpZiAodmlhTGF5ZXIubGVuZ3RoICYmICFkaXNhYmxlQ2xpZW50UXVlcnkpIHJldHVybiB2aWFMYXllclxuXG4gIHJldHVybiBbXVxufVxuXG5hc3luYyBmdW5jdGlvbiBxdWVyeUFsbFJlY29yZHMgKFxuICBkczogUXVlcmlhYmxlTGF5ZXIsXG4gIG91dEZpZWxkczogc3RyaW5nW10gPSBbJyonXVxuKTogUHJvbWlzZTxEYXRhUmVjb3JkW10+IHtcbiAgbGV0IHJlY29yZHMgPSBhd2FpdCBydW5RdWVyeWFibGVNZXRob2RzKGRzLCBvdXRGaWVsZHMsIGZhbHNlKVxuICBpZiAocmVjb3Jkc0FyZVJlYWRhYmxlKHJlY29yZHMpKSByZXR1cm4gcmVjb3Jkc1xuXG4gIHJlY29yZHMgPSBhd2FpdCBydW5RdWVyeWFibGVNZXRob2RzKGRzLCBvdXRGaWVsZHMsIHRydWUpXG4gIGlmIChyZWNvcmRzQXJlUmVhZGFibGUocmVjb3JkcykpIHJldHVybiByZWNvcmRzXG5cbiAgcmV0dXJuIHJlY29yZHNcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGZXRjaExheWVyUmVjb3Jkc09wdGlvbnMge1xuICAvKiogSWdub3JhIGNhY2hlIGRvIG1hcGEgZSBmb3LDp2EgcXVlcnkvbG9hZEFsbCAow7p0aWwgbm8gRW50ZXJwcmlzZSkuICovXG4gIGZvcmNlUXVlcnk/OiBib29sZWFuXG4gIHllYXJGaWVsZEppbXU/OiBzdHJpbmdcbiAgcmVjb3J0ZUZpZWxkSmltdT86IHN0cmluZ1xuICBmaWVsZHM/OiBJTUZpZWxkU2NoZW1hW11cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZU91dEZpZWxkcyAoXG4gIHllYXJGaWVsZEppbXU/OiBzdHJpbmcsXG4gIHJlY29ydGVGaWVsZEppbXU/OiBzdHJpbmcsXG4gIGZpZWxkcz86IElNRmllbGRTY2hlbWFbXVxuKTogc3RyaW5nW10ge1xuICBpZiAoIWZpZWxkcz8ubGVuZ3RoIHx8ICF5ZWFyRmllbGRKaW11IHx8ICFyZWNvcnRlRmllbGRKaW11KSByZXR1cm4gWycqJ11cbiAgY29uc3Qga2V5cyA9IHJlc29sdmVBdHRyaWJ1dGVLZXlzKGZpZWxkcywgeWVhckZpZWxkSmltdSwgcmVjb3J0ZUZpZWxkSmltdSlcbiAgaWYgKCFrZXlzKSByZXR1cm4gWycqJ11cbiAgcmV0dXJuIFsnKicsIGtleXMueWVhcktleSwga2V5cy5yZWNvcnRlS2V5XVxufVxuXG4vKiogRGV0ZWN0YSBjb2x1bmEgZGUgYW5vIHBlbG9zIHZhbG9yZXMgcmVhaXMgKGV4LjogQW5vID0gMi4wMDEsIDIwMDEpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRldGVjdFllYXJLZXlGcm9tUm93cyAoXG4gIHJvd3M6IFJlY29yZDxzdHJpbmcsIHVua25vd24+W10sXG4gIGhpbnQ/OiBzdHJpbmdcbik6IHN0cmluZyB8IG51bGwge1xuICBpZiAoIXJvd3MubGVuZ3RoKSByZXR1cm4gbnVsbFxuXG4gIGNvbnN0IGtleXMgPSBuZXcgU2V0PHN0cmluZz4oKVxuICBmb3IgKGNvbnN0IHJvdyBvZiByb3dzLnNsaWNlKDAsIDUwKSkge1xuICAgIE9iamVjdC5rZXlzKHJvdykuZm9yRWFjaCgoaykgPT4ga2V5cy5hZGQoaykpXG4gIH1cblxuICBpZiAoaGludCkge1xuICAgIGNvbnN0IG1hdGNoID0gWy4uLmtleXNdLmZpbmQoKGspID0+IGsudG9Mb3dlckNhc2UoKSA9PT0gaGludC50b0xvd2VyQ2FzZSgpKVxuICAgIGlmIChtYXRjaCkgcmV0dXJuIG1hdGNoXG4gIH1cblxuICBsZXQgYmVzdEtleTogc3RyaW5nIHwgbnVsbCA9IG51bGxcbiAgbGV0IGJlc3RTY29yZSA9IDBcbiAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgIGlmICgvXihvYmplY3RpZHxnbG9iYWxpZHxzaGFwZXxmaWQpJC9pLnRlc3Qoa2V5KSkgY29udGludWVcbiAgICBsZXQgc2NvcmUgPSAwXG4gICAgZm9yIChjb25zdCByb3cgb2Ygcm93cykge1xuICAgICAgY29uc3QgeSA9IHBhcnNlWWVhcihyb3dba2V5XSlcbiAgICAgIGlmICh5ICE9IG51bGwgJiYgeSA+PSAxOTg1ICYmIHkgPD0gMjAzNSkgc2NvcmUrK1xuICAgIH1cbiAgICBpZiAoc2NvcmUgPiBiZXN0U2NvcmUpIHtcbiAgICAgIGJlc3RTY29yZSA9IHNjb3JlXG4gICAgICBiZXN0S2V5ID0ga2V5XG4gICAgfVxuICB9XG4gIHJldHVybiBiZXN0U2NvcmUgPiAwID8gYmVzdEtleSA6IG51bGxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRldGVjdFJlY29ydGVLZXlGcm9tUm93cyAoXG4gIHJvd3M6IFJlY29yZDxzdHJpbmcsIHVua25vd24+W10sXG4gIHJlY29ydGVIaW50OiBzdHJpbmdcbik6IHN0cmluZyB8IG51bGwge1xuICBpZiAoIXJvd3MubGVuZ3RoKSByZXR1cm4gbnVsbFxuICBjb25zdCBrZXlzID0gbmV3IFNldDxzdHJpbmc+KClcbiAgZm9yIChjb25zdCByb3cgb2Ygcm93cy5zbGljZSgwLCA1KSkge1xuICAgIE9iamVjdC5rZXlzKHJvdykuZm9yRWFjaCgoaykgPT4ga2V5cy5hZGQoaykpXG4gIH1cbiAgY29uc3QgZXhhY3QgPSBbLi4ua2V5c10uZmluZChcbiAgICAoaykgPT4gay50b0xvd2VyQ2FzZSgpID09PSByZWNvcnRlSGludC50b0xvd2VyQ2FzZSgpXG4gIClcbiAgaWYgKGV4YWN0KSByZXR1cm4gZXhhY3RcbiAgcmV0dXJuIChcbiAgICBbLi4ua2V5c10uZmluZChcbiAgICAgIChrKSA9PlxuICAgICAgICBub3JtYWxpemVSZWNvcnRlVG9rZW4oaykgPT09IG5vcm1hbGl6ZVJlY29ydGVUb2tlbihyZWNvcnRlSGludClcbiAgICApID8/IG51bGxcbiAgKVxufVxuXG4vKiogTW9udGEgc8OpcmllIGEgcGFydGlyIGRlIGF0cmlidXRvcyBicnV0b3MgKFJFU1QgLyBxdWVyeUZlYXR1cmVzKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFllYXJTZXJpZXNGcm9tQXR0cmlidXRlUm93cyAoXG4gIHJvd3M6IFJlY29yZDxzdHJpbmcsIHVua25vd24+W10sXG4gIHllYXJGaWVsZEppbXU6IHN0cmluZyxcbiAgcmVjb3J0ZUZpZWxkSmltdTogc3RyaW5nLFxuICBmaWVsZHM/OiBJTUZpZWxkU2NoZW1hW11cbik6IFllYXJWYWx1ZVJvd1tdIHtcbiAgaWYgKCFyb3dzLmxlbmd0aCkgcmV0dXJuIFtdXG5cbiAgY29uc3QgYXNSZWNvcmRzID0gcm93cy5tYXAoKGF0dHJpYnV0ZXMpID0+ICh7IGF0dHJpYnV0ZXMgfSkpXG4gIGNvbnN0IHN0YW5kYXJkID0gYnVpbGRZZWFyU2VyaWVzKFxuICAgIGFzUmVjb3JkcyxcbiAgICB5ZWFyRmllbGRKaW11LFxuICAgIHJlY29ydGVGaWVsZEppbXUsXG4gICAgZmllbGRzXG4gIClcbiAgaWYgKHN0YW5kYXJkLmxlbmd0aCA+IDApIHJldHVybiBzdGFuZGFyZFxuXG4gIGNvbnN0IHllYXJLZXkgPSBkZXRlY3RZZWFyS2V5RnJvbVJvd3Mocm93cywgeWVhckZpZWxkSmltdSkgPz8geWVhckZpZWxkSmltdVxuICBjb25zdCByZWNvcnRlS2V5ID1cbiAgICBkZXRlY3RSZWNvcnRlS2V5RnJvbVJvd3Mocm93cywgcmVjb3J0ZUZpZWxkSmltdSkgPz8gcmVjb3J0ZUZpZWxkSmltdVxuXG4gIGlmICgheWVhcktleSB8fCAhcmVjb3J0ZUtleSkgcmV0dXJuIFtdXG5cbiAgY29uc3Qgc2VyaWVzOiBZZWFyVmFsdWVSb3dbXSA9IFtdXG4gIGZvciAoY29uc3Qgcm93IG9mIHJvd3MpIHtcbiAgICBjb25zdCB5ZWFyID0gcGFyc2VZZWFyKHJvd1t5ZWFyS2V5XSlcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlTnVtZXJpY1ZhbHVlKHJvd1tyZWNvcnRlS2V5XSlcbiAgICBpZiAoeWVhciA9PSBudWxsIHx8IHZhbHVlID09IG51bGwpIGNvbnRpbnVlXG4gICAgc2VyaWVzLnB1c2goeyB5ZWFyLCB2YWx1ZSB9KVxuICB9XG4gIHJldHVybiBzZXJpZXMuc29ydCgoYSwgYikgPT4gYS55ZWFyIC0gYi55ZWFyKVxufVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaFJhd0F0dHJpYnV0ZVJvd3NGcm9tTGF5ZXIgKFxuICBkczogUXVlcmlhYmxlTGF5ZXJcbik6IFByb21pc2U8UmVjb3JkPHN0cmluZywgdW5rbm93bj5bXT4ge1xuICBjb25zdCBsYXllciA9IGRzLmxheWVyIGFzIHtcbiAgICBsb2FkPzogKCkgPT4gUHJvbWlzZTx2b2lkPlxuICAgIGxvYWRlZD86IGJvb2xlYW5cbiAgICBsb2FkU3RhdHVzPzogc3RyaW5nXG4gICAgcXVlcnlGZWF0dXJlcz86IChwOiBvYmplY3QpID0+IFByb21pc2U8e1xuICAgICAgZmVhdHVyZXM/OiBBcnJheTx7IGF0dHJpYnV0ZXM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB9PlxuICAgIH0+XG4gIH1cbiAgaWYgKCFsYXllcj8ucXVlcnlGZWF0dXJlcykgcmV0dXJuIFtdXG5cbiAgdHJ5IHtcbiAgICBpZiAoXG4gICAgICB0eXBlb2YgbGF5ZXIubG9hZCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgbGF5ZXIubG9hZFN0YXR1cyAhPT0gJ2xvYWRlZCcgJiZcbiAgICAgICFsYXllci5sb2FkZWRcbiAgICApIHtcbiAgICAgIGF3YWl0IGxheWVyLmxvYWQoKVxuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBsYXllci5xdWVyeUZlYXR1cmVzKHtcbiAgICAgIHdoZXJlOiAnMT0xJyxcbiAgICAgIG91dEZpZWxkczogWycqJ10sXG4gICAgICByZXR1cm5HZW9tZXRyeTogZmFsc2VcbiAgICB9KVxuICAgIHJldHVybiAocmVzdWx0LmZlYXR1cmVzID8/IFtdKVxuICAgICAgLm1hcCgoZikgPT4gKHsgLi4uKGYuYXR0cmlidXRlcyA/PyB7fSkgfSkpXG4gICAgICAuZmlsdGVyKChhKSA9PiBPYmplY3Qua2V5cyhhKS5sZW5ndGggPiAwKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gW11cbiAgfVxufVxuXG5mdW5jdGlvbiBhdHRyaWJ1dGVSb3dzU2NvcmUgKFxuICByb3dzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPltdXG4pOiBudW1iZXIge1xuICBpZiAoIXJvd3MubGVuZ3RoKSByZXR1cm4gMFxuICBjb25zdCBzYW1wbGUgPSByb3dzWzBdXG4gIHJldHVybiBPYmplY3Qua2V5cyhzYW1wbGUpLmZpbHRlcihcbiAgICAoaykgPT4gIS9eKG9iamVjdGlkfGdsb2JhbGlkfHNoYXBlfGZpZCkkL2kudGVzdChrKVxuICApLmxlbmd0aFxufVxuXG4vKipcbiAqIENhcnJlZ2EgbGluaGFzIGRhIHRhYmVsYSBQUk9ERVMgcHJpb3JpemFuZG8gYXRyaWJ1dG9zIGJydXRvcyBkYSBjYW1hZGFcbiAqIChtZXNtYSBmb250ZSBkYSB0YWJlbGEgZG8gUG9ydGFsKS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoUHJvZGVzQXR0cmlidXRlUm93cyAoXG4gIGRhdGFTb3VyY2U6IHVua25vd24sXG4gIG9wdGlvbnM/OiBGZXRjaExheWVyUmVjb3Jkc09wdGlvbnNcbik6IFByb21pc2U8UmVjb3JkPHN0cmluZywgdW5rbm93bj5bXT4ge1xuICBjb25zdCBkcyA9IGRhdGFTb3VyY2UgYXMgUXVlcmlhYmxlTGF5ZXJcbiAgY29uc3QgY2FuZGlkYXRlczogUmVjb3JkPHN0cmluZywgdW5rbm93bj5bXVtdID0gW11cblxuICBjYW5kaWRhdGVzLnB1c2goYXdhaXQgZmV0Y2hSYXdBdHRyaWJ1dGVSb3dzRnJvbUxheWVyKGRzKSlcblxuICBpZiAoIW9wdGlvbnM/LmZvcmNlUXVlcnkpIHtcbiAgICBjb25zdCBjYWNoZWQgPSBkcy5nZXRBbGxMb2FkZWRSZWNvcmRzPy4oKSA/PyBkcy5nZXRSZWNvcmRzPy4oKSA/PyBbXVxuICAgIGlmIChjYWNoZWQubGVuZ3RoKSB7XG4gICAgICBjYW5kaWRhdGVzLnB1c2goXG4gICAgICAgIGNhY2hlZFxuICAgICAgICAgIC5tYXAoKHIpID0+IGdldFBsYWluQXR0cmlidXRlcyhyKSlcbiAgICAgICAgICAuZmlsdGVyKChhKSA9PiBPYmplY3Qua2V5cyhhKS5sZW5ndGggPiAwKVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBmZXRjaExheWVyUmVjb3JkcyhkYXRhU291cmNlLCBvcHRpb25zKVxuICBpZiAocmVjb3Jkcy5sZW5ndGgpIHtcbiAgICBjYW5kaWRhdGVzLnB1c2goXG4gICAgICByZWNvcmRzXG4gICAgICAgIC5tYXAoKHIpID0+IGdldFBsYWluQXR0cmlidXRlcyhyKSlcbiAgICAgICAgLmZpbHRlcigoYSkgPT4gT2JqZWN0LmtleXMoYSkubGVuZ3RoID4gMClcbiAgICApXG4gIH1cblxuICBpZiAob3B0aW9ucz8ueWVhckZpZWxkSmltdSAmJiBvcHRpb25zPy5yZWNvcnRlRmllbGRKaW11KSB7XG4gICAgZm9yIChjb25zdCByb3dzIG9mIGNhbmRpZGF0ZXMpIHtcbiAgICAgIGlmICghcm93cy5sZW5ndGgpIGNvbnRpbnVlXG4gICAgICBjb25zdCBzZXJpZXMgPSBidWlsZFllYXJTZXJpZXNGcm9tQXR0cmlidXRlUm93cyhcbiAgICAgICAgcm93cyxcbiAgICAgICAgb3B0aW9ucy55ZWFyRmllbGRKaW11LFxuICAgICAgICBvcHRpb25zLnJlY29ydGVGaWVsZEppbXUsXG4gICAgICAgIG9wdGlvbnMuZmllbGRzXG4gICAgICApXG4gICAgICBpZiAoc2VyaWVzLmxlbmd0aCA+IDApIHJldHVybiByb3dzXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNhbmRpZGF0ZXMucmVkdWNlKChiZXN0LCBjdXIpID0+IHtcbiAgICBpZiAoIWN1ci5sZW5ndGgpIHJldHVybiBiZXN0XG4gICAgaWYgKCFiZXN0Lmxlbmd0aCkgcmV0dXJuIGN1clxuICAgIHJldHVybiBhdHRyaWJ1dGVSb3dzU2NvcmUoY3VyKSA+IGF0dHJpYnV0ZVJvd3NTY29yZShiZXN0KSA/IGN1ciA6IGJlc3RcbiAgfSwgW10gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj5bXSlcbn1cblxuLyoqIENhcnJlZ2EgdG9kb3Mgb3MgcmVnaXN0cm9zIGRhIGNhbWFkYSAodGFiZWxhIGFubyDDlyByZWNvcnRlcykuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hMYXllclJlY29yZHMgKFxuICBkYXRhU291cmNlOiB1bmtub3duLFxuICBvcHRpb25zPzogRmV0Y2hMYXllclJlY29yZHNPcHRpb25zXG4pOiBQcm9taXNlPERhdGFSZWNvcmRbXT4ge1xuICBjb25zdCBkcyA9IGRhdGFTb3VyY2UgYXMgUXVlcmlhYmxlTGF5ZXJcbiAgY29uc3QgY2FjaGVkID0gZHMuZ2V0QWxsTG9hZGVkUmVjb3Jkcz8uKCkgPz8gZHMuZ2V0UmVjb3Jkcz8uKCkgPz8gW11cbiAgY29uc3Qgb3V0RmllbGRzID0gcmVzb2x2ZU91dEZpZWxkcyhcbiAgICBvcHRpb25zPy55ZWFyRmllbGRKaW11LFxuICAgIG9wdGlvbnM/LnJlY29ydGVGaWVsZEppbXUsXG4gICAgb3B0aW9ucz8uZmllbGRzXG4gIClcblxuICBpZiAoIW9wdGlvbnM/LmZvcmNlUXVlcnkgJiYgcmVjb3Jkc0FyZVJlYWRhYmxlKGNhY2hlZCkpIHtcbiAgICByZXR1cm4gY2FjaGVkXG4gIH1cblxuICBjb25zdCBxdWVyaWVkID0gYXdhaXQgcXVlcnlBbGxSZWNvcmRzKGRzLCBvdXRGaWVsZHMpXG4gIGlmIChyZWNvcmRzQXJlUmVhZGFibGUocXVlcmllZCkpIHJldHVybiBxdWVyaWVkXG4gIGlmIChxdWVyaWVkLmxlbmd0aCkgcmV0dXJuIHF1ZXJpZWRcblxuICBpZiAoIW9wdGlvbnM/LmZvcmNlUXVlcnkpIHJldHVybiBjYWNoZWRcbiAgcmV0dXJuIHF1ZXJpZWQubGVuZ3RoID8gcXVlcmllZCA6IGNhY2hlZFxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVSZWNvcnRlVG9rZW4gKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gdmFsdWVcbiAgICAudG9Mb3dlckNhc2UoKVxuICAgIC5ub3JtYWxpemUoJ05GRCcpXG4gICAgLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csICcnKVxuICAgIC5yZXBsYWNlKC9bXFxzLV0rL2csICdfJylcbn1cblxuZnVuY3Rpb24gaXNZZWFyTmFtZWRGaWVsZCAoZmllbGQ6IElNRmllbGRTY2hlbWEpOiBib29sZWFuIHtcbiAgY29uc3QgeSA9XG4gICAgcGFyc2VZZWFyKGZpZWxkLmppbXVOYW1lKSA/P1xuICAgIHBhcnNlWWVhcihmaWVsZC5uYW1lKSA/P1xuICAgIHBhcnNlWWVhcihmaWVsZC5hbGlhcylcbiAgcmV0dXJuIHkgIT0gbnVsbCAmJiB5ID49IDE5ODUgJiYgeSA8PSAyMDM1XG59XG5cbmZ1bmN0aW9uIGZpbmRSZWNvcnRlTmFtZUZpZWxkIChmaWVsZHM6IElNRmllbGRTY2hlbWFbXSk6IElNRmllbGRTY2hlbWEgfCBudWxsIHtcbiAgY29uc3QgcGF0dGVybnMgPSBbJ3JlY29ydGUnLCAncmVnaWFvJywgJ3JlZ2nDo28nLCAnYmlvbWEnLCAnbm9tZScsICduYW1lJywgJ2xhYmVsJ11cbiAgcmV0dXJuIChcbiAgICBmaWVsZHMuZmluZCgoZikgPT4ge1xuICAgICAgY29uc3QgaiA9IGYuamltdU5hbWU/LnRvTG93ZXJDYXNlKCkgPz8gJydcbiAgICAgIGNvbnN0IG4gPSBmLm5hbWU/LnRvTG93ZXJDYXNlKCkgPz8gJydcbiAgICAgIHJldHVybiBwYXR0ZXJucy5zb21lKChwKSA9PiBqLmluY2x1ZGVzKHApIHx8IG4uaW5jbHVkZXMocCkpXG4gICAgfSkgPz8gbnVsbFxuICApXG59XG5cbi8qKiBMYXlvdXQgYWx0ZXJuYXRpdm86IGNhZGEgcmVnaXN0cm8gPSByZWNvcnRlOyBjb2x1bmFzIG51bcOpcmljYXMgPSBhbm9zLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkWWVhclNlcmllc0Zyb21SZWNvcnRlUm93cyAoXG4gIHJlY29yZHM6IFJlY29yZExpa2VbXSxcbiAgcmVjb3J0ZUZpZWxkSmltdTogc3RyaW5nLFxuICBmaWVsZHM6IElNRmllbGRTY2hlbWFbXVxuKTogWWVhclZhbHVlUm93W10ge1xuICBjb25zdCB5ZWFyRmllbGRzID0gZmllbGRzLmZpbHRlcihpc1llYXJOYW1lZEZpZWxkKVxuICBpZiAoIXllYXJGaWVsZHMubGVuZ3RoKSByZXR1cm4gW11cblxuICBjb25zdCB0YXJnZXQgPSBub3JtYWxpemVSZWNvcnRlVG9rZW4ocmVjb3J0ZUZpZWxkSmltdSlcbiAgY29uc3QgbmFtZUZpZWxkID0gZmluZFJlY29ydGVOYW1lRmllbGQoZmllbGRzKVxuXG4gIGNvbnN0IHJvdyA9XG4gICAgcmVjb3Jkcy5maW5kKChyZWMpID0+IHtcbiAgICAgIGlmIChuYW1lRmllbGQpIHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSByZWFkUmVjb3JkVmFsdWUocmVjLCBuYW1lRmllbGQsIG5hbWVGaWVsZC5qaW11TmFtZSlcbiAgICAgICAgaWYgKGxhYmVsICE9IG51bGwgJiYgbm9ybWFsaXplUmVjb3J0ZVRva2VuKFN0cmluZyhsYWJlbCkpID09PSB0YXJnZXQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IGYgb2YgZmllbGRzKSB7XG4gICAgICAgIGlmIChpc1llYXJOYW1lZEZpZWxkKGYpIHx8IGYuamltdU5hbWUgPT09IHJlY29ydGVGaWVsZEppbXUpIGNvbnRpbnVlXG4gICAgICAgIGNvbnN0IHYgPSByZWFkUmVjb3JkVmFsdWUocmVjLCBmLCBmLmppbXVOYW1lKVxuICAgICAgICBpZiAodiAhPSBudWxsICYmIG5vcm1hbGl6ZVJlY29ydGVUb2tlbihTdHJpbmcodikpID09PSB0YXJnZXQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KSA/PyBudWxsXG5cbiAgaWYgKCFyb3cpIHJldHVybiBbXVxuXG4gIGNvbnN0IHNlcmllczogWWVhclZhbHVlUm93W10gPSBbXVxuICBmb3IgKGNvbnN0IHlmIG9mIHllYXJGaWVsZHMpIHtcbiAgICBjb25zdCB5ZWFyID1cbiAgICAgIHBhcnNlWWVhcih5Zi5qaW11TmFtZSkgPz8gcGFyc2VZZWFyKHlmLm5hbWUpID8/IHBhcnNlWWVhcih5Zi5hbGlhcylcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlTnVtZXJpY1ZhbHVlKHJlYWRSZWNvcmRWYWx1ZShyb3csIHlmLCB5Zi5qaW11TmFtZSkpXG4gICAgaWYgKHllYXIgPT0gbnVsbCB8fCB2YWx1ZSA9PSBudWxsKSBjb250aW51ZVxuICAgIHNlcmllcy5wdXNoKHsgeWVhciwgdmFsdWUgfSlcbiAgfVxuXG4gIHJldHVybiBzZXJpZXMuc29ydCgoYSwgYikgPT4gYS55ZWFyIC0gYi55ZWFyKVxufVxuXG5mdW5jdGlvbiBidWlsZFllYXJTZXJpZXNZZWFyUm93cyAoXG4gIHJlY29yZHM6IFJlY29yZExpa2VbXSxcbiAgeWVhckZpZWxkSmltdTogc3RyaW5nLFxuICByZWNvcnRlRmllbGRKaW11OiBzdHJpbmcsXG4gIGZpZWxkcz86IElNRmllbGRTY2hlbWFbXVxuKTogWWVhclZhbHVlUm93W10ge1xuICBjb25zdCB5ZWFyRmllbGQgPSBmaWVsZHM/Lmxlbmd0aFxuICAgID8gZmluZEZpZWxkQnlKaW11TmFtZShmaWVsZHMsIHllYXJGaWVsZEppbXUpXG4gICAgOiBudWxsXG4gIGNvbnN0IHJlY29ydGVGaWVsZCA9IGZpZWxkcz8ubGVuZ3RoXG4gICAgPyBmaW5kRmllbGRCeUppbXVOYW1lKGZpZWxkcywgcmVjb3J0ZUZpZWxkSmltdSlcbiAgICA6IG51bGxcbiAgY29uc3Qgc2VyaWVzOiBZZWFyVmFsdWVSb3dbXSA9IFtdXG5cbiAgZm9yIChjb25zdCByZWMgb2YgcmVjb3Jkcykge1xuICAgIGNvbnN0IHllYXIgPSBwYXJzZVllYXIoXG4gICAgICByZWFkUmVjb3JkVmFsdWUocmVjLCB5ZWFyRmllbGQsIHllYXJGaWVsZEppbXUpXG4gICAgKVxuICAgIGNvbnN0IHZhbHVlID0gcGFyc2VOdW1lcmljVmFsdWUoXG4gICAgICByZWFkUmVjb3JkVmFsdWUocmVjLCByZWNvcnRlRmllbGQsIHJlY29ydGVGaWVsZEppbXUpXG4gICAgKVxuICAgIGlmICh5ZWFyID09IG51bGwgfHwgdmFsdWUgPT0gbnVsbCkgY29udGludWVcblxuICAgIHNlcmllcy5wdXNoKHsgeWVhciwgdmFsdWUgfSlcbiAgfVxuXG4gIHJldHVybiBzZXJpZXMuc29ydCgoYSwgYikgPT4gYS55ZWFyIC0gYi55ZWFyKVxufVxuXG5mdW5jdGlvbiBjb2xsZWN0UmVjb3JkQXR0cmlidXRlS2V5cyAocmVjb3JkczogUmVjb3JkTGlrZVtdKTogc3RyaW5nW10ge1xuICBjb25zdCBrZXlzID0gbmV3IFNldDxzdHJpbmc+KClcbiAgZm9yIChjb25zdCByZWMgb2YgcmVjb3Jkcy5zbGljZSgwLCAxMDApKSB7XG4gICAgT2JqZWN0LmtleXMoZ2V0UGxhaW5BdHRyaWJ1dGVzKHJlYykpLmZvckVhY2goKGspID0+IGtleXMuYWRkKGspKVxuICB9XG4gIHJldHVybiBbLi4ua2V5c11cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUtleXNGcm9tQXR0cmlidXRlTmFtZXMgKFxuICBrZXlzOiBzdHJpbmdbXSxcbiAgeWVhckZpZWxkSmltdTogc3RyaW5nLFxuICByZWNvcnRlRmllbGRKaW11OiBzdHJpbmdcbik6IHsgeWVhcktleTogc3RyaW5nOyByZWNvcnRlS2V5OiBzdHJpbmcgfSB8IG51bGwge1xuICBjb25zdCByZWNvcnRlS2V5ID0ga2V5cy5maW5kKFxuICAgIChrKSA9PlxuICAgICAgay50b0xvd2VyQ2FzZSgpID09PSByZWNvcnRlRmllbGRKaW11LnRvTG93ZXJDYXNlKCkgfHxcbiAgICAgIG5vcm1hbGl6ZVJlY29ydGVUb2tlbihrKSA9PT0gbm9ybWFsaXplUmVjb3J0ZVRva2VuKHJlY29ydGVGaWVsZEppbXUpXG4gIClcbiAgbGV0IHllYXJLZXkgPSBrZXlzLmZpbmQoKGspID0+IGsudG9Mb3dlckNhc2UoKSA9PT0geWVhckZpZWxkSmltdS50b0xvd2VyQ2FzZSgpKVxuICBpZiAoIXllYXJLZXkpIHtcbiAgICB5ZWFyS2V5ID0ga2V5cy5maW5kKChrKSA9PlxuICAgICAgWUVBUl9OQU1FX1BBVFRFUk5TLnNvbWUoXG4gICAgICAgIChwKSA9PiBrLnRvTG93ZXJDYXNlKCkgPT09IHAgfHwgay50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHApXG4gICAgICApXG4gICAgKVxuICB9XG4gIGlmICgheWVhcktleSB8fCAhcmVjb3J0ZUtleSkgcmV0dXJuIG51bGxcbiAgcmV0dXJuIHsgeWVhcktleSwgcmVjb3J0ZUtleSB9XG59XG5cbi8qKiDDmmx0aW1vIHJlY3Vyc286IGluZmVyZSBjb2x1bmFzIHBlbG9zIG5vbWVzIHJlYWlzIG5vcyBhdHJpYnV0b3MgcmV0b3JuYWRvcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFllYXJTZXJpZXNJbmZlcnJlZCAoXG4gIHJlY29yZHM6IFJlY29yZExpa2VbXSxcbiAgeWVhckZpZWxkSmltdTogc3RyaW5nLFxuICByZWNvcnRlRmllbGRKaW11OiBzdHJpbmdcbik6IFllYXJWYWx1ZVJvd1tdIHtcbiAgY29uc3Qga2V5cyA9IGNvbGxlY3RSZWNvcmRBdHRyaWJ1dGVLZXlzKHJlY29yZHMpXG4gIGNvbnN0IHJlc29sdmVkID0gcmVzb2x2ZUtleXNGcm9tQXR0cmlidXRlTmFtZXMoa2V5cywgeWVhckZpZWxkSmltdSwgcmVjb3J0ZUZpZWxkSmltdSlcbiAgaWYgKCFyZXNvbHZlZCkgcmV0dXJuIFtdXG5cbiAgY29uc3Qgc2VyaWVzOiBZZWFyVmFsdWVSb3dbXSA9IFtdXG4gIGZvciAoY29uc3QgcmVjIG9mIHJlY29yZHMpIHtcbiAgICBjb25zdCBhdHRycyA9IGdldFBsYWluQXR0cmlidXRlcyhyZWMpXG4gICAgY29uc3QgeWVhciA9IHBhcnNlWWVhcihhdHRyc1tyZXNvbHZlZC55ZWFyS2V5XSlcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlTnVtZXJpY1ZhbHVlKGF0dHJzW3Jlc29sdmVkLnJlY29ydGVLZXldKVxuICAgIGlmICh5ZWFyID09IG51bGwgfHwgdmFsdWUgPT0gbnVsbCkgY29udGludWVcbiAgICBzZXJpZXMucHVzaCh7IHllYXIsIHZhbHVlIH0pXG4gIH1cbiAgcmV0dXJuIHNlcmllcy5zb3J0KChhLCBiKSA9PiBhLnllYXIgLSBiLnllYXIpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFllYXJTZXJpZXMgKFxuICByZWNvcmRzOiBSZWNvcmRMaWtlW10sXG4gIHllYXJGaWVsZEppbXU6IHN0cmluZyxcbiAgcmVjb3J0ZUZpZWxkSmltdTogc3RyaW5nLFxuICBmaWVsZHM/OiBJTUZpZWxkU2NoZW1hW11cbik6IFllYXJWYWx1ZVJvd1tdIHtcbiAgY29uc3QgeWVhclJvd3MgPSBidWlsZFllYXJTZXJpZXNZZWFyUm93cyhcbiAgICByZWNvcmRzLFxuICAgIHllYXJGaWVsZEppbXUsXG4gICAgcmVjb3J0ZUZpZWxkSmltdSxcbiAgICBmaWVsZHNcbiAgKVxuICBpZiAoeWVhclJvd3MubGVuZ3RoID4gMCkgcmV0dXJuIHllYXJSb3dzXG5cbiAgaWYgKGZpZWxkcz8ubGVuZ3RoKSB7XG4gICAgY29uc3QgYWx0ID0gYnVpbGRZZWFyU2VyaWVzRnJvbVJlY29ydGVSb3dzKHJlY29yZHMsIHJlY29ydGVGaWVsZEppbXUsIGZpZWxkcylcbiAgICBpZiAoYWx0Lmxlbmd0aCA+IDApIHJldHVybiBhbHRcbiAgfVxuXG4gIHJldHVybiBidWlsZFllYXJTZXJpZXNJbmZlcnJlZChyZWNvcmRzLCB5ZWFyRmllbGRKaW11LCByZWNvcnRlRmllbGRKaW11KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0WWVhcnNSYW5nZVN1bW1hcnkgKHNlcmllczogWWVhclZhbHVlUm93W10pOiBzdHJpbmcgfCBudWxsIHtcbiAgaWYgKCFzZXJpZXMubGVuZ3RoKSByZXR1cm4gbnVsbFxuICBjb25zdCBtaW4gPSBzZXJpZXNbMF0ueWVhclxuICBjb25zdCBtYXggPSBzZXJpZXNbc2VyaWVzLmxlbmd0aCAtIDFdLnllYXJcbiAgY29uc3QgY291bnQgPSBzZXJpZXMubGVuZ3RoXG4gIGlmIChtaW4gPT09IG1heCkgcmV0dXJuIGAke21pbn0gKCR7Y291bnR9IGFubylgXG4gIHJldHVybiBgJHttaW594oCTJHttYXh9ICgke2NvdW50fSBhbm9zKWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzWWVhck91dE9mVHlwaWNhbFJhbmdlICh5ZWFyOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIHllYXIgPCAyMDAxIHx8IHllYXIgPiAyMDI1XG59XG5cbi8qKiBWYXJpYcOnw6NvIHBlcmNlbnR1YWwgZG8gdmFsb3IgaW5pY2lhbCAoYW5vIG1haXMgYW50aWdvKSBwYXJhIG8gZmluYWwgKGFubyBtYWlzIHJlY2VudGUpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbGNQZXJjZW50VmFyaWF0aW9uIChcbiAgdmFsdWVJbmljaWFsOiBudW1iZXIsXG4gIHZhbHVlRmluYWw6IG51bWJlclxuKTogbnVtYmVyIHwgbnVsbCB7XG4gIGlmICghTnVtYmVyLmlzRmluaXRlKHZhbHVlSW5pY2lhbCkgfHwgIU51bWJlci5pc0Zpbml0ZSh2YWx1ZUZpbmFsKSkgcmV0dXJuIG51bGxcbiAgaWYgKHZhbHVlSW5pY2lhbCA9PT0gMCkgcmV0dXJuIG51bGxcbiAgcmV0dXJuICgodmFsdWVGaW5hbCAtIHZhbHVlSW5pY2lhbCkgLyB2YWx1ZUluaWNpYWwpICogMTAwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQZXJjZW50VmFyaWF0aW9uIChwY3Q6IG51bWJlcik6IHN0cmluZyB7XG4gIGNvbnN0IHNpZ24gPSBwY3QgPiAwID8gJysnIDogJydcbiAgcmV0dXJuIGAke3NpZ259JHtwY3QudG9Mb2NhbGVTdHJpbmcoJ3B0LUJSJywge1xuICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDJcbiAgfSl9JWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlRm9yWWVhciAoXG4gIHNlcmllczogWWVhclZhbHVlUm93W10sXG4gIHllYXI6IG51bWJlclxuKTogbnVtYmVyIHwgbnVsbCB7XG4gIGNvbnN0IHJvdyA9IHNlcmllcy5maW5kKChyKSA9PiByLnllYXIgPT09IHllYXIpXG4gIHJldHVybiByb3cgIT0gbnVsbCA/IHJvdy52YWx1ZSA6IG51bGxcbn1cblxuLyoqIFNvbWEgb3MgdmFsb3JlcyBkb3MgYW5vcyBpbmZvcm1hZG9zOyByZXRvcm5hIG51bGwgc2UgYWxndW0gYW5vIG7Do28gdGl2ZXIgZGFkby4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdW1WYWx1ZXNGb3JZZWFycyAoXG4gIHNlcmllczogWWVhclZhbHVlUm93W10sXG4gIHllYXJzOiBudW1iZXJbXVxuKTogbnVtYmVyIHwgbnVsbCB7XG4gIGlmICgheWVhcnMubGVuZ3RoKSByZXR1cm4gbnVsbFxuICBsZXQgc3VtID0gMFxuICBmb3IgKGNvbnN0IHllYXIgb2YgeWVhcnMpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGdldFZhbHVlRm9yWWVhcihzZXJpZXMsIHllYXIpXG4gICAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiBudWxsXG4gICAgc3VtICs9IHZhbHVlXG4gIH1cbiAgcmV0dXJuIHN1bVxufVxuXG4vKiogQW5vcyBkaXNwb27DrXZlaXMgcGFyYSBvIHBlcsOtb2RvIGluaWNpYWwgKGFudGVzIGRvIHBlcsOtb2RvIGZpbmFsLCBzZSBob3V2ZXIpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFllYXJzQWxsb3dlZEZvckluaWNpYWwgKFxuICBhbGxZZWFyczogbnVtYmVyW10sXG4gIHBlcmlvZG9GaW5hbDogbnVtYmVyW11cbik6IG51bWJlcltdIHtcbiAgY29uc3QgYmxvY2tlZCA9IG5ldyBTZXQocGVyaW9kb0ZpbmFsKVxuICBjb25zdCBtYXhGaW5hbCA9IHBlcmlvZG9GaW5hbC5sZW5ndGggPyBNYXRoLm1pbiguLi5wZXJpb2RvRmluYWwpIDogSW5maW5pdHlcbiAgcmV0dXJuIGFsbFllYXJzLmZpbHRlcigoeSkgPT4gIWJsb2NrZWQuaGFzKHkpICYmIHkgPCBtYXhGaW5hbClcbn1cblxuLyoqIEFub3MgZGlzcG9uw612ZWlzIHBhcmEgbyBwZXLDrW9kbyBmaW5hbCAoZGVwb2lzIGRvIHBlcsOtb2RvIGluaWNpYWwsIHNlIGhvdXZlcikuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0WWVhcnNBbGxvd2VkRm9yRmluYWwgKFxuICBhbGxZZWFyczogbnVtYmVyW10sXG4gIHBlcmlvZG9JbmljaWFsOiBudW1iZXJbXVxuKTogbnVtYmVyW10ge1xuICBjb25zdCBibG9ja2VkID0gbmV3IFNldChwZXJpb2RvSW5pY2lhbClcbiAgY29uc3QgbWluSW5pY2lhbCA9IHBlcmlvZG9JbmljaWFsLmxlbmd0aCA/IE1hdGgubWF4KC4uLnBlcmlvZG9JbmljaWFsKSA6IC1JbmZpbml0eVxuICByZXR1cm4gYWxsWWVhcnMuZmlsdGVyKCh5KSA9PiAhYmxvY2tlZC5oYXMoeSkgJiYgeSA+IG1pbkluaWNpYWwpXG59XG5cbi8qKiBNYXJjYS9kZXNtYXJjYSB1bSBhbm8gbWFudGVuZG8gYXBlbmFzIHNlcXXDqm5jaWFzIGNvbnNlY3V0aXZhcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVDb25zZWN1dGl2ZVllYXIgKFxuICBwZXJpb2Q6IG51bWJlcltdLFxuICB5ZWFyOiBudW1iZXJcbik6IHsgbmV4dDogbnVtYmVyW107IHJlamVjdGVkOiBib29sZWFuIH0ge1xuICBpZiAocGVyaW9kLmluY2x1ZGVzKHllYXIpKSB7XG4gICAgcmV0dXJuIHsgbmV4dDogcGVyaW9kLmZpbHRlcigoeSkgPT4geSAhPT0geWVhciksIHJlamVjdGVkOiBmYWxzZSB9XG4gIH1cbiAgY29uc3QgbmV4dCA9IFsuLi5wZXJpb2QsIHllYXJdLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuICBpZiAoIWFyZUNvbnNlY3V0aXZlWWVhcnMobmV4dCkpIHtcbiAgICByZXR1cm4geyBuZXh0OiBwZXJpb2QsIHJlamVjdGVkOiB0cnVlIH1cbiAgfVxuICByZXR1cm4geyBuZXh0LCByZWplY3RlZDogZmFsc2UgfVxufVxuXG4vKiogVmVyaWZpY2Egc2Ugb3MgYW5vcyBmb3JtYW0gdW1hIHNlcXXDqm5jaWEgY29uc2VjdXRpdmEgKGV4LjogMjAxMCwgMjAxMSwgMjAxMikuICovXG5leHBvcnQgZnVuY3Rpb24gYXJlQ29uc2VjdXRpdmVZZWFycyAoeWVhcnM6IG51bWJlcltdKTogYm9vbGVhbiB7XG4gIGlmICh5ZWFycy5sZW5ndGggPD0gMSkgcmV0dXJuIHRydWVcbiAgY29uc3Qgc29ydGVkID0gWy4uLnllYXJzXS5zb3J0KChhLCBiKSA9PiBhIC0gYilcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBzb3J0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc29ydGVkW2ldIC0gc29ydGVkW2kgLSAxXSAhPT0gMSkgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuLyoqIFLDs3R1bG8gY29tcGFjdG8gcGFyYSB1bSBvdSBtYWlzIGFub3MgKGV4LjogXCIyMDEwXCIgb3UgXCIyMDEw4oCTMjAxMiAoMyBhbm9zKVwiKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQZXJpb2RMYWJlbCAoeWVhcnM6IG51bWJlcltdKTogc3RyaW5nIHtcbiAgY29uc3Qgc29ydGVkID0gWy4uLnllYXJzXS5zb3J0KChhLCBiKSA9PiBhIC0gYilcbiAgaWYgKCFzb3J0ZWQubGVuZ3RoKSByZXR1cm4gJydcbiAgaWYgKHNvcnRlZC5sZW5ndGggPT09IDEpIHJldHVybiBTdHJpbmcoc29ydGVkWzBdKVxuICByZXR1cm4gYCR7c29ydGVkWzBdfeKAkyR7c29ydGVkW3NvcnRlZC5sZW5ndGggLSAxXX0gKCR7c29ydGVkLmxlbmd0aH0gYW5vcylgXG59XG5cbi8qKiBJbnRlcnZhbG8gZGUgYW5vcyBzZW0gY29udGFnZW0gKGV4LjogXCIyMDEwXCIgb3UgXCIyMDEw4oCTMjAxMlwiKSDigJQgdXNvIGVtIHJlc3VsdGFkb3MuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UGVyaW9kUmFuZ2VMYWJlbCAoeWVhcnM6IG51bWJlcltdKTogc3RyaW5nIHtcbiAgY29uc3Qgc29ydGVkID0gWy4uLnllYXJzXS5zb3J0KChhLCBiKSA9PiBhIC0gYilcbiAgaWYgKCFzb3J0ZWQubGVuZ3RoKSByZXR1cm4gJydcbiAgaWYgKHNvcnRlZC5sZW5ndGggPT09IDEpIHJldHVybiBTdHJpbmcoc29ydGVkWzBdKVxuICByZXR1cm4gYCR7c29ydGVkWzBdfeKAkyR7c29ydGVkW3NvcnRlZC5sZW5ndGggLSAxXX1gXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmFyaWF0aW9uUmVzdWx0IHtcbiAgcGN0OiBudW1iZXJcbiAgdmFsdWVJbmljaWFsOiBudW1iZXJcbiAgdmFsdWVGaW5hbDogbnVtYmVyXG4gIHllYXJzSW5pY2lhbDogbnVtYmVyW11cbiAgeWVhcnNGaW5hbDogbnVtYmVyW11cbn1cblxuZXhwb3J0IHR5cGUgUGVyaW9kVmFyaWF0aW9uT3V0Y29tZSA9XG4gIHwgeyBvazogdHJ1ZTsgZGF0YTogVmFyaWF0aW9uUmVzdWx0IH1cbiAgfCB7IG9rOiBmYWxzZTsgbWVzc2FnZTogc3RyaW5nIH1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVQZXJpb2RWYXJpYXRpb24gKFxuICBzZXJpZXM6IFllYXJWYWx1ZVJvd1tdLFxuICBwZXJpb2RvSW5pY2lhbDogbnVtYmVyW10sXG4gIHBlcmlvZG9GaW5hbDogbnVtYmVyW11cbik6IFBlcmlvZFZhcmlhdGlvbk91dGNvbWUge1xuICBjb25zdCBpbmkgPSBbLi4ucGVyaW9kb0luaWNpYWxdLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuICBjb25zdCBmaW4gPSBbLi4ucGVyaW9kb0ZpbmFsXS5zb3J0KChhLCBiKSA9PiBhIC0gYilcblxuICBpZiAoIWluaS5sZW5ndGggfHwgIWZpbi5sZW5ndGgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogJ1NlbGVjaW9uZSBwZWxvIG1lbm9zIHVtIGFubyBlbSBjYWRhIHBlcsOtb2RvLidcbiAgICB9XG4gIH1cblxuICBpZiAoaW5pLmxlbmd0aCAhPT0gZmluLmxlbmd0aCkge1xuICAgIHJldHVybiB7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBtZXNzYWdlOlxuICAgICAgICAnTyBwZXLDrW9kbyBpbmljaWFsIGUgbyBwZXLDrW9kbyBmaW5hbCBkZXZlbSB0ZXIgYSBtZXNtYSBxdWFudGlkYWRlIGRlIGFub3MuJ1xuICAgIH1cbiAgfVxuXG4gIGlmICghYXJlQ29uc2VjdXRpdmVZZWFycyhpbmkpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6ICdPcyBhbm9zIGRvIHBlcsOtb2RvIGluaWNpYWwgZGV2ZW0gc2VyIGNvbnNlY3V0aXZvcy4nXG4gICAgfVxuICB9XG5cbiAgaWYgKCFhcmVDb25zZWN1dGl2ZVllYXJzKGZpbikpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogJ09zIGFub3MgZG8gcGVyw61vZG8gZmluYWwgZGV2ZW0gc2VyIGNvbnNlY3V0aXZvcy4nXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaW5pU2V0ID0gbmV3IFNldChpbmkpXG4gIGlmIChmaW4uc29tZSgoeSkgPT4gaW5pU2V0Lmhhcyh5KSkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogJ1VtIGFubyBuw6NvIHBvZGUgcGVydGVuY2VyIGFvcyBkb2lzIHBlcsOtb2RvcyBhbyBtZXNtbyB0ZW1wby4nXG4gICAgfVxuICB9XG5cbiAgY29uc3QgbWF4SW5pY2lhbCA9IGluaVtpbmkubGVuZ3RoIC0gMV1cbiAgY29uc3QgbWluRmluYWwgPSBmaW5bMF1cbiAgaWYgKG1heEluaWNpYWwgPj0gbWluRmluYWwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogJ08gcGVyw61vZG8gZmluYWwgZGV2ZSBzZXIgcG9zdGVyaW9yIGFvIHBlcsOtb2RvIGluaWNpYWwuJ1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHZhbHVlSW5pY2lhbCA9IHN1bVZhbHVlc0ZvclllYXJzKHNlcmllcywgaW5pKVxuICBjb25zdCB2YWx1ZUZpbmFsID0gc3VtVmFsdWVzRm9yWWVhcnMoc2VyaWVzLCBmaW4pXG5cbiAgaWYgKHZhbHVlSW5pY2lhbCA9PSBudWxsIHx8IHZhbHVlRmluYWwgPT0gbnVsbCkge1xuICAgIHJldHVybiB7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBtZXNzYWdlOlxuICAgICAgICAnVW0gb3UgbWFpcyBhbm9zIHNlbGVjaW9uYWRvcyBuw6NvIHBvc3N1ZW0gZGFkbyBwYXJhIGVzdGUgcmVjb3J0ZS4nXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcGN0ID0gY2FsY1BlcmNlbnRWYXJpYXRpb24odmFsdWVJbmljaWFsLCB2YWx1ZUZpbmFsKVxuICBpZiAocGN0ID09IG51bGwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTpcbiAgICAgICAgJ0Egc29tYSBkbyBwZXLDrW9kbyBpbmljaWFsIMOpIHplcm87IG7Do28gw6kgcG9zc8OtdmVsIGNhbGN1bGFyIGEgdmFyaWHDp8OjbyBwZXJjZW50dWFsLidcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG9rOiB0cnVlLFxuICAgIGRhdGE6IHtcbiAgICAgIHBjdCxcbiAgICAgIHZhbHVlSW5pY2lhbCxcbiAgICAgIHZhbHVlRmluYWwsXG4gICAgICB5ZWFyc0luaWNpYWw6IGluaSxcbiAgICAgIHllYXJzRmluYWw6IGZpblxuICAgIH1cbiAgfVxufVxuXG4vKiogQ29tcGFyYcOnw6NvIGVudHJlIGRvaXMgYW5vcyDDum5pY29zIChhdGFsaG8gcGFyYSBwZXLDrW9kb3MgZGUgdW0gYW5vKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlVmFyaWF0aW9uIChcbiAgc2VyaWVzOiBZZWFyVmFsdWVSb3dbXSxcbiAgYW5vSW5pY2lhbDogbnVtYmVyLFxuICBhbm9GaW5hbDogbnVtYmVyXG4pOiBQZXJpb2RWYXJpYXRpb25PdXRjb21lIHtcbiAgcmV0dXJuIGNvbXB1dGVQZXJpb2RWYXJpYXRpb24oc2VyaWVzLCBbYW5vSW5pY2lhbF0sIFthbm9GaW5hbF0pXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9kYXRhX3NvdXJjZV9zZWxlY3Rvcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX3NldHRpbmdfY29tcG9uZW50c19fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIlxuLyoqIEBqc3gganN4ICovXG4vKiogQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQgKi9cbmltcG9ydCB7XG4gIFJlYWN0LCBqc3gsIGNzcywgSW1tdXRhYmxlLFxuICB0eXBlIEltbXV0YWJsZUFycmF5LCB0eXBlIFVzZURhdGFTb3VyY2UsXG4gIHR5cGUgSU1EYXRhU291cmNlU2NoZW1hLFxuICB0eXBlIERhdGFTb3VyY2UsXG4gIEFsbERhdGFTb3VyY2VUeXBlcywgRGF0YVNvdXJjZUNvbXBvbmVudFxufSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBTZWxlY3QsIE9wdGlvbiB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgeyBTZXR0aW5nU2VjdGlvbiwgU2V0dGluZ1JvdyB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzJ1xuaW1wb3J0IHsgRGF0YVNvdXJjZVNlbGVjdG9yIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9kYXRhLXNvdXJjZS1zZWxlY3RvcidcbmltcG9ydCB7IHR5cGUgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgeyBnZXREYXRhU291cmNlU2NoZW1hIH0gZnJvbSAnLi4vdXRpbHMvZGF0YS1zb3VyY2UnXG5pbXBvcnQge1xuICBkZXRlY3RZZWFyRmllbGQsXG4gIGZvcm1hdFJlY29ydGVMYWJlbCxcbiAgZ2V0UmVjb3J0ZUNhbmRpZGF0ZUZpZWxkcyxcbiAgc2NoZW1hVG9GaWVsZExpc3Rcbn0gZnJvbSAnLi4vdXRpbHMvcHJvZGVzLXRhYmxlJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBpZDogc3RyaW5nXG4gIHVzZURhdGFTb3VyY2VzPzogSW1tdXRhYmxlQXJyYXk8VXNlRGF0YVNvdXJjZT5cbiAgb25TZXR0aW5nQ2hhbmdlPzogKHNldHRpbmc6IGFueSkgPT4gdm9pZFxuICBjb25maWc/OiBJTUNvbmZpZ1xufVxuXG5jb25zdCBzdHlsZXMgPSBjc3NgXG4gICYud2lkZ2V0LXNldHRpbmctY29tcGFyYWRvci1wcm9kZXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgfVxuICAmICoge1xuICAgIHdyaXRpbmctbW9kZTogaG9yaXpvbnRhbC10YiAhaW1wb3J0YW50O1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgICB3b3JkLWJyZWFrOiBub3JtYWwgIWltcG9ydGFudDtcbiAgfVxuICAuamltdS11aV9zZXR0aW5nLXJvdyB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cbiAgLmppbXUtdWlfc2V0dGluZy1yb3dfX2xhYmVsIHtcbiAgICBtaW4td2lkdGg6IDA7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG4gIC5qaW11LXVpX3NldHRpbmctcm93X19jb250ZW50IHtcbiAgICBmbGV4OiAxIDEgMTAwJTtcbiAgICBtaW4td2lkdGg6IDA7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICB9XG4gIC5zZXR0aW5nLWhpbnQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzZiNmI2YjtcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgfVxuYFxuXG5jb25zdCBlbXB0eUNvbmZpZyA9ICgpID0+IEltbXV0YWJsZSh7fSBhcyBJTUNvbmZpZylcblxuY29uc3QgU2V0dGluZyA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgY29uc3QgeyBpZCwgdXNlRGF0YVNvdXJjZXMsIG9uU2V0dGluZ0NoYW5nZSwgY29uZmlnIH0gPSBwcm9wc1xuICBjb25zdCB1c2VEcyA9IHVzZURhdGFTb3VyY2VzPy5bMF1cbiAgY29uc3QgeWVhckZpZWxkID0gY29uZmlnPy55ZWFyRmllbGRcbiAgY29uc3QgcmVjb3J0ZUZpZWxkID0gY29uZmlnPy5yZWNvcnRlRmllbGRcblxuICBjb25zdCBbZmllbGRMaXN0LCBzZXRGaWVsZExpc3RdID0gUmVhY3QudXNlU3RhdGUoXG4gICAgW10gYXMgUmV0dXJuVHlwZTx0eXBlb2Ygc2NoZW1hVG9GaWVsZExpc3Q+XG4gIClcblxuICBjb25zdCByZWNvcnRlT3B0aW9ucyA9IFJlYWN0LnVzZU1lbW8oXG4gICAgKCkgPT4gZ2V0UmVjb3J0ZUNhbmRpZGF0ZUZpZWxkcyhmaWVsZExpc3QsIHllYXJGaWVsZCksXG4gICAgW2ZpZWxkTGlzdCwgeWVhckZpZWxkXVxuICApXG5cbiAgY29uc3QgYXBwbHlZZWFyRmllbGQgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZmllbGRzOiBSZXR1cm5UeXBlPHR5cGVvZiBzY2hlbWFUb0ZpZWxkTGlzdD4sIGN1cnJlbnRSZWNvcnRlPzogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBkZXRlY3RlZCA9IGRldGVjdFllYXJGaWVsZChmaWVsZHMpXG4gICAgICBpZiAoIWRldGVjdGVkKSByZXR1cm5cblxuICAgICAgbGV0IG5leHQgPSAoY29uZmlnID8/IGVtcHR5Q29uZmlnKCkpLnNldCgneWVhckZpZWxkJywgZGV0ZWN0ZWQpXG4gICAgICBpZiAoY3VycmVudFJlY29ydGUgPT09IGRldGVjdGVkKSB7XG4gICAgICAgIG5leHQgPSBuZXh0LndpdGhvdXQoJ3JlY29ydGVGaWVsZCcpXG4gICAgICB9XG4gICAgICBpZiAoZGV0ZWN0ZWQgIT09IHllYXJGaWVsZCB8fCBjdXJyZW50UmVjb3J0ZSA9PT0gZGV0ZWN0ZWQpIHtcbiAgICAgICAgb25TZXR0aW5nQ2hhbmdlPy4oeyBpZCwgY29uZmlnOiBuZXh0IH0pXG4gICAgICB9XG4gICAgfSxcbiAgICBbY29uZmlnLCBpZCwgb25TZXR0aW5nQ2hhbmdlLCB5ZWFyRmllbGRdXG4gIClcblxuICBjb25zdCBwcm9jZXNzU2NoZW1hID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKHNjaGVtYTogSU1EYXRhU291cmNlU2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBmaWVsZHMgPSBzY2hlbWFUb0ZpZWxkTGlzdChzY2hlbWEpXG4gICAgICBzZXRGaWVsZExpc3QoZmllbGRzKVxuICAgICAgYXBwbHlZZWFyRmllbGQoZmllbGRzLCByZWNvcnRlRmllbGQpXG4gICAgfSxcbiAgICBbYXBwbHlZZWFyRmllbGQsIHJlY29ydGVGaWVsZF1cbiAgKVxuXG4gIGNvbnN0IGhhbmRsZURhdGFTb3VyY2VDcmVhdGVkID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGRzOiBEYXRhU291cmNlKSA9PiB7XG4gICAgICBjb25zdCBzY2hlbWEgPSBnZXREYXRhU291cmNlU2NoZW1hKGRzKVxuICAgICAgaWYgKHNjaGVtYSkgcHJvY2Vzc1NjaGVtYShzY2hlbWEpXG4gICAgfSxcbiAgICBbcHJvY2Vzc1NjaGVtYV1cbiAgKVxuXG4gIGNvbnN0IGhhbmRsZURhdGFTb3VyY2VDaGFuZ2UgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAobmV3VXNlRGF0YVNvdXJjZXM6IFVzZURhdGFTb3VyY2VbXSkgPT4ge1xuICAgICAgb25TZXR0aW5nQ2hhbmdlPy4oe1xuICAgICAgICBpZCxcbiAgICAgICAgdXNlRGF0YVNvdXJjZXM6IEltbXV0YWJsZShuZXdVc2VEYXRhU291cmNlcyksXG4gICAgICAgIGNvbmZpZzogKGNvbmZpZyA/PyBlbXB0eUNvbmZpZygpKVxuICAgICAgICAgIC53aXRob3V0KCd5ZWFyRmllbGQnKVxuICAgICAgICAgIC53aXRob3V0KCdyZWNvcnRlRmllbGQnKVxuICAgICAgfSlcbiAgICAgIHNldEZpZWxkTGlzdChbXSlcbiAgICB9LFxuICAgIFtjb25maWcsIGlkLCBvblNldHRpbmdDaGFuZ2VdXG4gIClcblxuICBjb25zdCBoYW5kbGVSZWNvcnRlU2VsZWN0ID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGJhc2UgPSBjb25maWcgPz8gZW1wdHlDb25maWcoKVxuICAgICAgb25TZXR0aW5nQ2hhbmdlPy4oe1xuICAgICAgICBpZCxcbiAgICAgICAgY29uZmlnOiB2YWx1ZSA/IGJhc2Uuc2V0KCdyZWNvcnRlRmllbGQnLCB2YWx1ZSkgOiBiYXNlLndpdGhvdXQoJ3JlY29ydGVGaWVsZCcpXG4gICAgICB9KVxuICAgIH0sXG4gICAgW2NvbmZpZywgaWQsIG9uU2V0dGluZ0NoYW5nZV1cbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtc2V0dGluZy1jb21wYXJhZG9yLXByb2RlcyBqaW11LXdpZGdldC1zZXR0aW5nIHctMTAwXCIgY3NzPXtzdHlsZXN9PlxuICAgICAge3VzZURzICYmIChcbiAgICAgICAgPERhdGFTb3VyY2VDb21wb25lbnRcbiAgICAgICAgICB3aWRnZXRJZD17aWR9XG4gICAgICAgICAgdXNlRGF0YVNvdXJjZT17dXNlRHN9XG4gICAgICAgICAgb25EYXRhU291cmNlQ3JlYXRlZD17aGFuZGxlRGF0YVNvdXJjZUNyZWF0ZWR9XG4gICAgICAgICAgb25EYXRhU291cmNlU2NoZW1hQ2hhbmdlPXtwcm9jZXNzU2NoZW1hfVxuICAgICAgICAvPlxuICAgICAgKX1cblxuICAgICAgPFNldHRpbmdTZWN0aW9uIHRpdGxlPVwiRGFkb3NcIiBjbGFzc05hbWU9XCJ3LTEwMFwiPlxuICAgICAgICA8U2V0dGluZ1JvdyBsYWJlbD1cIkNhbWFkYSBQUk9ERVMgKEZlYXR1cmUgTGF5ZXIpXCIgZmxvdz1cIndyYXBcIiBsZXZlbD17MX0+XG4gICAgICAgICAgPERhdGFTb3VyY2VTZWxlY3RvclxuICAgICAgICAgICAgd2lkZ2V0SWQ9e2lkfVxuICAgICAgICAgICAgaXNNdWx0aXBsZT17ZmFsc2V9XG4gICAgICAgICAgICBtdXN0VXNlRGF0YVNvdXJjZVxuICAgICAgICAgICAgdHlwZXM9e0ltbXV0YWJsZShbQWxsRGF0YVNvdXJjZVR5cGVzLkZlYXR1cmVMYXllcl0pfVxuICAgICAgICAgICAgdXNlRGF0YVNvdXJjZXM9e3VzZURhdGFTb3VyY2VzfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZURhdGFTb3VyY2VDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TZXR0aW5nUm93PlxuXG4gICAgICAgIHt1c2VEcyAmJiAoXG4gICAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9XCJSZWNvcnRlIGdlb2dyw6FmaWNvIChjb2x1bmEpXCIgZmxvdz1cIndyYXBcIiBsZXZlbD17MX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cmVjb3J0ZUZpZWxkID8/ICcnfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWNpb25lIG8gcmVjb3J0ZeKAplwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhfZXZ0LCB2YWx1ZSkgPT4gaGFuZGxlUmVjb3J0ZVNlbGVjdChTdHJpbmcodmFsdWUgPz8gJycpKX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17cmVjb3J0ZU9wdGlvbnMubGVuZ3RoID09PSAwfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIlwiPnsnJ308L09wdGlvbj5cbiAgICAgICAgICAgICAgICB7cmVjb3J0ZU9wdGlvbnMubWFwKChmKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8T3B0aW9uXG4gICAgICAgICAgICAgICAgICAgIGtleT17Zi5qaW11TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2YuamltdU5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17cmVjb3J0ZUZpZWxkID09PSBmLmppbXVOYW1lfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0UmVjb3J0ZUxhYmVsKGYpfVxuICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctaGludFwiPlxuICAgICAgICAgICAgICAgIEVzY29saGEgdW1hIGNvbHVuYSBkYSB0YWJlbGEgKGV4LjogQ2VycmFkbywgQW1hesO0bmlhIGxlZ2FsLCBQYW50YW5hbCkuXG4gICAgICAgICAgICAgICAgT3MgYW5vcyBleGliaWRvcyBuYSB3aWRnZXQgc8OjbyBkZXRlY3RhZG9zIGF1dG9tYXRpY2FtZW50ZSBhIHBhcnRpciBkb3NcbiAgICAgICAgICAgICAgICBkYWRvcyBkaXNwb27DrXZlaXMgcGFyYSBvIHJlY29ydGUgc2VsZWNpb25hZG8uXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9TZXR0aW5nUm93PlxuICAgICAgICApfVxuICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5nXG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9