import React, { useState, useEffect } from 'react';
import './Sidebar.css';

const Sidebar = (props) => {
  // 1 = home, 2 = cashier, 3 = invoice
  const [menuClicked, setMenuClicked] = useState(props.displayPage);

  useEffect(() => {
    setMenuClicked(props.displayPage);
  }, [props.displayPage]);

  const menuClickedHandler = (e) => {
    console.log(e.target.id);
    setMenuClicked(parseInt(e.target.id));
    props.refreshFunction(parseInt(e.target.id));
  };

  return (
    <div className='sidebar-grid-container'>
      <div
        id='1'
        className='sidebar-grid-item grid-item-home'
        style={menuClicked === 1 ? { backgroundColor: 'orange' } : null}
        onClick={menuClickedHandler}>
        HOME
      </div>
      <div
        id='2'
        className='sidebar-grid-item grid-item'
        style={menuClicked === 2 ? { backgroundColor: 'orange' } : null}
        onClick={menuClickedHandler}>
        CASHIER
      </div>
      <div
        id='3'
        className='sidebar-grid-item grid-item'
        style={menuClicked === 3 ? { backgroundColor: 'orange' } : null}
        onClick={menuClickedHandler}>
        INVOICE
      </div>
      <div className='sidebar-grid-item'></div>
    </div>
  );
};

export default Sidebar;
