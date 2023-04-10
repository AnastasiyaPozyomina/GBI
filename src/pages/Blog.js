import React from 'react';
import Layout from '../components/Layout';
import Posts from '../components/Posts';

const Blog = () => {
  return (
      <Layout>
        <h1>Статьи </h1>
        <Posts />
      </Layout>
   
  );
};

export default Blog;
