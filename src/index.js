
// exports.printMsg = function () {
//     console.log("I made changes");
// }

// exports.anotherMsg = function(){
//     console.log("Another message");
// }

const airportsData = require('../airportData');
//console.log(airportsData);

let findAirportDetails = (airportCode) => {
    for(let index=0 ; index<airportsData.airports.length ; index++){
        if(airportsData.airports[index].code === airportCode){
            let Obj = {};
            Obj.name = airportsData.airports[index].name;
            Obj.city = airportsData.airports[index].city,
            Obj.country = airportsData.airports[index].country
            return Obj;
        }
    }
    return "Airport not found";
}

console.log(findAirportDetails('DEL'));