import React from 'react';
import './LeftSectionTop.css';
import ReceiptIcon from '@material-ui/icons/Receipt';

import InvoiceInfo from './sections/InvoiceInfo';

const LeftSection = ({ invoiceInfo }) => {
  return (
    <div className='container-LeftSectionTop'>
      <div className='topbar-LeftSectionTop'>
        <div></div>
        <div></div>
        <div></div>
        <div>return</div>
        <div>reimbursement</div>
        <div>void</div>
      </div>
      <div className='midbar-LeftSectionTop'>
        <div></div>
        <div>#</div>
        <div>Product Name</div>
        <div>Price</div>
      </div>
      <div className='icon-container-LeftSectionTop'>
        <div>
          <ReceiptIcon style={{ color: 'lightgray', fontSize: '6rem' }} />
        </div>
        <span>Select an Invoice</span>
      </div>
      {invoiceInfo ? (
        <InvoiceInfo invoiceInfo={invoiceInfo} />
      ) : (
        <div className='empty-div-LeftSectionTop'></div>
      )}
    </div>
  );
};

export default LeftSection;
