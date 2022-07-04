/**
 *
 * About
 *
 */
import { Container } from './styled';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

interface Props {}

export const About = memo((props: Props) => {
  return (
    <Container>
      <div className="image">
        <img src="image/about-img.jpg" alt="" />
      </div>

      <div className="content">
        <span>welcome to our shop</span>
        <h3>we make your home more astonishing</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          officiis, reiciendis veniam incidunt architecto quam velit dolorum
          exercitationem cum aliquam ab quas dicta dolores ad earum quasis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          adipisci totam, nam voluptates quis delectus. Ea quo repudiandae.
        </p>
        <Link to="" className="btn">
          read more
        </Link>
      </div>
    </Container>
  );
});
