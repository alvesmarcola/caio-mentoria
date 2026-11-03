"use client";

import { useSyncExternalStore } from "react";
import { TrendingUp, ShieldAlert } from "lucide-react";

const emptySubscribe = () => () => {};
const getSnapshot = () => new Date().getFullYear();
const getServerSnapshot = () => 2025;

export function Footer() {
  const year = useSyncExternalStore(emptySubscribe, getSnapshot, getServerSnapshot);
  return (
    <footer className="bg-[#081220] text-slate-400 py-12 md:py-16 border-t border-blue-950 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-blue-900/40 text-center md:text-left">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0B192C] to-[#1E3E62] border border-blue-800 flex items-center justify-center text-cyan-400 shadow-sm">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <span className="font-extrabold tracking-tight text-white text-base">
                CAIO<span className="text-cyan-400">.</span>TRADE
              </span>
              <p className="text-[11px] text-slate-500">
                Mentoria Profissional de Operadores do Mercado Financeiro
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <a href="#mentor" className="hover:text-cyan-400 transition-colors">
              O Mentor
            </a>
            <a href="#publico" className="hover:text-cyan-400 transition-colors">
              Para Quem É
            </a>
            <a href="#metodo" className="hover:text-cyan-400 transition-colors">
              O Método
            </a>
            <a href="#faq" className="hover:text-cyan-400 transition-colors">
              Dúvidas Frequentes
            </a>
            <a href="#aplicacao" className="text-cyan-400 hover:text-cyan-300 font-bold transition-colors">
              Garantir Vaga
            </a>
          </div>
        </div>

        {/* Regulatory Financial Disclaimer (CVM / Day Trade Compliance) */}
        <div className="py-8 space-y-3 text-[11px] text-slate-500 leading-relaxed">
          <div className="flex items-center gap-2 text-slate-400 font-bold uppercase tracking-wider text-[10px]">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-500" />
            <span>Aviso Legal de Risco & Isenção de Responsabilidade:</span>
          </div>
          <p>
            As operações no mercado financeiro, especialmente na modalidade Day Trade (como Mini-Índice, Mini-Dólar e Ações), envolvem risco significativo de perda de capital e não são adequadas para todos os investidores. Resultados passados divulgados por alunos ou pelo mentor não são garantia de rentabilidade futura.
          </p>
          <p>
            Este treinamento tem caráter estritamente educacional e de formação técnica, não configurando recomendação de compra, venda ou consultoria de valores mobiliários (conforme instrução CVM). A gestão do capital e a tomada de decisão em ambiente de pregão real são de responsabilidade exclusiva do operador.
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-blue-900/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-slate-500">
          <p>
            © {year} Mentoria Caio Trade. Todos os direitos reservados.
          </p>
          <p>
            Desenvolvido para alta conversão e excelência operacional.
          </p>
        </div>

      </div>
    </footer>
  );
}

