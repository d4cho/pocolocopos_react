import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ReceiptIcon from '@material-ui/icons/Receipt';

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

  const divStyle = {
    selected: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      backgroundColor: 'orange'
    },
    notSelected: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly'
    }
  };

  return (
    <div className='sidebar-grid-container'>
      <div
        id='1'
        className='sidebar-grid-item grid-item-home'
        style={menuClicked === 1 ? divStyle.selected : divStyle.notSelected}
        onClick={menuClickedHandler}>
        <HomeIcon />
        HOME
      </div>
      <div
        id='2'
        className='sidebar-grid-item grid-item'
        style={menuClicked === 2 ? divStyle.selected : divStyle.notSelected}
        onClick={menuClickedHandler}>
        <MonetizationOnIcon />
        CASHIER
      </div>
      <div
        id='3'
        className='sidebar-grid-item grid-item'
        style={menuClicked === 3 ? divStyle.selected : divStyle.notSelected}
        onClick={menuClickedHandler}>
        <ReceiptIcon />
        INVOICE
      </div>
      <div className='sidebar-grid-item'></div>
    </div>
  );
};

export default Sidebar;
