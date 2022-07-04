import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const Container = styled.header`
  padding: 2rem 9%;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-image: linear-gradient(
    to right,
    #348f50 0%,
    #56b4d3 51%,
    #348f50 100%
  );
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  @media (max-width: 991px) {
    padding: 2rem;
  }
`;

const Logo = styled(Link)`
  font-size: 2.5rem;
  color: #ffffff;
  font-weight: bolder;
  i {
    padding-right: 0.3rem;
  }
`;

const IconGroup = styled.div`
  div {
    margin-left: 2rem;
    font-size: 2.5rem;
    cursor: pointer;
    color: #ffffff;
    &:hover {
      color: #779;
    }
  }
`;

const SearchButton = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: inline-block;
  }
`;

const SearchForm = styled.div<{
  active?: boolean;
}>`
  height: 5rem;
  width: 50rem;
  border-radius: 5rem;
  background: #fff;
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border: 0.2rem solid #244d4d;

  input {
    height: 100%;
    width: 100%;
    padding: 0 1.2rem;
    font-size: 1.6rem;
    color: #244d4d;
    text-transform: none;
  }

  label {
    font-size: 2.2rem;
    padding-right: 1.7rem;
    cursor: pointer;
    color: #244d4d;
    &:hover {
      color: #779;
    }
  }

  @media (max-width: 768px) {
    position: absolute;
    top: -101%;
    left: 0;
    right: 0;
    width: 100%;
    border-radius: 0;
    border-left: 0;
    border-right: 0;
    ${props =>
      props?.active &&
      `
    -webkit-transition: 0.1s linear;
    transition: 0.1s linear;
    top: 99%;
  `}
  }
`;

const Closer = styled.div<{
  active?: boolean;
}>`
  position: fixed;
  top: 1.5rem;
  right: 2rem;
  font-size: 5rem;
  cursor: pointer;
  z-index: 10000;
  color: #244d4d;
  -webkit-animation: rotate 0.4s linear 0.4s backwards;
  animation: rotate 0.4s linear 0.4s backwards;
  display: ${props => (props?.active ? 'block' : 'none')};
  &:hover {
    color: #779;
  }
`;

export { Container, Logo, IconGroup, SearchButton, SearchForm, Closer };
