import React from 'react';
import Layout from '../../components/layout';
import ProjectPage from '../../templates/ProjectPage/ProjectPage';
import Image4 from '../../../static/Image4.jpeg';

const formValidator = () => (
  <Layout>
    <ProjectPage
      title="Form Validator"
      src={Image4}
      alt="Dark room with lights hanging from the ceiling"
      desc="In this project I built a form validator that uses built in
        javascript regular expressions to validate name, email, postcode
        & phone numbers. I also performed numerous automated and manual tests on the application to ensure that the regex functioned as expected."
      label="Vanilla JS"
      github="javascript-regex-validation-form"
      site="https://javascript-regex-validation-form.vercel.app/"
    />
  </Layout>
);

export default formValidator;