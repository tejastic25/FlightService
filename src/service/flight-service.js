const { FlightRepository } = require('../repository/index');
const CompareTime = require('../utils/compare-time');
const GetDuration = require('../utils/get-duration');
class FLightService {


    constructor() {
        this.flightRepository = new FlightRepository();
    }
    async CreateFlight(data) {
        try {
            if (CompareTime(data.arrivalTime, data.departureTime)) {
                throw { error: " time should always be less than departure time" };
            }
            const flight = await this.flightRepository.CreateFlight(data);
            // console.log(GetDuration(data));
            // flight.duration = (GetDuration(data));
            return flight;
        } catch (error) {
            console.log("something went wrong in service layer");
            console.log(error);
        }
    }
    async GetFlight(flightId) {
        try {
            const flight = await this.flightRepository.GetFlight(flightId);
            return flight;
        } catch (error) {
            console.log("something went wrong in service layer");
            console.log(error);
        }
    }
    async GetAllFlights(filter) {
        try {
            const flight = await this.flightRepository.GetAllFlights(filter);
            return flight;
        } catch (error) {
            console.log("something went wrong in service layer");
            console.log(error);
        }
    }

    async UpdateFlight(flightId, data) {
        try {
            const flight = await this.flightRepository.UpdateFlight(flightId, data);
            return flight;
        } catch (error) {
            console.log("something went wrong in service layer");
            console.log(error);
        }
    }

    async DeleteFlight(data) {
        try {
            const flight = await this.flightRepository.DeleteFlight(data);
            return flight;
        } catch (error) {
            console.log("something went wrong in service layer");
            console.log(error);
        }
    }

    // async CreateFlight(data) {
    //     try {
    //         const flight = await this.flightRepository.CreateFlight(data);
    //         return flight;
    //     } catch (error) {
    //         console.log("something went wrong in service layer");
    //         console.log(error);
    //     }
    // }



}
module.exports = FLightService