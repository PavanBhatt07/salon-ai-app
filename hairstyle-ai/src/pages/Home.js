import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>AI Hairstyle Recommendation</h1>
      <p>Find the best hairstyle for your face</p>

      <button
        onClick={() => navigate("/upload")}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Get Started
      </button>
    </div>
  );
}

export default Home;