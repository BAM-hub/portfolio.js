import React, { useState } from 'react';
import { SecondaryText } from '../components/styles/Text.styled';
import { 
  Lable, 
  Logo, 
  NavBarContainer, 
  NavList, 
  ListTtem, 
  Theme,
  ThemeProvider,
  ThemesContainer,
  Toggle
} from './styles/NavBar.styled';
import { 
  UserOutlined,
  TableOutlined,
  UnorderedListOutlined,
  FundProjectionScreenOutlined,
  BulbOutlined,
} from '@ant-design/icons';

const NavBar = ({ color, theme, setTheme }) => {
  const [changeTheme, setChangeTheme] = useState(false);

  return (
    <NavBarContainer color={color}>
      <Logo>BAM</Logo>
      <NavList>
        <ListTtem>
          <UserOutlined style={{fontSize: '1.5rem'}} />
          <Lable>
            <SecondaryText>Info</SecondaryText>
          </Lable>
        </ListTtem>

        <ListTtem>
          <TableOutlined style={{fontSize: '1.5rem'}} />
          <Lable>
            <SecondaryText>Time Line</SecondaryText>
          </Lable>
        </ListTtem>
        <ListTtem>
          <UnorderedListOutlined style={{fontSize: '1.5rem'}} />
          <Lable>
            <SecondaryText>Skills</SecondaryText>
          </Lable>
        </ListTtem>
        <ListTtem>
          <FundProjectionScreenOutlined style={{fontSize: '1.5rem'}} />
          <Lable>
            <SecondaryText>Projects</SecondaryText>
          </Lable>
        </ListTtem>
      </NavList>

      <Theme>
          <BulbOutlined 
            onClick={() => setChangeTheme(true)}
          />
          {changeTheme && (
            <ThemeProvider>
              <ThemesContainer>
                <p>Dark</p>
                <Toggle 
                  theme={theme} 
                  toggleName='dark' 
                  color={color}
                  onClick={() => {
                    setTheme('dark');
                    setTimeout(() => {setChangeTheme(false)}, 200);
                  }}
                />
              </ThemesContainer>
              <ThemesContainer>
                <p>Light</p>
                <Toggle 
                  theme={theme} 
                  toggleName='light'
                  color={color} 
                  onClick={() => {
                    setTheme('light');
                    setTimeout(() => {setChangeTheme(false)}, 200);
                  }}
                />
              </ThemesContainer>
            </ThemeProvider>
          )}
      </Theme>
    </NavBarContainer>
  );
};

export default NavBar;