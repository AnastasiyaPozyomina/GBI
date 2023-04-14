import React from 'react';
import {useParams} from 'react-router-dom';
import {getProducts} from '../services/api';
import {useQuery} from '@tanstack/react-query';
import Title from './Title';
import {Col, Row} from 'react-bootstrap';

const FetchProduct = () => {
  const id = useParams ().id;
  console.log (id);
  const {isLoading, data, isError, error} = useQuery ({
    queryKey: ['posts', id],
    queryFn: getProducts,
  });

  if (isLoading) return 'Loading...';
  if (isError) return `Error: ${error.message}`;

  const product = data.find (n => n.id === Number (id));
  console.log (product.title);

  return (
    <div>
      <Title title={product.title} />
      <Row>
        <Col>
          <img src={product.image} />
        </Col>
        <Col>
          <p>  </p>
          <button>В корзину</button>
        </Col>
        <Row>
          <Col>
            <caption>Характеристики</caption>
            <table>

              <tr>
                <th>Длина</th>
                <th>990</th>

              </tr>
              <tr>
                <th>Высота</th>
                <th>220</th>
              </tr>
              <tr>
                <th>Вес</th>
                <th>990</th>

              </tr>
              <tr>
                <th>Пункт 10</th>
                <th>220</th>
              </tr>
              <tr>
                <th>Вес</th>
                <th>990</th>

              </tr>
              <tr>
                <th>Пункт 20</th>
                <th>220</th>
              </tr>
            </table>
          </Col>
          <Col />
        </Row>
      </Row>
    </div>
  );
};

export default FetchProduct;
