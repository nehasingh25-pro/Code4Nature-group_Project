const express = require("express");

const {
    createAssessment,
    getAssessments,
    getAssessment
} = require("../controllers/assessmentController");

const router = express.Router();

router.post("/", createAssessment);

router.get("/user/:userId", getAssessments);

router.get("/:id", getAssessment);

module.exports = router;