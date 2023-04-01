import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// let openCatalog = document.querySelector('.catalog-open');

// function clickButtons() {
//   openCatalog.classList.toggle('open');
// }

export default function SearchForm () {
  return (
  
    // <Navbar bg="light" expand="lg">
    //   <Container fluid>
    //     <Navbar.Toggle aria-controls="navbarScroll" />
    //     <Navbar.Collapse id="navbarScroll">
    //       <Nav
    //         className="me-auto my-2 my-lg-0"
    //         style={{ maxHeight: '100px' }}
    //         navbarScroll
    //       >
    //         <NavDropdown title="Каталог" id="navbarScrollingDropdown" className="navbarScrollingDropdownCatalog">
            
    //           <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action4">
    //           Автопавильоны
    //           </NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action5">
    //             Плиты
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action6">
    //             Балки
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //         <Nav.Link href="#action2">Автопавильоны</Nav.Link>
    //         <Nav.Link href="#action2">Плиты</Nav.Link>
    //         <Nav.Link href="#action2">Балки</Nav.Link>
    //         <Nav.Link href="#action2">Брусы</Nav.Link>
    //         <Nav.Link href="#action2">Вазоны</Nav.Link>
    //         <Nav.Link href="#action2">Гаражи</Nav.Link>
    //         <Nav.Link href="#action2">Гаражи</Nav.Link>
    //         <Nav.Link href="#action2">...</Nav.Link>
            
            
    //       </Nav>
    //       <Form className="d-flex search-box">
    //         <Form.Control
    //           type="search"
    //           placeholder="Search"
    //           className="me-2"
    //           aria-label="Search"
    //         />
    //         <Button variant="outline-success">Поиск</Button>
    //       </Form>
    //     </Navbar.Collapse>
        
    //   </Container>
    // </Navbar>
    <> 
    <section className="catalog">
    <ul id="menu-catalog">
        <li onclick="clickButtons()"><a class="menu-catalog__title" href="#"><img
                    src="assets/images/main-content/Group1.svg" alt="меню каталога" />Каталог</a></li>
        <li><a className="menu-catalog__link link" href="#">Автопавильоны</a></li>
        <li><a className="menu-catalog__link link" href="#">Плиты</a></li>
        <li><a className="menu-catalog__link link" href="#">Балки</a></li>
        <li><a className="menu-catalog__link link" href="#">Блоки</a></li>
        <li><a className="menu-catalog__link link" href="#">Брусы</a></li>
        <li><a className="menu-catalog__link link" href="#">Вазоны</a></li>
        <li><a className="menu-catalog__link link" href="#">Гаражи</a></li>
        <li><a className="menu-catalog__link link" href="#">Гаражи</a></li>
        <li><a className="menu-catalog__link link other" href="">...</a></li>
    </ul>
    <div className="search-container">
        <form className="search">
            <input className="search__text" type="text" placeholder="Поиск по каталогу ЖБИ" name="search" />
            <button className="search__submit" type="submit">Поиск</button>
        </form>
    </div>


<div className="catalog-open">
                <ul className="catalog-open__list">
                    <li className="catalog__item"><a href="#"> &gt; Автопавильоны</a></li>
                    <li className="catalog__item"><a href="#"> &gt; Балки</a></li>
                    <li className="catalog__item"><a href="#"> &gt; Анкеры</a></li>
                    <li className="catalog__item"><a href="#"> &gt; Блоки</a></li>
                    <li className="catalog__item"><a href="#"> &gt; Брусы</a></li>
                    <li className="catalog__item"><a href="#"> &gt; Вазоны</a></li>
                    <li className="catalog__item"><a href="#"> &gt; Гаражи</a></li>
                    <li className="catalog__item"><a href="#"> &gt; Гаражи</a></li>
                    <li className="catalog__item"><a href="#"> &gt; Автопавильоны</a></li>
                    <li className="catalog__item"><a href="#"> &gt; Балки</a></li>
                    <li className="catalog__item"><a href="#"> &gt; Анкеры</a></li>
                    <li className="catalog__item"><a href="#"> &gt; Блоки</a></li>
                    <li className="catalog__item"><a href="#"> &gt; Вазоны</a></li>
                    <li className="catalog__item"><a href="#"> &gt; Гаражи</a></li>
                    <li className="catalog__item"><a href="#"> &gt; Гаражи</a></li>
                    <li className="catalog__item"><a href="#"> &gt; Анкеры</a></li>
                    <li className="catalog__item"><a href="#"> &gt; Автопавильоны</a></li>
                    <li className="catalog__item"><a href="#"> &gt; Балки</a></li>
                    <li className="catalog__item"><a href="#"> &gt; Анкеры</a></li>
                    <li className="catalog__item"><a href="#"> &gt; Блоки</a></li>
                    <li className="catalog__item"><a href="#"> &gt; Вазоны</a></li>
                    <li className="catalog__item"><a href="#"> &gt; Гаражи</a></li>
                    <li className="catalog__item"><a href="#"> &gt; Гаражи</a></li>
                    <li className="catalog__item"><a href="#"> &gt; Автопавильоны</a></li>
                    <li className="catalog__item"><a href="#"> &gt; Балки</a></li>
                    <li className="catalog__item"><a href="#"> &gt; Анкеры</a></li>
                    <li className="catalog__item"><a href="#"> &gt; Блоки</a></li>
                    <li className="catalog__item"><a href="#"> &gt; Вазоны</a></li>
                    <li className="catalog__item"><a href="#"> &gt; Гаражи</a></li>
                    <li className="catalog__item"><a href="#"> &gt; Гаражи</a></li>
                    <li className="catalog__item"><a href="#"> &gt; Длинное назва...</a></li>
                    <li className="catalog__item"><a href="#"> &gt; Автопавильоны</a></li>
                    <li className="catalog__item"><a href="#"> &gt; Балки</a></li>
                    <li className="catalog__item"><a href="#"> &gt; Анкеры</a></li>
                    <li className="catalog__item"><a href="#"> &gt; Блоки</a></li>
                    <li className="catalog__item"><a href="#"> &gt; Автопавильоны</a></li>
                    <li className="catalog__item"><a href="#"> &gt; Вазоны</a></li>
                    <li className="catalog__item"><a href="#"> &gt; Гаражи</a></li>
                    <li className="catalog__item"><a href="#"> &gt; Гаражи</a></li>
                    <li className="catalog__item"><a href="#"> &gt; Гаражи</a></li>
                </ul>
            </div>
        </section>

    </>
   
  );
}