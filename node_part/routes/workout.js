const express = require("express");
const { createWorkout } = require("../controllers/workoutController");
const router = express.Router();
const Workout = require("../models/workoutModel");

//receiving controller functions:
const { createWorkout } = require("../controllers/workoutController");

//Get req
router.get("/", (req, res) => {
  res.json("Get all workouts");
});

//Get req
router.get("/:id", (req, res) => {
  res.json("Get a single workout");
});

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
