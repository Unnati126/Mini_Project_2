import express from "express";
import cors from "cors";
import workoutRoutes from "./routes/workouts.js";


import path from "path";
import { fileURLToPath } from "url";


const app = express();
//const PORT = process.env.PORT || 5002;
const PORT = 5002;


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(cors());
app.use(express.json());

//app.use('/', express.static('public'));
app.use("/", express.static(path.join(__dirname, "public")));

app.use("/api/workouts", workoutRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});