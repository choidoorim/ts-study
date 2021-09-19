"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (app) {
    app.get('/', (req, res) => {
        res.send({ "message": "Hello" });
    });
};
