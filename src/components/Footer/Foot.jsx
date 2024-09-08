import React from 'react';
import './footer.css';

function Foot() {
  return (
    <div id="footer" className="footer-container">
      <div className="footer-section logo">
        <h2>Your Logo</h2>
      </div>
      <div className="footer-section review">
        <button className="review-btn">Leave a Review</button>
      </div>
      <div className="footer-section about-us">
        <h3>About Us</h3>
        <p>We offer the best travel packages to match your mood!</p>
      </div>
      <div className="footer-section navbar-links">
        <h3>Explore</h3>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#destinations">Destinations</a></li>
          <li><a href="#packages">Packages</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Foot;
