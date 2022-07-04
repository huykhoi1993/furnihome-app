/**
 *
 * Service
 *
 */
import { nanoid } from '@reduxjs/toolkit';
import { Container } from 'app/components/Footer/styled';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Title } from 'styles/global-styles';
import { ServiceList, ServiceItem } from './styled';

interface Props {}

const SERVICES = [
  {
    id: nanoid(),
    image: 'image/serv-1.svg',
    title: 'product selling',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quod.',
  },
  {
    id: nanoid(),
    image: 'image/serv-2.svg',
    title: 'product designing',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quod.',
  },
  {
    id: nanoid(),
    image: 'image/serv-3.svg',
    title: '24 / 7 support',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quod.',
  },
];

export const Service = memo((props: Props) => {
  return (
    <Container>
      <Title>
        <span>our services</span> <Link to="">view all {'>>'}</Link>{' '}
      </Title>

      <ServiceList>
        {SERVICES.map(service => (
          <ServiceItem key={service.id}>
            <img src={service.image} alt="" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <Link to="" className="btn">
              read more
            </Link>
          </ServiceItem>
        ))}
      </ServiceList>
    </Container>
  );
});
