const express = require('express');
const { PORT } = require('./config/serverconfig');
const bodyparser = require("body-parser");


// const { CityRepository } = require('./repository/index');
const SetandStartServer = async () => {

    const app = express();

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({ extended: true }));
    const apiroutes = require('./routes/index');
    app.use('/api', apiroutes);
    app.listen(PORT, async () => {
        console.log(`server started at ${PORT}`);
    })


}
SetandStartServer();