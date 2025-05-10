import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BMICalculator from '../components/BMICalculator'; 

function Tracker() {
  const [workouts, setWorkouts] = useState([]);
  const [form, setForm] = useState({
    exercise: '',
    duration: '',
    caloriesBurned: '',
    date: '',
  });
  const [editId, setEditId] = useState(null); 

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const fetchWorkouts = async () => {
    try {
      const res = await axios.get('/api/workouts');
      setWorkouts(res.data);
    } catch (error) {
      console.error('Error fetching workouts', error);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        // Update existing workout
        await axios.put(`/api/workouts/${editId}`, form);
        setEditId(null);
      } else {
        // Add new workout
        await axios.post('/api/workouts', form);
      }
      setForm({ exercise: '', duration: '', caloriesBurned: '', date: '' });
      fetchWorkouts();
    } catch (err) {
      console.error('Error submitting workout:', err);
    }
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

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/workouts/${id}`);
      fetchWorkouts();
    } catch (err) {
      console.error('Error deleting workout:', err);
    }    
  };

  return (
    <div className="container mt-5">
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
          <button className="btn btn-success w-100">{editId ? 'Update' : 'Add'} Workout</button>
        </div>
      </form>

      <h4 className="mb-3">Workout History</h4>
      <ul className="list-group">
        {workouts.map((w) => (
          <li key={w.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{w.exercise}</strong> — {w.duration} min — {w.caloriesBurned} cal — {w.date}
            </div>
            <div>
              <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(w)}>Update</button>
              <button className="btn btn-sm btn-danger" onClick={() => handleDelete(w.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    <BMICalculator />  
</div>
  );
}

export default Tracker;