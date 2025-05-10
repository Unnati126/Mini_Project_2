import React, { useState, useEffect } from 'react';
import axios from 'axios';

function WorkoutForm({ fetchWorkouts, editingWorkout, setEditingWorkout }) {
  const [form, setForm] = useState({
    exercise: '',
    duration: '',
    caloriesBurned: '',
    date: '',
  });

  useEffect(() => {
    if (editingWorkout) {
      setForm(editingWorkout);
    }
  }, [editingWorkout]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingWorkout) {
        await axios.put(
          `http://localhost:5002/api/workouts/${editingWorkout.id}`,
          form
        );
      } else {
        await axios.post('http://localhost:5002/api/workouts', form);
      }

      setForm({
        exercise: '',
        duration: '',
        caloriesBurned: '',
        date: '',
      });
      setEditingWorkout(null);
      fetchWorkouts();
    } catch (error) {
      console.error('Error saving workout:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="exercise"
        value={form.exercise}
        onChange={handleChange}
        placeholder="Exercise"
        required
      />
      <input
        name="duration"
        value={form.duration}
        onChange={handleChange}
        placeholder="Duration (mins)"
        type="number"
        required
      />
      <input
        name="caloriesBurned"
        value={form.caloriesBurned}
        onChange={handleChange}
        placeholder="Calories Burned"
        type="number"
        required
      />
      <input
        name="date"
        value={form.date}
        onChange={handleChange}
        placeholder="Date"
        type="date"
        required
      />
      <button type="submit">{editingWorkout ? 'Update' : 'Add'} Workout</button>
    </form>
  );
}

export default WorkoutForm;