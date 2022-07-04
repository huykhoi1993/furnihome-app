import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const Container = styled.section``;

const BoxList = styled.div`
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (minmax(16rem, 1fr)) [auto-fit];
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 1.5rem;
`;

const BoxItem = styled(Link)`
  padding: 2rem;
  border: 0.1rem solid #244d4d;
  text-align: center;
  &:hover {
    background: #244d4d;
    img {
      -webkit-filter: invert(1);
      filter: invert(1);
    }
    h3 {
      color: #fff;
    }
  }
  img {
    height: 6rem;
    margin-bottom: 1rem;
  }
  h3 {
    font-size: 1.7rem;
    color: #244d4d;
  }
`;

export { Container, BoxList, BoxItem };
