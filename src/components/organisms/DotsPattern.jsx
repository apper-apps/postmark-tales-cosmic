import React, { useEffect, useState } from "react";

const DotsPattern = () => {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    // Generate random dots across the viewport
    const generateDots = () => {
      const dotCount = Math.floor((window.innerWidth * window.innerHeight) / 15000);
      const newDots = [];
      
      for (let i = 0; i < dotCount; i++) {
        newDots.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 6
        });
      }
      
      setDots(newDots);
    };

    generateDots();
    window.addEventListener("resize", generateDots);
    
    return () => window.removeEventListener("resize", generateDots);
  }, []);

  return (
    <div className="dots-pattern">
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="dot"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            animationDelay: `${dot.delay}s`
          }}
        />
      ))}
    </div>
  );
};

export default DotsPattern;