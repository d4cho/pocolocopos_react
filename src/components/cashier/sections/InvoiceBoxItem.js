import React from 'react';
import './InvoiceBoxItem.css';
import {
  useProductList,
  useProductQuantityAdd,
  useProductListUpdate
} from '../../../context/ProductContext';
import ClearIcon from '@material-ui/icons/Clear';

const InvoiceBoxItem = () => {
  const productList = useProductList();
  const addProductQuantity = useProductQuantityAdd();
  const ProductListUpdate = useProductListUpdate();

  const renderProductList = () =>
    productList.map((item, idx) => {
      const { productName, productPrice, qty } = item;
      const itemNumber = idx + 1;
      const backgroundColorDiv = {
        white: { backgroundColor: 'white' },
        gray: { backgroundColor: 'rgb(240, 240, 240)' }
      };

      const updateProductQtyAndList = (productName, qty, clearItem) => {
        addProductQuantity(productName, qty);
        ProductListUpdate(productName, null, clearItem);
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
          </div>
          <div>{qty}</div>
          <div>${Math.round(productPrice * 1e2) / 1e2}</div>
          <ClearIcon
            style={{ cursor: 'pointer' }}
            onClick={() => updateProductQtyAndList(productName, qty, 'one')}
          />
        </div>
      );
    });

  return (
    <div className='invoiceBoxItem-main-container'>{renderProductList()}</div>
  );
};

export default InvoiceBoxItem;
