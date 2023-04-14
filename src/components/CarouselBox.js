import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselBox () {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/images/about/image17.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>
              Продажа железобетонных изделий по всей России от производителя
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/images/about/image17.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>
              Продажа железобетонных изделий по всей России от производителя
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/images/about/image17.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>
              Продажа железобетонных изделий по всей России от производителя
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselBox;
