import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function NavHeader () {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{maxHeight: '300px'}}
              navbarScroll
            >
        
              <Nav.Link to="/about" href="#action1">О компании</Nav.Link>
              <Nav.Link  href="#action2">Отзывы</Nav.Link>
              <Nav.Link  href="#action1">Статьи</Nav.Link>
              <Nav.Link  href="#action2">Вопросы и ответы</Nav.Link>
              <Nav.Link  href="#action2">Контакты</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

