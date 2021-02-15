import React, { useState, useEffect } from 'react';

import './CreateSpecial.css';
import SubdirectoryArrowLeftIcon from '@material-ui/icons/SubdirectoryArrowLeft';
import AlertModal from '../../../utility/AlertModal';
import { format } from 'date-fns';

const CreateSpecial = ({ isCoupon, setDisplaySection }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [expDate, setExpDate] = useState('');

  useEffect(() => {
    let oneYearFromNow = new Date();
    oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
    setExpDate(format(oneYearFromNow, 'MM / dd / yyyy'));
  }, []);

  const closeAlert = () => {
    setShowAlert(false);
  };

  const handleDateChange = (e) => {
    setExpDate(e.target.value);
  };

  return (
    <div className='container-CreateSpecial'>
      <div className='top-CreateSpecial'>
        <div>issue {isCoupon ? 'Coupon' : 'Gift Card'}</div>
        <span onClick={() => setDisplaySection('choose')}>
          <SubdirectoryArrowLeftIcon />
          cancel
        </span>
      </div>
      <div className='item-CreateSpecial'>
        <span>{isCoupon ? 'Coupon' : 'Gift Card'} Name *</span>
        <input
          type='text'
          placeholder={`${isCoupon ? 'Coupon' : 'Gift Card'} Name`}
        />
        <span>{isCoupon ? 'Coupon' : 'Gift Card'} # *</span>
        <input
          type='tel'
          placeholder={`${isCoupon ? 'Coupon' : 'Gift Card'} #`}
        />
        <span>{isCoupon ? 'Coupon' : 'Gift Card'} Issue Amount *</span>
        <input type='tel' placeholder='$ 0.00' />
        <span>{isCoupon ? 'Coupon' : 'Gift Card'} Expiration Date *</span>
        <input
          type='tel'
          placeholder='MM / DD / YYYY'
          value={expDate}
          onChange={handleDateChange}
        />
        <span>
          {' '}
          >>{isCoupon ? 'Coupon' : 'Gift Card'} issue amount cannot be edited
          after issued.{' '}
        </span>
      </div>
      <button
        className='button-CreateSpecial'
        onClick={() => setShowAlert(true)}>
        DONE
      </button>
      {showAlert && (
        <AlertModal
          msg='This feature is disabled in the DEMO version.'
          errorModalClosed={closeAlert}
        />
      )}
    </div>
  );
};

export default CreateSpecial;
