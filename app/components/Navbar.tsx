"use client";

import { useState, useEffect } from "react";
import { TrendingUp, ShieldCheck, ChevronRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "O Mentor", href: "#mentor" },
    { label: "Para Quem É", href: "#publico" },
    { label: "O Método", href: "#metodo" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0B192C] to-[#1E3E62] flex items-center justify-center text-white shadow-md shadow-blue-950/20 group-hover:scale-105 transition-transform duration-200">
              <TrendingUp className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold tracking-tight text-slate-900 text-lg sm:text-xl font-sans">
                  CAIO<span className="text-cyan-500 font-black">.</span>TRADE
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold tracking-wider uppercase bg-blue-50 text-blue-700 border border-blue-200/60">
                  Mentoria VIP
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium -mt-1 hidden sm:block">
                Formação Profissional de Operadores
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-blue-900 transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA & Status Badge */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Poucas Vagas</span>
            </div>

            <a
              href="#aplicacao"
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#0B192C] via-[#1E3E62] to-[#1E40AF] hover:from-[#0F172A] hover:to-[#1D4ED8] shadow-md shadow-blue-900/20 hover:shadow-lg hover:shadow-blue-900/30 active:scale-[0.98] transition-all duration-200 group"
            >
              <span>Aplicar Agora</span>
              <ChevronRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#aplicacao"
              className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-[#0B192C] uppercase tracking-wider"
            >
              Vagas
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 px-6 py-5 shadow-xl"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Navegação Rápida
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Turma 2026 Aberta
                </span>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-bold text-slate-800 hover:text-blue-900 py-1 transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#aplicacao"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 w-full py-3.5 rounded-xl font-bold text-center text-sm uppercase tracking-wider text-white bg-gradient-to-r from-[#0B192C] to-[#1E40AF] shadow-md flex items-center justify-center gap-2"
              >
                <span>Garantir Minha Vaga</span>
                <ChevronRight className="w-4 h-4 text-cyan-400" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

