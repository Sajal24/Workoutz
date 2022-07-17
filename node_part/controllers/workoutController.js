const Workout = require("../models/workoutModel");

//get all

//get by id

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

//update by id

//to export all this to workout.js(router file)
module.exports = {
  createWorkout,
};
