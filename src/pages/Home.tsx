import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Compass, Cpu, Shield, Sparkles, Target, Zap, PenTool, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ThreeHeroBackground from '../components/ThreeHeroBackground';
import AuthorityCalculator from '../components/AuthorityCalculator';

export default function Home() {
  const navigate = useNavigate();
  const [activePilar, setActivePilar] = useState<number | null>(null);
  const [isHoveringEcosistema, setIsHoveringEcosistema] = useState(false);

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
            Operas a nivel Senior, pero tu ecosistema digital comunica Junior. Los clientes corporativos penalizan la fragilidad técnica, y eso te cuesta contratos. Transformo tu presencia en un activo de autoridad B2B que convierte tu reputación en capital predecible.
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
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer opacity-60 hover:opacity-100 transition-opacity" onClick={() => scrollToSection('calculator-section')}>
          <div className="w-[1px] h-16 bg-brand-taupe/20 relative overflow-hidden mx-auto">
            <motion.div
              animate={{ y: ["-100%", "200%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="w-full h-1/2 bg-gradient-to-b from-transparent via-[#c8b6a6] to-transparent absolute inset-x-0 top-0"
            />
          </div>
        </div>

        {/* Cupos Limitados Indicator */}
        <div className="absolute bottom-10 left-6 md:left-16 z-20 flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.25em] text-brand-champagne/60">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c8b6a6] animate-pulse shadow-[0_0_8px_rgba(200,182,166,0.6)]" />
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
                className="group w-auto inline-flex justify-center items-center bg-transparent border-2 border-[#4c3628] hover:bg-[#4c3628] text-[#f2f1eb] font-sans font-semibold tracking-wider text-sm py-4 px-8 rounded-xl transition-all duration-300 cursor-pointer"
              >
                <span>Blindar mi facturación ahora →</span>
                <motion.span 
                  animate={{ x: [0, 5, 0], backgroundPosition: ["200% center", "0% center"] }}
                  transition={{ 
                    x: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
                    backgroundPosition: { repeat: Infinity, duration: 2, ease: "linear" }
                  }}
                  className="ml-2 text-xl inline-block text-transparent bg-clip-text bg-[linear-gradient(90deg,#4c3628_0%,#c8b6a6_50%,#4c3628_100%)] bg-[length:200%_auto] font-bold group-hover:bg-[linear-gradient(90deg,#c8b6a6_0%,#ffffff_50%,#c8b6a6_100%)]"
                >
                  →
                </motion.span>
              </button>
              <p className="mt-3 font-sans text-[11px] text-[#f2f1eb]/40 font-light max-w-md mx-auto leading-relaxed tracking-wide">
                Tu ecosistema actual pierde valor cada día sin alineación.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* SECTION: MANIFIESTO */}
      <section className="pt-24 pb-36 md:pt-40 md:pb-56 bg-[#130f08] text-[#f2f1eb] relative overflow-hidden">

        <div className="relative z-10 px-6 md:px-16 container mx-auto max-w-6xl space-y-24">
          
          <div className="text-center max-w-4xl mx-auto space-y-12">
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
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#f2f1eb] tracking-tight leading-tight">
                No diseñamos piezas aisladas.<br />
                <span className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-brand-taupe block -mt-2 font-normal">Construimos activos.</span>
              </h2>
            </motion.div>
          </div>

          {/* Componente de Arquitectura (Surgical Minimalism + Resultado) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-8 w-full max-w-5xl mx-auto relative"
          >
            <h3 className="font-serif text-2xl md:text-3xl text-[#f2f1eb] font-medium mb-12 text-center">
              El Blindaje Lógico
            </h3>
            
            {/* Los 3 Pilares Base */}
            <div className="grid grid-cols-1 md:grid-cols-3 relative border-t border-[#c8b6a6]/15">
              
              {/* Animación: Línea horizontal Arriba */}
              <div className="hidden md:block absolute top-[-1px] left-0 w-full h-[1px] overflow-hidden z-10">
                <motion.div
                  animate={{ x: ["100%", "-200%"] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                  className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#c8b6a6] to-transparent"
                />
              </div>

              {/* Animación: Línea horizontal Abajo */}
              <div className="hidden md:block absolute bottom-0 left-0 w-full h-[1px] overflow-hidden z-10">
                <motion.div
                  animate={{ x: ["-100%", "300%"] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                  className="w-1/3 h-full bg-gradient-to-r from-transparent via-[#c8b6a6] to-transparent"
                />
              </div>

              {/* Animación: Divisor Vertical 1 */}
              <div className="hidden md:block absolute top-0 left-1/3 w-[1px] h-full overflow-hidden z-10">
                <motion.div
                  animate={{ y: ["-100%", "200%"] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear", delay: 0.5 }}
                  className="w-full h-1/2 bg-gradient-to-b from-transparent via-[#c8b6a6] to-transparent"
                />
              </div>

              {/* Animación: Divisor Vertical 2 */}
              <div className="hidden md:block absolute top-0 left-[66.666%] w-[1px] h-full overflow-hidden z-10">
                <motion.div
                  animate={{ y: ["-100%", "200%"] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: "linear", delay: 1.5 }}
                  className="w-full h-1/2 bg-gradient-to-b from-transparent via-[#c8b6a6] to-transparent"
                />
              </div>

              {/* Pilar 1 */}
              <div 
                onClick={() => setActivePilar(1)}
                className="group relative border-b border-[#c8b6a6]/15 md:border-b-0 md:border-r hover:border-[#c8b6a6]/80 transition-all duration-500 hover:bg-[#c8b6a6]/5 p-10 md:p-12 flex flex-col justify-center cursor-pointer overflow-hidden"
              >
                <motion.div
                  initial={false}
                  animate={{ 
                    opacity: activePilar === 1 ? 1 : 0,
                    scale: activePilar === 1 ? 1 : 0.8 
                  }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(200,182,166,0.08)_0%,_transparent_70%)] pointer-events-none z-0"
                />
                <div className="relative z-10">
                  <h4 className="font-serif text-2xl text-[#f2f1eb] mb-4 tracking-tight">
                    Identidad de Posicionamiento
                  </h4>
                  <p className="font-sans text-[15px] font-light text-[#f2f1eb]/80 leading-relaxed transition-transform duration-500 group-hover:-translate-y-[2px]">
                    Diseño atemporal que comunica estatus y solvencia visual.
                  </p>
                </div>
              </div>

              {/* Pilar 2 */}
              <div 
                onClick={() => setActivePilar(2)}
                className="group relative border-b border-[#c8b6a6]/15 md:border-b-0 md:border-r hover:border-[#c8b6a6]/80 transition-all duration-500 hover:bg-[#c8b6a6]/5 p-10 md:p-12 flex flex-col justify-center cursor-pointer overflow-hidden"
              >
                <motion.div
                  initial={false}
                  animate={{ 
                    opacity: activePilar === 2 ? 1 : 0,
                    scale: activePilar === 2 ? 1 : 0.8 
                  }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(200,182,166,0.08)_0%,_transparent_70%)] pointer-events-none z-0"
                />
                <div className="relative z-10">
                  <h4 className="font-serif text-2xl text-[#f2f1eb] mb-4 tracking-tight">
                    Estrategia de Marca
                  </h4>
                  <p className="font-sans text-[15px] font-light text-[#f2f1eb]/80 leading-relaxed transition-transform duration-500 group-hover:-translate-y-[2px]">
                    Narrativa que separa a tu marca de los competidores genéricos.
                  </p>
                </div>
              </div>

              {/* Pilar 3 */}
              <div 
                onClick={() => setActivePilar(3)}
                className="group relative border-b border-[#c8b6a6]/15 md:border-b-0 hover:border-[#c8b6a6]/80 transition-all duration-500 hover:bg-[#c8b6a6]/5 p-10 md:p-12 flex flex-col justify-center cursor-pointer overflow-hidden"
              >
                <motion.div
                  initial={false}
                  animate={{ 
                    opacity: activePilar === 3 ? 1 : 0,
                    scale: activePilar === 3 ? 1 : 0.8 
                  }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(200,182,166,0.08)_0%,_transparent_70%)] pointer-events-none z-0"
                />
                <div className="relative z-10">
                  <h4 className="font-serif text-2xl text-[#f2f1eb] mb-4 tracking-tight">
                    Ingeniería de Autoridad
                  </h4>
                  <p className="font-sans text-[15px] font-light text-[#f2f1eb]/80 leading-relaxed transition-transform duration-500 group-hover:-translate-y-[2px]">
                    Sistemas de conversión automatizados, diseñados para captar clientes High-Ticket.
                  </p>
                </div>
              </div>

            </div>

            {/* Conector Visual (El Resultado) */}
            <div className="flex flex-col items-center justify-center relative z-0">
              <div className="w-[1px] h-16 bg-[#c8b6a6]/20 relative overflow-hidden">
                <motion.div
                  animate={{ y: ["-100%", "200%"] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  className="w-full h-1/2 bg-gradient-to-b from-transparent via-[#c8b6a6] to-transparent absolute inset-x-0 top-0"
                />
              </div>
              
              <motion.div 
                animate={{ 
                  y: [0, 5, 0],
                  boxShadow: "0 0 25px rgba(200,182,166,0.4)"
                }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-10 h-10 rounded-full border border-[#c8b6a6]/60 flex items-center justify-center z-10 my-[-20px] backdrop-blur-sm text-[#f2f1eb] bg-[#c8b6a6]/15"
              >
                <ArrowRight className="w-5 h-5 rotate-90" />
              </motion.div>
              
              <div className="w-[1px] h-16 bg-[#c8b6a6]/20 relative overflow-hidden">
                <motion.div
                  animate={{ y: ["-100%", "200%"] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: 0.5 }}
                  className="w-full h-1/2 bg-gradient-to-b from-transparent via-[#c8b6a6] to-transparent absolute inset-x-0 top-0"
                />
              </div>
            </div>

            {/* Bloque 4: El Resultado */}
            <div 
              onMouseEnter={() => setIsHoveringEcosistema(true)}
              onMouseLeave={() => setIsHoveringEcosistema(false)}
              className="group relative transition-all duration-500 p-12 md:p-16 flex flex-col items-center text-center cursor-default max-w-4xl mx-auto rounded-xl overflow-hidden mt-4 shadow-2xl"
            >
              {/* Animación de fluido de energía rotatorio en el borde */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                className="absolute inset-[-100%] z-0 opacity-70"
                style={{ background: 'conic-gradient(from 0deg, transparent 0 340deg, #c8b6a6 360deg)' }}
              />

              {/* Borde brillante extra */}
              <motion.div 
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-br from-[#c8b6a6]/30 via-transparent to-[#c8b6a6]/30 opacity-50 z-0" 
              />
              <div className="absolute inset-[1px] bg-[#1a1712] rounded-xl z-0" />
              
              {/* Resplandor interior constante */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(200,182,166,0.06)_0%,_transparent_70%)] z-0 pointer-events-none" />

              <div className="relative z-10">
                <h4 className="font-serif text-3xl md:text-5xl text-[#f2f1eb] mb-6 tracking-tight drop-shadow-md">
                  Ecosistema de Adquisición
                </h4>
                <p className="font-sans text-[15px] md:text-lg font-light text-[#f2f1eb]/90 leading-relaxed max-w-2xl transition-transform duration-500 group-hover:-translate-y-[2px]">
                  El resultado final: Sistemas digitales que convierten tráfico cualificado en capital predecible.
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* SECTION: CTA DE CIERRE (EL FILTRO) */}
      <section className="py-24 md:py-32 bg-brand-obsidian border-t border-brand-taupe/10 relative overflow-hidden flex items-center min-h-[600px]">
        
        {/* Contenedor de la Imagen (Alineado a la derecha, 50% opacidad, sin recortar la imagen) */}
        <div className="absolute inset-0 z-0 flex justify-end pointer-events-none">
          <div 
            className="w-full md:w-[60%] h-full bg-contain bg-right md:bg-[position:right_center] bg-no-repeat opacity-50 relative"
            style={{ backgroundImage: "url('/jheisry.jpg')" }}
          >
            {/* Degradado lateral para fundir el borde izquierdo de la foto con el fondo sólido */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-obsidian via-brand-obsidian/70 to-transparent" />
            {/* Degradado vertical para suavizar cortes arriba y abajo si la imagen no ocupa todo el alto */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-obsidian via-transparent to-brand-obsidian" />
          </div>
        </div>
        
        {/* Brillo sutil detrás del texto para resaltar lectura */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-taupe/5 rounded-full blur-[100px] z-0 pointer-events-none" />

        <div className="relative z-10 px-6 md:px-16 container mx-auto max-w-7xl">
          <div className="max-w-2xl space-y-8 text-center md:text-left">
            <span className="font-sans text-xs tracking-[0.4em] uppercase text-brand-taupe font-semibold block">
              Protocolo de Acceso
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-brand-white tracking-tight leading-tight">
              El acceso a la autoridad<br />
              <span className="italic font-normal text-brand-taupe">comienza con un diagnóstico.</span>
            </h2>
            <p className="font-sans text-sm text-brand-champagne/80 font-light leading-relaxed mx-auto md:mx-0">
              Mi metodología es selectiva. Solo acepto proyectos donde puedo garantizar un retorno de inversión medible. Tu Diagnóstico de Autoridad es el paso obligatorio para iniciar.
            </p>
            <div className="pt-6">
              <button
                onClick={handleDiagnosticoClick}
                className="group relative w-full md:w-auto active:scale-[0.98] text-[#f2f1eb] font-sans font-bold md:font-semibold tracking-wider text-base md:text-xs uppercase py-5 md:py-4 px-10 rounded-xl transition-all duration-300 flex items-center justify-center gap-2.5 shadow-[0_0_20px_rgba(200,182,166,0.15)] hover:shadow-[0_0_30px_rgba(200,182,166,0.3)] mx-auto md:mx-0 overflow-hidden"
              >
                {/* Animación de fluido de energía rotatorio en el borde */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                  className="absolute inset-[-100%] z-0 opacity-80"
                  style={{ background: 'conic-gradient(from 0deg, transparent 0 340deg, #c8b6a6 360deg)' }}
                />
                
                {/* Fondo principal del botón (transparencia del 60% de #4c3628) con blur para cristal */}
                <div className="absolute inset-[1px] bg-[#4c3628]/60 backdrop-blur-md rounded-xl z-0 transition-colors duration-500 group-hover:bg-[#4c3628]/70" />

                <span className="relative z-10">Agendar Diagnóstico de Autoridad</span>
                <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
