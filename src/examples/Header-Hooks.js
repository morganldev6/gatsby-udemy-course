import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const getData = graphql`
  query SecondQuery {
    site {
      siteMetadata {
        title
        author
        data {
          name
          age
        }
      }
    }
  }
`;

const Header = () => {
  const {
    site: { siteMetadata: info }
  } = useStaticQuery(getData);
  return (
    <div>
      <h1>Author: {info.author}</h1>
      <h1>Title: {info.title}</h1>
    </div>
  );
};

export default Header;
