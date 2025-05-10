import fs from "fs";
import path from "path";

const filePath = path.resolve("data", "workouts.json");

export const readWorkouts = () => {
  try {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, "[]", "utf8");
    }
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