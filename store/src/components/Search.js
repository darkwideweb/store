import React from 'react';
import './Search.css';

function SearchOverlay({ searchQuery, onSearchChange, onSearchSubmit, onClose }) {
  return (
    <div className="search-overlay">
      <div className="search-form">
        <input
          type="text"
          className="search-input"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Поиск..."
        />
        <button className="search-button" onClick={onSearchSubmit}>Найти</button>
        <div className="close-button" onClick={onClose}>✖</div>
      </div>
    </div>
  );
}

export default SearchOverlay;
