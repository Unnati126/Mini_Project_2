// src/pages/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>Stay Fit. Stay Strong.</h1>
        <p>Inspiration, information, and motivation — all in one place.</p>
      </header>

      <section className="gallery">
        <img src="/assets/fitness_1.jpeg" alt="Workout 1" />
        <img src="/assets/fitness_2.jpeg" alt="Workout 2" />
        <img src="/assets/fitness_3.jpeg" alt="Workout 3" />
        </section>

      <section className="quote">
        “It’s not about having time. It’s about making time.”
      </section>

      <section className="info">
        <h2>Why Fitness Matters?</h2>
        <p>
          Regular physical activity boosts your mood, strengthens your body, and increases your lifespan.
          Whether it's a 20-minute walk, a gym session, or yoga at home — moving your body matters.
        </p>

        <h3>Tips for Staying Consistent:</h3>
        <ul>
          <li>📈 Track your progress with fitness tracker.</li>
          <li>🗓️ Schedule your workouts like meetings.</li>
          <li>🎯 Set realistic and achievable goals.</li>
        </ul>
      </section>

      <footer className="footer">
        &copy; 2025 Fitness Tracker Project. All rights reserved.
      </footer>
    </div>
  );
};

export default About;