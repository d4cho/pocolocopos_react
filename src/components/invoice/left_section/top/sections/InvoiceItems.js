import React, { useState } from 'react';
import './InvoiceItems.css';

import { numberWithCommas } from '../../../../utility/numberWithCommas';
import { useReturnInvoice } from '../../../../../context/InvoiceContext';

const InvoiceItems = ({ invoiceInfo }) => {
  const [array, setArray] = useState([]);
  const { setReturnInvoice } = useReturnInvoice();

  const renderItems = () =>
    invoiceInfo.products.map((item, idx) => {
      const isEven = (idx + 1) % 2 === 0 ? true : false;

      const handleToggle = (e) => {
        // if not in array, add to array
        // if in array, remove
        if (array.indexOf(e.target.value) === -1) {
          array.push(e.target.value);
        } else {
          let index = array.indexOf(e.target.value);
          array.splice(index, 1);
        }
        setArray([...array]);
        setReturnInvoice([...array]);
      };

      return (
        <div
          key={idx}
          className='item-InvoiceItem'
          style={{
            background: `${isEven ? 'rgb(213, 213, 213)' : 'white'}`
          }}>
          <input
            type='checkbox'
            name='item'
            value={item.name}
            onChange={(e) => handleToggle(e, idx)}
          />
          <span>{idx + 1}</span>
          <span className='start-item-InvoiceItem'>{item.name}</span>
          <span>${numberWithCommas(item.price)}</span>
        </div>
      );
    });

  return <div className='main-container-InvoiceItem'>{renderItems()}</div>;
};

export default InvoiceItems;
