import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Container } from 'react-bootstrap';


export default function Layout ({ children }) {
    return (
      <>
    <Container>
    <Header />
    <main>{children}</main>
    <Footer />
    </Container>
      </>
    )
  }

