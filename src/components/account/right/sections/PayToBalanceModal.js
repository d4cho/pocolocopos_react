import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import AlertModal from '../../../utility/AlertModal';
import { numberWithCommas } from '../../../utility/numberWithCommas';

const modalPositionStyle = {
  top: `50%`,
  left: `50%`,
  transform: `translate(-50%, -50%)`
};

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 600,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(15, 10, 15)
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  heading: {
    fontSize: '2rem',
    alignSelf: 'flex-start'
  },
  line: {
    border: '0',
    height: '1px',
    width: '100%',
    background: 'black',
    alignSelf: 'center'
  },
  subheading: {
    fontSize: '1.7rem',
    margin: '2rem 0'
  },
  info: {
    fontSize: '1.5rem'
  },
  tabsContainer: {
    display: 'flex',
    marginTop: '2rem'
  },
  tab: {
    border: '1px solid lightgray',
    width: '9rem',
    height: '3rem',
    textAlign: 'center',
    verticalAlign: 'middle',
    lineHeight: '3rem',
    fontSize: '1.3rem',
    cursor: 'pointer'
  },
  input: {
    width: '90%',
    height: '3rem',
    textAlign: 'center',
    fontSize: '1.5rem',
    marginBottom: '1rem'
  },
  btnContainer: {
    marginTop: '2rem'
  }
}));

export default function PayToBalanceModal(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [selectedTab, setSelectedTab] = useState('cash');
  const [amountPay, setAmountPay] = useState(0);

  const closeAlert = () => {
    setShowAlert(false);
  };

  const handleClose = () => {
    setOpen(false);
    props.closePayToBalance();
  };

  const handleTabClicked = (tab) => {
    setSelectedTab(tab);
  };

  const handleChange = (e) => {
    setAmountPay(parseInt(e.target.value));
  };

  const body = (
    <div style={modalPositionStyle} className={classes.paper}>
      <div className={classes.content}>
        <div className={classes.heading}>PAY TO BALANCE</div>
        <div className={classes.line}></div>
        <div className={classes.subheading}>
          How much does customer want to pay balance?
        </div>
        <div className={classes.info}>
          <strong>Full Name:</strong> {props.name}
        </div>
        <div className={classes.info}>
          <strong>Phone:</strong> {props.phone}
        </div>
        <div className={classes.info}>
          <strong>Owing Amount:</strong> ${numberWithCommas(props.owing)}
        </div>
        <div className={classes.info}>
          <strong>Amount Pay:</strong>{' '}
          <span style={{ color: 'orange' }}>
            ${numberWithCommas(amountPay)}
          </span>
        </div>
        <div className={classes.tabsContainer}>
          <div
            className={classes.tab}
            style={
              selectedTab === 'cash'
                ? { background: 'lightgray' }
                : { background: 'white' }
            }
            onClick={() => handleTabClicked('cash')}>
            CASH
          </div>
          <div
            className={classes.tab}
            style={
              selectedTab === 'debit'
                ? { background: 'lightgray' }
                : { background: 'white' }
            }
            onClick={() => handleTabClicked('debit')}>
            DEBIT
          </div>
          <div
            className={classes.tab}
            style={
              selectedTab === 'credit'
                ? { background: 'lightgray' }
                : { background: 'white' }
            }
            onClick={() => handleTabClicked('credit')}>
            CREDIT
          </div>
        </div>
        <input
          className={classes.input}
          type='number'
          placeholder='$ Paying Amount'
          onChange={handleChange}
        />
        <input
          className={classes.input}
          type='password'
          placeholder='MANAGER PIN'
        />
        <div className={classes.btnContainer}>
          <Button
            variant='contained'
            style={{
              height: '6vh',
              width: '12vw',
              fontSize: '1.2vw',
              backgroundColor: 'white',
              color: 'black',
              margin: '0 1rem'
            }}
            onClick={handleClose}>
            CANCEL
          </Button>
          <Button
            variant='contained'
            style={{
              height: '6vh',
              width: '12vw',
              fontSize: '1.2vw',
              backgroundColor: 'orange',
              color: 'white',
              margin: '0 1rem'
            }}
            onClick={() => setShowAlert(true)}>
            DONE
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
      {showAlert && (
        <AlertModal
          errorModalClosed={closeAlert}
          msg='This feature is not available in the TEST product.'
        />
      )}
    </>
  );
}
