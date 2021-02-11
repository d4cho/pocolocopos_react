import React from 'react';
import './SearchInvoice.css';

import DatePicker from './DatePicker';

const SearchInvoice = (props) => {
  const handleChange = (e) => {
    props.setInvoiceSearch(e.target.value);
    props.setSelectedDate(new Date());
  };

  return (
    <div className='container-SearchInvoice'>
      <div className='item-SearchInvoice'>
        <span>Invoice #</span>
        <input
          className='input-SearchInvoice'
          type='number'
          name='invoiceNumber'
          value={props.invoiceSearch}
          onChange={handleChange}
        />
      </div>
      <div className='item-SearchInvoice'>
        <span>Date</span>
        <div className='date-item-SearchInvoice'>
          <DatePicker
            setInvoiceSearch={props.setInvoiceSearch}
            selectedDate={props.selectedDate}
            setSelectedDate={props.setSelectedDate}
          />
          <button className='button-SearchInvoice'>search</button>
          <button className='button-SearchInvoice' onClick={props.resetDate}>
            today
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchInvoice;
