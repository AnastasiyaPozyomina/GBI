import React from 'react';
import Logo from '../../../Logo';

const PanelBottom = () => {
  return (
    <div className="main-panel-bottom">
      <div className="logo">
        <Logo />
        <p className="logo__title">
          Оптовая продажа железобетонных изделий от производителя
        </p>
      </div>
      <div className="main-panel-bottom__items">
        <div className="phone-number">
          <a className="link" href="tel:88000000000">
            <img
              src="/assets/images/main-panel/Vector (1).svg"
              alt="иконка телефона"
            />
            {' '}
            8 800 000 00 00
          </a>
        </div>
        <div className="cart cart-click">
          <img
            className="cart__icon"
            src="/assets/images/main-panel/cart-icon.svg"
            alt="иконка корзины"
          />
          <p className="cart__price">0 руб</p>
        </div>
        <img
          className="user-icon"
          src="/assets/images/main-panel/user-icon.svg"
          alt="иконка пользователя"
        />
      </div>
    </div>
  );
};

export default PanelBottom;
