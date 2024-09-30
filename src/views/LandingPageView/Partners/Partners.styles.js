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

export const PartnersThanks = styled.p`
  font-weight: ${fontWeights.bold};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [16, 24], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [24, 36], bases: [16, 20] },
      { prop: 'marginTop', sizes: [40, 60], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;
