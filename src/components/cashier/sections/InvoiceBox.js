import React from 'react';
import './InvoiceBox.css';
import {
  useProductList,
  useProductListClear
} from '../../../context/ProductContext';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import InvoiceBoxItem from './InvoiceBoxItem';
import GrossDiscountModal from './GrossDiscountModal';

const InvoiceBox = () => {
  const clearProductList = useProductListClear();
  const productList = useProductList();

  return (
    <div className='grid-container-invoice'>
      <div className='invoice-topbar'>
        <div>INVOICE #15</div>
        <div
          style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          onClick={clearProductList}>
          <DeleteForeverIcon />
          &nbsp; CLEAR CART
        </div>
        <GrossDiscountModal />
      </div>
      <div className='invoice-midbar'>
        <div>#</div>
        <div>Product Name</div>
        <div>Qty</div>
        <div>Price</div>
      </div>
      {productList.length === 0 ? (
        <div className='invoice-body-empty'>
          <AddShoppingCartIcon fontSize='inherit' />
          <div style={{ fontSize: '2vw' }}>Add Product To Cart.</div>
        </div>
      ) : (
        <InvoiceBoxItem />
      )}
    </div>
  );
};

export default InvoiceBox;
