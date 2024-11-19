import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./routes/Home.jsx";
import Workouts from "./routes/Workouts.jsx";
 
 const App = () => {
    return <div>
        <Router>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Workouts" component={Workouts}/>
        </Router>
    </div>;
 };

 export default App;