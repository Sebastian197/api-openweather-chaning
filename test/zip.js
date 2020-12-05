// Imports
const expect = require('chai').expect;
const ApiService = require('./../dist').ApiService;

// Constantes
const contants = require('./constants');
const API_KEY = contants.API_KEY;
const API_URL = contants.API_URL;

// Lo correspondiente con los tests
describe('Busqueda del tiempo actual por zip / código postal del lugar', () => {

    beforeEach(() => {
        // Hacer el mock
        const nock = require('nock');

        const resp = require('./mocks/zip');

        const query = {
            zip: 94040,
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
    it('Tiempo de Mountain View (US)', async () => {
        const api = new ApiService(API_KEY, 'es', 'metric');

        const resp = await api.searchZipPostcode('94040');

        expect(typeof resp.id).to.equal('number');
        expect(typeof resp.main.temp).to.equal('number');
        expect(typeof resp.main.pressure).to.equal('number');
        expect(typeof resp.main.humidity).to.equal('number');
        expect(typeof resp.main.temp_min).to.equal('number');
        expect(typeof resp.main.temp_max).to.equal('number');

    });

});