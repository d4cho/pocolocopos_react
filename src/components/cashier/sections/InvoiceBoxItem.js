import React, { useState } from 'react';
import './InvoiceBoxItem.css';
import {
  useProductList,
  useProductQuantityAdd,
  useProductListUpdate
} from '../../../context/ProductContext';
import ClearIcon from '@material-ui/icons/Clear';
import CartItemModal from './CartItemModal';

const InvoiceBoxItem = () => {
  const productList = useProductList();
  const addProductQuantity = useProductQuantityAdd();
  const ProductListUpdate = useProductListUpdate();

  const numberWithCommas = (x) => {
    return x.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const updateProductQtyAndList = (productId, productName, qty, clearItem) => {
    addProductQuantity(productId, qty);
    ProductListUpdate(productId, productName, null, clearItem, 1);
  };

  const openCarItemModal = () => {};

  const renderProductList = () =>
    productList.map((item, idx) => {
      const { productId, productName, productPrice, qty } = item;
      const itemNumber = idx + 1;
      const backgroundColorDiv = {
        white: { backgroundColor: 'white' },
        gray: { backgroundColor: 'rgb(240, 240, 240)' }
      };

      return (
        <div
          key={productName}
          className='invoiceBoxItem-sub-container'
          style={
            itemNumber % 2 === 0
              ? backgroundColorDiv.gray
              : backgroundColorDiv.white
          }>
          <div>{itemNumber}</div>
          <div style={{ justifySelf: 'start' }}>
            {productName.toUpperCase()}
            <span>{item.attributeName && ` - ${item.attributeName}`}</span>
            <span style={{ color: 'red' }}>
              {item.discount && item.discount}
            </span>
          </div>
          <div>{qty}</div>
          <div>{numberWithCommas(productPrice)}</div>
          {/* <div>${Math.round(productPrice * 1e2) / 1e2}</div> */}
          <ClearIcon
            style={{ cursor: 'pointer' }}
            onClick={() =>
              updateProductQtyAndList(productId, productName, qty, 'one')
            }
          />
        </div>
      );
    });

  return (
    <div className='invoiceBoxItem-main-container'>{renderProductList()}</div>
  );
};

export default InvoiceBoxItem;
