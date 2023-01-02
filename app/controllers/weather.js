const weatherapiService = require('../services/openweathermapServiceApi');
// GET ALL weather
exports.index = async(req, res) => {
    const response = await weatherapiService.getWeather();
    res.send(response.data);
}
// POST create weather
exports.store = (req, res) => {

}
// PUT update weather
exports.update = (req, res) => {

}
// GET ONE get one city weather
exports.show =  (req, res) => {

}
// DELETE delete weather
exports.delete =  (req, res) => {

}


