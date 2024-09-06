// src/components/CardHolder.jsx
import React from 'react';
import TravelCard from './Cards/TravelCard';

const CardHolder = () => {
  const cardsData = [
    {
      title: "Mountain Hiking",
      description: "Experience the thrill of hiking up the mountains with a breathtaking view.",
      image: "https://img.freepik.com/premium-photo/perfect-beach-sunset-relaxation-pool-luxurious-beachfront-hotel-resort-sunset-light-perfect_663265-2683.jpg",
      badges: ["Adventure", "Outdoors"]
    },
    {
      title: "Beach Resort",
      description: "Relax and unwind at a luxurious beach resort with sunny skies and clear waters.",
      image: "https://img.freepik.com/premium-photo/perfect-beach-sunset-relaxation-pool-luxurious-beachfront-hotel-resort-sunset-light-perfect_663265-2683.jpg",
      badges: ["Relaxation", "Luxury"]
    },
    {
      title: "City Tour",
      description: "Discover the cultural gems and historic sites in a guided city tour.",
      image: "https://img.freepik.com/premium-photo/perfect-beach-sunset-relaxation-pool-luxurious-beachfront-hotel-resort-sunset-light-perfect_663265-2683.jpg",
      badges: ["Culture", "History"]
    },
    {
      title: "Safari Adventure",
      description: "Explore the wild with an adventurous safari through vast landscapes.",
      image: "https://img.freepik.com/premium-photo/perfect-beach-sunset-relaxation-pool-luxurious-beachfront-hotel-resort-sunset-light-perfect_663265-2683.jpg",
      badges: ["Wildlife", "Adventure"]
    },
    // Add more cards as needed
  ];

  return (
    <div id="cardsPage" className="p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardsData.map((card, index) => (
          <TravelCard 
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            badges={card.badges}
          />
        ))}
      </div>
    </div>
  );
}

export default CardHolder;
