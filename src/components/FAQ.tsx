/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What solar packages do you offer?",
    a: "We offer a range of packages starting from 3.5KVA systems for basic home backup, up to 12KVA and large commercial systems. Each package can be customized with different battery and panel capacities."
  },
  {
    q: "What size system do I need for my home?",
    a: "This depends on your daily power consumption (appliances like fridges, borehole pumps, stove, etc.). Our site assessment helps determine the exact size that fits your needs."
  },
  {
    q: "Do you install solar systems nationwide?",
    a: "Yes, while we are based in Belvedere, Harare, we travel nationwide across Zimbabwe to handle solar installations for residential and commercial customers."
  },
  {
    q: "Do you offer commercial solar solutions?",
    a: "Absolutely. We design and install large-scale solar systems for offices, schools, farms, and industrial warehouses to ensure maximum business continuity."
  },
  {
    q: "How long does a standard installation take?",
    a: "Most residential residential installations (3.5KVA to 8KVA) are completed within 1 to 2 business days after site assessment and equipment delivery."
  },
  {
    q: "Do you sell inverters and batteries separately?",
    a: "Yes, we supply premium solar components including Tier 1 panels, lithium batteries, and smart hybrid inverters to customers who prefer DIY or separate upgrades."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-slate-50 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-6">
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-6">
            Common <span className="text-blue-700">Questions</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            Everything you need to know about switching to solar energy with us.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`rounded-3xl overflow-hidden transition-all duration-300 border ${
                openIndex === i ? "bg-white border-blue-200 shadow-xl shadow-blue-900/5 scale-[1.02]" : "bg-white border-slate-100 shadow-sm"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-8 text-left transition-colors"
              >
                <span className={`text-lg font-black pr-8 ${openIndex === i ? "text-blue-700" : "text-slate-900"}`}>
                  {faq.q}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  openIndex === i ? "bg-blue-700 text-white rotate-180" : "bg-slate-100 text-slate-500"
                }`}>
                  <ChevronDown size={18} />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-slate-500 font-medium leading-relaxed border-t border-slate-50 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
