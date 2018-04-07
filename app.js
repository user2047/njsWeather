const yargs = require("yargs");
const geocode = require("./geocode/geocode");
const weather = require("./weather/weather");

const argv = yargs.options({
	a: {
	demand: true,
	alias: "address",
	describe: "Address to fetch weather for",
	string: true
	}
})
.help()
.alias("help","h")
.argv;

geocode.geocodeAddress(argv.a, (errorMessage, results) =>{
if (errorMessage){
	console.log(errorMessage);
} else {
	console.log(results.address);
	weather.getWeather(results.latitude,results.longitude, (errorMessage, weatherResults) =>{
		if (errorMessage) {
			console.log(errorMessage);
		} else {
			console.log(`Temperature: ${weatherResults.temperature}`);
			console.log(`Apparent Temperature: ${weatherResults.apparentTemperature}`);
		}
	});
}
});
