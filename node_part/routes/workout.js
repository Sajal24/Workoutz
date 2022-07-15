const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json("Get all workouts");
});

router.get("/:id", (req, res) => {
  res.json("Get a single workout");
});

router.get("", (req, res) => {});

router.get("", (req, res) => {});

module.exports = router;
