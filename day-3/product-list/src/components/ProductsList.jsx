import React from 'react';
import { useEffect, useState } from 'react';
import products from '../data';
import ProductItem from './ProductItem';

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

  return (
    <div>
      {/* <ul>{productList}</ul> */}
      <div className="products-page">
        <h1>Our Products</h1>
        <div className="product-list">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
