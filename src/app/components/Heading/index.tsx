/**
 *
 * Heading
 *
 */
import { HOME_PATH, ROUTES } from 'app';
import React, { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container } from './styled';

interface Props {}

export const Heading = memo((props: Props) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const currentRoute = ROUTES.find(route => route.path === currentPath);

  if (currentPath === HOME_PATH || !currentRoute) return <></>;

  return (
    <Container>
      <h3>our shop</h3>
      <p>
        <Link to={HOME_PATH}>home</Link> / <span>{currentRoute?.name}</span>
      </p>
    </Container>
  );
});
