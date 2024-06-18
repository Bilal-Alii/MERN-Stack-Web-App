import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import HomePage from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import ProductForm from './Components/ProductForm';
import ProductList from './Components/ProductList';
import './Components/NavBar.css';
import './styles/HomePage.css';
import './styles/AboutPage.css';
import './Components/ProductForm.css';
import './Components/ProductList.css';
import './styles/ProductPage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Product />} />
          <Route path="/create-product" element={<ProductForm />} />
          <Route path="/product-list" element={<ProductList />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
