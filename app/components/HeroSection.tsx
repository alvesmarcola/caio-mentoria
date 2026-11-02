"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  Lock,
  BarChart3,
  Users,
  Award,
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-gradient">
      {/* Background ambient decorative shapes */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Conversions */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Urgency Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-xs mb-6"
            >
              <span className="flex h-2 w-2 rounded-full bg-cyan-500 animate-ping" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-blue-950 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-cyan-600 fill-cyan-500" />
                Mentoria Exclusiva de Day Trade • Turma 2026
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.15] font-sans"
            >
              Pare de Devolver Lucro. Domine o Mercado com o{" "}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#0B192C] via-[#1E40AF] to-cyan-600">
                Método do Caio
              </span>
              .
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed font-normal"
            >
              Uma formação definitiva e prática para quem quer sair da instabilidade,
              eliminar o dia de fúria e operar com a mesma precisão dos grandes players
              institucionais.
            </motion.p>

            {/* Key Quick Bullets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold text-slate-700"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>Gestão de Risco Blindada</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>Leitura Institucional Sem Truques</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>Acompanhamento Prático</span>
              </div>
            </motion.div>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#aplicacao"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm sm:text-base font-extrabold uppercase tracking-wider text-white bg-gradient-to-r from-[#0B192C] via-[#1E3E62] to-[#1E40AF] hover:from-[#0F172A] hover:to-[#1D4ED8] shadow-xl shadow-blue-950/25 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <span>Garantir Minha Vaga na Mentoria</span>
                <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#metodo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold text-slate-700 bg-white border border-slate-300 hover:border-blue-400 hover:text-blue-900 shadow-xs hover:bg-slate-50 transition-all duration-200"
              >
                <span>Conhecer o Método</span>
              </a>
            </motion.div>

            {/* Micro Social Proof / Trust Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-slate-200/80 w-full justify-center lg:justify-start"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-tr from-[#0B192C] to-[#1E3E62] text-white flex items-center justify-center text-[10px] font-bold shadow-xs"
                  >
                    OP{i}
                  </div>
                ))}
              </div>
              <div className="text-left text-xs text-slate-600">
                <span className="font-bold text-slate-900 block">
                  +1.450 traders já passaram pelo método
                </span>
                <span className="text-slate-500">
                  Avaliação 4.9/5 ★ com base em resultados reais
                </span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: High-Tech Abstract Trading Mockup & Mentor Showcase */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Glow backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-700/20 rounded-3xl blur-2xl transform scale-95" />

            {/* Central Terminal / Mentor Preview Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-md bg-gradient-to-b from-[#0B192C] via-[#0E2138] to-[#0A1627] rounded-3xl p-6 sm:p-7 border border-blue-800/40 shadow-2xl text-white overflow-hidden"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between pb-5 border-b border-blue-900/60">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-cyan-400 block">
                      Operações Institucionais
                    </span>
                    <span className="text-sm font-extrabold text-white">
                      Sala de Pregão • Mentor Caio
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  AO VIVO
                </div>
              </div>

              {/* Candlestick & Price Chart Simulation */}
              <div className="my-6 p-4 rounded-2xl bg-[#06101E]/80 border border-blue-900/40">
                <div className="flex items-baseline justify-between mb-3">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                      Índice Futuro (WIN)
                    </span>
                    <span className="text-2xl font-black text-white font-mono">
                      132.840 <span className="text-xs text-emerald-400 font-sans font-bold">+1.84%</span>
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-800">
                    M5 • FLUXO PURO
                  </span>
                </div>

                {/* SVG Visual Candlestick Simulation */}
                <div className="h-32 w-full flex items-end justify-between gap-1.5 pt-4 px-1">
                  {[
                    { h: "45%", up: true, wick: "65%" },
                    { h: "35%", up: false, wick: "50%" },
                    { h: "60%", up: true, wick: "75%" },
                    { h: "50%", up: true, wick: "70%" },
                    { h: "40%", up: false, wick: "60%" },
                    { h: "75%", up: true, wick: "90%" },
                    { h: "65%", up: true, wick: "80%" },
                    { h: "90%", up: true, wick: "100%" },
                    { h: "82%", up: true, wick: "95%" },
                  ].map((bar, idx) => (
                    <div key={idx} className="relative flex-1 flex flex-col items-center justify-end h-full">
                      {/* Upper/Lower Wick */}
                      <div
                        className={`w-[1px] absolute ${
                          bar.up ? "bg-emerald-400/80" : "bg-rose-400/80"
                        }`}
                        style={{ height: bar.wick, bottom: "10%" }}
                      />
                      {/* Candle Body */}
                      <div
                        className={`w-full max-w-[14px] rounded-xs z-10 transition-all ${
                          bar.up
                            ? "bg-gradient-to-t from-emerald-500 to-emerald-400 shadow-xs shadow-emerald-500/40"
                            : "bg-gradient-to-t from-rose-600 to-rose-400"
                        }`}
                        style={{ height: bar.h }}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 mt-2 border-t border-blue-900/40 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-cyan-400 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" /> Stop Técnico: 120 pts
                  </span>
                  <span className="text-emerald-400 font-bold">
                    Alvo 1:3 • +480 pts
                  </span>
                </div>
              </div>

              {/* Mentor Identity Banner inside card */}
              <div className="flex items-center gap-3.5 p-3 rounded-xl bg-blue-950/60 border border-blue-800/40">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center font-black text-white text-lg shadow-md shrink-0">
                  C
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-extrabold text-sm text-white truncate">
                      Caio
                    </span>
                    <span className="w-4 h-4 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center text-[9px] font-black">
                      ✓
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 truncate">
                    Trader Consistente & Criador do Método
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 uppercase block font-semibold">
                    Experiência
                  </span>
                  <span className="text-xs font-bold text-cyan-300 font-mono">
                    +7 Anos
                  </span>
                </div>
              </div>

            </motion.div>

            {/* Floating Badge 1: Top Right */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-2 sm:-right-6 bg-white/95 backdrop-blur-md text-slate-900 px-4 py-2.5 rounded-2xl shadow-xl border border-slate-200/80 flex items-center gap-2.5 z-20"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">
                  Assertividade
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-slate-950">
                  84.7% no Método
                </span>
              </div>
            </motion.div>

            {/* Floating Badge 2: Bottom Left */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-2 sm:-left-6 bg-white/95 backdrop-blur-md text-slate-900 px-4 py-2.5 rounded-2xl shadow-xl border border-slate-200/80 flex items-center gap-2.5 z-20"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">
                  Proteção de Capital
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-slate-950">
                  Gestão Assimétrica
                </span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}

