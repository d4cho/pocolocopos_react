import React from 'react';
import './HomePage.css';
import homeImg from '../../assets/images/open.jpg';

const HomePage = (props) => {
  return (
    <div class='home-container'>
      <img src={homeImg} alt={'home'} />
      <div className='home-menu-container'>
        <div style={{ fontSize: '4vw' }}>
          <strong>POCOLOCO</strong>
        </div>
        <div style={{ fontSize: '1.8vw' }}>Guest Testing</div>
        <div className='home-menu-controls-container'>
          <button
            style={{ cursor: 'pointer' }}
            onClick={() => props.refreshFunction(2)}>
            CASH REGISTER
          </button>
          <button disabled style={{ cursor: 'not-allowed' }}>
            INVENTORY
          </button>
          <button disabled style={{ cursor: 'not-allowed' }}>
            REPORT
          </button>
          <button disabled style={{ cursor: 'not-allowed' }}>
            ARIES
          </button>
          <button disabled style={{ cursor: 'not-allowed' }}>
            HELP
          </button>
          <button disabled style={{ cursor: 'not-allowed' }}>
            SETTING
          </button>
        </div>
        <div style={{ fontSize: '1.5vw' }}>Logged in as GUEST</div>
        <button
          disabled
          style={{
            cursor: 'not-allowed',
            padding: '0',
            border: 'none',
            background: 'none',
            fontSize: '1.5vw'
          }}>
          [&nbsp;&nbsp;LOGOUT&nbsp;&nbsp;]
        </button>
      </div>
    </div>
  );
};

export default HomePage;
