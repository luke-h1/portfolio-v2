/* eslint-disable */
import React from "react"
import { Link } from "gatsby"
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from "../styles/GlobalStyles"
import { theme } from '../styles/Themes';
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"

const Layout = ({ title, children }) => {
 
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Navbar theme={theme} />
        {children}
        <Footer />
      </>
    </ThemeProvider>
    // <div className="global-wrapper" data-is-root-path={isRootPath}>
    //   <header className="global-header">{header}</header>
    //   <main>{children}</main>
    //   <footer>
    //     © {new Date().getFullYear()}, Built with
    //     {` `}
    //     <a href="https://www.gatsbyjs.com">Gatsby</a>
    //   </footer>
    // </div>
  )
}
export default Layout