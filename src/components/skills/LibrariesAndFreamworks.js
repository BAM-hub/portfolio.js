import {
  Divider,
  SkillSectionContainer,
  FremworksContainer,
  Freamwork,
} from "../styles/Skills.styled";
import { PrimaryText, SecondaryText } from "../styles/Text.styled";
import { motion } from "framer-motion";
import { FREAMWORK_DATA } from "../data/timelineData";
import useIsInViewport from "../../customHooks/useIsInViewport";
import { useRef } from "react";

const LibrariesAndFreamworks = ({ theme }) => {
  const ref1 = useRef(null);
  useIsInViewport(ref1);

  const isInViewport1 = useIsInViewport(ref1);

  return (
    <>
      <Divider theme={theme}>
        <PrimaryText>Libraries | Freamworks</PrimaryText>
      </Divider>
      <SkillSectionContainer ref={ref1}>
        <FremworksContainer
          as={motion.div}
          layout
          transition={{ layout: { duration: 0.4, type: "spring" } }}
        >
          {isInViewport1 &&
            FREAMWORK_DATA.map((data, i) => (
              <Freamwork
                key={i}
                as={motion.div}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.99 }}
                transition={{ duration: 0.3 }}
              >
                <SecondaryText>{data.type}</SecondaryText>
                <PrimaryText>{data.name}</PrimaryText>
              </Freamwork>
            ))}
        </FremworksContainer>
      </SkillSectionContainer>
    </>
  );
};

export default LibrariesAndFreamworks;
