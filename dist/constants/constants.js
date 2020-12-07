"use strict";
/**
 * Constantes url y modo.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.FORECAST = exports.CURRENT = exports.URL_LOCALHOST = void 0;
/**
 * @type {string} URL_LOCALHOST url de la api openweathermap.
 * @type {string} CURRENT modo para obtener el pronóstico del tiempo de un día.
 * @type {string} FORECAST modo para obtener el pronóstico del tiempo de 5 días cada 3 horas.
 */
const URL_LOCALHOST = 'http://api.openweathermap.org/data/2.5/', CURRENT = 'weather?', FORECAST = 'forecast?';
exports.URL_LOCALHOST = URL_LOCALHOST;
exports.CURRENT = CURRENT;
exports.FORECAST = FORECAST;
