// vendors
import styled from 'styled-components';

// styles
import colors from '../../../styles/colors';
import { fontWeights } from '../../../styles/typography';
import { speed } from '../../../styles/animation';
import breakpoints from '../../../styles/breakpoints';
import breakpointsRange from '../../../utils/breakpointsRange';

/* Default button styled */
const StyledButton = styled.button`
  --btn-color: ${colors.soapStone};
  --btn-bg-color: ${colors.burntSienna};

  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: var(--padding-vertical) var(--padding-horizontal);

  color: var(--btn-color);

  font-weight: ${fontWeights.bold};
  text-align: center;
  text-decoration: none;

  background-color: var(--btn-bg-color);

  border: 0;
  border-radius: 16px;
  outline: 0;
  cursor: pointer;

  appearance: none;

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [16, 20], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [19, 24], bases: [16, 20], unit: '' },
      { prop: '--paddingVertical', sizes: [16, 16], bases: [16, 20] },
      { prop: '--paddingHorizontal', sizes: [32, 32], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  @media (prefers-reduced-motion: no-preference) {
    transition: background-color ${speed.fast}, color ${speed.fast},
      transform ${speed.fast};
  }

  &.active,
  &:focus,
  &:hover:not([disabled]) {
    --btn-bg-color: ${colors.rawSienna};
  }

  &[disabled] {
    --btn-bg-color: ${colors.silverGray};

    cursor: not-allowed;
  }
`;

export default StyledButton;