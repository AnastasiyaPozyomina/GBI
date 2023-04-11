import React from 'react';
import { Link } from 'react-router-dom';

const Title = ({title}) => {
  return (
    <div className="wrapper-title">
      <h1> {title} </h1>
    </div>
  );
};

export default Title;
