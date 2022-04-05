import { useState } from "react";
import { 
  PrimaryText,
  MotionPrimaryText,
  MotionSecondaryText,
  AccentPointer,
  SecondaryText
} from "./styles/Text.styled";
import { TIMELINE_DATA } from './timelineData';
import { motion } from "framer-motion";
import { 
  DateContainer, 
  MotionTitle, 
  TimelineContainer, 
  YearInfoContainer,
  EmptyYearInfoContainer,
  Date,
  SkillTitle,
  ShowLessButton
} from "./styles/Timeline.styled";
import { FileUnknownOutlined } from "@ant-design/icons";

const Timeline = ({ color, theme }) => {
  const [selectedData, setData] = useState(TIMELINE_DATA[1]);
  const [isOpen, setIsOpen] = useState(false);
  const [skill, setSkill] = useState(0);

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
              <PrimaryText
                theme={theme}
              >{data.year}</PrimaryText> 
            </Date>
          ))
        }
      </DateContainer>
      {selectedData.data === 'none' ? (
        <EmptyYearInfoContainer theme={theme}>
          <PrimaryText>Nothing to Show.</PrimaryText>
          <FileUnknownOutlined />
        </EmptyYearInfoContainer>
      ) : 
      <YearInfoContainer theme={theme} >
        <MotionTitle 
          theme={theme}
          as={motion.div}
          layout
          transition={{layout:{duration: .3, type: "spring"}}}
        >
          {
            selectedData.data.projects.map((project, i) =>(
              <SkillTitle 
                key={i}
                onClick={()=> {
                  setSkill(i);
                  setIsOpen(true);
                }}
              >
                <AccentPointer color={color} />
                <motion.p layout >
                  {project.skillName}
                </motion.p>
            </SkillTitle>
            ))
          }

          {isOpen && <>
            <ShowLessButton onClick={() => setIsOpen(false)} theme={theme}>
              <SecondaryText>Show less</SecondaryText>
            </ShowLessButton>
            <MotionSecondaryText 
              as={motion.p}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: .7 }}
              transition={{ duration: .2 }}
              theme={theme}
              >{selectedData.data.projects[skill].description}</MotionSecondaryText>
            <MotionPrimaryText
              as={motion.p}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: .2 }}
              theme={theme}
            >{selectedData.data.skills.join(' | ')}</MotionPrimaryText>
          </>
          }
        </MotionTitle>
      </YearInfoContainer>
      }

    </TimelineContainer>
  );
};

export default Timeline;