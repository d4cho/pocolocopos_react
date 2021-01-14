import React from 'react';
import './InvoiceBox.css';

const InvoiceBox = () => {
  return (
    <div className='grid-container-invoice'>
      <div className='invoice-topbar'>
        <div>INVOICE #15</div>
        <div>CLEAR CART</div>
        <div>GROSS DISCOUNT</div>
      </div>
      <div className='invoice-midbar'>
        <div>#</div>
        <div>Product Name</div>
        <div>Qty</div>
        <div>Price</div>
      </div>
      <div className='invoice-body-empty'>
        <div>icon</div>
        <div>Add Product To Cart.</div>
      </div>
    </div>
  );
};

export default InvoiceBox;
