// const airplane = require('../models/airplane');
const { Flights } = require('../models/index');
const AirplaneRepository = require('./airplane-repository');
// const sequelize = require('sequelize');
const { Op } = require('sequelize');

class FlightRepository {
    #CreateFilter(data) {
        let filter = {};
        if (data.arrivalAirportId) {
            Object.assign(filter, { arrivalAirportId: data.arrivalAirportId });
        }
        if (data.departureAirportId) {
            Object.assign(filter, { departureAirportId: data.departureAirportId });
        }
        let priceFilter = [];
        if (data.minPrice) {
            priceFilter.push({
                price: { [Op.gte]: data.minPrice }
            });
        }
        if (data.maxPrice) {
            priceFilter.push({
                price: { [Op.lte]: data.maxPrice }
            });
        }
        Object.assign(filter, { [Op.and]: priceFilter });
        console.log(filter);
        return filter;

    }
    constructor() {
        this.airplaneRepository = new AirplaneRepository();
    }
    async CreateFlight(data) {
        try {
            const airplane = await this.airplaneRepository.GetAirplane(data.airplaneId);
            const flight = await Flights.create({ ...data, totalSeats: airplane.capacity });
            return flight;
        } catch (error) {
            console.log("something went wrong in repsotiory layer");
            console.log(error);
        }
    }
    async GetFlight(flightId) {
        try {
            const flight = await Flights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("something went wrong in repsotiory layer");
            console.log(error);
        }
    }
    async GetAllFlights(filter) {
        try {
            const filterObject = await this.#CreateFilter(filter);
            const flight = await Flights.findAll({
                where: filterObject
            });
            return flight;
        } catch (error) {
            console.log("something went wrong in repsotiory layer");
            console.log(error);
        }
    }

    async UpdateFlight(flightId, data) {
        try {
            console.log(data,flightId);
            const result = await Flights.update(data, {
                where: {
                    id: flightId
                }
            });
            // console.log(result);
            return true;

        } catch (error) {
            console.log("something went wrong in crud repository");
            console.log(error);
        }
    }

    async DeleteFlight(data) {
        try {
            const flight = await Flights.destroy({
                where: {
                    id: data
                }
            });
            return flight;
        } catch (error) {
            console.log("something went wrong in repsotiory layer");
            console.log(error);
        }
    }
}
module.exports = FlightRepository;