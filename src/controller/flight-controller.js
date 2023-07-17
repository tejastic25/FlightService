const { FlightService } = require('../service/index');
const { ClientErrorCodes,
    ServerErrorCodes,
    SuccessCodes } = require('../utils/eror-codes');
const flightService = new FlightService();


const create = async (req, res) => {
    try {
        const flightrequestdata = {
            flightNumber: req.body.flightNumber,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            airplaneId: req.body.airplaneId,
            price: req.body.price,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime

        }
        const flight = await flightService.CreateFlight(flightrequestdata);
        return res.status(SuccessCodes.CREATED).json({
            data: flight,
            success: true,
            message: 'Successfully created a flight',
            err: {}
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a flight',
            err: error
        });

    }
}
const getAll = async (req, res) => {
    try {
        const flight = await flightService.GetAllFlights(req.query);
        return res.status(200).json({
            data: flight,
            success: true,
            message: 'Successfully fetched all flights',
            err: {}
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get flights',
            err: error
        });

    }
}
const get = async (req, res) => {
    try {
        const flight = await flightService.GetFlight(req.params.id);
        return res.status(200).json({
            data: flight,
            success: true,
            message: 'Successfully fetched the flight',
            err: {}
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get the flight',
            err: error
        });

    }
}
const update = async (req, res) => {
    try {
        const flight = await flightService.UpdateFlight(req.params.id, req.body);
        return res.status(201).json({
            data: flight,
            success: true,
            message: 'Successfully update a flight',
            err: {}
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update a flight',
            err: error
        });

    }
}
const destroy = async (req, res) => {
    try {
        const flight = await flightService.DeleteFlight(req.params.id);
        return res.status(200).json({
            data: flight,
            success: true,
            message: 'Successfully deleted a flight',
            err: {}
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to delete a flight',
            err: error
        });

    }
}
module.exports = {
    create, get, getAll, destroy, update
}