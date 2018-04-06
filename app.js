const request = require("request");
const yargs = require("yargs");

const argv = yargs

request({
  url: "https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia&key=AIzaSyDtV1OIoPautzYVaGH1WAYPYKeAcu_QKbo",
  json: true
},(error,response,body) =>{
// console.log(JSON.stringify(body, undefined, 2));
// console.log();
// console.log(JSON.stringify(response, undefined, 2));
// console.log();
// console.log(JSON.stringify(error, undefined, 2));
console.log(`Address: ${body.results[0].formatted_address}`);
console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
console.log(`Longitude: ${body.results[0].geometry.location.lng}`);

});






// console.log("starting app...");
//
// setTimeout(() => {
//   console.log("callBack 1: 2 delay");
// }, 2000);
//
// setTimeout(() => {
//   console.log("callBack 2: 0 delay");
// }, 0);
//
// function getUser(id, callback) {
//   var user = {
//     id,
//     name: "vikram"
//   };
//   setTimeout(() =>{
//     callback(user);
//   },3000);
// };
//
// getUser(31,(user) =>{
//   console.log(user);
// });
//
//
// console.log("finishing up...");
