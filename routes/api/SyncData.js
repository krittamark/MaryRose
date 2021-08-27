const fs = require('fs');

module.exports = (req, res, next) => {
    const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));
    res.status(200).json(data);
};