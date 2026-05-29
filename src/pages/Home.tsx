import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Compass, Cpu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ThreeHeroBackground from '../components/ThreeHeroBackground';
import AuthorityCalculator from '../components/AuthorityCalculator';

export default function Home() {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDiagnosticoClick = () => {
    navigate('/diagnostico');
  };

  return (
    <div>
      {/* SECTION: HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 md:pt-0 overflow-hidden px-4">
        {/* ThreeJS Live Particle Wave & Coordinate Mesh Backdrop */}
        <ThreeHeroBackground />

        {/* Shadow Vignette for Editorial Low-Key Lighting */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-obsidian via-brand-obsidian/45 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_#181514_90%)] pointer-events-none" />

        {/* Centered Typography */}
        <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6 px-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-brand-brown/50 border border-brand-taupe/20 rounded-full px-4 py-1.5 text-xs text-brand-taupe transition-colors cursor-default"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-taupe animate-pulse" />
            <span className="font-sans text-[10px] tracking-widest uppercase font-medium">Análisis de Fugas</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-brand-white tracking-tight leading-[1.1]"
          >
            Estás pagando el impuesto <span className="italic font-normal text-brand-taupe">invisible</span> de la desconfianza.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans text-sm sm:text-base md:text-lg text-brand-champagne/90 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Operas a nivel Senior, pero tu ecosistema digital comunica Junior. Los clientes corporativos te regatean o eligen a competidores menos calificados por una sola razón: la fragilidad técnica de tu marca.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-6 flex justify-center items-center font-sans"
          >
            <button
              onClick={() => scrollToSection('calculator-section')}
              className="w-full sm:w-auto bg-brand-taupe hover:bg-brand-taupe/90 text-brand-obsidian font-sans font-semibold tracking-wider text-xs uppercase py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg shadow-brand-taupe/10"
            >
              <span>Calcular mi pérdida de capital</span>
              <ArrowRight className="w-4 h-4 text-brand-obsidian" />
            </button>
          </motion.div>
        </div>

        {/* Animated Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer opacity-40 hover:opacity-100 transition-opacity" onClick={() => scrollToSection('calculator-section')}>
          <div className="w-[1px] h-12 bg-gradient-to-b from-brand-taupe to-transparent mx-auto flex justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-taupe animate-pulse" />
          </div>
        </div>
      </section>

      {/* SECTION: CALCULADORA DE LUCRO CESANTE */}
      <section id="calculator-section" className="bg-brand-obsidian border-t border-brand-taupe/10 relative">
        <AuthorityCalculator onStartBooking={handleDiagnosticoClick} />
      </section>

      {/* SECTION: EL MISMATCH (LA CONFRONTACIÓN) */}
      <section className="py-20 md:py-32 bg-brand-brown/30 relative border-t border-brand-taupe/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-brand-taupe/5 via-transparent to-transparent pointer-events-none" />

        <div className="px-6 md:px-16 container mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-sans text-xs tracking-[0.4em] uppercase text-brand-taupe font-semibold">
              El Mismatch
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-brand-white tracking-tight leading-tight mt-3">
              Operas como Senior. Te proyectas como Junior.
            </h2>
            <p className="font-sans text-sm text-brand-champagne/80 font-light mt-4 leading-relaxed">
              Existe una brecha de percepción que sabotea tu crecimiento. No es un problema de diseño, es un problema de posicionamiento financiero. Cuando la envoltura no iguala el valor del núcleo, el mercado impone un descuento.
            </p>
          </div>

          {/* Split-screen */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-brand-taupe/15 rounded-2xl overflow-hidden font-sans">
            
            {/* Lado Izquierdo: Tu Operación Real */}
            <div className="bg-brand-brown/50 p-8 md:p-12 flex flex-col justify-center space-y-6 md:border-r border-brand-taupe/15 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-taupe to-transparent" />
              <div>
                <div className="w-10 h-10 rounded-full bg-brand-taupe/10 border border-brand-taupe/30 text-brand-taupe flex items-center justify-center font-bold text-xs mb-6">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-2xl text-brand-white tracking-wide mb-3">Tu Operación Real</h4>
                <ul className="space-y-4 text-xs text-brand-champagne/70 font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-taupe mt-0.5">✦</span> 
                    <span>Consultoría de alto nivel y entrega impecable.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-taupe mt-0.5">✦</span> 
                    <span>Metodologías probadas y procesos blindados.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-taupe mt-0.5">✦</span> 
                    <span>Experiencia corporativa demostrable y resultados sólidos.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Lado Derecho: Tu Imagen Digital */}
            <div className="bg-brand-obsidian/60 p-8 md:p-12 flex flex-col justify-center space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-red-900/40 to-transparent" />
              <div>
                <div className="w-10 h-10 rounded-full bg-red-950/20 border border-red-900/30 text-red-400 flex items-center justify-center font-bold text-xs mb-6">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-2xl text-brand-white tracking-wide mb-3 text-brand-champagne/50">Tu Imagen Digital</h4>
                <ul className="space-y-4 text-xs text-brand-champagne/50 font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-red-900/60 mt-0.5">✗</span> 
                    <span>Ecosistema fragmentado, lento o inestable (Bugs & Latencia).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-900/60 mt-0.5">✗</span> 
                    <span>Identidad visual diluida que transmite poco riesgo y bajo ticket.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-900/60 mt-0.5">✗</span> 
                    <span>Copywriting genérico que compite en el mercado de "commodities".</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          <div className="mt-12 text-center">
            <button
              onClick={handleDiagnosticoClick}
              className="inline-flex items-center gap-2 bg-transparent border border-brand-taupe hover:bg-brand-taupe hover:text-brand-obsidian text-brand-taupe font-sans font-semibold tracking-wider text-xs uppercase py-3 px-8 rounded-xl transition-all duration-300"
            >
              <span>Verificar mi brecha de autoridad</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* SECTION: MANIFIESTO */}
      <section className="py-20 md:py-32 px-6 md:px-16 container mx-auto max-w-4xl text-center relative">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-taupe/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-8">
          <span className="font-sans text-xs tracking-[0.4em] uppercase text-brand-taupe font-semibold block">
            Nuestra Postura
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-white tracking-tight leading-tight">
            No diseñamos piezas aisladas.<br/>
            <span className="italic font-normal text-brand-taupe">Construimos activos.</span>
          </h2>
          <p className="font-sans text-sm text-brand-champagne/80 font-light max-w-2xl mx-auto leading-relaxed">
            Nos regimos por el orden y la precisión técnica. En el mercado premium, tus prospectos no compran diseño estético; compran la certeza de tu autoridad estructurada en código y narrativa inquebrantable.
          </p>
          <div className="pt-4">
            <button
              onClick={() => navigate('/la-firma')}
              className="inline-flex items-center gap-2 text-brand-taupe hover:text-brand-white font-sans text-xs tracking-wider uppercase transition-colors"
            >
              <span className="border-b border-brand-taupe/30 pb-1">Conoce nuestra postura</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
