/**
 *
 * BlogPage
 *
 */
import { nanoid } from '@reduxjs/toolkit';
import { Container } from 'app/components/Footer/styled';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Title } from 'styles/global-styles';
import { BlogList, BlogItem } from './styled';

interface Props {}

const BLOGS = [
  {
    id: nanoid(),
    image: 'image/blog-1.jpg',
    title: 'blog title goes here...',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, harum.',
    created: '21st may, 2021',
    author: 'by admin',
  },
  {
    id: nanoid(),
    image: 'image/blog-2.jpg',
    title: 'blog title goes here...',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, harum.',
    created: '21st may, 2021',
    author: 'by admin',
  },
  {
    id: nanoid(),
    image: 'image/blog-3.jpg',
    title: 'blog title goes here...',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, harum.',
    created: '21st may, 2021',
    author: 'by admin',
  },
  {
    id: nanoid(),
    image: 'image/blog-4.jpg',
    title: 'blog title goes here...',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, harum.',
    created: '21st may, 2021',
    author: 'by admin',
  },
  {
    id: nanoid(),
    image: 'image/blog-5.jpg',
    title: 'blog title goes here...',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, harum.',
    created: '21st may, 2021',
    author: 'by admin',
  },
  {
    id: nanoid(),
    image: 'image/blog-6.jpg',
    title: 'blog title goes here...',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, harum.',
    created: '21st may, 2021',
    author: 'by admin',
  },
];

export const BlogPage = memo((props: Props) => {
  return (
    <Container>
      <Title>
        <span>our blogs</span> <Link to="">view all {'>>'}</Link>
      </Title>

      <BlogList>
        {BLOGS.map(blog => (
          <BlogItem className="box" key={blog.id}>
            <div className="image">
              <img src={blog.image} alt="" />
            </div>
            <div className="content">
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <Link to="" className="btn">
                read more
              </Link>
              <div className="icons">
                <Link to="">
                  <i className="fas fa-calendar"></i> {blog.created}
                </Link>
                <Link to="">
                  <i className="fas fa-user"></i> {blog.author}
                </Link>
              </div>
            </div>
          </BlogItem>
        ))}
      </BlogList>
    </Container>
  );
});
