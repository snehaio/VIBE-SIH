import { useState } from "react";
import { motion } from "framer-motion";
import "./BookNow.scss"; // Your custom styles

const variants = {
  open: {
    clipPath: "circle(1200px at 50% 50%)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(20px at 50% 50%)",
    transition: {
      delay: 0.25,
      type: "spring",
      stiffness: 400,
      damping: 50,
      
    },
    opacity:0
  },
};

const BookNow = ({ isOpen, setIsOpen }) => {
  return (
    <motion.div className={`book-now-popup ${isOpen ? "open" : "closed"}`} animate={isOpen ? "open" : "closed"}>
      <motion.div className="popup-bg" variants={variants}>
        <div className="popup-content">
          <h2>Book Your Trip</h2>
          {/* Your booking form or content here */}
          <button onClick={() => setIsOpen(false)}>X</button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BookNow;
