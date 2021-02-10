import React from 'react';
import './InvoiceList.css';

import {
  useInvoiceList,
  useSelectedInvoice
} from '../../../../context/InvoiceContext';

const InvoiceList = ({ invoiceSearch }) => {
  const invoiceList = useInvoiceList();
  const { selectedInvoice, setSelectedInvoice } = useSelectedInvoice();

  const handleInvoiceClicked = (invoiceNumber) => {
    setSelectedInvoice(invoiceNumber);
  };
  console.log(selectedInvoice);

  const renderList = () => {
    if (invoiceSearch) {
      return invoiceList
        .filter((item) => item.invoice === parseInt(invoiceSearch))
        .map((item, idx) => {
          const { invoice, date, time, totalPrice } = item;
          const isEven = (idx + 1) % 2 === 0 ? true : false;
          return (
            <div
              key={idx}
              onClick={() => handleInvoiceClicked(invoice)}
              className='list-item-InvoiceList'
              style={{ background: `${isEven ? 'lightgray' : 'white'}` }}>
              <div>{idx + 1}</div>
              <div>{invoice}</div>
              <div>{`${date} ${time}`}</div>
              <div style={{ color: '#DAA520' }}>${totalPrice}</div>
            </div>
          );
        });
    } else {
      return invoiceList.map((item, idx) => {
        const { invoice, date, time, totalPrice } = item;
        const isEven = (idx + 1) % 2 === 0 ? true : false;
        return (
          <div
            key={idx}
            onClick={() => handleInvoiceClicked(invoice)}
            className='list-item-InvoiceList'
            style={{ background: `${isEven ? 'lightgray' : 'white'}` }}>
            <div>{idx + 1}</div>
            <div>{invoice}</div>
            <div>{`${date} ${time}`}</div>
            <div style={{ color: '#DAA520' }}>${totalPrice}</div>
          </div>
        );
      });
    }
  };

  return (
    <div className='container-InvoiceList'>
      <div className='topbar-InvoiceList'>
        <span>No.</span>
        <span>Invoice #</span>
        <span>Invoice Date & Time</span>
        <span>Total Price</span>
      </div>
      {renderList().length > 0 ? (
        <div className='list-InvoiceList'>{renderList()}</div>
      ) : (
        <div className='noInvoice-InvoiceList'>There is no invoice</div>
      )}
    </div>
  );
};

export default InvoiceList;
