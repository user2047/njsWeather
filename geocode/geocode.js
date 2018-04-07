const request = require("request");


function geocodeAddress(address, callBack) {

  var encodedAddress = encodeURIComponent(address);


request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyDtV1OIoPautzYVaGH1WAYPYKeAcu_QKbo`,
  json: true
},(error,response,body) =>{
// console.log(JSON.stringify(body, undefined, 2));
// console.log();
// console.log(JSON.stringify(response, undefined, 2));
// console.log();
// console.log(JSON.stringify(error, undefined, 2));
if (error) {
	callBack("Unable to connect to Google servers");
}  else if (body.status === "ZERO_RESULTS") {
	callBack("Unable to find that address");
} else if (body.status === "OK") {
	callBack(undefined, {
    Address: `Address: ${body.results[0].formatted_address}`,
    Latitude: `Latitude: ${body.results[0].geometry.location.lat}`,
    Longitude: `Longitude: ${body.results[0].geometry.location.lng}`
})
}
});
}


module.exports = {
  geocodeAddress
}
