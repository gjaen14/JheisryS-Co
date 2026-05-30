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
            className="inline-flex items-center gap-2 bg-brand-brown/50 border border-brand-sand/20 rounded-full px-4 py-1.5 text-xs text-brand-sand transition-colors cursor-default"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-sand animate-pulse" />
            <span className="font-sans text-[10px] tracking-widest uppercase font-medium">Consultoría Estratégica Senior</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-3xl md:text-5xl lg:text-6xl text-brand-white tracking-tight leading-[1.1]"
          >
            Estás pagando el impuesto<br />
            <span className="italic font-normal text-brand-taupe">invisible </span>
            de la desconfianza.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans text-base md:text-lg text-brand-champagne/90 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Operas a nivel Senior, pero tu ecosistema digital comunica Junior. Los clientes corporativos te regatean por la fragilidad técnica de tu marca. A través del posicionamiento B2B de alto valor y la reingeniería de marca corporativa, elimino tus fugas de capital en branding.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-6 flex justify-center items-center font-sans"
          >
            <button
              onClick={() => scrollToSection('calculator-section')}
              className="w-full sm:w-auto bg-brand-sand hover:bg-brand-sand/90 text-brand-obsidian font-sans font-bold md:font-semibold tracking-wider text-base md:text-xs uppercase py-5 md:py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg shadow-brand-sand/10"
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

        {/* Cupos Limitados Indicator */}
        <div className="absolute bottom-10 left-6 md:left-16 z-20 flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.25em] text-brand-champagne/60">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span>Cupos Limitados (Solo 3 por semana)</span>
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
            <span className="font-sans text-xs md:text-[10px] tracking-[0.4em] uppercase text-brand-taupe font-semibold block mb-4">
              El Mismatch
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-brand-white tracking-tight leading-[1.2]">
              Operas como Senior. Te proyectas como Junior.
            </h2>
            <p className="font-sans text-base md:text-sm text-brand-champagne/80 font-light mt-6 leading-relaxed">
              Existe una brecha de percepción que sabotea tu crecimiento. Cuando tu capacidad técnica es superior a tu identidad visual, la confianza se rompe. No es un problema de diseño, es un problema de posicionamiento financiero.
            </p>
          </div>

          {/* Split-screen */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-brand-taupe/15 rounded-2xl overflow-hidden font-sans">

            {/* Lado Izquierdo: Tu Operación Real */}
            <div className="bg-brand-brown/50 px-6 py-8 md:p-12 flex flex-col justify-center space-y-6 md:border-r border-brand-taupe/15 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-taupe to-transparent" />
              <div>
                <div className="w-10 h-10 rounded-full bg-brand-taupe/10 border border-brand-taupe/30 text-brand-taupe flex items-center justify-center font-bold text-xs mb-6">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-2xl md:text-3xl text-brand-white tracking-wide mb-4">Tu Operación Real</h4>
                <ul className="space-y-4 text-base md:text-xs text-brand-champagne/70 font-light">
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
            <div className="bg-brand-obsidian/60 px-6 py-8 md:p-12 flex flex-col justify-center space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-red-900/40 to-transparent" />
              <div>
                <div className="w-10 h-10 rounded-full bg-red-950/20 border border-red-900/30 text-red-400 flex items-center justify-center font-bold text-xs mb-6">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-2xl md:text-3xl text-brand-white tracking-wide mb-4 text-brand-champagne/50">Tu Imagen Digital</h4>
                <ul className="space-y-4 text-base md:text-xs text-brand-champagne/50 font-light">
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
              className="w-full md:w-auto inline-flex justify-center items-center gap-2 bg-brand-sand hover:bg-brand-sand/90 text-brand-obsidian font-sans font-bold md:font-semibold tracking-wider text-base md:text-xs uppercase py-5 md:py-3 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-brand-sand/10"
            >
              <span>Verificar mi brecha de autoridad</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* SECTION: MANIFIESTO */}
      <section className="py-24 md:py-40 bg-brand-champagne text-brand-obsidian relative overflow-hidden">
        {/* Decoración Tipográfica Sutil (Quiet Luxury) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-[0.03] pointer-events-none select-none flex justify-center">
          <span className="font-serif italic text-[150px] md:text-[250px] leading-none whitespace-nowrap text-brand-obsidian">Autoridad Innegociable</span>
        </div>

        <div className="relative z-10 px-6 md:px-16 container mx-auto max-w-4xl text-center space-y-10">
          <span className="font-sans text-xs tracking-[0.4em] uppercase text-brand-taupe font-bold block">
            Nuestra Postura
          </span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-brand-obsidian tracking-tight leading-tight">
            No diseñamos piezas aisladas.<br />
            <span className="font-serif italic text-5xl md:text-7xl lg:text-8xl text-brand-taupe block mt-6 font-normal">Construimos activos.</span>
          </h2>
          <p className="font-sans text-sm md:text-base text-brand-obsidian/80 font-medium max-w-2xl mx-auto leading-relaxed">
            Me rijo por el orden y la precisión técnica. No atiendo a quien busca parches estéticos, trabajo con firmas que buscan blindar su autoridad y proteger su posicionamiento. Mi visión estratégica es ejecutada al milímetro por la agencia Soarity, el brazo técnico que respalda la construcción de cada ecosistema corporativo que diseñamos.
          </p>
          <div className="pt-8">
            <button
              onClick={() => navigate('/la-firma')}
              className="inline-flex items-center gap-2 text-brand-obsidian hover:text-brand-taupe font-sans text-xs tracking-wider uppercase transition-colors font-semibold"
            >
              <span className="border-b border-brand-obsidian/30 hover:border-brand-taupe pb-1 transition-colors">Conoce nuestra postura</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION: CTA DE CIERRE (EL FILTRO) */}
      <section className="py-20 md:py-32 bg-brand-brown/30 border-t border-brand-taupe/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_30%,_#181514_80%)] pointer-events-none" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-taupe/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 px-6 md:px-16 container mx-auto max-w-3xl text-center space-y-8">
          <span className="font-sans text-xs tracking-[0.4em] uppercase text-brand-taupe font-semibold block">
            Protocolo de Acceso
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-white tracking-tight leading-tight">
            El acceso a la autoridad<br />
            <span className="italic font-normal text-brand-taupe">comienza con un diagnóstico.</span>
          </h2>
          <p className="font-sans text-sm text-brand-champagne/80 font-light max-w-xl mx-auto leading-relaxed">
            No aceptamos proyectos sin antes validar que podemos garantizar el retorno de inversión. El Diagnóstico de Autoridad es el primer filtro.
          </p>
          <div className="pt-6">
            <button
              onClick={handleDiagnosticoClick}
              className="w-full md:w-auto bg-brand-sand hover:bg-brand-sand/90 active:scale-[0.98] text-brand-obsidian font-sans font-bold md:font-semibold tracking-wider text-base md:text-xs uppercase py-5 md:py-4 px-10 rounded-xl transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg shadow-brand-sand/10 mx-auto"
            >
              <span>Agendar Diagnóstico de Autoridad</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
