import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import './RightSection.css';

const RightSection = () => {
  return (
    <div className='container-RightSection-Account'>
      <div className='icon-RightSection-Account'>
        <ArrowBackIcon style={{ fontSize: '7rem' }} />
        <span>Choose an Account.</span>
      </div>
    </div>
  );
};

export default RightSection;
