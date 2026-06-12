import React from 'react';

const Cart = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveFromCart, onClearCart }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    alert("Pembelian berhasil! Terima kasih telah berbelanja di StatisStore.");
    onClearCart();
    onClose();
  };

  return (
    <div className={`cart-drawer-wrapper ${isOpen ? 'open' : ''}`}>
      <div className="cart-backdrop" onClick={onClose}></div>
      <div className="cart-drawer">
        <div className="cart-header">
          <h3>Keranjang Belanja</h3>
          <button className="btn-close-cart" onClick={onClose} aria-label="Tutup Keranjang">
            &times;
          </button>
        </div>

        <div className="cart-body">
          {cartItems.length === 0 ? (
            <div className="cart-empty-state">
              <div className="empty-icon">🛍️</div>
              <p className="empty-text">Keranjang Anda masih kosong</p>
              <button className="btn-continue-shopping" onClick={onClose}>
                Mulai Belanja
              </button>
            </div>
          ) : (
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item-card">
                  <div className="cart-item-image-wrapper">
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                  </div>
                  <div className="cart-item-details">
                    <h4 className="cart-item-name">{item.name}</h4>
                    <span className="cart-item-price">{formatPrice(item.price)}</span>
                    <div className="cart-item-qty-selector">
                      <button 
                        className="qty-btn minus"
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="qty-number">{item.quantity}</span>
                      <button 
                        className="qty-btn plus"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button 
                    className="btn-remove-item"
                    onClick={() => onRemoveFromCart(item.id)}
                    aria-label={`Hapus ${item.name} dari keranjang`}
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-summary-line">
              <span className="label">Total Item</span>
              <span className="val">{cartItems.reduce((acc, item) => acc + item.quantity, 0)} Pcs</span>
            </div>
            <div className="cart-summary-line total">
              <span className="label">Subtotal</span>
              <span className="val highlight">{formatPrice(calculateTotal())}</span>
            </div>
            <button className="btn-checkout" onClick={handleCheckout}>
              Checkout Sekarang
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
