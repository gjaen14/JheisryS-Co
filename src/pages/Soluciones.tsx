import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Shield, Layers, Code, AlertTriangle } from 'lucide-react';
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
    let currentTop = -10;
    let lastTime = performance.now();

    const getPhasePercentage = (index: number): number | null => {
      const containerEl = document.getElementById('spine-container');
      const dotEl = document.getElementById(`phase-dot-${index}`);
      if (!containerEl || !dotEl) return null;
      
      const containerRect = containerEl.getBoundingClientRect();
      const dotRect = dotEl.getBoundingClientRect();
      const dotCenterY = dotRect.top + dotRect.height / 2;
      
      if (cometRef.current) {
        const cometRect = cometRef.current.getBoundingClientRect();
        const currentTopPx = (currentTop / 100) * containerRect.height;
        const offset = cometRect.bottom - (containerRect.top + currentTopPx);
        const targetTopPx = dotCenterY - containerRect.top - offset;
        return (targetTopPx / containerRect.height) * 100;
      }
      return null;
    };

    const loop = (timestamp: number) => {
      const dt = timestamp - lastTime;
      lastTime = timestamp;

      // 1. Manejo de Pausas (Hover tiene prioridad máxima)
      if (hoverRef.current !== null) {
        const targetIndex = hoverRef.current;
        const targetPct = getPhasePercentage(targetIndex);
        if (targetPct !== null) {
          currentTop = targetPct;
        }
        if (cometRef.current) {
          cometRef.current.style.top = `${currentTop}%`;
        }
        autoPauseRef.current = null; // Cancelar pausa automática activa
      } else if (autoPauseRef.current !== null) {
        const targetIndex = autoPauseRef.current;
        const targetPct = getPhasePercentage(targetIndex);
        if (targetPct !== null) {
          currentTop = targetPct;
        }
        if (cometRef.current) {
          cometRef.current.style.top = `${currentTop}%`;
        }
        // Pausa de 3 segundos
        if (timestamp > pauseEndTime) {
          autoPauseRef.current = null;
        }
      } else {
        // 2. Movimiento del Cometa
        currentTop += (120 / 6000) * dt; // 120% en 6 segundos para dinamismo

        if (currentTop >= 110) {
          currentTop = -10; // Reiniciar loop
          hasPausedRef.current = [false, false, false, false];
        }

        if (cometRef.current) {
          cometRef.current.style.top = `${currentTop}%`;

          // 3. Detección de colisiones
          const cometRect = cometRef.current.getBoundingClientRect();
          const cometPointY = cometRect.bottom;

          [0, 1, 2, 3].forEach((index) => {
            const dotEl = document.getElementById(`phase-dot-${index}`);
            if (!dotEl) return;
            
            const dotRect = dotEl.getBoundingClientRect();
            const dotCenterY = dotRect.top + dotRect.height / 2;
            
            // Margen de 15px para colisión
            if (!hasPausedRef.current[index] && Math.abs(cometPointY - dotCenterY) < 15) {
              hasPausedRef.current[index] = true;
              autoPauseRef.current = index;
              pauseEndTime = timestamp + 3000; // 3s auto-pause
            }
          });
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
    <div className="pt-24 md:pt-32">
      {/* LA ESCALERA DE VALOR & HEADER */}
      <section className="py-8 md:py-10 bg-brand-brown/20 border-y border-brand-taupe/10 relative max-h-[85vh] flex flex-col justify-center">
        <div className="px-6 md:px-16 container mx-auto max-w-5xl relative flex flex-col h-full justify-center">
          
          {/* TÍTULO PRINCIPAL INTEGRADO */}
          <div className="text-center mb-5 md:mb-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-[1.1rem] sm:text-xl md:text-3xl lg:text-[44px] text-brand-white tracking-tight leading-[1.15] md:leading-[1.05] whitespace-nowrap"
            >
              Tu marca no necesita un rediseño.<br/>
              <span className="italic font-normal text-brand-taupe">Necesita un sistema de activos.</span>
            </motion.h1>
            
            {/* ANCLA EDITORIAL */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-xs md:text-[10px] tracking-[0.3em] uppercase text-brand-taupe font-light block mt-3 md:mt-2.5"
            >
              PROTOCOLO DE AUTORIDAD
            </motion.span>
          </div>

          <div id="spine-container" className="space-y-6 md:space-y-0 relative py-2">
            {/* Línea vertical con recorrido continuo */}
            <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[1px] bg-brand-taupe/10 md:-translate-x-1/2 z-0">
              <div
                ref={cometRef}
                style={{ top: "-10%" }}
                className="absolute left-0 -translate-x-1/2 flex flex-col items-center -mt-16 z-20 pointer-events-none"
              >
                {/* Cola del cometa */}
                <div className="w-[2px] h-16 bg-gradient-to-b from-transparent via-[#c8b6a6]/50 to-[#c8b6a6] rounded-full" />
                {/* Cabeza del cometa */}
                <div className="w-2 h-2 bg-[#f2f1eb] rounded-full shadow-[0_0_12px_rgba(200,182,166,1)] -mt-[2px]" />
              </div>
            </div>
            
            {/* FASE 0 */}
            <div 
              className="relative pl-10 md:pl-0 md:flex md:items-center md:justify-center py-3 md:py-4"
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={() => handleMouseLeave(0)}
            >
              {/* Columna Izquierda (Texto en desktop) */}
              <div className="w-full md:w-[calc(50%-24px)] md:text-right md:pr-8">
                <span className="font-mono text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-brand-taupe/85 mb-1 block">
                  Fase 0
                </span>
                <h3 
                  id="phase-title-0" 
                  className="font-serif text-lg md:text-[22px] text-brand-white mb-1 md:mb-1.5 font-medium transition-all duration-500 ease-in-out [&.title-glow-active]:text-[#f2f1eb] [&.title-glow-active]:drop-shadow-[0_0_12px_rgba(200,182,166,0.8)]"
                >
                  Diagnóstico de Autoridad
                </h3>
                <p className="font-sans text-[13px] md:text-[14px] text-brand-champagne font-normal leading-relaxed max-w-[450px] md:ml-auto">
                  El Filtro. Evaluamos tu estrategia, narrativa, presencia visual y arquitectura técnica. Identificamos latencias en tu ecosistema y fugas de autoridad.
                </p>
              </div>
              
              {/* Columna Central (Punto/Nodo) */}
              <div className="absolute left-[24px] top-[12px] md:top-auto md:static flex items-center justify-center -translate-x-1/2 md:translate-x-0 z-10 w-2 h-2 md:w-12 md:h-12">
                <span 
                  id="phase-dot-0"
                  className="w-2 h-2 rounded-full bg-[#c8b6a6] transition-all duration-500 ease-in-out [&.dot-glow-active]:shadow-[0_0_15px_rgba(200,182,166,1)] z-10 relative" 
                />
              </div>
              
              {/* Columna Derecha (Vacía en desktop, oculta en móvil) */}
              <div className="hidden md:block md:w-[calc(50%-24px)]" />
            </div>

            {/* FASE 1 */}
            <div 
              className="relative pl-10 md:pl-0 md:flex md:items-center md:justify-center py-3 md:py-4"
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={() => handleMouseLeave(1)}
            >
              {/* Columna Izquierda (Vacía en desktop, oculta en móvil) */}
              <div className="hidden md:block md:w-[calc(50%-24px)]" />
              
              {/* Columna Central (Punto/Nodo) */}
              <div className="absolute left-[24px] top-[12px] md:top-auto md:static flex items-center justify-center -translate-x-1/2 md:translate-x-0 z-10 w-2 h-2 md:w-12 md:h-12">
                <span 
                  id="phase-dot-1"
                  className="w-2 h-2 rounded-full bg-[#c8b6a6] transition-all duration-500 ease-in-out [&.dot-glow-active]:shadow-[0_0_15px_rgba(200,182,166,1)] z-10 relative" 
                />
              </div>

              {/* Columna Derecha (Texto en desktop) */}
              <div className="w-full md:w-[calc(50%-24px)] md:text-left md:pl-8">
                <span className="font-mono text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-brand-taupe/85 mb-1 block">
                  Fase 1
                </span>
                <h3 
                  id="phase-title-1" 
                  className="font-serif text-lg md:text-[22px] text-brand-white mb-1 md:mb-1.5 font-medium transition-all duration-500 ease-in-out [&.title-glow-active]:text-[#f2f1eb] [&.title-glow-active]:drop-shadow-[0_0_12px_rgba(200,182,166,0.8)]"
                >
                  Posicionamiento
                </h3>
                <p className="font-sans text-[13px] md:text-[14px] text-brand-champagne font-normal leading-relaxed max-w-[450px] md:mr-auto">
                  El Pivote. Eliminamos la improvisación. Ajustamos tu estrategia para que cada punto de contacto tenga un propósito y dirección clara.
                </p>
              </div>
            </div>

            {/* FASE 2 */}
            <div 
              className="relative pl-10 md:pl-0 md:flex md:items-center md:justify-center py-3 md:py-4"
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={() => handleMouseLeave(2)}
            >
              {/* Columna Izquierda (Texto en desktop) */}
              <div className="w-full md:w-[calc(50%-24px)] md:text-right md:pr-8">
                <span className="font-mono text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-brand-taupe/85 mb-1 block">
                  Fase 2
                </span>
                <h3 
                  id="phase-title-2" 
                  className="font-serif text-lg md:text-[22px] text-brand-white mb-1 md:mb-1.5 font-medium transition-all duration-500 ease-in-out [&.title-glow-active]:text-[#f2f1eb] [&.title-glow-active]:drop-shadow-[0_0_12px_rgba(200,182,166,0.8)]"
                >
                  Identidad de Estatus
                </h3>
                <p className="font-sans text-[13px] md:text-[14px] text-brand-champagne font-normal leading-relaxed max-w-[450px] md:ml-auto">
                  La Solvencia. Elevamos tu estándar visual. Construimos un relato visual y verbal que proyecte el estándar real de tu operación. Eliminamos el aspecto genérico y lo reemplazamos con autoridad pura.
                </p>
              </div>
              
              {/* Columna Central (Punto/Nodo) */}
              <div className="absolute left-[24px] top-[12px] md:top-auto md:static flex items-center justify-center -translate-x-1/2 md:translate-x-0 z-10 w-2 h-2 md:w-12 md:h-12">
                <span 
                  id="phase-dot-2"
                  className="w-2 h-2 rounded-full bg-[#c8b6a6] transition-all duration-500 ease-in-out [&.dot-glow-active]:shadow-[0_0_15px_rgba(200,182,166,1)] z-10 relative" 
                />
              </div>
              
              {/* Columna Derecha (Vacía en desktop, oculta en móvil) */}
              <div className="hidden md:block md:w-[calc(50%-24px)]" />
            </div>

            {/* FASE 3 */}
            <div 
              className="relative pl-10 md:pl-0 md:flex md:items-center md:justify-center py-3 md:py-4"
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={() => handleMouseLeave(3)}
            >
              {/* Columna Izquierda (Vacía en desktop, oculta en móvil) */}
              <div className="hidden md:block md:w-[calc(50%-24px)]" />
              
              {/* Columna Central (Punto/Nodo) */}
              <div className="absolute left-[24px] top-[12px] md:top-auto md:static flex items-center justify-center -translate-x-1/2 md:translate-x-0 z-10 w-2 h-2 md:w-12 md:h-12">
                <span 
                  id="phase-dot-3"
                  className="w-2 h-2 rounded-full bg-[#c8b6a6] transition-all duration-500 ease-in-out [&.dot-glow-active]:shadow-[0_0_15px_rgba(200,182,166,1)] z-10 relative" 
                />
              </div>

              {/* Columna Derecha (Texto en desktop) */}
              <div className="w-full md:w-[calc(50%-24px)] md:text-left md:pl-8">
                <span className="font-mono text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-brand-taupe/85 mb-1 block">
                  Fase 3
                </span>
                <h3 
                  id="phase-title-3" 
                  className="font-serif text-lg md:text-[22px] text-brand-white mb-1 md:mb-1.5 font-medium transition-all duration-500 ease-in-out [&.title-glow-active]:text-[#f2f1eb] [&.title-glow-active]:drop-shadow-[0_0_12px_rgba(200,182,166,0.8)]"
                >
                  Arquitectura de Conversión
                </h3>
                <p className="font-sans text-[13px] md:text-[14px] text-brand-champagne font-normal leading-relaxed max-w-[450px] md:mr-auto">
                  El Blindaje. Construimos tu activo digital inmaculado. Un sistema web optimizado para captar tráfico y convertirlo en capital, sin fricción, elevando tu sede corporativa digital.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECCIÓN: POLÍTICA DE INTEGRIDAD */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-16 container mx-auto max-w-3xl text-center">
        {/* MICRO-ETIQUETA */}
        <span className="font-sans text-xs md:text-[10px] tracking-[0.4em] uppercase text-brand-taupe font-semibold block mb-4">
          MI POLÍTICA DE CERO PARCHES
        </span>
        <h2 className="font-serif text-3xl md:text-[38px] text-brand-white leading-tight font-medium">
          El compromiso de la firma
        </h2>
        
        <p className="font-sans text-sm md:text-base text-brand-champagne/90 font-light mt-6 leading-relaxed max-w-[600px] mx-auto">
          La autoridad es un sistema, no una suma de piezas aisladas. No ejecutamos intervenciones desconectadas. Diseñamos Ecosistemas Digitales completos desde el diagnóstico estratégico hasta la ingeniería de conversión, para transformar tu sede corporativa digital en un activo financiero cuantificable.
        </p>

        <button
          onClick={() => navigate('/diagnostico')}
          className="group w-full md:w-auto inline-flex justify-center items-center gap-2 bg-brand-sand hover:bg-[#4c3628] text-brand-obsidian hover:text-[#f2f1eb] font-sans font-bold md:font-semibold tracking-widest text-xs uppercase py-4 px-8 rounded-xl transition-all duration-300 shadow-xl shadow-brand-sand/5 mt-10 btn-energy-flow"
        >
          <span>Iniciar Diagnóstico</span>
          <ArrowRight className="w-4 h-4 text-brand-obsidian group-hover:text-[#f2f1eb] transition-colors duration-300" />
        </button>
      </section>
    </div>
  );
}
