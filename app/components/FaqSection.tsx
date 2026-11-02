"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HelpCircle,
  Plus,
  Minus,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Preciso de muito capital para começar a operar Day Trade?",
      a: "Não! Um dos maiores erros é achar que precisa de dezenas de milhares de reais para começar. No método do Caio, você treinará no simulador até comprovar sua taxa de acerto e consistência. Quando for para a conta real, começará operando apenas 1 minicontrato (com R$ 500 a R$ 1.000 de margem segura recomendada). O objetivo inicial é dominar o método e a gestão, a escala de capital vem de forma natural.",
    },
    {
      q: "As aulas são gravadas ou haverá encontros ao vivo com o Caio?",
      a: "Você terá o melhor dos dois mundos. Terá acesso imediato à plataforma completa com o método gravado em módulos didáticos e objetivos (passo a passo de tela, configurações e gatilhos). Além disso, participará de encontros ao vivo periódicos e sessões de pregão ao vivo comentadas pelo Caio. Todas as sessões ao vivo ficam gravadas na íntegra para você rever quando quiser.",
    },
    {
      q: "Funciona para quem trabalha o dia todo em horário comercial?",
      a: "Com certeza. As melhores oportunidades do Day Trade no Brasil ocorrem na abertura do pregão (entre 9h e 10h30), ou seja, quem tem de 1 a 2 horas disponíveis pela manhã já consegue executar o método. Se você não tem as manhãs livres, todas as aulas podem ser assistidas no seu tempo e você treina no Replay de Mercado (ferramenta que reproduz qualquer dia de pregão) à noite ou nos fins de semana.",
    },
    {
      q: "Sou iniciante absoluto e nunca abri um gráfico, vou conseguir acompanhar?",
      a: "Sim, sem dúvidas. A formação parte do zero absoluto: contratação de corretora, configuração profissional do Profit, envio de ordens com stop automático e leitura gráfica limpa. Em seguida, avançamos para leitura institucional, psicologia de mercado e execução ao vivo. A linguagem é direta e sem termos complicados desnecessários.",
    },
    {
      q: "Por quanto tempo terei acesso à plataforma e ao suporte?",
      a: "Você terá 1 ano completo (12 meses) de acesso irrestrito à plataforma com todas as atualizações de conteúdo, encontros gravados e participação na comunidade VIP de alunos, além do canal direto de suporte técnico e operacional com a equipe do Caio.",
    },
    {
      q: "Como funciona a Garantia Incondicional de 7 dias?",
      a: "Sua inscrição é 100% livre de risco. Você pode se inscrever, acessar a área de membros, assistir às aulas iniciais e conhecer o método por dentro. Se por qualquer motivo achar que a mentoria não é para você, basta solicitar o reembolso em até 7 dias e devolveremos todo o seu investimento, centavo por centavo, sem burocracia.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider mb-4"
          >
            <HelpCircle className="w-3.5 h-3.5 text-cyan-600" />
            Transparência Total
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight"
          >
            Perguntas Frequentes Sobre a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B192C] to-blue-700">
              Mentoria
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            Esclareça todas as dúvidas antes de preencher a sua aplicação para a próxima turma.
          </motion.p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? "bg-white border-blue-600 shadow-md ring-2 ring-blue-500/10"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-base sm:text-lg font-bold transition-colors ${
                      isOpen ? "text-blue-950" : "text-slate-800"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                      isOpen
                        ? "bg-blue-900 text-cyan-400 rotate-180"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-7 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Support Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">
                Ainda tem alguma dúvida específica?
              </p>
              <p className="text-xs text-slate-500">
                Fale com a equipe de admissão do Caio no WhatsApp.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20tenho%20d%C3%BAvidas%20sobre%20a%20Mentoria%20de%20Day%20Trade%20do%20Caio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors shrink-0"
          >
            <span>Tirar Dúvida no WhatsApp</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}

