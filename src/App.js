import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import ProductCatalog from './components/ProductCatalog';
import Subscription from './components/Subscription';
import Sponsors from './components/Sponsors';
import Layout from './components/Layout';
import {QueryClient, QueryClientProvider, useQuery} from 'react-query';

const queryClient = new QueryClient ();

function App () {
  return (
    <div>
      <Container>
        <Layout>
          <QueryClientProvider client={queryClient}>
            <ProductCatalog />
          </QueryClientProvider>
          <Subscription />
          <Sponsors />
        </Layout>
      </Container>
    </div>
  );
}

export default App;
