import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectContainer = styled.div`
  height: 180vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: white;
`;

export const Project = styled.div.attrs((props) => ({
  theme: props.theme,
}))`
  border-radius: 2rem;
  overflow: hidden;
  height: 60vh;
  width: 80%;
  /* background: ${(props) =>
    props.theme === "light" ? "white" : "#2e2d2c"}; */
  background: ${(props) => (props.theme === "light" ? "#2e2d2c" : "white")};
`;

export const TechStack = styled.div`
  width: 25vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 1px solid black;
`;

export const Flex = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 0.5rem;
`;

export const ImageContainer = styled.div`
  width: 50%;
  margin: 1rem 1rem;
  background-size: cover;
  background-position: center;
  /* display: flex;
  align-items: center; */
  /* padding: 2rem 0; */
`;

export const HorizantalImage = styled.img`
  width: 100%;
  height: 100%;
`;
