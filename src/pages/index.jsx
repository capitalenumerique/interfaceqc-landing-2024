// vendors
import React from 'react';
import PropTypes from 'prop-types';

// components
import { useTranslation } from 'react-i18next';
import { css } from 'styled-components';
import SEO from '../components/SEO';

// views
import Hero from '../views/LandingPageView/Hero';
import Tickets from '../views/LandingPageView/Tickets';

// styles
import colors from '../styles/colors';
import { fontFamilies } from '../styles/typography';

const landingWrapperGlobalStyles = css`
  color: ${colors.emperorGray};

  * {
    font-family: ${fontFamilies.inter};
  }
`;

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <div css={landingWrapperGlobalStyles}>
      <SEO
        title={`Interface Québec | ${t('home.title')}`}
        description={t('home.description')}
      />

      <Hero />

      <Tickets />
    </div>
  );
};

export default IndexPage;

IndexPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
