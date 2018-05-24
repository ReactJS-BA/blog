import React from 'react';
import styled from 'styled-components';
const Header = styled.header`
  background: #20232a;
  overflow: hidden;
  height: 65px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  p{
    margin: 0;
  }
`
const HeaderComponent = ({}) => (
  <Header>
    <p>ReactJS Ba</p>
  </Header>
);

export default HeaderComponent;
