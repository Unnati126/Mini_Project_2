import React, { useState } from 'react';
import { useWorkouts } from '../context/WorkoutContext';

function Tracker() {
  const {
    workouts,
    addWorkout,
    updateWorkout,
    deleteWorkout,
  } = useWorkouts();

  const [form, setForm] = useState({
    exercise: '',
    duration: '',
    caloriesBurned: '',
    date: '',
  });

  const [editId, setEditId] = useState(null); // To track if we're editing

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await updateWorkout(editId, form);
      setEditId(null);
    } else {
      await addWorkout(form);
    }
    setForm({
      exercise: '',
      duration: '',
      caloriesBurned: '',
      date: '',
    });
  };

  const handleEdit = (workout) => {
    setForm({
      exercise: workout.exercise,
      duration: workout.duration,
      caloriesBurned: workout.caloriesBurned,
      date: workout.date,
    });
    setEditId(workout.id);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-primary">Fitness Tracker Record</h2>

      <form className="row g-3 mb-4" onSubmit={handleSubmit}>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            name="exercise"
            placeholder="Exercise Name"
            value={form.exercise}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-2">
          <input
            type="number"
            className="form-control"
            name="duration"
            placeholder="Duration (min)"
            value={form.duration}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-2">
          <input
            type="number"
            className="form-control"
            name="caloriesBurned"
            placeholder="Calories Burned"
            value={form.caloriesBurned}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-3">
          <input
            type="date"
            className="form-control"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-2">
          <button type="submit" className="btn btn-success w-100">
            {editId ? 'Update' : 'Add'} Workout
          </button>
        </div>
      </form>

      <h4 className="mb-3">Workout History</h4>
      <ul className="list-group">
        {workouts.map((w) => (
          <li
            key={w.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <strong>{w.exercise}</strong> — {w.duration} min —{' '}
              {w.caloriesBurned} cal — {w.date}
            </div>
            <div>
              <button
                className="btn btn-sm btn-warning me-2"
                onClick={() => handleEdit(w)}
              >
                Update
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => deleteWorkout(w.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tracker;
