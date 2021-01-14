import React, { useState, useEffect } from 'react';
import './CashierPage.css';
import productData from '../../assets/data';
import { CategoryProvider } from '../../context/CategoryContext';
import { ProductProvider } from '../../context/ProductContext';

import CategoryList from './sections/CategoryList';
import ProductList from './sections/ProductList';
import InvoiceBox from './sections/InvoiceBox';

const CashierPage = () => {
  const [categoryList, setCategoryList] = useState([]);

  console.log(productData);

  useEffect(() => {
    getUniqueCategories();
  }, []);

  const getUniqueCategories = () => {
    let uniqueCategories = [
      ...new Set(productData.map((product) => product.category))
    ];
    const uniqueCategoriesWithAll = ['all'].concat(uniqueCategories);
    console.log(uniqueCategoriesWithAll);
    setCategoryList(uniqueCategoriesWithAll);
  };

  return (
    <CategoryProvider>
      <ProductProvider>
        <div className='main-grid-container'>
          <div className='sub-grid-container-left'>
            <InvoiceBox />
            <div>Checkout Box</div>
          </div>
          <div className='sub-grid-container-right'>
            <CategoryList categoryList={categoryList} />
            <ProductList />
          </div>
        </div>
      </ProductProvider>
    </CategoryProvider>
  );
};

export default CashierPage;
