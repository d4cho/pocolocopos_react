import React, { useState, useContext } from 'react';
import data from '../assets/data';

const ProductContext = React.createContext();
const ProductQuantitySubtract = React.createContext();
const ProductQuantityAdd = React.createContext();
const ProductList = React.createContext();
const ProductListUpdate = React.createContext();
const ProductListClear = React.createContext();

export const useProductData = () => {
  return useContext(ProductContext);
};

export const useProductQuantitySubtract = () => {
  return useContext(ProductQuantitySubtract);
};

export const useProductQuantityAdd = () => {
  return useContext(ProductQuantityAdd);
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

  // function to subtract the quantity of a certain product
  const subtractQuantity = (productName) => {
    const updatedProductData = [...productData];
    updatedProductData.forEach((product) => {
      if (product.name === productName) {
        product.quantity -= 1;
      }
    });
    setProductData(updatedProductData);
  };

  // function to add the quantity of a certain product
  const addQuantity = (productName, qty) => {
    const updatedProductData = [...productData];
    updatedProductData.forEach((product) => {
      if (product.name === productName) {
        product.quantity = product.quantity + qty;
      }
    });
    setProductData(updatedProductData);
  };

  // add/remove items to/from product list
  // clearItem can be 'all' or 'one'
  const updateProductList = (productName, productPrice, clearItem) => {
    // index of product in array
    let indexInArray = productList.findIndex(
      (item) => item.productName === productName
    );
    let updatedProductList = [...productList];
    let updatedItem = { ...productList[indexInArray] };

    if (productList.length === 0) {
      // if the list is empty, add product to list
      let listItem = { productName, qty: 1, productPrice: productPrice };
      setProductList([...productList, listItem]);
    } else if (productList.length > 0 && indexInArray !== -1) {
      // if the list is not empty, and product is already in list
      // then updated the qty and price
      updatedItem.qty += 1;
      updatedItem.productPrice += productPrice;
      updatedProductList.splice(indexInArray, 1, updatedItem);
      setProductList(updatedProductList);
    } else {
      // if the list is not empty, and is not already in list, add to list
      let listItem = { productName, qty: 1, productPrice };
      setProductList([...productList, listItem]);
    }

    // delete one item from list
    if (clearItem === 'one') {
      updatedProductList.splice(indexInArray, 1);
      setProductList(updatedProductList);
    }
  };

  const clearProductList = () => {
    productList.forEach((item) => addQuantity(item.productName, item.qty));
    setProductList([]);
  };

  return (
    <ProductContext.Provider value={productData}>
      <ProductQuantitySubtract.Provider value={subtractQuantity}>
        <ProductQuantityAdd.Provider value={addQuantity}>
          <ProductList.Provider value={productList}>
            <ProductListUpdate.Provider value={updateProductList}>
              <ProductListClear.Provider value={clearProductList}>
                {children}
              </ProductListClear.Provider>
            </ProductListUpdate.Provider>
          </ProductList.Provider>
        </ProductQuantityAdd.Provider>
      </ProductQuantitySubtract.Provider>
    </ProductContext.Provider>
  );
};
