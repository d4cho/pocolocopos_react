import React, { useState } from 'react';
import './RightSection.css';
import InvoiceList from './sections/InvoiceList';
import SearchInvoice from './sections/SearchInvoice';

const RightSection = (props) => {
  const [invoiceSearch, setInvoiceSearch] = useState('');

  return (
    <div className='section-container-RightSection'>
      <h1>search invoice</h1>
      <SearchInvoice
        invoiceSearch={invoiceSearch}
        setInvoiceSearch={setInvoiceSearch}
      />
      <div className='line-RightSection'></div>
      <InvoiceList invoiceSearch={invoiceSearch} />
    </div>
  );
};

export default RightSection;
