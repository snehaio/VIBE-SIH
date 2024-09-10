export interface IuserInput {
  mood: string,
  company: string,
  startDate: string,
  endDate: string,
  Budget: number,
  roundTrip: boolean
}

export interface IlodgingData {
  type: string;
  name: string;
  price: number;
  rating: number;
  numberOfRatings: number;
  image: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
}
