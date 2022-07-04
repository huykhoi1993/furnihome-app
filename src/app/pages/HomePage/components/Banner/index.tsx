/**
 *
 * Banner
 *
 */
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Container, BannerItem } from './styled';

interface Props {}

export const Banner = memo((props: Props) => {
  return (
    <Container>
      <BannerItem>
        <img src="image/banner-1.jpg" alt="" />
        <div className="content">
          <span>limited offer</span>
          <h3>upto 50% off</h3>
          <Link to="#" className="btn">
            shop now
          </Link>
        </div>
      </BannerItem>

      <BannerItem>
        <img src="image/banner-2.jpg" alt="" />
        <div className="content">
          <span>limited offer</span>
          <h3>upto 50% off</h3>
          <Link to="#" className="btn">
            shop now
          </Link>
        </div>
      </BannerItem>

      <BannerItem>
        <img src="image/banner-3.jpg" alt="" />
        <div className="content">
          <span>limited offer</span>
          <h3>upto 50% off</h3>
          <Link to="#" className="btn">
            shop now
          </Link>
        </div>
      </BannerItem>
    </Container>
  );
});
