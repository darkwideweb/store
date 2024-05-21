import React from 'react';
import './Header.css';

function Header({ onPageChange, isLoggedIn, onToggleContent, onSearchOpen }) {
  const handleCategoryChange = (category) => {
    onPageChange('home', category);
  };

  return (
    <header className="header">
      <div className="logo" onClick={onToggleContent}>AFS</div>
      <nav>
        <button onClick={() => handleCategoryChange('мужское')}>Мужское</button>
        <button onClick={() => handleCategoryChange('женское')}>Женское</button>
        <button onClick={() => onPageChange('login')}>{isLoggedIn ? 'Мой аккаунт' : 'Вход'}</button>
        <button onClick={() => onPageChange('favorite')}>Избранное</button>
        <button onClick={() => onPageChange('cart')}>Корзина</button>
        <button onClick={() => onPageChange('info')}>О нас</button>
        <button onClick={onSearchOpen}>Поиск</button>
      </nav>
    </header>
  );
}

export default Header;
