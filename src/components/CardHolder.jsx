// src/components/CardHolder.jsx
import React from 'react';
import TravelCard from './Cards/TravelCard';

const CardHolder = () => {

  const cardsData = [
    {
      title: "Mountain Hiking",
      description: "Manali : Let Your Jawani Go Deewani",
      image: "https://img.traveltriangle.com/blog/wp-content/uploads/2020/03/1024px-Manali_himachal-400x229.jpg",
      badges: ["Adventure", "Trekking", "Friends"],
      budget: "Average budget: INR 4000"
    },
    {
      title: "Beach Resort",
      description: "Goa : Because- Dil Chahta Hai",
      image: "https://www.travlics.com/blog/wp-content/uploads/2019/08/Beaches-in-Goa.jpg",
      badges: ["Party", "Relaxation"],
      budget: "Average budget: INR 15000"
    },
    {
      title: "Sheer bliss during monsoon",
      description: "Just ask them - Aati kya Khandala",
      image: "https://img.traveltriangle.com/blog/wp-content/uploads/2020/03/Khandala_ghat_during_rains-400x229.jpg",
      badges: ["Culture (Cave visits)", "Boating"],
      budget: "Average budget: INR 10000"
    },
    {
      title: "Safari Adventure",
      description: "Explore the wild with an adventurous safari through vast landscapes.",
      image: "https://assets.traveltriangle.com/blog/wp-content/uploads/2020/03/shutterstock_1162389244.jpg",
      badges: ["Wildlife", "Adventure"],
      budget: "Average budget: INR 5000"
    },
    {
      title: "Mata VaishnoDevi",
      description: "Get Spiritual in the holy city of Katra, on the slopes of Trikuta Hills",
      image: "https://images.mid-day.com/images/images/2022/aug/vaishnodevi-PTI-file_d.jpg",
      badges: ["Religious", "Family"],
      budget: "Average budget: INR 8000"
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
