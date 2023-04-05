import React from 'react';
import {Link} from 'react-router-dom';

const NavHeader = () => {
  return (
    <div>
      <ul className="nav">
        <li>
          <Link to="/about" className="nav__link link">О компании</Link>
          
        </li>
        <li>
          <Link to="/reviews" className="nav__link link">Отзывы</Link>
        </li>
        <li>
          <Link to="/blog" className="nav__link link">Статьи</Link>
        </li>
        <li>
          <Link to="/questions-and-answers" className="nav__link link">Вопросы и ответы</Link>
        </li>
        <li>
          <Link to="/contacts" className="nav__link link">Контакты</Link>
        </li>
      </ul>
    

      {/* <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{maxHeight: '300px'}}
              navbarScroll
            >
        
              <NavLink to="/about" href="#action1">О компании</NavLink>
              <NavLink  href="#action2">Отзывы</NavLink>
              <NavLink  href="#action1">Статьи</NavLink>
              <NavLink  href="#action2">Вопросы и ответы</NavLink>
              <NavLink  href="#action2">Контакты</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </div>
  );
}

export default NavHeader;