import React from 'react';
import HeaderHooks from '../examples/Header-Hooks';
import HeaderStatic from '../examples/Header-Static';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

const Examples = props => {
  const { name, age } = props.data.site.siteMetadata.person;

  return (
    <Layout>
      <div>
        examples page
        <HeaderHooks />
        <HeaderStatic />
        <div>
          <h4>This is our person: {name}</h4>
          <h4>This is their age: {age}</h4>
        </div>
      </div>
    </Layout>
  );
};

export const getData = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        person: data {
          name
          age
        }
      }
    }
  }
`;
export default Examples;
