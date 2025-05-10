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






/*import express from "express";
import {
  getWorkouts,
  getWorkoutById,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} from "../controllers/workoutController.js";

const router = express.Router();

// GET all workouts
router.get("/:", (_req, res) => {
  try {
    const workouts = getWorkouts(); // controller returns data
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ message: err.message || "Failed to get workouts." });
  }
});

// GET workout by ID
router.get("/:id", (req, res) => {
  try {
    const workout = getWorkoutById(req.params.id);
    if (!workout) {
      return res.status(404).json({ message: "Workout not found" });
    }
    res.json(workout);
  } catch (err) {
    res.status(500).json({ message: err.message || "Error retrieving workout" });
  }
});

// POST create workout
router.post("/", (req, res) => {
  try {
    const newWorkout = createWorkout(req.body);
    res.status(201).json(newWorkout);
  } catch (err) {
    res.status(400).json({ message: err.message || "Invalid workout data" });
  }
});

// PUT update workout
router.put("/:id", (req, res) => {
  try {
    const updatedWorkout = updateWorkout(req.params.id, req.body);
    if (!updatedWorkout) {
      return res.status(404).json({ message: "Workout not found" });
    }
    res.json(updatedWorkout);
  } catch (err) {
    res.status(500).json({ message: err.message || "Failed to update workout" });
  }
});

// DELETE workout
router.delete("/:id", (req, res) => {
  try {
    const deleted = deleteWorkout(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Workout not found" });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: err.message || "Failed to delete workout" });
  }
});

export default router;*/




/*import express from "express";
import {
  getWorkouts,
  getWorkoutById,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} from "../controllers/workoutController.js";

const router = express.Router();

router.get("/", (_req, res) => {
  try {
    const workouts = getWorkouts();
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", (req, res) => {
  try {
    const workout = getWorkoutById(req.params.id);
    res.json(workout);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

router.post("/", (req, res) => {
  try {
    const newWorkout = createWorkout(req.body);
    res.status(201).json(newWorkout);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put("/:id", (req, res) => {
  try {
    const updated = updateWorkout(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

router.delete("/:id", (req, res) => {
  try {
    deleteWorkout(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

export default router;*/






/*import express from "express";
import {
  getWorkouts,
  getWorkoutById,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} from "../controllers/workoutController.js";

const router = express.Router();

router.get("/", (_req, res) => res.json(getWorkouts()));
//router.get("/", getWorkouts); 
router.get("/:id", getWorkoutById);
router.post("/", createWorkout);
router.put("/:id", updateWorkout);
router.delete("/:id", deleteWorkout);

export default router;*/




/*import express from "express";
import {
  getWorkouts,
  getWorkoutById,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} from "../controllers/workoutController.js";

const router = express.Router();

// GET all workouts
router.get("/", (_req, res) => {
  const workouts = getWorkouts();
  res.send(workouts); // Send the workouts as a response
});

// GET a single workout by ID
router.get("/:id", getWorkoutById);

// POST a new workout
router.post("/", createWorkout);

// PUT (update) a workout
router.put("/:id", updateWorkout);

// DELETE a workout
router.delete("/:id", deleteWorkout);

export default router;*/