# Openweathermap api librería

Obtiene la respuesta del tiempo actual de un lugar usando diferentes opciones de filtro.

## Nota

Primero debes registrarte en openweather dede aquí [OpenWeather](https://home.openweathermap.org/users/sign_up), luego dirigirse hasta aquí [API keys](https://home.openweathermap.org/api_keys) para crear y obtener su key, después copiar la key y pegarla en **your-apiKey**.

## Instalación

Ejecutar este comando

```
npm install api-ow-chaning
```
## Uso

Seguir estas instrucciones de uso


###  Poner la API key de Openweathermap

Poner tu key en el archivo test/constants.js en **your-apiKey** para ejecutar las pruebas.

```JS
module.exports = {
    API_KEY: 'your-apiKey',
    API_URL: 'http://api.openweathermap.org'
};
```

### Como añadirlo

```JS
const lib = require('openweather-api-chaning');
```

```TS
import lib form 'openweather-api-chaning';
```

### Como usarlo

* Obtener el tiempo actual buscando mediante el nombre del lugar

```JS
const m = lib.ApiService;

const api = new m('your-apiKey', 'es', 'm');

api.searchByName('Barcelona', 'es')
    .then(data => console.log(data))
    .catch(error => console.log(error));
```
// Espera una respuesta de este estilo:

```
{
    coord: { lon: 2.16, lat: 41.39 },
    weather: [
        {
            id: 802,
            main: 'Clouds',
            description: 'nubes dispersas',
            icon: '03d'
        }
    ],
    base: 'stations',
    main: {
        temp: 10.39,
        feels_like: 5.25,
        temp_min: 8.89,
        temp_max: 11.67,
        pressure: 999,
        humidity: 50
    },
    visibility: 10000,
    wind: { speed: 4.6, deg: 320 },
    clouds: { all: 40 },
    dt: 1607173717,
    sys: {
        type: 1,
        id: 6398,
        country: 'ES',
        sunrise: 1607151749,
        sunset: 1607185327
    },
    timezone: 3600,
    id: 3128760,
    name: 'Barcelona',
    cod: 200
}
```

* Obtener el tiempo actual mediante la localización

```JS
const m = lib.ApiService;

const api = new m('your-apiKey', 'es', 'm');

api.searchByGeolocationGeographic({ lat: 43.2633534, lon: -2.951074 })
    .then(data => console.log(data))
    .catch(error => console.log(error));
```
// Espera una respuesta de este estilo:

```
{
    coord: { lon: 2.16, lat: 41.39 },
    weather: [
        {
            id: 802,
            main: 'Clouds',
            description: 'nubes dispersas',
            icon: '03d'
        }
    ],
    base: 'stations',
    main: {
        temp: 10.39,
        feels_like: 5.25,
        temp_min: 8.89,
        temp_max: 11.67,
        pressure: 999,
        humidity: 50
    },
    visibility: 10000,
    wind: { speed: 4.6, deg: 320 },
    clouds: { all: 40 },
    dt: 1607173717,
    sys: {
        type: 1,
        id: 6398,
        country: 'ES',
        sunrise: 1607151749,
        sunset: 1607185327
    },
    timezone: 3600,
    id: 3128760,
    name: 'Barcelona',
    cod: 200
}
```


* Obtener el tiempo actual mediante el código postal del lugar

```JS
const m = lib.ApiService;

const api = new m('your-apiKey', 'es', 'm');

api.searchZipPostcode('07190', 'es')
    .then(data => console.log(data))
    .catch(error => console.log(error));
```
// Espera una respuesta de este estilo:

```
{
    coord: { lon: 2.58, lat: 39.67 },
    weather: [
        { 
            id: 800, 
            main: 'Clear', 
            description: 'cielo claro', 
            icon: '01d' 
        }
    ],
    base: 'stations',
    main: {
        temp: 11.18,
        feels_like: 6.32,
        temp_min: 10.56,
        temp_max: 12.22,
        pressure: 1000,
        humidity: 62
    },
    visibility: 10000,
    wind: { speed: 5.1, deg: 310 },
    clouds: { all: 0 },
    dt: 1607175341,
    sys: {
        type: 1,
        id: 9693,
        country: 'ES',
        sunrise: 1607151343,
        sunset: 1607185531
    },
    timezone: 3600,
    id: 0,
    name: 'Port Des Canonge/Port Del Canonge',
    cod: 200
}
```

## Autor

El autor es *[Sebastián Moreno Saavedra](https://github.com/Sebastian197)*

## License

[MIT](LICENSE)

