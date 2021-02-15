import React, { useState } from 'react';
import './CategoryList.css';
import {
  useCategory,
  useCategoryUpdate
} from '../../../context/CategoryContext';
import Search from '../../search/Search';

const categoryBackgroundColors = {
  all: 'white',
  bakery: 'MistyRose',
  grocery: 'LightPink',
  instrument: 'LightBlue',
  clothes: 'LightYellow',
  convenience: 'PaleTurquoise',
  samsung: 'PeachPuff'
};

const CategoryList = (props) => {
  const [searchResult, setSearchResult] = useState('');

  const selectedCategory = useCategory();
  const updateCategory = useCategoryUpdate();

  const updateSearchResult = (result) => {
    setSearchResult(result);
  };

  const renderCategoryBox = () => {
    return props.categoryList
      .filter((word) => word.includes(searchResult))
      .map((category) => {
        const categorySelectedStyle = {
          backgroundColor:
            category === selectedCategory
              ? ' rgb(45, 85, 118)'
              : categoryBackgroundColors[category],
          color: category === selectedCategory ? 'white' : 'black'
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
