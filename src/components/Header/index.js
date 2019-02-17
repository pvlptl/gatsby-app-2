import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';

const Header = () => (
  <Container>
    <UL>
      <LI><Link to="/">Home</Link></LI>
      <LI><Link to="/">Home</Link></LI>
      <LI><Link to="/">Home</Link></LI>
    </UL>
  </Container>
);

const Container = styled.header`
    padding: 22px;
    background: rebeccapurple;
`;

const UL = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

const LI = styled.li`
    a {
      color: white;
      text-decoration: none;
      margin: 0 10px;
      &:hover {
        color: gold;
      }
    }
`;

export default Header;