const express = require('express');
const Citycontroller = require('../../controller/city-controller');
const Airportcontroller = require('../../controller/airport-controller');

const router = express.Router();

router.get('/city', Citycontroller.getall);
//crud cities
router.post('/city', Citycontroller.create);
router.get('/city/:id', Citycontroller.get);
router.patch('/city/:id', Citycontroller.update);
router.delete('/city/:id', Citycontroller.destroy);


router.get('/city/:id/airport', Citycontroller.getAirports);
//crud airports
router.post('/city/:id/airport', Airportcontroller.CreateAirport);
router.get('/city/:id/airport/:aid', Airportcontroller.GetAirport);
router.patch('/city/:id/airport/:aid', Airportcontroller.UpdateAirport);
router.delete('/city/:id/airport/:aid', Airportcontroller.DeleteAirport);


module.exports = router;