/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
             <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-white rounded-sm relative overflow-hidden">
                      <div className="absolute inset-0 bg-red-600 scale-x-50 origin-left"></div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-xl leading-none">
                    SOLAR<span className="text-red-500">SWITCH</span>
                  </span>
                  <span className="text-[10px] font-medium tracking-widest uppercase text-slate-400">
                    Installation
                  </span>
                </div>
             </div>
             <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
               Providing reliable renewable energy solutions and backup power across Zimbabwe. We switch you to the sun.
             </p>
             <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-400 bg-blue-900/40 p-2 rounded-lg border border-blue-900">
               WhatsApp Verified Business
             </div>
          </div>

          <div>
             <h4 className="text-lg font-black mb-8">Solutions</h4>
             <ul className="space-y-4 text-slate-400 text-sm font-medium">
                <li><a href="#packages" className="hover:text-red-500 transition-colors">Residential Solar</a></li>
                <li><a href="#packages" className="hover:text-red-500 transition-colors">Commercial Systems</a></li>
                <li><a href="#products" className="hover:text-red-500 transition-colors">Lithium Batteries</a></li>
                <li><a href="#products" className="hover:text-red-500 transition-colors">Solar Geysers</a></li>
                <li><a href="#products" className="hover:text-red-500 transition-colors">Backup Inverters</a></li>
             </ul>
          </div>

          <div>
             <h4 className="text-lg font-black mb-8">Quick Links</h4>
             <ul className="space-y-4 text-slate-400 text-sm font-medium">
                <li><a href="#about" className="hover:text-red-500 transition-colors">Our Company</a></li>
                <li><a href="#gallery" className="hover:text-red-500 transition-colors">Recent Projects</a></li>
                <li><a href="#process" className="hover:text-red-500 transition-colors">Installation Process</a></li>
                <li><a href="#contact" className="hover:text-red-500 transition-colors">Request Quote</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a></li>
             </ul>
          </div>

          <div>
             <h4 className="text-lg font-black mb-8">Contact Info</h4>
             <ul className="space-y-4 text-slate-400 text-sm font-medium">
                <li className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-blue-500">
                      <Phone size={14} />
                   </div>
                   077 966 6892
                </li>
                <li className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-blue-500">
                      <Mail size={14} />
                   </div>
                   solarswitch@gmail.com
                </li>
                <li className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-blue-500">
                      <MapPin size={14} />
                   </div>
                   16 Belvedere, Harare
                </li>
             </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-[10px] uppercase font-black tracking-widest text-slate-500">
             © 2026 Solar Switch Installation. All Rights Reserved.
           </p>
           <div className="flex gap-6">
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter size={20} /></a>
           </div>
        </div>
      </div>
    </footer>
  );
}

function Phone({ size }: { size: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
}

function Mail({ size }: { size: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>;
}

function MapPin({ size }: { size: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
}

function Facebook({ size }: { size: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
}

function Instagram({ size }: { size: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
}

function Twitter({ size }: { size: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>;
}
