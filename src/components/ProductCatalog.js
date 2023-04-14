import React from 'react';
import Product from './Product';
import {useQuery} from '@tanstack/react-query';
import {getProducts} from '../services/api';

const ProductCatalog = () => {
  const {data, status} = useQuery ({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  const listProduct =
    data &&
    data.map (product => (
      <Product
        key={product.id}
        product={product}
        title={product.title}
        image={product.image}
      />
    ));

  return (
    <section className="our-products">
      <h2>Наша продукция</h2>
      <div>
        {status === 'error' && <p>Ошибка</p>}
        {status === 'loading' && <p>Загрузка..Исправляй.</p>}
        {status === 'success' &&
          <div className="list">
            {listProduct}
          </div>}
      </div>
    </section>
  );
};

export default ProductCatalog;
