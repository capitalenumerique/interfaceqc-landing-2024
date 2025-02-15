// vendors
import React from 'react';

// styles
import {
  PartnersSection,
  PartnersTitle,
  PartnersThanks,
  Grid,
  GridItem,
  PartnersIntro,
} from './Partners.styles';

// components
import Button from '../../../components/Landing/Button';
import Center from '../../../components/LayoutSections/Center';

// images
import logoQuebecCite from '../../../images/logoPartners/landing/logo-quebeccite.png';
import logoLibeo from '../../../images/logoPartners/landing/logo-libeo.svg';
import logoPlg from '../../../images/logoPartners/landing/logo-plg.png';
import logoBaseline from '../../../images/logoPartners/landing/logo-baseline.svg';
import logoVooban from '../../../images/logoPartners/landing/logo-vooban.svg';
import logoDiapason from '../../../images/logoPartners/landing/logo-diapason.png';
import logoIa from '../../../images/logoPartners/landing/logo-ia.svg';
import logofriends from '../../../images/logoPartners/landing/logo-&friends.svg';
import logoConsole from '../../../images/logoPartners/landing/logo-console.png';
import logoInfobref from '../../../images/logoPartners/landing/logo-infobref.png';

const Partners = () => {
  const partners = [
    {
      src: logoQuebecCite,
      alt: 'Destination Québec Cité',
      url: 'https://www.quebec-cite.com/fr',
    },
    {
      src: logoLibeo,
      alt: 'Libéo',
      url: 'https://libeo.com/',
    },
    {
      src: logoPlg,
      alt: 'PLG',
      url: 'https://plgnumerique.com/',
    },
    {
      src: logoBaseline,
      alt: 'Baseline',
      url: 'https://baseline.quebec/',
    },
    {
      src: logoVooban,
      alt: 'Vooban',
      url: 'https://vooban.com/',
    },
    {
      src: logoDiapason,
      alt: 'Collectif Diapason',
      url: 'https://collectifdiapason.com/',
    },
    {
      src: logoIa,
      alt: 'iA Groupe financier',
      url: 'https://ia.ca/',
    },
    {
      src: logofriends,
      alt: 'And Friends',
      url: 'https://andfriends.ca/',
    },
    {
      src: logoConsole,
      alt: 'La Console',
      url: 'https://www.laconsole.org/',
    },
    {
      src: logoInfobref,
      alt: 'InfoBref PRO Techno',
      url: 'https://infobref.com/cnum/',
    },
  ];

  return (
    <PartnersSection>
      <Center maxWidth='1000px' gutters='16px' withText>
        <PartnersTitle>Partenaires</PartnersTitle>
        <PartnersThanks>Merci à nos partenaires</PartnersThanks>
        <Center
          as='section'
          maxWidth='1000px'
          gutters='var(--container-gutter)'
          intrinsic
          withText
        >
          <Grid>
            {partners.map((partner) => (
              <GridItem key={partner.url}>
                <a href={partner.url} target='_blank' rel='noopener noreferrer'>
                  <img src={partner.src} alt={partner.alt} />
                </a>
              </GridItem>
            ))}
          </Grid>
        </Center>
        <PartnersIntro>
          L’appui des partenaires est essentiel pour rendre l’expérience des
          participant(e)s exceptionnelle. Pour contribuer à Interface à titre de
          partenaire, écris-nous!
        </PartnersIntro>
        <Button tag='link' href='mailto:info@capitalenumerique.com'>
          Ça m’intéresse
        </Button>
      </Center>
    </PartnersSection>
  );
};

export default Partners;
