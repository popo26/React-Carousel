import React, { useState } from 'react';

const Carousel2 = () => {
  const [index, setIndex] = useState(0); 
  const length = 10;

  const handlePrevious = () => {
    console.log(`Prev Current Index is ${index}`)

    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
    console.log(`Prev Current Index is ${index}`)

  };

  const handleNext = () => {
    console.log(`Next Current Index is ${index}`)

    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
    console.log(`Next Current Index is ${index}`)

  };

  return (
    <div className="carousel">
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
      <p>{index}</p>
    </div>
  );
};

export default Carousel2;