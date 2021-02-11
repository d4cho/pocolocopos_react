import React, { useState } from 'react';

import './InvoicePage.css';
import LeftSectionTop from './left_section/top/LeftSectionTop';
import LeftSectionBot from './left_section/bottom/LeftSectionBot';
import RightSection from './right_section/RightSection';
import {
  useInvoiceList,
  useSelectedInvoice
} from '../../context/InvoiceContext';

const InvoicePage = () => {
  const invoiceList = useInvoiceList();
  const { selectedInvoice } = useSelectedInvoice();

  let invoiceInfo = '';

  if (selectedInvoice) {
    invoiceInfo = invoiceList.find((item) => item.invoice === selectedInvoice);
  }

  return (
    <div className='main-container-Invoice'>
      <div className='left-sub-container-Invoice'>
        <LeftSectionTop invoiceInfo={invoiceInfo} />
        <LeftSectionBot invoiceInfo={invoiceInfo} />
      </div>
      <div className='right-sub-container-Invoice'>
        <RightSection />
      </div>
    </div>
  );
};

export default InvoicePage;
