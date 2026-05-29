import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Shield, Layers, Code, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Soluciones() {
  const navigate = useNavigate();

  return (
    <div className="pt-24 md:pt-32">
      {/* HERO SECTION */}
      <section className="px-6 md:px-16 container mx-auto max-w-4xl text-center py-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl text-brand-white tracking-tight leading-[1.1]"
        >
          Tu marca no necesita un rediseño.<br/>
          <span className="italic font-normal text-brand-taupe">Necesita un sistema de activos.</span>
        </motion.h1>
      </section>

      {/* LA ESCALERA DE VALOR */}
      <section className="py-20 bg-brand-brown/20 border-t border-brand-taupe/10">
        <div className="px-6 md:px-16 container mx-auto max-w-5xl">
          <div className="space-y-16">
            
            {/* FASE 0 */}
            <div className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-brand-taupe/10 -translate-x-1/2" />
              
              <div className="md:flex items-center justify-between gap-12 w-full">
                <div className="md:w-1/2 md:text-right md:pr-12 pb-6 md:pb-0">
                  <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-brand-taupe font-semibold block mb-2">
                    Fase 0
                  </span>
                  <h3 className="font-serif text-2xl text-brand-white mb-3">Diagnóstico de Autoridad</h3>
                  <p className="font-sans text-xs text-brand-champagne/70 font-light leading-relaxed">
                    El Filtro — La validación innegociable. No asumimos ni adivinamos. Ingresamos a tu ecosistema para detectar latencias, inconsistencias y fugas de capital provocadas por una presencia deficiente.
                  </p>
                </div>
                <div className="absolute left-0 md:static md:w-auto flex justify-center -translate-x-[15px] md:translate-x-0 bg-brand-obsidian p-2 rounded-full z-10 border border-brand-taupe/20">
                  <Shield className="w-5 h-5 text-brand-taupe" />
                </div>
                <div className="md:w-1/2 md:pl-12 opacity-30 hidden md:block">
                  <div className="h-0.5 w-16 bg-brand-taupe/30" />
                </div>
              </div>
            </div>

            {/* FASE 1 */}
            <div className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-brand-taupe/10 -translate-x-1/2" />
              
              <div className="md:flex items-center justify-between flex-row-reverse gap-12 w-full">
                <div className="md:w-1/2 md:text-left md:pl-12 pb-6 md:pb-0">
                  <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-brand-taupe font-semibold block mb-2">
                    Fase 1
                  </span>
                  <h3 className="font-serif text-2xl text-brand-white mb-3">Branding Estratégico</h3>
                  <p className="font-sans text-xs text-brand-champagne/70 font-light leading-relaxed">
                    El Pivote — Identidad de alto valor. Construimos un relato visual y verbal que proyecte el estándar real de tu operación. Eliminamos el aspecto genérico y lo reemplazamos con autoridad pura.
                  </p>
                </div>
                <div className="absolute left-0 md:static md:w-auto flex justify-center -translate-x-[15px] md:translate-x-0 bg-brand-obsidian p-2 rounded-full z-10 border border-brand-taupe/20">
                  <Layers className="w-5 h-5 text-brand-taupe" />
                </div>
                <div className="md:w-1/2 md:pr-12 opacity-30 flex justify-end hidden md:flex">
                  <div className="h-0.5 w-16 bg-brand-taupe/30" />
                </div>
              </div>
            </div>

            {/* FASE 2 */}
            <div className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-brand-taupe/10 -translate-x-1/2" />
              
              <div className="md:flex items-center justify-between gap-12 w-full">
                <div className="md:w-1/2 md:text-right md:pr-12">
                  <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-brand-taupe font-semibold block mb-2">
                    Fase 2
                  </span>
                  <h3 className="font-serif text-2xl text-brand-white mb-3">Ecosistema de Autoridad</h3>
                  <p className="font-sans text-xs text-brand-champagne/70 font-light leading-relaxed">
                    El Blindaje — Activos de negocio. Desarrollo técnico inmaculado. Programamos en código nativo de alta latencia para asegurar que tu carta de presentación digital sea instantánea, fluida e irrefutable.
                  </p>
                </div>
                <div className="absolute left-0 md:static md:w-auto flex justify-center -translate-x-[15px] md:translate-x-0 bg-brand-obsidian p-2 rounded-full z-10 border border-brand-taupe/20">
                  <Code className="w-5 h-5 text-brand-taupe" />
                </div>
                <div className="md:w-1/2 md:pl-12 opacity-30 hidden md:block">
                  <div className="h-0.5 w-16 bg-brand-taupe/30" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECCIÓN: POLÍTICA DE INTEGRIDAD */}
      <section className="py-24 md:py-32 px-6 md:px-16 container mx-auto max-w-3xl text-center">
        <div className="bg-brand-obsidian border border-brand-taupe/20 rounded-2xl p-10 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-900/5 rounded-full blur-2xl pointer-events-none" />
          
          <AlertTriangle className="w-8 h-8 text-brand-taupe/50 mx-auto mb-6" />
          
          <h2 className="font-serif text-3xl text-brand-white mb-6">
            Nuestra política de Cero Parches
          </h2>
          
          <p className="font-sans text-sm text-brand-champagne/80 font-light leading-relaxed mb-8">
            No hacemos "logos", ni "arreglitos" aislados en sitios web deficientes. Tratar de curar un problema estructural con tácticas estéticas aisladas es una pérdida de tiempo para ti y para nosotros. Únicamente implementamos Ecosistemas de Autoridad Completos porque es la única vía para garantizar un impacto cuantificable en tu valoración en el mercado.
          </p>

          <button
            onClick={() => navigate('/diagnostico')}
            className="inline-flex items-center gap-2 bg-brand-taupe hover:bg-brand-taupe/90 text-brand-obsidian font-sans font-semibold tracking-wider text-xs uppercase py-3 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-brand-taupe/10"
          >
            <span>Iniciar Diagnóstico</span>
            <ArrowRight className="w-4 h-4 text-brand-obsidian" />
          </button>
        </div>
      </section>
    </div>
  );
}
