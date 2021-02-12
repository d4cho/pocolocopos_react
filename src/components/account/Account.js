import React from 'react';

import './Account.css';
import LeftSection from './left/LeftSection';
import RightSection from './right/RightSection';
import { accountData } from '../../assets/account-data';

const Account = () => {
  return (
    <div className='container-Account'>
      <LeftSection accountData={accountData} />
      <RightSection />
    </div>
  );
};

export default Account;
