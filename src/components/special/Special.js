import React, { useState } from 'react';

import './Special.css';
import LeftSection from './left/LeftSection';
import { couponData } from '../../assets/coupon-data';
import { giftData } from '../../assets/gift-data';
import RightSection from './right/RightSection';

const Special = () => {
  // display section can be 'choose', 'create', or 'info'
  const [displaySection, setDisplaySection] = useState('choose');
  const [isCoupon, setIsCoupon] = useState(true);
  const [selectedSpecialId, setSelectedSpecialId] = useState(0);

  const data = isCoupon ? couponData : giftData;

  const selectedData = data.filter((item) => item.id === selectedSpecialId);

  return (
    <div className='container-Special'>
      <LeftSection
        displaySection={displaySection}
        setDisplaySection={setDisplaySection}
        isCoupon={isCoupon}
        setIsCoupon={setIsCoupon}
        data={data}
        setSelectedSpecialId={setSelectedSpecialId}
      />
      <RightSection
        displaySection={displaySection}
        isCoupon={isCoupon}
        selectedData={selectedData}
        setDisplaySection={setDisplaySection}
      />
    </div>
  );
};

export default Special;
