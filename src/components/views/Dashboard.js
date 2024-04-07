// Dashboard.js

import React from "react";
import "../styles/Dashboard.css"; // Import the CSS file for styling

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2> Welcome to Dashboard </h2>{" "}
      <div className="card-container">
        <div className="card">
          <h3> Card 1 </h3> <p> This is a sample card content. </p>{" "}
        </div>{" "}
        <div className="card">
          <h3> Card 2 </h3> <p> This is another sample card content. </p>{" "}
        </div>{" "}
        <div className="card">
          <h3> Card 1 </h3> <p> This is a sample card content. </p>{" "}
        </div>{" "}
        <div className="card">
          <h3> Card 1 </h3> <p> This is a sample card content. </p>{" "}
        </div>{" "}
        <div className="card">
          <h3> Card 1 </h3> <p> This is a sample card content. </p>{" "}
        </div>{" "}
        <div className="card">
          <h3> Card 1 </h3> <p> This is a sample card content. </p>{" "}
        </div>{" "}
        {/* Add more cards as needed */}{" "}
      </div>{" "}
      <div className="table-container">
        <h3> Table </h3>{" "}
        <table>
          <thead>
            <tr>
              <th> ID </th> <th> Name </th> <th> Age </th>{" "}
            </tr>{" "}
          </thead>{" "}
          <tbody>
            <tr>
              <td> 1 </td> <td> John </td> <td> 30 </td>{" "}
            </tr>{" "}
            <tr>
              <td> 1 </td> <td> John </td> <td> 30 </td>{" "}
            </tr>{" "}
            <tr>
              <td> 1 </td> <td> John </td> <td> 30 </td>{" "}
            </tr>{" "}
            <tr>
              <td> 1 </td> <td> John </td> <td> 30 </td>{" "}
            </tr>{" "}
            <tr>
              <td> 2 </td> <td> Jane </td> <td> 25 </td>{" "}
            </tr>{" "}
            {/* Add more table rows as needed */}{" "}
          </tbody>{" "}
        </table>{" "}
      </div>{" "}
      <div className="table-container">
        <h3> Table </h3>{" "}
        <table>
          <thead>
            <tr>
              <th> ID </th> <th> Name </th> <th> Age </th>{" "}
            </tr>{" "}
          </thead>{" "}
          <tbody>
            <tr>
              <td> 1 </td> <td> John </td> <td> 30 </td>{" "}
            </tr>{" "}
            <tr>
              <td> 1 </td> <td> John </td> <td> 30 </td>{" "}
            </tr>{" "}
            <tr>
              <td> 1 </td> <td> John </td> <td> 30 </td>{" "}
            </tr>{" "}
            <tr>
              <td> 1 </td> <td> John </td> <td> 30 </td>{" "}
            </tr>{" "}
            <tr>
              <td> 2 </td> <td> Jane </td> <td> 25 </td>{" "}
            </tr>{" "}
            {/* Add more table rows as needed */}{" "}
          </tbody>{" "}
        </table>{" "}
      </div>{" "}
      <div className="table-container">
        <h3> Table </h3>{" "}
        <table>
          <thead>
            <tr>
              <th> ID </th> <th> Name </th> <th> Age </th>{" "}
            </tr>{" "}
          </thead>{" "}
          <tbody>
            <tr>
              <td> 1 </td> <td> John </td> <td> 30 </td>{" "}
            </tr>{" "}
            <tr>
              <td> 1 </td> <td> John </td> <td> 30 </td>{" "}
            </tr>{" "}
            <tr>
              <td> 1 </td> <td> John </td> <td> 30 </td>{" "}
            </tr>{" "}
            <tr>
              <td> 1 </td> <td> John </td> <td> 30 </td>{" "}
            </tr>{" "}
            <tr>
              <td> 2 </td> <td> Jane </td> <td> 25 </td>{" "}
            </tr>{" "}
            {/* Add more table rows as needed */}{" "}
          </tbody>{" "}
        </table>{" "}
      </div>{" "}
    </div>
  );
};

export default Dashboard;
