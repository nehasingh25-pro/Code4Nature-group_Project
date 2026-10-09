const Assessment = require("../models/Assessment");


// Create assessment
const createAssessment = async (req, res) => {

    try {

        const assessment = await Assessment.create(
            req.body
        );

        res.status(201).json({
            message: "Assessment saved successfully",
            assessment
        });

    } catch (error) {

        res.status(500).json({
            message: "Error saving assessment",
            error: error.message
        });

    }
};


// Get user assessments
const getAssessments = async (req, res) => {

    try {

        const assessments = await Assessment.find({
            userId: req.params.userId
        }).sort({
            createdAt: -1
        });

        res.json(assessments);

    } catch (error) {

        res.status(500).json({
            message: "Error getting assessments",
            error: error.message
        });

    }
};


// Get one assessment
const getAssessment = async (req, res) => {

    try {

        const assessment = await Assessment.findById(
            req.params.id
        );

        if (!assessment) {

            return res.status(404).json({
                message: "Assessment not found"
            });

        }

        res.json(assessment);

    } catch (error) {

        res.status(500).json({
            message: "Error getting assessment",
            error: error.message
        });

    }
};


module.exports = {
    createAssessment,
    getAssessments,
    getAssessment
};