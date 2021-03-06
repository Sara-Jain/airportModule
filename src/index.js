const airportsData = require('../airportData');

exports.findAirportDetails = (airportCode) => {
    if(typeof airportCode !== 'string' ) return "Invalid function argument.Pass String."
    const airportObj = airportsData.airports.reduce((Obj, curr) => {
        if (curr.code === airportCode) {
            Obj["name"] = curr.name
            Obj["city"] = curr.city
            Obj["country"] = curr.country
        }
        return Obj;
    }, {})
    if (Object.keys(airportObj).length === 0)
        return "Airport not found";
    else return airportObj;
}



