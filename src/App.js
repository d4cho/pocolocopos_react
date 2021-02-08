import React, { useState } from 'react';
import './App.css';

import Sidebar from './components/sidebar/Sidebar';
import CashierPage from './components/cashier/CashierPage';
import InvoicePage from './components/invoice/InvoicePage';
import HomePage from './components/home/HomePage';
import Account from './components/account/Account';
import Special from './components/special/Special';

const App = () => {
  // 1 = home, 2 = cashier, 3 = invoice
  const [displayPage, setDisplayPage] = useState(1);

  const displayPageChooser = (page) => {
    setDisplayPage(page);
  };

  const renderPage = () => {
    switch (displayPage) {
      case 1:
        return <HomePage refreshFunction={displayPageChooser} />;
      case 2:
        return <CashierPage />;
      case 3:
        return <InvoicePage />;
      case 4:
        return <Account />;
      case 5:
        return <Special />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div>
      {displayPage === 1 ? (
        <HomePage refreshFunction={displayPageChooser} />
      ) : (
        <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
          <Sidebar
            refreshFunction={displayPageChooser}
            displayPage={displayPage}
          />
          {renderPage()}
        </div>
      )}
    </div>
  );
};

export default App;
