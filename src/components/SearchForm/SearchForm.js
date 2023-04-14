import React from 'react';
import {NavLink} from 'react-router-dom';
import Button from '../Button';

const SearchForm = () => {
  return (
    <section className="catalog">
      <ul id="menu-catalog">
        <li onClick="clickButtons()">
          <a className="menu-catalog__title" href="#">
            <img
              src="/assets/images/main-content/Group1.svg"
              alt="меню каталога"
            />
            Каталог
          </a>
        </li>

        <li>
          <NavLink to="product-list" className="menu-catalog__link link">
            Автопавильоны
          </NavLink>
        </li>
        <li>
          <NavLink to="product-list" className="menu-catalog__link link">
            Плиты
          </NavLink>
        </li>
        <li>
          <NavLink to="product-list" className="menu-catalog__link link">
            Балки
          </NavLink>
        </li>
        <li>
          <NavLink to="product-list" className="menu-catalog__link link">
            Блоки
          </NavLink>
        </li>
        <li>
          <NavLink to="product-list" className="menu-catalog__link link">
            Брусы
          </NavLink>
        </li>
        <li>
          <NavLink to="product-list" className="menu-catalog__link link">
            Вазоны
          </NavLink>
        </li>
        <li>
          <NavLink to="product-list" className="menu-catalog__link link">
            Гаражи
          </NavLink>
        </li>
      </ul>
      <div className="search-container">
        <form className="search">
          <input
            className="search__text"
            type="text"
            placeholder="Поиск по каталогу ЖБИ"
            name="search"
          />
          <Button title={'Поиск'} />
        </form>
      </div>
    </section>
  );
};

export default SearchForm;
