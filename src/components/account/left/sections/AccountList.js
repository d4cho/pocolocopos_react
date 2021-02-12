import React from 'react';

import './AccountList.css';
import { numberWithCommas } from '../../../utility/numberWithCommas';

const AccountList = (props) => {
  const handleAccountClicked = (accountId) => {
    props.setDisplaySection('info');
    props.setSelectedAccount(accountId);
  };

  const renderList = () => {
    if (props.searchResult) {
      return props.accountData
        .filter((account) =>
          account.name.toLowerCase().includes(props.searchResult)
        )
        .map((item, idx) => {
          let backgroundColor = (idx + 1) % 2 === 0 ? 'lightgrey' : 'white';

          return (
            <div
              key={item.id}
              className='list-item-AccountList'
              style={{ background: backgroundColor }}
              onClick={() => handleAccountClicked(item.id)}>
              <div>{idx + 1}</div>
              <div>
                {item.name} ({item.phone})
              </div>
              <div style={{ color: 'orange' }}>
                ${numberWithCommas(item.owing)}
              </div>
            </div>
          );
        });
    } else {
      return props.accountData.map((item, idx) => {
        let backgroundColor = (idx + 1) % 2 === 0 ? 'lightgrey' : 'white';

        return (
          <div
            key={item.id}
            className='list-item-AccountList'
            style={{ background: backgroundColor }}
            onClick={() => handleAccountClicked(item.id)}>
            <div>{idx + 1}</div>
            <div>
              {item.name} ({item.phone})
            </div>
            <div style={{ color: 'orange' }}>
              ${numberWithCommas(item.owing)}
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div className='container-AccountList'>
      <div className='topbar-AccountList'>
        <div>No.</div>
        <div>Account Name</div>
        <div>Owing Amount</div>
      </div>
      <div className='list-container-AccountList'>{renderList()}</div>
    </div>
  );
};

export default AccountList;
