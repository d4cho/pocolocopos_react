import React, { useState, useEffect } from 'react';
import './CashierPage.css';
import productData from '../../assets/data';

import CategoryList from './sections/CategoryList';

const CashierPage = () => {
  const [invoiceList, setInvoiceList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [productList, setProductList] = useState([]);

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

  const updateSelectedCategory = (category) => {
    console.log(category);
    setSelectedCategory(category);
    // this component has selected category
    // need to send to product list and render products
  };

  return (
    <div className='main-grid-container'>
      <div className='sub-grid-container-left'>
        <div>Invoice Box</div>
        <div>Checkout Box</div>
      </div>
      <div className='sub-grid-container-right'>
        <CategoryList
          categoryList={categoryList}
          updateSelectedCategory={updateSelectedCategory}
        />
        <div>Product List</div>
      </div>
    </div>
  );
};

export default CashierPage;
