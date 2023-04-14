import React from 'react';
import Title from './Title';
import {useQuery} from '@tanstack/react-query';
import {getCategoryBalki} from '../services/api';
import BootstrapTable from 'react-bootstrap-table-next';

const columns = [
  {
    dataField: 'id',
    text: 'Product ID',
    headerStyle: (colum, colIndex) => {
      return {width: '10%', textAlign: 'center'};
    },
  },
  {
    dataField: 'title',
    text: 'Наименование',
    sort: true,
    headerStyle: (colum, colIndex) => {
      return {width: '10%', textAlign: 'center'};
    },
  },
  {
    dataField: 'height',
    text: 'Размеры, см',
    headerStyle: (colum, colIndex) => {
      return {width: '10%', textAlign: 'center'};
    },
  },
  {
    dataField: 'weight',
    text: 'Вес, т',
    headerStyle: (colum, colIndex) => {
      return {width: '10%', textAlign: 'center'};
    },
  },
  {
    dataField: 'price',
    text: 'Цена',
    headerStyle: (colum, colIndex) => {
      return {width: '10%', textAlign: 'center'};
    },
  },
];

const TableProduct = () => {
  const {isLoading, data, isError, error} = useQuery ({
    queryKey: ['products'],
    queryFn: getCategoryBalki,
  });

  if (isLoading) return 'Loading...';
  if (isError) return `Error: ${error.message}`;
  console.log (data[0]);
  return (
    <div>
      <Title title={'Балки'} />
      <BootstrapTable keyField="id" data={data} columns={columns} />
    </div>
  );
};

export default TableProduct;
