//Todo 
//remove for loop
//better way to access data
//make a readme

// exports.printMsg = function () {
//     console.log("I made changes");
// }

const airportsData = require('../airportData');
//console.log(airportsData);

let findAirportDetails = (airportCode) => {
    //console.log(airportCode);
    const airportObj = airportsData.airports.reduce((Obj, curr) => {
        if (curr.code === airportCode) {
            //console.log(curr.code);
            Obj["name"] = curr.name
            Obj["city"] = curr.city
            Obj["country"] = curr.country
           //return Obj;
        }
        return Obj;
    }, {})
    if(airportObj !== {}) return airportObj;
    else return "Airport not found";
}

console.log(findAirportDetails('BSdk'));