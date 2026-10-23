import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Product from './pages/Product';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index.html" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog.html" element={<Catalog />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product.html" element={<Product />} />
      </Routes>
      <Footer />
    </>
  );
}
