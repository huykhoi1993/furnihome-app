/**
 *
 * Product
 *
 */
import { nanoid } from '@reduxjs/toolkit';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Title } from 'styles/global-styles';
import { Container, ProductItem, ProductList } from './styled';

interface Props {}

const PRODUCTS = [
  {
    id: nanoid(),
    image: 'image/product-1.jpg',
    title: 'modern furniture',
    price: 140.45,
    quantity: 50,
  },
  {
    id: nanoid(),
    image: 'image/product-2.jpg',
    title: 'modern furniture',
    price: 140.45,
    quantity: 50,
  },
  {
    id: nanoid(),
    image: 'image/product-3.jpg',
    title: 'modern furniture',
    price: 140.45,
    quantity: 50,
  },
  {
    id: nanoid(),
    image: 'image/product-4.jpg',
    title: 'modern furniture',
    price: 140.45,
    quantity: 50,
  },
  {
    id: nanoid(),
    image: 'image/product-5.jpg',
    title: 'modern furniture',
    price: 140.45,
    quantity: 50,
  },
  {
    id: nanoid(),
    image: 'image/product-6.jpg',
    title: 'modern furniture',
    price: 140.45,
    quantity: 50,
  },
  {
    id: nanoid(),
    image: 'image/product-7.jpg',
    title: 'modern furniture',
    price: 140.45,
    quantity: 50,
  },
  {
    id: nanoid(),
    image: 'image/product-8.jpg',
    title: 'modern furniture',
    price: 140.45,
    quantity: 50,
  },
];

export const Product = memo((props: Props) => {
  return (
    <Container>
      <Title>
        <span>our products</span>
        <Link to="">view all {'>>'}</Link>
      </Title>

      <ProductList>
        {PRODUCTS.map(product => (
          <ProductItem key={product.id}>
            <div className="icons">
              <Link to="" className="fas fa-shopping-cart"></Link>
              <Link to="" className="fas fa-heart"></Link>
              <Link to="" className="fas fa-eye"></Link>
            </div>
            <div className="image">
              <img src={product.image} alt="" />
            </div>
            <div className="content">
              <div className="price">${product.price}</div>
              <h3>{product.title}</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <span> ({product.quantity}) </span>
              </div>
            </div>
          </ProductItem>
        ))}
      </ProductList>
    </Container>
  );
});
