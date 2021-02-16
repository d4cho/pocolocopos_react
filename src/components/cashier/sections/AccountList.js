import React, { useState } from 'react';

import './AccountList.css';
import { numberWithCommas } from '../../utility/numberWithCommas';
import { accountData } from '../../../assets/account-data';
import CreateAccount from '../../account/right/sections/CreateAccount';

const AccountList = ({ setShowAccountSection, setShowPaymentComplete }) => {
  const [showCreateAccount, setShowCreateAccount] = useState(false);

  const renderList = () => {
    return accountData.map((account) => {
      return (
        <div
          key={account.id}
          className='list-cashier-accountList'
          onClick={() => setShowPaymentComplete(true)}>
          <div>{account.id}</div>
          <div>
            {account.name} ({account.phone})
          </div>
          <div style={{ color: 'orange' }}>
            ${numberWithCommas(account.owing)}
          </div>
          <div> > </div>
        </div>
      );
    });
  };

  if (showCreateAccount) {
    return <CreateAccount setShowCreateAccount={setShowCreateAccount} />;
  } else {
    return (
      <div className='container-cashier-accountList'>
        <div className='heading-cashier-accountList'>
          <div style={{ fontSize: '2.3vw' }}>ACCOUNT</div>
          <div
            style={{
              fontSize: '1.2vw',
              textDecoration: 'underline',
              cursor: ' pointer'
            }}
            onClick={() => setShowAccountSection(false)}>
            CANCEL >
          </div>
        </div>
        <div className='topbar-cashier-accountList'>
          <div>No.</div>
          <div>Account Name</div>
          <div>Owing Amount</div>
        </div>
        <div className='list-container-cashier-accountList'>{renderList()}</div>
        <div
          className='create-cashier-accountList'
          onClick={() => setShowCreateAccount(true)}>
          + CREATE ACCOUNT
        </div>
      </div>
    );
  }
};

export default AccountList;
