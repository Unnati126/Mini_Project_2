import fs from 'fs';
import path from 'path';

const dataFilePath = path.resolve('./data/workouts.json');

// Read workouts from JSON file
export const readWorkouts = () => {
  try {
    const data = fs.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(data || '[]');
  } catch (err) {
    console.error("Error reading workouts.json:", err);
    return [];
  }
};

// Write workouts to JSON file
export const writeWorkouts = (workouts) => {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(workouts, null, 2), 'utf-8');
  } catch (err) {
    console.error("Error writing to workouts.json:", err);
  }
};
