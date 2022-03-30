import React from 'react';
import avatar from '../../src/assets/avatar.jpg';
import { 
  GithubOutlined,
  MailOutlined,
  FacebookOutlined,
  FormatPainterOutlined
} from '@ant-design/icons';
import { 
  AboutContainer,
  ImageContainer,
  Image,
  HorizontalList,
  ColorChange,
  ColorPalette,
  Color,
  ContactContainer
} from './styles/AboutContainer.styled';
import { PrimaryText } from './styles/Text.styled';
import { useState } from 'react';
 
const accentColors = [
  {
    id: 1,
    color: '#00B894'
  },
  {
    id: 2,
    color: '#55EFC4'
  },
  {
    id: 3,
    color: '#81ECEC'
  },
  {
    id: 4,
    color: '#00CEC9'
  },
  {
    id: 5,
    color: '#FF7675'
  },
  {
    id: 6,
    color: '#FDCB6E'
  },
  {
    id: 7,
    color: '#74B9FF'
  },
  {
    id: 8,
    color: '#A29BFE'
  }
];

const About = ({ color, setColor }) => {
  const [changeColor, setChangeColor] = useState(false);


  return (
    <AboutContainer
      color={color}
    >
      <ColorChange 
        onClick={() => setChangeColor(!changeColor)}
      >
        <FormatPainterOutlined />
      </ColorChange>
    	{ changeColor && (
        <ColorPalette>
          {accentColors.map(color => (
            <Color 
              key={color.id} 
              color={color.color} 
              onClick={() => {
                setColor(color.color)
                setChangeColor(false);
              }}
            />
          ))}
        </ColorPalette>
      ) }
      <ImageContainer className="image-container">
        <Image src={avatar} alt="avatar" />
      </ImageContainer>
      <h2>
        <PrimaryText>Bshar Amin</PrimaryText>
      </h2>
      
      <HorizontalList>
        <li>
          <GithubOutlined style={{fontSize: '1.5rem'}} />
        </li>
        <li>
          <MailOutlined style={{fontSize: '1.5rem'}} />
        </li>
        <li>
          <FacebookOutlined style={{fontSize: '1.5rem'}} />
        </li>
      </HorizontalList>
      
      <ContactContainer>
        <PrimaryText>Status: Study</PrimaryText>
        <PrimaryText>Address: Amman Marka</PrimaryText>
        <PrimaryText>Phone: 0788534421</PrimaryText>
      </ContactContainer>
    </AboutContainer>
  )
}


export default About;