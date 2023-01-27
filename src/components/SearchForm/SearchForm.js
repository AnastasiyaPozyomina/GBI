import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function SearchForm () {
  return (
  
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="Каталог" id="navbarScrollingDropdown">
            
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              Автопавильоны
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Плиты
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6">
                Балки
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2">Автопавильоны</Nav.Link>
            <Nav.Link href="#action2">Плиты</Nav.Link>
            <Nav.Link href="#action2">Балки</Nav.Link>
            <Nav.Link href="#action2">Брусы</Nav.Link>
            <Nav.Link href="#action2">Вазоны</Nav.Link>
            <Nav.Link href="#action2">Гаражи</Nav.Link>
            <Nav.Link href="#action2">Гаражи</Nav.Link>
            <Nav.Link href="#action2">...</Nav.Link>
            
            
          </Nav>
          <Form className="d-flex search-box">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Поиск</Button>
          </Form>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>

  );
}