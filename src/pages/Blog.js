import React from 'react';
import Layout from '../components/Layout';
import Posts from '../components/Posts';
import Title from '../components/Title';

const Blog = () => {
  return (
      <Layout>
        <Title title={'Статьи'} />
        <Posts />
      </Layout>
  );
};

export default Blog;
