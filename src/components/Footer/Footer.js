import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer--left">
          <div className="company">
            <div className="company__logo">
              <img
                src="/assets/images/footer/логотипорг.svg"
                alt="логотип организаций"
              />
            </div>

            <div className="company__contact">
              <p className="phone-number">
                <a className="link" href="tel:88000000000"> 8 800 000 00 00</a>
              </p>
              <p className="site">
                <a className="link" href="mailto:info@ruzhbi.ru">
                  info@ruzhbi.ru
                </a>
              </p>
            </div>

          </div>
          <div className="location__button">
            <a href="#">
              <img
                src="assets/images/main-panel/Vector.svg"
                alt="иконка местоположения"
              />
              г. Москва, ул. Марии Ульяновой 33/23, офис 3
            </a>
          </div>

          <p className="nav-title">Информация</p>
          <nav className="nav">
            <a className="nav__link link">О компании</a>
            <a className="nav__link link" href="#">Отзывы</a>
            <a className="nav__link link" href="#">Статьи</a>
            <a className="nav__link link" href="#">Вопросы и ответы</a>
            <a className="nav__link link" href="#">Контакты</a>
          </nav>

          <p className="copyright">Политика конфиденциальности</p>
          <p className="copyright">
            © 2016-2020. ЖБИ Россия: поставки железобетонных изделий по всей России. Все права
            защищены.
          </p>
        </div>

        <div className="footer--right">
          <div className="socials">
            <a className="socials__item" href="#">
              <img src="assets/images/footer/ютуб.svg" alt="иконка ютуба" />
            </a>
            <a className="socials__item" href="#">
              <img src="assets/images/footer/vk.svg" alt="иконка вконтакте" />
            </a>
            <a className="socials__item" href="#">
              <img
                src="assets/images/footer/facebook.svg"
                alt="иконка фейсбук"
              />
            </a>
            <a className="socials__item" href="#">
              <img
                src="assets/images/footer/instagram.svg"
                alt="иконка инстаграм"
              />
            </a>
          </div>
          <div className="catalog">
            <h3 className="catalog__title">Каталог</h3>
            <ul className="catalog__list">
              <li className="catalog__item"><a href="#">Автопавильоны</a></li>
              <li className="catalog__item"><a href="#">Анкеры</a></li>
              <li className="catalog__item"><a href="#">Блоки</a></li>
              <li className="catalog__item">
                <a href="#">Бруски (брусы) электро...</a>
              </li>
              <li className="catalog__item"><a href="#">Вазоны</a></li>
              <li className="catalog__item">
                <a href="#">Трубы и изделия к ним</a>
              </li>
              <li className="catalog__item"><a href="#">Автопавильоны</a></li>
              <li className="catalog__item">
                <a href="#">Трубы и изделия к ним</a>
              </li>
              <li className="catalog__item"><a href="#">Автопавильоны</a></li>
              <li className="catalog__item"><a href="#">Анкеры</a></li>
              <li className="catalog__item">
                <a href="#">Заборы, панели огражд...</a>
              </li>
              <li className="catalog__item"><a href="#">Блоки</a></li>
              <li className="catalog__item">
                <a href="#">Бруски (брусы) электро...</a>
              </li>
              <li className="catalog__item"><a href="#">Вазоны</a></li>
              <li className="catalog__item"><a href="#">Гаражи</a></li>
              <li className="catalog__item"><a href="#">Автопавильоны</a></li>
              <li className="catalog__item">
                <a href="#">Бруски (брусы) электро...</a>
              </li>
              <li className="catalog__item"><a href="#">Анкеры</a></li>
              <li className="catalog__item">
                <a href="#">Заборы, панели огражд...</a>
              </li>
              <li className="catalog__item"><a href="#">Блоки</a></li>
              <li className="catalog__item"><a href="#">Вазоны</a></li>
              <li className="catalog__item"><a href="#">Гаражи</a></li>
              <li className="catalog__item"><a href="#">Автопавильоны</a></li>
              <li className="catalog__item"><a href="#">Анкеры</a></li>
              <li className="catalog__item">
                <a class="link" href="#">Смотреть все</a>
              </li>
            </ul>
            <div className="footer__logo">
              <a href="#">
                <img
                  src="assets/images/footer/logocomp.svg"
                  alt="логотип компании"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
