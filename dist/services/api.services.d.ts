import { Coord } from '../interfaces/api.interface';
/**
 * Clase de la Apiservice.
 */
export declare class ApiService {
    private APIKEY;
    private lang;
    private units;
    /**
     * Constructor que inicializa el ApiService.
     * @param APIKEY {string} Key de la api de Openweathermap.
     * @param lang {string} Código del idioma.
     * @param units {string} Unidad métrica de los datos.
     */
    constructor(APIKEY: string, lang?: string, units?: string);
    /**
     * Método privado para inicializar el código del idioma.
     * @param lang {string} Código del idioma.
     */
    private configLanguage;
    /**
     * Método privado para inicializar la unidad métrica en la que se medira los datos.
     * @param unit {string} Métrica de los datos.
     */
    private configUnits;
    /**
     * Método para obtener el tiempo actual buscando mediante el nombre del lugar.
     * @param name {string} nombre del lugar.
     * @param codCountry {string} Código del país.
     * @param anticipation {number} Días de previsión.
     * @example
     * searchByName('Barcelona', 'es'); || searchByName('Barcelona', 'es', 5);
     */
    searchByName: (name: string, codCountry?: string, anticipation?: number) => Promise<any>;
    /**
     * Método para obtener el tiempo actual mediante la localización.
     * @param location {Object} Coordenadas del lugar por el que se quiere buscar.
     * @param anticipation {number} Días de previsión.
     * @example
     * searchByGeolocationGeographic({ lat: 43.2633534, lon: -2.951074 }); || searchByGeolocationGeographic({ lat: 43.2633534, lon: -2.951074 }, 5);
     */
    searchByGeolocationGeographic: (location: Coord, anticipation?: number) => Promise<any>;
    /**
     * Método para obtener el tiempo actual mediante el código postal del lugar.
     * @param cp {string} Código postal del lugar.
     * @param codCountry {string} Código del país del lugar.
     * @param anticipation {number} Días de previsión.
     * @example
     * searchZipPostcode('08080', 'es'); || searchZipPostcode('08080', 'es', 5);
     */
    searchZipPostcode: (cp: string, codCountry?: string, anticipation?: number) => Promise<any>;
    /**
     * Método privado que llama a la api con el fitro por el que se desea buscar.
     * @param filter {string} filtro por el que se quiere busca.
     * @param anticipation {number} Días de previsión.
     */
    private requestApi;
}
