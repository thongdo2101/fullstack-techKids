const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json({
    urlEncode: true
}));

// mongoose.connect('http://localhost:27017/tk-hotgirls', (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log("Database connect successfull");
//     }
// });

app.get('/', (req, res) => {
    res.send('ok');
})
const port = process.env.port || 6969;
app.listen(port, (err) => {
    if (err) console.log(err);
    console.log("Server started at port: " + port);
});