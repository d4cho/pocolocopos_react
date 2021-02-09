import React from 'react';
import './InvoiceInfo.css';

const InvoiceInfo = () => {
  return (
    <div className='container-InvoiceInfo'>
      <div>
        <span>Invoice Time</span>
        <div className='container-invoice-time'>02/08/21 @ 05:51 PM</div>
      </div>
      <div>
        <span>paid method</span>
        <div className='container-paid-method'>
          <div className='column-paid-method'>
            <div className='item-paid-method'>
              <div>CASH</div>
              <div>$123</div>
            </div>
            <div className='item-paid-method'>
              <div>CREDIT</div>
              <div>$123</div>
            </div>
            <div className='item-paid-method'>
              <div>COUPON</div>
              <div>$123</div>
            </div>
          </div>
          <div className='column-paid-method'>
            <div className='item-paid-method'>
              <div>DEBIT</div>
              <div>$123</div>
            </div>
            <div className='item-paid-method'>
              <div>ACCOUNT</div>
              <div>$123</div>
            </div>
            <div className='item-paid-method'>
              <div>GIFT</div>
              <div>$123</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceInfo;
