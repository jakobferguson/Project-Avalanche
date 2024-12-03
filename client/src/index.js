import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateWorkouts from "./routes/UpdateWorkouts.jsx";
import Home from "./routes/Home.jsx";
import Workouts from "./routes/Workouts.jsx";
import Workout from "./routes/Workout.jsx";
import { WorkoutsContextProvider } from "./context/WorkoutsContext.js";

export default function App() {
  return (
    <WorkoutsContextProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="Workouts" element={<Workouts />} />
          <Route path="Workout/:id" element={<Workout />} />
          <Route path="UpdateWorkouts/:id" element={<UpdateWorkouts />} />
        </Routes>
      </BrowserRouter>
    </WorkoutsContextProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
