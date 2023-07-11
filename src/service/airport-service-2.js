const { CrudService } = require('./index');
const { AirportRepository_2 } = require('../repository/index');

class AirportService extends CrudService {

    constructor() {
        const airportRepository = new AirportRepository_2();
        super(airportRepository);
    }
}
module.exports = AirportService;