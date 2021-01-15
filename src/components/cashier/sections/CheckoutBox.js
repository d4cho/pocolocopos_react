import React, { useState, useEffect } from 'react';
import './CheckoutBox.css';
import { useProductList } from '../../../context/ProductContext';

const CheckoutBox = () => {
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  const productList = useProductList();

  useEffect(() => {
    if (productList.length > 0) {
      // calculate subtotal value
      const subtotalValue = productList
        .map((item) => item.productPrice)
        .reduce((acc, currVal) => acc + currVal);
      setSubtotal(subtotalValue);

      // calculate tax value
      const taxValue = subtotalValue * 0.05;
      setTax(taxValue);

      // calculate total value
      const totalValue = subtotalValue + taxValue;
      setTotal(totalValue);
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
        <div className='subtotal-value-item'>${subtotal.toFixed(2)}</div>
        <div className='tax-item'>Tax (5 Tax Rates)</div>
        <div className='tax-value-item'>${tax.toFixed(2)}</div>
        <div className='coupon-item'>Coupon</div>
        <div className='coupon-value-item'>$0.00</div>
        <div className='hor-underline'></div>
        <div className='total-item'>
          <strong>Total</strong>
        </div>
        <div className='total-value-item'>
          <strong>${total.toFixed(2)}</strong>
        </div>
      </div>
      <button className='checkout-btn'>CHECKOUT</button>
    </div>
  );
};

export default CheckoutBox;
