# Openweathermap api librería
[![Build Status](https://travis-ci.org/Sebastian197/api-openweather-chaning.svg?branch=main)](https://travis-ci.org/Sebastian197/api-openweather-chaning)
[![npm version](https://badge.fury.io/js/api-ow-chaning.svg)](https://badge.fury.io/js/api-ow-chaning)
[![Coverage Status](https://coveralls.io/repos/github/Sebastian197/api-openweather-chaning/badge.svg?branch=main)](https://coveralls.io/github/Sebastian197/api-openweather-chaning?branch=main)
[![Documentation](https://raw.githubusercontent.com/Sebastian197/api-openweather-chaning/main/documentation/images/coverage-badge-documentation.svg?sanitize=true)](https://github.com/Sebastian197/api-openweather-chaning)


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

### Para obtener el pronostico del tiempo, por defecto un día

* Obtener el tiempo actual buscando mediante el nombre del lugar

```JS
const m = lib.ApiService;

const api = new m('your-apiKey', 'es', 'm');

api.searchByName('Barcelona', 'es')
    .then(data => console.log(data))
    .catch(error => console.log(error));
```

* Obtener el tiempo actual mediante la localización

```JS
const m = lib.ApiService;

const api = new m('your-apiKey', 'es', 'm');

api.searchByGeolocationGeographic({ lat: 43.2633534, lon: -2.951074 })
    .then(data => console.log(data))
    .catch(error => console.log(error));
```

* Obtener el tiempo actual mediante el código postal del lugar

```JS
const m = lib.ApiService;

const api = new m('your-apiKey', 'es', 'm');

api.searchZipPostcode('08080', 'es')
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
### Para obtener el pronostico del tiempo de 5 días

Puede buscar el pronóstico del tiempo durante 5 días con datos cada 3 horas por nombre de ciudad añadiendo el flag true como ultimo parámetro.

* Obtener el tiempo actual buscando mediante el nombre del lugar

```JS
const m = lib.ApiService;

const api = new m('your-apiKey', 'es', 'm');

api.searchByName('Barcelona', 'es', true)
    .then(data => {

        const { list } = data;
        // example
        list.forEach(e => {
            console.log(e);
        });
        
    })
    .catch(error => console.log(error));
```

* Obtener el tiempo actual mediante la localización

```JS
const m = lib.ApiService;

const api = new m('your-apiKey', 'es', 'm');

api.searchByGeolocationGeographic({ lat: 43.2633534, lon: -2.951074 }, true)
    .then(data => {

        const { list } = data;
        // example
        list.forEach(e => {
            console.log(e);
        });
        
    })
    .catch(error => console.log(error));
```

* Obtener el tiempo actual mediante el código postal del lugar

```JS
const m = lib.ApiService;

const api = new m('your-apiKey', 'es', 'm');

api.searchZipPostcode('08080', 'es', true)
    .then(data => {

        const { list } = data;
        // example
        list.forEach(e => {
            console.log(e);
        });
        
    })
    .catch(error => console.log(error));
```

// Espera una respuesta de este estilo:

```
{
    cod: "200",
    message: 0,
    cnt: 40,
    list: [
        {
            dt: 1607256000,
            main: {
                temp: 282.82,
                feels_like: 277.43,
                temp_min: 282.82,
                temp_max: 283.91,
                pressure: 1003,
                sea_level: 1003,
                grnd_level: 996,
                humidity: 62,
                temp_kf: -1.09
            },
            weather: [
                {
                    id: 802,
                    main: "Clouds",
                    description: "scattered clouds",
                    icon: "03d"
                }
            ],
            clouds: {
                all: 31
            },
            wind: {
                speed: 5.49,
                deg: 291
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "d"
            },
            dt_txt: "2020-12-06 12:00:00"
        },
        {
            dt: 1607266800,
            main: {
                temp: 284.14,
                feels_like: 278.5,
                temp_min: 284.14,
                temp_max: 284.79,
                pressure: 1002,
                sea_level: 1002,
                grnd_level: 996,
                humidity: 57,
                temp_kf: -0.65
            },
            weather: [
                {
                    id: 803,
                    main: "Clouds",
                    description: "broken clouds",
                    icon: "04d"
                }
            ],
            clouds: {
                all: 64
            },
            wind: {
                speed: 5.86,
                deg: 286
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "d"
            },
            dt_txt: "2020-12-06 15:00:00"
        },
        {
            dt: 1607277600,
            main: {
                temp: 283.32,
                feels_like: 278.46,
                temp_min: 283.32,
                temp_max: 283.42,
                pressure: 1003,
                sea_level: 1003,
                grnd_level: 997,
                humidity: 59,
                temp_kf: -0.1
            },
            weather: [
                {
                    id: 802,
                    main: "Clouds",
                    description: "scattered clouds",
                    icon: "03n"
                }
            ],
            clouds: {
                all: 46
            },
            wind: {
                speed: 4.68,
                deg: 305
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "n"
            },
            dt_txt: "2020-12-06 18:00:00"
        },
        ....
        
    ],
    city: {
        id: 3128760,
            name: "Barcelona",
            coord: {
            lat: 41.3888,
            lon: 2.159
        },
        country: "ES",
        population: 1621537,
        timezone: 3600,
        sunrise: 1607238205,
        sunset: 1607271721
    }
}
```

## Autor

El autor es *[Sebastián Moreno Saavedra](https://github.com/Sebastian197)*

## License

[MIT](LICENSE)

