import styled from 'styled-components/macro';

const Container = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 3rem 0;
`;

const Form = styled.div`
  padding: 3rem;
  background: #f6fbf6;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 40rem;
  flex: 1 1 40rem;
  h3 {
    font-size: 3rem;
    padding-bottom: 1rem;
    color: #244d4d;
  }
  span {
    display: block;
    padding-bottom: 1rem;
    color: #779;
    font-size: 1.6rem;
  }
  .box {
    width: 100%;
    background: none;
    border-bottom: 0.1rem solid #244d4d;
    font-size: 1.6rem;
    color: #244d4d;
    text-transform: none;
    padding: 0.5rem 0;
    margin-bottom: 1rem;
    border-radius: 0;
  }
  textarea {
    height: 15rem;
    resize: none;
  }
`;

const Map = styled.iframe`
  -webkit-box-flex: 1;
  -ms-flex: 1 1 40rem;
  flex: 1 1 40rem;
  width: 100%;
`;

export { Container, Form, Map };
