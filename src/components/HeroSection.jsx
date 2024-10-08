import React, { useState, useEffect, useRef } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";
import { motion } from "framer-motion";
import Select from "react-select"; // Import react-select
import BookNow from "./Booking/BookNow";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  // State variables to manage input data
  const [feeling, setFeeling] = useState("");
  const [moods, setMoods] = useState([]); // Array to hold multiple mood inputs as tags
  const [dateRange, setDateRange] = useState("");
  const [company, setCompany] = useState("");
  const [budget, setBudget] = useState("");
  const [roundTrip, setRoundTrip] = useState(true);
  const [recommendations, setRecommendations] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const datePickerRef = useRef(null);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    flatpickr(datePickerRef.current, {
      mode: "range",
      dateFormat: "Y-m-d",
      onChange: (selectedDates) => {
        setDateRange(
          selectedDates
            .map((date) => date.toISOString().slice(0, 10))
            .join(" to ")
        );
      },
    });
  }, []);

  const moodOptions = [
    { value: "Adventurous", label: "Adventurous" },
    { value: "Religious", label: "Religious" },
    { value: "Exciting", label: "Exciting" },
    { value: "Party", label: "Party" },
    { value: "Solace", label: "Solace" },
    { value: "Relaxed", label: "Relaxed" },
    { value: "Romantic", label: "Romantic" },
  ];

  const customStyles = {
    menu: (provided) => ({
      ...provided,
      maxHeight: 150, // Limit the dropdown height
      overflowY: "auto", // Enable vertical scrolling
    }),
    control: (provided) => ({
      ...provided,
      minHeight: "40px", // Adjust height for the control element (optional)
    }),
  };
  // Function to handle form submission and send data to backend API
  const handleSearch = async () => {
    const dateArr = dateRange.split(" ");
    let startDate = dateArr[0];
    let endDate = dateArr[2];
    if (!roundTrip || !moods || !company || !budget || !roundTrip) {
      return setErrorMessage(
        "All the details need to be fiiled out out all the details"
      );
    }
    const userData = {
      moods,
      startDate,
      endDate,
      company,
      budget,
      roundTrip,
    };
    console.log(userData);
    localStorage.setItem("LSuserData", JSON.stringify(userData));
    console.log("here is the code: ", localStorage.getItem("LSuserData"));
    return navigate("/destination");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center text-white">
      <motion.h1
        className="text-5xl font-bold mb-4 rounded-sm bg-black/20 h-28 italic"
        style={{ position: "relative", top: "-20px" }}
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        transition={{ duration: 0.3 }}
      >
        Let Your <span style={{ color: "aqua" }}>Feelings</span> Choose Your
        Next <span style={{ color: "aqua" }}>Adventure!</span>
      </motion.h1>

      <p
        className="text-xl mb-8"
        style={{ color: "white", fontWeight: "bold", top: "-5px" }}
      >
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
          options={moodOptions} // Predefined mood options
          className="basic-multi-select text-black bg-white"
          classNamePrefix="select"
          placeholder="Select your mood(s)..."
          value={moods}
          onChange={(selectedMoods) => setMoods(selectedMoods)} // Update moods state
          isClearable={true}
          menuPlacement="top" // Allows user to clear selections
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
          <option disabled value="">
            Company
          </option>
          <option value="Family">Family</option>
          <option value="Friends">Friends</option>
          <option value="Solo">Solo</option>
          <option value="Couple">Couple</option>
        </select>

        <select
          className="px-4 py-2 rounded-lg bg-white bg-opacity-80 text-gray-700"
          value={roundTrip}
          onChange={(e) => setRoundTrip(e.target.value)}
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
          onClick={() => handleSearch()}
        >
          Search
        </button>
        <BookNow isOpen={isPopupOpen} setIsOpen={setIsPopupOpen} />
      </div>
      {errorMessage && <div className="text-red-500 mt-4">{errorMessage}</div>}
    </div>
  );
};

export default HeroSection;
