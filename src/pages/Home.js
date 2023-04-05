import React from 'react';
import Subscription from '../components/Subscription';
import Sponsors from '../components/Sponsors';
import Layout from '../components/Layout';
import ProductPage from './ProductPage';
import ProductCatalog from '../components/ProductCatalog';

const Home = () => {
  return (
    <Layout>
      <ProductPage />
      <ProductCatalog />
      <Subscription />
      <Sponsors />
    </Layout>
  );
};

export default Home;
