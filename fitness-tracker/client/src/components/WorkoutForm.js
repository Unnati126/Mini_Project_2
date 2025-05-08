import React, { useState, useEffect } from 'react';
import axios from 'axios';

function WorkoutForm({ fetchWorkouts, editingWorkout, setEditingWorkout }) {
  //const [form, setForm] = useState({ exercisename: '', duration: '', caloriesBurned: '', date: '' });
  const [form, setForm] = useState({ date: '', type: '', duration: '', calories: '' });

  useEffect(() => {
    if (editingWorkout) setForm(editingWorkout);
  }, [editingWorkout]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  /*const handleSubmit = async (e) => {
    e.preventDefault();
  
    await axios.post("http://localhost:5002/api/workouts", {
      name: form.name,
      duration: form.duration,
      calories: form.calories,
      date: form.date,
    });
  };*/
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingWorkout) {
      await axios.put(`http://localhost:5002/api/workouts/${editingWorkout.id}`, form);
    } else {
      await axios.post('http://localhost:5002/api/workouts', form);
    }
    setForm({ date: '', type: '', duration: '', calories: '' });
    //setForm({ exercisename: '', duration: '', caloriesBurned: '', date: '' });
    setEditingWorkout(null);
    fetchWorkouts();
  };

  return (
    /*<form onSubmit={handleSubmit}>
      <input type="text" name="exercisename" value={form.exercisename} onChange={handleChange} />
      <input type="text" name="duration" value={form.duration} onChange={handleChange} />
      <input type="text" name="caloriesBurned" value={form.caloriesBurned} onChange={handleChange} />
      <input type="date" name="date" value={form.date} onChange={handleChange} />
      <button type="submit">Add Workout</button>
    </form>*/

    <form onSubmit={handleSubmit}>
      <input name="date" value={form.date} onChange={handleChange} placeholder="Date" required />
      <input name="type" value={form.type} onChange={handleChange} placeholder="Type" required />
      <input name="duration" value={form.duration} onChange={handleChange} placeholder="Duration (mins)" required />
      <input name="calories" value={form.calories} onChange={handleChange} placeholder="Calories" required />
      <button type="submit">{editingWorkout ? 'Update' : 'Add'} Workout</button>
    </form>

  );
}

export default WorkoutForm;
