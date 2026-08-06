import React, { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowDown,
  Compass,
  Cpu,
  Shield,
  Sparkles,
  Target,
  Zap,
  PenTool,
  Layers,
  Hexagon,
  Workflow,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import ThreeHeroBackground from "../components/ThreeHeroBackground";
import AuthorityCalculator from "../components/AuthorityCalculator";

export default function Home() {
  const navigate = useNavigate();
  const [activePilar, setActivePilar] = useState<number | null>(null);
  const [isHoveringEcosistema, setIsHoveringEcosistema] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDiagnosticoClick = () => {
    navigate("/diagnostico");
  };

  return (
    <div className="overflow-hidden">
      {/* SECTION: HERO */}
      <section className="relative min-h-screen flex flex-col justify-between pt-32 md:pt-36 lg:pt-40 pb-10 overflow-hidden bg-brand-obsidian">
        {/* ThreeJS Live Particle Wave & Coordinate Mesh Backdrop (restringido detrás del texto) */}
        <div
          className="absolute inset-y-0 left-0 w-full md:w-[65%] z-0 overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, black 70%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, black 70%, transparent 100%)",
          }}
        >
          <ThreeHeroBackground />
        </div>

        {/* Shadow Vignette for Editorial Low-Key Lighting */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-obsidian via-brand-obsidian/45 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_#181514_90%)] pointer-events-none" />

        {/* Contenedor de la Imagen (Fixed para efecto parallax, z-0 para quedarse detrás de otras secciones) */}
        <div className="fixed inset-x-0 bottom-0 top-24 md:top-28 z-0 flex justify-end pointer-events-none">
          <div
            className="w-full md:w-[50%] h-full bg-contain bg-right md:bg-[position:right_bottom] bg-no-repeat relative"
            style={{ backgroundImage: "url('/images/CEO%20WHITE.png')" }}
          ></div>
        </div>

        {/* Left-Aligned Typography */}
        <div className="relative z-10 container-boxed my-auto">
          <div className="max-w-2xl space-y-6 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 bg-brand-brown/50 border border-brand-sand/20 rounded-full px-4 py-1.5 text-xs text-brand-sand transition-colors cursor-default mx-auto md:mx-0"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-sand animate-pulse" />
              <span className="font-sans text-[10px] tracking-widest uppercase font-medium">
                Consultoría Estratégica Senior
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.8rem] text-brand-white tracking-tight leading-[1.15] md:leading-[1.15]"
            >
              <span className="block">Estás pagando el</span>
              <span className="italic font-normal text-brand-taupe block">
                impuesto invisible
              </span>
              <span className="block">de la desconfianza.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-sans text-sm md:text-base text-brand-champagne/90 font-light mx-auto md:mx-0 leading-relaxed max-w-xl"
            >
              Operas a nivel Senior, pero tu ecosistema digital comunica Junior.
              Los clientes corporativos penalizan la fragilidad técnica, y eso
              te cuesta contratos. Transformo tu presencia en un activo de
              autoridad B2B que convierte tu reputación en capital predecible.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-4 flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4 font-sans w-full max-w-lg mx-auto md:mx-0"
            >
              <button
                onClick={handleDiagnosticoClick}
                className="group relative w-full sm:w-auto active:scale-[0.98] text-brand-obsidian bg-brand-sand hover:bg-brand-white font-sans font-bold md:font-semibold tracking-wider text-base md:text-xs uppercase py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2.5 shadow-[0_0_20px_rgba(200,182,166,0.3)] hover:shadow-[0_0_30px_rgba(200,182,166,0.5)] overflow-hidden"
              >
                <span className="relative z-10">Agendar Diagnóstico</span>
                <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollToSection("calculator-section")}
                className="w-full sm:w-auto bg-transparent border border-brand-sand/30 hover:border-brand-sand/80 text-brand-sand hover:bg-brand-sand/10 font-sans font-bold md:font-semibold tracking-wider text-base md:text-xs uppercase py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2.5"
              >
                <span>Calcular Mi Pérdida</span>
              </button>
            </motion.div>

            {/* Cupos Limitados Indicator Inline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="pt-2 flex items-center justify-center md:justify-start gap-2 font-sans text-[10px] uppercase tracking-[0.25em] text-brand-champagne/60"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8b6a6] animate-pulse shadow-[0_0_8px_rgba(200,182,166,0.6)]" />
              <span>Cupos Limitados (Solo 3 por semana)</span>
            </motion.div>
          </div>
        </div>

        {/* Animated Scroll indicator */}
        <div
          className="relative z-10 pt-4 cursor-pointer opacity-60 hover:opacity-100 transition-opacity"
          onClick={() => scrollToSection("calculator-section")}
        >
          <div className="w-[1px] h-12 bg-brand-taupe/20 relative overflow-hidden mx-auto">
            <motion.div
              animate={{ y: ["-100%", "200%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="w-full h-1/2 bg-gradient-to-b from-transparent via-[#c8b6a6] to-transparent absolute inset-x-0 top-0"
            />
          </div>
        </div>
      </section>

      {/* SECTION: CALCULADORA DE LUCRO CESANTE */}
      <section
        id="calculator-section"
        className="bg-brand-obsidian border-t border-brand-taupe/10 min-h-screen py-16 md:py-24 flex items-center justify-center relative z-10 overflow-hidden"
      >
        <AuthorityCalculator onStartBooking={handleDiagnosticoClick} />
      </section>

      {/* SECTION: EL MISMATCH (LA CONFRONTACIÓN) */}
      <section
        className="bg-brand-obsidian relative z-10 border-t border-brand-taupe/10 overflow-hidden animate-fade-in"
        style={{ padding: "100px 0" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-brand-taupe/5 via-transparent to-transparent pointer-events-none" />

        <div className="container-boxed">
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
              Tu{" "}
              <span className="text-brand-taupe italic tracking-tighter">
                reputación digital
              </span>{" "}
              no está a la altura de tu realidad.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-base md:text-sm text-[#c8b6a6]/50 font-medium mt-6 leading-relaxed"
            >
              La desconexión entre tu capacidad operativa y tus activos
              digitales es donde se fuga tu facturación.
            </motion.p>
          </div>

          {/* Fondo de Escala: Horizonte (Conectando las cajas) removido a petición */}

          {/* Cajas Comparativas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative font-sans w-full mt-16"
          >
            {/* Desktop & Mobile Divider (≠ symbol) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-[6rem] md:text-[9rem] font-sans font-thin text-[#c8b6a6] drop-shadow-[0_0_15px_rgba(200,182,166,0.3)] z-20 pointer-events-none select-none">
              ≠
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 relative z-10">
              {/* Lado Izquierdo: Tu Operación Real */}
              <div className="group px-8 py-12 md:p-14 flex flex-col justify-start items-start space-y-8 relative overflow-hidden bg-transparent border border-[#c8b6a6]/10 rounded-2xl hover:bg-[#f2f1eb] hover:shadow-[0_20px_50px_rgba(200,182,166,0.15)] transition-all duration-500 min-h-[380px]">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-4">
                    <div className="text-[#c8b6a6] flex items-center justify-center shrink-0 group-hover:text-[#c8b6a6] transition-colors duration-500">
                      <Hexagon className="w-8 h-8" strokeWidth={1.2} />
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl text-[#f2f1eb] tracking-wide group-hover:text-[#4c3628] transition-colors duration-500">
                      Tu Operación Real
                    </h3>
                  </div>
                  <span className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[#c8b6a6]/50 md:pl-16 font-medium group-hover:text-[#c8b6a6] transition-colors duration-500">
                    Expertise Operativo y Autoridad de Campo
                  </span>
                </div>

                <ul className="space-y-7 w-full pt-4">
                  <li className="flex items-start gap-4 text-[15px] text-[#f2f1eb]/70 font-light leading-relaxed group-hover:text-[#4c3628] transition-colors duration-500">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-sm bg-[#c8b6a6]/40 shrink-0 group-hover:bg-[#4c3628] transition-colors duration-500" />
                    <span>
                      Resuelves problemas complejos, pero cobras tarifas de
                      commodity.
                    </span>
                  </li>
                  <li className="flex items-start gap-4 text-[15px] text-[#f2f1eb]/70 font-light leading-relaxed group-hover:text-[#4c3628] transition-colors duration-500">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-sm bg-[#c8b6a6]/40 shrink-0 group-hover:bg-[#4c3628] transition-colors duration-500" />
                    <span>
                      Tu estructura y experiencia superan con creces a la
                      competencia.
                    </span>
                  </li>
                  <li className="flex items-start gap-4 text-[15px] text-[#f2f1eb]/70 font-light leading-relaxed group-hover:text-[#4c3628] transition-colors duration-500">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-sm bg-[#c8b6a6]/40 shrink-0 group-hover:bg-[#4c3628] transition-colors duration-500" />
                    <span>
                      Entregas un nivel de servicio premium que tus prospectos
                      no intuyen antes de pagar.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Lado Derecho: Tu Ecosistema de Conversión */}
              <div className="group px-8 py-12 md:p-14 flex flex-col justify-start items-start space-y-8 relative overflow-hidden bg-transparent border border-[#c8b6a6]/10 rounded-2xl hover:bg-[#f2f1eb] hover:shadow-[0_20px_50px_rgba(200,182,166,0.15)] transition-all duration-500 min-h-[380px]">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-4">
                    <div className="text-[#c8b6a6] flex items-center justify-center shrink-0 group-hover:text-[#c8b6a6] transition-colors duration-500">
                      <Workflow className="w-8 h-8" strokeWidth={1.2} />
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl text-[#f2f1eb] tracking-wide group-hover:text-[#4c3628] transition-colors duration-500">
                      Tu Ecosistema de Conversión
                    </h3>
                  </div>
                  <span className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[#c8b6a6]/50 md:pl-16 font-medium group-hover:text-[#c8b6a6] transition-colors duration-500">
                    Estructura Digital y Estrategia de Conversión
                  </span>
                </div>

                <ul className="space-y-7 w-full pt-4">
                  <li className="flex items-start gap-4 text-[15px] text-[#f2f1eb]/70 font-light leading-relaxed group-hover:text-[#4c3628] transition-colors duration-500">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-sm bg-red-400/60 shrink-0" />
                    <span>
                      Tu web no es un activo; es una fachada digital que no
                      filtra prospectos High-Ticket.
                    </span>
                  </li>
                  <li className="flex items-start gap-4 text-[15px] text-[#f2f1eb]/70 font-light leading-relaxed group-hover:text-[#4c3628] transition-colors duration-500">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-sm bg-red-400/60 shrink-0" />
                    <span>
                      Infraestructura tecnológica con fricciones de UX que matan
                      la tasa de conversión.
                    </span>
                  </li>
                  <li className="flex items-start gap-4 text-[15px] text-[#f2f1eb]/70 font-light leading-relaxed group-hover:text-[#4c3628] transition-colors duration-500">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-sm bg-red-400/60 shrink-0" />
                    <span>
                      Estrategia de marca "Junior" que desalinea tu propuesta de
                      valor frente a problemas "Senior".
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <div className="mt-12 text-center overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#c8b6a6]/40 font-medium mx-auto select-none mt-4 whitespace-nowrap">
                Tu ecosistema actual pierde valor cada día sin alineación.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION: POSTURA Y ARQUITECTURA (EL AMANECER) */}
      <section className="pt-24 md:pt-32 pb-0 bg-[#fdfbf7] text-[#1a1511] relative z-10 overflow-hidden border-t border-[#4c3628]/10">
        {/* Subtle texture/gradient for dawn effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(200,182,166,0.15)_0%,_transparent_70%)] pointer-events-none" />

        <div className="relative z-10 container-boxed flex flex-col lg:flex-row items-end justify-between">
          {/* 2. COLUMNA IZQUIERDA (Ancla Visual) */}
          <div className="relative w-full lg:w-[30%] flex justify-start items-end mt-12 lg:mt-0">
            {/* Contenedor ajustado a la imagen para el marco del círculo */}
            <div className="relative w-[90%] sm:w-[70%] lg:w-full max-w-[450px] -ml-4 lg:-ml-8 flex items-end">
              {/* Geometría de Fondo: Círculo como marco (no sobrepasa orejas ni pies) */}
              <div
                className="absolute bg-[#4c3628] rounded-full"
                style={{
                  zIndex: -1,
                  left: "-30%",
                  bottom: "-15%",
                  height: "100%",
                  aspectRatio: "1/1",
                }}
              />

              {/* Imagen CEOBROWN */}
              <img
                src="/images/CEOBROWN.png"
                alt="CEO"
                className="relative z-10 w-full h-auto object-contain object-bottom drop-shadow-[20px_0_30px_rgba(0,0,0,0.15)]"
              />
            </div>
          </div>

          {/* 3. COLUMNA DERECHA (Bloque de Contenido Simétrico) */}
          <div className="w-full lg:w-[70%] flex flex-col items-center text-center pb-24 lg:pb-32 px-6 md:px-12 relative z-20 mt-16 lg:mt-0">
            {/* Bloque 3.1: Encabezado */}
            <div className="w-full mb-16 flex flex-col items-center">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#8c6753] font-bold block mb-6"
              >
                Postura y Arquitectura
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1a1511] tracking-tight leading-tight"
              >
                No diseño piezas aisladas.
                <br />
                <span className="font-serif italic text-5xl md:text-6xl lg:text-7xl text-[#8c6753] block mt-1 font-normal drop-shadow-sm">
                  Construyo activos.
                </span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full max-w-5xl mx-auto flex flex-col items-center"
            >
              {/* Bloque 3.2: Fila de Tarjetas */}
              <div className="flex flex-col md:flex-row items-stretch justify-center w-full gap-4 md:gap-0">
                {/* Tarjeta 1: Identidad */}
                <div className="group bg-white px-6 py-10 md:p-10 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.02)] border border-[#4c3628]/5 flex flex-col items-center justify-center text-center w-full md:w-[32%] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(0,0,0,0.04)]">
                  <div className="w-10 h-10 rounded-full border border-[#c8b6a6]/30 flex items-center justify-center mb-6 text-[#8c6753] group-hover:bg-[#8c6753] group-hover:text-white transition-colors duration-300">
                    <Sparkles className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-sans text-[9px] font-bold uppercase tracking-[0.25em] text-[#1a1511] mb-4">
                    Identidad
                  </h4>
                  <p className="font-sans text-[11px] text-[#1a1511]/50 font-light leading-relaxed max-w-[180px]">
                    Estatus y solvencia visual.
                  </p>
                </div>

                {/* Separador */}
                <div className="flex items-center justify-center w-full md:w-[2%] py-4 md:py-0 text-[#4c3628] text-3xl font-light animate-pulse">
                  +
                </div>

                {/* Tarjeta 2: Estrategia */}
                <div className="group bg-white px-6 py-10 md:p-10 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.02)] border border-[#4c3628]/5 flex flex-col items-center justify-center text-center w-full md:w-[32%] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(0,0,0,0.04)]">
                  <div className="w-10 h-10 rounded-full border border-[#c8b6a6]/30 flex items-center justify-center mb-6 text-[#8c6753] group-hover:bg-[#8c6753] group-hover:text-white transition-colors duration-300">
                    <Compass className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-sans text-[9px] font-bold uppercase tracking-[0.25em] text-[#1a1511] mb-4">
                    Estrategia
                  </h4>
                  <p className="font-sans text-[11px] text-[#1a1511]/50 font-light leading-relaxed max-w-[180px]">
                    Narrativa que te separa de la competencia.
                  </p>
                </div>

                {/* Separador */}
                <div className="flex items-center justify-center w-full md:w-[2%] py-4 md:py-0 text-[#4c3628] text-3xl font-light animate-pulse">
                  +
                </div>

                {/* Tarjeta 3: Ingeniería */}
                <div className="group bg-white px-6 py-10 md:p-10 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.02)] border border-[#4c3628]/5 flex flex-col items-center justify-center text-center w-full md:w-[32%] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(0,0,0,0.04)]">
                  <div className="w-10 h-10 rounded-full border border-[#c8b6a6]/30 flex items-center justify-center mb-6 text-[#8c6753] group-hover:bg-[#8c6753] group-hover:text-white transition-colors duration-300">
                    <Cpu className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-sans text-[9px] font-bold uppercase tracking-[0.25em] text-[#1a1511] mb-4">
                    Ingeniería
                  </h4>
                  <p className="font-sans text-[11px] text-[#1a1511]/50 font-light leading-relaxed max-w-[180px]">
                    Sistemas que captan clientes High-Ticket.
                  </p>
                </div>
              </div>

              {/* Bloque 3.3: Conector de Flujo */}
              <div className="flex flex-col items-center justify-center mt-8 md:mt-12 mb-6 w-full animate-pulse">
                <div className="w-px h-12 bg-[#4c3628]" />
                <ArrowDown
                  className="w-4 h-4 text-[#4c3628] -mt-1"
                  strokeWidth={2}
                />
              </div>

              {/* Bloque 3.4: Caja de Resultado */}
              <div className="group bg-[#181514] text-[#f2f1eb] px-10 py-7 md:py-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-[#4c3628]/20 flex flex-row items-center justify-center gap-6 w-fit min-w-[280px] max-w-[90%] mx-auto transform transition-all duration-300 hover:scale-[1.02] hover:border-[#8c6753]/40 hover:shadow-[0_20px_50px_rgba(140,103,83,0.15)] cursor-default">
                {/* Icono concéntrico minimalista animado */}
                <div className="relative w-12 h-12 rounded-full border border-[#c8b6a6]/10 flex items-center justify-center shrink-0">
                  <div className="absolute inset-0 rounded-full border border-[#c8b6a6]/20 scale-75 animate-pulse" />
                  <Target
                    className="w-4 h-4 text-[#c8b6a6]/60 animate-pulse"
                    strokeWidth={1}
                  />
                </div>
                {/* Texto */}
                <div className="text-left flex flex-col justify-center">
                  <span className="block font-sans text-[8px] uppercase tracking-[0.4em] text-[#c8b6a6]/50 mb-1 font-semibold">
                    El Resultado
                  </span>
                  <span className="block font-serif text-2xl md:text-[28px] text-white tracking-wide leading-none mb-1">
                    Ecosistema de Adquisición
                  </span>
                  <span className="block font-sans text-[10px] text-[#c8b6a6]/70 font-light">
                    Sistemas digitales que convierten tráfico cualificado en capital predecible.
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION: CTA DE CIERRE (EL FILTRO) */}
      <section className="py-24 md:py-32 bg-brand-obsidian border-t border-brand-taupe/10 relative overflow-hidden flex items-center min-h-[90vh]">
        {/* Contenedor de la Imagen (Alineado a la derecha, sin recortar la imagen) */}
        <div className="absolute inset-0 z-0 flex justify-end pointer-events-none">
          <div
            className="w-full md:w-[60%] h-full bg-no-repeat relative"
            style={{ 
              backgroundImage: "url('/images/CEOBLACK.png')",
              backgroundSize: "contain",
              backgroundPosition: "right 65%",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 5%, black 100%)",
              maskImage: "linear-gradient(to right, transparent 0%, black 5%, black 100%)"
            }}
          />
        </div>

        {/* Brillo sutil detrás del texto para resaltar lectura */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-taupe/5 rounded-full blur-[100px] z-0 pointer-events-none" />

        <div className="relative z-10 container-boxed">
          <div className="max-w-2xl space-y-8 text-center md:text-left">
            <span className="font-sans text-xs tracking-[0.4em] uppercase text-brand-taupe font-semibold block">
              Protocolo de Acceso
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-brand-white tracking-tight leading-tight">
              El acceso a la autoridad
              <br />
              <span className="italic font-normal text-brand-taupe">
                comienza con un diagnóstico.
              </span>
            </h2>
            <p className="font-sans text-sm text-brand-champagne/80 font-light leading-relaxed mx-auto md:mx-0">
              Mi metodología es selectiva. Solo acepto proyectos donde puedo
              garantizar un retorno de inversión medible. Tu Diagnóstico de
              Autoridad es el paso obligatorio para iniciar.
            </p>
            <div className="pt-6 pb-16 mb-8">
              <button
                onClick={handleDiagnosticoClick}
                className="group relative w-full md:w-auto active:scale-[0.98] text-[#f2f1eb] font-sans font-bold md:font-semibold tracking-wider text-base md:text-xs uppercase py-5 md:py-4 px-10 rounded-xl transition-all duration-300 flex items-center justify-center gap-2.5 shadow-[0_0_20px_rgba(200,182,166,0.15)] hover:shadow-[0_0_30px_rgba(200,182,166,0.3)] mx-auto md:mx-0 overflow-hidden"
              >
                {/* Animación de fluido de energía rotatorio en el borde */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                  className="absolute inset-[-100%] z-0 opacity-80"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent 0%, #c8b6a6 50%, transparent 100%)",
                  }}
                />

                {/* Fondo principal del botón (transparencia del 60% de #4c3628) con blur para cristal */}
                <div className="absolute inset-[1px] bg-[#4c3628]/60 backdrop-blur-md rounded-xl z-0 transition-colors duration-500 group-hover:bg-[#4c3628]/70" />

                <span className="relative z-10">
                  Agendar Diagnóstico de Autoridad
                </span>
                <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
