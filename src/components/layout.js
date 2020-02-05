/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import TopNav from './TopNav';
import GlobalStyle from '../styles/global-style';
import theme from '../styles/theme';

const Layout = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TopNav />
      <main>{children}</main>
      <footer>
        ©
        {' '}
        {new Date().getFullYear()}
      </footer>
    </ThemeProvider>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
