const app = require('../app');
const request = require('supertest');

describe('Simple Web App', () => {
    it('/', function (done) {
        request(app)
            .get('/')
            .expect(200, done)
    })
    it('/next', function (done) {
        request(app)
            .get('/next')
            .expect(200)
            .expect("Thank you.")
            .end((err) => {
                if (err) return done(err);
                done();
            });
    })
})