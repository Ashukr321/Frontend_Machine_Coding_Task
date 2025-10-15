import React, { useState } from "react";

const App = () => {
  const [text] = useState("Today we implement click to copy ✨");
  const [copied, setCopied] = useState(false);

  const handleClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(to right, #6366F1, #8B5CF6, #EC4899)",
        color: "white",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          padding: "40px",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <h1 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "20px" }}>
          {text}
        </h1>

        <button
          onClick={handleClipboard}
          style={{
            padding: "10px 25px",
            borderRadius: "12px",
            fontSize: "16px",
            fontWeight: "500",
            border: "none",
            outline: "none",
            cursor: "pointer",
            transition: "all 0.3s ease",
            backgroundColor: copied ? "#22c55e" : "#ffffff",
            color: copied ? "#ffffff" : "#4f46e5",
            transform: copied ? "scale(1.05)" : "scale(1)",
          }}
        >
          {copied ? "Copied ✅" : "Copy"}
        </button>

        <p style={{ marginTop: "15px", fontSize: "14px", color: "rgba(255,255,255,0.8)" }}>
          Click the button to copy the text above 📋
        </p>
      </div>
    </div>
  );
};

export default App;
