import styled from 'styled-components/macro';

const Container = styled.section``;

const ServiceList = styled.div`
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (minmax(30rem, 1fr)) [auto-fit];
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 1.5rem;
`;

const ServiceItem = styled.div`
  padding: 2rem;
  text-align: center;
  border: 0.1rem solid #244d4d;
  img {
    height: 8rem;
    margin-bottom: 1rem;
  }
  h3 {
    font-size: 2.2rem;
    color: #244d4d;
  }
  p {
    font-size: 1.4rem;
    color: #779;
    line-height: 2;
    padding: 1rem 0;
  }
`;

export { Container, ServiceList, ServiceItem };
