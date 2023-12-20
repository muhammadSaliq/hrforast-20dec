import React, { useState } from 'react';

function HoverButton() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      // className={`hover-button ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Hover me

${
  isHovered ? <div>
    <h1>Ahmed Raza</h1>
  </div> : null
}


    </button>
  );
}

export default HoverButton;
