const { FlightService } = require('../service/index');
const flightService = new FlightService();


const create = async (req, res) => {
    try {
        const flight = await flightService.CreateFlight(req.body);
        return res.status(200).json({
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
        const flight = await flightService.getFlight(req.params);
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
        const flight = await flightService.UpdateFlight(req);
        return res.status(200).json({
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