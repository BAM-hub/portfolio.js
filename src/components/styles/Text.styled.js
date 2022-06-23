import styled from "styled-components";
import { motion } from "framer-motion";

export const SecondaryText = styled.p.attrs((props) => ({
  theme: props.theme,
}))`
  color: ${(props) => (props.theme === "dark" ? "white" : "black")};
  opacity: 0.66;
`;

export const PrimaryText = styled.p.attrs((props) => ({
  theme: props.theme,
}))`
  color: ${(props) => (props.theme === "dark" ? "white" : "black")};
`;

export const MotionPrimaryText = styled(motion.p).attrs((props) => ({
  theme: props.theme,
}))`
  color: ${(props) => (props.theme === "dark" ? "black" : "white")};
`;

export const MotionSecondaryText = styled(motion.p)`
  font-weight: 200;
`;

export const AccentPointer = styled.div.attrs((props) => ({
  color: props.color || "black",
}))`
  background: ${(props) => props.color};
  width: 0.25rem;
  height: 1rem;
`;
