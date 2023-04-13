import React from 'react';
import Layout from '../components/Layout';
import FetchProduct from '../components/FetchProduct';
import Sponsors from '../components/Sponsors';
import Subscription from '../components/Subscription';

const ProductPage = () => {
  return (
    <Layout>
      <FetchProduct />
      <Subscription />
      <Sponsors />
    </Layout>
  );
};

export default ProductPage;
