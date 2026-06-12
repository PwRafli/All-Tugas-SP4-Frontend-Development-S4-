import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, onAddToCart }) => {
  return (
    <section id="products" className="products-section">
      <div className="section-title-area">
        <h2 className="section-title">Koleksi Produk Terbaik</h2>
        <div className="section-underline"></div>
        <p className="section-subtitle">
          Temukan produk-produk pilihan berkualitas tinggi untuk melengkapi gaya harian Anda.
        </p>
      </div>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
