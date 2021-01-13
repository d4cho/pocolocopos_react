import React, { useState } from 'react';
import './CategoryList.css';

import {
  useCategory,
  useCategoryUpdate
} from '../../../context/CategoryContext';
import Search from '../../search/Search';

const CategoryList = (props) => {
  const [searchResult, setSearchResult] = useState('');

  const selectedCategory = useCategory();
  const updateCategory = useCategoryUpdate();

  const updateSearchResult = (result) => {
    setSearchResult(result);
    console.log(result);
  };

  const renderCategoryBox = () => {
    return props.categoryList
      .filter((word) => word.includes(searchResult))
      .map((category) => {
        const categorySelectedStyle = {
          backgroundColor:
            category === selectedCategory ? 'orange' : 'steelblue'
        };

        return (
          <div
            key={category}
            id={category}
            className='item-category-box'
            style={categorySelectedStyle}
            onClick={() => updateCategory(category)}>
            {category.toUpperCase()}
          </div>
        );
      });
  };

  return (
    <div className='grid-container'>
      <div className='item-topbar'>
        <div>
          <strong>CATEGORY LIST</strong>
        </div>
        <Search
          sendSearch={updateSearchResult}
          placeholder='SEARCH CATEGORY...'
        />
      </div>
      <div className='item-category-box-container'>{renderCategoryBox()}</div>
    </div>
  );
};

export default CategoryList;
