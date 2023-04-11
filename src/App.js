import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from './pages/About';
import Blog from './pages/Blog';
import Reviews from './pages/Reviews';
import QuestionsAndAnswers from './pages/QuestionsAndAnswers';
import ProductPage from './pages/ProductPage';
import Contacts from './pages/Contacts';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/questions-and-answers" element={<QuestionsAndAnswers />} />
      <Route path="/contacts" elememnt={<Contacts />} />
      <Route path="/products/:id" element={<ProductPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
