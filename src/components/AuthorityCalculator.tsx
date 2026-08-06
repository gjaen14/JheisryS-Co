import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
} from "motion/react";
import {
  ShieldAlert,
  TrendingDown,
  Coins,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  PenTool,
  Cpu,
  Radar,
  Lock,
  Info,
  ChevronDown,
  AlertCircle,
  AlertTriangle,
  AlertOctagon,
} from "lucide-react";
import { AuditMetrics } from "../types";

interface AuthorityCalculatorProps {
  onStartBooking: (score: number) => void;
}

function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const motionValue = useMotionValue(value);

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration: 0.6,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [value, motionValue]);

  const display = useTransform(
    motionValue,
    (current) => `${prefix}${Math.round(current).toLocaleString()}${suffix}`,
  );

  return <motion.span>{display}</motion.span>;
}

export default function AuthorityCalculator({
  onStartBooking,
}: AuthorityCalculatorProps) {
  // Advanced metrics configuration representing the corporate pain points
  const [metrics, setMetrics] = useState<AuditMetrics>({
    brandIdentity: 4,
    techArchitecture: 3,
    digitalPresence: 4,
    pricingConfidence: 5,
  });

  const [hoveredTip, setHoveredTip] = useState<string | null>(null);
  const [annualRevenueInput, setAnnualRevenueInput] = useState<string>("");
  const [showResults, setShowResults] = useState(false);

  const annualRevenue = parseInt(annualRevenueInput.replace(/\D/g, "")) || 0;

  const handleRevenueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "");
    setAnnualRevenueInput(val);
  };

  const handleSliderChange = (key: keyof AuditMetrics, val: number) => {
    setMetrics((prev) => ({ ...prev, [key]: val }));
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
      metrics.pricingConfidence * 0.25) *
      10,
  );

  // Estimating annual loss (Desconfianza Tax)
  // Loss is dynamically calculated based on the annual revenue.
  // Maximum penalty is modeled as 40% of their revenue left on the table due to authority leaks.
  const estimatedRevenueLoss = Math.round(
    annualRevenue * ((100 - collectiveScore) / 100) * 0.4,
  );

  const lossPercentage = 100 - collectiveScore;

  const getAlertConfig = () => {
    if (lossPercentage < 20) {
      return {
        icon: AlertCircle,
        color: "#FFBF00",
        text: "Atención: Fuga incipiente",
        animation: "animate-pulse",
      };
    } else if (lossPercentage < 50) {
      return {
        icon: AlertTriangle,
        color: "#E25822",
        text: "Alerta: Pérdida de autoridad",
        animation: "animate-pulse",
      };
    } else {
      return {
        icon: AlertOctagon,
        color: "#990000",
        text: "Estado Crítico: No viable para High-Ticket",
        animation: "animate-[pulse_1s_ease-in-out_infinite]",
      };
    }
  };

  const alertConfig = getAlertConfig();

  // Dynamic diagnostic text based on the weakest link
  const getBespokeDiagnostic = () => {
    const scores = [
      {
        name: "Identidad Visual",
        val: metrics.brandIdentity,
        category: "brand",
      },
      {
        name: "Arquitectura Técnica",
        val: metrics.techArchitecture,
        category: "tech",
      },
      {
        name: "Presencia Digital",
        val: metrics.digitalPresence,
        category: "presence",
      },
      {
        name: "Firmeza de Precios",
        val: metrics.pricingConfidence,
        category: "pricing",
      },
    ];

    // Sort to find the lowest
    scores.sort((a, b) => a.val - b.val);
    const weakest = scores[0];

    if (weakest.val >= 8) {
      return {
        title: "Estructura Altamente Competente",
        desc: "Tu ecosistema tiene bases sólidas. Estás a un paso de consolidarte como una boutique de lujo intocable. El Diagnóstico pulirá detalles arquitectónicos invisibles pero letales.",
        pill: "Estándar Boutique",
      };
    }

    switch (weakest.category) {
      case "brand":
        return {
          title: "Incoherencia Visual (Falta de Alta Costura)",
          desc: "Tu expertise es premium pero tu carta de presentación parece genérica o desactualizada. Los clientes corporativos huelen la falta de coherencia estética y asumen que tu servicio interno será igual de descuidado, regateando tus tarifas.",
          pill: "Fuga por Estética",
        };
      case "tech":
        return {
          title: "Fragilidad Técnica (Ruido en la Confianza)",
          desc: "Un ecosistema digital lento, con formularios rígidos o plantillas genéricas destruye el valor de tu oferta tecnológica. A nivel directivo, si tu propia casa digital flaquea, desconfían de que vayas a solucionar sus problemas complejos.",
          pill: "Ruido Técnico",
        };
      case "presence":
        return {
          title: "Invisibilidad Selectiva",
          desc: "Haces un excelente trabajo que nadie puede encontrar en línea de forma independiente. Si un tomador de decisión busca pruebas de tu autoridad digital y no encuentra un relato sofisticado, prefiere irse con competidores más ruidosos pero peor calificados.",
          pill: "Cero Autoridad Pasiva",
        };
      case "pricing":
        return {
          title: "El Impuesto Invisible de las Concesiones",
          desc: "Estás defendiendo tu tarifa en lugar de filtrar por postura. Haces descuentos rápidos por miedo a perder la cuenta corporativa. Operas como socio especializado pero cobras tarifas de mano de obra commoditizada.",
          pill: "Falta de Postura Premium",
        };
      default:
        return {
          title: "Ecosistema Desequilibrado",
          desc: "Trabajas a nivel Senior, pero tu fachada digital luce Junior. Cobras hasta un 50% menos del verdadero valor de mercado por el cansancio de perseguir prospectos en lugar de atraer clientes de élite.",
          pill: "Desbalance de Valor",
        };
    }
  };

  const diagnostic = getBespokeDiagnostic();

  // Color mapping based on score level
  const getScoreColorClass = (score: number) => {
    if (score < 40) return "text-red-400";
    if (score < 75) return "text-brand-taupe";
    return "text-green-400";
  };

  return (
    <div className="relative container-boxed">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* COLUMNA IZQUIERDA: Bloque de Texto */}
        <div className="space-y-6 text-left lg:pr-12">
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#4c3628] font-semibold block">
            CALCULADORA DE LUCRO CESANTE
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-white tracking-tight leading-tight">
            Calcula tu <span className="italic text-[#4c3628]">impuesto</span>{" "}
            de la <span className="font-bold text-[#f2f1eb]">desconfianza</span>
            .
          </h2>
          <p className="font-sans text-base text-brand-champagne/80 font-light leading-relaxed max-w-xl">
            Identifica cuánto capital estás dejando sobre la mesa debido a la
            brecha entre tu capacidad técnica y tu presencia digital.
          </p>
        </div>

        {/* COLUMNA DERECHA: Contenedor de la Calculadora */}
        <div className="bg-[#130f08] border-2 border-[#4c3628] shadow-[0_30px_60px_rgba(0,0,0,0.5)] rounded-2xl p-10 md:p-14 relative overflow-hidden min-h-[480px] flex flex-col justify-between group/calc">
          {/* Subtle Grain Texture for Depth */}
          <div
            className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage:
                "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')",
            }}
          ></div>

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
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-taupe font-mono font-bold">
                        $
                      </span>
                      <input
                        type="text"
                        value={
                          annualRevenueInput
                            ? Number(
                                annualRevenueInput.replace(/\D/g, ""),
                              ).toLocaleString()
                            : ""
                        }
                        onChange={handleRevenueChange}
                        className="w-full bg-brand-obsidian border-t-0 border-x-0 border-b border-[rgba(200,182,166,0.4)] py-2.5 pl-8 pr-12 text-brand-white font-mono text-sm focus:outline-none focus:border-[rgba(200,182,166,0.4)] focus:border-b-[#c8b6a6] focus:ring-0 transition-colors cursor-text rounded-none placeholder:font-sans placeholder:font-light placeholder:text-brand-champagne/40 placeholder:text-xs placeholder:italic"
                        placeholder="(Ej. 200,000)"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-champagne/40 text-xs font-sans tracking-wider">
                        USD
                      </span>
                    </div>
                  </div>

                  {/* Selectores Grid (2 Columns on tablet/desktop) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    {/* Metric 1 */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-xs relative">
                        <label className="font-sans font-medium text-brand-white flex items-center gap-2">
                          <PenTool
                            className="w-3.5 h-3.5 text-white/50"
                            strokeWidth={1.5}
                          />
                          Identidad Visual
                          <div className="relative group/tooltip flex items-center">
                            <Info
                              className="w-3.5 h-3.5 text-brand-taupe/40 cursor-help hover:text-brand-taupe transition-colors"
                              strokeWidth={1.5}
                            />
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 bg-[#1a1511] border border-brand-taupe/20 text-[#f2f1eb]/80 text-[10px] p-3 rounded-lg opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all z-20 shadow-2xl pointer-events-none text-left leading-relaxed">
                              Una identidad visual desalineada hace que tus
                              clientes duden de tu capacidad antes incluso de
                              leer tu propuesta.
                            </div>
                          </div>
                        </label>
                        <span className="font-mono text-brand-taupe/80 font-light text-sm">
                          {metrics.brandIdentity}/10
                        </span>
                      </div>
                      <div className="pt-1">
                        <input
                          type="range"
                          min="1"
                          max="10"
                          step="1"
                          value={metrics.brandIdentity}
                          onChange={(e) =>
                            handleSliderChange(
                              "brandIdentity",
                              parseInt(e.target.value),
                            )
                          }
                          className="w-[85%] max-w-[200px] h-[1px] bg-brand-taupe/20 rounded-lg appearance-none cursor-pointer outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:h-2.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#c8b6a6] [&::-webkit-slider-thumb]:shadow-[0_0_8px_rgba(200,182,166,0.6)] [&::-webkit-slider-thumb]:transition-transform hover:[&::-webkit-slider-thumb]:scale-125 [&::-moz-range-thumb]:w-2.5 [&::-moz-range-thumb]:h-2.5 [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#c8b6a6]"
                        />
                      </div>
                    </div>

                    {/* Metric 2 */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-xs relative">
                        <label className="font-sans font-medium text-brand-white flex items-center gap-2">
                          <Cpu
                            className="w-3.5 h-3.5 text-white/50"
                            strokeWidth={1.5}
                          />
                          Arquitectura Técnica
                          <div className="relative group/tooltip flex items-center">
                            <Info
                              className="w-3.5 h-3.5 text-brand-taupe/40 cursor-help hover:text-brand-taupe transition-colors"
                              strokeWidth={1.5}
                            />
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 bg-[#1a1511] border border-brand-taupe/20 text-[#f2f1eb]/80 text-[10px] p-3 rounded-lg opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all z-20 shadow-2xl pointer-events-none text-left leading-relaxed">
                              Una web lenta o genérica comunica que tu empresa
                              no invierte en calidad, lo que justifica que tus
                              clientes busquen mejores opciones.
                            </div>
                          </div>
                        </label>
                        <span className="font-mono text-brand-taupe/80 font-light text-sm">
                          {metrics.techArchitecture}/10
                        </span>
                      </div>
                      <div className="pt-1">
                        <input
                          type="range"
                          min="1"
                          max="10"
                          step="1"
                          value={metrics.techArchitecture}
                          onChange={(e) =>
                            handleSliderChange(
                              "techArchitecture",
                              parseInt(e.target.value),
                            )
                          }
                          className="w-[85%] max-w-[200px] h-[1px] bg-brand-taupe/20 rounded-lg appearance-none cursor-pointer outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:h-2.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#c8b6a6] [&::-webkit-slider-thumb]:shadow-[0_0_8px_rgba(200,182,166,0.6)] [&::-webkit-slider-thumb]:transition-transform hover:[&::-webkit-slider-thumb]:scale-125 [&::-moz-range-thumb]:w-2.5 [&::-moz-range-thumb]:h-2.5 [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#c8b6a6]"
                        />
                      </div>
                    </div>

                    {/* Metric 3 */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-xs relative">
                        <label className="font-sans font-medium text-brand-white flex items-center gap-2">
                          <Radar
                            className="w-3.5 h-3.5 text-white/50"
                            strokeWidth={1.5}
                          />
                          Presencia Activa
                          <div className="relative group/tooltip flex items-center">
                            <Info
                              className="w-3.5 h-3.5 text-brand-taupe/40 cursor-help hover:text-brand-taupe transition-colors"
                              strokeWidth={1.5}
                            />
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 bg-[#1a1511] border border-brand-taupe/20 text-[#f2f1eb]/80 text-[10px] p-3 rounded-lg opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all z-20 shadow-2xl pointer-events-none text-left leading-relaxed">
                              Cuando un cliente potencial te busca y no
                              encuentra nada sólido, pierdes la oportunidad de
                              cerrar el trato antes de la primera reunión.
                            </div>
                          </div>
                        </label>
                        <span className="font-mono text-brand-taupe/80 font-light text-sm">
                          {metrics.digitalPresence}/10
                        </span>
                      </div>
                      <div className="pt-1">
                        <input
                          type="range"
                          min="1"
                          max="10"
                          step="1"
                          value={metrics.digitalPresence}
                          onChange={(e) =>
                            handleSliderChange(
                              "digitalPresence",
                              parseInt(e.target.value),
                            )
                          }
                          className="w-[85%] max-w-[200px] h-[1px] bg-brand-taupe/20 rounded-lg appearance-none cursor-pointer outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:h-2.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#c8b6a6] [&::-webkit-slider-thumb]:shadow-[0_0_8px_rgba(200,182,166,0.6)] [&::-webkit-slider-thumb]:transition-transform hover:[&::-webkit-slider-thumb]:scale-125 [&::-moz-range-thumb]:w-2.5 [&::-moz-range-thumb]:h-2.5 [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#c8b6a6]"
                        />
                      </div>
                    </div>

                    {/* Metric 4 */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-xs relative">
                        <label className="font-sans font-medium text-brand-white flex items-center gap-2">
                          <Lock
                            className="w-3.5 h-3.5 text-white/50"
                            strokeWidth={1.5}
                          />
                          Firmeza de Precios
                          <div className="relative group/tooltip flex items-center">
                            <Info
                              className="w-3.5 h-3.5 text-brand-taupe/40 cursor-help hover:text-brand-taupe transition-colors"
                              strokeWidth={1.5}
                            />
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 bg-[#1a1511] border border-brand-taupe/20 text-[#f2f1eb]/80 text-[10px] p-3 rounded-lg opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all z-20 shadow-2xl pointer-events-none text-left leading-relaxed">
                              Bajar tus precios para cerrar una venta rápida le
                              confirma a tus clientes que tu servicio no vale lo
                              que pides.
                            </div>
                          </div>
                        </label>
                        <span className="font-mono text-brand-taupe/80 font-light text-sm">
                          {metrics.pricingConfidence}/10
                        </span>
                      </div>
                      <div className="pt-1">
                        <input
                          type="range"
                          min="1"
                          max="10"
                          step="1"
                          value={metrics.pricingConfidence}
                          onChange={(e) =>
                            handleSliderChange(
                              "pricingConfidence",
                              parseInt(e.target.value),
                            )
                          }
                          className="w-[85%] max-w-[200px] h-[1px] bg-brand-taupe/20 rounded-lg appearance-none cursor-pointer outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:h-2.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#c8b6a6] [&::-webkit-slider-thumb]:shadow-[0_0_8px_rgba(200,182,166,0.6)] [&::-webkit-slider-thumb]:transition-transform hover:[&::-webkit-slider-thumb]:scale-125 [&::-moz-range-thumb]:w-2.5 [&::-moz-range-thumb]:h-2.5 [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#c8b6a6]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Calculate button & Live Counter */}
                <div className="pt-10 mt-8 border-t border-[#4c3628]/20 space-y-6 relative z-10">
                  <div className="flex justify-between items-end px-1">
                    <div className="flex flex-col items-start gap-2">
                      <div className="flex items-center gap-2 relative group/tooltip w-fit">
                        <span className="font-sans text-[10px] sm:text-xs uppercase tracking-widest text-brand-champagne/50 font-medium block">
                          Impuesto de Desconfianza
                        </span>
                        <Info className="w-3.5 h-3.5 text-brand-champagne/30 cursor-help hover:text-brand-champagne transition-colors" />
                        
                        {/* Tooltip flotante */}
                        <div className="absolute bottom-full left-0 mb-2 w-[280px] p-4 bg-[#130f08] border border-brand-taupe/20 rounded-lg shadow-2xl opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-300 z-50">
                          <p className="font-sans text-[10px] text-brand-champagne/80 leading-[1.6] font-light normal-case tracking-normal">
                            Este porcentaje es un cálculo preliminar basado en tu auto-evaluación. Los dueños de negocio suelen subestimar sus puntos de fuga. Para auditar el costo real de tu brecha digital, requieres una evaluación técnica con nuestros expertos.
                          </p>
                        </div>
                      </div>

                      {/* Micro-componente Condicional */}
                      <div 
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#130f08] border border-[#4c3628]/30 shadow-inner w-fit"
                        style={{ color: alertConfig.color }}
                      >
                        <alertConfig.icon className={`w-3.5 h-3.5 ${alertConfig.animation}`} />
                        <span className="font-sans text-[8.5px] font-bold tracking-wider uppercase">
                          {alertConfig.text}
                        </span>
                      </div>
                    </div>
                    <span className="font-serif text-2xl md:text-[1.75rem] font-bold text-brand-sand block leading-none tracking-tight">
                      <AnimatedCounter
                        value={estimatedRevenueLoss}
                        prefix="$"
                        suffix=""
                      />
                    </span>
                  </div>
                  <button
                    onClick={() => setShowResults(true)}
                    className="w-full bg-brand-sand hover:brightness-110 hover:shadow-[0_0_20px_rgba(200,182,166,0.3)] active:scale-[0.98] text-brand-obsidian font-sans font-bold md:font-semibold tracking-widest text-xs uppercase py-5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-xl cursor-pointer"
                  >
                    <span>VER MI DIAGNÓSTICO</span>
                    <ArrowRight className="w-5 h-5" />
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
                        <AnimatedCounter value={collectiveScore} suffix="" />
                        <span className="text-lg font-light text-[#f2f1eb]/40">
                          %
                        </span>
                      </span>
                    </div>
                  </div>

                  {/* Loss Metric */}
                  <div className="bg-[#1a1511] border border-brand-taupe/20 rounded-xl p-6 mb-4 flex items-start gap-4 shadow-inner">
                    <div className="p-2.5 bg-brand-obsidian border border-brand-taupe/30 rounded-lg text-[#c8b6a6] mt-1 flex-shrink-0">
                      <TrendingDown className="w-5 h-5 animate-pulse" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 relative group/tooltip w-fit">
                        <span className="font-sans text-[11px] tracking-wider uppercase text-brand-champagne/60 font-medium block">
                          Impuesto de Desconfianza Estimado
                        </span>
                        <Info className="w-3.5 h-3.5 text-brand-champagne/30 cursor-help hover:text-brand-champagne transition-colors" />

                        {/* Tooltip flotante */}
                        <div className="absolute bottom-full left-0 mb-2 w-[280px] p-4 bg-[#130f08] border border-brand-taupe/20 rounded-lg shadow-2xl opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-300 z-50">
                          <p className="font-sans text-[10px] text-brand-champagne/80 leading-[1.6] font-light">
                            Este porcentaje es un cálculo preliminar basado en
                            tu auto-evaluación. Los dueños de negocio suelen
                            subestimar sus puntos de fuga. Para auditar el costo
                            real de tu brecha digital, requieres una evaluación
                            técnica con nuestros expertos.
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 my-2">
                        <span className="font-serif text-2xl font-bold text-[#f2f1eb] flex items-baseline gap-1.5">
                          <AnimatedCounter
                            value={estimatedRevenueLoss}
                            prefix="$"
                            suffix=""
                          />
                          <span className="text-xs font-sans tracking-wide font-normal text-brand-champagne/70">
                            USD / Año
                          </span>
                        </span>

                        {/* Micro-componente Condicional */}
                        <div
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#130f08] border border-[#4c3628]/30 shadow-inner"
                          style={{ color: alertConfig.color }}
                        >
                          <alertConfig.icon
                            className={`w-3.5 h-3.5 ${alertConfig.animation}`}
                          />
                          <span className="font-sans text-[9px] font-bold tracking-wide uppercase">
                            {alertConfig.text}
                          </span>
                        </div>
                      </div>
                      <p className="font-sans text-[11px] text-brand-champagne/70 font-light leading-relaxed">
                        Tu brecha de autoridad actual te cuesta $
                        {Math.round(estimatedRevenueLoss).toLocaleString()} al
                        año en contratos perdidos.
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
                        Contigo (CEO) + <strong>Jheisry</strong> +{" "}
                        <strong>IT</strong>
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onStartBooking(collectiveScore)}
                    className="w-full bg-brand-sand hover:brightness-110 hover:shadow-[0_0_20px_rgba(200,182,166,0.3)] active:scale-[0.98] text-brand-obsidian font-sans font-bold md:font-semibold tracking-wider text-xs uppercase py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg cursor-pointer relative z-10"
                  >
                    <span>AGENDAR DIAGNÓSTICO DE AUTORIDAD</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <div
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 300,
                      fontStyle: "italic",
                      fontSize: "13px",
                      color: "#c8b6a6",
                      marginTop: "8px",
                      textAlign: "center",
                    }}
                  >
                    Inversión del diagnóstico: $265 USD. Reembolsable si no
                    detectamos fugas críticas.
                  </div>

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
