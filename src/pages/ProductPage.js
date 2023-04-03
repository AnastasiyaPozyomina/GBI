import React from 'react';
import {Route, Link, Routes, useParams} from 'react-router-dom';

export default function ProductPage () {
    const {params} = useParams()
    console.log(params)
  return <h2>userId is 👉️ {params.id} </h2>;
}
