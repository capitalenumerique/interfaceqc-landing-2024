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
  InfoTitleWrapper,
  InfoIcon,
  InfoTitle,
  buttonStyle,
} from './Hero.styles';

// components
import Button from '../../../components/Landing/Button';
import Center from '../../../components/LayoutSections/Center';
import Switcher from '../../../components/LayoutSections/Switcher';

// images
import vectorCalendar from '../../../images/landing/vectorCalendar.svg';
import vectorMapPin from '../../../images/landing/vectorMapPin.svg';

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

    <Center maxWidth='1200px' gutters='16px' withText>
      <HeroTitle>
        Participe à<br /> Interface
      </HeroTitle>

      <HeroIntro>
        Un événement fait par et pour la communauté numérique, à partir de la
        Ville de Québec.
      </HeroIntro>

      <Switcher threshold='768px' space='1.5rem' limit={2}>
        <InfoWrapper>
          <InfoItem>
            <InfoTitleWrapper>
              <a
                href='https://www.google.com/maps/place/84+Rue+Dalhousie,+Québec,+QC+G1K+8M5/@46.8165604,-71.2004492,17z/data=!3m1!4b1!4m5!3m4!1s0x4cb895e7bbc6a0fb:0x1ca117d2a8f16a27!8m2!3d46.8165604!4d-71.2004492'
                target='_blank'
                rel='noopener noreferrer'
              >
                <InfoIcon
                  src={vectorMapPin}
                  alt='Terminal de croisière — Port de Québec'
                />
                <InfoTitle>Terminal de croisière - Port de Québec</InfoTitle>
              </a>
            </InfoTitleWrapper>
            <p>
              Attends-toi à trois journées de conférences sur des sujets tels
              que le marketing, le design, le développement, l’intelligence
              artificielle, la technocréativité, les communications et des
              sujets innovants.
            </p>
          </InfoItem>

          <InfoItem>
            <InfoTitleWrapper>
              <InfoIcon src={vectorCalendar} alt='' />
              <InfoTitle>27 au 29 mai 2025</InfoTitle>
            </InfoTitleWrapper>
            <p>
              En plus des conférences, tu vivras des moments festifs qui te
              permettront de faire des rencontres qui marqueront ton parcours
              professionnel. Ça, on te le promet!
            </p>
          </InfoItem>
        </InfoWrapper>
      </Switcher>
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
