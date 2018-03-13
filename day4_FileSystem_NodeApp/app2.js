// const fs = require("./fileController");
// // fs.readFile("./note.txt", (fileData) => {
// //     console.log(fileData);
// // });
// fs.writeFile("./note.txt", "This is a note!!");
// fs.readFile("./note.txt", (fileData) => {
//     console.log(fileData);
// });
const express = require("express");

let app = express();

app.get("/gift", (req, res) => {
    res.send("Hello. It's http://****");
});
app.use(express.static("public"));
app.listen(6969, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("App is start at port 6969");
});