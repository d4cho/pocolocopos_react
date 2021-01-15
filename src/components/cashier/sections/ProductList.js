import React, { useState } from 'react';
// import productData from '../../../assets/data';
import './ProductList.css';
import { useCategory } from '../../../context/CategoryContext';
import {
  useProductData,
  useProductQuantitySubtract,
  useProductListUpdate
} from '../../../context/ProductContext';

import Search from '../../search/Search';
import AlertModal from '../../utility/AlertModal';

const ProductList = () => {
  const [searchResult, setSearchResult] = useState('');
  const [showErrorModal, setShowErrorModal] = useState(false);

  const selectedCategory = useCategory();
  const productData = useProductData();
  const subtractProductQuantity = useProductQuantitySubtract();
  const updateProductList = useProductListUpdate();

  const updateSearchResult = (result) => {
    setSearchResult(result);
    console.log(result);
  };

  const productClickedHandler = (productName, productPrice) => {
    subtractProductQuantity(productName);
    updateProductList(productName, productPrice);
  };

  const errorModalClosed = () => {
    setShowErrorModal(false);
  };

  const productCard = (product) => {
    if (product.quantity === 0) {
      return (
        <div
          key={product.name}
          className='outOfStock-product'
          onClick={() => setShowErrorModal(true)}>
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
        onClick={() => productClickedHandler(product.name, product.price)}>
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
      {showErrorModal && (
        <AlertModal
          errorModalClosed={errorModalClosed}
          msg='This product is out of stock.'
        />
      )}
    </div>
  );
};

export default ProductList;
