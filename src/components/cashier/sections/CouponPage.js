import React, { useState } from 'react';
import RedeemTwoToneIcon from '@material-ui/icons/RedeemTwoTone';
import Button from '@material-ui/core/Button';
import AlertModal from '../../utility/AlertModal';
import { useApplyRoundingCents } from '../../../context/ProductContext';

const COUPON_PAGE_STYLE = {
  border: '1px solid lightgray',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
};

const BUTTON_STYLE = {
  selected: {
    backgroundColor: 'lightgray',
    border: '1px solid lightgray',
    padding: '12px 30px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '24px',
    cursor: 'pointer'
  },
  notSelected: {
    backgroundColor: 'white',
    border: '1px solid lightgray',
    padding: '12px 30px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '24px',
    cursor: 'pointer'
  }
};

const INPUT_STYLE = {
  padding: '12px 20px',
  boxSizing: 'border-box',
  border: '1px solid lightgray',
  textAlign: ' center',
  fontSize: '24px',
  width: '70%'
};

const CouponPage = (props) => {
  const [redeemType, setRedeemType] = useState('giftcard');
  const [openAlert, setOpenAlert] = useState(false);

  const applyRoundingCents = useApplyRoundingCents();

  const toggleRedeemType = (e) => {
    setRedeemType(e.target.value);
  };

  const alertModalClosed = () => {
    setOpenAlert(false);
  };

  const continuePaymentClicked = () => {
    props.toggleShowCouponPage(false);
    applyRoundingCents(props.total, 'cash');
  };

  return (
    <div style={COUPON_PAGE_STYLE}>
      <div style={{ fontSize: '9vw' }}>
        <RedeemTwoToneIcon fontSize='inherit' />
      </div>
      <div style={{ fontSize: '1.5vw', paddingBottom: '30px' }}>
        Apply coupons and gift cards now.
      </div>
      <div>
        <button
          style={
            redeemType === 'coupon'
              ? BUTTON_STYLE.selected
              : BUTTON_STYLE.notSelected
          }
          value='coupon'
          onClick={toggleRedeemType}>
          COUPON
        </button>
        <button
          style={
            redeemType === 'giftcard'
              ? BUTTON_STYLE.selected
              : BUTTON_STYLE.notSelected
          }
          value='giftcard'
          onClick={toggleRedeemType}>
          GIFT CARD
        </button>
      </div>
      <input
        type='text'
        placeholder={redeemType === 'giftcard' ? 'Gift Card #' : 'Coupon #'}
        style={INPUT_STYLE}
      />
      <div style={{ paddingTop: '30px' }}>
        <Button
          variant='contained'
          style={{
            height: '6vh',
            width: '10vw',
            backgroundColor: 'orange',
            color: 'white',
            fontSize: '1.2vw'
          }}
          onClick={() => setOpenAlert(true)}>
          APPLY
        </Button>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '30px 0 125px',
          fontSize: '20px'
        }}>
        <span>* ONLY ONE COUPON CAN BE APPLIED.</span>
        <span>* MULTIPLE GIFT CARDS CAN BE APPLIED.</span>
      </div>
      <Button
        variant='contained'
        style={{
          height: '6vh',
          width: '20vw',
          backgroundColor: 'navy',
          color: 'white',
          fontSize: '1.2vw',
          borderRadius: '30px'
        }}
        onClick={continuePaymentClicked}>
        {'CONTINUE PAYMENT >'}
      </Button>
      {openAlert && (
        <AlertModal
          errorModalClosed={alertModalClosed}
          msg='This feature is not available on the TEST product.'
        />
      )}
    </div>
  );
};

export default CouponPage;
