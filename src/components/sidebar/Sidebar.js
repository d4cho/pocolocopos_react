import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ReceiptIcon from '@material-ui/icons/Receipt';
import PersonIcon from '@material-ui/icons/Person';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';

const Sidebar = (props) => {
  // 1 = home, 2 = cashier, 3 = invoice, 4 = account, 5 = special
  const [menuClicked, setMenuClicked] = useState(props.displayPage);

  useEffect(() => {
    setMenuClicked(props.displayPage);
  }, [props.displayPage]);

  const menuClickedHandler = (pageNumber) => {
    setMenuClicked(pageNumber);
    props.refreshFunction(pageNumber);
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
        className='grid-item-home'
        style={menuClicked === 1 ? divStyle.selected : divStyle.notSelected}
        onClick={() => menuClickedHandler(1)}>
        <HomeIcon fontSize='large' />
        HOME
      </div>
      <div
        className='grid-item'
        style={menuClicked === 2 ? divStyle.selected : divStyle.notSelected}
        onClick={() => menuClickedHandler(2)}>
        <MonetizationOnIcon fontSize='large' />
        CASHIER
      </div>
      <div
        className='grid-item'
        style={menuClicked === 3 ? divStyle.selected : divStyle.notSelected}
        onClick={() => menuClickedHandler(3)}>
        <ReceiptIcon fontSize='large' />
        INVOICE
      </div>
      <div
        className='grid-item'
        style={menuClicked === 4 ? divStyle.selected : divStyle.notSelected}
        onClick={() => menuClickedHandler(4)}>
        <PersonIcon fontSize='large' />
        ACCOUNT
      </div>
      <div
        className='grid-item'
        style={menuClicked === 5 ? divStyle.selected : divStyle.notSelected}
        onClick={() => menuClickedHandler(5)}>
        <LocalAtmIcon fontSize='large' />
        SPECIAL
      </div>
      <div></div>
    </div>
  );
};

export default Sidebar;
