const app = require('./config/express');
let PORT : number = 3000;
if (process.env.NODE_ENV === "dev") {
    PORT = 9000;
}

app().listen(PORT, () => {
    console.log(`${process.env.NODE_ENV} : ${PORT}`);
});