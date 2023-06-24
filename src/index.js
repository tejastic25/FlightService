const express = require("express");
const { PORT } = require('./config/serverconfig')
const SetandStartServer = () => {

    const app = express();
    app.listen(PORT, () => {
        console.log(`server started at ${PORT}`);
    })

}
SetandStartServer();