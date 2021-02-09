import React from 'react';
import './InvoiceList.css';

import { useInvoiceList } from '../../../../context/InvoiceContext';

const InvoiceList = () => {
  const invoiceList = useInvoiceList();

  const renderList = () =>
    invoiceList.map((item, idx) => {
      const { invoice, date, time, totalPrice } = item;
      const isEven = (idx + 1) % 2 === 0 ? true : false;
      return (
        <div
          className='list-item-InvoiceList'
          style={{ background: `${isEven ? 'lightgray' : 'white'}` }}>
          <div>{idx + 1}</div>
          <div>{invoice}</div>
          <div>{`${date} ${time}`}</div>
          <div style={{ color: '#DAA520' }}>${totalPrice}</div>
        </div>
      );
    });

  return (
    <div className='container-InvoiceList'>
      <div className='topbar-InvoiceList'>
        <span>No.</span>
        <span>Invoice #</span>
        <span>Invoice Date & Time</span>
        <span>Total Price</span>
      </div>
      <div className='list-InvoiceList'>{renderList()}</div>
    </div>
  );
};

export default InvoiceList;
