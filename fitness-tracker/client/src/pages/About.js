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

        <h2>Our Mission</h2>
        <p>
            At Fitness Tracker, our goal is to empower people of all fitness levels to take control of their health.
            We believe fitness should be accessible, fun, and measurable — that's why we built this tool.
        </p>

        <h2>Join the Community</h2>
        <p>
            Stay connected with like-minded individuals. Share your progress, swap tips, and celebrate milestones together. 
            Follow us on social media and be part of the movement!
        </p>

        <h3>Tips for Staying Consistent:</h3>
        <ul>
          <li>📈 Track your progress with fitness tracker.</li>
          <li>🗓️ Schedule your workouts like meetings.</li>
          <li>🎯 Set realistic and achievable goals.</li>
        </ul>
      </section>
      \n
        <section className="stories">
        <h2>Success Stories</h2>
            <p>
                “I started using the Fitness Tracker six months ago, and it’s changed the way I look at health. It keeps me accountable and motivated!”
                <p> – Mike </p>
            </p>

            <p>
            “I used to struggle with staying consistent, but using Fitness Tracker changed everything. I set small, manageable goals each week and tracked my progress. It felt amazing to see how far I’d come! Now, I'm more active, more focused, and my energy levels have never been better.”
            <p> – A happy user</p>
            </p>

            <p>
            “As a busy mom, it was hard to find time for myself. But with Fitness Tracker, I could schedule workouts around my family's needs. I started by walking 15 minutes a day, and now I’m running 5K every week! This app helped me get back on track, and my confidence is through the roof.”
            <p> – Emma </p>
            </p>

            <p>
            As a busy professional, Mark found it hard to stay motivated. He began tracking his workouts with our app and soon discovered patterns in his performance. By setting personal goals, Mark not only increased his strength but also reduced his stress levels. His success has inspired his colleagues, and now his team uses the tracker to keep each other motivated.
            <p> – Mark </p>
            </p>


            <p>
            These stories are just a few of the many lives transformed through consistent effort and dedication. Fitness Tracker is here to help you take the first step toward your own success story — because every journey starts with the decision to begin.
            </p>
        </section>



      <footer className="footer">
        &copy; 2025 Fitness Tracker Project. All rights reserved.
      </footer>
    </div>
  );
};

export default About;