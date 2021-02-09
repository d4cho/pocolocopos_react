import React from 'react';
import './RightSection.css';
import InvoiceList from './sections/InvoiceList';
import SearchInvoice from './sections/SearchInvoice';

const RightSection = (props) => {
  return (
    <div className='section-container-RightSection'>
      <h1>search invoice</h1>
      <SearchInvoice />
      <div className='line-RightSection'></div>
      <InvoiceList />
    </div>
  );
};

export default RightSection;
