class CrudService {
    constructor(repository) {
        this.repository = repository;
    }
    async create(data) {
        try {
            const result = await this.repository.create(data);
            return result;
        } catch (error) {
            console.log("something went wrong in the service layer");
            console.log(error);
        }
    }
    async get(modelId) {
        try {
            const result = await this.repository.findByPk(modelId);
            return result;
        } catch (error) {
            console.log("something went wrong in the service layer");
            console.log(error);
        }
    }
    async update(data, modelId) {
        try {
            const result = await this.repository.update(data, modelId);
            return result;
        } catch (error) {
            console.log("something went wrong in the service layer");
            console.log(error);
        }
    }
    async delete(modelId) {
        try {
            const result = await this.repository.delete(modelId);
            return result;
        } catch (error) {
            console.log("something went wrong in the service layer");
            console.log(error);
        }
    }
    async getAll() {
        try {
            const result = await this.repository.getAll();
            return result;
        } catch (error) {
            console.log("something went wrong in the service layer");
            console.log(error);
        }
    }
}
module.exports = CrudService;