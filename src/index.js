const express = require('express');
const { PORT } = require('./config/serverconfig');
const bodyparser = require("body-parser");
const { Airport, City } = require('./models/index');
const apiroutes = require('./routes/index');
const db = require('./models/index');
const sequelize = require('sequelize');
const SetandStartServer = async () => {

    const app = express();

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({ extended: true }));

    app.use('/api', apiroutes);

    app.listen(PORT, async () => {
        console.log(`server started at ${PORT}`);
        if (process.env.SYNC_DB) {
            db.sequelize.sync({ alter: true });
        }
        // const city = await City.findOne({
        //     where: {
        //         id: 4
        //     }
        // });
        // const airports = await city.getAirports();
        // console.log(city, airports);

    })


}
SetandStartServer();