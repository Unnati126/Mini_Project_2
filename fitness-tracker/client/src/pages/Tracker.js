import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Tracker() {
  const [workouts, setWorkouts] = useState([]);
  const [form, setForm] = useState({
    exercise: '',
    duration: '',
    caloriesBurned: '',
    date: '',
  });

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const fetchWorkouts = async () => {
    try {
      const res = await axios.get('http://localhost:5002/api/workouts');
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
      await axios.post('http://localhost:5002/api/workouts', form);
      setForm({ exercise: '', duration: '', caloriesBurned: '', date: '' });
      fetchWorkouts();
    } catch (err) {
      console.error('Error adding workout:', err);
    }
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
          <button className="btn btn-success w-100">Add Workout</button>
        </div>
      </form>

      <h4 className="mb-3">Workout History</h4>
      <ul className="list-group">
        {workouts.map((w, idx) => (
          <li key={idx} className="list-group-item">
            <strong>{w.exercise}</strong> — {w.duration} min — {w.caloriesBurned} cal — {w.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tracker;










/*import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Tracker() {
  const [workouts, setWorkouts] = useState([]);
  const [form, setForm] = useState({
    exercise: '',
    duration: '',
    caloriesBurned: '',
    date: '',
  });

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const fetchWorkouts = async () => {
    try {
      const res = await axios.get('http://localhost:5002/api/workouts');
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
      await axios.post('http://localhost:5002/api/workouts', form);
      setForm({ exercise: '', duration: '', caloriesBurned: '', date: '' });
      fetchWorkouts();
    } catch (error) {
      console.error('Error submitting workout', error);
    }
};



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
        />
        </div>
        <div className="col-md-2">
          <button className="btn btn-success w-100">Add Workout</button>
        </div>
      </form>

      <h4 className="mb-3">Workout History</h4>
      <ul className="list-group">
        {workouts.map((w, idx) => (
          <li key={idx} className="list-group-item">
            <strong>{w.exercise}</strong> — {w.duration} min — {w.caloriesBurned} cal — {w.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tracker;*/