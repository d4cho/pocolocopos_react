import React from 'react';

import './Account.css';
import LeftSection from './left/LeftSection';
import RightSection from './right/RightSection';

const Account = () => {
  return (
    <div className='container-Account'>
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default Account;
