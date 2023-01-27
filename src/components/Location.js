import React from 'react';
import { Nav } from 'react-bootstrap';

export default function Location () {
  return (
        <div className="location__button">
          <Nav.Link href="#">
            <img
              src="assets/images/main-panel/Vector.svg"
              alt="иконка местоположения"
            />
            Санкт-Петербург
          </Nav.Link>
        
        </div>
  );
}
