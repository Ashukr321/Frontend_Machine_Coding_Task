import React, { useState } from "react";
import "./App.css";
import Tooltip from "./components/Tooltip";

const App = () => {
  const [showToolTip, setShowToolTip] = useState(false);

  const show = () => setShowToolTip(true);
  const hide = () => setShowToolTip(false);

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h1>Tooltip Hover</h1>

      <div
        style={{
          margin: "20px auto",
          display: "inline-block",
          position: "relative", // Tooltip will position relative to this
        }}
        onMouseEnter={show}
        onMouseLeave={hide}
      >
        <button className="btn">More Info..</button>

        {showToolTip ? <Tooltip text_color="black" background_color="pink" content={"amazing wow ashu adsfqefdaiofhadiofhqieohfioqhfdhafuhqeufhsf ads fhadf aidsfh a"} /> : ""}
      </div>
    </div>
  );
};

export default App;
