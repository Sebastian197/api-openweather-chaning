/**
 * @author Sebastián Moreno Saavedra
 * @version 1.0.4
 * @license MIT
 */
import { Coord } from '../interfaces/api.interface';
/**
 * Clase de la Apiservice.
 * @class ApiService.
 * @classdesc Esta clase llama a la api de openweathermap para consumir el pronostico del tiempo de lugares.
 * @implements URL_LOCALHOST, CURRENT, FORECAST
 * @example
 * const m = require('./dist').ApiService;
 * const api = new m('your-apiKey', 'es', 'm');
 * api.searchByName('Barcelona', 'es')
 *      .then(data => console.log(data));
 *
 * api.searchByGeolocationGeographic({ lat: -33.8473567, lon: 150.6517943 })
 *      .then(data => console.log(data));
 *
 * api.searchZipPostcode('08080', 'es')
 *      .then(data => console.log(data));
 *
 * api.searchZipPostcode('08080', 'es', true)
 *      .then(data => {
 *          const { list } = data;
 *          // example
 *          list.forEach(e => {
 *          console.log(e);
 *      });
 * });
 *
 */
export declare class ApiService {
    /** @access private */
    private APIKEY;
    /** @access private */
    private lang;
    /** @access private */
    private units;
    /**
     * Constructor que inicializa el ApiService.
     * @constructor
     * @param APIKEY {string} Key de la api de Openweathermap.
     * @param lang {string} Código del idioma.
     * @param units {string} Unidad métrica de los datos.
     */
    constructor(APIKEY: string, lang?: string, units?: string);
    /**
     * Método privado para inicializar el código del idioma.
     * @private
     * @access private
     * @param lang {string} Código del idioma.
     */
    private configLanguage;
    /**
     * Método privado para inicializar la unidad métrica en la que se medira los datos.
     * @private
     * @access private
     * @param unit {string} Métrica de los datos.
     */
    private configUnits;
    /**
     * Método para obtener el tiempo actual buscando mediante el nombre del lugar.
     * @public
     * @param name {string} nombre del lugar.
     * @param codCountry {string} Código del país.
     * @param anticipation {boolean} Flag de previsión.
     * @example
     * searchByName('Barcelona', 'es'); || searchByName('Barcelona', 'es', 5);
     * @returns
     * Promise<any>
     */
    searchByName: (name: string, codCountry?: string, anticipation?: boolean) => Promise<any>;
    /**
     * Método para obtener el tiempo actual mediante la localización.
     * @public
     * @param location {Object} Coordenadas del lugar por el que se quiere buscar.
     * @param anticipation {boolean} Flag de previsión.
     * @example
     * searchByGeolocationGeographic({ lat: 43.2633534, lon: -2.951074 }); || searchByGeolocationGeographic({ lat: 43.2633534, lon: -2.951074 }, 5);
     * @returns
     * Promise<any>
     */
    searchByGeolocationGeographic: (location: Coord, anticipation?: boolean) => Promise<any>;
    /**
     * Método para obtener el tiempo actual mediante el código postal del lugar.
     * @public
     * @param cp {string} Código postal del lugar.
     * @param codCountry {string} Código del país del lugar.
     * @param anticipation {boolean} Flag de previsión.
     * @example
     * searchZipPostcode('08080', 'es'); || searchZipPostcode('08080', 'es', 5);
     * @returns
     * Promise<any>
     */
    searchZipPostcode: (cp: string, codCountry?: string, anticipation?: boolean) => Promise<any>;
    /**
     * Método privado que llama a la api con el fitro por el que se desea buscar.
     * @private
     * @access private
     * @async
     * @param filter {string} filtro por el que se quiere busca.
     * @param anticipation {boolean} Flag de previsión.
     * @returns
     * Promise<any>
     */
    private requestApi;
}
