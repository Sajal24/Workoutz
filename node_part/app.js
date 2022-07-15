require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workout");

//for env thing

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
