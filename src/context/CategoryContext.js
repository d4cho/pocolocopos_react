import React, { useState, useContext } from 'react';

const CategoryContext = React.createContext();
const CategoryContextUpdate = React.createContext();

export const useCategory = () => {
  return useContext(CategoryContext);
};

export const useCategoryUpdate = () => {
  return useContext(CategoryContextUpdate);
};

export const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState('all');

  console.log('selected category', category);

  const categoryChangeHandler = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <CategoryContext.Provider value={category}>
      <CategoryContextUpdate.Provider value={categoryChangeHandler}>
        {children}
      </CategoryContextUpdate.Provider>
    </CategoryContext.Provider>
  );
};
