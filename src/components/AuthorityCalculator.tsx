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
  const [showResults, setShowResults] = useState(false);

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
    <div className="relative w-full max-w-6xl mx-auto px-6">
      {/* Decorative Gold Accent Borders */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[1px] bg-gradient-to-r from-transparent via-brand-taupe/30 to-transparent" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* COLUMNA IZQUIERDA: Bloque de Texto */}
        <div className="space-y-6 text-left">
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#4c3628] font-semibold block">
            CALCULADORA DE LUCRO CESANTE
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-white tracking-tight leading-tight">
            Calcula tu <span className="italic text-[#4c3628]">impuesto</span> de la <span className="font-bold text-[#f2f1eb]">desconfianza</span>.
          </h2>
          <p className="font-sans text-base text-brand-champagne/80 font-light leading-relaxed max-w-xl">
            Identifica cuánto capital estás dejando sobre la mesa debido a la brecha entre tu capacidad técnica y tu presencia digital.
          </p>
        </div>

        {/* COLUMNA DERECHA: Contenedor de la Calculadora */}
        <div className="bg-[#130f08] border-2 border-[#4c3628] shadow-[0_30px_60px_rgba(0,0,0,0.5)] rounded-2xl p-6 md:p-8 relative overflow-hidden min-h-[480px] flex flex-col justify-between">
          {/* Visual shine */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-taupe/5 rounded-full blur-2xl pointer-events-none" />

          <AnimatePresence mode="wait">
            {!showResults ? (
              <motion.div
                key="inputs"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 flex flex-col justify-between h-full"
              >
                <div className="space-y-6">
                  <h3 className="font-serif text-xl text-brand-white tracking-wide border-b border-brand-taupe/10 pb-4">
                    Análisis de Fugas de Autoridad
                  </h3>

                  {/* Revenue Input */}
                  <div className="space-y-2 bg-brand-obsidian/40 p-4 rounded-xl border border-brand-taupe/10">
                    <label className="font-sans font-medium text-brand-white text-xs block">
                      Facturación Anual Aproximada
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-taupe font-mono font-bold">$</span>
                      <input
                        type="text"
                        value={annualRevenueInput ? Number(annualRevenueInput.replace(/\D/g, '')).toLocaleString() : ""}
                        onChange={handleRevenueChange}
                        className="w-full bg-brand-obsidian border border-brand-taupe/20 rounded-lg py-2.5 pl-8 pr-12 text-brand-white font-mono text-sm focus:outline-none focus:border-brand-taupe/50 transition-colors"
                        placeholder="150,000"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-champagne/40 text-xs font-sans tracking-wider">USD</span>
                    </div>
                  </div>

                  {/* Sliders Grid (2 Columns on tablet/desktop) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                    {/* Metric 1 */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <label className="font-sans font-medium text-brand-white flex items-center gap-1.5">
                          Identidad Visual
                          <span
                            className="cursor-help text-brand-taupe/70 hover:text-brand-taupe transition-colors"
                            onMouseEnter={() => setHoveredTip('brand')}
                            onMouseLeave={() => setHoveredTip(null)}
                          >
                            <HelpCircle className="w-3.5 h-3.5" />
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
                        className="w-full h-[5px] bg-brand-taupe rounded-lg appearance-none cursor-pointer accent-brand-sand focus:outline-none"
                      />
                      <div className="flex justify-between text-[8px] font-sans text-brand-champagne/40 tracking-wider">
                         <span>Genérica (1)</span>
                         <span>Boutique (10)</span>
                      </div>
                    </div>

                    {/* Metric 2 */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <label className="font-sans font-medium text-brand-white flex items-center gap-1.5">
                          Arquitectura Técnica
                          <span
                            className="cursor-help text-brand-taupe/70 hover:text-brand-taupe transition-colors"
                            onMouseEnter={() => setHoveredTip('tech')}
                            onMouseLeave={() => setHoveredTip(null)}
                          >
                            <HelpCircle className="w-3.5 h-3.5" />
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
                        className="w-full h-[5px] bg-brand-taupe rounded-lg appearance-none cursor-pointer accent-brand-sand focus:outline-none"
                      />
                      <div className="flex justify-between text-[8px] font-sans text-brand-champagne/40 tracking-wider">
                        <span>Lento (1)</span>
                        <span>Custom (10)</span>
                      </div>
                    </div>

                    {/* Metric 3 */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <label className="font-sans font-medium text-brand-white flex items-center gap-1.5">
                          Presencia Activa
                          <span
                            className="cursor-help text-brand-taupe/70 hover:text-brand-taupe transition-colors"
                            onMouseEnter={() => setHoveredTip('presence')}
                            onMouseLeave={() => setHoveredTip(null)}
                          >
                            <HelpCircle className="w-3.5 h-3.5" />
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
                        className="w-full h-[5px] bg-brand-taupe rounded-lg appearance-none cursor-pointer accent-brand-sand focus:outline-none"
                      />
                      <div className="flex justify-between text-[8px] font-sans text-brand-champagne/40 tracking-wider">
                        <span>Anónimo (1)</span>
                        <span>Líder (10)</span>
                      </div>
                    </div>

                    {/* Metric 4 */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <label className="font-sans font-medium text-brand-white flex items-center gap-1.5">
                          Firmeza de Precios
                          <span
                            className="cursor-help text-brand-taupe/70 hover:text-brand-taupe transition-colors"
                            onMouseEnter={() => setHoveredTip('pricing')}
                            onMouseLeave={() => setHoveredTip(null)}
                          >
                            <HelpCircle className="w-3.5 h-3.5" />
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
                        className="w-full h-[5px] bg-brand-taupe rounded-lg appearance-none cursor-pointer accent-brand-sand focus:outline-none"
                      />
                      <div className="flex justify-between text-[8px] font-sans text-brand-champagne/40 tracking-wider">
                        <span>Descuentos (1)</span>
                        <span>Postura (10)</span>
                      </div>
                    </div>
                  </div>

                  {/* Dynamic Explainers Banner */}
                  <div className="min-h-[50px] bg-[#130f08] border border-brand-taupe/10 rounded-xl p-3 text-xs font-sans font-light italic text-[#f2f1eb] leading-relaxed">
                    <AnimatePresence mode="wait">
                      {hoveredTip === 'brand' && (
                        <motion.p key="tip-brand" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                          <strong>Aviso de Marca:</strong> La simetría de layouts y la pureza tipográfica definen el subconsciente de las transacciones corporativas premium.
                        </motion.p>
                      )}
                      {hoveredTip === 'tech' && (
                        <motion.p key="tip-tech" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                          <strong>Aviso Técnico:</strong> El código lento o la dependencia de plantillas baratas añade latencias que destruyen la reputación de tu firma.
                        </motion.p>
                      )}
                      {hoveredTip === 'presence' && (
                        <motion.p key="tip-presence" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                          <strong>Aviso de Presencia:</strong> Googlear tu nombre o firma debe transmitir misterio e influencia blindada, no perfiles abandonados.
                        </motion.p>
                      )}
                      {hoveredTip === 'pricing' && (
                        <motion.p key="tip-pricing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                          <strong>Aviso Tarifario:</strong> Si ofreces descuentos rápidos del 20% para asegurar el contrato, el cliente asume que tus tarifas están infladas.
                        </motion.p>
                      )}
                      {!hoveredTip && (
                        <motion.p key="tip-default" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                          Pasa el cursor sobre los indicadores para revelar insights estratégicos de posicionamiento.
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Calculate button */}
                <div className="pt-4 border-t border-brand-taupe/10">
                  <button
                    onClick={() => setShowResults(true)}
                    className="w-full bg-brand-sand hover:bg-brand-sand/90 active:scale-[0.98] text-brand-obsidian font-sans font-bold md:font-semibold tracking-wider text-xs uppercase py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-brand-sand/10 cursor-pointer"
                  >
                    <span>Ver mi diagnóstico</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 flex flex-col justify-between h-full"
              >
                <div>
                  {/* Cápsula de Contraste para el Porcentaje y Pill */}
                  <div className="bg-[#130f08] border border-[#4c3628] rounded-xl p-4 flex justify-between items-center mb-4">
                     <div>
                       <span className="font-sans text-[10px] tracking-widest uppercase text-[#f2f1eb]/70 block mb-1">
                         Nivel de Inmunidad Digital
                       </span>
                       <span className="font-sans text-xs bg-[#4c3628]/20 border border-[#4c3628] text-[#f2f1eb] px-2.5 py-0.5 rounded-full font-medium inline-block">
                         {diagnostic.pill}
                       </span>
                     </div>
                     <div className="text-right">
                       <span className="font-serif text-4xl font-bold tracking-tight text-[#f2f1eb]">
                         {collectiveScore}<span className="text-lg font-light text-[#f2f1eb]/40">%</span>
                       </span>
                     </div>
                  </div>

                  {/* Loss Metric */}
                  <div className="bg-brand-obsidian/70 border border-red-950/40 rounded-xl p-5 mb-4 flex items-start gap-4">
                    <div className="p-2 bg-red-950/30 border border-red-900/40 rounded-lg text-red-400 mt-1 flex-shrink-0">
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
                  <div className="space-y-1 mb-4">
                    <span className="font-sans text-[10px] tracking-wider uppercase text-brand-taupe font-bold block">
                      Diagnóstico Forense:
                    </span>
                    <h4 className="font-serif text-base text-brand-white tracking-wide">
                      {diagnostic.title}
                    </h4>
                    <p className="font-sans text-xs text-brand-champagne/85 font-light leading-relaxed">
                      {diagnostic.desc}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-brand-taupe/10">
                  {/* Tripartite Audit Highlight */}
                  <div className="bg-brand-obsidian/50 border border-brand-taupe/10 rounded-xl p-3 flex gap-3 items-center">
                    <div className="flex -space-x-1.5 flex-shrink-0">
                      <div className="w-7 h-7 rounded-full bg-brand-taupe border border-brand-obsidian flex items-center justify-center text-[8px] font-serif text-brand-obsidian font-bold">
                        JH
                      </div>
                      <div className="w-7 h-7 rounded-full bg-[#8c7a6b] border border-brand-obsidian flex items-center justify-center text-[8px] font-serif text-[#f2f1eb] font-bold">
                        IT
                      </div>
                      <div className="w-7 h-7 rounded-full bg-brand-champagne border border-brand-obsidian flex items-center justify-center text-[8px] font-serif text-brand-obsidian font-semibold">
                        CEO
                      </div>
                    </div>
                    <div className="text-left font-sans">
                      <span className="text-[9px] tracking-wider text-brand-taupe uppercase font-semibold block">
                        Sesión Tripartita en Vivo (1 Hora)
                      </span>
                      <span className="text-[10px] text-brand-champagne/70 font-light block leading-tight">
                        Contigo (CEO) + <strong>Jheisry</strong> + <strong>IT</strong>
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onStartBooking(collectiveScore)}
                    className="w-full bg-brand-sand hover:bg-brand-sand/90 active:scale-[0.98] text-brand-obsidian font-sans font-bold md:font-semibold tracking-wider text-xs uppercase py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-brand-sand/10 cursor-pointer"
                  >
                    <span>Agendar Diagnóstico en Vivo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="text-center">
                    <button
                      onClick={() => setShowResults(false)}
                      className="font-sans text-[11px] text-brand-champagne/60 hover:text-brand-taupe underline transition-colors cursor-pointer"
                    >
                      Ajustar variables / Recalcular
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
