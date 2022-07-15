const express = require("express");
const router = express.Router();

//Get req
router.get("/", (req, res) => {
  res.json("Get all workouts");
});

//Get req
router.get("/:id", (req, res) => {
  res.json("Get a single workout");
});

//Post req
router.post("/", (req, res) => {
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
