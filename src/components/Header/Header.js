import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import PanelTop from './PanelTop/PanelTop';

export default function Header () {
    return (
       <>
       <PanelTop />
       <SearchForm />
       </>

    );      
  }