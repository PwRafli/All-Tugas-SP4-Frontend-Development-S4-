import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h4 className="footer-logo">🛍️ StatisStore</h4>
          <p>Destinasi belanja fashion & aksesoris terbaik untuk gaya harian Anda yang dinamis dan berkelas.</p>
        </div>
        <div className="footer-links">
          <h4>Navigasi</h4>
          <ul>
            <li><a href="#home">Beranda</a></li>
            <li><a href="#products">Katalog</a></li>
            <li><a href="#about">Tentang Kami</a></li>
          </ul>
        </div>
        <div className="footer-info">
          <h4>Hubungi Kami</h4>
          <p>📍 Jl. Merdeka No. 123, Jakarta</p>
          <p>📧 support@statisstore.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} StatisStore. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
