const routes = require('express').Router();

const SyncData = require('./SyncData');
const logo = require('./logo');
const sponsors = require('./sponsors');

routes.get('/SyncData', SyncData);
routes.post('/logo/:team', logo);
routes.post('/sponsors', sponsors);


module.exports = routes;