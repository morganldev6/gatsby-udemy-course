import React from 'react';
import Layout from '../components/Layout';
import styles from '../components/Blog.module.css';

const Blog = () => {
  return (
    <Layout>
      <div className={styles.blog}>
        <h1 className={styles.title}>This is our blog page</h1>
        <h2>this second heading</h2>
      </div>
    </Layout>
  );
};

export default Blog;
