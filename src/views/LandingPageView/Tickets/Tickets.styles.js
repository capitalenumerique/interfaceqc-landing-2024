// vendors
import styled from 'styled-components';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// images
import vectorCheckmark from '../../../images/landing/vectorCheckmark.svg';

// styles
import breakpoints from '../../../styles/breakpoints';
import colors from '../../../styles/colors';
import { fontWeights } from '../../../styles/typography';

export const TicketsSection = styled.section`
  background-color: ${colors.emperorGray};

  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [75, 100], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [75, 100], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const TicketsTitle = styled.h2`
  color: ${colors.soapStone};
  font-weight: ${fontWeights.black};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [40, 80], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [50, 90], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [16, 24], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const TicketsIntro = styled.p`
  color: ${colors.soapStone};
  font-weight: ${fontWeights.medium};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [16, 24], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [24, 36], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [60, 80], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const PriceItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${colors.concreteGray};
  border-radius: 16px;

  ${breakpointsRange(
    [{ prop: 'padding', sizes: [24, 48], bases: [16, 20] }],
    breakpoints.spacings
  )};

  &:first-child {
    background-color: ${colors.silverGray};
  }
`;

export const PriceTitle = styled.h3`
  font-weight: ${fontWeights.bold};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [24, 32], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [32, 36], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [24, 32], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const Price = styled.p`
  font-weight: ${fontWeights.bold};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [48, 60], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [48, 60], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [24, 32], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const PriceInclusions = styled.ul`
  text-align: left;

  ${breakpointsRange(
    [{ prop: 'marginTop', sizes: [32, 40], bases: [16, 20] }],
    breakpoints.spacings
  )};

  li {
    display: flex;
    gap: 12px;

    list-style: none;

    &::before {
      display: inline-block;
      flex-shrink: 0;
      width: 24px;
      height: 24px;
      margin-top: 2px;

      background-image: url(${vectorCheckmark});
      background-repeat: no-repeat;
      background-position: center;

      content: '';
    }
  }
`;

export const PriceDetails = styled.small`
  text-align: left;

  ${breakpointsRange(
    [
      { prop: 'lineHeight', sizes: [18, 18], bases: [16, 20] },
      { prop: 'marginTop', sizes: [16, 24], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const PricesText = styled.p`
  color: ${colors.soapStone};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [14, 18], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [18, 20], bases: [16, 20] },
      { prop: 'marginTop', sizes: [16, 24], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;
