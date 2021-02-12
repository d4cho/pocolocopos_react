import React, { useState } from 'react';

import './Account.css';
import LeftSection from './left/LeftSection';
import RightSection from './right/RightSection';
import { accountData } from '../../assets/account-data';

const Account = () => {
  // display section can be 'choose', 'create', or 'info'
  const [displaySection, setDisplaySection] = useState('choose');
  const [selectedAccount, setSelectedAccount] = useState(0);

  const selectedAccountInfo = accountData.filter(
    (account) => account.id === selectedAccount
  );

  return (
    <div className='container-Account'>
      <LeftSection
        accountData={accountData}
        displaySection={displaySection}
        setDisplaySection={setDisplaySection}
        setSelectedAccount={setSelectedAccount}
      />
      <RightSection
        displaySection={displaySection}
        setDisplaySection={setDisplaySection}
        selectedAccount={selectedAccount}
        selectedAccountInfo={selectedAccountInfo}
      />
    </div>
  );
};

export default Account;
