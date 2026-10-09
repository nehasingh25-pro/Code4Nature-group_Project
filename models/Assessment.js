const mongoose = require("mongoose");

const assessmentSchema = new mongoose.Schema(
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

        photo: {
            type: String,
            default: ""
        },

        location: {
            type: String,
            default: ""
        },

        cropStatus: {
            type: String,
            default: ""
        },

        crop: {
            type: String,
            default: ""
        },

        farmerPrompt: {
            type: String,
            default: ""
        },

        suggestion: {
            type: String,
            default: ""
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Assessment", assessmentSchema);