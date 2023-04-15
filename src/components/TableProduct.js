import React from 'react';
import Title from './Title';
import {useQuery} from '@tanstack/react-query';
import {getCategoryBalki} from '../services/api';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

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

const options = {
  page: 1,
  sizePerPage: 5,
  nextPageText: '>',
  prePageText: '<',
  showTotal: true,
};

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
      <BootstrapTable
        keyField="id"
        data={data}
        columns={columns}
        // striped
        hover
        // expandRow={expandRow}
        //apply the pagination function here
        pagination={paginationFactory (options)}
      />
    </div>
  );
};

export default TableProduct;
