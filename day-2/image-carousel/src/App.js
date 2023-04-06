import React, { useState, useLayoutEffect } from 'react';
import './App.css';
import Carousel from './components/Carousel';

function App() {
  const [images, setImages] = useState([]);

  useLayoutEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((response) => {
        setImages(response.products);
      });
  }, [images]);
  return <div>{images && <Carousel images={images} />}</div>;
}

export default App;
