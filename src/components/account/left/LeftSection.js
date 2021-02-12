import React from 'react';

import './LeftSection.css';

const LeftSection = () => {
  return (
    <div className='container-LeftSection-Account'>
      <div className='search-container-LeftSection-Account'>
        <span>Account</span>
        <input type='text' name='accountName' placeholder='Search Account' />
      </div>
      <div className='line-LeftSection-Account'></div>
      <div className='btn-container-LeftSection-Account'>
        <button className='btn1-LeftSection-Account'>Account</button>
        <button className='btn2-LeftSection-Account'>+ create account</button>
      </div>
      <div>list</div>
    </div>
  );
};

export default LeftSection;
