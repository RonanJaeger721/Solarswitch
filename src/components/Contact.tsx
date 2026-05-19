/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Send, Phone, Mail, MapPin, Facebook, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <div className="inline-block bg-red-100 text-red-700 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-6 border border-red-200">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-8 leading-tight">
            Ready To <span className="text-blue-700">Switch</span> To Solar?
          </h2>
          <p className="text-lg text-slate-600 mb-10 font-medium leading-relaxed">
            Contact us today for a free site assessment and customized solar solution tailored to your needs. We are based in Harare and serve the whole of Zimbabwe.
          </p>

          <div className="space-y-8">
            {[
              { icon: <Phone className="text-blue-600" />, title: "Call/WhatsApp", val: "077 966 6892", href: "tel:0779666892" },
              { icon: <Mail className="text-blue-600" />, title: "Email Address", val: "solarswitch@gmail.com", href: "mailto:solarswitch@gmail.com" },
              { icon: <MapPin className="text-red-500" />, title: "Our Location", val: "16 Belvedere, Harare, Zimbabwe", href: "#" },
              { icon: <Facebook className="text-blue-800" />, title: "Facebook", val: "Solar Switch Installation", href: "https://facebook.com" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="flex items-center gap-6 group hover:translate-x-2 transition-transform duration-300"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5">{item.title}</h4>
                  <p className="font-bold text-slate-900">{item.val}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 p-8 bg-blue-700 rounded-3xl text-white flex items-center justify-between shadow-2xl shadow-blue-700/30">
            <div>
               <h4 className="font-black text-xl mb-1">Emergency Support?</h4>
               <p className="text-blue-100 text-sm">We provide fast assistance for system issues.</p>
            </div>
            <a href="https://wa.me/263779666892" className="bg-white text-blue-700 p-4 rounded-2xl hover:scale-110 shadow-xl transition-transform">
               <MessageCircle fill="currentColor" />
            </a>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="flex-1 bg-slate-50 p-8 md:p-12 rounded-[40px] border border-slate-100 shadow-2xl relative"
        >
          {/* Energy Circle */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600 opacity-5 blur-[80px]"></div>
          
          <h3 className="text-2xl font-black text-slate-900 mb-8">Request a Quote</h3>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-1">Full Name</label>
                <input type="text" placeholder="John Doe" className="bg-white border border-slate-200 rounded-2xl p-4 focus:ring-2 focus:ring-blue-600 outline-none transition-all font-medium" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-1">Phone Number</label>
                <input type="text" placeholder="077..." className="bg-white border border-slate-200 rounded-2xl p-4 focus:ring-2 focus:ring-blue-600 outline-none transition-all font-medium" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-1">Email Address</label>
              <input type="email" placeholder="john@example.com" className="bg-white border border-slate-200 rounded-2xl p-4 focus:ring-2 focus:ring-blue-600 outline-none transition-all font-medium" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-1">Solar System Interest</label>
              <select className="bg-white border border-slate-200 rounded-2xl p-4 focus:ring-2 focus:ring-blue-600 outline-none transition-all font-medium appearance-none">
                <option>3.5KVA Starter Package</option>
                <option>5.2KVA Standard Package</option>
                <option>8KVA Executive Package</option>
                <option>Commercial Solutions</option>
                <option>Maintenance & Repair</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-1">Message</label>
              <textarea placeholder="Tell us about your power needs..." rows={4} className="bg-white border border-slate-200 rounded-2xl p-4 focus:ring-2 focus:ring-blue-600 outline-none transition-all font-medium resize-none"></textarea>
            </div>
            <button className="w-full bg-red-600 hover:bg-red-700 text-white py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-red-600/30 flex items-center justify-center gap-3 active:scale-95">
              Send Request <Send size={20} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
