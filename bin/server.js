const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const http = require('http').Server(app);
const errorHandler = require('../middlewares/errorHandler');
const logger = require('../middlewares/logger');
const errorLogger = require('../middlewares/errorLogger');
const routes = require('../routes');
const socket = require('../middlewares/socket');

const server = (port) => {

    app.set('view engine', 'ejs');
    app.disable('x-powered-by');
    //app.use(logger);
    app.use(fileUpload({
        useTempFiles: true,
        tempFileDir: '/tmp/'
    }));
    
    app.use('/', routes);
    app.use(express.static('public'));
    app.use('/uploads/', express.static('uploads'));
    
    socket(http);
    
    // Error Handler
    //app.use(errorLogger);
    app.use(errorHandler.serverError);
    app.use(errorHandler.notFoundError);

    http.listen(port, () => console.log(`MaryRose-Tournament's Site is running at http://localhost:${port}`))
    return http;
};

module.exports = server;