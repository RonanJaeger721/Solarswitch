/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { LayoutGrid, Battery, Zap, Sun, Thermometer, Radio } from "lucide-react";

const products = [
  {
    name: "Solar Panels",
    desc: "Tier 1 High-Efficiency Monocrystalline Panels for maximum yield.",
    icon: <Sun className="text-yellow-500" />
  },
  {
    name: "Lithium Batteries",
    desc: "Long-life LifePO4 batteries with 10+ years lifespan.",
    icon: <Battery className="text-blue-500" />
  },
  {
    name: "Pure Sine Inverters",
    desc: "Advanced hybrid inverters with smart monitoring & grid-tie features.",
    icon: <Zap className="text-red-500" />
  },
  {
    name: "Solar Geysers",
    desc: "Reduce electricity bills by heating water directly from the sun.",
    icon: <Thermometer className="text-orange-500" />
  },
  {
    name: "Backup Systems",
    desc: "Essential energy storage for critical systems and load shedding.",
    icon: <LayoutGrid className="text-green-500" />
  },
  {
    name: "Solar Accessories",
    desc: "Cables, breakers, mounting kits, and professional monitoring.",
    icon: <Radio className="text-purple-500" />
  }
];

export default function Products() {
  return (
    <section id="products" className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-6 border border-blue-100">
              Our Products
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-6">
              Quality <span className="text-blue-700">Solar Components</span>
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              We only use and supply premium brands that are proven to withstand the Zimbabwean climate and energy needs.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
             <a href="#contact" className="text-blue-700 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                View Full Catalog <Zap size={18} />
             </a>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                {product.icon}
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">{product.name}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                {product.desc}
              </p>
              <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-blue-700 transition-colors">
                Enquire Now <div className="w-4 h-0.5 bg-current transform origin-left group-hover:scale-x-150 transition-transform"></div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
