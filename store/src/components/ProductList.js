import React from 'react';
import Product from './Product';
import './ProductList.css';

function ProductList({ onAddToCart, onAddToFavorite }) {
  const products = [
    { id: 1, name: 'Мужской товар 1', price: '1000 руб', image: 'url-to-image-1', category: 'мужское' },
    { id: 2, name: 'Женский товар 1', price: '2000 руб', image: 'url-to-image-2', category: 'женское' },
    { id: 3, name: 'Мужской товар 2', price: '1500 руб', image: 'url-to-image-3', category: 'мужское' },
    { id: 4, name: 'Женский товар 2', price: '1200 руб', image: 'url-to-image-4', category: 'женское' },
    { id: 5, name: 'Мужской товар 3', price: '1100 руб', image: 'url-to-image-5', category: 'мужское' },
    { id: 6, name: 'Женский товар 3', price: '1300 руб', image: 'url-to-image-6', category: 'женское' },
    { id: 7, name: 'Мужской товар 4', price: '1400 руб', image: 'url-to-image-7', category: 'мужское' },
    { id: 8, name: 'Женский товар 4', price: '1600 руб', image: 'url-to-image-8', category: 'женское' },
    { id: 9, name: 'Мужской товар 5', price: '1700 руб', image: 'url-to-image-9', category: 'мужское' },
    { id: 10, name: 'Женский товар 5', price: '1800 руб', image: 'url-to-image-10', category: 'женское' },
    { id: 11, name: 'Мужской товар 6', price: '1900 руб', image: 'url-to-image-11', category: 'мужское' },
    { id: 12, name: 'Женский товар 6', price: '2100 руб', image: 'url-to-image-12', category: 'женское' },
    { id: 13, name: 'Мужской товар 7', price: '2200 руб', image: 'url-to-image-13', category: 'мужское' },
    { id: 14, name: 'Женский товар 7', price: '2300 руб', image: 'url-to-image-14', category: 'женское' },
    { id: 15, name: 'Мужской товар 8', price: '2400 руб', image: 'url-to-image-15', category: 'мужское' },
    { id: 16, name: 'Женский товар 8', price: '2500 руб', image: 'url-to-image-16', category: 'женское' },
    { id: 17, name: 'Мужской товар 9', price: '2600 руб', image: 'url-to-image-17', category: 'мужское' },
    { id: 18, name: 'Женский товар 9', price: '2700 руб', image: 'url-to-image-18', category: 'женское' },
    { id: 19, name: 'Мужской товар 10', price: '2800 руб', image: 'url-to-image-19', category: 'мужское' },
    { id: 20, name: 'Женский товар 10', price: '2900 руб', image: 'url-to-image-20', category: 'женское' },
    { id: 21, name: 'Мужской товар 11', price: '3000 руб', image: 'url-to-image-21', category: 'мужское' },
    { id: 22, name: 'Женский товар 11', price: '3100 руб', image: 'url-to-image-22', category: 'женское' },
    { id: 23, name: 'Мужской товар 12', price: '3200 руб', image: 'url-to-image-23', category: 'мужское' },
    { id: 24, name: 'Женский товар 12', price: '3300 руб', image: 'url-to-image-24', category: 'женское' },
    { id: 25, name: 'Мужской товар 13', price: '3400 руб', image: 'url-to-image-25', category: 'мужское' },
    { id: 26, name: 'Женский товар 13', price: '3500 руб', image: 'url-to-image-26', category: 'женское' },
    { id: 27, name: 'Мужской товар 14', price: '3600 руб', image: 'url-to-image-27', category: 'мужское' },
    { id: 28, name: 'Женский товар 14', price: '3700 руб', image: 'url-to-image-28', category: 'женское' },
    { id: 29, name: 'Мужской товар 15', price: '3800 руб', image: 'url-to-image-29', category: 'мужское' },
    { id: 30, name: 'Женский товар 15', price: '3900 руб', image: 'url-to-image-30', category: 'женское' },
    { id: 31, name: 'Мужской товар 16', price: '4000 руб', image: 'url-to-image-31', category: 'мужское' },
    { id: 32, name: 'Женский товар 16', price: '4100 руб', image: 'url-to-image-32', category: 'женское' },
    { id: 33, name: 'Мужской товар 17', price: '4200 руб', image: 'url-to-image-33', category: 'мужское' },
    { id: 34, name: 'Женский товар 17', price: '4300 руб', image: 'url-to-image-34', category: 'женское' },
    { id: 35, name: 'Мужской товар 18', price: '4400 руб', image: 'url-to-image-35', category: 'мужское' },
    { id: 36, name: 'Женский товар 18', price: '4500 руб', image: 'url-to-image-36', category: 'женское' },
    { id: 37, name: 'Мужской товар 19', price: '4600 руб', image: 'url-to-image-37', category: 'мужское' },
    { id: 38, name: 'Женский товар 19', price: '4700 руб', image: 'url-to-image-38', category: 'женское' },
    { id: 39, name: 'Мужской товар 20', price: '4800 руб', image: 'url-to-image-39', category: 'мужское' },
    { id: 40, name: 'Женский товар 20', price: '4900 руб', image: 'url-to-image-40', category: 'женское' },
  ];

  
  const sortedProducts = [...products].sort((a, b) => {
    if (a.category === 'мужское' && b.category === 'женское') {
      return -1; 
    } else if (a.category === 'женское' && b.category === 'мужское') {
      return 1; 
    } else {
      return 0; 
    }
  });

  return (
    <div className="product-list">
      {sortedProducts.map(product => (
        <Product
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onAddToFavorite={onAddToFavorite}
        />
      ))}
    </div>
  );
}

export default ProductList; 

