// vendors
import styled from 'styled-components';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import breakpoints from '../../../styles/breakpoints';
import colors from '../../../styles/colors';
import { fontWeights } from '../../../styles/typography';
import { lessThan } from '../../../utils/mediaQuery';

export const FooterWrapper = styled.footer`
  ${breakpointsRange(
    [{ prop: 'paddingBottom', sizes: [18, 24], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const BlocksWrapper = styled.div`
  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [32, 48], bases: [16, 20] }],
    breakpoints.spacings
  )};

  ${lessThan(1024)} {
    flex-direction: column-reverse;
  }
`;

export const ContactWrapper = styled.div`
  border: 2px solid ${colors.tuatara};
  border-radius: 8px;

  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [48, 80], bases: [16, 20] },
      { prop: 'paddingLeft', sizes: [24, 48], bases: [16, 20] },
      { prop: 'paddingRight', sizes: [24, 48], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [16, 24], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const Logo = styled.p`
  font-weight: ${fontWeights.medium};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [24, 36], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [20, 24], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const SocialList = styled.ul`
  display: flex;
  gap: 24px;
  justify-content: center;

  list-style: none;

  ${breakpointsRange(
    [
      { prop: 'marginTop', sizes: [16, 24], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [80, 100], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

// export const CNLogo = styled.a`
//   display: block;
//   width: 150px;

//   ${breakpointsRange(
//     [
//       { prop: 'marginTop', sizes: [16, 16], bases: [16, 20] },
//       { prop: 'marginBottom', sizes: [32, 48], bases: [16, 20] },
//     ],
//     breakpoints.spacings
//   )};

//   img {
//     max-width: 100%;
//   }
// `;

export const NewsletterWrapper = styled.div`
  border: 2px solid ${colors.tuatara};
  border-radius: 8px;

  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [48, 80], bases: [16, 20] },
      { prop: 'paddingLeft', sizes: [24, 48], bases: [16, 20] },
      { prop: 'paddingRight', sizes: [24, 48], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [48, 24], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const NewsletterTitle = styled.h2`
  font-weight: ${fontWeights.medium};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [24, 36], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [20, 24], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const NewsletterText = styled.p`
  font-weight: ${fontWeights.medium};

  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [24, 32], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const Credits = styled.small`
  display: block;

  text-align: center;

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [14, 14], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [16, 16], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;
