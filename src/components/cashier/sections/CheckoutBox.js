import React, { useState, useEffect } from 'react';
import './CheckoutBox.css';
import {
  useProductList,
  useApplyRoundingCents
} from '../../../context/ProductContext';
import { usePaymentMethod } from '../../../context/PaymentMethodContext';
import AlertModal from '../../utility/AlertModal';

const CheckoutBox = (props) => {
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [roundingCents, setRoundingCents] = useState(null);

  const productList = useProductList();
  const paymentMethod = usePaymentMethod();
  const applyRoundingCents = useApplyRoundingCents();

  const numberWithCommas = (x) => {
    return x.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  useEffect(() => {
    if (productList.length > 0) {
      // calculate subtotal value
      const subtotalValue = productList
        .map((item) => item.productPrice)
        .reduce((acc, currVal) => acc + currVal);
      const subTotalValueRounded = Math.round(subtotalValue * 1e2) / 1e2;
      setSubtotal(subTotalValueRounded);

      // calculate tax value
      const taxValue = subtotalValue * 0.05;
      const taxValueRounded = Math.round(taxValue * 1e2) / 1e2;
      setTax(taxValueRounded);

      // calculate total value
      const totalValue = subTotalValueRounded + taxValueRounded;
      const totalValueRounded = Math.round(totalValue * 1e2) / 1e2;
      setTotal(totalValueRounded);
    } else {
      setSubtotal(0);
      setTax(0);
      setTotal(0);
    }

    // set rounding cents back to null if checkout payment is closed
    if (!props.showCheckout) {
      setRoundingCents(null);
    }
  }, [productList, props.showCheckout]);

  const showAlertHandler = () => {
    setShowAlert(true);
  };

  const errorModalClosed = () => {
    setShowAlert(false);
  };

  const checkoutPaymentClicked = () => {
    props.openCheckoutPayment();
    if (paymentMethod === 'cash') {
      const factor = 0.05;
      const roundedToNickel = Math.round(total / factor) * factor;
      const roundedTotal = Math.round(roundedToNickel * 1e2) / 1e2;
      console.log(roundedTotal);
      const roundingCentsAmount =
        Math.round((roundedTotal - total) * 1e2) / 1e2;
      setRoundingCents(roundingCentsAmount);
      applyRoundingCents(roundingCentsAmount, paymentMethod);
    }
  };

  const renderButton = () => {
    if (productList.length > 0) {
      if (props.showCheckout) {
        return (
          <div className='remaining-btn'>
            <div>-- REMAINING --</div>
            <div>${numberWithCommas(total)}</div>
          </div>
        );
      } else {
        return (
          <button className='checkout-btn' onClick={checkoutPaymentClicked}>
            CHECKOUT
          </button>
        );
      }
    } else {
      return (
        <button
          className='checkout-btn'
          style={{ backgroundColor: 'lightgray', border: '1px solid gray' }}
          onClick={showAlertHandler}>
          CHECKOUT
        </button>
      );
    }
  };

  return (
    <div className='checkout-container'>
      <div className='checkout-total-container'>
        <div className='subtotal-item'>Sub Total</div>
        <div className='subtotal-value-item'>${numberWithCommas(subtotal)}</div>
        <div className='tax-item'>Tax (5 Tax Rates)</div>
        <div className='tax-value-item'>${numberWithCommas(tax)}</div>
        <div className='coupon-item'>Coupon</div>
        <div className='coupon-value-item'>$0.00</div>
        <div className='hor-underline'></div>
        <div className='total-item'>
          <strong>Total</strong>
        </div>
        <div className='total-value-item'>
          {roundingCents && `{$${roundingCents}} `}
          <strong>${numberWithCommas(total)}</strong>
        </div>
      </div>
      {renderButton()}
      {showAlert && (
        <AlertModal
          errorModalClosed={errorModalClosed}
          msg='The cart is empty. Add product(s) to cart.'
        />
      )}
    </div>
  );
};

export default CheckoutBox;
