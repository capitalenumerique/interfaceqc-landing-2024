// vendors
import React from 'react';

// styles
import {
  PartnersSection,
  PartnersTitle,
  PartnersIntro,
} from './Partners.styles';

// components
import Button from '../../../components/Landing/Button';
import Center from '../../../components/LayoutSections/Center';

const Partners = () => (
  <PartnersSection>
    <Center maxWidth='700px' gutters='16px' withText>
      <PartnersTitle>Partenaires</PartnersTitle>
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

export default Partners;
