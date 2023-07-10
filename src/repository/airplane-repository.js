const { Airplane } = require('../models/index');

class AirplaneRepository {

    async CreateAirplane(data) {
        try {
            const airplane = await Airplane.create({
                model_no: data.model_no,
                capacity: data.capacity
            });
            return airplane;

        } catch (error) {
            console.log("something went wrong in the reository layer");
            console.log(error);
        }

    }
    async GetAirplane(id) {
        try {
            const airplane = await Airplane.findByPk(id);
            return airplane;

        } catch (error) {
            console.log("something went wrong in the reository layer");
            console.log(error);
        }

    }
}
module.exports = AirplaneRepository;