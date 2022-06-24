import { SkillsContainer } from "../styles/Skills.styled";
import LanguagesPercentage from "./LanguagesPercentage";
import LibrariesAndFreamworks from "./LibrariesAndFreamworks";

const Skills = ({ theme, color }) => {
  return (
    <SkillsContainer>
      <LanguagesPercentage theme={theme} color={color} />
      <LibrariesAndFreamworks theme={theme} />
    </SkillsContainer>
  );
};

export default Skills;
