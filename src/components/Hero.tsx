/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Zap, MessageCircle, ArrowRight, ShieldCheck, Award, CheckCircle } from "lucide-react";

interface HeroProps {
  heroImage: string;
}

export default function Hero({ heroImage }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-50">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Solar Installation"
          className="w-full h-full object-cover object-center scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-6 border border-blue-200"
          >
            <ShieldCheck size={14} /> WhatsApp Verified Business
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-black text-slate-900 leading-tight mb-6"
          >
            Power Your Home With <span className="text-blue-700">Reliable</span> Solar Energy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-600 mb-10 font-medium leading-relaxed"
          >
            Professional solar installations, inverter systems, and backup power solutions for homes and businesses across Zimbabwe. Say goodbye to load shedding today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a
              href="#contact"
              className="group flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl shadow-red-600/30 transition-all hover:-translate-y-1"
            >
              Request a Quote <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/263779666892"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all hover:-translate-y-1"
            >
              <MessageCircle fill="currentColor" size={20} className="text-white" /> Chat on WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-8 border-t border-slate-200"
          >
            {[
              { icon: <Award size={18} />, text: "Professional Installations" },
              { icon: <Zap size={18} />, text: "Solar Packages Available" },
              { icon: <CheckCircle size={18} />, text: "Zimbabwe-Based" },
              { icon: <ShieldCheck size={18} />, text: "Verified Quality" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-slate-500 font-bold text-xs uppercase tracking-wider">
                <span className="text-blue-600">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Animated Energy Particles or Waves could go here */}
      <div className="absolute right-0 bottom-0 w-1/3 h-full pointer-events-none opacity-20 lg:opacity-50 hidden lg:block overflow-hidden">
         <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[120px]"
         />
      </div>
    </section>
  );
}
