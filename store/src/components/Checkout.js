import React from 'react';
import './Checkout.css';

function Checkout({ cartItems }) {
  const totalAmount = cartItems.reduce((sum, item) => sum + parseFloat(item.price.replace(' руб', '')), 0);

  return (
    <div className="checkout">
      <h2>Оформление заказа</h2>
      {cartItems.length === 0 ? (
        <p>В вашей корзине пусто.</p>
      ) : (
        <>
          <div className="checkout-items">
            {cartItems.map((item, index) => (
              <div key={index} className="checkout-item">
                <span>{item.name}</span>
                <span>{item.price} руб</span>
              </div>
            ))}
          </div>
          <div className="checkout-total">
            <h3>Итого: {totalAmount} руб</h3>
          </div>
          <form className="checkout-form">
            <div className="form-group">
              <label>ФИО:</label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>Адрес:</label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>Данные карты:</label>
              <input type="text" required />
            </div>
            <button type="submit">Оплатить</button>
          </form>
        </>
      )}
    </div>
  );
}

export default Checkout;
