const request = require("request");

function getWeather(latitude, longitude, callBack) {
request({
  url: `https://api.darksky.net/forecast/90212cb2917ba1bb5c4899cdf6a395c3/${latitude},${longitude}`,
  json: true
},(error,response,body) =>{
	if (error) {
		console.log("Unable to connect to server");
  } else if (response.statusCode == 400) {
    console.log("Unable to fetch Weather")
  } else if (response.statusCode == 200) {
      callBack(body.currently.temperature);
}});

};

module.exports = {
	getWeather
}
