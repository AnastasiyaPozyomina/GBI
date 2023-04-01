import React from 'react';
import Container from 'react-bootstrap/Container';
import PanelTop from '../components/Header/PanelTop/PanelTop';
import SearchForm from '../components/SearchForm/SearchForm';
import Logo from '../components/Logo';



export default function Home() {
  return (
    <>
      <Container>
        <PanelTop />
        <Logo />
        <SearchForm />
      </Container>
    </>
  );
}

