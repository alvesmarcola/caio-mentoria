"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldAlert,
  Activity,
  Brain,
  Radio,
  CheckCircle2,
  ArrowRight,
  Layers,
  ChevronRight,
} from "lucide-react";

export function MethodSection() {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      num: "01",
      icon: ShieldAlert,
      title: "Gestão de Risco Blindada",
      subtitle: "A matemática da sobrevivência e do lucro assimétrico",
      desc: "O maior segredo dos 5% que vivem de mercado não é acertar todas as operações, mas sim perder pouco quando erra e lucrar muito quando acerta.",
      highlights: [
        "Cálculo matemático de exposição (nunca arrisque mais de 1% a 2% da banca)",
        "Relação Risco x Retorno assimétrica mínima de 1:3 para lucro consistente",
        "Trava diária eletrônica de perdas: blindagem definitiva contra o dia de fúria",
        "Plano de dimensionamento gradual para aumento de contratos sem susto",
      ],
      tag: "Fundamento Absoluto",
      color: "from-blue-900 to-[#0B192C]",
    },
    {
      num: "02",
      icon: Activity,
      title: "Leitura de Fluxo & Price Action Puro",
      subtitle: "Identifique os rastros dos grandes players institucionais",
      desc: "Abandone indicadores atrasados que só confundem sua tela. Você vai aprender a ler a verdadeira dinâmica de oferta, demanda e liquidez dos grandes bancos.",
      highlights: [
        "Zonas de absorção e exaustão onde os institucionais entram pesado",
        "Gatilhos operacionais objetivos em Mini-Índice (WIN) e Mini-Dólar (WDO)",
        "Marcações de suporte, resistência e vácuo de liquidez com alta probabilidade",
        "Filtros de falso rompimento para não ser a liquidez do mercado",
      ],
      tag: "Visão Institucional",
      color: "from-cyan-900 to-[#0B192C]",
    },
    {
      num: "03",
      icon: Brain,
      title: "Psicotrading & Controle Emocional",
      subtitle: "Elimine o medo, a ganância e a necessidade de vingar o stop",
      desc: "A técnica sem preparo psicológico é inútil. Criamos um protocolo para reprogramar sua reação diante das perdas e manter a frieza de um cirurgião.",
      highlights: [
        "Protocolo anti-vingança: o que fazer nos primeiros 10 minutos após um stop",
        "Rotina pré-mercado de alta performance mental para eliminar a ansiedade",
        "Fim do overtrading: opere menos e lucre mais com paciência de sniper",
        "Desenvolvimento da mentalidade probabilística de longo prazo",
      ],
      tag: "Blindagem Psicológica",
      color: "from-indigo-950 to-[#0B192C]",
    },
    {
      num: "04",
      icon: Radio,
      title: "Execução Prática & Pregão Ao Vivo",
      subtitle: "Acompanhamento no front de batalha ao lado do mentor",
      desc: "Você não vai ficar sozinho com vídeos gravados. Estaremos juntos nas manhãs de pregão ao vivo analisando o mercado real em tempo real.",
      highlights: [
        "Encontros de pregão ao vivo para aplicar o método no calor dos fatos",
        "Leitura comentada de aberturas, notícias de impacto e movimentações atípicas",
        "Revisão individual de boletas e diário de operações para corrigir falhas",
        "Acesso à comunidade fechada dos alunos para networking de alto nível",
      ],
      tag: "Prática Real",
      color: "from-blue-950 to-[#0B192C]",
    },
  ];

  return (
    <section id="metodo" className="py-20 md:py-28 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Layers className="w-3.5 h-3.5 text-cyan-600" />
            Metodologia Proprietária
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight"
          >
            Os 4 Pilares Práticos do{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B192C] to-blue-700">
              Método do Caio
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            Uma trilha clara, passo a passo e testada no fogo do pregão diário para
            transformar qualquer operador indisciplinado em um profissional consistente.
          </motion.p>
        </div>

        {/* Desktop Interactive Tabs / Flow */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Vertical Selectors */}
          <div className="col-span-5 space-y-3">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-200 flex items-center justify-between border cursor-pointer ${
                    isSelected
                      ? "bg-[#0B192C] text-white border-blue-700 shadow-xl shadow-blue-950/20 scale-[1.02]"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center font-mono font-black text-lg ${
                        isSelected
                          ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                          : "bg-white text-slate-500 border border-slate-200"
                      }`}
                    >
                      {item.num}
                    </div>
                    <div>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider block ${
                          isSelected ? "text-cyan-400" : "text-blue-800"
                        }`}
                      >
                        {item.tag}
                      </span>
                      <h3
                        className={`text-base font-extrabold ${
                          isSelected ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform ${
                      isSelected ? "text-cyan-400 translate-x-1" : "text-slate-400"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Tab Content Showcase */}
          <div className="col-span-7">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#0B192C] to-[#0F223D] border border-blue-800/40 text-white shadow-2xl relative overflow-hidden"
            >
              {/* Top Accent Tag */}
              <div className="flex items-center justify-between pb-6 border-b border-blue-900/60 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                    {(() => {
                      const Icon = pillars[activeTab].icon;
                      return <Icon className="w-5 h-5" />;
                    })()}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-cyan-400">
                      PILAR {pillars[activeTab].num}
                    </span>
                    <h4 className="text-xl sm:text-2xl font-black text-white">
                      {pillars[activeTab].title}
                    </h4>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-950 border border-blue-700/60 text-xs font-semibold text-blue-200">
                  {pillars[activeTab].tag}
                </span>
              </div>

              <p className="text-sm font-semibold text-cyan-200 mb-3">
                {pillars[activeTab].subtitle}
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
                {pillars[activeTab].desc}
              </p>

              {/* Highlights List */}
              <div className="space-y-3.5 mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  O que você domina na prática:
                </span>
                {pillars[activeTab].highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Bottom Quick CTA */}
              <div className="pt-6 border-t border-blue-900/60 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Módulo com exercícios práticos e feedbacks
                </span>
                <a
                  href="#aplicacao"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-md"
                >
                  <span>Dominar Este Pilar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Mobile Accordion Style / Sequential Stack */}
        <div className="lg:hidden space-y-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200 p-6 shadow-md"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-950 text-cyan-400 flex items-center justify-center font-bold text-sm">
                    {item.num}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-600 block">
                      {item.tag}
                    </span>
                    <h3 className="text-lg font-black text-slate-900">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs font-semibold text-blue-900 mb-2">
                  {item.subtitle}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {item.desc}
                </p>

                <div className="space-y-2 pt-3 border-t border-slate-100 mb-4">
                  {item.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#aplicacao"
                  className="w-full py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider text-white bg-[#0B192C] flex items-center justify-center gap-2"
                >
                  <span>Garantir Vaga</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

