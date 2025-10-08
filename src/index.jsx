import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "/about";

import Contact from "./Contact";
import SolarBookingPage from "./SolarBookingPage";  // ✅ Add this import
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<About />} />
       
        <Route path="contact" element={<Contact />} />
        <Route path="SolarBookingPage " element={<SolarBookingPage/>} />

      </Route>
    </Routes>
  </BrowserRouter>
);

