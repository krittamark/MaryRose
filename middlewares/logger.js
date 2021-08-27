const winston = require('winston');
const expressWinston = require('express-winston');

module.exports = expressWinston.logger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    )
});