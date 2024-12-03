import React, {useState, createContext} from 'react';
import axios from 'axios';

export const WorkoutsContext = createContext();

export const WorkoutsContextProvider = props => {
    const {workouts, setWorkouts} = useState([])

    const workoutdata = async () => {
        const {data} = await axios.get('http://localhost:3005/api/workouts/all')

        setWorkouts(data);
    }

    return (
        <WorkoutsContext.Provider value={{workouts, setWorkouts}}>
            
        </WorkoutsContext.Provider>
    );
};

//export default WorkoutsContextProvider;