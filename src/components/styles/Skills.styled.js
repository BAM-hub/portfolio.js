import styled from "styled-components";
import { motion } from "framer-motion";

export const SkillsContainer = styled.div`
  height: 108vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;

export const SkillSectionContainer = styled.div`
  height: 40vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const GenralSkills = styled.div.attrs((props) => ({
  theme: props.theme,
}))`
  height: 40vh;
  width: 80%;
  background-color: ${(props) => (props.theme === "dark" ? "white" : "black")};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0.6rem;
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

export const ProgressBar = styled.div.attrs((props) => ({
  fill: props.fill,
  color: props.color,
  theme: props.theme,
}))`
  width: 60%;
  height: 2rem;
  background: ${(props) => (props.theme === "light" ? "black" : "white")};
  position: relative;
  ::after {
    content: "";
    height: 2rem;
    background: ${(props) => props.color};
    height: 100%;
    width: ${(props) => props.fill}%;
    animation-name: width-animate;
    animation-duration: 300ms;
    position: absolute;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
    @keyframes width-animate {
      from {
        width: 0%;
      }
    }
  }
`;

export const Percentage = styled.div`
  width: 2rem;
  height: 1rem;
`;

export const Divider = styled.div.attrs((props) => ({
  theme: props.theme,
}))`
  width: 100%;
  height: 0.1rem;
  background: ${(props) => (props.theme === "dark" ? "white" : "black")};
  display: flex;
  align-items: center;
  justify-content: center;
  > p {
    background: ${(props) => (props.theme === "dark" ? "#2e2d2c" : "white")};
    padding: 0 0.4rem;
    color: ${(props) => (props.theme === "dark" ? "white" : "black")};
  }
  :hover {
    cursor: pointer;
    border: 1px solid black;
    padding: 0.2rem;
  }
`;

export const FremworksContainer = styled(motion.div).attrs((props) => ({
  hight: props.hight || 0,
}))`
  max-height: 94%;
  width: 80%;
  background: white;
  opacity: 0.99;
  overflow: scroll;
  overflow-x: hidden;
  display: flex;
  padding: 0.2rem;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1rem;

  ::-webkit-scrollbar {
    background: black;
    opacity: 0.99;
    border-radius: 0.4rem;
    width: 0.4rem;
  }
  ::-webkit-scrollbar-track {
    border-radius: 0.4rem;
    background: grey;
    opacity: 0.7;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 0.4rem;
    background-color: black;
  }
`;

export const Freamwork = styled(motion.div)`
  width: 10rem;
  height: 4rem;
  border-radius: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0.2rem;
  border: 1px solid black;
  opacity: 0.99;
  background: black;
  > p {
    color: white;
    font-size: 0.9rem;
  }
  > p:nth-child(1) {
    opacity: 0.7;
  }
`;
