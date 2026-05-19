/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { MessageSquare, Calendar, ShieldCheck, Zap } from "lucide-react";

const steps = [
  {
    title: "Consultation",
    desc: "Initial discussion to understand your power needs and budget.",
    icon: <MessageSquare size={24} />,
    color: "bg-blue-600"
  },
  {
    title: "Site Assessment",
    desc: "Our technicians visit your site for roof and electrical layout check.",
    icon: <Calendar size={24} />,
    color: "bg-red-600"
  },
  {
    title: "Recommendation",
    desc: "We provide a tailored solar system design and quote.",
    icon: <ShieldCheck size={24} />,
    color: "bg-blue-700"
  },
  {
    title: "Installation",
    desc: "Professional system setup and handover to you.",
    icon: <Zap size={24} />,
    color: "bg-blue-900"
  }
];

export default function Process() {
  return (
    <section id="process" className="section-padding bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative Energy Wave */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
         <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="white" d="M0,192C240,224,480,160,720,160C960,160,1200,224,1440,192L1440,320L1200,320C960,320,720,320,480,320C240,320,0,320,0,320Z"></path>
         </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-center mb-20">
        <div className="inline-block bg-blue-900 text-blue-300 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-6 border border-blue-800">
          How We Work
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-black mb-6">
          The <span className="text-blue-400">Solar Switch</span> Process
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto font-medium">
          Going solar is simple with our streamlined professional approach. From consultation to power-on, we handle it all.
        </p>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Connector Line Desktop */}
        <div className="hidden lg:block absolute top-[60px] left-0 w-full h-0.5 bg-slate-800"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group text-center"
            >
              <div className={`w-28 h-28 mx-auto rounded-3xl ${step.color} flex items-center justify-center mb-8 shadow-2xl relative z-10 transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-6`}>
                <div className="text-white">
                  {step.icon}
                </div>
                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-white text-slate-900 rounded-full flex items-center justify-center font-black text-sm shadow-xl">
                  0{i + 1}
                </div>
              </div>
              <h3 className="text-2xl font-black mb-4">{step.title}</h3>
              <p className="text-slate-400 font-medium text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
