const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());

if (process.env.ENV === "Test") {
  const db = mongoose
    .connect("mongodb://127.0.0.1/pollAPI_Test", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((db) => console.log("db is connected to test"))
    .catch((err) => console.log(err));
} else {
  const db = mongoose
    .connect("mongodb://127.0.0.1/pollAPI", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((db) => console.log("db is connected"))
    .catch((err) => console.log(err));
}

const port = process.env.PORT || 8080;

const Poll = require("./models/pollModel");

const pollRouter = require("./routes/pollRouter")(Poll);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", pollRouter);

app.get("/", (req, res) => {
  res.send("Welcome to my Nodemon API!");
});

app.server = app.listen(port, () => {
  console.log("Running on port " + port);
});

module.exports = app;
