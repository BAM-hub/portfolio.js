import { useState } from "react";
import { PrimaryText, SecondaryText } from "./styles/Text.styled";
import { TIMELINE_DATA } from './timelineData';
import { motion } from "framer-motion";
import { 
  DateContainer, 
  MotionTitle, 
  TimelineContainer, 
  YearInfoContainer,
  Date
} from "./styles/Timeline.styled";
import { FileUnknownOutlined } from "@ant-design/icons";

const Timeline = () => {
  const [selectedData, setData] = useState(TIMELINE_DATA[1]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <TimelineContainer>
      <DateContainer>
        {
          TIMELINE_DATA.map((data, i) => (
            <Date 
              key={i}
              selected={data.year === selectedData.year}
              onClick={() => setData(TIMELINE_DATA[i])}
              >
              <PrimaryText>{data.year}</PrimaryText> 
            </Date>
          ))
        }
      </DateContainer>
      {selectedData.data === 'none' ? (
        <>
          <PrimaryText>Nothing to Show.</PrimaryText>
          <FileUnknownOutlined />
        </>
      ) : 
      <YearInfoContainer>
        <MotionTitle 
          as={motion.div}
          onClick={() => setIsOpen(!isOpen)}
          layout
        >
          <motion.p layout>{selectedData.data.projects[0].skillName}</motion.p>
          {isOpen && <>
            <PrimaryText>{selectedData.data.projects[0].description}</PrimaryText>
            <SecondaryText>{selectedData.data.skills}</SecondaryText>
          </>
          }
        </MotionTitle>
      </YearInfoContainer>
      }

    </TimelineContainer>
  );
};

export default Timeline;