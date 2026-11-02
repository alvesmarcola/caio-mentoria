"use client";

import { motion } from "framer-motion";
import {
  Award,
  Calendar,
  DollarSign,
  Users,
  Shield,
  Clock,
  CheckCircle,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

export function AuthoritySection() {
  const stats = [
    {
      icon: Calendar,
      number: "+7 Anos",
      label: "De Experiência",
      desc: "Operando diariamente no pregão da B3",
    },
    {
      icon: DollarSign,
      number: "+R$ 5.2M",
      label: "Movimentados",
      desc: "Em operações institucionais com método",
    },
    {
      icon: Users,
      number: "+1.450",
      label: "Alunos Formados",
      desc: "Que deixaram de ser amadores no Day Trade",
    },
    {
      icon: Award,
      number: "84.7%",
      label: "Taxa de Precisão",
      desc: "Risco/Retorno assimétrico em operações reais",
    },
  ];

  return (
    <section id="mentor" className="py-20 md:py-28 bg-white relative border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Professional Mentor Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-md"
            >
              {/* Decorative Frame */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#0B192C] via-blue-900 to-cyan-500 rounded-3xl opacity-20 blur-lg" />
              
              <div className="relative rounded-3xl bg-gradient-to-b from-[#0B192C] via-[#10243E] to-[#0A1626] p-6 sm:p-8 border border-blue-800/40 shadow-2xl text-white overflow-hidden">
                
                {/* Visual Avatar / Editorial Portrait Container */}
                <div className="relative aspect-4/5 rounded-2xl bg-gradient-to-b from-[#1E3E62] to-[#0B192C] overflow-hidden flex flex-col items-center justify-between p-6 border border-cyan-500/20">
                  {/* Subtle Grid Background */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-10" />

                  {/* Top Bar inside image card */}
                  <div className="relative z-10 w-full flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-[10px] font-bold uppercase tracking-wider">
                      Mentor Oficial
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 font-semibold">
                      B3 • CNPI-P Ref.
                    </span>
                  </div>

                  {/* Mentor Stylized Avatar Illustration */}
                  <div className="relative z-10 my-auto flex flex-col items-center text-center">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-cyan-400 via-blue-600 to-blue-950 shadow-xl mb-4">
                      <div className="w-full h-full rounded-full bg-[#0B192C] flex items-center justify-center text-cyan-400 font-black text-4xl sm:text-5xl font-sans">
                        CAIO
                      </div>
                    </div>
                    <h3 className="font-extrabold text-2xl text-white font-sans">
                      Caio
                    </h3>
                    <p className="text-xs text-cyan-300 uppercase tracking-widest font-semibold mt-1">
                      Especialista em Price Action & Fluxo
                    </p>
                  </div>

                  {/* Bottom Stats Badge inside image */}
                  <div className="relative z-10 w-full pt-4 border-t border-blue-900/60 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Consistência Ativa</span>
                    </div>
                    <span className="text-slate-400 font-medium">
                      Desde 2017 no Mercado
                    </span>
                  </div>
                </div>

                {/* Mentor Quote Tag */}
                <div className="mt-5 p-4 rounded-xl bg-blue-950/60 border border-blue-800/40 text-center">
                  <p className="text-xs text-slate-300 italic leading-relaxed">
                    “O mercado não perdoa amadores. Quem não tem método vira liquidez para os grandes bancos.”
                  </p>
                </div>

              </div>
            </motion.div>
          </div>

          {/* Right Column: Bio, Story & Achievements */}
          <div className="lg:col-span-7 flex flex-col">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-900 text-xs font-bold uppercase tracking-wider mb-4">
                <Shield className="w-3.5 h-3.5 text-cyan-600" />
                Quem Vai Guiar Seus Passos
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                De Operador Frustrado a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B192C] to-blue-700">
                  Mentor de Centenas
                </span>{" "}
                de Operadores Consistentes.
              </h2>

              <div className="mt-6 space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                <p>
                  Assim como a grande maioria dos que tentam o Day Trade, no meu início eu
                  cometi todos os erros possíveis: confiei em indicadores mirabolantes,
                  comprei salas de sinais furadas e devolvia semanas de ganhos em um único
                  dia de fúria e descontrole emocional.
                </p>
                <p>
                  A virada de chave aconteceu quando entendi que o mercado financeiro é
                  um jogo de <strong className="text-slate-900">leitura institucional e probabilidade matemática</strong>.
                  Desenvolvi um método proprietário, sem segredos mirabolantes, focado em
                  identificar exatamente o rastro dos grandes players e proteger o capital
                  a qualquer custo.
                </p>
                <p>
                  Hoje, dedico minhas manhãs a operar com foco e minhas tardes a mentorar
                  pessoas comuns que querem construir sua liberdade financeira e viver
                  do mercado sem falsas ilusões.
                </p>
              </div>

              {/* Achievements Grid */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((s, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-colors"
                  >
                    <s.icon className="w-5 h-5 text-blue-800 mb-2" />
                    <div className="text-xl sm:text-2xl font-black text-slate-900 font-sans tracking-tight">
                      {s.number}
                    </div>
                    <div className="text-xs font-bold text-slate-700 mt-0.5">
                      {s.label}
                    </div>
                    <div className="text-[11px] text-slate-500 leading-tight mt-1">
                      {s.desc}
                    </div>
                  </div>
                ))}
              </div>

              {/* Core Philosophy Markers */}
              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-2 text-xs sm:text-sm font-semibold text-slate-800">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>Transparência total e pregão na prática</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>Acesso direto ao mentor para tirar dúvidas</span>
                  </div>
                </div>

                <a
                  href="#aplicacao"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#0B192C] hover:bg-blue-900 transition-colors shadow-md shrink-0"
                >
                  <span>Quero Ser Aluno do Caio</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                </a>
              </div>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}

