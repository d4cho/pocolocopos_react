import React, { useState, useContext } from 'react';
import data from '../assets/data';

const ProductContext = React.createContext();
const ProductQuantityUpdate = React.createContext();
const ProductList = React.createContext();
const ProductListUpdate = React.createContext();
const ProductListClear = React.createContext();

export const useProductData = () => {
  return useContext(ProductContext);
};

export const useProductUpdate = () => {
  return useContext(ProductQuantityUpdate);
};

export const useProductList = () => {
  return useContext(ProductList);
};

export const useProductListUpdate = () => {
  return useContext(ProductListUpdate);
};

export const useProductListClear = () => {
  return useContext(ProductListClear);
};

export const ProductProvider = ({ children }) => {
  // state of all products
  const [productData, setProductData] = useState(data);
  // state of products in invoice list
  const [productList, setProductList] = useState([]);

  console.log('productList', productList);

  // function to update the quantity of a certain product
  const updateQuantity = (productName) => {
    const updatedProductData = [...productData];
    updatedProductData.forEach((product) => {
      if (product.name === productName) {
        product.quantity -= 1;
      }
    });
    setProductData(updatedProductData);
  };

  // add/remove items to/from product list
  const updateProductList = (productName, productPrice) => {
    // index of product in array
    let indexInArray = productList.findIndex(
      (item) => item.productName === productName
    );

    if (productList.length === 0) {
      // if the list is empty, add product to list
      let listItem = { productName, qty: 1, productPrice };
      setProductList([...productList, listItem]);
    } else if (productList.length > 0 && indexInArray !== -1) {
      // if the list is not empty, and product is already in list
      // then updated the qty and price
      let updatedProductList = [...productList];
      let updatedItem = { ...productList[indexInArray] };
      updatedItem.qty += 1;
      updatedItem.productPrice += productPrice;
      updatedProductList.splice(indexInArray, 1, updatedItem);
      setProductList(updatedProductList);
    } else {
      // if the list is not empty, and is not already in list, add to list
      let listItem = { productName, qty: 1, productPrice };
      setProductList([...productList, listItem]);
    }
  };

  const clearProductList = () => {
    setProductList([]);
  };

  return (
    <ProductContext.Provider value={productData}>
      <ProductQuantityUpdate.Provider value={updateQuantity}>
        <ProductList.Provider value={productList}>
          <ProductListUpdate.Provider value={updateProductList}>
            <ProductListClear.Provider value={clearProductList}>
              {children}
            </ProductListClear.Provider>
          </ProductListUpdate.Provider>
        </ProductList.Provider>
      </ProductQuantityUpdate.Provider>
    </ProductContext.Provider>
  );
};
