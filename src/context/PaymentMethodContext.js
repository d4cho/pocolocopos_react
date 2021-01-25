import React, { useState, useContext } from 'react';

const PaymentMethod = React.createContext();
const ChangePaymentMethod = React.createContext();

export const usePaymentMethod = () => {
  return useContext(PaymentMethod);
};

export const useChangePaymentMethod = () => {
  return useContext(ChangePaymentMethod);
};

export const PaymentMethodProvider = ({ children }) => {
  const [paymentMethod, setPaymentMethod] = useState('cash');

  const changePaymentMethod = (payload) => {
    setPaymentMethod(payload);
  };

  return (
    <PaymentMethod.Provider value={paymentMethod}>
      <ChangePaymentMethod.Provider value={changePaymentMethod}>
        {children}
      </ChangePaymentMethod.Provider>
    </PaymentMethod.Provider>
  );
};
