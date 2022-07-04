/**
 *
 * Footer
 *
 */
import { ROUTES } from 'app';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Box, BoxContainer, Container, Email } from './styled';

interface Props {}

export const Footer = memo((props: Props) => {
  return (
    <Container>
      <BoxContainer>
        <Box>
          <h3>quick links</h3>
          {ROUTES.map(
            ({ id, path, name }) =>
              path && (
                <Link to={path} key={id}>
                  <i className="fas fa-arrow-right"></i> {name}
                </Link>
              ),
          )}
        </Box>

        <Box>
          <h3>extra links</h3>
          <Link to="#">
            <i className="fas fa-arrow-right"></i> my order
          </Link>
          <Link to="#">
            <i className="fas fa-arrow-right"></i> my wishlist
          </Link>
          <Link to="#">
            <i className="fas fa-arrow-right"></i> my account
          </Link>
          <Link to="#">
            <i className="fas fa-arrow-right"></i> my favorite
          </Link>
          <Link to="#">
            <i className="fas fa-arrow-right"></i> terms of user
          </Link>
        </Box>

        <Box>
          <h3>extra links</h3>
          <Link to="#">
            <i className="fab fa-facebook-f"></i> facebook
          </Link>
          <Link to="#">
            <i className="fab fa-twitter"></i> twitter
          </Link>
          <Link to="#">
            <i className="fab fa-instagram"></i> instagram
          </Link>
          <Link to="#">
            <i className="fab fa-linkedin"></i> linkedin
          </Link>
          <Link to="#">
            <i className="fab fa-pinterest"></i> pinterest
          </Link>
        </Box>

        <Box>
          <h3>newsletter</h3>
          <p>subscribe for latest updates</p>
          <div>
            <Email type="email" name="" placeholder="enter your email" />
            <input type="submit" value="subscribe" className="btn" />
          </div>
        </Box>
      </BoxContainer>
    </Container>
  );
});
