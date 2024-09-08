import { useEffect, useState } from "react";
import axios from "axios";
import { base_url } from "../../App";
import { useNavigate } from "react-router-dom";

const data = [
  {
    id: "someString",
    tags: ["adventure", "family", "snow", "hill-statio"],
    rating: 4.7,
    numberOfRatings: 1250,
    image:
      "https://images.pexels.com/photos/733148/pexels-photo-733148.jpeg?auto=compress&dpr=1",
    location: {
      city: "Paris",
      state: "Île-de-France",
      country: "France",
    },
  },
  {
    id: "someString",
    tags: ["adventure", "family", "snow", "hill-statio"],
    rating: 4.3,
    numberOfRatings: 350,
    image:
      "https://images.pexels.com/photos/733148/pexels-photo-733148.jpeg?auto=compress&dpr=1",
    location: {
      city: "Berlin",
      state: "Berlin",
      country: "Germany",
    },
  },
  {
    id: "someString",
    tags: ["adventure", "family", "snow", "hill-statio"],
    rating: 4.9,
    numberOfRatings: 900,
    image:
      "https://images.pexels.com/photos/733148/pexels-photo-733148.jpeg?auto=compress&dpr=1",
    location: {
      city: "Miami",
      state: "Florida",
      country: "USA",
    },
  },
  {
    id: "someString",
    tags: ["adventure", "family", "snow", "hill-statio"],
    rating: 4.5,
    numberOfRatings: 600,
    image:
      "https://images.pexels.com/photos/733148/pexels-photo-733148.jpeg?auto=compress&dpr=1",
    location: {
      city: "Amsterdam",
      state: "North Holland",
      country: "Netherlands",
    },
  },
  {
    id: "someString",
    tags: ["adventure", "family", "snow", "hill-statio"],
    rating: 4.2,
    numberOfRatings: 150,
    image:
      "https://images.pexels.com/photos/733148/pexels-photo-733148.jpeg?auto=compress&dpr=1",
    location: {
      city: "New York",
      state: "New York",
      country: "USA",
    },
  },
];

const DestinationComponent = () => {
  const navigate = useNavigate()
  const [recommendedData, setRecommendatedData] = useState([]);
  const userData = JSON.parse(localStorage.getItem("LSuserData"));
  console.log("LSuserData ", userData);
  if(!userData) {
    navigate("/")
  }

  const fetchData = async () => {
    try {
      const resp = await axios.post(`http://${base_url}/api/user/mood/destination`, userData);
      console.log("Resp Data: ", resp.data.data);
      setRecommendatedData(resp.data.data || []);
    } catch (e) {
      console.log("some err", e);
    }
  };
  useEffect(()=> {
    fetchData();
  }, []
  )
  return (
    <div className="flex justify-center bg-black">
      <ul>
        {recommendedData.map((destination) => (
          <li key={destination.id}>
            <DestinationCard data={destination} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const DestinationCard = ({ data }) => {
  return (
    <>
      <div className="flex bg-black py-2 basis-1/3 justify-center ">
        <div className="image basis-1/4">
          <img src={data.image} alt={data.location.city} height={2} width={3} />
        </div>
        <div className="text-body basis-3/4">
          <div className="bg-black px-2 flex justify-between">
            <div>
              <p>
                {data.location.country} : {data.location.city}
              </p>
            </div>
            <div>
              <p>Rating: {data.rating}</p>
              <p>({data.numberOfRatings} reviews)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DestinationComponent;
