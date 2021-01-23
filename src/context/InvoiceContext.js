import React, { useState, useContext } from 'react';
import { useProductList } from '../context/ProductContext';

const InvoiceListContext = React.createContext();

export const useInvoiceList = () => {
  return useContext(InvoiceListContext);
};

export const InvoiceListProvider = ({ children }) => {
  const productList = useProductList();
  const [invoiceList, setInvoiceList] = useState(productList);
  console.log(invoiceList);

  const updateInvoiceList = () => {};

  return (
    <InvoiceListContext.Provider value={invoiceList}>
      {children}
    </InvoiceListContext.Provider>
  );
};
