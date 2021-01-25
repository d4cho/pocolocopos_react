import React, { useState } from 'react';
import './CheckoutPayment.css';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import RedeemIcon from '@material-ui/icons/Redeem';
import {
  usePaymentMethod,
  useChangePaymentMethod
} from '../../../context/PaymentMethodContext';
import { useApplyRoundingCents } from '../../../context/ProductContext';

const CheckoutPayment = (props) => {
  const [multipaymentChecked, setMultipaymentChecked] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState(0);

  const paymentMethod = usePaymentMethod();
  const changePaymentMethod = useChangePaymentMethod();
  const applyRoundingCents = useApplyRoundingCents();

  // changes number to have commas and rounds to 2 decimal places
  const numberWithCommas = (number) => {
    let roundedNumber = Math.round(number * 1e2) / 1e2;
    return roundedNumber.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleCheckboxChange = (event) => {
    setMultipaymentChecked(event.target.checked);
  };

  const handlePaymentMethodChange = (event) => {
    changePaymentMethod(event.target.value);
    applyRoundingCents(props.total, event.target.value);
  };

  const handleCancelPayment = () => {
    props.closeCheckoutPayment();
    changePaymentMethod('cash');
    applyRoundingCents(null, 'cancel');
  };

  return (
    <div className='checkoutPayment-main-container'>
      <div className='checkoutPayment-sub-container'>
        <div className='checkoutPayment-title'>
          <div style={{ fontSize: '28px' }}>CHECK-OUTS</div>
          <FormControlLabel
            control={
              <Checkbox
                checked={multipaymentChecked}
                onChange={handleCheckboxChange}
                color='default'
              />
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
            <div style={{ border: '1px solid blue' }}>$2</div>
            <div style={{ border: '1px solid purple' }}>$5</div>
            <div style={{ border: '1px solid green' }}>$10</div>
            <div style={{ border: '1px solid red' }}>$20</div>
            <div style={{ border: '1px solid brown' }}>$50</div>
            <div style={{ border: '1px solid orange' }}>$100</div>
          </div>
          <div className='checkoutPayment-789'>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div style={{ border: '1px solid red' }}>C</div>
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
            <div style={{ border: '1px solid black' }}>
              <RedeemIcon />
            </div>
          </div>
          <div className='checkoutPayment-000'>
            <span className='checkoutPayment-child-00'>00</span>
            <div>0</div>
            <div>E/A</div>
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
            style={{ height: '5vh', width: '7vw' }}>
            PAY
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPayment;
