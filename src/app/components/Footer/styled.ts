import styled from 'styled-components/macro';

const Container = styled.section`
  background-color: #f6fbf6;
`;

const BoxContainer = styled.div`
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (minmax(25rem, 1fr)) [auto-fit];
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 1.5rem;
`;

const Box = styled.div`
  h3 {
    font-size: 2.2rem;
    color: #244d4d;
    padding: 1rem 0;
  }
  p {
    font-size: 1.6rem;
    color: #779;
    padding-bottom: 1rem;
  }
  a {
    font-size: 1.4rem;
    color: #779;
    padding: 1rem 0;
    display: block;
    &:hover {
      color: #244d4d;
    }
    &:hover i {
      padding-right: 2rem;
    }
    i {
      padding-right: 0.5rem;
      color: #244d4d;
    }
  }
`;

const Email = styled.input`
  width: 100%;
  padding: 1rem 1.2rem;
  font-size: 1.6rem;
  color: #244d4d;
  text-transform: none;
  margin: 0.7rem 0;
  border: 0.1rem solid #244d4d;
`;

export { Container, BoxContainer, Box, Email };
