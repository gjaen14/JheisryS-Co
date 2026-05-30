import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import BrandLogo from '../components/BrandLogo';

export default function MainLayout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

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

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            to="/diagnostico"
            className="hidden sm:inline-block border border-brand-taupe/40 hover:border-brand-taupe hover:text-brand-taupe text-brand-white font-sans text-[10px] tracking-widest uppercase py-2.5 px-5 rounded-full transition-all duration-300"
          >
            Diagnóstico
          </Link>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-brand-taupe p-2 -mr-2 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <div 
        className={`fixed inset-0 z-30 bg-brand-obsidian/95 backdrop-blur-xl transition-all duration-500 ease-in-out md:hidden flex flex-col justify-center ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center justify-center space-y-8 px-6 text-sm tracking-[0.2em] uppercase font-light text-brand-champagne/80">
          <Link onClick={() => setIsMobileMenuOpen(false)} to="/" className={`hover:text-brand-taupe transition-colors duration-200 ${location.pathname === '/' ? 'text-brand-taupe font-medium' : ''}`}>Inicio</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} to="/soluciones" className={`hover:text-brand-taupe transition-colors duration-200 ${location.pathname === '/soluciones' ? 'text-brand-taupe font-medium' : ''}`}>Soluciones</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} to="/la-firma" className={`hover:text-brand-taupe transition-colors duration-200 ${location.pathname === '/la-firma' ? 'text-brand-taupe font-medium' : ''}`}>La Firma</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} to="/resultados" className={`hover:text-brand-taupe transition-colors duration-200 ${location.pathname === '/resultados' ? 'text-brand-taupe font-medium' : ''}`}>Resultados</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} to="/acceso" className={`hover:text-brand-taupe transition-colors duration-200 ${location.pathname === '/acceso' ? 'text-brand-taupe font-medium' : ''}`}>Acceso</Link>
          
          <div className="pt-8 border-t border-brand-taupe/10 w-[80%] max-w-[250px] flex justify-center">
            <Link
              onClick={() => setIsMobileMenuOpen(false)}
              to="/diagnostico"
              className="w-full text-center border border-brand-taupe bg-brand-taupe/10 text-brand-taupe font-sans text-[10px] tracking-widest uppercase py-4 px-6 rounded-full transition-all duration-300"
            >
              Agendar Diagnóstico
            </Link>
          </div>
        </nav>
      </div>

      {/* PAGE CONTENT */}
      <main className="flex-grow pt-24 md:pt-0">
        <Outlet />
      </main>

      {/* FOOTER GLOBAL - 3 Columns */}
      <footer className="py-16 bg-brand-obsidian border-t border-brand-taupe/15 px-6 md:px-16">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-left">
          
          {/* Col 1: Identidad */}
          <div className="space-y-4">
            <BrandLogo theme="gold" size={42} showText={true} />
            <p className="font-sans text-xs text-brand-champagne/50 font-light max-w-xs leading-relaxed">
              Ecosistemas de Autoridad Digital
            </p>
            <div className="text-[10px] text-brand-champagne/40 flex gap-4">
              <a href="#" className="hover:text-brand-taupe transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-brand-taupe transition-colors">Instagram</a>
            </div>
            <div className="pt-2">
              <p className="text-[10px] font-mono text-brand-champagne/40">
                © 2026 Jheisry Aguilera
              </p>
              <p className="text-[8px] font-sans text-brand-champagne/20 mt-1 tracking-widest">
                EJECUCIÓN TÉCNICA POR SOARITY
              </p>
            </div>
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
