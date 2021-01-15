import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

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
  }
}));

export default function AlertModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
    props.errorModalClosed();
  };

  const body = (
    <div style={modalPositionStyle} className={classes.paper}>
      <div className={classes.content}>
        <h1>{props.msg}</h1>
        <br />
        <br />
        <br />
        <Button
          variant='contained'
          size='large'
          color='secondary'
          onClick={handleClose}>
          DISMISS
        </Button>
      </div>
    </div>
  );

  return (
    <div>
      {/* <div
        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
        onClick={handleOpen}>
        <LoyaltyIcon />
        &nbsp; GROSS DISCOUNT
      </div> */}
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </div>
  );
}
