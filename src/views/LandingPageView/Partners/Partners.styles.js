// vendors
import styled from 'styled-components';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import breakpoints from '../../../styles/breakpoints';
import { fontWeights } from '../../../styles/typography';

export const PartnersSection = styled.section`
  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [75, 100], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [75, 100], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const PartnersTitle = styled.h2`
  font-weight: ${fontWeights.semibold};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [24, 48], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [32, 56], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [16, 24], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const PartnersThanks = styled.p`
  font-weight: ${fontWeights.medium};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [16, 24], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [24, 36], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [40, 60], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  list-style: none;

  ${breakpointsRange(
    [
      { prop: 'marginBottom', sizes: [40, 70], bases: [16, 20] },
      { prop: 'gap', sizes: [24, 48], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const GridItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  ${breakpointsRange(
    [{ prop: 'width', sizes: [100, 150], bases: [16, 20] }],
    breakpoints.spacings
  )};

  img {
    width: 100%;
  }
`;

export const PartnersIntro = styled.p`
  font-weight: ${fontWeights.medium};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [16, 24], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [24, 36], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [40, 60], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;
