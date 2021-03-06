import React, { useState } from 'react';

import './ProductList.css';
import { useCategory } from '../../../context/CategoryContext';
import {
  useProductData,
  useProductQuantitySubtract,
  useProductListUpdate
} from '../../../context/ProductContext';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import LoyaltyIcon from '@material-ui/icons/Loyalty';

import Search from '../../search/Search';
import AlertModal from '../../utility/AlertModal';
import AttributeModal from './AttributeModal';
import { numberWithCommas } from '../../utility/numberWithCommas';

const ProductList = () => {
  const [searchResult, setSearchResult] = useState('');
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showAttributeModal, setShowAttributeModal] = useState(false);
  const [productWithAttributeData, setProductWithAttributeData] = useState({});

  const selectedCategory = useCategory();
  const productData = useProductData();
  const subtractProductQuantity = useProductQuantitySubtract();
  const updateProductList = useProductListUpdate();

  const updateSearchResult = (result) => {
    setSearchResult(result);
  };

  const productClickedHandler = (
    productId,
    productName,
    productPrice,
    productDiscount
  ) => {
    subtractProductQuantity(productId);
    updateProductList(
      productId,
      productName,
      productPrice,
      null,
      1,
      null,
      productDiscount
    );
  };

  const errorModalClosed = () => {
    setShowErrorModal(false);
  };

  const productWithAttributeClicked = (product) => {
    setProductWithAttributeData(product);
    setShowAttributeModal(true);
  };

  const attributeModalClosed = () => {
    setShowAttributeModal(false);
  };

  const productCard = (product) => {
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
          {product.discount && (
            <LoyaltyIcon
              color='primary'
              fontSize='large'
              style={{ position: 'absolute', top: '10px', left: '10px' }}
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
          <div style={{ color: 'orange' }}>
            ${numberWithCommas(product.price)}
          </div>
        </div>
      );
    }
    return (
      <div
        key={product.name}
        className='item-category-box-product'
        onClick={
          product.attribute
            ? () => productWithAttributeClicked(product)
            : () =>
                productClickedHandler(
                  product.id,
                  product.name,
                  product.price,
                  product.discount
                )
        }>
        {product.attribute && (
          <AddToPhotosIcon
            htmlColor='red'
            style={{ alignSelf: 'flex-end', padding: '2px 4px 0 0' }}
          />
        )}
        {product.discount && (
          <LoyaltyIcon
            color='primary'
            fontSize='large'
            style={{ position: 'absolute', top: '10px', left: '10px' }}
          />
        )}
        <img
          className='image-product'
          src={product.image}
          alt={product.image}
        />
        <div style={{ textAlign: 'center' }}>{product.name}</div>
        <div style={{ color: 'grey' }}>{product.category.toUpperCase()}</div>
        <div style={{ color: 'orange' }}>
          ${numberWithCommas(product.price)}
        </div>
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
        <AttributeModal
          attributeModalClosed={attributeModalClosed}
          productWithAttributeData={productWithAttributeData}
        />
      )}
    </div>
  );
};

export default ProductList;
