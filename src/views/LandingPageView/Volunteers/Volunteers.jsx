// vendors
import React from 'react';

// styles
import {
  VolunteersSection,
  VolunteersTitle,
  VolunteersIntro,
  VolunteersList,
} from './Volunteers.styles';

// components
import Button from '../../../components/Landing/Button';
import Center from '../../../components/LayoutSections/Center';

const Volunteers = () => (
  <VolunteersSection>
    <Center maxWidth='1000px' gutters='16px' withText>
      <VolunteersTitle>40 bénévoles annuels</VolunteersTitle>
    </Center>

    <Center maxWidth='600px' gutters='16px' withText>
      <VolunteersIntro>
        Quand on dit un événement par et pour la communauté, c’est ça qu’on veut
        dire!
      </VolunteersIntro>
    </Center>

    <Center maxWidth='1000px' gutters='16px' withText>
      <VolunteersList>
        <li>Marie-Michèle Bouchard</li>
        <li>Jean-Nicolas Gauthier</li>
        <li>Océane Colling</li>
        <li>Sandrine Thivierge</li>
        <li>Alexandra Plante</li>
        <li>Kariann Giroux</li>
        <li>Mary-Élizabeth Lagacé</li>
        <li>Andréanne Boucher</li>
        <li>Claudine Beaudoin</li>
        <li>Élodie Monette</li>
        <li>Florian Martin</li>
        <li>Laurent Harel</li>
        <li>Krystina Hamel</li>
        <li>Jean-Benoit Dubé</li>
        <li>Jean-David Rhéaume</li>
        <li>Jean-François Verville</li>
        <li>Jonathan Parent</li>
        <li>Jean-Philippe Bonneau</li>
        <li>Josianne Picard</li>
        <li>Kathleen Higgins</li>
        <li>Marie-Pier Roy-Dubé</li>
        <li>Mathieu Larouche</li>
        <li>Pierre Prévot</li>
        <li>Rosalie Simard</li>
        <li>Roxane Garceau-Bolduc</li>
      </VolunteersList>

      <Button
        tag='link'
        href='https://forms.gle/2fehZZGtc4XZ5Ddc6'
        target='_blank'
        rel='noopener noreferrer'
      >
        Devenir bénévole
      </Button>
    </Center>
  </VolunteersSection>
);

export default Volunteers;
