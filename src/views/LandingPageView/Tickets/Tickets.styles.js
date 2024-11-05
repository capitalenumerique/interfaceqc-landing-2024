// vendors
import styled from 'styled-components';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import breakpoints from '../../../styles/breakpoints';
import colors from '../../../styles/colors';
import { fontWeights } from '../../../styles/typography';

export const TicketsSection = styled.section`
  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [75, 100], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [75, 100], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const TicketsTitle = styled.h2`
  font-weight: ${fontWeights.medium};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [24, 48], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [32, 56], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [16, 24], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const TicketsIntro = styled.p`
  font-weight: ${fontWeights.medium};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [16, 24], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [20, 32], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [60, 80], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const PriceItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 2px solid ${colors.tuatara};
  border-radius: 8px;

  ${breakpointsRange(
    [{ prop: 'padding', sizes: [24, 48], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const PriceTitle = styled.h3`
  font-weight: ${fontWeights.medium};
  text-transform: uppercase;

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [16, 16], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [20, 20], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [24, 32], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const Price = styled.p`
  font-weight: ${fontWeights.medium};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [32, 36], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [36, 48], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [24, 32], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const PriceInclusions = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  font-weight: ${fontWeights.medium};
  text-align: left;

  list-style: none;

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [16, 16], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [20, 20], bases: [16, 20] },
      { prop: 'marginTop', sizes: [32, 40], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const PriceDetails = styled.small`
  font-weight: ${fontWeights.medium};
  text-align: left;

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [12, 12], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [14, 14], bases: [16, 20] },
      { prop: 'marginTop', sizes: [16, 24], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const PricesText = styled.p`
  font-weight: ${fontWeights.medium};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [14, 16], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [18, 20], bases: [16, 20] },
      { prop: 'marginTop', sizes: [24, 48], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;
