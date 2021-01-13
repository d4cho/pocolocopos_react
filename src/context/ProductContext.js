import React, { useState, useContext } from 'react';
import data from '../assets/data';

const ProductContext = React.createContext();
const ProductQuantityUpdate = React.createContext();

export const useProductData = () => {
  return useContext(ProductContext);
};

export const useProductUpdate = () => {
  return useContext(ProductQuantityUpdate);
};

export const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState(data);

  console.log(productData);

  const updateQuantity = (productName) => {
    const updatedProductData = [...productData];
    updatedProductData.forEach((product) => {
      if (product.name === productName) {
        product.quantity -= 1;
      }
    });
    setProductData(updatedProductData);
  };

  return (
    <ProductContext.Provider value={productData}>
      <ProductQuantityUpdate.Provider value={updateQuantity}>
        {children}
      </ProductQuantityUpdate.Provider>
    </ProductContext.Provider>
  );
};
