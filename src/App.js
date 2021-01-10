import React, { useState } from 'react';
import './App.css';

import Sidebar from './components/sidebar/Sidebar';
import CashierPage from './components/cashier/CashierPage';
import InvoicePage from './components/invoice/InvoicePage';
import HomePage from './components/home/HomePage';

const App = () => {
  // 1 = home, 2 = cashier, 3 = invoice
  const [displayPage, setDisplayPage] = useState(2);

  const displayPageChooser = (page) => {
    setDisplayPage(page);
  };

  const renderPage = () => {
    switch (displayPage) {
      case 1:
        return <HomePage />;
      case 2:
        return <CashierPage />;
      case 3:
        return <InvoicePage />;
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
      <Sidebar refreshFunction={displayPageChooser} />
      {renderPage()}
    </div>
  );
};

export default App;
