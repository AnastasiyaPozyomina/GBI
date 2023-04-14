import React from 'react';
import Advantages from '../Advantages';

const MainContent = () => {
  return (
    <section className="main-content">
      <div classclassName="main-content--left">
        <h1>Продажа железобетонных изделий по всей России от производителя</h1>
        <Advantages />
      </div>
      <div classclassName="main-content--right">
        <img
          src="/assets/images/main-content/Железобетонные перекрытия.png"
          alt="железобетонные перекрытия"
        />
      </div>
    </section>
  );
};

export default MainContent;
