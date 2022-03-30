import React from 'react';
import { Logo, NavBarContainer, NavList } from './styles/NavBar.styled';
import { UserOutlined } from '@ant-design/icons';

const NavBar = ({ color }) => {
  return (
    <NavBarContainer color={color}>
      <Logo>BAM</Logo>
      <NavList>
        <li>
          <UserOutlined />
        </li>
      </NavList>
    </NavBarContainer>
  );
};

export default NavBar;