const API_PATH = '/api';
const countries = require('../../resources/countries.json');

module.exports = (app) => {
  app.get(`${API_PATH}/countries`, (req, res) => {
    res.json(countries)
  })
}