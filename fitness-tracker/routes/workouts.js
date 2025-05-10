import express from "express";
import {
  getWorkouts,
  getWorkoutById,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} from "../controllers/workoutController.js";

const router = express.Router();

// ✅ GET all workouts
router.get("/", (_req, res) => {
  try {
    const workouts = getWorkouts();
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ message: err.message || "Failed to get workouts." });
  }
});

// ✅ GET workout by ID
router.get("/:id", (req, res) => {
  try {
    const workout = getWorkoutById(req.params.id);
    res.json(workout);
  } catch (err) {
    res.status(404).json({ message: err.message || "Workout not found" });
  }
});

// ✅ POST create workout
router.post("/", (req, res) => {
  try {
    console.log('Received data:', req.body);
    const newWorkout = createWorkout(req.body);
    res.status(201).json(newWorkout);
  } catch (err) {
    res.status(400).json({ message: err.message || "Invalid workout data" });
  }
});

// ✅ PUT update workout
router.put("/:id", (req, res) => {
  try {
    const updatedWorkout = updateWorkout(req.params.id, req.body);
    res.json(updatedWorkout);
  } catch (err) {
    res.status(500).json({ message: 'Error updating workout', error: err.message });
  }
});

// ✅ DELETE workout
router.delete("/:id", (req, res) => {
  try {
    const deletedWorkout = deleteWorkout(req.params.id);
    res.json(deletedWorkout);
  } catch (err) {
    res.status(500).json({ message: 'Error deleting workout', error: err.message });
  }
});

export default router;