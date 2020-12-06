import axios from 'axios';
import { URL_LOCALHOST, CURRENT } from '../constants/constants';
import { LANGCODES } from '../constants/lang-codes';
import { Coord } from '../interfaces/api.interface';

/**
 * Clase de la Apiservice.
 */
export class ApiService {

    private APIKEY: string;
    private lang: string | undefined;
    private units: string | undefined;

    /**
     * Constructor que inicializa el ApiService.
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
     * @param lang {string} Código del idioma.
     */
    private configLanguage = (lang: string) => {
        (LANGCODES.filter(l => l.code === lang).length === 1)
            ? this.lang = `&lang=${lang}`
            : this.lang = '&lang=es';
    };

    /**
     * Método privado para inicializar la unidad métrica en la que se medira los datos.
     * @param unit {string} Métrica de los datos.
     */
    private configUnits = (unit: string) => {
        this.units = (unit === 'm' || unit === 'metric') ? '&units=metric' : '';
    };

    /**
     * Método para obtener el tiempo actual buscando mediante el nombre del lugar.
     * @param name {string} nombre del lugar.
     * @param codCountry {string} Código del país.
     * @example
     * searchByName('Barcelona', 'es');
     */
    public searchByName = (name: string, codCountry: string = '') => {

        const filter = (codCountry === '') ? `q=${name}` : `q=${name},${codCountry}`;
        return this.requestApi(filter);

    };

    /**
     * Método para obtener el tiempo actual mediante la localización.
     * @param location {Object} Coordenadas del lugar por el que se quiere buscar.
     * @example
     * searchByGeolocationGeographic({ lat: 43.2633534, lon: -2.951074 });
     */
    public searchByGeolocationGeographic = (location: Coord) => {

        const filter = (location === undefined || location === null) ? 'lat=-33.8473567&lon=150.651794' : `lat=${location.lat}&lon=${location.lon}`;
        return this.requestApi(filter);

    };

    /**
     * Método para obtener el tiempo actual mediante el código postal del lugar.
     * @param cp {string} Código postal del lugar.
     * @param codCountry {string} Código del país del lugar.
     * @example
     * searchZipPostcode('08080', 'es');
     */
    public searchZipPostcode = (cp: string, codCountry: string = '') => {

        const filter = (codCountry === '') ? `zip=${cp}` : `zip=${cp},${codCountry}`;
        return this.requestApi(filter);

    };

    /**
     * Método privado que llama a la api con el fitro por el que se desea buscar.
     * @param filter {string} filtro por el que se quiere buscar
     */
    private requestApi = (filter: string) => {

        const params = `${this.units}${this.lang}&appid=${this.APIKEY}`;

        // Llamada a la API
        const url = `${URL_LOCALHOST}${CURRENT}${filter}${params}`;

        return axios.get(url)
            .then(e => e.data)
            .catch(error => error);

    };

};