import React from 'react';

function ProductDetails({ product }) {
  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Цена: {product.price} руб</p>
      <button>Добавить в корзину</button>
    </div>
  );
}

export default ProductDetails;
