import React from 'react';
import {NavLink} from 'react-router-dom';
import Button from '../Button';
import {DownOutlined} from '@ant-design/icons';
import {Dropdown, Space} from 'antd';

const items = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: '0',
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];

const SearchForm = () => {
  return (
    <section className="catalog">
      <ul id="menu-catalog">
        <li>
          <Dropdown
            menu={{
              items,
            }}
            trigger={['click']}
          >
            <a
              className="menu-catalog__title"
              onClick={e => e.preventDefault ()}
            >
              <img
                src="/assets/images/main-content/Group1.svg"
                alt="меню каталога"
              />
              <Space>
                Каталог
                
              </Space>

            </a>
          </Dropdown>
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
