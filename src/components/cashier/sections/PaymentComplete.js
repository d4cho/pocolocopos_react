import React from 'react';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import './PaymentComplete.css';

const PaymentComplete = (props) => {
  const handleClick = () => {
    props.reset();
  };

  return (
    <div className='container-paymentComplete'>
      <CheckCircleOutlineIcon
        fontSize='inherit'
        color='inherit'
        style={{ fontSize: '12rem', color: 'rgb(45, 85, 118)' }}
      />
      <span className='heading-paymentComplete'>Payment Complete</span>
      <span className='subheading-paymentComplete'>Invoice #23</span>

      <div className='summary-container-paymentComplete'>
        <span>Invoice Summary</span>
        <div className='summary-paymentComplete'>
          <div className='item-paymentComplete'>
            <div>Sub Total</div>
            <div>Sub Total value</div>
          </div>
          <div className='item-paymentComplete'>
            <div>Tax(5 Tax Rates)</div>
            <div>Tax(5 Tax Rates) value</div>
          </div>
          <div className='item-paymentComplete'>
            <div>Coupon</div>
            <div>Coupon value</div>
          </div>
          <div className='item-paymentComplete'>
            <div>Total</div>
            <div>Total value</div>
          </div>
          <div className='hr-paymentComplete'></div>
          <div className='item-paymentComplete'>
            <div>Payment Method</div>
            <div>Payment Method value</div>
          </div>
          <div className='item-paymentComplete'>
            <div>Amount Paid</div>
            <div>Amount Paid value</div>
          </div>
          <div className='item-paymentComplete'>
            <div>Change</div>
            <div>Change value</div>
          </div>
        </div>
      </div>
      <div className='button-container-paymentComplete'>
        <button onClick={handleClick}>Finish</button>
      </div>
    </div>
  );
};

export default PaymentComplete;
