import axios from 'axios';

export default axios.create({
    baseURL: "http://localhost:3005/api/workouts",
});