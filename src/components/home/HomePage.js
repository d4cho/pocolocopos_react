import React from 'react';
import './HomePage.css';
import homeImg from '../../assets/images/open.jpg';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';
import ApartmentIcon from '@material-ui/icons/Apartment';
import BarChartIcon from '@material-ui/icons/BarChart';
import BallotIcon from '@material-ui/icons/Ballot';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const HomePage = (props) => {
  return (
    <div className='home-container'>
      <img src={homeImg} alt={'home'} />
      <div className='home-menu-container'>
        <div style={{ fontSize: '3.5vw' }}>
          <strong>POCOLOCO</strong>
        </div>
        <div style={{ fontSize: '2vw' }}>Guest Testing</div>
        <div className='home-menu-controls-container'>
          <button
            style={{ cursor: 'pointer' }}
            onClick={() => props.refreshFunction(2)}>
            <MonetizationOnIcon fontSize='inherit' htmlColor='gold' />
            <div style={{ fontSize: '1vw' }}>CASH REGISTER</div>
          </button>
          <button disabled style={{ cursor: 'not-allowed' }}>
            <BallotIcon fontSize='inherit' htmlColor='purple' />
            <div style={{ fontSize: '1vw' }}>INVENTORY</div>
          </button>
          <button disabled style={{ cursor: 'not-allowed' }}>
            <BarChartIcon fontSize='inherit' htmlColor='blue' />
            <div style={{ fontSize: '1vw' }}>REPORT</div>
          </button>
          <button disabled style={{ cursor: 'not-allowed' }}>
            <ApartmentIcon fontSize='inherit' htmlColor='navy' />
            <div style={{ fontSize: '1vw' }}>ARIES</div>
          </button>
          <button disabled style={{ cursor: 'not-allowed' }}>
            <HelpIcon fontSize='inherit' htmlColor='orange' />
            <div style={{ fontSize: '1vw' }}>HELP</div>
          </button>
          <button disabled style={{ cursor: 'not-allowed' }}>
            <SettingsIcon fontSize='inherit' htmlColor='teal' />
            <div style={{ fontSize: '1vw' }}>SETTING</div>
          </button>
        </div>
        <div
          style={{ display: 'flex', alignItems: 'center', fontSize: '1.2vw' }}>
          <FiberManualRecordIcon htmlColor='lime' />
          &nbsp; Logged in as GUEST
        </div>
        <button
          disabled
          style={{
            cursor: 'not-allowed',
            padding: '0',
            border: 'none',
            background: 'none',
            fontSize: '1.3vw'
          }}>
          [&nbsp;&nbsp;LOGOUT&nbsp;&nbsp;]
        </button>
      </div>
    </div>
  );
};

export default HomePage;
