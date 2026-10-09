const express = require("express");

const {
    getUser,
    updateUser
} = require("../controllers/userController");

const router = express.Router();


// Get user
router.get("/:id", getUser);


// Update user
router.put("/:id", updateUser);


module.exports = router;