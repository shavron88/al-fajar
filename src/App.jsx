import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div>
      <Header />

      {/* Page content will render here */}
      <main className="page-content">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
