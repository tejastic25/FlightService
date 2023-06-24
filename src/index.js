const express = require("express");
const SetandStartServer = () => {

    const app = express();
    app.listen(PORT, () => {
        console.log(`server started at ${PORT}`);
    })

}