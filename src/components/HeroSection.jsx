import React, {useState, useEffect, useRef } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';  // Import the Flatpickr CSS
import { motion } from 'framer-motion';


const HeroSection = () => {
  // State variables to manage input data
  const [feeling, setFeeling] = useState('');
  const [destination, setDestination] = useState('');
  const [mood, setMood] = useState('');
  const [dateRange, setDateRange] = useState('');
  const [company, setCompany] = useState('');
  const [budget, setBudget] = useState('');
  const [tripType, setTripType] = useState('Round-Trip');
  const [recommendations, setRecommendations] = useState([]);

  const datePickerRef = useRef(null);

  useEffect(() => {
    // Initialize Flatpickr with date range selection
    flatpickr(datePickerRef.current, {
      mode: 'range',
      dateFormat: 'Y-m-d',
      onChange: (selectedDates) => {
        // Capture the selected date range
        setDateRange(selectedDates.map(date => date.toISOString().slice(0, 10)).join(' to '));
      },
    });
  }, []);

  // Function to handle form submission and send data to backend API
  const handleSearch = () => {
    const requestData = {
      feeling,
      destination,
      mood,
      dateRange,
      company,
      budget,
      tripType,
    };

    // Send data to backend (replace 'api-endpoint-url' with your actual API)
    fetch('https://api-endpoint-url.com/recommendations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        setRecommendations(data.recommendations || []);
      })
      .catch((error) => {
        console.error('Error fetching recommendations:', error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center text-white">
      <motion.h1
        className="text-5xl font-bold mb-4"
        style={{ position: 'relative', top: '-20px' }}
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      >
        Let Your <span style={{ color: 'aqua' }}>Feelings</span> Choose Your Next <span style={{ color: 'aqua' }}>Adventure!</span>
      </motion.h1>
      
      <p className="text-xl mb-8" style={{ color: 'white', fontWeight: 'bold', top: '-5px' }}>
        Find our awesome tour packages based on your mood!
      </p>

      <div className="relative mb-8">
        <input
          type="text"
          placeholder="How are you feeling today..."
          className="px-4 py-2 rounded-full w-80 text-gray-700"
          value={feeling}
          onChange={(e) => setFeeling(e.target.value)}
        />
        <i className="fas fa-search absolute top-3 right-4 text-gray-500"></i>
      </div>
      
      <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg flex space-x-4">
        <input
          type="text"
          placeholder="Destination"
          className="px-4 py-2 rounded-lg bg-white bg-opacity-80 text-gray-700"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        
        <select
          className="px-4 py-2 rounded-lg bg-white bg-opacity-80 text-gray-700"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
        >
          <option disabled value="">Mood</option>
          <option value="Adventurous">Adventurous</option>
          <option value="Religious">Religious</option>
          <option value="Solace">Solace</option>
          <option value="Relaxed">Relaxed</option>
          <option value="Romantic">Romantic</option>
        </select>

        <input
          ref={datePickerRef}
          type="text"
          placeholder="Select Date Range"
          className="px-4 py-2 rounded-lg bg-white bg-opacity-80 text-gray-700"
        />

        <select
          className="px-4 py-2 rounded-lg bg-white bg-opacity-80 text-gray-700"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        >
          <option disabled value="">Company</option>
          <option value="Family">Family</option>
          <option value="Friends">Friends</option>
          <option value="Solo">Solo</option>
          <option value="Couple">Couple</option>
        </select>
        <select
          className="px-4 py-2 rounded-lg bg-white bg-opacity-80 text-gray-700"
          value={tripType}
          onChange={(e) => setTripType(e.target.value)}
        >
          <option value="Round-Trip">Round-Trip</option>
          <option value="One-Way">One-Way</option>
        </select>

        <input
          type="number"
          placeholder="Budget (in Rupees)"
          className="px-4 py-2 rounded-lg bg-white bg-opacity-80 text-gray-700"
          min={1000}
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
        
        <button
          className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {/* Display Recommendations */}
      {recommendations.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Recommended Places:</h2>
          <ul>
            {recommendations.map((rec, index) => (
              <li key={index} className="bg-white p-4 mb-2 rounded shadow-lg">
                {rec}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
