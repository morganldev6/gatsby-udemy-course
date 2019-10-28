import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const Error = () => {
  return (
    <Layout>
      <h1>This is our error page</h1>
      <Link to="/">Return to home page</Link>
    </Layout>
  );
};

export default Error;
