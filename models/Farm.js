const mongoose = require("mongoose");

const farmSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        farmSize: {
            type: String,
            default: ""
        },

        totalFields: {
            type: Number,
            default: 1
        },

        location: {
            type: String,
            default: ""
        },

        waterAvailability: {
            type: String,
            enum: ["Available", "Limited", "Not Available"],
            default: "Available"
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Farm", farmSchema);