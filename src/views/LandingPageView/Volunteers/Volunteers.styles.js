// vendors
import styled from 'styled-components';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import breakpoints from '../../../styles/breakpoints';
import colors from '../../../styles/colors';
import { fontWeights } from '../../../styles/typography';

export const VolunteersSection = styled.section`
  background-color: ${colors.emperorGray};

  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [75, 100], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [75, 100], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  * {
    color: ${colors.soapStone};
  }
`;

export const VolunteersTitle = styled.h2`
  font-weight: ${fontWeights.black};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [40, 80], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [50, 90], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const VolunteersIntro = styled.p`
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

export const VolunteersList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 0;
  justify-content: center;

  list-style: none;

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [16, 18], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [24, 36], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [40, 60], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  li {
    &::after {
      display: inline-block;
      margin: 0 8px;

      content: '•';
    }

    &:last-child {
      &::after {
        display: none;
      }
    }
  }
`;

export const VolunteerCTAText = styled.p`
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

export const Hammer = styled.img`
  width: 40px;

  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [18, 24], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;
