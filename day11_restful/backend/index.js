// import a framework for Nodejs
const express = require('express');

// import a library of nodejs for connecting with mongodb 
const mongoose = require('mongoose');

// import a middleware(lớp trung gian) manipulate with JSON, text and encrypt URL
const bodyParser = require('body-parser');

// import images router to app
const imageRouter = require('./modules/api/images/router');

// import users router to app
const userRouter = require('./modules/api/users/router');
//
const authRouter = require('./modules/api/auth/router');
// express-session
const session = require('express-session');
// config
try {
    require("./config.json");
} catch (err) {
    throw new Error(
        "File config.json not created. Check out config-template.json"
    );
}
const config = require("./config.json");
// initialize the app
const app = express();

// return req.body contains key-value pairs, 
// where the value can be a string or array(when extended is false) 
// or any type (when extended is true)
app.use(bodyParser.urlencoded({
    extended: false
}));
// create session
try {
    app.use(session({
        secret: config.sessionSecret,
        resave: false, // cứ mỗi lần login thì tạo cookie 1 lần
        saveUninitialized: false, // người dùng chưa login thì ko save
        cookie: {
            secure: false,
            maxAge: 12 * 60 * 60 * 1000
        }
    }));
} catch (err) {
    console.log(err);
}
// register routers
app.use('/api/images', imageRouter);
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);



app.get('/', (req, res) => {
    res.status(404).send('404 NOT FOUND');
});

// Connect with DB
mongoose.connect(config.mongoPath, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Database connect successfull");
    }
});

// create a port
const port = process.env.port || 6969;

// Start server
app.listen(port, (err) => {
    if (err) console.log(err);
    console.log("Server started at port: " + port);
});