// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios'; // Import axios
// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.css';  // Import the Flatpickr CSS
// import { motion } from 'framer-motion';
// import Select from 'react-select';

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
import axios from 'axios';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';  
import { motion } from 'framer-motion';
import Select from 'react-select';  // Import react-select

const HeroSection = () => {
  // State variables to manage input data
  const [feeling, setFeeling] = useState('');
  const [moods, setMoods] = useState([]);  // Array to hold multiple mood inputs as tags
  const [dateRange, setDateRange] = useState('');
  const [company, setCompany] = useState('');
  const [budget, setBudget] = useState('');
  const [tripType, setTripType] = useState('Round-Trip');
  const [recommendations, setRecommendations] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const datePickerRef = useRef(null);

  useEffect(() => {
    flatpickr(datePickerRef.current, {
      mode: 'range',
      dateFormat: 'Y-m-d',
      onChange: (selectedDates) => {
        setDateRange(selectedDates.map(date => date.toISOString().slice(0, 10)).join(' to '));
      },
    });
  }, []);

  const moodOptions = [
    { value: 'Adventurous', label: 'Adventurous' },
    { value: 'Religious', label: 'Religious' },
    { value: 'Solace', label: 'Solace' },
    { value: 'Relaxed', label: 'Relaxed' },
    { value: 'Romantic', label: 'Romantic' },
  ];

  const customStyles = {
    menu: (provided) => ({
      ...provided,
      maxHeight: 150,  // Limit the dropdown height
      overflowY: 'auto',  // Enable vertical scrolling
    }),
    control: (provided) => ({
      ...provided,
      minHeight: '40px',  // Adjust height for the control element (optional)
    }),
  };
  // Function to handle form submission and send data to backend API
  const handleSearch = async () => {
    try {
      const requestData = {
        feeling,
        moods: moods.map(mood => mood.value),  // Send selected mood values
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
      
      <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg flex space-x-4">
        <Select
          isMulti
          options={moodOptions}  // Predefined mood options
          className="basic-multi-select text-black bg-white"
          classNamePrefix="select"
          placeholder="Select your mood(s)..."
          value={moods}
          onChange={(selectedMoods) => setMoods(selectedMoods)}  // Update moods state
          isClearable={true}  // Allows user to clear selections
        />

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


