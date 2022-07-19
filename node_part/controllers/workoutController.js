const { default: mongoose } = require("mongoose");
const Workout = require("../models/workoutModel");

//get all
const getWorkouts = async (req, res) => {
  const workout = await Workout.find({}).sort({ createdAt: -1 });

  res.status(200).json(workout);
};

//get by id
const getWorkout = async (req, res) => {
  const { id } = req.params;

  //to check that the id we enter should be valid (must be a string of 12bytes or 24hex characters)
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await Workout.findById(id);

  // using return here as we want to stop the execution here if workout is empty, return keyword helps stop the execution and won't execute rest of the code below (res.status(200).json(workout))
  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};

//post by id
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  const workout = await Workout.create({ title, load, reps });

  //add document to db
  try {
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

//delete by id
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: error.message });
  }

  const workout = await Workout.findOneAndDelete({ _id: id });

  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};

//update by id
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body });
  //"..." -> spread / rest operator, allows an expression to be expanded in places where multiple arguments are expected. The rest parameter syntax is used for functions with a variable number of arguments.

  if (!workout) {
    return res.json(404).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};

//to export all this to workout.js(router file)
module.exports = {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
};
