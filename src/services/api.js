import axios from 'axios';
import {ITEM_PER_PAGE} from '../utils/constants';

export const getPostList = async page => {
  const response = await fetch (
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${ITEM_PER_PAGE}`
  );
  const totalData = response.headers.get ('X-Total-Count');
  const data = await response.json ();
  return {
    posts: data,
    totalData,
  };
};

export const getProducts = () =>
  axios
    .get (
      'https://my-json-server.typicode.com/AnastasiyaPozyomina/restapigbi/products'
    )
    .then (res => res.data);

export const getCategoryBalki = () =>
  axios
    .get (
      'https://my-json-server.typicode.com/AnastasiyaPozyomina/restapigbi/products/?category=Балки'
    )
    .then (res => res.data);


//GET /posts?_page=7
//GET /posts?_page=7&_limit=20

// export const getPostList = async (page) => {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/posts?/' +  page=${page}`);
//   const totalData = response.headers.get('X-Total-Count');
//   const data = await response.json();
//   return {
//     postItem: data,
//     totalData
//   }
// }
