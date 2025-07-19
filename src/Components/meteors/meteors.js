import React from "react";
import "./meteors.css";

const Meteors = ({ count = 8 }) => {
  const meteors = Array.from({ length: count });

  return (
    <div className="meteors-container">
      {meteors.map((_, i) => (
        <div
          key={i}
          className="meteor"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Meteors;
