// vendors
import styled from 'styled-components';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import breakpoints from '../../../styles/breakpoints';
import { fontWeights } from '../../../styles/typography';

export const EventPerksSection = styled.section`
  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [75, 100], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [75, 100], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const PerksTitle = styled.h2`
  font-weight: ${fontWeights.medium};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [24, 48], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [32, 56], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [32, 48], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const PerksList = styled.ul`
  font-weight: ${fontWeights.medium};

  list-style: none;

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [18, 24], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [24, 36], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;
