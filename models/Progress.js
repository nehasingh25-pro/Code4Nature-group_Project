const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        seasonId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Season",
            required: true
        },

        type: {
            type: String,
            enum: [
                "Activity",
                "Expense",
                "Problem",
                "Progress",
                "Photo",
                "Note"
            ],
            required: true
        },

        title: {
            type: String,
            default: ""
        },

        description: {
            type: String,
            default: ""
        },

        amount: {
            type: Number,
            default: 0
        },

        progress: {
            type: Number,
            default: 0
        },

        photo: {
            type: String,
            default: ""
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Progress", progressSchema);