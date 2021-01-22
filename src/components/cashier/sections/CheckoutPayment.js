import React, { useState } from 'react';
import './CheckoutPayment.css';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

const CheckoutPayment = (props) => {
  const [multipaymentChecked, setMultipaymentChecked] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('cash');

  const handleCheckboxChange = (event) => {
    setMultipaymentChecked(event.target.checked);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
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
            <div>$</div>
            <div>0.00</div>
          </div>
          <div className='checkoutPayment-dollars'>
            <div>$2</div>
            <div>$5</div>
            <div>$10</div>
            <div>$20</div>
            <div>$50</div>
            <div>$100</div>
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
            <div>arrow</div>
          </div>
          <div className='checkoutPayment-123'>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div style={{ border: '1px solid black' }}>coupon</div>
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
            onClick={props.showCheckoutHandler}>
            CANCEL
          </Button>
          <Button variant='contained' color='secondary'>
            PAY
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPayment;
