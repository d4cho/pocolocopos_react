import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import './AttributeModal.css';

const modalPositionStyle = {
  top: `50%`,
  left: `100%`,
  transform: `translate(-100%, -50%)`
};

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 480,
    height: '100%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5]
    // padding: theme.spacing(1, 1, 1)
  },
  content: {
    padding: '100px 50px'
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center'
  }
}));

export default function AttributeModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  console.log(props.productWithAttributeData);
  const {
    attribute,
    category,
    discount,
    id,
    image,
    name,
    price,
    quantity
  } = props.productWithAttributeData;

  const handleClose = () => {
    setOpen(false);
    props.attributeModalClosed();
  };

  const body = (
    <div style={modalPositionStyle} className={classes.paper}>
      <div className={classes.content}>
        <img className='attribute-image' src={image} alt={`${name}`} />
        <div className='attribute-product-name'>{name.toUpperCase()}</div>
        <div className='attribute-subheading'>
          <div>GIGA</div>
          <div>(Choose multiple)</div>
        </div>
        <div className='attribute-container'>
          {attribute.map((item) => (
            <>
              <div className='attribute-item'>
                <div>{item.optionName}</div>
                <div>+ ${item.optionPrice}</div>
              </div>
              <br />
            </>
          ))}
        </div>
        <div className='attribute-subheading'>COMMENT</div>
        <div style={{ padding: '0 0 100px' }}>
          <input
            className='attribute-input-comment'
            type='text'
            placeholder='Additional comment goes here...'
          />
        </div>
        <hr />
        <br />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
          <div>
            <strong>QUANTITY:</strong>
          </div>
          <input
            className='attribute-input-quantity'
            type='number'
            placeholder='1'
          />
        </div>
        <div className='attribute-buttons-container'>
          <Button
            variant='contained'
            size='large'
            color='primary'
            onClick={handleClose}>
            DISMISS
          </Button>
          <Button variant='contained' size='large' color='primary'>
            ADD TO CART
          </Button>
        </div>
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
