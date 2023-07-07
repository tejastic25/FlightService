const { AirportRepository } = require('../repository/index');

class AirportService {
    constructor() {
        this.airportRepository = new AirportRepository();
    }
    async CreateAirport(data) {
        try {
            const airport = await this.airportRepository.CreateAirport(data);
            return airport;
        } catch (error) {
            console.log("something went wrong in service layer");
            console.log(error);
        }
    }
    async GetAirport(aid) {
        try {
            const airport = await this.airportRepository.GetAirport(aid);
            return airport;
        } catch (error) {
            console.log("something went wrong in service layer");
            console.log(error);
        }
    }
    async UpdateAirport(data) {
        try {
            const airport = await this.airportRepository.UpdateAirport(data);
            return airport;
        } catch (error) {
            console.log("something went wrong in service layer");
            console.log(error);
        }
    }
    async DeleteAirport(aid) {
        try {
            const airport = await this.airportRepository.DeleteAirport(aid);
            return airport;
        } catch (error) {
            console.log("something went wrong in service layer");
            console.log(error);
        }
    }
}

module.exports =  AirportService 