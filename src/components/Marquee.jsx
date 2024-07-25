import React from 'react';


const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee">
        <img src="./src/assets/1.jpg" alt="Image 1" />
        <img src="./src/assets/1.jpg" alt="Image 2" />
        <img src="./src/assets/1.jpg" alt="Image 3" />
        <img src="./src/assets/1.jpg" alt="Image 4" />
        <img src="./src/assets/1.jpg" alt="Image 1" /> {/* Repeat images to create loop effect */}
        <img src="./src/assets/1.jpg" alt="Image 2" />
        <img src="./src/assets/1.jpg" alt="Image 3" />
        <img src="./src/assets/1.jpg" alt="Image 4" />
      </div>
    </div>
  );
}

export default Marquee;
