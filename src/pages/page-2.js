/* eslint-disable react/prop-types */
import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const SecondPage = (props) => {
  const {
    prismicHeader: {
      data: {
        heading: {
          text: heading,
        },
        sub_heading: {
          text: subHeading,
        },
        image: {
          url: imageUrl,
        },
      },
    },
  } = props.data;

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>{heading}</h1>
      <p>{subHeading}</p>
      <img src={imageUrl} alt="header" />
      {/* <Img fluid={imageUrl} /> */}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    prismicHeader {
      data {
        heading {
          html
          text
        }
        sub_heading {
          html
          text
        }
        image {
          alt
          copyright
          url
        }
      }
    }
  }
`;

export default SecondPage;
