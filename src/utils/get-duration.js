const { TIME } = require("sequelize");

const GetDuration =( data)=> {
    x = new Date(data.arrivalTime);
    y = new Date(data.departureTime);
    return( x.getTime() - y.getTime()).TIME;
}
module.exports=GetDuration;