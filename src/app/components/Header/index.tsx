/**
 *
 * Header
 *
 */
import React, { useState, memo } from 'react';
import { MenuRight } from '../MenuRight/Loadable';
import { ShoppingCart } from '../ShoppingCart/Loadable';
import {
  Container,
  Logo,
  SearchForm,
  IconGroup,
  SearchButton,
  Closer,
} from './styled';

interface Props {}

export const Header = memo((props: Props) => {
  const [activeForm, setActiveForm] = useState(false);
  const [openMenuRight, setOpenMenuRight] = useState(false);
  const [openShoppingCart, setOpenShoppingCart] = useState(false);

  return (
    <Container>
      <Logo to="">
        <i className="fas fa-lightbulb"></i> furni
      </Logo>

      <SearchForm active={activeForm}>
        <input type="search" placeholder="search here..." id="search-box" />
        <label htmlFor="search-box" className="fas fa-search"></label>
      </SearchForm>

      <IconGroup>
        <div
          id="menu-btn"
          className="fas fa-bars"
          onClick={() => setOpenMenuRight(true)}
        ></div>
        <SearchButton
          className="fas fa-search"
          onClick={() => setActiveForm(active => !active)}
        ></SearchButton>
        <div
          id="cart-btn"
          className="fas fa-shopping-cart"
          onClick={() => setOpenShoppingCart(true)}
        ></div>
        <div id="login-btn" className="fas fa-user"></div>
      </IconGroup>

      {/* closer btn */}
      <Closer
        className="fas fa-times"
        active={openMenuRight || openShoppingCart}
        onClick={() => {
          setOpenMenuRight(false);
          setOpenShoppingCart(false);
        }}
      ></Closer>

      {/* Menu */}
      <MenuRight open={openMenuRight} setOpen={setOpenMenuRight} />

      {/* ShoppingCart */}
      <ShoppingCart open={openShoppingCart} setOpen={setOpenShoppingCart} />
    </Container>
  );
});
