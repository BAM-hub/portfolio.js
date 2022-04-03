import styled from 'styled-components';

export const NavBarContainer = styled.div.attrs(props => ({
  color: props.color || 'grey'
}))`
  grid-column: span 2;
  width: 100%;
  height: 6vh;
  background: ${props => props.color};
  transition: background 200ms ease-in;
  /* border-bottom: 1px solid black; */
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
`;

export const Logo = styled.div`
  font-family: cursive;
  font-size: 1.8rem;
  /* margin: 0 1rem; */
  width: 30vw;
  display: flex;
  justify-content: center;
`;

export const Theme = styled.div`
  font-family: cursive;
  font-size: 1.8rem;
  margin: 0 1rem;
  width: 30vw;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const ThemeProvider = styled.div`
  width: 15vw;
  height: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: black;
  position: absolute;
  top: 4.4vh;
  > * {color: white; font-size: 16px;}
`;

export const ThemesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: .2rem;
`; 

export const Toggle = styled.div.attrs(props => ({
  theme: props.theme,
  toggleName: props.toggleName,
  color: props.color
}))`
  width: 6vw;
  height: 2.4vw;
  border-radius: 4rem;
  background: ${props => props.theme === props.toggleName ? props.color : 'grey'};
  position: relative;
  ::after {
    content: '';
    width: 2.2vw;
    height: 2.2vw;
    border-radius: 100%;
    background: white;
    position: absolute;
    top: .1vw;
    left: ${props => props.theme === props.toggleName ? '3.5vw' : '0.2vw'};
    transition: all 100ms ease-in;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  width: 70vw;
  display: flex;
  justify-content: space-around;

  :hover {
    cursor: pointer;
  }
`;

export const ListTtem = styled.li`
  position: relative;
  :hover > * {
    opacity: 1;
  }
`;

export const Lable = styled.div`
  position: absolute;
  opacity: 0;
  transition: opacity 100ms ease-in;
  left: 1.8rem;
  height: 1.6rem;
  top: 0;
  width: max-content;
  background: white;
  color: white;
  display: flexbox;
  align-items: center;
  padding: 0 .2rem;
  z-index: 2;
`;