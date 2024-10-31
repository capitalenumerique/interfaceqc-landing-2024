// vendors
import React from 'react';

// styles
import {
  SpeakersSection,
  SpeakersTitle,
  SpeakersIntro,
  SpeakersText,
} from './Speakers.styles';

// components
import Button from '../../../components/Landing/Button';
import Center from '../../../components/LayoutSections/Center';

const Speakers = () => (
  <SpeakersSection>
    <Center maxWidth='700px' gutters='16px' withText>
      <SpeakersTitle>Deviens conférencier.ère à Interface 2025!</SpeakersTitle>

      <SpeakersIntro>
        Tu souhaites transmettre ton expertise sur un sujet qui te passionne lié
        au numérique, aux communications ou de tout autre sujets plutôt
        softskills?
      </SpeakersIntro>

      <Button
        tag='link'
        href='https://form.asana.com/?k=97YAy3lzKI7Xq9nWDIwcoQ&d=1207626177757620'
        target='_blank'
        rel='noopener noreferrer'
      >
        Déposer ma candidature
      </Button>

      <SpeakersText>
        Dépêche-toi! Tu as jusqu’au 12 janvier 2025 pour déposer ta candidature
        !
      </SpeakersText>
    </Center>
  </SpeakersSection>
);

export default Speakers;
