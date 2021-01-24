import React, { useState, useEffect } from 'react';
import './CashierPage.css';
import productData from '../../assets/data';

import CategoryList from './sections/CategoryList';
import ProductList from './sections/ProductList';
import InvoiceBox from './sections/InvoiceBox';
import CheckoutBox from './sections/CheckoutBox';
import CheckoutPayment from './sections/CheckoutPayment';

const CashierPage = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [total, setTotal] = useState(0);
  console.log(total);

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

  return (
    <>
      {showCheckout ? (
        <div className='main-grid-container'>
          <div className='sub-grid-container-left'>
            <InvoiceBox />
            <CheckoutBox
              openCheckoutPayment={openCheckoutPayment}
              showCheckout={showCheckout}
              total={total}
              updateTotal={(value) => setTotal(value)}
            />
          </div>
          <div className='checkout-sub-grid-container-right'>
            <CheckoutPayment
              closeCheckoutPayment={closeCheckoutPayment}
              total={total}
            />
          </div>
        </div>
      ) : (
        <div className='main-grid-container'>
          <div className='sub-grid-container-left'>
            <InvoiceBox />
            <CheckoutBox
              openCheckoutPayment={openCheckoutPayment}
              showCheckout={showCheckout}
              total={total}
              updateTotal={(value) => setTotal(value)}
            />
          </div>
          <div className='sub-grid-container-right'>
            <CategoryList categoryList={categoryList} />
            <ProductList />
          </div>
        </div>
      )}
    </>
  );
};

export default CashierPage;
