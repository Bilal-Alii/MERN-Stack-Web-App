import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="container">
            <h1 className="logo"><a href="#">MobileShop</a></h1>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </nav>
        <div className="hero">
          <div className="container">
            <h2>Welcome to MobileShop</h2>
            <p>Your one-stop shop for all mobile accessories.</p>
            <a href="#" className="btn">Shop Now</a>
          </div>
        </div>
      </header>

      <section className="features">
        <div className="container">
          <h2>Our Top Categories</h2>
          <div className="grid">
            <div className="card">
              <i className="fas fa-phone-alt fa-3x"></i>
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
