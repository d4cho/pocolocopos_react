import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import './RightSection.css';
import SpecialInfo from './sections/SpecialInfo';
import CreateSpecial from './sections/CreateSpecial';

const RightSection = (props) => {
  const { displaySection, setDisplaySection, isCoupon, selectedData } = props;

  switch (displaySection) {
    case 'choose':
      return (
        <div className='choose-RightSection-Special'>
          <div className='icon-RightSection-Special'>
            <ArrowBackIcon style={{ fontSize: '7vw' }} />
            <span>Choose a {isCoupon ? 'Coupon' : 'Gift Card'}.</span>
          </div>
        </div>
      );

    case 'create':
      return (
        <div className='choose-RightSection-Special'>
          <CreateSpecial
            isCoupon={isCoupon}
            setDisplaySection={setDisplaySection}
          />
        </div>
      );

    case 'info':
      return (
        <div className='info-RightSection-Special'>
          <SpecialInfo selectedData={selectedData} isCoupon={isCoupon} />
        </div>
      );

    default:
      return;
  }
};

export default RightSection;
