import React from 'react';
import { useEffect, useState } from 'react';
import products from '../data';

const Products = () => {
  //   const [products, setProducts] = useState([]);

  //   useEffect(() => {
  //     fetch('https://dummyjson.com/products')
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setProducts(data.products);
  //       });
  //   }, []);

  const productList = products.map((product) => {
    return (
      <li key={product.id}>
        <h2>{product.name}</h2>
        <img src={product.thumbnail} alt={product.name} />
        <p>{product.description}</p>
        <p>${product.price}</p>
      </li>
    );
  });

  return (
    <div>
      <h1>Products</h1>
      {productList}
    </div>
  );
};

export default Products;
