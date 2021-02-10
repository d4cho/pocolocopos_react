import React, { useState, useContext } from 'react';
import { invoiceData } from '../assets/invoice-data';

const InvoiceListContext = React.createContext();
const SelectedInvoiceContext = React.createContext();

export const useInvoiceList = () => {
  return useContext(InvoiceListContext);
};

export const useSelectedInvoice = () => {
  return useContext(SelectedInvoiceContext);
};

export const InvoiceListProvider = ({ children }) => {
  const [invoiceList, setInvoiceList] = useState(invoiceData);
  const [selectedInvoice, setSelectedInvoice] = useState('');

  return (
    <InvoiceListContext.Provider value={invoiceList}>
      <SelectedInvoiceContext.Provider
        value={{ selectedInvoice, setSelectedInvoice }}>
        {children}
      </SelectedInvoiceContext.Provider>
    </InvoiceListContext.Provider>
  );
};
