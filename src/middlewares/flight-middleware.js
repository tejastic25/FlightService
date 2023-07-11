const ValidateFlightCreate = (req, res, next) => {
    if (!req.body.flightNumber ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.airplaneId ||
        !req.body.price ||
        !req.body.arrivalTime ||
        !req.body.departureTime
    ) {
        
        return res.status(400).json({
            data: {},
            success: false,
            message: "invalid request body for creating flight",
            err: "missing mandatory property required to create a flight"
        });
    }
    next();
}
module.exports = { ValidateFlightCreate };