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
     * Función para inicializar el código del idioma.
     * @param lang {string} Código del idioma.
     */
    private configLanguage;
    /**
     * Función privada para inicializar la unidad métrica en la que se medira los datos.
     * @param unit {string} Métrica de los datos.
     */
    private configUnits;
    /**
     * Obtener el tiempo actual buscando mediante el nombre del lugar.
     * @param name {string} nombre del lugar.
     * @param codCountry {string} Código del país.
     * @example
     * searchByName('Barcelona', 'es');
     */
    searchByName: (name: string, codCountry?: string) => Promise<any>;
    /**
     * Obtener el tiempo actual mediante la localización.
     * @param location {Object} Coordenadas del lugar por el que se quiere buscar.
     * @example
     * searchByGeolocationGeographic({ lat: 43.2633534, lon: -2.951074 });
     */
    searchByGeolocationGeographic: (location: Coord) => Promise<any>;
    /**
     * Obtener el tiempo actual mediante el código postal del lugar.
     * @param cp {string} Código postal del lugar.
     * @param codCountry {string} Código del país del lugar.
     * @example
     * searchZipPostcode('08080', 'es');
     */
    searchZipPostcode: (cp: string, codCountry?: string) => Promise<any>;
}
