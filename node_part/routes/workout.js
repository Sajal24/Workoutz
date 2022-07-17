const express = require("express");
const router = express.Router();
const Workout = require("../models/workoutModel");

//Get req
router.get("/", (req, res) => {
  res.json("Get all workouts");
});

//Get req
router.get("/:id", (req, res) => {
  res.json("Get a single workout");
});

//Post req
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;

  const workout = await Workout.create({ title, load, reps });

  try {
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }

  res.json("Post a new workout");
});

//Delete req
router.delete("/:id", (req, res) => {
  res.json("Delete a workout");
});

//Update req
router.patch("/:id", (req, res) => {
  res.json("Update a workout");
});

module.exports = router;
