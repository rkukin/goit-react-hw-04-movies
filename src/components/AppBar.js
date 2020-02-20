import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const Header = styled.header`
max-height: 200px;
box-shadow: 0 3px 6px 0 rgba(0,0,0,.1), 0 3px 6px 0 rgba(0,0,0,.14);
height: 30px
`;

export default function AppBar() {
return(
  <Header>
    <Navigation/>
  </Header>
);
}