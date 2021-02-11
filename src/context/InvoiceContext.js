import React, { useState, useContext } from 'react';
import { invoiceData } from '../assets/invoice-data';

const InvoiceListContext = React.createContext();
const SelectedInvoiceContext = React.createContext();
const ReturnInvoiceContext = React.createContext();

export const useInvoiceList = () => {
  return useContext(InvoiceListContext);
};

export const useSelectedInvoice = () => {
  return useContext(SelectedInvoiceContext);
};

export const useReturnInvoice = () => {
  return useContext(ReturnInvoiceContext);
};

export const InvoiceListProvider = ({ children }) => {
  const [invoiceList, setInvoiceList] = useState(invoiceData);
  const [selectedInvoice, setSelectedInvoice] = useState('');
  const [returnInvoice, setReturnInvoice] = useState([]);

  return (
    <InvoiceListContext.Provider value={invoiceList}>
      <SelectedInvoiceContext.Provider
        value={{ selectedInvoice, setSelectedInvoice }}>
        <ReturnInvoiceContext.Provider
          value={{ returnInvoice, setReturnInvoice }}>
          {children}
        </ReturnInvoiceContext.Provider>
      </SelectedInvoiceContext.Provider>
    </InvoiceListContext.Provider>
  );
};
