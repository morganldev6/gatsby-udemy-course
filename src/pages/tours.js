import React from 'react';
import Layout from '../components/Layout';
import Tours from '../components/Tours/Tours';
import { graphql } from 'gatsby';

const tours = ({ data }) => {
  return (
    <Layout>
      <Tours tours={data.tours.edges} />
    </Layout>
  );
};

export const getTours = graphql`
  query {
    tours: allContentfulTour {
      edges {
        tour: node {
          name
          price
          slug
          country
          days
          id: contentful_id
          images {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

export default tours;
