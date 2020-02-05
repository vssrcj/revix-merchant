import { useStaticQuery, graphql } from 'gatsby';

export default function useRequest() {
  /**
   * This is a clean way of abstracting requests.
   * Gatsby uses GraphQL to get data by default, and Prismic has a GraphQL interface.
   *
   * But Gatsby can also use a REST API (https://www.gatsbyjs.org/packages/gatsby-source-rest-api/).
   *
   * In fact, with this hook, you don't need anything Gatsby related at all.
   */
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

  return {
    heading,
    subHeading,
    imageUrl,
  };
}
