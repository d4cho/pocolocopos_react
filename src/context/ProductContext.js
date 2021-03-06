import React, { useState, useContext } from 'react';
import data from '../assets/data';

const ProductContext = React.createContext();
const ProductQuantitySubtract = React.createContext();
const ProductQuantityAdd = React.createContext();
const ProductList = React.createContext();
const ProductListUpdate = React.createContext();
const ProductListClear = React.createContext();
const ApplyGrossDiscount = React.createContext();
const ApplyRoundingCents = React.createContext();
const RoundingCents = React.createContext();

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

export const useApplyGrossDiscount = () => {
  return useContext(ApplyGrossDiscount);
};

export const useApplyRoundingCents = () => {
  return useContext(ApplyRoundingCents);
};

export const useRoundingCents = () => {
  return useContext(RoundingCents);
};

export const ProductProvider = ({ children }) => {
  // state of all products
  const [productData, setProductData] = useState(data);
  // state of products in invoice list
  const [productList, setProductList] = useState([]);
  // state of rounding cents
  const [roundingCents, setRoundingCents] = useState(null);

  // function to subtract the quantity of a certain product
  const subtractQuantity = (productId, qtyToSubtract) => {
    const updatedProductData = [...productData];
    updatedProductData.forEach((product) => {
      if (product.id === productId) {
        if (qtyToSubtract) {
          product.quantity -= parseInt(qtyToSubtract);
        } else {
          product.quantity -= 1;
        }
      }
    });
    setProductData(updatedProductData);
  };

  // function to add the quantity of a certain product
  const addQuantity = (productId, qty) => {
    const updatedProductData = [...productData];
    updatedProductData.forEach((product) => {
      if (product.id === productId) {
        product.quantity = product.quantity + qty;
      }
    });
    setProductData(updatedProductData);
  };

  // add/remove items to/from product list
  // clearItem can be 'all' or 'one'
  const updateProductList = (
    productId,
    productName,
    productPrice,
    clearItem,
    quantity,
    attributeName,
    productDiscount
  ) => {
    // index of product in array
    let indexInArray = productList.findIndex(
      (item) => item.productId === productId
    );
    let updatedProductList = [...productList];
    let updatedItem = { ...productList[indexInArray] };
    let parsedQuantity = parseInt(quantity);

    if (productList.length > 0 && indexInArray !== -1) {
      // if product is already in list
      // then updated the qty and price
      updatedItem.qty += parsedQuantity;
      updatedItem.productPrice += productPrice;
      updatedProductList.splice(indexInArray, 1, updatedItem);
      setProductList(updatedProductList);
    } else {
      // if product is not already in list, add to list
      let listItem = {
        productId,
        productName,
        qty: parsedQuantity,
        productPrice,
        attributeName,
        productDiscount
      };
      setProductList([...productList, listItem]);
    }

    // delete one item from list
    if (clearItem === 'one') {
      updatedProductList.splice(indexInArray, 1);
      setProductList(updatedProductList);
    }
  };

  const clearProductList = () => {
    productList.forEach((item) => addQuantity(item.productId, item.qty));
    setProductList([]);
  };

  const applyDiscount = (discount) => {
    const discountedProductList = productList.map((item) => {
      return {
        ...item,
        productName: item.productName,
        discount: ` (${discount}% D/C)`,
        productPrice: item.productPrice * (1 - discount / 100),
        qty: item.qty
      };
    });
    setProductList(discountedProductList);
  };

  const applyRoundingCents = (total, paymentMethod) => {
    // calculate rounding cents
    const factor = 0.05;
    const roundedToNickel = Math.round(total / factor) * factor;
    const roundedTotal = Math.round(roundedToNickel * 1e2) / 1e2;
    const roundingCentsAmount = Math.round((roundedTotal - total) * 1e2) / 1e2;
    setRoundingCents(roundingCentsAmount);

    const roundingCents = {
      productId: 'roundingCents',
      productName: '[ROUNDING CENTS]',
      qty: 1,
      productPrice: roundingCentsAmount
    };

    const oldProductList = [...productList];

    if (paymentMethod !== 'cash') {
      setRoundingCents(null);
      if (
        oldProductList[oldProductList.length - 1].productId === 'roundingCents'
      ) {
        oldProductList.pop();
        setProductList(oldProductList);
      }
    } else {
      setProductList([...oldProductList, roundingCents]);
    }
  };

  return (
    <ProductContext.Provider value={productData}>
      <ProductQuantitySubtract.Provider value={subtractQuantity}>
        <ProductQuantityAdd.Provider value={addQuantity}>
          <ProductList.Provider value={productList}>
            <ProductListUpdate.Provider value={updateProductList}>
              <ProductListClear.Provider value={clearProductList}>
                <ApplyGrossDiscount.Provider value={applyDiscount}>
                  <ApplyRoundingCents.Provider value={applyRoundingCents}>
                    <RoundingCents.Provider value={roundingCents}>
                      {children}
                    </RoundingCents.Provider>
                  </ApplyRoundingCents.Provider>
                </ApplyGrossDiscount.Provider>
              </ProductListClear.Provider>
            </ProductListUpdate.Provider>
          </ProductList.Provider>
        </ProductQuantityAdd.Provider>
      </ProductQuantitySubtract.Provider>
    </ProductContext.Provider>
  );
};
