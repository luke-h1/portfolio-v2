import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav/Nav';
import { theme } from '../styles/Theme';
import { GlobalStyle } from '../styles/GlobalStyles';
import { Wrapper } from '../templates/Wrapper';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Nav theme={theme} />
      <Wrapper>{children}</Wrapper>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
