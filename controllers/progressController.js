const Progress = require("../models/Progress");
const Season = require("../models/Season");


// Add progress
const createProgress = async (req, res) => {

    try {

        const progress = await Progress.create(
            req.body
        );

        // Update season progress
        if (req.body.progress !== undefined) {

            await Season.findByIdAndUpdate(
                req.body.seasonId,
                {
                    progress: req.body.progress
                }
            );

        }

        res.status(201).json({
            message: "Progress saved successfully",
            progress
        });

    } catch (error) {

        res.status(500).json({
            message: "Error saving progress",
            error: error.message
        });

    }
};


// Get season progress
const getProgress = async (req, res) => {

    try {

        const progress = await Progress.find({
            seasonId: req.params.seasonId
        }).sort({
            createdAt: -1
        });

        res.json(progress);

    } catch (error) {

        res.status(500).json({
            message: "Error getting progress",
            error: error.message
        });

    }
};


module.exports = {
    createProgress,
    getProgress
};