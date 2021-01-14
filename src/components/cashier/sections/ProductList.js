import React, { useState } from 'react';
// import productData from '../../../assets/data';
import './ProductList.css';
import { useCategory } from '../../../context/CategoryContext';
import {
  useProductData,
  useProductUpdate
} from '../../../context/ProductContext';

import Search from '../../search/Search';

const ProductList = () => {
  const [searchResult, setSearchResult] = useState('');

  const selectedCategory = useCategory();
  const productData = useProductData();
  const updateProductQuantity = useProductUpdate();

  const updateSearchResult = (result) => {
    setSearchResult(result);
    console.log(result);
  };

  const productClickedHandler = (productName) => {
    updateProductQuantity(productName);
  };

  const productCard = (product) => {
    if (product.quantity === 0) {
      return (
        <div
          key={product.name}
          className='outOfStock-product'
          onClick={() => alert('This product is out of stock.')}>
          <img
            className='image-product'
            src={product.image}
            alt={product.image}
          />
          <span style={{ color: 'red', fontWeight: 'bold' }}>OUT OF STOCK</span>
          <div style={{ textAlign: 'center' }}>{product.name}</div>
          <div style={{ color: 'grey' }}>{product.category.toUpperCase()}</div>
          <div style={{ color: 'orange' }}>${product.price}</div>
        </div>
      );
    }
    return (
      <div
        key={product.name}
        className='item-category-box-product'
        onClick={() => productClickedHandler(product.name)}>
        <img
          className='image-product'
          src={product.image}
          alt={product.image}
        />
        <div style={{ textAlign: 'center' }}>{product.name}</div>
        <div style={{ color: 'grey' }}>{product.category.toUpperCase()}</div>
        <div style={{ color: 'orange' }}>${product.price}</div>
      </div>
    );
  };

  const renderProductCards = () => {
    if (selectedCategory !== 'all') {
      return productData
        .filter((item) => item.category === selectedCategory)
        .filter((filteredItem) =>
          filteredItem.name.toLowerCase().includes(searchResult)
        )
        .map((product) => {
          return productCard(product);
        });
    }
    return productData
      .filter((filteredItem) =>
        filteredItem.name.toLowerCase().includes(searchResult)
      )
      .map((product) => {
        return productCard(product);
      });
  };

  return (
    <div className='grid-container-product'>
      <div className='item-topbar-product'>
        <div>
          <strong>PRODUCT LIST</strong>
        </div>
        <Search
          sendSearch={updateSearchResult}
          placeholder='SEARCH PRODUCT...'
        />
      </div>
      <div className='item-category-box-container-product'>
        {renderProductCards()}
      </div>
    </div>
  );
};

export default ProductList;
