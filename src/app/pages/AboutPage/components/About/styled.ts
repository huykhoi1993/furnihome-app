import styled from 'styled-components/macro';

const Container = styled.section`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  gap: 2rem;
  .image {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 40rem;
    flex: 1 1 40rem;
    img {
      width: 100%;
    }
  }
  .content {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 40rem;
    flex: 1 1 40rem;
    span {
      font-size: 2rem;
      color: #779;
    }
    h3 {
      font-size: 2.5rem;
      color: #244d4d;
      padding-top: 1rem;
    }
    p {
      font-size: 1.4rem;
      color: #779;
      padding: 1rem 0;
      line-height: 2;
    }
  }
`;

export { Container };
