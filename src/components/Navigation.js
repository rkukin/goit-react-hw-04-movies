import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import routes from "../routes";

const LinksList = styled.ul`
list-style: none;
display: flex;
flex-direction: row;
width: 300px;
justify-content: space-around;
`;

const LinkListItem = styled.li`

`;

const NavigationLink = styled(NavLink)`
font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
font-weight: 600;
font-size: 20px;
color: blue;
text-decoration: none;
   &.active {
    color: palevioletred;
  }
`;

export default function Navigation() {

  return (
    <LinksList>
      <LinkListItem>
        <NavigationLink to={routes.HOME} exact>
          Home
        </NavigationLink>
      </LinkListItem>
      <LinkListItem>
        <NavigationLink to={routes.MOVIES}>
          Movies
        </NavigationLink>
      </LinkListItem>
    </LinksList>
  );
};