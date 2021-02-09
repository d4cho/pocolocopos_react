import React from 'react';
import LeftSectionTop from './left_section/top/LeftSectionTop';
import './InvoicePage.css';
import LeftSectionBot from './left_section/bottom/LeftSectionBot';
import RightSection from './right_section/RightSection';

const InvoicePage = () => {
  return (
    <div className='main-container-Invoice'>
      <div className='left-sub-container-Invoice'>
        <LeftSectionTop />
        <LeftSectionBot />
      </div>
      <div className='right-sub-container-Invoice'>
        <RightSection />
      </div>
    </div>
  );
};

export default InvoicePage;
