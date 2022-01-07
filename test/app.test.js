/* eslint-disable no-undef */
const app = require('../app');
const server = app.listen();
const request = require('supertest').agent(server);

describe('App Tests', function () {
    after(function () {
        server.close();
    });

    describe('when GET /invalid/path', function () {
        it('should return 404 status', function (done) {
            request
                .get('/invalid/path')
                .expect(404, done)
        });
    });

    describe('when GET /', function () {
        it('should return 200 status', function (done) {
            request
                .get('/')
                .expect(200, done)
        });
    });
});
