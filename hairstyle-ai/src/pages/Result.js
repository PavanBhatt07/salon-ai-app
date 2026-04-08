import React from "react";
import { useLocation } from "react-router-dom";

function Result() {
  const location = useLocation();
  const image = location.state?.image;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Results</h2>

      {/* Show uploaded image */}
      {image && (
        <img
          src={image}
          alt="user"
          style={{ width: "200px", borderRadius: "10px" }}
        />
      )}

      <p>Face Shape: Oval</p>

      <h3>Recommended Hairstyles:</h3>
      <ul style={{ listStyle: "none" }}>
        <li>Quiff</li>
        <li>Undercut</li>
        <li>Pompadour</li>
      </ul>
    </div>
  );
}

export default Result;