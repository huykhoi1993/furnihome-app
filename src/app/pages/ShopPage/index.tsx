/**
 *
 * ShopPage
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { Category } from './components/Category/Loadable';
import { Product } from './components/Product/Loadable';

interface Props {}

export const ShopPage = memo((props: Props) => {
  return (
    <Container>
      {/* Start Category */}
      <Category />
      {/* End Category */}

      {/* Start Category */}
      <Product />
      {/* End Category */}
    </Container>
  );
});

const Container = styled.div``;
