import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import PanelTop from './PanelTop/PanelTop';
import PanelBottom from './Panel/PanelBottom/PanelBottom';
import {QueryClient, QueryClientProvider, useQuery} from 'react-query';

const queryClient = new QueryClient ();

const Header = () => {
    return (
       <div>
       <PanelTop />
        <PanelBottom />
        <QueryClientProvider client={queryClient}>
        <SearchForm /> 
        </QueryClientProvider>
       </div>
    );      
  }

  export default Header;