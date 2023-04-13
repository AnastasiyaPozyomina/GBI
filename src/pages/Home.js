import React from 'react';
import Subscription from '../components/Subscription';
import Sponsors from '../components/Sponsors';
import Layout from '../components/Layout';
import ProductCatalog from '../components/ProductCatalog';

const Home = () => {
  return (
    <Layout>
      <ProductCatalog />
      <Subscription />
      <Sponsors />
    </Layout>
  );
};

export default Home;
