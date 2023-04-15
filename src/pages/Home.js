import React from 'react';
import Subscription from '../components/Subscription';
import Sponsors from '../components/Sponsors';
import Layout from '../components/Layout';
import ProductCatalog from '../components/ProductCatalog';
import MainContent from './../components/Content/MainContent';

const Home = () => {
  return (
    <Layout>
      <MainContent />
      <ProductCatalog />
      <Subscription />
      <Sponsors />
    </Layout>
  );
};

export default Home;
