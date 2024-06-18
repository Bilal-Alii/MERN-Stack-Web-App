import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductList from '../Components/ProductList';
import '../styles/ProductPage.css';

function Product() {
  const navigate = useNavigate();

  const openProductForm = () => {
    navigate('/create-product');
  };

  return (
    <div className="product-page">
      <div className="container">
        <div className="header">
          <h2>Our Products</h2>
          <button className="btn btn-primary" onClick={openProductForm}>
            Add New Product
          </button>
        </div>
        <ProductList />
      </div>
    </div>
  );
}

export default Product;
