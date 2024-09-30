// vendors
import React from 'react';

// styles
import {
  BlocksWrapper,
  ContactWrapper,
  CNLogo,
  Credits,
  Logo,
  SocialList,
  NewsletterWrapper,
  NewsletterTitle,
  NewsletterText,
} from './Footer.styles';

// components
import Button from '../../../components/Landing/Button';
import Switcher from '../../../components/LayoutSections/Switcher';

// images
import vectorFacebook from '../../../images/landing/facebook.svg';
import vectorLinkedIn from '../../../images/landing/linkedin.svg';
import vectorInstagram from '../../../images/landing/instagram.svg';
import imgCapitaleNumerique from '../../../images/landing/imgCapitaleNumerique.png';

const Footer = () => (
  <footer>
    <Switcher threshold='1024px' space='0' limit={2}>
      <BlocksWrapper>
        <ContactWrapper>
          <Logo>Interface Québec</Logo>
          <a
            href='mailto:info@interfaceqc.com'
            target='_blank'
            rel='noopener noreferrer'
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

          <p>Produit par</p>
          <CNLogo
            href='https://capitalenumerique.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={imgCapitaleNumerique} alt='Capitale Numérique' />
          </CNLogo>

          <Credits>
            <a
              href='https://capitalenumerique.com/politique-de-confidentialite/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Politique de confidentialité
            </a>{' '}
            | © Interface Québec 2024. Tous droits réservés.
          </Credits>
        </ContactWrapper>

        <NewsletterWrapper>
          <NewsletterTitle>Infolettre</NewsletterTitle>
          <NewsletterText>
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
  </footer>
);

export default Footer;
