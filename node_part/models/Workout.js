const mongoose = require("mongoose");

//we need mongoose to make schemas and model and structurize our documentl, so that we make sure the data that we get is well structurized, mongodb alonse is schemaless

const Schema = mongoose.Schema;

//first argument describes how the argument looks, then adding a second object timestamps which will record the time when the document was updatad or last updated

const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

//Now we have to make a model based on this Schema
//Schema defines the structure of a document in a db, what model does it apply the schema to a particular model and then we use this model to interact with collections of that name

module.exports = mongoose.model("Workout", workoutSchema);

//here this automatically creates a collection for us based on this name (Workout) and pluralizes this and builds that collection in the db for us
