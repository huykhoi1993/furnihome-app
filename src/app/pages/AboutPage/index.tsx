/**
 *
 * AboutPage
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { About } from './components/About/Loadable';
import { Service } from './components/Service/Loadable';

interface Props {}

export const AboutPage = memo((props: Props) => {
  return (
    <Container>
      {/* About Start */}
      <About />
      {/* About End */}

      {/* About End */}

      <Service />
      {/* About End */}
    </Container>
  );
});

const Container = styled.div``;
