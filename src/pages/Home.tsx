import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Compass, Cpu, Shield, Sparkles, Target, Zap } from 'lucide-react';
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
    <div className="overflow-hidden">
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
            Operas a nivel Senior, pero tu ecosistema digital comunica Junior. Los clientes corporativos penalizan la fragilidad técnica, y eso te cuesta contratos. Transformo tu presencia en un activo de autoridad B2B que elimina tus fugas de capital.
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
      <section id="calculator-section" className="bg-brand-obsidian border-t border-brand-taupe/10 min-h-screen py-16 md:py-24 flex items-center justify-center relative overflow-hidden">
        <AuthorityCalculator onStartBooking={handleDiagnosticoClick} />
      </section>

      {/* SECTION: EL MISMATCH (LA CONFRONTACIÓN) */}
      <section 
        className="bg-brand-obsidian relative border-t border-brand-taupe/10 overflow-hidden animate-fade-in" 
        style={{ padding: '100px 0' }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-brand-taupe/5 via-transparent to-transparent pointer-events-none" />

        <div className="px-6 md:px-16 container mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-sans text-xs md:text-[10px] tracking-[0.4em] uppercase text-brand-taupe font-semibold block mb-4"
            >
              El Mismatch
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-3xl md:text-5xl text-[#f2f1eb] tracking-tight leading-[1.2]"
            >
              Tu reputación digital no está a la altura de tu realidad.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-base md:text-sm text-[#f2f1eb] font-light mt-6 leading-relaxed"
            >
              La brecha entre lo que haces y lo que proyectas es donde se pierde tu rentabilidad.
            </motion.p>
          </div>

          {/* Split-screen with Central Divider */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative border border-[#4c3628]/20 rounded-2xl overflow-hidden font-sans bg-[#130f08] w-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#4c3628]/20">
              
              {/* Lado Izquierdo: Tu Operación Real */}
              <div className="px-8 py-12 md:p-16 flex flex-col justify-center items-start space-y-8 relative overflow-hidden bg-[#130f08] min-h-[360px]">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-taupe to-transparent" />
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#4c3628]/10 border border-[#4c3628]/30 text-[#C8B6A6] flex items-center justify-center shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-[#f2f1eb] tracking-wide">Tu Operación Real</h3>
                </div>

                <ul className="space-y-4 w-full">
                  <li className="flex items-start gap-3 text-base md:text-sm text-[#f2f1eb]/85 font-light leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#4c3628] shrink-0" />
                    <span>Trayectoria y conocimiento de mercado.</span>
                  </li>
                  <li className="flex items-start gap-3 text-base md:text-sm text-[#f2f1eb]/85 font-light leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#4c3628] shrink-0" />
                    <span>Estructura interna probada.</span>
                  </li>
                  <li className="flex items-start gap-3 text-base md:text-sm text-[#f2f1eb]/85 font-light leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#4c3628] shrink-0" />
                    <span>Capacidad técnica operativa actual.</span>
                  </li>
                </ul>
              </div>

              {/* Lado Derecho: Tu Imagen Digital */}
              <div className="px-8 py-12 md:p-16 flex flex-col justify-center items-start space-y-8 relative overflow-hidden bg-[#130f08]/90 min-h-[360px]">
                <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-[#4c3628]/40 to-transparent" />
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#4c3628]/10 border border-[#4c3628]/30 text-[#C8B6A6] flex items-center justify-center shrink-0">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-[#f2f1eb] tracking-wide">Tu Imagen Digital</h3>
                </div>

                <ul className="space-y-4 w-full">
                  <li className="flex items-start gap-3 text-base md:text-sm text-[#f2f1eb]/85 font-light leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#4c3628] shrink-0" />
                    <span>Autoridad visual en puntos de contacto.</span>
                  </li>
                  <li className="flex items-start gap-3 text-base md:text-sm text-[#f2f1eb]/85 font-light leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#4c3628] shrink-0" />
                    <span>Arquitectura de narrativa corporativa.</span>
                  </li>
                  <li className="flex items-start gap-3 text-base md:text-sm text-[#f2f1eb]/85 font-light leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#4c3628] shrink-0" />
                    <span>Percepción de valor en el primer impacto.</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Desktop Divider (≠ symbol) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center text-7xl font-sans font-bold text-[#4c3628] z-20 pointer-events-none select-none bg-[#130f08] px-4 py-2">
              ≠
            </div>

            {/* Mobile Divider (≠ symbol) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden flex items-center justify-center text-5xl font-sans font-bold text-[#4c3628] z-20 pointer-events-none select-none bg-[#130f08] p-2">
              ≠
            </div>
          </motion.div>

          <div className="mt-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button
                onClick={handleDiagnosticoClick}
                className="w-auto inline-flex justify-center items-center bg-transparent border-2 border-[#4c3628] hover:bg-[#4c3628] text-[#f2f1eb] font-sans font-semibold tracking-wider text-sm py-4 px-8 rounded-xl transition-all duration-300 cursor-pointer"
              >
                <span>Cerrar brecha de autoridad →</span>
              </button>
              <p className="mt-3 font-sans text-[11px] text-[#f2f1eb]/40 font-light max-w-md mx-auto leading-relaxed tracking-wide">
                Tu ecosistema actual pierde valor cada día sin alineación.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* SECTION: MANIFIESTO */}
      <section className="pt-24 pb-36 md:pt-40 md:pb-56 bg-brand-champagne text-brand-obsidian relative overflow-hidden">

        <div className="relative z-10 px-6 md:px-16 container mx-auto max-w-4xl text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <span className="font-sans text-xs tracking-[0.4em] uppercase text-brand-taupe font-bold block">
              Postura y Arquitectura
            </span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-brand-obsidian tracking-tight leading-tight">
              No diseñamos piezas aisladas.<br />
              <span className="font-serif italic text-5xl md:text-7xl lg:text-8xl text-brand-taupe block mt-6 font-normal">Construimos activos.</span>
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-sans text-base md:text-[15px] text-brand-obsidian/90 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Me rijo por el orden y la precisión técnica. No atiendo a quien busca parches estéticos, trabajo con firmas que buscan blindar su autoridad y proteger su posicionamiento.
          </motion.p>

          {/* Componente de Arquitectura */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-4 space-y-8"
          >
            <h3 className="font-serif text-xl md:text-2xl text-brand-obsidian tracking-tight font-medium">
              El Blindaje Lógico de la Autoridad
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl mx-auto">
              {/* Columna 1 */}
              <div className="border border-[#4c3628]/15 hover:border-[#4c3628] rounded-xl p-6 transition-all duration-500 bg-[#f2f1eb]/50 flex flex-col justify-center items-center text-center space-y-4 shadow-sm">
                <div className="w-12 h-12 rounded-full border border-[#4c3628]/20 text-[#4c3628] flex items-center justify-center bg-[#4c3628]/5 transition-colors duration-500">
                  <Target className="w-5 h-5" />
                </div>
                <span className="font-sans text-xs font-semibold tracking-wider text-brand-obsidian uppercase">
                  Identidad Estratégica
                </span>
              </div>

              {/* Columna 2 */}
              <div className="border border-[#4c3628]/15 hover:border-[#4c3628] rounded-xl p-6 transition-all duration-500 bg-[#f2f1eb]/50 flex flex-col justify-center items-center text-center space-y-4 shadow-sm">
                <div className="w-12 h-12 rounded-full border border-[#4c3628]/20 text-[#4c3628] flex items-center justify-center bg-[#4c3628]/5 transition-colors duration-500">
                  <Cpu className="w-5 h-5" />
                </div>
                <span className="font-sans text-xs font-semibold tracking-wider text-brand-obsidian uppercase">
                  Arquitectura Técnica
                </span>
              </div>

              {/* Columna 3 */}
              <div className="border border-[#4c3628]/15 hover:border-[#4c3628] rounded-xl p-6 transition-all duration-500 bg-[#f2f1eb]/50 flex flex-col justify-center items-center text-center space-y-4 shadow-sm">
                <div className="w-12 h-12 rounded-full border border-[#4c3628]/20 text-[#4c3628] flex items-center justify-center bg-[#4c3628]/5 transition-colors duration-500">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="font-sans text-xs font-semibold tracking-wider text-brand-obsidian uppercase">
                  Motor de Conversión
                </span>
              </div>
            </div>
          </motion.div>
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
