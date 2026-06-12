import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Footer from './components/Footer';
import productsData from './data/products';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Add item to cart
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    // Optional: Open cart drawer automatically when item is added
    setIsCartOpen(true);
  };

  // Update item quantity in cart
  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove item from cart
  const handleRemoveFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  // Clear all items in cart
  const handleClearCart = () => {
    setCartItems([]);
  };

  // Toggle cart drawer visibility
  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Calculate total items count in cart
  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="App">
      <Header cartCount={totalCartCount} onCartToggle={handleCartToggle} />
      
      <main className="main-content">
        {/* Hero Banner */}
        <section id="home" className="hero-section">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <span className="hero-badge">Trend Terbaru 2026</span>
            <h2 className="hero-title">Tingkatkan Gaya Anda Setiap Hari</h2>
            <p className="hero-subtitle">
              Koleksi eksklusif pakaian, sepatu, dan aksesoris berkualitas tinggi dengan harga yang bersahabat.
            </p>
            <a href="#products" className="btn-hero">Mulai Belanja</a>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="features-section">
          <div className="feature-card">
            <span className="feature-icon">🚚</span>
            <h4>Gratis Ongkir</h4>
            <p>Pengiriman cepat dan gratis ke seluruh wilayah Indonesia.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🛡️</span>
            <h4>Garansi Kualitas</h4>
            <p>Bahan premium pilihan terbaik dengan jaminan kualitas tinggi.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">💳</span>
            <h4>Bayar Aman</h4>
            <p>Metode transaksi yang aman, instan, dan terpercaya.</p>
          </div>
        </section>

        {/* Product Catalog */}
        <ProductList products={productsData} onAddToCart={handleAddToCart} />

        {/* About Section */}
        <section id="about" className="about-section">
          <div className="about-image-side">
            <div className="about-img-box">
              <span className="about-emoji">🏢</span>
            </div>
          </div>
          <div className="about-text-side">
            <span className="about-mini-title">TENTANG KAMI</span>
            <h3>StatisStore Menyediakan Kebutuhan Fashion Terbaik Anda</h3>
            <p>
              Didirikan dengan tujuan memberikan produk fashion berkualitas tinggi yang ramah kantong. Kami percaya bahwa semua orang berhak mendapatkan pakaian dan aksesoris yang stylish tanpa harus membayar mahal.
            </p>
            <p>
              Dengan layanan pelanggan yang responsif dan pengiriman yang andal, kami siap memberikan pengalaman berbelanja online terbaik untuk Anda.
            </p>
          </div>
        </section>
      </main>

      <Cart 
        isOpen={isCartOpen} 
        onClose={handleCartToggle} 
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveFromCart={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      <Footer />
    </div>
  );
}

export default App;

