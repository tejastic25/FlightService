class CrudRepository {
    constructor(model) {
        this.model = model;
    }
    async create(data) {
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log("something went wrong in crud repository");
            console.log(error);
        }
    }
    async get(modelId) {
        try {
            const result = await this.model.findByPk(modelId);
            return result;
        } catch (error) {
            console.log("something went wrong in crud repository");
            console.log(error);
        }
    }
    async update(data, modelId) {
        try {
            const result = await this.model.update(data, {
                where: {
                    id: modelId
                }
            });
            return result;
        } catch (error) {
            console.log("something went wrong in crud repository");
            console.log(error);
        }
    }
    async delete(modelId) {
        try {
            const result = await this.model.destroy({
                where: {
                    id: modelId
                }
            });
            return result;
        } catch (error) {
            console.log("something went wrong in crud repository");
            console.log(error);
        }
    }
    async getAll() {
        try {
            const result = await this.model.findAll();
            return result;
        } catch (error) {
            console.log("something went wrong in crud repository");
            console.log(error);
        }
    }
}
module.exports = CrudRepository;