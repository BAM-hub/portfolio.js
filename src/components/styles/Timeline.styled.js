import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TimelineContainer = styled.div`
  height: 96vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem;
`;

export const DateContainer = styled.div`
  display: flex;
  width: 1fr;
  justify-content: space-around;
`;

export const Date = styled.div.attrs(props => ({
    selected: props.selected
}))`
  width: calc(1rem * 3);
  border-bottom: 2px solid black;
  border-color: ${props => props.selected ? 'white' : 'black'};
`;

export const YearInfoContainer = styled.div`
  
`;

export const MotionTitle = styled(motion.div)`
  background: white;
  padding: 1rem 3rem;
  > {
    line-height: 150%;
  }
`; 