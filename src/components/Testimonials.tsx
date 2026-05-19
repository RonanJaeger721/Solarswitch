/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Tadiwa Munhenga",
    location: "Borrowdale, Harare",
    text: "Solar Switch Installation transformed our home. Load shedding is now a thing of the past. Their work is so neat and the system works perfectly even on cloudy days.",
    rating: 5
  },
  {
    name: "Faith Chidawu",
    location: "Westgate",
    text: "I was worried about the cost but they designed a standard 5.2KVA package that fits my budget perfectly. Very professional technician team!",
    rating: 5
  },
  {
    name: "Farai Matombo",
    location: "Msasa Industrial",
    text: "We installed an industrial 12KVA system for our office. The reliability is unmatched. Great backup support as well.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4">
          <div className="max-w-2xl">
            <div className="inline-block bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-6">
              Client Reviews
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-6">
              Trusted By <span className="text-blue-700">Zim Families</span>
            </h2>
          </div>
          <div className="flex gap-2 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} fill="#FFD700" className="text-yellow-400" size={24} />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-50 p-10 rounded-[40px] relative hover:bg-slate-900 hover:text-white transition-all duration-500 group border border-slate-100"
            >
              <div className="absolute top-8 right-8 text-blue-600 group-hover:text-blue-300 transition-colors">
                <Quote size={40} className="opacity-20" />
              </div>
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-lg font-medium leading-relaxed mb-8 italic">
                "{t.text}"
              </p>
              <div className="pt-8 border-t border-slate-200 group-hover:border-slate-800 transition-colors">
                <h4 className="font-black text-slate-900 group-hover:text-white">{t.name}</h4>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-500">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
