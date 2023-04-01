import React from 'react';

export default function Sponsors () {
  return (
    <div>
      <section className="sponsors">
        <a classlassName="sponsors__link" href="#">
          {' '}
          <img src="assets/images/sponsors/эталон.svg" alt="логотип ЭТАЛОн" />
        </a>
        <a classlassName="sponsors__link" href="#">
          <img src="assets/images/sponsors/МИЦ.svg" alt="логотип МИЦ" />
        </a>
        <a classlassName="sponsors__link" href="#">
          <img src="assets/images/sponsors/ПИК.svg" alt="логотип ПИК группа" />
        </a>
        <a classlassName="sponsors__link" href="#">
          {' '}
          <img
            src="assets/images/sponsors/ДОНСТРОЙ.svg"
            alt="логотип ДОНСТРОЙ"
          />
        </a>
        <a claslassNames="sponsors__link" href="#">
          <img
            src="assets/images/sponsors/Конструктор.svg"
            alt="логотип КОНСТРУКТОР"
          />
        </a>
      </section>

    </div>
  );
}
