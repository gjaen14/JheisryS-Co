import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, Clock, ShieldCheck, CreditCard, Sparkles, 
  ArrowLeft, ArrowRight, User, Globe, Briefcase, Mail, CheckCircle2, AlertCircle, RefreshCw
} from 'lucide-react';
import { BookingDetails, TimeSlot } from '../types';
import BrandLogo from './BrandLogo';

interface BookingFormProps {
  onClose: () => void;
  initialScore?: number;
}

const AVAILABLE_DAYS = [
  { name: 'Lun', date: 'Jun 1', label: 'Lunes, 1 de Junio' },
  { name: 'Mié', date: 'Jun 3', label: 'Miércoles, 3 de Junio' },
  { name: 'Vie', date: 'Jun 5', label: 'Viernes, 5 de Junio' },
  { name: 'mar', date: 'Jun 9', label: 'Martes, 9 de Junio' },
];

const AVAILABLE_SLOTS: TimeSlot[] = [
  { id: 't1', time: '10:00 AM — 11:00 AM (EST)', available: true },
  { id: 't2', time: '02:00 PM — 03:00 PM (EST)', available: true },
  { id: 't3', time: '04:30 PM — 05:30 PM (EST)', available: true },
];

export default function BookingForm({ onClose, initialScore = 45 }: BookingFormProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cardFlipped, setCardFlipped] = useState(false);

  // Form states
  const [form, setForm] = useState<BookingDetails>({
    ceoName: '',
    companyName: '',
    website: '',
    contactEmail: '',
    bottleneck: 'pricing-objection',
    date: 'Jun 1',
    timeSlot: 't1',
    authorityScore: initialScore,
  });

  const [cardDetails, setCardDetails] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
  });

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({ ...prev, [name]: value }));
  };

  // Quick form val
  const isIntakeValid = form.ceoName.trim() && form.companyName.trim() && form.website.trim() && form.contactEmail.includes('@');
  const isCardValid = cardDetails.number.replace(/\s/g, '').length >= 16 && cardDetails.name.trim() && cardDetails.expiry.includes('/') && cardDetails.cvc.length >= 3;

  const getDayLabel = (selectedDate: string) => {
    return AVAILABLE_DAYS.find(day => day.date === selectedDate)?.label || selectedDate;
  };

  const getSlotLabel = (selectedSlotId: string) => {
    return AVAILABLE_SLOTS.find(s => s.id === selectedSlotId)?.time || '10:00 AM EST';
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isCardValid) return;

    setIsSubmitting(true);
    // Simulate luxury API response time
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(4);
    }, 2500);
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length > 0) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-brand-obsidian/90 backdrop-blur-md">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: 'spring', duration: 0.6 }}
        className="relative w-full max-w-4xl bg-brand-brown border border-brand-taupe/20 rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[580px]"
      >
        {/* Left Side Highlight Panel */}
        <div className="md:col-span-4 bg-brand-obsidian p-6 md:p-8 flex flex-col justify-between border-r border-brand-taupe/10 relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-taupe/10 via-transparent to-transparent opacity-60 pointer-events-none" />
          
          <div className="relative z-10">
            <button 
              onClick={onClose}
              className="group inline-flex items-center gap-2 text-xs font-sans text-brand-champagne hover:text-brand-taupe transition-colors duration-200 mb-8"
            >
              <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
              <span>Regresar al Estudio</span>
            </button>

            <div className="mb-6">
              <BrandLogo theme="gold" size={40} showText={true} />
            </div>

            <div className="space-y-4 mt-8">
              <h4 className="font-serif text-xl md:text-lg text-brand-white leading-snug">
                El Diagnóstico de Autoridad
              </h4>
              <p className="font-sans text-base md:text-xs text-brand-champagne/80 font-light leading-relaxed">
                Una hora a puerta cerrada. Ninguna auditoría corporativa convencional se compara a la profundidad visual y de arquitectura técnica que realizamos.
              </p>
            </div>
          </div>

          <div className="relative z-10 border-t border-brand-taupe/15 pt-6 mt-6 space-y-4 text-xs font-sans text-brand-champagne/70 font-light">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-brand-taupe animate-pulse" />
              <span>Socio Técnico: <strong>Gustavo</strong> (Ex-Director de Tech)</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-brand-taupe animate-pulse" />
              <span>Brand Strategist: <strong>Jheisry</strong> (Socia Ejecutiva)</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full text-brand-taupe font-bold">$</span>
              <span>Inversion Premium: <strong>$250.00 USD</strong></span>
            </div>
          </div>
        </div>

        {/* Right Side Content Panel */}
        <div className="md:col-span-8 p-6 md:p-10 flex flex-col justify-between bg-brand-brown/70">
          
          {/* Steps Progress Indicator (Not on success step 4) */}
          {step < 4 && (
            <div className="flex items-center justify-between border-b border-brand-taupe/10 pb-4 mb-6">
              <span className="font-sans text-[10px] tracking-widest uppercase text-brand-taupe font-semibold">
                Paso {step} de 3 — {step === 1 ? 'Datos del CEO' : step === 2 ? 'Alinear Agenda' : 'Pago Seguro'}
              </span>
              <div className="flex gap-1.5">
                <div className={`w-6 h-1 rounded-full transition-all duration-300 ${step >= 1 ? 'bg-brand-taupe' : 'bg-brand-obsidian'}`} />
                <div className={`w-6 h-1 rounded-full transition-all duration-300 ${step >= 2 ? 'bg-brand-taupe' : 'bg-brand-obsidian'}`} />
                <div className={`w-6 h-1 rounded-full transition-all duration-300 ${step >= 3 ? 'bg-brand-taupe' : 'bg-brand-obsidian'}`} />
              </div>
            </div>
          )}

          {/* Core Multi-Step Logic */}
          <div className="flex-grow">
            <AnimatePresence mode="wait">
              
              {/* STEP 1: CEO & Website Intake Form */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="font-serif text-2xl md:text-2xl text-brand-white mb-2">
                      Comencemos con tu ecosistema digital
                    </h3>
                    <p className="font-sans text-base md:text-xs text-brand-champagne/70 font-light">
                      Proveenos los enlaces y datos de tu firma para realizar el pre-análisis exhaustivo antes de mi llamada.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-sans text-[11px] tracking-wider uppercase text-brand-taupe font-medium block">
                        Nombre del CEO / Socio Principal
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-taupe/60" />
                        <input
                          type="text"
                          name="ceoName"
                          placeholder="Julián de la Garza"
                          value={form.ceoName}
                          onChange={handleTextChange}
                          className="w-full bg-brand-obsidian/80 border border-brand-taupe/15 text-brand-white font-sans text-xs rounded-lg pl-10 pr-4 py-3 placeholder:text-brand-champagne/30 focus:border-brand-taupe/60 focus:outline-none transition-colors duration-200"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-sans text-[11px] tracking-wider uppercase text-brand-taupe font-medium block">
                        Nombre de la Marca o Agencia
                      </label>
                      <div className="relative">
                        <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-taupe/60" />
                        <input
                          type="text"
                          name="companyName"
                          placeholder="Excellence Global Group"
                          value={form.companyName}
                          onChange={handleTextChange}
                          className="w-full bg-brand-obsidian/80 border border-brand-taupe/15 text-brand-white font-sans text-xs rounded-lg pl-10 pr-4 py-3 placeholder:text-brand-champagne/30 focus:border-brand-taupe/60 focus:outline-none transition-colors duration-200"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-sans text-[11px] tracking-wider uppercase text-brand-taupe font-medium block">
                        Sitio Web Actual
                      </label>
                      <div className="relative">
                        <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-taupe/60" />
                        <input
                          type="url"
                          name="website"
                          placeholder="https://excellence.corp"
                          value={form.website}
                          onChange={handleTextChange}
                          className="w-full bg-brand-obsidian/80 border border-brand-taupe/15 text-brand-white font-sans text-xs rounded-lg pl-10 pr-4 py-3 placeholder:text-brand-champagne/30 focus:border-brand-taupe/60 focus:outline-none transition-colors duration-200"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-sans text-[11px] tracking-wider uppercase text-brand-taupe font-medium block">
                        Correo de Contacto Directo
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-taupe/60" />
                        <input
                          type="email"
                          name="contactEmail"
                          placeholder="ceo@excellence.corp"
                          value={form.contactEmail}
                          onChange={handleTextChange}
                          className="w-full bg-brand-obsidian/80 border border-brand-taupe/15 text-brand-white font-sans text-xs rounded-lg pl-10 pr-4 py-3 placeholder:text-brand-champagne/30 focus:border-brand-taupe/60 focus:outline-none transition-colors duration-200"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-sans text-[11px] tracking-wider uppercase text-brand-taupe font-medium block">
                      ¿Cuál es la fuga o fricción más frustrante hoy?
                    </label>
                    <select
                      name="bottleneck"
                      value={form.bottleneck}
                      onChange={handleTextChange}
                      className="w-full bg-brand-obsidian/80 border border-brand-taupe/15 text-brand-white font-sans text-xs rounded-lg px-4 py-3 focus:border-brand-taupe/60 focus:outline-none transition-colors duration-200 cursor-pointer"
                    >
                      <option value="pricing-objection">"Mis propuestas las tachan de 'caras' y los competidores mediocres ganan"</option>
                      <option value="bad-design">"Nuestra ejecución interna es de escala mundial, pero la web parece amateur"</option>
                      <option value="lead-quality">"Atraigo únicamente prospectos pequeños que exigen soporte excesivo y rebajas"</option>
                      <option value="no-trust-signal">"Nos cuesta capitalizar acuerdos de forma remota porque no parecemos imponentes"</option>
                    </select>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Scarcity Agenda Reservation Selection */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="font-serif text-2xl md:text-2xl text-brand-white mb-2">
                      Sincroniza agendas de alta dirección
                    </h3>
                    <p className="font-sans text-base md:text-xs text-brand-champagne/70 font-light">
                      Debido al involucramiento de Gustavo y Jheisry personalmente en cada diagnóstico, solo hay de 3 a 4 huecos a la semana. Escoge tu ranura de privilegio:
                    </p>
                  </div>

                  {/* Day Picker */}
                  <div className="space-y-3">
                    <label className="font-sans text-[11px] tracking-wider uppercase text-brand-taupe font-medium block">
                      Fecha del Privilegio (Semanas Entrantes)
                    </label>
                    <div className="grid grid-cols-4 gap-3">
                      {AVAILABLE_DAYS.map((day) => (
                        <button
                          key={day.date}
                          type="button"
                          onClick={() => setForm(p => ({ ...p, date: day.date }))}
                          className={`border rounded-xl p-3 flex flex-col items-center justify-center transition-all duration-300 ${
                            form.date === day.date
                              ? 'bg-brand-taupe border-brand-taupe text-brand-obsidian shadow-lg'
                              : 'bg-brand-obsidian/60 border-brand-taupe/10 hover:border-brand-taupe/40 text-brand-white'
                          }`}
                        >
                          <span className="font-sans text-[10px] tracking-widest uppercase opacity-60 leading-none mb-1">
                            {day.name}
                          </span>
                          <span className="font-serif text-sm font-semibold tracking-tight">
                            {day.date}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Hour Picker */}
                  <div className="space-y-3">
                    <label className="font-sans text-[11px] tracking-wider uppercase text-brand-taupe font-medium block">
                      Espacio Disponible (Time Slot)
                    </label>
                    <div className="space-y-2">
                      {AVAILABLE_SLOTS.map((slot) => (
                        <button
                          key={slot.id}
                          type="button"
                          onClick={() => setForm(p => ({ ...p, timeSlot: slot.id }))}
                          className={`w-full border rounded-xl p-4 flex items-center justify-between text-left transition-all duration-300 ${
                            form.timeSlot === slot.id
                              ? 'bg-brand-taupe/10 border-brand-taupe text-brand-taupe shadow-md'
                              : 'bg-brand-obsidian/40 border-brand-taupe/10 hover:border-brand-taupe/30 text-brand-white'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <Clock className={`w-4 h-4 ${form.timeSlot === slot.id ? 'text-brand-taupe' : 'text-brand-champagne/40'}`} />
                            <span className="font-mono text-xs">{slot.time}</span>
                          </div>
                          <span className="font-sans text-[10px] uppercase font-bold tracking-widest text-brand-taupe leading-none">
                            Reservar
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-brand-obsidian/30 rounded-xl p-3 border border-brand-taupe/5 flex items-start gap-2.5 text-[11px] font-sans text-brand-champagne/80 font-light leading-relaxed">
                    <span className="text-brand-taupe">✦</span>
                    <p>
                      Al agendar, el sistema bloquea inmediatamente la hora de simetría en el iPad comercial de Gustavo y el calendario en vivo de Jheisry.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Authentic Premium Checkout Panel */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="font-serif text-2xl md:text-2xl text-brand-white mb-2">
                      Pasarela de pago blindada
                    </h3>
                    <p className="font-sans text-base md:text-xs text-brand-champagne/70 font-light">
                      Agendamiento de alta seguridad con protección bancaria SSL de 256 bits. Se procesará tu inversión premium de $250.00 USD.
                    </p>
                  </div>

                  {/* Visual Premium Credit Card Widget */}
                  <div className="perspective-1000 w-full max-w-sm mx-auto mb-6">
                    <motion.div 
                      animate={{ rotateY: cardFlipped ? 180 : 0 }}
                      transition={{ duration: 0.6 }}
                      className="relative w-full h-44 rounded-2xl bg-gradient-to-br from-brand-brown via-[#2c221c] to-brand-obsidian border border-brand-taupe/30 p-5 shadow-xl text-brand-white flex flex-col justify-between preserve-3d"
                    >
                      {/* Card FRONT */}
                      <div className="absolute inset-0 p-5 flex flex-col justify-between backface-invisible">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center gap-1">
                            <span className="w-6 h-6 rounded-full bg-brand-taupe/25 border border-brand-taupe/50 inline-block" />
                            <span className="font-serif text-xs italic text-brand-taupe">Soarity & Co</span>
                          </div>
                          <CreditCard className="w-5 h-5 text-brand-taupe" />
                        </div>
                        
                        <div className="font-mono text-sm tracking-[0.2em] my-3">
                          {cardDetails.number || '•••• •••• •••• ••••'}
                        </div>

                        <div className="flex justify-between items-end">
                          <div>
                            <span className="text-[8px] font-sans tracking-wider uppercase opacity-40 block">Propietario</span>
                            <span className="font-sans text-xs tracking-wide uppercase truncate max-w-[170px] inline-block">
                              {cardDetails.name || 'CEO CLIENT'}
                            </span>
                          </div>
                          <div className="text-right">
                            <span className="text-[8px] font-sans tracking-wider uppercase opacity-40 block">Vence</span>
                            <span className="font-mono text-xs">{cardDetails.expiry || 'MM/YY'}</span>
                          </div>
                        </div>
                      </div>

                      {/* Card BACK */}
                      <div className="absolute inset-0 p-5 bg-gradient-to-br from-[#1c1918] to-brand-brown border border-brand-taupe/20 rounded-2xl flex flex-col justify-between backface-invisible [transform:rotateY(180deg)]">
                        <div className="w-full h-8 bg-brand-obsidian absolute left-0 top-6" />
                        <div className="flex justify-end gap-3 items-center mt-12 relative z-10">
                          <span className="text-[8px] font-sans tracking-wider uppercase opacity-40">CVC</span>
                          <div className="bg-brand-white text-brand-obsidian font-mono px-2 py-0.5 rounded text-xs">
                            {cardDetails.cvc || '•••'}
                          </div>
                        </div>
                        <div className="text-[8px] font-sans text-brand-champagne/40 tracking-wider">
                          S&CO PLATINUM SECURITY ENVELOPE
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Card Billing Address Fields & Processing logic */}
                  <form onSubmit={handlePaymentSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      
                      <div className="space-y-1">
                        <label className="font-sans text-[10px] tracking-wider uppercase text-brand-taupe font-medium">
                          Número de Tarjeta
                        </label>
                        <input
                          type="text"
                          name="number"
                          placeholder="4111 2222 3333 4444"
                          maxLength={19}
                          value={cardDetails.number}
                          onChange={(e) => {
                            e.target.value = formatCardNumber(e.target.value);
                            handleCardChange(e);
                          }}
                          onFocus={() => setCardFlipped(false)}
                          className="w-full bg-brand-obsidian border border-brand-taupe/15 text-brand-white font-mono text-xs rounded-lg px-3.5 py-2.5 placeholder:text-brand-champagne/20 focus:border-brand-taupe/50 focus:outline-none transition-colors"
                          required
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="font-sans text-[10px] tracking-wider uppercase text-brand-taupe font-medium">
                          Nombre del Tarjetahabiente
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="MIGUEL DE LA GARZA"
                          value={cardDetails.name}
                          onChange={handleCardChange}
                          onFocus={() => setCardFlipped(false)}
                          className="w-full bg-brand-obsidian border border-brand-taupe/15 text-brand-white font-sans text-xs rounded-lg px-3.5 py-2.5 placeholder:text-brand-champagne/20 focus:border-brand-taupe/50 focus:outline-none transition-colors"
                          required
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="font-sans text-[10px] tracking-wider uppercase text-brand-taupe font-medium">
                          Expiración
                        </label>
                        <input
                          type="text"
                          name="expiry"
                          placeholder="MM/YY"
                          maxLength={5}
                          value={cardDetails.expiry}
                          onChange={handleCardChange}
                          onFocus={() => setCardFlipped(false)}
                          className="w-full bg-brand-obsidian border border-brand-taupe/15 text-brand-white font-mono text-xs rounded-lg px-3.5 py-2.5 placeholder:text-brand-champagne/20 focus:border-brand-taupe/50 focus:outline-none transition-colors"
                          required
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="font-sans text-[10px] tracking-wider uppercase text-brand-taupe font-medium">
                          CVC / CVV
                        </label>
                        <input
                          type="password"
                          name="cvc"
                          placeholder="•••"
                          maxLength={4}
                          value={cardDetails.cvc}
                          onChange={handleCardChange}
                          onFocus={() => setCardFlipped(true)}
                          onBlur={() => setCardFlipped(false)}
                          className="w-full bg-brand-obsidian border border-brand-taupe/15 text-brand-white font-mono text-xs rounded-lg px-3.5 py-2.5 placeholder:text-brand-champagne/20 focus:border-brand-taupe/50 focus:outline-none transition-colors"
                          required
                        />
                      </div>

                    </div>

                    <button type="submit" className="hidden" /> {/* Hidden trigger */}
                  </form>
                </motion.div>
              )}

              {/* STEP 4: Absolute Luxury Success Screen */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6 flex flex-col justify-center items-center text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-taupe/10 border border-brand-taupe/30 flex items-center justify-center text-brand-taupe mb-2">
                    <CheckCircle2 className="w-8 h-8 animate-bounce" />
                  </div>

                  <div>
                    <span className="font-sans text-[10px] tracking-widest uppercase text-brand-taupe font-bold block mb-1">
                      Agendado Oficialmente — S&CO+
                    </span>
                    <h2 className="font-serif text-2xl md:text-3xl text-brand-white">
                      Bienvenidos al Círculo de Autoridad
                    </h2>
                    <p className="font-sans text-xs text-brand-champagne/70 font-light max-w-md mx-auto mt-2 leading-relaxed">
                      El Diagnóstico de Autoridad para <strong>{form.companyName}</strong> está confirmado. Hemas enviado una reserva e invitación confidencial a <strong>{form.contactEmail}</strong>.
                    </p>
                  </div>

                  {/* Summary ticket mockup */}
                  <div className="w-full max-w-md bg-brand-obsidian/70 border border-brand-taupe/15 rounded-xl p-5 text-left font-sans text-xs space-y-3 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-brand-taupe/5 rounded-full blur-xl" />
                    
                    <div className="flex justify-between font-mono text-[9px] text-brand-taupe border-b border-brand-taupe/10 pb-2 mb-2">
                      <span>INVOICE CONFIRMED</span>
                      <span>#S-CO-{Math.floor(1000 + Math.random() * 9000)}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="opacity-60">CEO / Convocado:</span>
                      <span className="font-semibold text-brand-white">{form.ceoName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-60">Socio de Marca:</span>
                      <strong className="text-brand-taupe">Jheisry (Brand Strategist)</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-60">Socio Técnico:</span>
                      <strong className="text-brand-taupe">Gustavo (Socio Técnico)</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-60 font-medium">Fecha Acordada:</span>
                      <span className="text-brand-white font-semibold font-mono">{getDayLabel(form.date)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-60 font-medium">Horario Agendado:</span>
                      <span className="text-brand-white font-semibold font-mono">{getSlotLabel(form.timeSlot)}</span>
                    </div>
                    
                    <div className="border-t border-brand-taupe/10 pt-3 flex justify-between font-mono text-[11px] text-brand-white font-semibold">
                      <span>TOTAL RETENIDO:</span>
                      <span className="text-brand-taupe">$250.00 USD</span>
                    </div>
                  </div>

                  <p className="font-sans text-[11.5px] text-brand-champagne/90 italic leading-relaxed max-w-md">
                    "Socio, Jheisry y Gustavo analizarán tu sitio web (<span className="underline">{form.website}</span>) en las próximas 48 horas. Ven preparado con tu tarifa actual, un café premium y postura de crecimiento."
                  </p>

                  <button
                    onClick={onClose}
                    className="w-full md:w-auto bg-brand-sand hover:bg-brand-sand/90 text-brand-obsidian font-sans font-bold md:font-semibold tracking-wider text-base md:text-xs uppercase py-5 md:py-3.5 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-brand-sand/10"
                  >
                    Regresar al Estudio
                  </button>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Bottom Action buttons for Steps */}
          {step < 4 && (
            <div className="flex justify-between items-center border-t border-brand-taupe/10 pt-6 mt-8">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(prev => (prev - 1) as any)}
                  className="px-5 py-2 text-xs font-sans text-brand-champagne hover:text-brand-taupe transition-colors duration-200"
                >
                  Atrás
                </button>
              ) : (
                <button
                  type="button"
                  onClick={onClose}
                  className="px-3 py-2 text-xs font-sans text-brand-champagne/60 hover:text-brand-champagne transition-colors duration-200"
                >
                  Cancelar agendamiento
                </button>
              )}

              {step === 1 && (
                <button
                  type="button"
                  disabled={!isIntakeValid}
                  onClick={() => setStep(2)}
                  className={`w-full md:w-auto justify-center px-6 py-5 md:py-3 rounded-xl font-sans font-bold md:font-semibold uppercase text-base md:text-[10px] tracking-widest flex items-center gap-2 transition-all duration-200 ${
                    isIntakeValid 
                      ? 'bg-brand-sand text-brand-obsidian cursor-pointer active:scale-95 shadow-md shadow-brand-sand/10' 
                      : 'bg-brand-obsidian text-brand-champagne/30 border border-brand-taupe/5 cursor-not-allowed'
                  }`}
                >
                  <span>Elegir Horario</span>
                  <ArrowRight className="w-4 h-4 md:w-3.5 md:h-3.5" />
                </button>
              )}

              {step === 2 && (
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="w-full md:w-auto justify-center bg-brand-sand text-brand-obsidian px-6 py-5 md:py-3 rounded-xl font-sans font-bold md:font-semibold uppercase text-base md:text-[10px] tracking-widest flex items-center gap-2 transition-all duration-200 cursor-pointer active:scale-95 shadow-md shadow-brand-sand/10"
                >
                  <span>Proceder al checkout</span>
                  <ArrowRight className="w-4 h-4 md:w-3.5 md:h-3.5" />
                </button>
              )}

              {step === 3 && (
                <button
                  type="button"
                  onClick={handlePaymentSubmit}
                  disabled={!isCardValid || isSubmitting}
                  className={`w-full md:w-auto justify-center px-8 py-5 md:py-3.5 rounded-xl font-sans font-bold md:font-semibold uppercase text-base md:text-[10px] tracking-widest flex items-center gap-2.5 transition-all duration-300 ${
                    isCardValid && !isSubmitting
                      ? 'bg-brand-sand text-brand-obsidian cursor-pointer hover:bg-brand-sand/90 active:scale-98 shadow-lg shadow-brand-sand/10'
                      : 'bg-brand-obsidian text-brand-champagne/30 border border-brand-taupe/5 cursor-not-allowed'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-5 h-5 md:w-4 md:h-4 animate-spin" />
                      <span>Verificando Fondos...</span>
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="w-5 h-5 md:w-4 md:h-4" />
                      <span>Aprobar Pago de $250.00 USD</span>
                    </>
                  )}
                </button>
              )}
            </div>
          )}

        </div>
      </motion.div>
    </div>
  );
}
