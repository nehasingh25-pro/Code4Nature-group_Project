const express = require("express");

const {
    createSeason,
    getSeasons,
    getSeason,
    updateSeason
} = require("../controllers/seasonController");

const router = express.Router();


// Create season
router.post("/", createSeason);


// Get user's seasons
router.get("/user/:userId", getSeasons);


// Get one season
router.get("/:id", getSeason);


// Update season
router.put("/:id", updateSeason);


module.exports = router;