import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const WorkoutContext = createContext();

export const useWorkouts = () => useContext(WorkoutContext);

export const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([]);

  const fetchWorkouts = async () => {
    try {
      const res = await axios.get('/api/workouts');
      setWorkouts(res.data);
    } catch (error) {
      console.error('Error fetching workouts:', error);
    }
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

return (
    <WorkoutContext.Provider value={{ workouts, fetchWorkouts }}>
      {children}
    </WorkoutContext.Provider>
  );
};