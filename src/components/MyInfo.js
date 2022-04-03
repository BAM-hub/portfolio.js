import React from 'react';
import { PrimaryText, SecondaryText } from './styles/Text.styled';
import persona from '../assets/pair-programming 1.svg';
import { 
  MyInfoContainer,
  SVGContainer, 
  TextContainer
} from './styles/MyInfo.styled';

const MyInfo = () => {
  return (
    <MyInfoContainer>
      <TextContainer>
        <h2>
            <PrimaryText>
                I'm Bshar Amin welcome to my protfolio.
            </PrimaryText>
        </h2>
        <h4>
            <SecondaryText>
            I’m a student at al-balqa applied university, I study CIS(Computer Information Systems).
            I live in Amman, Jordan, Marka.
            </SecondaryText>
        </h4>
      </TextContainer>
      <SVGContainer src={persona} alt="persona" />
    </MyInfoContainer>
  );
};

export default MyInfo;