/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Check, MessageSquare, Info, Zap } from "lucide-react";

const packages = [
  {
    name: "3.5KVA Starter",
    desc: "Perfect for core home backup - TV, Lights, WiFi, Charging",
    inverter: "3.5KVA Hybrid Inverter",
    battery: "2.5kWh Lithium Battery",
    panel: "2x 550W Panels",
    backup: "4-6 Hours",
    price: "Custom Quote",
    popular: false,
    color: "blue"
  },
  {
    name: "5.2KVA Standard",
    desc: "The family favorite for reliable daily power.",
    inverter: "5.2KVA Hybrid Inverter",
    battery: "5kWh Lithium Battery",
    panel: "4x 550W Panels",
    backup: "8-12 Hours",
    price: "Custom Quote",
    popular: true,
    color: "blue"
  },
  {
    name: "8KVA Executive",
    desc: "Power your whole house including borehole & fridges.",
    inverter: "8KVA Hybrid Inverter",
    battery: "10kWh Lithium Battery",
    panel: "8x 550W Panels",
    backup: "Full System",
    price: "Custom Quote",
    popular: false,
    color: "blue"
  },
  {
    name: "12KVA Premium",
    desc: "Industrial strength for large estates or offices.",
    inverter: "12KVA Industrial Inverter",
    battery: "15kWh-20kWh Support",
    panel: "12x 560W Panels",
    backup: "Maximum Reliability",
    price: "Custom Quote",
    popular: false,
    color: "red"
  }
];

export default function Packages() {
  return (
    <section id="packages" className="section-padding bg-slate-50 relative overflow-hidden">
       {/* Background decorative text */}
       <div className="absolute top-0 right-0 text-[200px] font-black text-slate-100 leading-none select-none -z-0 translate-x-1/4 -translate-y-1/4">
        SOLAR
       </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-red-100 text-red-700 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-6 border border-red-200">
            Reliable Energy Packages
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-6">
            Choose Your <span className="text-blue-700">Solar Switch</span> Package
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            We provide custom-tailored solar packages designed to meet the specific needs of Zimbabwean homes and businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 group ${
                pkg.popular 
                  ? "bg-blue-700 text-white shadow-2xl shadow-blue-700/40 scale-105 z-10" 
                  : "bg-white text-slate-900 shadow-xl shadow-slate-200/50 hover:-translate-y-2 border border-slate-100"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 right-4 bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-2xl font-black mb-2 ${pkg.popular ? "text-white" : "text-slate-900"}`}>{pkg.name}</h3>
                <p className={`text-sm ${pkg.popular ? "text-blue-100" : "text-slate-500"} font-medium`}>{pkg.desc}</p>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {[
                  { icon: <Zap size={16} />, label: "Inverter:", val: pkg.inverter },
                  { icon: <Info size={16} />, label: "Battery:", val: pkg.battery },
                  { icon: <Check size={16} />, label: "Panels:", val: pkg.panel },
                  { icon: <Check size={16} />, label: "Backup:", val: pkg.backup },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className={`text-[10px] font-black uppercase tracking-widest ${pkg.popular ? "text-blue-300" : "text-slate-400"} mb-1`}>
                      {item.label}
                    </span>
                    <span className="text-sm font-bold">{item.val}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/10 dark:border-slate-100 mt-auto">
                <a
                  href="#contact"
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-black text-sm transition-all ${
                    pkg.popular
                      ? "bg-white text-blue-700 hover:bg-slate-100"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  Request Quote
                </a>
                <a
                  href="https://wa.me/263779666892"
                  className={`w-full flex items-center justify-center gap-2 mt-3 text-[10px] font-black uppercase tracking-widest group-hover:opacity-100 ${
                    pkg.popular ? "text-blue-200" : "text-slate-400"
                  }`}
                >
                  <MessageSquare size={12} /> WhatsApp Enquiry
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Commercial Box */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-12 dark-glass p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-700 shadow-2xl"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/30">
              <Zap className="text-white" size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-black text-white">Commercial Solar Packages</h3>
              <p className="text-slate-400 font-medium">Scalable solar solutions for offices, farms, and industrial sites across Zimbabwe.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-black transition-all hover:scale-105 active:scale-95 shadow-xl shadow-red-600/20"
          >
            Contact Sales <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ArrowRight({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
}
