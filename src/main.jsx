import React from "react";
import ReactDOM from "react-dom/client";
import  { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import DestinationComponent from "./components/Booking/Destination";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<App />}/>
         <Route path="destination" element={<DestinationComponent/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
