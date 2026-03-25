import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import './styles/global.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/home.css';
import './styles/pages.css';
import Home from './pages/Home';
import Glass from './pages/Glass';
import Amido from './pages/Amido';
import Sash from './pages/Sash';
import Yushitsu from './pages/Yushitsu';
import Kagi from './pages/Kagi';
import Shoji from './pages/Shoji';
import Bohan from './pages/Bohan';
import Price from './pages/Price';
import Area from './pages/Area';
import Faq from './pages/Faq';
import Works from './pages/Works';
import Compare from './pages/Compare';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/glass" element={<Glass />} />
        <Route path="/amido" element={<Amido />} />
        <Route path="/sash" element={<Sash />} />
        <Route path="/yushitsu" element={<Yushitsu />} />
        <Route path="/kagi" element={<Kagi />} />
        <Route path="/shoji" element={<Shoji />} />
        <Route path="/bohan" element={<Bohan />} />
        <Route path="/price" element={<Price />} />
        <Route path="/area" element={<Area />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/works" element={<Works />} />
        <Route path="/compare" element={<Compare />} />
      </Routes>
    </BrowserRouter>
  );
}
