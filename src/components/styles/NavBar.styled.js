import styled from 'styled-components';

export const NavBarContainer = styled.div.attrs(props => ({
  color: props.color || 'grey'
}))`
  width: 100%;
  height: 6vh;
  background: ${props => props.color};
  transition: background 200ms ease-in;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  font-family: cursive;
  font-size: 1.8rem;
  margin: 0 1rem;
  width: 30vw;
`;

export const NavList = styled.ul`
  list-style: none;
  width: 70vw;

  :hover {
    cursor: pointer;
    background: 'grey';
  }
`;