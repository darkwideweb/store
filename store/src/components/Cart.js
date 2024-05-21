import React from 'react';
import './Cart.css';

function Cart({ cartItems = [], onPageChange }) {
  return (
    <div className="cart">
      <h2>Корзина</h2>
      {cartItems.length === 0 ? (
        <p>Ваша корзина пуста</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price} руб
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => onPageChange('checkout')}>Оформить заказ</button>
    </div>
  );
}

export default Cart;
