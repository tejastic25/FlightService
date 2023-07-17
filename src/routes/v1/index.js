const express = require('express');
const Citycontroller = require('../../controller/city-controller');
const Airportcontroller = require('../../controller/airport-controller');
const FlightController = require('../../controller/flight-controller');
const { FlightMiddlewares } = require('../../middlewares/index');
const router = express.Router();

router.get('/city', Citycontroller.getall);
//crud cities
router.post('/city', Citycontroller.create);
router.get('/city/:id', Citycontroller.get);
router.patch('/city/:id', Citycontroller.update);
router.delete('/city/:id', Citycontroller.destroy);


router.get('/city/:id/airports', Citycontroller.getAirports);
//crud airports
router.post('/city/:id/airports', Airportcontroller.create);
router.get('/city/:id/airports/:aid', Airportcontroller.get);
router.patch('/city/:id/airports/:aid', Airportcontroller.update);
router.delete('/city/:id/airports/:aid', Airportcontroller.destroy);


router.get('/flights', FlightController.getAll);
//flight crud
router.post('/flights', FlightMiddlewares.ValidateFlightCreate, FlightController.create);
router.get('/flights/:id', FlightController.get);
router.patch('/flights/:id', FlightController.update);

// router.get('/city/:id/airport/:aid/flight/:fid', FlightController.get);
// router.get('/city/:id/airport/:aid/flight/:fid', FlightController.update);
router.delete('/flights/:id', FlightController.destroy);



module.exports = router;