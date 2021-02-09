import React from 'react';
import './RightSection.css';
import SearchInvoice from './sections/SearchInvoice';

const RightSection = () => {
  return (
    <div className='section-container-RightSection'>
      <h1>search invoice</h1>
      <SearchInvoice />
      <div className='line-RightSection'></div>
      <div>Body</div>
    </div>
  );
};

export default RightSection;
