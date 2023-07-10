const { AirportService } = require("../service/index");
const airportservice = new AirportService();

const create = async (req, res) => {
    try {
        const airport = await airportservice.CreateAirport(req.body);
        return res.status(201).json({
            data: airport,
            success: true,
            message: 'Successfully created a airport',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a airport',
            err: error
        });
    }
}
const get = async (req, res) => {
    try {
        const airport = await airportservice.GetAirport(req.params.aid);
        return res.status(201).json({
            data: airport,
            success: true,
            message: 'Successfully got the airport',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get the airport',
            err: error
        });
    }
}
const destroy = async (req, res) => {
    try {
        const airport = await airportservice.DeleteAirport(req.params.aid);
        return res.status(201).json({
            data: airport,
            success: true,
            message: 'Successfully deleted the airport',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to deletd the airport',
            err: error
        });
    }
}
const update = async (req, res) => {
    try {
        const airport = await airportservice.UpdateAirport(req);
        return res.status(201).json({
            data: airport,
            success: true,
            message: 'Successfully updated the airport',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the airport',
            err: error
        });
    }
}
module.exports = {
    create, get, destroy, update
}