import React, { useState } from 'react';

import './AccountInfo.css';
import AlertModal from '../../../utility/AlertModal';
import PayToBalanceModal from './PayToBalanceModal';
import { numberWithCommas } from '../../../utility/numberWithCommas';

const AccountInfo = (props) => {
  const [showAlert, setShowAlert] = useState(false);
  const [showPayToBalance, setShowPayToBalance] = useState(false);

  const closeAlert = () => {
    setShowAlert(false);
  };

  const closePayToBalance = () => {
    setShowPayToBalance(false);
  };

  const {
    name,
    phone,
    address,
    email,
    card,
    emergency,
    owing
  } = props.selectedAccountInfo[0];

  return (
    <div className='container-AccountInfo'>
      <div className='top-AccountInfo'>
        <div>profile</div>
        <span onClick={() => setShowPayToBalance(true)}>pay to balance</span>
        <span onClick={() => setShowAlert(true)}>edit</span>
        <span onClick={() => setShowAlert(true)}>delete</span>
      </div>
      <div className='items-AccountInfo'>
        <span>Customer Name</span>
        <p>{name}</p>
      </div>
      <div className='line-AccountInfo'></div>
      <div className='items-AccountInfo'>
        <span>Customer Phone No.</span>
        <p>{phone}</p>
      </div>
      <div className='line-AccountInfo'></div>
      <div className='items-AccountInfo'>
        <span>Customer Address</span>
        <p>{address}</p>
      </div>
      <div className='line-AccountInfo'></div>
      <div className='items-AccountInfo'>
        <span>Customer Email</span>
        <p>{email}</p>
      </div>
      <div className='line-AccountInfo'></div>
      <div className='items-AccountInfo'>
        <span>Customer Card No.</span>
        <p>{card}</p>
      </div>
      <div className='line-AccountInfo'></div>
      <div className='items-AccountInfo'>
        <span>Customer Emergency Contact</span>
        <p>{emergency}</p>
      </div>
      <div className='line-AccountInfo'></div>
      <div className='items-AccountInfo'>
        <span>Customer Owing Amount</span>
        <p>${numberWithCommas(owing)}</p>
      </div>
      <div className='line-AccountInfo'></div>
      {showAlert && (
        <AlertModal
          msg='This feature is disabled in the DEMO version.'
          errorModalClosed={closeAlert}
        />
      )}
      {showPayToBalance && (
        <PayToBalanceModal
          closePayToBalance={closePayToBalance}
          name={name}
          phone={phone}
          owing={owing}
        />
      )}
    </div>
  );
};

export default AccountInfo;
