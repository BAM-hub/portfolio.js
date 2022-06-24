import {
  GenralSkills,
  Skill,
  ProgressBar,
  Percentage,
  SkillNameContainer,
  Divider,
  SkillSectionContainer,
} from "../styles/Skills.styled";
import { AccentPointer, PrimaryText } from "../styles/Text.styled";
import { motion } from "framer-motion";
import { SKILL_DATA } from "../data/timelineData";
import { useRef } from "react";
import useIsInViewport from "../../customHooks/useIsInViewport";

const LanguagesPercentage = ({ theme, color }) => {
  const ref1 = useRef(null);

  const isInViewport1 = useIsInViewport(ref1);

  return (
    <>
      <Divider theme={theme}>
        <PrimaryText>Programming Languages</PrimaryText>
      </Divider>
      <SkillSectionContainer ref={ref1}>
        <GenralSkills theme={theme}>
          {isInViewport1 &&
            SKILL_DATA.map((skill, i) => (
              <Skill
                as={motion.div}
                layout
                key={i}
                transition={{ layout: { duration: 0.3, type: "spring" } }}
              >
                <AccentPointer color={color} />
                <SkillNameContainer>
                  <PrimaryText theme={theme === "dark" ? "light" : "dark"}>
                    {skill.skillName}
                  </PrimaryText>
                </SkillNameContainer>
                <ProgressBar
                  color={color}
                  fill={skill.percentage}
                  theme={theme}
                />
                <Percentage>
                  <PrimaryText theme={theme === "dark" ? "light" : "dark"}>
                    {skill.percentage}%
                  </PrimaryText>
                </Percentage>
              </Skill>
            ))}
        </GenralSkills>
      </SkillSectionContainer>
    </>
  );
};

export default LanguagesPercentage;
