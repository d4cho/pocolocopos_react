import React, { useState } from 'react';
import './CategoryList.css';

import Search from '../../search/Search';

const CategoryList = (props) => {
  const [searchResult, setSearchResult] = useState('');

  const updateSearchResult = (result) => {
    setSearchResult(result);
    console.log(result);
  };

  const sendSelectedCategory = (event) => {
    props.updateSelectedCategory(event.target.id);
    console.log(event.target.id);
  };

  const renderCategoryBox = () => {
    return props.categoryList
      .filter((word) => word.includes(searchResult))
      .map((category) => (
        <div
          key={category}
          id={category}
          className='item-category-box'
          onClick={sendSelectedCategory}>
          {category.toUpperCase()}
        </div>
      ));
  };

  return (
    <div className='grid-container'>
      <div className='item-topbar'>
        <div>
          <strong>CATEGORY LIST</strong>
        </div>
        <Search sendSearch={updateSearchResult} />
      </div>
      {renderCategoryBox()}
    </div>
  );
};

export default CategoryList;
