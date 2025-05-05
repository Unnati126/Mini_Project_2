const API_URL = "http://localhost:5002/api/workouts";

document.addEventListener("DOMContentLoaded", fetchWorkouts);

const form = document.getElementById("workout-form");
const updateForm = document.getElementById("update-form");
let updateId = null;

// Create workout (POST)
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const exercise = document.getElementById("exercise").value;
    const duration = document.getElementById("duration").value;
    const caloriesBurned = document.getElementById("calories").value;
    const date = document.getElementById("date").value;

    const newWorkout = { exercise, duration, caloriesBurned, date };

    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newWorkout),
    });

    if (response.ok) {
        fetchWorkouts();
        form.reset();
    }
});

// Update workout (PUT)
updateForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const exercise = document.getElementById("update-exercise").value;
    const duration = document.getElementById("update-duration").value;
    const caloriesBurned = document.getElementById("update-calories").value;
    const date = document.getElementById("update-date").value;

    const updatedWorkout = { exercise, duration, caloriesBurned, date };

    await fetch(`${API_URL}/${updateId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedWorkout),
    });

    updateForm.reset();
    updateForm.style.display = "none";
    fetchWorkouts();
});

// Fetch and display workouts
async function fetchWorkouts() {
    const response = await fetch(API_URL);
    const workouts = await response.json();

    const workoutList = document.getElementById("workout-list");
    workoutList.innerHTML = "";

    let totalDuration = 0;
    let totalCalories = 0;

    workouts.forEach((workout) => {
        totalDuration += Number(workout.duration);
        totalCalories += Number(workout.caloriesBurned);
    });

    document.getElementById("total-workouts").textContent = workouts.length;
    document.getElementById("total-duration").textContent = totalDuration;
    document.getElementById("total-calories").textContent = totalCalories;

    workouts.forEach((workout) => {
        // Convert date to dd/mm/yyyy format
        const dateObj = new Date(workout.date);
        const formattedDate = `${String(dateObj.getDate()).padStart(2, '0')}/${String(dateObj.getMonth() + 1).padStart(2, '0')}/${dateObj.getFullYear()}`;
    
        const li = document.createElement("li");
        li.innerHTML = `
            <span><strong>${workout.exercise}</strong> - ${workout.duration} min - ${workout.caloriesBurned} cal - ${formattedDate}</span>
            <span>
                <button class="update-btn" onclick="updateWorkout(${workout.id})">Update</button>
                <button class="delete-btn" onclick="deleteWorkout(${workout.id})">Delete</button>
            </span>
        `;
        workoutList.appendChild(li);
    });
}
   
// Start editing
async function updateWorkout(id) {
    const response = await fetch(`${API_URL}/${id}`);
    const workout = await response.json();

    document.getElementById("update-exercise").value = workout.exercise;
    document.getElementById("update-duration").value = workout.duration;
    document.getElementById("update-calories").value = workout.caloriesBurned;
    document.getElementById("update-date").value = workout.date;

    updateId = id;
    updateForm.style.display = "block";
}

// Delete workout
async function deleteWorkout(id) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    fetchWorkouts();
}