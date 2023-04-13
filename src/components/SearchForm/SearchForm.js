import React from 'react';
import {useQuery} from 'react-query';
import {NavLink} from 'react-router-dom';

const fetchProducts = async () => {
  const res = await fetch (
    'https://my-json-server.typicode.com/AnastasiyaPozyomina/restapigbi/products'
  );
  return res.json ();
};

const SearchForm = () => {
  const {data, status} = useQuery ('products', fetchProducts);
  return (
    <section className="catalog">
      {status === 'error' && <p>Ошибка</p>}
      {status === 'loading' && <p>Загрузка...</p>}
      {status === 'success' &&
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
        </ul>}
      <div className="search-container">
        <form className="search">
          <input
            className="search__text"
            type="text"
            placeholder="Поиск по каталогу ЖБИ"
            name="search"
          />
          <button className="search__submit" type="submit">Поиск</button>
        </form>
      </div>
    </section>
  );
};

export default SearchForm;
