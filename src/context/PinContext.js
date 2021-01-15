import React, { useState, useContext } from 'react';

const PinContext = React.createContext();

export const usePin = () => {
  return useContext(PinContext);
};

export const PinProvider = ({ children }) => {
  const [pin, setPin] = useState('0000');

  return <PinContext.Provider value={pin}>{children}</PinContext.Provider>;
};
