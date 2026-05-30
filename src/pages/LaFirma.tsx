import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function LaFirma() {
  return (
    <div className="pt-24 md:pt-32">
      {/* HERO SECTION */}
      <section className="px-6 md:px-16 container mx-auto max-w-4xl text-center py-20 relative">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-taupe/5 rounded-full blur-3xl pointer-events-none" />
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative max-w-5xl mx-auto">
          {/* Card Jheisry */}
          <div className="bg-brand-brown/40 border border-brand-taupe/15 rounded-2xl px-6 py-10 md:p-12">
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
          <div className="bg-brand-brown/40 border border-brand-taupe/15 rounded-2xl px-6 py-10 md:p-12">
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
