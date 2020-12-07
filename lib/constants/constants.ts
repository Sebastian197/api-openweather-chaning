/**
 * Constantes url y modo.
*/

/** 
 * @type {string} URL_LOCALHOST url de la api openweathermap.
 * @type {string} CURRENT modo para obtener el pronóstico del tiempo de un día.
 * @type {string} FORECAST modo para obtener el pronóstico del tiempo de 5 días cada 3 horas.
 */
const URL_LOCALHOST: string = 'http://api.openweathermap.org/data/2.5/',
    CURRENT: string = 'weather?',
    FORECAST: string = 'forecast?';

export {
    URL_LOCALHOST,
    CURRENT,
    FORECAST
}

