import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contacts from './pages/Contacts';
import Reviews from './pages/Reviews';
import QuestionsAndAnswers from './pages/QuestionsAndAnswers';
import SearchForm from './components/SearchForm/SearchForm';
import { Container } from 'react-bootstrap';
import PanelTop from './components/Header/PanelTop/PanelTop';
import MainContent from './components/Content/MainContent';
import ProductCatalog from './components/ProductCatalog';
import Subscription from './components/Subscription';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer/Footer';
import PanelBottom from './components/Header/Panel/PanelBottom/PanelBottom';

function App () {
  return (
    <div>
      <Container>
        <PanelTop />
        <PanelBottom />
        <SearchForm />
        <MainContent />
        <ProductCatalog />
        <Subscription />
        <Sponsors />
        <Footer />
      </Container>

    </div>
  );
}

export default App;
