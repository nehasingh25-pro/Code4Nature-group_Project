const User = require("../models/User");


// Get user
const getUser = async (req, res) => {

    try {

        const user = await User.findById(
            req.params.id
        );

        if (!user) {

            return res.status(404).json({
                message: "User not found"
            });

        }

        res.json(user);

    } catch (error) {

        res.status(500).json({
            message: "Error getting user",
            error: error.message
        });

    }
};


// Update profile
const updateUser = async (req, res) => {

    try {

        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!user) {

            return res.status(404).json({
                message: "User not found"
            });

        }

        res.json({
            message: "Profile updated successfully",
            user
        });

    } catch (error) {

        res.status(500).json({
            message: "Error updating profile",
            error: error.message
        });

    }
};


module.exports = {
    getUser,
    updateUser
};