// vendors
import React from 'react';
import { css } from 'styled-components';

// styles
import {
  FooterWrapper,
  BlocksWrapper,
  ContactWrapper,
  // CNLogo,
  Credits,
  Logo,
  SocialList,
  NewsletterWrapper,
  NewsletterTitle,
  NewsletterText,
} from './Footer.styles';

// components
import Button from '../../../components/Landing/Button';
import Center from '../../../components/LayoutSections/Center';
import Switcher from '../../../components/LayoutSections/Switcher';

// images
import vectorFacebook from '../../../images/landing/facebook.svg';
import vectorLinkedIn from '../../../images/landing/linkedin.svg';
import vectorInstagram from '../../../images/landing/instagram.svg';
// import imgCapitaleNumerique from '../../../images/landing/imgCapitaleNumerique.png';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import breakpoints from '../../../styles/breakpoints';
import { fontWeights } from '../../../styles/typography';

const blockTextStyle = css`
  font-weight: ${fontWeights.medium};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [16, 16], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [18, 18], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [20, 24], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

const Footer = () => (
  <FooterWrapper>
    <Center maxWidth='1280px' gutters='16px' withText>
      <Switcher
        threshold='1024px'
        space='calc(var(--container-gutter) * 2)'
        limit={2}
      >
        <BlocksWrapper>
          <ContactWrapper>
            <Logo>Interface</Logo>
            <a
              href='mailto:info@interfaceqc.com'
              target='_blank'
              rel='noopener noreferrer'
              css={blockTextStyle}
            >
              info@interfaceqc.com
            </a>
            <SocialList>
              <li>
                <a
                  href='https://www.facebook.com/interfaceqc/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={vectorFacebook} alt='Facebook' />
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/company/interfaceqc/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={vectorLinkedIn} alt='LinkedIn' />
                </a>
              </li>
              <li>
                <a
                  href='https://www.instagram.com/interfaceqc'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={vectorInstagram} alt='Instagram' />
                </a>
              </li>
            </SocialList>

            {/* <p>Produit par</p>
            <CNLogo
              href='https://capitalenumerique.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={imgCapitaleNumerique} alt='Capitale Numérique' />
            </CNLogo> */}
          </ContactWrapper>

          <NewsletterWrapper>
            <NewsletterTitle>Infolettre</NewsletterTitle>
            <NewsletterText css={blockTextStyle}>
              Pour tout savoir, l’infolettre est le secret le moins bien gardé.
            </NewsletterText>

            <Button
              tag='link'
              href='https://share.hsforms.com/1w3MoF6_0TZuy05OgeZIWYQruljq'
              target='_blank'
              rel='noopener noreferrer'
              css='flex-shrink: 0;'
            >
              Je m’abonne
            </Button>
          </NewsletterWrapper>
        </BlocksWrapper>
      </Switcher>
      <Credits>
        <a
          href='https://capitalenumerique.com/politique-de-confidentialite/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Politique de confidentialité
        </a>{' '}
        | © Interface - Québec 2024. Tous droits réservés.
      </Credits>
    </Center>
  </FooterWrapper>
);

export default Footer;
