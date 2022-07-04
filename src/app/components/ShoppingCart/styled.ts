import styled from 'styled-components/macro';

const Container = styled.div<{
  active?: boolean;
}>`
  position: fixed;
  top: 0;
  right: -101%;
  z-index: 1000;
  width: 35rem;
  height: 100vh;
  background: #fff;
  padding: 2rem;
  padding-top: 8rem;
  overflow-y: scroll;
  ${props =>
    props?.active &&
    `right: 0;
    -webkit-box-shadow: 0 0 0 100vw rgb(0 0 0 / 50%);
    box-shadow: 0 0 0 100vw rgb(0 0 0 / 50%);
    -webkit-transition: .4s linear;
    transition: .4s linear;`}
  &::-webkit-scrollbar {
    width: 1rem;
  }
  &::-webkit-scrollbar-track {
    background: #fff;
  }
  &::-webkit-scrollbar-thumb {
    background: #244d4d;
  }
  .box {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 1.5rem;
    position: relative;
    margin-bottom: 1rem;
    .fa-times {
      position: absolute;
      top: 50%;
      right: 1rem;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      font-size: 2rem;
      color: #779;
      cursor: pointer;
      &:hover {
        color: #244d4d;
      }
    }
    img {
      height: 8rem;
    }
    .content {
      h3 {
        color: #244d4d;
        font-size: 1.8rem;
        padding-bottom: 0.5rem;
      }
      span {
        font-size: 1.5rem;
        color: #779;
        .multipy {
          margin: 0 1rem;
        }
      }
    }
  }
  .total {
    text-align: center;
    font-size: 2rem;
    padding: 1rem 0;
    color: #779;
    span {
      color: #244d4d;
    }
  }
  .btn {
    width: 100%;
    text-align: center;
  }
`;

export { Container };
