import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LockIcon from '@material-ui/icons/Lock';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import AlertModal from '../../utility/AlertModal';

const modalPositionStyle = {
  top: `40%`,
  left: `40%`,
  transform: `translate(-20%, -40%)`
};

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 600,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0, 0, 0)
  },
  root: {
    '& > *': {
      margin: theme.spacing(2)
    },
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {
    backgroundColor: 'orange',
    color: 'white'
  }
}));

const subtitleStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
  padding: '30px 0 15px'
};

const boxStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid lightgrey',
  padding: '10px 0',
  fontSize: '20px'
};

export default function CartItemModal(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [radioValue, setRadioValue] = useState('manualEntry');
  const [error, setError] = useState(false);

  const { itemNumber, productName, quantity } = props.itemInfo;

  const handleClose = () => {
    setOpen(false);
    props.openCartItemModalHandler(false);
  };

  const handleChange = (event) => {
    console.log(event.currentTarget.value);
    setRadioValue(event.currentTarget.value);
  };

  const handleSubmit = () => {
    setError(true);
  };

  const errorModalClosed = () => {
    setError(false);
  };

  const renderPriceAdjustmentBox = () => {
    return (
      <div style={boxStyle}>
        {radioValue === 'manualEntry' ? (
          <div>Enter manual price.</div>
        ) : radioValue === 'discountPercentage' ? (
          <div>Enter discount percentage.</div>
        ) : radioValue === 'discountPrice' ? (
          <div>Enter discount price.</div>
        ) : (
          <div>Enter manual price.</div>
        )}
        <TextField
          type='number'
          placeholder='0.00'
          variant='outlined'
          InputProps={
            radioValue === 'discountPercentage'
              ? {
                  endAdornment: (
                    <InputAdornment position='end'>%</InputAdornment>
                  )
                }
              : {
                  startAdornment: (
                    <InputAdornment position='start'>$</InputAdornment>
                  )
                }
          }
        />
        {radioValue === 'manualEntry' ? (
          <div>e.g. $5 for each item, then enter 5.</div>
        ) : radioValue === 'discountPercentage' ? (
          <div>e.g. 25% off, then enter 25.</div>
        ) : radioValue === 'discountPrice' ? (
          <div>e.g. $5 off from each item, then enter 5.</div>
        ) : (
          <div>e.g. $5 for each item, then enter 5</div>
        )}
      </div>
    );
  };

  const body = (
    <div style={modalPositionStyle} className={classes.paper}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            fontSize: '32px',
            border: '1px solid black',
            padding: '100px 20px 10px',
            color: 'white',
            backgroundColor: 'DarkSlateBlue'
          }}>
          Cart Item Information
        </div>
        <div style={{ padding: '0px 20px 20px' }}>
          <div style={subtitleStyle}>CART ITEM NO.{itemNumber}</div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              border: '1px solid lightgrey',
              padding: '10px 0',
              fontSize: '20px'
            }}>
            {productName.toUpperCase()}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
            <div style={subtitleStyle}>MODIFY QUANTITY</div>
            <Button color='secondary'>REMOVE ITEM</Button>
          </div>
          <div style={boxStyle}>
            <div>Quantity</div>
            <TextField
              autoFocus
              inputProps={{ style: { textAlign: 'center' } }}
              type='number'
              variant='outlined'
              defaultValue={quantity}
            />
          </div>
          <div style={subtitleStyle}>
            PRICE ADJUSTMENT
            <LockIcon style={{ fontSize: '15px', opacity: '0.5' }} />
          </div>
          <div>
            <RadioGroup
              row
              value={radioValue}
              aria-label='price-adjustment'
              name='price-adjustment'
              onChange={handleChange}>
              <FormControlLabel
                value='manualEntry'
                control={<Radio />}
                label='Manual Entry'
              />
              <FormControlLabel
                value='discountPercentage'
                control={<Radio />}
                label='Discount Percentage'
              />
              <FormControlLabel
                value='discountPrice'
                control={<Radio />}
                label='Discount Price'
              />
            </RadioGroup>
          </div>
          {renderPriceAdjustmentBox()}
          <div className={classes.root}>
            <Button variant='outlined' size='large' onClick={handleClose}>
              CANCEL
            </Button>
            <Button
              variant='contained'
              size='large'
              className={classes.button}
              onClick={handleSubmit}>
              DONE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {error && (
        <AlertModal
          errorModalClosed={errorModalClosed}
          msg='This feature is not available on the TEST product.'
        />
      )}
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </>
  );
}
