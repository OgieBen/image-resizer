import request from 'supertest';
import express from 'express';
import chai from 'chai';

const app = express();
const assert = chai.assert;

describe('Api', function() {
    describe('GET /login', function() {
        describe('respond with token', function() {
            it("should return jwt token", function() {
               return request('http://localhost:3000')
                .get('/login')
                .expect(200)
                .then((response) => {
                    assert.isString(response.body.access_token, 'valid token');
                });
            });
        })
    });


    
    describe('GET /api/v1/thumbnail', function() {
        describe('respond with 401 status code', function() {
            it("should return 401 status code", function(done) {
                    request('http://localhost:3000')
                        .post('/api/v1/thumbnail')
                        .send({name: 'john'})
                        .expect(401)
                        .end(function(err, res) {
                            if (err) return done(err);
                            done();
                          });
            });
        })
    });

    describe('GET /api/v1/thumbnail', function() {
    
        describe('checking api mal-formed url', function() {
            
            it("should return 400 status code", function() {
              return request('http://localhost:3000')
                .get('/login')
                .expect(200)
                .then((response) => {
                    assert.isString(response.body.access_token, 'valid token');

                    request('http://localhost:3000')
                    .post('/api/v1/thumbnail')
                    .send('imageurl=http://www.google.com/images/srpr/')
                    .set('Authorization', response.body.access_token)
                    .expect(400)
                    
                });
                   
            });
        });

        describe('testing properly formed url', function() {
            
            it("should return 200 status code", function() {
              return request('http://localhost:3000')
                .get('/login')
                .expect(200)
                .then((response) => {
                    assert.isString(response.body.access_token, 'valid token');

                    request('http://localhost:3000')
                    .post('/api/v1/thumbnail')
                    .send('imageurl=http://www.google.com/images/srpr/logo11w.png')
                    .set('Authorization', response.body.access_token)
                    .expect(200)
                    
                });
                   
            });
        });
    }); 
});