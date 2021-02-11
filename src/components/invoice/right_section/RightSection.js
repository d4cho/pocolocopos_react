import React, { useState } from 'react';
import './RightSection.css';
import InvoiceList from './sections/InvoiceList';
import SearchInvoice from './sections/SearchInvoice';

const RightSection = (props) => {
  const [invoiceSearch, setInvoiceSearch] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  console.log(invoiceSearch, selectedDate.length);

  const resetDate = () => {
    setSelectedDate(new Date());
  };

  return (
    <div className='section-container-RightSection'>
      <h1>search invoice</h1>
      <SearchInvoice
        invoiceSearch={invoiceSearch}
        setInvoiceSearch={setInvoiceSearch}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        resetDate={resetDate}
      />
      <div className='line-RightSection'></div>
      <InvoiceList invoiceSearch={invoiceSearch} selectedDate={selectedDate} />
    </div>
  );
};

export default RightSection;
