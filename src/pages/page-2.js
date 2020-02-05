/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Page 2</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
