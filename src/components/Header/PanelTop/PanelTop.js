import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavHeader from '../../NavHeader/NavHeader';
import Location from '../../Location';

export default function PanelTop () {
  return (
   <Row>
      <Col>
        <Location />
      </Col>
      <Col>
      <NavHeader />
      </Col>
    </Row>
  );
}
