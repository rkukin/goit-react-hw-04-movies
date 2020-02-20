import React from 'react';
import styled from "styled-components";
import Appbar from './AppBar';

const Wrapper = styled.div`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-right: 12px;
  padding-left: 12px
`;

export default function Layout ({ children }) {
  return(
    <Wrapper>
      <Appbar />
      {children}
    </Wrapper>
  )
}
