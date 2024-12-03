const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;


app.get("/api/weather/:city", (req, res) => {
    const { city } = req.params;
    const mockWeatherData = {
        city: city,
        currentTemp: 20,
        condition: "Sunny",
        highTemp: 30,
        lowTemp: 20,
        forecast: [
            { day: "Tomorrow", temp: 26 },
            { day: "Day After", temp: 28 },
            { day: "3rd Day", temp: 27 },
        ],
    };
    res.json(mockWeatherData);
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
