import express from "express";

module.exports = function () {
    const app = express();
    app.use(express.json())

    require('../app/User/userRoute')(app);

    return app;
}