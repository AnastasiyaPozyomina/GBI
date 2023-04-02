import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';


const columns = [
  {
    dataField: 'image',
    text: 'Product ID',
  },
  {
    dataField: 'title',
    text: 'Наименование',
  },
  {
    dataField: 'size',
    text: 'Размеры, см',
  },
  {
    dataField: 'weight',
    text: 'Вес,т',
  },
  {
    dataField: 'price',
    text: 'Цена',
  },
  {
    dataField: 'button',
    text: <button className="our-products__btn btn-orange" type="submit">Вся продукция</button>,
  },

];

const products = [
  {
    id: 1,
    category:'Плиты',
    title: 'Плита перекрытия 1',
    article: '2450317',
    image: <img src="./assets/images/products/plates.jpg"></img>,
    description: "Плиты перекрытия железобетонные многопустотные 1ПК 18-10-10а производятся согласно ГОСТ 9561-91 из тяжелого бетона классом В25 (М200), В35 (М300), легкого бетона плотной структуры и силикатного бетона с использованием предварительно напряженной",
    price: '500',
    length:'990',
    weight: '0.515',
    height:'220',
    size: 'Д:200, В:80, Ш:28',
    supplier1:'Екатеринбург',
  },
  {
    id: 2,
    category:'Плиты',
    title: 'Плита перекрытия 1',
    article: '2450317',
    image: <img src="./assets/images/products/plates.jpg"></img>,
    description: "Плиты перекрытия железобетонные многопустотные 1ПК 18-10-10а производятся согласно ГОСТ 9561-91 из тяжелого бетона классом В25 (М200), В35 (М300), легкого бетона плотной структуры и силикатного бетона с использованием предварительно напряженной",
    price: '500',
    length:'990',
    weight: '0.515',
    height:'220',
    size: 'Д:200, В:80, Ш:28',
    supplier1:'Екатеринбург',
  },
  {
    id: 3,
    category:'Плиты',
    title: 'Плита перекрытия 1',
    article: '2450317',
    image: <img src="./assets/images/products/plates.jpg"></img>,
    description: "Плиты перекрытия железобетонные многопустотные 1ПК 18-10-10а производятся согласно ГОСТ 9561-91 из тяжелого бетона классом В25 (М200), В35 (М300), легкого бетона плотной структуры и силикатного бетона с использованием предварительно напряженной",
    price: '500',
    length:'990',
    weight: '0.515',
    height:'220',
    size: 'Д:200, В:80, Ш:28',
    supplier1:'Екатеринбург',
  },
  {
  id: 4,
  category:'Автопавильоны',
  title: 'Автопавильон',
  article: '2450317',
  image: <img src="./assets/images/products/avtopavilion.jpg"></img>,
  description: "Плиты перекрытия железобетонные многопустотные 1ПК 18-10-10а производятся согласно ГОСТ 9561-91 из тяжелого бетона классом В25 (М200), В35 (М300), легкого бетона плотной структуры и силикатного бетона с использованием предварительно напряженной",
  price: '500',
  length:'990',
  weight: '0.515',
  height:'220',
  size: 'Д:200, В:80, Ш:28',
  supplier1:'Екатеринбург',

  },
  {
    id: 5,
    category:'Балки',
    title: 'Балки',
    article: '2450317',
    image: <img src="./assets/images/products/avtopavilion.jpg"></img>,
    description: "Плиты перекрытия железобетонные многопустотные 1ПК 18-10-10а производятся согласно ГОСТ 9561-91 из тяжелого бетона классом В25 (М200), В35 (М300), легкого бетона плотной структуры и силикатного бетона с использованием предварительно напряженной",
    price: '500',
    length:'990',
    weight: '0.515',
    height:'220',
    size: 'Д:200, В:80, Ш:28',
    supplier1:'Екатеринбург',
    },
    {
      id: 6,
      category:'Блоки',
      title: 'Блоки',
      article: '2450317',
      image: <img src="./assets/images/products/avtopavilion.jpg"></img>,
      description: "Плиты перекрытия железобетонные многопустотные 1ПК 18-10-10а производятся согласно ГОСТ 9561-91 из тяжелого бетона классом В25 (М200), В35 (М300), легкого бетона плотной структуры и силикатного бетона с использованием предварительно напряженной",
      price: '500',
      length:'990',
      weight: '0.515',
      height:'220',
      size: 'Д:200, В:80, Ш:28',
      supplier1:'Екатеринбург',
      },
      {
        id: 7,
        category:'Брусы',
        title: 'Брусы',
        article: '2450317',
        image: <img src="./assets/images/products/avtopavilion.jpg"></img>,
        description: "Плиты перекрытия железобетонные многопустотные 1ПК 18-10-10а производятся согласно ГОСТ 9561-91 из тяжелого бетона классом В25 (М200), В35 (М300), легкого бетона плотной структуры и силикатного бетона с использованием предварительно напряженной",
        price: '500',
        length:'990',
        weight: '0.515',
        height:'220',
        size: 'Д:200, В:80, Ш:28',
        supplier1:'Екатеринбург',
        },
        {
        id: 8,
        category:'Вазоны',
        title: 'Вазоны',
        article: '2450317',
        image: <img src="./assets/images/products/avtopavilion.jpg"></img>,
        description: "Плиты перекрытия железобетонные многопустотные 1ПК 18-10-10а производятся согласно ГОСТ 9561-91 из тяжелого бетона классом В25 (М200), В35 (М300), легкого бетона плотной структуры и силикатного бетона с использованием предварительно напряженной",
        price: '500',
        length:'990',
        weight: '0.515',
        height:'220',
        size: 'Д:200, В:80, Ш:28',
        supplier1:'Екатеринбург',
        },
        {
          id: 8,
          category:'Гаражи',
          title: 'Гаражи',
          article: '2450317',
          image: <img src="./assets/images/products/avtopavilion.jpg"></img>,
          description: "Плиты перекрытия железобетонные многопустотные 1ПК 18-10-10а производятся согласно ГОСТ 9561-91 из тяжелого бетона классом В25 (М200), В35 (М300), легкого бетона плотной структуры и силикатного бетона с использованием предварительно напряженной",
          price: '500',
          length:'990',
          weight: '0.515',
          height:'220',
          size: 'Д:200, В:80, Ш:28',
          supplier1:'Екатеринбург',
          },
];

const options = {
  page: 1,
  sizePerPage: 8,
  nextPageText: '>',
  prePageText: '<',
  showTotal: true,
};

function Table () {
  return (
    <div>
      <h1>Таблица</h1>
      <div className="App">
        <p className="Table-header">Basic Table</p>

        <BootstrapTable
          // striped
          hover
          keyField="id"
          data={products}
          columns={columns}
          //    expandRow={ expandRow }
          //apply the pagination function here
          pagination={paginationFactory (options)}
          sort={ { dataField: 'title', text: 'наименование'} } 
        />

      </div>
      <div />
      <div>ОТОбражение</div>
    </div>
  );
}

export default Table;
