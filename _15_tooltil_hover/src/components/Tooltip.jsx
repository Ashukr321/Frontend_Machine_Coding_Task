// Tooltip.jsx
import React from "react";

const Tooltip = ({
  text_color = "#fff",
  background_color = "#333",
  content,
  placement = "top",
}) => {
  const baseStyles = {
    position: "absolute",
    padding: "10px 14px",
    backgroundColor: background_color,
    color: text_color,
    borderRadius: "6px",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    fontSize: "14px",
    whiteSpace: "nowrap",
    transition: "opacity 3s ease-in-out, transform 0.3s ease-in-out",
    opacity: 1,
    zIndex: 100,
    clip: "3",
    maxWidth: "220px",         // ✅ set max width
    whiteSpace: 'normal',
    wordWrap: "break-word",    // ✅ break long words
    overflowWrap: "break-word",// ✅ cross-browser support
    textAlign: "left"
  };

  const positionStyles = {
    top: { bottom: "125%", left: "50%", transform: "translateX(-50%)" },
    bottom: { top: "125%", left: "50%", transform: "translateX(-50%)" },
    left: { right: "125%", top: "50%", transform: "translateY(-50%)" },
    right: { left: "125%", top: "50%", transform: "translateY(-50%)" },
  };

  return (
    <div style={{ ...baseStyles, ...positionStyles[placement] }}>
      {content}
    </div>
  );
};

export default Tooltip;
