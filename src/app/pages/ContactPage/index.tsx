/**
 *
 * ContactPage
 *
 */
import React, { memo } from 'react';
import { Container, Form, Map } from './styled';

interface Props {}

export const ContactPage = memo((props: Props) => {
  return (
    <Container>
      <Form>
        <h3>get in touch</h3>
        <span>your name</span>
        <input type="text" className="box" />
        <span>your number</span>
        <input type="number" className="box" />
        <span>your email</span>
        <input type="email" className="box" />
        <span>your message</span>
        <textarea className="box" name="" id="" cols={30} rows={10}></textarea>
        <input type="submit" value="send message" className="btn" />
      </Form>
      <Map
        title="oke"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1634314289650!5m2!1sen!2sin"
        allowFullScreen
        loading="lazy"
      ></Map>
    </Container>
  );
});
