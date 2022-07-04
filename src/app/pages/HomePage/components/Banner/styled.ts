import styled from 'styled-components/macro';

const Container = styled.section`
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (minmax(30rem, 1fr)) [auto-fit];
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 1.5rem;
`;

const BannerItem = styled.div`
  height: auto;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }
  &:hover img {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
  .content {
    position: absolute;
    top: 50%;
    left: 2rem;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    span {
      font-size: 1.7rem;
      color: #779;
    }
    h3 {
      padding-top: 0.5rem;
      font-size: 2.2rem;
      color: #244d4d;
    }
    .btn {
      padding: 0.7rem 2.5rem;
    }
  }
`;

export { Container, BannerItem };
