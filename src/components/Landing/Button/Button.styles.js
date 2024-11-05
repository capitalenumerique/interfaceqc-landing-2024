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
  --btn-color: ${colors.tuatara};
  --btn-bg-color: ${colors.springWood};

  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: var(--padding-vertical) var(--padding-horizontal);

  color: var(--btn-color);

  font-weight: ${fontWeights.medium};
  text-align: center;
  text-decoration: none;

  background-color: var(--btn-bg-color);
  border: 2px solid ${colors.tuatara};

  border-radius: 8px;
  outline: 0;
  cursor: pointer;

  appearance: none;

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [16, 24], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [20, 30], bases: [16, 20], unit: '' },
      { prop: '--paddingVertical', sizes: [8, 8], bases: [16, 20] },
      { prop: '--paddingHorizontal', sizes: [24, 24], bases: [16, 20] },
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
    --btn-bg-color: ${colors.tuatara};
    --btn-color: ${colors.springWood};
  }

  &[disabled] {
    --btn-bg-color: ${colors.silverGray};

    cursor: not-allowed;
  }
`;

export default StyledButton;
