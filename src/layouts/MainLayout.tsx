import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import BrandLogo from '../components/BrandLogo';

export default function MainLayout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-brand-obsidian text-brand-white relative">
      {/* HEADER */}
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 px-6 md:px-16 py-5 flex justify-between items-center ${
          isScrolled 
            ? 'bg-brand-obsidian/85 backdrop-blur-md border-b border-brand-taupe/15 shadow-xl' 
            : 'bg-transparent border-b border-white/5'
        }`}
      >
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <BrandLogo theme="gold" size={38} showText={true} />
        </Link>

        {/* Global Navigation */}
        <nav className="hidden md:flex items-center space-x-10 text-xs tracking-[0.2em] uppercase font-light text-brand-champagne/80">
          <Link to="/" className={`hover:text-brand-taupe transition-colors duration-200 ${location.pathname === '/' ? 'text-brand-taupe font-medium' : ''}`}>Inicio</Link>
          <Link to="/soluciones" className={`hover:text-brand-taupe transition-colors duration-200 ${location.pathname === '/soluciones' ? 'text-brand-taupe font-medium' : ''}`}>Soluciones</Link>
          <Link to="/la-firma" className={`hover:text-brand-taupe transition-colors duration-200 ${location.pathname === '/la-firma' ? 'text-brand-taupe font-medium' : ''}`}>La Firma</Link>
          <Link to="/resultados" className={`hover:text-brand-taupe transition-colors duration-200 ${location.pathname === '/resultados' ? 'text-brand-taupe font-medium' : ''}`}>Resultados</Link>
          <Link to="/acceso" className={`hover:text-brand-taupe transition-colors duration-200 ${location.pathname === '/acceso' ? 'text-brand-taupe font-medium' : ''}`}>Acceso</Link>
        </nav>

        {/* CTA */}
        <div>
          <Link
            to="/diagnostico"
            className="hidden sm:inline-block border border-brand-taupe/40 hover:border-brand-taupe hover:text-brand-taupe text-brand-white font-sans text-[10px] tracking-widest uppercase py-2.5 px-5 rounded-full transition-all duration-300"
          >
            Diagnóstico
          </Link>
        </div>
      </header>

      {/* PAGE CONTENT */}
      <main className="flex-grow pt-24 md:pt-0">
        <Outlet />
      </main>

      {/* FOOTER GLOBAL - 3 Columns */}
      <footer className="py-16 bg-brand-obsidian border-t border-brand-taupe/15 px-6 md:px-16">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Col 1: Identidad */}
          <div className="space-y-4">
            <BrandLogo theme="gold" size={42} showText={true} />
            <p className="font-sans text-xs text-brand-champagne/50 font-light max-w-xs leading-relaxed mx-auto md:mx-0">
              Ecosistemas de Autoridad Digital
            </p>
            <div className="text-[10px] text-brand-champagne/40 flex gap-4 justify-center md:justify-start">
              <a href="#" className="hover:text-brand-taupe transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-brand-taupe transition-colors">Instagram</a>
            </div>
            <p className="text-[10px] font-mono text-brand-champagne/30 mt-3">
              © {new Date().getFullYear()} Soarity & Co.
            </p>
          </div>

          {/* Col 2: Navegación */}
          <div className="space-y-4">
            <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase text-brand-taupe font-semibold">Navegación</h4>
            <ul className="space-y-2 text-xs text-brand-champagne/60 font-light">
              <li><Link to="/" className="hover:text-brand-white transition-colors">Inicio</Link></li>
              <li><Link to="/soluciones" className="hover:text-brand-white transition-colors">Soluciones</Link></li>
              <li><Link to="/la-firma" className="hover:text-brand-white transition-colors">La Firma</Link></li>
              <li><Link to="/resultados" className="hover:text-brand-white transition-colors">Resultados</Link></li>
              <li><Link to="/acceso" className="hover:text-brand-white transition-colors">Acceso</Link></li>
            </ul>
          </div>

          {/* Col 3: Protocolo */}
          <div className="space-y-4">
            <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase text-brand-taupe font-semibold">Protocolo</h4>
            <ul className="space-y-2 text-xs text-brand-champagne/60 font-light">
              <li><Link to="/acceso" className="hover:text-brand-white transition-colors">Política de Privacidad</Link></li>
              <li><Link to="/acceso" className="hover:text-brand-white transition-colors">Términos y Condiciones</Link></li>
              <li><Link to="/acceso" className="hover:text-brand-white transition-colors">Código de Operación</Link></li>
            </ul>
          </div>

        </div>
      </footer>
    </div>
  );
}
