import styled from 'styled-components/macro';

const Container = styled.section``;

const MemberList = styled.div`
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (minmax(30rem, 1fr)) [auto-fit];
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 1.5rem;
`;

const MemberItem = styled.div`
  position: relative;
  overflow: hidden;
  border: 0.1rem solid #244d4d;
  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  background: #f6fbf6;
  &:hover {
    .image {
      img {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }
    }
    .share {
      left: 0;
    }
  }
  .share {
    width: 7rem;
    height: 50rem;
    position: absolute;
    top: 0;
    left: -8rem;
    z-index: 10;
    background: #244d4d;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-flow: column;
    flex-flow: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 0.7rem;
    a {
      height: 5rem;
      width: 5rem;
      line-height: 5rem;
      font-size: 2.2rem;
      color: #fff;
      border: 0.1rem solid #fff;
      text-align: center;
      &:hover {
        background: #fff;
        color: #244d4d;
      }
    }
  }
  .image {
    height: 50rem;
    width: 100%;
    overflow: hidden;
    img {
      height: 100%;
      width: 100%;
      -o-object-fit: cover;
      object-fit: cover;
    }
  }
  .user {
    padding: 1rem 1.5rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    h3 {
      font-size: 2rem;
      color: #244d4d;
    }
    span {
      font-size: 1.5rem;
      color: #779;
    }
  }
`;

export { Container, MemberList, MemberItem };
