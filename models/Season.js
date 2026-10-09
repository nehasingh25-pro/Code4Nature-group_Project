const mongoose = require("mongoose");

const seasonSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        farmId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Farm",
            required: true
        },

        season: {
            type: String,
            required: true
        },

        crop: {
            type: String,
            default: ""
        },

        location: {
            type: String,
            default: ""
        },

        landArea: {
            type: String,
            default: ""
        },

        status: {
            type: String,
            enum: [
                "In Progress",
                "Completed"
            ],
            default: "In Progress"
        },

        progress: {
            type: Number,
            default: 0
        },

        totalExpense: {
            type: Number,
            default: 0
        },

        activitiesCompleted: {
            type: Number,
            default: 0
        },

        problemsImproved: {
            type: Number,
            default: 0
        },

        harvestResult: {
            type: String,
            default: ""
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Season", seasonSchema);