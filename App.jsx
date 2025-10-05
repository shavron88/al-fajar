import React from "react";
import { Routes, Route } from "react-router-dom";
import SolarBookingPage from "./SolarBookingPage"; 
import TestimonialsPage from "./TestimonialsPage";

function App() {
  return (
    <Routes>
      <Route path="/booking" element={<SolarBookingPage />} />
      <Route path="/testimonials" element={<TestimonialsPage />} />
    </Routes>
  );
}

export default App;
