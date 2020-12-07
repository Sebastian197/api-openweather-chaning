/**
 * Interfaz Api
 * @interface
 * @type {object}
 * @ignore
 */
export interface Api {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}
/**
 * Interfaz Sys
 * @interface
 * @type {object}
 * @ignore
 */
export interface Sys {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
}
/**
 * Interfaz Clouds
 * @interface
 * @type {object}
 * @ignore
 */
export interface Clouds {
    all: number;
}
/**
 * Interfaz Wind
 * @interface
 * @type {object}
 * @ignore
 */
export interface Wind {
    speed: number;
    deg: number;
}
/**
 * Interfaz Main
 * @interface
 * @type {object}
 * @ignore
 */
export interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
}
/**
 * Interfaz Weather
 * @interface
 * @type {object}
 * @ignore
 */
export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}
/**
 * Interfaz Coord
 * @interface
 * @type {object}
 * @ignore
 */
export interface Coord {
    lon: number;
    lat: number;
}
