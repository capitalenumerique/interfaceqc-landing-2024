// vendors
import styled, { css } from 'styled-components';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import breakpoints from '../../../styles/breakpoints';
import { fontWeights } from '../../../styles/typography';

export const StyledHero = styled.header`
  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [75, 100], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const PageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${breakpointsRange(
    [{ prop: 'padding', sizes: [16, 32], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const Logo = styled.span`
  font-weight: ${fontWeights.medium};

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [24, 32], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const HeroTitle = styled.h2`
  font-weight: ${fontWeights.semibold};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [40, 64], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [45, 80], bases: [16, 20] },
      { prop: 'marginTop', sizes: [60, 100], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [16, 16], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const HeroIntro = styled.p`
  font-weight: ${fontWeights.medium};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [20, 32], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [24, 40], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [32, 50], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const InfoWrapper = styled.div`
  gap: 40px 0;
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InfoTitle = styled.p`
  margin-bottom: 0;

  font-weight: ${fontWeights.medium};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [18, 24], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [24, 32], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const InfoText = styled.p`
  font-weight: ${fontWeights.medium};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [18, 24], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [24, 32], bases: [16, 20] },
      { prop: 'marginTop', sizes: [16, 24], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const buttonStyle = css`
  ${breakpointsRange(
    [{ prop: 'marginTop', sizes: [50, 80], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;
