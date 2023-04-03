import React from 'react';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query';

const fetchProducts = async () => {
  const res = await fetch (
    'https://my-json-server.typicode.com/AnastasiyaPozyomina/restapigbi/products'
  );
  return res.json ();
};

export default function SearchForm () {
  const {data, status} = useQuery ('products', fetchProducts);
  return (
    <section className="catalog">
      {status === 'error' && <p>Ошибка</p>}
      {status === 'loading' && <p>Загрузка...</p>}
      {status === 'success' &&
        <ul id="menu-catalog">
          <li onclick="clickButtons()">
            <a class="menu-catalog__title" href="#">
              <img
                src="assets/images/main-content/Group1.svg"
                alt="меню каталога"
              />
              Каталог
            </a>
          </li>
          {data.map (data => (
            <li key={data.id}>
              <a className="menu-catalog__link link" href="#">
                {data.category}
              </a>
            </li>
          ))}
          <li><a className="menu-catalog__link link other" href="">...</a></li>
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
}
