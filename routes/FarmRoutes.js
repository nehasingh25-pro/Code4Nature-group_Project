const express = require("express");

const {
    createFarm,
    getFarms,
    getFarm,
    updateFarm
} = require("../controllers/FarmController");

const router = express.Router();


// Create farm
router.post("/:userId", createFarm);


// Get all farms of user
router.get("/user/:userId", getFarms);


// Get one farm
router.get("/:id", getFarm);


// Update farm
router.put("/:id", updateFarm);


module.exports = router;