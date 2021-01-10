import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Sidebar from './components/sidebar/Sidebar';
import CashierPage from './components/cashier/CashierPage';
import InvoicePage from './components/invoice/InvoicePage';

function App() {
  return (
    <div>
      <Sidebar />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={CashierPage} />
          <Route exact path='/invoice' component={InvoicePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
