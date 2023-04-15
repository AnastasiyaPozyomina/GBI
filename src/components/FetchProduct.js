import React from 'react';
import {useParams} from 'react-router-dom';
import {getProducts} from '../services/api';
import {useQuery} from '@tanstack/react-query';
import Title from './Title';
import ImageOpen from './ImageOpen';
import {Col, Row} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />)

const FetchProduct = () => {
  const id = useParams ().id;
  console.log (id);
  const {isLoading, data, isError, error} = useQuery ({
    queryKey: ['posts', id],
    queryFn: getProducts,
  });

  if (isLoading) return <Spin indicator={antIcon} />;
  if (isError) return `Error: ${error.message}`;

  const product = data.find (n => n.id === Number (id));
  console.log (product.title);

  return (
    <div>
      <Title title={product.title} />

      <Row>
        <Col span={6} push={18}>
         
        </Col>
        <Col span={18} pull={6}>
          <ImageOpen product={product} />
        </Col>
      </Row>

    </div>
  );
};

export default FetchProduct;
