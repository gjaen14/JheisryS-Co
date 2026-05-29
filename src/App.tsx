import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Pages
import Home from './pages/Home';
import Soluciones from './pages/Soluciones';
import LaFirma from './pages/LaFirma';
import Resultados from './pages/Resultados';
import Diagnostico from './pages/Diagnostico';
import Acceso from './pages/Acceso';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="soluciones" element={<Soluciones />} />
          <Route path="la-firma" element={<LaFirma />} />
          <Route path="resultados" element={<Resultados />} />
          <Route path="diagnostico" element={<Diagnostico />} />
          <Route path="acceso" element={<Acceso />} />
        </Route>
      </Routes>
    </Router>
  );
}
