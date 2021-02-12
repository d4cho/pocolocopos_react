import React, { useState } from 'react';

import './Special.css';
import LeftSection from './left/LeftSection';
import { couponData } from '../../assets/coupon-data';
import { giftData } from '../../assets/gift-data';

const Special = () => {
  // display section can be 'choose', 'create', or 'info'
  const [displaySection, setDisplaySection] = useState('choose');
  const [isCoupon, setIsCoupon] = useState(true);

  const data = isCoupon ? couponData : giftData;

  return (
    <div className='container-Special'>
      <LeftSection
        displaySection={displaySection}
        setDisplaySection={setDisplaySection}
        isCoupon={isCoupon}
        setIsCoupon={setIsCoupon}
        data={data}
      />
      <div>{displaySection}</div>
    </div>
  );
};

export default Special;
