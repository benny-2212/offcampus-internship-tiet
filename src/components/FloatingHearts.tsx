import React from "react";

const hearts = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  size: 12 + Math.random() * 18,
  duration: 8 + Math.random() * 12,
  delay: Math.random() * 10,
}));

const FloatingHearts: React.FC = () => {
  return (
    <>
      {hearts.map((h) => (
        <span
          key={h.id}
          className="floating-heart"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
          }}
        >
          ♥
        </span>
      ))}
    </>
  );
};

export default FloatingHearts;
