import React from 'react';
import { Helmet } from 'react-helmet';

import CardItemLarge from '../../templates/CardItemLarge/CardItemLarge';
import Image2 from '../../assets/images/Projects/Drink-carson.jpeg';
import Navbar from '../../components/Navbar/Navbar';

import Footer from '../../components/Footer/Footer';

const DrinkApp = () => (
  <>
    <Helmet>
      <title>Projects - Drink App</title>
      <meta name="description" content="Projects - Drink App" />
    </Helmet>
    <Navbar />
    <CardItemLarge
      title="Cocktail Recipe App"
      src={Image2}
      alt="lights"
      desc="In this app I made a Cocktail Recipe app using React hooks & SCSS that
        pulls data from the CocktailDB API. This was a really fun project to work on and was one of the first projects I converted to React JS (from vanilla JS)"
      label="React,SASS"
      github="https://github.com/luke-h1/cocktail-recipe-app "
      site="https://cocktail-recipe-app.vercel.app/"
    />
    <Footer />
  </>
);
export default DrinkApp;
