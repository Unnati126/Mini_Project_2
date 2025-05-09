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












/*import { readWorkouts, writeWorkouts } from "../service/workouts.js";

// GET all workouts
export const getWorkouts = () => {
  const workouts = readWorkouts();
  res.json(workouts);
};

// GET workout by ID
export const getWorkoutById = (req, res) => {
  const workouts = readWorkouts();
  const workout = workouts.find((w) => w.id === parseInt(req.params.id));
  if (!workout) {
    return res.status(404).json({ message: "Workout not found" });
  }
  res.json(workout);
};

// POST create workout
export const createWorkout = (req, res) => {
  const { exercise, duration, caloriesBurned, date } = req.body;

  if (!exercise || !duration || !caloriesBurned || !date) {
    return res.status(400).json({ message: "All fields are required." });
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
  res.status(201).json(newWorkout);
};

// PUT update workout
export const updateWorkout = (req, res) => {
  const { id } = req.params;
  const { exercise, duration, caloriesBurned, date } = req.body;

  let workouts = readWorkouts();
  const index = workouts.findIndex((w) => w.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ message: "Workout not found" });
  }

  workouts[index] = {
    ...workouts[index],
    exercise,
    duration: parseInt(duration),
    caloriesBurned: parseInt(caloriesBurned),
    date,
  };

  writeWorkouts(workouts);
  res.json(workouts[index]);
};

// DELETE workout
export const deleteWorkout = (req, res) => {
  const { id } = req.params;
  const workouts = readWorkouts();
  const filtered = workouts.filter((w) => w.id !== parseInt(id));
  writeWorkouts(filtered);
  res.status(204).send();
};*/