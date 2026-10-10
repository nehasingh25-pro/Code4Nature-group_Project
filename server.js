const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const farmRoutes = require("./routes/FarmRoutes");
const assessmentRoutes = require("./routes/assessmentRoutes");
const progressRoutes = require("./routes/progressRoutes");
const seasonRoutes = require("./routes/seasonRoutes");



const app = express();

const PORT = process.env.PORT || 3000;


// Middleware
app.use(cors());

app.use(express.json());

app.use(express.static("public"));


// MongoDB
connectDB();


// Routes
app.use("/api/auth", authRoutes);

app.use("/api/users", userRoutes);

app.use("/api/farms", farmRoutes);

app.use("/api/assessments", assessmentRoutes);

app.use("/api/progress", progressRoutes);

app.use("/api/seasons", seasonRoutes);


// Test API
app.get("/api", (req, res) => {

    res.json({
        message: "Bhumi Raksha API is working"
    });

});


app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});