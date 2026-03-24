import React, { useState, useEffect, Suspense } from 'react';
import Lenis from 'lenis';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Training from './components/Training';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import ScrollIndicator from './components/ScrollIndicator';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Smoooth Scrolling Setup
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Simulated Loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative text-white selection:bg-neon-cyan/30">
      <Preloader isLoading={isLoading} />
      <ScrollIndicator />
      <CustomCursor />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Training />
        <Certifications />
        <Contact />
      </main>

      <footer className="py-20 border-t border-white/5 relative bg-[#030014]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
            <div className="md:col-span-2 space-y-6">
              <div className="text-3xl font-black neon-text italic uppercase">Rahul Pandey.</div>
              <p className="text-white/40 max-w-sm">Designing digital excellence and crafting immersive web experiences for the future.</p>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                 <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-neon-blue">🔥</div>
                 <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-neon-purple">🚀</div>
                 <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-neon-cyan">⚡</div>
              </div>
            </div>
            
            <div className="space-y-6">
               <h4 className="text-xs uppercase font-bold tracking-widest text-white/20">Navigation</h4>
               <ul className="space-y-4 text-sm font-bold text-white/50">
                  <li className="hover:text-white transition-colors cursor-pointer" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>About</li>
                  <li className="hover:text-white transition-colors cursor-pointer" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>Projects</li>
                  <li className="hover:text-white transition-colors cursor-pointer" onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}>Skills</li>
                  <li className="hover:text-white transition-colors cursor-pointer" onClick={() => document.getElementById('training')?.scrollIntoView({ behavior: 'smooth' })}>Training</li>
                  <li className="hover:text-white transition-colors cursor-pointer" onClick={() => document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' })}>Certifications</li>
               </ul>
            </div>

            <div className="space-y-6">
               <h4 className="text-xs uppercase font-bold tracking-widest text-white/20">Information</h4>
               <ul className="space-y-4 text-sm font-bold text-white/50">
                  <li className="hover:text-white transition-colors cursor-pointer">Privacy Policy</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Terms of Service</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Newsletter</li>
               </ul>
            </div>
          </div>
          
          <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
             <div className="text-xs font-bold text-white/20 tracking-wider">
               © {new Date().getFullYear()} RAHUL PORTFOLIO. ALL RIGHTS RESERVED.
             </div>
             <div className="text-[10px] font-black tracking-[.3em] uppercase neon-text flex items-center gap-2">
                Designed with <span className="animate-pulse text-red-500">❤️</span> for the web
             </div>
          </div>
        </div>
        
        {/* Subtle Bottom Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-neon-purple/50 to-transparent blur-sm shadow-[0_0_20px_rgba(139,92,246,0.3)]" />
      </footer>

      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
         <div className="absolute top-[10%] right-[10%] w-[800px] h-[800px] bg-neon-purple/5 blur-[120px] rounded-full animate-float opacity-30" />
         <div className="absolute bottom-[20%] left-[5%] w-[600px] h-[600px] bg-neon-blue/5 blur-[120px] rounded-full animate-float opacity-30 [animation-delay:-2s]" />
         <div className="absolute top-[40%] left-[30%] w-[700px] h-[700px] bg-neon-cyan/5 blur-[120px] rounded-full animate-float opacity-20 [animation-delay:-4s]" />
      </div>
    </div>
  );
};

export default App;
