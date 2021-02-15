import React, { useState } from 'react';
import './CheckoutPayment.css';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import RedeemTwoToneIcon from '@material-ui/icons/RedeemTwoTone';
import {
  usePaymentMethod,
  useChangePaymentMethod
} from '../../../context/PaymentMethodContext';
import { useProductListClear } from '../../../context/ProductContext';
import { useApplyRoundingCents } from '../../../context/ProductContext';
import AlertModal from '../../utility/AlertModal';
import PaymentComplete from './PaymentComplete';
import { numberWithCommas } from '../../utility/numberWithCommas';

const CheckoutPayment = (props) => {
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [showPaymentComplete, setShowPaymentComplete] = useState(false);
  const [change, setChange] = useState(0);
  const [showDemoAlert, setShowDemoAlert] = useState(false);

  const paymentMethod = usePaymentMethod();
  const changePaymentMethod = useChangePaymentMethod();
  const applyRoundingCents = useApplyRoundingCents();
  const clearProductList = useProductListClear();

  // close alert modal
  const errorModalClosed = () => {
    setShowAlert(false);
    setShowDemoAlert(false);
  };

  const handleCheckboxChange = () => {
    setShowDemoAlert(true);
  };

  const handlePaymentMethodChange = (event) => {
    changePaymentMethod(event.target.value);
    applyRoundingCents(props.total, event.target.value);
    setPaymentAmount(0);
  };

  const handleCancelPayment = () => {
    props.closeCheckoutPayment();
    changePaymentMethod('cash');
    applyRoundingCents(null, 'cancel');
  };

  const handleCouponOpen = () => {
    props.toggleShowCouponPage(true);
    applyRoundingCents(null, 'cancel');
  };

  const handleEAClicked = () => {
    setPaymentAmount(props.total);
  };

  const handleClearClicked = () => {
    setPaymentAmount(0);
  };

  // updated payment amount when any pre-set dollar amount is clicked
  const handlePresetAmountClicked = (amount) => {
    if (paymentAmount === 0) {
      setPaymentAmount(amount);
    } else {
      let sum = paymentAmount;
      sum += amount;
      setPaymentAmount(sum);
    }
  };

  // calculate change
  const calculateChange = () => {
    let change = 0;
    change = paymentAmount - props.total;
    setChange(change);
  };

  const handlePayClicked = () => {
    if (paymentAmount === 0 || paymentAmount < props.total) {
      setShowAlert(true);
    } else {
      calculateChange();
      setShowPaymentComplete(true);
      props.handleShowPaymentComplete(true);
    }
  };

  // reset all state when payment finished
  const reset = () => {
    setPaymentAmount(0);
    setShowAlert(false);
    setShowPaymentComplete(false);

    // reset checkout button
    props.handleShowPaymentComplete(false);

    // after payment complete, closes payment section
    handleCancelPayment();

    // reset for invoice list
    clearProductList();
  };

  return (
    <div className='checkoutPayment-main-container'>
      {showPaymentComplete ? (
        <PaymentComplete
          reset={reset}
          paymentMethod={paymentMethod}
          amountPaid={numberWithCommas(paymentAmount)}
          change={numberWithCommas(change)}
          total={numberWithCommas(props.total)}
          subtotal={numberWithCommas(props.subtotal)}
          tax={numberWithCommas(props.tax)}
        />
      ) : (
        <div className='checkoutPayment-sub-container'>
          <div className='checkoutPayment-title'>
            <div style={{ fontSize: '28px' }}>CHECK-OUTS</div>
            <FormControlLabel
              control={
                <Checkbox onChange={handleCheckboxChange} color='default' />
              }
              label='MULTI-PAYMENT'
            />
          </div>
          <div>
            <div className='checkoutPayment-methods'>
              <RadioGroup
                row
                aria-label='paymentMethod'
                name='paymentMethod'
                value={paymentMethod}
                onChange={handlePaymentMethodChange}>
                <FormControlLabel
                  value='cash'
                  control={<Radio color='default' />}
                  label='Cash'
                />
                <FormControlLabel
                  value='debit'
                  control={<Radio color='default' />}
                  label='Debit'
                />
                <FormControlLabel
                  value='credit'
                  control={<Radio color='default' />}
                  label='Credit'
                />
                <FormControlLabel
                  value='toAccount'
                  control={<Radio color='default' />}
                  label='To Account'
                />
              </RadioGroup>
            </div>
            <div className='checkoutPayment-price'>
              <div style={{ paddingLeft: '2vw' }}>$</div>
              <div style={{ paddingRight: '2vw' }}>
                {numberWithCommas(paymentAmount)}
              </div>
            </div>
            <div className='checkoutPayment-dollars'>
              <div
                style={{ border: '1px solid blue', cursor: 'pointer' }}
                onClick={() => handlePresetAmountClicked(2)}>
                $2
              </div>
              <div
                style={{ border: '1px solid purple', cursor: 'pointer' }}
                onClick={() => handlePresetAmountClicked(5)}>
                $5
              </div>
              <div
                style={{ border: '1px solid green', cursor: 'pointer' }}
                onClick={() => handlePresetAmountClicked(10)}>
                $10
              </div>
              <div
                style={{ border: '1px solid red', cursor: 'pointer' }}
                onClick={() => handlePresetAmountClicked(20)}>
                $20
              </div>
              <div
                style={{ border: '1px solid brown', cursor: 'pointer' }}
                onClick={() => handlePresetAmountClicked(50)}>
                $50
              </div>
              <div
                style={{ border: '1px solid orange', cursor: 'pointer' }}
                onClick={() => handlePresetAmountClicked(100)}>
                $100
              </div>
            </div>
            <div className='checkoutPayment-789'>
              <div>7</div>
              <div>8</div>
              <div>9</div>
              <div
                style={{ border: '1px solid red', cursor: 'pointer' }}
                onClick={handleClearClicked}>
                C
              </div>
            </div>
            <div className='checkoutPayment-456'>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>
                <KeyboardBackspaceIcon />
              </div>
            </div>
            <div className='checkoutPayment-123'>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div
                style={{ border: '1px solid black', cursor: 'pointer' }}
                onClick={handleCouponOpen}>
                <RedeemTwoToneIcon />
              </div>
            </div>
            <div className='checkoutPayment-000'>
              <span className='checkoutPayment-child-00'>00</span>
              <div>0</div>
              <div
                style={{ cursor: 'pointer', border: '1px solid red' }}
                onClick={handleEAClicked}>
                E/A
              </div>
            </div>
          </div>
          <div className='checkoutPayment-buttons'>
            <Button
              variant='outlined'
              color='default'
              style={{ height: '5vh', width: '7vw' }}
              onClick={handleCancelPayment}>
              CANCEL
            </Button>
            <Button
              variant='contained'
              color='secondary'
              style={{ height: '5vh', width: '7vw' }}
              onClick={handlePayClicked}>
              PAY
            </Button>
          </div>
          {showAlert && (
            <AlertModal
              errorModalClosed={errorModalClosed}
              msg={
                paymentAmount === 0
                  ? 'Enter payment amount.'
                  : 'The payment amount must be either exact or greater than the total price.'
              }
            />
          )}
          {showDemoAlert && (
            <AlertModal
              errorModalClosed={errorModalClosed}
              msg='This feature is disabled in the DEMO version.'
            />
          )}
        </div>
      )}
    </div>
  );
};

export default CheckoutPayment;
