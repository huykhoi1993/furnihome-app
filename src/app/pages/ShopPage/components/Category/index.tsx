/**
 *
 * Category
 *
 */
import { nanoid } from '@reduxjs/toolkit';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Title } from 'styles/global-styles';
import { Container, BoxList, BoxItem } from './styled';

interface Props {}

const categoryList = [
  {
    id: nanoid(),
    src: 'image/icon-1.png',
    title: 'house sofa',
  },
  {
    id: nanoid(),
    src: 'image/icon-2.png',
    title: 'working table',
  },
  {
    id: nanoid(),
    src: 'image/icon-3.png',
    title: 'corner table',
  },
  {
    id: nanoid(),
    src: 'image/icon-4.png',
    title: 'office chair',
  },
  {
    id: nanoid(),
    src: 'image/icon-5.png',
    title: 'new wardrobe',
  },
];

export const Category = memo((props: Props) => {
  return (
    <Container>
      <Title>
        <span>our categories</span>
        <Link to="">view all {'>>'}</Link>
      </Title>

      <BoxList>
        {categoryList.map(category => (
          <BoxItem to="" key={category.id}>
            <img src={category.src} alt="" />
            <h3>{category.title}</h3>
          </BoxItem>
        ))}
      </BoxList>
    </Container>
  );
});
