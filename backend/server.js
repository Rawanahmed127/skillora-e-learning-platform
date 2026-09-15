const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./config/db");
const authRoutes = require("./routes/authRoutes");


// =====================================================
// CREATE APP
// =====================================================

const app = express();


// =====================================================
// MIDDLEWARE
// =====================================================

app.use(cors());
app.use(express.json());


// =====================================================
// HOME
// =====================================================

app.get("/", function (req, res) {

    res.json({
        message: "Skillora Backend is running!"
    });

});


// =====================================================
// AUTH ROUTES
// =====================================================

app.use("/api/auth", authRoutes);


// =====================================================
// SERVER
// =====================================================

const PORT = 5000;

app.listen(PORT, function () {

    console.log(
        "Skillora backend running on http://localhost:" + PORT
    );

});