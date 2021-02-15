import React, { useState } from 'react';

import './CreateAccount.css';
import SubdirectoryArrowLeftIcon from '@material-ui/icons/SubdirectoryArrowLeft';
import AlertModal from '../../../utility/AlertModal';

const CreateAccount = (props) => {
  const [showAlert, setShowAlert] = useState(false);

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className='container-CreateAccount'>
      <div className='top-CreateAccount'>
        <div>create account</div>
        <span onClick={() => props.setDisplaySection('choose')}>
          <SubdirectoryArrowLeftIcon />
          cancel
        </span>
      </div>
      <div className='item-CreateAccount'>
        <span>Full Name *</span>
        <input type='text' placeholder='Customer Full Name' />
        <span>Phone *</span>
        <input type='tel' placeholder='Customer Phone Number' />
        <span>Address (Optional)</span>
        <input type='tel' placeholder='Customer Address' />
        <span>Email (Optional)</span>
        <input type='tel' placeholder='Customer Email' />
        <span>Credit Card # (Optional)</span>
        <input type='tel' placeholder='Customer Card #' />
        <span>Emergency Contact (Optional)</span>
        <input type='tel' placeholder='Customer Emergency Contact' />
      </div>
      <button
        className='button-CreateAccount'
        onClick={() => setShowAlert(true)}>
        CREATE
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

export default CreateAccount;
