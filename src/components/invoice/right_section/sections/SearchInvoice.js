import React from 'react';
import './SearchInvoice.css';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import DatePicker from './DatePicker';

const SearchInvoice = () => {
  return (
    <div className='container-SearchInvoice'>
      <div className='item-SearchInvoice'>
        <span>Invoice #</span>

        <TextField
          label=''
          type='number'
          variant='outlined'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            ),
            style: { fontSize: '1.5rem', width: '15vw', marginRight: '1rem' }
          }}
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
