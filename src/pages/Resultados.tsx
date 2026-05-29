import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Resultados() {
  return (
    <div className="pt-24 md:pt-32">
      {/* HERO SECTION */}
      <section className="px-6 md:px-16 container mx-auto max-w-4xl text-center py-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-white tracking-tight leading-tight"
        >
          La autoridad no es una percepción;<br/>
          <span className="italic font-normal text-brand-taupe">es un resultado cuantificable.</span>
        </motion.h1>
      </section>

      {/* CASOS DE ESTUDIO (TEXT/DATA ONLY) */}
      <section className="py-20 px-6 md:px-16 container mx-auto max-w-4xl">
        <div className="space-y-16">
          
          {/* Caso 1 */}
          <div className="bg-brand-brown/30 border border-brand-taupe/15 rounded-2xl p-8 md:p-12">
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-brand-taupe font-semibold mb-6 block">
              Caso 01: Firma de Consultoría Financiera B2B
            </span>
            <div className="space-y-8 font-sans">
              <div className="border-l border-red-900/40 pl-4">
                <h4 className="text-[10px] tracking-wider uppercase text-brand-champagne/50 mb-1">El Escenario</h4>
                <p className="text-sm text-brand-champagne/80 font-light leading-relaxed">
                  Operaban con un modelo de ticket alto ($50k+), pero perdían el 40% de los tratos en la fase de auditoría técnica por prospectos que dudaban de su infraestructura digital. Su web anterior tardaba 4.2 segundos en cargar y usaba plantillas genéricas.
                </p>
              </div>
              <div className="border-l border-brand-taupe/30 pl-4">
                <h4 className="text-[10px] tracking-wider uppercase text-brand-taupe/60 mb-1">La Intervención</h4>
                <p className="text-sm text-brand-champagne/80 font-light leading-relaxed">
                  Refactorización total del ecosistema a React puro (Gustavo) reduciendo la latencia a 0.8s. Reestructuración de la identidad visual a una paleta restrictiva, con tipografía clásica que impone respeto y silencio (Jheisry).
                </p>
              </div>
              <div className="border-l border-green-900/40 pl-4 bg-brand-obsidian/30 py-3 pr-4 rounded-r-lg">
                <h4 className="text-[10px] tracking-wider uppercase text-green-400 mb-1">El Impacto</h4>
                <p className="text-sm text-brand-white font-medium leading-relaxed">
                  Reducción del ciclo de ventas en 14 días. Tasa de cierre aumentada en un 35%. Dos contratos empresariales asegurados en el Q1 sin objeciones de precio, generando un ROI de 1,200% sobre nuestra intervención.
                </p>
              </div>
            </div>
          </div>

          {/* Caso 2 */}
          <div className="bg-brand-brown/30 border border-brand-taupe/15 rounded-2xl p-8 md:p-12">
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-brand-taupe font-semibold mb-6 block">
              Caso 02: Agencia Boutique de Software
            </span>
            <div className="space-y-8 font-sans">
              <div className="border-l border-red-900/40 pl-4">
                <h4 className="text-[10px] tracking-wider uppercase text-brand-champagne/50 mb-1">El Escenario</h4>
                <p className="text-sm text-brand-champagne/80 font-light leading-relaxed">
                  Competían por licitaciones gubernamentales y privadas, pero eran constantemente filtrados en favor de agencias más grandes a pesar de tener mejor talento técnico. Su posicionamiento los mostraba como simples "freelancers glorificados".
                </p>
              </div>
              <div className="border-l border-brand-taupe/30 pl-4">
                <h4 className="text-[10px] tracking-wider uppercase text-brand-taupe/60 mb-1">La Intervención</h4>
                <p className="text-sm text-brand-champagne/80 font-light leading-relaxed">
                  Implementación de un embudo de autoridad cerrado. Se eliminó el botón de "Contacto" público, reemplazado por un sistema de aplicación filtrado y auditoría técnica instantánea que demostraba la capacidad de ingeniería antes de la primera reunión.
                </p>
              </div>
              <div className="border-l border-green-900/40 pl-4 bg-brand-obsidian/30 py-3 pr-4 rounded-r-lg">
                <h4 className="text-[10px] tracking-wider uppercase text-green-400 mb-1">El Impacto</h4>
                <p className="text-sm text-brand-white font-medium leading-relaxed">
                  Aumento del ticket promedio en un 60%. Posicionamiento instantáneo como firma Senior. Ganaron su primera licitación enterprise de 6 cifras compitiendo contra empresas con el triple de personal.
                </p>
              </div>
            </div>
          </div>

          {/* Caso 3 */}
          <div className="bg-brand-brown/30 border border-brand-taupe/15 rounded-2xl p-8 md:p-12">
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-brand-taupe font-semibold mb-6 block">
              Caso 03: Consultor Legal Corporativo
            </span>
            <div className="space-y-8 font-sans">
              <div className="border-l border-red-900/40 pl-4">
                <h4 className="text-[10px] tracking-wider uppercase text-brand-champagne/50 mb-1">El Escenario</h4>
                <p className="text-sm text-brand-champagne/80 font-light leading-relaxed">
                  Pérdida de clientes frente a firmas internacionales. La presencia digital estaba fragmentada entre un perfil de LinkedIn fuerte y un sitio web institucional estático, anticuado y que diluía el prestigio de su práctica legal.
                </p>
              </div>
              <div className="border-l border-brand-taupe/30 pl-4">
                <h4 className="text-[10px] tracking-wider uppercase text-brand-taupe/60 mb-1">La Intervención</h4>
                <p className="text-sm text-brand-champagne/80 font-light leading-relaxed">
                  Desarrollo de un manifiesto de marca implacable combinado con una arquitectura web ultra-minimalista. Se priorizó el espacio negativo y la tipografía editorial para construir una atmósfera de alto prestigio corporativo.
                </p>
              </div>
              <div className="border-l border-green-900/40 pl-4 bg-brand-obsidian/30 py-3 pr-4 rounded-r-lg">
                <h4 className="text-[10px] tracking-wider uppercase text-green-400 mb-1">El Impacto</h4>
                <p className="text-sm text-brand-white font-medium leading-relaxed">
                  El nuevo activo digital se convirtió en un escudo contra la negociación de tarifas. Retención de 3 clientes clave que consideraban cambiar de firma, asegurando $120k en honorarios anualizados recurrentes.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* VALIDACIÓN SOCIAL (1 Testimonio) */}
      <section className="py-24 bg-brand-brown/20 border-t border-brand-taupe/10 relative">
        <div className="px-6 md:px-16 container mx-auto max-w-4xl text-center">
          <Quote className="w-10 h-10 text-brand-taupe/40 mx-auto mb-6" />
          
          <div className="max-w-3xl mx-auto">
            <p className="font-serif text-lg md:text-2xl text-brand-white italic leading-relaxed mb-8">
              "No contratamos a S&CO para un rediseño web; los contratamos para frenar la fuga de capital. Su sistema eliminó la fricción en nuestras negociaciones B2B al proyectar el peso exacto de nuestra experiencia. El ROI fue inmediato: cerramos dos cuentas corporativas en el primer mes simplemente porque ya no tuvimos que defender nuestras tarifas."
            </p>
            <div className="font-sans text-xs">
              <strong className="text-brand-taupe tracking-wider block font-semibold text-sm mb-1">Martín V.</strong>
              <span className="text-brand-champagne/60 font-light block uppercase tracking-widest">CEO, FirmTech Partners</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
