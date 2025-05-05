import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WorkoutForm from './components/WorkoutForm';
import WorkoutList from './components/WorkoutList';
import Summary from './components/Summary';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


  const [workouts, setWorkouts] = useState([]);
  const [editingWorkout, setEditingWorkout] = useState(null);

  const fetchWorkouts = async () => {
    const res = await axios.get('http://localhost:5002/api/workouts');
    setWorkouts(res.data);
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  return (
    <div>
      <h1>Fitness Tracker</h1>
      <WorkoutForm fetchWorkouts={fetchWorkouts} editingWorkout={editingWorkout} setEditingWorkout={setEditingWorkout} />
      <WorkoutList workouts={workouts} fetchWorkouts={fetchWorkouts} setEditingWorkout={setEditingWorkout} />
      <Summary workouts={workouts} />
    </div>
  );


export default App;