const express = require("express");
const { PORT } = require('./config/serverconfig');
const bodyparser = require("body-parser");
const SetandStartServer =async  () => {
    const app = express();

    app.use(bodyparser.json);
    app.use(bodyparser.urlencoded({ extended: true }));

    app.listen(PORT,async () => {
        console.log(`server started at ${PORT}`);
       
    })

}
SetandStartServer();