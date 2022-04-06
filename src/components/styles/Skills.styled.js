import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SkillsContainer = styled.div`
  height: 94vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid white;
`;

export const SkillSectionContainer = styled.div`
  height: 40vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const GenralSkills = styled.div.attrs(props => ({
  theme: props.theme
}))`
  height: 40vh;
  width: 80%;
  background-color: ${props => props.theme === 'dark' ? 'white' : 'black'};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: .6rem;
`;

export const Skill = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const SkillNameContainer = styled.div`
  width: 20%;
`;

export const ProgressBar = styled.div.attrs(props => ({
  fill: props.fill,
  color: props.color,
  theme: props.theme
}))`
  width: 60%;
  height: 2rem;
  background: ${props => props.theme === 'light' ? 'black' : 'white'};
  position: relative;
  ::after {
    content: '';
    height: 2rem;
    background: ${props => props.color};
    height: 100%;
    width: ${props => props.fill}%;
    animation-name: width-animate;
    animation-duration: 300ms;
    position: absolute;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
    @keyframes width-animate {
      from { width: 0%; }
    }
  }
`;

export const Percentage = styled.div`
  width: 2rem;
  height: 1rem;
`; 

export const Divider = styled.div.attrs(props => ({
  theme: props.theme
}))`
  width: 100%;
  height: .1rem;
  background: ${props => props.theme === 'dark' ? 'white' : 'black'};
  display: flex;
  align-items: center;
  justify-content: center;
  > p {
    background: ${props => props.theme === 'dark' ? '#2e2d2c' : 'white'};
    padding: 0 .4rem;
    color: ${props => props.theme === 'dark' ? 'white' : 'black'};
  }
  :hover {
    cursor: pointer;
    border: 1px solid black;
    padding: .2rem;
  }
`;
