require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workout");

//for post request, MIDDLEWARE
//what it does is if any req comes and it have some data/body attached to it, then it passes it and attachs it to the request object so that we can access it in the request handler
//express.json() is a built in middleware function, it parses incoming JSON requests and puts the parsed data in req.body
app.use(express.json());

//middleware - fancy name for any code that executes between us getting a request on the server and sending the response to the server
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//Routes
app.use("/api/workouts", workoutRoutes);

//connecting mongodb
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log("connected to db & listening on port", process.env.PORT)
    );
  })
  .catch((err) => console.log(err));

//mongoose adds an extra layer of structure that mongodb alone doesn't give us, plus it also allows us to make models and schemes and hence structureizes everything
//we will connect to the database inside app.js with mongoose only
