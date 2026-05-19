/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X, Phone, CheckCircle } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const opacity = useTransform(scrollY, [0, 50], [0.8, 1]);
  const blur = useTransform(scrollY, [0, 50], [0, 12]);
  const y = useTransform(scrollY, [0, 50], [0, -2]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Packages", href: "#packages" },
    { name: "Products", href: "#products" },
    { name: "How it works", href: "#process" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      style={{ opacity, backdropFilter: `blur(${blur}px)`, y }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 border-b border-gray-200 py-3 shadow-sm" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
             <div className="w-6 h-6 border-2 border-white rounded-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-red-600 scale-x-50 origin-left"></div>
             </div>
          </div>
          <div className="flex flex-col">
            <span className={`font-display font-bold text-xl leading-none ${scrolled ? "text-blue-900" : "text-white sm:text-blue-900"}`}>
              SOLAR<span className="text-red-600">SWITCH</span>
            </span>
            <span className={`text-[10px] font-medium tracking-widest uppercase ${scrolled ? "text-gray-500" : "text-blue-200 sm:text-gray-500"}`}>
              Installation
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold hover:text-red-600 transition-colors ${
                scrolled ? "text-slate-700" : "text-slate-800"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-red-600/20 transition-all hover:scale-105 active:scale-95"
          >
            Request Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-slate-900 hover:bg-gray-100" : "text-slate-900"
          }`}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-white border-b border-gray-100"
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold text-slate-800 hover:text-blue-600 border-b border-gray-50 pb-2"
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-4 pt-4">
            <a
              href="tel:0779666892"
              className="flex items-center justify-center gap-2 text-blue-700 font-bold"
            >
              <Phone size={18} /> 077 966 6892
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-red-600 text-white py-4 rounded-xl text-center font-bold text-lg shadow-xl shadow-red-600/20"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
