require("dotenv").config();

const express = require("express");
const app = express();

//for env thing

//middleware - fancy name for any code that executes between us getting a request on the server and sending the response to the server
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get("/", (req, res) => {
  res.json({ msg: "welcome to the app" });
});

app.listen(process.env.PORT, () =>
  console.log("listening on port", process.env.PORT)
);
