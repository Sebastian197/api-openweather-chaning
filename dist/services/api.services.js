"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("../constants/constants");
const lang_codes_1 = require("../constants/lang-codes");
/**
 * Clase de la Apiservice.
 */
class ApiService {
    /**
     * Constructor que inicializa el ApiService.
     * @param APIKEY {string} Key de la api de Openweathermap.
     * @param lang {string} Código del idioma.
     * @param units {string} Unidad métrica de los datos.
     */
    constructor(APIKEY, lang = 'es', units = 'metric') {
        /**
         * Método privado para inicializar el código del idioma.
         * @param lang {string} Código del idioma.
         */
        this.configLanguage = (lang) => {
            (lang_codes_1.LANGCODES.filter(l => l.code === lang).length === 1)
                ? this.lang = `&lang=${lang}`
                : this.lang = '&lang=es';
        };
        /**
         * Método privado para inicializar la unidad métrica en la que se medira los datos.
         * @param unit {string} Métrica de los datos.
         */
        this.configUnits = (unit) => {
            this.units = (unit === 'm' || unit === 'metric') ? '&units=metric' : '';
        };
        /**
         * Método para obtener el tiempo actual buscando mediante el nombre del lugar.
         * @param name {string} nombre del lugar.
         * @param codCountry {string} Código del país.
         * @param anticipation {boolean} Flag de previsión.
         * @example
         * searchByName('Barcelona', 'es'); || searchByName('Barcelona', 'es', 5);
         * @returns
         * Promise<any>
         */
        this.searchByName = (name, codCountry = '', anticipation = false) => {
            const filter = (codCountry === '') ? `q=${name}` : `q=${name},${codCountry}`;
            return this.requestApi(filter, anticipation);
        };
        /**
         * Método para obtener el tiempo actual mediante la localización.
         * @param location {Object} Coordenadas del lugar por el que se quiere buscar.
         * @param anticipation {boolean} Flag de previsión.
         * @example
         * searchByGeolocationGeographic({ lat: 43.2633534, lon: -2.951074 }); || searchByGeolocationGeographic({ lat: 43.2633534, lon: -2.951074 }, 5);
         * @returns
         * Promise<any>
         */
        this.searchByGeolocationGeographic = (location, anticipation = false) => {
            const filter = (location === undefined || location === null) ? 'lat=-33.8473567&lon=150.651794' : `lat=${location.lat}&lon=${location.lon}`;
            return this.requestApi(filter, anticipation);
        };
        /**
         * Método para obtener el tiempo actual mediante el código postal del lugar.
         * @param cp {string} Código postal del lugar.
         * @param codCountry {string} Código del país del lugar.
         * @param anticipation {boolean} Flag de previsión.
         * @example
         * searchZipPostcode('08080', 'es'); || searchZipPostcode('08080', 'es', 5);
         * @returns
         * Promise<any>
         */
        this.searchZipPostcode = (cp, codCountry = '', anticipation = false) => {
            const filter = (codCountry === '') ? `zip=${cp}` : `zip=${cp},${codCountry}`;
            return this.requestApi(filter, anticipation);
        };
        /**
         * Método privado que llama a la api con el fitro por el que se desea buscar.
         * @param filter {string} filtro por el que se quiere busca.
         * @param anticipation {number} Días de previsión.
         * @returns
         * Promise<any>
         */
        this.requestApi = (filter, anticipation) => __awaiter(this, void 0, void 0, function* () {
            const params = `${this.units}${this.lang}&appid=${this.APIKEY}`;
            // Llamada a la API
            const url = (anticipation) ? `${constants_1.URL_LOCALHOST}${constants_1.FORECAST}${filter}${params}` : `${constants_1.URL_LOCALHOST}${constants_1.CURRENT}${filter}${params}`;
            try {
                const e = yield axios_1.default.get(url);
                return e.data;
            }
            catch (error) {
                return error;
            }
        });
        this.APIKEY = APIKEY;
        this.configLanguage(lang);
        this.configUnits(units);
    }
    ;
}
exports.ApiService = ApiService;
;
