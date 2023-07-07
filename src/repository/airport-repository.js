const { Airport } = require('../models/index');
class AirportRepository {

    async CreateAirport(data) {
        try {
            const airport = await Airport.create({
                name: data.name,
                address: data.address,
                cityid: data.cityid
            });
            return airport;
        } catch (error) {
            console.log("something went wrong in repository layer");
            console.log(error);
        }

    }

    async GetAirport(aid) {
        try {
            const airport = await Airport.findOne({
                where: {
                    id: aid
                }
            });
            return airport;
        } catch (error) {
            console.log("something went wrong in repository layer");
            console.log(error);
        }

    }

    async UpdateAirport(data) {
        try {
            const airport = await Airport.findOne({
                 where: 
                 {
                     id: data.params.aid 
                 } 
                });
            airport.name = data.body.name;
            airport.cityid = data.body.cityid;
            airport.address = data.body.address;
            await airport.save();
            return airport;
        } catch (error) {
            console.log("something went wrong in repository layer");
            console.log(error);
        }

    }

    async DeleteAirport(aid) {
        try {
            const airport = await Airport.destroy({
                where: {
                    id: aid
                }
            });
            return airport;
        } catch (error) {
            console.log("something went wrong in repository layer");
            console.log(error);
        }

    }


}
module.exports = AirportRepository
