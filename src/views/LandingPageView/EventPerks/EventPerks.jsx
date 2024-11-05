// vendors
import React from 'react';

// styles
import { EventPerksSection, PerksTitle, PerksList } from './EventPerks.styles';

// components
import Center from '../../../components/LayoutSections/Center';

const EventPerks = () => (
  <EventPerksSection>
    <Center
      maxWidth='var(--max-landing-container-width)'
      gutters='16px'
      withText
    >
      <div>
        <PerksTitle>Pourquoi participer?</PerksTitle>
      </div>
      <div>
        <PerksList>
          <li>Être informé(e) des dernières tendances du domaine</li>
          <li>Propulser ta carrière avec de la formation continue</li>
          <li>Rencontrer des personnes qui font le même métier que toi</li>
          <li>Échanger avec des clients et partenaires potentiels</li>
          <li>Utiliser Interface comme une activité de « team building »</li>
          <li>Réseauter dans une ambiance loin de celles que tu connais</li>
          <li>Rendre jaloux celles et ceux qui n’auront pas eu de billet.</li>
        </PerksList>
      </div>
    </Center>
  </EventPerksSection>
);

export default EventPerks;
