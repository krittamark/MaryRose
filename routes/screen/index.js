const routes = require('express').Router();

const client = require('./client');
const clientNew = require('./clientNew');
const admin = require('./admin');

routes.get('/client', clientNew);
routes.get('/v1/client', client);
routes.get('/admin', admin);

module.exports = routes;