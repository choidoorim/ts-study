import express from "express";

module.exports = function () {
    const app: express.Application = express();
    app.use(express.json())
    const userRoute: express.Router = require('../app/User/userRoute');
    app.use('/app/user', userRoute);
    // require('../app/User/userRoute')(app);

    return app;
}