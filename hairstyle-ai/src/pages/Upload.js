import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Upload() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    // Create preview
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    if (!image) {
      alert("Please upload an image");
      return;
    }

    // Pass image preview to result page
    navigate("/result", { state: { image: preview } });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Upload Your Photo</h2>

      <input type="file" onChange={handleImageChange} />

      <br /><br />

      {/* Show preview */}
      {preview && (
        <div>
          <img
            src={preview}
            alt="preview"
            style={{ width: "200px", borderRadius: "10px" }}
          />
        </div>
      )}

      <br />

      <button
        onClick={handleSubmit}
        style={{ padding: "10px 20px", cursor: "pointer" }}
      >
        Analyze
      </button>
    </div>
  );
}

export default Upload;