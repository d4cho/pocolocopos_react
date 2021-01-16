import React, { useState, useEffect } from 'react';
import './CheckoutBox.css';
import { useProductList } from '../../../context/ProductContext';

const CheckoutBox = () => {
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  const productList = useProductList();

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
      const totalValue = subtotalValue + taxValue;
      const totalValueRounded = Math.round(totalValue * 1e2) / 1e2;
      setTotal(totalValueRounded);
    } else {
      setSubtotal(0);
      setTax(0);
      setTotal(0);
    }
  }, [productList]);

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
          <strong>${numberWithCommas(total)}</strong>
        </div>
      </div>
      <button className='checkout-btn'>CHECKOUT</button>
    </div>
  );
};

export default CheckoutBox;
