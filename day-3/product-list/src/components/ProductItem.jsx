const ProductItem = ({ product }) => {
  return (
    <div className="produc" key={product.id}>
      <div className="product-image">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="product-details">
        <div className="product-text">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </div>

        <span className="price">${product.price}</span>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
