import React from 'react';
import './LeftSectionBot.css';

const LeftSectionBot = () => {
  return (
    <div className='container-LeftSectionBot'>
      <div className='column-LeftSectionBot'>
        <div className='column-item-LeftSectionBot'>
          <div>Sub Total</div>
          <div>$123</div>
        </div>
        <div className='column-item-LeftSectionBot'>
          <div>Tax (5 Tax Rates)</div>
          <div>$123</div>
        </div>
        <div className='column-item-LeftSectionBot'>
          <div>Coupon</div>
          <div>$123</div>
        </div>
        <div className='line-LeftSectionBot'></div>
        <div
          className='column-item-LeftSectionBot'
          style={{ fontWeight: 'bold' }}>
          <div>Total</div>
          <div>$123</div>
        </div>
      </div>
      <div className='button-LeftSectionBot'>placeholder</div>
    </div>
  );
};

export default LeftSectionBot;
