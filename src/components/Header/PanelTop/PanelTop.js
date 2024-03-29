import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavHeader from '../../NavHeader/NavHeader';
import Location from '../../Location';

const PanelTop = () => {
  return (
    <Row className="main-panel-top ">
      <Col>
        <Location />
      </Col>
      <Col>
        <NavHeader />
      </Col>
    </Row>
  );
};

export default PanelTop;
