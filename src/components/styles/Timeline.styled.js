import styled from "styled-components";
import { motion } from "framer-motion";

export const TimelineContainer = styled.div`
  height: 96vh;
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  gap: 2rem;
  padding: 1rem;
`;

export const DateContainer = styled.div.attrs((props) => ({
  theme: props.theme,
}))`
  display: flex;
  width: 1fr;
  justify-content: space-around;
`;

export const Date = styled.div.attrs((props) => ({
  selected: props.selected,
}))`
  width: calc(1rem * 3);
  border-bottom: 2px solid black;
  border-color: ${(props) => (props.selected ? "white" : "black")};
  :hover {
    cursor: pointer;
  }
`;

export const YearInfoContainer = styled.div.attrs((props) => ({
  theme: props.theme,
}))`
  height: 60vh;
  border: 1px solid ${(props) => (props.theme === "dark" ? "white" : "black")};
  width: 80%;
  margin: 0 auto;
  padding: 1rem;
`;

export const MotionTitle = styled(motion.div).attrs((props) => ({
  theme: props.theme,
}))`
  background: ${(props) => (props.theme === "dark" ? "white" : "black")};
  width: 100%;
  padding: 1rem 3rem;
  overflow: hidden;
  position: relative;
  :hover {
    cursor: pointer;
  }
  > * {
    line-height: 120%;
    color: ${(props) => (props.theme === "dark" ? "black" : "white")};
  }
`;

export const SkillTitle = styled(motion.div)`
  display: flex;
  gap: 1rem;
  :hover {
    opacity: 0.8;
  }
`;

export const ShowLessButton = styled.div.attrs((props) => ({
  theme: props.theme,
}))`
  width: fit-content;
  height: 2rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  > * {
    color: ${(props) => (props.theme === "dark" ? "#5A5A5A" : "#929292")};
  }
`;
