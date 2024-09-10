import { Request, Response } from "express";
import { IlodgingData, IuserInput } from "../types";


const data: IlodgingData[] = [
  {
    type: "Hotel",
    name: "The Grand Palace",
    price: 250,
    rating: 4.7,
    numberOfRatings: 1250,
    image: "https://photos.hotelbeds.com/giata/00/004200/004200a_hb_ro_006.jpg",
    location: {
      city: "Paris",
      state: "Île-de-France",
      country: "France"
    }
  },
  {
    type: "Hostel",
    name: "Budget Backpackers",
    price: 35,
    rating: 4.3,
    numberOfRatings: 350,
    image: "https://photos.hotelbeds.com/giata/00/004200/004200a_hb_ro_006.jpg",
    location: {
      city: "Berlin",
      state: "Berlin",
      country: "Germany"
    }
  },
  {
    type: "Resort",
    name: "Oceanfront Paradise",
    price: 450,
    rating: 4.9,
    numberOfRatings: 900,
    image: "https://photos.hotelbeds.com/giata/00/004200/004200a_hb_ro_006.jpg",
    location: {
      city: "Miami",
      state: "Florida",
      country: "USA"
    }
  },
  {
    type: "Hostel",
    name: "Cozy Cottage",
    price: 120,
    rating: 4.5,
    numberOfRatings: 600,
    image: "https://photos.hotelbeds.com/giata/00/004200/004200a_hb_ro_006.jpg",
    location: {
      city: "Amsterdam",
      state: "North Holland",
      country: "Netherlands"
    }
  },
  {
    type: "Bnb",
    name: "City Center Studio",
    price: 80,
    rating: 4.2,
    numberOfRatings: 150,
    image: "https://photos.hotelbeds.com/giata/00/004200/004200a_hb_ro_006.jpg",
    location: {
      city: "New York",
      state: "New York",
      country: "USA"
    }
  }
];


export const findAccomadation = async (req:Request<{}, {}, IuserInput>, res: Response)=> {
  try {

    const userData = req.body;
    console.log(req.body);
    if(!userData) {
      return res.status(400).json({mesg:"All fileds are mandatory to fill", data, success: false},);
    }
    return res.json({data, successs: true});
  } catch (e){
    console.log(e);
    return res.json({error: e});
  }
}

