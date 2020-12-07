/**
 * @author Sebastián Moreno Saavedra
 * @version 1.0.4
 * @license MIT
 */

import axios from 'axios';
import { URL_LOCALHOST, CURRENT, FORECAST } from '../constants/constants';
import { LANGCODES } from '../constants/lang-codes';
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
export class ApiService {

    /** @access private */
    private APIKEY: string;
    /** @access private */
    private lang: string | undefined;
    /** @access private */
    private units: string | undefined;

    /**
     * Constructor que inicializa el ApiService.
     * @constructor
     * @param APIKEY {string} Key de la api de Openweathermap.
     * @param lang {string} Código del idioma.
     * @param units {string} Unidad métrica de los datos.
     */
    public constructor(APIKEY: string, lang: string = 'es', units: string = 'metric') {
        this.APIKEY = APIKEY;
        this.configLanguage(lang);
        this.configUnits(units);
    };

    /**
     * Método privado para inicializar el código del idioma.
     * @private
     * @access private
     * @param lang {string} Código del idioma.
     */
    private configLanguage = (lang: string): void => {
        (LANGCODES.filter(l => l.code === lang).length === 1)
            ? this.lang = `&lang=${lang}`
            : this.lang = '&lang=es';
    };

    /**
     * Método privado para inicializar la unidad métrica en la que se medira los datos.
     * @private
     * @access private
     * @param unit {string} Métrica de los datos.
     */
    private configUnits = (unit: string): void => {
        this.units = (unit === 'm' || unit === 'metric') ? '&units=metric' : '';
    };

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
    public searchByName = (name: string, codCountry: string = '', anticipation: boolean = false): Promise<any> => {

        const filter: string = (codCountry === '') ? `q=${name}` : `q=${name},${codCountry}`;
        return this.requestApi(filter, anticipation);

    };

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
    public searchByGeolocationGeographic = (location: Coord, anticipation: boolean = false): Promise<any> => {

        const filter: string = (location === undefined || location === null) ? 'lat=-33.8473567&lon=150.651794' : `lat=${location.lat}&lon=${location.lon}`;
        return this.requestApi(filter, anticipation);

    };

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
    public searchZipPostcode = (cp: string, codCountry: string = '', anticipation: boolean = false): Promise<any> => {

        const filter: string = (codCountry === '') ? `zip=${cp}` : `zip=${cp},${codCountry}`;
        return this.requestApi(filter, anticipation);

    };

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
    private requestApi = async (filter: string, anticipation: boolean): Promise<any> => {

        const params: string = `${this.units}${this.lang}&appid=${this.APIKEY}`;

        // Llamada a la API
        const url: string = (anticipation) ? `${URL_LOCALHOST}${FORECAST}${filter}${params}` : `${URL_LOCALHOST}${CURRENT}${filter}${params}`;

        try {
            const e = await axios.get(url);
            return e.data;
        } catch (error) {
            return error;
        }

    };

};