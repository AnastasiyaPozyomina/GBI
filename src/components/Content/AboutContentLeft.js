import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Advantages from '../Advantages';
import CarouselBox from '../CarouselBox';
import Title from '../Title';

const AboutContentLeft = () => {
  return (
    <div>
      <Title title={'О нас'} />
      <CarouselBox />
      <Row>
        <Col>
          <div className="about-content--left">
            <h3>
              ЖБИ России — это комплекс производственных площадок в Москве и Московской области, на которых
              круглосуточно создаются и отпускаются качественные железобетонные изделия в широком
              ассортименте..
            </h3>
            <p>
              Более чем 12 лет назад мы начали создавать железобетонные изделия, и все это время выполняем свою
              работу добросовестно, быстро и в соответствии прописанным ГОСТам. Принципы работы компании
              основаны на том, что каждый клиент — частный покупатель или крупный промышленный застройщик —
              должен иметь возможность срочно, удобно и выгодно заказать нужные ему ЖБИ.
            </p>

            <p>
              Специалисты компании не только реализуют ЖБИ, но также консультируют по поводу их технических
              характеристик, советуют оптимальный вариант изделий для конкретной инженерной задачи, помогают
              определиться с идеальным типоразмером ЖБИ.
            </p>

            <p>
              В краткосрочной перспективе расширение сети производственных площадок, а также обеспечение
              срочной доставки оптовых партий заказов в крупные города России.
            </p>
            <h3>8 преимуществ</h3>
            <ul>
              <li>
                <img src="/assets/images/about/оранж галка.svg" alt="галочка" />
                Опыт производства
              </li>
              <li>
                <img src="/assets/images/about/оранж галка.svg" alt="галочка" />
                Профессиональные кадры
                предприятия
              </li>
              <li>
                <img src="/assets/images/about/оранж галка.svg" alt="галочка" />
                Современное оборудование
                производства
              </li>
              <li>
                <img src="/assets/images/about/оранж галка.svg" alt="галочка" />
                Передовые технологии
                производства
              </li>
              <li>
                <img src="/assets/images/about/оранж галка.svg" alt="галочка" />
                Высококачественная сырьевая
                база производства
              </li>
              <li>
                <img src="/assets/images/about/оранж галка.svg" alt="галочка" />
                Организованная логистика
                доставки железобетонных изделий
              </li>
              <li>
                <img src="/assets/images/about/оранж галка.svg" alt="галочка" />
                Подтвержденное качество изделий
              </li>
            </ul>
          </div>
        </Col>
        <Col>
          <div className="about-content--right">
            <img src="/assets/images/about/image15.png" alt="" />
            <img src="/assets/images/about/image16.png" alt="" />
          </div>
        </Col>
      </Row>
      <div>

        <Advantages />

        <div>
          <p className="content__text">
            Мы готовы принять заказ на поставку ЖБИ–продукции круглосуточно, в удобное
            для
            Вас время, а также осуществить доставку ЖБИ-продукции собственным транспортом:
            {' '}
          </p>

          <p className="content__text">
            {' '}
            - в любые точки г. Москвы (так же в пределах Третьего транспортного кольца
            (ТТК) и Садового кольца (СК)) и Московской области;{' '}
          </p>

          <p className="content__text">
            - в соседние регионы: Калужская область, Тульская область, Рязанская
            область,
            Владимирская область, Ярославская область, Тверская область, Смоленская область, Ивановская
            область.
          </p>
        </div>

        <div className="our-team">
          <h4>Наша команда</h4>
          <div className="our-team__list">
            <div className="our-team__item">
              <img
                src="/assets/images/subscribe/icon-man-recovery 1.png"
                alt="фотография Сергея Владимировича"
              />
              <div className="author">
                <p className="author__name">Сергей Владимирович</p>
                <img
                  className="line"
                  src="/assets/images/subscribe/line.svg"
                  alt="оранжевая линия"
                />
                <p className="author__text">
                  Эксперт по продажам ЖБИ(опыт работы 10 лет)
                </p>
              </div>
            </div>

            <div className="our-team__item">
              <img
                src="/assets/images/subscribe/icon-man-recovery 1.png"
                alt="фотография Сергея Владимировича"
              />
              <div className="author">
                <p className="author__name">Сергей Владимирович</p>
                <img
                  className="line"
                  src="/assets/images/subscribe/line.svg"
                  alt="оранжевая линия"
                />
                <p className="author__text">
                  Эксперт по продажам ЖБИ
                  (опыт работы 10 лет)
                </p>
              </div>
            </div>

            <div className="our-team__item">
              <img
                src="/assets/images/subscribe/icon-man-recovery 1.png"
                alt="фотография Сергея Владимировича"
              />
              <div className="author">
                <p className="author__name">Сергей Владимирович</p>
                <img
                  className="line"
                  src="/assets/images/subscribe/line.svg"
                  alt="оранжевая линия"
                />
                <p className="author__text">
                  Эксперт по продажам ЖБИ
                  (опыт работы 10 лет)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContentLeft;
