"use strict";
const user = require('./userController');
module.exports = function (app) {
    app.get('/', user.selectUser);
};
