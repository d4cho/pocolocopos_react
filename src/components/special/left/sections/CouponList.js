import React from 'react';

import './CouponList.css';
import { numberWithCommas } from '../../../utility/numberWithCommas';

const CouponList = (props) => {
  const {
    data,
    isCoupon,
    searchResult,
    setDisplaySection,
    setSelectedSpecialId
  } = props;

  const handleSpecialClicked = (specialId) => {
    setDisplaySection('info');
    setSelectedSpecialId(specialId);
  };

  const renderList = () => {
    if (searchResult) {
      return data
        .filter((element) => {
          if (isNaN(searchResult)) {
            return element.name.toLowerCase().includes(searchResult);
          } else {
            return element.number.includes(searchResult);
          }
        })
        .map((item, idx) => {
          let backgroundColor = (idx + 1) % 2 === 0 ? 'lightgrey' : 'white';

          // check if coupon or gift card is valid
          if (!item.valid) {
            backgroundColor = 'pink';
          }

          return (
            <div
              key={item.id}
              className='list-item-CouponList'
              style={{ background: backgroundColor }}
              onClick={() => handleSpecialClicked(item.id)}>
              <div>{idx + 1}</div>
              <div>{item.name}</div>
              <div>{item.number}</div>
              <div style={{ color: 'orange' }}>
                ${numberWithCommas(item.amount)}
              </div>
            </div>
          );
        });
    } else {
      return data.map((item, idx) => {
        let backgroundColor = (idx + 1) % 2 === 0 ? 'lightgrey' : 'white';

        // check if coupon or gift card is valid
        if (!item.valid) {
          backgroundColor = 'pink';
        }

        return (
          <div
            key={item.id}
            className='list-item-CouponList'
            style={{ background: backgroundColor }}
            onClick={() => handleSpecialClicked(item.id)}>
            <div>{idx + 1}</div>
            <div>{item.name}</div>
            <div>{item.number}</div>
            <div style={{ color: 'orange' }}>
              ${numberWithCommas(item.amount)}
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div className='container-CouponList'>
      <div className='topbar-CouponList'>
        <div>No.</div>
        <div>{isCoupon ? 'Coupon' : 'Gift Card'} Name</div>
        <div>{isCoupon ? 'Coupon' : 'Gift Card'} No.</div>
        <div>{isCoupon ? 'Amount' : 'Balance'}</div>
      </div>
      <div className='list-container-CouponList'>{renderList()}</div>
    </div>
  );
};

export default CouponList;
