import React from 'react';

const About = () => {
    return (
      <div className="text-center mt-5">
        <h1>About This Project</h1>
        <p className="lead mt-3">
          This fitness tracker app was built using React and Express.<br />
          It allows users to add, track, and manage their workouts efficiently.
        </p>
        <img 
          src="https://cdn-icons-png.flaticon.com/512/3534/3534066.png" 
          alt="About Icon" 
          width="120" 
          className="mt-4"
        />
      </div>
    );
  };

/*function About() {
  return (
    <div>
      <h2>About</h2>
      <p>This project is a fitness tracker built with React and Express for educational purposes.</p>
    </div>
  );
}*/

export default About;
