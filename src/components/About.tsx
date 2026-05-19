/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { CheckCircle2, MapPin, Zap, UserCheck } from "lucide-react";

interface AboutProps {
  aboutImage: string;
}

export default function About({ aboutImage }: AboutProps) {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="flex-1 relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl z-10">
            <img
              src={aboutImage}
              alt="Installation Process"
              className="w-full aspect-[4/5] object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Experience Badge */}
            <div className="absolute bottom-10 left-10 dark-glass p-8 text-white rounded-2xl">
              <div className="text-4xl font-black mb-1">500+</div>
              <div className="text-xs font-bold uppercase tracking-widest text-blue-400">Installations Done</div>
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl -z-0"></div>
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-red-600/10 rounded-full blur-3xl -z-0"></div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="flex-1"
        >
          <div className="inline-block bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-6">
            Our Story
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-8 leading-tight">
            Zimbabwe's Trusted <span className="text-blue-700">Solar Partner</span> Based in Harare
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
            Solar Switch Installation provides reliable solar energy systems designed to help homes and businesses reduce power cuts and gain true energy independence. Started with a vision to light up every household in Harare and beyond.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {[
              { icon: <MapPin className="text-red-500" />, title: "Based in Harare", desc: "Serving Zimbabwe nationwide." },
              { icon: <Zap className="text-blue-600" />, title: "Reliable Backup", desc: "Systems that never fail." },
              { icon: <UserCheck className="text-blue-600" />, title: "Expert Team", desc: "Certified solar technicians." },
              { icon: <CheckCircle2 className="text-blue-600" />, title: "Quality Gear", desc: "Tier 1 solar products only." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{item.title}</h4>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl shadow-blue-700/20"
          >
            Learn More About Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
