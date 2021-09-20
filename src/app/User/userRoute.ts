const user = require('./userController');
module.exports = function (app:any) {
    app.get('/', user.selectUser);
}