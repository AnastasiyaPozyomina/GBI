import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

const products = [
    { id: 1, title: "Автопавильоны", description: "Description1" },
    { id: 2, title: "Плиты", description: "Description2" },
    { id: 3, title: "Балки", description: "Description3" },
    { id: 4, title: "Блоки", description: "Description4" },
    { id: 4, title: "Брусы", description: "Description4" },
    { id: 4, title: "Вазоны", description: "Description4" },
    { id: 4, title: "Гаражи", description: "Description4" },
  ];


  export default function ProductCard () {

        let { id } = useParams();
      
        return (
          <div>
            <h3>ID: {id}</h3>
          </div>
        );
      }

 