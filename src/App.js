import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import PanelTop from './components/Header/PanelTop/PanelTop';
import About from './components/About/About';
import SearchForm from './components/SearchForm/SearchForm';
import Logo from './components/Logo';


function App () {
  return (
    <div>
      <Container>
        <PanelTop />
        <Logo />
        <SearchForm />
       
      </Container>
    </div>
  );
}

export default App;
