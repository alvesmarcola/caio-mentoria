"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lock,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle,
  Clock,
  Sparkles,
  CreditCard,
  AlertCircle,
} from "lucide-react";

export function ApplicationSection() {
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    email: "",
    capital: "R$ 1.500 a R$ 5.000",
    experiencia: "Já opero mas não sou consistente",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate validation and checkout redirection
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="aplicacao" className="py-20 md:py-32 bg-[#F1F5F9] relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Navy Box Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-b from-[#0B192C] via-[#0E223D] to-[#0A1627] p-8 sm:p-12 md:p-16 border-2 border-blue-700/50 shadow-2xl text-white overflow-hidden"
        >
          {/* Decorative Corner Glows */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/15 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/15 rounded-full blur-2xl pointer-events-none" />

          {/* Urgency Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>Turma Exclusiva • Vagas Limitadas</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight font-sans">
              Aplicação Para a Mentoria de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
                Day Trade do Caio
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              Preencha o formulário rápido de qualificação abaixo para garantir sua
              vaga prioritária e ser direcionado para o checkout oficial.
            </p>

            <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/50 px-3 py-1 rounded-full border border-emerald-800/40">
              <Clock className="w-3.5 h-3.5" />
              <span>Restam apenas 7 vagas abertas para esta edição</span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {!submitted ? (
              /* Conversion Form */
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="space-y-5 max-w-xl mx-auto relative z-10"
              >
                {/* Field 1: Nome */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Nome Completo <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Carlos Eduardo Silva"
                    value={formData.nome}
                    onChange={(e) =>
                      setFormData({ ...formData, nome: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-xl bg-blue-950/70 border border-blue-800 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 text-sm transition-all"
                  />
                </div>

                {/* Field 2 & 3: WhatsApp & Email Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      WhatsApp com DDD <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(11) 99999-9999"
                      value={formData.whatsapp}
                      onChange={(e) =>
                        setFormData({ ...formData, whatsapp: e.target.value })
                      }
                      className="w-full px-4 py-3.5 rounded-xl bg-blue-950/70 border border-blue-800 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Melhor E-mail <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="seuemail@exemplo.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3.5 rounded-xl bg-blue-950/70 border border-blue-800 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 text-sm transition-all"
                    />
                  </div>
                </div>

                {/* Field 4: Capital Disponível */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Capital Disponível para Operar no Mercado
                  </label>
                  <select
                    value={formData.capital}
                    onChange={(e) =>
                      setFormData({ ...formData, capital: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-xl bg-blue-950/70 border border-blue-800 text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 text-sm transition-all cursor-pointer"
                  >
                    <option value="Até R$ 1.500" className="bg-[#0B192C]">
                      Até R$ 1.500 (Início com 1 minicontrato)
                    </option>
                    <option value="R$ 1.500 a R$ 5.000" className="bg-[#0B192C]">
                      R$ 1.500 a R$ 5.000 (Margem recomendada)
                    </option>
                    <option value="R$ 5.000 a R$ 20.000" className="bg-[#0B192C]">
                      R$ 5.000 a R$ 20.000 (Escala moderada)
                    </option>
                    <option value="Acima de R$ 20.000" className="bg-[#0B192C]">
                      Acima de R$ 20.000 (Perfil profissional/alta escala)
                    </option>
                  </select>
                </div>

                {/* Field 5: Nível de Experiência */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Seu Nível Atual no Day Trade
                  </label>
                  <select
                    value={formData.experiencia}
                    onChange={(e) =>
                      setFormData({ ...formData, experiencia: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-xl bg-blue-950/70 border border-blue-800 text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 text-sm transition-all cursor-pointer"
                  >
                    <option value="Iniciante absoluto" className="bg-[#0B192C]">
                      Iniciante absoluto (nunca operei)
                    </option>
                    <option value="Já opero mas não sou consistente" className="bg-[#0B192C]">
                      Já opero mas não consigo ser consistente
                    </option>
                    <option value="Avançado buscando refinamento" className="bg-[#0B192C]">
                      Avançado buscando refinamento e gestão institucional
                    </option>
                  </select>
                </div>

                {/* Submit CTA Button */}
                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 sm:py-5 rounded-2xl font-black text-sm sm:text-base uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-400 hover:from-cyan-300 hover:to-sky-200 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        Validando sua Aplicação...
                      </span>
                    ) : (
                      <>
                        <span>Garantir Minha Vaga na Mentoria</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>

                {/* Trust and Safety Badges */}
                <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-[11px] text-slate-400 border-t border-blue-900/40">
                  <div className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Criptografia SSL 256-Bit</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Garantia de 7 Dias</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CreditCard className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Checkout Seguro</span>
                  </div>
                </div>
              </motion.form>
            ) : (
              /* Success & Checkout Redirect Mockup */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md mx-auto text-center py-6 relative z-10"
              >
                <div className="w-20 h-20 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center text-cyan-300 mx-auto mb-6 shadow-xl shadow-cyan-500/30">
                  <CheckCircle className="w-10 h-10" />
                </div>

                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-2">
                  Aplicação Aprovada com Sucesso
                </span>

                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Parabéns, {formData.nome.split(" ")[0] || "Operador"}!
                </h3>

                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  Seus dados foram validados no sistema prioritário da turma do Caio.
                  Sua vaga está pré-reservada pelos próximos <strong className="text-white">15 minutos</strong>.
                </p>

                {/* Summary Box */}
                <div className="my-6 p-4 rounded-xl bg-blue-950/70 border border-blue-800 text-left text-xs space-y-2 text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Mentoria:</span>
                    <span className="font-bold text-white">Day Trade Método Caio VIP</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">WhatsApp:</span>
                    <span className="font-mono text-cyan-300">{formData.whatsapp}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Status:</span>
                    <span className="text-emerald-400 font-bold">Vaga Reservada</span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/5511999999999?text=Ol%C3%A1%20Caio%2C%20fiz%20minha%20aplica%C3%A7%C3%A3o%20no%20site%20para%20a%20mentoria%20(Nome%3A%20${encodeURIComponent(formData.nome)}%20%7C%20WhatsApp%3A%20${encodeURIComponent(formData.whatsapp)})%20e%20quero%20finalizar%20minha%20matr%C3%ADcula.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl font-black text-sm uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-300 hover:from-cyan-300 hover:to-sky-200 shadow-xl flex items-center justify-center gap-2 transition-all"
                >
                  <span>Prosseguir Para Matrícula no WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs text-slate-400 hover:text-white underline cursor-pointer"
                >
                  Editar dados da aplicação
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>

      </div>
    </section>
  );
}

