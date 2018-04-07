const request = require("request");

function getWeather(lat, lng, callBack) {
request({
  url: `https://api.darksky.net/forecast/90212cb2917ba1bb5c4899cdf6a395c3/${lat},${lng}`,
  json: true
},(error,response,body) =>{
	if (error) {
		callBack("Unable to connect to server");
  } else if (response.statusCode == 400) {
    callBack("Unable to fetch Weather");
  } else if (response.statusCode == 200) {
      callBack(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
  });
};

module.exports = {
	getWeather
}
