import React from 'react';
import './InvoiceItems.css';

import { numberWithCommas } from '../../../../utility/numberWithCommas';

const InvoiceItems = ({ invoiceInfo }) => {
  const renderItems = () =>
    invoiceInfo.products.map((item, idx) => {
      const isEven = (idx + 1) % 2 === 0 ? true : false;

      return (
        <div
          key={idx}
          className='item-InvoiceItem'
          style={{ background: `${isEven ? 'rgb(213, 213, 213)' : 'white'}` }}>
          <input type='checkbox' name='item' value='Bike' />
          <span>{idx + 1}</span>
          <span className='start-item-InvoiceItem'>{item.name}</span>
          <span>${numberWithCommas(item.price)}</span>
        </div>
      );
    });

  return <div className='main-container-InvoiceItem'>{renderItems()}</div>;
};

export default InvoiceItems;
