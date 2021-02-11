import React from 'react';
import './SearchInvoice.css';

import SearchIcon from '@material-ui/icons/Search';
import DatePicker from './DatePicker';

const SearchInvoice = (props) => {
  const handleChange = (e) => {
    props.setInvoiceSearch(e.target.value);
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
          <DatePicker />
          <button className='button-SearchInvoice'>search</button>
          <button className='button-SearchInvoice'>today</button>
        </div>
      </div>
    </div>
  );
};

export default SearchInvoice;
