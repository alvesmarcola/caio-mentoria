"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingWhatsapp() {
  return (
    <motion.a
      href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20a%20Mentoria%20de%20Day%20Trade%20do%20Caio."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 px-4 py-3 rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-950/20 hover:bg-emerald-600 transition-colors group cursor-pointer"
    >
      <div className="relative">
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-300 animate-ping" />
      </div>
      <div className="hidden sm:flex flex-col text-left">
        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-100">
          Dúvidas?
        </span>
        <span className="text-xs font-black tracking-tight leading-none text-white">
          Fale com a Equipe
        </span>
      </div>
    </motion.a>
  );
}

