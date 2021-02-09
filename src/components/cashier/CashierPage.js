import React, { useState, useEffect } from 'react';
import './CashierPage.css';
import productData from '../../assets/data';

import CategoryList from './sections/CategoryList';
import ProductList from './sections/ProductList';
import InvoiceBox from './sections/InvoiceBox';
import CheckoutBox from './sections/CheckoutBox';
import CheckoutPayment from './sections/CheckoutPayment';
import CouponPage from './sections/CouponPage';

const CashierPage = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showCouponPage, setShowCouponPage] = useState(false);
  const [showPaymentComplete, setShowPaymentComplete] = useState(false);
  const [total, setTotal] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);

  useEffect(() => {
    getUniqueCategories();
  }, []);

  const getUniqueCategories = () => {
    let uniqueCategories = [
      ...new Set(productData.map((product) => product.category))
    ];
    const uniqueCategoriesWithAll = ['all'].concat(uniqueCategories);
    setCategoryList(uniqueCategoriesWithAll);
  };

  const openCheckoutPayment = () => {
    setShowCheckout(true);
  };

  const closeCheckoutPayment = () => {
    setShowCheckout(false);
  };

  const toggleShowCouponPage = (booleanValue) => {
    setShowCheckout(!booleanValue);
    setShowCouponPage(booleanValue);
  };

  const handleShowPaymentComplete = (booleanValue) => {
    setShowPaymentComplete(booleanValue);
  };

  return (
    <div className='main-grid-container'>
      <div className='sub-grid-container-left'>
        <InvoiceBox showCheckout={showCheckout} />
        <CheckoutBox
          openCheckoutPayment={openCheckoutPayment}
          showCheckout={showCheckout}
          showCouponPage={showCouponPage}
          showPaymentComplete={showPaymentComplete}
          total={total}
          updateTotal={(value) => setTotal(value)}
          updateSubtotal={(value) => setSubtotal(value)}
          updateTax={(value) => setTax(value)}
        />
      </div>
      {showCheckout ? (
        <div className='checkout-sub-grid-container-right'>
          <CheckoutPayment
            closeCheckoutPayment={closeCheckoutPayment}
            total={total}
            subtotal={subtotal}
            tax={tax}
            toggleShowCouponPage={toggleShowCouponPage}
            handleShowPaymentComplete={handleShowPaymentComplete}
          />
        </div>
      ) : showCouponPage ? (
        <div className='coupon-sub-grid-container-right'>
          <CouponPage
            toggleShowCouponPage={toggleShowCouponPage}
            total={total}
          />
        </div>
      ) : (
        <div className='sub-grid-container-right'>
          <CategoryList categoryList={categoryList} />
          <ProductList />
        </div>
      )}
    </div>
  );
};

export default CashierPage;
