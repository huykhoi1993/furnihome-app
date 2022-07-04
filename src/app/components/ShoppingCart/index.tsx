/**
 *
 * ShoppingCart
 *
 */
import React, { Dispatch, memo, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import { BackDrop } from 'styles/global-styles';
import { Container } from './styled';

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const ShoppingCart = memo((props: Props) => {
  const { open, setOpen } = props;

  return (
    <>
      <BackDrop active={open} onClick={() => setOpen(false)}></BackDrop>
      <Container className="shopping-cart" active={open}>
        <div className="box">
          <i className="fas fa-times"></i>
          <img src="image/cart-img-1.jpg" alt="" />
          <div className="content">
            <h3>morden furniture</h3>
            <span className="quantity"> 1 </span>
            <span className="multiply"> x </span>
            <span className="price"> $140.00 </span>
          </div>
        </div>

        <div className="box">
          <i className="fas fa-times"></i>
          <img src="image/cart-img-2.jpg" alt="" />
          <div className="content">
            <h3>morden furniture</h3>
            <span className="quantity"> 1 </span>
            <span className="multiply"> x </span>
            <span className="price"> $140.00 </span>
          </div>
        </div>

        <div className="box">
          <i className="fas fa-times"></i>
          <img src="image/cart-img-3.jpg" alt="" />
          <div className="content">
            <h3>morden furniture</h3>
            <span className="quantity"> 1 </span>
            <span className="multiply"> x </span>
            <span className="price"> $140.00 </span>
          </div>
        </div>

        <div className="box">
          <i className="fas fa-times"></i>
          <img src="image/cart-img-4.jpg" alt="" />
          <div className="content">
            <h3>morden furniture</h3>
            <span className="quantity"> 1 </span>
            <span className="multiply"> x </span>
            <span className="price"> $140.00 </span>
          </div>
        </div>

        <h3 className="total">
          total : <span>$560.00</span>
        </h3>

        <Link to="" className="btn" onClick={() => setOpen(false)}>
          checkout cart
        </Link>
      </Container>
    </>
  );
});
