const express = require("express");

const {
    createProgress,
    getProgress
} = require("../controllers/progressController");

const router = express.Router();


// Add progress
router.post("/", createProgress);


// Get season progress
router.get("/:seasonId", getProgress);


module.exports = router;