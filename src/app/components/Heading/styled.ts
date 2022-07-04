import styled from 'styled-components/macro';

const Container = styled.section`
  background: #244d4d;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding-top: 5rem;
  padding-bottom: 5rem;
  h3 {
    font-size: 2.5rem;
    text-transform: uppercase;
    color: #fff;
  }
  p {
    color: #fff;
    font-size: 2rem;
  }
  span {
    color: yellow;
  }
  a {
    color: #fff;
    &:hover {
      color: yellow;
    }
  }
`;

export { Container };
