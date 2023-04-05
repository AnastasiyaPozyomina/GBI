import React from 'react';
import {
  useQuery
} from 'react-query';
import Product from './Product';
import getProducts from '../request';



export default function ProductCatalog () {
   const {data, status} = useQuery('products', getProducts);
   
   const listProduct = data && data.map((product)=>(<Product key={product.id} product={product} title={product.title}
    image={product.image}/>))
   
  return (
    <section className="our-products">
      <h2>Наша продукция </h2>
      <div>
   {status === 'error' && <p>Ошибка</p>}
   {status === 'loading' && <p>Загрузка...</p>}
   {status === 'success' &&
     <ul className="list">
      {listProduct}
     </ul>}
 </div>
    </section>
  );
}
