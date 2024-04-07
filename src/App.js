// App.js

import React, { useState } from "react";
import Navbar from "./components/const/Navbar";
import "./App.css";
import Sidebar from "./components/const/Sidebar";
import Dashboard from "./components/views/Dashboard"; // Import the Dashboard component

function App() {
  // State to track selected menu item
  const [selectedMenuItem, setSelectedMenuItem] = useState("Dashboard");

  // Function to handle menu item clicks
  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="App__container">
        <Sidebar
          onMenuItemClick={handleMenuItemClick}
          selectedMenuItem={selectedMenuItem}
        />{" "}
        <div className="main-content">
          {" "}
          {/* Render corresponding component based on selected menu item */}{" "}
          {selectedMenuItem === "Dashboard" && <Dashboard />}{" "}
          {/* Add other components/views here */}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default App;
