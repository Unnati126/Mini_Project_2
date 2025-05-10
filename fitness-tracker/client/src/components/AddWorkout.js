import React, { useState } from 'react';
import axios from 'axios';

function AddWorkout({ onWorkoutAdded }) {
  const [formData, setFormData] = useState({
    exercise: '',
    duration: '',
    caloriesBurned: '',
    date: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
       const res = await axios.post('/api/workouts', formData);
      alert('Workout added successfully!');
      setFormData({ exercise: '', duration: '', caloriesBurned: '', date: '' });
      if (onWorkoutAdded) onWorkoutAdded(res.data);
    } catch (error) {
      console.error('Error adding workout:', error);
      alert('Failed to add workout. Check the server.');
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <h2>Add Workout</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Exercise Name</label>
          <input
            type="text"
            className="form-control"
            name="exercise"
            value={formData.exercise}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Duration (minutes)</label>
          <input
            type="number"
            className="form-control"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Calories Burned</label>
          <input
            type="number"
            className="form-control"
            name="caloriesBurned"
            value={formData.caloriesBurned}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-success">Add Workout</button>
      </form>
    </div>
  );
}

export default AddWorkout;