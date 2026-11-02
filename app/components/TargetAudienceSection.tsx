"use client";

import { motion } from "framer-motion";
import {
  Compass,
  Repeat,
  Trophy,
  Check,
  XCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function TargetAudienceSection() {
  const profiles = [
    {
      badge: "PERFIL 01",
      icon: Compass,
      title: "O Iniciante Consciente",
      tagline: "Quer começar com o pé direito sem queimar dinheiro",
      desc: "Você nunca operou ou está perdido entre centenas de vídeos desconexos no YouTube. Precisa de um guia passo a passo, método claro e acompanhamento para não perder capital no início.",
      benefits: [
        "Aprenda do zero absoluto até a execução da primeira ordem",
        "Evite os 7 erros que fazem 95% dos novatos quebrarem a conta",
        "Treine em simulador com o método do Caio antes de arriscar 1 real",
        "Domine os conceitos essenciais de mercado sem jargões difíceis",
      ],
      idealFor: "Ideal para quem busca uma nova fonte de renda confiável",
      featured: false,
    },
    {
      badge: "PERFIL 02 • MAIS FREQUENTE",
      icon: Repeat,
      title: "O Operador Estagnado",
      tagline: "Ganha durante a semana e devolve tudo no dia de fúria",
      desc: "Você já conhece plataformas e gráficos, tem dias no ganho, mas no primeiro stop perde o controle emocional, faz overtrading e entrega todo o lucro conquistado.",
      benefits: [
        "Elimine o dia de fúria com um plano de gerenciamento rigoroso",
        "Aprenda a parar quando a meta bater ou o limite de perda for atingido",
        "Relação risco/retorno favorável: arrisque pouco para buscar muito",
        "Construa a consistência mês a mês de forma previsível",
      ],
      idealFor: "Ideal para quem busca destravar a virada de chave definitiva",
      featured: true,
    },
    {
      badge: "PERFIL 03",
      icon: Trophy,
      title: "Quem Quer Viver de Mercado",
      tagline: "Profissionalização e escala inteligente de lotes",
      desc: "Você busca fazer do Day Trade uma carreira sustentável ou fonte principal de renda, operando de 1 a 2 horas pela manhã com liberdade geográfica e independência profissional.",
      benefits: [
        "Metodologia para aumentar lotes e contratos com segurança",
        "Leitura institucional pura sem poluição de indicadores",
        "Rotina operacional blindada como a dos traders de tesouraria",
        "Foco em rentabilidade diária com preservação de patrimônio",
      ],
      idealFor: "Ideal para quem busca liberdade de tempo e alta performance",
      featured: false,
    },
  ];

  return (
    <section id="publico" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            Qualificação de Candidatos
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight"
          >
            Esta Mentoria É Exatamente{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B192C] to-blue-700">
              Para Você?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            Identifique em qual destes três estágios você se encontra hoje. O método
            do Caio foi desenvolvido para atuar cirurgicamente na sua dor principal:
          </motion.p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {profiles.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className={`relative flex flex-col justify-between rounded-3xl p-7 sm:p-8 transition-all duration-300 ${
                p.featured
                  ? "bg-white border-2 border-blue-600 shadow-xl shadow-blue-900/10 md:-translate-y-2 ring-4 ring-blue-500/10"
                  : "bg-white border border-slate-200/90 shadow-md hover:shadow-xl hover:border-blue-300"
              }`}
            >
              {/* Featured Ribbon */}
              {p.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-700 to-cyan-600 text-white text-[10px] font-black uppercase tracking-wider shadow-md">
                  Vaga Mais Procurada
                </div>
              )}

              <div>
                {/* Badge & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md ${
                      p.featured
                        ? "bg-blue-100 text-blue-900 font-mono"
                        : "bg-slate-100 text-slate-700 font-mono"
                    }`}
                  >
                    {p.badge}
                  </span>
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center ${
                      p.featured
                        ? "bg-blue-900 text-cyan-400 shadow-md"
                        : "bg-blue-50 text-blue-800 border border-blue-100"
                    }`}
                  >
                    <p.icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-sans tracking-tight">
                  {p.title}
                </h3>
                <p className="text-xs font-bold text-blue-800 mt-1 mb-4">
                  {p.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {p.desc}
                </p>

                {/* Key Benefits List */}
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  {p.benefits.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-cyan-100 text-cyan-800 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-tight">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Target Stamp & Micro CTA */}
              <div className="mt-8 pt-5 border-t border-slate-100">
                <span className="block text-[11px] font-semibold text-slate-500 italic mb-4">
                  {p.idealFor}
                </span>

                <a
                  href="#aplicacao"
                  className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                    p.featured
                      ? "bg-[#0B192C] text-white hover:bg-blue-900 shadow-md"
                      : "bg-slate-100 text-slate-800 hover:bg-blue-50 hover:text-blue-950 border border-slate-200"
                  }`}
                >
                  <span>Candidatar para esta vaga</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-500" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Anti-Persona Banner (Important for Quality Conversion) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 max-w-4xl mx-auto rounded-2xl bg-white border border-rose-200 p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left"
        >
          <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
            <XCircle className="w-6 h-6" />
          </div>
          <div className="flex-1 text-xs sm:text-sm text-slate-700">
            <strong className="text-rose-900 block font-bold text-sm sm:text-base">
              Para quem esta mentoria NÃO É:
            </strong>
            Pessoas em busca de enriquecimento fácil da noite para o dia, apostadores que não querem seguir regras de risco ou quem não tem compromisso de estudar e praticar com seriedade.
          </div>
        </motion.div>

      </div>
    </section>
  );
}

