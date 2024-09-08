import React from 'react';
import './AboutUs.css'; // Importing styles if you want to add custom styling

const AboutUs = () => {
    
  return (
    <section className="about-us">
  <div className="about-container">
    <h2>About Us</h2>
    <p>
      At <strong>V.I.B.E.</strong>, we believe that travel is more than just a destination—it's an experience that connects with your emotions. Our innovative platform curates personalized travel recommendations based on how you feel, your preferences, and the kind of journey you want to embark on. Whether you're seeking adventure with friends, a solo retreat to unwind, or a cultural exploration, we're here to guide you.
    </p>
  </div>
  <div className="mission-vision-goals">
    <div className="card">
    <i className="fas fa-bullseye icon"></i>
      <h4 className='heading'>Mission</h4>
      <p className='content'>
        To revolutionize the travel planning experience by offering personalized, emotion-driven recommendations that simplify decision-making and create unforgettable journeys tailored to each traveler’s unique feelings.
      </p>
    </div>
    <div className="card">
    <i className="fas fa-globe icon"></i>
      <h4  className='heading'>Vision</h4>
      <p className='content'>
        To become the leading platform for personalized, mood-based travel itineraries, helping travelers discover destinations, accommodations, flights/trains, famous food, activities, and wishlisting their favorite places that resonate with their emotions, and transforming how people plan trips in a fast-paced, data-heavy world.
      </p>
    </div>
    <div className="card">
    <i className="fas fa-trophy icon"></i> 
      <h4  className='heading'>Goals</h4>
      <p className='content'>
        Our goal is to deliver seamless, mood-based travel recommendations using NLP and machine learning, simplifying trip planning with one-click, curated itineraries. Additionally, we strive to continuously enhance the user experience through feedback and smarter algorithms.
      </p>
    </div>
  </div>
</section>
  );
};

export default AboutUs;
