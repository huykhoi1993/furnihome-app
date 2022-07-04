import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    outline: none;
    border: none;
    text-decoration: none;
    text-transform: capitalize;
  }

  html {
    font-size: 62.5%;
    overflow-x: hidden;
  }

  body * {
    -webkit-transition: .3s linear;
    transition: .3s linear;
  }

  html::-webkit-scrollbar {
    width: 1rem;
  }

  html::-webkit-scrollbar-track {
    background: #fff;
  }

  html::-webkit-scrollbar-thumb {
    background: #244d4d;
  }

  section {
    padding: 3rem 9%;
  }

  @-webkit-keyframes rotate {
    0% {
      -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
      opacity: 0;
    }
  }

  @keyframes rotate {
    0% {
      -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
      opacity: 0;
    }
  }

  @-webkit-keyframes fadeOut {
    0% {
      -webkit-transform: scale(0.5);
              transform: scale(0.5);
      opacity: 0;
    }
  }

  @keyframes fadeOut {
    0% {
      -webkit-transform: scale(0.5);
              transform: scale(0.5);
      opacity: 0;
    }
  }

  @-webkit-keyframes fadeLeft {
    0% {
      -webkit-transform: translateX(-5rem);
              transform: translateX(-5rem);
      opacity: 0;
    }
  }

  @keyframes fadeLeft {
    0% {
      -webkit-transform: translateX(-5rem);
              transform: translateX(-5rem);
      opacity: 0;
    }
  }

  .btn {
    display: inline-block;
    margin-top: 1rem;
    padding: .9rem 3rem;
    font-size: 1.7rem;
    cursor: pointer;
    background-image: linear-gradient(
      to right,
      #348f50 0%,
      #56b4d3 51%,
      #348f50 100%
    );
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    box-shadow: 0 0 20px #eee;

    &:hover {
      background-position: right center;
    }
  }


  /* Media */
  @media (max-width: 991px) {
    html {
      font-size: 55%;
    }
    .header {
      padding: 2rem;
    }
    section {
      padding: 3rem 2rem;
    }
  }

  @media (max-width: 450px) {
    html {
      font-size: 50%;
    }
  }

`;

export const Title = styled.h1`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 3rem;
  border-bottom: 0.1rem solid #244d4d;
  padding-bottom: 1.5rem;
  span {
    font-size: 2.5rem;
    color: #244d4d;
  }
  a {
    font-size: 1.5rem;
    color: #779;
    &:hover {
      color: #244d4d;
    }
  }
`;

export const BackDrop = styled.div<{
  active?: boolean;
}>`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  right: ${props => (props?.active ? '35rem' : '-101%')};
`;
