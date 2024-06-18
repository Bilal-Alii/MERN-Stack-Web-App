import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

function HomePage() {
  return (
    <div>
      <header>
        <div className="hero">
          <div className="container">
            <h2>Welcome to Mobile Accessories Shop</h2>
            <p>Your ultimate destination for quality mobile accessories.</p>
            <Link to="/product-list" className="btn">Shop Now</Link>
          </div>
        </div>
      </header>

      <section className="features">
        <div className="container">
          <h2>Our Top Categories</h2>
          <div className="grid">
            <div className="card">
              <i className="fas fa-mobile-alt fa-3x"></i>
              <h3>Phone Cases</h3>
              <p>Protective and stylish cases for your phone.</p>
            </div>
            <div className="card">
              <i className="fas fa-charging-station fa-3x"></i>
              <h3>Chargers</h3>
              <p>High-speed chargers for all types of devices.</p>
            </div>
            <div className="card">
              <i className="fas fa-headphones fa-3x"></i>
              <h3>Headphones</h3>
              <p>Experience high-quality sound with our range of headphones.</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2024 MobileShop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
