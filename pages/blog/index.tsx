import React from "react";
import BlogPage from '../../layout/BlogPage/BlogPage';
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/Theme";

export default function Index() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BlogPage theme={theme} />
      </ThemeProvider>
    </>
  );
}
