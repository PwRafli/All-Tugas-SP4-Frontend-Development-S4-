import React from 'react';

const Header = ({ cartCount, onCartToggle }) => {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-icon">🛍️</span>
          <span className="logo-text">StatisStore</span>
        </div>
        <nav className="nav-menu">
          <a href="#home" className="nav-link active">Beranda</a>
          <a href="#products" className="nav-link">Katalog</a>
          <a href="#about" className="nav-link">Tentang</a>
        </nav>
        <div className="header-actions">
          <button className="cart-toggle-btn" onClick={onCartToggle} aria-label="Buka Keranjang">
            <span className="cart-icon">🛒</span>
            <span className="cart-text">Keranjang</span>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
