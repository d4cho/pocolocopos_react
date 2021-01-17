import React, { useState } from 'react';
// import productData from '../../../assets/data';
import './ProductList.css';
import { useCategory } from '../../../context/CategoryContext';
import {
  useProductData,
  useProductQuantitySubtract,
  useProductListUpdate
} from '../../../context/ProductContext';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';

import Search from '../../search/Search';
import AlertModal from '../../utility/AlertModal';
import AttributeModal from './AttributeModal';

const ProductList = () => {
  const [searchResult, setSearchResult] = useState('');
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showAttributeModal, setShowAttributeModal] = useState(false);

  const selectedCategory = useCategory();
  const productData = useProductData();
  const subtractProductQuantity = useProductQuantitySubtract();
  const updateProductList = useProductListUpdate();

  const updateSearchResult = (result) => {
    setSearchResult(result);
    console.log(result);
  };

  const productClickedHandler = (productId, productName, productPrice) => {
    subtractProductQuantity(productId);
    updateProductList(productId, productName, productPrice);
  };

  const errorModalClosed = () => {
    setShowErrorModal(false);
  };

  const attributeModalClosed = () => {
    setShowAttributeModal(false);
  };

  const productCard = (product) => {
    console.log(product);
    if (product.quantity === 0) {
      return (
        <div
          key={product.name}
          className='outOfStock-product'
          onClick={() => setShowErrorModal(true)}>
          {product.attribute && (
            <AddToPhotosIcon
              htmlColor='red'
              style={{ alignSelf: 'flex-end', paddingRight: '4px' }}
            />
          )}
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
        onClick={
          product.attribute
            ? () => setShowAttributeModal(true)
            : () =>
                productClickedHandler(product.id, product.name, product.price)
        }>
        {product.attribute && (
          <AddToPhotosIcon
            htmlColor='red'
            style={{ alignSelf: 'flex-end', padding: '2px 4px 0 0' }}
          />
        )}
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
      {showAttributeModal && (
        <AttributeModal attributeModalClosed={attributeModalClosed} />
      )}
    </div>
  );
};

export default ProductList;
