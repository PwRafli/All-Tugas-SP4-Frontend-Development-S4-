import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <span className="product-badge">{product.category}</span>
        <img src={product.image} alt={product.name} className="product-img" />
      </div>
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-price-action">
          <span className="product-price">{formatPrice(product.price)}</span>
          <button 
            className="btn-add" 
            onClick={() => onAddToCart(product)}
            aria-label={`Tambah ${product.name} ke keranjang`}
          >
            <span>Beli</span>
            <span className="btn-icon">+</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
