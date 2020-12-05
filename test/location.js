// Imports
const expect = require('chai').expect;
const ApiService = require('./../dist').ApiService;

// Constantes
const contants = require('./constants');
const API_KEY = contants.API_KEY;
const API_URL = contants.API_URL;

// Lo correspondiente con los tests
describe('Busqueda del tiempo actual por la localización geográfica', () => {

    beforeEach(() => {
        // Hacer el mock
        const nock = require('nock');

        const resp = require('./mocks/location');

        const query = {
            lat: 35,
            lon: 139,
            units: 'metric',
            lang: 'es',
            appid: API_KEY
        };

        nock(API_URL)
            .get('/data/2.5/weather')
            .query(query)
            .reply(200, resp);
    });

    // Pruebas
    it('Tiempo de coordenadas establecidas de Shuzenji (Japón)', async () => {
        const api = new ApiService(API_KEY, 'es', 'metric');

        const resp = await api.searchByGeolocationGeographic({ lat: 35, lon: 139 });

        expect(typeof resp.id).to.equal('number');
        expect(typeof resp.main.temp).to.equal('number');
        expect(typeof resp.main.pressure).to.equal('number');
        expect(typeof resp.main.humidity).to.equal('number');
        expect(typeof resp.main.temp_min).to.equal('number');
        expect(typeof resp.main.temp_max).to.equal('number');

    });

});