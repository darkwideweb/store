import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Favorite from './components/Favorite';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Info from './components/Info';
import Content from './components/Content';
import SearchOverlay from './components/Search';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sortCategory, setSortCategory] = useState('');
  const [isContentOpen, setIsContentOpen] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handlePageChange = (page, category = null) => {
    setCurrentPage(page);
    setSortCategory(category);
    setIsContentOpen(false);
  };

  const toggleContent = () => {
    setIsContentOpen(!isContentOpen);
  };

  const handleAddToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleAddToFavorite = (product) => {
    const existingProduct = favoriteItems.find((item) => item.id === product.id);
    if (!existingProduct) {
      setFavoriteItems([...favoriteItems, product]);
    }
  };

  const handleRemoveFromFavorite = (product) => {
    setFavoriteItems(favoriteItems.filter((item) => item.id !== product.id));
    if (selectedProduct && selectedProduct.id === product.id) {
      setSelectedProduct(null);
    }
  };

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleSearchSubmit = () => {
    setIsSearchOpen(false);
  };

  const handleSortCategoryChange = (category) => {
    setSortCategory(category);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <ProductList
            onAddToCart={handleAddToCart}
            onAddToFavorite={handleAddToFavorite}
            sortCategory={sortCategory}
          />
        );
      case 'cart':
        return <Cart cartItems={cartItems} onPageChange={handlePageChange} />;
      case 'favorite':
        return (
          <Favorite
            favoriteItems={favoriteItems}
            onRemoveFromFavorite={handleRemoveFromFavorite}
            onViewProduct={handleViewProduct}
          />
        );
      case 'login':
        return <Login onLogin={() => setIsLoggedIn(true)} />;
      case 'checkout':
        return <Checkout cartItems={cartItems} />;
      case 'info':
        return <Info />;
      default:
        return (
          <ProductList
            onAddToCart={handleAddToCart}
            onAddToFavorite={handleAddToFavorite}
            sortCategory={sortCategory}
          />
        );
    }
  };

  return (
    <div className="App">
      <Header
        onPageChange={handlePageChange}
        isLoggedIn={isLoggedIn}
        onToggleContent={toggleContent}
        onSearchOpen={() => setIsSearchOpen(true)}
        onSortCategoryChange={handleSortCategoryChange}
      />
      {isContentOpen && <Content />}
      {renderPage()}
      {selectedProduct && (
        <div className="selected-product-info">
          <h2>{selectedProduct.name}</h2>
          <p>Цена: {selectedProduct.price}</p>
        </div>
      )}
      {isSearchOpen && (
        <SearchOverlay
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          onSearchSubmit={handleSearchSubmit}
          onClose={() => setIsSearchOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
