// vendors
import React from 'react';

// styles
import {
  TicketsSection,
  TicketsTitle,
  TicketsIntro,
  PriceItem,
  PriceTitle,
  Price,
  PriceInclusions,
  PriceDetails,
  PricesText,
} from './Tickets.styles';

// components
import Button from '../../../components/Landing/Button';
import Center from '../../../components/LayoutSections/Center';
import Switcher from '../../../components/LayoutSections/Switcher';

const Tickets = () => (
  <TicketsSection>
    <Center maxWidth='1000px' gutters='16px' withText>
      <TicketsTitle>Réserve ta place</TicketsTitle>

      <TicketsIntro>
        Comme on est une nouvelle organisation qui déploie un événement pour une
        première édition, on te suggère fortement de réserver ton accès tôt. Tel
        un pirate, la trésorerie sera le nerf de la guerre pour 2025!
      </TicketsIntro>
    </Center>

    <Center
      maxWidth='var(--max-landing-container-width)'
      gutters='12px'
      withText
    >
      <Switcher threshold='1024px' space='1.5rem' limit={3}>
        <div>
          <PriceItem>
            <PriceTitle>Accès complet</PriceTitle>
            <Price>655$</Price>
            <Button
              tag='link'
              href='https://ti.to/cnum/interface-2025'
              target='_blank'
              rel='noopener noreferrer'
            >
              Réserver
            </Button>
            <PriceInclusions>
              <li>3 journées de conférences</li>
              <li>5@7 festifs incluant les consommations</li>
              <li>Repas et collations</li>
              <li>Café et thé à volonté</li>
            </PriceInclusions>
            <PriceDetails>
              Billet nominatif (ne peut pas être partagé entre collègues)
            </PriceDetails>
          </PriceItem>

          <PriceItem>
            <PriceTitle>Accès entreprise</PriceTitle>
            <Price>855$</Price>
            <Button
              tag='link'
              href='https://ti.to/cnum/interface-2025'
              target='_blank'
              rel='noopener noreferrer'
            >
              Réserver
            </Button>
            <PriceInclusions>
              <li>3 journées de conférences</li>
              <li>5@7 festifs incluant les consommations</li>
              <li>Repas et collations</li>
              <li>Café et thé à volonté</li>
            </PriceInclusions>
            <PriceDetails>
              Billet non-nominatif (peut être partagé entre collègues)
            </PriceDetails>
          </PriceItem>

          <PriceItem>
            <PriceTitle>Accès étudiant</PriceTitle>
            <Price>355$</Price>
            <Button
              tag='link'
              href='https://ti.to/cnum/interface-2025'
              target='_blank'
              rel='noopener noreferrer'
            >
              Réserver
            </Button>
            <PriceInclusions>
              <li>3 journées de conférences</li>
              <li>5@7 festifs incluant les consommations</li>
              <li>Repas et collations</li>
              <li>Café et thé à volonté</li>
            </PriceInclusions>
          </PriceItem>
        </div>
      </Switcher>

      <Center maxWidth='800px' gutters='12px' withText>
        <PricesText>
          Tous les tarifs indiqués sont avant taxes. Les billets sont
          non-remboursables, mais peuvent être transférés à une autre personne
          avant le début de l’événement.
        </PricesText>
      </Center>
    </Center>
  </TicketsSection>
);

export default Tickets;
