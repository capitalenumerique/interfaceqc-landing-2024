import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import StyledButton from './Button.styles';

const defaultTags = {
  link: Link,
  href: 'a',
  button: 'button',
};

const Button = React.forwardRef(
  ({ to, tag, type, disabled, children, ...rest }, ref) => {
    const selectedTag = defaultTags[tag || `button`] || tag;

    const props = {
      to: tag === `link` ? to : undefined,
      href: tag === `href` ? to : undefined,
      type: !tag || tag === `button` ? type || `button` : undefined,
      ...rest,
    };

    return (
      <StyledButton ref={ref} as={selectedTag} disabled={disabled} {...props}>
        {children}
      </StyledButton>
    );
  }
);

Button.propTypes = {
  /**
   * Specifies how the button itself should be rendered.
   */
  tag: PropTypes.string,
  /**
   * Specifies the reference to a local page (i.e. /about) used with Gatsby Link tag
   */
  to: PropTypes.string,
  /**
   * Specifies the type of button
   */
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  /**
   * Specifies the button should be disabled
   */
  disabled: PropTypes.bool,
  /**
   * Specifies the content of the button
   */
  children: PropTypes.node,
};

Button.defaultProps = {
  children: undefined,
  tag: undefined,
  to: undefined,
  type: undefined,
  disabled: false,
};

export default Button;
