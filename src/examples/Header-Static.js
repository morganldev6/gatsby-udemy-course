import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

const getData = graphql`
  query FirstQuery {
    site {
      siteMetadata {
        title
        description
        author
        data {
          name
          age
        }
      }
    }
  }
`;

const HeaderStatic = () => {
  return (
    <StaticQuery
      query={getData}
      render={data => {
        return <p>Description: {data.site.siteMetadata.description}</p>;
      }}
    ></StaticQuery>
  );
};

export default HeaderStatic;
