import React, { useState, useContext } from 'react';
import { invoiceData } from '../assets/invoice-data';

const InvoiceListContext = React.createContext();

export const useInvoiceList = () => {
  return useContext(InvoiceListContext);
};

export const InvoiceListProvider = ({ children }) => {
  const [invoiceList, setInvoiceList] = useState(invoiceData);

  return (
    <InvoiceListContext.Provider value={invoiceList}>
      {children}
    </InvoiceListContext.Provider>
  );
};
