const routes = require('express').Router();
const bodyParser = require('body-parser')

// Require routes
const screen = require('./screen');
const api = require('./api');

routes.use(bodyParser.urlencoded({ extended: true }));
routes.use(bodyParser.json());


routes.get('/', require('./screen/clientNew'));
routes.use('/screen', screen);
routes.use('/api', api);

module.exports = routes;