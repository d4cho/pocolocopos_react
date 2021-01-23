import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { PinProvider } from './context/PinContext';
import { CategoryProvider } from './context/CategoryContext';
import { ProductProvider } from './context/ProductContext';
import { InvoiceListProvider } from './context/InvoiceContext';
import { PaymentMethodProvider } from './context/PaymentMethodContext';

ReactDOM.render(
  <React.StrictMode>
    <PinProvider>
      <CategoryProvider>
        <ProductProvider>
          <InvoiceListProvider>
            <PaymentMethodProvider>
              <App />
            </PaymentMethodProvider>
          </InvoiceListProvider>
        </ProductProvider>
      </CategoryProvider>
    </PinProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
