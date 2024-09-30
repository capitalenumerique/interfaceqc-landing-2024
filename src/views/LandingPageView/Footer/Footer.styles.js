// vendors
import styled from 'styled-components';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import breakpoints from '../../../styles/breakpoints';
import colors from '../../../styles/colors';
import { fontWeights } from '../../../styles/typography';
import { lessThan } from '../../../utils/mediaQuery';

export const BlocksWrapper = styled.div`
  ${lessThan(1024)} {
    flex-direction: column-reverse;
  }
`;

export const ContactWrapper = styled.div`
  background-color: ${colors.burntSienna};

  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [48, 80], bases: [16, 20] },
      { prop: 'paddingLeft', sizes: [24, 100], bases: [16, 20] },
      { prop: 'paddingRight', sizes: [24, 100], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [16, 24], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  * {
    color: ${colors.soapStone};
  }
`;

export const Logo = styled.p`
  font-weight: ${fontWeights.bold};

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [24, 32], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const SocialList = styled.ul`
  display: flex;
  gap: 16px;

  list-style: none;

  ${breakpointsRange(
    [
      { prop: 'marginTop', sizes: [16, 24], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [80, 100], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const CNLogo = styled.a`
  display: block;
  width: 150px;

  ${breakpointsRange(
    [
      { prop: 'marginTop', sizes: [16, 16], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [32, 48], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  img {
    max-width: 100%;
  }
`;

export const Credits = styled.small`
  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [14, 14], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [16, 16], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const NewsletterWrapper = styled.div`
  background-color: ${colors.emperorGray};

  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [48, 80], bases: [16, 20] },
      { prop: 'paddingLeft', sizes: [24, 100], bases: [16, 20] },
      { prop: 'paddingRight', sizes: [24, 100], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [48, 24], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const NewsletterTitle = styled.h2`
  color: ${colors.soapStone};
  font-weight: ${fontWeights.black};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [40, 80], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [40, 80], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [16, 16], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const NewsletterText = styled.p`
  color: ${colors.soapStone};
  font-weight: ${fontWeights.medium};

  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [24, 32], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;
