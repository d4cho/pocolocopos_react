import React from 'react';

import './PaybackModal.css';

const PaybackModal = ({ closePaybackModal }) => {
  return (
    <div className='main-container-PaybackModal'>
      <div
        className='backdrop-PaybackModal'
        onClick={() => closePaybackModal()}></div>
      <div className='container-PaybackModal'>
        <div>pay back method</div>
        <div>line</div>
        <div>Choose release method and enter manager PIN.</div>
        <div>release method</div>
        <div>
          <div>cash</div>
          <div>debit</div>
        </div>
        <div>
          <div>credit</div>
          <div>gift card</div>
        </div>
        <div>Release Amount: $0.00</div>
        <div>manager pin</div>
        <input type='password' />
      </div>
    </div>
  );
};

export default PaybackModal;
