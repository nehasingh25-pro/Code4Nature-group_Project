const Season = require("../models/Season");


// Create season
const createSeason = async (req, res) => {

    try {

        const season = await Season.create(req.body);

        res.status(201).json({
            message: "Season created successfully",
            season
        });

    } catch (error) {

        res.status(500).json({
            message: "Error creating season",
            error: error.message
        });

    }
};


// Get all seasons
const getSeasons = async (req, res) => {

    try {

        const seasons = await Season.find({
            userId: req.params.userId
        }).sort({ createdAt: -1 });

        res.json(seasons);

    } catch (error) {

        res.status(500).json({
            message: "Error getting seasons",
            error: error.message
        });

    }
};


// Get single season
const getSeason = async (req, res) => {

    try {

        const season = await Season.findById(
            req.params.id
        );

        if (!season) {
            return res.status(404).json({
                message: "Season not found"
            });
        }

        res.json(season);

    } catch (error) {

        res.status(500).json({
            message: "Error getting season",
            error: error.message
        });

    }
};


// Update season
const updateSeason = async (req, res) => {

    try {

        const season = await Season.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!season) {
            return res.status(404).json({
                message: "Season not found"
            });
        }

        res.json({
            message: "Season updated successfully",
            season
        });

    } catch (error) {

        res.status(500).json({
            message: "Error updating season",
            error: error.message
        });

    }
};


module.exports = {
    createSeason,
    getSeasons,
    getSeason,
    updateSeason
};