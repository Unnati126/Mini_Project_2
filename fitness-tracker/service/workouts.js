import fs from "fs";

const filePath = "./data/workouts.json";

export const readWorkouts = () => {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data || "[]");
  } catch (err) {
    console.error("Error reading workouts.json", err);
    return [];
  }
};

export const writeWorkouts = (workouts) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(workouts, null, 2), "utf8");
  } catch (err) {
    console.error("Error writing to workouts.json", err);
  }
};




/*import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataFilePath = path.join(__dirname, "../data/workouts.json");


// Helper: Read workouts
export const readWorkouts = () => {
    if (!fs.existsSync(dataFilePath)) return [];
    const data = fs.readFileSync(dataFilePath, "utf-8");
    return JSON.parse(data);
  };
  
// Helper: Write workouts
export const writeWorkouts = (workouts) => {
    fs.writeFileSync(dataFilePath, JSON.stringify(workouts, null, 2));
};*/