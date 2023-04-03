import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import PanelTop from './PanelTop/PanelTop';
import PanelBottom from './Panel/PanelBottom/PanelBottom';
import {QueryClient, QueryClientProvider, useQuery} from 'react-query';
const queryClient = new QueryClient ();


export default function Header () {
    return (
       <>
       <PanelTop />
        <PanelBottom />
        <QueryClientProvider client={queryClient}>
        <SearchForm /> 
        </QueryClientProvider>
       </>

    );      
  }