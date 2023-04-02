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
export default function ProductCatalog () {
  const {data, status} = useQuery ('products', fetchProducts);
  return (
    <section className="our-products">
      <h2>Наша продукция </h2>
      <div>
        {status === 'error' && <p>Ошибка</p>}
        {status === 'loading' && <p>Загрузка...</p>}
        {status === 'success' &&
          <ul className="list">
            {data.map (data => (
              <li className="list__item" key={data.id}>
                <a className="our-products__card" href="#">
                  <div className="our-products__caption">

                    {' '}
                    <p className="our-products__title">
                      <img
                        src="assets/images/our-products/icon.svg"
                        alt="стрелка"
                      />
                      {data.title}
                    </p>
                    <p className="our-products__price">
                      от {data.price} рублей
                    </p>
                  </div>
                  <img
                    className="our-products__img"
                    src={data.image}
                    alt={data.title}
                  />
                </a>
              </li>
            ))}
          </ul>}
      </div>
    </section>
  );
}
