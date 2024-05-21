import React from 'react';
import './Product.css';

function Product({ product, onAddToCart, onAddToFavorite }) {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button onClick={() => onAddToCart(product)}>Добавить в корзину</button>
      <button onClick={() => onAddToFavorite(product)}>В избранное</button>
    </div>
  );
}

export default Product;
