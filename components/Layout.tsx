import { MDXProvider } from '@mdx-js/react';
import {
  ChakraProvider, theme,
} from '@chakra-ui/react';
import { Reset } from '@styles/reset';
import MDXComponents from '@components/MDXComponents';
import Footer from '@components/Footer';
import Header from './Header/Header';
import { prismLightTheme, prismDarkTheme } from '../styles/prism'

const Layout = ({ children }) => {
  return (
    <>
      {Reset}
      <ChakraProvider resetCSS theme={theme}>
        <MDXProvider components={MDXComponents}>
          <Header props={null} />
          {children}
          <Footer />
        </MDXProvider>

      </ChakraProvider>
    </>
  );
};
export default Layout;
