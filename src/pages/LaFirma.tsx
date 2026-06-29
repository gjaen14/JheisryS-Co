import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// 8 Geometric vector SVG logos representing B2B partners
const PARTNERS = [
  { src: '/images/CARRUSEL/1.png', name: 'Coca-Cola FEMSA', featured: true },
  { src: '/images/CARRUSEL/2.png', name: 'Inteligo Bank', featured: true },
  { src: '/images/CARRUSEL/3.png', name: 'Internacional de Seguros', featured: true },
  { src: '/images/CARRUSEL/4.png', name: 'Partner 4', featured: false },
  { src: '/images/CARRUSEL/5.png', name: 'Partner 5', featured: false },
  { src: '/images/CARRUSEL/6.png', name: 'Partner 6', featured: false },
  { src: '/images/CARRUSEL/7.png', name: 'Partner 7', featured: false },
  { src: '/images/CARRUSEL/10.png', name: 'Partner 10', featured: false },
  { src: '/images/CARRUSEL/11.png', name: 'Partner 11', featured: false },
  { src: '/images/CARRUSEL/12.png', name: 'Partner 12', featured: false },
  { src: '/images/CARRUSEL/13.png', name: 'Partner 13', featured: false },
  { src: '/images/CARRUSEL/14.png', name: 'Partner 14', featured: false },
  { src: '/images/CARRUSEL/15.png', name: 'Partner 15', featured: false }
];

const CARDS = [
  {
    title: 'Tracción Validada',
    desc: 'Negocios que ya facturan y tienen un producto validado, pero cuyo ecosistema digital actual es un cuello de botella.'
  },
  {
    title: 'Mentalidad de Inversión',
    desc: 'Directivos que no buscan "arreglitos estéticos", sino la construcción de un activo financiero a largo plazo.'
  },
  {
    title: 'Delegación Absoluta',
    desc: 'Líderes dispuestos a soltar el control táctico para que nuestra firma reestructure su presencia bajo estándares de élite.'
  }
];

export default function LaFirma() {
  const [activeCEO, setActiveCEO] = useState<'jheisry' | 'gustavo'>('jheisry');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredCEO, setHoveredCEO] = useState<'jheisry' | 'gustavo' | null>(null);

  const handleScrollToDupla = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('la-dupla');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#130f08] text-brand-white overflow-hidden">
      
      {/* CAPA DE RUIDO VISUAL (Film Grain - 2% Opacity Overlay) */}
      <div className="fixed inset-0 z-[50] pointer-events-none opacity-[0.02] film-grain mix-blend-overlay" />



      {/* CONTENIDO PRINCIPAL en z-[10] para colocarlo por encima del Glow de fondo */}
      <div className="relative z-[10] w-full flex flex-col">

        {/* SECCIÓN 1: HERO SECTION (100vh) */}
        <section className="relative overflow-hidden flex flex-col justify-between min-h-screen pt-24 md:pt-32 pb-8">
          
          {/* FONDO DE ATMÓSFERA (Fluid Mesh Gradient - 3 Puntos de Luz de baja opacidad) */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Punto 1: Carbón / Gris Oscuro arriba a la izquierda */}
            <div 
              className="absolute w-[800px] h-[800px] rounded-full top-[-15%] left-[-15%] pointer-events-none opacity-[0.4] blur-[80px]"
              style={{ background: 'radial-gradient(circle at center, rgba(60, 56, 52, 0.25) 0%, rgba(19, 15, 8, 0) 70%)' }}
            />
            {/* Punto 2: Carbón intermedio abajo a la derecha */}
            <div 
              className="absolute w-[900px] h-[900px] rounded-full bottom-[-20%] right-[-15%] pointer-events-none opacity-[0.35] blur-[90px]"
              style={{ background: 'radial-gradient(circle at center, rgba(48, 45, 42, 0.22) 0%, rgba(19, 15, 8, 0) 70%)' }}
            />
            {/* Punto 3: Gris muy oscuro en el centro */}
            <div 
              className="absolute w-[700px] h-[700px] rounded-full top-[20%] left-[25%] pointer-events-none opacity-[0.45] blur-[75px]"
              style={{ background: 'radial-gradient(circle at center, rgba(38, 36, 34, 0.28) 0%, rgba(19, 15, 8, 0) 70%)' }}
            />
          </div>

          {/* Contenedor de la Imagen (Alineado a la derecha, 50% opacidad, sin recortar la imagen) */}
          <div className="absolute inset-0 z-0 flex justify-end pointer-events-none">
            <div 
              className="w-full md:w-[60%] h-full bg-contain bg-right md:bg-[position:right_center] bg-no-repeat opacity-50 relative"
              style={{ backgroundImage: "url('/images/CEO.png')" }}
            >
              {/* Degradado lateral para fundir el borde izquierdo de la foto con el fondo sólido */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#130f08] via-[#130f08]/70 to-transparent" />
              {/* Degradado vertical para suavizar cortes arriba y abajo si la imagen no ocupa todo el alto */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#130f08] via-transparent to-[#130f08]" />
            </div>
          </div>
          
          {/* Brillo sutil detrás del texto para resaltar lectura */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c8b6a6]/5 rounded-full blur-[100px] z-0 pointer-events-none" />

          {/* Spacer for top alignment */}
          <div className="flex-none" />

          {/* Contenido principal centrado verticalmente */}
          <div className="relative z-10 px-6 md:px-16 container mx-auto max-w-7xl w-full">
            <div className="max-w-2xl space-y-8 text-center md:text-left">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
                className="font-serif text-3xl md:text-5xl text-brand-white tracking-tight leading-tight"
              >
                Estrategia comercial. Blindaje técnico. Cero fricción.
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
                className="font-sans text-sm md:text-base text-[#f2f1eb]/80 font-light leading-relaxed mx-auto md:mx-0 max-w-xl"
              >
                Diseño ecosistemas de autoridad que no solo se ven profesionales, sino que convierten tu tráfico en capital financiero.
              </motion.p>
              
              <div className="pt-6">
                <a 
                  href="#la-dupla" 
                  onClick={handleScrollToDupla}
                  className="group relative w-full md:w-auto active:scale-[0.98] text-[#f2f1eb] font-sans font-bold md:font-semibold tracking-wider text-base md:text-xs uppercase py-5 md:py-4 px-10 rounded-xl transition-all duration-300 flex items-center justify-center gap-2.5 shadow-[0_0_20px_rgba(200,182,166,0.15)] hover:shadow-[0_0_30px_rgba(200,182,166,0.3)] mx-auto md:mx-0 overflow-hidden inline-flex"
                >
                  {/* Animación de fluido de energía rotatorio en el borde */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                    className="absolute inset-[-100%] z-0 opacity-80"
                    style={{ background: 'conic-gradient(from 0deg, transparent 0 340deg, #c8b6a6 360deg)' }}
                  />
                  
                  {/* Fondo principal del botón (transparencia del 60% de #4c3628) con blur para cristal */}
                  <div className="absolute inset-[1px] bg-[#4c3628]/60 backdrop-blur-md rounded-xl z-0 transition-colors duration-500 group-hover:bg-[#4c3628]/70" />

                  <span className="relative z-10">Conócenos</span>
                  <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Marquee inferior de Trayectoria Operativa */}
          <div className="relative z-10 w-full overflow-hidden pt-16 pb-4">
            <div className="px-6 md:px-16 container mx-auto max-w-7xl">
              <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-[#c8b6a6] font-semibold block mb-6 text-center lg:text-left">
                TRAYECTORIA OPERATIVA
              </span>
            </div>
            <div className="marquee-container w-full overflow-hidden relative">
              <div className="flex animate-marquee w-max gap-0">
                {/* Set 1 */}
                {PARTNERS.map((partner, idx) => {
                  return (
                    <div 
                      key={`logo-1-${idx}`} 
                      className={`transition-opacity duration-300 ease-out h-16 md:h-20 mx-8 md:mx-10 flex items-center justify-center cursor-default shrink-0 w-auto ${
                        partner.featured ? 'opacity-[0.5] hover:opacity-[0.95]' : 'opacity-[0.3] hover:opacity-[0.95]'
                      }`}
                    >
                      <img 
                        src={`${partner.src}?v=3`} 
                        alt={partner.name} 
                        className="h-[30px] md:h-[40px] w-auto object-contain"
                        style={{ filter: 'brightness(0) invert(0.6)' }}
                      />
                    </div>
                  );
                })}
                {/* Set 2 */}
                {PARTNERS.map((partner, idx) => {
                  return (
                    <div 
                      key={`logo-2-${idx}`} 
                      className={`transition-opacity duration-300 ease-out h-16 md:h-20 mx-8 md:mx-10 flex items-center justify-center cursor-default shrink-0 w-auto ${
                        partner.featured ? 'opacity-[0.5] hover:opacity-[0.95]' : 'opacity-[0.3] hover:opacity-[0.95]'
                      }`}
                    >
                      <img 
                        src={`${partner.src}?v=3`} 
                        alt={partner.name} 
                        className="h-[30px] md:h-[40px] w-auto object-contain"
                        style={{ filter: 'brightness(0) invert(0.6)' }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN B: EL GÉNESIS (Scroll Asimétrico Sticky Grid 40/60) */}
        <section className="py-32 px-6 md:px-16 container mx-auto max-w-5xl min-h-[80vh]">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16 items-start">
            {/* Columna Izquierda Sticky (40%) */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 self-start py-4">
              <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#c8b6a6] font-semibold block mb-2">
                El Génesis
              </span>
              <h2 className="font-serif text-xl md:text-2xl lg:text-[26px] text-brand-white leading-tight font-medium">
                El Origen
              </h2>
              <p className="font-sans text-xs text-brand-champagne/40 mt-3 max-w-xs">
                Una ruptura necesaria con el estándar de agencias tradicionales.
              </p>
            </div>

            {/* Columna Derecha Fluida (60%) */}
            <div className="lg:col-span-6 space-y-6">
              <p className="font-sans text-base md:text-lg text-brand-champagne/80 font-light leading-relaxed max-w-[60ch]">
                Durante 18 años vi cómo las marcas B2B fracasaban no por tener malos productos, sino por una fractura fatal: la estrategia iba por un lado y la ejecución técnica por otro.
              </p>
              <p className="font-sans text-base md:text-lg text-brand-champagne/80 font-light leading-relaxed max-w-[60ch]">
                Mi marca personal nació para dictar la dirección (El Diagnóstico). Soarity nació para ejecutarla sin margen de error (La Ingeniería). No somos una agencia tradicional; somos el brazo armado de tu posicionamiento.
              </p>
            </div>
          </div>
        </section>

        {/* SECCIÓN C: LA DUPLA (INTERACCIÓN HUMANA - Layout 60/40) */}
        <section id="la-dupla" className="py-32 px-6 md:px-16 container mx-auto max-w-5xl min-h-[85vh] flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-16 lg:gap-20 items-center">
            
            {/* Columna Izquierda: Perfiles (60% / lg:col-span-6) */}
            <div className="lg:col-span-6 space-y-16 order-2 lg:order-1">
              {/* Perfil Jheisry */}
              <div 
                onMouseEnter={() => {
                  setActiveCEO('jheisry');
                  setHoveredCEO('jheisry');
                }}
                onMouseLeave={() => {
                  setHoveredCEO(null);
                }}
                className={`transition-all duration-500 cursor-default ${
                  hoveredCEO === 'gustavo' ? 'opacity-30 blur-[0.5px]' : 'opacity-100'
                }`}
              >
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#c8b6a6] font-semibold block mb-2">
                  Brand Strategist & Growth Director
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-brand-white mb-4 leading-tight font-medium">
                  Jheisry Aguilera
                </h3>
                <p className="font-sans text-base md:text-sm text-brand-champagne/80 font-light leading-relaxed mb-4 max-w-[60ch]">
                  Con más de 18 años de trayectoria en dirección estratégica y generación de demanda, Jheisry fusiona la arquitectura de marca B2B con la optimización de conversión comercial. Asegura que la identidad y narrativa de tu firma transmitan un valor indomable en las mesas directivas.
                </p>
                <div className="font-sans text-[9px] tracking-wider uppercase text-[#c8b6a6]/60 font-medium pt-3 border-t border-brand-taupe/10">
                  ARQUITECTURA DE MARCA B2B / NARRATIVA DE CONVERSIÓN / DISEÑO DE IDENTIDAD DE ESTATUS
                </div>
              </div>

              {/* Perfil Gustavo */}
              <div 
                onMouseEnter={() => {
                  setActiveCEO('gustavo');
                  setHoveredCEO('gustavo');
                }}
                onMouseLeave={() => {
                  setHoveredCEO(null);
                }}
                className={`transition-all duration-500 cursor-default ${
                  hoveredCEO === 'jheisry' ? 'opacity-30 blur-[0.5px]' : 'opacity-100'
                }`}
              >
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#c8b6a6] font-semibold block mb-2">
                  Lead Technical Engineer
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-brand-white mb-4 leading-tight font-medium">
                  Gustavo Jaén
                </h3>
                <p className="font-sans text-base md:text-sm text-brand-champagne/80 font-light leading-relaxed mb-4 max-w-[60ch]">
                  Garante de la infraestructura corporativa. Con experiencia desarrollando sistemas Core para la industria bancaria y aseguradora, Gustavo construye ecosistemas en código nativo. Asegura latencias casi nulas y seguridad premium, traduciendo la estrategia en un activo inquebrantable.
                </p>
                <div className="font-sans text-[9px] tracking-wider uppercase text-[#c8b6a6]/60 font-medium pt-3 border-t border-brand-taupe/10">
                  DESARROLLO EN CÓDIGO NATIVO / OPTIMIZACIÓN EXTREMA DE LATENCIA
                </div>
              </div>
            </div>

            {/* Columna Derecha: Contenedor único de Fotografía (40% / lg:col-span-4) */}
            <div className="lg:col-span-4 flex items-center justify-center w-full order-1 lg:order-2">
              <div 
                className="w-full aspect-[3/4] relative overflow-hidden flex items-center justify-center bg-transparent"
                style={{
                  maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
                  WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)'
                }}
              >
                {/* Jheisry Portrait */}
                <motion.img 
                  src="/jheisry.jpg" 
                  alt="Jheisry Aguilera"
                  loading="lazy"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: activeCEO === 'jheisry' ? 0.95 : 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ mixBlendMode: 'soft-light', filter: 'grayscale(100%) contrast(1.15) brightness(0.9)' }}
                />

                {/* Gustavo Portrait */}
                <motion.img 
                  src="/CEO.png" 
                  alt="Gustavo Jaén"
                  loading="lazy"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCEO === 'gustavo' ? 0.95 : 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ mixBlendMode: 'soft-light', filter: 'grayscale(100%) contrast(1.15) brightness(0.9)' }}
                />
              </div>
            </div>
          </div>
        </section>

      {/* SECCIÓN D: EL FILTRO (Tarjetas Bento Expansivas) */}
      <section className="py-32 px-6 md:px-16 container mx-auto max-w-5xl min-h-[80vh] flex flex-col justify-center">
        <div className="text-center mb-16">
          <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#c8b6a6] font-semibold block mb-3">
            El Filtro
          </span>
          <h2 className="font-serif text-xl md:text-2xl lg:text-[26px] text-brand-white">
            Condiciones de Operación
          </h2>
        </div>

        {/* Bento Grid Flex layout for expanding width on desktop hover */}
        <div className="flex flex-col md:flex-row gap-6 w-full items-stretch justify-center">
          {CARDS.map((card, idx) => {
            const isHovered = hoveredCard === idx;
            const isAnyHovered = hoveredCard !== null;
            
            return (
              <div
                key={`filter-card-${idx}`}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] p-8 bg-brand-brown/10 border border-brand-taupe/15 rounded-2xl flex flex-col justify-between min-h-[260px] cursor-default ${
                  isAnyHovered 
                    ? isHovered 
                      ? 'md:flex-[1.5] opacity-100 border-[#c8b6a6]/30 shadow-lg scale-[1.02]' 
                      : 'md:flex-[0.75] opacity-35 scale-[0.98] blur-[0.5px]'
                    : 'flex-1 opacity-90'
                }`}
              >
                <div>
                  <span className="font-serif text-4xl text-[#c8b6a6]/20 font-semibold block mb-6">
                    0{idx + 1}
                  </span>
                  <h4 className="font-sans text-base md:text-sm tracking-wider uppercase font-bold text-brand-white mb-4">
                    {card.title}
                  </h4>
                </div>
                <p className={`font-sans text-[13px] md:text-xs text-brand-champagne/80 font-light leading-relaxed transition-opacity duration-300 ${
                  isHovered || !isAnyHovered ? 'opacity-100' : 'opacity-55'
                }`}>
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECCIÓN E: MANIFIESTO Y CIERRE (Cierre Borderless con Film Grain & Glow) */}
      <section className="px-6 py-32 container mx-auto max-w-4xl text-center min-h-[80vh] flex flex-col justify-center">
        <h3 className="font-serif text-lg md:text-xl lg:text-[22px] text-brand-white opacity-95 leading-relaxed max-w-[700px] text-center mx-auto">
          "La autoridad es un sistema, no una suma de piezas aisladas. No ejecutamos intervenciones desconectadas. Diseñamos Ecosistemas Digitales completos —desde el diagnóstico estratégico hasta la ingeniería de conversión— para transformar tu sede corporativa digital en un activo financiero cuantificable."
        </h3>
        
        <div className="mt-[10vh]">
          <Link
            to="/diagnostico"
            className="inline-block bg-[#c8b6a6] hover:bg-[#f2f1eb] text-[#130f08] font-sans text-xs tracking-widest uppercase font-semibold py-4 px-8 rounded-full transition-all duration-300 btn-energy-flow"
          >
            INICIAR DIAGNÓSTICO
          </Link>
        </div>
      </section>

      </div> {/* Fin del Contenido Principal z-[10] */}
    </div>
  );
}
