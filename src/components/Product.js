import React from 'react';
import {NavLink} from 'react-router-dom';

const Product = ({product}) => {
  return (
    <div>
      <li className="list__item">
        <NavLink
          to={'/products/' + product.id}
          className="our-products__card"
          product={product}
        >
          {product.name}
          <div className="our-products__caption">
            <p className="our-products__title">
              <img src="assets/images/our-products/icon.svg" alt="стрелка" />
              {product.title}
            </p>
            <p className="our-products__price">
              от {product.price} рублей
            </p>
          </div>
          <img
            className="our-products__img"
            src={product.image}
            alt={product.title}
          />
        </NavLink>
      </li>
    </div>
  );
};

export default Product;
