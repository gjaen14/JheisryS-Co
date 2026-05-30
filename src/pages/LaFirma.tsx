import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function LaFirma() {
  const [hoveredCEO, setHoveredCEO] = useState<'jheisry' | 'gustavo' | null>(null);

  return (
    <div className="pt-24 md:pt-32">
      {/* HERO SECTION */}
      <section className="px-6 md:px-16 container mx-auto max-w-4xl text-center py-20 relative">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-champagne/5 rounded-full blur-[100px] pointer-events-none" />
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-3xl md:text-5xl lg:text-6xl text-brand-white tracking-tight leading-[1.1] relative z-10"
        >
          La intersección entre la <span className="italic font-normal text-brand-taupe">estrategia de negocios</span> y el blindaje técnico.
        </motion.h1>
      </section>

      {/* LA DUPLA ESPECIALIZADA */}
      <section className="py-20 px-6 md:px-16 container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-brand-taupe font-bold">
            La Dupla Especializada
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 relative max-w-6xl mx-auto items-stretch">
          
          {/* LADO IZQUIERDO: Tarjetas de Información */}
          <div className="lg:col-span-6 flex flex-col gap-8 relative z-10">
            {/* Card Jheisry */}
            <div 
              onMouseEnter={() => setHoveredCEO('jheisry')}
              onMouseLeave={() => setHoveredCEO(null)}
              className={`bg-[#130f08]/80 rounded-2xl px-6 py-10 md:p-12 backdrop-blur-md transition-all duration-500 border ${
                hoveredCEO === 'jheisry' 
                  ? 'border-[#4c3628] shadow-[0_0_30px_rgba(76,54,40,0.3)] transform scale-[1.02] z-20 relative' 
                  : 'border-brand-taupe/15'
              }`}
            >
              <h3 className="font-serif text-3xl md:text-[40px] text-brand-white mb-2 leading-tight">Jheisry Aguilera</h3>
              <span className="font-sans text-[10px] tracking-widest uppercase text-brand-taupe font-bold block mb-8">Brand Strategist</span>
              <p className="font-sans text-base md:text-sm text-brand-champagne/80 font-light leading-relaxed mb-10">
                Con más de 17 años de trayectoria, Jheisry asegura que el diseño web, la documentación y la narrativa transmitan un valor indomable en las salas corporativas.
              </p>
              <ul className="space-y-4 text-base md:text-[13px] text-brand-champagne/70 font-light">
                <li className="flex items-center gap-4">
                  <span className="w-1 h-1 rounded-full bg-brand-taupe/80"></span>
                  <span>Alquimia Editorial</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-1 h-1 rounded-full bg-brand-taupe/80"></span>
                  <span>Disciplina de Lujo</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-1 h-1 rounded-full bg-brand-taupe/80"></span>
                  <span>Estrategia de Posicionamiento</span>
                </li>
              </ul>
            </div>

            {/* Card Gustavo */}
            <div 
              onMouseEnter={() => setHoveredCEO('gustavo')}
              onMouseLeave={() => setHoveredCEO(null)}
              className={`bg-[#130f08]/80 rounded-2xl px-6 py-10 md:p-12 backdrop-blur-md transition-all duration-500 border ${
                hoveredCEO === 'gustavo' 
                  ? 'border-[#4c3628] shadow-[0_0_30px_rgba(76,54,40,0.3)] transform scale-[1.02] z-20 relative' 
                  : 'border-brand-taupe/15'
              }`}
            >
              <h3 className="font-serif text-3xl md:text-[40px] text-brand-white mb-2 leading-tight">Gustavo Jaén</h3>
              <span className="font-sans text-[10px] tracking-widest uppercase text-brand-taupe font-bold block mb-8">Lead Technical</span>
              <p className="font-sans text-base md:text-sm text-brand-champagne/80 font-light leading-relaxed mb-10">
                Garante de que tu plataforma esté programada a mano con la velocidad, pulcritud y seguridad de un activo corporativo premium.
              </p>
              <ul className="space-y-4 text-base md:text-[13px] text-brand-champagne/70 font-light">
                <li className="flex items-center gap-4">
                  <span className="w-1 h-1 rounded-full bg-brand-taupe/80"></span>
                  <span>Ingeniería de Velocidad</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-1 h-1 rounded-full bg-brand-taupe/80"></span>
                  <span>Estructura Técnica Inmaculada</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-1 h-1 rounded-full bg-brand-taupe/80"></span>
                  <span>React Puro & Optimización de Latencia</span>
                </li>
              </ul>
            </div>
          </div>

          {/* LADO DERECHO: Retrato Editorial */}
          <div className="lg:col-span-6 relative min-h-[400px] md:min-h-[500px] lg:min-h-full rounded-2xl overflow-hidden border border-brand-taupe/15 shadow-2xl bg-[#130f08] order-first lg:order-last mb-8 lg:mb-0">
            <img 
              src="/images/ceos.jpg" 
              alt="Jheisry Aguilera y Gustavo Jaén" 
              className={`absolute inset-0 w-full h-full object-cover object-[80%_top] transition-all duration-700 filter grayscale-[10%] contrast-[1.05] ${
                hoveredCEO ? 'scale-[1.03] brightness-110' : 'scale-100 brightness-100'
              }`}
            />

            {/* Indicador de Interacción (Solo Desktop) */}
            <div className={`hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-30 bg-[#130f08]/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-brand-taupe/20 items-center gap-3 pointer-events-none transition-all duration-500 ${
              hoveredCEO ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}>
              {/* Borde exterior palpitante */}
              <div className="absolute inset-0 rounded-full border border-[#4c3628] shadow-[0_0_10px_rgba(76,54,40,0.5)] animate-pulse pointer-events-none"></div>
              
              <span className="w-1.5 h-1.5 rounded-full bg-brand-taupe animate-pulse relative z-10"></span>
              <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-brand-champagne/90 font-medium whitespace-nowrap relative z-10">Explora la Dupla</span>
            </div>
            
            {/* Zonas de Interacción (Hover Fotografía) */}
            <div 
              className="absolute left-0 top-0 w-[45%] h-full z-20 cursor-default"
              onMouseEnter={() => setHoveredCEO('jheisry')}
              onMouseLeave={() => setHoveredCEO(null)}
            />
            <div 
              className="absolute right-0 top-0 w-[55%] h-full z-20 cursor-default"
              onMouseEnter={() => setHoveredCEO('gustavo')}
              onMouseLeave={() => setHoveredCEO(null)}
            />
          </div>

        </div>
      </section>

      {/* PRINCIPIOS DE OPERACIÓN */}
      <section className="py-24 bg-brand-brown/20 border-t border-brand-taupe/10">
        <div className="px-6 md:px-16 container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-brand-taupe font-semibold">
              Manifiesto de Ejecución
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-white mt-4">
              Principios de Operación
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            
            {/* Principio 1 */}
            <div className="flex gap-6">
              <span className="font-serif text-4xl text-brand-taupe/30 italic">01</span>
              <div>
                <h4 className="font-sans text-base md:text-sm tracking-wider uppercase font-bold text-brand-white mb-2">Integridad de Ecosistema</h4>
                <p className="font-sans text-base md:text-xs text-brand-champagne/60 font-light leading-relaxed">
                  No desarrollamos piezas aisladas. Cada elemento visual y técnico debe sostener de forma coherente el peso de tu tarifa premium.
                </p>
              </div>
            </div>

            {/* Principio 2 */}
            <div className="flex gap-6">
              <span className="font-serif text-4xl text-brand-taupe/30 italic">02</span>
              <div>
                <h4 className="font-sans text-base md:text-sm tracking-wider uppercase font-bold text-brand-white mb-2">Performance Absoluta</h4>
                <p className="font-sans text-base md:text-xs text-brand-champagne/60 font-light leading-relaxed">
                  La lentitud es la primera señal de incompetencia técnica. Aseguramos cargas por debajo de 1.5 segundos mediante código puro.
                </p>
              </div>
            </div>

            {/* Principio 3 */}
            <div className="flex gap-6">
              <span className="font-serif text-4xl text-brand-taupe/30 italic">03</span>
              <div>
                <h4 className="font-sans text-base md:text-sm tracking-wider uppercase font-bold text-brand-white mb-2">Disciplina de Lujo</h4>
                <p className="font-sans text-base md:text-xs text-brand-champagne/60 font-light leading-relaxed">
                  Tratamos el espacio negativo y las tipografías con el mismo rigor que una firma de alta costura trata sus patrones.
                </p>
              </div>
            </div>

            {/* Principio 4 */}
            <div className="flex gap-6">
              <span className="font-serif text-4xl text-brand-taupe/30 italic">04</span>
              <div>
                <h4 className="font-sans text-base md:text-sm tracking-wider uppercase font-bold text-brand-white mb-2">Acceso Reservado</h4>
                <p className="font-sans text-base md:text-xs text-brand-champagne/60 font-light leading-relaxed">
                  Trabajamos exclusivamente con líderes y firmas consultoras que están listas para defender su valor corporativo.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
