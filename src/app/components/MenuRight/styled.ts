import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const NavBar = styled.nav<{
  active?: boolean;
}>`
  position: fixed;
  top: 0;
  right: -101%;
  z-index: 1000;
  width: 35rem;
  height: 100vh;
  background: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-flow: column;
  flex-flow: column;
  ${props =>
    props?.active &&
    `
    right: 0;
    -webkit-box-shadow: 0 0 0 100vw rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 0 100vw rgba(0, 0, 0, 0.5);
    -webkit-transition: 0.4s linear;
    transition: 0.4s linear;
    `}
`;

const LinkItem = styled(Link)`
  margin: 1rem 0;
  font-size: 2.5rem;
  color: #244d4d;
  &:hover {
    color: #779;
  }
`;

export { NavBar, LinkItem };
