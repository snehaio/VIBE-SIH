import React from "react";
import { motion } from "framer-motion";
import "./card.css";

const TravelCard = ({ title, description, image, badges }) => {
  return (
    <motion.div 
      className="card bg-base-100 w-96 shadow-xl"
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", transition: { duration: 0.3 } }}
    >
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          {badges.map((badge, index) => (
            <div key={index} className="badge badge-outline">{badge}</div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TravelCard;
