import { readWorkouts, writeWorkouts } from "../service/workouts.js";

// Return all workouts
export const getWorkouts = () => {
  return readWorkouts();
};

// Return workout by ID
export const getWorkoutById = (id) => {
  const workouts = readWorkouts();
  const workout = workouts.find((w) => w.id === parseInt(id));
  if (!workout) {
    throw new Error("Workout not found");
  }
  return workout;
};

// Create and return new workout
export const createWorkout = ({ exercise, duration, caloriesBurned, date }) => {
  if (!exercise || !duration || !caloriesBurned || !date) {
    throw new Error("All fields are required.");
  }

  const workouts = readWorkouts();
  const newWorkout = {
    id: Date.now(),
    exercise,
    duration: parseInt(duration),
    caloriesBurned: parseInt(caloriesBurned),
    date,
  };

  workouts.push(newWorkout);
  writeWorkouts(workouts);
  return newWorkout;
};

// Update existing workout
export const updateWorkout = (id, data) => {
  const workouts = readWorkouts();
  const index = workouts.findIndex((w) => w.id === parseInt(id));
  if (index === -1) {
    throw new Error("Workout not found");
  }

  workouts[index] = {
    ...workouts[index],
    ...data,
    duration: parseInt(data.duration),
    caloriesBurned: parseInt(data.caloriesBurned),
  };

  writeWorkouts(workouts);
  return workouts[index];
};

// Delete workout
export const deleteWorkout = (id) => {
  const workouts = readWorkouts();
  const filtered = workouts.filter((w) => w.id !== parseInt(id));
  if (filtered.length === workouts.length) {
    throw new Error("Workout not found");
  }
  writeWorkouts(filtered);
  return true;
};