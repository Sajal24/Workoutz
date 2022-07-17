const express = require("express");
const router = express.Router();
const Workout = require("../models/workoutModel");

//receiving controller functions:
const {
  createWorkout,
  getWorkouts,
  getWorkout,
} = require("../controllers/workoutController");

//Get all req
router.get("/", getWorkouts);

//Get req
router.get("/:id", getWorkout);

//Post req
router.post("/", createWorkout);

//Delete req
router.delete("/:id", (req, res) => {
  res.json("Delete a workout");
});

//Update req
router.patch("/:id", (req, res) => {
  res.json("Update a workout");
});

module.exports = router;
