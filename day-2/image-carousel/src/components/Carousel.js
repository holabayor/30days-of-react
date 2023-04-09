import React, { useState } from 'react';
import { FcNext, FcPrevious } from 'react-icons/fc';

export default function Carousel({ images }) {
  const [current, setCurrent] = useState(0);
  const prevSlide = (e) => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = (e) => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };
  return (
    <div className="container">
      <h2>Image Carousel</h2>
      <div className="carousel">
        <img src={images[current].images[0]} alt="placeholder" />
      </div>
      <p>{images[current].title}</p>
      <div className="buttons">
        <FcPrevious className="icon" name="prev" onClick={prevSlide} />
        <FcNext className="icon" name="next" onClick={nextSlide} />
      </div>
    </div>
  );
}
