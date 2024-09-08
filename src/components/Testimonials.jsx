import React from 'react';
import './Testimonials.css'; // Import the CSS file for styling

const testimonials = [
  {
    id: 1,
    name: "Avishi Sharma",
    message: "This service transformed my travel experience! Highly recommended.",
    image: "https://cdn-icons-png.flaticon.com/512/5231/5231019.png" // Placeholder image URL
  },
  {
    id: 2,
    name: "Sneha Singh",
    message: "Amazing recommendations based on my mood. I felt truly understood!",
    image: "https://cdn-icons-png.flaticon.com/256/1626/1626095.png" // Placeholder image URL
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2>What Our Users Say</h2>
      <div className="testimonial-list">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <div className="testimonial-content">
              <p className="testimonial-message">"{testimonial.message}"</p>
              <p className="testimonial-name">- {testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
