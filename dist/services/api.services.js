"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
var axios_1 = __importDefault(require("axios"));
var constants_1 = require("../constants/constants");
var lang_codes_1 = require("../constants/lang-codes");
/**
 * Clase de la Apiservice.
 */
var ApiService = /** @class */ (function () {
    /**
     * Constructor que inicializa el ApiService.
     * @param APIKEY {string} Key de la api de Openweathermap.
     * @param lang {string} Código del idioma.
     * @param units {string} Unidad métrica de los datos.
     */
    function ApiService(APIKEY, lang, units) {
        var _this = this;
        if (lang === void 0) { lang = 'es'; }
        if (units === void 0) { units = 'metric'; }
        /**
         * Función para inicializar el código del idioma.
         * @param lang {string} Código del idioma.
         */
        this.configLanguage = function (lang) {
            (lang_codes_1.LANGCODES.filter(function (l) { return l.code === lang; }).length === 1)
                ? _this.lang = "&lang=" + lang
                : _this.lang = '&lang=es';
        };
        /**
         * Función privada para inicializar la unidad métrica en la que se medira los datos.
         * @param unit {string} Métrica de los datos.
         */
        this.configUnits = function (unit) {
            _this.units = (unit === 'm' || unit === 'metric') ? '&units=metric' : '';
        };
        /**
         * Obtener el tiempo actual buscando mediante el nombre del lugar.
         * @param name {string} nombre del lugar.
         * @param codCountry {string} Código del país.
         * @example
         * searchByName('Barcelona', 'es');
         */
        this.searchByName = function (name, codCountry) {
            if (codCountry === void 0) { codCountry = ''; }
            var filter = (codCountry === '') ? "q=" + name : "q=" + name + "," + codCountry;
            return _this.requestApi(filter);
        };
        /**
         * Obtener el tiempo actual mediante la localización.
         * @param location {Object} Coordenadas del lugar por el que se quiere buscar.
         * @example
         * searchByGeolocationGeographic({ lat: 43.2633534, lon: -2.951074 });
         */
        this.searchByGeolocationGeographic = function (location) {
            var filter = (location === undefined || location === null) ? 'lat=-33.8473567&lon=150.651794' : "lat=" + location.lat + "&lon=" + location.lon;
            return _this.requestApi(filter);
        };
        /**
         * Obtener el tiempo actual mediante el código postal del lugar.
         * @param cp {string} Código postal del lugar.
         * @param codCountry {string} Código del país del lugar.
         * @example
         * searchZipPostcode('08080', 'es');
         */
        this.searchZipPostcode = function (cp, codCountry) {
            if (codCountry === void 0) { codCountry = ''; }
            var filter = (codCountry === '') ? "zip=" + cp : "zip=" + cp + "," + codCountry;
            return _this.requestApi(filter);
        };
        this.requestApi = function (filter) {
            var params = "" + _this.units + _this.lang + "&appid=" + _this.APIKEY;
            // Llamada a la API
            var url = "" + constants_1.URL_LOCALHOST + constants_1.CURRENT + filter + params;
            return axios_1.default.get(url)
                .then(function (e) { return e.data; })
                .catch(function (error) { return error; });
        };
        this.APIKEY = APIKEY;
        this.configLanguage(lang);
        this.configUnits(units);
    }
    ;
    return ApiService;
}());
exports.ApiService = ApiService;
;
