const User = require("../models/User");


// Register
const registerUser = async (req, res) => {

    try {

        const {
            name,
            email,
            password
        } = req.body;

        const existingUser = await User.findOne({
            email
        });

        if (existingUser) {

            return res.status(400).json({
                message: "Email already registered"
            });

        }

        const user = await User.create({
            name,
            email,
            password
        });

        res.status(201).json({
            message: "Registration successful",
            user
        });

    } catch (error) {

        res.status(500).json({
            message: "Registration failed",
            error: error.message
        });

    }
};


// Login
const loginUser = async (req, res) => {

    try {

        const {
            email,
            password
        } = req.body;

        const user = await User.findOne({
            email
        });

        if (!user) {

            return res.status(404).json({
                message: "User not found"
            });

        }

        if (user.password !== password) {

            return res.status(400).json({
                message: "Invalid password"
            });

        }

        res.json({
            message: "Login successful",
            user
        });

    } catch (error) {

        res.status(500).json({
            message: "Login failed",
            error: error.message
        });

    }
};


module.exports = {
    registerUser,
    loginUser
};