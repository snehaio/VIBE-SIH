import { useEffect, useState } from "react";
import axios from "axios";
import { base_url } from "../../App";
import { useNavigate } from "react-router-dom";
import './Destination.css';


const hardCodedData = [
  {
    id: "goa123",
    tags: ["beach", "adventure", "nightlife", "water-sports"],
    rating: 4.8,
    numberOfRatings: 2400,
    image:
      "https://tse4.mm.bing.net/th?id=OIP.Po2sXyaDZC94tPBjJE21wgHaEo&pid=Api&P=0&h=180",
    location: {
      city: "Goa",
      state: "Goa",
      country: "India",
    },
  },
  {
    id: "shimla456",
    tags: ["hill-station", "snow", "adventure", "family"],
    rating: 4.6,
    numberOfRatings: 1200,
    image:
      "https://tse1.mm.bing.net/th?id=OIP.mN7uAQduKZA_W3tPbqtyQQHaFL&pid=Api&P=0&h=180",
    location: {
      city: "Shimla",
      state: "Himachal Pradesh",
      country: "India",
    },
  },

  {
    id: "jaipur012",
    tags: ["heritage", "culture", "history", "forts"],
    rating: 4.5,
    numberOfRatings: 1100,
    image:
      "https://tse3.mm.bing.net/th?id=OIP.Paq060V_sg9Y-W-iwWnhdQHaFg&pid=Api&P=0&h=180",
    location: {
      city: "Jaipur",
      state: "Rajasthan",
      country: "India",
    },
  },
  {
    id: "manali345",
    tags: ["adventure", "snow", "trekking", "hill-station"],
    rating: 4.7,
    numberOfRatings: 1600,
    image:
      "https://tse1.mm.bing.net/th?id=OIP.gVWZzjdrWtFD0TfWBIkyXAHaE8&pid=Api&P=0&h=180",
    location: {
      city: "Manali",
      state: "Himachal Pradesh",
      country: "India",
    },
  },
];


const DestinationComponent = () => {
  const navigate = useNavigate();
  const [recommendedData, setRecommendedData] = useState([]);
  const userData = JSON.parse(localStorage.getItem("LSuserData"));

  useEffect(() => {
    if (!userData) {
      navigate("/");
      return;
    }

    const fetchData = async () => {
      try {
        const resp = await axios.post(
          `http://${base_url}/api/user/mood/destination`,
          userData
        );
        console.log("backend api resp: ", resp);

        if (resp.data?.data?.length > 0) {
          setRecommendedData(resp.data.data);
        } else {
          setRecommendedData(hardCodedData);
        }
      } catch (e) {
        console.log("some error", e);
        setRecommendedData(hardCodedData); 
      }
    };

    fetchData();
  }, [userData, navigate]); 

  return (
    <div id="recommendations">
       <h2 id="heading" className="text-3xl font-bold mb-5">Personalized Recommendations for you :)</h2>
       <div className="card-container flex flex-wrap justify-center">
        {recommendedData.map((destination) => (
           <DestinationCard key={destination.id} data={destination} />
          ))}
    </div>
    </div>
  );
};


const DestinationCard = ({ data }) => {
  return (
    <div className="card">
      <div className="image-container">
        <img
          src={data.image}
          alt={data.location.city}
          className="card-image"
        />
      </div>
      <div className="card-content">
        <div className="location-info">
          <p className="location">{data.location.city}, {data.location.country}</p>
          <p className="state">{data.location.state}</p>
        </div>
        <div className="rating-info">
          <p className="rating">⭐ {data.rating}</p>
          <p className="reviews">({data.numberOfRatings} reviews)</p>
          <div className="know-more">
        <i className="fas fa-chevron-down"></i> {/* Font Awesome down arrow */}
      </div>
        </div>
      </div>
    </div>
  );
};


export default DestinationComponent;
