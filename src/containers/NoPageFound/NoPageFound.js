import React from "react";
import "./NoPageFound.css";
import { Link } from "react-router-dom";

const NoPageFound = (props) => {
  return (
    <div className="no-results-container">
      <div className="no-results">NO RESULTS FOUND</div>
      <Link to="/" className="next-btn">
        Go To Home
      </Link>
    </div>
  );
};

export default NoPageFound;
