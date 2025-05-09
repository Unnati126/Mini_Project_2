import React from 'react';
import axios from 'axios';

function WorkoutList({ workouts, fetchWorkouts, setEditingWorkout }) {
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5002/api/workouts/${id}`);
    fetchWorkouts();
  };

  return (
    <div>
      <h3>Workout History</h3>
      {workouts.map((w) => (
        <div key={w.id} style={{ marginBottom: '10px' }}>
          <strong>{w.exercise}</strong> — {w.duration} min — {w.caloriesBurned} cal — {w.date}
          <button onClick={() => setEditingWorkout(w)} style={{ marginLeft: '10px' }}>Edit</button>
          <button onClick={() => handleDelete(w.id)} style={{ marginLeft: '5px' }}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default WorkoutList;






/*import React from 'react';
import axios from 'axios';

function WorkoutList({ workouts, fetchWorkouts, setEditingWorkout }) {
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5002/api/workouts/${id}`);
    fetchWorkouts();
  };

  return (
    <div>
      <h3>Workout History</h3>
      {workouts.map((w) => (
        <div key={w.id}>
          <strong>{w.date}</strong> - {w.type} - {w.duration} min - {w.calories} cal
          <button onClick={() => setEditingWorkout(w)}>Edit</button>
          <button onClick={() => handleDelete(w.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default WorkoutList;*/