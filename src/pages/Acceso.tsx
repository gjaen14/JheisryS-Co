import React from 'react';
import { motion } from 'motion/react';
import { Mail, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Acceso() {
  const navigate = useNavigate();

  return (
    <div className="pt-24 md:pt-32 min-h-screen pb-20 flex flex-col justify-center">
      <section className="px-6 md:px-16 container mx-auto max-w-2xl text-center">
        
        <div className="mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-white tracking-tight leading-tight mb-4"
          >
            Acceso Ejecutivo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-sm text-brand-champagne/60 font-light max-w-lg mx-auto"
          >
            Línea directa para requerimientos corporativos específicos, prensa y alianzas institucionales.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-brand-brown/20 border border-brand-taupe/15 rounded-2xl p-8 md:p-12 text-center"
        >
          <Mail className="w-8 h-8 text-brand-taupe mx-auto mb-6 opacity-80" />
          
          <a href="mailto:director@soarity.com" className="font-serif text-2xl text-brand-white hover:text-brand-taupe transition-colors inline-block mb-4">
            director@soarity.com
          </a>
          
          <p className="font-sans text-xs text-brand-champagne/50 font-light block tracking-wide">
            Tiempo estimado de respuesta: 24h a 48h hábiles.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 pt-12 border-t border-brand-taupe/10 font-sans"
        >
          <p className="text-xs text-brand-champagne/60 font-light mb-4">
            Si eres un prospecto buscando evaluar la viabilidad técnica y visual de tu marca:
          </p>
          <button
            onClick={() => navigate('/diagnostico')}
            className="inline-flex items-center gap-2 text-brand-taupe hover:text-brand-white font-sans text-xs tracking-wider uppercase transition-colors"
          >
            <span className="border-b border-brand-taupe/30 pb-1">Proceder al Diagnóstico Oficial</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>

      </section>
    </div>
  );
}
