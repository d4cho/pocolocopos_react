import React from 'react';
import './LeftSectionBot.css';

import { useReturnInvoice } from '../../../../context/InvoiceContext';

const LeftSectionBot = (props) => {
  const { returnInvoice } = useReturnInvoice();
  const { products } = props.invoiceInfo;

  // changes number to have commas & 2 decimal place
  const numberWithCommas = (number) => {
    return number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  // calculation for summary
  let subtotal;
  let tax;
  let total;

  if (products) {
    let array = [];
    products.forEach((item) => array.push(item.price));

    subtotal = array.reduce((a, b) => a + b, 0);
    tax = subtotal * 0.13;
    total = subtotal + tax;
  }

  // calculation for return amount
  let returnAmount;
  if (returnInvoice) {
    let array = [];
    returnInvoice.forEach((itemName) =>
      products.forEach((product) => {
        if (product.name === itemName) {
          array.push(product.price);
        }
      })
    );

    returnAmount = array.reduce((a, b) => a + b, 0);
  }

  return (
    <div className='container-LeftSectionBot'>
      <div className='column-LeftSectionBot'>
        <div className='column-item-LeftSectionBot'>
          <div>Sub Total</div>
          <div>${subtotal ? numberWithCommas(subtotal) : '0.00'}</div>
        </div>
        <div className='column-item-LeftSectionBot'>
          <div>Tax (5 Tax Rates)</div>
          <div>${tax ? numberWithCommas(tax) : '0.00'}</div>
        </div>
        <div className='column-item-LeftSectionBot'>
          <div>Coupon</div>
          <div>$0.00</div>
        </div>
        <div className='line-LeftSectionBot'></div>
        <div
          className='column-item-LeftSectionBot'
          style={{ fontWeight: 'bold' }}>
          <div>Total</div>
          <div>${total ? numberWithCommas(total) : '0.00'}</div>
        </div>
      </div>
      <div className='button-LeftSectionBot'>
        {props.invoiceInfo && (
          <>
            <span>RETURN</span>
            <span>
              ${returnAmount ? numberWithCommas(returnAmount) : '0.00'}
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default LeftSectionBot;
