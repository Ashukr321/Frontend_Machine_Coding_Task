import { useRef, useState } from 'react';
import './App.css';

const App = () => {
  // state 
  const [activeIndex, setActiveIndex] = useState(null);

  // toggle handler
  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  // accordion data
  const accordionData = [
    {
      title: "What is React?",
      description: "React is a JavaScript library for building user interfaces."
    },
    {
      title: "What is a Component?",
      description: "Components are reusable UI pieces that make up a React app."
    },
    {
      title: "What is useState?",
      description: "useState is a React hook to manage state in functional components."
    }
  ];

  return (
    <div
      style={{
        width: "400px",
        margin: "0 auto",
        marginTop: "20px"
      }}
    >
      {accordionData.map((item, index) => {
        const contentRef = useRef(null);

        return (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              marginBottom: "10px",
              borderRadius: "4px",
              overflow: "hidden",
              padding: "4px 10px"
            }}
          >
            {/* Accordion title */}
            <div
              onClick={() => handleToggle(index)}
              style={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px"
              }}
            >
              <h3 style={{ fontWeight: "bold", margin: 0 }}>{item.title}</h3>
              <span style={{ fontWeight: "bold" }}>
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>

            {/* Accordion content */}
            <div
              ref={contentRef}
              style={{
                maxHeight:
                  activeIndex === index
                    ? `${contentRef.current?.scrollHeight}px`
                    : "0px",
                overflow: "hidden",
                transition: "max-height 0.3s ease",
              }}
            >
              <p style={{ color: "#555", margin: 0 }}>{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
