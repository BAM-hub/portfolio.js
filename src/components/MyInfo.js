import React from "react";
import { PrimaryText, SecondaryText } from "./styles/Text.styled";
// import persona from "../assets/pair-programming 1.svg";
import {
  MyInfoContainer,
  // SVGContainer,
  TextContainer,
} from "./styles/MyInfo.styled";

const MyInfo = ({ theme }) => {
  return (
    <MyInfoContainer>
      <TextContainer>
        <h4>
          <SecondaryText theme={theme}>
            I'm Bshar Amin welcome to my protfolio.
          </SecondaryText>
        </h4>
      </TextContainer>
      <TextContainer>
        <h3>
          <PrimaryText theme={theme}>
            I’m a student at al-balqa applied university, I study CIS(Computer
            Information Systems). I live in Amman, Jordan, Marka.
          </PrimaryText>
        </h3>
      </TextContainer>
      {/* <SVGContainer src={persona} alt="persona" /> */}
    </MyInfoContainer>
  );
};

export default MyInfo;
