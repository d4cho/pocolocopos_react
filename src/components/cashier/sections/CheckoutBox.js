import React from 'react';
import './CheckoutBox.css';

const CheckoutBox = () => {
  return (
    <div className='checkout-container'>
      <div className='checkout-total-container'>
        <div className='subtotal-item'>Sub Total</div>
        <div className='subtotal-value-item'>$0.00</div>
        <div className='tax-item'>Tax (5 Tax Rates)</div>
        <div className='tax-value-item'>$0.00</div>
        <div className='coupon-item'>Coupon</div>
        <div className='coupon-value-item'>$0.00</div>
        <div className='hor-underline'></div>
        <div className='total-item'>
          <strong>Total</strong>
        </div>
        <div className='total-value-item'>
          <strong>$0.00</strong>
        </div>
      </div>
      <button className='checkout-btn'>CHECKOUT</button>
    </div>
  );
};

export default CheckoutBox;
