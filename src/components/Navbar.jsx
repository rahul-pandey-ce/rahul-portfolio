import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Moon, Sun, Monitor } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Training', href: '#training' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500',
        isScrolled ? 'py-4 bg-background border-b border-white/10 shadow-2xl' : 'py-8 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative group cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="text-2xl font-black tracking-tighter flex items-center gap-1 group">
             <span className="px-4 h-10 rounded-xl bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-300 italic tracking-widest">PORTFOLIO.</span>
          </div>
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-neon-purple to-neon-blue group-hover:w-full transition-all duration-300" />
        </motion.div>

         {/* Desktop Nav */}
         <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-5 glass-card border-white/5 px-6 py-3 bg-white/5 backdrop-blur-lg rounded-full">
               {navLinks.map((link) => (
                 <button
                   key={link.name}
                   onClick={() => handleNavClick(link.href)}
                   className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white transition-all hover:neon-text relative group"
                 >
                   {link.name}
                   <span className="absolute -bottom-1.5 left-0 w-0 h-[1.5px] bg-neon-blue transition-all duration-300 group-hover:w-full" />
                 </button>
               ))}
            </div>
           
           <div className="flex items-center gap-4">
              <a 
                href="https://github.com/rahul-pandey-ce" 
                target="_blank" 
                rel="noreferrer"
                className="w-11 h-11 rounded-full glass-card border-white/5 flex items-center justify-center text-white/50 hover:text-white transition-all"
              >
                 <Github size={20} />
              </a>
              <a 
                href="mailto:rahulpandey03452@gmail.com" 
                className="btn-primary py-2.5 px-6 text-sm font-bold tracking-widest uppercase"
              >
                 Hire Me
              </a>
           </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden w-12 h-12 rounded-xl glass-card flex items-center justify-center text-white/70 hover:text-white transition-colors border-white/5 shadow-xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
           {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-24 left-6 right-6 lg:hidden glass-card p-8 border-white/10 bg-background/95 backdrop-blur-2xl shadow-3xl z-[100] rounded-[2rem]"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-2xl font-black text-white/60 hover:text-white text-left hover:neon-text group flex items-center gap-4 transition-all duration-300"
                >
                  <span className="w-2 h-2 rounded-full bg-neon-purple scale-0 group-hover:scale-100 transition-transform" />
                  {link.name}
                </button>
              ))}
              <div className="h-px w-full bg-white/5 my-4" />
              <div className="flex items-center justify-between">
                 <a 
                   href="mailto:rahulpandey03452@gmail.com" 
                   className="btn-primary w-full py-4 text-sm tracking-[.2em] uppercase font-black mr-4 text-center"
                 >
                    Hire Me
                 </a>
                 <a 
                    href="https://github.com/rahul-pandey-ce" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center text-white shadow-xl"
                 >
                    <Github size={28} />
                 </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
