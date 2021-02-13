import React, { useState } from 'react';

import './SpecialInfo.css';
import AlertModal from '../../../utility/AlertModal';
import { numberWithCommas } from '../../../utility/numberWithCommas';

const SpecialInfo = (props) => {
  const [showAlert, setShowAlert] = useState(false);

  const closeAlert = () => {
    setShowAlert(false);
  };

  const {
    id,
    name,
    type,
    number,
    amount,
    issueDate,
    expDate,
    valid
  } = props.selectedData[0];

  return (
    <div className='container-SpecialInfo'>
      <div className='top-SpecialInfo'>
        <div>information</div>
        <div>
          {!props.isCoupon && (
            <span onClick={() => setShowAlert(true)}>add credit</span>
          )}
          <span onClick={() => setShowAlert(true)}>delete</span>
        </div>
      </div>
      <div className='items-SpecialInfo'>
        <span>Customer Name</span>
        <p>{name}</p>
      </div>
      <div className='line-SpecialInfo'></div>
      <div className='items-SpecialInfo'>
        <span>Promotion Type</span>
        <p>{type}</p>
      </div>
      <div className='line-SpecialInfo'></div>
      <div className='items-SpecialInfo'>
        <span>{props.isCoupon ? 'Coupon' : 'Gift Card'} No.</span>
        <p>{number}</p>
      </div>
      <div className='line-SpecialInfo'></div>
      <div className='items-SpecialInfo'>
        <span>{props.isCoupon ? 'Promotion Amount' : 'Balance'}</span>
        <p>${numberWithCommas(amount)}</p>
      </div>
      <div className='line-SpecialInfo'></div>
      <div className='items-SpecialInfo'>
        <span>Issue Date</span>
        <p>{issueDate}</p>
      </div>
      <div className='line-SpecialInfo'></div>
      <div className='items-SpecialInfo'>
        <span>Expiration Date</span>
        <p>{expDate}</p>
      </div>
      <div className='items-SpecialInfo'>
        <span></span>
        <p>
          {valid
            ? `This ${props.isCoupon ? 'coupon' : 'gift card'} is valid`
            : `This ${props.isCoupon ? 'coupon' : 'gift card'} is expired`}
        </p>
      </div>
      {showAlert && (
        <AlertModal
          msg='This feature is not available in the TEST product'
          errorModalClosed={closeAlert}
        />
      )}
    </div>
  );
};

export default SpecialInfo;
