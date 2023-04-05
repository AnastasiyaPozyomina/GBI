import axios from 'axios';

const getProducts = () => axios.get ('https://my-json-server.typicode.com/AnastasiyaPozyomina/restapigbi/products').then(res=>res.data)

export default getProducts;