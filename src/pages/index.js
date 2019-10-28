import React from 'react';
import Layout from '../components/Layout';
import { Button } from '../components/Button';

export default () => (
  <Layout>
    <h1 className="title">This is our home page</h1>
    <h1 className="title">Another heading</h1>
    Hello world!
    <h2>This second heading</h2>
    <Button>Styled Button!</Button>
  </Layout>
);
