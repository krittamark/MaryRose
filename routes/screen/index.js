const routes = require('express').Router();

const client = require('./client');
const clientNew= require('./clientNew');
const admin = require('./admin');

routes.get('/client', client);
routes.get('/v2/client', clientNew);
routes.get('/admin', admin);

module.exports = routes;