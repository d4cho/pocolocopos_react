import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import './RightSection.css';
import AccountInfo from './sections/AccountInfo';
import CreateAccount from './sections/CreateAccount';

const RightSection = (props) => {
  switch (props.displaySection) {
    case 'choose':
      return (
        <div className='choose-RightSection-Account'>
          <div className='icon-RightSection-Account'>
            <ArrowBackIcon style={{ fontSize: '7vw' }} />
            <span>Choose an Account.</span>
          </div>
        </div>
      );

    case 'create':
      return (
        <div className='choose-RightSection-Account'>
          <CreateAccount setDisplaySection={props.setDisplaySection} />
        </div>
      );

    case 'info':
      return (
        <div className='info-RightSection-Account'>
          <AccountInfo selectedAccountInfo={props.selectedAccountInfo} />
        </div>
      );

    default:
      return;
  }
};

export default RightSection;
