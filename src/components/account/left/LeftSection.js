import React, { useState } from 'react';

import './LeftSection.css';
import AccountList from './sections/AccountList';

const LeftSection = (props) => {
  const [searchResult, setSearchResult] = useState('');

  const handleSearchChange = (e) => {
    setSearchResult(e.target.value);
  };

  return (
    <div className='container-LeftSection-Account'>
      <div className='search-container-LeftSection-Account'>
        <span>Account</span>
        {props.displaySection !== 'create' && (
          <input
            type='text'
            name='accountName'
            placeholder='Search Account'
            value={searchResult}
            onChange={handleSearchChange}
          />
        )}
      </div>
      <div className='line-LeftSection-Account'></div>
      <div className='btn-container-LeftSection-Account'>
        <button
          className='btn1-LeftSection-Account'
          onClick={() => props.setDisplaySection('choose')}>
          Account
        </button>
        <button
          className='btn2-LeftSection-Account'
          onClick={() => props.setDisplaySection('create')}>
          + create account
        </button>
      </div>
      <AccountList
        accountData={props.accountData}
        searchResult={searchResult}
        setDisplaySection={props.setDisplaySection}
        setSelectedAccount={props.setSelectedAccount}
      />
    </div>
  );
};

export default LeftSection;
