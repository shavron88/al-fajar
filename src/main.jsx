import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import About from "./About";

import Contact from "./Contact";
import SolarBookingPage from "./SolarBookingPage";
import TestimonialsPage from "./TestimonialsPage";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
       
        <Route path="contact" element={<Contact />} />
        <Route path="booking" element={<SolarBookingPage />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
