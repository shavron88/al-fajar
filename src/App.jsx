

import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom"; // 👈 Needed for nested routes

function App() {
  return (
    <>
      <Header />   {/* stays on all pages */}
      <Outlet />   {/* where each page (Home, About, Contact, etc.) will render */}
    </>
  );
}

export default App;
