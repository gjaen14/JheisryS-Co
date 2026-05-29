import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Lock, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Diagnostico() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    facturacion: '',
    cuelloBotella: '',
    aceptaCargo: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.aceptaCargo) return;
    
    setIsSubmitting(true);
    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setShowPaymentModal(true);
    }, 1500);
  };

  const handleSimulatePayment = () => {
    alert("Redirigiendo a pasarela segura de Stripe / Calendario Privado...");
    setShowPaymentModal(false);
  };

  return (
    <div className="pt-24 md:pt-32 min-h-screen pb-20">
      {/* HERO SECTION */}
      <section className="px-6 md:px-16 container mx-auto max-w-4xl text-center py-12 md:py-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-white tracking-tight leading-tight"
        >
          Diagnóstico de Autoridad:<br/>
          <span className="italic font-normal text-brand-taupe">Tu primer paso hacia el estándar.</span>
        </motion.h1>
      </section>

      {/* FORMULARIO BLINDADO */}
      <section className="px-6 md:px-16 container mx-auto max-w-2xl">
        <div className="bg-brand-brown/40 border border-brand-taupe/15 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-taupe/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="mb-10 text-center">
            <Lock className="w-6 h-6 text-brand-taupe mx-auto mb-4" />
            <h3 className="font-sans text-xs tracking-[0.3em] uppercase text-brand-white font-semibold mb-2">Solicitud de Acceso</h3>
            <p className="font-sans text-xs text-brand-champagne/60 font-light">
              Por favor, provee los datos de tu operación. Evaluaremos tu solicitud antes de procesar el pago.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 font-sans">
            
            <div className="space-y-2">
              <label className="text-[10px] tracking-widest uppercase text-brand-champagne/70 font-semibold block">Datos Básicos</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  required
                  placeholder="Nombre y Apellido"
                  value={formData.nombre}
                  onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                  className="w-full bg-brand-obsidian/50 border border-brand-taupe/20 rounded-lg px-4 py-3 text-xs text-brand-white placeholder:text-brand-champagne/30 focus:outline-none focus:border-brand-taupe/50 transition-colors"
                />
                <input 
                  type="text" 
                  required
                  placeholder="Nombre de la Empresa"
                  value={formData.empresa}
                  onChange={(e) => setFormData({...formData, empresa: e.target.value})}
                  className="w-full bg-brand-obsidian/50 border border-brand-taupe/20 rounded-lg px-4 py-3 text-xs text-brand-white placeholder:text-brand-champagne/30 focus:outline-none focus:border-brand-taupe/50 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] tracking-widest uppercase text-brand-champagne/70 font-semibold block">Rango de Facturación (Anual)</label>
              <div className="relative">
                <select 
                  required
                  value={formData.facturacion}
                  onChange={(e) => setFormData({...formData, facturacion: e.target.value})}
                  className="w-full bg-brand-obsidian/50 border border-brand-taupe/20 rounded-lg px-4 py-3 text-xs text-brand-white focus:outline-none focus:border-brand-taupe/50 transition-colors appearance-none"
                >
                  <option value="" disabled>Selecciona un rango...</option>
                  <option value="<50k">Menos de $50k USD</option>
                  <option value="50k-200k">$50k - $200k USD</option>
                  <option value="200k+">Más de $200k USD</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-brand-taupe">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] tracking-widest uppercase text-brand-champagne/70 font-semibold block">Cuello de Botella Actual</label>
              <textarea 
                required
                placeholder="¿Por qué crees que tu ecosistema digital está frenando tu crecimiento?"
                value={formData.cuelloBotella}
                onChange={(e) => setFormData({...formData, cuelloBotella: e.target.value})}
                rows={4}
                className="w-full bg-brand-obsidian/50 border border-brand-taupe/20 rounded-lg px-4 py-3 text-xs text-brand-white placeholder:text-brand-champagne/30 focus:outline-none focus:border-brand-taupe/50 transition-colors resize-none"
              />
            </div>

            <div className="pt-4 border-t border-brand-taupe/10">
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center mt-0.5">
                  <input 
                    type="checkbox" 
                    required
                    checked={formData.aceptaCargo}
                    onChange={(e) => setFormData({...formData, aceptaCargo: e.target.checked})}
                    className="appearance-none w-4 h-4 border border-brand-taupe/40 rounded bg-brand-obsidian checked:bg-brand-taupe checked:border-brand-taupe transition-colors cursor-pointer"
                  />
                  {formData.aceptaCargo && <CheckCircle2 className="w-3 h-3 text-brand-obsidian absolute pointer-events-none" />}
                </div>
                <span className="text-[10px] md:text-xs text-brand-champagne/60 font-light leading-relaxed group-hover:text-brand-champagne/80 transition-colors">
                  Entiendo que el Diagnóstico tiene un valor de <strong className="text-brand-taupe font-semibold">$250 USD</strong> y estoy preparado para proceder al pago si mi solicitud es aprobada.
                </span>
              </label>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                disabled={!formData.aceptaCargo || isSubmitting}
                className={`w-full font-sans font-semibold tracking-wider text-xs uppercase py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
                  !formData.aceptaCargo
                    ? 'bg-brand-taupe/20 text-brand-taupe/40 cursor-not-allowed'
                    : 'bg-brand-taupe hover:bg-brand-taupe/90 text-brand-obsidian shadow-lg shadow-brand-taupe/10 cursor-pointer active:scale-[0.98]'
                }`}
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Validando datos...</span>
                ) : (
                  <>
                    <span>Proceder con el Diagnóstico</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
            
          </form>
        </div>
      </section>

      {/* STRIPE / PAYMENT MODAL SIMULATION */}
      {showPaymentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-brand-obsidian/90 backdrop-blur-sm">
          <div className="bg-brand-brown border border-brand-taupe/30 rounded-2xl p-8 max-w-md w-full shadow-2xl relative font-sans animate-in fade-in zoom-in duration-300">
            <div className="text-center mb-8">
              <Lock className="w-8 h-8 text-brand-taupe mx-auto mb-4" />
              <h2 className="text-lg text-brand-white font-serif mb-2">Pasarela Segura</h2>
              <p className="text-xs text-brand-champagne/60 font-light">Estás a punto de procesar tu pase de Diagnóstico Ejecutivo por $250 USD.</p>
            </div>
            
            <button
              onClick={handleSimulatePayment}
              className="w-full bg-brand-taupe hover:bg-brand-taupe/90 text-brand-obsidian font-semibold tracking-wider text-xs uppercase py-3 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-brand-taupe/10"
            >
              Simular Pago con Stripe
            </button>
            
            <button
              onClick={() => setShowPaymentModal(false)}
              className="w-full mt-4 bg-transparent text-brand-champagne/40 hover:text-brand-champagne/80 font-medium tracking-wider text-xs uppercase py-3 px-8 transition-colors"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
