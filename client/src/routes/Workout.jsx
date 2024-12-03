import React from 'react'
import { Link } from "react-router-dom";

const Workout = () => {
    return (
        <div>
            Singualr Workout
            <Link to="/UpdateWorkouts">UpdateWorkout</Link>
        </div>
    )
}

export default Workout