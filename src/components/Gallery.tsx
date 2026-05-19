/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Plus, Maximize } from "lucide-react";

interface GalleryProps {
  technicianImg: string;
  inverterImg: string;
  heroImg: string;
}

export default function Gallery({ technicianImg, inverterImg, heroImg }: GalleryProps) {
  const images = [
    { src: heroImg, title: "Modern Residential Roof", size: "span 2" },
    { src: inverterImg, title: "Luxury Inverter Setup", size: "span 1" },
    { src: technicianImg, title: "Expert Panel Mounting", size: "span 2" },
    { src: "https://picsum.photos/seed/solar1/800/600", title: "Commercial Warehouse Project", size: "span 1" },
    { src: "https://picsum.photos/seed/solar2/800/1000", title: "Smart Battery Wall", size: "span 2" },
    { src: "https://picsum.photos/seed/solar3/800/600", title: "Ground Mount System", size: "span 1" },
  ];

  return (
    <section id="gallery" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-6">
            Our Work
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-6">
            Installation <span className="text-blue-700">Gallery</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            Take a look at our recent solar projects across Zimbabwe. We pride ourselves on neatness and performance.
          </p>
        </div>

        <div className="masonry-gallery">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="masonry-item group relative overflow-hidden rounded-3xl"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                 <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Maximize className="text-white" size={20} />
                 </div>
                 <h4 className="text-white font-bold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {img.title}
                 </h4>
                 <p className="text-white/60 text-[10px] font-black uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    Solar Switch Quality
                 </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
