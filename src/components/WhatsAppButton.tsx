/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/263779666892"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-shadow hover:shadow-[#25D366]/40 group"
    >
      <MessageCircle size={32} fill="currentColor" />
      <span className="absolute right-full mr-4 bg-white text-slate-900 border border-slate-100 py-2 px-4 rounded-xl text-xs font-black uppercase tracking-widest pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity shadow-xl whitespace-nowrap">
        Chat With Us
      </span>
      {/* Ripple Effect */}
      <span className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20 -z-10"></span>
    </motion.a>
  );
}
