import React from "react";
import Navbar from "./components/const/Navbar"; // Import the Navbar component
import "./App.css"; // Import any additional styles
import Sidebar from "./components/const/Sidebar"; // Import the Sidebar component

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App__container">
        <Sidebar />
        <div className="main-content">
          {" "}
          {/* Add other components/views here */}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default App;
