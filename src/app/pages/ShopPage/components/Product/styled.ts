import styled from 'styled-components/macro';

const Container = styled.section``;

const ProductList = styled.div`
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (minmax(26rem, 1fr)) [auto-fit];
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  gap: 1.5rem;
`;

const ProductItem = styled.div`
  position: relative;
  background: #f2f2f2;
  overflow: hidden;
  &:hover {
    .image {
      img {
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
      }
    }
    .icons {
      top: 0;
    }
  }
  .icons {
    position: absolute;
    top: -100%;
    left: 0;
    height: 30rem;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    gap: 0.5rem;
    background: rgba(242, 242, 242, 0.7);
    z-index: 10;
    a {
      text-align: center;
      height: 5rem;
      line-height: 5rem;
      width: 5rem;
      background: #fff;
      color: #244d4d;
      font-size: 2rem;
      -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
      &:hover {
        background: #244d4d;
        color: #fff;
      }
    }
  }
  .image {
    height: 30rem;
    width: 100%;
    overflow: hidden;
    img {
      height: 100%;
      width: 100%;
      -o-object-fit: cover;
      object-fit: cover;
    }
  }
  .content {
    padding: 1.5rem 2rem;
    .price {
      font-size: 1.7rem;
      color: #779;
    }
    h3 {
      font-size: 2rem;
      color: #244d4d;
      padding: 0.5rem 0;
    }
    .stars {
      font-size: 1.7rem;
      i {
        color: gold;
      }
      span {
        color: #779;
      }
    }
  }
`;

export { Container, ProductList, ProductItem };
