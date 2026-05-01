import React from "react";

export default function XCS() {
  return (
    <div id="xcs" style={{ padding: "80px 20px", textAlign: "center" }}>
      
      <h1 style={{ fontSize: "2.5rem" }}>XCS Submissions</h1>

      {/* PDF */}
      <h2 style={{ marginTop: "40px" }}>Handwritten Essay</h2>
      <iframe
        src="/essay.pdf"
        width="80%"
        height="500px"
        title="Essay"
        style={{
          marginTop: "20px",
          borderRadius: "10px",
          border: "1px solid #ccc"
        }}
      ></iframe>

      {/* Video */}
      <h2 style={{ marginTop: "60px" }}>Introduction Video</h2>
      <video
        width="600"
        controls
        style={{ marginTop: "20px", borderRadius: "10px" }}
      >
        <source src="/intro.mp4" type="video/mp4" />
      </video>

    </div>
  );
}