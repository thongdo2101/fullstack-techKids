const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const imageRouter = require('./modules/api/images/router');
const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use('/api/images', imageRouter);

mongoose.connect('mongodb://localhost:27017/tk-hotgirls', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Database connect successfull");
    }
});

const port = process.env.port || 6969;
app.listen(port, (err) => {
    if (err) console.log(err);
    console.log("Server started at port: " + port);
});