import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, TrendingUp, Lock, CheckCircle2, ChevronRight, Zap, Play, Check, Search, Compass, Palette, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Soluciones() {
  const navigate = useNavigate();
  const cometRef = useRef<HTMLDivElement>(null);
  const hasPausedRef = useRef([false, false, false, false]);
  const hoverRef = useRef<number | null>(null);
  const autoPauseRef = useRef<number | null>(null);

  useEffect(() => {
    let animationFrameId: number;
    let pauseEndTime = 0;
    let currentLeft = -10;
    let lastTime = performance.now();

    const getPhasePercentage = (index: number): number | null => {
      const containerEl = document.getElementById('spine-container');
      const dotEl = document.getElementById(`phase-dot-${index}`);
      if (!containerEl || !dotEl) return null;

      const containerRect = containerEl.getBoundingClientRect();
      const dotRect = dotEl.getBoundingClientRect();
      const dotCenterX = dotRect.left + dotRect.width / 2;

      // La punta del cometa matemáticamente está en origin + 8px
      const dotCenterXRel = dotCenterX - containerRect.left;
      const targetLeftPx = dotCenterXRel - 8;

      return (targetLeftPx / containerRect.width) * 100;
    };

    const loop = (timestamp: number) => {
      const dt = timestamp - lastTime;
      lastTime = timestamp;

      // 1. Manejo de Pausas (Hover tiene prioridad máxima)
      if (hoverRef.current !== null) {
        const targetIndex = hoverRef.current;
        const targetPct = getPhasePercentage(targetIndex);
        if (targetPct !== null) {
          currentLeft = targetPct;
        }
        if (cometRef.current) {
          cometRef.current.style.left = `${currentLeft}%`;
        }
        autoPauseRef.current = null; // Cancelar pausa automática activa
      } else if (autoPauseRef.current !== null) {
        const targetIndex = autoPauseRef.current;
        const targetPct = getPhasePercentage(targetIndex);
        if (targetPct !== null) {
          currentLeft = targetPct;
        }
        if (cometRef.current) {
          cometRef.current.style.left = `${currentLeft}%`;
        }
        // Pausa de 3 segundos
        if (timestamp > pauseEndTime) {
          autoPauseRef.current = null;
        }
      } else {
        // 2. Movimiento del Cometa
        currentLeft += (120 / 6000) * dt; // 120% en 6 segundos para dinamismo

        if (currentLeft >= 110) {
          currentLeft = -5; // Reiniciar loop
          hasPausedRef.current = [false, false, false, false];
        }

        if (cometRef.current) {
          cometRef.current.style.left = `${currentLeft}%`;

          // 3. Detección de colisiones (Matemática Pura)
          const containerEl = document.getElementById('spine-container');
          if (containerEl) {
            const containerRect = containerEl.getBoundingClientRect();
            const currentLeftPx = (currentLeft / 100) * containerRect.width;
            const cometPointX = containerRect.left + currentLeftPx + 8;

            [0, 1, 2, 3].forEach((index) => {
              const dotEl = document.getElementById(`phase-dot-${index}`);
              if (!dotEl) return;

              const dotRect = dotEl.getBoundingClientRect();
              const dotCenterX = dotRect.left + dotRect.width / 2;

              if (!hasPausedRef.current[index] && Math.abs(cometPointX - dotCenterX) < 15) {
                hasPausedRef.current[index] = true;
                autoPauseRef.current = index;
                pauseEndTime = timestamp + 3000; // 3s auto-pause
              }
            });
          }
        }
      }

      // 4. Sincronización visual (clases de DOM)
      [0, 1, 2, 3].forEach((index) => {
        const isHovered = hoverRef.current === index;
        const isAuto = autoPauseRef.current === index;

        const titleEl = document.getElementById(`phase-title-${index}`);
        const dotEl = document.getElementById(`phase-dot-${index}`);

        if (isHovered || isAuto) {
          if (titleEl) titleEl.classList.add('title-glow-active');
          if (dotEl) dotEl.classList.add('dot-glow-active');
        } else {
          if (titleEl) titleEl.classList.remove('title-glow-active');
          if (dotEl) dotEl.classList.remove('dot-glow-active');
        }
      });

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleMouseEnter = (index: number) => {
    hoverRef.current = index;
  };

  const handleMouseLeave = (index: number) => {
    hoverRef.current = null;
  };

  return (
    <div className="bg-brand-obsidian min-h-screen relative overflow-hidden font-sans">
      {/* Fondo de Rejilla Arquitectónica al 2% */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(to right, #c8b6a6 1px, transparent 1px), linear-gradient(to bottom, #c8b6a6 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      {/* BLOQUE 1: HERO (Estructura de 2 Columnas) */}
      <section className="relative w-full min-h-screen flex flex-col md:flex-row items-stretch pt-24 md:pt-[87px] border-b border-brand-taupe/10 z-10 overflow-hidden">

        {/* Columna Izquierda: Imagen CEO */}
        <div className="w-full md:w-[45%] relative min-h-[50vh] md:min-h-0 order-2 md:order-1">
          <div
            className="absolute inset-x-0 bottom-0 top-0 bg-contain bg-[position:left_top] bg-no-repeat"
            style={{
              backgroundImage: "url('/images/CEOYSL.png')",
              WebkitMaskImage: "linear-gradient(to right, black 70%, transparent 100%)",
              maskImage: "linear-gradient(to right, black 70%, transparent 100%)"
            }}
          />
        </div>

        {/* Columna Derecha: Copy y Sello de Autoridad */}
        <div className="w-full md:w-[55%] flex flex-col justify-center px-6 md:pr-16 lg:pr-24 md:pl-8 lg:pl-10 pb-16 md:pb-0 relative order-1 md:order-2">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[56px] text-brand-white tracking-tight leading-[1.1] mb-6">
              Tu sucursal digital es tu mayor activo financiero.
              <span className="block mt-3 italic text-[#8c6753] font-normal">
                Deja de tratarla como un gasto de diseño.
              </span>
            </h1>

            <p className="font-sans text-sm md:text-base text-brand-champagne/80 font-light leading-relaxed mb-10">
              Arquitectura de Ecosistemas de Autoridad: Creamos infraestructuras digitales que proyectan solvencia y captan capital.
            </p>

            {/* Sello de Autoridad Integrado */}
            <div className="border border-[#8c6753]/30 bg-[#4c3628]/10 backdrop-blur-sm rounded-xl p-6 md:p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8c6753]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <Shield className="w-6 h-6 text-[#8c6753] mb-4" />
              <h4 className="font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#c8b6a6] font-bold mb-2">
                Política de Cero Parches
              </h4>
              <p className="font-sans text-xs md:text-sm text-[#c8b6a6]/70 leading-relaxed font-light">
                No ejecutamos intervenciones aisladas; construimos ecosistemas de autoridad total.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BLOQUE 2: TIMELINE DE INGENIERÍA */}
      <section className="py-24 md:py-32 relative z-10 border-b border-brand-taupe/10">
        <div className="container-boxed relative">

          {/* Timeline Header */}
          <div className="text-center mb-20 md:mb-28 max-w-4xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-sans text-xs tracking-[0.4em] uppercase text-brand-taupe font-semibold block mb-4"
            >
              Metodología de Blindaje
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl md:text-5xl lg:text-[56px] text-brand-white leading-[1.1] mb-6"
            >
              La Arquitectura de tu Sede corporativa Digital
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-sans text-[16px] md:text-[18px] text-[#4c3628] font-light leading-relaxed max-w-2xl mx-auto"
            >
              Implemento un despliegue táctico que transformará cada punto de contacto digital en un motor de captación y filtrado de capital.
            </motion.p>
          </div>

          <div className="w-full overflow-x-auto hide-scrollbar pb-4 md:pb-10">
            <div id="spine-container" className="relative min-w-[1200px] lg:min-w-[1400px] xl:min-w-full h-[360px] md:h-[440px] flex flex-row items-center justify-between mx-auto">

              {/* Línea horizontal base y conectora */}
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#8c6753]/20 -translate-y-1/2 z-0" />

              {/* Contenedor del Cometa (Línea de energía) */}
              <div className="absolute top-1/2 left-0 w-full h-[1px] -translate-y-1/2 z-30 pointer-events-none">
                <div
                  ref={cometRef}
                  style={{ left: "-5%" }}
                  className="absolute top-0 -translate-y-1/2 flex flex-row items-center -ml-16 pointer-events-none"
                >
                  {/* Cola del cometa */}
                  <div className="h-[2px] w-16 shrink-0 bg-gradient-to-r from-transparent via-[#c8b6a6]/60 to-[#c8b6a6] rounded-full" />
                  {/* Cabeza del cometa */}
                  <div className="h-2 w-2 shrink-0 bg-[#f2f1eb] rounded-full shadow-[0_0_12px_rgba(200,182,166,1)] -ml-[2px]" />
                </div>
              </div>

              {/* FASE 0: ARRIBA */}
              <div className="relative w-1/4 h-full flex flex-col items-center justify-center group" onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={() => handleMouseLeave(0)}>
                <div className="absolute bottom-[calc(50%+36px)] text-center px-4 w-[180px] md:w-[220px] flex flex-col items-center transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:scale-105">
                  <Search className="w-5 h-5 text-[#8c6753] mb-4 opacity-80 transition-all duration-500 group-hover:text-[#f2f1eb]" />
                  <h3 id="phase-title-0" className="font-serif text-base md:text-lg text-brand-white mb-2 font-semibold tracking-wide transition-all duration-500 ease-in-out [&.title-glow-active]:text-[#f2f1eb] [&.title-glow-active]:drop-shadow-[0_0_15px_rgba(200,182,166,0.6)]">Filtro de Rentabilidad</h3>
                  <p className="font-sans text-[11px] md:text-[12px] text-brand-champagne/50 font-light leading-relaxed transition-colors duration-500 group-hover:text-brand-champagne/80">Identificamos fugas de autoridad en tu ecosistema técnico y estratégico.</p>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center">
                  <span id="phase-dot-0" className="w-2.5 h-2.5 rounded-full bg-[#8c6753] transition-all duration-500 ease-in-out [&.dot-glow-active]:bg-[#f2f1eb] [&.dot-glow-active]:shadow-[0_0_20px_rgba(242,241,235,0.8)] z-10 relative" />
                </div>
                {/* Conector */}
                <div className="absolute bottom-[50%] h-[36px] w-[1px] bg-[#8c6753]/20 transition-all duration-500 ease-out group-hover:h-[48px] group-hover:bg-[#8c6753]/60" />
              </div>

              {/* FASE 1: ABAJO */}
              <div className="relative w-1/4 h-full flex flex-col items-center justify-center group" onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave(1)}>
                <div className="absolute top-[calc(50%+36px)] text-center px-4 w-[180px] md:w-[220px] flex flex-col items-center transition-all duration-500 ease-out group-hover:translate-y-3 group-hover:scale-105">
                  <Compass className="w-5 h-5 text-[#8c6753] mb-4 opacity-80 transition-all duration-500 group-hover:text-[#f2f1eb]" />
                  <h3 id="phase-title-1" className="font-serif text-base md:text-lg text-brand-white mb-2 font-semibold tracking-wide transition-all duration-500 ease-in-out [&.title-glow-active]:text-[#f2f1eb] [&.title-glow-active]:drop-shadow-[0_0_15px_rgba(200,182,166,0.6)]">Dirección Estratégica</h3>
                  <p className="font-sans text-[11px] md:text-[12px] text-brand-champagne/50 font-light leading-relaxed transition-colors duration-500 group-hover:text-brand-champagne/80">Eliminamos la improvisación en cada punto de contacto de tu sucursal.</p>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center">
                  <span id="phase-dot-1" className="w-2.5 h-2.5 rounded-full bg-[#8c6753] transition-all duration-500 ease-in-out [&.dot-glow-active]:bg-[#f2f1eb] [&.dot-glow-active]:shadow-[0_0_20px_rgba(242,241,235,0.8)] z-10 relative" />
                </div>
                {/* Conector */}
                <div className="absolute top-[50%] h-[36px] w-[1px] bg-[#8c6753]/20 transition-all duration-500 ease-out group-hover:h-[48px] group-hover:bg-[#8c6753]/60" />
              </div>

              {/* FASE 2: ARRIBA */}
              <div className="relative w-1/4 h-full flex flex-col items-center justify-center group" onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseLeave(2)}>
                <div className="absolute bottom-[calc(50%+36px)] text-center px-4 w-[180px] md:w-[220px] flex flex-col items-center transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:scale-105">
                  <Palette className="w-5 h-5 text-[#8c6753] mb-4 opacity-80 transition-all duration-500 group-hover:text-[#f2f1eb]" />
                  <h3 id="phase-title-2" className="font-serif text-base md:text-lg text-brand-white mb-2 font-semibold tracking-wide transition-all duration-500 ease-in-out [&.title-glow-active]:text-[#f2f1eb] [&.title-glow-active]:drop-shadow-[0_0_15px_rgba(200,182,166,0.6)]">Solvencia Visual</h3>
                  <p className="font-sans text-[11px] md:text-[12px] text-brand-champagne/50 font-light leading-relaxed transition-colors duration-500 group-hover:text-brand-champagne/80">Elevamos tu estándar gráfico a niveles Senior.</p>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center">
                  <span id="phase-dot-2" className="w-2.5 h-2.5 rounded-full bg-[#8c6753] transition-all duration-500 ease-in-out [&.dot-glow-active]:bg-[#f2f1eb] [&.dot-glow-active]:shadow-[0_0_20px_rgba(242,241,235,0.8)] z-10 relative" />
                </div>
                {/* Conector */}
                <div className="absolute bottom-[50%] h-[36px] w-[1px] bg-[#8c6753]/20 transition-all duration-500 ease-out group-hover:h-[48px] group-hover:bg-[#8c6753]/60" />
              </div>

              {/* FASE 3: ABAJO */}
              <div className="relative w-1/4 h-full flex flex-col items-center justify-center group" onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={() => handleMouseLeave(3)}>
                <div className="absolute top-[calc(50%+36px)] text-center px-4 w-[180px] md:w-[220px] flex flex-col items-center transition-all duration-500 ease-out group-hover:translate-y-3 group-hover:scale-105">
                  <Zap className="w-5 h-5 text-[#8c6753] mb-4 opacity-80 transition-all duration-500 group-hover:text-[#f2f1eb]" />
                  <h3 id="phase-title-3" className="font-serif text-base md:text-lg text-brand-white mb-2 font-semibold tracking-wide transition-all duration-500 ease-in-out [&.title-glow-active]:text-[#f2f1eb] [&.title-glow-active]:drop-shadow-[0_0_15px_rgba(200,182,166,0.6)]">Activo de Conversión</h3>
                  <p className="font-sans text-[11px] md:text-[12px] text-brand-champagne/50 font-light leading-relaxed transition-colors duration-500 group-hover:text-brand-champagne/80">Construimos tu activo digital inmaculado para captar tráfico High-Ticket.</p>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center">
                  <span id="phase-dot-3" className="w-2.5 h-2.5 rounded-full bg-[#8c6753] transition-all duration-500 ease-in-out [&.dot-glow-active]:bg-[#f2f1eb] [&.dot-glow-active]:shadow-[0_0_20px_rgba(242,241,235,0.8)] z-10 relative" />
                </div>
                {/* Conector */}
                <div className="absolute top-[50%] h-[36px] w-[1px] bg-[#8c6753]/20 transition-all duration-500 ease-out group-hover:h-[48px] group-hover:bg-[#8c6753]/60" />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 3: EVIDENCIA DE AUTORIDAD (Mockup Triple) */}
      <section className="py-24 md:py-32 relative z-10 border-b border-brand-taupe/10">
        <div className="container-boxed">
          <div className="text-center mb-20 md:mb-28">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-3xl md:text-5xl text-brand-white"
            >
              Ingeniería de Autoridad en Acción.
            </motion.h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Izquierda: Imagen Ecosistema Todo En Uno */}
            <div className="w-full lg:w-3/5 relative flex items-center justify-center">
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                src="/images/EcosistemaTodoEnUno.png"
                alt="Ecosistema Todo En Uno"
                className="w-full h-auto max-h-[550px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              />
            </div>

            {/* Derecha: Ficha Técnica */}
            <div className="w-full lg:w-2/5 flex flex-col space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-[#8c6753] font-bold mb-3">
                  Identidad Estratégica
                </h4>
                <p className="font-sans text-sm text-[#c8b6a6]/70 leading-relaxed font-light">
                  Desarrollo de sistema visual de alto nivel que proyecta solvencia inmediata y separa a la marca de la competencia commodity.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-[#8c6753] font-bold mb-3">
                  Arquitectura de Ecosistema
                </h4>
                <p className="font-sans text-sm text-[#c8b6a6]/70 leading-relaxed font-light">
                  Integración fluida entre la identidad visual, la sede corporativa digital (web) y el sistema de automatización (facturación).
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="p-6 border-l-2 border-[#8c6753] bg-[#8c6753]/5"
              >
                <h4 className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#f2f1eb] font-bold mb-3">
                  Resultado Operativo
                </h4>
                <p className="font-sans text-sm text-[#c8b6a6]/90 leading-relaxed font-light">
                  Un activo digital inmaculado donde cada píxel tiene una función operativa: captar, filtrar y convertir prospectos de alto valor.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 4: CIERRE DE AUTORIDAD */}
      <section className="py-24 md:py-32 relative z-10 container-boxed text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-[56px] text-brand-white leading-tight font-medium mb-8"
        >
          ¿Listo para blindar tu facturación?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-sans text-base md:text-lg text-brand-champagne/80 font-light leading-relaxed max-w-2xl mx-auto mb-12"
        >
          La autoridad es un sistema, no una suma de piezas aisladas. Transformamos tu sede corporativa digital en un activo financiero cuantificable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center justify-center"
        >
          <button
            onClick={() => navigate('/diagnostico')}
            className="group relative w-full md:w-auto overflow-hidden bg-transparent border border-[#c8b6a6]/30 text-[#f2f1eb] font-sans font-bold md:font-semibold tracking-widest text-xs uppercase py-5 px-12 rounded-xl transition-all duration-500 hover:border-[#8c6753] hover:shadow-[0_0_30px_rgba(140,103,83,0.3)] flex items-center justify-center gap-3"
          >
            <div className="absolute inset-0 bg-[#8c6753] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
            <span className="relative z-10">INICIAR DIAGNÓSTICO</span>
            <ArrowRight className="w-4 h-4 text-[#c8b6a6] group-hover:text-[#f2f1eb] transition-colors duration-300 relative z-10" />
          </button>

          <span className="mt-5 font-mono text-[10px] tracking-[0.2em] text-[#c8b6a6]/40 uppercase">
            Solo 3 cupos semanales.
          </span>
        </motion.div>
      </section>
    </div>
  );
}