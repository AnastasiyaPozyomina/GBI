import React from 'react';
import Layout from '../components/Layout';
import Posts from '../components/Posts';
import Title from '../components/Title';
import {Breadcrumb} from 'antd';
import {NavLink} from 'react-router-dom';

const Blog = () => {
  return (
    <Layout>
<div className="wrapper-title">
  <Title title={'Статьи'} />

      <Breadcrumb
        items={[
          {
            title: <NavLink to="/">Главная</NavLink>,
          },
          {
            title: 'Блог',
          },
        ]}
      />
</div>
      
      <Posts />
    </Layout>
  );
};

export default Blog;
