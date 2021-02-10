import React from 'react';
import './InvoiceInfo.css';

const InvoiceInfo = ({ invoiceInfo }) => {
  const { date, time, paymentMethod, totalPrice } = invoiceInfo;

  // changes number to have commas & 2 decimal place
  const numberWithCommas = (number) => {
    return number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div className='container-InvoiceInfo'>
      <div>
        <span>Invoice Time</span>
        <div className='container-invoice-time'>
          {date} @ {time}
        </div>
      </div>
      <div>
        <span>paid method</span>
        <div className='container-paid-method'>
          <div className='column-paid-method'>
            <div className='item-paid-method'>
              <div>CASH</div>
              <div>
                $
                {paymentMethod === 'cash'
                  ? numberWithCommas(totalPrice)
                  : '0.00'}
              </div>
            </div>
            <div className='item-paid-method'>
              <div>CREDIT</div>
              <div>
                $
                {paymentMethod === 'credit'
                  ? numberWithCommas(totalPrice)
                  : '0.00'}
              </div>
            </div>
            <div className='item-paid-method'>
              <div>COUPON</div>
              <div>
                $
                {paymentMethod === 'coupon'
                  ? numberWithCommas(totalPrice)
                  : '0.00'}
              </div>
            </div>
          </div>
          <div className='column-paid-method'>
            <div className='item-paid-method'>
              <div>DEBIT</div>
              <div>
                $
                {paymentMethod === 'debit'
                  ? numberWithCommas(totalPrice)
                  : '0.00'}
              </div>
            </div>
            <div className='item-paid-method'>
              <div>ACCOUNT</div>
              <div>
                $
                {paymentMethod === 'account'
                  ? numberWithCommas(totalPrice)
                  : '0.00'}
              </div>
            </div>
            <div className='item-paid-method'>
              <div>GIFT</div>
              <div>
                $
                {paymentMethod === 'gift'
                  ? numberWithCommas(totalPrice)
                  : '0.00'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceInfo;
