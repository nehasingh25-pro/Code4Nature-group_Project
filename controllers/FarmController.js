const Farm = require("../models/Farm");


// Create farm
const createFarm = async (req, res) => {

    try {

        const farm = await Farm.create({
            ...req.body,
            userId: req.params.userId
        });

        res.status(201).json({
            message: "Farm created successfully",
            farm
        });

    } catch (error) {

        res.status(500).json({
            message: "Error creating farm",
            error: error.message
        });

    }
};


// Get user's farms
const getFarms = async (req, res) => {

    try {

        const farms = await Farm.find({
            userId: req.params.userId
        });

        res.json(farms);

    } catch (error) {

        res.status(500).json({
            message: "Error getting farms",
            error: error.message
        });

    }
};


// Get one farm
const getFarm = async (req, res) => {

    try {

        const farm = await Farm.findById(
            req.params.id
        );

        if (!farm) {

            return res.status(404).json({
                message: "Farm not found"
            });

        }

        res.json(farm);

    } catch (error) {

        res.status(500).json({
            message: "Error getting farm",
            error: error.message
        });

    }
};


// Update farm
const updateFarm = async (req, res) => {

    try {

        const farm = await Farm.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!farm) {

            return res.status(404).json({
                message: "Farm not found"
            });

        }

        res.json({
            message: "Farm updated successfully",
            farm
        });

    } catch (error) {

        res.status(500).json({
            message: "Error updating farm",
            error: error.message
        });

    }
};


module.exports = {
    createFarm,
    getFarms,
    getFarm,
    updateFarm
};