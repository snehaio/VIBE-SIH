
// export interface IUserInput {
//     mood: string;
//     company: string;
//     startDate: string;
//     endDate: string;
//     Budget: number;
//   }
  
  
//   export interface ILodgingData {
//     type: string;
//     name: string;
//     price: number;
//     rating: number;
//     numberOfRatings: number;
//     image: string;
//     location: {
//       city: string;
//       state: string;
//       country: string;
//     };
//   }
  
  
//   export const fetchRecommendations = async (userInput: IUserInput): Promise<ILodgingData[]> => {
//     const { mood, company, startDate, endDate, Budget } = userInput;
  
   
//     const queryParams = new URLSearchParams({
//       mood,
//       company,
//       startDate,
//       endDate,
//       Budget: Budget.toString(),
//     });
  
//     try {
      
//       const response = await fetch(`http://3.109.1.79:8080/api/user/mood/destination?${queryParams}`);
      
//       // Check if the response is OK
//       if (!response.ok) {
//         throw new Error(`API Error: ${response.statusText}`);
//       }
  
      
//       const data = await response.json();
//       return data as ILodgingData[]; 
//     } catch (error) {
//       console.error('Error fetching recommendations:', error);
//       throw error; 
//     }
//   };
  

import axios from 'axios';

// Define the request data structure (adjust based on your backend API requirements)
interface RecommendationRequest {
  mood: string;
  company: string;
  startDate: string;
  endDate: string;
  Budget: number;
}

// Define the response data structure
interface RecommendationResponse {
  name: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
}

// Axios function to fetch recommendations
export const fetchRecommendations = async (requestData: RecommendationRequest): Promise<RecommendationResponse[]> => {
  try {
    const response = await axios.post<RecommendationResponse[]>('http://3.109.1.79:8080/api/user/mood/destination', requestData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Return the data from the response
    return response.data;
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    throw error;  // Re-throw the error to handle it in the calling function
  }
};
