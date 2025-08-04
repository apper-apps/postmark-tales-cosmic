import React, { useEffect, useState, useCallback } from "react";

const DotsPattern = () => {
  const [dots, setDots] = useState([]);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);
  }, []);

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
          delay: Math.random() * 6,
          // Parallax factors for different depth layers
          parallaxFactor: 0.1 + Math.random() * 0.3, // Random between 0.1 and 0.4
          scale: 0.8 + Math.random() * 0.4 // Random scale between 0.8 and 1.2
        });
      }
      
      setDots(newDots);
    };

    generateDots();
    window.addEventListener("resize", generateDots);
    
    return () => window.removeEventListener("resize", generateDots);
  }, []);

  useEffect(() => {
    // Throttled scroll listener for performance
    let ticking = false;
    
    const updateScrollPosition = () => {
      handleScroll();
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollPosition);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    
    return () => window.removeEventListener("scroll", onScroll);
  }, [handleScroll]);

  return (
    <div className="dots-pattern">
      {dots.map((dot) => {
        // Calculate parallax offset based on scroll position
        const parallaxOffset = scrollY * dot.parallaxFactor;
        
        return (
          <div
            key={dot.id}
            className="dot"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              animationDelay: `${dot.delay}s`,
              transform: `translate3d(0, ${parallaxOffset}px, 0) scale(${dot.scale})`,
              willChange: 'transform'
            }}
          />
        );
      })}
    </div>
  );
};

export default DotsPattern;