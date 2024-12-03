import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Workouts = () => {
    return (
        <div>
            Workouts
            <Link to="/Workout/5">A Workout</Link>
        </div>
    )
}

export default Workouts