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
          <div>
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
          <div>$ 0.00</div>
          <div>2, 5, 10, 20, 50, 100</div>
          <div>7, 8, 9, C</div>
          <div>4, 5, 6, arrow</div>
          <div>1, 2, 3, coupon icon</div>
          <div>00, 0, E/A</div>
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
