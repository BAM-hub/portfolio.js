import styled from "styled-components";

export const AboutContainer = styled.div.attrs(props =>({
  color: props.color || 'white'
}))`
  grid-row: span 4;
  border-top: 1px solid black;
  background: ${props=> props.color};
  transition: background 200ms ease-in;
  /* width: 30vw; */
  height: 94vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
  position: relative;
  position: sticky;
  top: 6vh;
  left: 0;
`;

export const ColorChange = styled.div`
  position: absolute;
  top: 1rem;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.1rem;
  height: 1.8rem;
  background: black;
  > * {
    font-size: 1.5rem;
    color: white;
  }
  :hover {
    cursor: pointer;
    transform: translateX(-2.1rem);
    transition: 100ms ease-in;
    
    ::after{
      transform: 100ms ease-in;
      content: '';
      width: 2.1rem;
      height: 1.8rem;
      top: 0rem;
      right: 0;
      position: absolute;
      background: black;
      transform: translateX(2.1rem);
    }
  }
`;

export const ColorPalette = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 20vw;
  height: 10vw;
  background: black;
  :hover {
    transform: translateY(-1.8rem);
    transition: 100ms ease-in-out;
  }
`;

export const Color = styled.div.attrs(props => ({
  color: props.color
}))`
  width: 5vw;
  height: 5vw;
  background: ${props => props.color};
  
  :hover {
    border: 1px solid white;
  }
`;

export const ImageContainer = styled.div`
  width: 20vw;
  height: 25vw;
  background-size: cover;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const HorizontalList = styled.ul`
  list-style: none;
  display: flex;
  width: 80%;
  justify-content: space-around;
  > :hover{
    cursor: pointer;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 30vh;
`;
