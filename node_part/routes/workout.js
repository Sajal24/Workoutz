const express = require("express");
const router = express.Router();
const Workout = require("../models/workoutModel");

//receiving controller functions:
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

//Get all req
router.get("/", getWorkouts);

//Get req
router.get("/:id", getWorkout);

//Post req
router.post("/", createWorkout);

//Delete req
router.delete("/:id", deleteWorkout);

//Update req
router.patch("/:id", updateWorkout);

module.exports = router;
