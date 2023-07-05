const express = require('express');
const Citycontroller = require('../../controller/city-controller');

const router = express.Router();

router.post('/city', Citycontroller.create);
router.get('/city', Citycontroller.getall);
router.get('/city/:id', Citycontroller.get);
router.get('/city/:id/airports', Citycontroller.getAirports);
router.delete('/city/:id', Citycontroller.destroy);
router.patch('/city/:id', Citycontroller.update);

module.exports = router;