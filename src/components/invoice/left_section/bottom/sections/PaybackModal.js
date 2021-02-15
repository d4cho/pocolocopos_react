import React, { useState } from 'react';

import './PaybackModal.css';
import AlertModal from '../../../../utility/AlertModal';

const PaybackModal = ({ closePaybackModal }) => {
  const [releaseMethod, setReleaseMethod] = useState('cash');
  const [showAlert, setShowAlert] = useState(false);

  const handleReleaseMethodChanged = (method) => {
    setReleaseMethod(method);
  };

  const releaseMethodStyle = (methodType, currentMethod) => {
    if (methodType === currentMethod) {
      return { background: 'cornflowerblue' };
    } else {
      return { background: 'white' };
    }
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className='main-container-PaybackModal'>
      <div
        className='backdrop-PaybackModal'
        onClick={() => closePaybackModal()}></div>
      <div className='container-PaybackModal'>
        <div className='title-PaybackModal'>pay back method</div>
        <div className='line-PaybackModal'></div>
        <div className='text-PaybackModal'>
          Choose release method and enter manager PIN.
        </div>
        <div className='subtitle-PaybackModal'>release method</div>
        <div className='methods-container-PaybackModal'>
          <div
            className='methods-item-PaybackModal'
            style={releaseMethodStyle('cash', releaseMethod)}
            onClick={() => handleReleaseMethodChanged('cash')}>
            cash
          </div>
          <div
            className='methods-item-PaybackModal'
            style={releaseMethodStyle('debit', releaseMethod)}
            onClick={() => handleReleaseMethodChanged('debit')}>
            debit
          </div>
          <div
            className='methods-item-PaybackModal'
            style={releaseMethodStyle('credit', releaseMethod)}
            onClick={() => handleReleaseMethodChanged('credit')}>
            credit
          </div>
          <div
            className='methods-item-PaybackModal'
            style={releaseMethodStyle('gift', releaseMethod)}
            onClick={() => handleReleaseMethodChanged('gift')}>
            gift card
          </div>
        </div>
        <div>Release Amount: $0.00</div>
        <div className='subtitle-PaybackModal'>manager pin</div>
        <input
          className='input-PaybackModal'
          type='password'
          name='pin'
          placeholder='Manager PIN'
        />
        <div className='button-container-PaybackModal'>
          <button
            className='button1-PaybackModal'
            onClick={() => closePaybackModal()}>
            cancel
          </button>
          <button
            className='button2-PaybackModal'
            onClick={() => setShowAlert(true)}>
            release
          </button>
        </div>
      </div>
      {showAlert && (
        <AlertModal
          msg='This feature is disabled in the DEMO version.'
          errorModalClosed={closeAlert}
        />
      )}
    </div>
  );
};

export default PaybackModal;
