import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import PanelTop from './PanelTop/PanelTop';
import PanelBottom from './Panel/PanelBottom/PanelBottom';

export default function Header () {
    return (
       <>
       <PanelTop />
        <PanelBottom />
        <SearchForm />
       </>

    );      
  }