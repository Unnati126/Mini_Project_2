import React from 'react';

function Summary({ workouts }) {
  const total = workouts.reduce(
    (acc, w) => ({
      duration: acc.duration + parseInt(w.duration),
      calories: acc.calories + parseInt(w.calories),
    }),
    { duration: 0, calories: 0 }
  );

  return (
    <div>
      <h3>Summary</h3>
      <p>Total Workouts: {workouts.length}</p>
      <p>Total Duration: {total.duration} mins</p>
      <p>Total Calories: {total.calories}</p>
    </div>
  );
}

export default Summary;
