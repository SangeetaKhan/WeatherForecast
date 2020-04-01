const fetchWeatherController = require('./controllers/fetch-weather');
const citiesResponse = require('./cities.json');

module.exports = (app) => {
    app.get("/fetchWeather", fetchWeatherController.fetchWeatherDetails);
    app.get("/fetchCities", (req,res) => res.json(citiesResponse));
}
