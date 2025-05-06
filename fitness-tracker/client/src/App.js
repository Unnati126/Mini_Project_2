import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Tracker from './pages/Tracker';
import About from './pages/About';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/tracker" style={{ marginRight: '10px' }}>Fitness Tracker</Link>
        <Link to="/about">About</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;





/*import logo from './logo.svg';
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


export default App;*/