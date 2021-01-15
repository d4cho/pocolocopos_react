import React, { useState } from 'react';
import { usePin } from '../../../context/PinContext';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AlertModal from '../../utility/AlertModal';

const modalPositionStyle = {
  top: `40%`,
  left: `40%`,
  transform: `translate(-20%, -40%)`
};

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 500,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(15, 10, 15)
  },
  root: {
    '& > *': {
      margin: theme.spacing(2)
    },
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'orange',
    color: 'white'
  }
}));

export default function GrossDiscountModal() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [error, setError] = useState(false);
  const [inputPin, setInputPin] = useState('');

  const pin = usePin();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitDiscount = () => {
    if (inputPin !== pin) {
      console.log(inputPin, pin, 'pin error');
      setShowErrorModal(true);
      setError(true);
      setInputPin('');
    } else {
      console.log('data submitted!');
      setOpen(false);
      setShowErrorModal(false);
      setError(false);
      setInputPin('');
    }
  };

  const errorModalClosed = () => {
    setShowErrorModal(false);
  };

  const inputPinChangeHandler = (e) => {
    console.log(e.currentTarget.value);
    setInputPin(e.currentTarget.value);
  };

  const body = (
    <div style={modalPositionStyle} className={classes.paper}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: '32px', borderBottom: '1px solid black' }}>
          GROSS DISCOUNT
        </div>
        <br />
        <div style={{ fontSize: '20px', textAlign: 'center' }}>
          How much percentage would you like to discount?
        </div>
        <br />
        <div style={{ textAlign: 'center' }}>
          * Discount rate already applied will be ignored.
        </div>
        <br />
        <TextField
          autoFocus
          type='number'
          label='DISCOUNT %'
          variant='outlined'
        />
        <br />
        <TextField
          error={error}
          type='password'
          label='MANAGER PIN'
          variant='outlined'
          value={inputPin}
          onChange={inputPinChangeHandler}
        />
        <br />
        <div className={classes.root}>
          <Button variant='outlined' size='large' onClick={handleClose}>
            CANCEL
          </Button>
          <Button
            variant='contained'
            size='large'
            className={classes.button}
            onClick={() => submitDiscount()}>
            APPLY
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div
        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
        onClick={handleOpen}>
        <LoyaltyIcon />
        &nbsp; GROSS DISCOUNT
      </div>
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
      {showErrorModal && (
        <AlertModal
          errorModalClosed={errorModalClosed}
          msg='PIN does not exists.'
        />
      )}
    </div>
  );
}
