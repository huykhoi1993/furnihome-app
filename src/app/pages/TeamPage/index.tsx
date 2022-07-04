/**
 *
 * TeamPage
 *
 */
import { nanoid } from '@reduxjs/toolkit';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Title } from 'styles/global-styles';
import { Container, MemberList, MemberItem } from './styled';

interface Props {}

const MEMBERS = [
  {
    id: nanoid(),
    avatar: 'image/team-1.jpg',
    name: 'john deo',
    role: 'designer',
  },
  {
    id: nanoid(),
    avatar: 'image/team-2.jpg',
    name: 'john deo',
    role: 'designer',
  },
  {
    id: nanoid(),
    avatar: 'image/team-3.jpg',
    name: 'john deo',
    role: 'designer',
  },
  {
    id: nanoid(),
    avatar: 'image/team-4.jpg',
    name: 'john deo',
    role: 'designer',
  },
  {
    id: nanoid(),
    avatar: 'image/team-5.jpg',
    name: 'john deo',
    role: 'designer',
  },
  {
    id: nanoid(),
    avatar: 'image/team-6.jpg',
    name: 'john deo',
    role: 'designer',
  },
];

export const TeamPage = memo((props: Props) => {
  return (
    <Container className="team">
      <Title>
        <span>our team</span> <Link to="">view all {'>>'}</Link>
      </Title>

      <MemberList>
        {MEMBERS.map(member => (
          <MemberItem className="box" key={member.id}>
            <div className="share">
              <Link to="" className="fab fa-facebook-f"></Link>
              <Link to="" className="fab fa-twitter"></Link>
              <Link to="" className="fab fa-pinterest"></Link>
              <Link to="" className="fab fa-instagram"></Link>
            </div>
            <div className="image">
              <img src={member.avatar} alt="" />
            </div>
            <div className="user">
              <h3>{member.name}</h3>
              <span>{member.role}</span>
            </div>
          </MemberItem>
        ))}
      </MemberList>
    </Container>
  );
});
