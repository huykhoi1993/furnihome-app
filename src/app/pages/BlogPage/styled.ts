import styled from 'styled-components/macro';

const Container = styled.section``;

const BlogList = styled.div`
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (minmax(30rem, 1fr)) [auto-fit];
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 1.5rem;
`;

const BlogItem = styled.div`
  border: 0.1rem solid #244d4d;
  background: #f6fbf6;
  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  &:hover .image img {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
  .image {
    height: 25rem;
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
    h3 {
      font-size: 2rem;
      color: #244d4d;
    }
    p {
      font-size: 1.4rem;
      color: #779;
      line-height: 2;
      padding: 1rem 0;
    }
    .icons {
      margin-top: 2rem;
      padding-top: 1.5rem;
      border-top: 0.1rem solid #244d4d;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      a {
        font-size: 1.4rem;
        color: #779;
        &:hover {
          color: #244d4d;
        }
        i {
          padding-right: 0.5rem;
          color: #244d4d;
        }
      }
    }
  }
`;

export { Container, BlogList, BlogItem };
