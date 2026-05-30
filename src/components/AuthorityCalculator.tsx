import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, TrendingDown, Coins, HelpCircle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { AuditMetrics } from '../types';

interface AuthorityCalculatorProps {
  onStartBooking: (score: number) => void;
}

export default function AuthorityCalculator({ onStartBooking }: AuthorityCalculatorProps) {
  // Advanced metrics configuration representing the corporate pain points
  const [metrics, setMetrics] = useState<AuditMetrics>({
    brandIdentity: 4,
    techArchitecture: 3,
    digitalPresence: 4,
    pricingConfidence: 5,
  });

  const [hoveredTip, setHoveredTip] = useState<string | null>(null);
  const [annualRevenueInput, setAnnualRevenueInput] = useState<string>("150000");

  const annualRevenue = parseInt(annualRevenueInput.replace(/\D/g, '')) || 0;

  const handleRevenueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '');
    setAnnualRevenueInput(val);
  };

  const handleSliderChange = (key: keyof AuditMetrics, val: number) => {
    setMetrics(prev => ({ ...prev, [key]: val }));
  };

  // Formulas calculating real-world economic impacts of "poor digital authority"
  const brandScore = metrics.brandIdentity * 10;
  const techScore = metrics.techArchitecture * 10;
  const presenceScore = metrics.digitalPresence * 10;
  const pricingScore = metrics.pricingConfidence * 10;

  // Composite Authority level (out of 100)
  const collectiveScore = Math.round(
    (metrics.brandIdentity * 0.25 +
      metrics.techArchitecture * 0.25 +
      metrics.digitalPresence * 0.25 +
      metrics.pricingConfidence * 0.25) * 10
  );

  // Estimating annual loss (Desconfianza Tax)
  // Loss is dynamically calculated based on the annual revenue.
  // Maximum penalty is modeled as 40% of their revenue left on the table due to authority leaks.
  const estimatedRevenueLoss = Math.round(annualRevenue * ((100 - collectiveScore) / 100) * 0.40);

  // Dynamic diagnostic text based on the weakest link
  const getBespokeDiagnostic = () => {
    const scores = [
      { name: 'Identidad Visual', val: metrics.brandIdentity, category: 'brand' },
      { name: 'Arquitectura Técnica', val: metrics.techArchitecture, category: 'tech' },
      { name: 'Presencia Digital', val: metrics.digitalPresence, category: 'presence' },
      { name: 'Firmeza de Precios', val: metrics.pricingConfidence, category: 'pricing' },
    ];

    // Sort to find the lowest
    scores.sort((a, b) => a.val - b.val);
    const weakest = scores[0];

    if (weakest.val >= 8) {
      return {
        title: "Estructura Altamente Competente",
        desc: "Tu ecosistema tiene bases sólidas. Estás a un paso de consolidarte como una boutique de lujo intocable. El Diagnóstico pulirá detalles arquitectónicos invisibles pero letales.",
        pill: "Estándar Boutique"
      };
    }

    switch (weakest.category) {
      case 'brand':
        return {
          title: "Incoherencia Visual (Falta de Alta Costura)",
          desc: "Tu expertise es premium pero tu carta de presentación parece genérica o desactualizada. Los clientes corporativos huelen la falta de coherencia estética y asumen que tu servicio interno será igual de descuidado, regateando tus tarifas.",
          pill: "Fuga por Estética"
        };
      case 'tech':
        return {
          title: "Fragilidad Técnica (Ruido en la Confianza)",
          desc: "Un ecosistema digital lento, con formularios rígidos o plantillas genéricas destruye el valor de tu oferta tecnológica. A nivel directivo, si tu propia casa digital flaquea, desconfían de que vayas a solucionar sus problemas complejos.",
          pill: "Ruido Técnico"
        };
      case 'presence':
        return {
          title: "Invisibilidad Selectiva",
          desc: "Haces un excelente trabajo que nadie puede encontrar en línea de forma independiente. Si un tomador de decisión busca pruebas de tu autoridad digital y no encuentra un relato sofisticado, prefiere irse con competidores más ruidosos pero peor calificados.",
          pill: "Cero Autoridad Pasiva"
        };
      case 'pricing':
        return {
          title: "El Impuesto Invisible de las Concesiones",
          desc: "Estás defendiendo tu tarifa en lugar de filtrar por postura. Haces descuentos rápidos por miedo a perder la cuenta corporativa. Operas como socio especializado pero cobras tarifas de mano de obra commoditizada.",
          pill: "Falta de Postura Premium"
        };
      default:
        return {
          title: "Ecosistema Desequilibrado",
          desc: "Trabajas a nivel Senior, pero tu fachada digital luce Junior. Cobras hasta un 50% menos del verdadero valor de mercado por el cansancio de perseguir prospectos en lugar de atraer clientes de élite.",
          pill: "Desbalance de Valor"
        };
    }
  };

  const diagnostic = getBespokeDiagnostic();

  // Color mapping based on score level
  const getScoreColorClass = (score: number) => {
    if (score < 40) return 'text-red-400';
    if (score < 75) return 'text-brand-taupe';
    return 'text-green-400';
  };

  return (
    <div id="calculator-section" className="relative w-full max-w-5xl mx-auto px-4 py-8 md:py-16">
      {/* Decorative Gold Accent Borders */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[1px] bg-gradient-to-r from-transparent via-brand-taupe/30 to-transparent" />

      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="font-sans text-xs tracking-[0.4em] uppercase text-brand-sand font-semibold">
          Simulador de Postura & Impacto
        </span>
        <h2 className="font-serif text-3xl md:text-5xl text-brand-white mt-3 mb-4 tracking-tight leading-tight">
          <span className="italic font-light text-brand-taupe">Calcula</span> tu impuesto de la desconfianza.
        </h2>
        <p className="font-sans text-sm text-brand-champagne/80 font-light max-w-lg mx-auto">
          Identifica cuánto capital estás dejando sobre la mesa debido a la brecha entre tu capacidad técnica y tu presencia digital.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sliders Control Panel */}
        <div className="lg:col-span-7 bg-brand-brown/40 border border-brand-taupe/15 backdrop-blur-md rounded-2xl p-6 md:p-8 space-y-8">
          <h3 className="font-serif text-xl text-brand-white tracking-wide border-b border-brand-taupe/10 pb-4 flex items-center justify-between">
            <span>Análisis de Fugas de Autoridad</span>
          </h3>

          {/* Revenue Input */}
          <div className="space-y-3 bg-brand-obsidian/40 p-4 rounded-xl border border-brand-taupe/10">
            <label className="font-sans font-medium text-brand-white text-sm block">
              Facturación Anual Aproximada
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-taupe font-mono font-bold">$</span>
              <input
                type="text"
                value={annualRevenueInput ? Number(annualRevenueInput).toLocaleString() : ""}
                onChange={handleRevenueChange}
                className="w-full bg-brand-obsidian border border-brand-taupe/20 rounded-lg py-3 pl-8 pr-12 text-brand-white font-mono focus:outline-none focus:border-brand-taupe/50 transition-colors"
                placeholder="150,000"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-champagne/40 text-xs font-sans tracking-wider">USD</span>
            </div>
          </div>

          {/* Metric 1 */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <label className="font-sans font-medium text-brand-white flex items-center gap-2">
                Identidad Visual & Diseño Premium
                <span
                  className="cursor-help text-brand-taupe/70 hover:text-brand-taupe transition-colors"
                  onMouseEnter={() => setHoveredTip('brand')}
                  onMouseLeave={() => setHoveredTip(null)}
                >
                  <HelpCircle className="w-4 h-4" />
                </span>
              </label>
              <span className="font-mono text-brand-taupe font-bold">{metrics.brandIdentity}/10</span>
            </div>

            <input
              type="range"
              min="1"
              max="10"
              step="1"
              value={metrics.brandIdentity}
              onChange={(e) => handleSliderChange('brandIdentity', parseInt(e.target.value))}
              className="w-full h-[3px] bg-brand-obsidian rounded-lg appearance-none cursor-pointer accent-brand-taupe focus:outline-none"
            />

            <div className="flex justify-between text-[10px] font-sans text-brand-champagne/40 tracking-wider">
              <span>Plantilla Genérica (1)</span>
              <span>Alta Costura Digital (10)</span>
            </div>
          </div>

          {/* Metric 2 */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <label className="font-sans font-medium text-brand-white flex items-center gap-2">
                Arquitectura Técnica & Velocidad
                <span
                  className="cursor-help text-brand-taupe/70 hover:text-brand-taupe transition-colors"
                  onMouseEnter={() => setHoveredTip('tech')}
                  onMouseLeave={() => setHoveredTip(null)}
                >
                  <HelpCircle className="w-4 h-4" />
                </span>
              </label>
              <span className="font-mono text-brand-taupe font-bold">{metrics.techArchitecture}/10</span>
            </div>

            <input
              type="range"
              min="1"
              max="10"
              step="1"
              value={metrics.techArchitecture}
              onChange={(e) => handleSliderChange('techArchitecture', parseInt(e.target.value))}
              className="w-full h-[3px] bg-brand-obsidian rounded-lg appearance-none cursor-pointer accent-brand-taupe focus:outline-none"
            />

            <div className="flex justify-between text-[10px] font-sans text-brand-champagne/40 tracking-wider">
              <span>Fácil Ruptura / Lento (1)</span>
              <span>Ultra-rápido / Custom (10)</span>
            </div>
          </div>

          {/* Metric 3 */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <label className="font-sans font-medium text-brand-white flex items-center gap-2">
                Presencia Activa & Trust Signals
                <span
                  className="cursor-help text-brand-taupe/70 hover:text-brand-taupe transition-colors"
                  onMouseEnter={() => setHoveredTip('presence')}
                  onMouseLeave={() => setHoveredTip(null)}
                >
                  <HelpCircle className="w-4 h-4" />
                </span>
              </label>
              <span className="font-mono text-brand-taupe font-bold">{metrics.digitalPresence}/10</span>
            </div>

            <input
              type="range"
              min="1"
              max="10"
              step="1"
              value={metrics.digitalPresence}
              onChange={(e) => handleSliderChange('digitalPresence', parseInt(e.target.value))}
              className="w-full h-[3px] bg-brand-obsidian rounded-lg appearance-none cursor-pointer accent-brand-taupe focus:outline-none"
            />

            <div className="flex justify-between text-[10px] font-sans text-brand-champagne/40 tracking-wider">
              <span>Anónimo / Sin Prueba (1)</span>
              <span>Autoridad Inapelable (10)</span>
            </div>
          </div>

          {/* Metric 4 */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <label className="font-sans font-medium text-brand-white flex items-center gap-2">
                Firmeza de Precios (Cero Descuentos)
                <span
                  className="cursor-help text-brand-taupe/70 hover:text-brand-taupe transition-colors"
                  onMouseEnter={() => setHoveredTip('pricing')}
                  onMouseLeave={() => setHoveredTip(null)}
                >
                  <HelpCircle className="w-4 h-4" />
                </span>
              </label>
              <span className="font-mono text-brand-taupe font-bold">{metrics.pricingConfidence}/10</span>
            </div>

            <input
              type="range"
              min="1"
              max="10"
              step="1"
              value={metrics.pricingConfidence}
              onChange={(e) => handleSliderChange('pricingConfidence', parseInt(e.target.value))}
              className="w-full h-[3px] bg-brand-obsidian rounded-lg appearance-none cursor-pointer accent-brand-taupe focus:outline-none"
            />

            <div className="flex justify-between text-[10px] font-sans text-brand-champagne/40 tracking-wider">
              <span>Vendes por Precio (1)</span>
              <span>Postura Innegociable (10)</span>
            </div>
          </div>

          {/* Dynamic Explaners Banner */}
          <div className="min-h-[50px] bg-brand-obsidian/60 border border-brand-taupe/10 rounded-xl p-3 text-xs font-sans text-brand-champagne/90 leading-relaxed italic">
            <AnimatePresence mode="wait">
              {hoveredTip === 'brand' && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <strong>Aviso de Marca:</strong> La simetría de layouts y la pureza tipográfica definen el subconsciente de las transacciones corporativas premium de más de $15K.
                </motion.p>
              )}
              {hoveredTip === 'tech' && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <strong>Aviso Técnico:</strong> El código no optimizado o la dependencia de plantillas baratas añade latencias que destruyen la reputación de equipos de ingeniería senior.
                </motion.p>
              )}
              {hoveredTip === 'presence' && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <strong>Aviso de Presencia:</strong> Googlear tu nombre o firma debe transmitir misterio e influencia blindada, no un vacío digital o perfiles abandonados.
                </motion.p>
              )}
              {hoveredTip === 'pricing' && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <strong>Aviso Tarifario:</strong> Si ofreces descuentos rápidos del 20% para asegurar el contrato, el cliente de élite asume de inmediato que tus horas están infladas.
                </motion.p>
              )}
              {!hoveredTip && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  * Pasa el ratón por los iconos de ayuda (?) para obtener sugerencias editoriales de alta costura digital.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Real-time Dynamic Results Card */}
        <div className="lg:col-span-5 flex flex-col gap-6">

          {/* Main Results Board */}
          <div className="bg-brand-brown/40 border border-brand-taupe/20 backdrop-blur-md rounded-2xl p-6 md:p-8 flex flex-col justify-between h-full relative overflow-hidden">
            {/* Visual shine */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-taupe/5 rounded-full blur-2xl" />

            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="font-sans text-[10px] tracking-widest uppercase text-brand-taupe block mb-1">
                    Nivel de Inmunidad Digital
                  </span>
                  <span className="font-sans text-xs bg-brand-taupe/10 border border-brand-taupe/30 text-brand-taupe px-2 py-0.5 rounded-full font-medium">
                    {diagnostic.pill}
                  </span>
                </div>
                <div className="text-right">
                  <span className={`font-serif text-4xl font-bold tracking-tight ${getScoreColorClass(collectiveScore)}`}>
                    {collectiveScore}<span className="text-lg font-light text-brand-champagne/40">%</span>
                  </span>
                </div>
              </div>

              {/* Loss Metric (The dramatic financial anchor) */}
              <div className="bg-brand-obsidian/70 border border-red-950/40 rounded-xl p-5 mb-6 flex items-start gap-4">
                <div className="p-2 bg-red-950/30 border border-red-900/40 rounded-lg text-red-400 mt-1">
                  <TrendingDown className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <span className="font-sans text-[11px] tracking-wider uppercase text-red-300 font-medium block">
                    Impuesto de Desconfianza Estimado
                  </span>
                  <span className="font-serif text-2xl font-bold text-red-200 block my-1">
                    ${Math.round(estimatedRevenueLoss).toLocaleString()}{' '}
                    <span className="text-xs font-sans tracking-wide font-normal text-brand-champagne/70">
                      USD / Año
                    </span>
                  </span>
                  <p className="font-sans text-[11px] text-brand-champagne/70 font-light leading-relaxed">
                    Tu brecha de autoridad actual te cuesta ${Math.round(estimatedRevenueLoss).toLocaleString()} al año en contratos perdidos.
                  </p>
                </div>
              </div>

              {/* Bespoke Analysis Paragraph */}
              <div className="space-y-2 mb-8">
                <span className="font-sans text-[10px] tracking-wider uppercase text-brand-taupe font-bold block">
                  Diagnóstico Forense:
                </span>
                <h4 className="font-serif text-lg text-brand-white tracking-wide">
                  {diagnostic.title}
                </h4>
                <p className="font-sans text-xs text-brand-champagne/85 font-light leading-relaxed">
                  {diagnostic.desc}
                </p>
              </div>
            </div>

            {/* CTA to lock and check */}
            <button
              onClick={() => onStartBooking(collectiveScore)}
              className="w-full bg-brand-sand hover:bg-brand-sand/90 active:scale-[0.98] text-brand-obsidian font-sans font-bold md:font-semibold tracking-wider text-xs uppercase py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-brand-sand/10"
            >
              <span>Ver mi Diagnóstico Preliminar</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <span className="text-[10px] font-sans text-center text-brand-champagne/40 block mt-3 font-light">
              Precio único y garantizado: $250 USD — Reembolso inmediato si no hallamos fugas críticas.
            </span>
          </div>

          {/* Tripartite Audit Highlight (Who performs this audit) */}
          <div className="bg-brand-brown/20 border border-brand-taupe/10 rounded-xl p-4 flex gap-4 items-center">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-brand-taupe border border-brand-obsidian flex items-center justify-center text-[10px] font-serif text-brand-obsidian font-bold">
                JH
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-400 border border-brand-obsidian flex items-center justify-center text-[10px] font-serif text-brand-obsidian font-bold">
                GU
              </div>
              <div className="w-8 h-8 rounded-full bg-brand-champagne border border-brand-obsidian flex items-center justify-center text-[10px] font-serif text-brand-obsidian font-semibold">
                CEO
              </div>
            </div>
            <div className="text-left font-sans">
              <span className="text-[10px] tracking-wider text-brand-taupe uppercase font-semibold block">
                Sesión Tripartita en Vivo (1 Hora)
              </span>
              <span className="text-[11px] text-brand-champagne/80 font-light">
                Contigo (CEO) + <strong>Jheisry</strong> (Marca) + <strong>Gustavo</strong> (Tecnología)
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
