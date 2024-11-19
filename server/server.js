require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json())

//                   ROUTES

//get all workouts
//add db functionality
app.get("/api/workouts", (req, res) => {
    res.status(200).json({
        status: "success",
        workouts: ["pushup", "pull up"]
    });
});

//get workout
app.get("/api/workouts/:id", (req, res) => {
    console.log(req.params);

    res.status(200).json({
        status: "success",
    });
});

//create workout 
app.post("/api/workouts", (req, res) => {
    console.log(req.body);

    res.status(201).json({
        status: "success",
    });
});

//update workouts
app.put("/api/workouts/:id", (req, res) => {
    console.log(req.params.id)
    console.log(req.body);

    res.status(200).json({
        status: "success",
    });
});

//delete workouts
app.put("/api/workouts/:id", (req, res) => {
    res.status(204).json({
        status: "success",
    });
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});