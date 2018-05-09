const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = express.Router();
const gameRouter = require("./modules/api/games/router");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));
app.use((req, res, next) => {
  res.setHeader("X-Frame-Options", "ALLOWALL");
  if (req.headers.origin) {
    res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
  }
  res.setHeader("Access-Control-Allow-Credentials", true);

  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Authorization Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api/games", gameRouter);

app.get("/", (req, res) => {
  res.status(404).send("404 NOT FOUND");
});
mongoose.connect("mongodb://localhost/minihack", err => {
  if (err) {
    console.log(err);
  }
  console.log("Database connect success !!!");
});

app.listen(6969, err => {
  if (err) {
    console.log(err);
  }
  console.log("App is start at port 6969");
});
