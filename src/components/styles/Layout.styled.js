import styled from 'styled-components';


export const Layout = styled.div.attrs(props => ({
  theme: props.theme
}))`
  background: ${props => props.theme === 'light' 
  ? 'white' : '#2e2d2c' };
  transition: background 100ms ease-in;
  display: grid;
  /* gap: 1rem; */
  /* column-gap: 1rem; */
  grid-template-columns: 30vw 1fr;
`;