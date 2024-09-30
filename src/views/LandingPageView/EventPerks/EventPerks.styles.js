// vendors
import styled from 'styled-components';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import breakpoints from '../../../styles/breakpoints';
import { fontWeights } from '../../../styles/typography';

export const EventPerksSection = styled.section`
  position: relative;

  overflow: hidden;

  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [75, 100], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [75, 100], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const PerksWrapper = styled.div`
  position: relative;
  z-index: 1;

  align-items: center;
`;

export const PerksTitle = styled.h2`
  font-weight: ${fontWeights.black};
  text-align: left;

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [40, 80], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [50, 90], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const PerksList = styled.ul`
  text-align: left;

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [16, 24], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [24, 36], bases: [16, 20] },
      { prop: 'paddingLeft', sizes: [24, 36], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const Circle = styled.img`
  position: absolute;
  top: 0;
  right: 0;

  max-width: 80%;
`;
