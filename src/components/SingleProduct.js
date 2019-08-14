import React from 'react';
import { Link } from 'react-router-dom';

export function SingleProduct({ product }) {
  let stocked = 'No';
  if (product.inStock) {
    stocked = 'Yes';
  }
  return (
    <div key={product.id} className="product-card">
      <Link to={`/products/${product.id}`}>
        <img
          className="product-image"
          src={
            product.image ? product.image : '/img/products/default-product.jpg'
          }
          alt="Product Image"
        />
      </Link>
      <div key={product.id} className="product-container">
        <h3>
          <b> {product.name} </b>
        </h3>
        <p>
          {product.description ? product.description.slice(0, 50) + '...' : ''}
        </p>
      </div>
      <h4> In Stock: {stocked} </h4>
      <Link to={`/products/${product.id}`}>
        <button>Details</button>
      </Link>
    </div>
  );
}
