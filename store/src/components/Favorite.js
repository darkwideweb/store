import React from 'react';
import './Favorite.css';

function Favorite({ favoriteItems, onRemoveFromFavorite, onViewProduct }) {
  return (
    <div className="favorite">
      <h2>Избранное</h2>
      {favoriteItems && favoriteItems.length === 0 ? (
        <p>У вас нет избранных товаров.</p>
      ) : (
        <ul>
          {favoriteItems && favoriteItems.map((item, index) => (
            <li key={index} className="favorite-item">
              <div className="favorite-item-details">
                <span>{item.name}</span>
                <span>{item.price}</span>
              </div>
              <div className="favorite-item-actions">
                <button onClick={() => onViewProduct(item)}>Посмотреть</button>
                <button onClick={() => onRemoveFromFavorite(item)}>Удалить</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favorite;
