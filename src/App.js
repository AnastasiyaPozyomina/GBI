import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {QueryClient, QueryClientProvider, useQuery} from 'react-query';
import Home from './pages/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from './pages/About';
import Blog from './pages/Blog';
import Reviews from './pages/Reviews';
import QuestionsAndAnswers from './pages/QuestionsAndAnswers';
import Contacts from './pages/Contacts';
import ProductPage from './pages/ProductPage';

const queryClient = new QueryClient ();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route
          path="/questions-and-answers"
          element={<QuestionsAndAnswers />}
        />
        <Route path="/contacts" elememnt={<Contacts />} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
