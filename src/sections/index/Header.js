/* eslint-disable react/prop-types */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Content from '../../components/Content';

const Header = () => {
  const data = useStaticQuery(graphql`
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
  `);

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
  } = data;

  return (
    <Content>
      <h1>{heading}</h1>
      <p>{subHeading}</p>
      <img src={imageUrl} alt="header" />
    </Content>
  );
};

export default Header;
