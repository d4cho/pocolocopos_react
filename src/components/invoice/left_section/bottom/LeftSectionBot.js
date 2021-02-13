import React, { useState } from 'react';
import './LeftSectionBot.css';

import { useReturnInvoice } from '../../../../context/InvoiceContext';
import AlertModal from '../../../utility/AlertModal';
import PaybackModal from './sections/PaybackModal';
import { numberWithCommas } from '../../../utility/numberWithCommas';

const LeftSectionBot = (props) => {
  const [showAlert, setShowAlert] = useState(false);
  const [showPayback, setShowPayback] = useState(false);
  const { returnInvoice } = useReturnInvoice();

  const { products } = props.invoiceInfo;

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

  const handleClicked = () => {
    if (returnAmount) {
      setShowPayback(true);
    } else {
      setShowAlert(true);
    }
  };

  const closeAlertModal = () => {
    setShowAlert(false);
  };

  const closePaybackModal = () => {
    setShowPayback(false);
  };

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
      <div
        className='button-LeftSectionBot'
        style={returnAmount ? { backgroundColor: 'rgb(255, 233, 191)' } : null}
        onClick={handleClicked}>
        {props.invoiceInfo && (
          <>
            <span>RETURN</span>
            <span>
              ${returnAmount ? numberWithCommas(returnAmount) : '0.00'}
            </span>
          </>
        )}
      </div>
      {showAlert && (
        <AlertModal
          errorModalClosed={closeAlertModal}
          msg='No invoice item is selected. Please select item(s).'
        />
      )}
      {showPayback && <PaybackModal closePaybackModal={closePaybackModal} />}
    </div>
  );
};

export default LeftSectionBot;
