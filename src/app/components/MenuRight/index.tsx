/**
 *
 * MenuRight
 *
 */
import React, { Dispatch, memo, SetStateAction } from 'react';
import { BackDrop } from 'styles/global-styles';
import { LinkItem, NavBar } from './styled';

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const MenuRight = memo((props: Props) => {
  const { open, setOpen } = props;

  return (
    <>
      <BackDrop active={open} onClick={() => setOpen(false)}></BackDrop>
      <NavBar active={open}>
        <LinkItem onClick={() => setOpen(false)} to="/">
          home
        </LinkItem>
        <LinkItem onClick={() => setOpen(false)} to="/shop">
          shop
        </LinkItem>
        <LinkItem onClick={() => setOpen(false)} to="/about">
          about
        </LinkItem>
        <LinkItem onClick={() => setOpen(false)} to="/team">
          team
        </LinkItem>
        <LinkItem onClick={() => setOpen(false)} to="/blog">
          blog
        </LinkItem>
        <LinkItem onClick={() => setOpen(false)} to="/contact">
          contact
        </LinkItem>
      </NavBar>
    </>
  );
});
