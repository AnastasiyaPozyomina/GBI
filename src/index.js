import {render} from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App';
import About from './pages/About';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contacts from './pages/Contacts';
import Reviews from './pages/Reviews';
import QuestionsAndAnswers from './pages/QuestionsAndAnswers';
import ProductPage from './pages/ProductPage';
import ProductCatalog from './components/ProductCatalog';

render (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/questions-and-answers" element={<QuestionsAndAnswers />} />
      <Route path="/contact" elememnt={<Contacts />} />
      <Route path="/products/:productId" elememnt={<ProductPage />}  />
    </Routes>
  </BrowserRouter>,
  document.getElementById ('root')
);
