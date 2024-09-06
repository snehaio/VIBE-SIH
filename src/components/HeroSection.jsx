// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios'; // Import axios
// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.css';  // Import the Flatpickr CSS
// import { motion } from 'framer-motion';

// const HeroSection = () => {
//   // State variables to manage input data
//   const [feeling, setFeeling] = useState('');
//   const [mood, setMood] = useState('');
//   const [dateRange, setDateRange] = useState('');
//   const [company, setCompany] = useState('');
//   const [budget, setBudget] = useState('');
//   const [tripType, setTripType] = useState('Round-Trip');
//   const [recommendations, setRecommendations] = useState([]);
//   const [errorMessage, setErrorMessage] = useState('');  // To handle error messages

//   const datePickerRef = useRef(null);

//   useEffect(() => {
//     // Initialize Flatpickr with date range selection
//     flatpickr(datePickerRef.current, {
//       mode: 'range',
//       dateFormat: 'Y-m-d',
//       onChange: (selectedDates) => {
//         // Capture the selected date range
//         setDateRange(selectedDates.map(date => date.toISOString().slice(0, 10)).join(' to '));
//       },
//     });
//   }, []);

//   // Function to handle form submission and send data to backend API
//   const handleSearch = async () => {
//     try {
//       const resp = await axios.get('http://3.109.1.79:8080/api/user/mood/destination', requestData);
//       console.log(resp);
//       // setRecommendations(resp.data || []);
//       } catch (e) {
//         console.error('Error fetching recommendations:', e);
//         setErrorMessage('Failed to fetch recommendations. Please try again.');
//       };
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen text-center text-white">
//       <motion.h1
//         className="text-5xl font-bold mb-4 rounded-sm bg-black/20 h-28 italic"
//         style={{ position: 'relative', top: '-20px' }}
//         whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
//         transition={{ duration: 0.3 }}
//       >
//         Let Your <span style={{ color: 'aqua' }}>Feelings</span> Choose Your Next <span style={{ color: 'aqua' }}>Adventure!</span>
//       </motion.h1>
      
//       <p className="text-xl mb-8" style={{ color: 'white', fontWeight: 'bold', top: '-5px' }}>
//         Find our awesome tour packages based on your mood!
//       </p>

//       <div className="relative mb-8">
//         <input
//           type="text"
//           placeholder="How are you feeling today..."
//           className="px-4 py-2 rounded-full w-80 text-gray-700"
//           value={feeling}
//           onChange={(e) => setFeeling(e.target.value)}
//         />
//         <i className="fas fa-search absolute top-3 right-4 text-gray-500"></i>
//       </div>
      
//       <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg flex space-x-4">
//         {/* Remove Destination Field */}
        
//         <select
//           className="px-4 py-2 rounded-lg bg-white bg-opacity-80 text-gray-700"
//           value={mood}
//           onChange={(e) => setMood(e.target.value)}
//         >
//           <option disabled value="">Mood</option>
//           <option value="Adventurous">Adventurous</option>
//           <option value="Religious">Religious</option>
//           <option value="Solace">Solace</option>
//           <option value="Relaxed">Relaxed</option>
//           <option value="Romantic">Romantic</option>
//         </select>

//         <input
//           ref={datePickerRef}
//           type="text"
//           placeholder="Select Date Range"
//           className="px-4 py-2 rounded-lg bg-white bg-opacity-80 text-gray-700"
//         />

//         <select
//           className="px-4 py-2 rounded-lg bg-white bg-opacity-80 text-gray-700"
//           value={company}
//           onChange={(e) => setCompany(e.target.value)}
//         >
//           <option disabled value="">Company</option>
//           <option value="Family">Family</option>
//           <option value="Friends">Friends</option>
//           <option value="Solo">Solo</option>
//           <option value="Couple">Couple</option>
//         </select>

//         <select
//           className="px-4 py-2 rounded-lg bg-white bg-opacity-80 text-gray-700"
//           value={tripType}
//           onChange={(e) => setTripType(e.target.value)}
//         >
//           <option value="Round-Trip">Round-Trip</option>
//           <option value="One-Way">One-Way</option>
//         </select>

//         <input 
//           type="number"
//           placeholder="Budget (in Rupees)"
//           className="px-4 py-2 rounded-lg bg-white bg-opacity-80 text-gray-700"
//           min={1000}
//           value={budget}
//           onChange={(e) => setBudget(e.target.value)}
//         />
        
//         <button
//           className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
//           onClick={handleSearch}
//         >
//           Search
//         </button>
//       </div>

//       {/* Display Recommendations*/}
//       {errorMessage && (
//         <div className="text-red-500 mt-4">{errorMessage}</div>
//       )}
      
//       {recommendations.length > 0 && (
//         <div className="mt-8">
//           <h2 className="text-2xl font-bold mb-4">Recommended Places:</h2>
//           <ul>
//             {recommendations.map((rec, index) => (
//               <li key={index} className="bg-white p-4 mb-2 rounded shadow-lg">
//                 {rec.name} - {rec.location.city}, {rec.location.state}, {rec.location.country}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HeroSection;

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'; // Import axios
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';  // Import the Flatpickr CSS
import { motion } from 'framer-motion';

const HeroSection = () => {
  // State variables to manage input data
  const [feeling, setFeeling] = useState('');
  const [moods, setMoods] = useState(['']);  // Array to hold multiple mood inputs
  const [newMood, setNewMood] = useState(''); // State for new custom mood input
  const [dateRange, setDateRange] = useState('');
  const [company, setCompany] = useState('');
  const [budget, setBudget] = useState('');
  const [tripType, setTripType] = useState('Round-Trip');
  const [recommendations, setRecommendations] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');  // To handle error messages

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
  const handleSearch = async () => {
    try {
      const requestData = {
        feeling,
        moods,  // Send all mood values
        dateRange,
        company,
        budget,
        tripType,
      };

      const resp = await axios.post('http://3.109.1.79:8080/api/user/mood/destination', requestData);
      console.log(resp);
      setRecommendations(resp.data || []);
    } catch (e) {
      console.error('Error fetching recommendations:', e);
      setErrorMessage('Failed to fetch recommendations. Please try again.');
    }
  };

  // Function to add a new mood input field
  const addMoodInput = () => {
    setMoods([...moods, '']);
  };

  // Function to remove a mood input field
  const removeMoodInput = (index) => {
    setMoods(moods.filter((_, i) => i !== index));
  };

  // Function to handle mood input changes
  const handleMoodChange = (index, value) => {
    const newMoods = [...moods];
    newMoods[index] = value;
    setMoods(newMoods);
  };

  // Function to handle the addition of custom mood
  const handleAddCustomMood = () => {
    if (newMood.trim() !== '') {
      setMoods([...moods, newMood.trim()]);
      setNewMood('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center text-white">
      <motion.h1
        className="text-5xl font-bold mb-4 rounded-sm bg-black/20 h-28 italic"
        style={{ position: 'relative', top: '-20px' }}
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        transition={{ duration: 0.3 }}
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
      
      <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg flex flex-col space-y-4">
        <div className="flex flex-wrap gap-2 mb-4">
          {moods.map((mood, index) => (
            <div key={index} className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Mood"
                className="px-4 py-2 rounded-lg bg-white bg-opacity-80 text-gray-700"
                value={mood}
                onChange={(e) => handleMoodChange(index, e.target.value)}
              />
              {moods.length > 1 && (
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => removeMoodInput(index)}
                >
                  Remove
                </button>
              )}
            </div>
          ))}
        </div>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
          onClick={addMoodInput}
        >
          Add Mood
        </button>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Add custom mood..."
            className="px-4 py-2 rounded-lg bg-white bg-opacity-80 text-gray-700"
            value={newMood}
            onChange={(e) => setNewMood(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            onClick={handleAddCustomMood}
          >
            Add Custom Mood
          </button>
        </div>

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
      {errorMessage && (
        <div className="text-red-500 mt-4">{errorMessage}</div>
      )}
      
      {recommendations.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Recommended Places:</h2>
          <ul>
            {recommendations.map((rec, index) => (
              <li key={index} className="bg-white p-4 mb-2 rounded shadow-lg">
                {rec.name} - {rec.location.city}, {rec.location.state}, {rec.location.country}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HeroSection;