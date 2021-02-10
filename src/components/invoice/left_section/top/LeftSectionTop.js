import React, { useState } from 'react';
import './LeftSectionTop.css';
import ReceiptIcon from '@material-ui/icons/Receipt';

import InvoiceInfo from './sections/InvoiceInfo';
import AlertModal from '../../../utility/AlertModal';
import InvoiceItems from './sections/InvoiceItems';

const LeftSection = ({ invoiceInfo }) => {
  const [showAlert, setShowAlert] = useState(false);

  const closeAlertModal = () => {
    setShowAlert(false);
  };

  return (
    <div className='container-LeftSectionTop'>
      <div className='topbar-LeftSectionTop' onClick={() => setShowAlert(true)}>
        <div>{invoiceInfo ? `invoice #${invoiceInfo.invoice}` : null}</div>
        <div className='print-LeftSectionTop'>
          {invoiceInfo ? 'print receipt' : null}
        </div>
        <div className='item-LeftSectionTop'>return</div>
        <div>reimbursement</div>
        <div>void</div>
      </div>
      <div className='midbar-LeftSectionTop'>
        <div></div>
        <div>#</div>
        <div>Product Name</div>
        <div>Price</div>
      </div>
      {invoiceInfo ? (
        <InvoiceItems invoiceInfo={invoiceInfo} />
      ) : (
        <div className='icon-container-LeftSectionTop'>
          <div>
            <ReceiptIcon style={{ color: 'lightgray', fontSize: '6rem' }} />
          </div>
          <span>Select an Invoice</span>
        </div>
      )}

      {invoiceInfo ? (
        <InvoiceInfo invoiceInfo={invoiceInfo} />
      ) : (
        <div className='empty-div-LeftSectionTop'></div>
      )}
      {showAlert && (
        <AlertModal
          msg='This feature is not available on the TEST product.'
          errorModalClosed={closeAlertModal}
        />
      )}
    </div>
  );
};

export default LeftSection;
