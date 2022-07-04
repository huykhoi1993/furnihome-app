import styled from 'styled-components/macro';

const Container = styled.section`
  position: relative;
`;

const SlideList = styled.div``;

const SlideItem = styled.div<{
  active?: boolean;
}>`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  gap: 1.5rem;
  display: none;
  .content {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 40rem;
    flex: 1 1 40rem;
    -webkit-animation: fadeLeft 0.5s linear 0.4s backwards;
    animation: fadeLeft 0.5s linear 0.4s backwards;
    span {
      font-size: 2.5rem;
      color: #779;
    }
    h3 {
      font-size: 6rem;
      color: #244d4d;
      padding-top: 0.5rem;
    }
    p {
      font-size: 1.5rem;
      color: #779;
      padding: 0.5rem 0;
      line-height: 2;
    }
  }
  .image {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 40rem;
    flex: 1 1 40rem;
    padding: 3rem 0;
    img {
      width: 100%;
      -webkit-animation: fadeOut 0.5s linear;
      animation: fadeOut 0.5s linear;
    }
  }
  ${({ active }) =>
    active &&
    `
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  `}
`;

const SlideButton = styled.div<{
  prev?: boolean;
  next?: boolean;
}>`
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  height: 5rem;
  width: 5rem;
  line-height: 5rem;
  font-size: 3rem;
  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  border: 0.1rem solid #244d4d;
  text-align: center;
  background: #fff;
  cursor: pointer;
  &:hover {
    background-color: #244d4d;
    color: #fff;
  }
  ${props => props?.prev && `left: 2rem;`}
  ${props => props?.next && `right: 2rem;`}
  @media (max-width: 991px) {
    top: 95%;
    ${props =>
      props?.prev &&
      `left: auto;
    right: 8rem;`}
  }
`;

export { Container, SlideList, SlideItem, SlideButton };
