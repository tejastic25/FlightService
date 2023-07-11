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


router.get('/city/:id/airport', Citycontroller.getAirports);
//crud airports
router.post('/city/:id/airport', Airportcontroller.create);
router.get('/city/:id/airport/:aid', Airportcontroller.get);
router.patch('/city/:id/airport/:aid', Airportcontroller.update);
router.delete('/city/:id/airport/:aid', Airportcontroller.destroy);


router.get('/flight', FlightController.getAll);
//flight crud
router.post('/flight', FlightMiddlewares.ValidateFlightCreate, FlightController.create);
// router.get('/city/:id/airport/:aid/flight/:fid', FlightController.get);
// router.get('/city/:id/airport/:aid/flight/:fid', FlightController.update);
router.delete('/flight/:id', FlightController.destroy);



module.exports = router;