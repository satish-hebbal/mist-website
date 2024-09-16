import React from 'react';

const BGball = () => {
  // Generate random values for the ball's properties
  const size = Math.floor(Math.random() * 150) + 100; // Random size between 100-250px
  const topLeftRadius = Math.floor(Math.random() * 50) + '%';
  const topRightRadius = Math.floor(Math.random() * 50) + '%';
  const bottomLeftRadius = Math.floor(Math.random() * 50) + '%';
  const bottomRightRadius = Math.floor(Math.random() * 50) + '%';

  return (
    <div 
      className={`
        w-${size} h-${size} 
        bg-gradient-to-br from-violet-300 to-violet-600
        shadow-lg
        animate-pulse
      `}
      style={{
        borderTopLeftRadius: topLeftRadius,
        borderTopRightRadius: topRightRadius,
        borderBottomLeftRadius: bottomLeftRadius,
        borderBottomRightRadius: bottomRightRadius
      }}
    ></div>
  );
};

export default BGball;