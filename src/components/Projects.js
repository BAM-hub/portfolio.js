import {
  ProjectContainer,
  Project,
  ImageContainer,
  HorizantalImage,
  VerticalImage,
  DropDownButton,
  DropDown,
  TechStack,
  Flex,
} from "./styles/Project.styled";
import { DownOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { PROJECTS_DATA } from "./projectsData";
import { AccentPointer, PrimaryText } from "./styles/Text.styled";
import { useState } from "react";

const Projects = ({ color, theme }) => {
  const [showInfo, setShowInfo] = useState({
    name: "",
    hight: 0,
  });

  return (
    <ProjectContainer theme={theme}>
      {PROJECTS_DATA.map((project, index) => (
        <Project key={index}>
          <ImageContainer>
            <HorizantalImage src={project.image} />
          </ImageContainer>
        </Project>
      ))}
    </ProjectContainer>
  );
};

export default Projects;
