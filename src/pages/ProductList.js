import React from 'react';
import Layout from '../components/Layout';
import Sponsors from '../components/Sponsors';
import Subscription from '../components/Subscription';
import TableProduct from '../components/TableProduct';

const ProductList = () => {
  return (
    <Layout>
      <TableProduct />
      <Subscription />
      <Sponsors />
    </Layout>
  );
};

export default ProductList;
