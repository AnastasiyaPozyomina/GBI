import React from 'react';

const Subscription = () => {
  return (
    <section className="subscribe">
      <div className="subscribe--left">
        <div className="subscribe__caption">
          <h3 className="subscribe__title">
            "Нет времени искать нужный товар?"
          </h3>
          <p className="subscribe__text">Получите консультацию по телефону!</p>
        </div>
        <form className="subscribe__form">
          <input
            className="subscribe__form-text"
            value="+7 (000) 000 - 00 - 00"
            maxlength="10"
            type="text"
            name="tel"
          />
          <input
            className="subscribe__form-btn"
            type="submit"
            value="Получить консультацию"
          />
        </form>
      </div>

      <div className="subscribe--right">
        <img
          className="author__img"
          src="assets/images/subscribe/icon-man-recovery 1.png"
          alt="фотография Сергея Владимировича"
        />
        <div className="author">
          <p className="author__name">Сергей Владимирович</p>
          <img
            className="line"
            src="assets/images/subscribe/line.svg"
            alt="оранжевая линия"
          />
          <p className="author__text">
            Эксперт по продажам ЖБИ
            (опыт работы 10 лет)
          </p>
        </div>
      </div>

    </section>
  );
};

export default Subscription;
