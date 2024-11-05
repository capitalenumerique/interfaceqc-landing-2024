// vendors
import React from 'react';

// styles
import {
  StyledHero,
  PageHeader,
  Logo,
  HeroTitle,
  HeroIntro,
  InfoWrapper,
  InfoItem,
  InfoDates,
  InfoText,
  InfoTitle,
  buttonStyle,
} from './Hero.styles';

// components
import Button from '../../../components/Landing/Button';
import Center from '../../../components/LayoutSections/Center';

const Hero = () => (
  <StyledHero>
    <PageHeader>
      <Logo>Interface</Logo>
      <Button
        tag='link'
        href='https://ti.to/cnum/interface-2025'
        target='_blank'
        rel='noopener noreferrer'
      >
        Participer
      </Button>
    </PageHeader>

    <Center maxWidth='900px' gutters='16px' withText>
      <HeroTitle>Participe à Interface</HeroTitle>

      <HeroIntro>
        Un événement fait par et pour la communauté numérique
        <br /> à partir de la Ville de Québec.
      </HeroIntro>

      <InfoWrapper>
        <InfoItem>
          <InfoDates>27 au 29 mai 2025</InfoDates>
          <a
            href='https://www.google.com/maps/place/84+Rue+Dalhousie,+Québec,+QC+G1K+8M5/@46.8165604,-71.2004492,17z/data=!3m1!4b1!4m5!3m4!1s0x4cb895e7bbc6a0fb:0x1ca117d2a8f16a27!8m2!3d46.8165604!4d-71.2004492'
            target='_blank'
            rel='noopener noreferrer'
          >
            <InfoTitle>Terminal de croisière - Port de Québec</InfoTitle>
          </a>
          <InfoText>
            Attends-toi à trois journées de conférences sur des sujets tels que
            le marketing, le design, le développement, l’intelligence
            artificielle, la technocréativité, les communications et des sujets
            innovants.
          </InfoText>
        </InfoItem>
      </InfoWrapper>

      <Button
        tag='link'
        href='https://ti.to/cnum/interface-2025'
        target='_blank'
        rel='noopener noreferrer'
        css={buttonStyle}
      >
        Participer
      </Button>
    </Center>
  </StyledHero>
);

export default Hero;
