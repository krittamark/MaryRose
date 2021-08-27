const routes = require('express').Router();

const client = require('./client');
const admin = require('./admin');

routes.get('/client', client);
routes.get('/admin', admin);

module.exports = routes;