import React, { useState } from 'react';

import './LeftSection.css';
import CouponList from './sections/CouponList';

const LeftSection = (props) => {
  const [searchResult, setSearchResult] = useState('');

  const handleSearchChange = (e) => {
    setSearchResult(e.target.value);
  };

  const {
    displaySection,
    setDisplaySection,
    isCoupon,
    setIsCoupon,
    data
  } = props;

  const handleCouponClicked = () => {
    setIsCoupon(true);
    setDisplaySection('choose');
  };

  const handleGiftClicked = () => {
    setIsCoupon(false);
    setDisplaySection('choose');
  };

  return (
    <div className='container-LeftSection-Special'>
      <div className='search-container-LeftSection-Special'>
        <span>Special</span>
        {displaySection !== 'create' && (
          <input
            type='text'
            name='accountName'
            value={searchResult}
            onChange={handleSearchChange}
            placeholder={isCoupon ? 'Search Coupon' : 'Search Gift Card'}
          />
        )}
      </div>
      <div className='line-LeftSection-Special'></div>
      <div className='btn-container-LeftSection-Special'>
        <div>
          <button
            className='btn1-LeftSection-Special'
            onClick={handleCouponClicked}
            style={!isCoupon ? { backgroundColor: 'white' } : null}>
            Coupon
          </button>
          <button
            className='btn1-LeftSection-Special'
            onClick={handleGiftClicked}
            style={isCoupon ? { backgroundColor: 'white' } : null}>
            Gift Card
          </button>
        </div>
        <button
          className='btn2-LeftSection-Special'
          onClick={() => setDisplaySection('create')}>
          {isCoupon ? '+ Issue new coupon' : '+ Issue new gift card'}
        </button>
      </div>
      <CouponList
        data={data}
        isCoupon={isCoupon}
        searchResult={searchResult}
        setDisplaySection={setDisplaySection}
      />
    </div>
  );
};

export default LeftSection;
