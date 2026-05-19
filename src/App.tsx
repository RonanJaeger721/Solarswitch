/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Packages from "./components/Packages.tsx";
import Products from "./components/Products.tsx";
import Process from "./components/Process.tsx";
import Gallery from "./components/Gallery.tsx";
import Testimonials from "./components/Testimonials.tsx";
import FAQ from "./components/FAQ.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";
import WhatsAppButton from "./components/WhatsAppButton.tsx";

// Image constants from generation
const HERO_IMAGE = "/src/assets/images/hero_solar_harare_1779182221953.png";
const INVERTER_IMAGE = "/src/assets/images/solar_inverter_setup_1779182237612.png";
const TECHNICIAN_IMAGE = "/src/assets/images/technician_installation_1779182253862.png";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-600 selection:text-white">
      <Navbar />
      <Hero heroImage={HERO_IMAGE} />
      <About aboutImage={TECHNICIAN_IMAGE} />
      <Packages />
      <Products />
      <Process />
      <Gallery 
        technicianImg={TECHNICIAN_IMAGE} 
        inverterImg={INVERTER_IMAGE} 
        heroImg={HERO_IMAGE} 
      />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

