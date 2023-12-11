import React, { useState } from 'react';

const HoverOver = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonStyle = {
    backgroundColor: isHovered ? 'red' : 'blue',
    // Add other button styles here
  };

  return (
    <div>
      <button
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Hover Over Me
      </button>
    </div>
  );
};

export default HoverOver;

